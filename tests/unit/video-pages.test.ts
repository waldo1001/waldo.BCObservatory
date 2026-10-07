import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import matter from "gray-matter";
import { writeJson } from "../../pipeline/lib/fsx.js";
import type { LlmRequest } from "../../pipeline/lib/llm.js";
import type { ManifestItem } from "../../pipeline/lib/manifest.js";
import { validate } from "../../pipeline/lib/schema.js";
import type { Llm, VideoExtraction } from "../../pipeline/extract/video.js";
import { clip, summarizedHandler, tidy } from "../../pipeline/summarize/video.js";
import { hms, publishedHandler, renderVideoIndex } from "../../pipeline/render/video.js";
import { objectIndexReads } from "../../pipeline/link/mentions.js";

const ID = "-vdhfNMNZQk"; // a real seed id: leading dash, mixed case
const item = (over: Partial<ManifestItem> = {}): ManifestItem => ({
  id: `video/yt-microsoft/${ID}`, pillar: "video", source: "yt-microsoft", tier: "official", title: "What's new | Posting",
  url: `https://www.youtube.com/watch?v=${ID}`, published_at: "2026-10-01T13:04:04.000Z", language: "en", state: "linked",
  stages: { captioned: { at: "2026-10-06T00:00:00Z", vtt_sha256: "abc" } }, attempts: 0, flags: [], ...over,
});
const extraction: VideoExtraction = {
  video_id: ID, item_id: `video/yt-microsoft/${ID}`, title: "What's new | Posting", duration_s: 754.2,
  systems: ["finance"], topics: ["posting"], chapters: [{ t_start: 0, t_end: 300, title: "Intro" }, { t_start: 300, t_end: 754.2, title: "Demo" }],
  features: [
    { name: "Posting preview", description: "d", status: "ga", status_evidence_t: 61.5, status_evidence_quote: "it is generally available today", status_evidence_verified: true, t_start: 60, t_end: 120, is_demoed: true, caveats: [], tags: ["posting"], system: "finance" },
    { name: "Batch | posting", description: "d", status: "unclear", status_evidence_t: null, status_evidence_quote: null, status_evidence_verified: false, t_start: 400, t_end: 500, is_demoed: false, caveats: [], tags: [], system: "finance" },
  ],
  objects: [{ type: "table", name: "Gen. Posting Setup", t: 130 }], presenters: [{ name: "Jane", confidence: "high" }],
  quotes: [{ t: 61.5, text: "it is generally available today for every customer worldwide", why_it_matters: "GA", check: "exact" }],
  disclaimers: [], checks: { quotes_kept: 1, quotes_dropped: 0, evidence_verified: 1, evidence_unverified: 0 }, windows: 1, prompt_version: 1, llm: [],
};
function dirs() {
  const root = mkdtempSync(join(tmpdir(), "bcobs-pages-"));
  const dataDir = join(root, "data"), contentDir = join(root, "content");
  writeJson(join(dataDir, `extract/video/${ID}.json`), extraction);
  return { dataDir, contentDir };
}
const fakeSummary = (out: unknown) => {
  const reqs: LlmRequest[] = [];
  const llm: Llm = async <T>(r: LlmRequest) => { reqs.push(r); return { output: out as T, cached: false, meta: { model: "claude-sonnet-5-5", cost_usd: 0.02 } as any }; };
  return { llm, reqs };
};
const SUMMARY = { summary: "Posting preview is generally available — shown in a demo.", overview: "Overview text.", key_points: ["Use posting preview — before posting."], audience: ["functional consultant", "functional consultant"] };

test("text helpers: em-dashes go, summaries clip at a sentence, timestamps read as m:ss", () => {
  assert.equal(tidy("a — b –c"), "a - b - c");
  assert.equal(clip("One. " + "x".repeat(700)), "One.");
  assert.equal(clip("word ".repeat(200)).length <= 600, true);
  assert.deepEqual([hms(61.5), hms(3725)], ["1:01", "1:02:05"]);
});

test("summary: Sonnet prose role over the extraction only, tidied, stored", async () => {
  const { dataDir } = dirs();
  const { llm, reqs } = fakeSummary(SUMMARY);
  const r = await summarizedHandler(item({ state: "extracted" }), { dataDir, channel: "Microsoft" }, llm);
  assert.deepEqual([reqs[0].role, reqs[0].stage], ["prose", "summarize-video"]);
  assert.ok(reqs[0].prompt.includes("Posting preview") && !reqs[0].prompt.includes("segments"), "facts in, transcript out");
  const saved = JSON.parse(readFileSync(join(dataDir, `summary/video/${ID}.json`), "utf8"));
  assert.equal(saved.summary, "Posting preview is generally available - shown in a demo.");
  assert.deepEqual(saved.audience, ["functional consultant"]);
  assert.match(r.output_hash ?? "", /^[0-9a-f]{64}$/);
});

test("page: valid video frontmatter, evidence with t, escaped tables, objects marked as heard; index newest first", async () => {
  const { dataDir, contentDir } = dirs();
  await summarizedHandler(item({ state: "extracted" }), { dataDir }, fakeSummary(SUMMARY).llm);
  const ctx = { dataDir, contentDir, sources: new Map([["yt-microsoft", { id: "yt-microsoft", name: "Microsoft Dynamics 365 Business Central", tier: "official" as const, url: "u" }]]), now: () => new Date("2026-10-07T01:00:00Z") };
  const r = await publishedHandler(item(), ctx);
  const raw = readFileSync(join(contentDir, `videos/${ID}.md`), "utf8");
  const { data, content } = matter(raw);
  const v = validate("frontmatter.video", data);
  assert.ok(v.ok, v.errors.join("; "));
  assert.equal(data.id, `video/${ID}`);
  assert.equal(data.review.state, "unreviewed");
  assert.deepEqual(data.evidence[0], { kind: "video", url: `https://www.youtube.com/watch?v=${ID}&t=61s`, title: "Posting preview: generally available", date: "2026-10-01T13:04:04.000Z", commit: null, t: 61, quote: "it is generally available today" });
  assert.ok(content.includes("| Batch \\| posting | status not stated |"));
  assert.ok(content.includes("not joined to the object pages (no object index)"), "without data/index/objects.json nothing is joined");
  assert.deepEqual(data.links.objects, []);
  assert.ok(content.includes("**unreviewed** (machine-generated)"));

  const again = await publishedHandler(item(), { ...ctx, now: () => new Date("2026-10-08T01:00:00Z") });
  assert.equal(again.output_hash, r.output_hash);
  assert.equal(readFileSync(join(contentDir, `videos/${ID}.md`), "utf8"), raw, "unchanged facts leave the page untouched");

  writeFileSync(join(contentDir, "videos/zzOlderVid01.md"), `---\nvideo_id: zzOlderVid01\ntitle: Older\nsummary: Old one.\npublished_at: "2025-10-01T00:00:00Z"\nsource_name: MS\nreview: {state: reviewed}\n---\n`);
  assert.equal(renderVideoIndex(contentDir), 2);
  const idx = readFileSync(join(contentDir, "videos/llms.txt"), "utf8").split("\n").filter((l) => l.startsWith("- "));
  assert.match(idx[0], new RegExp(`^- \\[What's new \\\\\\| Posting\\]\\(${ID}\\.md\\)`));
  assert.match(idx[1], /\(zzOlderVid01\.md\): Old one\. \(MS, 2025-10-01\)$/);
  assert.equal(existsSync(join(contentDir, "videos/llms.txt")), true);
});

test("flagged items render with a flagged badge; a missing summary fails the stage", async () => {
  const { dataDir, contentDir } = dirs();
  await assert.rejects(publishedHandler(item(), { dataDir, contentDir, sources: new Map(), now: () => new Date() }), /summary missing/);
  await summarizedHandler(item({ state: "extracted" }), { dataDir }, fakeSummary(SUMMARY).llm);
  await publishedHandler(item({ flags: ["quote-check"] }), { dataDir, contentDir, sources: new Map(), now: () => new Date() });
  const { data } = matter(readFileSync(join(contentDir, `videos/${ID}.md`), "utf8"));
  assert.deepEqual([data.review.state, data.review.flags, data.source_name], ["flagged", ["quote-check"], "yt-microsoft"]);
});

test("page: objects heard join their object pages by exact type and name (D67); the rest stay text; the index is read once", async () => {
  const { dataDir, contentDir } = dirs();
  const x = { ...extraction, objects: [{ type: "table", name: "Gen. Posting Setup", t: 130 }, { type: "table", name: "general posting setup ", t: 140 }, { type: "codeunit", name: "Search", t: 150 }, { type: "table", name: "SalesLine", t: 160 }, { type: "other", name: "find set", t: 170 }] };
  writeJson(join(dataDir, `extract/video/${ID}.json`), x);
  writeJson(join(dataDir, "index/objects.json"), { schema: "bcobs-objects@1", count: 3, rows: [
    ["table/252", "table", 252, "General Posting Setup", "Base Application", "Microsoft.Finance.GeneralLedger.Setup", null, "25", "", 0, 0],
    ["codeunit/7282", "codeunit", 7282, "Search", "App A", null, null, "28", "", 0, 0], ["codeunit/7333", "codeunit", 7333, "Search", "App B", null, null, "28", "", 0, 0]] });
  await summarizedHandler(item({ state: "extracted" }), { dataDir }, fakeSummary(SUMMARY).llm);
  const ctx = { dataDir, contentDir, sources: new Map(), now: () => new Date("2026-10-07T01:00:00Z") };
  const before = objectIndexReads();
  await publishedHandler(item(), ctx);
  await publishedHandler(item(), ctx);
  assert.equal(objectIndexReads() - before, 1, "one parse for the run, not one per page");
  const { data, content } = matter(readFileSync(join(contentDir, `videos/${ID}.md`), "utf8"));
  assert.ok(validate("frontmatter.video", data).ok);
  assert.deepEqual(data.links.objects, ["object/table/252"]);
  assert.ok(content.includes(`- [table 252 "General Posting Setup"](../objects/table/252.md) at [2:20](https://www.youtube.com/watch?v=${ID}&t=140s)`));
  assert.ok(content.includes(`- table "Gen. Posting Setup" at [2:10]`), "an inexact name stays as heard");
  assert.ok(content.includes('Not found in BC28-30: table "Gen. Posting Setup", table "SalesLine".'));
  assert.ok(content.includes('More than one object has this name, so none is linked: codeunit "Search".'));
  assert.ok(content.includes('- other "find set" at') && !/Not found[^\n]*find set/.test(content), "a name of no object type is listed but never called not found");
});

const featureTable = (content: string) => content.split("## Features\n\n")[1].split("\n\n")[0].split("\n");
const pipes = (row: string) => row.replace(/\\\|/g, "").split("|").length - 1;
async function renderWith(features: VideoExtraction["features"]) {
  const { dataDir, contentDir } = dirs();
  writeJson(join(dataDir, `extract/video/${ID}.json`), { ...extraction, features });
  await summarizedHandler(item({ state: "extracted" }), { dataDir }, fakeSummary(SUMMARY).llm);
  await publishedHandler(item(), { dataDir, contentDir, sources: new Map(), now: () => new Date("2026-10-07T01:00:00Z") });
  return matter(readFileSync(join(contentDir, `videos/${ID}.md`), "utf8")).content;
}

test("features table (D74): no verified evidence on any row leaves the Evidence column out", async () => {
  const unverified = extraction.features.map((f) => ({ ...f, status_evidence_verified: false }));
  const rows = featureTable(await renderWith(unverified));
  assert.deepEqual(rows.slice(0, 2), ["| Feature | Status | At |", "|---|---|---|"]);
  assert.equal(rows.length, 4);
  for (const r of rows) assert.equal(pipes(r), 4, r);
});

test("features table (D74): one verified row keeps Evidence; the other row ends with an empty cell", async () => {
  const rows = featureTable(await renderWith(extraction.features));
  assert.deepEqual(rows.slice(0, 2), ["| Feature | Status | At | Evidence |", "|---|---|---|---|"]);
  assert.ok(rows[2].includes(`"it is generally available today" ([1:01](https://www.youtube.com/watch?v=${ID}&t=61s))`), rows[2]);
  assert.ok(rows[3].endsWith("|  |"), rows[3]);
  for (const r of rows) assert.equal(pipes(r), 5, r);
});
