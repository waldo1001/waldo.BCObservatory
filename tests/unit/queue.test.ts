import { test } from "node:test";
import assert from "node:assert/strict";
import type { ManifestItem, Pillar } from "../../pipeline/lib/manifest.js";
import { horizonFor, planQueue, quotaFor } from "../../pipeline/lib/queue.js";

const now = new Date("2026-10-07T01:00:00Z");
let n = 0;
function item(pillar: Pillar, published_at: string | null, over: Partial<ManifestItem> = {}): ManifestItem {
  const source = over.source ?? `${pillar}-src`;
  return {
    id: `${pillar}/${source}/k${++n}`, pillar, source, tier: "official", title: "t", url: "u", published_at,
    state: "discovered", stages: { discovered: { at: now.toISOString() } }, attempts: 0, flags: [], ...over,
  };
}
const noSources = new Map();

test("quota keys follow the stage", () => {
  assert.equal(quotaFor("video", "captioned"), "captions");
  assert.equal(quotaFor("video", "extracted"), "video_extract");
  assert.equal(quotaFor("blog", "fetched"), "posts");
  // D61: a change's GitHub calls are deterministic (change_fetch); its Haiku pass is an LLM quota (changes)
  assert.equal(quotaFor("change", "fetched"), "change_fetch");
  assert.equal(quotaFor("change", "extracted"), "changes");
  assert.equal(quotaFor("change", "published"), null);
  assert.equal(quotaFor("docs", "reviewed"), "opus_reviews");
  assert.equal(quotaFor("docs", "linked"), null);
  assert.equal(quotaFor("roadmap", "fetched"), null);
  // D67: the code pillar's linked stage is the call graph, minutes of CPU, with a quota of its own
  assert.equal(quotaFor("code", "linked"), "graph_jobs");
  assert.equal(quotaFor("code", "extracted"), "code_jobs");
  assert.equal(quotaFor("code", "published"), null);
});

test("code items follow narrative_order (29, 28, 30); one graph a night; budget.json has the quota and the cpu lane", async () => {
  const x = { state: "extracted" as const }; // next stage = linked
  const code = ["30", "28", "29", "27"].map((m) => item("code", null, { ...x, source: "bcapps", meta: { major: m } }));
  const p = planQueue(code, { graph_jobs: 1 }, noSources, now, ["29", "28", "30"]);
  assert.deepEqual(p.work.map((w) => [w.id, w.quota]), [[code[2].id, "graph_jobs"]]);
  assert.equal(p.quota_use.graph_jobs.available, 4);
  const all = planQueue(code, { graph_jobs: 9 }, noSources, now, ["29", "28", "30"]);
  assert.deepEqual(all.work.map((w) => w.id), [code[2].id, code[1].id, code[0].id, code[3].id]);
  const { readFileSync } = await import("node:fs");
  const budget = JSON.parse(readFileSync(new URL("../../config/budget.json", import.meta.url), "utf8"));
  assert.equal(budget.quotas.graph_jobs, 1);
  assert.equal(budget.lanes.cpu, 1);
  assert.ok(budget.lane_timeout_seconds.cpu > 3600, "the lane timeout sits above the job's own 60-minute kill");
});

test("newest first within a pillar, quota caps, round-robin across pillars", () => {
  const f = { state: "fetched" as const }; // next stage = extraction, which costs quota
  const docs = [item("docs", "2026-01-01T00:00:00Z", f), item("docs", "2026-09-01T00:00:00Z", f), item("docs", "2026-05-01T00:00:00Z", f), item("docs", null, f)];
  const blogs = [item("blog", "2026-08-01T00:00:00Z"), item("blog", "2026-10-01T00:00:00Z")];
  const plan = planQueue([...docs, ...blogs], { docs: 2, posts: 5 }, noSources, now);
  assert.deepEqual(plan.work.map((w) => w.id), [docs[1].id, blogs[1].id, docs[2].id, blogs[0].id]);
  assert.deepEqual(plan.quota_use.docs, { selected: 2, available: 4, limit: 2 });
});

test("reading git pages from the mirror is quota-free; video captions are not", () => {
  const plan = planQueue([item("docs", "2026-01-01T00:00:00Z"), item("guidelines", "2026-01-01T00:00:00Z")], { docs: 0, guidelines: 0 }, noSources, now);
  assert.deepEqual(plan.work.map((w) => [w.stage, w.quota]), [["fetched", null], ["fetched", null]]);
  assert.equal(quotaFor("video", "fetched"), "captions");
});

test("future retry_after and terminal items are left out; deterministic stages ignore quotas", () => {
  const waiting = item("docs", "2026-09-01T00:00:00Z", { retry_after: "2026-10-07T05:00:00Z" });
  const done = item("docs", "2026-09-01T00:00:00Z", { state: "published" });
  const linking = item("docs", "2026-09-01T00:00:00Z", { state: "summarized" });
  const plan = planQueue([waiting, done, linking], { docs: 0 }, noSources, now);
  assert.deepEqual(plan.work.map((w) => [w.id, w.stage, w.quota]), [[linking.id, "linked", null]]);
});

test("items past the source horizon are skipped only before work starts", () => {
  const sources = new Map([["old-blog", { backfill: { months: 18 } }]]);
  const ancient = item("blog", "2024-01-01T00:00:00Z", { source: "old-blog" });
  const started = item("blog", "2024-01-01T00:00:00Z", { source: "old-blog", state: "fetched" });
  const recent = item("blog", "2026-06-01T00:00:00Z", { source: "old-blog" });
  const plan = planQueue([ancient, started, recent], { posts: 10 }, sources, now);
  assert.deepEqual(plan.skips, [{ id: ancient.id, reason: "horizon" }]);
  assert.deepEqual(plan.work.map((w) => w.id).sort(), [started.id, recent.id].sort());
  assert.equal(horizonFor({ backfill: { all: true } }, now), null);
  assert.equal(horizonFor({ backfill: { months: 18 } }, now)?.toISOString(), "2025-04-07T01:00:00.000Z");
});

test("opted-in full-text sources (waldo.be) come first in their pillar, then newest first", () => {
  const old = item("blog", "2025-05-01T00:00:00Z", { source: "waldo-be" });
  const fresh = item("blog", "2026-10-01T00:00:00Z", { source: "other" });
  const plan = planQueue([fresh, old], { posts: 10 }, new Map([["waldo-be", { full_text: true, backfill: { months: 18 } }], ["other", { full_text: false, backfill: { months: 18 } }]]), now);
  assert.deepEqual(plan.work.map((w) => w.id), [old.id, fresh.id]);
});
