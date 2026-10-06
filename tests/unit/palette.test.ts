import { test } from "node:test";
import assert from "node:assert/strict";
import { findObjects } from "../../site/src/scripts/palette.js";

type Row = [string, string, number | null, string, string | null, string | null, string | null];
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

test("names: exact, then prefix, then word, then substring; a type word narrows", () => {
  assert.deepEqual(pks("customer"), ["table/18", "page/21", "page/22", "table/1800"]);
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
