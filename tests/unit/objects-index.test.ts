import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { extractSource, loadParser } from "../../pipeline/code/extract.js";
import { writeSnapshot } from "../../pipeline/code/job.js";
import { renderCodePages } from "../../pipeline/render/object.js";
import { renderObjectsIndex } from "../../pipeline/render/objects-index.js";
import { refreshCodeDerived } from "../../pipeline/code/diff.js";

const SRC = `table 18 Customer { fields { field(1; "No."; Code[20]) { } field(5; "Posting Date"; Date) { } } [IntegrationEvent(false, false)] local procedure OnAfterX() begin end; }\ntable 36 "Sales Header" { fields { field(20; "Posting Date"; Date) { } } }\ninterface "I Price Calc" { }\ncodeunit 80 "Sales-Post" { [EventSubscriber(ObjectType::Table, Database::Customer, 'OnAfterX', '', false, false)] local procedure OnX() begin end; }\n`;

test("objects.json has one compact row per object page; fields.json maps field names to the pages that have them", async () => {
  const root = mkdtempSync(join(tmpdir(), "bcobs-objidx-"));
  const dataDir = join(root, "data"), contentDir = join(root, "content");
  const objs = extractSource(await loadParser(), SRC, { version: "29", country: "w1", layer: "base", app: "Base Application", file: "x.al" });
  writeSnapshot(dataDir, objs, { major: "29", country: "w1", layer: "base", source: "bcapps", repo: "r", branch: "b", commit: "c", build: null, apps: ["Base Application"], files: 1, parse_errors: 0 });
  refreshCodeDerived(dataDir, ["29"]);
  renderCodePages(dataDir, contentDir, new Date("2026-10-07T00:00:00Z"));
  const r = renderObjectsIndex(contentDir, dataDir);
  assert.deepEqual(r, { objects: 4, fields: 2, events: 1, field_docs: 0 });
  const o = JSON.parse(readFileSync(join(dataDir, "index/objects.json"), "utf8"));
  assert.deepEqual(o.rows.map((x: unknown[]) => x.slice(0, 4)), [["codeunit/80", "codeunit", 80, "Sales-Post"], ["interface/i-price-calc", "interface", null, "I Price Calc"], ["table/18", "table", 18, "Customer"], ["table/36", "table", 36, "Sales Header"]]);
  const e = JSON.parse(readFileSync(join(dataDir, "index/events.json"), "utf8"));
  assert.deepEqual(e.rows, [["table/18", "OnAfterX", "integration", null, [["codeunit/80", "OnX"]]]]);
  assert.equal(e.subscriptions, 1);
  assert.deepEqual(o.rows[2].slice(7), [null, "", 0, 0], "introduced unknown (present since the oldest snapshot), no changes, no Learn pages, no countries");
  const f = JSON.parse(readFileSync(join(dataDir, "index/fields.json"), "utf8"));
  assert.equal(f.major, "29");
  assert.deepEqual(f.fields["posting date"], ["table/18", "table/36"]);
  assert.deepEqual(f.fields["no."], ["table/18"]);
});
