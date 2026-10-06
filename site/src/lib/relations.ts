/**
 * Build-time view of data/code/relations/<major>.json (D45) for the object pages: the one-hop neighbourhood of an
 * object, grouped into rings and capped, laid out radially for an inline SVG. The file is read once per major per
 * build; nothing here runs in the browser.
 */
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

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

export type Ring = "relates" | "referenced" | "pages" | "extensions" | "subscribers" | "learn";
export const RING_LABEL: Record<Ring, string> = { relates: "relates to", referenced: "referenced by", pages: "pages and codeunits on it", extensions: "extended by", subscribers: "event subscribers", learn: "Learn pages" };
export interface Neighbour { key: string; ring: Ring; weight: number; label: string; href: string | null; system: string | null; kind: string }
export interface Lookup { pk: string; title: string; system: string | null; type: string }

const PAGE_KINDS = new Set(["source_table", "lookup_page", "drilldown_page", "card_page"]);
const CAP = 40;

/** One-hop neighbours of `key`, grouped and capped (each non-empty ring keeps at least two). */
export function neighbourhood(key: string, major: string, lookup: (k: string) => Lookup | null, learn: { url: string; title: string }[]): { nodes: Neighbour[]; totals: Record<Ring, number> } {
  const v = relationsFor(major);
  const acc = new Map<string, Neighbour>();
  const add = (k: string, ring: Ring, kind: string, w = 1) => {
    const id = `${ring}|${k}`;
    const cur = acc.get(id);
    if (cur) { cur.weight += w; return; }
    const l = lookup(k);
    acc.set(id, { key: k, ring, weight: w, label: l?.title ?? k, href: l ? `objects/${l.pk}/` : null, system: l?.system ?? null, kind: l?.type ?? k.split("/")[0] });
  };
  if (v) {
    for (const e of v.out.get(key) ?? []) add(e.t, PAGE_KINDS.has(e.k) && e.k !== "source_table" ? "pages" : "relates", e.k);
    for (const e of v.in.get(key) ?? []) {
      if (e.k === "extends") add(e.s, "extensions", e.k);
      else if (PAGE_KINDS.has(e.k) || e.k === "runs_on") add(e.s, "pages", e.k);
      else add(e.s, "referenced", e.k);
    }
    for (const ev of Object.values(v.rel.events[key] ?? {})) for (const s of ev.subs) add(s.s, "subscribers", "subscribes");
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
  const order: Ring[] = ["relates", "pages", "extensions", "subscribers", "referenced", "learn"];
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
