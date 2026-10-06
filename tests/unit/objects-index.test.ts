import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { extractSource, loadParser } from "../../pipeline/code/extract.js";
import { writeSnapshot } from "../../pipeline/code/job.js";
import { renderCodePages } from "../../pipeline/render/object.js";
import { renderObjectsIndex } from "../../pipeline/render/objects-index.js";

const SRC = `table 18 Customer { fields { field(1; "No."; Code[20]) { } field(5; "Posting Date"; Date) { } } }\ntable 36 "Sales Header" { fields { field(20; "Posting Date"; Date) { } } }\ninterface "I Price Calc" { }\n`;

test("objects.json has one compact row per object page; fields.json maps field names to the pages that have them", async () => {
  const root = mkdtempSync(join(tmpdir(), "bcobs-objidx-"));
  const dataDir = join(root, "data"), contentDir = join(root, "content");
  const objs = extractSource(await loadParser(), SRC, { version: "29", country: "w1", layer: "base", app: "Base Application", file: "x.al" });
  writeSnapshot(dataDir, objs, { major: "29", country: "w1", layer: "base", source: "bcapps", repo: "r", branch: "b", commit: "c", build: null, apps: ["Base Application"], files: 1, parse_errors: 0 });
  renderCodePages(dataDir, contentDir, new Date("2026-10-07T00:00:00Z"));
  const r = renderObjectsIndex(contentDir, dataDir);
  assert.deepEqual(r, { objects: 3, fields: 2 });
  const o = JSON.parse(readFileSync(join(dataDir, "index/objects.json"), "utf8"));
  assert.deepEqual(o.rows.map((x: unknown[]) => x.slice(0, 4)), [["interface/i-price-calc", "interface", null, "I Price Calc"], ["table/18", "table", 18, "Customer"], ["table/36", "table", 36, "Sales Header"]]);
  const f = JSON.parse(readFileSync(join(dataDir, "index/fields.json"), "utf8"));
  assert.equal(f.major, "29");
  assert.deepEqual(f.fields["posting date"], ["table/18", "table/36"]);
  assert.deepEqual(f.fields["no."], ["table/18"]);
});
