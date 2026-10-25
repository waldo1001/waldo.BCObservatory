import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { writeJson, writeText } from "../../pipeline/lib/fsx.js";
import type { LlmRequest } from "../../pipeline/lib/llm.js";
import type { Llm, VideoExtraction } from "../../pipeline/extract/video.js";
import type { PostExtraction } from "../../pipeline/extract/post.js";
import { linkTopics, loadTopicLinks, loadTopicReview, mediaByTopic, postUnit, secondChanceOf, topicCandidates, topicVerdictKey, unitPageId, type TopicLinkUnit, type TopicReview } from "../../pipeline/link/topics.js";
import { fileKey } from "../../pipeline/lib/manifest.js";
import { BATCH_HUBS, callRefs, gatherTopicLinks, hubContext, MAX_REFS, planReviewCalls, PROMPT_VERSION, reviewTopicLinks, SYSTEM } from "../../pipeline/review/topics.js";

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
    const hubs: { id: string; title: string }[] = JSON.parse(r.prompt.split("\n").find((l) => l.startsWith('[{"id"'))!);
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

// D117: verdicts carry the review standard; a drop under an older one is weighed again
test("a verdict records the review standard it was made under", async () => {
  const { contentDir, dataDir } = await linked();
  await reviewTopicLinks(dataDir, contentDir, opts(fakeReview((_r, refs) => refs.map((x) => ({ ref: x.ref, verdict: "keep", reason: "r" }))).llm));
  const vs = Object.values(loadTopicReview(dataDir).verdicts).flatMap((h) => Object.values(h));
  assert.equal(vs.length, 2);
  assert.ok(vs.every((v) => v.v === PROMPT_VERSION && PROMPT_VERSION === 2), "every verdict says it was made under review standard 2");
});

test("a drop under an older standard makes its hub due again; an old keep does not", async () => {
  const { contentDir, dataDir } = await linked();
  await reviewTopicLinks(dataDir, contentDir, opts(fakeReview((_r, refs) => refs.map((x) => ({ ref: x.ref, verdict: x.evidence.includes("telemetry") ? "drop" : "keep", reason: "r" }))).llm));
  // the same verdicts as a review under standard 1 left them: no `v`
  const review = loadTopicReview(dataDir);
  for (const h of Object.values(review.verdicts)) for (const v of Object.values(h)) delete (v as { v?: number }).v;
  writeJson(join(dataDir, "links/topics-review.json"), review);
  const again = fakeReview((_r, refs) => refs.map((x) => ({ ref: x.ref, verdict: "keep", reason: "r" })));
  const run = await reviewTopicLinks(dataDir, contentDir, opts(again.llm));
  assert.equal(run.candidates, 1, "only the hub that held the old drop is due");
  assert.equal(again.reqs.length, 1);
  assert.match(again.reqs[0].prompt, /Monitoring and telemetry/);
  assert.doesNotMatch(again.reqs[0].prompt, /Set up VAT"/, "the hub with only an old keep is not re-reviewed");
  assert.deepEqual([...mediaByTopic(loadTopicLinks(dataDir), loadTopicReview(dataDir)).keys()].sort(), ["topic/dev/telemetry", "topic/fin/vat"], "the re-kept link is back");
});

test("the review keeps tools built on a documented feature and leans to keep", () => {
  assert.match(SYSTEM, /tool, extension, script or practice/);
  assert.match(SYSTEM, /When in doubt, keep/);
  assert.doesNotMatch(SYSTEM, /the passing one is a drop/);
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

test("a feed post links to its page, not its raw feed key (D58)", () => {
  // feed posts are keyed by URL or blogger tag; their pages are file-safe
  assert.equal(unitPageId("post", "post/waldo-be/42"), "post/waldo-be/42", "a numeric key is already a file name");
  const url = unitPageId("post", "post/thatnavguy-com/https://thatnavguy.com/blog/2025/bc-friday-tips-38/");
  assert.match(url, /^post\/thatnavguy-com\/[A-Za-z0-9][A-Za-z0-9._-]*$/);
  assert.equal(url, `post/thatnavguy-com/${fileKey("https://thatnavguy.com/blog/2025/bc-friday-tips-38/")}`, "the same key render/post.ts writes the page under");
  assert.equal(unitPageId("video", "video/V1"), "video/V1");
  const links = { prompt_version: 2, units: { "post/thatnavguy-com/https://x.com/a/": { kind: "post" as const, key: "post/thatnavguy-com/https://x.com/a/", hash: "h", title: "t", source: "thatnavguy-com", at: "", matches: [{ topic: "topic/fin", quote: "q" }] } } };
  assert.deepEqual(mediaByTopic(links).get("topic/fin")!.map((m) => m.key), [unitPageId("post", "post/thatnavguy-com/https://x.com/a/")]);
});

test("a hub with more links than one call can carry is split evenly, and its verdicts merge (D58)", async () => {
  const hub = { id: "big", alias: "big", title: "big", path: "big", system: "s" };
  const link = (k: string) => ({ ref: "", key: k, hash: "h", kind: "post" as const, title: k, source: null, text: "t", quote: "q" });
  const calls = planReviewCalls([{ id: "big", hub, links: Array.from({ length: 30 }, (_, i) => link(`p${i}`)) }]);
  assert.deepEqual(calls.map((c) => callRefs(c).length), [15, 15], `at most ${MAX_REFS} refs, evenly`);
  assert.ok(calls.every((c) => c.sections[0].id === "big"));
});

test("a chunked hub keeps every chunk's verdicts, not just the last one's", async () => {
  const { contentDir, dataDir } = fixture();
  // 20 posts all proposed for "Set up VAT": two calls of 10
  const units: Record<string, any> = {};
  for (let i = 0; i < 20; i++) {
    const p = post({ item_id: `blog/waldo-be/${100 + i}`, title: `VAT post ${i}`, summary: `VAT return number ${i}.`, systems: ["finance"] });
    writeJson(join(dataDir, `extract/blog/waldo-be/${100 + i}.json`), p);
    units[`post/waldo-be/${100 + i}`] = { kind: "post", key: `post/waldo-be/${100 + i}`, hash: `h${i}`, title: p.title, source: "waldo-be", at: "", matches: [{ topic: "topic/fin/vat", quote: "VAT" }] };
  }
  writeJson(join(dataDir, "links/topics.json"), { prompt_version: 2, units });
  const { llm, reqs } = fakeReview((_r, refs) => refs.map((x) => ({ ref: x.ref, verdict: "keep", reason: "r" })));
  const run = await reviewTopicLinks(dataDir, contentDir, opts(llm));
  assert.equal(reqs.length, 2);
  assert.equal(Object.keys(loadTopicReview(dataDir).verdicts["topic/fin/vat"]).length, 20, "both chunks' verdicts are kept");
  assert.deepEqual([run.reviewed, run.kept], [2, 20]);
});

// --- D102: one second chance for a unit whose every link the review dropped -------------------------------

const P = "post/waldo-be/42", A = "topic/dev/telemetry", B = "topic/dev/monitor";
const SECOND = /^Second pass: /;
const unitOf = (over: Partial<TopicLinkUnit> = {}): TopicLinkUnit => ({ kind: "post", key: P, hash: "h1", title: "t", source: "waldo-be", at: "", matches: [{ topic: A, quote: "q" }], ...over });
const reviewOf = (...v: [string, string, "keep" | "drop", string][]): TopicReview => {
  const r: TopicReview = { prompt_version: 1, verdicts: {} };
  for (const [topicId, hash, verdict, reason] of v) (r.verdicts[topicId] ??= {})[topicVerdictKey(P, hash)] = { verdict, reason, at: "x" };
  return r;
};
function fixture2() {
  const f = fixture();
  writeText(join(f.contentDir, "topics/dev/monitor.md"), topic("dev/monitor", "Monitor and analyze telemetry", "development", ["Administration", "Monitor"]));
  return f;
}
/** Records the verdict for post P's current link to `topicId`, at the unit's current hash. */
function verdict(dataDir: string, topicId: string, v: "keep" | "drop", reason: string) {
  const u = loadTopicLinks(dataDir).units[P], r = loadTopicReview(dataDir);
  (r.verdicts[topicId] ??= {})[topicVerdictKey(u.key, u.hash)] = { verdict: v, reason, at: "x" };
  r.prompt_version = 1;
  writeJson(join(dataDir, "links/topics-review.json"), r);
}
/** The first round: P is linked to hub A, and the review drops it. */
async function dayOne(f: { contentDir: string; dataDir: string }) {
  const { llm } = fake((r, a) => (r.prompt.includes("VAT") ? [] : [{ ref: "e1", hub: a("Monitoring and telemetry"), quote: "add custom telemetry signals to an AL extension" }]));
  await linkTopics(f.dataDir, f.contentDir, opts(llm));
  verdict(f.dataDir, A, "drop", "belongs under B");
}
const answerB = (r: LlmRequest, a: (t: string) => string) => (r.prompt.includes("VAT") ? [] : [{ ref: "e1", hub: a("Monitor and analyze telemetry"), quote: "add custom telemetry signals" }]);
const evidenceOf = (r: LlmRequest) => JSON.parse(r.prompt.split("Evidence items (JSON; each lists the hub ids it may link to):\n")[1]);
const hubsOf = (r: LlmRequest): { id: string; title: string }[] => JSON.parse(r.prompt.split("\n").find((l) => l.startsWith('[{"id"'))!);

test("secondChanceOf: only a unit whose every link is dropped at its current hash gets one", () => {
  const both = unitOf({ matches: [{ topic: A, quote: "q" }, { topic: B, quote: "q" }] });
  assert.deepEqual(secondChanceOf(both, reviewOf([A, "h1", "drop", "ra"], [B, "h1", "drop", "rb"]), "now"),
    { at: "now", dropped: [{ topic: A, reason: "ra" }, { topic: B, reason: "rb" }] });
  assert.equal(secondChanceOf(both, reviewOf([A, "h1", "drop", "ra"], [B, "h1", "keep", "rb"]), "now"), null, "one keep");
  assert.equal(secondChanceOf(both, reviewOf([A, "h1", "drop", "ra"]), "now"), null, "one link without a verdict");
  assert.equal(secondChanceOf(unitOf({ matches: [] }), reviewOf(), "now"), null);
  assert.equal(secondChanceOf(unitOf(), reviewOf([A, "old", "drop", "ra"]), "now"), null, "a drop at an older hash");
  assert.equal(secondChanceOf(undefined, reviewOf(), "now"), null);
  const had = { at: "before", dropped: [{ topic: "topic/x", reason: "r" }] };
  assert.equal(secondChanceOf(unitOf({ second: had }), reviewOf([A, "h1", "drop", "ra"]), "now"), had, "carried, never recomputed");
});

test("an excluded hub leaves the candidates and changes the hash; excluding all keeps the unit with no candidates", () => {
  const all = topicCandidates(fixture2().contentDir);
  const plain = postUnit(post(), all)!, ex = postUnit(post(), all, new Set([A]))!;
  assert.deepEqual(plain.cands.map((c) => c.id), [B, A]);
  assert.deepEqual(ex.cands.map((c) => c.id), [B]);
  assert.notEqual(ex.hash, plain.hash);
  const none = postUnit(post(), all, new Set([A, B]))!;
  assert.ok(none && none.cands.length === 0);
});

test("day 2: the dropped hub goes to Haiku as rejected, the new link is recorded with second", async () => {
  const f = fixture2();
  await dayOne(f);
  const { llm, reqs } = fake(answerB);
  const { run } = await linkTopics(f.dataDir, f.contentDir, opts(llm));
  assert.equal(reqs.length, 1, "P only");
  assert.match(reqs[0].prompt, SECOND);
  const ev = evidenceOf(reqs[0]);
  assert.deepEqual(ev[0].rejected, [{ title: "Monitoring and telemetry", path: "Development > Telemetry", why: "belongs under B" }]);
  assert.deepEqual(hubsOf(reqs[0]).map((h) => h.title), ["Monitor and analyze telemetry"], "A is not among the hubs");
  const u = loadTopicLinks(f.dataDir).units[P];
  assert.deepEqual(u.matches.map((m) => m.topic), [B]);
  assert.deepEqual(u.second, { at: NOW.toISOString(), dropped: [{ topic: A, reason: "belongs under B" }] });
  assert.deepEqual(run.second, { due: 1, called: 1, matched: 1 });
});

test("a first-round call is byte for byte what it was, and comes before the second-chance calls", async () => {
  const f = fixture2();
  await dayOne(f);
  writeJson(join(f.dataDir, "extract/video/V2.json"), video({ video_id: "V2", item_id: "video/yt-microsoft/V2", title: "Another VAT video" }));
  const { llm, reqs } = fake(answerB);
  await linkTopics(f.dataDir, f.contentDir, opts(llm));
  assert.equal(reqs.length, 2);
  const evidence = [{ ref: "e1", kind: "video", text: "Another VAT video. Topics: vat statement; vat return. Shows: VAT return periods", hubs: ["t3", "t4"] }];
  const stored = `Topic hubs (JSON):\n${JSON.stringify([{ id: "t3", title: "Finance", path: "Finance" }, { id: "t4", title: "Set up VAT", path: "Finance > Set up VAT" }])}\n\nEvidence items (JSON; each lists the hub ids it may link to):\n${JSON.stringify(evidence, null, 1)}`;
  assert.equal(reqs[0].prompt, stored);
  assert.ok(!reqs[0].prompt.includes("rejected"));
  assert.match(reqs[1].prompt, SECOND);
});

test("a rejected hub is refused on the second pass", async () => {
  const f = fixture2();
  await dayOne(f);
  const { llm } = fake((r) => (r.prompt.includes("VAT") ? [] : [{ ref: "e1", hub: "t2", quote: "add custom telemetry signals" }]));
  const { run } = await linkTopics(f.dataDir, f.contentDir, opts(llm));
  const u = loadTopicLinks(f.dataDir).units[P];
  assert.equal(run.rejected, 1);
  assert.match(run.rejections[0], /not a candidate of this item/);
  assert.deepEqual(u.matches, []);
  assert.ok(u.second);
});

test("no third pass: a unit with second is never offered again", async () => {
  const f = fixture2();
  await dayOne(f);
  await linkTopics(f.dataDir, f.contentDir, opts(fake(answerB).llm));
  verdict(f.dataDir, B, "drop", "still wrong");
  const before = JSON.stringify(loadTopicLinks(f.dataDir).units[P]);
  const again = fake(answerB);
  const { run } = await linkTopics(f.dataDir, f.contentDir, opts(again.llm));
  assert.equal(again.reqs.length, 0);
  assert.equal(JSON.stringify(loadTopicLinks(f.dataDir).units[P]), before);
  assert.equal(run.second.due, 0);
});

test("quota: new units go first; an eligible unit that waits keeps its record and is relinked next run", async () => {
  const f = fixture2();
  await dayOne(f);
  writeJson(join(f.dataDir, "extract/video/V2.json"), video({ video_id: "V2", item_id: "video/yt-microsoft/V2", title: "Another VAT video" }));
  const before = JSON.stringify(loadTopicLinks(f.dataDir).units[P]);
  const one = fake(answerB);
  const r1 = await linkTopics(f.dataDir, f.contentDir, opts(one.llm, 1));
  assert.equal(one.reqs.length, 1);
  assert.ok(!SECOND.test(one.reqs[0].prompt));
  assert.equal(JSON.stringify(loadTopicLinks(f.dataDir).units[P]), before);
  assert.equal(loadTopicLinks(f.dataDir).units[P].second, undefined);
  assert.deepEqual([r1.run.second.due, r1.run.second.called], [1, 0]);
  const next = fake(answerB);
  await linkTopics(f.dataDir, f.contentDir, opts(next.llm, 5));
  assert.equal(next.reqs.length, 1);
  assert.deepEqual(loadTopicLinks(f.dataDir).units[P].matches.map((m) => m.topic), [B]);
});

test("views: a kept second-chance link lists the post under the new hub only", async () => {
  const f = fixture2();
  await dayOne(f);
  await linkTopics(f.dataDir, f.contentDir, opts(fake(answerB).llm));
  verdict(f.dataDir, B, "keep", "fits");
  const m = mediaByTopic(loadTopicLinks(f.dataDir), loadTopicReview(f.dataDir));
  assert.deepEqual(m.get(B)?.map((x) => x.key), [P]);
  assert.equal(m.get(A), undefined);
});

test("re-extraction: second and its exclusions survive a changed text", async () => {
  const f = fixture2();
  await dayOne(f);
  await linkTopics(f.dataDir, f.contentDir, opts(fake(answerB).llm));
  const had = loadTopicLinks(f.dataDir).units[P].second;
  writeJson(join(f.dataDir, "extract/blog/waldo-be/42.json"), post({ summary: "A new summary about telemetry signals." }));
  const { llm, reqs } = fake((r, a) => (r.prompt.includes("VAT") ? [] : [{ ref: "e1", hub: a("Monitor and analyze telemetry"), quote: "new summary about telemetry signals" }]));
  const { run } = await linkTopics(f.dataDir, f.contentDir, opts(llm));
  assert.equal(reqs.length, 1);
  assert.deepEqual(hubsOf(reqs[0]).map((h) => h.title), ["Monitor and analyze telemetry"]);
  assert.deepEqual(loadTopicLinks(f.dataDir).units[P].second, had);
  assert.equal(run.second.due, 0);
});

test("excluded to empty: written without a call, and never dropped or redone", async () => {
  const f = fixture();
  await dayOne(f);
  const { llm, reqs } = fake(() => []);
  const r2 = await linkTopics(f.dataDir, f.contentDir, opts(llm));
  assert.equal(reqs.length, 0);
  const u = loadTopicLinks(f.dataDir).units[P];
  assert.deepEqual(u.matches, []);
  assert.deepEqual(u.second?.dropped.map((d) => d.topic), [A]);
  assert.equal(r2.run.second.due, 1);
  const r3 = await linkTopics(f.dataDir, f.contentDir, opts(llm));
  assert.equal(r3.run.stale, 0);
  assert.ok(loadTopicLinks(f.dataDir).units[P]);
});

test("the review sees the same text for a second-chance link, without the rejection", async () => {
  const f = fixture2();
  await dayOne(f);
  await linkTopics(f.dataDir, f.contentDir, opts(fake(answerB).llm));
  const l = gatherTopicLinks(loadTopicLinks(f.dataDir), f.dataDir, f.contentDir).get(B)![0];
  assert.equal(l.text, postUnit(post(), topicCandidates(f.contentDir))!.text);
  assert.ok(!SECOND.test(l.text) && !l.text.includes("belongs under B"));
});
