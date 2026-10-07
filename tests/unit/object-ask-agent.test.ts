import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import matter from "gray-matter";
import { extractSource, loadParser } from "../../pipeline/code/extract.js";
import { writeSnapshot } from "../../pipeline/code/job.js";
import { refreshCodeDerived } from "../../pipeline/code/diff.js";
import { askYourAgent, renderCodePages } from "../../pipeline/render/object.js";
import { validateContent } from "../../pipeline/validate/content.js";

const T28 = `codeunit 80 "Sales-Post" { }\n`;
const T29 = `codeunit 80 "Sales-Post" { }\ntable 18 Customer { fields { field(1; "No."; Code[20]) { } } }\n`;
const BE = `table 11300 "BE Only" { }\n`;
const man = (major: string, cc: string) => ({ major, country: cc, layer: (cc === "w1" ? "base" : "overlay") as "base" | "overlay", source: "bcapps", repo: "https://github.com/microsoft/BCApps", branch: `releases/${major}.x`, commit: `c${major}`, build: null, apps: ["Base Application"], files: 1, parse_errors: 0 });

test("askYourAgent: the exact bcatlas_resolve_node call from type and name, the corpus named, a note on a country's own object", () => {
  const md = askYourAgent({ type: "codeunit", name: "Sales-Post" }).join("\n");
  assert.match(md, /^## Ask your agent\n/);
  assert.ok(md.includes('`bcatlas_resolve_node(object_type: "codeunit", object_name: "Sales-Post")`'), md);
  assert.ok(md.includes('`node bc-code-atlas.js resolve-node codeunit "Sales-Post"`'), md);
  assert.match(md, /external MCP server by Stefan Maron \(MIT, not hosted here; default corpus w1-28/);
  assert.doesNotMatch(md, /country object/);
  assert.doesNotMatch(md, /https?:\/\//, "MCP-only: nothing to link");
  assert.match(askYourAgent({ type: "table", name: "BE Only" }, "be").join("\n"), /A BE country object, not part of W1: .*`bcatlas_list_countries`/);
});

test("object pages carry the block before Across versions, own-country pages too, and stay valid", async () => {
  const root = mkdtempSync(join(tmpdir(), "bcobs-askagent-"));
  const dataDir = join(root, "data"), contentDir = join(root, "content");
  const p = await loadParser();
  const ex = (src: string, version: string, cc = "w1") => extractSource(p, src, { version, country: cc, layer: cc === "w1" ? "base" : "overlay", app: "Base Application", file: "src/X.al" });
  writeSnapshot(dataDir, ex(T28, "28"), man("28", "w1"));
  writeSnapshot(dataDir, ex(T29, "29"), man("29", "w1"));
  writeSnapshot(dataDir, ex(BE, "29", "be"), { ...man("29", "be"), absent: [] });
  refreshCodeDerived(dataDir, ["28", "29"]);
  renderCodePages(dataDir, contentDir, new Date("2026-10-07T00:00:00Z"));
  const cu = readFileSync(join(contentDir, "objects/codeunit/80.md"), "utf8");
  assert.equal(cu.split('bcatlas_resolve_node(object_type: "codeunit", object_name: "Sales-Post")').length - 1, 1);
  assert.match(matter(cu).content, /## Ask your agent\n\n[^\n]+\n\n- `bcatlas_resolve_node[^\n]+\n- CLI: [^\n]+\n\n## Across versions/);
  assert.match(readFileSync(join(contentDir, "objects/table/18.md"), "utf8"), /resolve-node table "Customer"`\n\n## Across versions/, "no note on a W1 object, also one only in BC29");
  assert.match(readFileSync(join(contentDir, "objects/table/11300-be.md"), "utf8"), /resolve-node table "BE Only"`\n\nA BE country object, not part of W1/);
  assert.deepEqual(validateContent(contentDir).errors, []);
});
