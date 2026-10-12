/**
 * D91: the filter engine of the list pages (changes, videos, posts) and the features table. Pure, no DOM: facets are
 * pill sets over one value of a row (repository, kind, major, channel or blog, year, wave, status, area), switches are
 * pills that hold or not ("breaking only"). The state lives in the query string, left out when everything is on (D82).
 * A pill's count is the rows it would show with its facet set to it alone, so counts follow the other filters.
 */
import { parsePills, pillsParam, usablePills } from "./pills-core.js";

export interface Facet<R> { id: string; value: (r: R) => string }
export interface Switch<R> { id: string; test: (r: R) => boolean }
/** A facet as the markup lists it: its pill ids in pill order. */
export interface FacetDef { id: string; values: readonly string[] }
export interface ListState { on: Record<string, Set<string>>; sw: Set<string> }
export interface Counts { facets: Record<string, Record<string, number>>; switches: Record<string, number> }

/** Every facet full and no switch pressed. */
export function isAllOn(st: ListState, defs: readonly FacetDef[]): boolean {
  return st.sw.size === 0 && defs.every((d) => d.values.every((v) => st.on[d.id]?.has(v) ?? true));
}

/** A row passes when, for each facet except `skip`, its value is pressed, and every pressed switch (except `skip`) holds. */
export function matchRow<R>(r: R, facets: readonly Facet<R>[], switches: readonly Switch<R>[], st: ListState, skip?: string): boolean {
  for (const f of facets) if (f.id !== skip && st.on[f.id] && !st.on[f.id].has(f.value(r))) return false;
  for (const s of switches) if (s.id !== skip && st.sw.has(s.id) && !s.test(r)) return false;
  return true;
}

export function filterRows<R>(rows: readonly R[], facets: readonly Facet<R>[], switches: readonly Switch<R>[], st: ListState): R[] {
  return rows.filter((r) => matchRow(r, facets, switches, st));
}

/** Per facet value: the rows that pass every other facet and the pressed switches. Per switch: the rows that pass every
 *  facet and the other switches and hold for it. Values with no row are absent (read as 0). */
export function facetCounts<R>(rows: readonly R[], facets: readonly Facet<R>[], switches: readonly Switch<R>[], st: ListState): Counts {
  const out: Counts = { facets: {}, switches: {} };
  for (const f of facets) {
    const c: Record<string, number> = (out.facets[f.id] = {});
    for (const r of rows) if (matchRow(r, facets, switches, st, f.id)) { const v = f.value(r); c[v] = (c[v] ?? 0) + 1; }
  }
  for (const s of switches) out.switches[s.id] = rows.filter((r) => s.test(r) && matchRow(r, facets, switches, st, s.id)).length;
  return out;
}

/** From a query string: each facet through parsePills over its values; a switch is on only for "1". */
export function readListState(search: string, defs: readonly FacetDef[], switches: readonly string[]): ListState {
  const q = new URLSearchParams(search);
  return { on: Object.fromEntries(defs.map((d) => [d.id, parsePills(q.get(d.id), d.values)])), sw: new Set(switches.filter((s) => q.get(s) === "1")) };
}

/** The query string for a state, keeping other parameters: pillsParam per facet, "1" per pressed switch, commas
 *  readable ("%2C" back to ","), "" when nothing is left. */
export function listSearch(search: string, st: ListState, defs: readonly FacetDef[], switches: readonly string[]): string {
  const q = new URLSearchParams(search);
  for (const d of defs) { const v = pillsParam(st.on[d.id] ?? new Set(d.values), d.values); if (v) q.set(d.id, v); else q.delete(d.id); }
  for (const s of switches) if (st.sw.has(s)) q.set(s, "1"); else q.delete(s);
  const s = q.toString().replace(/%2C/gi, ",");
  return s ? `?${s}` : "";
}

/** The state with everything on. */
const allOn = (defs: readonly FacetDef[]): ListState => ({ on: Object.fromEntries(defs.map((d) => [d.id, new Set(d.values)])), sw: new Set() });

/** On load: each facet through usablePills with its counts over all rows; then, if no row passes, everything on. */
export function rescueState<R>(rows: readonly R[], facets: readonly Facet<R>[], switches: readonly Switch<R>[], st: ListState, defs: readonly FacetDef[]): ListState {
  const on: Record<string, Set<string>> = {};
  for (const d of defs) {
    const f = facets.find((x) => x.id === d.id);
    const counts: Record<string, number> = Object.fromEntries(d.values.map((v) => [v, 0]));
    if (f) for (const r of rows) { const v = f.value(r); if (v in counts) counts[v]++; }
    on[d.id] = usablePills(st.on[d.id] ?? new Set(d.values), counts, d.values);
  }
  const next: ListState = { on, sw: new Set(st.sw) };
  return rows.some((r) => matchRow(r, facets, switches, next)) ? next : allOn(defs);
}

/** A facet folds into a closed details when it has more than 8 values or more than 120 characters of labels. */
export function foldFacet(labels: readonly string[]): boolean {
  return labels.length > 8 || labels.join("").length > 120;
}

/** The fold's summary: "Blog · all 21", "Blog · Stefano Demiliani", "Blog · 3 of 21". */
export function facetSummary(label: string, on: Set<string>, values: readonly { id: string; label: string }[]): string {
  const pressed = values.filter((v) => on.has(v.id));
  const state = pressed.length === values.length ? `all ${values.length}` : pressed.length === 1 ? pressed[0].label : `${pressed.length} of ${values.length}`;
  return `${label} · ${state}`;
}

/** URL-safe id of a wave or an area: lower case, accents dropped, runs of other characters to "-", trimmed. */
export const slug = (s: string): string =>
  s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
