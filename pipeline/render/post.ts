/**
 * Blog post pages (PLAN M3, D34), deterministic from the extraction: content/posts/<source>/<file>.md +
 * content/posts/llms.txt. Derived only (D08): summary and key points in our words, at most 3 verbatim quotes under
 * 25 words, objects as named, a link to the post. Full text never appears, also not for opted-in sources (yet).
 *
 * The page is the artifact check:leak scans, so the page is what the repeat guard checks (D55). The extract-time
 * guard (D51) checks the serialized extraction, and the two orders differ: on the page the post's own title sits
 * directly above the summary, so a run can span that seam and span no seam in the JSON. A page that repeats 25+
 * words of the post is scrubbed and re-rendered, and if it still repeats it is not written at all: one post goes
 * missing instead of the nightly dying on the leak gate with everything it did that night uncommitted.
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
import { postKey, postRawPath } from "../fetch/post.js";
import { repeatChecker, scrubRepeats } from "../validate/leak.js";
import { loadEmbedOverrides, previewFor, type PreviewBlock } from "../extract/preview-probe.js";
import { PIPELINE_VERSION } from "../version.js";

const cell = (s: string) => s.replace(/\|/g, "\\|").replace(/\s+/g, " ").trim();
export const postPageKey = (item: Pick<ManifestItem, "id" | "source">) => `${item.source}/${fileKey(postKey(item))}`;
const stable = (p: string) => p.replace(/^(generated:\n {2}at: ).*$/m, "$1");

/** `embed: false` is the author's opt-out of the frame and the poster (D60). */
export interface PostSourceInfo { name: string; author?: { name?: string; mvp?: boolean } | null; full_text?: boolean; embed?: boolean; user_agent?: "default" | "browser" }

/** `preview`: embeddability and the card fields (D60), from previewFor; absent when the post was never probed. */
export function renderPostPage(item: ManifestItem, x: PostExtraction, src: PostSourceInfo, now: Date, preview?: PreviewBlock): string {
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
    ...(preview ? { preview } : {}),
  };
  validateOrThrow("frontmatter.post", fm, `post page ${pk}`);
  const date = item.published_at?.slice(0, 10) ?? "undated";
  // the byline sits between the title and the summary so the post's own title is never word-adjacent to our
  // summary: that seam was a 25-word run of the post that no single field contained (D55)
  const lines = [`# ${item.title}`, "",
    `[Read the post](${item.url}) · ${src.name}${src.author?.name ? ` (${src.author.name}${src.author.mvp ? ", MVP" : ""})` : ""} · ${date} · ${x.words} words · tier ${item.tier} · **unreviewed** (machine-generated)`, "",
    `> ${x.summary}`, ""];
  if (x.key_points.length) lines.push("## Key points", "", ...x.key_points.map((k) => `- ${k}`), "");
  if (x.quotes.length) lines.push("## Quotes", "", ...x.quotes.map((q) => `- "${q.text}" (${q.why_it_matters})`), "");
  if (x.objects.length) lines.push("## AL objects mentioned", "", "As named in the post; not yet joined to the code pillar.", "", ...x.objects.map((o) => `- ${o.type} "${cell(o.name)}"`), "");
  if (x.versions.length || x.features.length) lines.push("## Context", "", ...(x.features.length ? [`- Features: ${x.features.join(", ")}`] : []), ...(x.versions.length ? [`- Versions: ${x.versions.join(", ")}`] : []), "");
  lines.push(`Source: ${src.name}, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.`, "");
  return `---\n${toYaml(fm, { lineWidth: 0, version: "1.1" })}---\n\n${lines.join("\n").replace(/\n{3,}/g, "\n\n").trim()}\n`;
}

/**
 * The page, with the extraction scrubbed if the first render repeats the post. Returns null when even the scrubbed
 * page repeats: the raw text is in the vault, so this runs wherever the vault is (the nightly), and is skipped when
 * it is not or when the source allows full text.
 */
export function policyCheckedPage(item: ManifestItem, x: PostExtraction, src: PostSourceInfo, now: Date, preview?: PreviewBlock): string | null {
  const page = renderPostPage(item, x, src, now, preview);
  const rawPath = postRawPath(item);
  if (src.full_text || !exists(rawPath)) return page;
  const check = repeatChecker(readText(rawPath));
  if (!check(page)) return page;
  const s = scrubRepeats(x, check);
  const again = renderPostPage(item, { ...s.value, trimmed_for_policy: s.trimmed }, src, now, preview);
  return check(again) ? null : again;
}

export function postPublished(sources: Map<string, PostSourceInfo>) {
  return async (item: ManifestItem, ctx: Pick<StageContext, "dataDir" | "contentDir" | "now">) => {
    const p = postExtractionPath(ctx.dataDir, item);
    if (!exists(p)) throw new Error(`post extraction missing: ${p}`);
    const src = sources.get(item.source) ?? { name: item.source };
    const page = policyCheckedPage(item, readJson<PostExtraction>(p), src, ctx.now(), previewFor(item, ctx.dataDir, src));
    const path = resolve(ctx.contentDir, "posts", `${postPageKey(item)}.md`);
    // like the extract-time guard (D51), the item is skipped, not failed: nothing to retry, the post simply cannot
    // be summarised without repeating itself. Any older page is removed, or check:leak would still find it.
    if (!page) { removeIfExists(path); return { skip: "leak", data: { stage: "published" } }; }
    if (!exists(path) || stable(readText(path)) !== stable(page)) writeText(path, page);
    return { output_hash: sha256(stable(page)), data: { path: `content/posts/${postPageKey(item)}.md` } };
  };
}

/** After the preview probe: re-render the posts whose record was written, so tonight's preview reaches the page. */
export async function rerenderPostPages(items: ManifestItem[], sources: Map<string, PostSourceInfo>, ctx: Pick<StageContext, "dataDir" | "contentDir" | "now">): Promise<number> {
  const publish = postPublished(sources);
  let n = 0;
  for (const item of items) {
    if (!item.stages.published || !exists(postExtractionPath(ctx.dataDir, item))) continue;
    await publish(item, ctx);
    n++;
  }
  return n;
}

/**
 * Published posts whose page carries another `preview` than it would get now: a record a backfill wrote without the
 * vault (it does not render), an author's opt-out, an embeds.yaml override, or a run that stopped. The nightly
 * renders them, so none of those waits for the post's next probe.
 */
export function pendingPreviewPages(items: ManifestItem[], dataDir: string, contentDir: string, sources: Map<string, PostSourceInfo>): ManifestItem[] {
  const overrides = loadEmbedOverrides(dataDir);
  const canon = (v: unknown) => JSON.stringify(v ?? null, (_k, x) => (x && typeof x === "object" && !Array.isArray(x) ? Object.fromEntries(Object.entries(x).sort()) : x));
  return items.filter((item) => {
    const page = resolve(contentDir, "posts", `${postPageKey(item)}.md`);
    if (!item.stages.published || !exists(page)) return false;
    const want = previewFor(item, dataDir, sources.get(item.source) ?? {}, overrides);
    return canon(want) !== canon((matter(readText(page)).data as { preview?: unknown }).preview);
  });
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

