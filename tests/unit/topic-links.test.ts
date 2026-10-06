import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { writeJson, writeText } from "../../pipeline/lib/fsx.js";
import type { LlmRequest } from "../../pipeline/lib/llm.js";
import type { Llm, VideoExtraction } from "../../pipeline/extract/video.js";
import type { PostExtraction } from "../../pipeline/extract/post.js";
import { linkTopics, loadTopicLinks, mediaByTopic, topicCandidates } from "../../pipeline/link/topics.js";

const NOW = new Date("2026-10-07T01:00:00Z");
const topic = (id: string, title: string, system: string, path: string[]) =>
  `---\nid: topic/${id}\ntype: topic\ntitle: ${JSON.stringify(title)}\nsystem: ${system}\nlearn_toc_path: ${JSON.stringify(path)}\n---\n\nbody\n`;
const video = (over: Partial<VideoExtraction> = {}): VideoExtraction => ({
  video_id: "V1", item_id: "video/yt-microsoft/V1", title: "Set up VAT reporting in Business Central", duration_s: 600,
  systems: ["finance"], topics: ["vat statement", "vat return"], chapters: [],
  features: [{ name: "VAT return periods", description: "d", status: "ga", status_evidence_t: null, status_evidence_quote: null, status_evidence_verified: false, t_start: 1, t_end: 2, is_demoed: true, caveats: [], tags: [], system: "finance" }],
  objects: [], presenters: [], quotes: [], disclaimers: [], checks: { quotes_kept: 0, quotes_dropped: 0, evidence_verified: 0, evidence_unverified: 0 }, windows: 1, prompt_version: 1, llm: [], ...over,
});
const post = (over: Partial<PostExtraction> = {}): PostExtraction => ({
  item_id: "blog/waldo-be/42", url: "https://www.waldo.be/42", title: "Telemetry for AL developers", source: "waldo-be", published_at: "2026-09-01T00:00:00Z", words: 900,
  summary: "How to add custom telemetry signals to an AL extension and query them.", key_points: ["Use Session.LogMessage for custom signals"], systems: ["development"], topics: ["telemetry"],
  objects: [], features: [], versions: [], language: "en", quotes: [], trimmed_for_policy: 0, prompt_version: 1,
  llm: { model: "claude-haiku-4-5", cached: false, cost_usd: 0.004, posts_in_call: 1 }, ...over,
});

function fixture() {
  const root = mkdtempSync(join(tmpdir(), "bcobs-topiclinks-"));
  const contentDir = join(root, "content"), dataDir = join(root, "data");
  writeText(join(contentDir, "topics/fin/vat.md"), topic("fin/vat", "Set up VAT", "finance", ["Finance", "Set up VAT"]));
  writeText(join(contentDir, "topics/fin.md"), topic("fin", "Finance", "finance", ["Finance"]));
  writeText(join(contentDir, "topics/dev/telemetry.md"), topic("dev/telemetry", "Monitoring and telemetry", "development", ["Development", "Telemetry"]));
  writeJson(join(dataDir, "extract/video/V1.json"), video());
  writeJson(join(dataDir, "extract/blog/waldo-be/42.json"), post());
  return { contentDir, dataDir };
}
/** Answers with what `answer` returns for each call; aliases resolve through the call's schema enums. */
function fake(answer: (r: LlmRequest, alias: (title: string) => string) => unknown[]) {
  const reqs: LlmRequest[] = [];
  const llm: Llm = async <T>(r: LlmRequest) => {
    reqs.push(r);
    const hubs: { id: string; title: string }[] = JSON.parse(r.prompt.split("\n")[1]);
    const alias = (title: string) => hubs.find((h) => h.title === title)?.id ?? "t999";
    return { output: { links: answer(r, alias) } as T, cached: false, meta: { model: "claude-haiku-4-5", cost_usd: 0.01 } as any };
  };
  return { llm, reqs };
}
const opts = (llm: Llm, quota = 50) => ({ quota, deadline: new Date("2099-01-01"), clock: () => NOW, llm });

test("candidates are the topic hubs of the item's systems; a call only offers those", async () => {
  const { contentDir, dataDir } = fixture();
  assert.deepEqual(topicCandidates(contentDir).map((c) => `${c.alias}:${c.id}`), ["t1:topic/dev/telemetry", "t2:topic/fin", "t3:topic/fin/vat"]);
  const { llm, reqs } = fake(() => []);
  const r = await linkTopics(dataDir, contentDir, opts(llm));
  assert.deepEqual([r.run.units, r.run.calls], [2, 2], "finance video and development post go in separate calls");
  const fin = reqs.find((q) => q.prompt.includes("VAT"))!;
  assert.deepEqual((fin.schema as any).properties.links.items.properties.hub.enum, ["t2", "t3"]);
});

test("valid links are kept; invented quotes, non-candidates and over-linked items are dropped", async () => {
  const { contentDir, dataDir } = fixture();
  const { llm } = fake((r, a) => r.prompt.includes("VAT")
    ? [{ ref: "e1", hub: a("Set up VAT"), quote: "Set up VAT reporting" }, { ref: "e1", hub: a("Finance"), quote: "VAT reporting in Business Central and more" }]
    : [{ ref: "e1", hub: a("Monitoring and telemetry"), quote: "add custom telemetry signals to an AL extension" }, { ref: "e1", hub: "t3", quote: "custom telemetry signals" }]);
  const { run } = await linkTopics(dataDir, contentDir, opts(llm));
  const links = loadTopicLinks(dataDir);
  assert.deepEqual(links.units["video/V1"].matches.map((m) => m.topic), ["topic/fin/vat"], "the invented quote words are dropped");
  assert.deepEqual(links.units["post/waldo-be/42"].matches.map((m) => m.topic), ["topic/dev/telemetry"], "t3 is not a candidate of a development post");
  assert.equal(links.units["post/waldo-be/42"].source, "waldo-be");
  assert.equal(links.units["video/V1"].source, "yt-microsoft");
  assert.equal(run.rejected, 2);
  assert.deepEqual([...mediaByTopic(links).keys()].sort(), ["topic/dev/telemetry", "topic/fin/vat"]);
});

test("incremental: unchanged units are not redone; a changed post is", async () => {
  const { contentDir, dataDir } = fixture();
  const first = fake(() => []);
  await linkTopics(dataDir, contentDir, opts(first.llm));
  const again = fake(() => []);
  const r2 = await linkTopics(dataDir, contentDir, opts(again.llm));
  assert.deepEqual([r2.run.stale, again.reqs.length], [0, 0]);
  writeJson(join(dataDir, "extract/blog/waldo-be/42.json"), post({ summary: "A new summary about telemetry signals." }));
  const third = fake(() => []);
  const r3 = await linkTopics(dataDir, contentDir, opts(third.llm));
  assert.deepEqual([r3.run.stale, third.reqs.length], [1, 1]);
});

test("the quota caps calls; the rest waits for the next run", async () => {
  const { contentDir, dataDir } = fixture();
  const { llm } = fake(() => []);
  const r = await linkTopics(dataDir, contentDir, opts(llm, 1));
  assert.deepEqual([r.run.calls, r.run.stopped, Object.keys(r.links.units).length], [1, "quota", 1]);
});
