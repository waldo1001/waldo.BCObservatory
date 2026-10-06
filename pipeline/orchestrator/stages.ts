/**
 * Stage handlers per pillar, consumed by the executor (execute.ts). A pillar/stage without a handler is left
 * where it is. M1 adds them pillar by pillar: videos first (D18), then Learn docs, then roadmap stubs and hubs.
 */
import type { StageHandlers } from "./execute.js";

export const STAGE_HANDLERS: StageHandlers = {};
