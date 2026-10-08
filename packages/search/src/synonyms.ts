/**
 * HAND-EDITED. Reviewed by pull request, never generated (D86). The words a Business Central person types for the
 * same thing: object type abbreviations, BC's own abbreviations in object and field names, and the galaxy systems'
 * aliases. Every pair works both ways; a match through a synonym says so in the result row (`matched "customer"`), so
 * a reader learns the word. Not a JSON file under config/: JSON imports behave differently in Vite, tsx and esbuild.
 */
import type { ObjectType } from "./types.js";

/**
 * Object type abbreviations: the palette's table (D46) plus three-letter stems. A one-letter abbreviation counts only
 * in front of digits (`t36`); "t account" stays words.
 */
export const ABBR: Record<string, ObjectType> = {
  t: "table", te: "tableextension", p: "page", pe: "pageextension", c: "codeunit", cu: "codeunit", r: "report", q: "query",
  e: "enum", ee: "enumextension", x: "xmlport", i: "interface", ps: "permissionset",
  cod: "codeunit", tab: "table", pag: "page", rep: "report", xml: "xmlport", enu: "enum", pse: "permissionsetextension",
};

/** Word pairs, both directions. A side may be a phrase ("general ledger"); words are compared normalised (lowercase, no dots). */
export const SYNONYM_PAIRS: [string, string][] = [
  ["cust", "customer"], ["vend", "vendor"],
  ["g/l", "general ledger"], ["gl", "general ledger"], ["fa", "fixed asset"], ["no", "number"], ["qty", "quantity"],
  ["amt", "amount"], ["jnl", "journal"], ["sku", "stockkeeping unit"], ["uom", "unit of measure"], ["po", "purchase order"],
  ["so", "sales order"], ["cu", "codeunit"], ["inv", "invoice"], ["invt", "inventory"], ["cr", "credit"], ["dim", "dimension"],
  ["acc", "account"], ["acct", "account"], ["doc", "document"], ["ic", "intercompany"], ["bom", "bill of materials"],
  ["wip", "work in process"], ["mfg", "manufacturing"], ["prod", "production"], ["purch", "purchase"], ["whse", "warehouse"],
  ["pmt", "payment"], ["rcpt", "receipt"], ["shpt", "shipment"], ["curr", "currency"], ["exch", "exchange"], ["gen", "general"],
  ["bus", "business"], ["prepmt", "prepayment"], ["req", "requisition"], ["mgt", "management"], ["mgmt", "management"],
  ["hdr", "header"], ["job", "project"], ["emp", "employee"], ["res", "resource"], ["pstd", "posted"],
];

/**
 * One way only: the reader's word for BC's word. "client" finds Customer, but "customer" must not find every page
 * about the web client.
 */
export const SYNONYMS_ONE_WAY: [string, string][] = [["client", "customer"], ["supplier", "vendor"], ["stock", "inventory"], ["debtor", "customer"], ["creditor", "vendor"]];

/**
 * The galaxy systems' aliases (config/taxonomy.json, copied; tests/unit/search-core.test.ts keeps the two equal). They
 * resolve a system name the way a reader says it (`system: "g/l"` is finance); they are not word alternates, or every
 * "Inventory" page would match "item".
 */
export const SYSTEM_ALIASES: Record<string, string[]> = {
  finance: ["general ledger", "g/l", "accounting", "vat", "bank", "cash flow", "dimensions", "posting groups", "cost accounting", "consolidation", "intercompany"],
  sales: ["sales order", "customer", "quote", "invoice", "credit memo", "prices", "discounts", "receivables", "reminders"],
  purchasing: ["purchase order", "vendor", "payables", "requisition", "approval"],
  inventory: ["item", "item tracking", "costing", "planning", "mrp", "stockkeeping", "transfer order", "availability", "quality management"],
  warehouse: ["bin", "pick", "put-away", "shipment", "receipt", "wms", "directed put-away"],
  manufacturing: ["production order", "bom", "routing", "capacity", "work center", "subcontracting"],
  projects: ["job", "jobs", "project", "resource", "time sheet", "wip"],
  service: ["service order", "service contract", "service item"],
  assembly: ["assembly order", "assemble-to-order", "kit"],
  "fixed-assets": ["fa", "depreciation", "insurance", "maintenance"],
  crm: ["contact", "campaign", "opportunity", "segment", "interaction", "outlook"],
  hr: ["employee", "absence"],
  sustainability: ["esg", "emissions", "carbon", "csrd"],
  reporting: ["report", "power bi", "financial reports", "account schedules", "analysis mode", "excel", "word layout", "query"],
  copilot: ["copilot", "agent", "ai", "mcp", "sales order agent", "payables agent", "chat", "prompt", "azure openai", "autofill", "summarize"],
  integration: ["api", "odata", "web service", "dataverse", "dynamics 365 sales", "shopify", "e-document", "edi", "power automate", "power apps", "fabric", "data mirroring", "connector"],
  administration: ["admin center", "tenant", "environment", "company", "permission", "security group", "setup", "assisted setup", "data migration", "retention", "profile", "role center"],
  localization: ["country", "local functionality", "intrastat", "sepa", "e-invoicing", "tax", "1099", "gdpdu", "qr-bill"],
  development: ["al", "extension", "codeunit", "table", "page", "event", "interface", "namespace", "al language", "vs code", "analyzer", "compiler", "testability", "permission set"],
  platform: ["al-go", "pipeline", "docker", "container", "telemetry", "application insights", "performance", "database", "sql", "upgrade", "update", "release", "wave", "deprecation", "obsolete", "web client", "user experience"],
};

/** Words a question carries that no title does; dropped from a question-shaped query (D86 hints). */
export const QUESTION_WORDS = new Set(["how", "what", "why", "where", "when", "which", "who", "do", "does", "did", "can", "could", "should", "is", "are", "was", "were", "the", "an", "to", "in", "of", "for", "on", "my", "me", "it", "from", "with", "and", "or", "changed", "change"]);

const norm = (s: string) => s.toLowerCase().replace(/\.(?=\s|$)/g, "").trim();
let table: Map<string, string[]> | null = null;
/** The alternates of a word or phrase (normalised), both directions. */
export function synonymsOf(word: string): string[] {
  table ??= (() => {
    const m = new Map<string, string[]>();
    const add = (a: string, b: string) => { const l = m.get(a); if (l) { if (!l.includes(b)) l.push(b); } else m.set(a, [b]); };
    for (const [a, b] of SYNONYM_PAIRS) { add(norm(a), norm(b)); add(norm(b), norm(a)); }
    for (const [a, b] of SYNONYMS_ONE_WAY) add(norm(a), norm(b));
    return m;
  })();
  return table.get(norm(word)) ?? [];
}
/** Every phrase (two words or more) that has synonyms, for merging query words into one term. */
export function synonymPhrases(): string[] {
  synonymsOf("");
  return [...table!.keys()].filter((k) => k.includes(" "));
}

/** A system id from its id, label word or alias, case-insensitive: "g/l" -> finance, "Sales" -> sales; null when unknown. */
export function systemOf(word: string): string | null {
  const w = word.toLowerCase().trim();
  if (SYSTEM_ALIASES[w]) return w;
  for (const [id, aliases] of Object.entries(SYSTEM_ALIASES)) if (aliases.includes(w)) return id;
  return null;
}
