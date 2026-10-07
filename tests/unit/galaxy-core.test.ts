import { test } from "node:test";
import assert from "node:assert/strict";
import { landedRingsOn, parseHash, portSpot, sortRows, versionMenu } from "../../site/src/scripts/galaxy-core.js";

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

test("versionMenu: newest first, remembered = active ?? newest, vNext from config, title falls back (D72)", () => {
  const majors = { "28": { label: "2026 release wave 1 (BC28)" }, "29": { label: "2026 release wave 2 (BC29)" }, "30": { label: "2027 release wave 1 (BC30, vNext)", vnext: true }, "31": { label: "future" } };
  const counts = new Map([["24", 129], ["28", 113], ["29", 97], ["30", 27]]);
  const m = versionMenu(["24", "29", "28", "30"], counts, majors, null);
  assert.deepEqual(m.entries.map((e) => e.version), ["30", "29", "28", "24"]);
  assert.equal(m.remembered, "30");
  assert.deepEqual(m.entries.map((e) => e.label), ["BC30 vNext", "BC29", "BC28", "BC24"], "vNext only when flagged");
  assert.deepEqual(m.entries.map((e) => e.title), ["2027 release wave 1 (BC30, vNext)", "2026 release wave 2 (BC29)", "2026 release wave 1 (BC28)", "BC24"], "a major absent from config falls back to BC<v>");
  assert.deepEqual(m.entries.map((e) => [e.id, e.count, e.active]), [["version:30", 27, false], ["version:29", 97, false], ["version:28", 113, false], ["version:24", 129, false]]);
  assert.ok(!m.entries.some((e) => e.version === "31"), "a major config lists but the graph has no change in gets no entry");
  const a = versionMenu(["24", "29", "28", "30"], counts, majors, "28");
  assert.equal(a.remembered, "28");
  assert.deepEqual(a.entries.filter((e) => e.active).map((e) => e.version), ["28"]);
  assert.equal(versionMenu(["9", "10"], new Map(), {}, null).remembered, "10", "numeric order, not lexical");
});

test("versionMenu: an older graph without cv has no version lens (D72)", () => {
  assert.deepEqual(versionMenu([], new Map(), { "30": { label: "x", vnext: true } }, null), { remembered: null, entries: [] });
});
