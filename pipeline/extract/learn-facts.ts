/**
 * Learn key facts (D106, spec 4.2; Haiku, role `facts`, quota learn_facts in pages a night): 3 to 8 facts per Learn
 * page, in our own words, for the pages config/learn-facts.json scopes (administration and Fabric first). They answer
 * "what does copying an environment clear" without storing Learn's text: D01 and D94 stand, and a fact that repeats
 * MAX_COPIED consecutive words of the page is dropped.
 *
 * Its own stage, not a field of extract-docs: changing that extraction would move every scoped page's output hash,
 * make its hubs stale and pay Sonnet narratives and Opus reviews for nothing. A page is due when it is in scope and
 * has no record, a record of another blob (the page changed) or of an older rule. Nightlies only complete the scope;
 * widening it is an owner's edit of the config.
 *
 * Writes data/extract/learn-facts/<source>/<file>.json; the hub pages and the Learn facts index read it.
 */
import { resolve } from "node:path";
import { git } from "../lib/git.js";
import { exists, listFiles, readJson, readJsonOr, writeJson } from "../lib/fsx.js";
import { loadConfig } from "../lib/config.js";
import { complete, LlmBudgetExhausted, LlmInfraError } from "../lib/llm.js";
import { fileKey, type ManifestItem } from "../lib/manifest.js";
import { logger } from "../lib/log.js";
import { mirrorFor } from "../fetch/git-page.js";
import type { Llm } from "./video.js";
import { cleanBody, pack, splitSections } from "./docs.js";

const log = logger("learn-facts");

export const PROMPT_VERSION = 1;
export const STAGE = "extract-learn-facts";
export const MAX_FACTS = 8;
export const FACT_MAX = 200;
/** A fact sharing this many consecutive words with the page is a copy, not a fact in our words. */
export const MAX_COPIED = 12;
export const KINDS = ["fact", "status", "prerequisite", "step", "permission", "limit"] as const;
export type FactKind = (typeof KINDS)[number];
export interface KeyFact { kind: FactKind; text: string }

export interface LearnFactsConfig { rule: number; paths: string[] }
export const learnFactsConfig = (): LearnFactsConfig => loadConfig<LearnFactsConfig>("learn-facts");

export interface LearnFactsRecord {
  item_id: string; url: string; title: string; blob: string; rule: number; prompt_version: number; facts: KeyFact[];
  dropped: number; llm: { model: string; cached: boolean; cost_usd: number | null; pages_in_call: number }[];
}

export const SYSTEM = `You write key facts about Microsoft Learn pages on Microsoft Dynamics 365 Business Central for an agent-first knowledge base.
You get several pages, each marked with a key. Return one entry per key, in any order, and no other keys.

Rules:
- 3 to ${MAX_FACTS} facts per page, the ones a reader most needs: what happens, what is required, what is cleared, stopped or kept, limits, who may do it, what status (preview, generally available) and from which version or date.
- In your own words. Never copy a sentence or a run of more than eight words from the page. Plain English, at most ${FACT_MAX} characters each, no em-dashes.
- kind: status (preview, generally available, deprecated, with the version or date the page gives), prerequisite, step (one step of a procedure, in order), permission (permission sets or roles), limit (what is not supported or not copied), else fact.
- Use only what each page says. No outside knowledge. A list on the page (what is cleared, which permission sets) becomes one fact that names the items.`;

export const factsSchema = {
  type: "object", additionalProperties: false, required: ["pages"],
  properties: { pages: { type: "array", items: { type: "object", additionalProperties: false, required: ["key", "facts"], properties: {
    key: { type: "string" },
    facts: { type: "array", items: { type: "object", additionalProperties: false, required: ["kind", "text"], properties: { kind: { type: "string", enum: [...KINDS] }, text: { type: "string" } } } },
  } } } },
};

const norm = (s: string) => s.toLowerCase().replace(/[`*_[\]()>#|]/g, " ").split(/[^a-z0-9.%-]+/).filter(Boolean);
/** True when `fact` shares MAX_COPIED or more consecutive words with `body`. */
export function copiesPage(fact: string, body: string, n = MAX_COPIED): boolean {
  const f = norm(fact);
  if (f.length < n) return false;
  const b = ` ${norm(body).join(" ")} `;
  for (let i = 0; i + n <= f.length; i++) if (b.includes(` ${f.slice(i, i + n).join(" ")} `)) return true;
  return false;
}

/** At most FACT_MAX characters, cut at a word. */
export function clipFact(s: string): string {
  const t = s.replace(/\s+/g, " ").replace(/\s*—\s*/g, ", ").trim();
  if (t.length <= FACT_MAX) return t;
  const cut = t.slice(0, t.lastIndexOf(" ", FACT_MAX - 1));
  return `${cut.replace(/[,;:]$/, "")}…`;
}

/** The facts of one page from its parts: guarded, clipped, deduplicated, at most MAX_FACTS. */
export function keepFacts(raw: { kind: string; text: string }[], body: string): { facts: KeyFact[]; dropped: number } {
  const facts: KeyFact[] = [];
  let dropped = 0;
  for (const r of raw) {
    const text = clipFact(String(r.text ?? ""));
    if (!text || copiesPage(text, body)) { dropped++; continue; }
    if (facts.some((f) => f.text.toLowerCase() === text.toLowerCase())) continue;
    if (facts.length >= MAX_FACTS) break;
    facts.push({ kind: (KINDS as readonly string[]).includes(r.kind) ? (r.kind as FactKind) : "fact", text });
  }
  return { facts, dropped };
}

export const learnFactsPath = (dataDir: string, item: Pick<ManifestItem, "id" | "source">) =>
  resolve(dataDir, "extract", "learn-facts", item.source, `${fileKey(item.id.slice(item.id.indexOf("/", item.id.indexOf("/") + 1) + 1))}.json`);

/** A Learn item the config scopes: its repo path matches, it has a blob, it is no generated reference page. */
export function inScope(item: ManifestItem, cfg: LearnFactsConfig): boolean {
  const path = String(item.meta?.path ?? "");
  return item.pillar === "docs" && !!item.input_hash && item.meta?.ms_topic !== "reference" && !item.skip
    && cfg.paths.some((p) => new RegExp(p).test(path));
}

/** In scope and without a record of this blob under this rule. */
export function factsDue(item: ManifestItem, dataDir: string, cfg: LearnFactsConfig): boolean {
  if (!inScope(item, cfg)) return false;
  const r = readJsonOr<Partial<LearnFactsRecord>>(learnFactsPath(dataDir, item), {});
  return r.blob !== item.input_hash || (r.rule ?? 0) < cfg.rule;
}

export interface LearnFactsRun { due: number; pages: number; calls: number; facts: number; dropped: number; failed: number; cost_usd: number; stopped: "done" | "quota" | "deadline" | "spend-cap" | "aborted"; errors: string[] }

/** The nightly phase: facts for due pages, newest Learn date first, at most `quota` pages. */
export async function refreshLearnFacts(
  items: ManifestItem[],
  o: { dataDir: string; mirrorsDir: string; quota: number; deadline: Date; clock: () => Date; llm?: Llm; read?: (item: ManifestItem) => Promise<string>; cfg?: LearnFactsConfig },
): Promise<LearnFactsRun> {
  const cfg = o.cfg ?? learnFactsConfig();
  const llm = o.llm ?? complete;
  const read = o.read ?? (async (item: ManifestItem) => cleanBody(await git(["cat-file", "-p", item.input_hash!], mirrorFor(o.mirrorsDir, item))));
  const run: LearnFactsRun = { due: 0, pages: 0, calls: 0, facts: 0, dropped: 0, failed: 0, cost_usd: 0, stopped: "done", errors: [] };
  const due = items.filter((i) => factsDue(i, o.dataDir, cfg))
    .sort((a, b) => String(b.meta?.ms_date ?? "").localeCompare(String(a.meta?.ms_date ?? "")) || a.id.localeCompare(b.id));
  run.due = due.length;
  const take = due.slice(0, Math.max(0, o.quota));
  if (take.length < due.length) run.stopped = "quota";
  const bodies = new Map<string, string>();
  const units: { item: ManifestItem; key: string; part: number; text: string }[] = [];
  for (const [i, item] of take.entries()) {
    try {
      const body = await read(item);
      if (!body) throw new Error("empty page body");
      bodies.set(item.id, body);
      splitSections(body).forEach((text, part) => units.push({ item, key: `p${i}${part ? `-${part}` : ""}`, part, text }));
    } catch (e) { run.failed++; run.errors.push(`learn facts ${item.id}: ${String((e as Error).message).slice(0, 200)}`); }
  }
  const got = new Map<string, { raw: { kind: string; text: string }[]; parts: number; seen: number; llm: LearnFactsRecord["llm"] }>();
  for (const u of units) { const g = got.get(u.item.id) ?? { raw: [], parts: 0, seen: 0, llm: [] }; g.parts++; got.set(u.item.id, g); }
  for (const call of pack(units)) {
    if (o.clock().getTime() >= o.deadline.getTime()) { run.stopped = "deadline"; break; }
    run.calls++;
    try {
      const res = await llm<{ pages: { key: string; facts: { kind: string; text: string }[] }[] }>({
        stage: STAGE, promptVersion: PROMPT_VERSION, role: "facts", system: SYSTEM, schema: factsSchema,
        prompt: call.map((u) => `### PAGE key=${u.key}\nTitle: ${u.item.title}\nURL: ${u.item.url}${u.part ? `\n(part ${u.part + 1} of a long page)` : ""}\n\n${u.text}`).join("\n\n"),
        inputs: call.map((u) => ({ kind: "learn", id: u.item.id, hash: u.item.input_hash ?? undefined })), label: `${call.length} Learn page part(s) for key facts`,
      });
      if (!res.cached) run.cost_usd += res.meta.cost_usd ?? 0;
      const byKey = new Map(res.output.pages.map((p) => [p.key, p]));
      for (const u of call) {
        const g = got.get(u.item.id)!;
        g.llm.push({ model: res.meta.model, cached: res.cached, cost_usd: res.cached ? null : Number(((res.meta.cost_usd ?? 0) / call.length).toFixed(6)), pages_in_call: call.length });
        const p = byKey.get(u.key);
        if (p) { g.raw.push(...p.facts); g.seen++; }
      }
    } catch (e) {
      if (e instanceof LlmBudgetExhausted) { run.stopped = "spend-cap"; break; }
      if (e instanceof LlmInfraError) { run.stopped = "aborted"; run.errors.push(String(e.message)); break; }
      run.failed += new Set(call.map((u) => u.item.id)).size;
      run.errors.push(`learn facts call: ${String((e as Error).message).slice(0, 200)}`);
      log.warn(`call failed: ${String((e as Error).message).slice(0, 200)}`);
    }
  }
  for (const item of take) {
    const g = got.get(item.id);
    if (!g || g.seen < g.parts) continue;
    const { facts, dropped } = keepFacts(g.raw, bodies.get(item.id) ?? "");
    const rec: LearnFactsRecord = { item_id: item.id, url: item.url, title: item.title, blob: item.input_hash!, rule: cfg.rule, prompt_version: PROMPT_VERSION, facts, dropped, llm: g.llm };
    writeJson(learnFactsPath(o.dataDir, item), rec);
    run.pages++; run.facts += facts.length; run.dropped += dropped;
  }
  return run;
}

/** Learn URL -> its key facts, from every record (the hub pages and the Learn facts index read this). */
export function loadLearnFacts(dataDir: string): Map<string, KeyFact[]> {
  const m = new Map<string, KeyFact[]>();
  const dir = resolve(dataDir, "extract", "learn-facts");
  if (!exists(dir)) return m;
  for (const f of listFiles(dir, ".json")) {
    const r = readJson<LearnFactsRecord>(f);
    if (r.facts?.length) m.set(r.url, r.facts);
  }
  return m;
}

const LABEL: Record<FactKind, string> = { fact: "", status: "Status: ", prerequisite: "Prerequisite: ", step: "Step: ", permission: "Permissions: ", limit: "Limit: " };
/** One nested bullet per fact, for a hub's article row. */
export const factLines = (facts: KeyFact[], indent = "  ") => facts.map((f) => `${indent}- ${LABEL[f.kind]}${f.text}`);
export const FACTS_ATTRIBUTION = "Key facts from Microsoft Learn (CC BY 4.0), in our own words (D106); open the page for the full text.";
