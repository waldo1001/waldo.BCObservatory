/**
 * Stage handlers per pillar, consumed by the executor (execute.ts). A pillar/stage without a handler is left
 * where it is. M1 adds them pillar by pillar: videos first (D18), then Learn docs, then roadmap stubs and hubs.
 *
 * Video: `fetched`/`captioned` take official (Microsoft) videos only until community captions can be pushed to the
 * vault. `reviewed` (Opus, flagged items) is not wired yet: flagged videos wait at `linked`.
 */
import { captionedHandler, fetchedHandler } from "../caption/fetch.js";
import { extractedHandler } from "../extract/video.js";
import { linkedHandler, publishedHandler } from "../render/video.js";
import { summarizedHandler } from "../summarize/video.js";
import type { StageHandlers } from "./execute.js";

export const STAGE_HANDLERS: StageHandlers = {
  video: {
    fetched: fetchedHandler(),
    captioned: captionedHandler(),
    extracted: (item, ctx) => extractedHandler(item, ctx),
    summarized: (item, ctx) => summarizedHandler(item, { dataDir: ctx.dataDir, channel: ctx.sources.get(item.source)?.name }),
    linked: (item, ctx) => linkedHandler(item, ctx),
    published: (item, ctx) => publishedHandler(item, ctx),
  },
};
