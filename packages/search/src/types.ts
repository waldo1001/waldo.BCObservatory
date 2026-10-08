/** The shapes the site, the MCP server and the tests share (D86). */

/** The 18 AL object types that have pages (dotnet has none). */
export const OBJECT_TYPES = [
  "table", "tableextension", "page", "pageextension", "codeunit", "report", "reportextension", "query", "xmlport", "enum",
  "enumextension", "interface", "permissionset", "permissionsetextension", "entitlement", "profile", "controladdin", "pagecustomization",
] as const;
export type ObjectType = (typeof OBJECT_TYPES)[number];

/** A symbol of an object page: a field, a published event, a global procedure, an enum value. */
export type SymbolKind = "field" | "event" | "proc" | "value";
/** The symbol shards by kind, as the symbols manifest names them. */
export type SymbolShard = "fields" | "events" | "procs" | "values";
export const SHARD_OF: Record<SymbolKind, SymbolShard> = { field: "fields", event: "events", proc: "procs", value: "values" };
export const KIND_OF: Record<SymbolShard, SymbolKind> = { fields: "field", events: "event", procs: "proc", values: "value" };

/** A page record of data/index/pages-*.json, as pipeline/render/search.ts writes it. Older records lack the D86 fields. */
export interface PageRecord {
  path: string; type: string; title: string; summary: string; tier: string; system?: string | null; date?: string | null; tags?: string[];
  object_type?: string; object_id?: number | null; app?: string | null; country?: string | null; source?: string; status?: string; obsolete?: string | null;
  path_label?: string; caption?: string; members?: number; narrative?: "reviewed" | "unreviewed" | "none"; stats?: string;
  /** D86: an object's name, namespace, the majors it is present in ("23-30"), inbound references and event subscribers. */
  name?: string; namespace?: string | null; present_in?: string; inbound?: number; subscribers?: number;
}

export interface Term {
  /** normalised text; a phrase keeps its words space-separated */
  text: string;
  stem: string;
  /** synonym alternates (single words or phrases) and the CamelCase split as a phrase */
  alts: string[];
  phrase: boolean;
  numeric: boolean;
}

export interface ParsedQuery {
  raw: string;
  /** t36, cu 80, codeunit80, table 36 BE */
  ref: { type: ObjectType; id: number; country: string | null } | null;
  /** a bare number: an id across types, never a substring */
  number: number | null;
  /** type words anywhere, singular or plural, abbreviations when standalone */
  types: ObjectType[];
  /** field:, event:, proc:/procedure:, value: */
  kind: SymbolKind | null;
  /** bc30, bc 30, v29; never a bare number */
  major: string | null;
  /** lowercase country codes: uppercase in the raw query, or any case next to a reference or type word */
  countries: string[];
  /** starts with how/what/why/where/when/which or contains "changed in" */
  question: boolean;
  /** everything else, normalised, stemmed, synonym-expanded; quoted phrases stay one term */
  terms: Term[];
  /** "unknown abbreviation cx" and the like, input to hints */
  warnings: string[];
}

export interface SearchRecord {
  /** page path, or "objects/codeunit/80#event-OnAfterPostSalesDoc" */
  id: string;
  kind: "page" | SymbolKind;
  /** page type; for a symbol the owner's page type ("object") */
  type: string;
  /** the object's name, the hub's title, the symbol's name */
  name: string;
  /** display */
  title: string;
  caption?: string; text?: string; tags?: string[];
  objectType?: string; objectId?: number | null; country?: string | null; app?: string | null;
  /** 0 base app and every non-object page, 1 first-party app, 2 country layer */
  layer: 0 | 1 | 2;
  /** 0..1, computed from `inbound` against the index's maximum per object type; symbols inherit their owner's */
  importance: number;
  inbound?: number; subscribers?: number;
  system?: string | null; date?: string | null; members?: number; narrative?: "reviewed" | "unreviewed" | "none"; major?: string;
  tier?: string;
  /** symbols */
  owner?: { path: string; title: string };
  /** symbol facts for the row (field id, type, subscribers, params) */
  extra?: Record<string, string | number | null>;
  /** the page record it came from (pages only), for the row's other facts */
  page?: PageRecord;
}

export interface Index {
  records: SearchRecord[];
  /** token -> record positions, ascending */
  postings: Map<string, number[]>;
  /** token -> how many records carry it */
  vocab: Map<string, number>;
  /** page type ("object", "topic", ...) or symbol kind -> record positions */
  byType: Map<string, number[]>;
  /** object type -> the highest inbound count of its objects */
  maxInbound: Map<string, number>;
}

export interface Hit { r: SearchRecord; s: number; why: string[]; band: "exact" | "match" }
export interface Hint { text: string; query?: string; path?: string }
