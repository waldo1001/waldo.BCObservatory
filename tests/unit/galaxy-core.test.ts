import { test } from "node:test";
import assert from "node:assert/strict";
import { landedRingsOn, parseHash, portSpot, sortRows } from "../../site/src/scripts/galaxy-core.js";

test("galaxy hash: combined keys, the old single-key form, unknown keys dropped", () => {
  assert.deepEqual([...parseHash("#system=finance&lens=version%3A30")], [["system", "finance"], ["lens", "version:30"]]);
  assert.deepEqual([...parseHash("#star=object%2Ftable%2F18")], [["star", "object/table/18"]]);
  assert.deepEqual([...parseHash("#evil=1&view=list")], [["view", "list"]]);
  assert.equal(parseHash("").size, 0);
});

test("ports sit on the rectangle's edge in the target's direction", () => {
  const r = { x0: 0, y0: 0, x1: 100, y1: 50 };
  assert.deepEqual(portSpot({ x: 50, y: 25 }, { x: 500, y: 25 }, r), { x: 100, y: 25 });
  assert.deepEqual(portSpot({ x: 50, y: 25 }, { x: 50, y: -400 }, r), { x: 50, y: 0 });
  assert.deepEqual(portSpot({ x: 50, y: 25 }, { x: 60, y: 25 }, r), { x: 100, y: 25 }, "a target inside still gets an edge port");
});

test("list view sort: numbers highest first, names A to Z, ties stable", () => {
  const rows = [
    { id: "b", label: "Table 2", type: "object", group: "sales", weight: 5, ev: 1, cv: ["29"] },
    { id: "a", label: "Table 10", type: "object", group: "finance", weight: 9 },
    { id: "c", label: "GL hub", type: "topic", group: "finance", weight: 5, ev: 7, cv: ["30"] },
  ];
  assert.deepEqual(sortRows(rows, "connections").map((r) => r.id), ["a", "c", "b"]);
  assert.deepEqual(sortRows(rows, "star").map((r) => r.id), ["c", "b", "a"]);
  assert.deepEqual(sortRows(rows, "evidence").map((r) => r.id), ["c", "b", "a"]);
  assert.deepEqual(sortRows(rows, "changed").map((r) => r.id), ["c", "b", "a"]);
});

test("landed rings draw only under the this-week lens (D71)", () => {
  assert.equal(landedRingsOn("landed"), true);
  for (const id of ["version:30", "q:sift", "type:topic", "", null, undefined]) assert.equal(landedRingsOn(id), false, String(id));
});
