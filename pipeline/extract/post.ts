/**
 * Blog post fact extraction (PLAN M3, D34; Haiku, batched): vault post text → data/extract/blog/<source>/<file>.json.
 *
 * Posts go BATCH_SIZE per call up to CALL_CHARS (long posts are cut at CALL_CHARS: blog posts rarely exceed it, and a
 * post is summarized, not reproduced). Per post: agent-facing summary and key points, systems, topics, AL objects as
 * named, features, versions, language, and at most 3 quotes that must be verbatim in the post and under 25 words
 * (CONTENT-NOTICE.md). Community posts then pass the per-item guard: every field, quotes included, that repeats
 * 25+ words of the post is trimmed to 20, and an extraction that still repeats a run is skipped (D33). One Haiku
 * pass stands as the summary (no Sonnet pass per post, D34).
 */
import { resolve } from "node:path";
import { exists, readText, writeJson } from "../lib/fsx.js";
import { complete, LlmBudgetExhausted, LlmInfraError } from "../lib/llm.js";
import { fileKey, type ManifestItem } from "../lib/manifest.js";
import { QUOTE_MAX_WORDS } from "../lib/quotes.js";
import { canonicalJson, sha256 } from "../lib/text.js";
import { taxonomy } from "../lib/config.js";
import type { StageHandler, StageResult } from "../orchestrator/execute.js";
import { leakWords, repeatChecker, scrubRepeats } from "../validate/leak.js";
import type { Llm } from "./video.js";
import { OBJECT_TYPES, SYSTEM_IDS } from "./video-schema.js";
import { clip, tidy } from "../summarize/video.js";
import { postKey, postRawPath } from "../fetch/post.js";

export const PROMPT_VERSION = 1;
export const STAGE = "extract-post";
export const BATCH_SIZE = 4;
export const CALL_CHARS = 60_000;
export const POST_CHARS = 30_000;
const SUMMARY_MAX = 500;

const str = { type: "string" };
export const postSchema = {
  type: "object", additionalProperties: false, required: ["posts"],
  properties: {
    posts: {
      type: "array",
      items: {
        type: "object", additionalProperties: false,
        required: ["key", "summary", "key_points", "systems", "topics", "objects", "features", "versions", "language", "quotes"],
        properties: {
          key: str, summary: str, key_points: { type: "array", items: str },
          systems: { type: "array", items: { type: "string", enum: SYSTEM_IDS } },
          topics: { type: "array", items: str },
          objects: { type: "array", items: { type: "object", additionalProperties: false, required: ["type", "name"], properties: { type: { type: "string", enum: [...OBJECT_TYPES] }, name: str } } },
          features: { type: "array", items: str }, versions: { type: "array", items: str }, language: str,
          quotes: { type: "array", items: { type: "object", additionalProperties: false, required: ["text", "why_it_matters"], properties: { text: str, why_it_matters: str } } },
        },
      },
    },
  },
};

export interface PostExtraction {
  item_id: string; url: string; title: string; source: string; published_at: string | null; words: number;
  summary: string; key_points: string[]; systems: string[]; topics: string[]; objects: { type: string; name: string }[];
  features: string[]; versions: string[]; language: string; quotes: { text: string; why_it_matters: string }[];
  trimmed_for_policy: number; prompt_version: number; llm: { model: string; cached: boolean; cost_usd: number | null; posts_in_call: number };
}

export const SYSTEM = `You extract facts from blog posts about Microsoft Dynamics 365 Business Central for an agent-first knowledge base.
You get several posts, each marked with a key. Return one entry per key, in any order, and no other keys.

Rules:
- Use only what each post says. No outside knowledge. Write in English even when the post is not.
- summary: 1 to 3 plain sentences (at most ${SUMMARY_MAX} characters) that tell an AI agent what the post explains and when it helps. Start with the subject, not "This post". Paraphrase; never copy sentences. No hype, no em-dashes.
- key_points: 2 to 5 short points in your own words.
- systems: 1 to 3 galaxy system ids, most relevant first. topics: 2 to 8 short lowercase tags.
- objects: AL objects the post names explicitly, with type and name as written. Never guess object IDs.
- features: named capabilities the post is about (at most 8). versions: versions or release waves it mentions.
- language: the post's language as an ISO 639-1 code (en, nl, de, ...).
- quotes: at most 3 short sentences copied exactly from the post (under 25 words each) that carry its key insight, each with why it matters. Empty when nothing stands out.`;

export const postExtractionPath = (dataDir: string, item: Pick<ManifestItem, "id" | "source">) => resolve(dataDir, "extract", "blog", item.source, `${fileKey(postKey(item))}.json`);

/** A quote stays when it is under the word limit and its words appear contiguously in the post. */
export function verbatimQuote(text: string, post: string): boolean {
  const q = leakWords(text);
  if (q.length < 4 || q.length > QUOTE_MAX_WORDS) return false;
  return ` ${leakWords(post).join(" ")} `.includes(` ${q.join(" ")} `);
}

/** The derived text still repeats a run of the post after trimming: the item is skipped, not retried (D33). */
export class StillRepeats extends Error {
  constructor(id: string) { super(`${id}: derived text still repeats 25+ words of the post after trimming`); this.name = "StillRepeats"; }
}

interface Unit { item: ManifestItem; key: string; text: string }
export function postPrompt(units: Unit[]): string {
  const sys = taxonomy().systems.map((s) => `${s.id} (${s.label})`).join(", ");
  return `Galaxy systems: ${sys}.\n\n` + units.map((u) => `### POST key=${u.key}\nTitle: ${u.item.title}\nURL: ${u.item.url}\nPublished: ${u.item.published_at ?? "unknown"}\n\n${u.text}`).join("\n\n");
}

const uniq = (xs: string[], n: number) => [...new Set(xs.map((x) => String(x).trim()).filter(Boolean))].slice(0, n);

export async function extractPosts(items: ManifestItem[], full: (source: string) => boolean, llm: Llm = complete): Promise<Map<string, PostExtraction | Error>> {
  const results = new Map<string, PostExtraction | Error>();
  const units: Unit[] = [];
  const raw = new Map<string, string>();
  items.forEach((item, i) => {
    const p = postRawPath(item);
    if (!exists(p)) { results.set(item.id, new Error(`post text missing in the vault: ${p}`)); return; }
    const text = readText(p);
    raw.set(item.id, text);
    units.push({ item, key: `p${i + 1}`, text: text.length > POST_CHARS ? `${text.slice(0, POST_CHARS)}\n[...]` : text });
  });
  const calls: Unit[][] = [];
  let cur: Unit[] = [], size = 0;
  for (const u of units) { if (cur.length && (size + u.text.length > CALL_CHARS || cur.length >= BATCH_SIZE)) { calls.push(cur); cur = []; size = 0; } cur.push(u); size += u.text.length; }
  if (cur.length) calls.push(cur);
  for (const call of calls) {
    let res;
    try {
      res = await llm<{ posts: any[] }>({ stage: STAGE, promptVersion: PROMPT_VERSION, role: "facts", system: SYSTEM, schema: postSchema, prompt: postPrompt(call),
        inputs: call.map((u) => ({ kind: "post", id: u.item.id, hash: sha256(u.text) })), label: `${call[0].item.id}${call.length > 1 ? ` +${call.length - 1}` : ""}` });
    } catch (e) {
      if (e instanceof LlmBudgetExhausted || e instanceof LlmInfraError) throw e;
      for (const u of call) results.set(u.item.id, e as Error);
      continue;
    }
    const byKey = new Map(res.output.posts.map((p) => [p.key, p]));
    for (const u of call) {
      const got = byKey.get(u.key);
      if (!got) { results.set(u.item.id, new Error("model returned no entry for this post")); continue; }
      const text = raw.get(u.item.id)!;
      const objKey = new Set<string>();
      let x: PostExtraction = {
        item_id: u.item.id, url: u.item.url, title: u.item.title, source: u.item.source, published_at: u.item.published_at ?? null, words: text.split(/\s+/).filter(Boolean).length,
        summary: clip(tidy(got.summary), SUMMARY_MAX + 100), key_points: (got.key_points as string[]).map(tidy).filter(Boolean).slice(0, 5),
        systems: uniq(got.systems, 3).filter((s) => SYSTEM_IDS.includes(s)), topics: uniq((got.topics as string[]).map((t) => t.toLowerCase()), 10),
        objects: (got.objects as any[]).filter((o) => { const k = `${o.type}|${String(o.name).toLowerCase().trim()}`; if (objKey.has(k) || !String(o.name).trim()) return false; objKey.add(k); return true; }).map((o) => ({ type: o.type, name: String(o.name).trim() })),
        features: uniq(got.features, 10), versions: uniq(got.versions, 8), language: String(got.language || "en").slice(0, 5).toLowerCase(),
        quotes: (got.quotes as any[]).filter((q) => verbatimQuote(q.text, text)).slice(0, 3).map((q) => ({ text: tidy(q.text), why_it_matters: tidy(q.why_it_matters) })),
        trimmed_for_policy: 0, prompt_version: PROMPT_VERSION,
        llm: { model: res.meta.model, cached: res.cached, cost_usd: res.cached ? null : Number(((res.meta.cost_usd ?? 0) / call.length).toFixed(6)), posts_in_call: call.length },
      };
      if (!full(u.item.source)) {
        // the whole extraction, quotes included, like the video guard (D25/D33): a quote's own text is already at
        // most QUOTE_MAX_WORDS so it is never trimmed, but `why_it_matters` is free text and used to slip through.
        // The re-check on the serialized whole catches runs that only appear once the fields sit next to each other.
        const check = repeatChecker(text);
        const s = scrubRepeats(x, check);
        if (check(JSON.stringify(s.value))) { results.set(u.item.id, new StillRepeats(u.item.id)); continue; }
        x = { ...s.value, trimmed_for_policy: s.trimmed };
      }
      results.set(u.item.id, x);
    }
  }
  return results;
}

export function postExtractedHandler(fullText: (source: string) => boolean, llm: Llm = complete): StageHandler {
  return {
    batch: {
      size: BATCH_SIZE,
      run: async (items, ctx) => {
        const res = await extractPosts(items, fullText, llm);
        const out = new Map<string, StageResult | Error>();
        for (const item of items) {
          const x = res.get(item.id)!;
          if (x instanceof StillRepeats) { out.set(item.id, { skip: "leak", data: { stage: "extracted" } }); continue; }
          if (x instanceof Error) { out.set(item.id, x); continue; }
          writeJson(postExtractionPath(ctx.dataDir, item), x);
          const { llm: _l, ...facts } = x;
          out.set(item.id, { output_hash: sha256(canonicalJson(facts)), data: { prompt: `${STAGE}@${PROMPT_VERSION}`, quotes: x.quotes.length, trimmed: x.trimmed_for_policy, cost_usd: x.llm.cost_usd } });
        }
        return out;
      },
    },
  };
}
