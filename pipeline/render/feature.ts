/**
 * Roadmap feature stubs (PLAN M1 step 5, deterministic): content/features/<roadmapId>.md + content/features/llms.txt.
 *
 * One page per Business Central item on the Microsoft 365 roadmap (the release plans' successor): Microsoft's own
 * description, the roadmap status mapped to our status vocabulary, the release wave derived from the GA month, and the
 * area mapped to a galaxy system. The roadmap pillar's `fetched` and `linked` stages only move items along;
 * `published` writes the page. Items that left the roadmap lose their page in the index step.
 * Coverage (videos and Learn pages that cover the feature) comes from data/links/roadmap.json (link/roadmap.ts); the
 * nightly re-renders published pages after linking, so coverage found later reaches pages written earlier.
 */
import { readdirSync } from "node:fs";
import { resolve } from "node:path";
import { stringify as toYaml } from "yaml";
import { taxonomy } from "../lib/config.js";
import { exists, listFiles, readJson, readText, removeIfExists, writeText } from "../lib/fsx.js";
import type { ManifestItem } from "../lib/manifest.js";
import { validateOrThrow } from "../lib/schema.js";
import { clip } from "../summarize/video.js";
import { systemFor } from "../link/toc.js";
import type { RoadmapEntry } from "../ingest/roadmap.js";
import { coverageByFeature, loadLinks, loadReview, type FeatureCoverage } from "../link/coverage.js";
import type { Manifest } from "../lib/manifest.js";
import type { StageContext, StageHandler } from "../orchestrator/execute.js";
import { PIPELINE_VERSION } from "../version.js";

const MONTHS = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
const cell = (s: string) => s.replace(/\|/g, "\\|").replace(/\s+/g, " ").trim();

/** "October CY2026" → "2026-10"; anything else → null. */
export function roadmapMonth(v: string | null | undefined): string | null {
  const m = String(v ?? "").trim().match(/^([A-Za-z]+)\s+CY(\d{4})$/);
  const i = m ? MONTHS.indexOf(m[1].toLowerCase()) : -1;
  return i >= 0 ? `${m![2]}-${String(i + 1).padStart(2, "0")}` : null;
}
/** Release waves start in April (wave 1) and October (wave 2); January to March still belong to the previous wave 2. */
export function waveOf(month: string | null): string | null {
  if (!month) return null;
  const [y, mo] = month.split("-").map(Number);
  if (mo >= 4 && mo <= 9) return `${y} release wave 1`;
  return `${mo >= 10 ? y : y - 1} release wave 2`;
}
/** Roadmap status → our vocabulary. "In development" is preview once its preview month has arrived. */
export function featureStatus(e: Pick<RoadmapEntry, "status" | "release_phase" | "preview">, now: Date): "ga" | "preview" | "announced" | "unclear" {
  const s = e.status.toLowerCase();
  if (s === "launched") return (e.release_phase ?? "").toLowerCase().includes("preview") ? "preview" : "ga";
  if (s === "in development" || s === "rolling out") {
    const p = roadmapMonth(e.preview);
    return p && p <= now.toISOString().slice(0, 7) ? "preview" : "announced";
  }
  return "unclear";
}
export function areaSystem(area: string | null): string | null {
  if (!area) return null;
  return taxonomy().roadmap_areas?.[area] ?? systemFor([area]);
}

const STATUS_LABEL = { ga: "generally available", preview: "in preview", announced: "announced", unclear: "status unclear" } as const;
export const featurePagePath = (contentDir: string, id: string) => resolve(contentDir, "features", `${id}.md`);

export function latestRoadmap(dataDir: string): Map<string, RoadmapEntry> {
  const snap = listFiles(resolve(dataDir, "roadmap", "snapshots"), ".json").sort().at(-1);
  return new Map(snap ? readJson<{ items: RoadmapEntry[] }>(snap).items.map((e) => [e.id, e]) : []);
}

const NO_COVERAGE: FeatureCoverage = { videos: [], learn: [] };
const at = (videoId: string, t: number) => `https://www.youtube.com/watch?v=${videoId}&t=${Math.floor(t)}s`;
/** Mark an unreviewed link only when the section mixes reviewed and unreviewed links. */
const unrev = (x: { reviewed: boolean }, reviewed: number) => (reviewed && !x.reviewed ? " (unreviewed)" : "");
const mss = (t: number) => `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, "0")}`;

export function renderFeaturePage(item: ManifestItem, e: RoadmapEntry, now: Date, cov: FeatureCoverage = NO_COVERAGE, hasVideoPage: (videoId: string) => boolean = () => false): string {
  const status = featureStatus(e, now);
  const ga = roadmapMonth(e.ga), preview = roadmapMonth(e.preview);
  const system = areaSystem(e.area);
  const summary = clip(`${e.area ? `${e.area}: ` : ""}${e.title}. ${STATUS_LABEL[status][0].toUpperCase()}${STATUS_LABEL[status].slice(1)}${ga ? `, GA ${ga}` : ""} (Microsoft 365 roadmap). ${e.description}`);
  const fm = {
    id: `feature/${e.id}`, type: "feature", title: e.title, summary, tier: "official", language: "en",
    ...(system ? { system } : {}), tags: e.area ? [e.area.toLowerCase()] : [],
    review: { state: "unreviewed", by: null, at: null, flags: [] },
    generated: { at: now.toISOString(), pipeline: PIPELINE_VERSION, prompts: {}, input_hash: item.input_hash ?? null },
    evidence: [
      { kind: "roadmap", url: item.url, title: `Microsoft 365 roadmap ${e.id}`, date: e.modified?.slice(0, 10) ?? null, commit: null, t: null, quote: null },
      ...cov.videos.map((v) => ({ kind: "video", url: at(v.video_id, v.t), title: `${v.title}: ${v.name}`, date: null, commit: null, t: v.t, quote: null })),
      ...cov.learn.map((l) => ({ kind: "learn", url: l.url, title: l.title, date: null, commit: null, t: null, quote: null })),
    ],
    links: { learn: [...new Set(cov.learn.map((l) => l.url))], objects: [], features: [], topics: [], localizations: [], videos: [...new Set(cov.videos.map((v) => `video/${v.video_id}`))], posts: [], guidelines: [] },
    roadmap_id: e.id, wave: waveOf(ga), status, roadmap_status: e.status, release_phase: e.release_phase, ga_date: ga, preview_date: preview,
    area: e.area, whatsnew_url: null, localizations: [], objects_touched: [],
  };
  validateOrThrow("frontmatter.feature", fm, `feature page ${e.id}`);
  const lines = [
    `# ${e.title}`, "",
    `> ${summary}`, "",
    `[Microsoft 365 roadmap ${e.id}](${item.url}) · ${e.area ?? "no area"} · ${STATUS_LABEL[status]} · roadmap status "${e.status}"${e.release_phase ? `, phase ${e.release_phase}` : ""}`, "",
    "## What Microsoft says", "", e.description || "(no description on the roadmap)", "",
    "## Dates", "", `- General availability: ${e.ga ?? "not given"}${fm.wave ? ` (${fm.wave})` : ""}`, `- Public preview: ${e.preview ?? "not given"}`,
    `- On the roadmap since ${e.created?.slice(0, 10) ?? "unknown"}, last changed ${e.modified?.slice(0, 10) ?? "unknown"}`, "",
  ];
  if (cov.videos.length || cov.learn.length) {
    const all = [...cov.videos, ...cov.learn];
    const reviewed = all.filter((x) => x.reviewed).length;
    const state = reviewed === all.length ? "Every link below was reviewed by Opus."
      : reviewed ? `${reviewed} of ${all.length} links reviewed by Opus; the others are marked unreviewed.` : "Machine-generated, not yet reviewed.";
    lines.push("## Covered by", "",
      `Matched by Haiku among videos and Learn pages in the same galaxy system, checked against the roadmap ids and the evidence text. ${state}`, "");
    if (cov.videos.length) {
      lines.push("### Videos", "");
      const byVideo = new Map<string, FeatureCoverage["videos"]>();
      for (const v of cov.videos) byVideo.set(v.video_id, [...(byVideo.get(v.video_id) ?? []), v]);
      for (const [id, vs] of byVideo) {
        const title = hasVideoPage(id) ? `[${cell(vs[0].title)}](../videos/${id}.md)` : cell(vs[0].title);
        lines.push(`- ${title}: ${vs.map((v) => `${cell(v.name)} at [${mss(v.t)}](${at(id, v.t)})${unrev(v, reviewed)}`).join("; ")}`);
      }
      lines.push("");
    }
    if (cov.learn.length) lines.push("### Microsoft Learn", "", ...cov.learn.map((l) => `- [${cell(l.title)}](${l.url})${unrev(l, reviewed)}`), "");
  }
  lines.push("Source: Microsoft 365 roadmap. Status words follow the roadmap.", "");
  return `---\n${toYaml(fm, { lineWidth: 0, version: "1.1" })}---\n\n${lines.join("\n").replace(/\n{3,}/g, "\n\n").trim()}\n`;
}

const stable = (p: string) => p.replace(/^(generated:\n {2}at: ).*$/m, "$1");

/** Write one feature page if its content changed. Null when the item left the roadmap. */
function writeFeaturePage(item: ManifestItem, roadmap: Map<string, RoadmapEntry>, cov: Map<string, FeatureCoverage>, contentDir: string, now: Date): string | null {
  const id = item.id.slice(item.id.lastIndexOf("/") + 1);
  const e = roadmap.get(id);
  if (!e) return null;
  const page = renderFeaturePage(item, e, now, cov.get(id), (v) => exists(resolve(contentDir, "videos", `${v}.md`)));
  const path = featurePagePath(contentDir, id);
  if (!exists(path) || stable(readText(path)) !== stable(page)) writeText(path, page);
  return id;
}

/** Roadmap `published`: write the feature page from the latest snapshot and the current roadmap links. */
export function featurePublished(): StageHandler {
  return async (item, ctx: StageContext) => {
    const id = writeFeaturePage(item, latestRoadmap(ctx.dataDir), coverageByFeature(loadLinks(ctx.dataDir), loadReview(ctx.dataDir)), ctx.contentDir, ctx.now());
    if (!id) return { skip: "removed-upstream" };
    return { data: { path: `content/features/${id}.md` }, output_hash: item.input_hash ?? undefined };
  };
}

/** After linking: re-render every published feature page so coverage found tonight reaches it. Returns pages written or kept. */
export function rerenderFeaturePages(manifest: Manifest, dataDir: string, contentDir: string, now: Date): number {
  const roadmap = latestRoadmap(dataDir);
  const cov = coverageByFeature(loadLinks(dataDir), loadReview(dataDir));
  return manifest.list("roadmap").filter((i) => i.stages.published).map((i) => writeFeaturePage(i, roadmap, cov, contentDir, now)).filter(Boolean).length;
}

/** content/features/llms.txt, newest wave first; drops pages of items no longer on the roadmap. */
export function renderFeatureIndex(contentDir: string, dataDir: string): number {
  const dir = resolve(contentDir, "features");
  if (!exists(dir)) return 0;
  const live = latestRoadmap(dataDir);
  for (const f of readdirSync(dir).filter((n) => n.endsWith(".md"))) if (!live.has(f.slice(0, -3))) removeIfExists(resolve(dir, f));
  const pages = readdirSync(dir).filter((n) => n.endsWith(".md")).map((f) => live.get(f.slice(0, -3))!).filter(Boolean);
  if (!pages.length) { removeIfExists(resolve(dir, "llms.txt")); return 0; }
  const now = new Date();
  const rows = pages.map((e) => ({ e, ga: roadmapMonth(e.ga) ?? "", status: featureStatus(e, now) }))
    .sort((a, b) => b.ga.localeCompare(a.ga) || (a.e.area ?? "").localeCompare(b.e.area ?? "") || a.e.title.localeCompare(b.e.title));
  const text = [
    "# BC Observatory: features", "",
    "> Business Central features from the Microsoft 365 roadmap (the successor of the release plans): status, wave, dates and",
    "> Microsoft's description. Each page has strict frontmatter (schemas/frontmatter.feature.json).", "",
    `${rows.length} features, newest GA month first.`, "",
    ...rows.map(({ e, ga, status }) => `- [${cell(e.title)}](${e.id}.md): ${e.area ?? "no area"}, ${STATUS_LABEL[status]}${ga ? `, GA ${ga}` : ""}`),
    "",
  ].join("\n");
  const idx = resolve(dir, "llms.txt");
  if (!exists(idx) || readText(idx) !== text) writeText(idx, text);
  return rows.length;
}
