/** D89: the object page's reading aids without the DOM (site/src/scripts/object-page-core.ts). */
import assert from "node:assert/strict";
import { test } from "node:test";
import {
  clampColumns, currentSection, listItemName, orderLabel, orderOptions, parsePill, revealPlan, rowMatches, sectionCount, sortOrder, tocWanted, visibleRows,
  type Change, type RowFacts,
} from "../../site/src/scripts/object-page-core.js";

const D = (version: number): Change => ({ sym: "Δ", version });

test("tocWanted (B1): six sections, or three and a main column over four screens", () => {
  assert.equal(tocWanted(19, 41384, 900), true);
  assert.equal(tocWanted(6, 500, 900), true);
  assert.equal(tocWanted(5, 3000, 900), false);
  assert.equal(tocWanted(5, 3700, 900), true);
  assert.equal(tocWanted(2, 99999, 900), false);
});

test("sectionCount (B1): the heading's number, else the table rows, else the items with 'and n more' counted as n", () => {
  assert.equal(sectionCount({ small: "311 connected objects and pages" }), 311);
  assert.equal(sectionCount({ small: "1 sources" }), 1);
  assert.equal(sectionCount({ small: "1,234 sources" }), 1234);
  assert.equal(sectionCount({ small: "obsolete pending since 26.0" }), null);
  assert.equal(sectionCount({ rows: 165 }), 165);
  assert.equal(sectionCount({ rows: 0 }), null);
  const fifty = Array.from({ length: 50 }, () => "x");
  assert.equal(sectionCount({ items: [...fifty, "and 120 more objects (133 fields): data/code/relations/29.json"] }), 170);
  assert.equal(sectionCount({ items: ["Page 21", "and 3 more pages", "Codeunit 5 (codeunit runs on it)"] }), 5);
  assert.equal(sectionCount({}), null);
});

test("currentSection (B1): the last heading above the line, the first before any, the last at the bottom", () => {
  assert.equal(currentSection([-900, -10, 300, 1200], 225, false), 1);
  assert.equal(currentSection([400, 900], 225, false), 0);
  assert.equal(currentSection([-5000, -3000, 100, 400], 225, true), 3);
});

test("rowMatches (B2): case-insensitive, whitespace collapsed, every word somewhere in the row", () => {
  assert.equal(rowMatches("Sell-to  Customer No.", "SELL-TO customer"), true);
  assert.equal(rowMatches("Name Text[100]", "code"), false);
  assert.equal(rowMatches("anything", "  "), true);
  assert.equal(rowMatches("20 Credit Limit (LCY) Decimal", "limit 20"), true);
});

test("listItemName (B2): the signature up to '(', else the text up to ' subscribes to ' or ':'", () => {
  assert.equal(listItemName('OnAfterPostSalesDoc(var SalesHeader: Record "Sales Header")', ""), "OnAfterPostSalesDoc");
  assert.equal(listItemName(null, 'CustomerOnAfterDelete subscribes to table "Customer" OnAfterDeleteEvent'), "CustomerOnAfterDelete");
  assert.equal(listItemName(null, "Key1: No. (clustered)"), "Key1");
});

test("clampColumns (B2): the long-text columns by header, 'item' for the lists, null where nothing clamps", () => {
  assert.deepEqual(clampColumns("fields", ["No.", "Name", "Type", "Explanation", "Notes"]), [3, 4]);
  assert.deepEqual(clampColumns("fields-on-this-page", ["Group", "Control", "Shows", "ToolTip"]), [2, 3]);
  assert.deepEqual(clampColumns("actions", ["Group", "Action", "ToolTip", "Runs"]), [2]);
  assert.equal(clampColumns("procedures", []), "item");
  assert.equal(clampColumns("events-published", []), "item");
  assert.equal(clampColumns("values", ["Ordinal", "Name", "Caption", "Notes"]), null);
  assert.equal(clampColumns("keys", []), null);
  assert.equal(clampColumns("unknown", []), null);
});

test("orderOptions (B2): the section's orders, 'changed' only with a change; none for grouped tables and keys", () => {
  assert.deepEqual(orderOptions("fields", true), ["source", "no", "name", "type", "changed"]);
  assert.deepEqual(orderOptions("fields", false), ["source", "no", "name", "type"]);
  assert.deepEqual(orderOptions("procedures", false), ["source", "name"]);
  assert.deepEqual(orderOptions("keys", true), []);
  assert.deepEqual(orderOptions("unknown", true), []);
  assert.equal(orderLabel("fields", "no"), "No.");
  assert.equal(orderLabel("values", "no"), "Ordinal");
  assert.equal(orderLabel("procedures", "changed"), "Changed in, newest first");
});

test("sortOrder (B2): a stable permutation by number, name, type (numeric) or newest change", () => {
  const rows: RowFacts[] = [
    { no: 3, name: "Search Name", type: "Code[100]", changes: [D(26), D(27)] },
    { no: 1, name: "No.", type: "Code[20]", changes: [D(25), D(26)] },
    { no: 20, name: "Credit Limit (LCY)", type: "Decimal", changes: [D(26), D(28)] },
    { no: 2, name: "Name", type: "Text[100]", changes: [] },
  ];
  assert.deepEqual(sortOrder(rows, "source"), [0, 1, 2, 3]);
  assert.deepEqual(sortOrder(rows, "no"), [1, 3, 0, 2]);
  assert.deepEqual(sortOrder(rows, "name"), [2, 3, 1, 0]);
  assert.deepEqual(sortOrder(rows, "type"), [1, 0, 2, 3]);
  assert.deepEqual(sortOrder(rows, "changed"), [2, 0, 1, 3]);
  const same: RowFacts[] = [
    { no: null, name: "b", type: "Integer", changes: [D(26)] }, { no: 5, name: "a", type: "Integer", changes: [] },
    { no: null, name: "b", type: "Integer", changes: [D(26)] }, { no: 1, name: "B", type: "Integer", changes: [] },
  ];
  assert.deepEqual(sortOrder(same, "type"), [0, 1, 2, 3], "equal keys keep their source order");
  assert.deepEqual(sortOrder(same, "name"), [1, 0, 2, 3], "case is not a difference");
  assert.deepEqual(sortOrder(same, "no"), [3, 1, 0, 2], "rows without a number last, in source order");
  assert.deepEqual(sortOrder(same, "changed"), [0, 2, 3, 1], "unchanged rows last, then by number");
});

test("visibleRows (B2, B3): the filter and the version chip together", () => {
  const rows = [
    { text: "1 No. Δ BC25 Δ BC26 Code[20] Specifies the number", changes: [D(25), D(26)] },
    { text: "2 Name Text[100] Specifies the name", changes: [] },
    { text: "20 Credit Limit (LCY) Δ BC26 Δ BC28 Decimal Specifies the maximum", changes: [D(26), D(28)] },
  ];
  assert.deepEqual(visibleRows(rows, "", null), [true, true, true]);
  assert.deepEqual(visibleRows(rows, "specifies the n", null), [true, true, false]);
  assert.deepEqual(visibleRows(rows, "", 26), [true, false, true]);
  assert.deepEqual(visibleRows(rows, "credit", 25), [false, false, false]);
});

test("revealPlan (D86): a hidden row clears whatever is set; a compact section opens the row", () => {
  assert.deepEqual(revealPlan({ query: "zzz", version: null, matchesQuery: false, matchesVersion: true, clamped: true }), { clearQuery: true, clearVersion: false, openRow: true });
  assert.deepEqual(revealPlan({ query: "", version: 26, matchesQuery: true, matchesVersion: false, clamped: false }), { clearQuery: false, clearVersion: true, openRow: false });
  assert.deepEqual(revealPlan({ query: "credit", version: 26, matchesQuery: false, matchesVersion: true, clamped: true }), { clearQuery: true, clearVersion: true, openRow: true });
  assert.deepEqual(revealPlan({ query: "", version: null, matchesQuery: true, matchesVersion: true, clamped: false }), { clearQuery: false, clearVersion: false, openRow: false });
});

test("parsePill (B2, B3): the changes of a member pill's text", () => {
  assert.deepEqual(parsePill("Δ BC25 Δ BC26"), [{ sym: "Δ", version: 25 }, { sym: "Δ", version: 26 }]);
  assert.deepEqual(parsePill("+ BC25"), [{ sym: "+", version: 25 }]);
  assert.deepEqual(parsePill("− BC30"), [{ sym: "−", version: 30 }]);
  assert.deepEqual(parsePill("+ BC24 Δ BC26"), [{ sym: "+", version: 24 }, { sym: "Δ", version: 26 }]);
  assert.deepEqual(parsePill(""), []);
});
