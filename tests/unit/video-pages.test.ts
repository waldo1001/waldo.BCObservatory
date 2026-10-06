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
  assert.ok(content.includes("not yet verified against the code pillar"));
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
