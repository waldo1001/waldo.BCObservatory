import { test } from "node:test";
import assert from "node:assert/strict";
import { findObjects } from "../../site/src/scripts/palette.js";

type Row = [string, string, number | null, string, string | null, string | null, string | null, ...unknown[]];
const rows: Row[] = [
  ["table/18", "table", 18, "Customer", "Base Application", "Microsoft.Sales.Customer", null],
  ["table/1800", "table", 1800, "Customer Ledger Setup", "Base Application", null, null],
  ["page/21", "page", 21, "Customer Card", "Base Application", null, null],
  ["page/22", "page", 22, "Customer List", "Base Application", null, null],
  ["codeunit/80", "codeunit", 80, "Sales-Post", "Base Application", null, null],
  ["table/36", "table", 36, "Sales Header", "Base Application", null, "Pending"],
  ["interface/i-price-calc", "interface", null, "I Price Calc", "Base Application", null, null],
];
const pks = (q: string, f?: Record<string, string[]>) => findObjects(rows, q, f).map((h) => h.row[0]);

test("type + id: exact first, then ids starting with the digits; abbreviations", () => {
  assert.deepEqual(pks("t18"), ["table/18", "table/1800"]);
  assert.deepEqual(pks("table 18"), ["table/18", "table/1800"]);
  assert.deepEqual(pks("cu 80"), ["codeunit/80"]);
  assert.deepEqual(pks("p21"), ["page/21"]);
});

test("names rank with the shared scorer (D86): the exact name first, then the names that start with it; a type word narrows; one typo forgiven", () => {
  assert.deepEqual(pks("customer"), ["table/18", "table/1800", "page/21", "page/22"], "table 0.3 above page 0.2 among equal starts");
  assert.deepEqual(pks("custmer"), ["table/18", "table/1800", "page/21", "page/22"]);
  assert.match(findObjects(rows, "custmer")[0].note ?? "", /matched "customer"/);
  assert.deepEqual(pks("table"), ["table/18", "table/1800", "table/36"], "a type word alone lists the type");
  assert.deepEqual(pks("page customer"), ["page/21", "page/22"]);
  assert.deepEqual(pks("customer list"), ["page/22"]);
  assert.deepEqual(pks("post"), ["codeunit/80"]);
  assert.deepEqual(pks("zzz"), []);
});

test("field: queries list the objects that have the field, exact name first", () => {
  const fields = { "posting date": ["table/36", "page/21"], "posting date filter": ["table/18"], "no.": ["table/18", "table/36"] };
  assert.deepEqual(pks("field:posting date", fields), ["page/21", "table/36", "table/18"]);
  assert.deepEqual(findObjects(rows, "field:no.", fields).map((h) => h.note), ['field "no."', 'field "no."']);
  assert.deepEqual(pks("field:posting date"), [], "without the field index there is nothing to list yet");
});

test("the palette reads the shared index's object records: references with the ids that start with the digits, names, fields (D86 2.2)", async () => {
  const { pageToRecord, prepare } = await import("@bc-observatory/search");
  const { paletteHits } = await import("../../site/src/scripts/palette.js");
  const o = (pk: string, id: number, name: string, over: Record<string, unknown> = {}) => ({ path: `objects/${pk}`, type: "object", title: `${pk.startsWith("table") ? "Table" : "Page"} ${id} "${name}"`, summary: "", tier: "official", object_type: pk.split("/")[0], object_id: id, name, app: "Base Application", namespace: "Microsoft.Sales.Customer", ...over });
  const index = prepare([o("table/18", 18, "Customer", { inbound: 300 }), o("table/1800", 1800, "Customer Ledger Setup"), o("page/21", 21, "Customer Card"), o("table/18-be", 18, "Customer", { country: "be", app: "BE layer", title: 'Table 18 "Customer" (BE)' }),
    { path: "topics/x", type: "topic", title: "Customer topics", summary: "", tier: "official" }].map(pageToRecord));
  assert.deepEqual(paletteHits(index, "t18").map((h) => h.href), ["objects/table/18", "objects/table/18-be", "objects/table/1800"]);
  assert.deepEqual(paletteHits(index, "customer").map((h) => h.href).slice(0, 2), ["objects/table/18", "objects/table/18-be"], "objects only, the base first");
  assert.equal(paletteHits(index, "t18")[0].sub, "Base Application · Microsoft.Sales.Customer");
  assert.deepEqual(paletteHits(index, "field:posting", { "posting date": ["page/21"] }).map((h) => [h.href, h.note]), [["objects/page/21", 'field "posting date"']]);
});
