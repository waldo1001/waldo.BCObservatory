/**
 * Stage handlers per pillar, consumed by the executor (execute.ts). A pillar/stage without a handler is left
 * where it is. M1 adds them pillar by pillar: videos first (D18), then Learn docs, then roadmap stubs and hubs.
 *
 * Video: `fetched`/`captioned` take official (Microsoft) videos only until the leak scanner exists (D08).
 * Docs: `fetched` reads page metadata from the git mirror (no quota); `extracted` summarizes non-reference pages in
 * Haiku batches; the rest only move the item along (no per-page pages, D01; hubs read the summaries, D12).
 * `reviewed` runs only for flagged videos (Opus, D07); unflagged ones go from `linked` straight to `published`.
 */
import { captionedHandler, fetchedHandler } from "../caption/fetch.js";
import { extractedHandler } from "../extract/video.js";
import { gitPageFetched } from "../fetch/git-page.js";
import { docsExtractedHandler, passThrough } from "../extract/docs.js";
import { featurePublished } from "../render/feature.js";
import { linkedHandler, publishedHandler } from "../render/video.js";
import { reviewedHandler } from "../review/video.js";
import { summarizedHandler } from "../summarize/video.js";
import type { StageHandlers } from "./execute.js";

export const STAGE_HANDLERS: StageHandlers = {
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
