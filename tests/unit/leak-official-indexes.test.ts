import { test } from "node:test";
import assert from "node:assert/strict";
import { officialOnlyOutput } from "../../pipeline/validate/leak.js";

// D85: the field docs and symbols indexes hold Microsoft's code text only (tooltips, captions, docs from the snapshots).
// A community post that quotes standard tooltips (nataliekarolak-com/3494, 2026-10-25, run 40217955985) is not a leak in them.
test("the field docs and symbols indexes are official-only outputs", () => {
  for (const p of ["data/index/field-docs.json", "data/index/symbols-fields-614be85fef44.json", "data/index/symbols-fields-2-0123456789ab.json",
    "data/index/symbols-events-0123456789ab.json", "data/index/symbols-procs-0123456789ab.json", "data/index/symbols-values-0123456789ab.json"]) assert.ok(officialOnlyOutput(p), p);
});

test("the exemption stays exact: other index files are still scanned", () => {
  for (const p of ["data/index/symbols-manifest.json", "data/index/field-docs.json.bak", "data/index/search-0123456789ab.json", "data/index/symbols-posts-0123456789ab.json"]) assert.ok(!officialOnlyOutput(p), p);
});

// D126: BCQuality rule pages are rendered from the BCQuality blob alone; a rule's title and summary are official text
test("BCQuality rule pages are official-only; their manifest titles and summaries are official text", async () => {
  const { mkdtempSync, mkdirSync, writeFileSync } = await import("node:fs");
  const { tmpdir } = await import("node:os");
  const { join } = await import("node:path");
  const { readOfficialText } = await import("../../pipeline/validate/leak.js");
  assert.ok(officialOnlyOutput("content/guidelines/microsoft/knowledge/x.md"));
  assert.ok(officialOnlyOutput("content/guidelines/llms.txt"));
  assert.ok(officialOnlyOutput("tests/fixtures/bcquality/admin-and-migration-pages-tolerate-lower-perf.md"));
  assert.ok(!officialOnlyOutput("content/posts/x.md"));
  const data = mkdtempSync(join(tmpdir(), "bcobs-leak-gl-"));
  mkdirSync(join(data, "manifest", "guidelines", "bcquality"), { recursive: true });
  writeFileSync(join(data, "manifest", "guidelines", "bcquality", "a.json"), JSON.stringify({ title: "Admin pages tolerate lower discipline", meta: { description: "Some pages run rarely and against small datasets." } }));
  assert.ok(readOfficialText(data).includes("Admin pages tolerate lower discipline Some pages run rarely and against small datasets."));
});
