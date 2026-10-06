import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import matter from "gray-matter";
import { writeJson } from "../../pipeline/lib/fsx.js";
import type { ManifestItem } from "../../pipeline/lib/manifest.js";
import { validate } from "../../pipeline/lib/schema.js";
import { areaSystem, featurePublished, featureStatus, renderFeatureIndex, roadmapMonth, waveOf } from "../../pipeline/render/feature.js";
import type { StageFn } from "../../pipeline/orchestrator/execute.js";

const NOW = new Date("2026-10-07T01:00:00Z");
const entry = (over: Record<string, unknown> = {}) => ({
  id: "573253", title: "More countries | languages", area: "Expense Agent", description: "Expense Agent supports more languages.",
  status: "In development", release_phase: "General Availability", ga: "December CY2026", preview: "October CY2026",
  created: "2026-09-30T23:31:03.000Z", modified: "2026-09-30T23:31:03.000Z", cloud: [], platforms: [], ...over,
});

test("roadmap months, release waves, status and system", () => {
  assert.deepEqual([roadmapMonth("October CY2026"), roadmapMonth("Q4 2026"), roadmapMonth(null)], ["2026-10", null, null]);
  assert.deepEqual([waveOf("2026-10"), waveOf("2027-01"), waveOf("2027-04"), waveOf(null)], ["2026 release wave 2", "2026 release wave 2", "2027 release wave 1", null]);
  assert.equal(featureStatus(entry({ status: "Launched" }), NOW), "ga");
  assert.equal(featureStatus(entry({ status: "Launched", release_phase: "Public Preview" }), NOW), "preview");
  assert.equal(featureStatus(entry(), NOW), "preview", "in development, preview month reached");
  assert.equal(featureStatus(entry({ preview: "January CY2027" }), NOW), "announced");
  assert.equal(featureStatus(entry({ status: "Cancelled" }), NOW), "unclear");
  assert.deepEqual([areaSystem("Expense Agent"), areaSystem("Sustainabilty Management"), areaSystem("Warehouse"), areaSystem(null)], ["copilot", "sustainability", "warehouse", null]);
});

test("feature page from the latest snapshot; index drops items that left the roadmap", async () => {
  const root = mkdtempSync(join(tmpdir(), "bcobs-feat-"));
  const dataDir = join(root, "data"), contentDir = join(root, "content");
  writeJson(join(dataDir, "roadmap/snapshots/2026-10-01.json"), { items: [entry({ title: "Old" })] });
  writeJson(join(dataDir, "roadmap/snapshots/2026-10-06.json"), { items: [entry()] });
  const item = { id: "roadmap/m365-roadmap/573253", pillar: "roadmap", source: "m365-roadmap", tier: "official", title: "x", url: "https://www.microsoft.com/microsoft-365/roadmap?id=573253", state: "linked", stages: {}, attempts: 0, input_hash: "abc" } as ManifestItem;
  const ctx = { dataDir, contentDir, now: () => NOW } as any;
  const r = await (featurePublished() as StageFn)(item, ctx);
  assert.equal(r.data?.path, "content/features/573253.md");
  const { data, content } = matter(readFileSync(join(contentDir, "features/573253.md"), "utf8"));
  const v = validate("frontmatter.feature", data);
  assert.ok(v.ok, v.errors.join("; "));
  assert.deepEqual([data.title, data.status, data.wave, data.ga_date, data.system], ["More countries | languages", "preview", "2026 release wave 2", "2026-12", "copilot"]);
  assert.ok(content.includes("## What Microsoft says") && content.includes("Expense Agent supports more languages."));
  assert.equal((await (featurePublished() as StageFn)({ ...item, id: "roadmap/m365-roadmap/999" }, ctx)).skip, "removed-upstream");

  writeFileSync(join(contentDir, "features/111.md"), "---\nid: feature/111\n---\n");
  assert.equal(renderFeatureIndex(contentDir, dataDir), 1);
  assert.equal(existsSync(join(contentDir, "features/111.md")), false);
  assert.match(readFileSync(join(contentDir, "features/llms.txt"), "utf8"), /- \[More countries \\\| languages\]\(573253\.md\): Expense Agent, in preview, GA 2026-12/);
});
