import { test } from "node:test";
import assert from "node:assert/strict";
import { layoutSecond, secondRing, type ShardEntry } from "../../site/src/scripts/neighbourhood-core.js";

const first = [{ key: "table/18", x: 600, y: 210 }, { key: "table/36", x: 160, y: 210 }];
const shards: Record<string, ShardEntry[]> = {
  "table/18": [["table/9", 0, 5], ["page/21", 2, 3], ["table/36", 1, 2], ["codeunit/1", 0, 1], ["table/27", 0, 2], ["table/5", 0, 1], ["table/6", 0, 1]],
  "table/36": [["table/9", 0, 4], ["table/18", 1, 9], ["page/42", 2, 6]],
};

test("2 hops: the centre and the first ring are never repeated; a shared neighbour shows once under its strongest tie", () => {
  const s = secondRing("table/3", first, shards);
  const keys = s.map((x) => x.key);
  assert.ok(!keys.includes("table/18") && !keys.includes("table/36"), "first-hop objects are not drawn again");
  assert.equal(keys.filter((k) => k === "table/9").length, 1);
  const nine = s.find((x) => x.key === "table/9")!;
  assert.deepEqual([nine.parent, nine.weight], ["table/18", 9], "drawn under table/18 (weight 5 beats 4), both paths add up");
  assert.equal(s[0].key, "table/9", "heaviest first");
});

test("2 hops: at most perParent under one parent and cap in all", () => {
  const s = secondRing("table/3", first, shards, 60, 4);
  assert.equal(s.filter((x) => x.parent === "table/18").length, 4);
  assert.equal(secondRing("table/3", first, shards, 2).length, 2);
});

test("2 hops: children sit on the outer ring at their parent's angle", () => {
  const cx = 380, cy = 210, R2 = 260;
  const p = layoutSecond(secondRing("table/3", first, shards), first, cx, cy, R2);
  for (const x of p) {
    const parent = first.find((f) => f.key === x.parent)!;
    assert.equal(Math.sign(x.x - cx), Math.sign(parent.x - cx), "same side as the parent");
    assert.ok(Math.abs(Math.hypot(x.x - cx, (x.y - cy) / 0.9) - R2) < 1e-6, "on the outer ring");
  }
});
