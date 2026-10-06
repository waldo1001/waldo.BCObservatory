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
