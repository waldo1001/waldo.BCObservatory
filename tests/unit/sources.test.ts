import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import matter from "gray-matter";
import { writeJson, writeText } from "../../pipeline/lib/fsx.js";
import { validateContent } from "../../pipeline/validate/content.js";
import { renderSourcesAndCoverage } from "../../pipeline/render/source.js";

const page = (fm: Record<string, unknown>) => `---\n${Object.entries(fm).map(([k, v]) => `${k}: ${JSON.stringify(v)}`).join("\n")}\n---\n\nbody\n`;
const L = { learn: [], objects: [], features: [], topics: [], localizations: [], videos: [], posts: [], guidelines: [] };
const base = (id: string, type: string) => ({ id, type, title: id, summary: "s", tier: "community", language: "en", review: { state: "unreviewed", by: null, at: null, flags: [] }, generated: { at: "x", pipeline: "0", prompts: {}, input_hash: null }, evidence: [], links: L });

test("source footprint pages and the system x pillar coverage", () => {
  const root = mkdtempSync(join(tmpdir(), "bcobs-src-"));
  const contentDir = join(root, "content"), dataDir = join(root, "data");
  writeText(join(contentDir, "posts/kauffmann-nl/1.md"), page({ ...base("post/kauffmann-nl/1", "post"), source_id: "kauffmann-nl", system: "copilot", systems: ["copilot", "development"], tags: ["agents"], published_at: "2026-03-13T00:00:00Z", code_objects_mentioned: ["page Agent Card"], post_id: "1", url: "u", author: null, full_text: false, quotes: [] }));
  writeText(join(contentDir, "posts/kauffmann-nl/2.md"), page({ ...base("post/kauffmann-nl/2", "post"), source_id: "kauffmann-nl", system: "copilot", tags: ["agents", "mcp"], published_at: "2026-09-01T00:00:00Z", post_id: "2", url: "u", author: null, full_text: false, quotes: [] }));
  writeText(join(contentDir, "objects/table/18.md"), page({ ...base("object/table/18", "object"), tier: "official", namespace: "Microsoft.Sales.Customer" }));
  writeJson(join(dataDir, "extract/docs/learn/a.json"), { systems: ["finance"] });
  const r = renderSourcesAndCoverage(contentDir, dataDir, new Date("2026-10-07T00:00:00Z"));
  assert.equal(r.sources, 1);
  const s = matter(readFileSync(join(contentDir, "sources/kauffmann-nl.md"), "utf8"));
  assert.equal(s.data.review.state, "derived", "D77: a source page holds no model text");
  assert.deepEqual([s.data.item_count, s.data.first_item, s.data.last_item, s.data.footprint.systems[0]], [2, "2026-03-13", "2026-09-01", { id: "copilot", weight: 3 }]);
  assert.deepEqual(s.data.links.posts, ["post/kauffmann-nl/1", "post/kauffmann-nl/2"]);
  assert.match(s.content, /2026-Q1: \* 1[\s\S]*2026-Q3: \* 1/);
  assert.deepEqual([r.coverage.counts.copilot.posts, r.coverage.counts.sales.objects, r.coverage.counts.finance.learn], [2, 1, 1]);
  assert.deepEqual(validateContent(contentDir).errors.filter((e) => e.includes("sources/")), []);
});
