import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, readFileSync, statSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { advance, fail, fileKey, Manifest, nextStage, parseItemId, skip, type DiscoveredInput } from "../../pipeline/lib/manifest.js";

const t0 = new Date("2026-10-07T01:00:00Z");
const video = (over: Partial<DiscoveredInput> = {}): DiscoveredInput => ({
  pillar: "video", source: "microsoft-youtube", key: "sv1utmneaXA", tier: "official",
  title: "Extending Copilot Chat", url: "https://www.youtube.com/watch?v=sv1utmneaXA",
  published_at: "2025-10-01T00:00:00Z", input_hash: null, ...over,
});
const fresh = () => new Manifest(mkdtempSync(join(tmpdir(), "bcobs-manifest-")));

test("ids round-trip, keys with slashes get safe unique file names", () => {
  assert.deepEqual(parseItemId("docs/learn-business-central/business-central/finance-setup.md"),
    { pillar: "docs", source: "learn-business-central", key: "business-central/finance-setup.md" });
  assert.equal(fileKey("sv1utmneaXA"), "sv1utmneaXA");
  const a = fileKey("business-central/finance-setup.md"), b = fileKey("business-central/finance/setup.md");
  assert.match(a, /^[a-z0-9-]+--[0-9a-f]{10}$/);
  assert.notEqual(a, b);
  assert.throws(() => parseItemId("nope"));
});

test("discovery creates once, rewrites nothing when unchanged", () => {
  const m = fresh();
  const first = m.discover(video(), t0);
  assert.equal(first.change, "new");
  assert.equal(first.item.state, "discovered");
  const path = m.path(first.item.id);
  const before = statSync(path).mtimeMs;
  assert.equal(m.discover(video(), new Date("2026-10-08T01:00:00Z")).change, "unchanged");
  assert.equal(statSync(path).mtimeMs, before);
  assert.equal(m.discover(video({ title: "Extending Copilot Chat (updated)" })).change, "updated");
  assert.equal(m.list("video").length, 1);
});

test("video flow walks every stage; unflagged items skip review", () => {
  let it = fresh().discover(video(), t0).item;
  for (const s of ["fetched", "captioned", "extracted", "summarized", "linked"] as const) it = advance(it, s, {}, t0);
  assert.equal(nextStage(it), "published");
  assert.equal(nextStage({ ...it, flags: ["quote-check"] }), "reviewed");
  it = advance(it, "published", {}, t0);
  assert.equal(nextStage(it), null);
  assert.throws(() => advance(it, "linked"), /cannot advance/);
});

test("a changed input hash makes a processed item stale, re-entering at fetched", () => {
  const m = fresh();
  let it = m.discover(video({ input_hash: "h1" }), t0).item;
  it = advance(it, "fetched", { hash: "h1" }, t0);
  m.save(it);
  const r = m.discover(video({ input_hash: "h2" }), t0);
  assert.equal(r.change, "changed");
  assert.equal(r.item.state, "stale");
  assert.equal(nextStage(r.item), "fetched");
});

test("failures back off exponentially and fail after max attempts", () => {
  const retry = { max_attempts: 5, backoff_hours_base: 2 };
  let it = fresh().discover(video(), t0).item;
  it = fail(it, "yt-dlp: HTTP 429", retry, t0);
  assert.equal(it.attempts, 1);
  assert.equal(it.retry_after, "2026-10-07T03:00:00.000Z");
  for (let i = 0; i < 3; i++) it = fail(it, "again", retry, t0);
  assert.equal(it.state, "discovered");
  assert.equal(it.retry_after, "2026-10-07T17:00:00.000Z"); // 2^4 h
  it = fail(it, "last", retry, t0);
  assert.equal(it.state, "failed");
  assert.equal(nextStage(it), null);
});

test("saved items validate against the schema", () => {
  const m = fresh();
  const it = m.discover(video(), t0).item;
  assert.throws(() => m.save({ ...it, state: "bogus" as never }), /manifest-item/);
  assert.ok(m.save(skip(it, "no-captions")));
  assert.equal(JSON.parse(readFileSync(m.path(it.id), "utf8")).skip, "no-captions");
});
