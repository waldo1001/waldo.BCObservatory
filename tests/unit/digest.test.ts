import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import matter from "gray-matter";
import { writeJson, writeText } from "../../pipeline/lib/fsx.js";
import type { ManifestItem } from "../../pipeline/lib/manifest.js";
import { validate } from "../../pipeline/lib/schema.js";
import { isoWeek, renderDigest } from "../../pipeline/render/digest.js";

test("ISO weeks: Monday to Sunday, week 1 holds the year's first Thursday", () => {
  assert.deepEqual(isoWeek(new Date("2026-10-06T20:00:00Z")), { id: "2026-W41", start: "2026-10-05", end: "2026-10-11" });
  assert.equal(isoWeek(new Date("2027-01-01T00:00:00Z")).id, "2026-W53");
  assert.equal(isoWeek(new Date("2026-01-01T00:00:00Z")).id, "2026-W01");
});

test("a digest counts the week's items, skips the first roadmap snapshot, and passes its schema", () => {
  const root = mkdtempSync(join(tmpdir(), "bcobs-digest-"));
  const dataDir = join(root, "data"), contentDir = join(root, "content");
  const e = (id: string) => ({ id, title: `F${id}`, area: "Finance", description: "", status: "In development", release_phase: null, ga: "December CY2026", preview: null, created: null, modified: null, cloud: [], platforms: [] });
  writeJson(join(dataDir, "roadmap/snapshots/2026-10-07.json"), { items: [e("1"), e("2")] });
  writeJson(join(dataDir, "roadmap/diffs/2026-10-01.json"), { from: null, to: "2026-10-01", added: ["1"], removed: [], changed: [] });
  writeJson(join(dataDir, "roadmap/diffs/2026-10-07.json"), { from: "2026-10-01", to: "2026-10-07", added: ["2"], removed: [], changed: ["1"] });
  writeText(join(contentDir, "videos/AAAAAAAAAA1.md"), "x");
  const it = (id: string, pillar: string, at: string, over: Partial<ManifestItem> = {}): ManifestItem => ({ id, pillar: pillar as any, source: "s", tier: "official", title: id, url: `https://x/${id}`, published_at: at, state: "published", stages: {}, attempts: 0, ...over });
  const items = [it("video/yt-ms/AAAAAAAAAA1", "video", "2026-10-06T10:00:00Z"), it("video/yt-ms/BBBBBBBBBB1", "video", "2026-09-01T10:00:00Z"),
    it("docs/learn/a.md", "docs", "2026-10-08T10:00:00Z", { meta: { ms_topic: "article" } }), it("docs/learn/ref.md", "docs", "2026-10-08T10:00:00Z", { meta: { ms_topic: "reference" } })];
  const { page, counts } = renderDigest(isoWeek(new Date("2026-10-07T00:00:00Z")), { items, dataDir, contentDir, currentMajor: "29" }, new Date());
  assert.deepEqual([counts.videos, counts.docs, counts.roadmap_added, counts.roadmap_changed], [1, 1, 1, 1]);
  const fm = matter(page);
  assert.ok(validate("frontmatter.digest", fm.data).ok);
  assert.deepEqual(fm.data.links.videos, ["video/AAAAAAAAAA1"]);
  assert.match(fm.content, /Added:[\s\S]*\[F2\]\(\.\.\/features\/2\.md\)[\s\S]*Changed:[\s\S]*F1/);
});
