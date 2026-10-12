import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { CANVAS_FONT, CAPTION_MAX_COVER, captionSpot, dominantSystem, labelAlpha, ranksByGroup, smoothstep, threshold, visibleLabels } from "../../site/src/scripts/galaxy-labels.js";

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

test("captionSpot: the spot around the star that covers the fewest other stars, else it gives way (D92)", () => {
  const view = { x0: 0, y0: 0, x1: 1000, y1: 1000 }, star = { x: 100, y: 100, d: 10 }, w = 80;
  const sq = (x: number, y: number) => ({ x, y, w: 10, h: 10 });
  assert.equal(CAPTION_MAX_COVER, 1);
  const right = { box: { x: 111, y: 90, w: 80, h: 20 }, spot: 0, cover: 0 };
  assert.deepEqual(captionSpot(star, w, view, [], []), right, "nothing around: today's right spot");
  assert.deepEqual(captionSpot(star, w, view, [], [sq(95, 95)]), right, "its own dot is not a neighbour");
  const left = captionSpot(star, w, view, [], [sq(130, 95)]);
  assert.deepEqual(left, { box: { x: 9, y: 90, w: 80, h: 20 }, spot: 1, cover: 0 }, "a star on the right: left");
  assert.deepEqual(captionSpot(star, w, view, [], [sq(130, 95), sq(50, 95)]), { box: { x: 60, y: 109, w: 80, h: 20 }, spot: 2, cover: 0 }, "stars right and left: below");
  const crowd = [sq(120, 95), sq(160, 95), sq(20, 95), sq(60, 95), sq(70, 112), sq(110, 112), sq(70, 75), sq(110, 75)];
  assert.equal(captionSpot(star, w, view, [], crowd), null, "two stars in every spot: the caption gives way");
  assert.deepEqual(captionSpot(star, w, view, [], crowd, 2), { box: { x: 111, y: 90, w: 80, h: 20 }, spot: 0, cover: 2 }, "maxCover 2: the first spot");
  assert.equal(captionSpot(star, w, view, [{ x: 105, y: 85, w: 100, h: 30 }], [])?.spot, 1, "a taken box on the right");
  assert.equal(captionSpot(star, w, view, [], [], 1, 1)?.spot, 1, "a tie goes to last frame's spot");
  assert.equal(captionSpot(star, w, view, [], [], 1, 3)?.spot, 3, "any spot can be last frame's");
  assert.deepEqual(captionSpot({ x: 990, y: 500, d: 10 }, w, view, [], [])?.box, { x: 899, y: 490, w: 80, h: 20 }, "the right spot leaves the view");
  assert.equal(captionSpot(star, 2000, view, [], []), null, "no spot inside the view");
  assert.deepEqual(captionSpot(star, w, view, [], [sq(191, 95)]), right, "boxes that only touch do not overlap");
  assert.equal(captionSpot(star, w, view, [], crowd, Infinity)?.spot, 0, "a forced caption takes the least covered spot whatever it covers");
  // a big neighbour that overlaps the star (and holds its centre) is a neighbour, not its own dot
  assert.deepEqual(captionSpot(star, w, view, [], [sq(95, 95), { x: 80, y: 88, w: 26, h: 26 }])?.spot, 0, "the overlapping square blocks left, below and above");
  assert.equal(captionSpot(star, w, view, [], [{ x: 80, y: 88, w: 26, h: 26 }, sq(130, 95)], 0), null, "with right taken too, nothing is free of stars");
});

test("visibleLabels: a plot label is drawn only where it hits no taken box and no label kept before it (D92)", () => {
  assert.deepEqual(visibleLabels([{ x: 0, y: 0, w: 50, h: 11 }, { x: 40, y: 0, w: 50, h: 11 }, { x: 200, y: 0, w: 50, h: 11 }], [{ x: 190, y: 0, w: 30, h: 20 }]), [0]);
  assert.deepEqual(visibleLabels([{ x: 0, y: 0, w: 50, h: 11 }, { x: 40, y: 20, w: 50, h: 11 }, { x: 50, y: 0, w: 50, h: 11 }], []), [0, 1, 2], "touching is not overlapping");
  assert.deepEqual(visibleLabels([], [{ x: 0, y: 0, w: 1, h: 1 }]), []);
});

test("canvas fonts are literal families: a canvas font cannot resolve var() (D92)", () => {
  for (const f of Object.values(CANVAS_FONT)) assert.ok(!f.includes("var("), f);
  assert.match(CANVAS_FONT.plot, /^400 10px 'JetBrains Mono'/);
  assert.match(CANVAS_FONT.caption, /^600 12px 'Bricolage Grotesque Variable'/);
  const src = readFileSync(new URL("../../site/src/scripts/galaxy.ts", import.meta.url), "utf8");
  const bad = [...src.matchAll(/\.font\s*=\s*(["'`])((?:(?!\1).)*)\1/g)].filter((m) => m[2].includes("var(")).map((m) => m[0]);
  assert.deepEqual(bad, [], "no .font = assignment in galaxy.ts takes var()");
});
