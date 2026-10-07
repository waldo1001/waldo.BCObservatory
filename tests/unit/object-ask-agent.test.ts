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

const LONG = "Procedure bodies are not stored here (D10). The call sections above are our own, per object, from the BC29 call graph. For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: \"codeunit\", object_name: \"Sales-Post\")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.";

test("askYourAgent (D75): one closing paragraph, the call sentence only with a graph major", () => {
  // 1. with call sections: exactly the text of spec 2.1
  assert.deepEqual(askYourAgent({ type: "codeunit", name: "Sales-Post" }, null, "29"), ["## Ask your agent", "", LONG, ""]);
  // 2. without: the call sentence is left out
  const short = askYourAgent({ type: "codeunit", name: "Sales-Post" }).join("\n");
  assert.equal(short, `## Ask your agent\n\n${LONG.replace(" The call sections above are our own, per object, from the BC29 call graph.", "")}\n`);
  assert.doesNotMatch(short, /call sections above/);
  // 3. a country's own object: the country note as its own paragraph, no call sentence
  const be = askYourAgent({ type: "table", name: "BE Only" }, "be", null);
  assert.equal(be.filter((l) => l !== "").length, 3, "heading and two paragraphs");
  assert.match(be.join("\n"), /on the returned id\.\n\nA BE country object, not part of W1: .*`bcatlas_list_countries`/);
  assert.doesNotMatch(be.join("\n"), /call sections above/);
  // 4. whitespace collapsed, quotes JSON-escaped
  assert.ok(askYourAgent({ type: "page", name: '  My   "Quoted"\tPage ' }).join("\n").includes('object_name: "My \\"Quoted\\" Page"'));
  // 5. no CLI line, no "full call graph", nothing to link
  for (const md of [LONG, short, be.join("\n")]) {
    assert.doesNotMatch(md, /CLI:/);
    assert.doesNotMatch(md, /full call graph/);
    assert.doesNotMatch(md, /https?:\/\//, "MCP-only: nothing to link");
  }
});

test("object pages end with the block, own-country pages too, and stay valid", async () => {
  const root = mkdtempSync(join(tmpdir(), "bcobs-askagent-"));
  const dataDir = join(root, "data"), contentDir = join(root, "content");
  const p = await loadParser();
  const ex = (src: string, version: string, cc = "w1") => extractSource(p, src, { version, country: cc, layer: cc === "w1" ? "base" : "overlay", app: "Base Application", file: "src/X.al" });
  writeSnapshot(dataDir, ex(T28, "28"), man("28", "w1"));
  writeSnapshot(dataDir, ex(T29, "29"), man("29", "w1"));
  writeSnapshot(dataDir, ex(BE, "29", "be"), { ...man("29", "be"), absent: [] });
  refreshCodeDerived(dataDir, ["28", "29"]);
  renderCodePages(dataDir, contentDir, new Date("2026-10-07T00:00:00Z"));
  const last = (f: string) => { const c = matter(readFileSync(join(contentDir, f), "utf8")).content; return c.slice(c.lastIndexOf("\n## ") + 1); };
  const cu = readFileSync(join(contentDir, "objects/codeunit/80.md"), "utf8");
  assert.equal(cu.split('bcatlas_resolve_node(object_type: "codeunit", object_name: "Sales-Post")').length - 1, 1);
  assert.equal(last("objects/codeunit/80.md"), `## Ask your agent\n\n${LONG.replace(" The call sections above are our own, per object, from the BC29 call graph.", "")}\n`, "no graph: the short form, last");
  assert.match(last("objects/table/18.md"), /^## Ask your agent\n\n[^\n]+object_name: "Customer"[^\n]+\n$/, "no note on a W1 object, also one only in BC29");
  assert.match(last("objects/table/11300-be.md"), /^## Ask your agent\n\n[^\n]+object_name: "BE Only"[^\n]+on the returned id\.\n\nA BE country object, not part of W1[^\n]+\n$/);
  assert.deepEqual(validateContent(contentDir).errors, []);
});
