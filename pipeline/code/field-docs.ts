/**
 * Field docs (D65, docs/specs/discovery.md 7.2): for every table field, the ToolTip of a page control bound to it.
 *
 * Much of BCApps writes its ToolTips on page controls, not on table fields (Subscription Billing: 5% of its table
 * fields carry one); extractor 4 records each page's controls with the binding as written. This projection joins a
 * control to the field it shows: the page's SourceTable comes from the relations file (`source_table` edges, D45),
 * a page extension uses its base page's; the binding is parsed strictly (`Rec."No."`, `Rec.Name`, `"No."`, `Name`)
 * and matched case-insensitively against the fields of the table and its tableextensions of the same major.
 * Expressions, calls and other records are not resolvable without code and are dropped; so are names that are no
 * field (page variables).
 *
 * One ToolTip per (table, field): Card and Document pages first, then List pages, then the others (worksheets, parts,
 * API pages, ...); an obsolete control or page, or one inside `#if not CLEANxx`, after a current one; then pages
 * before page extensions, the lowest id, and source order. The page's ToolTip is Microsoft's text, verbatim.
 *
 * Output: data/code/field-docs/<major>.json (next to relations/<major>.json), derived by refreshCodeDerived; the
 * object pages read it for their own major, and data/index/field-docs.json carries the preferred major's.
 * Deterministic, no LLM.
 */
import { resolve } from "node:path";
import { exists, readJson } from "../lib/fsx.js";
import { objectKey, unquote, type AlObject } from "./extract.js";
import type { Relations } from "./relations.js";

export const FIELD_DOCS_VERSION = 1;
export interface FieldDoc { tooltip: string; page: string; control: string }
export interface FieldDocsStats { tooltips: number; bound: number; unparsed: number; unmatched: number; tables: number; fields: number }
export interface FieldDocs { schema: "bcobs-field-docs@1"; major: string; stats: FieldDocsStats; tables: Record<string, Record<string, FieldDoc>> }

export const fieldDocsPath = (dataDir: string, major: string) => resolve(dataDir, "code", "field-docs", `${major}.json`);
export function loadFieldDocs(dataDir: string, major: string): FieldDocs | null {
  const p = fieldDocsPath(dataDir, major);
  return exists(p) ? readJson<FieldDocs>(p) : null;
}

/**
 * The field a control's binding names, or null: `Rec."No."`, `Rec.Name`, `"No."` and `Name` bind; `Rec.Amount +
 * Rec.Fee`, `Format(Rec.Status)`, `CurrPage.Lines`, `Rec."No.".Value`, `SalesLine.Amount` do not.
 */
export function boundField(expr: string | null | undefined): string | null {
  const m = /^\s*(?:rec\s*\.\s*)?("[^"]+"|[A-Za-z_][A-Za-z0-9_]*)\s*$/i.exec(expr ?? "");
  return m ? unquote(m[1]) : null;
}

const PAGE_RANK: Record<string, number> = { card: 0, document: 0, list: 1 };
/** Card and Document 0, List 1, anything else 2; a page without PageType is a Card (the AL default). */
const pageRank = (pageType: string | null) => PAGE_RANK[(pageType ?? "card").toLowerCase()] ?? 2;
const prop = (props: Record<string, string>, lower: string) => { const k = Object.keys(props).find((x) => x.toLowerCase() === lower); return k ? props[k] : null; };
const isObsolete = (x: { obsolete: AlObject["obsolete"]; clean?: string[] }) => !!(x.obsolete && x.obsolete.state !== "No") || !!x.clean?.length;

interface Candidate { table: string; field: string; doc: FieldDoc; sort: [number, number, number, number, number] }

/** Build one major's field docs from its snapshots (W1 + first-party apps) and its relations; streams the objects once. */
export function buildFieldDocs(major: string, parts: { objects: () => Iterable<AlObject> }[], rel: Relations): FieldDocs {
  const sourceTable = new Map<string, string>(), extendsOf = new Map<string, string>();
  for (const e of rel.edges) {
    if (e.k === "source_table") sourceTable.set(e.s, e.t);
    else if (e.k === "extends") extendsOf.set(e.s, e.t);
  }
  /** table key -> lower-cased field name -> the name as declared (tableextension fields under their base table) */
  const fieldsOf = new Map<string, Map<string, string>>();
  const pageInfo = new Map<string, { rank: number; obsolete: boolean }>();
  const raw: { page: string; ext: boolean; id: number; obsolete: boolean; controls: NonNullable<AlObject["controls"]> }[] = [];
  for (const part of parts) for (const o of part.objects()) {
    const key = objectKey(o);
    if (o.type === "table" || o.type === "tableextension") {
      const t = o.type === "table" ? key : extendsOf.get(key);
      if (!t) continue;
      const m = fieldsOf.get(t) ?? fieldsOf.set(t, new Map()).get(t)!;
      for (const f of o.fields) if (!m.has(f.name.toLowerCase())) m.set(f.name.toLowerCase(), f.name);
    }
    if (o.type === "page") pageInfo.set(key, { rank: pageRank(prop(o.properties, "pagetype")), obsolete: isObsolete(o) });
    if ((o.type === "page" || o.type === "pageextension") && o.controls?.length) {
      // only what the join needs: field controls with a ToolTip
      const controls = o.controls.filter((c) => c.kind === "field" && c.tooltip);
      if (controls.length) raw.push({ page: key, ext: o.type === "pageextension", id: o.id ?? 0, obsolete: isObsolete(o), controls });
    }
  }
  const stats: FieldDocsStats = { tooltips: 0, bound: 0, unparsed: 0, unmatched: 0, tables: 0, fields: 0 };
  const best = new Map<string, Candidate>();
  for (const p of raw) {
    const base = p.ext ? extendsOf.get(p.page) ?? null : p.page;
    const table = base ? sourceTable.get(base) : undefined;
    if (!base || !table) continue;
    const info = pageInfo.get(base);
    p.controls.forEach((c, i) => {
      stats.tooltips++;
      const name = boundField(c.source_expr);
      if (!name) { stats.unparsed++; return; }
      const field = fieldsOf.get(table)?.get(name.toLowerCase());
      if (!field) { stats.unmatched++; return; }
      stats.bound++;
      const cand: Candidate = { table, field, doc: { tooltip: c.tooltip!, page: p.page, control: c.name },
        sort: [p.obsolete || info?.obsolete || isObsolete(c) ? 1 : 0, info?.rank ?? 2, p.ext ? 1 : 0, p.id, i] };
      const k = `${table}|${field}`, prev = best.get(k);
      if (!prev || cmp(cand.sort, prev.sort) < 0) best.set(k, cand);
    });
  }
  const tables: FieldDocs["tables"] = {};
  for (const c of [...best.values()].sort((a, b) => a.table.localeCompare(b.table, "en", { numeric: true }) || a.field.localeCompare(b.field))) (tables[c.table] ??= {})[c.field] = c.doc;
  stats.tables = Object.keys(tables).length;
  stats.fields = best.size;
  return { schema: "bcobs-field-docs@1", major, stats, tables };
}
const cmp = (a: number[], b: number[]) => { for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return a[i] - b[i]; return 0; };
