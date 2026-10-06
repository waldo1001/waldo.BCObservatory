import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, mkdtempSync, readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { writeJson } from "../../pipeline/lib/fsx.js";
import type { LlmRequest } from "../../pipeline/lib/llm.js";
import type { ManifestItem } from "../../pipeline/lib/manifest.js";
import { extractedHandler, extractionHash, extractVideo, makeWindows, type Llm } from "../../pipeline/extract/video.js";

const item = (over: Partial<ManifestItem> = {}): ManifestItem => ({
  id: "video/yt-microsoft/AAAAAAAAAA1", pillar: "video", source: "yt-microsoft", tier: "official", title: "Posting groups deep dive",
  url: "https://www.youtube.com/watch?v=AAAAAAAAAA1", state: "captioned", stages: {}, attempts: 0, ...over,
});
const SEGS = [
  { t: 0, end: 10, text: "Welcome everyone, today we look at general posting setup in Business Central." },
  { t: 10, end: 25, text: "The new posting preview feature is generally available starting with version twenty nine." },
  { t: 25, end: 40, text: "We changed the Gen. Posting Setup table and the posting codeunit so partners can extend it." },
  { t: 40, end: 60, text: "Batch posting with background jobs is still in public preview and subject to change." },
];
function dataDir(segs = SEGS): string {
  const dir = mkdtempSync(join(tmpdir(), "bcobs-extract-"));
  writeJson(join(dir, "captions/microsoft/AAAAAAAAAA1.segments.json"), { video_id: "AAAAAAAAAA1", segments: segs });
  return dir;
}
const feature = (over: Record<string, unknown> = {}) => ({
  name: "Posting preview", description: "Preview postings before you post.", status: "ga",
  status_evidence_t: 10, status_evidence_quote: "is generally available starting with version twenty nine",
  t_start: 10, t_end: 25, is_demoed: false, caveats: [], tags: ["Posting", "posting"], system: "finance", ...over,
});
const windowOut = (over: Record<string, unknown> = {}) => ({
  chapters: [{ t_start: 2, t_end: 30, title: "Intro" }, { t_start: 20, t_end: 50, title: "Changes" }],
  systems: ["finance", "not-a-system", "finance", "development"], topics: ["Posting Groups", "posting groups", "gen. posting setup"],
  features: [feature(), feature({ name: "Batch posting", status: "preview", status_evidence_t: 40, status_evidence_quote: "this sentence was never said in the video" })],
  objects: [{ type: "table", name: "Gen. Posting Setup", t: 25 }, { type: "table", name: "gen. posting setup", t: 30 }, { type: "codeunit", name: "Gen. Jnl.-Post Line", t: 25 }, { type: "codeunit", name: "posting codeunit (implied)", t: 25 }],
  presenters: [{ name: "Jane", confidence: "low" }, { name: "Speaker 2", confidence: "low" }],
  quotes: [
    { t: 10, text: "The new posting preview feature is generally available starting with version twenty nine.", why_it_matters: "GA" },
    { t: 0, text: "partners can extend it", why_it_matters: "too short" },
    { t: 40, text: "an invented quote that is nowhere in the transcript at all", why_it_matters: "fake" },
  ],
  disclaimers: [{ t: 40, kind: "preview", text: "still in public preview" }, { t: 42, kind: "preview", text: "public preview" }],
  ...over,
});
function fakeLlm(outputs: unknown[]) {
  const reqs: LlmRequest[] = [];
  const llm: Llm = async <T>(req: LlmRequest) => {
    reqs.push(req);
    const output = outputs[Math.min(reqs.length - 1, outputs.length - 1)] as T;
    return { output, cached: false, meta: { model: "claude-haiku-4-5", cost_usd: 0.01 } as any };
  };
  return { llm, reqs };
}

test("windows: short videos are one window, long ones overlap by two minutes", () => {
  const segs = Array.from({ length: 200 }, (_, i) => ({ t: i * 15, end: i * 15 + 15, text: `s${i}` }));
  assert.equal(makeWindows(segs.slice(0, 40), 600).length, 1);
  const w = makeWindows(segs, 3000);
  assert.deepEqual(w.map((x) => [x[0].t, x.at(-1)!.t]), [[0, 885], [780, 1665], [1560, 2445], [2340, 2985]]);
});

test("extraction: Haiku facts role, validated quotes, unproven status downgraded, systems/tags/objects cleaned", async () => {
  const { llm, reqs } = fakeLlm([windowOut()]);
  const x = await extractVideo(item(), dataDir(), llm);
  assert.equal(reqs.length, 1);
  assert.deepEqual([reqs[0].role, reqs[0].stage, reqs[0].promptVersion], ["facts", "extract-video", 1]);
  assert.ok(reqs[0].prompt.includes('"t":25'), "segments are in the prompt");
  assert.deepEqual(x.systems, ["finance", "development"]);
  assert.deepEqual(x.topics, ["posting groups", "gen. posting setup"]);
  assert.deepEqual(x.quotes.map((q) => q.t), [10]);
  assert.deepEqual(x.checks, { quotes_kept: 1, quotes_dropped: 2, evidence_verified: 1, evidence_unverified: 1 });
  const [ga, batch] = x.features;
  assert.deepEqual([ga.status, ga.status_evidence_verified, ga.tags], ["ga", true, ["posting"]]);
  assert.deepEqual([batch.status, batch.status_evidence_quote], ["unclear", null]);
  assert.deepEqual(x.objects.map((o) => o.name), ["Gen. Posting Setup", "Gen. Jnl.-Post Line"]);
  assert.deepEqual(x.chapters.map((c) => [c.t_start, c.t_end]), [[0, 30], [30, 60]]);
  assert.equal(x.disclaimers.length, 1);
  assert.equal(x.duration_s, 60);
  assert.deepEqual(x.presenters.map((p) => p.name), ["Jane"]);
});

test("long videos: one call per window plus a consolidation", async () => {
  const segs = Array.from({ length: 120 }, (_, i) => ({ t: i * 15, end: i * 15 + 15, text: `segment number ${i} about posting` }));
  const { llm, reqs } = fakeLlm([windowOut({ quotes: [] }), windowOut({ quotes: [] }), windowOut({ quotes: [], objects: [{ type: "page", name: "Posting Preview", t: 1000 }] }),
    { chapters: [{ t_start: 0, t_end: 1800, title: "All" }], systems: ["finance"], topics: ["posting"], features: [], presenters: [] }]);
  const x = await extractVideo(item(), dataDir(segs), llm);
  assert.equal(x.windows, 3);
  assert.equal(reqs.length, 4);
  assert.match(reqs[3].label!, /consolidate/);
  assert.deepEqual(x.chapters, [{ title: "All", t_start: 0, t_end: 1800 }]);
  assert.equal(x.objects.length, 3, "objects merged across windows");
});

test("handler writes the extraction, flags weak quote checks, hash ignores run metadata", async () => {
  const dir = dataDir();
  const bad = windowOut({ quotes: [
    { t: 0, text: "nothing like this was said anywhere in the session today", why_it_matters: "x" },
    { t: 0, text: "nor was this sentence ever spoken by anyone in the video", why_it_matters: "x" },
    { t: 0, text: "and this one is invented as well for the purpose of the test", why_it_matters: "x" },
    { t: 10, text: "The new posting preview feature is generally available starting with version twenty nine.", why_it_matters: "x" },
  ] });
  const r = await extractedHandler(item(), { dataDir: dir }, fakeLlm([bad]).llm);
  assert.deepEqual(r.flags, ["quote-check"]);
  assert.equal(r.data.path, "data/extract/video/AAAAAAAAAA1.json");
  const saved = JSON.parse(readFileSync(join(dir, "extract/video/AAAAAAAAAA1.json"), "utf8"));
  assert.equal(extractionHash({ ...saved, llm: [] }), r.output_hash);
  await assert.rejects(extractVideo(item({ id: "video/yt-microsoft/BBBBBBBBBB2" }), dir, fakeLlm([bad]).llm), /caption segments missing/);
  assert.equal(existsSync(join(dir, "extract/video/BBBBBBBBBB2.json")), false);
});
