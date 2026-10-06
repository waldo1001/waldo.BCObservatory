/**
 * Blog post pages (PLAN M3, D34), deterministic from the extraction: content/posts/<source>/<file>.md +
 * content/posts/llms.txt. Derived only (D08): summary and key points in our words, at most 3 verbatim quotes under
 * 25 words, objects as named, a link to the post. Full text never appears, also not for opted-in sources (yet).
 */

import { join, relative, resolve } from "node:path";
import matter from "gray-matter";
import { stringify as toYaml } from "yaml";
import { exists, listFiles, readJson, readText, removeIfExists, writeText } from "../lib/fsx.js";
import { fileKey, type ManifestItem } from "../lib/manifest.js";
import { validateOrThrow } from "../lib/schema.js";
import { sha256 } from "../lib/text.js";
import type { StageContext } from "../orchestrator/execute.js";
import { postExtractionPath, PROMPT_VERSION, STAGE, type PostExtraction } from "../extract/post.js";
import { postKey } from "../fetch/post.js";
import { PIPELINE_VERSION } from "../version.js";

const cell = (s: string) => s.replace(/\|/g, "\\|").replace(/\s+/g, " ").trim();
export const postPageKey = (item: Pick<ManifestItem, "id" | "source">) => `${item.source}/${fileKey(postKey(item))}`;
const stable = (p: string) => p.replace(/^(generated:\n {2}at: ).*$/m, "$1");

export interface PostSourceInfo { name: string; author?: { name?: string; mvp?: boolean } | null; full_text?: boolean }

export function renderPostPage(item: ManifestItem, x: PostExtraction, src: PostSourceInfo, now: Date): string {
  const pk = postPageKey(item);
  const fm = {
    id: `post/${pk}`, type: "post", title: item.title, summary: x.summary, tier: item.tier, language: x.language || item.language || "en",
    tags: x.topics, ...(x.systems[0] ? { system: x.systems[0] } : {}),
    review: { state: item.review?.state ?? "unreviewed", by: item.review?.by ?? null, at: item.review?.at ?? null, flags: item.flags ?? [] },
    generated: { at: now.toISOString(), pipeline: PIPELINE_VERSION, prompts: { [STAGE]: PROMPT_VERSION }, input_hash: item.stages.fetched?.output_hash as string ?? item.output_hash ?? null },
    evidence: [{ kind: "blog", url: item.url, title: item.title, date: item.published_at?.slice(0, 10) ?? null, commit: null, t: null, quote: null },
      ...x.quotes.map((q) => ({ kind: "blog", url: item.url, title: item.title, date: item.published_at?.slice(0, 10) ?? null, commit: null, t: null, quote: q.text }))],
    links: { learn: [], objects: [], features: [], topics: [], localizations: [], videos: [], posts: [], guidelines: [] },
    post_id: postKey(item), source_id: item.source, source_name: src.name, url: item.url, published_at: item.published_at ?? null,
    author: src.author?.name ?? null, full_text: !!src.full_text, words: x.words, quotes: x.quotes,
    code_objects_mentioned: x.objects.map((o) => `${o.type} ${o.name}`), systems: x.systems, versions_mentioned: x.versions,
  };
  validateOrThrow("frontmatter.post", fm, `post page ${pk}`);
  const date = item.published_at?.slice(0, 10) ?? "undated";
  const lines = [`# ${item.title}`, "", `> ${x.summary}`, "",
    `[Read the post](${item.url}) · ${src.name}${src.author?.name ? ` (${src.author.name}${src.author.mvp ? ", MVP" : ""})` : ""} · ${date} · ${x.words} words · tier ${item.tier} · **unreviewed** (machine-generated)`, ""];
  if (x.key_points.length) lines.push("## Key points", "", ...x.key_points.map((k) => `- ${k}`), "");
  if (x.quotes.length) lines.push("## Quotes", "", ...x.quotes.map((q) => `- "${q.text}" (${q.why_it_matters})`), "");
  if (x.objects.length) lines.push("## AL objects mentioned", "", "As named in the post; not yet joined to the code pillar.", "", ...x.objects.map((o) => `- ${o.type} "${cell(o.name)}"`), "");
  if (x.versions.length || x.features.length) lines.push("## Context", "", ...(x.features.length ? [`- Features: ${x.features.join(", ")}`] : []), ...(x.versions.length ? [`- Versions: ${x.versions.join(", ")}`] : []), "");
  lines.push(`Source: ${src.name}, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.`, "");
  return `---\n${toYaml(fm, { lineWidth: 0, version: "1.1" })}---\n\n${lines.join("\n").replace(/\n{3,}/g, "\n\n").trim()}\n`;
}

export function postPublished(sources: Map<string, PostSourceInfo>) {
  return async (item: ManifestItem, ctx: Pick<StageContext, "dataDir" | "contentDir" | "now">) => {
    const p = postExtractionPath(ctx.dataDir, item);
    if (!exists(p)) throw new Error(`post extraction missing: ${p}`);
    const page = renderPostPage(item, readJson<PostExtraction>(p), sources.get(item.source) ?? { name: item.source }, ctx.now());
    const path = resolve(ctx.contentDir, "posts", `${postPageKey(item)}.md`);
    if (!exists(path) || stable(readText(path)) !== stable(page)) writeText(path, page);
    return { output_hash: sha256(stable(page)), data: { path: `content/posts/${postPageKey(item)}.md` } };
  };
}

/** content/posts/llms.txt: every post page, newest first. */
export function renderPostIndex(contentDir: string): number {
  const dir = resolve(contentDir, "posts");
  const files = listFiles(dir, ".md");
  const rows = files.map((f) => ({ rel: relative(dir, f), fm: matter(readText(f)).data as any }))
    .sort((a, b) => String(b.fm.published_at ?? "").localeCompare(String(a.fm.published_at ?? "")) || a.rel.localeCompare(b.rel));
  const idx = join(dir, "llms.txt");
  if (!rows.length) { removeIfExists(idx); return 0; }
  const text = ["# BC Observatory: community posts", "", "> Business Central blog posts as derived evidence: summary, key points, short verbatim quotes, objects as named, link to the original.",
    "> Tier community. Frontmatter: schemas/frontmatter.post.json.", "", `${rows.length} posts, newest first.`, "",
    ...rows.map((r) => `- [${cell(r.fm.title)}](${r.rel}): ${cell(r.fm.summary)} (${r.fm.source_name}, ${String(r.fm.published_at ?? "").slice(0, 10) || "undated"})`), ""].join("\n");
  if (!exists(idx) || readText(idx) !== text) writeText(idx, text);
  return rows.length;
}

