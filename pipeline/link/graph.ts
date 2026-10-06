/**
 * The galaxy graph (PLAN 4.2 graph, 4.7 galaxy map, D37), deterministic, from the content pages' frontmatter:
 *
 * - nodes: topics, features, localizations, sources (blogs and channels with pages), the TOP_OBJECTS most connected
 *   objects, and the videos and posts (in full.jsonl and ego graphs; the summary counts them on their hubs)
 * - edges: topic-subtopic (relates), feature-video (demonstrates), object-topic (documents), object-localization
 *   (localizes), extension-base object (extends), video/post-source (authored), page-system (via group)
 * - group = galaxy system: the page's `system`, for objects their namespace (Microsoft.Sales.* -> sales)
 * - layout: system centres on a two-arm spiral with seeded jitter (design/tokens.json galaxy.systemLayout, D42), then
 *   d3-force with fixed start positions around each system's centre and a fixed number of ticks, so the same input
 *   gives the same picture night after night (`layout: spiral+d3-force@seed:42`)
 *
 * Writes data/graph/summary.json (systems + summary nodes with x/y, ≤ ~500 KB), data/graph/full.jsonl (every edge) and
 * data/graph/ego/<node id>.json (one hop) for the summary nodes. Rewritten only when the graph changes.
 */
import { createHash } from "node:crypto";
import { relative, resolve } from "node:path";
import { forceCollide, forceLink, forceManyBody, forceSimulation, forceX, forceY, type SimulationNodeDatum } from "d3-force";
import matter from "gray-matter";
import { loadSources, taxonomy } from "../lib/config.js";
import { exists, listFiles, readText, removeIfExists, writeText } from "../lib/fsx.js";
import { objectSystem } from "../lib/systems.js";

export { objectSystem };

export const TOP_OBJECTS = 300;
export const LAYOUT = "spiral+d3-force@seed:42";
/** World units per design unit: the handoff's spiral (r = 85 + 30k) scaled so neighbouring systems keep ~200 apart. */
const SPIRAL_SCALE = 4.5;
const TICKS = 300;

export interface GNode extends SimulationNodeDatum { id: string; type: string; label: string; tier: string; group: string; weight: number; url: string; lit_at: string | null; x?: number; y?: number }
export interface GEdge { s: string; t: string; type: string; w?: number }

const h32 = (s: string) => createHash("sha256").update(s).digest().readUInt32BE(0);

export interface Graph { systems: { id: string; label: string; x: number; y: number; r: number }[]; nodes: GNode[]; edges: GEdge[] }

/** Read every content page and build nodes and edges (no layout yet). */
export function buildGraph(contentDir: string, siteBase: string): Graph {
  const nodes = new Map<string, GNode>();
  const edges = new Map<string, GEdge>();
  const systemIds = new Set(taxonomy().systems.map((s) => s.id));
  const sys = (s: unknown) => (typeof s === "string" && systemIds.has(s) ? s : "platform");
  const add = (n: Omit<GNode, "weight"> & { weight?: number }) => { if (!nodes.has(n.id)) nodes.set(n.id, { weight: 0, ...n }); return nodes.get(n.id)!; };
  const edge = (s: string, t: string, type: string) => {
    if (s === t) return;
    const [a, b] = s < t ? [s, t] : [t, s];
    const k = `${a}|${b}|${type}`;
    const e = edges.get(k);
    if (e) e.w = (e.w ?? 1) + 1; else edges.set(k, { s: a, t: b, type, w: 1 });
  };
  const pages: { id: string; fm: Record<string, any>; path: string }[] = [];
  for (const f of listFiles(contentDir, ".md")) {
    let fm: Record<string, any>;
    try { fm = matter(readText(f)).data; } catch { continue; }
    if (!fm.id || !fm.type) continue;
    pages.push({ id: fm.id, fm, path: relative(contentDir, f).replace(/\.md$/, "") });
  }
  const sources = new Map(loadSources().map((s) => [s.id, s]));
  for (const { id, fm, path } of pages) {
    if (fm.type === "digest") continue;
    const group = fm.type === "object" ? objectSystem(fm.namespace) : fm.type === "localization" ? "localization" : sys(fm.system);
    const date = fm.published_at ?? fm.ga_date ?? null;
    // url relative to the site root (siteBase prefixes it in the browser): keeps the summary small
    add({ id, type: fm.type, label: String(fm.title ?? id), tier: fm.tier === "community" ? "community" : fm.tier === "mixed" ? "mixed" : "official", group, url: `${path}/`, lit_at: date ? String(date).slice(0, 10) : null });
    const L = fm.links ?? {};
    for (const t of L.topics ?? []) edge(id, t, fm.type === "object" ? "documents" : "relates");
    for (const v of L.videos ?? []) edge(id, v, "demonstrates");
    for (const f of L.features ?? []) edge(id, f, "demonstrates");
    for (const l of L.localizations ?? []) edge(id, l, "localizes");
    // a localization's objects are the same pairs as the objects' localizations: one edge type for both directions
    for (const o of L.objects ?? []) edge(id, o, fm.type === "object" ? "extends" : fm.type === "localization" ? "localizes" : "mentions");
    for (const p of L.posts ?? []) edge(id, p, "discusses");
    const src = fm.type === "post" ? fm.source_id : fm.type === "video" ? fm.channel : null;
    if (src) {
      const s = sources.get(src);
      add({ id: `source/${src}`, type: "source", label: s?.name ?? src, tier: s?.tier === "official" ? "official" : "community", group: "sources", url: s?.url ?? "", lit_at: null });
      edge(`source/${src}`, id, "authored");
    }
  }
  // edges only between known nodes; weight = degree + evidence (Learn pages count on the hub)
  const live = [...edges.values()].filter((e) => nodes.has(e.s) && nodes.has(e.t));
  for (const e of live) { nodes.get(e.s)!.weight += e.w ?? 1; nodes.get(e.t)!.weight += e.w ?? 1; }
  for (const { id, fm } of pages) { const n = nodes.get(id); if (n) n.weight += (fm.links?.learn?.length ?? 0) * 0.5; }
  const systems = taxonomy().systems.map((s) => ({ id: s.id, label: s.label, x: 0, y: 0, r: 0 }));
  if (![...systems].some((s) => s.id === "localization")) systems.push({ id: "localization", label: "Localizations", x: 0, y: 0, r: 0 });
  systems.push({ id: "sources", label: "Sources", x: 0, y: 0, r: 0 });
  return { systems, nodes: [...nodes.values()].sort((a, b) => a.id.localeCompare(b.id)), edges: live.sort((a, b) => `${a.s}|${a.t}|${a.type}`.localeCompare(`${b.s}|${b.t}|${b.type}`)) };
}

/** The summary: hubs and sources in full, the TOP_OBJECTS most connected objects; videos and posts stay out. */
export function summaryNodes(g: Graph): Set<string> {
  const keep = new Set(g.nodes.filter((n) => ["topic", "feature", "localization", "source"].includes(n.type)).map((n) => n.id));
  for (const n of g.nodes.filter((x) => x.type === "object").sort((a, b) => b.weight - a.weight || a.id.localeCompare(b.id)).slice(0, TOP_OBJECTS)) keep.add(n.id);
  return keep;
}

/**
 * System centres on a two-arm spiral (HANDOFF 5): k = i >> 1, r = 85 + 30k (±10), angle = (i % 2)·π + 0.55k − 0.6
 * (±0.15), y squashed by 0.8. The jitter comes from a hash of the system id, so it is stable. Taxonomy order decides
 * who sits near the core.
 */
export function spiral(ids: string[]): { x: number; y: number }[] {
  return ids.map((id, i) => {
    const k = i >> 1, h = h32(`spiral:${id}`);
    const jr = ((h % 2001) / 1000 - 1) * 10, ja = (((h >>> 11) % 2001) / 1000 - 1) * 0.15;
    const r = (85 + 30 * k + jr) * SPIRAL_SCALE, a = (i % 2) * Math.PI + 0.55 * k - 0.6 + ja;
    return { x: Math.round(r * Math.cos(a)), y: Math.round(r * Math.sin(a) * 0.8) };
  });
}

/** Deterministic force layout: systems on the spiral, nodes start near their system by hash, fixed tick count. */
export function layout(g: Graph, keep: Set<string>): Graph {
  const sys = g.systems;
  const centres = spiral(sys.map((s) => s.id));
  sys.forEach((s, i) => { s.x = centres[i].x; s.y = centres[i].y; });
  const centre = new Map(sys.map((s) => [s.id, s]));
  const nodes = g.nodes.filter((n) => keep.has(n.id)).map((n) => {
    const c = centre.get(n.group) ?? { x: 0, y: 0 };
    const h = h32(n.id), a = ((h % 3600) / 3600) * 2 * Math.PI, r = 40 + ((h >>> 12) % 160);
    return { ...n, x: c.x + r * Math.cos(a), y: c.y + r * Math.sin(a) };
  });
  const ids = new Set(nodes.map((n) => n.id));
  const groupOf = new Map(nodes.map((n) => [n.id, n.group]));
  // links inside a system hold its stars together; links across systems barely pull (they would drag stars away)
  const links = g.edges.filter((e) => ids.has(e.s) && ids.has(e.t)).map((e) => ({ source: e.s, target: e.t, same: groupOf.get(e.s) === groupOf.get(e.t) }));
  const sim = forceSimulation(nodes as GNode[])
    .force("link", forceLink(links).id((d: any) => d.id).distance(20).strength((l: any) => (l.same ? 0.05 : 0.001)))
    .force("charge", forceManyBody().strength(-6).distanceMax(120))
    .force("x", forceX((d: any) => centre.get(d.group)?.x ?? 0).strength(0.3))
    .force("y", forceY((d: any) => centre.get(d.group)?.y ?? 0).strength(0.3))
    .force("collide", forceCollide((d: any) => 2 + Math.min(12, Math.sqrt(d.weight))))
    .stop();
  for (let i = 0; i < TICKS; i++) sim.tick();
  for (const s of sys) {
    const mine = nodes.filter((n) => n.group === s.id);
    const d = mine.map((n) => Math.hypot(n.x! - s.x, n.y! - s.y)).sort((a, b) => a - b);
    // 90th percentile (outliers do not inflate it), capped so neighbouring systems never overlap
    const cap = 0.45 * Math.min(...sys.filter((o) => o !== s).map((o) => Math.hypot(o.x - s.x, o.y - s.y)));
    s.r = d.length ? Math.round(Math.min(cap, d[Math.floor(d.length * 0.9)] + 20)) : 0;
  }
  const placed = new Map(nodes.map((n) => [n.id, n]));
  return { ...g, nodes: g.nodes.map((n) => { const p = placed.get(n.id); return p ? { ...n, x: Math.round(p.x!), y: Math.round(p.y!) } : n; }) };
}

const writeIfChanged = (p: string, text: string) => { if (!exists(p) || readText(p) !== text) { writeText(p, text); return true; } return false; };
const strip = ({ index: _i, vx: _vx, vy: _vy, fx: _fx, fy: _fy, ...n }: GNode) => ({ ...n, weight: Math.round(n.weight * 10) / 10 });
/** Summary nodes leave out `url` when it is the page path derived from the id (`object/table/18` -> `objects/table/18/`). */
export const pathOfId = (id: string) => { const i = id.indexOf("/"); return `${id.slice(0, i)}s/${id.slice(i + 1)}/`; };
const slim = (n: ReturnType<typeof strip>) => (n.url === pathOfId(n.id) ? (({ url: _u, ...rest }) => rest)(n) : n);

export interface GraphRun { nodes: number; edges: number; summary_nodes: number; summary_bytes: number; ego: number; written: number }

export function renderGraph(contentDir: string, dataDir: string, siteBase = ""): GraphRun {
  const g0 = buildGraph(contentDir, siteBase);
  const keep = summaryNodes(g0);
  const g = layout(g0, keep);
  const dir = resolve(dataDir, "graph");
  let written = 0;
  const summaryNodesList = g.nodes.filter((n) => keep.has(n.id)).map(strip).map(slim);
  const summaryEdges = g.edges.filter((e) => keep.has(e.s) && keep.has(e.t)).map(({ w, ...e }) => (w && w > 1 ? { ...e, w } : e));
  // version 1 of schemas/graph.json; generated_at is fixed to the input so an unchanged graph is not rewritten
  const summary = { version: 1, generated_at: createHash("sha256").update(JSON.stringify([summaryNodesList, summaryEdges])).digest("hex").slice(0, 16), layout: LAYOUT, systems: g.systems.filter((s) => s.r > 0), nodes: summaryNodesList, edges: summaryEdges };
  const summaryText = `${JSON.stringify(summary)}\n`;
  if (writeIfChanged(resolve(dir, "summary.json"), summaryText)) written++;
  if (writeIfChanged(resolve(dir, "full.jsonl"), g.edges.map((e) => JSON.stringify(e)).join("\n") + "\n")) written++;
  // ego graphs for summary nodes
  const byNode = new Map<string, GEdge[]>();
  for (const e of g.edges) { byNode.set(e.s, [...(byNode.get(e.s) ?? []), e]); byNode.set(e.t, [...(byNode.get(e.t) ?? []), e]); }
  const nodeById = new Map(g.nodes.map((n) => [n.id, strip(n)]));
  const egoDir = resolve(dir, "ego");
  const wanted = new Set<string>();
  for (const id of keep) {
    const es = byNode.get(id) ?? [];
    const ns = [...new Set([id, ...es.flatMap((e) => [e.s, e.t])])].map((x) => nodeById.get(x)).filter(Boolean);
    const file = resolve(egoDir, `${id}.json`);
    wanted.add(file);
    if (writeIfChanged(file, `${JSON.stringify({ id, nodes: ns, edges: es })}\n`)) written++;
  }
  for (const f of listFiles(egoDir, ".json")) if (!wanted.has(f)) { removeIfExists(f); written++; }
  return { nodes: g.nodes.length, edges: g.edges.length, summary_nodes: summaryNodesList.length, summary_bytes: summaryText.length, ego: wanted.size, written };
}
