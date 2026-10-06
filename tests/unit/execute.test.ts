import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import type { PlanUsage } from "../../pipeline/lib/budget.js";
import { budget } from "../../pipeline/lib/config.js";
import { LlmBudgetExhausted, LlmInfraError } from "../../pipeline/lib/llm.js";
import { Manifest, type ManifestItem } from "../../pipeline/lib/manifest.js";
import { planQueue } from "../../pipeline/lib/queue.js";
import { deadlineFor, executePlan, StageHold, type ExecuteOptions, type StageHandler, type StageHandlers } from "../../pipeline/orchestrator/execute.js";

const started = new Date("2026-10-07T00:00:00Z"); // 02:00 Brussels, inside the window
const quotas = { captions: 10, video_extract: 10, opus_reviews: 10, llm_calls_max: 450 };

function setup(n = 2) {
  const manifest = new Manifest(mkdtempSync(join(tmpdir(), "bcobs-exec-")));
  for (let i = 1; i <= n; i++) {
    manifest.discover({ pillar: "video", source: "yt-ms", key: `VID${i}`, tier: "official", title: `v${i}`, url: `https://youtu.be/VID${i}`, published_at: `2026-10-0${i}T10:00:00Z`, input_hash: `h${i}` }, started);
  }
  return manifest;
}
const ok: StageHandler = async () => ({ data: { ok: true } });
const allVideo = (over: Partial<Record<string, StageHandler>> = {}): StageHandlers =>
  ({ video: { fetched: ok, captioned: ok, extracted: ok, summarized: ok, linked: ok, reviewed: ok, published: ok, ...over } });
function run(manifest: Manifest, handlers: StageHandlers, over: Partial<ExecuteOptions> = {}) {
  const q = over.quotas ?? quotas;
  const plan = planQueue(manifest.list(), q, new Map(), started);
  return executePlan({ work: plan.work, quotas: q, budget: budget(), manifest, dataDir: tmpdir(), contentDir: tmpdir(), sources: new Map(), handlers, started, clock: () => started, ...over });
}
const get = (m: Manifest, k: string) => m.get(`video/yt-ms/${k}`) as ManifestItem;

test("deadline: today's hard stop inside the window, the window's length for a daytime run", () => {
  const w = budget().window;
  assert.equal(deadlineFor(new Date("2026-10-07T00:00:00Z"), w).toISOString(), "2026-10-07T04:35:00.000Z"); // 06:35 CEST
  assert.equal(deadlineFor(new Date("2026-10-07T12:00:00Z"), w).toISOString(), "2026-10-07T17:35:00.000Z"); // +5h35
  assert.equal(deadlineFor(new Date("2026-10-07T04:40:00Z"), w).toISOString(), "2026-10-07T10:15:00.000Z"); // just past the stop
});

test("items run through every stage that has a handler, newest first, quotas charged once per item", async () => {
  const m = setup();
  const seen: string[] = [];
  const h = allVideo({ fetched: async (it) => { seen.push(it.id); return {}; } });
  const r = await run(m, h);
  assert.deepEqual(seen, ["video/yt-ms/VID2", "video/yt-ms/VID1"]);
  assert.equal(get(m, "VID1").state, "published");
  assert.equal(get(m, "VID1").stages.fetched?.ok, undefined);
  assert.equal(get(m, "VID2").stages.captioned?.ok, true);
  assert.deepEqual([r.stop_reason, r.items_touched, r.advanced], ["done", 2, 12]);
  assert.deepEqual(r.quota_charged, { captions: 2, video_extract: 2 });
});

test("a missing handler leaves the item where it is; a later quota with no room stops that item only", async () => {
  const m = setup();
  const r = await run(m, { video: { fetched: ok, captioned: ok } }, { quotas: { ...quotas, video_extract: 0 } });
  assert.equal(get(m, "VID1").state, "captioned");
  assert.equal(r.no_handler, 0);
  const r2 = await run(m, { video: { fetched: ok } });
  assert.deepEqual([r2.no_handler, r2.advanced], [2, 0]);
});

test("flags route an item through review; a skip result ends it", async () => {
  const m = setup();
  const r = await run(m, allVideo({
    extracted: async (it) => (it.id.endsWith("VID2") ? { flags: ["quote-mismatch"] } : {}),
    captioned: async (it) => (it.id.endsWith("VID1") ? { skip: "no-captions" } : {}),
  }));
  assert.equal(get(m, "VID2").state, "published");
  assert.ok(get(m, "VID2").stages.reviewed);
  assert.deepEqual([get(m, "VID1").state, get(m, "VID1").skip], ["skipped", "no-captions"]);
  assert.equal(r.quota_charged.opus_reviews, 1);
});

test("item errors back off and the run goes on; the fifth failure is final", async () => {
  const m = setup();
  const boom = allVideo({ extracted: async (it) => { if (it.id.endsWith("VID2")) throw new Error("bad json"); return {}; } });
  const r = await run(m, boom);
  const v2 = get(m, "VID2");
  assert.deepEqual([v2.state, v2.attempts, v2.retry_after], ["captioned", 1, "2026-10-07T02:00:00.000Z"]);
  assert.equal(get(m, "VID1").state, "published");
  assert.deepEqual([r.failed_attempts, r.stop_reason], [1, "done"]);
  m.save({ ...get(m, "VID2"), attempts: 4, retry_after: null });
  const r2 = await run(m, boom);
  assert.deepEqual([get(m, "VID2").state, r2.failed_final], ["failed", 1]);
});

test("spend cap stops cleanly without failing the item; infra errors abort", async () => {
  const m = setup();
  const r = await run(m, allVideo({ extracted: async () => { throw new LlmBudgetExhausted(10, 10); } }));
  assert.equal(r.stop_reason, "spend-cap");
  assert.deepEqual([get(m, "VID2").state, get(m, "VID2").attempts], ["captioned", 0]);
  assert.equal(get(m, "VID1").state, "discovered", "no new item starts after the cap");
  const a = await run(m, allVideo({ extracted: async () => { throw new LlmInfraError("not logged in"); } }));
  assert.equal(a.stop_reason, "aborted");
  assert.equal(get(m, "VID2").attempts, 0);
  assert.equal(a.errors.length, 1);
});

test("hard stop and llm_calls_max start no work", async () => {
  const m = setup();
  const late = await run(m, allVideo(), { clock: () => new Date("2026-10-07T04:35:00Z") });
  assert.deepEqual([late.stop_reason, late.advanced], ["hard-stop", 0]);
  const capped = await run(m, allVideo(), { quotas: { ...quotas, llm_calls_max: 3 }, callCount: () => 3 });
  assert.deepEqual([capped.stop_reason, capped.advanced], ["llm-calls-max", 0]);
});

test("re-guard every N calls; a skip stops the run", async () => {
  const m = setup();
  let calls = 0;
  const counting = allVideo({ extracted: async () => { calls += 25; return {}; } });
  const over = async (): Promise<PlanUsage> => ({ fiveHourPct: 65, fiveHourResetsAt: null, sevenDayPct: 10, sevenDayResetsAt: null, readAt: started.toISOString() });
  const r = await run(m, counting, { callCount: () => calls, readUsage: over });
  assert.deepEqual(r.regards.map((g) => [g.at_calls, g.decision]), [[25, "skip"]]);
  assert.equal(r.stop_reason, "guard-skip");
  assert.equal(get(m, "VID2").state, "extracted", "the stage in flight completed");
  assert.equal(get(m, "VID1").state, "discovered");
});

test("StageHold leaves the item untouched and the run goes on; declined items never run", async () => {
  const m = setup();
  const r = await run(m, allVideo({ fetched: async (it) => { if (it.id.endsWith("VID2")) throw new StageHold("youtube blocked"); return {}; } }));
  assert.deepEqual([get(m, "VID2").state, get(m, "VID2").attempts, get(m, "VID2").retry_after ?? null], ["discovered", 0, null]);
  assert.equal(get(m, "VID1").state, "published");
  assert.deepEqual([r.held, r.stop_reason], [1, "done"]);
  const m2 = setup();
  const r2 = await run(m2, { video: { fetched: { accepts: () => false, run: ok } } });
  assert.deepEqual([r2.no_handler, get(m2, "VID1").state], [2, "discovered"]);
});

test("a stage can patch item fields it learned (e.g. the real upload time)", async () => {
  const m = setup(1);
  await run(m, { video: { fetched: async () => ({ patch: { published_at: "2026-09-30T08:00:00.000Z", title: "Real", meta: { duration_s: 99 } } }) } });
  const v = get(m, "VID1");
  assert.deepEqual([v.state, v.published_at, v.title, v.meta?.duration_s], ["fetched", "2026-09-30T08:00:00.000Z", "Real", 99]);
});

test("batch handlers: one call for up to N planned items, per-item quota and outcomes, then items go on alone", async () => {
  const m = setup(5);
  const calls: string[][] = [];
  const batch = { size: 2, run: async (items: ManifestItem[]) => {
    calls.push(items.map((i) => i.id.slice(-4)));
    return new Map(items.map((i) => [i.id, i.id.endsWith("VID4") ? new Error("bad page") : { data: { batched: items.length } }]));
  } };
  const r = await run(m, { video: { fetched: { batch }, captioned: ok } }, { quotas: { ...quotas, captions: 5 } });
  assert.deepEqual(calls, [["VID5", "VID4"], ["VID3", "VID2"], ["VID1"]], "newest first, grouped in plan order");
  assert.deepEqual([get(m, "VID5").state, get(m, "VID5").stages.fetched?.batched], ["captioned", 2]);
  assert.deepEqual([get(m, "VID4").state, get(m, "VID4").attempts], ["discovered", 1]);
  assert.equal(get(m, "VID1").state, "captioned");
  assert.deepEqual([r.items_touched, r.failed_attempts, r.quota_charged.captions], [5, 1, 5]);
});

test("batch handlers: quota caps the group; a thrown StageHold holds the whole group", async () => {
  const m = setup(3);
  const sizes: number[] = [];
  const batch = { size: 8, run: async (items: ManifestItem[]) => { sizes.push(items.length); return new Map(items.map((i) => [i.id, {}])); } };
  await run(m, { video: { fetched: { batch } } }, { quotas: { ...quotas, captions: 2 } });
  assert.deepEqual(sizes, [2]);
  assert.equal(get(m, "VID1").state, "discovered");
  const m2 = setup(3);
  const r = await run(m2, { video: { fetched: { batch: { size: 8, run: async () => { throw new StageHold("mirror busy"); } } } } });
  assert.deepEqual([r.held, get(m2, "VID3").attempts], [3, 0]);
});
