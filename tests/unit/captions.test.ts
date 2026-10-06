import { test, beforeEach } from "node:test";
import assert from "node:assert/strict";
import { chmodSync, existsSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { captionedHandler, fetchedHandler } from "../../pipeline/caption/fetch.js";
import { parseMeta, resetYtdlp, videoMeta, YtUnavailable } from "../../pipeline/caption/ytdlp.js";
import { reconcile } from "../../pipeline/ingest/youtube.js";
import { Manifest, type ManifestItem } from "../../pipeline/lib/manifest.js";
import { planQueue } from "../../pipeline/lib/queue.js";
import { ROOT } from "../../pipeline/lib/paths.js";
import { handlerFor, StageHold, type StageFn } from "../../pipeline/orchestrator/execute.js";

const VTT = readFileSync(join(ROOT, "tests/fixtures/captions/synthetic-autocaption.vtt"), "utf8");
const item = (over: Partial<ManifestItem> = {}): ManifestItem => ({
  id: "video/yt-microsoft/AAAAAAAAAA1", pillar: "video", source: "yt-microsoft", tier: "official", title: "t", url: "u",
  published_at: null, state: "discovered", stages: { discovered: { at: "2026-10-06T00:00:00Z" } }, attempts: 0, ...over,
});
const run = (h: ReturnType<typeof fetchedHandler>) => (h as { run: StageFn }).run;
const ctx = (dataDir: string) => ({ dataDir, now: () => new Date(), manifest: null as any, contentDir: "", sources: new Map() });

beforeEach(() => { resetYtdlp(); process.env.BCOBS_YTDLP_SLEEP_MS = "0"; });

test("metadata: upload time, duration, and the caption track to fetch", () => {
  assert.deepEqual(parseMeta({ title: "T", timestamp: 1759323844, duration: 311.4, automatic_captions: { "en-orig": [], en: [] }, subtitles: {} }),
    { title: "T", published_at: "2025-10-01T13:04:04.000Z", duration_s: 311, live_status: null, captions: { kind: "auto", lang: "en-orig" } });
  assert.equal(parseMeta({ upload_date: "20260101" }).published_at, "2026-01-01T00:00:00.000Z");
  assert.deepEqual(parseMeta({ subtitles: { en: [] }, automatic_captions: { "nl-orig": [] } }).captions, { kind: "manual", lang: "en" });
  assert.deepEqual(parseMeta({ automatic_captions: { "nl-orig": [], en: [] } }).captions, { kind: "auto", lang: "nl-orig" });
  assert.equal(parseMeta({ automatic_captions: { en: [] } }).captions, null, "auto-translated tracks 429; never use them");
});

test("yt-dlp: a bot check holds this and every later call; unavailable videos are told apart", async () => {
  const dir = mkdtempSync(join(tmpdir(), "bcobs-ytdlp-"));
  const bin = join(dir, "yt-dlp");
  const fake = (stderr: string, code: number, stdout = "") => {
    writeFileSync(bin, `#!/bin/sh\necho "$@" >> ${dir}/calls\nprintf '%s' '${stdout}'\necho "${stderr}" >&2\nexit ${code}\n`);
    chmodSync(bin, 0o755);
  };
  process.env.BCOBS_YTDLP_BIN = bin;
  try {
    fake("", 0, JSON.stringify({ title: "ok", timestamp: 1759323844 }));
    assert.equal((await videoMeta("AAAAAAAAAA1")).title, "ok");
    fake("ERROR: [youtube] x: Video unavailable. This video is private", 1);
    await assert.rejects(videoMeta("AAAAAAAAAA1"), YtUnavailable);
    fake("ERROR: Sign in to confirm you're not a bot", 1);
    await assert.rejects(videoMeta("AAAAAAAAAA1"), StageHold);
    fake("", 0, "{}");
    await assert.rejects(videoMeta("AAAAAAAAAA1"), /held after a block/);
    assert.equal(readFileSync(join(dir, "calls"), "utf8").trim().split("\n").length, 3, "the breaker stops calling YouTube");
    assert.ok(readFileSync(join(dir, "calls"), "utf8").includes("--ignore-config"));
  } finally { delete process.env.BCOBS_YTDLP_BIN; }
});

test("fetched: official only, real metadata patched in, upcoming retried, unavailable skipped", async () => {
  const meta = async () => ({ title: "Real title", published_at: "2026-10-01T13:04:04.000Z", duration_s: 300, live_status: null, captions: { kind: "auto" as const, lang: "en-orig" } });
  const h = fetchedHandler({ meta, captions: async () => null });
  assert.equal(handlerFor({ video: { fetched: h } }, item({ tier: "community" })), null);
  const r = await run(h)(item(), ctx(""));
  assert.deepEqual(r.patch, { published_at: "2026-10-01T13:04:04.000Z", title: "Real title", meta: { duration_s: 300, captions_track: { kind: "auto", lang: "en-orig" } } });
  await assert.rejects(run(fetchedHandler({ meta: async () => ({ ...(await meta()), live_status: "is_upcoming" }), captions: async () => null }))(item(), ctx("")), /not captionable yet/);
  const gone = await run(fetchedHandler({ meta: async () => { throw new YtUnavailable("private"); }, captions: async () => null }))(item(), ctx(""));
  assert.equal(gone.skip, "unavailable");
});

test("captioned: VTT and segments written as the canonical artifact; no track means no-captions", async () => {
  const dataDir = mkdtempSync(join(tmpdir(), "bcobs-cap-"));
  const withTrack = item({ state: "fetched", meta: { captions_track: { kind: "auto", lang: "en-orig" }, duration_s: 30 } });
  const r = await run(captionedHandler({ meta: null as any, captions: async () => VTT }))(withTrack, ctx(dataDir));
  assert.equal(r.data?.path, "data/captions/microsoft/AAAAAAAAAA1.vtt");
  assert.equal(readFileSync(join(dataDir, "captions/microsoft/AAAAAAAAAA1.vtt"), "utf8"), VTT);
  assert.ok(JSON.parse(readFileSync(join(dataDir, "captions/microsoft/AAAAAAAAAA1.segments.json"), "utf8")).segments.length > 0);
  assert.equal((await run(captionedHandler({ meta: null as any, captions: async () => null }))(withTrack, ctx(dataDir))).skip, "no-captions");
  assert.equal((await run(captionedHandler({ meta: null as any, captions: async () => VTT }))(item({ state: "fetched" }), ctx(dataDir))).skip, "no-captions");
});

test("reconcile: weekly, adds only unknown videos, undated ones keep the channel's newest-first order", async () => {
  const root = mkdtempSync(join(tmpdir(), "bcobs-recon-"));
  const manifest = new Manifest(join(root, "manifest"));
  manifest.discover({ pillar: "video", source: "yt-microsoft", key: "AAAAAAAAAA1", tier: "official", title: "known", url: "u", published_at: "2026-10-01T00:00:00Z" });
  let calls = 0;
  const flat = async () => { calls++; return [{ id: "AAAAAAAAAA1", title: "known", duration_s: 10 }, { id: "BBBBBBBBBB2", title: "b", duration_s: 20 }, { id: "CCCCCCCCCC3", title: "c", duration_s: null }]; };
  const source = { id: "yt-microsoft", kind: "youtube", name: "MS", url: "u", channel_id: "UCx", tier: "official", language: "en", full_text: true, backfill: { all: true }, enabled: true } as any;
  const c = (now: string) => ({ manifest, now: new Date(now), stateDir: join(root, "state"), flatPlaylist: flat } as any);
  assert.equal(await reconcile(source, c("2026-10-07T01:00:00Z")), 2);
  assert.equal(await reconcile(source, c("2026-10-10T01:00:00Z")), null, "not due yet");
  assert.equal(await reconcile(source, c("2026-10-14T01:00:00Z")), 0);
  assert.equal(calls, 2);
  const b = manifest.get("video/yt-microsoft/BBBBBBBBBB2")!;
  assert.deepEqual([b.published_at, b.meta?.channel_rank, b.meta?.via], [null, 1, "reconcile"]);
  const plan = planQueue(manifest.list(), { captions: 10 }, new Map(), new Date("2026-10-14T01:00:00Z"));
  assert.deepEqual(plan.work.map((w) => w.id.slice(-11)), ["AAAAAAAAAA1", "BBBBBBBBBB2", "CCCCCCCCCC3"]);
  assert.ok(existsSync(join(root, "state/youtube-reconcile.json")));
});
