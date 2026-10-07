/**
 * Opus review of every video (PLAN 4.3 stage 7, D07, D77, role `review`): every video reaches `reviewed`, flagged or
 * not (an unflagged one gets the same prompt with `flags: []`). Published videos from before D77 are rewound to
 * `linked` by the nightly (videoReviewDue) within the video_reviews quota, so the backlog drains newest first.
 *
 * Opus sees the transcript segments, the validated extraction, the summary and the flags, and returns a verdict
 * with structured edits. Edits are applied deterministically and pass the same validators as the first pass:
 * a status change needs a verbatim evidence quote that states the status, added quotes must be verbatim, prose is
 * tidied and clipped. Whatever fails validation is dropped and listed in the review record. `reject` ends the item
 * as skipped (`review-rejected`): no page is better than a wrong page. A video that already had a page (the backlog)
 * loses it and its summary, so the nightly's re-render does not bring it back.
 *
 * Writes data/review/video/<id>.json (with the input hash it reviewed, D21) and rewrites the extraction and summary
 * files the `published` stage reads.
 */
import { rmSync } from "node:fs";
import { resolve } from "node:path";
import { exists, readJson, writeJson } from "../lib/fsx.js";
import { complete } from "../lib/llm.js";
import { rewind, type Manifest, type ManifestItem } from "../lib/manifest.js";
import { checkQuote, type Seg } from "../lib/quotes.js";
import { canonicalJson, sha256 } from "../lib/text.js";
import { captionSegmentsPath, communityLeak, guardCommunity, extractionPath, statusSupported, type Llm, type VideoExtraction } from "../extract/video.js";
import { STATUSES } from "../extract/video-schema.js";
import { clip, summaryPath, tidy, type VideoSummary } from "../summarize/video.js";

/** 2 (D77): unflagged videos are reviewed too; the system prompt no longer says every video was flagged. */
export const PROMPT_VERSION = 2;
export const STAGE = "review-video";

export const reviewSchema = {
  type: "object", additionalProperties: false,
  required: ["verdict", "issues", "summary", "key_points", "drop_features", "feature_status", "drop_quotes", "add_quotes"],
  properties: {
    verdict: { type: "string", enum: ["approve", "fix", "reject"] },
    issues: { type: "array", items: { type: "string" } },
    summary: { type: ["string", "null"], description: "replacement summary, or null to keep it" },
    key_points: { type: ["array", "null"], items: { type: "string" } },
    drop_features: { type: "array", items: { type: "string" } },
    feature_status: {
      type: "array",
      items: {
        type: "object", additionalProperties: false, required: ["name", "status", "evidence_t", "evidence_quote"],
        properties: { name: { type: "string" }, status: { type: "string", enum: [...STATUSES] }, evidence_t: { type: ["number", "null"] }, evidence_quote: { type: ["string", "null"] } },
      },
    },
    drop_quotes: { type: "array", items: { type: "number" }, description: "t of quotes to remove" },
    add_quotes: {
      type: "array",
      items: { type: "object", additionalProperties: false, required: ["t", "text", "why_it_matters"], properties: { t: { type: "number" }, text: { type: "string" }, why_it_matters: { type: "string" } } },
    },
  },
};
type ReviewOut = {
  verdict: "approve" | "fix" | "reject"; issues: string[]; summary: string | null; key_points: string[] | null;
  drop_features: string[]; feature_status: { name: string; status: string; evidence_t: number | null; evidence_quote: string | null }[];
  drop_quotes: number[];
  add_quotes: { t: number; text: string; why_it_matters: string }[];
};

export interface VideoReview {
  video_id: string; item_id: string; flags: string[]; verdict: ReviewOut["verdict"]; issues: string[];
  /** Hash of the extraction and summary Opus reviewed (D21, D77); absent in records written before D77. */
  input_hash?: string; by?: string; at?: string;
  applied: string[]; rejected_edits: string[]; prompt_version: number;
  llm: { model: string; cached: boolean; cost_usd: number | null };
}

export const SYSTEM = `You review a machine-generated knowledge page about a Microsoft Dynamics 365 Business Central video before it is published.
The page was built from the video's captions by a smaller model, then validated. Every page is reviewed; when the first pass flagged it, the flags say why (an empty list means nothing was flagged, not that the page is right).
You get the transcript segments (the only ground truth), the extracted facts, the summary and the flags.

Decide:
- approve: the facts and summary are supported by the transcript; no edits needed.
- fix: correct what is wrong with the edit fields. Keep everything that is right.
- reject: the transcript is unusable for a page (wrong language, music only, garbled captions, not about Business Central).

Edit rules:
- Only claims the transcript supports. No outside knowledge.
- Quotes are verbatim spans of the transcript; a span may run on into the next segment (captions split sentences). Do not replace a verbatim quote just because it crosses a segment boundary or differs only in case or punctuation.
- feature_status: a status other than "unclear" needs evidence_quote, a verbatim span (8 to 24 words) that states the status, and evidence_t, the t of the segment where it starts.
- drop_quotes: t of quotes that are not in the transcript or say nothing useful. add_quotes: verbatim spans, 8 to 24 words, t = the segment where they start; only for something the page is missing.
- summary: 1 to 3 sentences, at most 600 characters, agent-facing; null keeps the current one. key_points: null keeps them.
- drop_features: exact names of features that the transcript does not support.
- issues: short notes on what you found, also when approving. No em-dashes.`;

export function reviewPrompt(x: VideoExtraction, s: VideoSummary, flags: string[], segs: Seg[]): string {
  const facts = {
    flags, checks: x.checks, systems: x.systems, topics: x.topics, chapters: x.chapters,
    features: x.features.map((f) => ({ name: f.name, status: f.status, description: f.description, evidence_quote: f.status_evidence_quote, t_start: f.t_start })),
    quotes: x.quotes.map((q) => ({ t: q.t, text: q.text })), summary: s.summary, key_points: s.key_points,
  };
  return `Video: "${x.title}" (${Math.round(x.duration_s)} seconds).

Page facts and flags (JSON):
${JSON.stringify(facts, null, 1)}

Transcript segments (JSON, one per line, t in seconds):
${segs.map((g) => JSON.stringify({ t: g.t, text: g.text })).join("\n")}`;
}

/** Apply Opus's edits through the same validators as the first pass. Pure: returns new objects and a log. */
export function applyReview(x: VideoExtraction, s: VideoSummary, out: ReviewOut, segs: Seg[]) {
  const applied: string[] = [], rejected: string[] = [];
  let features = x.features;
  if (out.drop_features.length) {
    const drop = new Set(out.drop_features.map((n) => n.toLowerCase().trim()));
    const before = features.length;
    features = features.filter((f) => !drop.has(f.name.toLowerCase().trim()));
    applied.push(`dropped ${before - features.length} feature(s)`);
    for (const n of out.drop_features) if (!x.features.some((f) => f.name.toLowerCase().trim() === n.toLowerCase().trim())) rejected.push(`drop: no feature named "${n}"`);
  }
  for (const fs of out.feature_status) {
    const i = features.findIndex((f) => f.name.toLowerCase().trim() === fs.name.toLowerCase().trim());
    if (i < 0) { rejected.push(`status: no feature named "${fs.name}"`); continue; }
    if (fs.status === "unclear") {
      features = features.map((f, j) => (j === i ? { ...f, status: "unclear", status_evidence_t: null, status_evidence_quote: null, status_evidence_verified: false } : f));
      applied.push(`${fs.name}: status unclear`);
      continue;
    }
    const c = fs.evidence_quote && typeof fs.evidence_t === "number" ? checkQuote(segs, fs.evidence_quote, fs.evidence_t, { minWords: 3 }) : null;
    if (!c?.ok || !statusSupported(fs.status, c.text)) { rejected.push(`status ${fs.name} -> ${fs.status}: evidence not verbatim or does not state the status`); continue; }
    features = features.map((f, j) => (j === i ? { ...f, status: fs.status, status_evidence_t: c.t, status_evidence_quote: c.text, status_evidence_verified: true } : f));
    applied.push(`${fs.name}: status ${fs.status}`);
  }
  const dropT = new Set(out.drop_quotes.map((t) => Math.round(t)));
  const quotes = x.quotes.filter((q) => !dropT.has(Math.round(q.t)));
  if (quotes.length < x.quotes.length) applied.push(`dropped ${x.quotes.length - quotes.length} quote(s)`);
  for (const q of out.add_quotes) {
    const c = checkQuote(segs, q.text, q.t, { minWords: 6 });
    if (!c.ok) { rejected.push(`quote at ${q.t}: ${c.reason}`); continue; }
    if (quotes.some((e) => Math.abs(e.t - c.t) < 2 && e.text.toLowerCase() === c.text.toLowerCase())) continue;
    quotes.push({ t: c.t, text: c.text, why_it_matters: q.why_it_matters, check: c.reason });
    applied.push(`quote at ${Math.round(c.t)}s`);
  }
  quotes.sort((a, b) => a.t - b.t);
  const summary = out.summary ? clip(tidy(out.summary)) : s.summary;
  if (out.summary) applied.push("summary rewritten");
  const key_points = out.key_points?.length ? out.key_points.map(tidy).filter(Boolean).slice(0, 7) : s.key_points;
  if (out.key_points?.length) applied.push("key points rewritten");
  return { x: { ...x, features, quotes }, s: { ...s, summary, key_points }, applied, rejected };
}

export const reviewPath = (dataDir: string, videoId: string) => resolve(dataDir, "review", "video", `${videoId}.json`);

/** The hash a review is tied to: the extraction and the summary as Opus saw them (D21). */
export const videoInputHash = (x: VideoExtraction, s: VideoSummary) => sha256(canonicalJson({ x: { ...x, llm: [] }, s: { ...s, llm: null } }));

/**
 * D77 backlog: a published video whose current extraction and summary carry no review yet. Videos reviewed before
 * D77 (flagged ones, no input_hash in the record) count as reviewed when the item says so.
 */
export function videoReviewDue(item: ManifestItem, dataDir: string): boolean {
  if (item.pillar !== "video" || item.state !== "published") return false;
  const id = item.id.slice(item.id.lastIndexOf("/") + 1);
  const xPath = extractionPath(dataDir, id), sPath = summaryPath(dataDir, id);
  if (!exists(xPath) || !exists(sPath) || !exists(captionSegmentsPath(item, dataDir))) return false;
  const rp = reviewPath(dataDir, id);
  if (!exists(rp)) return true;
  const rec = readJson<VideoReview>(rp);
  if (!rec.input_hash) return item.review?.state !== "reviewed";
  return rec.input_hash !== videoInputHash(readJson<VideoExtraction>(xPath), readJson<VideoSummary>(sPath));
}

/**
 * D77 backlog: rewind up to `limit` due published videos, newest first, to `linked`, so tonight's plan runs their
 * `reviewed` stage (quota video_reviews) and then re-publishes them. Their pages stay on disk meanwhile and the
 * re-render keeps them current (it reads stages.published, not the state). Returns the ids rewound; the nightly hands
 * the ones the run did not reach to restoreVideoBacklog, so a cut-short run leaves no video out of the digests.
 */
export function rewindVideoBacklog(manifest: Pick<Manifest, "list" | "save">, dataDir: string, limit: number): string[] {
  if (limit <= 0) return [];
  const due = manifest.list("video").filter((i) => i.stages.linked && videoReviewDue(i, dataDir))
    .sort((a, b) => (b.published_at ?? "").localeCompare(a.published_at ?? "") || a.id.localeCompare(b.id)).slice(0, limit);
  for (const it of due) manifest.save(rewind(it, "linked"));
  return due.map((i) => i.id);
}

/** Rewound backlog videos still at `linked` after the run go back to `published` unchanged; returns how many. */
export function restoreVideoBacklog(manifest: Pick<Manifest, "get" | "save">, ids: string[]): number {
  let n = 0;
  for (const id of ids) {
    const it = manifest.get(id);
    if (it?.state === "linked" && it.stages.published) { manifest.save({ ...it, state: "published", attempts: 0, last_error: null, retry_after: null }); n++; }
  }
  return n;
}

/** Executor handler for the video `reviewed` stage: every video (D77), flagged or not. */
export async function reviewedHandler(item: ManifestItem, ctx: { dataDir: string; now: () => Date; contentDir?: string }, llm: Llm = complete) {
  const id = item.id.slice(item.id.lastIndexOf("/") + 1);
  const xPath = extractionPath(ctx.dataDir, id), sPath = summaryPath(ctx.dataDir, id), segPath = captionSegmentsPath(item, ctx.dataDir);
  for (const p of [xPath, sPath, segPath]) if (!exists(p)) throw new Error(`review input missing: ${p}`);
  const x = readJson<VideoExtraction>(xPath), s = readJson<VideoSummary>(sPath);
  const segs = readJson<{ segments: Seg[] }>(segPath).segments;
  const flags = item.flags ?? [];
  const res = await llm<ReviewOut>({
    stage: STAGE, promptVersion: PROMPT_VERSION, role: "review", system: SYSTEM, schema: reviewSchema,
    prompt: reviewPrompt(x, s, flags, segs), label: `${id} review`,
    inputs: [{ kind: "extraction", id: item.id, hash: sha256(canonicalJson({ ...x, llm: [] })) }, { kind: "summary", id: item.id, hash: sha256(canonicalJson({ ...s, llm: null })) }],
  });
  const out = res.output;
  const record: VideoReview = {
    video_id: id, item_id: item.id, flags, verdict: out.verdict, issues: out.issues.map(tidy), input_hash: videoInputHash(x, s), by: "opus", at: ctx.now().toISOString(),
    applied: [], rejected_edits: [], prompt_version: PROMPT_VERSION, llm: { model: res.meta.model, cached: res.cached, cost_usd: res.cached ? null : res.meta.cost_usd ?? null },
  };
  const at = ctx.now().toISOString();
  if (out.verdict === "reject") {
    if (communityLeak(item, ctx.dataDir, record.issues)) record.issues = [];
    writeJson(reviewPath(ctx.dataDir, id), record);
    // a backlog video already has a page: remove it and the rejected summary (the re-render reads the summary)
    if (item.stages.published) {
      rmSync(sPath, { force: true });
      if (ctx.contentDir) rmSync(resolve(ctx.contentDir, "videos", `${id}.md`), { force: true });
    }
    return { skip: "review-rejected", data: { path: `data/review/video/${id}.json`, verdict: "reject", issues: record.issues.length } };
  }
  if (out.verdict === "fix") {
    const r = applyReview(x, s, out, segs);
    record.applied = r.applied;
    record.rejected_edits = r.rejected;
    // Opus edits of a community video pass the same leak guard as the first pass (D21, D24, D33)
    const g = guardCommunity(item, ctx.dataDir, { x: r.x, s: r.s, issues: record.issues });
    if (!g) return { skip: "leak", data: { stage: "reviewed" } };
    record.issues = g.value.issues;
    // the record is tied to what the page now shows, so the next night does not review the fixed text again
    record.input_hash = videoInputHash(g.value.x, g.value.s);
    writeJson(xPath, g.value.x);
    writeJson(sPath, g.value.s);
  } else if (communityLeak(item, ctx.dataDir, record.issues)) {
    record.issues = []; // the review record is public; issues that repeat the captions are dropped
  }
  writeJson(reviewPath(ctx.dataDir, id), record);
  return {
    patch: { review: { state: "reviewed" as const, by: "opus", at } },
    output_hash: sha256(canonicalJson({ ...record, llm: null })),
    data: { path: `data/review/video/${id}.json`, verdict: out.verdict, applied: record.applied.length, rejected_edits: record.rejected_edits.length, model: record.llm.model, cost_usd: record.llm.cost_usd },
  };
}
