/**
 * D106: the never-less check over this checkout (content/ and data/ as they are, after a nightly), every row including
 * the pending ones: what each brief shows against what Learn returned. A row that holds can be un-pended in
 * tests/fixtures/never-less.json.
 *
 *   npm run check:never-less
 */
import { goldenRoot } from "../tests/helpers/search-golden.js";
import { neverLessProblems, neverLessRows } from "../tests/helpers/never-less.js";

const { root } = await goldenRoot();
process.env.BC_OBSERVATORY_LOCAL = root;
process.env.BC_OBSERVATORY_EMBEDDINGS = "0";
const { toolBrief } = await import("../packages/mcp/src/server.js");
let held = 0;
for (const row of neverLessRows()) {
  const problems = neverLessProblems(row, await toolBrief({ query: row.query }));
  if (!problems.length) held++;
  console.log(`${problems.length ? "MISSING" : "HOLDS  "} ${row.id}${row.pending ? " (pending)" : ""}${problems.length ? `\n  - ${problems.join("\n  - ")}` : ""}`);
}
console.log(`${held} of ${neverLessRows().length} hold`);
