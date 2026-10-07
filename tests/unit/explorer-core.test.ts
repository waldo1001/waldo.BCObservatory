import { test } from "node:test";
import assert from "node:assert/strict";
import {
  edgeStyle, groupBySystem, keyOf, objectTitle, parseState, placeArc, placeFan, placePills, placeSide, primaryKind, rankKeys, serialiseState, sortRows, step, topKeys, type RingRow,
} from "../../site/src/scripts/explorer-core.js";

const rows: RingRow[] = [
  ["table/3", "table_relation", "out", ["Payment Terms Code"]],
  ["table/92", "table_relation", "out", ["Customer Posting Group"]],
  ["table/36", "table_relation", "in", ["Bill-to Customer No.", "Sell-to Customer No."]],
  ["table/36", "calc_formula", "in", []],
  ["table/9", "table_relation", "out", ["Country/Region Code"]],
];

test("explorer: most connected first (distinct relations), ties by key; a relation without a field counts once", () => {
  const r = rankKeys(rows);
  assert.deepEqual(r.map((x) => [x.key, x.weight]), [["table/36", 3], ["table/3", 1], ["table/9", 1], ["table/92", 1]]);
  assert.deepEqual(topKeys(rows, 2), ["table/36", "table/3"]);
  const many: RingRow[] = Array.from({ length: 12 }, (_, i) => [`table/${100 + i}`, "table_relation", "in", i < 3 ? ["a", "b"] : ["a"]]);
  assert.equal(topKeys(many).length, 7, "never more than 7 per ring side");
  assert.deepEqual(topKeys(many).slice(0, 3), ["table/100", "table/101", "table/102"]);
});

test("explorer: rows sort by neighbour rank, the heaviest kind of a neighbour first; its edge is drawn in that kind", () => {
  assert.deepEqual(sortRows([...rows]).map((r) => `${r[0]} ${r[1]}`), ["table/36 table_relation", "table/36 calc_formula", "table/3 table_relation", "table/9 table_relation", "table/92 table_relation"]);
  assert.equal(primaryKind(rows.filter((r) => r[0] === "table/36")), "table_relation");
  assert.equal(edgeStyle("calc_formula"), "dotted");
  assert.equal(edgeStyle("lookup_page"), "dashed");
  assert.equal(edgeStyle("extends"), "double");
  assert.equal(edgeStyle("something new"), "solid");
});

test("explorer: a side holds at most 7, top to bottom, right of the divider points out and left points in", () => {
  const cx = 450, cy = 420, r = 160;
  const right = placeSide(9, "right", cx, cy, r), left = placeSide(3, "left", cx, cy, r);
  assert.equal(right.length, 7);
  for (const p of right) { assert.ok(p.x > cx); assert.ok(Math.abs(Math.hypot(p.x - cx, p.y - cy) - r) < 1e-9); }
  for (const p of left) assert.ok(p.x < cx);
  for (let i = 1; i < right.length; i++) assert.ok(right[i].y > right[i - 1].y, "top to bottom");
  assert.ok(Math.abs(right[0].a + 60) < 1e-9 && Math.abs(right[6].a - 60) < 1e-9, "within 60 degrees of the axis");
  assert.ok(Math.abs(placeSide(1, "left", cx, cy, r)[0].y - cy) < 1e-9, "a single node sits on the axis");
  const pills = placePills(cx, cy, 260);
  assert.ok(pills.pages.x > cx && pills.subscribers.x < cx && Math.abs(pills.extensions.x - cx) < 1e-9 && pills.extensions.y > cy);
  const arc = placeArc(3, cx, cy, 260);
  assert.ok(arc.every((p) => p.y < cy) && arc[0].x < arc[1].x && arc[1].x < arc[2].x);
  const fan = placeFan(2, 0, cx, cy, 250);
  assert.ok(fan.every((p) => p.x > cx + 240), "the fan sits beyond the ring at the neighbour's angle");
});

test("explorer: grouping by system, biggest first; arrow keys wrap", () => {
  const g = groupBySystem(rows, (r) => (r[0] === "table/36" ? "sales" : "finance"));
  assert.deepEqual(g.map(([s, list]) => [s, list.length]), [["finance", 3], ["sales", 2]]);
  assert.equal(step(7, 6, 1), 0);
  assert.equal(step(7, 0, -1), 6);
  assert.equal(step(0, 0, 1), -1);
});

test("explorer: URL state round-trips and rejects junk", () => {
  const st = parseState("?o=table/18&s=sales&mode=events&v=30");
  assert.deepEqual(st, { o: "table/18", s: "sales", mode: "events", v: "30" });
  assert.equal(serialiseState(st), "?o=table/18&s=sales&mode=events&v=30");
  assert.deepEqual(parseState("?o=table%2F18&mode=x&v=thirty&s=<b>"), { o: "table/18", s: null, mode: "relations", v: null });
  assert.deepEqual(parseState(""), { o: null, s: null, mode: "relations", v: null });
  assert.equal(serialiseState({ o: null, s: null, mode: "relations", v: "29" }), "?mode=relations&v=29");
  assert.equal(parseState(serialiseState({ o: "interface/my name", s: null, mode: "relations", v: null })).o, null, "keys with spaces are not object keys");
});

test("explorer: form keys and titles", () => {
  assert.equal(keyOf("table", " 18 "), "table/18");
  assert.equal(keyOf("table", "Customer"), null);
  assert.equal(objectTitle(["table", 18, "Customer", "sales"]), 'Table 18 "Customer"');
  assert.equal(objectTitle(["interface", null, "Price Calculation", "sales"]), 'Interface "Price Calculation"');
});
