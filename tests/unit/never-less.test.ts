import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { ROOT } from "../../pipeline/lib/paths.js";
import { goldenRoot } from "../helpers/search-golden.js";
import { neverLessProblems, neverLessRows } from "../helpers/never-less.js";

test("never-less fixture: six acceptance questions, each naming committed pages and Business Central Learn URLs", () => {
  const rows = neverLessRows();
  assert.equal(rows.length, 6);
  for (const r of rows) {
    assert.ok(r.learn_urls.length >= 2 && r.learn_urls.every((u) => u.startsWith("https://learn.microsoft.com/dynamics365/business-central/") && !u.includes("#")), r.id);
    for (const p of r.must) if (!p.startsWith("hotfixes/")) assert.ok(existsSync(join(ROOT, "content", `${p}.md`)), `${r.id}: ${p} is a committed page`);
  }
  assert.deepEqual(neverLessProblems(rows[0], `x ${rows[0].learn_urls.join(" ")} ${rows[0].must.join(" ")}`), []);
  assert.ok(neverLessProblems(rows[4], "## Heads up\n- posts/waldo-be/317951\n## Gaps").some((p) => /must not be a heads up/.test(p)), "the v26 caution as a heads up for Sales-Post fails the row");
});

test("never-less: the brief over the committed tree shows everything Learn returned, and more (rows not pending)", async () => {
  const { root } = await goldenRoot();
  process.env.BC_OBSERVATORY_LOCAL = root;
  process.env.BC_OBSERVATORY_EMBEDDINGS = "0";
  const { toolBrief } = await import("../../packages/mcp/src/server.js");
  const failures: string[] = [];
  for (const row of neverLessRows()) {
    const problems = neverLessProblems(row, await toolBrief({ query: row.query }));
    if (!row.pending && problems.length) failures.push(`${row.id}: ${problems.join("; ")}`);
  }
  assert.deepEqual(failures, []);
});
