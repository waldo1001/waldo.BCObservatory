/**
 * Read side of the roadmap links (data/links/roadmap.json, written by link/roadmap.ts): types and the views the
 * feature and video pages render from. No LLM and no render imports, so renderers can use it without a cycle.
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

export interface FeatureCoverage {
  videos: { video_id: string; title: string; name: string; t: number; quote: string }[];
  learn: { url: string; title: string; quote: string }[];
}
/** Per roadmap id: the videos (with the feature and second) and Learn pages that cover it. */
export function coverageByFeature(links: RoadmapLinks): Map<string, FeatureCoverage> {
  const m = new Map<string, FeatureCoverage>();
  const get = (id: string) => m.get(id) ?? (m.set(id, { videos: [], learn: [] }), m.get(id)!);
  for (const u of Object.values(links.units)) {
    if (u.kind === "video") for (const x of u.matches) get(x.roadmap_id).videos.push({ video_id: u.video_id, title: u.title, name: x.name, t: x.t, quote: x.quote });
    else for (const x of u.matches) get(x.roadmap_id).learn.push({ url: u.url, title: u.title, quote: x.quote });
  }
  for (const c of m.values()) {
    c.videos.sort((a, b) => a.video_id.localeCompare(b.video_id) || a.t - b.t);
    c.learn.sort((a, b) => a.url.localeCompare(b.url));
  }
  return m;
}
/** Per video: feature index -> the roadmap ids it covers, in id order. */
export function roadmapByVideoFeature(links: RoadmapLinks, videoId: string): Map<number, string[]> {
  const u = links.units[`video/${videoId}`];
  const m = new Map<number, string[]>();
  if (u?.kind === "video") for (const x of u.matches) m.set(x.feature, [...new Set([...(m.get(x.feature) ?? []), x.roadmap_id])].sort());
  return m;
}
