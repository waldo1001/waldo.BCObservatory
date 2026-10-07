/**
 * The layered view's pure parts (D66, design/HANDOFF.A-layered.md), no canvas and no DOM: the four planes, the fixed
 * tilt transform, the core sample of a focused thing, the lines drawn at rest and the list per plane.
 *
 * Planes, top to bottom on screen: media, topic hubs, code, countries. Every plane uses the flat system's x/y (the
 * D layout), so tilting moves things only from their flat spot to their plane, never sideways inside it.
 */
export interface LayersFile {
  system: string; label: string; x: number; y: number; r: number;
  objects: [string, number, number, number, number[], number, string, number][];
  hubs: [string, number, number, number][];
  /** [media id, v | p, hub indexes, title, source id?] (D73) */
  media: [string, string, number[], string, string?][];
  countries: Record<string, number>;
}
export type PlaneId = "media" | "hubs" | "code" | "countries";
export const PLANES: PlaneId[] = ["media", "hubs", "code", "countries"];
export const PLANE_LABEL: Record<PlaneId, string> = { media: "media", hubs: "topic hubs", code: "code", countries: "countries" };
/** A thing on a plane: an index into that plane's list (countries by code). */
export interface Thing { plane: PlaneId; i: number; code?: string }

/** Object flags (pipeline/link/graph.ts layersFiles). */
export const STAR = 1, OBSOLETE = 2, CHANGED = 4;

export interface Plane { id: PlaneId; top: number; depth: number; left: number; width: number; folded: boolean }
/**
 * Plane rectangles for a canvas area: tokens layers.tilt (760 wide, 130 deep, 120 sheared, 180 apart on a 1060 canvas)
 * scaled to fit; a folded plane is a 24px strip.
 */
export function planeGeometry(area: { x0: number; y0: number; x1: number; y1: number }, folded: Set<PlaneId> = new Set()): Plane[] {
  const steps = PLANES.map((p) => (folded.has(p) ? 40 : 180));
  const k = Math.max(0.3, Math.min((area.x1 - area.x0) / 1060, (area.y1 - area.y0) / (steps.reduce((a, b) => a + b, 0) - 50)));
  const width = 760 * k, left = area.x0 + ((area.x1 - area.x0) - width) / 2 + 60 * k;
  let y = area.y0;
  return PLANES.map((id, i) => {
    const f = folded.has(id), p = { id, top: y, depth: f ? 24 : 130 * k, left, width, folded: f };
    y += steps[i] * k;
    return p;
  });
}

export interface Bounds { cx: number; cy: number; hx: number; hy: number }
/** The extent of everything on the planes (hubs left, objects right in the D layout), so a plane is filled edge to edge. */
export function bounds(f: LayersFile): Bounds {
  const xs = [...f.objects.map((o) => o[1]), ...f.hubs.map((h) => h[1])], ys = [...f.objects.map((o) => o[2]), ...f.hubs.map((h) => h[2])];
  if (!xs.length) return { cx: f.x, cy: f.y, hx: Math.max(1, f.r), hy: Math.max(1, f.r) };
  const x0 = Math.min(...xs), x1 = Math.max(...xs), y0 = Math.min(...ys), y1 = Math.max(...ys);
  return { cx: (x0 + x1) / 2, cy: (y0 + y1) / 2, hx: Math.max(1, (x1 - x0) / 2 * 1.04), hy: Math.max(1, (y1 - y0) / 2 * 1.08) };
}
/** Normalised plane coordinates (-1..1) of a world point. */
export const norm = (b: Bounds, x: number, y: number) => ({ u: (x - b.cx) / b.hx, v: (y - b.cy) / b.hy });
/** Which namespace plot an object sits in (the summary's plots hold every object of the system). */
export function plotOf(plots: [string, number, number, number, number, number][], x: number, y: number): number {
  for (let i = 0; i < plots.length; i++) { const [, px, py, w, h] = plots[i]; if (x >= px - 0.5 && x <= px + w + 0.5 && y >= py - 0.5 && y <= py + h + 0.5) return i; }
  return -1;
}
/** Is a point inside a convex quadrilateral (a projected plot tile)? */
export function inQuad(q: { x: number; y: number }[], x: number, y: number): boolean {
  let sign = 0;
  for (let i = 0; i < q.length; i++) {
    const a = q[i], b = q[(i + 1) % q.length], c = (b.x - a.x) * (y - a.y) - (b.y - a.y) * (x - a.x);
    if (c !== 0) { if (sign && Math.sign(c) !== sign) return false; sign = Math.sign(c); }
  }
  return true;
}

/** The fixed tilt transform (tokens layers.tilt): x' = x - 0.92 * v * depth, y' = top + v * depth, v from 0 at the back to 1 at the front. */
export function project(p: Plane, u: number, v: number): { x: number; y: number } {
  const uu = Math.min(1, Math.max(-1, u)), vv = (Math.min(1, Math.max(-1, v)) + 1) / 2;
  return { x: p.left + ((uu + 1) / 2) * p.width - 0.92 * vv * p.depth, y: p.top + vv * p.depth };
}
/** The plane's four corners (back left, back right, front right, front left). */
export const corners = (p: Plane) => [project(p, -1, -1), project(p, 1, -1), project(p, 1, 1), project(p, -1, 1)];

/** Between the flat spot and the plane spot: tilt 0 = flat, 1 = on the plane. */
export const lerp = (a: { x: number; y: number }, b: { x: number; y: number }, t: number) => ({ x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t });

/** A media item sits beside the first hub it is on, fanned around it so two items never share a spot. */
export function mediaSpot(f: LayersFile, i: number): { x: number; y: number } {
  const [, , hubs] = f.media[i];
  const h = f.hubs[hubs[0] ?? 0];
  if (!h) return { x: f.x, y: f.y };
  const siblings = f.media.map((m, j) => [m, j] as const).filter(([m]) => m[2][0] === hubs[0]).map(([, j]) => j);
  const k = siblings.indexOf(i), a = -Math.PI / 2 + k * (Math.PI / 6), d = f.r * 0.05;
  return { x: h[1] + Math.cos(a) * d, y: h[2] + Math.sin(a) * d };
}

export interface Sample { media: Set<number>; hubs: Set<number>; objects: Set<number>; countries: Set<string> }
/**
 * The core sample of a focused thing: its counterparts on every plane. An object: the hubs whose pages name it, the
 * media on those hubs, the countries replacing it. A hub: the objects it names, its media, their countries. A media
 * item: its hubs and what they name. A country: the objects it replaces and their hubs.
 */
export function coreSample(f: LayersFile, t: Thing): Sample {
  const s: Sample = { media: new Set(), hubs: new Set(), objects: new Set(), countries: new Set() };
  const objectsOfHub = (h: number) => f.objects.map((o, i) => [o, i] as const).filter(([o]) => o[4].includes(h)).map(([, i]) => i);
  const mediaOfHub = (h: number) => f.media.map((m, i) => [m, i] as const).filter(([m]) => m[2].includes(h)).map(([, i]) => i);
  const addObject = (i: number) => { s.objects.add(i); for (const c of f.objects[i][6].split(" ").filter(Boolean)) s.countries.add(c); };
  if (t.plane === "code") {
    addObject(t.i);
    for (const h of f.objects[t.i][4]) { s.hubs.add(h); for (const m of mediaOfHub(h)) s.media.add(m); }
  } else if (t.plane === "hubs") {
    s.hubs.add(t.i);
    for (const m of mediaOfHub(t.i)) s.media.add(m);
    for (const o of objectsOfHub(t.i)) addObject(o);
  } else if (t.plane === "media") {
    s.media.add(t.i);
    for (const h of f.media[t.i][2]) { s.hubs.add(h); for (const o of objectsOfHub(h)) addObject(o); }
  } else if (t.code) {
    s.countries.add(t.code);
    f.objects.forEach((o, i) => { if (o[6].split(" ").includes(t.code!)) { s.objects.add(i); for (const h of o[4]) s.hubs.add(h); } });
  }
  return s;
}

export type Line = { kind: "mentions" | "names" | "replaces"; from: Thing; to: Thing };
/**
 * Lines between planes at rest: those of the D stars only (tokens layers.levelOfDetail), at most `cap`, the most
 * connected objects first; a lens or a core sample brings the rest of its own lines.
 */
export function restLines(f: LayersFile, cap = 150): Line[] {
  const out: Line[] = [];
  const stars = f.objects.map((o, i) => [o, i] as const).filter(([o]) => o[7] & STAR).sort(([a], [b]) => b[4].length - a[4].length || a[0].localeCompare(b[0]));
  const hubsUsed = new Set<number>();
  for (const [o, i] of stars) {
    for (const h of o[4]) { out.push({ kind: "names", from: { plane: "hubs", i: h }, to: { plane: "code", i } }); hubsUsed.add(h); }
    for (const c of o[6].split(" ").filter(Boolean).slice(0, 1)) out.push({ kind: "replaces", from: { plane: "code", i }, to: { plane: "countries", i, code: c } });
    if (out.length >= cap) break;
  }
  f.media.forEach((m, i) => { for (const h of m[2]) if (hubsUsed.has(h) && out.length < cap) out.push({ kind: "mentions", from: { plane: "media", i }, to: { plane: "hubs", i: h } }); });
  return out.slice(0, cap);
}

/** One row of the list per plane, with a count column per other plane (the keyboard and phone view, HANDOFF A section 4). */
export interface PlaneRow { thing: Thing; label: string; cols: Partial<Record<PlaneId, number>>; flags?: number }
export function planeRows(f: LayersFile, plane: PlaneId, hubLabel: (id: string) => string): PlaneRow[] {
  const count = (t: Thing) => { const s = coreSample(f, t); return { media: s.media.size, hubs: s.hubs.size, code: s.objects.size, countries: s.countries.size }; };
  const drop = (c: Record<PlaneId, number>, p: PlaneId) => { const { [p]: _x, ...rest } = c; return rest; };
  if (plane === "media") return f.media.map((m, i) => ({ thing: { plane, i }, label: m[3], cols: drop(count({ plane, i }), "media") }));
  if (plane === "hubs") return f.hubs.map((h, i) => ({ thing: { plane, i }, label: hubLabel(h[0]), cols: drop(count({ plane, i }), "hubs") }));
  if (plane === "code") return f.objects.map((o, i) => ({ thing: { plane, i }, label: o[0], cols: { media: o[5], hubs: o[4].length, countries: o[6] ? o[6].split(" ").length : 0 }, flags: o[7] }));
  return Object.entries(f.countries).map(([code, n], i) => ({ thing: { plane, i, code }, label: code.toUpperCase(), cols: { code: n } }));
}
