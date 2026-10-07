/**
 * The neighbourhood explorer (D66 phase 3) without the DOM: ring order and the top 7, placement on the rings,
 * grouping by system, URL state. The build (site/src/lib/relations.ts) and the browser (explorer.ts) share it.
 */
export const RINGS = ["relates", "referenced", "pages", "extensions", "subscribers"] as const;
export type Ring = (typeof RINGS)[number];
/** [neighbour key, relation kind, "out" when the centre is the source, field names it runs through] */
export type RingRow = [string, string, "in" | "out", string[]];
export const TOP = 7;

/** Distinct relations a row stands for: one per field, a relation without a field counts once. */
export const rowWeight = (r: RingRow) => Math.max(1, r[3].length);

/** Neighbours of a ring, most connected first (distinct relations between the two), ties by key. */
export function rankKeys(rows: RingRow[]): { key: string; weight: number; rows: RingRow[] }[] {
  const acc = new Map<string, { key: string; weight: number; rows: RingRow[] }>();
  for (const r of rows) {
    const cur = acc.get(r[0]) ?? { key: r[0], weight: 0, rows: [] };
    cur.weight += rowWeight(r); cur.rows.push(r);
    acc.set(r[0], cur);
  }
  return [...acc.values()].sort((a, b) => b.weight - a.weight || (a.key < b.key ? -1 : a.key > b.key ? 1 : 0));
}
export const topKeys = (rows: RingRow[], n = TOP) => rankKeys(rows).slice(0, n).map((x) => x.key);

/** Rows of a ring in rank order: the heaviest neighbour's rows first, inside a neighbour the heaviest kind first. */
export const sortRows = (rows: RingRow[]) => rankKeys(rows).flatMap((x) => x.rows.sort((a, b) => rowWeight(b) - rowWeight(a) || (a[1] < b[1] ? -1 : 1)));

/** The kind a neighbour's edge is drawn with: the kind with most fields between the two. */
export const primaryKind = (rows: RingRow[]) => [...rows].sort((a, b) => rowWeight(b) - rowWeight(a) || (a[1] < b[1] ? -1 : 1))[0]?.[1] ?? "";

/** Line style per relation kind (tokens neighbourhood.edgeStyle); subscribes and learn are ours. */
export const EDGE: Record<string, "solid" | "dashed" | "dotted" | "double" | "dashdot"> = {
  table_relation: "solid", source_table: "dashed", lookup_page: "dashed", drilldown_page: "dashed", card_page: "dashed", runs_on: "dashed",
  calc_formula: "dotted", extends: "double", learn: "dotted", subscribes: "dashdot",
};
export const edgeStyle = (kind: string) => EDGE[kind] ?? "solid";

export interface Pt { x: number; y: number; a: number }
const rad = (d: number) => (d * Math.PI) / 180;
const at = (cx: number, cy: number, r: number, deg: number): Pt => ({ x: cx + Math.cos(rad(deg)) * r, y: cy + Math.sin(rad(deg)) * r, a: deg });

/**
 * Up to 7 nodes on one side of a ring, top to bottom: right = the centre points to them, left = they point to the
 * centre. 20 degrees apart, centred on the horizontal axis, never beyond 60 degrees from it.
 */
export function placeSide(n: number, side: "right" | "left", cx: number, cy: number, r: number): Pt[] {
  const k = Math.min(n, TOP), step = k > 1 ? Math.min(20, 120 / (k - 1)) : 0;
  return Array.from({ length: k }, (_, i) => {
    const d = -((k - 1) * step) / 2 + i * step;
    return at(cx, cy, r, side === "right" ? d : 180 - d);
  });
}
/** Ring 2 pills below the centre: pages and codeunits right, extensions on the divider, subscribers left. */
export function placePills(cx: number, cy: number, r: number): Record<"pages" | "extensions" | "subscribers", Pt> {
  return { pages: at(cx, cy, r, 64), extensions: at(cx, cy, r, 90), subscribers: at(cx, cy, r, 116) };
}
/** The top arc (60 degrees at ring 2): Learn pages and videos or posts, left to right. */
export function placeArc(n: number, cx: number, cy: number, r: number): Pt[] {
  const step = n > 1 ? 60 / (n - 1) : 0;
  return Array.from({ length: n }, (_, i) => at(cx, cy, r, n > 1 ? -120 + i * step : -90));
}
/** A neighbour's own top neighbours, `gap` beyond the ring, fanned around its angle. */
export function placeFan(n: number, deg: number, cx: number, cy: number, r: number, spread = 9): Pt[] {
  return Array.from({ length: n }, (_, i) => at(cx, cy, r, deg + (i - (n - 1) / 2) * spread));
}

/** Rows grouped by the system of the neighbour, biggest group first, ties by system id. */
export function groupBySystem<T>(items: T[], systemOf: (t: T) => string): [string, T[]][] {
  const g = new Map<string, T[]>();
  for (const t of items) { const s = systemOf(t); g.set(s, [...(g.get(s) ?? []), t]); }
  return [...g].sort((a, b) => b[1].length - a[1].length || (a[0] < b[0] ? -1 : 1));
}

/** Arrow-key walk along a ring side: the next or previous node, wrapping. */
export const step = (len: number, i: number, d: 1 | -1) => (len ? (i + d + len) % len : -1);

export type Mode = "relations" | "events";
export interface State { o: string | null; s: string | null; mode: Mode; v: string | null }
/** `?o=<page key>&s=<system>&mode=relations|events&v=<major>`; anything unknown falls back to the defaults. */
export function parseState(search: string): State {
  const p = new URLSearchParams(search);
  const clean = (x: string | null, re: RegExp) => (x && re.test(x) ? x : null);
  return {
    o: clean(p.get("o")?.trim().toLowerCase() ?? null, /^[a-z]+\/[^\s?#&]+$/),
    s: clean(p.get("s"), /^[a-z-]+$/),
    mode: p.get("mode") === "events" ? "events" : "relations",
    v: clean(p.get("v"), /^\d+$/),
  };
}
export function serialiseState(st: State): string {
  const parts: string[] = [];
  if (st.o) parts.push(`o=${encodeURIComponent(st.o).replace(/%2F/g, "/")}`);
  if (st.s) parts.push(`s=${st.s}`);
  parts.push(`mode=${st.mode}`);
  if (st.v) parts.push(`v=${st.v}`);
  return `?${parts.join("&")}`;
}

/** Type labels as the rest of the site writes them. */
export const TYPE_LABEL: Record<string, string> = { table: "Table", tableextension: "Table extension", page: "Page", pageextension: "Page extension", codeunit: "Codeunit", report: "Report", reportextension: "Report extension", query: "Query", xmlport: "XMLport", enum: "Enum", enumextension: "Enum extension", interface: "Interface", permissionset: "Permission set", permissionsetextension: "Permission set extension", entitlement: "Entitlement", profile: "Profile", controladdin: "Control add-in", pagecustomization: "Page customization" };
/** [type, id | null, name, system] */
export type NameRow = [string, number | null, string, string];
export const objectTitle = (n: NameRow) => `${TYPE_LABEL[n[0]] ?? n[0]}${n[1] !== null ? ` ${n[1]}` : ""} "${n[2]}"`;
/** Key of a typed reference from the form: "table" + "18" -> table/18. */
export const keyOf = (type: string, id: string) => (/^\d+$/.test(id.trim()) ? `${type}/${Number(id.trim())}` : null);
