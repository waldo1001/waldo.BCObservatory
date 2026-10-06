import { test } from "node:test";
import assert from "node:assert/strict";
import { dominantSystem, labelAlpha, ranksByGroup, smoothstep, threshold } from "../../site/src/scripts/galaxy-labels.js";

test("labelAlpha: 0 at the threshold, 1 at 1.3x, monotonic between; a step at 1.15x under reduced motion", () => {
  const t = 0.8;
  assert.equal(labelAlpha(t, t), 0);
  assert.equal(labelAlpha(1.3 * t, t), 1);
  assert.equal(labelAlpha(0.5 * t, t), 0);
  let prev = 0;
  for (let z = t; z <= 1.3 * t + 1e-9; z += 0.01 * t) { const a = labelAlpha(z, t); assert.ok(a >= prev - 1e-12, `monotonic at ${z}`); prev = a; }
  assert.ok(labelAlpha(1.15 * t, t) > 0.4 && labelAlpha(1.15 * t, t) < 0.6, "half way at the middle of the window");
  assert.equal(labelAlpha(1.14 * t, t, true), 0);
  assert.equal(labelAlpha(1.16 * t, t, true), 1);
  assert.equal(smoothstep(0, 1, 0.5), 0.5);
});

test("threshold grows with rank: the first caption by 2x galaxy zoom, five by system zoom, forty need about 3.3x", () => {
  assert.equal(threshold(0), 0.2);
  assert.ok(threshold(0) * 1.3 <= 0.13 * 2, "rank 0 full by 2x galaxy zoom (large systems sit at zs 0.13 at fit)");
  assert.ok(threshold(4) * 1.3 <= 1, `rank 4 full at system zoom (${threshold(4) * 1.3})`);
  assert.ok(threshold(6) * 1.3 > 1);
  assert.ok(threshold(40) > 3.2 && threshold(40) < 3.4);
  for (let r = 1; r < 60; r++) assert.ok(threshold(r) > threshold(r - 1));
});

test("dominantSystem: none at fit scale, the centred system once zoomed to 0.9x its own scale, none when it is off screen", () => {
  const systems = [{ id: "a", x: 0, y: 0, r: 100 }, { id: "b", x: 1000, y: 0, r: 100 }];
  const view = { x0: 0, y0: 0, x1: 1000, y1: 600 };
  const sysScale = () => 2; // a system fills its share at cam.s = 2
  assert.equal(dominantSystem(systems, { s: 0.5, tx: 500, ty: 0, vx: 500, vy: 300 }, view, sysScale), null);
  assert.equal(dominantSystem(systems, { s: 1.8, tx: 0, ty: 0, vx: 500, vy: 300 }, view, sysScale)?.id, "a");
  assert.equal(dominantSystem(systems, { s: 1.8, tx: 1000, ty: 0, vx: 500, vy: 300 }, view, sysScale)?.id, "b");
  // a is centred but b is nearer the view centre? no: camera on a, b is 1800px right, off screen
  assert.equal(dominantSystem(systems, { s: 1.8, tx: -2000, ty: 0, vx: 500, vy: 300 }, view, sysScale), null);
});

test("ranksByGroup: heaviest first within each group, stable on ties", () => {
  const r = ranksByGroup([{ id: "x", group: "g", weight: 1 }, { id: "y", group: "g", weight: 5 }, { id: "z", group: "h", weight: 1 }, { id: "w", group: "g", weight: 1 }]);
  assert.deepEqual([r.get("y"), r.get("w"), r.get("x"), r.get("z")], [0, 1, 2, 0]);
});
