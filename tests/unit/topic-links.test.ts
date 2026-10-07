import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { writeJson, writeText } from "../../pipeline/lib/fsx.js";
import type { LlmRequest } from "../../pipeline/lib/llm.js";
import type { Llm, VideoExtraction } from "../../pipeline/extract/video.js";
import type { PostExtraction } from "../../pipeline/extract/post.js";
import { linkTopics, loadTopicLinks, loadTopicReview, mediaByTopic, topicCandidates } from "../../pipeline/link/topics.js";
import { BATCH_HUBS, callRefs, hubContext, planReviewCalls, reviewTopicLinks } from "../../pipeline/review/topics.js";

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

// --- the Opus review of those links (D54) -----------------------------------------------------------------

/** Answers with a verdict per ref; `refs` maps the prompt's refs to keep/drop by the quoted words. */
function fakeReview(answer: (r: LlmRequest, refs: { ref: string; quoted: string; evidence: string }[]) => unknown[]) {
  const reqs: LlmRequest[] = [];
  const llm: Llm = async <T>(r: LlmRequest) => {
    reqs.push(r);
    const body: { section: any; links: { ref: string; quoted: string; evidence: string }[] }[] = JSON.parse(r.prompt.slice(r.prompt.indexOf("[")));
    const refs = body.flatMap((b) => b.links);
    return { output: { verdicts: answer(r, refs) } as T, cached: false, meta: { model: "claude-opus-5", cost_usd: 0.05 } as any };
  };
  return { llm, reqs };
}
/** Link the fixture so there is something to review: the video gets VAT, the post gets telemetry. */
async function linked() {
  const f = fixture();
  const { llm } = fake((r, a) => r.prompt.includes("VAT")
    ? [{ ref: "e1", hub: a("Set up VAT"), quote: "Set up VAT reporting" }]
    : [{ ref: "e1", hub: a("Monitoring and telemetry"), quote: "add custom telemetry signals to an AL extension" }]);
  await linkTopics(f.dataDir, f.contentDir, opts(llm));
  return f;
}

test("the review sees one hub with all its links, the hubs around it, and the text the matcher saw", async () => {
  const { contentDir, dataDir } = await linked();
  const { llm, reqs } = fakeReview((_r, refs) => refs.map((x) => ({ ref: x.ref, verdict: "keep", reason: "about it" })));
  const run = await reviewTopicLinks(dataDir, contentDir, opts(llm));
  assert.deepEqual([run.candidates, run.reviewed, run.kept, run.dropped], [2, 2, 2, 0]);
  assert.equal(reqs.length, 1, "both hubs have one link each, so they share a call");
  const q = reqs[0];
  assert.equal(q.role, "review", "the review runs on Opus, not on the matcher's model");
  const body = JSON.parse(q.prompt.slice(q.prompt.indexOf("[")));
  assert.deepEqual(body.map((b: any) => b.section.title).sort(), ["Monitoring and telemetry", "Set up VAT"]);
  assert.deepEqual(body.find((b: any) => b.section.title === "Set up VAT").section.sections_beside_it, [],
    "Set up VAT sits two deep under Finance, which has no other child here");
  assert.match(q.prompt, /Set up VAT reporting in Business Central/, "the evidence text, not just the quote");
});

test("a dropped link disappears from every view; a kept one stays", async () => {
  const { contentDir, dataDir } = await linked();
  const { llm } = fakeReview((_r, refs) => refs.map((x) => ({ ref: x.ref, verdict: x.evidence.includes("telemetry") ? "drop" : "keep", reason: "r" })));
  const run = await reviewTopicLinks(dataDir, contentDir, opts(llm));
  assert.deepEqual([run.kept, run.dropped], [1, 1]);
  const links = loadTopicLinks(dataDir), review = loadTopicReview(dataDir);
  assert.deepEqual([...mediaByTopic(links, review).keys()], ["topic/fin/vat"], "the dropped hub has no media left");
  assert.deepEqual([...mediaByTopic(links).keys()].sort(), ["topic/dev/telemetry", "topic/fin/vat"], "the links themselves are untouched");
});

test("a hub is due only while a link lacks a verdict, and a re-extracted item makes it due again", async () => {
  const { contentDir, dataDir } = await linked();
  const keep = (_r: LlmRequest, refs: { ref: string }[]) => refs.map((x) => ({ ref: x.ref, verdict: "keep", reason: "r" }));
  await reviewTopicLinks(dataDir, contentDir, opts(fakeReview(keep).llm));
  const second = fakeReview(keep);
  assert.deepEqual([(await reviewTopicLinks(dataDir, contentDir, opts(second.llm))).candidates, second.reqs.length], [0, 0]);
  // the post changes, so its unit hash changes, so its verdict no longer applies
  writeJson(join(dataDir, "extract/blog/waldo-be/42.json"), post({ summary: "A new summary about telemetry signals." }));
  const { llm } = fake((r, a) => (r.prompt.includes("VAT") ? [] : [{ ref: "e1", hub: a("Monitoring and telemetry"), quote: "new summary about telemetry signals" }]));
  await linkTopics(dataDir, contentDir, opts(llm));
  const third = fakeReview(keep);
  assert.deepEqual([(await reviewTopicLinks(dataDir, contentDir, opts(third.llm))).candidates, third.reqs.length], [1, 1]);
});

test("a review that does not answer every ref is not trusted at all", async () => {
  const { contentDir, dataDir } = await linked();
  const { llm } = fakeReview((_r, refs) => refs.slice(1).map((x) => ({ ref: x.ref, verdict: "drop", reason: "r" })));
  const run = await reviewTopicLinks(dataDir, contentDir, opts(llm));
  assert.deepEqual([run.reviewed, run.failed, run.kept, run.dropped], [0, 2, 0, 0]);
  assert.match(run.errors[0], /expected 2 verdicts, got 1/);
  assert.deepEqual([...mediaByTopic(loadTopicLinks(dataDir), loadTopicReview(dataDir)).keys()].sort(),
    ["topic/dev/telemetry", "topic/fin/vat"], "nothing is dropped on a failed review");
});

test("the quota caps the review; the rest waits for the next run", async () => {
  const { contentDir, dataDir } = await linked();
  const { llm, reqs } = fakeReview((_r, refs) => refs.map((x) => ({ ref: x.ref, verdict: "keep", reason: "r" })));
  const run = await reviewTopicLinks(dataDir, contentDir, opts(llm, 1));
  assert.deepEqual([reqs.length, run.calls, run.stopped], [1, 1, "done"], "one call covers both single-link hubs");
});

test("hubContext names the subtopics below a hub and the hubs beside it", () => {
  const all = topicCandidates(fixture().contentDir);
  const fin = all.find((c) => c.id === "topic/fin")!;
  assert.deepEqual(hubContext(fin, all), { children: ["Set up VAT"], siblings: [] });
  const vat = all.find((c) => c.id === "topic/fin/vat")!;
  assert.deepEqual(hubContext(vat, all), { children: [], siblings: [] });
});

test("a hub with links to weigh gets its own call; the single-link hubs share one", () => {
  const hub = (id: string) => ({ id, alias: id, title: id, path: id, system: "s" });
  const link = (k: string) => ({ ref: "", key: k, hash: "h", kind: "post" as const, title: k, source: null, text: "t", quote: "q" });
  const todo = [
    { id: "a", hub: hub("a"), links: [link("1"), link("2"), link("3")] },
    { id: "b", hub: hub("b"), links: [link("4"), link("5")] },
    ...Array.from({ length: 7 }, (_, i) => ({ id: `s${i}`, hub: hub(`s${i}`), links: [link(`x${i}`)] })),
  ];
  const calls = planReviewCalls(todo);
  assert.deepEqual(calls.map((c) => c.sections.map((s) => s.id)),
    [["a"], ["b"], ["s0", "s1", "s2", "s3", "s4", "s5"], ["s6"]], `${BATCH_HUBS} single-link hubs per call`);
  assert.deepEqual(callRefs(calls[0]), ["l1", "l2", "l3"]);
  assert.deepEqual(callRefs(calls[2]), ["l6", "l7", "l8", "l9", "l10", "l11"], "refs are unique across the whole plan");
});
