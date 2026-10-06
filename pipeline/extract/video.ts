/**
 * Video fact extraction (PLAN 4.3 stage 3, Haiku): caption segments → data/extract/video/<videoId>.json.
 *
 * Ported from the release-wave step 02 and generalised beyond launch events: chapters, galaxy systems, topics,
 * features with status evidence, AL objects as heard, presenters, quotes, disclaimers. Videos over 20 minutes are
 * cut into 15-minute windows with 2 minutes of overlap and consolidated by a second Haiku call; objects, quotes
 * and disclaimers are merged deterministically. Facts come from validators, not prompts: every quote and every
 * status evidence quote is checked verbatim against the segments (quotes.ts) and dropped or snapped.
 *
 * Captions: Microsoft (tier official) under data/captions/microsoft; community captions live in the vault.
 */
import { resolve } from "node:path";
import { exists, readJson, writeJson } from "../lib/fsx.js";
import { complete, type LlmRequest, type LlmResult } from "../lib/llm.js";
import type { ManifestItem } from "../lib/manifest.js";
import { VAULT_DIR } from "../lib/paths.js";
import { checkQuote, type Seg } from "../lib/quotes.js";
import { canonicalJson, sha256 } from "../lib/text.js";
import { taxonomy } from "../lib/config.js";
import { consolidateSchema, OBJECT_TYPES, SYSTEM_IDS, windowSchema } from "./video-schema.js";

export const PROMPT_VERSION = 1;
export const STAGE = "extract-video";
const WINDOW_THRESHOLD = 20 * 60;
const WINDOW_SIZE = 15 * 60;
const WINDOW_OVERLAP = 2 * 60;

export type Llm = <T>(req: LlmRequest) => Promise<LlmResult<T>>;

export interface VideoFeature {
  name: string; description: string; status: string; status_evidence_t: number | null; status_evidence_quote: string | null;
  status_evidence_verified: boolean; t_start: number; t_end: number; is_demoed: boolean; caveats: string[]; tags: string[]; system: string;
}
export interface VideoExtraction {
  video_id: string; item_id: string; title: string; duration_s: number;
  systems: string[]; topics: string[];
  chapters: { t_start: number; t_end: number; title: string }[];
  features: VideoFeature[];
  objects: { type: string; name: string; t: number }[];
  presenters: { name: string; confidence: string }[];
  quotes: { t: number; text: string; why_it_matters: string; check: string }[];
  disclaimers: { t: number; kind: string; text: string }[];
  checks: { quotes_kept: number; quotes_dropped: number; evidence_verified: number; evidence_unverified: number };
  windows: number;
  prompt_version: number;
  llm: { model: string; cached: boolean; cost_usd: number | null }[];
}

export const SYSTEM = `You are an extraction engine for transcripts of videos about Microsoft Dynamics 365 Business Central.
You read machine-generated captions with a timestamp in seconds per segment and return structured JSON.

Hard rules:
- Use only what the transcript says. No product knowledge, context or guesses from outside the transcript.
- Every timestamp must be a segment start time "t" from the input or lie inside a segment's range. Never invent timestamps.
- Quotes are verbatim substrings of one segment text (same words, same order; you may trim the start and end). 8 to 24 words. No paraphrasing, no grammar fixes, no stitching segments.
- Status is only what this video says: "preview" (preview, public preview, beta), "ga" (generally available, GA, released), "announced" (coming later, roadmap, not in this release), "unclear" (nothing said). Give the verbatim quote that proves it, or null.
- AL objects: only objects the speakers name (tables, pages, codeunits, reports, enums, interfaces, ...), as heard. Do not guess object IDs.
- Presenter names are as heard; confidence low when the captions could have mangled them.
- No em-dashes anywhere in your text. Use a plain hyphen. No hype words ("exciting", "powerful", "seamless").`;

function systemList(): string {
  return taxonomy().systems.map((s) => `${s.id} (${s.label}: ${s.aliases.slice(0, 6).join(", ")})`).join("; ");
}

export function windowPrompt(o: { title: string; videoId: string; duration: number; index: number; count: number; segments: Seg[] }): string {
  const scope = o.count > 1
    ? `This is window ${o.index + 1} of ${o.count} (segments ${o.segments[0].t}s to ${o.segments.at(-1)!.t}s). Describe only this window; chapters and feature ranges stay inside it.`
    : "This is the whole video.";
  return `Video: "${o.title}" (YouTube id ${o.videoId}, ${Math.round(o.duration)} seconds).
${scope}

Galaxy systems (pick ids only from this list): ${systemList()}.

Return:
- chapters: 3 to 10 chapters covering the ${o.count > 1 ? "window" : "video"} without gaps (t_start, t_end, short title).
- systems: 1 to 3 system ids this ${o.count > 1 ? "window" : "video"} is mostly about, most relevant first.
- topics: 3 to 10 short lowercase topic tags (e.g. "posting groups", "al-go", "e-documents", "sales order agent").
- features: every distinct capability, change or announcement discussed: name as the speakers name it, 1-2 sentence description from the transcript, status with evidence, t_start/t_end of the part about it, is_demoed, caveats, 2-6 lowercase tags, system id.
- objects: AL objects named by the speakers (type, name as heard, t where it is said).
- presenters: names as heard with confidence.
- quotes: 3 to 8 verbatim quotes (t = segment start) with one sentence on why each matters. Prefer statements of status, limits, numbers, dates or design decisions.
- disclaimers: every "preview", "subject to change", "not in this release", "coming later", "roadmap" moment with kind and short verbatim text.

Transcript segments (JSON, one per line, t in seconds):
${o.segments.map((s) => JSON.stringify({ t: s.t, text: s.text })).join("\n")}`;
}

export function consolidatePrompt(o: { title: string; videoId: string; duration: number; windows: any[] }): string {
  const slim = o.windows.map((w, i) => ({ window: i + 1, chapters: w.chapters, systems: w.systems, topics: w.topics, features: w.features, presenters: w.presenters }));
  return `Video: "${o.title}" (YouTube id ${o.videoId}, ${Math.round(o.duration)} seconds) was extracted in ${o.windows.length} overlapping windows. Consolidate them into one result.

Rules:
- chapters: one non-overlapping list covering 0 to ${Math.round(o.duration)} seconds, 5 to 14 chapters, merged from the window chapters, timestamps kept.
- systems: 1 to 3 ids, most relevant first. topics: 3 to 12, deduplicated.
- features: merge the same capability across windows (earliest t_start, latest t_end, strongest status evidence with its quote and t kept verbatim from one window, union of caveats and tags). Do not drop or invent features.
- presenters: deduplicated.

Window results (JSON):
${JSON.stringify(slim)}`;
}

export function makeWindows(segs: Seg[], duration: number): Seg[][] {
  if (duration <= WINDOW_THRESHOLD) return [segs];
  const out: Seg[][] = [];
  for (let start = 0; start < duration; start += WINDOW_SIZE - WINDOW_OVERLAP) {
    const w = segs.filter((s) => s.t >= start && s.t < start + WINDOW_SIZE);
    if (w.length) out.push(w);
    if (start + WINDOW_SIZE >= duration) break;
  }
  return out;
}

export function captionSegmentsPath(item: ManifestItem, dataDir: string, vaultDir = VAULT_DIR): string {
  const key = item.id.slice(item.id.lastIndexOf("/") + 1);
  return item.tier === "official"
    ? resolve(dataDir, "captions", "microsoft", `${key}.segments.json`)
    : resolve(vaultDir, "captions", "community", item.source, `${key}.segments.json`);
}
export const extractionPath = (dataDir: string, videoId: string) => resolve(dataDir, "extract", "video", `${videoId}.json`);

/** A status claim stands only when its verbatim evidence says so; "we introduced X" is not "X is GA". */
const STATUS_WORDS: Record<string, RegExp> = {
  ga: /\b(generally available|general availability|\bGA\b|g\.a\.|released|available (now|today)|now available|out of preview|ships?|shipping|live (now|today))\b/i,
  preview: /\b(preview|beta|early access|insider|experimental)\b/i,
  announced: /\b(coming|later|future|roadmap|planned|planning|next (release|wave|version|major)|will (be|come|ship|arrive|add|bring)|not (yet|in this release)|working on)\b/i,
};
export function statusSupported(status: string, quote: string): boolean {
  return STATUS_WORDS[status]?.test(quote) ?? false;
}

/** Placeholders the model emits when no name is heard; they are not presenters. */
const GENERIC_PRESENTER = /^(presenter|speaker|host|narrator|unknown|unnamed)(\s*\d+)?$/i;
const clamp = (n: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, n));
const validSystems = (ids: unknown[]) => [...new Set(ids.filter((x): x is string => typeof x === "string" && SYSTEM_IDS.includes(x)))].slice(0, 3);
const normTags = (xs: string[]) => [...new Set(xs.map((t) => t.toLowerCase().trim()).filter(Boolean))];

/** Run the extraction for one video item; returns the validated result (not yet written). */
export async function extractVideo(item: ManifestItem, dataDir: string, llm: Llm = complete): Promise<VideoExtraction> {
  const segPath = captionSegmentsPath(item, dataDir);
  if (!exists(segPath)) throw new Error(`caption segments missing: ${segPath}`);
  const segs = readJson<{ segments: Seg[] }>(segPath).segments;
  if (!segs.length) throw new Error(`caption segments empty: ${segPath}`);
  const videoId = item.id.slice(item.id.lastIndexOf("/") + 1);
  const duration = Math.ceil(segs.at(-1)!.end);
  const windows = makeWindows(segs, duration);
  const llmMeta: VideoExtraction["llm"] = [];
  const call = async <T>(prompt: string, schema: Record<string, unknown>, label: string): Promise<T> => {
    const res = await llm<T>({
      stage: STAGE, promptVersion: PROMPT_VERSION, role: "facts", system: SYSTEM, prompt, schema, label,
      inputs: [{ kind: "captions", id: item.id, hash: sha256(JSON.stringify(segs)) }],
    });
    llmMeta.push({ model: res.meta.model, cached: res.cached, cost_usd: res.cached ? null : res.meta.cost_usd ?? null });
    return res.output;
  };

  const parts: any[] = [];
  for (let i = 0; i < windows.length; i++) {
    parts.push(await call<any>(windowPrompt({ title: item.title, videoId, duration, index: i, count: windows.length, segments: windows[i] }), windowSchema, `${videoId} window ${i + 1}/${windows.length}`));
  }
  const core = parts.length === 1 ? parts[0]
    : await call<any>(consolidatePrompt({ title: item.title, videoId, duration, windows: parts }), consolidateSchema, `${videoId} consolidate`);

  const checks = { quotes_kept: 0, quotes_dropped: 0, evidence_verified: 0, evidence_unverified: 0 };
  const quotes: VideoExtraction["quotes"] = [];
  const seenQ = new Set<string>();
  for (const q of parts.flatMap((p) => p.quotes ?? [])) {
    const c = checkQuote(segs, q.text, q.t, { minWords: 6 }); // shorter fragments say nothing on a page
    if (!c.ok) { checks.quotes_dropped++; continue; }
    const k = `${Math.round(c.t)}|${c.text.toLowerCase()}`;
    if (seenQ.has(k)) continue;
    seenQ.add(k);
    checks.quotes_kept++;
    quotes.push({ t: c.t, text: c.text, why_it_matters: q.why_it_matters, check: c.reason });
  }
  quotes.sort((a, b) => a.t - b.t);

  const features: VideoFeature[] = (core.features ?? []).map((f: any) => {
    let evT: number | null = f.status_evidence_t, evQ: string | null = f.status_evidence_quote, verified = false;
    if (evQ && typeof evT === "number") {
      const c = checkQuote(segs, evQ, evT, { minWords: 3 });
      if (c.ok && statusSupported(f.status, c.text)) { evT = c.t; evQ = c.text; verified = true; checks.evidence_verified++; }
      else { evT = null; evQ = null; checks.evidence_unverified++; }
    }
    return {
      name: f.name.trim(), description: f.description.trim(),
      status: verified || f.status === "unclear" ? f.status : "unclear", // an unproven status is not a status
      status_evidence_t: evT, status_evidence_quote: evQ, status_evidence_verified: verified,
      t_start: clamp(f.t_start, 0, duration), t_end: clamp(Math.max(f.t_end, f.t_start + 5), 0, duration), is_demoed: !!f.is_demoed,
      caveats: f.caveats ?? [], tags: normTags(f.tags ?? []), system: f.system,
    };
  });

  const chapters = (core.chapters ?? []).map((c: any) => ({ title: String(c.title).trim(), t_start: clamp(c.t_start, 0, duration), t_end: clamp(c.t_end, 0, duration) }))
    .filter((c: any) => c.t_end > c.t_start).sort((a: any, b: any) => a.t_start - b.t_start);
  for (let i = 0; i < chapters.length; i++) {
    if (i > 0 && chapters[i].t_start < chapters[i - 1].t_end) chapters[i].t_start = chapters[i - 1].t_end;
    if (i < chapters.length - 1 && chapters[i].t_end < chapters[i + 1].t_start) chapters[i].t_end = chapters[i + 1].t_start;
  }
  const cleanChapters = chapters.filter((c: any) => c.t_end > c.t_start);
  if (cleanChapters.length) { cleanChapters[0].t_start = 0; cleanChapters[cleanChapters.length - 1].t_end = duration; }

  const objKey = new Set<string>();
  const objects = parts.flatMap((p) => p.objects ?? [])
    .filter((o: any) => (OBJECT_TYPES as readonly string[]).includes(o.type) && String(o.name).trim() && !/\b(implied|inferred|unnamed)\b/i.test(o.name))
    .map((o: any) => ({ type: o.type, name: String(o.name).trim(), t: clamp(o.t, 0, duration) }))
    .filter((o) => { const k = `${o.type}|${o.name.toLowerCase()}`; if (objKey.has(k)) return false; objKey.add(k); return true; });
  const discKey = new Set<string>();
  const disclaimers = parts.flatMap((p) => p.disclaimers ?? [])
    .map((d: any) => ({ t: clamp(d.t, 0, duration), kind: d.kind, text: String(d.text).trim() }))
    .sort((a, b) => a.t - b.t)
    .filter((d) => { const k = `${Math.round(d.t / 15)}|${d.kind}`; if (discKey.has(k)) return false; discKey.add(k); return true; });

  return {
    video_id: videoId, item_id: item.id, title: item.title, duration_s: duration,
    systems: validSystems(core.systems ?? []), topics: normTags(core.topics ?? []).slice(0, 12),
    chapters: cleanChapters, features, objects, presenters: (core.presenters ?? []).filter((p: any) => !GENERIC_PRESENTER.test(String(p.name).trim())), quotes, disclaimers, checks,
    windows: windows.length, prompt_version: PROMPT_VERSION, llm: llmMeta,
  };
}

/** Flags that route the item through Opus review (D07). */
export function extractionFlags(x: VideoExtraction): string[] {
  const flags: string[] = [];
  const total = x.checks.quotes_kept + x.checks.quotes_dropped;
  if (total >= 4 && x.checks.quotes_dropped * 2 >= total) flags.push("quote-check");
  if (!x.chapters.length || !x.systems.length) flags.push("empty-extraction");
  return flags;
}

/** Content hash without run metadata, so a cached re-run yields the same output_hash. */
export function extractionHash(x: VideoExtraction): string {
  const { llm: _llm, ...rest } = x;
  return sha256(canonicalJson(rest));
}

/** Executor handler for the video `extracted` stage. */
export async function extractedHandler(item: ManifestItem, ctx: { dataDir: string }, llm: Llm = complete) {
  const x = await extractVideo(item, ctx.dataDir, llm);
  const path = extractionPath(ctx.dataDir, x.video_id);
  writeJson(path, x);
  return {
    output_hash: extractionHash(x),
    flags: extractionFlags(x),
    data: {
      path: `data/extract/video/${x.video_id}.json`, prompt: `${STAGE}@${PROMPT_VERSION}`, windows: x.windows,
      features: x.features.length, quotes: x.quotes.length, quotes_dropped: x.checks.quotes_dropped,
      models: [...new Set(x.llm.map((l) => l.model))], cost_usd: Number(x.llm.reduce((s, l) => s + (l.cost_usd ?? 0), 0).toFixed(6)),
    },
  };
}
