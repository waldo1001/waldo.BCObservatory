import { test } from "node:test";
import assert from "node:assert/strict";
import { ROOT } from "../../pipeline/lib/paths.js";

/** D127 tests 8b and 9: the real tools on the committed index and content; the server reads them, not the site. */
process.env.BC_OBSERVATORY_LOCAL = ROOT;
const server = await import("../../packages/mcp/src/server.js");
const { answer, toolSearch, toolCat, toolGetObject, toolLocalization, toolDiffObject, toolBrief, toolLs } = server;

async function pointed<A>(tool: string, fn: (a: A) => Promise<string> | string, a: A): Promise<[string, string[]]> {
  let got: [string, string[]] = ["none", []];
  await answer(tool, fn, false, () => {}, (_t: string, outcome: string, paths: string[]) => { got = [outcome, paths]; })(a);
  return got;
}

test("D127 test 8b: a search sends its top three hits as catalogue ids, never the query", async () => {
  const [outcome, paths] = await pointed("bc_search", toolSearch, { query: "sales header", mode: "keyword" });
  assert.equal(outcome, "ok");
  assert.equal(paths.length, 3, String(paths));
  assert.ok(paths.includes("objects/table/36"), String(paths));
  assert.ok(paths.every((p) => p !== "other" && p !== "sales header"), String(paths));
  assert.deepEqual(await pointed("bc_search", toolSearch, { query: "zzqx acme-nv", mode: "keyword" }), ["nomatch", []]);
});

test("D127 test 9: each tool points to the page it answered with", async () => {
  assert.deepEqual(await pointed("bc_get_object", toolGetObject, { type: "table", idOrName: "36" }), ["ok", ["objects/table/36"]]);
  assert.deepEqual(await pointed("bc_cat", toolCat, { path: "objects/table/36" }), ["ok", ["objects/table/36"]]);
  assert.deepEqual(await pointed("bc_cat", toolCat, { path: "customers/acme" }), ["notfound", []]);
  assert.deepEqual(await pointed("bc_localization", toolLocalization, { country: "BE" }), ["ok", ["localizations/be"]]);
  assert.deepEqual(await pointed("bc_diff_object", toolDiffObject, { type: "table", id: "36", from: "28", to: "29" }), ["ok", ["objects/table/36"]]);
  assert.deepEqual(await pointed("bc_brief", toolBrief, { path: "objects/table/36" }), ["ok", ["objects/table/36"]]);
  assert.deepEqual(await pointed("bc_ls", toolLs, { path: "objects/table" }), ["ok", []]);
});
