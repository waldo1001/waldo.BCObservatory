/** D89: the object page's reading aids without the DOM (site/src/scripts/object-page-core.ts). */
import assert from "node:assert/strict";
import { test } from "node:test";
import { currentSection, sectionCount, tocWanted } from "../../site/src/scripts/object-page-core.js";

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
