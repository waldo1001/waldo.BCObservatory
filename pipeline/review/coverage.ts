/**
 * Opus review of roadmap coverage (D07, D21, D22; quota coverage_reviews, role `review`).
 *
 * One call per roadmap feature: Opus gets the feature's full roadmap text and every link the Haiku matcher found for
 * it (video features and Learn pages, each with the evidence text the matcher saw and its quote) and keeps or drops
 * each link. Verdicts are stored per link and unit hash (data/links/roadmap-review.json); views leave dropped links
 * out (link/coverage.ts), so a dropped video link also stops passing the roadmap status to that video feature.
 * A feature is due when one of its links has no verdict yet; features with the most unreviewed links go first.
 */
import { exists, readJson, writeJson } from "../lib/fsx.js";
import { complete, LlmBudgetExhausted, LlmInfraError } from "../lib/llm.js";
import { logger } from "../lib/log.js";
import type { RoadmapEntry } from "../ingest/roadmap.js";
import { docExtractionPath, type DocExtraction } from "../extract/docs.js";
import { extractionPath, type Llm, type VideoExtraction } from "../extract/video.js";
import { pool } from "../summarize/hub.js";
import { tidy } from "../summarize/video.js";
import { latestRoadmap } from "../render/feature.js";
import {
  loadLinks, loadReview, reviewPath, verdictKey, verdictOf, videoLinkKey,
  type CoverageReview, type RoadmapLinks, type VideoMatch,
} from "../link/coverage.js";

export const PROMPT_VERSION = 1;
export const STAGE = "review-coverage";
const log = logger("coverage-review");

export const SYSTEM = `You review links between Microsoft 365 roadmap features of Microsoft Dynamics 365 Business Central and the evidence that covers them, before the links are published.
Another model proposed each link from the evidence text shown. You get the roadmap feature and every proposed link, each with a ref, the evidence text and the words the other model quoted.

For each link decide:
- keep: the evidence announces, demonstrates, explains or documents the capability this roadmap feature adds, or a part of it (one of its settings, steps, tools or behaviors). A video segment that shows one piece of the feature is kept.
- drop: the evidence only shares the product area, agent, module or topic, describes a different or older capability, or is too general to tell. A Learn page about an agent or module in general is dropped unless its text describes this feature.
Judge only from the texts given. reason: one short sentence. Return exactly one verdict per ref.`;

export const reviewSchema = (refs: string[]) => ({
  type: "object", additionalProperties: false, required: ["verdicts"],
  properties: {
    verdicts: {
      type: "array",
      items: {
        type: "object", additionalProperties: false, required: ["ref", "verdict", "reason"],
        properties: { ref: { type: "string", enum: refs }, verdict: { type: "string", enum: ["keep", "drop"] }, reason: { type: "string" } },
      },
    },
  },
});

export interface ReviewLink { ref: string; key: string; hash: string; kind: "video" | "learn"; title: string; text: string; quote: string }
export interface CoverageReviewRun { candidates: number; reviewed: number; kept: number; dropped: number; failed: number; cost_usd: number; stopped: string; errors: string[] }

/** Every link per roadmap id, with the evidence text the matcher saw. Links whose extraction is gone are skipped. */
export function gatherLinks(links: RoadmapLinks, dataDir: string): Map<string, ReviewLink[]> {
  const m = new Map<string, ReviewLink[]>();
  const add = (id: string, l: Omit<ReviewLink, "ref">) => m.set(id, [...(m.get(id) ?? []), { ...l, ref: "" }]);
  const videos = new Map<string, VideoExtraction | null>();
  for (const u of Object.values(links.units)) {
    if (!u.matches.length) continue;
    if (u.kind === "video") {
      if (!videos.has(u.video_id)) { const p = extractionPath(dataDir, u.video_id); videos.set(u.video_id, exists(p) ? readJson<VideoExtraction>(p) : null); }
      const x = videos.get(u.video_id);
      for (const mt of u.matches as VideoMatch[]) {
        const f = x?.features[mt.feature];
        if (!f) continue;
        add(mt.roadmap_id, { key: videoLinkKey(u.video_id, mt.feature), hash: u.hash, kind: "video", title: `${u.title}, at ${mt.t} s`, text: `${f.name}. ${f.description}`, quote: mt.quote });
      }
    } else {
      const p = docExtractionPath(dataDir, { id: u.key, source: u.key.split("/")[1] ?? "" });
      if (!exists(p)) continue;
      const d = readJson<DocExtraction>(p);
      const text = [d.summary, ...(d.features.length ? [`Features: ${d.features.join("; ")}`] : []), ...(d.versions.length ? [`Versions: ${d.versions.join("; ")}`] : [])].join(" ");
      for (const mt of u.matches) add(mt.roadmap_id, { key: u.key, hash: u.hash, kind: "learn", title: `Microsoft Learn: ${u.title}`, text, quote: mt.quote });
    }
  }
  for (const ls of m.values()) {
    ls.sort((a, b) => a.key.localeCompare(b.key));
    ls.forEach((l, i) => (l.ref = `l${i + 1}`));
  }
  return m;
}

export function reviewPrompt(e: RoadmapEntry, ls: ReviewLink[]): string {
  return `Roadmap feature (JSON):
${JSON.stringify({ id: e.id, area: e.area, title: e.title, description: e.description }, null, 1)}

Proposed links (JSON):
${JSON.stringify(ls.map((l) => ({ ref: l.ref, kind: l.kind, source: l.title, evidence: l.text, quoted: l.quote })), null, 1)}`;
}

export async function reviewCoverage(
  dataDir: string,
  o: { quota: number; deadline: Date; clock: () => Date; llm?: Llm; concurrency?: number },
): Promise<CoverageReviewRun> {
  const llm = o.llm ?? complete;
  const roadmap = latestRoadmap(dataDir);
  const review = loadReview(dataDir);
  const byFeature = gatherLinks(loadLinks(dataDir), dataDir);
  const todo = [...byFeature].filter(([id]) => roadmap.has(id))
    .map(([id, ls]) => ({ id, ls, open: ls.filter((l) => !verdictOf(review, id, l.key, l.hash)).length }))
    .filter((t) => t.open > 0).sort((a, b) => b.open - a.open || a.id.localeCompare(b.id));
  const run: CoverageReviewRun = { candidates: todo.length, reviewed: 0, kept: 0, dropped: 0, failed: 0, cost_usd: 0, stopped: "done", errors: [] };
  let started = 0;
  await pool(todo, o.concurrency ?? 1, async ({ id, ls }) => {
    if (run.stopped !== "done") return;
    if (started >= o.quota) { run.stopped = "quota"; return; }
    if (o.clock().getTime() >= o.deadline.getTime()) { run.stopped = "deadline"; return; }
    started++;
    try {
      const res = await llm<{ verdicts: { ref: string; verdict: "keep" | "drop"; reason: string }[] }>({
        stage: STAGE, promptVersion: PROMPT_VERSION, role: "review", system: SYSTEM, schema: reviewSchema(ls.map((l) => l.ref)),
        prompt: reviewPrompt(roadmap.get(id)!, ls), inputs: ls.map((l) => ({ kind: "roadmap-link", id: `${id}/${l.key}`, hash: l.hash })), label: `feature/${id} coverage review`,
      });
      if (!res.cached) run.cost_usd += res.meta.cost_usd ?? 0;
      const byRef = new Map(res.output.verdicts.map((v) => [v.ref, v]));
      // one verdict per ref, or the review is not trusted at all (the feature stays due)
      if (byRef.size !== ls.length || res.output.verdicts.length !== ls.length) throw new Error(`expected ${ls.length} verdicts, got ${res.output.verdicts.length} for ${byRef.size} refs`);
      const at = o.clock().toISOString();
      const kept: Record<string, CoverageReview["verdicts"][string][string]> = {};
      for (const l of ls) {
        const v = byRef.get(l.ref)!;
        kept[verdictKey(l.key, l.hash)] = { verdict: v.verdict, reason: tidy(v.reason).slice(0, 300), at };
        if (v.verdict === "keep") run.kept++; else run.dropped++;
      }
      review.verdicts[id] = kept; // only this feature's current links: verdicts of links that are gone fall away
      run.reviewed++;
    } catch (e) {
      if (e instanceof LlmBudgetExhausted) { run.stopped = "spend-cap"; return; }
      if (e instanceof LlmInfraError) { run.stopped = "aborted"; run.errors.push(`feature/${id}: ${e.message}`); return; }
      run.failed++;
      run.errors.push(`feature/${id} coverage review: ${String((e as Error).message).slice(0, 200)}`);
      log.warn(`feature/${id} coverage review failed: ${String((e as Error).message).slice(0, 200)}`);
    }
  });
  if (run.reviewed) {
    const verdicts = Object.fromEntries(Object.entries(review.verdicts).filter(([id]) => roadmap.has(id)).sort(([a], [b]) => a.localeCompare(b)));
    writeJson(reviewPath(dataDir), { prompt_version: PROMPT_VERSION, verdicts });
  }
  return run;
}
