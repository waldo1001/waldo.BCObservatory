/**
 * Build-time view of data/code/relations/<major>.json (D45), and of the call graph data/code/graph/<major>/calls.json
 * where it exists (D67), for the object pages: the one-hop neighbourhood of an
 * object, grouped into rings and capped, laid out radially for an inline SVG. The file is read once per major per
 * build; nothing here runs in the browser.
 */
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { objectSystem } from "../../../pipeline/lib/systems";
import { RINGS as CODE_RINGS, sortRows, topKeys, type Ring as CodeRing, type NameRow, type RingRow } from "../scripts/explorer-core";

interface RelEdge { s: string; t: string; k: string; via?: string; cond?: true }
interface Relations { edges: RelEdge[]; events: Record<string, Record<string, { kind: string; subs: { s: string; proc: string }[] }>> }
interface View { rel: Relations; in: Map<string, RelEdge[]>; out: Map<string, RelEdge[]> }

const cache = new Map<string, View | null>();
export function relationsFor(major: string): View | null {
  if (cache.has(major)) return cache.get(major)!;
  const p = resolve(process.cwd(), "..", "data", "code", "relations", `${major}.json`);
  if (!existsSync(p)) { cache.set(major, null); return null; }
  const rel = JSON.parse(readFileSync(p, "utf8")) as Relations;
  const inc = new Map<string, RelEdge[]>(), out = new Map<string, RelEdge[]>();
  for (const e of rel.edges) { inc.set(e.t, [...(inc.get(e.t) ?? []), e]); out.set(e.s, [...(out.get(e.s) ?? []), e]); }
  const v = { rel, in: inc, out };
  cache.set(major, v);
  return v;
}

interface CallEdge { s: string; t: string; k: "calls" | "implements"; n: number }
const callsCache = new Map<string, Map<string, CallEdge[]> | null>();
/** Call edges of a major by object, both directions (calls.json, D67); null when the major has no call graph yet. */
export function callsFor(major: string): Map<string, CallEdge[]> | null {
  if (callsCache.has(major)) return callsCache.get(major)!;
  const p = resolve(process.cwd(), "..", "data", "code", "graph", major, "calls.json");
  if (!existsSync(p)) { callsCache.set(major, null); return null; }
  const by = new Map<string, CallEdge[]>();
  for (const e of (JSON.parse(readFileSync(p, "utf8")) as { edges: CallEdge[] }).edges) {
    if (e.k !== "calls") continue;
    for (const k of [e.s, e.t]) { const l = by.get(k); if (l) l.push(e); else by.set(k, [e]); }
  }
  callsCache.set(major, by);
  return by;
}

export type Ring = "relates" | "referenced" | "pages" | "extensions" | "subscribers" | "calls" | "learn";
export const RING_LABEL: Record<Ring, string> = { relates: "relates to", referenced: "referenced by", pages: "pages and codeunits on it", extensions: "extended by", subscribers: "event subscribers", calls: "calls", learn: "Learn pages" };
export interface Neighbour { key: string; ring: Ring; weight: number; label: string; href: string | null; system: string | null; kind: string }
export interface Lookup { pk: string; title: string; system: string | null; type: string }

const PAGE_KINDS = new Set(["source_table", "lookup_page", "drilldown_page", "card_page"]);
const CAP = 40;

/** The relation neighbours of `key` by ring, with a weight per edge, for the object page diagram. */
export function rawNeighbours(key: string, major: string): { key: string; ring: Exclude<Ring, "learn">; weight: number }[] {
  const v = relationsFor(major);
  const acc = new Map<string, { key: string; ring: Exclude<Ring, "learn">; weight: number }>();
  const add = (k: string, ring: Exclude<Ring, "learn">, w = 1) => {
    if (k === key) return;
    const id = `${ring}|${k}`;
    const cur = acc.get(id);
    if (cur) cur.weight += w; else acc.set(id, { key: k, ring, weight: w });
  };
  if (v) {
    for (const e of v.out.get(key) ?? []) add(e.t, PAGE_KINDS.has(e.k) && e.k !== "source_table" ? "pages" : "relates");
    for (const e of v.in.get(key) ?? []) {
      if (e.k === "extends") add(e.s, "extensions");
      else if (PAGE_KINDS.has(e.k) || e.k === "runs_on") add(e.s, "pages");
      else add(e.s, "referenced");
    }
    for (const ev of Object.values(v.rel.events[key] ?? {})) for (const s of ev.subs) add(s.s, "subscribers");
  }
  // calls, both directions, weighted by the number of procedure pairs (D67)
  for (const e of callsFor(major)?.get(key) ?? []) add(e.s === key ? e.t : e.s, "calls", e.n);
  return [...acc.values()];
}

export { CODE_RINGS, type CodeRing, type NameRow, type RingRow };
/** [event name, kind, obsolete | null, [[subscriber key, procedure]]] */
export type EventRow = [string, string, string | null, [string, string][]];
export interface NbObject {
  rings: Partial<Record<CodeRing, RingRow[]>>; totals: Partial<Record<CodeRing, number>>; top: Partial<Record<CodeRing, string[]>>;
  /** published events with at least one subscriber; `quiet` counts the ones without */
  events?: EventRow[]; quiet?: number; learn?: [string, string][]; media?: [string, "v" | "p", string][];
}
export interface NbFile { major: string; system: string; names: Record<string, NameRow>; objects: Record<string, NbObject> }

const root = (...p: string[]) => resolve(process.cwd(), "..", ...p);
const readJson = <T>(p: string, fallback: T): T => (existsSync(p) ? (JSON.parse(readFileSync(p, "utf8")) as T) : fallback);

/** Every major with a relations file, oldest first. */
export function relationMajors(): string[] {
  const dir = root("data", "code", "relations");
  return existsSync(dir) ? readdirSync(dir).filter((f) => /^\d+\.json$/.test(f)).map((f) => f.slice(0, -5)).sort((a, b) => Number(a) - Number(b)) : [];
}

let rowsCache: Map<string, [string, string, number | null, string, string | null, string | null]> | null = null;
const objectRows = () => (rowsCache ??= new Map(readJson<{ rows: [string, string, number | null, string, string | null, string | null][] }>(root("data", "index", "objects.json"), { rows: [] }).rows.map((r) => [r[0], r])));
/** Name row of a relations key: type, id, name and galaxy system (objectSystem of the page's namespace). */
export function nameOf(key: string): NameRow {
  const r = objectRows().get(key);
  if (r) return [r[1], r[2], r[3], objectSystem(r[5])];
  const [type, rest = ""] = key.split("/");
  return [type, /^\d+$/.test(rest) ? Number(rest) : null, rest, objectSystem(null)];
}
export const systemOfKey = (key: string) => nameOf(key)[3];

/** The code rings of `key` with kind, direction and fields; ring assignment as in rawNeighbours. Heaviest first. */
export function ringRows(key: string, major: string): Partial<Record<CodeRing, RingRow[]>> {
  const v = relationsFor(major);
  const acc = new Map<string, { ring: CodeRing; row: RingRow; w: number }>();
  const add = (ring: CodeRing, k: string, kind: string, dir: "in" | "out", via: string | undefined) => {
    if (k === key) return;
    const id = `${ring}|${k}|${kind}|${dir}`;
    let cur = acc.get(id);
    if (!cur) acc.set(id, (cur = { ring, row: [k, kind, dir, []], w: 0 }));
    if (via && !cur.row[3].includes(via)) cur.row[3].push(via);
  };
  if (v) {
    for (const e of v.out.get(key) ?? []) add(PAGE_KINDS.has(e.k) && e.k !== "source_table" ? "pages" : "relates", e.t, e.k, "out", e.via);
    for (const e of v.in.get(key) ?? []) add(e.k === "extends" ? "extensions" : PAGE_KINDS.has(e.k) || e.k === "runs_on" ? "pages" : "referenced", e.s, e.k, "in", e.via);
    for (const [name, ev] of Object.entries(v.rel.events[key] ?? {})) for (const s of ev.subs) add("subscribers", s.s, "subscribes", "in", name);
  }
  const out: Partial<Record<CodeRing, RingRow[]>> = {};
  for (const a of acc.values()) { a.row[3].sort(); (out[a.ring] ??= []).push(a.row); }
  for (const r of Object.keys(out) as CodeRing[]) out[r] = sortRows(out[r]!);
  return out;
}

interface Extras { learn: Map<string, [string, string][]>; media: Map<string, [string, "v" | "p", string][]> }
let extras: Extras | null = null;
/** Unquoted YAML scalar of a frontmatter line (the titles of videos and posts). */
const yamlScalar = (s: string) => { s = s.trim(); if (s.startsWith('"')) { try { return JSON.parse(s) as string; } catch { return s.slice(1, -1); } } return s.startsWith("'") ? s.slice(1, -1).replace(/''/g, "'") : s; };
function titleOf(file: string): string | null {
  if (!existsSync(file)) return null;
  const m = /^title:\s*(.+)$/m.exec(readFileSync(file, "utf8").split(/^---$/m)[1] ?? "");
  return m ? yamlScalar(m[1]) : null;
}
/** Learn pages naming an object (docs-objects.json by_object) and videos and posts mentioning it (graph mentions edges). */
function loadExtras(): Extras {
  if (extras) return extras;
  const learn = new Map<string, [string, string][]>();
  const by = readJson<{ by_object?: Record<string, { url: string; title: string }[]> }>(root("data", "index", "docs-objects.json"), {}).by_object ?? {};
  for (const [k, list] of Object.entries(by)) {
    const seen = new Set<string>();
    learn.set(k, list.filter((l) => l.url && !seen.has(l.url) && seen.add(l.url)).map((l) => [l.url, l.title]));
  }
  const media = new Map<string, [string, "v" | "p", string][]>();
  const full = root("data", "graph", "full.jsonl");
  if (existsSync(full)) for (const line of readFileSync(full, "utf8").split("\n")) {
    if (!line.includes('"mentions"')) continue;
    const e = JSON.parse(line) as { s: string; t: string; type: string };
    // the graph writes mentions from the object to the video or post
    const [obj, body] = e.s.startsWith("object/") ? [e.s, e.t] : [e.t, e.s];
    if (e.type !== "mentions" || !obj.startsWith("object/") || !/^(video|post)\//.test(body)) continue;
    const isVideo = body.startsWith("video/"), id = body.slice(body.indexOf("/") + 1);
    const title = titleOf(root("content", isVideo ? "videos" : "posts", `${id}.md`)) ?? id;
    const list = media.get(obj.slice(7)) ?? [];
    if (!list.some((m) => m[0] === id)) list.push([id, isVideo ? "v" : "p", title]);
    media.set(obj.slice(7), list);
  }
  for (const list of media.values()) list.sort((a, b) => a[0].localeCompare(b[0]));
  return (extras = { learn, media });
}

/** One object's entry in the neighbour files: rings, totals, the top 7 per ring, events, Learn pages and media. */
export function nbObject(key: string, major: string): NbObject | null {
  const v = relationsFor(major);
  const rings = ringRows(key, major), totals: NbObject["totals"] = {}, top: NbObject["top"] = {};
  for (const [r, rows] of Object.entries(rings) as [CodeRing, RingRow[]][]) { totals[r] = new Set(rows.map((x) => x[0])).size; top[r] = topKeys(rows); }
  const o: NbObject = { rings, totals, top };
  const all = Object.entries(v?.rel.events[key] ?? {}).sort((a, b) => a[0].localeCompare(b[0])), evs = all.filter(([, e]) => e.subs.length);
  if (all.length > evs.length) o.quiet = all.length - evs.length;
  if (evs.length) o.events = evs.map(([name, e]) => [name, e.kind, (e as { obsolete?: string | null }).obsolete ?? null, e.subs.map((s) => [s.s, s.proc] as [string, string])]);
  const x = loadExtras();
  if (x.learn.get(key)?.length) o.learn = x.learn.get(key);
  if (x.media.get(key)?.length) o.media = x.media.get(key);
  return Object.keys(rings).length || o.events || o.quiet || o.learn || o.media ? o : null;
}

const fileCache = new Map<string, Map<string, NbFile>>();
/**
 * The neighbour files of a major (D66 phase 3, replacing the D59 type shards): one per galaxy system, every object of
 * that system that has a code relation, an event, a Learn page or a video or post, plus the names of every object the
 * file mentions. The explorer loads the file of the centre's system and the next one on a re-centre.
 */
export function neighbourFiles(major: string): Map<string, NbFile> {
  if (fileCache.has(major)) return fileCache.get(major)!;
  const v = relationsFor(major);
  const keys = new Set<string>();
  if (v) {
    for (const e of v.rel.edges) { keys.add(e.s); keys.add(e.t); }
    for (const [k, evs] of Object.entries(v.rel.events)) { keys.add(k); for (const e of Object.values(evs)) for (const s of e.subs) keys.add(s.s); }
  }
  const files = new Map<string, NbFile>();
  for (const key of [...keys].sort()) {
    const o = nbObject(key, major);
    if (!o) continue;
    const system = systemOfKey(key);
    let f = files.get(system);
    if (!f) files.set(system, (f = { major, system, names: {}, objects: {} }));
    f.objects[key] = o;
    const named = new Set([key, ...Object.values(o.rings).flatMap((rows) => rows!.map((r) => r[0])), ...(o.events ?? []).flatMap((e) => e[3].map((s) => s[0]))]);
    for (const k of named) f.names[k] ??= nameOf(k);
  }
  for (const f of files.values()) f.names = Object.fromEntries(Object.entries(f.names).sort((a, b) => a[0].localeCompare(b[0])));
  const sorted = new Map([...files].sort((a, b) => a[0].localeCompare(b[0])));
  fileCache.set(major, sorted);
  return sorted;
}
/** index.json of a major: system -> the keys its file holds, so the explorer finds a key's file without `s`. */
export const neighbourIndex = (major: string): Record<string, string[]> => Object.fromEntries([...neighbourFiles(major)].map(([s, f]) => [s, Object.keys(f.objects)]));

/** The one-hop diagram on an object page: the top neighbour per ring (max 5) and the number of links. */
export function oneHop(key: string, major: string): { top: { ring: CodeRing; key: string; kind: string; dir: "in" | "out"; system: string }[]; links: number; system: string } | null {
  const rings = ringRows(key, major);
  const top = CODE_RINGS.filter((r) => rings[r]?.length).map((ring) => { const [k, kind, dir] = rings[ring]![0]; return { ring, key: k, kind, dir, system: systemOfKey(k) }; });
  if (!top.length) return null;
  const links = Object.values(rings).reduce((n, rows) => n + rows!.reduce((m, r) => m + Math.max(1, r[3].length), 0), 0);
  return { top, links, system: systemOfKey(key) };
}

/** One-hop neighbours of `key`, grouped and capped (each non-empty ring keeps at least two). */
export function neighbourhood(key: string, major: string, lookup: (k: string) => Lookup | null, learn: { url: string; title: string }[]): { nodes: Neighbour[]; totals: Record<Ring, number> } {
  const acc = new Map<string, Neighbour>();
  for (const n of rawNeighbours(key, major)) {
    const l = lookup(n.key);
    acc.set(`${n.ring}|${n.key}`, { key: n.key, ring: n.ring, weight: n.weight, label: l?.title ?? n.key, href: l ? `objects/${l.pk}/` : null, system: l?.system ?? null, kind: l?.type ?? n.key.split("/")[0] });
  }
  learn.forEach((l, i) => acc.set(`learn|${l.url}`, { key: `learn/${i}`, ring: "learn", weight: 1, label: l.title, href: l.url, system: null, kind: "learn" }));
  const all = [...acc.values()];
  const totals = Object.fromEntries((Object.keys(RING_LABEL) as Ring[]).map((r) => [r, all.filter((n) => n.ring === r).length])) as Record<Ring, number>;
  // keep the heaviest overall, but every ring that exists keeps at least two
  const byRing = new Map<Ring, Neighbour[]>();
  for (const n of all) byRing.set(n.ring, [...(byRing.get(n.ring) ?? []), n]);
  for (const list of byRing.values()) list.sort((a, b) => b.weight - a.weight || a.label.localeCompare(b.label));
  const keep = new Set<Neighbour>();
  for (const list of byRing.values()) for (const n of list.slice(0, 2)) keep.add(n);
  for (const n of all.sort((a, b) => b.weight - a.weight || a.label.localeCompare(b.label))) { if (keep.size >= CAP) break; keep.add(n); }
  const nodes = all.filter((n) => keep.has(n));
  return { nodes, totals };
}

export interface Placed extends Neighbour { x: number; y: number; r: number }
/** Radial layout: rings get a sector proportional to their node count (at least 36 degrees), nodes along the arc. */
export function layoutRadial(nodes: Neighbour[], W = 760, H = 420): Placed[] {
  const order: Ring[] = ["relates", "pages", "extensions", "subscribers", "calls", "referenced", "learn"];
  const groups = order.map((r) => nodes.filter((n) => n.ring === r)).filter((g) => g.length);
  const minA = (36 * Math.PI) / 180, total = nodes.length || 1;
  const sectors = groups.map((g) => Math.max(minA, (g.length / total) * 2 * Math.PI));
  const scale = (2 * Math.PI) / sectors.reduce((a, b) => a + b, 0);
  const cx = W / 2, cy = H / 2, R = Math.min(W, H) / 2 - 36;
  const out: Placed[] = [];
  let a0 = -Math.PI / 2;
  groups.forEach((g, i) => {
    const span = sectors[i] * scale;
    g.forEach((n, j) => {
      const a = a0 + (span * (j + 0.5)) / g.length;
      // alternate two radii inside busy sectors so labels have room
      const rr = g.length > 6 && j % 2 ? R * 0.72 : R;
      out.push({ ...n, x: cx + Math.cos(a) * rr, y: cy + Math.sin(a) * rr * 0.9, r: Math.min(9, 3.5 + Math.sqrt(n.weight) * 1.2) });
    });
    a0 += span;
  });
  return out;
}
