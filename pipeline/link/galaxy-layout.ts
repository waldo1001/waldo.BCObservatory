/**
 * The galaxy layout (D66, design/HANDOFF.D-galaxy-honest.md section 5), deterministic, no forces:
 *
 * - system order: a chain grown from the heaviest cross-system pair outward, one end per spiral arm, each step adding
 *   the unplaced system with the most edges to that end. Localizations and Sources go to the arm ends (they touch
 *   every system and would always take the core). Centres on the existing two-arm spiral.
 * - hubs: the Learn table-of-contents tree of the system, radial on the left 200 degrees: depth = distance from the
 *   centre, sibling order = TOC order, each subtree an angle span in proportion to its leaves.
 * - objects: every object of the system (not only the stars) in a squarified treemap of its namespaces on the right;
 *   inside a namespace plot, most connected nearest the system centre.
 * - nodes with no TOC position (roadmap features, any type the layout does not know) on an outer arc, localization
 *   pages on a ring of the Localizations system, sources on a ring of their own.
 */
import { createHash } from "node:crypto";
import { buildTree, nsSegments, squarify, type TreeNode } from "../lib/treemap.js";

export const LAYOUT = "learn-tree+ns-treemap@1";
/** World units per design unit: the handoff's spiral (r = 85 + 30k) scaled so the inner arms keep apart. */
const SPIRAL_SCALE = 5.5;
const DEG = Math.PI / 180;
const HUB_ARC: [number, number] = [80 * DEG, 280 * DEG]; // left 200 degrees, y grows downwards
const OUTER_ARC: [number, number] = [100 * DEG, 260 * DEG];

const h32 = (s: string) => createHash("sha256").update(s).digest().readUInt32BE(0);

export interface LayoutNode { id: string; type: string; group: string }
export interface LayoutInput {
  systems: { id: string }[];
  nodes: LayoutNode[];
  /** Topic tree: parent per topic id (null for a TOC root) and the global TOC order (lower first). */
  parent: Map<string, string | null>;
  tocOrder: Map<string, number>;
  /** Objects: namespace and app (the treemap path) and the code-relation degree (placement inside a plot). */
  objects: Map<string, { ns: string | null; app: string | null; degree: number }>;
  /** Edge weight between two systems, key `a|b` with a < b. */
  weights: Map<string, number>;
}
export interface PlacedSystem { id: string; x: number; y: number; r: number; ord: number; arm: number; k: number }
/** A namespace plot: [namespace path, x, y, w, h, objects]. */
export type Plot = [string, number, number, number, number, number];
export interface Layout { systems: PlacedSystem[]; pos: Map<string, { x: number; y: number }>; plots: Map<string, Plot[]> }

const pairKey = (a: string, b: string) => (a < b ? `${a}|${b}` : `${b}|${a}`);

/** The spiral position of index i (arm = i % 2, k = i >> 1) with a stable jitter from the system id (HANDOFF 5). */
export function spiralAt(id: string, i: number): { x: number; y: number } {
  const k = i >> 1, h = h32(`spiral:${id}`);
  const jr = ((h % 2001) / 1000 - 1) * 10, ja = (((h >>> 11) % 2001) / 1000 - 1) * 0.15;
  const r = (85 + 30 * k + jr) * SPIRAL_SCALE, a = (i % 2) * Math.PI + 0.55 * k - 0.6 + ja;
  return { x: Math.round(r * Math.cos(a)), y: Math.round(r * Math.sin(a) * 0.8) };
}

/**
 * System chain: the heaviest pair sits at the core, one on each arm; then the arms grow in turn, each taking the
 * unplaced system with the highest weight to its current end (ties: weight to the whole chain, then id). `tail` ids go
 * last, one per arm, shorter arm first.
 */
export function systemChain(ids: string[], weights: Map<string, number>, tail: string[] = []): { id: string; arm: number; k: number }[] {
  const w = (a: string, b: string) => weights.get(pairKey(a, b)) ?? 0;
  const domain = ids.filter((id) => !tail.includes(id)).sort();
  if (!domain.length) return tail.filter((t) => ids.includes(t)).map((id, i) => ({ id, arm: i % 2, k: i >> 1 }));
  let best: [string, string] | null = null, bw = -1;
  for (let i = 0; i < domain.length; i++) for (let j = i + 1; j < domain.length; j++) {
    const x = w(domain[i], domain[j]);
    if (x > bw) { bw = x; best = [domain[i], domain[j]]; }
  }
  const arms: string[][] = best ? [[best[0]], [best[1]]] : [[domain[0]], []];
  const left = new Set(domain.filter((d) => !arms[0].includes(d) && !arms[1].includes(d)));
  let turn = 0;
  while (left.size) {
    const arm = arms[turn];
    const end = arm[arm.length - 1] ?? arms[1 - turn][0];
    const chain = [...arms[0], ...arms[1]];
    const pick = [...left].sort((a, b) => w(b, end) - w(a, end) || chain.reduce((s, c) => s + w(b, c) - w(a, c), 0) || a.localeCompare(b))[0];
    arm.push(pick); left.delete(pick);
    turn = 1 - turn;
  }
  for (const t of tail) if (ids.includes(t)) (arms[0].length <= arms[1].length ? arms[0] : arms[1]).push(t);
  return arms.flatMap((arm, a) => arm.map((id, k) => ({ id, arm: a, k })));
}

/** Angle spans for a forest: each node gets a span in proportion to its leaves, children in TOC order. */
function radialTree(roots: string[], children: Map<string, string[]>, a0: number, a1: number): Map<string, { a: number; depth: number }> {
  const leaves = new Map<string, number>();
  const count = (id: string): number => { const c = children.get(id) ?? []; const n = c.length ? c.reduce((s, x) => s + count(x), 0) : 1; leaves.set(id, n); return n; };
  const total = roots.reduce((s, r) => s + count(r), 0) || 1;
  const out = new Map<string, { a: number; depth: number }>();
  const place = (id: string, from: number, span: number, depth: number) => {
    out.set(id, { a: from + span / 2, depth });
    let at = from;
    for (const c of children.get(id) ?? []) { const s = (span * leaves.get(c)!) / leaves.get(id)!; place(c, at, s, depth + 1); at += s; }
  };
  let at = a0;
  for (const r of roots) { const s = ((a1 - a0) * leaves.get(r)!) / total; place(r, at, s, 1); at += s; }
  return out;
}

/** Evenly along an arc, in the given order. */
const onArc = (ids: string[], rho: number, [a0, a1]: [number, number]) =>
  new Map(ids.map((id, i) => { const a = ids.length === 1 ? (a0 + a1) / 2 : a0 + ((a1 - a0) * i) / (ids.length - 1); return [id, { x: rho * Math.cos(a), y: rho * Math.sin(a) }]; }));

/**
 * Objects in namespace plots inside the rectangle (x, y, w, h), relative to the system centre. A namespace with own
 * objects and sub-namespaces gets a plot for its own objects next to its children's.
 */
export function namespacePlots(ids: string[], info: LayoutInput["objects"], x: number, y: number, w: number, h: number): { pos: Map<string, { x: number; y: number }>; plots: Plot[] } {
  const tree = buildTree([...ids].sort(), (id) => nsSegments(info.get(id)?.ns, info.get(id)?.app));
  const pos = new Map<string, { x: number; y: number }>();
  const plots: Plot[] = [];
  type N = TreeNode<string>;
  const fill = (path: string, rows: string[], bx: number, by: number, bw: number, bh: number) => {
    plots.push([path, round1(bx), round1(by), round1(bw), round1(bh), rows.length]);
    const pad = Math.min(bw, bh) * 0.08;
    const ix = bx + pad, iy = by + pad, iw = Math.max(0, bw - 2 * pad), ih = Math.max(0, bh - 2 * pad);
    const cols = Math.max(1, Math.round(Math.sqrt((rows.length * iw) / Math.max(ih, 1e-6)))), lines = Math.ceil(rows.length / cols);
    const cells: { x: number; y: number; d: number; i: number }[] = [];
    for (let r = 0; r < lines; r++) for (let c = 0; c < cols; c++) {
      const cx = ix + (iw * (c + 0.5)) / cols, cy = iy + (ih * (r + 0.5)) / lines;
      cells.push({ x: cx, y: cy, d: cx * cx + cy * cy, i: cells.length });
    }
    cells.sort((a, b) => a.d - b.d || a.i - b.i);
    const order = [...rows].sort((a, b) => (info.get(b)?.degree ?? 0) - (info.get(a)?.degree ?? 0) || a.localeCompare(b));
    order.forEach((id, i) => pos.set(id, { x: cells[i].x, y: cells[i].y }));
  };
  const place = (n: N, bx: number, by: number, bw: number, bh: number) => {
    const kids = [...n.children.values()];
    if (!kids.length) { fill(n.path, n.rows, bx, by, bw, bh); return; }
    const self = n.rows.length ? [{ ...n, children: new Map(), count: n.rows.length, path: `${n.path}.` } as N] : [];
    const items = [...kids, ...self];
    const pad = Math.min(bw, bh) * 0.015;
    squarify(items, bx + pad, by + pad, Math.max(0, bw - 2 * pad), Math.max(0, bh - 2 * pad));
    for (const c of items) if (c.path.endsWith(".")) fill(n.path, c.rows, c.x, c.y, c.w, c.h); else place(c, c.x, c.y, c.w, c.h);
  };
  if (ids.length) place(tree, x, y, w, h);
  return { pos, plots };
}
const round1 = (v: number) => Math.round(v * 10) / 10;

export function layoutGalaxy(inp: LayoutInput): Layout {
  const ids = inp.systems.map((s) => s.id);
  const chain = systemChain(ids, inp.weights, ["localization", "sources"]);
  const centres = chain.map((c) => ({ ...c, ...spiralAt(c.id, 2 * c.k + c.arm) }));
  const byGroup = new Map<string, LayoutNode[]>();
  for (const n of inp.nodes) byGroup.set(n.group, [...(byGroup.get(n.group) ?? []), n]);
  const systems: PlacedSystem[] = centres.map((c) => {
    const others = centres.filter((o) => o !== c);
    // never overlap a neighbour: 0.45 of the nearest centre distance
    const cap = others.length ? 0.45 * Math.min(...others.map((o) => Math.hypot(o.x - c.x, o.y - c.y))) : 400;
    const n = byGroup.get(c.id)?.length ?? 0;
    return { id: c.id, x: c.x, y: c.y, r: n ? Math.round(Math.min(cap, Math.max(60, 9 * Math.sqrt(n)))) : 0, ord: 2 * c.k + c.arm, arm: c.arm, k: c.k };
  }).sort((a, b) => a.ord - b.ord);

  const pos = new Map<string, { x: number; y: number }>();
  const plots = new Map<string, Plot[]>();
  for (const s of systems) {
    const nodes = (byGroup.get(s.id) ?? []).slice().sort((a, b) => a.id.localeCompare(b.id));
    if (!nodes.length) continue;
    const put = (m: Map<string, { x: number; y: number }>) => { for (const [id, p] of m) pos.set(id, { x: s.x + p.x, y: s.y + p.y }); };
    const r = s.r;
    // hubs on the Learn tree
    const topics = nodes.filter((n) => n.type === "topic").map((n) => n.id);
    const inSys = new Set(topics);
    const ord = (id: string) => inp.tocOrder.get(id) ?? Number.MAX_SAFE_INTEGER;
    const byToc = (a: string, b: string) => ord(a) - ord(b) || a.localeCompare(b);
    const kids = new Map<string, string[]>();
    const roots: string[] = [];
    for (const t of topics) { const p = inp.parent.get(t) ?? null; if (p && inSys.has(p)) kids.set(p, [...(kids.get(p) ?? []), t]); else roots.push(t); }
    for (const list of kids.values()) list.sort(byToc);
    roots.sort(byToc);
    const tree = radialTree(roots, kids, ...HUB_ARC);
    const maxDepth = Math.max(1, ...[...tree.values()].map((t) => t.depth));
    put(new Map([...tree].map(([id, t]) => { const rho = r * (maxDepth === 1 ? 0.55 : 0.25 + (0.6 * (t.depth - 1)) / (maxDepth - 1)); return [id, { x: rho * Math.cos(t.a), y: rho * Math.sin(t.a) }]; })));
    // objects in namespace plots, right of the centre
    const objects = nodes.filter((n) => n.type === "object").map((n) => n.id);
    const ns = namespacePlots(objects, inp.objects, 0.1 * r, -0.62 * r, 0.75 * r, 1.24 * r);
    put(ns.pos);
    if (ns.plots.length) plots.set(s.id, ns.plots.map(([p, x, y, w, h, c]) => [p, round1(s.x + x), round1(s.y + y), w, h, c]));
    // localization pages and sources on a ring, everything else without a TOC place on the outer arc
    const locs = nodes.filter((n) => n.type === "localization").map((n) => n.id);
    put(onArc(locs, 0.7 * r, objects.length ? OUTER_ARC : [-80 * DEG, 80 * DEG]));
    const srcs = nodes.filter((n) => n.type === "source").map((n) => n.id);
    put(onArc(srcs, 0.7 * r, [0, 2 * Math.PI * (1 - 1 / Math.max(1, srcs.length))]));
    const rest = nodes.filter((n) => !pos.has(n.id)).map((n) => n.id);
    put(onArc(rest, 0.97 * r, OUTER_ARC));
  }
  return { systems, pos, plots };
}
