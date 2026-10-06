/**
 * Relations between AL objects (D45), deterministic, from the extracted metadata of one major (W1 + first-party apps):
 *
 * - edges: field TableRelation and CalcFormula targets, page SourceTable, codeunit TableNo (`runs_on`), Lookup/
 *   DrillDown/Card page ids, extension -> base object. One edge per (source, target, kind, member).
 * - events: every published event of every object with the subscribers resolved to it, plus subscriptions to table
 *   and page trigger events (OnAfterDeleteEvent, OnAfterValidateEvent(Field)) as `trigger_event` entries.
 * - dead_events: integration and business events nobody in W1 + apps subscribes to.
 * - unresolved: references the resolver could not place, with the reason (clipped: the property value was cut at
 *   300 characters by the extractor; unknown: no object of that type and name; ambiguous: several).
 *
 * Resolution is by exact object type and name, the way AL itself refers to objects (D29: exact ids only, never a
 * guess): the same app first, then W1, then the other apps. The markdown object pages and the site read this file;
 * reverse lookups (referenced by, extended by) are built by the reader.
 */
import { objectKey, type AlObject, type AlProcedure } from "./extract.js";

export type EdgeKind = "table_relation" | "calc_formula" | "source_table" | "runs_on" | "lookup_page" | "drilldown_page" | "card_page" | "extends";
export interface RelEdge { s: string; t: string; k: EdgeKind; via?: string; cond?: true }
export interface Subscriber { s: string; proc: string; app: string | null }
export interface PublishedEvent { kind: "integration" | "business" | "internal" | "trigger_event"; obsolete: string | null; subs: Subscriber[] }
export interface Unresolved { s: string; k: EdgeKind | "subscribes"; raw: string; reason: "clipped" | "unknown" | "ambiguous" }
export interface Relations {
  schema: "al-relations@1"; major: string;
  edges: RelEdge[];
  /** publisher key -> event name (with the element for trigger events) -> the event and its subscribers */
  events: Record<string, Record<string, PublishedEvent>>;
  /** Integration and business events with no subscriber in W1 + apps (most of them: they exist for partners). */
  dead_events: { count: number };
  unresolved: Unresolved[];
  stats: Record<string, number>;
}

const BASE_OF: Record<string, string> = { tableextension: "table", pageextension: "page", enumextension: "enum", reportextension: "report", permissionsetextension: "permissionset" };
const PAGE_PROPS: [string[], EdgeKind][] = [[["LookupPageId", "LookupPageID"], "lookup_page"], [["DrillDownPageId", "DrillDownPageID"], "drilldown_page"], [["CardPageId", "CardPageID"], "card_page"]];
const UNRESOLVED_KEPT = 3000;

/** Top-level split of an AL expression on a keyword, ignoring parentheses and quoted names. */
function splitTop(expr: string, keyword: string): string[] {
  const out: string[] = [];
  let depth = 0, quote = false, start = 0;
  const kw = ` ${keyword} `;
  for (let i = 0; i < expr.length; i++) {
    const c = expr[i];
    if (c === '"') quote = !quote;
    else if (!quote && c === "(") depth++;
    else if (!quote && c === ")") depth--;
    else if (!quote && depth === 0 && expr.startsWith(kw, i)) { out.push(expr.slice(start, i)); start = i + kw.length; i += kw.length - 1; }
  }
  out.push(expr.slice(start));
  return out.map((x) => x.trim()).filter(Boolean);
}

/**
 * The object name an AL reference starts with: `"Post Code".City where(...)` -> Post Code; `Bin.Code` -> Bin;
 * `Customer` -> Customer. The extractor strips the quotes from a plain quoted value (`"Country/Region"` arrives as
 * `Country/Region`), so a value without quotes, field access or where clause is the whole name.
 */
export function refName(expr: string): string | null {
  let s = expr.trim();
  // leading `if (...)` conditions
  while (/^if\s*\(/i.test(s)) {
    let depth = 0, i = s.indexOf("(");
    for (; i < s.length; i++) { if (s[i] === "(") depth++; else if (s[i] === ")" && --depth === 0) break; }
    if (i >= s.length) return null;
    s = s.slice(i + 1).trim();
  }
  // a namespace-qualified reference (`Microsoft.Foundation.Company."Company-Initialize"`, `System.Globalization.Language`):
  // the object is the quoted tail, or the last segment
  const ns = /^(?:[A-Za-z_]\w*\.)+(?="|[A-Za-z_]\w*$)/.exec(s);
  if (ns) s = s.slice(ns[0].length);
  if (s.startsWith('"')) { const end = s.indexOf('"', 1); return end > 1 ? s.slice(1, end) : null; }
  const cut = s.search(/\s+where\s*\(/i);
  if (cut >= 0) s = s.slice(0, cut).trim();
  // an unquoted identifier (no spaces in AL) followed by a field: `Bin.Code`
  const ident = /^([A-Za-z_]\w*)\.(?=[A-Za-z_"])/.exec(s);
  if (ident) return ident[1];
  if (/^[A-Za-z_]\w*\s*\(/.test(s) || /^where\b/i.test(s)) return null; // a call or a bare filter: no object name
  return s || null;
}

/** Branches of a TableRelation (`if ... else ...`), each resolved to its object name. */
export function relationTargets(value: string): { names: string[]; cond: boolean; clipped: boolean } {
  const clipped = value.endsWith("...");
  const branches = splitTop(clipped ? value.slice(0, -3) : value, "else");
  const names = [...new Set(branches.map(refName).filter((x): x is string => !!x))];
  return { names, cond: branches.length > 1, clipped };
}

/** The table a CalcFormula reads: `sum("Sales Line"."Outstanding Amount" where(...))` -> Sales Line. */
export function calcTarget(value: string): { name: string | null; clipped: boolean } {
  const clipped = value.endsWith("...");
  const m = /^\s*-?\s*(?:sum|count|exist|lookup|min|max|average)\s*\((.*)$/is.exec(value);
  return { name: m ? refName(m[1]) : null, clipped };
}

interface Indexed { key: string; app: string | null; w1: boolean; obj: AlObject }

/** Build the relations of one major from its objects. `isW1` tells W1 apps (Base, System, Business Foundation) from first-party apps. */
export function buildRelations(major: string, objects: AlObject[], isW1: (o: AlObject) => boolean): Relations {
  const byName = new Map<string, Indexed[]>();
  const byId = new Map<string, Indexed>();
  const all: Indexed[] = objects.map((o) => ({ key: objectKey(o), app: o.app, w1: isW1(o), obj: o }));
  for (const x of all) {
    const k = `${x.obj.type}|${x.obj.name.toLowerCase()}`;
    byName.set(k, [...(byName.get(k) ?? []), x]);
    byId.set(x.key, x);
  }
  const edges: RelEdge[] = [];
  const unresolved: Unresolved[] = [];
  const stats: Record<string, number> = {};
  const bump = (k: string) => { stats[k] = (stats[k] ?? 0) + 1; };
  const note = (u: Unresolved) => { bump(`unresolved_${u.reason}`); if (unresolved.length < UNRESOLVED_KEPT) unresolved.push(u); };
  /** Exact type + name; the same app, then W1, then the rest. Two left -> ambiguous. */
  const resolve = (from: Indexed, type: string, name: string): { key: string } | { reason: "unknown" | "ambiguous" } => {
    const cands = byName.get(`${type}|${name.toLowerCase()}`);
    if (!cands?.length) return { reason: "unknown" };
    if (cands.length === 1) return { key: cands[0].key };
    const same = cands.filter((c) => c.app === from.app);
    if (same.length === 1) return { key: same[0].key };
    const w1 = cands.filter((c) => c.w1);
    if (w1.length === 1) return { key: w1[0].key };
    return { reason: "ambiguous" };
  };
  const seen = new Set<string>();
  const edge = (from: Indexed, type: string, raw: string, name: string | null, k: EdgeKind, via?: string, cond?: boolean) => {
    if (!name) { note({ s: from.key, k, raw, reason: "unknown" }); return; }
    const r = resolve(from, type, name);
    if ("reason" in r) { note({ s: from.key, k, raw, reason: r.reason }); return; }
    const id = `${from.key}|${r.key}|${k}|${via ?? ""}`;
    if (seen.has(id)) return;
    seen.add(id);
    edges.push({ s: from.key, t: r.key, k, ...(via ? { via } : {}), ...(cond ? { cond: true as const } : {}) });
    bump(k);
  };
  const pageRef = (from: Indexed, raw: string, k: EdgeKind) => {
    const name = raw.trim().replace(/^"|"$/g, "");
    if (/^\d+$/.test(name)) { const t = byId.get(`page/${name}`); if (t) { edges.push({ s: from.key, t: t.key, k }); bump(k); } else note({ s: from.key, k, raw, reason: "unknown" }); return; }
    edge(from, "page", raw, name, k);
  };

  for (const x of all) {
    const o = x.obj;
    if (o.type === "table" || o.type === "tableextension") {
      for (const f of o.fields) {
        const tr = f.properties.TableRelation;
        if (tr) {
          const { names, cond, clipped } = relationTargets(tr);
          for (const n of names) edge(x, "table", tr, n, "table_relation", f.name, cond);
          if (clipped) note({ s: x.key, k: "table_relation", raw: tr, reason: "clipped" });
          if (!names.length && !clipped) note({ s: x.key, k: "table_relation", raw: tr, reason: "unknown" });
        }
        const cf = f.properties.CalcFormula;
        if (cf) {
          const { name, clipped } = calcTarget(cf);
          if (name) edge(x, "table", cf, name, "calc_formula", f.name);
          else if (clipped) note({ s: x.key, k: "calc_formula", raw: cf, reason: "clipped" });
          else note({ s: x.key, k: "calc_formula", raw: cf, reason: "unknown" });
        }
      }
      for (const [props, k] of PAGE_PROPS) for (const p of props) if (o.properties[p]) pageRef(x, o.properties[p], k);
    }
    if (o.type === "page" && o.properties.SourceTable) edge(x, "table", o.properties.SourceTable, refName(o.properties.SourceTable), "source_table");
    if (o.type === "page") for (const p of ["CardPageId", "CardPageID"]) if (o.properties[p]) pageRef(x, o.properties[p], "card_page");
    if (o.type === "codeunit" && o.properties.TableNo) edge(x, "table", o.properties.TableNo, refName(o.properties.TableNo), "runs_on");
    if (o.extends && BASE_OF[o.type]) edge(x, BASE_OF[o.type], o.extends, o.extends, "extends");
  }

  // published events, then the subscriptions resolved onto them
  const events: Relations["events"] = {};
  const publish = (key: string, name: string, kind: PublishedEvent["kind"], p: AlProcedure | null) => {
    const ev = (events[key] ??= {});
    return (ev[name] ??= { kind, obsolete: p?.obsolete ? `${p.obsolete.state}${p.obsolete.tag ? ` ${p.obsolete.tag}` : ""}` : null, subs: [] });
  };
  for (const x of all) for (const p of x.obj.procedures) if (p.event && p.event !== "subscriber") publish(x.key, p.name, p.event, p);
  for (const x of all) for (const p of x.obj.procedures) {
    const s = p.subscribes_to;
    if (!s) continue;
    const type = s.object_type.toLowerCase();
    const r = resolve(x, type, refName(s.object_name) ?? s.object_name);
    if ("reason" in r) { note({ s: x.key, k: "subscribes", raw: `${s.object_type} "${s.object_name}" ${s.event}`, reason: r.reason }); continue; }
    const published = events[r.key]?.[s.event];
    const name = published ? s.event : `${s.event}${s.element ? `(${s.element})` : ""}`;
    const ev = published ?? publish(r.key, name, "trigger_event", null);
    ev.subs.push({ s: x.key, proc: p.name, app: x.app });
    bump("subscribes");
  }
  for (const ev of Object.values(events)) for (const e of Object.values(ev)) e.subs.sort((a, b) => a.s.localeCompare(b.s) || a.proc.localeCompare(b.proc));
  let deadCount = 0;
  for (const ev of Object.values(events)) for (const e of Object.values(ev)) if ((e.kind === "integration" || e.kind === "business") && !e.subs.length && !e.obsolete) deadCount++;
  edges.sort((a, b) => a.s.localeCompare(b.s) || a.t.localeCompare(b.t) || a.k.localeCompare(b.k) || (a.via ?? "").localeCompare(b.via ?? ""));
  unresolved.sort((a, b) => a.s.localeCompare(b.s) || a.raw.localeCompare(b.raw));
  stats.edges = edges.length;
  stats.published_events = Object.values(events).reduce((n, ev) => n + Object.keys(ev).length, 0);
  stats.dead_events = deadCount;
  return {
    schema: "al-relations@1", major, edges,
    events: Object.fromEntries(Object.entries(events).sort(([a], [b]) => a.localeCompare(b)).map(([k, ev]) => [k, Object.fromEntries(Object.entries(ev).sort(([a], [b]) => a.localeCompare(b)))])),
    dead_events: { count: deadCount },
    unresolved, stats,
  };
}

/** Reverse view a reader needs: incoming edges per target (referenced by, pages on this table, extended by). */
export function incoming(rel: Relations): Map<string, RelEdge[]> {
  const m = new Map<string, RelEdge[]>();
  for (const e of rel.edges) m.set(e.t, [...(m.get(e.t) ?? []), e]);
  return m;
}
/** Outgoing edges per source. */
export function outgoing(rel: Relations): Map<string, RelEdge[]> {
  const m = new Map<string, RelEdge[]>();
  for (const e of rel.edges) m.set(e.s, [...(m.get(e.s) ?? []), e]);
  return m;
}
