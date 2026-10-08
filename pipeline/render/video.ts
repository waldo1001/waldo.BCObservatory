/**
 * Video pages (PLAN 4.3 stages 6 and 8, deterministic): `linked` and `published` handlers plus the section index.
 *
 * content/videos/<videoId>.md = strict frontmatter (schemas/frontmatter.video.json) + a markdown body built from the
 * extraction and the summary. Microsoft captions are full text (D08) but pages never reproduce transcripts: they
 * carry chapters, features with verified status evidence, quotes (checked, under 25 words) and links with t=.
 * content/videos/llms.txt lists every video page newest first. Objects are "as heard"; a name that matches one object
 * page by exact type and name links to it and lands in `links.objects` (D67, link/mentions.ts), the others stay text.
 * A feature that covers Microsoft 365 roadmap features (data/links/roadmap.json) takes its status from the roadmap
 * when those roadmap features agree (D19: launch videos rarely state a status); status_source says which.
 */
import { readdirSync } from "node:fs";
import { join, resolve } from "node:path";
import matter from "gray-matter";
import { stringify as toYaml } from "yaml";
import { exists, readJson, readText, removeIfExists, writeText } from "../lib/fsx.js";
import type { ManifestItem } from "../lib/manifest.js";
import { validateOrThrow } from "../lib/schema.js";
import { sha256 } from "../lib/text.js";
import { extractionPath, PROMPT_VERSION as EXTRACT_V, STAGE as EXTRACT_STAGE, type VideoExtraction } from "../extract/video.js";
import { summaryPath, PROMPT_VERSION as SUMMARY_V, STAGE as SUMMARY_STAGE, type VideoSummary } from "../summarize/video.js";
import { PIPELINE_VERSION } from "../version.js";
import type { StageContext } from "../orchestrator/execute.js";
import type { Manifest } from "../lib/manifest.js";
import type { RoadmapEntry } from "../ingest/roadmap.js";
import { loadLinks, loadReview, roadmapByVideoFeature } from "../link/coverage.js";
import { featureStatus, latestRoadmap } from "./feature.js";
import { loadEmbedOverrides } from "../extract/preview-probe.js";
import { loadObjectIndex, mentionSection, type ObjectIndex } from "../link/mentions.js";
import { reviewOf, reviewWords } from "../lib/review.js";

const STATUS_LABEL: Record<string, string> = { ga: "generally available", preview: "preview", announced: "announced", unclear: "status not stated" };
const videoIdOf = (item: ManifestItem) => item.id.slice(item.id.lastIndexOf("/") + 1);
export const videoPagePath = (contentDir: string, videoId: string) => resolve(contentDir, "videos", `${videoId}.md`);

export function hms(t: number): string {
  const s = Math.max(0, Math.floor(t)), h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), r = s % 60;
  return h ? `${h}:${String(m).padStart(2, "0")}:${String(r).padStart(2, "0")}` : `${m}:${String(r).padStart(2, "0")}`;
}
const at = (videoId: string, t: number) => `https://www.youtube.com/watch?v=${videoId}&t=${Math.floor(t)}s`;
/** Table cells and link texts must not break markdown. */
const cell = (s: string) => s.replace(/\|/g, "\\|").replace(/\s+/g, " ").trim();

/** `linked`: deterministic cross-references. Hubs do not exist yet (M1 step 4/5); the item records what it will link by. */
export async function linkedHandler(item: ManifestItem, ctx: Pick<StageContext, "dataDir">) {
  const x = readJson<VideoExtraction>(extractionPath(ctx.dataDir, videoIdOf(item)));
  return { data: { systems: x.systems, topics: x.topics.length, objects_as_heard: x.objects.length } };
}

export interface VideoRoadmap { byFeature: Map<number, string[]>; entries: Map<string, RoadmapEntry> }
const NO_ROADMAP: VideoRoadmap = { byFeature: new Map(), entries: new Map() };

/** The roadmap ids a feature covers (still on the roadmap) and the status they agree on, if they do. */
export function roadmapStatusOf(r: VideoRoadmap, i: number, now: Date): { ids: string[]; status: string | null } {
  const ids = (r.byFeature.get(i) ?? []).filter((id) => r.entries.has(id));
  const statuses = new Set(ids.map((id) => featureStatus(r.entries.get(id)!, now)));
  return { ids, status: statuses.size === 1 ? [...statuses][0] : null };
}

/** CONTENT-NOTICE.md: community pages carry a few short quotes, not a stitched transcript. */
export const COMMUNITY_QUOTES_MAX = 5;

/**
 * `source.embed: false` (the channel's opt-out or data/overrides/embeds.yaml, D60) writes `embed: false`: no in-page player.
 * `index`: data/index/objects.json (link/mentions.ts), so the objects heard link to their pages (D67).
 */
export function renderVideoPage(item: ManifestItem, x0: VideoExtraction, s: VideoSummary, source: { name: string; embed?: boolean }, now: Date, roadmap: VideoRoadmap = NO_ROADMAP, index: ObjectIndex | null = null): string {
  const id = videoIdOf(item);
  const mentions = mentionSection(x0.objects, index, { up: "../", source: "As heard in the captions", suffix: (o) => ` at [${hms(o.t)}](${at(id, o.t)})` });
  const x = item.tier === "official" ? x0 : { ...x0, quotes: x0.quotes.slice(0, COMMUNITY_QUOTES_MAX) };
  const rm = x.features.map((_, i) => roadmapStatusOf(roadmap, i, now));
  const statusOf = (i: number) => rm[i].status ?? x.features[i].status;
  const flags = item.flags ?? [];
  // D77: always model text; item.review comes from the video review, a first-pass flag without one reads flagged
  const review = { ...reviewOf(true, item.review ?? (flags.length ? { state: "flagged" } : null)), flags };
  const reviewState = review.state;
  const evidence = [
    ...x.features.filter((f) => f.status_evidence_verified && f.status_evidence_quote).map((f) => ({ kind: "video", url: at(id, f.status_evidence_t!), title: `${f.name}: ${STATUS_LABEL[f.status]}`, date: item.published_at ?? null, commit: null, t: Math.floor(f.status_evidence_t!), quote: f.status_evidence_quote })),
    ...x.quotes.map((q) => ({ kind: "video", url: at(id, q.t), title: x.title, date: item.published_at ?? null, commit: null, t: Math.floor(q.t), quote: q.text })),
  ].slice(0, 30);
  const fm = {
    id: `video/${id}`, type: "video", title: item.title, summary: s.summary, tier: item.tier, language: item.language ?? "en",
    tags: x.topics, system: x.systems[0],
    review,
    generated: { at: now.toISOString(), pipeline: PIPELINE_VERSION, prompts: { [EXTRACT_STAGE]: EXTRACT_V, [SUMMARY_STAGE]: SUMMARY_V }, input_hash: item.stages.captioned?.vtt_sha256 as string ?? null },
    evidence,
    links: { learn: [], objects: mentions.pageIds, features: [...new Set(rm.flatMap((r) => r.ids))].sort().map((f) => `feature/${f}`), topics: [], localizations: [], videos: [], posts: [], guidelines: [] },
    video_id: id, channel: item.source, source_name: source.name, url: item.url, published_at: item.published_at ?? null,
    duration_s: Math.round(x.duration_s), captions: item.tier === "official" ? "full" : "derived", audience: s.audience,
    chapters: x.chapters.map((c) => ({ t: Math.floor(c.t_start), title: c.title })),
    features: x.features.map((f, i) => ({
      name: f.name, status: statusOf(i), t: Math.floor(f.t_start), verified: f.status_evidence_verified,
      status_source: rm[i].status ? "roadmap" : "video", ...(rm[i].ids.length ? { roadmap_ids: rm[i].ids } : {}),
    })),
    objects_mentioned: x.objects.map((o) => `${o.type} ${o.name}`),
    quotes: x.quotes.map((q) => ({ t: Math.floor(q.t), text: q.text, check: q.check })),
    ...(source.embed === false ? { embed: false } : {}),
  };
  validateOrThrow("frontmatter.video", fm, `video page ${id}`);

  const date = item.published_at?.slice(0, 10) ?? "undated";
  const lines: string[] = [
    `# ${item.title}`, "",
    `> ${s.summary}`, "",
    `[Watch on YouTube](${item.url}) · ${source.name} · ${date} · ${hms(x.duration_s)} · tier ${item.tier} · ${reviewWords(reviewState)}`, "",
    "## Overview", "", s.overview, "",
    "## Key points", "", ...s.key_points.map((p) => `- ${p}`), "",
  ];
  if (x.chapters.length) lines.push("## Chapters", "", ...x.chapters.map((c) => `- [${hms(c.t_start)}](${at(id, c.t_start)}) ${c.title}`), "");
  if (x.features.length) {
    // D74: a column empty on every row is left out; Evidence stays when at least one feature has a verified quote
    const evs = x.features.map((f) => f.status_evidence_verified && f.status_evidence_quote ? `"${cell(f.status_evidence_quote)}" ([${hms(f.status_evidence_t!)}](${at(id, f.status_evidence_t!)}))` : "");
    const withEv = evs.some(Boolean);
    lines.push("## Features", "", withEv ? "| Feature | Status | At | Evidence |" : "| Feature | Status | At |", withEv ? "|---|---|---|---|" : "|---|---|---|");
    x.features.forEach((f, i) => {
      const rmLinks = rm[i].ids.map((r) => `[${cell(roadmap.entries.get(r)?.title || r)}](../features/${r}.md)`).join(", ");
      const status = `${STATUS_LABEL[statusOf(i)]}${rm[i].ids.length ? ` (roadmap ${rmLinks})` : ""}`;
      lines.push(`| ${cell(f.name)} | ${status}${f.is_demoed ? ", demoed" : ""} | [${hms(f.t_start)}](${at(id, f.t_start)}) |${withEv ? ` ${evs[i]} |` : ""}`);
    });
    lines.push("");
    if (rm.some((r) => r.ids.length)) lines.push("A status with a roadmap link comes from the Microsoft 365 roadmap feature this part of the video covers (matched by Haiku; links Opus dropped are not used); other statuses need a status word in the video itself.", "");
  }
  lines.push(...mentions.lines);
  if (x.quotes.length) lines.push("## Quotes", "", ...x.quotes.map((q) => `- [${hms(q.t)}](${at(id, q.t)}) "${q.text}"`), "");
  if (x.disclaimers.length) lines.push("## Disclaimers in the video", "", ...x.disclaimers.map((d) => `- [${hms(d.t)}](${at(id, d.t)}) ${d.kind}: ${d.text}`), "");
  if (x.presenters.length) lines.push(`Presenters (as heard): ${x.presenters.map((p) => p.name).join(", ")}.`, "");
  return `---\n${toYaml(fm, { lineWidth: 0, version: "1.1" })}---\n\n${lines.join("\n").replace(/\n{3,}/g, "\n\n").trim()}\n`;
}

/** `published`: write the page. Its content hash is the item's output_hash. */
export async function publishedHandler(item: ManifestItem, ctx: Pick<StageContext, "dataDir" | "contentDir" | "sources" | "now">) {
  const id = videoIdOf(item);
  const sPath = summaryPath(ctx.dataDir, id);
  if (!exists(sPath)) throw new Error(`summary missing: ${sPath}`);
  const x = readJson<VideoExtraction>(extractionPath(ctx.dataDir, id));
  const s = readJson<VideoSummary>(sPath);
  const src = ctx.sources.get(item.source);
  const off = src?.embed === false || loadEmbedOverrides(ctx.dataDir).videos.some((v) => v.id === id);
  const source = { name: src?.name ?? item.source, ...(off ? { embed: false } : {}) };
  const roadmap = { byFeature: roadmapByVideoFeature(loadLinks(ctx.dataDir), id, loadReview(ctx.dataDir)), entries: latestRoadmap(ctx.dataDir) };
  const page = renderVideoPage(item, x, s, source, ctx.now(), roadmap, loadObjectIndex(ctx.dataDir));
  const path = videoPagePath(ctx.contentDir, id);
  // regenerate only when the body or the facts changed, so a quiet night does not touch every page's generated.at
  const body = (p: string) => p.replace(/^(generated:\n {2}at: ).*$/m, "$1");
  if (!exists(path) || body(readText(path)) !== body(page)) writeText(path, page);
  return { output_hash: sha256(body(page)), data: { path: `content/videos/${id}.md` } };
}

/** After linking: re-render every published video page so roadmap statuses found tonight reach it. */
export async function rerenderVideoPages(manifest: Manifest, ctx: Pick<StageContext, "dataDir" | "contentDir" | "sources" | "now">): Promise<number> {
  let n = 0;
  for (const item of manifest.list("video").filter((i) => i.stages.published && exists(summaryPath(ctx.dataDir, videoIdOf(i))))) {
    await publishedHandler(item, ctx);
    n++;
  }
  return n;
}

export interface VideoIndexEntry { id: string; title: string; summary: string; published_at: string | null; source_name: string; review: string }

/** content/videos/llms.txt: every video page, newest first. Removes the file when there are no pages. */
export function renderVideoIndex(contentDir: string): number {
  const dir = resolve(contentDir, "videos");
  const files = exists(dir) ? readdirSync(dir).filter((f) => f.endsWith(".md")) : [];
  const entries: VideoIndexEntry[] = files.map((f) => {
    const fm = matter(readText(join(dir, f))).data as any;
    return { id: fm.video_id, title: fm.title, summary: fm.summary, published_at: fm.published_at ?? null, source_name: fm.source_name, review: fm.review?.state ?? "unreviewed" };
  }).sort((a, b) => (b.published_at ?? "").localeCompare(a.published_at ?? "") || a.id.localeCompare(b.id));
  const path = join(dir, "llms.txt");
  if (!entries.length) { removeIfExists(path); return 0; }
  const text = [
    "# BC Observatory: videos", "",
    "> Business Central videos as structured evidence: summary, chapters, features with verified status quotes, AL objects as heard,",
    "> timestamped links. Each page is markdown with strict frontmatter (schemas/frontmatter.video.json). Tier official = Microsoft.", "",
    `${entries.length} videos, newest first.`, "",
    ...entries.map((e) => `- [${cell(e.title)}](${e.id}.md): ${cell(e.summary)} (${e.source_name}, ${e.published_at?.slice(0, 10) ?? "undated"}${e.review === "reviewed" ? "" : `, ${e.review}`})`),
    "",
  ].join("\n");
  if (!exists(path) || readText(path) !== text) writeText(path, text);
  return entries.length;
}
