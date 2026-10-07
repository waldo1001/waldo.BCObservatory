/**
 * Stage handlers per pillar, consumed by the executor (execute.ts). A pillar/stage without a handler is left
 * where it is. M1 adds them pillar by pillar: videos first (D18), then Learn docs, then roadmap stubs and hubs.
 *
 * Video: `fetched`/`captioned` take official (Microsoft) videos only until the vault is checked out on the Mini (D08,
 * D24: the leak scanner requires the vault as soon as community raw text exists).
 * Docs: `fetched` reads page metadata from the git mirror (no quota); `extracted` summarizes non-reference pages in
 * Haiku batches; the rest only move the item along (no per-page pages, D01; hubs read the summaries, D12).
 * `reviewed` runs for every video (Opus, D07, D77: no longer only flagged ones), quota video_reviews.
 * Blog (D34): `fetched` stores the post text in the vault (community raw text, D08), `extracted` is one Haiku pass,
 * `published` writes content/posts/<source>/<key>.md; summarized/linked only move the item along.
 * Code (D27): `fetched` checks out the snapshot source of a BC major, `extracted` writes data/code/<major>/<cc>/;
 * only each major's `snapshot_source` is accepted, quota code_jobs. `linked` (D67) runs graphify-al on a snapshot
 * major's checkout and writes data/code/graph/<major>/calls.json (lane cpu, quota graph_jobs); other code items pass.
 * Change (D61): `fetched` reads a merged pull request and its files from GitHub (lane github, quota change_fetch) and
 * joins them to objects; `extracted` is one Haiku pass per 6; `linked` re-joins; `published` writes the page.
 */
import { captionedHandler, fetchedHandler } from "../caption/fetch.js";
import { codeExtracted, codeFetched, sparseCheckout } from "../code/job.js";
import { callGraphHandler } from "../code/callgraph.js";
import { CACHE_DIR } from "../lib/paths.js";
import { loadSources } from "../lib/config.js";
import { postFetched } from "../fetch/post.js";
import { postExtractedHandler } from "../extract/post.js";
import { postPublished } from "../render/post.js";
import { extractedHandler } from "../extract/video.js";
import { gitPageFetched } from "../fetch/git-page.js";
import { docsExtractedHandler, passThrough } from "../extract/docs.js";
import { featurePublished } from "../render/feature.js";
import { linkedHandler, publishedHandler } from "../render/video.js";
import { reviewedHandler } from "../review/video.js";
import { summarizedHandler } from "../summarize/video.js";
import { changeFetched } from "../fetch/change.js";
import { changeExtractedHandler } from "../extract/change.js";
import { changeLinked, changePublished } from "../render/change.js";
import { codeRoots } from "../changes/classify.js";
import type { StageHandlers } from "./execute.js";

const codeDeps = { checkout: sparseCheckout, cacheDir: CACHE_DIR };
const blogSources = loadSources().filter((s) => s.kind === "blog");
const postFetch = new Map(blogSources.map((s) => [s.id, { rest: s.fetch?.rest, user_agent: s.fetch?.user_agent }]));
const postInfo = new Map(blogSources.map((s) => [s.id, { name: s.name, author: s.author ?? null, full_text: s.full_text, ...(s.embed === false ? { embed: false } : {}) }]));
const fullText = (id: string) => !!postInfo.get(id)?.full_text;
const prSources = new Map(loadSources().filter((s) => s.kind === "github-pr").map((s) => [s.id, codeRoots(s)]));

export const STAGE_HANDLERS: StageHandlers = {
  blog: {
    fetched: postFetched(postFetch), extracted: postExtractedHandler(fullText), summarized: passThrough({ from: "extract-post" }),
    linked: passThrough({}), published: postPublished(postInfo),
  },
  change: {
    fetched: changeFetched({ cacheDir: CACHE_DIR, roots: (source) => prSources.get(source) ?? codeRoots({}) }),
    extracted: changeExtractedHandler({ cacheDir: CACHE_DIR }), linked: changeLinked(), published: changePublished(),
  },
  code: { fetched: codeFetched(codeDeps), extracted: codeExtracted(codeDeps), linked: callGraphHandler({ cacheDir: CACHE_DIR }), published: passThrough({}) },
  roadmap: { fetched: passThrough({ from: "snapshot" }), linked: passThrough({}), published: featurePublished() },
  docs: {
    fetched: gitPageFetched(),
    extracted: docsExtractedHandler(),
    summarized: passThrough({ from: "extract-docs" }),
    linked: passThrough({ via: "topic hubs" }),
    published: passThrough({ page: false }),
  },
  guidelines: { fetched: gitPageFetched() },
  video: {
    fetched: fetchedHandler(),
    captioned: captionedHandler(),
    extracted: (item, ctx) => extractedHandler(item, ctx),
    summarized: (item, ctx) => summarizedHandler(item, { dataDir: ctx.dataDir, channel: ctx.sources.get(item.source)?.name }),
    linked: (item, ctx) => linkedHandler(item, ctx),
    reviewed: (item, ctx) => reviewedHandler(item, ctx),
    published: (item, ctx) => publishedHandler(item, ctx),
  },
};
