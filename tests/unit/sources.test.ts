import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import matter from "gray-matter";
import { writeJson, writeText } from "../../pipeline/lib/fsx.js";
import { validateContent } from "../../pipeline/validate/content.js";
import { renderSourcePage, renderSourcesAndCoverage } from "../../pipeline/render/source.js";

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

test("D79: roadmap features are listed by title with area, status, GA and count, most-shown first", () => {
  const root = mkdtempSync(join(tmpdir(), "bcobs-src-"));
  const contentDir = join(root, "content"), dataDir = join(root, "data");
  const post = (n: string, features: string[]) => page({ ...base(`post/kauffmann-nl/${n}`, "post"), links: { ...L, features }, source_id: "kauffmann-nl", system: "copilot", tags: [], published_at: `2026-0${n}-01T00:00:00Z`, post_id: n, url: "u", author: null, full_text: false, quotes: [] });
  const feature = (id: string, title: string, area: string, status: string, ga_date: string | null) => page({ ...base(`feature/${id}`, "feature"), title, tier: "official", roadmap_id: id, wave: null, status, roadmap_status: "x", ga_date, preview_date: null, area });
  writeText(join(contentDir, "posts/kauffmann-nl/1.md"), post("1", ["feature/100", "feature/200"]));
  writeText(join(contentDir, "posts/kauffmann-nl/2.md"), post("2", ["feature/200"]));
  writeText(join(contentDir, "posts/kauffmann-nl/3.md"), post("3", ["feature/999"]));
  writeText(join(contentDir, "features/100.md"), feature("100", "Calculate withholding tax", "Expense Agent", "preview", "2026-10"));
  writeText(join(contentDir, "features/200.md"), feature("200", "Use withholding taxes", "Finance", "ga", null));
  renderSourcesAndCoverage(contentDir, dataDir, new Date("2026-10-07T00:00:00Z"));
  const s = matter(readFileSync(join(contentDir, "sources/kauffmann-nl.md"), "utf8"));
  const section = s.content.split("## Roadmap features it demonstrates")[1].split("\n## ")[0].trim().split("\n");
  assert.deepEqual(section, [
    "- [Use withholding taxes](../features/200.md): Finance, generally available, 2 posts",
    "- [Calculate withholding tax](../features/100.md): Expense Agent, in preview, GA 2026-10, 1 post",
    "- [999](../features/999.md)",
  ]);
  assert.deepEqual(s.data.links.features, ["feature/100", "feature/200", "feature/999"], "the frontmatter keeps the ids");
  // feature/999 has no page on purpose: the validator flags exactly that, nothing else
  assert.deepEqual(validateContent(contentDir).errors.filter((e) => e.includes("sources/") && !e.includes("999")), []);
});

test("D79: a roadmap title with a pipe is escaped; a video source counts videos", () => {
  const src = { id: "yt-x", name: "X", kind: "youtube", url: "https://x", tier: "community" } as any;
  const items = [{ path: "videos/a", fm: { ...base("video/yt-x/a", "video"), links: { ...L, features: ["feature/7"] }, published_at: "2026-01-01T00:00:00Z" } }];
  const out = renderSourcePage(src, items, new Date("2026-10-07T00:00:00Z"), new Map([["feature/7", { title: "Either | or", area: null, status: "announced", ga_date: "2027-04" }]]));
  assert.ok(out.includes("- [Either \\| or](../features/7.md): announced, GA 2027-04, 1 video"), out);
});
