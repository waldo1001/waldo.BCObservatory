/**
 * The galaxy graph (PLAN 4.2 graph, 4.7 galaxy map, D37), deterministic, from the content pages' frontmatter:
 *
 * - nodes: topics, features, localizations, sources (blogs and channels with pages), the TOP_OBJECTS most connected
 *   objects, and the videos and posts (in full.jsonl and ego graphs; the summary counts them on their hubs)
 * - edges: topic-subtopic (relates), feature-video (demonstrates), object-topic (documents), object-localization
 *   (localizes), extension-base object (extends), video/post-source (authored), page-system (via group)
 * - group = galaxy system: the page's `system`, for objects their namespace (Microsoft.Sales.* -> sales)
 * - layout (D66, galaxy-layout.ts): system order from cross-system edge weight on the two-arm spiral, hubs on the
 *   Learn table-of-contents tree, objects in namespace plots; no forces, so the same input gives the same picture
 * - per star (D66): cross-system edges (`cross`), evidence (`ev`, now with videos and posts naming an object),
 *   obsolete majors (`ob`), published events (`ec`), media bodies (`mb`); per system the hub tree and namespace plots;
 *   the heaviest system pairs (`sysedges`)
 *
 * Writes data/graph/summary.json (systems + summary nodes with x/y), data/graph/landed.json (videos and posts of the
 * last 7 days up to the run date), data/graph/full.jsonl (every edge) and data/graph/ego/<node id>.json (one hop) for
 * the summary nodes. Rewritten only when they change.
 */
import { createHash } from "node:crypto";
import { relative, resolve } from "node:path";
import matter from "gray-matter";
import { loadConfig, loadSources, taxonomy } from "../lib/config.js";
import { exists, listFiles, readJsonOr, readText, removeIfExists, writeText } from "../lib/fsx.js";
import { objectSystem } from "../lib/systems.js";
import type { TimelineEntry } from "../code/diff.js";
import { nsSegments } from "../lib/treemap.js";
import { LAYOUT, layoutGalaxy, type Plot } from "./galaxy-layout.js";

export { objectSystem, LAYOUT };

export const TOP_OBJECTS = 300;
/** Ports per focused star (tokens.D-galaxy-honest.json galaxy.crossEdgeLimit); the rest is a count. */
export const CROSS_SYSTEMS = 6;
const CROSS_NAMED = 3;
const MEDIA_BODIES = 6;
const LANDED_DAYS = 7;

export interface GNode {
  id: string; type: string; label: string; tier: string; group: string; weight: number; url: string; lit_at: string | null; x?: number; y?: number;
  /** Evidence on the star (Learn pages, videos, posts, and videos and posts naming an object): its brightness. */
  ev?: number;
  /** Share of that evidence from community sources (0..1): community-heavy stars get a ring. */
  cs?: number;
  /** Objects: the BC majors they changed in (the galaxy's version lens). */
  cv?: string[];
  /** Objects: the BC majors in which they were marked obsolete (code timelines). */
  ob?: string[];
  /** Objects: published events (integration, business, internal). */
  ec?: number;
  /** Objects: distinct objects they share a code relation with (the neighbourhood's size). */
  nn?: number;
  /** Objects: namespace path without the vendor (`Sales.Customer`), the atlas's `?ns=`. */
  ns?: string;
  /**
   * Cross-system edges, heaviest target system first: [system, distinct targets, most frequent kind, up to 3 targets].
   * A target that is a summary star is its id (its label is in the summary); any other is [id, label].
   */
  cross?: [string, number, string, (string | [string, string])[]][];
  /** Target systems beyond CROSS_SYSTEMS. */
  crossMore?: number;
  /** Media bodies: total and the newest MEDIA_BODIES as [id, "v" | "p", date]. */
  mb?: { n: number; top: [string, string, string | null][] };
}
export interface GEdge { s: string; t: string; type: string; w?: number }

export interface Graph {
  systems: { id: string; label: string; x: number; y: number; r: number; ord?: number; tree?: [string, string][]; plots?: Plot[] }[]; nodes: GNode[]; edges: GEdge[];
  /** Per source (blog or channel): the hubs its videos and posts link to, i.e. where it touches the galaxy. */
  touches: Record<string, string[]>;
  /** Per source: how many of its items fall in each galaxy system. */
  reach: Record<string, Record<string, number>>;
  /** What the layout and the star fields need besides nodes and edges. */
  aux: {
    ns: Map<string, { ns: string | null; app: string | null }>; parent: Map<string, string | null>; media: Map<string, Set<string>>;
    /** Objects: Learn pages naming them, countries replacing them, obsolete state, and whether the page is a country layer's. */
    obj: Map<string, { learn: number; countries: string[]; obsolete: string | null; country: boolean }>;
    /** Every placed node, stars or not (set by layout): the layers files need every object of a system. */
    pos?: Map<string, { x: number; y: number }>;
  };
}

/** Read every content page and build nodes and edges (no layout yet). */
export function buildGraph(contentDir: string, _siteBase = ""): Graph {
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
  pages.sort((a, b) => a.id.localeCompare(b.id));
  const sources = new Map(loadSources().map((s) => [s.id, s]));
  // AL objects by exact type and name ("table Customer"): videos and posts name them that way. Exact only, and a name
  // two objects of one type share (an object moved between apps) is left out rather than guessed.
  const objectByName = new Map<string, string | null>();
  for (const { id, fm } of pages) {
    if (fm.type !== "object" || !fm.object_type || !fm.name) continue;
    const k = `${fm.object_type} ${String(fm.name)}`.toLowerCase();
    objectByName.set(k, objectByName.has(k) && objectByName.get(k) !== id ? null : id);
  }
  const mentioned = (fm: Record<string, any>) => [...new Set([...(fm.objects_mentioned ?? []), ...(fm.code_objects_mentioned ?? [])]
    .map((m: unknown) => objectByName.get(String(m).toLowerCase().trim())).filter((x): x is string => !!x))];
  const aux: Graph["aux"] = { ns: new Map(), parent: new Map(), media: new Map(), obj: new Map() };
  const addMedia = (hub: string, m: string) => (aux.media.get(hub) ?? aux.media.set(hub, new Set()).get(hub)!).add(m);
  for (const { id, fm, path } of pages) {
    if (fm.type === "digest") continue;
    const group = fm.type === "object" ? objectSystem(fm.namespace) : fm.type === "localization" ? "localization" : fm.type === "source" ? "sources" : sys(fm.system);
    const date = fm.published_at ?? fm.ga_date ?? null;
    // url relative to the site root (siteBase prefixes it in the browser): keeps the summary small
    add({ id, type: fm.type, label: String(fm.title ?? id), tier: fm.tier === "community" ? "community" : fm.tier === "mixed" ? "mixed" : "official", group, url: `${path}/`, lit_at: date ? String(date).slice(0, 10) : null });
    if (fm.type === "object") {
      aux.ns.set(id, { ns: fm.namespace ?? null, app: fm.app ?? null });
      aux.obj.set(id, { learn: (fm.links?.learn ?? []).length, countries: (fm.countries ?? []).map(String).sort(), obsolete: fm.obsolete?.state ?? null, country: !!fm.country });
    }
    if (fm.type === "topic") aux.parent.set(id, typeof fm.parent === "string" ? fm.parent : null);
    const L = fm.links ?? {};
    for (const t of L.topics ?? []) edge(id, t, fm.type === "object" ? "documents" : "relates");
    for (const v of L.videos ?? []) edge(id, v, "demonstrates");
    for (const f of L.features ?? []) edge(id, f, "demonstrates");
    for (const l of L.localizations ?? []) edge(id, l, "localizes");
    // a localization's objects are the same pairs as the objects' localizations: one edge type for both directions
    // D65: a hub's objects are the same pairs as the objects' hubs: `documents` both ways
    for (const o of L.objects ?? []) edge(id, o, fm.type === "object" ? "extends" : fm.type === "localization" ? "localizes" : fm.type === "change" ? "changes" : fm.type === "topic" ? "documents" : "mentions");
    for (const p of L.posts ?? []) edge(id, p, "discusses");
    // D61: an object's changes are the same pairs as the changes' objects; a hub's are what it documents changing
    for (const c of L.changes ?? []) edge(id, c, fm.type === "object" ? "changes" : "relates");
    if (fm.type === "video" || fm.type === "post") for (const o of mentioned(fm)) { edge(id, o, "mentions"); addMedia(o, id); }
    if (["topic", "feature", "object", "localization"].includes(fm.type)) for (const m of [...(L.videos ?? []), ...(L.posts ?? [])]) addMedia(id, m);
    const src = fm.type === "post" || fm.type === "change" ? fm.source_id : fm.type === "video" ? fm.channel : null;
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
  for (const [hub, set] of aux.media) for (const m of [...set]) if (!nodes.has(m)) set.delete(m);
  // evidence per star (Learn pages + videos and posts linked to it or naming it) and its community share; object versions
  const touches: Record<string, Set<string>> = {};
  const reach: Record<string, Record<string, number>> = {};
  const sourceOf = new Map(pages.filter((p) => p.fm.type === "post" || p.fm.type === "video").map((p) => [p.id, p.fm.type === "post" ? p.fm.source_id : p.fm.channel]));
  for (const { id, fm } of pages) {
    const n = nodes.get(id);
    if (!n) continue;
    const L = fm.links ?? {};
    if (["topic", "feature", "object", "localization"].includes(fm.type)) {
      const media = [...(aux.media.get(id) ?? [])].map((x) => nodes.get(x)!);
      const ev = (L.learn?.length ?? 0) + media.length;
      if (ev) { n.ev = ev; n.cs = Math.round((media.filter((m) => m.tier === "community").length / ev) * 100) / 100; }
      if (fm.type === "object" && fm.changed_in?.length) n.cv = fm.changed_in.map(String);
      // a topic's linked videos and posts (link/topics.ts): their source touches this topic
      if (fm.type === "topic") for (const m of [...(L.videos ?? []), ...(L.posts ?? [])]) { const src = sourceOf.get(m); if (src) (touches[`source/${src}`] ??= new Set()).add(id); }
    }
    const src = fm.type === "post" ? fm.source_id : fm.type === "video" ? fm.channel : null;
    if (src) {
      for (const h of [...(L.topics ?? []), ...(L.features ?? []), ...(L.objects ?? []), ...mentioned(fm)]) (touches[`source/${src}`] ??= new Set()).add(h);
      for (const sy of new Set([fm.system, ...(fm.systems ?? [])].filter((x) => systemIds.has(x)))) { const r = (reach[`source/${src}`] ??= {}); r[sy] = (r[sy] ?? 0) + 1; }
    }
  }
  const systems: Graph["systems"] = taxonomy().systems.map((s) => ({ id: s.id, label: s.label, x: 0, y: 0, r: 0 }));
  if (![...systems].some((s) => s.id === "localization")) systems.push({ id: "localization", label: "Localizations", x: 0, y: 0, r: 0 });
  systems.push({ id: "sources", label: "Sources", x: 0, y: 0, r: 0 });
  return {
    systems, nodes: [...nodes.values()].sort((a, b) => a.id.localeCompare(b.id)), edges: live.sort((a, b) => `${a.s}|${a.t}|${a.type}`.localeCompare(`${b.s}|${b.t}|${b.type}`)),
    touches: Object.fromEntries(Object.entries(touches).sort(([a], [b]) => a.localeCompare(b)).map(([k, v]) => [k, [...v].filter((h) => nodes.has(h)).sort()])),
    reach: Object.fromEntries(Object.entries(reach).sort(([a], [b]) => a.localeCompare(b)).map(([k, v]) => [k, Object.fromEntries(Object.entries(v).sort(([a], [b]) => a.localeCompare(b)))])),
    aux,
  };
}

/** The summary: hubs and sources in full, the TOP_OBJECTS most connected objects; videos and posts stay out. */
export function summaryNodes(g: Graph): Set<string> {
  const keep = new Set(g.nodes.filter((n) => ["topic", "feature", "localization", "source"].includes(n.type)).map((n) => n.id));
  for (const n of g.nodes.filter((x) => x.type === "object").sort((a, b) => b.weight - a.weight || a.id.localeCompare(b.id)).slice(0, TOP_OBJECTS)) keep.add(n.id);
  return keep;
}

/** The code pillar the graph reads (D45): relations of one major, keyed by object page key (`table/18`). */
export interface CodeInput {
  edges: { s: string; t: string; k: string }[];
  events: Record<string, Record<string, { kind: string }>>;
  /** Per object type: page id part -> majors it was marked obsolete in (data/code/timelines/<type>.json). */
  obsoleted: (type: string, id: string) => string[];
}

/** Relations of the first narrative major that has them, and the timelines; empty when the code pillar is absent. */
export function loadCode(dataDir: string, major?: string): CodeInput {
  const order = major ? [major] : loadConfig<{ narrative_order: string[] }>("versions").narrative_order;
  const m = order.find((x) => exists(resolve(dataDir, "code", "relations", `${x}.json`)));
  const rel = m ? readJsonOr<{ edges: CodeInput["edges"]; events: CodeInput["events"] }>(resolve(dataDir, "code", "relations", `${m}.json`), { edges: [], events: {} }) : { edges: [], events: {} };
  type Timeline = Record<string, Pick<TimelineEntry, "obsoleted">>;
  const timelines = new Map<string, Timeline>();
  const obsoleted = (type: string, id: string) => {
    if (!timelines.has(type)) timelines.set(type, readJsonOr<{ objects?: Timeline }>(resolve(dataDir, "code", "timelines", `${type}.json`), {}).objects ?? {});
    return [...new Set((timelines.get(type)![id]?.obsoleted ?? []).map((o) => String(o.version)))].sort();
  };
  return { edges: rel.edges.map(({ s, t, k }) => ({ s, t, k })), events: rel.events, obsoleted };
}

const pairKey = (a: string, b: string) => (a < b ? `${a}|${b}` : `${b}|${a}`);
/** `object/table/18` -> `table/18` and back. */
const codeKey = (id: string) => id.slice("object/".length);

/** Weight between systems: code edges whose ends sit in two systems, plus summary edges across systems. */
export function systemWeights(g: Graph, keep: Set<string>, code: CodeInput): Map<string, number> {
  const group = new Map(g.nodes.map((n) => [n.id, n.group]));
  const w = new Map<string, number>();
  const bump = (a: string | undefined, b: string | undefined, by = 1) => { if (a && b && a !== b) w.set(pairKey(a, b), (w.get(pairKey(a, b)) ?? 0) + by); };
  for (const e of code.edges) bump(group.get(`object/${e.s}`), group.get(`object/${e.t}`));
  for (const e of g.edges) if (keep.has(e.s) && keep.has(e.t)) bump(group.get(e.s), group.get(e.t), e.w ?? 1);
  return w;
}

/** Layout, plus the star fields that need the code pillar or the whole graph (D66). */
export function layout(g: Graph, keep: Set<string>, code: CodeInput, tocOrder: Map<string, number>): Graph {
  const weights = systemWeights(g, keep, code);
  const degree = new Map<string, number>();
  for (const e of code.edges) for (const k of [e.s, e.t]) degree.set(k, (degree.get(k) ?? 0) + 1);
  const objects = new Map([...g.aux.ns].map(([id, v]) => [id, { ...v, degree: degree.get(codeKey(id)) ?? 0 }]));
  const L = layoutGalaxy({ systems: g.systems, nodes: g.nodes, parent: g.aux.parent, tocOrder, objects, weights });
  const placed = new Map(L.systems.map((s) => [s.id, s]));
  const byId = new Map(g.nodes.map((n) => [n.id, n]));
  const label = (id: string) => byId.get(id)?.label ?? id;
  // the hub tree of each system, for the tree guides
  const tree = new Map<string, [string, string][]>();
  for (const [child, parent] of [...g.aux.parent].sort(([a], [b]) => a.localeCompare(b))) {
    const c = byId.get(child), p = parent ? byId.get(parent) : undefined;
    if (c && p && c.group === p.group && keep.has(child) && keep.has(parent!)) tree.set(c.group, [...(tree.get(c.group) ?? []), [parent!, child]]);
  }
  const systems = L.systems.map((s) => {
    const base = g.systems.find((x) => x.id === s.id)!;
    return { id: s.id, label: base.label, x: s.x, y: s.y, r: s.r, ord: s.ord, ...(tree.get(s.id)?.length ? { tree: tree.get(s.id) } : {}), ...(L.plots.get(s.id)?.length ? { plots: L.plots.get(s.id) } : {}) };
  });
  // cross-system edges per star: code relations for objects, page links for everything else
  const codeAdj = new Map<string, { other: string; k: string }[]>();
  for (const e of code.edges) for (const [a, b] of [[e.s, e.t], [e.t, e.s]]) {
    const id = `object/${a}`;
    if (keep.has(id)) codeAdj.set(id, [...(codeAdj.get(id) ?? []), { other: `object/${b}`, k: e.k }]);
  }
  const pageAdj = new Map<string, { other: string; k: string }[]>();
  for (const e of g.edges) for (const [a, b] of [[e.s, e.t], [e.t, e.s]]) if (keep.has(a) && keep.has(b) && byId.get(a)?.type !== "object") pageAdj.set(a, [...(pageAdj.get(a) ?? []), { other: b, k: e.type }]);
  const crossOf = (n: GNode): Pick<GNode, "cross" | "crossMore"> => {
    const adj = (n.type === "object" ? codeAdj : pageAdj).get(n.id) ?? [];
    const by = new Map<string, Map<string, { n: number; kinds: Map<string, number> }>>();
    for (const { other, k } of adj) {
      const sys = byId.get(other)?.group;
      if (!sys || sys === n.group) continue;
      const m = by.get(sys) ?? by.set(sys, new Map()).get(sys)!;
      const t = m.get(other) ?? m.set(other, { n: 0, kinds: new Map() }).get(other)!;
      t.n++; t.kinds.set(k, (t.kinds.get(k) ?? 0) + 1);
    }
    if (!by.size) return {};
    const rows = [...by].map(([sys, m]) => {
      const kinds = new Map<string, number>();
      for (const t of m.values()) for (const [k, c] of t.kinds) kinds.set(k, (kinds.get(k) ?? 0) + c);
      const kind = [...kinds].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))[0][0];
      const named = [...m].sort((a, b) => b[1].n - a[1].n || (byId.get(b[0])?.weight ?? 0) - (byId.get(a[0])?.weight ?? 0) || a[0].localeCompare(b[0])).slice(0, CROSS_NAMED).map(([id]) => (keep.has(id) ? id : [id, label(id)] as [string, string]));
      return [sys, m.size, kind, named] as [string, number, string, (string | [string, string])[]];
    }).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    return { cross: rows.slice(0, CROSS_SYSTEMS), ...(rows.length > CROSS_SYSTEMS ? { crossMore: rows.length - CROSS_SYSTEMS } : {}) };
  };
  const mediaOf = (n: GNode): Pick<GNode, "mb"> => {
    const ms = [...(g.aux.media.get(n.id) ?? [])].map((id) => byId.get(id)!).filter(Boolean);
    if (!ms.length) return {};
    const top = ms.sort((a, b) => (b.lit_at ?? "").localeCompare(a.lit_at ?? "") || a.id.localeCompare(b.id)).slice(0, MEDIA_BODIES).map((m) => [m.id, m.type === "video" ? "v" : "p", m.lit_at] as [string, string, string | null]);
    return { mb: { n: ms.length, top } };
  };
  const objectFields = (n: GNode): Pick<GNode, "ob" | "ec" | "ns" | "nn"> => {
    const [type, id] = codeKey(n.id).split("/");
    const ob = /^\d+$/.test(id ?? "") ? code.obsoleted(type, id) : [];
    const ec = Object.values(code.events[codeKey(n.id)] ?? {}).filter((e) => e.kind !== "trigger_event").length;
    const a = g.aux.ns.get(n.id);
    const nn = new Set((codeAdj.get(n.id) ?? []).map((x) => x.other)).size;
    return { ...(ob.length ? { ob } : {}), ...(ec ? { ec } : {}), ...(nn ? { nn } : {}), ...(a ? { ns: nsSegments(a.ns, a.app).join(".") } : {}) };
  };
  return {
    ...g, systems, aux: { ...g.aux, pos: L.pos },
    nodes: g.nodes.map((n) => {
      if (!keep.has(n.id)) return n;
      const p = L.pos.get(n.id) ?? placed.get(n.group) ?? { x: 0, y: 0 };
      return { ...n, x: Math.round(p.x), y: Math.round(p.y), ...crossOf(n), ...mediaOf(n), ...(n.type === "object" ? objectFields(n) : {}) };
    }),
  };
}

/**
 * The heaviest system pairs: the top 2 of each system, each pair once, as [a, b, weight]. Localizations and Sources
 * stay out: they touch every system by construction (the same reason they stay out of the system chain).
 */
export function heaviestPairs(weights: Map<string, number>, ids: string[], perSystem = 2): [string, string, number][] {
  const systems = ids.filter((s) => s !== "localization" && s !== "sources");
  weights = new Map([...weights].filter(([k]) => k.split("|").every((x) => systems.includes(x))));
  const out = new Map<string, [string, string, number]>();
  for (const s of systems) {
    const mine = [...weights].filter(([k]) => k.split("|").includes(s)).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).slice(0, perSystem);
    for (const [k, w] of mine) { const [a, b] = k.split("|"); if (systems.includes(a) && systems.includes(b)) out.set(k, [a, b, w]); }
  }
  return [...out.values()].sort((a, b) => b[2] - a[2] || `${a[0]}|${a[1]}`.localeCompare(`${b[0]}|${b[1]}`));
}

/** Videos and posts published in the LANDED_DAYS days up to `today`, newest first, with the summary stars they link to and their title. */
export function landed(g: Graph, keep: Set<string>, today: string): { anchor: string; days: number; items: [string, string, string, string[], string][] } {
  const from = new Date(Date.parse(`${today}T00:00:00Z`) - (LANDED_DAYS - 1) * 864e5).toISOString().slice(0, 10);
  const hubs = new Map<string, Set<string>>();
  for (const e of g.edges) for (const [m, h] of [[e.s, e.t], [e.t, e.s]]) if (/^(video|post)\//.test(m) && keep.has(h) && !h.startsWith("source/")) (hubs.get(m) ?? hubs.set(m, new Set()).get(m)!).add(h);
  const items = g.nodes.filter((n) => (n.type === "video" || n.type === "post") && n.lit_at && n.lit_at >= from && n.lit_at <= today)
    .sort((a, b) => b.lit_at!.localeCompare(a.lit_at!) || a.id.localeCompare(b.id))
    .map((n) => [n.id, n.type === "video" ? "v" : "p", n.lit_at!, [...(hubs.get(n.id) ?? [])].sort(), n.label] as [string, string, string, string[], string]);
  return { anchor: today, days: LANDED_DAYS, items };
}

/** Global TOC order of the topic hubs (data/hubs/topics.json lists them in TOC walk order). */
export function tocOrder(dataDir: string): Map<string, number> {
  const hubs = readJsonOr<{ topics?: { id: string }[] }>(resolve(dataDir, "hubs", "topics.json"), {}).topics ?? [];
  return new Map(hubs.map((h, i) => [h.id, i]));
}

export interface LayersFile {
  system: string; label: string; x: number; y: number; r: number;
  /** [page key, x, y, Learn pages, hub indexes, media, countries replacing it (space separated), flags: 1 star, 2 obsolete, 4 changed] */
  objects: [string, number, number, number, number[], number, string, number][];
  /** [hub id, x, y, media]: the system's topic hubs and roadmap features */
  hubs: [string, number, number, number][];
  /** [media id, v | p, hub indexes, title] */
  media: [string, string, number[], string][];
  /** countries that replace at least one object of the system, with how many */
  countries: Record<string, number>;
}

/**
 * The layered view's file per system (D66, HANDOFF A section 5): every object of the system (not only the stars) at its
 * D position, the hubs and the media on them, and the lines between the planes: a hub names an object (its page links
 * the hub), a video or post is on a hub, a country replaces an object. Country-layer objects are the country plane,
 * not objects of their own here.
 */
export function layersFiles(g: Graph, keep: Set<string>): LayersFile[] {
  const pos = g.aux.pos ?? new Map();
  const byId = new Map(g.nodes.map((n) => [n.id, n]));
  const hubsOf = new Map<string, Set<string>>();
  for (const e of g.edges) if (e.type === "documents") {
    const [o, h] = e.s.startsWith("object/") ? [e.s, e.t] : [e.t, e.s];
    if (o.startsWith("object/") && (h.startsWith("topic/") || h.startsWith("feature/"))) (hubsOf.get(o) ?? hubsOf.set(o, new Set()).get(o)!).add(h);
  }
  const out: LayersFile[] = [];
  for (const s of g.systems) {
    const hubs = g.nodes.filter((n) => n.group === s.id && (n.type === "topic" || n.type === "feature") && pos.has(n.id));
    const objects = g.nodes.filter((n) => n.group === s.id && n.type === "object" && pos.has(n.id) && !g.aux.obj.get(n.id)?.country);
    if (!objects.length && !hubs.length) continue;
    const hubIx = new Map(hubs.map((h, i) => [h.id, i]));
    const mediaIx = new Map<string, number[]>();
    hubs.forEach((h, i) => { for (const m of g.aux.media.get(h.id) ?? []) mediaIx.set(m, [...(mediaIx.get(m) ?? []), i]); });
    const countries: Record<string, number> = {};
    const r1 = (v: number) => Math.round(v * 10) / 10;
    const rows = objects.map((n) => {
      const o = g.aux.obj.get(n.id)!, p = pos.get(n.id)!;
      for (const c of o.countries) countries[c] = (countries[c] ?? 0) + 1;
      const hubsHere = [...(hubsOf.get(n.id) ?? [])].map((h) => hubIx.get(h)).filter((i): i is number => i !== undefined).sort((a, b) => a - b);
      const flags = (keep.has(n.id) ? 1 : 0) | (o.obsolete ? 2 : 0) | (n.cv?.length ? 4 : 0);
      return [n.id.slice("object/".length), r1(p.x), r1(p.y), o.learn, hubsHere, g.aux.media.get(n.id)?.size ?? 0, o.countries.join(" "), flags] as LayersFile["objects"][number];
    });
    out.push({
      system: s.id, label: s.label, x: s.x, y: s.y, r: s.r, objects: rows,
      hubs: hubs.map((h) => { const p = pos.get(h.id)!; return [h.id, r1(p.x), r1(p.y), g.aux.media.get(h.id)?.size ?? 0]; }),
      media: [...mediaIx].sort(([a], [b]) => a.localeCompare(b)).map(([m, ix]) => [m, byId.get(m)?.type === "video" ? "v" : "p", ix, byId.get(m)?.label ?? m]),
      countries: Object.fromEntries(Object.entries(countries).sort(([a], [b]) => a.localeCompare(b))),
    });
  }
  return out;
}

const writeIfChanged = (p: string, text: string) => { if (!exists(p) || readText(p) !== text) { writeText(p, text); return true; } return false; };
const strip = (n: GNode) => ({ ...n, weight: Math.round(n.weight * 10) / 10 });
/** Summary nodes leave out `url` when it is the page path derived from the id (`object/table/18` -> `objects/table/18/`). */
export const pathOfId = (id: string) => { const i = id.indexOf("/"); return `${id.slice(0, i)}s/${id.slice(i + 1)}/`; };
const slim = (n: ReturnType<typeof strip>) => (n.url === pathOfId(n.id) ? (({ url: _u, ...rest }) => rest)(n) : n);
/** Ego files keep the plain node: the per-star fields live in the summary only. */
const egoNode = ({ cross: _c, crossMore: _m, mb: _b, ob: _o, ec: _e, ns: _n, nn: _k, ...n }: GNode) => strip(n);

export interface GraphRun { nodes: number; edges: number; summary_nodes: number; summary_bytes: number; landed: number; ego: number; written: number }
export interface GraphOptions { /** Run date (YYYY-MM-DD): the end of the "landed" week. */ today?: string; /** Relations major; default the first narrative major that has them. */ major?: string }

export function renderGraph(contentDir: string, dataDir: string, siteBase = "", opts: GraphOptions = {}): GraphRun {
  const g0 = buildGraph(contentDir, siteBase);
  const keep = summaryNodes(g0);
  const code = loadCode(dataDir, opts.major);
  const g = layout(g0, keep, code, tocOrder(dataDir));
  const dir = resolve(dataDir, "graph");
  let written = 0;
  const summaryNodesList = g.nodes.filter((n) => keep.has(n.id)).map(strip).map(slim);
  const summaryEdges = g.edges.filter((e) => keep.has(e.s) && keep.has(e.t)).map(({ w, ...e }) => (w && w > 1 ? { ...e, w } : e));
  // where each source touches the galaxy, limited to stars the summary draws
  const touches = Object.fromEntries(Object.entries(g.touches).map(([k, v]) => [k, v.filter((h) => keep.has(h))]).filter(([, v]) => v.length));
  const systems = g.systems.filter((s) => s.r > 0 && summaryNodesList.some((n) => n.group === s.id));
  const sysedges = heaviestPairs(systemWeights(g0, keep, code), systems.map((s) => s.id));
  // version 1 of schemas/graph.json; generated_at is fixed to the input so an unchanged graph is not rewritten
  const body = { layout: LAYOUT, systems, sysedges, nodes: summaryNodesList, edges: summaryEdges, touches, reach: g.reach };
  const summary = { version: 1, generated_at: createHash("sha256").update(JSON.stringify(body)).digest("hex").slice(0, 16), ...body };
  const summaryText = `${JSON.stringify(summary)}\n`;
  if (writeIfChanged(resolve(dir, "summary.json"), summaryText)) written++;
  const week = landed(g, keep, opts.today ?? new Date().toISOString().slice(0, 10));
  if (writeIfChanged(resolve(dir, "landed.json"), `${JSON.stringify(week)}\n`)) written++;
  if (writeIfChanged(resolve(dir, "full.jsonl"), g.edges.map((e) => JSON.stringify(e)).join("\n") + "\n")) written++;
  // the layered view's file per system, loaded only when the reader tilts a system
  const layersDir = resolve(dir, "layers"), layerFiles = new Set<string>();
  for (const f of layersFiles(g, keep)) {
    const file = resolve(layersDir, `${f.system}.json`);
    layerFiles.add(file);
    if (writeIfChanged(file, `${JSON.stringify(f)}\n`)) written++;
  }
  for (const f of listFiles(layersDir, ".json")) if (!layerFiles.has(f)) { removeIfExists(f); written++; }
  // ego graphs for summary nodes
  const byNode = new Map<string, GEdge[]>();
  for (const e of g.edges) { byNode.set(e.s, [...(byNode.get(e.s) ?? []), e]); byNode.set(e.t, [...(byNode.get(e.t) ?? []), e]); }
  const nodeById = new Map(g.nodes.map((n) => [n.id, egoNode(n)]));
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
  return { nodes: g.nodes.length, edges: g.edges.length, summary_nodes: summaryNodesList.length, summary_bytes: summaryText.length, landed: week.items.length, ego: wanted.size, written };
}
