/**
 * Video summary (PLAN 4.3 stage 5, Sonnet, role `prose`): data/extract/video/<id>.json → data/summary/video/<id>.json.
 *
 * Input is the validated extraction, never the transcript: the prompt stays small and the prose can only restate
 * facts that already passed the quote and evidence checks. Output feeds the page frontmatter (`summary`, agent-facing,
 * <= 600 chars) and body (overview, key points). Em-dashes are replaced deterministically.
 */
import { resolve } from "node:path";
import { exists, readJson, writeJson } from "../lib/fsx.js";
import { complete } from "../lib/llm.js";
import type { ManifestItem } from "../lib/manifest.js";
import { canonicalJson, sha256 } from "../lib/text.js";
import { extractionPath, guardCommunity, type Llm, type VideoExtraction } from "../extract/video.js";

export const PROMPT_VERSION = 2;
export const STAGE = "summarize-video";
export const AUDIENCES = ["functional consultant", "developer", "administrator", "end user", "partner", "decision maker"] as const;
export const SUMMARY_MAX = 600;

export const summarySchema = {
  type: "object", additionalProperties: false,
  required: ["summary", "overview", "key_points", "audience"],
  properties: {
    summary: { type: "string" },
    overview: { type: "string" },
    key_points: { type: "array", items: { type: "string" } },
    audience: { type: "array", items: { type: "string", enum: [...AUDIENCES] } },
  },
};

export interface VideoSummary {
  video_id: string; item_id: string; summary: string; overview: string; key_points: string[]; audience: string[];
  extraction_hash: string; prompt_version: number; llm: { model: string; cached: boolean; cost_usd: number | null };
}

export const SYSTEM = `You write the summary of a Business Central video for an agent-first knowledge base.
You get facts extracted from the video's transcript, already checked against it. Write only from those facts.

Rules:
- Never add product knowledge, versions, dates, object names or claims that are not in the facts. Absence of a fact is not a fact: do not write that something was not shown or not said.
- Feature status words are exact: "generally available" only for status ga, "in preview" only for preview, "announced" or "planned" only for announced; say nothing about status when it is unclear.
- Plain, specific language. No hype ("exciting", "powerful", "seamless", "game-changer"), no marketing tone, no em-dashes (use a plain hyphen).
- summary: 1 to 3 sentences, at most ${SUMMARY_MAX} characters, that tell an AI agent what this video is evidence for. Start with the subject, not with "This video".
- overview: one or two short paragraphs for a human reader.
- key_points: 3 to 7 short points, each a fact a practitioner can act on or check.
- audience: who should watch it (one or more of the allowed values).`;

export function summaryPrompt(x: VideoExtraction, meta: { channel: string; published_at: string | null }): string {
  const facts = {
    title: x.title, channel: meta.channel, published: meta.published_at?.slice(0, 10) ?? null, duration_min: Math.round(x.duration_s / 60),
    systems: x.systems, topics: x.topics, chapters: x.chapters.map((c) => c.title),
    // demoed only when true: "no demo detected" is not "not demoed" (Opus review caught that overclaim)
    features: x.features.map((f) => ({ name: f.name, status: f.status, description: f.description, ...(f.is_demoed ? { demoed: true } : {}), caveats: f.caveats })),
    objects_mentioned: x.objects.map((o) => `${o.type} ${o.name}`),
    disclaimers: x.disclaimers.map((d) => `${d.kind}: ${d.text}`),
    quotes: x.quotes.map((q) => q.text),
  };
  return `Facts extracted from the video (JSON):\n${JSON.stringify(facts, null, 1)}`;
}

/** Deterministic clean-up of model prose. */
export function tidy(s: string): string {
  return s.replace(/\s*[—–]\s*/g, " - ").replace(/[ \t]+/g, " ").trim();
}
/** Cut at the last sentence end within the limit (or a word boundary as a last resort). */
export function clip(s: string, max = SUMMARY_MAX): string {
  if (s.length <= max) return s;
  const cut = s.slice(0, max);
  const end = Math.max(cut.lastIndexOf(". "), cut.lastIndexOf("! "), cut.lastIndexOf("? "));
  if (end > max * 0.5) return cut.slice(0, end + 1);
  const words = cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:]$/, "");
  return /[.!?]$/.test(words) ? words : `${words}.`;
}

export const summaryPath = (dataDir: string, videoId: string) => resolve(dataDir, "summary", "video", `${videoId}.json`);

export async function summarizeVideo(item: ManifestItem, dataDir: string, channel: string, llm: Llm = complete): Promise<VideoSummary> {
  const videoId = item.id.slice(item.id.lastIndexOf("/") + 1);
  const xPath = extractionPath(dataDir, videoId);
  if (!exists(xPath)) throw new Error(`extraction missing: ${xPath}`);
  const x = readJson<VideoExtraction>(xPath);
  const { llm: _l, ...facts } = x;
  const extraction_hash = sha256(canonicalJson(facts));
  const res = await llm<{ summary: string; overview: string; key_points: string[]; audience: string[] }>({
    stage: STAGE, promptVersion: PROMPT_VERSION, role: "prose", system: SYSTEM, schema: summarySchema,
    prompt: summaryPrompt(x, { channel, published_at: item.published_at ?? null }),
    inputs: [{ kind: "extraction", id: item.id, hash: extraction_hash }], label: `${videoId} summary`,
  });
  const o = res.output;
  return {
    video_id: videoId, item_id: item.id, summary: clip(tidy(o.summary)), overview: tidy(o.overview),
    key_points: o.key_points.map(tidy).filter(Boolean).slice(0, 7), audience: [...new Set(o.audience)],
    extraction_hash, prompt_version: PROMPT_VERSION,
    llm: { model: res.meta.model, cached: res.cached, cost_usd: res.cached ? null : res.meta.cost_usd ?? null },
  };
}

/** Executor handler for the video `summarized` stage. */
export async function summarizedHandler(item: ManifestItem, ctx: { dataDir: string; channel?: string }, llm: Llm = complete) {
  const guarded = guardCommunity(item, ctx.dataDir, await summarizeVideo(item, ctx.dataDir, ctx.channel ?? item.source, llm));
  if (!guarded) return { skip: "leak", data: { stage: "summarized" } };
  const s = guarded.value;
  writeJson(summaryPath(ctx.dataDir, s.video_id), s);
  const { llm: _l, ...content } = s;
  return {
    output_hash: sha256(canonicalJson(content)),
    data: { path: `data/summary/video/${s.video_id}.json`, prompt: `${STAGE}@${PROMPT_VERSION}`, model: s.llm.model, cost_usd: s.llm.cost_usd },
  };
}
