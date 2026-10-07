import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, mkdtempSync, readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import matter from "gray-matter";
import type { ManifestItem } from "../../pipeline/lib/manifest.js";
import { validate } from "../../pipeline/lib/schema.js";
import type { TopicHub } from "../../pipeline/link/toc.js";
import { renderTopics, topicLink } from "../../pipeline/render/topic.js";
import { writeJson, writeText } from "../../pipeline/lib/fsx.js";

const doc = (k: string, over: Record<string, unknown> = {}): ManifestItem => ({
  id: `docs/learn-smb-docs/business-central/${k}.md`, pillar: "docs", source: "learn-smb-docs", tier: "official", title: `Page ${k} | x`,
  url: `https://learn.microsoft.com/dynamics365/business-central/${k}`, state: "fetched", stages: {}, attempts: 0,
  meta: { description: `About ${k}.`, ms_date: "2025-08-13", search_form: [{ raw: "312", id: 312, kind: null }], ...over },
});
const hub = (id: string, members: string[], over: Partial<TopicHub> = {}): TopicHub => ({
  id, title: id.split("/").pop()!, toc: "business-central/TOC.md", breadcrumb: [], parent: null, children: [], members, system: "finance", member_hash: "h".repeat(64), ...over,
});

test("topic links are relative between pages", () => {
  assert.equal(topicLink("topic/bc/finance", "topic/bc/finance/gl"), "finance/gl.md");
  assert.equal(topicLink("topic/bc/finance/gl", "topic/bc/finance"), "../finance.md");
});

test("topic pages: valid frontmatter, Learn links with descriptions, subtopics, forms; stale pages removed", () => {
  const root = mkdtempSync(join(tmpdir(), "bcobs-topics-"));
  const items = [doc("a"), doc("b"), doc("c", { search_form: [{ raw: "Report_6627", id: 6627, kind: "Report" }] })];
  const parent = hub("topic/bc/finance", items.map((i) => i.id), { children: ["topic/bc/finance/gl"] });
  const child = hub("topic/bc/finance/gl", [items[2].id], { parent: parent.id, breadcrumb: ["finance"] });
  const n = renderTopics([parent, child], items, join(root, "data"), join(root, "content"), new Date("2026-10-07T01:00:00Z"));
  assert.equal(n, 2);
  const raw = readFileSync(join(root, "content/topics/bc/finance.md"), "utf8");
  const { data, content } = matter(raw);
  const v = validate("frontmatter.topic", data);
  assert.ok(v.ok, v.errors.join("; "));
  assert.deepEqual([data.coverage.learn, data.bc_forms, data.narrative, data.children], [3, [312, 6627], "none", ["topic/bc/finance/gl"]]);
  assert.ok(content.includes("- [gl](finance/gl.md) (1 pages)"));
  assert.ok(content.includes("- [Page a \\| x](https://learn.microsoft.com/dynamics365/business-central/a): About a."));
  assert.ok(!content.includes("/c):"), "pages of a subtopic are listed there, not twice");
  assert.ok(readFileSync(join(root, "content/topics/bc/finance/gl.md"), "utf8").includes("[finance](../finance.md)"));
  assert.ok(existsSync(join(root, "data/hubs/topics.json")));
  assert.match(readFileSync(join(root, "content/topics/llms.txt"), "utf8"), /- \[finance\]\(bc\/finance\.md\): 3 Learn pages/);

  renderTopics([parent, child], items, join(root, "data"), join(root, "content"), new Date("2026-10-08T01:00:00Z"));
  assert.equal(readFileSync(join(root, "content/topics/bc/finance.md"), "utf8"), raw, "unchanged hubs leave files untouched");
  renderTopics([{ ...parent, children: [] }], items, join(root, "data"), join(root, "content"), new Date("2026-10-08T01:00:00Z"));
  assert.equal(existsSync(join(root, "content/topics/bc/finance/gl.md")), false);
  assert.equal(existsSync(join(root, "content/topics/bc/finance")), false, "empty folders pruned");
});

test("topic pages list the videos and posts linked to them (data/links/topics.json), relative to the page", () => {
  const root = mkdtempSync(join(tmpdir(), "bcobs-topics-"));
  const items = [doc("a")];
  writeJson(join(root, "data/links/topics.json"), { prompt_version: 2, units: {
    "video/V1": { kind: "video", key: "video/V1", hash: "h", title: "VAT in 10 minutes", source: "yt-microsoft", at: "x", matches: [{ topic: "topic/bc/finance/gl", quote: "set up VAT posting groups" }] },
    "post/waldo-be/42": { kind: "post", key: "post/waldo-be/42", hash: "h", title: "My G/L tips", source: "waldo-be", at: "x", matches: [{ topic: "topic/bc/finance/gl", quote: "general ledger tips for consultants" }] },
  } });
  const parent = hub("topic/bc/finance", [], { children: ["topic/bc/finance/gl"] });
  const child = hub("topic/bc/finance/gl", [items[0].id], { parent: parent.id, breadcrumb: ["finance"] });
  renderTopics([parent, child], items, join(root, "data"), join(root, "content"), new Date("2026-10-07T01:00:00Z"));
  const { data, content } = matter(readFileSync(join(root, "content/topics/bc/finance/gl.md"), "utf8"));
  assert.ok(validate("frontmatter.topic", data).ok);
  assert.deepEqual([data.links.videos, data.links.posts, data.coverage.video, data.coverage.blog], [["video/V1"], ["post/waldo-be/42"], 1, 1]);
  assert.ok(content.includes('- [VAT in 10 minutes](../../../videos/V1.md) (video): "set up VAT posting groups"'));
  assert.ok(content.includes("(../../../posts/waldo-be/42.md) (community post)"));
});

test("hubs own their objects: links.objects, coverage.code and an objects section from docs-objects.json (D65)", () => {
  const root = mkdtempSync(join(tmpdir(), "bcobs-topics-"));
  const dataDir = join(root, "data"), contentDir = join(root, "content");
  const items = [doc("sb"), doc("contracts")];
  const parent = hub("topic/bc/sb", items.map((i) => i.id), { title: "Subscription billing", children: ["topic/bc/sb/contracts"], system: "sales" });
  const child = hub("topic/bc/sb/contracts", [items[1].id], { title: "Contracts", parent: parent.id, breadcrumb: ["Subscription billing"], system: "sales" });
  const ref = (key: string, name: string) => ({ key, name, versions: ["29"], countries: ["apps"], obsolete: null });
  writeJson(join(dataDir, "index/docs-objects.json"), { majors: ["29"], commits: {}, docs: 2, links: 4, by_object: {}, by_doc: {
    [items[0].id]: [ref("page/8059", "Service Objects"), ref("report/8012", "Contract Invoice"), ref("page/99999", "Not in the code")],
    [items[1].id]: [ref("page/8053", "Customer Contracts"), ref("page/8059", "Service Objects")],
  } });
  writeJson(join(dataDir, "code/relations/29.json"), { schema: "al-relations@1", major: "29", events: {}, dead_events: { count: 0 }, unresolved: [], stats: {}, edges: [
    { s: "page/8059", t: "table/8057", k: "source_table" }, { s: "page/8053", t: "table/8052", k: "source_table" },
  ] });
  const obj = (pk: string, title: string, extra = "") => writeText(join(contentDir, `objects/${pk}.md`), `---\nid: object/${pk}\ntype: object\ntitle: '${title}'\nsource_major: "29"\n${extra}---\n`);
  obj("page/8059", 'Page 8059 "Service Objects"', "caption: Subscriptions\n");
  obj("page/8053", 'Page 8053 "Customer Contracts"');
  obj("report/8012", 'Report 8012 "Contract Invoice"');
  obj("table/8057", 'Table 8057 "Subscription Header"');
  renderTopics([parent, child], items, dataDir, contentDir, new Date("2026-10-07T01:00:00Z"));
  const p = matter(readFileSync(join(contentDir, "topics/bc/sb.md"), "utf8"));
  assert.ok(validate("frontmatter.topic", p.data).ok, validate("frontmatter.topic", p.data).errors.join("; "));
  assert.deepEqual([p.data.links.objects, p.data.coverage.code], [["object/page/8053", "object/page/8059", "object/report/8012"], 3], "every resolvable object of the subtree, once; no page, no link");
  assert.ok(!p.content.includes("not yet joined"));
  assert.match(p.content, /## Business Central pages and reports\n\n[^\n]+\n\n- \[Page 8059 "Service Objects"\]\(\.\.\/\.\.\/objects\/page\/8059\.md\) · captioned "Subscriptions" · on \[Table 8057 "Subscription Header"\]\(\.\.\/\.\.\/objects\/table\/8057\.md\)\n- \[Report 8012 "Contract Invoice"\]\(\.\.\/\.\.\/objects\/report\/8012\.md\)\n- \[Page 8053 "Customer Contracts"\]\(\.\.\/\.\.\/objects\/page\/8053\.md\) · on Table 8052 · via \[Contracts\]\(sb\/contracts\.md\)\n/,
    "own members first, then subtopics marked via; tables linked when they have a page");
  assert.match(p.content, /Learn also names 1 object with no object page: page\/99999\./);
  const c = matter(readFileSync(join(contentDir, "topics/bc/sb/contracts.md"), "utf8"));
  assert.deepEqual([c.data.links.objects, c.data.coverage.code], [["object/page/8053", "object/page/8059"], 2]);
});
