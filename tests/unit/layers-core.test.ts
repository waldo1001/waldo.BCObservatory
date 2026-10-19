import { test } from "node:test";
import assert from "node:assert/strict";
import { applyZoom, bounds, coreSample, corners, DIM_MISS, DIM_PLANE, fullPlanes, hitMask, inQuad, isHit, markHit, mediaSpot, norm, panBy, planeGeometry, planeOrder, planeRows, plateAt, plotOf, project, restLines, STAR, ZOOM_1, ZOOM_MAX, zoomAt, type LayersFile } from "../../site/src/scripts/layers-core.js";

const f: LayersFile = {
  system: "finance", label: "Finance", x: 0, y: 0, r: 100,
  objects: [
    ["table/17", 40, -10, 2, [0], 1, "be nl", STAR],
    ["table/15", 50, 10, 0, [], 0, "", 0],
    ["table/325", 60, 20, 1, [1], 0, "be", 0],
  ],
  hubs: [["topic/fin/gl", -40, -20, 1], ["topic/fin/vat", -40, 20, 0]],
  media: [["video/v1", "v", [0], "GL in 10 minutes"]],
  countries: { be: 2, nl: 1 },
};

test("planes: four, top to bottom media, hubs, code, countries, all of equal depth, no fold parameter", () => {
  const p = planeGeometry({ x0: 0, y0: 100, x1: 1060, y1: 900 });
  assert.deepEqual(p.map((x) => x.id), ["media", "hubs", "code", "countries"]);
  assert.ok(p.every((x, i) => i === 0 || x.top > p[i - 1].top));
  assert.ok(p.every((x) => x.depth === p[0].depth));
  assert.equal(planeGeometry.length, 1);
});

test("fullPlanes: a pick wins, else the lens's two planes, else all four", () => {
  assert.deepEqual([...fullPlanes(null, null)].sort(), ["code", "countries", "hubs", "media"]);
  assert.deepEqual([...fullPlanes("media", null)], ["media"]);
  assert.deepEqual([...fullPlanes(null, "country")].sort(), ["code", "countries"]);
  assert.deepEqual([...fullPlanes(null, "coverage")].sort(), ["code", "hubs"]);
  assert.deepEqual([...fullPlanes("media", "country")], ["media"]);
  assert.equal(DIM_PLANE, 0.4);
});

test("planeOrder: stars first on code, then the sum of the other columns; countries by object count", () => {
  const code = planeOrder(planeRows(f, "code", (id) => id), "code", (r) => r.label);
  assert.equal(code[0].label, "table/17");
  const cs = planeOrder(planeRows(f, "countries", (id) => id), "countries", (r) => r.label);
  assert.deepEqual(cs.map((r) => r.label), ["BE", "NL"]);
});

const box = { x0: 0, y0: 0, x1: 100, y1: 100 };
test("plateAt finds the plate under a point, also when zoomed", () => {
  const planes = planeGeometry({ x0: 0, y0: 100, x1: 1060, y1: 900 });
  const hubs = planes[1], cs = corners(hubs), cx = cs.reduce((a, c) => a + c.x, 0) / 4, cy = cs.reduce((a, c) => a + c.y, 0) / 4;
  assert.equal(plateAt(planes, cx, cy), "hubs");
  assert.equal(plateAt(planes, -50, cy), null);
  const all = planes.flatMap((p) => corners(p));
  const b = { x0: Math.min(...all.map((c) => c.x)), y0: Math.min(...all.map((c) => c.y)), x1: Math.max(...all.map((c) => c.x)), y1: Math.max(...all.map((c) => c.y)) };
  const z = zoomAt(ZOOM_1, 2, cx, cy, b);
  const at = applyZoom(z, { x: cx, y: cy });
  assert.equal(plateAt(planes, at.x, at.y, z), "hubs");
});

test("zoomAt keeps the anchor, clamps to [1, 8] and returns to ZOOM_1", () => {
  const z2 = zoomAt(ZOOM_1, 2, 50, 50, box);
  assert.deepEqual(z2, { s: 2, x: -50, y: -50 });
  assert.deepEqual(zoomAt(z2, 0.5, 50, 50, box), ZOOM_1);
  assert.equal(zoomAt(z2, 100, 50, 50, box).s, ZOOM_MAX);
  assert.deepEqual(zoomAt(ZOOM_1, 0.5, 50, 50, box), ZOOM_1);
  assert.deepEqual(applyZoom(z2, { x: 50, y: 50 }), { x: 50, y: 50 });
});

test("panBy never pans past the edges", () => {
  const z = { s: 2, x: -50, y: -50 };
  assert.equal(panBy(z, 80, 0, box).x, 0);
  assert.equal(panBy(z, -80, 0, box).x, -100);
});

test("tilt: the same x/y lands on every plane at the same place inside it; the front edge is sheared left", () => {
  const [a, b] = planeGeometry({ x0: 0, y0: 0, x1: 1060, y1: 800 });
  const pa = project(a, 0.5, 0), pb = project(b, 0.5, 0);
  assert.equal(pa.x, pb.x);
  assert.equal(pb.y - pa.y, b.top - a.top);
  const [bl, , , fl] = corners(a);
  assert.ok(fl.x < bl.x && fl.y > bl.y);
});

test("core sample: an object brings its hubs, their media and its countries; a country brings what it replaces", () => {
  assert.deepEqual(coreSample(f, { plane: "code", i: 0 }), { media: new Set([0]), hubs: new Set([0]), objects: new Set([0]), countries: new Set(["be", "nl"]) });
  const be = coreSample(f, { plane: "countries", i: 0, code: "be" });
  assert.deepEqual([...be.objects].sort(), [0, 2]);
  assert.deepEqual([...be.hubs].sort(), [0, 1]);
  assert.deepEqual([...coreSample(f, { plane: "media", i: 0 }).objects], [0]);
});

test("lines at rest come from the stars only; the list per plane counts the other planes", () => {
  const lines = restLines(f);
  assert.deepEqual(lines.map((l) => l.kind).sort(), ["mentions", "names", "replaces"]);
  assert.ok(lines.every((l) => l.kind === "mentions" || l.to.i === 0 || l.from.i === 0), "table/15 and table/325 are not stars");
  const code = planeRows(f, "code", (id) => id);
  assert.deepEqual(code[0].cols, { media: 1, hubs: 1, countries: 2 });
  assert.deepEqual(code[1].cols, { media: 0, hubs: 0, countries: 0 }, "no line up: a zero, not a missing value");
  assert.deepEqual(planeRows(f, "countries", (id) => id).map((r) => [r.label, r.cols.code]), [["BE", 2], ["NL", 1]]);
  assert.deepEqual(mediaSpot(f, 0).x !== undefined, true);
});

// D100: a search on the tilted planes
const hits = new Set(["object/table/15", "topic/fin/vat", "video/v1", "localization/nl", "object/table/999", "change/bcapps/1"]);

test("hitMask: each thing by its own page; ids not on the planes are ignored", () => {
  assert.deepEqual(hitMask(f, hits), { media: [true], hubs: [false, true], code: [false, true, false], countries: new Set(["nl"]), n: { media: 1, hubs: 1, code: 1, countries: 1 } });
  assert.equal(DIM_MISS, 0.3);
});

test("isHit and markHit: countries by code, a countries mark by every country replacing its object", () => {
  const m = hitMask(f, hits);
  assert.equal(isHit(m, { plane: "code", i: 1 }), true);
  assert.equal(isHit(m, { plane: "code", i: 0 }), false);
  assert.equal(isHit(m, { plane: "countries", i: 0, code: "be" }), false);
  assert.equal(isHit(m, { plane: "countries", i: 1, code: "nl" }), true);
  assert.equal(markHit(m, f, 0), true, "table/17 is replaced by be and nl");
  assert.equal(markHit(m, f, 2), false, "table/325 only by be");
  assert.equal(markHit(m, f, 1), false, "table/15 by no country");
});

test("filtering the list per plane by the mask keeps only the hits", () => {
  const m = hitMask(f, hits);
  assert.deepEqual(planeRows(f, "countries", (id) => id).filter((r) => isHit(m, r.thing)).map((r) => r.label), ["NL"]);
  assert.deepEqual(planeRows(f, "code", (id) => id).filter((r) => isHit(m, r.thing)).map((r) => r.label), ["table/15"]);
});

test("hitMask of no hits: nothing lit, every count 0", () => {
  const m = hitMask(f, new Set());
  assert.deepEqual([m.media, m.hubs, m.code], [[false], [false, false], [false, false, false]]);
  assert.equal(m.countries.size, 0);
  assert.deepEqual(m.n, { media: 0, hubs: 0, code: 0, countries: 0 });
});

test("level of detail: planes span the system's extent; objects find their plot; tiles are hit by point", () => {
  const b = bounds(f);
  const left = norm(b, -40, 0), right = norm(b, 60, 0);
  assert.ok(left.u < -0.9 && right.u > 0.9, "hubs at the left edge, objects at the right edge of the plane");
  const plots: [string, number, number, number, number, number][] = [["Finance.GL", 30, -20, 25, 35, 2], ["Finance.VAT", 55, 15, 10, 10, 1]];
  assert.deepEqual([plotOf(plots, 40, -10), plotOf(plots, 60, 20), plotOf(plots, 0, 0)], [0, 1, -1]);
  const quad = [{ x: 0, y: 0 }, { x: 10, y: 0 }, { x: 8, y: 5 }, { x: -2, y: 5 }];
  assert.equal(inQuad(quad, 4, 2), true);
  assert.equal(inQuad(quad, 11, 2), false);
});
