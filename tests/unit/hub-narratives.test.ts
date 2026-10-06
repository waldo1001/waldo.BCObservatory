import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import matter from "gray-matter";
import { writeJson } from "../../pipeline/lib/fsx.js";
import { LlmBudgetExhausted, type LlmRequest } from "../../pipeline/lib/llm.js";
import type { ManifestItem } from "../../pipeline/lib/manifest.js";
import { validate } from "../../pipeline/lib/schema.js";
import type { TopicHub } from "../../pipeline/link/toc.js";
import { docExtractionPath } from "../../pipeline/extract/docs.js";
import type { Llm } from "../../pipeline/extract/video.js";
import { refreshNarratives } from "../../pipeline/summarize/hub.js";
import { renderTopics } from "../../pipeline/render/topic.js";

const doc = (k: string): ManifestItem => ({ id: `docs/learn/bc/${k}.md`, pillar: "docs", source: "learn", tier: "official", title: k, url: `https://learn/${k}`, state: "published", stages: {}, attempts: 0, published_at: "2026-09-01T00:00:00Z" });
const hub = (id: string, members: string[], over: Partial<TopicHub> = {}): TopicHub => ({ id, title: id.split("/").pop()!, toc: "t", breadcrumb: [], parent: null, children: [], members, system: "finance", member_hash: "h", ...over });
function world(extracted: string[]) {
  const dataDir = mkdtempSync(join(tmpdir(), "bcobs-hubs-"));
  const items = ["a", "b", "c", "d", "e"].map(doc);
  for (const k of extracted) writeJson(docExtractionPath(dataDir, doc(k)), { item_id: doc(k).id, url: "u", title: k, blob: null, summary: `Page ${k} explains ${k}.`, systems: ["finance"], topics: [], objects: [], features: [`feature ${k}`], versions: [], parts: 1, prompt_version: 1, llm: [] });
  const child = hub("topic/bc/fin/gl", [items[0].id, items[1].id], { parent: "topic/bc/fin", breadcrumb: ["fin"] });
  const parent = hub("topic/bc/fin", items.map((i) => i.id), { children: [child.id] });
  return { dataDir, items, hubs: [parent, child] };
}
function fake(fn: (r: LlmRequest) => unknown = () => ({ summary: "Finance — the area.", overview: "o", key_points: ["k1", "k2", "k3"] })) {
  const reqs: LlmRequest[] = [];
  const llm: Llm = async <T>(r: LlmRequest) => { reqs.push(r); return { output: fn(r) as T, cached: false, meta: { model: "claude-sonnet-5-5", cost_usd: 0.04 } as any }; };
  return { llm, reqs };
}
const opts = (llm: Llm, quota = 10) => ({ quota, deadline: new Date("2099-01-01"), clock: () => new Date("2026-10-07T03:00:00Z"), llm });

test("children first, parents use tonight's child narratives, unchanged inputs are not redone", async () => {
  const w = world(["a", "b", "c", "d", "e"]);
  const { llm, reqs } = fake();
  const r1 = await refreshNarratives(w.hubs, w.items, w.dataDir, opts(llm));
  assert.deepEqual(reqs.map((r) => r.label), ["topic/bc/fin/gl narrative", "topic/bc/fin narrative"]);
  assert.equal(reqs[0].role, "prose");
  assert.ok(reqs[1].prompt.includes("Finance - the area.") && reqs[1].prompt.includes("Page c explains c."), "parent sees the child narrative and its own pages");
  assert.ok(!reqs[1].prompt.includes("Page a explains"), "pages covered by a subtopic are not repeated in the parent");
  assert.deepEqual([r1.run.refreshed, r1.narratives.get("topic/bc/fin")!.summary], [2, "Finance - the area."]);
  const r2 = await refreshNarratives(w.hubs, w.items, w.dataDir, opts(fake().llm));
  assert.deepEqual([r2.run.refreshed, r2.run.ready_stale], [0, 0]);
});

test("readiness: below 80% of inputs a hub waits; quota and spend cap stop the run but count the backlog", async () => {
  const w = world(["a", "b", "c"]); // parent: 3 own pages, 1 extracted -> with the child narrative 2 of 4 inputs
  const { llm, reqs } = fake();
  const r = await refreshNarratives(w.hubs, w.items, w.dataDir, opts(llm));
  assert.deepEqual(reqs.map((x) => x.label), ["topic/bc/fin/gl narrative"]);
  assert.equal(r.run.ready_stale, 1);
  const w2 = world(["a", "b", "c", "d", "e"]);
  const q = await refreshNarratives(w2.hubs, w2.items, w2.dataDir, opts(fake().llm, 1));
  assert.deepEqual([q.run.refreshed, q.run.stopped], [1, "quota"]);
  const capped: Llm = async () => { throw new LlmBudgetExhausted(10, 10); };
  const c = await refreshNarratives(w2.hubs, w2.items, w2.dataDir, opts(capped));
  assert.deepEqual([c.run.refreshed, c.run.stopped, c.run.ready_stale], [0, "spend-cap", 1]);
});

test("topic page shows the narrative and stays schema-valid", async () => {
  const w = world(["a", "b", "c", "d", "e"]);
  const { narratives } = await refreshNarratives(w.hubs, w.items, w.dataDir, opts(fake().llm));
  const contentDir = join(w.dataDir, "content");
  renderTopics(w.hubs, w.items, w.dataDir, contentDir, new Date(), narratives);
  const { data, content } = matter(readFileSync(join(contentDir, "topics/bc/fin.md"), "utf8"));
  const v = validate("frontmatter.topic", data);
  assert.ok(v.ok, v.errors.join("; "));
  assert.deepEqual([data.narrative, data.summary, data.generated.prompts], ["generated", "Finance - the area.", { "hub-topic": 1 }]);
  assert.ok(content.includes("## Overview") && content.includes("- k1") && content.includes("machine-generated narrative"));
});
