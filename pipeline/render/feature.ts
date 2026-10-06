/**
 * Roadmap feature stubs (PLAN M1 step 5, deterministic): content/features/<roadmapId>.md + content/features/llms.txt.
 *
 * One page per Business Central item on the Microsoft 365 roadmap (the release plans' successor): Microsoft's own
 * description, the roadmap status mapped to our status vocabulary, the release wave derived from the GA month, and the
 * area mapped to a galaxy system. The roadmap pillar's `fetched` and `linked` stages only move items along;
 * `published` writes the page. Items that left the roadmap lose their page in the index step.
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

export function renderFeaturePage(item: ManifestItem, e: RoadmapEntry, now: Date): string {
  const status = featureStatus(e, now);
  const ga = roadmapMonth(e.ga), preview = roadmapMonth(e.preview);
  const system = areaSystem(e.area);
  const summary = clip(`${e.area ? `${e.area}: ` : ""}${e.title}. ${STATUS_LABEL[status][0].toUpperCase()}${STATUS_LABEL[status].slice(1)}${ga ? `, GA ${ga}` : ""} (Microsoft 365 roadmap). ${e.description}`);
  const fm = {
    id: `feature/${e.id}`, type: "feature", title: e.title, summary, tier: "official", language: "en",
    ...(system ? { system } : {}), tags: e.area ? [e.area.toLowerCase()] : [],
    review: { state: "unreviewed", by: null, at: null, flags: [] },
    generated: { at: now.toISOString(), pipeline: PIPELINE_VERSION, prompts: {}, input_hash: item.input_hash ?? null },
    evidence: [{ kind: "roadmap", url: item.url, title: `Microsoft 365 roadmap ${e.id}`, date: e.modified?.slice(0, 10) ?? null, commit: null, t: null, quote: null }],
    links: { learn: [], objects: [], features: [], topics: [], localizations: [], videos: [], posts: [], guidelines: [] },
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
    "Source: Microsoft 365 roadmap. Status words follow the roadmap; videos and Learn pages that cover this feature will be linked here.", "",
  ];
  return `---\n${toYaml(fm, { lineWidth: 0, version: "1.1" })}---\n\n${lines.join("\n").replace(/\n{3,}/g, "\n\n").trim()}\n`;
}

const stable = (p: string) => p.replace(/^(generated:\n {2}at: ).*$/m, "$1");

/** Roadmap `published`: write the feature page from the latest snapshot. */
export function featurePublished(): StageHandler {
  return async (item, ctx: StageContext) => {
    const id = item.id.slice(item.id.lastIndexOf("/") + 1);
    const e = latestRoadmap(ctx.dataDir).get(id);
    if (!e) return { skip: "removed-upstream" };
    const page = renderFeaturePage(item, e, ctx.now());
    const path = featurePagePath(ctx.contentDir, id);
    if (!exists(path) || stable(readText(path)) !== stable(page)) writeText(path, page);
    return { data: { path: `content/features/${id}.md` }, output_hash: item.input_hash ?? undefined };
  };
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
