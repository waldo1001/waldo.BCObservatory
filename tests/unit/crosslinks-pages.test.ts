import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdirSync, mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import matter from "gray-matter";
import type { ManifestItem } from "../../pipeline/lib/manifest.js";
import { pendingMentionPages, renderPostPage } from "../../pipeline/render/post.js";
import { crossLinksPath, serializeCrossLinks, type CrossLink } from "../../pipeline/link/crosslinks.js";
import { validate } from "../../pipeline/lib/schema.js";
import { writeJson } from "../../pipeline/lib/fsx.js";

const COPY = "https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/tenant-admin-center-environments-copy";
const item = (over: Partial<ManifestItem> = {}): ManifestItem => ({ id: "blog/gerardorenteria-blog/15213", pillar: "blog", source: "gerardorenteria-blog", tier: "community", title: "Cleaning copies", url: "https://gerardorenteria.blog/x", published_at: "2026-10-01T08:00:00Z", language: "en", state: "published", stages: { discovered: { at: "x" }, fetched: { at: "x", output_hash: "h" }, published: { at: "x" } }, attempts: 0, ...over });
const x = { item_id: "blog/gerardorenteria-blog/15213", url: "u", title: "t", source: "gerardorenteria-blog", published_at: "2026-10-01T08:00:00Z", words: 900, summary: "Anonymize and log environment copies.", key_points: ["Subscribe to the cleanup events"], systems: ["administration"], topics: [], objects: [], features: [], versions: [], language: "en", quotes: [], trimmed_for_policy: 0, prompt_version: 1, llm: { model: "m", cached: false, cost_usd: 0.01, posts_in_call: 1 } };
const rows: CrossLink[] = [
  { to: "object/codeunit/1886", title: 'Codeunit 1886 "Environment Cleanup"', label: "names", why: "builds on the cleanup events", by: "override" },
  { to: COPY, title: "Copy an environment", label: "possibly related", why: "cleans up copies", by: "override" },
  { to: "post/waldo-be/1", title: "Another post", label: "possibly related", why: "both name the codeunit", by: "model" },
];

test("crosslinks on a post page: certain rows join links.objects, all rows sit in links.related, two sections render", () => {
  const page = renderPostPage(item(), x as any, { name: "Gerardo Rentería" }, new Date("2026-10-23T00:00:00Z"), undefined, null, rows);
  const fm = matter(page);
  assert.deepEqual(fm.data.links.objects, ["object/codeunit/1886"]);
  assert.deepEqual(fm.data.links.learn, [], "possibly related never in links.learn");
  assert.equal(fm.data.links.related.length, 3);
  const v = validate("frontmatter.post", fm.data);
  assert.equal(v.ok, true, v.errors.join("; "));
  assert.match(fm.content, /## Linked pages\n\n- \[Codeunit 1886 "Environment Cleanup"\]\(\.\.\/\.\.\/objects\/codeunit\/1886\.md\) — names: builds on the cleanup events \(checked by hand\)/);
  assert.match(fm.content, /## Possibly related\n\nNo source states these links:/);
  assert.match(fm.content, /- \[Another post\]\(\.\.\/\.\.\/posts\/waldo-be\/1\.md\) — possibly related: both name the codeunit \(model-linked\)/);
});

test("crosslinks on a post page: a page without tonight's cross-links is pending, one with them is not", () => {
  const root = mkdtempSync(join(tmpdir(), "bcobs-xlp-"));
  const dataDir = join(root, "data"), contentDir = join(root, "content");
  mkdirSync(join(contentDir, "posts", "gerardorenteria-blog"), { recursive: true });
  writeJson(join(dataDir, "extract", "blog", "gerardorenteria-blog", "15213.json"), x);
  writeJson(join(dataDir, "index", "objects.json"), { rows: [["codeunit/1886", "codeunit", 1886, "Environment Cleanup", "System Application"]] });
  mkdirSync(join(dataDir, "links"), { recursive: true });
  writeFileSync(crossLinksPath(dataDir), serializeCrossLinks({ pages: { "post/gerardorenteria-blog/15213": rows }, learn: {} }));
  const it = item();
  const pagePath = join(contentDir, "posts", "gerardorenteria-blog", "15213.md");
  writeFileSync(pagePath, renderPostPage(it, x as any, { name: "G" }, new Date(), undefined, null, []));
  assert.equal(pendingMentionPages([it], dataDir, contentDir).length, 1, "rendered before the cross-links existed");
  writeFileSync(pagePath, renderPostPage(it, x as any, { name: "G" }, new Date(), undefined, null, rows));
  assert.equal(pendingMentionPages([it], dataDir, contentDir).length, 0);
});
