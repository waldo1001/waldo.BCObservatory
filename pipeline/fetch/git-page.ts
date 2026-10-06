/**
 * `fetched` for git-hosted pages (Learn docs, BCQuality guidelines): deterministic, no quota.
 *
 * Reads the page at its blob id from the blobless mirror (prefetched in batches, see prefetchBlobs) and records its
 * metadata on the item: Learn title, description, ms.date, ms.topic, ms.search.form (BC page/report ids: the
 * docs-to-objects bridge for the code pillar), keywords, ai-usage, word count. The page text itself is not stored
 * (D01 overlay: Learn stays canonical; extraction reads the blob again).
 */
import { resolve } from "node:path";
import matter from "gray-matter";
import { git } from "../lib/git.js";
import type { ManifestItem } from "../lib/manifest.js";
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

export interface PageMeta {
  title: string | null; description: string | null; ms_date: string | null; ms_topic: string | null;
  search_form: SearchForm[]; keywords: string[]; ai_usage: string | null; words: number; h2: number;
}
export function parsePage(text: string): PageMeta {
  let fm: Record<string, any> = {}, body = text;
  try { const m = matter(text); fm = m.data; body = m.content; } catch { /* malformed frontmatter: body only */ }
  const h1 = body.match(/^#\s+(.+)$/m)?.[1]?.trim() ?? null;
  const str = (v: unknown) => (typeof v === "string" && v.trim() ? v.trim() : null);
  return {
    title: str(fm.title) ?? h1, description: str(fm.description), ms_date: parseMsDate(fm["ms.date"]), ms_topic: str(fm["ms.topic"]),
    search_form: parseSearchForm(fm["ms.search.form"]),
    keywords: String(fm["ms.search.keywords"] ?? "").split(",").map((k) => k.trim()).filter(Boolean).slice(0, 20),
    ai_usage: str(fm["ai-usage"]),
    words: body.replace(/```[\s\S]*?```/g, " ").split(/\s+/).filter((w) => /\w/.test(w)).length,
    h2: (body.match(/^##\s/gm) ?? []).length,
  };
}

export const mirrorFor = (mirrorsDir: string, item: Pick<ManifestItem, "source">) => resolve(mirrorsDir, `${item.source}.git`);

export function gitPageFetched(): StageHandler {
  return async (item, ctx) => {
    const blob = item.input_hash;
    if (!blob) throw new Error("no blob id (input_hash) on item");
    const text = await git(["cat-file", "-p", blob], mirrorFor(ctx.mirrorsDir, item));
    const m = parsePage(text);
    return {
      output_hash: blob,
      patch: {
        ...(m.title ? { title: m.title } : {}),
        meta: { description: m.description, ms_date: m.ms_date, ms_topic: m.ms_topic, search_form: m.search_form, keywords: m.keywords, ai_usage: m.ai_usage, words: m.words },
      },
      data: { blob, words: m.words, forms: m.search_form.length },
    };
  };
}
