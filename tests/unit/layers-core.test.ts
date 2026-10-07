import { test } from "node:test";
import assert from "node:assert/strict";
import { bounds, coreSample, corners, inQuad, mediaSpot, norm, planeGeometry, planeRows, plotOf, project, restLines, STAR, type LayersFile } from "../../site/src/scripts/layers-core.js";

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

test("planes: four, top to bottom media, hubs, code, countries; a folded plane is a strip", () => {
  const p = planeGeometry({ x0: 0, y0: 100, x1: 1060, y1: 900 });
  assert.deepEqual(p.map((x) => x.id), ["media", "hubs", "code", "countries"]);
  assert.ok(p.every((x, i) => i === 0 || x.top > p[i - 1].top));
  const folded = planeGeometry({ x0: 0, y0: 100, x1: 1060, y1: 900 }, new Set(["media", "countries"]));
  assert.equal(folded[0].depth, 24);
  assert.ok(folded[1].depth > 24);
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
