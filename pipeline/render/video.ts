/**
 * Video pages (PLAN 4.3 stages 6 and 8, deterministic): `linked` and `published` handlers plus the section index.
 *
 * content/videos/<videoId>.md = strict frontmatter (schemas/frontmatter.video.json) + a markdown body built from the
 * extraction and the summary. Microsoft captions are full text (D08) but pages never reproduce transcripts: they
 * carry chapters, features with verified status evidence, quotes (checked, under 25 words) and links with t=.
 * content/videos/llms.txt lists every video page newest first. Objects are "as heard" until the code pillar
 * verifies them (M2), and the page says so.
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

export function renderVideoPage(item: ManifestItem, x: VideoExtraction, s: VideoSummary, source: { name: string }, now: Date): string {
  const id = videoIdOf(item);
  const flags = item.flags ?? [];
  const reviewState = item.review?.state ?? (flags.length ? "flagged" : "unreviewed");
  const evidence = [
    ...x.features.filter((f) => f.status_evidence_verified && f.status_evidence_quote).map((f) => ({ kind: "video", url: at(id, f.status_evidence_t!), title: `${f.name}: ${STATUS_LABEL[f.status]}`, date: item.published_at ?? null, commit: null, t: Math.floor(f.status_evidence_t!), quote: f.status_evidence_quote })),
    ...x.quotes.map((q) => ({ kind: "video", url: at(id, q.t), title: x.title, date: item.published_at ?? null, commit: null, t: Math.floor(q.t), quote: q.text })),
  ].slice(0, 30);
  const fm = {
    id: `video/${id}`, type: "video", title: item.title, summary: s.summary, tier: item.tier, language: item.language ?? "en",
    tags: x.topics, system: x.systems[0],
    review: { state: reviewState, by: item.review?.by ?? null, at: item.review?.at ?? null, flags },
    generated: { at: now.toISOString(), pipeline: PIPELINE_VERSION, prompts: { [EXTRACT_STAGE]: EXTRACT_V, [SUMMARY_STAGE]: SUMMARY_V }, input_hash: item.stages.captioned?.vtt_sha256 as string ?? null },
    evidence,
    links: { learn: [], objects: [], features: [], topics: [], localizations: [], videos: [], posts: [], guidelines: [] },
    video_id: id, channel: item.source, source_name: source.name, url: item.url, published_at: item.published_at ?? null,
    duration_s: Math.round(x.duration_s), captions: item.tier === "official" ? "full" : "derived", audience: s.audience,
    chapters: x.chapters.map((c) => ({ t: Math.floor(c.t_start), title: c.title })),
    features: x.features.map((f) => ({ name: f.name, status: f.status, t: Math.floor(f.t_start), verified: f.status_evidence_verified })),
    objects_mentioned: x.objects.map((o) => `${o.type} ${o.name}`),
    quotes: x.quotes.map((q) => ({ t: Math.floor(q.t), text: q.text, check: q.check })),
  };
  validateOrThrow("frontmatter.video", fm, `video page ${id}`);

  const date = item.published_at?.slice(0, 10) ?? "undated";
  const lines: string[] = [
    `# ${item.title}`, "",
    `> ${s.summary}`, "",
    `[Watch on YouTube](${item.url}) · ${source.name} · ${date} · ${hms(x.duration_s)} · tier ${item.tier} · ${reviewState === "reviewed" ? "reviewed" : `**${reviewState}** (machine-generated)`}`, "",
    "## Overview", "", s.overview, "",
    "## Key points", "", ...s.key_points.map((p) => `- ${p}`), "",
  ];
  if (x.chapters.length) lines.push("## Chapters", "", ...x.chapters.map((c) => `- [${hms(c.t_start)}](${at(id, c.t_start)}) ${c.title}`), "");
  if (x.features.length) {
    lines.push("## Features", "", "| Feature | Status | At | Evidence |", "|---|---|---|---|");
    for (const f of x.features) {
      const ev = f.status_evidence_verified && f.status_evidence_quote ? `"${cell(f.status_evidence_quote)}" ([${hms(f.status_evidence_t!)}](${at(id, f.status_evidence_t!)}))` : "";
      lines.push(`| ${cell(f.name)} | ${STATUS_LABEL[f.status]}${f.is_demoed ? ", demoed" : ""} | [${hms(f.t_start)}](${at(id, f.t_start)}) | ${ev} |`);
    }
    lines.push("");
  }
  if (x.objects.length) {
    lines.push("## AL objects mentioned", "", "As heard in the captions; not yet verified against the code pillar.", "",
      ...x.objects.map((o) => `- ${o.type} "${o.name}" at [${hms(o.t)}](${at(id, o.t)})`), "");
  }
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
  const source = ctx.sources.get(item.source) ?? { name: item.source };
  const page = renderVideoPage(item, x, s, source, ctx.now());
  const path = videoPagePath(ctx.contentDir, id);
  // regenerate only when the body or the facts changed, so a quiet night does not touch every page's generated.at
  const body = (p: string) => p.replace(/^(generated:\n {2}at: ).*$/m, "$1");
  if (!exists(path) || body(readText(path)) !== body(page)) writeText(path, page);
  return { output_hash: sha256(body(page)), data: { path: `content/videos/${id}.md` } };
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
