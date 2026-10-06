import { test, afterEach } from "node:test";
import assert from "node:assert/strict";
import { existsSync, mkdirSync, mkdtempSync, readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import matter from "gray-matter";
import { captionable, captionedHandler } from "../../pipeline/caption/fetch.js";
import { writeJson } from "../../pipeline/lib/fsx.js";
import type { LlmRequest } from "../../pipeline/lib/llm.js";
import { CAPTION_RETRIES, captionRetryDue, LEAK_RETRIES, leakRetryDue, reviveForCaptions, reviveFromLeak, skip, type ManifestItem } from "../../pipeline/lib/manifest.js";
import { ROOT } from "../../pipeline/lib/paths.js";
import { validate } from "../../pipeline/lib/schema.js";
import type { StageFn } from "../../pipeline/orchestrator/execute.js";
import { communityLeak, extractionPath, type Llm, type VideoExtraction } from "../../pipeline/extract/video.js";
import { summarizedHandler, summaryPath } from "../../pipeline/summarize/video.js";
import { COMMUNITY_QUOTES_MAX, renderVideoPage } from "../../pipeline/render/video.js";
import { repeatsRun, SHINGLE } from "../../pipeline/validate/leak.js";

const VTT = readFileSync(join(ROOT, "tests/fixtures/captions/synthetic-autocaption.vtt"), "utf8");
const ID = "CCCCCCCCCC1";
const item = (over: Partial<ManifestItem> = {}): ManifestItem => ({
  id: `video/yt-comm/${ID}`, pillar: "video", source: "yt-comm", tier: "community", title: "Community video", url: `https://www.youtube.com/watch?v=${ID}`,
  published_at: "2026-10-01T00:00:00Z", state: "fetched", stages: { fetched: { at: "2026-10-01T00:00:00Z" } }, attempts: 0, ...over,
});
const ctx = (dataDir: string) => ({ dataDir, now: () => new Date(), manifest: null as any, contentDir: "", mirrorsDir: "", sources: new Map() });
const run = (h: ReturnType<typeof captionedHandler>) => (h as { run: StageFn }).run;
const SPOKEN = Array.from({ length: 60 }, (_, i) => `spoken${i}`).join(" ");

const saved = process.env.BCOBS_VAULT_DIR;
afterEach(() => { if (saved === undefined) delete process.env.BCOBS_VAULT_DIR; else process.env.BCOBS_VAULT_DIR = saved; });
function vault(git = true) {
  const dir = mkdtempSync(join(tmpdir(), "bcobs-vault-"));
  if (git) mkdirSync(join(dir, ".git"));
  process.env.BCOBS_VAULT_DIR = dir;
  return dir;
}

test("community videos are captioned only into a vault that is a git checkout, never into data/", async () => {
  vault(false);
  assert.equal(captionable(item()), false, "no vault checkout: community waits");
  assert.equal(captionable(item({ tier: "official" })), true);
  const v = vault();
  assert.equal(captionable(item()), true);
  const dataDir = mkdtempSync(join(tmpdir(), "bcobs-data-"));
  const r = await run(captionedHandler({ meta: null as any, captions: async () => VTT }))(item({ meta: { captions_track: { kind: "auto", lang: "en-orig" } } }), ctx(dataDir));
  assert.equal(r.data?.path, `vault:captions/community/yt-comm/${ID}.vtt`);
  assert.ok(existsSync(join(v, `captions/community/yt-comm/${ID}.segments.json`)));
  assert.equal(existsSync(join(dataDir, "captions")), false, "nothing community lands in the public data dir");
});

test("per-item leak guard: a field repeating 25 caption words is trimmed to 20; official items are not checked", async () => {
  const v = vault();
  writeJson(join(v, `captions/community/yt-comm/${ID}.segments.json`), { segments: [{ t: 0, end: 60, text: SPOKEN }] });
  const dataDir = mkdtempSync(join(tmpdir(), "bcobs-data-"));
  writeJson(extractionPath(dataDir, ID), { video_id: ID, item_id: item().id, title: "t", duration_s: 60, systems: [], topics: [], chapters: [], features: [], objects: [], presenters: [], quotes: [], disclaimers: [], checks: {}, windows: 1, prompt_version: 1, llm: [] });
  const leaky = SPOKEN.split(" ").slice(3, 3 + SHINGLE).join(" ");
  const llm: Llm = async <T>(_r: LlmRequest) => ({ output: { summary: `It says ${leaky}.`, overview: "o", key_points: ["k"], audience: ["developer"] } as T, cached: false, meta: { model: "claude-sonnet-5-5" } as any });
  const r = await summarizedHandler(item({ state: "extracted" }), { dataDir }, llm);
  assert.equal((r as any).skip, undefined, "trimmed, not skipped");
  const saved = JSON.parse(readFileSync(summaryPath(dataDir, ID), "utf8"));
  assert.equal(saved.summary.split(" ").length, 21, "20 words + ...");
  assert.ok(saved.summary.endsWith(" ...") && communityLeak(item(), dataDir, saved) === null);
  const short = SPOKEN.split(" ").slice(3, 3 + SHINGLE - 1).join(" ");
  assert.equal(communityLeak(item(), dataDir, { s: short }), null, "24 words is a quote, not a leak");
  assert.equal(communityLeak(item({ tier: "official" }), dataDir, { s: leaky }), null);
  assert.equal(repeatsRun("a b c", "a b c"), null, "shorter than a shingle: nothing to repeat");
});

test(`community pages carry at most ${COMMUNITY_QUOTES_MAX} quotes`, () => {
  const quotes = Array.from({ length: 9 }, (_, i) => ({ t: i * 10, text: `quote number ${i}`, why_it_matters: "w", check: "exact" }));
  const x = { video_id: ID, item_id: item().id, title: "t", duration_s: 120, systems: ["finance"], topics: [], chapters: [], features: [], objects: [], presenters: [], quotes, disclaimers: [], checks: { quotes_kept: 9, quotes_dropped: 0, evidence_verified: 0, evidence_unverified: 0 }, windows: 1, prompt_version: 1, llm: [] } as unknown as VideoExtraction;
  const s = { summary: "s", overview: "o", key_points: ["k"], audience: ["developer"] } as any;
  const page = matter(renderVideoPage(item({ stages: { captioned: { at: "x", vtt_sha256: "a" } } }), x, s, { name: "Comm" }, new Date()));
  assert.ok(validate("frontmatter.video", page.data).ok);
  assert.deepEqual([page.data.quotes.length, page.data.captions, page.data.tier], [COMMUNITY_QUOTES_MAX, "derived", "community"]);
  const official = matter(renderVideoPage(item({ tier: "official", stages: { captioned: { at: "x", vtt_sha256: "a" } } }), x, s, { name: "MS" }, new Date()));
  assert.equal(official.data.quotes.length, 9);
});

test("no-captions skips come back weekly, at most CAPTION_RETRIES times", () => {
  const t0 = new Date("2026-10-01T00:00:00Z");
  const skipped = skip(item(), "no-captions", t0);
  assert.equal(skipped.skipped_at, t0.toISOString());
  assert.equal(captionRetryDue(skipped, new Date("2026-10-07T00:00:00Z")), false, "6 days");
  assert.equal(captionRetryDue(skipped, new Date("2026-10-08T00:00:00Z")), true, "7 days");
  assert.equal(captionRetryDue(skip(item(), "unavailable", t0), new Date("2026-12-01")), false);
  const legacy = { ...skipped, skipped_at: undefined }; // skipped before skipped_at existed: the fetch time counts
  assert.equal(captionRetryDue(legacy, new Date("2026-10-08T00:00:00Z")), true);
  const back = reviveForCaptions(skipped);
  assert.deepEqual([back.state, back.skip, back.meta?.caption_retries], ["discovered", null, 1]);
  const spent = { ...skipped, meta: { caption_retries: CAPTION_RETRIES } };
  assert.equal(captionRetryDue(spent, new Date("2027-01-01")), false);
});

test("leak skips from before trimming come back from their last completed stage, twice at most", () => {
  const skipped = skip(item({ state: "captioned", stages: { fetched: { at: "x" }, captioned: { at: "y" } } }), "leak");
  assert.ok(leakRetryDue(skipped));
  const back = reviveFromLeak(skipped);
  assert.deepEqual([back.state, back.skip, back.meta?.leak_retries], ["captioned", null, 1]);
  assert.equal(leakRetryDue({ ...skipped, meta: { leak_retries: LEAK_RETRIES } }), false);
});
