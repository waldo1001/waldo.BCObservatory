/**
 * D106/D107: the never-less check over this checkout (content/ and data/ as they are, after a nightly), every row including
 * the pending ones: what each brief shows against what Learn returned. A row that holds can be un-pended in
 * tests/fixtures/never-less.json.
 *
 *   npm run check:never-less
 *   BC_OBSERVATORY_MODEL_DIR=~/.cache/bc-observatory/models/potion-base-8M@<rev> npm run check:never-less   (with meaning, D107)
 */
import { goldenRoot } from "../tests/helpers/search-golden.js";
import { learnCoverage, neverLessProblems, neverLessRows } from "../tests/helpers/never-less.js";

const { root } = await goldenRoot();
process.env.BC_OBSERVATORY_LOCAL = root;
// D107: the meaning step needs the model; give one with BC_OBSERVATORY_MODEL_DIR (else keyword and words only)
if (!process.env.BC_OBSERVATORY_MODEL_DIR) process.env.BC_OBSERVATORY_EMBEDDINGS = "0";
const { toolBrief } = await import("../packages/mcp/src/server.js");
let held = 0, got = 0, all = 0;
for (const row of neverLessRows()) {
  const brief = await toolBrief({ query: row.query });
  const problems = neverLessProblems(row, brief), cov = learnCoverage(row, brief);
  if (!problems.length) held++;
  got += cov.reached; all += cov.of;
  console.log(`${problems.length ? "MISSING" : "HOLDS  "} ${row.id}${row.pending ? " (pending)" : ""}  Learn coverage ${cov.reached}/${cov.of}${problems.length ? `\n  - ${problems.join("\n  - ")}` : ""}${cov.missed.length ? `\n  (coverage, not a gate) not reached: ${cov.missed.map((u) => u.split("/").pop()).join(", ")}` : ""}`);
}
console.log(`${held} of ${neverLessRows().length} hold; Learn coverage ${got} of ${all} URLs Learn's search returned`);
