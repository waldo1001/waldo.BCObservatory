/**
 * `fetched` for git-hosted pages (Learn docs, BCQuality guidelines): deterministic, no quota.
 *
 * Reads the page at its blob id from the blobless mirror (prefetched in batches, see prefetchBlobs) and records its
 * metadata on the item: Learn title, description, ms.date, ms.topic, ms.search.form (BC page/report ids: the
 * docs-to-objects bridge for the code pillar), keywords, ai-usage, word count, and the identifiers the page documents
 * in code spans (D94, the Learn search records' tags). The page text itself is not stored (D01 overlay: Learn stays
 * canonical; extraction reads the blob again). backfillIdentifiers gives items fetched before D94 their identifiers.
 */
import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import { resolve } from "node:path";
import matter from "gray-matter";
import { git } from "../lib/git.js";
import { BCQ_META_RULE, type Manifest, type ManifestItem, type Pillar } from "../lib/manifest.js";
import type { StageHandler } from "../orchestrator/execute.js";

const BATCH = 1000;

/** Fetch every blob the mirror does not have yet, in batches, so the stage reads locally. */
export async function prefetchBlobs(mirror: string, oids: string[]): Promise<number> {
  if (!oids.length) return 0;
  const check = await gitStdin(["cat-file", "--batch-check"], mirror, oids.join("\n") + "\n", { GIT_NO_LAZY_FETCH: "1" });
  const missing = check.split("\n").filter((l) => l.endsWith(" missing")).map((l) => l.split(" ")[0]);
  for (let i = 0; i < missing.length; i += BATCH) {
    await gitStdin(["fetch", "-q", "--no-tags", "--no-write-fetch-head", "--recurse-submodules=no", "--filter=blob:none", "--stdin", "origin"], mirror, missing.slice(i, i + BATCH).join("\n") + "\n");
  }
  return missing.length;
}

function gitStdin(args: string[], cwd: string, input: string, env: Record<string, string> = {}): Promise<string> {
  return new Promise((res, rej) => {
    import("node:child_process").then(({ spawn }) => {
      const c = spawn("git", args, { cwd, env: { ...process.env, GIT_TERMINAL_PROMPT: "0", ...env } });
      let out = "", err = "";
      c.stdout.on("data", (d) => (out += d));
      c.stderr.on("data", (d) => (err += d));
      c.on("error", rej);
      c.on("close", (code) => (code === 0 ? res(out) : rej(new Error(`git ${args[0]} failed: ${err.trim().slice(0, 300)}`))));
      c.stdin.end(input);
    }, rej);
  });
}

export interface SearchForm { raw: string; id: number | null; kind: string | null }
/** `312, 313`, `118_Primary`, `Report_6627_Primary` → ids with an optional kind. */
export function parseSearchForm(v: unknown): SearchForm[] {
  const tokens = (Array.isArray(v) ? v : String(v ?? "").split(/[,;]/)).map((t) => String(t).trim()).filter(Boolean);
  return tokens.map((raw) => {
    const id = raw.match(/\d+/)?.[0];
    const kind = raw.replace(/\d+/g, "").replace(/_+/g, " ").trim() || null;
    return { raw, id: id ? Number(id) : null, kind };
  });
}

/** ms.date is MM/DD/YYYY on Learn; js-yaml may already have made a Date of an ISO value. */
export function parseMsDate(v: unknown): string | null {
  if (v instanceof Date && !isNaN(v.getTime())) return v.toISOString().slice(0, 10);
  const s = String(v ?? "").trim();
  const us = s.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (us) return `${us[3]}-${us[1].padStart(2, "0")}-${us[2].padStart(2, "0")}`;
  return /^\d{4}-\d{2}-\d{2}/.test(s) ? s.slice(0, 10) : null;
}

/**
 * At most this many identifiers per page (D94). Measured on 4,365 local Learn pages on 2026-10-12: p50 0, p99 8, five
 * pages above 20, two above 32; only ui-fonts.md (153 font names) passes 40. 20 would cut devenv-json-files.md's 23
 * app.json properties, includeSourceInSymbolFile among them.
 */
export const IDENTIFIERS_MAX = 40;
/**
 * Identifier rule 2 (D95): the rule version every item's identifiers are written under. Rule 1 (D94) was code spans of
 * camelCase or PascalCase words; rule 2 adds the coded ids (`RT0005`) of single-backtick spans, bold spans and table
 * cells. The backfill takes items whose `meta.identifiers_rule` is missing or lower; raise this when the rule changes again.
 */
export const IDENTIFIERS_RULE = 2;
const SPAN = /(?<!`)`([^`\n]+)`(?!`)/g;
const BOLD = /\*\*([^*\n]+)\*\*/g;
/** camelCase (a lowercase start with a capital inside) or PascalCase with a capital inside: allowDebugging, SetRange, NonDebuggable. */
export const isIdentifier = (s: string) => /^[A-Za-z][A-Za-z0-9]*$/.test(s) && (/^[a-z]/.test(s) ? /[A-Z]/.test(s) : /[a-z]/.test(s) && /^.+[A-Z]/.test(s));
/**
 * A coded id (D95): two or three capitals and four digits, the shape of telemetry event ids (RT0005, LC0234), analyzer
 * ids (AS0020, PTE0001) and compiler diagnostics (AL0281). Kept in sync with `isCodedId` in packages/search/src/normalize.ts
 * (the search package cannot import pipeline code).
 */
export const isCodedId = (s: string) => /^[A-Z]{2,3}\d{4}$/.test(s);
const CODED_WORD = /(?<![A-Za-z0-9])[A-Z]{2,3}\d{4}(?![A-Za-z0-9])/g;
/**
 * The identifiers a Learn page documents, outside fenced code blocks, in order of first appearance, deduplicated
 * case-insensitively (Learn spells includeSourceInSymbolFile two ways on one page), at most IDENTIFIERS_MAX.
 * Rule 2 (D95): first the single-backtick code spans that hold one camelCase or PascalCase word or a coded id, then
 * the coded ids of bold spans (`**RT0005**`, whole span) and of table cells (lines starting with `|`, whole words), so
 * a prose mention of another event's id does not count. Deterministic: the same blob, the same list.
 */
export function pageIdentifiers(body: string): string[] {
  const text = body.replace(/^[ \t]*(```|~~~)[\s\S]*?^[ \t]*\1/gm, " ");
  const seen = new Set<string>(), out: string[] = [];
  const add = (s: string) => {
    if (seen.has(s.toLowerCase())) return true;
    seen.add(s.toLowerCase());
    out.push(s);
    return out.length < IDENTIFIERS_MAX;
  };
  for (const m of text.matchAll(SPAN)) {
    const s = m[1].trim();
    if ((isIdentifier(s) || isCodedId(s)) && !add(s)) return out;
  }
  for (const m of text.matchAll(BOLD)) {
    const s = m[1].trim();
    if (isCodedId(s) && !add(s)) return out;
  }
  for (const line of text.split("\n")) {
    if (!line.trimStart().startsWith("|")) continue;
    for (const cell of line.split("|")) for (const w of cell.matchAll(CODED_WORD)) if (!add(w[0])) return out;
  }
  return out;
}

/** D126: a BCQuality rule's or review skill's own frontmatter, and the summary the page and the search record show. */
export interface BcqMeta {
  /** frontmatter `domain`; null on skills */
  domain: string | null;
  /** frontmatter `keywords`, at most 20 */
  keywords: string[];
  /** `bc-version`, e.g. ["all"] or [">=24"] */
  bc_version: string[];
  technologies: string[]; countries: string[]; application_area: string[];
  /** "skill" when the path has /skills/ or frontmatter `kind` is set */
  kind: "rule" | "skill";
  /** a rule: the first paragraph under `## Description`, plain, cut at a sentence end within SUMMARY_MAX; a skill: `description` */
  summary: string | null;
}
export interface PageMeta {
  title: string | null; description: string | null; ms_date: string | null; ms_topic: string | null;
  search_form: SearchForm[]; keywords: string[]; ai_usage: string | null; words: number; h2: number; identifiers: string[];
  bcq?: BcqMeta;
}
export { BCQ_META_RULE } from "../lib/manifest.js";

/** BCQuality summaries are cut at the last sentence end at or before this many characters (D126). */
export const SUMMARY_MAX = 300;
const list = (v: unknown, max = 20) => (Array.isArray(v) ? v : v == null || v === "" ? [] : [v]).map((x) => String(x).trim()).filter(Boolean).slice(0, max);
/** Markdown links reduced to their text, code spans to their content, whitespace collapsed. */
export const plainMarkdown = (s: string) => s.replace(/!?\[([^\]]*)\]\([^)]*\)/g, "$1").replace(/`+([^`]*)`+/g, "$1").replace(/\*\*([^*]*)\*\*/g, "$1").replace(/\s+/g, " ").trim();
/** The text up to its last sentence end (. ! ? and any closing quote or bracket) at or before `max`; a word cut with an ellipsis when there is none. */
export function cutAtSentence(s: string, max = SUMMARY_MAX): string {
  if (s.length <= max) return s;
  let end = -1;
  for (const m of s.matchAll(/[.!?]["'”’)\]]*(?=\s|$)/g)) if (m.index! + m[0].length <= max) end = m.index! + m[0].length;
  if (end > 0) return s.slice(0, end);
  const cut = s.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(" ") > 0 ? cut.lastIndexOf(" ") : cut.length)}…`;
}
function descriptionSummary(body: string): string | null {
  const text = body.replace(/^[ \t]*(```|~~~)[\s\S]*?^[ \t]*\1/gm, " ");
  const sec = text.split(/^##\s+Description\s*$/m)[1];
  if (sec === undefined) return null;
  const para = sec.split(/^#{1,6}\s/m)[0].split(/\n\s*\n/).map((p) => p.trim()).find(Boolean);
  return para ? cutAtSentence(plainMarkdown(para)) || null : null;
}
function bcqMeta(fm: Record<string, any>, body: string, path?: string): BcqMeta | undefined {
  if (!("bc-version" in fm) && !("domain" in fm)) return undefined;
  const kind = (path ?? "").includes("/skills/") || fm.kind != null ? "skill" : "rule";
  const str = (v: unknown) => (typeof v === "string" && v.trim() ? v.trim() : null);
  return {
    domain: kind === "skill" ? null : str(fm.domain), keywords: list(fm.keywords), bc_version: list(fm["bc-version"]),
    technologies: list(fm.technologies), countries: list(fm.countries), application_area: list(fm["application-area"]), kind,
    summary: kind === "skill" ? str(fm.description) : descriptionSummary(body),
  };
}

/** A git page's metadata; `path` (the repo path) tells a BCQuality review skill from a rule (D126). */
export function parsePage(text: string, path?: string): PageMeta {
  let fm: Record<string, any> = {}, body = text;
  try { const m = matter(text); fm = m.data; body = m.content; } catch { /* malformed frontmatter: body only */ }
  const h1 = body.match(/^#\s+(.+)$/m)?.[1]?.trim() ?? null;
  const str = (v: unknown) => (typeof v === "string" && v.trim() ? v.trim() : null);
  const bcq = bcqMeta(fm, body, path);
  return {
    title: str(fm.title) ?? h1, description: str(fm.description), ms_date: parseMsDate(fm["ms.date"]), ms_topic: str(fm["ms.topic"]),
    search_form: parseSearchForm(fm["ms.search.form"]),
    keywords: String(fm["ms.search.keywords"] ?? "").split(",").map((k) => k.trim()).filter(Boolean).slice(0, 20),
    ai_usage: str(fm["ai-usage"]),
    words: body.replace(/```[\s\S]*?```/g, " ").split(/\s+/).filter((w) => /\w/.test(w)).length,
    h2: (body.match(/^##\s/gm) ?? []).length,
    identifiers: pageIdentifiers(body),
    ...(bcq ? { bcq } : {}),
  };
}

export const mirrorFor = (mirrorsDir: string, item: Pick<ManifestItem, "source">) => resolve(mirrorsDir, `${item.source}.git`);

export function gitPageFetched(): StageHandler {
  return async (item, ctx) => {
    const blob = item.input_hash;
    if (!blob) throw new Error("no blob id (input_hash) on item");
    const text = await git(["cat-file", "-p", blob], mirrorFor(ctx.mirrorsDir, item));
    const m = parsePage(text, typeof item.meta?.path === "string" ? item.meta.path : undefined);
    const meta: Record<string, unknown> = { description: m.description, ms_date: m.ms_date, ms_topic: m.ms_topic, search_form: m.search_form, keywords: m.keywords, ai_usage: m.ai_usage, words: m.words, identifiers: m.identifiers, identifiers_rule: IDENTIFIERS_RULE };
    // D126: a BCQuality rule's facets; its summary is the description (the leak gate's official text), its keywords the keywords
    if (item.pillar === "guidelines") Object.assign(meta, { ...(m.bcq ? { bcq: m.bcq, description: m.bcq.summary, keywords: m.bcq.keywords } : {}), bcq_rule: BCQ_META_RULE });
    return {
      output_hash: blob,
      patch: { ...(m.title ? { title: m.title } : {}), meta },
      data: { blob, words: m.words, forms: m.search_form.length },
    };
  };
}

/**
 * Blobs read from a mirror in one `git cat-file --batch`, by id; a blob the mirror does not hold is null. Never fetches
 * lazily (GIT_NO_LAZY_FETCH): a missing blob costs nothing here, prefetchBlobs is the one place that fetches.
 */
export function readBlobs(mirror: string, oids: string[]): Promise<Map<string, string | null>> {
  return new Promise((res, rej) => {
    const c = spawn("git", ["cat-file", "--batch"], { cwd: mirror, env: { ...process.env, GIT_TERMINAL_PROMPT: "0", GIT_NO_LAZY_FETCH: "1" } });
    const chunks: Buffer[] = [];
    let err = "";
    c.stdout.on("data", (d: Buffer) => chunks.push(d));
    c.stderr.on("data", (d) => (err += d));
    c.on("error", rej);
    c.on("close", (code) => {
      if (code !== 0) { rej(new Error(`git cat-file failed: ${err.trim().slice(0, 300)}`)); return; }
      const buf = Buffer.concat(chunks), out = new Map<string, string | null>();
      let pos = 0;
      for (const oid of oids) {
        const nl = buf.indexOf(10, pos);
        if (nl < 0) break;
        const [, type, size] = buf.subarray(pos, nl).toString().split(" ");
        pos = nl + 1;
        if (type !== "blob") { out.set(oid, null); continue; }
        out.set(oid, buf.subarray(pos, pos + Number(size)).toString("utf8"));
        pos += Number(size) + 1;
      }
      res(out);
    });
    c.stdin.end(oids.join("\n") + "\n");
  });
}

/**
 * One fetch for the lot; a fetch that fails (a blob the remote no longer serves fails the whole request) is split in
 * halves, so one bad blob costs about log2(n) fetches and leaves only itself unread.
 */
async function prefetchSplitting(mirror: string, oids: string[], prefetch: typeof prefetchBlobs): Promise<number> {
  try { return await prefetch(mirror, oids); } catch {
    if (oids.length <= 1) return 0;
    const half = oids.length >> 1;
    return (await prefetchSplitting(mirror, oids.slice(0, half), prefetch)) + (await prefetchSplitting(mirror, oids.slice(half), prefetch));
  }
}

export interface IdentifierBackfill { items: number; filled: number; prefetched: number; missing: number; ms: number; rule: number }
/**
 * D94 backfill: Learn items fetched before `identifiers` existed get them from the blob they were fetched at
 * (`stages.fetched.blob`), read from the mirror; the item's state, stages and other fields stay as they are, so nothing
 * re-runs and no page is rewritten. Deterministic and quota-free like the fetched stage: blobs the mirror lacks are
 * prefetched in batches first (a blob that cannot be fetched leaves its item for the next run), then every blob of a
 * mirror is read in one process. D95: an item is also taken when its identifiers were written under an older rule
 * (`meta.identifiers_rule` missing or below IDENTIFIERS_RULE); an item written under the current rule (by the fetched
 * stage or an earlier run) is left alone.
 */
export async function backfillIdentifiers(manifest: Manifest, mirrorsDir: string, pillars: Pillar[] = ["docs"], prefetch = prefetchBlobs): Promise<IdentifierBackfill> {
  const t0 = Date.now();
  const r: IdentifierBackfill = { items: 0, filled: 0, prefetched: 0, missing: 0, ms: 0, rule: IDENTIFIERS_RULE };
  const bySource = new Map<string, { item: ManifestItem; blob: string }[]>();
  for (const pillar of pillars) {
    for (const item of manifest.list(pillar)) {
      const blob = item.stages.fetched?.blob;
      if (typeof blob !== "string" || (Array.isArray(item.meta?.identifiers) && Number(item.meta?.identifiers_rule ?? 1) >= IDENTIFIERS_RULE)) continue;
      r.items++;
      const l = bySource.get(item.source) ?? [];
      l.push({ item, blob });
      bySource.set(item.source, l);
    }
  }
  for (const [source, list] of bySource) {
    const mirror = mirrorFor(mirrorsDir, { source });
    if (!existsSync(mirror)) { r.missing += list.length; continue; }
    const oids = [...new Set(list.map((x) => x.blob))];
    r.prefetched += await prefetchSplitting(mirror, oids, prefetch);
    const blobs = await readBlobs(mirror, oids);
    for (const { item, blob } of list) {
      const text = blobs.get(blob);
      if (text == null) { r.missing++; continue; }
      let body = text;
      try { body = matter(text).content; } catch { /* malformed frontmatter: the whole text, as parsePage reads it */ }
      manifest.save({ ...item, meta: { ...(item.meta ?? {}), identifiers: pageIdentifiers(body), identifiers_rule: IDENTIFIERS_RULE } });
      r.filled++;
    }
  }
  r.ms = Date.now() - t0;
  return r;
}
