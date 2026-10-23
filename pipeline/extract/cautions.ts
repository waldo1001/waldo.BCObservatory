/**
 * Cautions in community posts (D106, spec 4.3; Haiku, role `facts`, quota cautions in posts a night): the warnings a
 * post carries ("be careful", "this breaks", "only in preview"), each as a verbatim quote of 4 to 24 words with the AL
 * objects, events and versions it is about. The quote is checked against the post (verbatimQuote, the posts' own
 * rule); the objects and events are what pipeline/link/cautions.ts uses to decide where a caution may show, so a
 * caution never travels on topic alone.
 *
 * Videos need no call: their disclaimers (extract/video.ts) are already verbatim and timed, and become
 * `preview-disclaimer` cautions in link/cautions.ts.
 *
 * Its own stage over the vaulted post bodies, one record per post under data/extract/cautions/<source>/; a post runs
 * once per RULE, newest first.
 */
import { resolve } from "node:path";
import { exists, readJsonOr, readText, writeJson } from "../lib/fsx.js";
import { complete, LlmBudgetExhausted, LlmInfraError } from "../lib/llm.js";
import { fileKey, type ManifestItem } from "../lib/manifest.js";
import { logger } from "../lib/log.js";
import { postKey, postRawPath } from "../fetch/post.js";
import { OBJECT_TYPES } from "./video-schema.js";
import { verbatimQuote, postExtractionPath } from "./post.js";
import type { Llm } from "./video.js";

const log = logger("cautions");

export const PROMPT_VERSION = 1;
export const STAGE = "extract-cautions";
/** Raise to run every post again. */
export const RULE = 1;
export const BATCH_SIZE = 4;
export const MAX_CAUTIONS = 4;
/** Characters of a post given to the model; a caution past this point is rare and not worth the tokens. */
export const POST_CHARS = 24_000;
export const KINDS = ["warning", "gotcha", "breaking", "preview-disclaimer"] as const;
export type CautionKind = (typeof KINDS)[number];

export interface Caution {
  kind: CautionKind; quote: string; t?: number;
  objects: { type: string; name: string }[]; events: string[]; versions: string[];
}
export interface CautionRecord { item_id: string; page_id: string; rule: number; prompt_version: number; cautions: Caution[]; llm: { model: string; cached: boolean; cost_usd: number | null; posts_in_call: number } | null }

export const SYSTEM = `You find the warnings in Microsoft Dynamics 365 Business Central blog posts for an agent-first knowledge base.
You get several posts, each marked with a key. Return one entry per key, in any order, and no other keys.

A warning is a sentence where the author cautions the reader: something breaks, fails silently, behaves unexpectedly, must not be done, is only in preview, or changed in a way that catches people out. Advice and features are not warnings.
For each warning (at most ${MAX_CAUTIONS} per post, often none):
- quote: the author's own words, copied exactly, 4 to 24 words, one sentence or part of one.
- kind: breaking (something stops working), gotcha (works, but not as you would expect), preview-disclaimer (preview, not final, subject to change), else warning.
- objects: the AL objects the warning is about, with type and name as written in the post (only when the post names them). Empty when none.
- events: AL event names the warning is about (OnBefore..., OnAfter...), as written. Empty when none.
- versions: the Business Central versions the warning applies to (e.g. "26", "BC27", "2025 release wave 1"). Empty when none.`;

const str = { type: "string" };
export const cautionsSchema = {
  type: "object", additionalProperties: false, required: ["posts"],
  properties: { posts: { type: "array", items: { type: "object", additionalProperties: false, required: ["key", "cautions"], properties: {
    key: str,
    cautions: { type: "array", items: { type: "object", additionalProperties: false, required: ["kind", "quote", "objects", "events", "versions"], properties: {
      kind: { type: "string", enum: [...KINDS] }, quote: str,
      objects: { type: "array", items: { type: "object", additionalProperties: false, required: ["type", "name"], properties: { type: { type: "string", enum: [...OBJECT_TYPES] }, name: str } } },
      events: { type: "array", items: str }, versions: { type: "array", items: str },
    } } },
  } } } },
};

/** Verbatim quotes only (4 to 24 words, contiguous in the post), unknown kinds as warning, one per quote, at most MAX_CAUTIONS. */
export function keepCautions(raw: { kind: string; quote: string; objects?: { type: string; name: string }[]; events?: string[]; versions?: string[] }[], body: string): Caution[] {
  const out: Caution[] = [];
  for (const r of raw) {
    const quote = String(r.quote ?? "").replace(/\s+/g, " ").trim();
    if (!verbatimQuote(quote, body)) continue;
    if (out.some((c) => c.quote.toLowerCase() === quote.toLowerCase())) continue;
    if (out.length >= MAX_CAUTIONS) break;
    out.push({
      kind: (KINDS as readonly string[]).includes(r.kind) ? (r.kind as CautionKind) : "warning", quote,
      objects: (r.objects ?? []).filter((o) => String(o.name ?? "").trim()).map((o) => ({ type: String(o.type), name: String(o.name).trim() })),
      events: [...new Set((r.events ?? []).map((e) => String(e).trim()).filter((e) => /^[A-Za-z_][A-Za-z0-9_]*$/.test(e)))],
      versions: [...new Set((r.versions ?? []).map((v) => String(v).trim()).filter(Boolean))],
    });
  }
  return out;
}

export const cautionsPath = (dataDir: string, item: Pick<ManifestItem, "id" | "source">) => resolve(dataDir, "extract", "cautions", item.source, `${fileKey(postKey(item))}.json`);
const pageIdOf = (item: Pick<ManifestItem, "id" | "source">) => `post/${item.source}/${fileKey(postKey(item))}`;

/** A published post with an extraction and its body in the vault, without a record under this rule. */
export function cautionsDue(item: ManifestItem, dataDir: string): boolean {
  if (item.pillar !== "blog" || !item.stages?.published || !exists(postExtractionPath(dataDir, item)) || !exists(postRawPath(item))) return false;
  return (readJsonOr<Partial<CautionRecord>>(cautionsPath(dataDir, item), {}).rule ?? 0) < RULE;
}

export interface CautionsRun { due: number; posts: number; calls: number; cautions: number; failed: number; cost_usd: number; stopped: "done" | "quota" | "deadline" | "spend-cap" | "aborted"; errors: string[] }

export async function refreshCautions(
  items: ManifestItem[],
  o: { dataDir: string; quota: number; deadline: Date; clock: () => Date; llm?: Llm; read?: (item: ManifestItem) => string },
): Promise<CautionsRun> {
  const llm = o.llm ?? complete;
  const read = o.read ?? ((item: ManifestItem) => readText(postRawPath(item)));
  const run: CautionsRun = { due: 0, posts: 0, calls: 0, cautions: 0, failed: 0, cost_usd: 0, stopped: "done", errors: [] };
  const due = items.filter((i) => (o.read ? i.pillar === "blog" && !!i.stages?.published && (readJsonOr<Partial<CautionRecord>>(cautionsPath(o.dataDir, i), {}).rule ?? 0) < RULE : cautionsDue(i, o.dataDir)))
    .sort((a, b) => String(b.published_at ?? "").localeCompare(String(a.published_at ?? "")) || a.id.localeCompare(b.id));
  run.due = due.length;
  const take = due.slice(0, Math.max(0, o.quota));
  if (take.length < due.length) run.stopped = "quota";
  for (let i = 0; i < take.length; i += BATCH_SIZE) {
    if (o.clock().getTime() >= o.deadline.getTime()) { run.stopped = "deadline"; break; }
    const batch = take.slice(i, i + BATCH_SIZE).map((item, j) => {
      try { return { item, key: `p${j}`, body: read(item) }; } catch (e) { run.failed++; run.errors.push(`cautions ${item.id}: ${String((e as Error).message).slice(0, 160)}`); return null; }
    }).filter((x): x is { item: ManifestItem; key: string; body: string } => !!x && !!x.body);
    if (!batch.length) continue;
    run.calls++;
    try {
      const res = await llm<{ posts: { key: string; cautions: Parameters<typeof keepCautions>[0] }[] }>({
        stage: STAGE, promptVersion: PROMPT_VERSION, role: "facts", system: SYSTEM, schema: cautionsSchema,
        prompt: batch.map((b) => `### POST key=${b.key}\nTitle: ${b.item.title}\nPublished: ${b.item.published_at ?? "unknown"}\n\n${b.body.slice(0, POST_CHARS)}`).join("\n\n"),
        inputs: batch.map((b) => ({ kind: "post", id: b.item.id, hash: b.item.input_hash ?? undefined })), label: `${batch.length} post(s) for cautions`,
      });
      if (!res.cached) run.cost_usd += res.meta.cost_usd ?? 0;
      const byKey = new Map(res.output.posts.map((p) => [p.key, p]));
      for (const b of batch) {
        const cautions = keepCautions(byKey.get(b.key)?.cautions ?? [], b.body);
        const rec: CautionRecord = { item_id: b.item.id, page_id: pageIdOf(b.item), rule: RULE, prompt_version: PROMPT_VERSION, cautions,
          llm: { model: res.meta.model, cached: res.cached, cost_usd: res.cached ? null : Number(((res.meta.cost_usd ?? 0) / batch.length).toFixed(6)), posts_in_call: batch.length } };
        writeJson(cautionsPath(o.dataDir, b.item), rec);
        run.posts++; run.cautions += cautions.length;
      }
    } catch (e) {
      if (e instanceof LlmBudgetExhausted) { run.stopped = "spend-cap"; break; }
      if (e instanceof LlmInfraError) { run.stopped = "aborted"; run.errors.push(String(e.message)); break; }
      run.failed += batch.length;
      run.errors.push(`cautions call: ${String((e as Error).message).slice(0, 200)}`);
      log.warn(`call failed: ${String((e as Error).message).slice(0, 200)}`);
    }
  }
  return run;
}
