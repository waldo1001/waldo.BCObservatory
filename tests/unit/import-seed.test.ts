import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, mkdtempSync, readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { importSeed, loadSeedOverrides, parseSeedName, resolveSeed } from "../../pipeline/caption/import-seed.js";
import { Manifest } from "../../pipeline/lib/manifest.js";
import { ROOT } from "../../pipeline/lib/paths.js";

const vtt = readFileSync(join(ROOT, "tests/fixtures/captions/synthetic-autocaption.vtt"), "utf8");
const WITH_ID = "2025-10-01 - BCLE - What's New in Shopify Connector： Point of Sale (2025 release wave 2) [inuqqx12yJ8].vtt";
const NO_ID = "2026-10-01 - BCLE - What's new in AL and Tools (2026 release wave 2).vtt";

test("seed names: date, readable title, id when present", () => {
  assert.deepEqual(parseSeedName(WITH_ID), { date: "2025-10-01", title: "What's New in Shopify Connector: Point of Sale (2025 release wave 2)", videoId: "inuqqx12yJ8" });
  assert.deepEqual(parseSeedName(NO_ID), { date: "2026-10-01", title: "What's new in AL and Tools (2026 release wave 2)", videoId: null });
});

test("seed resolution: override map fills missing ids; unresolved and duplicate ids are reported", () => {
  const r = resolveSeed([{ name: WITH_ID, vtt }, { name: NO_ID, vtt }, { name: "2026-10-01 - BCLE - Mystery.vtt", vtt }], { [NO_ID]: "D_Lur52IrIg" });
  assert.deepEqual(r.entries.map((e) => [e.videoId, e.via]), [["inuqqx12yJ8", "filename"], ["D_Lur52IrIg", "override"]]);
  assert.deepEqual(r.unresolved, ["2026-10-01 - BCLE - Mystery.vtt"]);
  const d = resolveSeed([{ name: WITH_ID, vtt }, { name: NO_ID, vtt }], { [NO_ID]: "inuqqx12yJ8" });
  assert.equal(d.duplicates.length, 1);
});

test("committed override map covers the 38 seed files without an id", () => {
  const o = loadSeedOverrides();
  assert.equal(Object.keys(o).length, 38);
  assert.ok(Object.values(o).every((id) => /^[A-Za-z0-9_-]{11}$/.test(id)));
});

test("import: caption artifacts plus items at captioned; a rerun changes nothing; unresolved blocks everything", () => {
  const dir = mkdtempSync(join(tmpdir(), "bcobs-seed-"));
  const m = new Manifest(join(dir, "manifest"));
  const caps = join(dir, "captions");
  const files = [{ name: WITH_ID, vtt }, { name: NO_ID, vtt }];
  m.discover({ pillar: "video", source: "yt-microsoft", key: "inuqqx12yJ8", tier: "official", title: "From RSS", url: "u", published_at: "2025-10-01T15:30:00.000Z" });
  const r = importSeed(files, { [NO_ID]: "D_Lur52IrIg" }, m, caps, new Date("2026-10-06T12:00:00Z"));
  assert.deepEqual([r.imported, r.captions_written], [2, 2]);
  const item = m.get("video/yt-microsoft/D_Lur52IrIg")!;
  assert.equal(item.state, "captioned");
  assert.equal(item.published_at, "2026-10-01T00:00:00Z");
  assert.equal(item.stages.captioned?.id_via, "override");
  assert.ok((item.stages.captioned?.segments as number) > 0);
  const rss = m.get("video/yt-microsoft/inuqqx12yJ8")!;
  assert.deepEqual([rss.state, rss.title, rss.published_at], ["captioned", "From RSS", "2025-10-01T15:30:00.000Z"]);
  const seg = JSON.parse(readFileSync(join(caps, "D_Lur52IrIg.segments.json"), "utf8"));
  assert.equal(seg.video_id, "D_Lur52IrIg");
  const again = importSeed(files, { [NO_ID]: "D_Lur52IrIg" }, m, caps, new Date("2026-10-07T12:00:00Z"));
  assert.deepEqual([again.imported, again.already, again.captions_written], [0, 2, 0]);
  const blocked = importSeed([{ name: "2026-10-01 - BCLE - Mystery.vtt", vtt }], {}, new Manifest(join(dir, "m2")), join(dir, "c2"));
  assert.equal(blocked.unresolved.length, 1);
  assert.equal(existsSync(join(dir, "c2")), false);
});
