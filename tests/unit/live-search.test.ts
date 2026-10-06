import { test } from "node:test";
import assert from "node:assert/strict";
import { hitsFor, nodeIdOf } from "../../site/src/scripts/live-search.js";
import type { Row } from "../../site/src/scripts/search.js";

const row = (path: string, type: string, title: string, system: string | null = "finance", over: Partial<Row> = {}): Row =>
  ({ path, type, title, summary: `${title} summary`, tier: "official", system, tags: [], ...over });

test("index paths map to galaxy node ids by dropping the plural on the first segment", () => {
  assert.equal(nodeIdOf("objects/table/18"), "object/table/18");
  assert.equal(nodeIdOf("topics/business-central/finance"), "topic/business-central/finance");
  assert.equal(nodeIdOf("localizations/be"), "localization/be");
  assert.equal(nodeIdOf("videos/abc"), "video/abc");
});

test("hits split into stars, star-less pages counted per system, best first; an exact object reference wins", () => {
  const rows = [
    row("objects/table/18", "object", 'Table 18 "Customer"', "sales"),
    row("objects/table/1800", "object", 'Table 1800 "Customer Ledger Setup"', "sales"),
    row("topics/bc/sales/customers", "topic", "Manage customers", "sales"),
    row("videos/v1", "video", "Customer card deep dive", "sales"),
    row("objects/codeunit/80", "object", 'Codeunit 80 "Sales-Post"', "sales"),
  ];
  const stars = new Set(["object/table/18", "topic/bc/sales/customers"]);
  const h = hitsFor(rows, "table 18", (id) => stars.has(id));
  assert.equal(h.ids[0], "object/table/18", "the exact reference scores highest");
  const c = hitsFor(rows, "customer", (id) => stars.has(id));
  assert.deepEqual(c.ids.sort(), ["object/table/18", "topic/bc/sales/customers"]);
  assert.deepEqual(c.pages.map((r) => r.path).sort(), ["objects/table/1800", "videos/v1"]);
  assert.deepEqual(c.reach, { sales: 2 });
  assert.equal(c.total, 4);
  assert.equal(hitsFor(rows, "zzz", () => true).total, 0);
});
