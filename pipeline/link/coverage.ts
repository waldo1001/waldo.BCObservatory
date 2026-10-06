/**
 * Read side of the roadmap links (data/links/roadmap.json, written by link/roadmap.ts) and of their Opus review
 * (data/links/roadmap-review.json, review/coverage.ts): types and the views the feature and video pages render from.
 * No LLM and no render imports, so renderers can use it without a cycle.
 *
 * Reviews gate (D21): a link Opus dropped is left out of every view. A verdict belongs to one link of one unit hash
 * (linkKey@hash), so changed evidence or candidates need a new verdict and show as unreviewed until they get one.
 */
import { resolve } from "node:path";
import { readJsonOr } from "../lib/fsx.js";

export interface VideoMatch { feature: number; name: string; t: number; roadmap_id: string; quote: string }
export interface DocMatch { roadmap_id: string; quote: string }
export interface VideoUnit { kind: "video"; key: string; hash: string; video_id: string; title: string; at: string; matches: VideoMatch[] }
export interface DocUnit { kind: "doc"; key: string; hash: string; url: string; title: string; at: string; matches: DocMatch[] }
export type LinkUnit = VideoUnit | DocUnit;
export interface RoadmapLinks { prompt_version: number; units: Record<string, LinkUnit> }

export const linksPath = (dataDir: string) => resolve(dataDir, "links", "roadmap.json");
export const loadLinks = (dataDir: string): RoadmapLinks => readJsonOr<RoadmapLinks>(linksPath(dataDir), { prompt_version: 0, units: {} });

export interface Verdict { verdict: "keep" | "drop"; reason: string; at: string }
/** roadmap id -> linkKey@hash -> verdict. */
export interface CoverageReview { prompt_version: number; verdicts: Record<string, Record<string, Verdict>> }
export const reviewPath = (dataDir: string) => resolve(dataDir, "links", "roadmap-review.json");
export const loadReview = (dataDir: string): CoverageReview => readJsonOr<CoverageReview>(reviewPath(dataDir), { prompt_version: 0, verdicts: {} });
const NO_REVIEW: CoverageReview = { prompt_version: 0, verdicts: {} };

/** A link: one video feature (video/<id>#<feature index>) or one Learn page (its item id). */
export const videoLinkKey = (videoId: string, feature: number) => `video/${videoId}#${feature}`;
export const verdictKey = (linkKey: string, unitHash: string) => `${linkKey}@${unitHash.slice(0, 16)}`;
export function verdictOf(review: CoverageReview, roadmapId: string, linkKey: string, unitHash: string): Verdict | undefined {
  return review.verdicts[roadmapId]?.[verdictKey(linkKey, unitHash)];
}

export interface FeatureCoverage {
  videos: { video_id: string; title: string; name: string; t: number; quote: string; reviewed: boolean }[];
  learn: { url: string; title: string; quote: string; reviewed: boolean }[];
}
/** Per roadmap id: the videos (with the feature and second) and Learn pages that cover it, minus links Opus dropped. */
export function coverageByFeature(links: RoadmapLinks, review: CoverageReview = NO_REVIEW): Map<string, FeatureCoverage> {
  const m = new Map<string, FeatureCoverage>();
  const get = (id: string) => m.get(id) ?? (m.set(id, { videos: [], learn: [] }), m.get(id)!);
  for (const u of Object.values(links.units)) {
    for (const x of u.matches) {
      const key = u.kind === "video" ? videoLinkKey(u.video_id, (x as VideoMatch).feature) : u.key;
      const v = verdictOf(review, x.roadmap_id, key, u.hash);
      if (v?.verdict === "drop") continue;
      if (u.kind === "video") { const f = x as VideoMatch; get(x.roadmap_id).videos.push({ video_id: u.video_id, title: u.title, name: f.name, t: f.t, quote: x.quote, reviewed: !!v }); }
      else get(x.roadmap_id).learn.push({ url: u.url, title: u.title, quote: x.quote, reviewed: !!v });
    }
  }
  for (const c of m.values()) {
    c.videos.sort((a, b) => a.video_id.localeCompare(b.video_id) || a.t - b.t);
    c.learn.sort((a, b) => a.url.localeCompare(b.url));
  }
  return m;
}
/** Per video: feature index -> the roadmap ids it covers (minus links Opus dropped), in id order. */
export function roadmapByVideoFeature(links: RoadmapLinks, videoId: string, review: CoverageReview = NO_REVIEW): Map<number, string[]> {
  const u = links.units[`video/${videoId}`];
  const m = new Map<number, string[]>();
  if (u?.kind !== "video") return m;
  for (const x of u.matches) {
    if (verdictOf(review, x.roadmap_id, videoLinkKey(videoId, x.feature), u.hash)?.verdict === "drop") continue;
    m.set(x.feature, [...new Set([...(m.get(x.feature) ?? []), x.roadmap_id])].sort());
  }
  return m;
}
