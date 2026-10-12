/**
 * D89: the object page's reading aids without the DOM, so the tests import them the way they import pills-core.ts
 * (no `node:` imports, nothing that runs at import). object-page.ts mounts them from Page.astro's one module script:
 * every aid is built in the browser from the markup the page already ships, so no object page gains a byte (D88).
 */

export type Sym = "+" | "−" | "Δ"; // U+002B, U+2212, U+0394, as versions.ts writes them
export interface Change { sym: Sym; version: number }
export type Order = "source" | "no" | "name" | "type" | "changed";
/** A member section: what its rows are called, the orders that mean something, the columns (or "item") compact mode clamps. */
export interface SectionDef { noun: string; orders: Order[]; clamp: string[] | "item" | null }
/** B2: sections with fewer rows get no toolbar. */
export const MIN_ROWS = 12;
/** B2: the member sections by their h2 id. Grouped tables (Fields on this page, Actions) and Keys get no order: a sort breaks the group column. */
export const MEMBER_SECTIONS: Record<string, SectionDef> = {
  fields: { noun: "fields", orders: ["source", "no", "name", "type", "changed"], clamp: ["Explanation", "Notes"] },
  "fields-on-this-page": { noun: "controls", orders: [], clamp: ["Shows", "ToolTip"] },
  actions: { noun: "actions", orders: [], clamp: ["ToolTip"] },
  values: { noun: "values", orders: ["source", "no", "name"], clamp: null },
  keys: { noun: "keys", orders: [], clamp: null },
  "events-published": { noun: "events", orders: ["source", "name", "changed"], clamp: "item" },
  "event-subscriptions": { noun: "subscriptions", orders: ["source", "name"], clamp: null },
  procedures: { noun: "procedures", orders: ["source", "name", "changed"], clamp: "item" },
};
export const ORDER_LABEL: Record<Order, string> = { source: "As declared", no: "No.", name: "Name", type: "Type", changed: "Changed in, newest first" };
/** The label of an order in a section's select: a value's number is its ordinal. */
export const orderLabel = (section: string, o: Order): string => (o === "no" && section === "values" ? "Ordinal" : ORDER_LABEL[o]);
/** What a row is ordered by: the number and name and type of a table row, the name of a list item, its changes. */
export interface RowFacts { no: number | null; name: string; type: string; changes: Change[] }

/** B1: an "On this page" list when the main column has 6+ sections, or 3+ and is taller than four screens. */
export function tocWanted(sections: number, mainHeight: number, viewport: number): boolean {
  return sections >= 3 && (sections >= 6 || mainHeight > 4 * viewport);
}

const num = (s: string) => Number(s.replace(/,/g, ""));
/**
 * B1: what a section lists. The leading number of the heading's <small> ("311 connected ...", "1,234 sources"); else
 * the rows of its table; else its top-level items, where an item "and <n> more ..." counts n. Null when there is
 * nothing to count or the count is 0.
 */
export function sectionCount(s: { small?: string | null; rows?: number; items?: string[] }): number | null {
  const lead = /^\s*(\d[\d,]*)/.exec(s.small ?? "");
  if (lead) return num(lead[1]) || null;
  if (s.rows) return s.rows;
  let n = 0;
  for (const t of s.items ?? []) {
    const more = /^\s*and (\d[\d,]*) more\b/.exec(t);
    n += more ? num(more[1]) : 1;
  }
  return n || null;
}

/** B1: the section being read: the last heading whose top is at or above the line; 0 before the first; the last at the bottom. */
export function currentSection(tops: number[], line: number, atBottom: boolean): number {
  if (atBottom) return tops.length - 1;
  let i = 0;
  tops.forEach((t, j) => { if (t <= line) i = j; });
  return i;
}

const norm = (s: string) => s.toLowerCase().replace(/\s+/g, " ").trim();
/** B2: lower-cased, whitespace collapsed; every word of the query occurs in the text; an empty query matches. */
export function rowMatches(text: string, query: string): boolean {
  const t = norm(text);
  return norm(query).split(" ").every((w) => !w || t.includes(w));
}

/** B2: a list item's name: its signature up to "(", else its text up to " subscribes to " or ":", trimmed. */
export function listItemName(code: string | null, text: string): string {
  if (code) return code.split("(")[0].trim();
  const cuts = [text.indexOf(" subscribes to "), text.indexOf(":")].filter((i) => i >= 0);
  return (cuts.length ? text.slice(0, Math.min(...cuts)) : text).trim();
}

/** B2: the indexes of the section's clamp columns by header text, "item" for a list, null when nothing clamps. */
export function clampColumns(section: string, headers: string[]): number[] | "item" | null {
  const c = MEMBER_SECTIONS[section]?.clamp;
  if (!c || c === "item") return c ?? null;
  const ix = headers.map((h, i) => (c.includes(h.trim()) ? i : -1)).filter((i) => i >= 0);
  return ix.length ? ix : null;
}

/** B2: the section's orders; "changed" only when a row of it has a change. */
export function orderOptions(section: string, hasChanges: boolean): Order[] {
  return (MEMBER_SECTIONS[section]?.orders ?? []).filter((o) => o !== "changed" || hasChanges);
}

const collator = new Intl.Collator("en", { numeric: true, sensitivity: "base" });
const newest = (r: RowFacts) => Math.max(-1, ...r.changes.map((c) => c.version));
const byNo = (a: RowFacts, b: RowFacts) => (a.no === null ? (b.no === null ? 0 : 1) : b.no === null ? -1 : a.no - b.no);
/**
 * B2: a stable permutation of the row indexes. no: numeric, rows without a number last; name, type: natural order
 * ("Code[20]" before "Code[100]"), case-insensitive; changed: the newest change first, unchanged rows last, then by number.
 */
export function sortOrder(rows: RowFacts[], order: Order): number[] {
  const cmp: Record<Order, (a: RowFacts, b: RowFacts) => number> = {
    source: () => 0,
    no: byNo,
    name: (a, b) => collator.compare(a.name, b.name),
    type: (a, b) => collator.compare(a.type, b.type),
    changed: (a, b) => newest(b) - newest(a) || byNo(a, b),
  };
  return rows.map((_, i) => i).sort((i, j) => cmp[order](rows[i], rows[j]) || i - j);
}

/** B2, B3: per row, whether it shows: it matches the filter and, with a version chip set, it changed in that version. */
export function visibleRows(rows: { text: string; changes: Change[] }[], query: string, version: number | null): boolean[] {
  return rows.map((r) => rowMatches(r.text, query) && (version === null || r.changes.some((c) => c.version === version)));
}

/** D86: what to undo so a targeted row shows: a hidden row clears whatever is set; a compact section opens the row. */
export function revealPlan(t: { query: string; version: number | null; matchesQuery: boolean; matchesVersion: boolean; clamped: boolean }):
  { clearQuery: boolean; clearVersion: boolean; openRow: boolean } {
  const hidden = !(t.matchesQuery && t.matchesVersion);
  return { clearQuery: hidden && t.query.trim() !== "", clearVersion: hidden && t.version !== null, openRow: t.clamped };
}

/** B2, B3: the changes a member pill names (versions.ts writes "Δ BC25 Δ BC26", "+ BC25", "− BC25"). */
export function parsePill(text: string): Change[] {
  return [...text.matchAll(/([+−Δ])\s*BC(\d+)/g)].map((m) => ({ sym: m[1] as Sym, version: Number(m[2]) }));
}

const KIND: Record<Sym, string> = { "+": "added", "−": "removed", "Δ": "changed" };
/** B3: the pill's title, by change kind in order of first appearance: "added in BC24; changed in BC26, BC27" (the D88 wording). */
export function pillTitle(changes: Change[]): string {
  const by = new Map<string, string[]>();
  for (const c of changes) by.set(KIND[c.sym], [...(by.get(KIND[c.sym]) ?? []), `BC${c.version}`]);
  return [...by].map(([k, v]) => `${k} in ${v.join(", ")}`).join("; ");
}

/**
 * B3: the "Changed in" chips of a section: per major, oldest first, the rows naming it (a row once, whatever the kind).
 * Null without changes, or when every chip would show every row (every row names the same majors): it filters nothing.
 */
export function versionChips(rows: Change[][]): { version: number; count: number }[] | null {
  const n = new Map<number, number>();
  for (const r of rows) for (const v of new Set(r.map((c) => c.version))) n.set(v, (n.get(v) ?? 0) + 1);
  const chips = [...n].sort((a, b) => a[0] - b[0]).map(([version, count]) => ({ version, count }));
  return chips.length && chips.some((c) => c.count < rows.length) ? chips : null;
}

/** B3: the version transition page that ends in `version`; null for the timeline's oldest major, which has none. */
export function transitionHref(base: string, version: number, oldest: number): string | null {
  return version > oldest ? `${base}code/versions/${version - 1}__${version}/` : null;
}
