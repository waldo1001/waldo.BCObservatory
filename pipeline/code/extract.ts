/**
 * AL object extractor (PLAN 4.6, D10): one `.al` file → al-object@1 records, metadata only.
 *
 * web-tree-sitter + the tree-sitter-al WASM (@sshadows/tree-sitter-al, pinned major 4, config/tooling.json), so the
 * same code runs on the Mini and in PR CI without node-gyp. The grammar labels what we need (object_id, object_name,
 * base_object, field id/name/type, procedure parameters/return_type/modifier), so the extractor walks labelled
 * nodes instead of the per-construct .scm query files PLAN sketched: one place, fewer moving parts.
 *
 * Records carry names, ids, types, properties (values clipped), fields, enum values, keys, procedure signatures with
 * attributes, events and subscriptions, triggers and Obsolete* state at object and member level. Never code bodies.
 * Doc comments (/// <summary>) are kept only when the caller says the source's license allows it (BCApps, MIT).
 * Pages, reports, queries and xmlports get properties, procedures and triggers; their layout/dataset is v0.2.
 *
 * Preprocessor regions are followed the way the shipped build compiles them: no symbols are defined, so
 * `#if not CLEAN27` is taken and its `#else` is not. Whatever sits inside a `#if not CLEAN<n>` /
 * `#if not CLEANSCHEMA<n>` region carries `clean: ["CLEAN27"]`: Microsoft's own marker for "removed in version n",
 * the deprecation radar's best input next to ObsoleteState.
 */
import { createRequire } from "node:module";
import { Language, Parser, type Node } from "web-tree-sitter";
import { canonicalJson, sha256 } from "../lib/text.js";

export const EXTRACTOR_VERSION = "1";
export const OBJECT_TYPES = [
  "table", "tableextension", "page", "pageextension", "codeunit", "report", "reportextension", "query", "xmlport", "enum",
  "enumextension", "interface", "permissionset", "permissionsetextension", "entitlement", "profile", "controladdin",
  "pagecustomization", "dotnet",
] as const;
export type ObjectType = (typeof OBJECT_TYPES)[number];
const PROP_MAX = 300;

export interface Obsolete { state: "Pending" | "Removed" | "No"; tag: string | null; reason: string | null }
export interface AlField { id: number; name: string; type: string; properties: Record<string, string>; tooltip: string | null; obsolete: Obsolete | null; clean?: string[] }
export interface AlValue { id: number; name: string; properties: Record<string, string>; obsolete: Obsolete | null; clean?: string[] }
export interface AlParam { name: string; type: string; var: boolean }
export interface AlAttribute { name: string; args: string[] }
export interface AlProcedure {
  name: string; scope: "global" | "local" | "internal" | "protected"; params: AlParam[]; returns: string | null;
  attributes: AlAttribute[]; event: "integration" | "business" | "internal" | "subscriber" | null;
  subscribes_to: { object_type: string; object_name: string; event: string; element: string | null } | null;
  obsolete: Obsolete | null; doc: string | null; line: number; clean?: string[];
}
export interface AlObject {
  schema: "al-object@1"; version: string; build: string | null; country: string; layer: "base" | "overlay"; app: string | null;
  namespace: string | null; type: ObjectType; id: number | null; name: string; extends: string | null; file: string;
  file_hash: string | null; commit: string | null; properties: Record<string, string>; obsolete: Obsolete | null;
  fields: AlField[]; values: AlValue[]; keys: { name: string; fields: string[]; clustered: boolean }[]; procedures: AlProcedure[];
  triggers: string[]; parse_error: boolean; clean?: string[]; hash: string;
}
export interface FileContext { version: string; build?: string | null; country: string; layer: "base" | "overlay"; app?: string | null; file: string; commit?: string | null; docs?: boolean }

let parserPromise: Promise<Parser> | null = null;
/** One parser per process; the WASM comes from the pinned npm package. */
export function loadParser(): Promise<Parser> {
  parserPromise ??= (async () => {
    await Parser.init();
    const wasm = createRequire(import.meta.url).resolve("@sshadows/tree-sitter-al/tree-sitter-al.wasm");
    const p = new Parser();
    p.setLanguage(await Language.load(wasm));
    return p;
  })();
  return parserPromise;
}

// ---------------------------------------------------------------------------------------------- text helpers

const ws = (s: string) => s.replace(/\s+/g, " ").trim();
/** `"No."` → No., `'it''s'` → it's, anything else trimmed. */
export function unquote(s: string): string {
  const t = s.trim();
  if (t.length >= 2 && t.startsWith('"') && t.endsWith('"')) return t.slice(1, -1);
  if (t.length >= 2 && t.startsWith("'") && t.endsWith("'")) return t.slice(1, -1).replace(/''/g, "'");
  return t;
}
const direct = (n: Node | null): Node[] => (n ? (n.namedChildren.filter(Boolean) as Node[]) : []);

/** True when the condition holds with no preprocessor symbols defined (how the shipped build compiles). */
function holds(c: Node | null): boolean {
  if (!c) return true;
  if (c.type === "identifier") return false;
  if (c.type.includes("not")) return !holds(direct(c)[0] ?? null);
  const parts = direct(c);
  if (parts.length === 2 && /\band\b/i.test(c.text)) return holds(parts[0]) && holds(parts[1]);
  if (parts.length === 2 && /\bor\b/i.test(c.text)) return holds(parts[0]) || holds(parts[1]);
  if (parts.length === 1) return holds(parts[0]);
  return true;
}
/** CLEAN symbols a `#if not CLEANxx` condition guards against (the version the code inside is removed in). */
function cleanSymbols(c: Node | null): string[] {
  if (!c || !c.type.includes("not")) return [];
  const id = direct(c)[0];
  return id?.type === "identifier" && /^CLEAN/i.test(id.text) ? [id.text] : [];
}
interface Flat { node: Node; clean: string[] }
/** Named children with preprocessor regions flattened into the branch that applies; each carries its CLEAN guards. */
const flat = (n: Node | null): Flat[] => flatList(direct(n), []);
function flatList(nodes: Node[], guard: string[]): Flat[] {
  const out: Flat[] = [];
  for (const c of nodes) {
    if (!c.type.startsWith("preproc_conditional")) {
      if (!c.type.startsWith("preproc_")) out.push({ node: c, clean: guard });
      continue;
    }
    // branch markers (#if/#elif/#else) start a branch; items follow until the next marker
    let active = false, taken = false, branchGuard = guard;
    for (const x of direct(c)) {
      if (x.type === "preproc_if" || x.type === "preproc_elif" || x.type === "preproc_elseif") {
        const cond = x.childForFieldName("condition");
        active = !taken && holds(cond);
        if (active) { taken = true; branchGuard = [...guard, ...cleanSymbols(cond)]; }
        continue;
      }
      if (x.type === "preproc_else") { active = !taken; taken = true; branchGuard = guard; continue; }
      if (x.type === "preproc_endif") continue;
      if (!active) continue;
      if (x.type.startsWith("preproc_conditional")) out.push(...flatList([x], branchGuard));
      else if (!x.type.startsWith("preproc_")) out.push({ node: x, clean: branchGuard });
    }
  }
  return out;
}
const named = (n: Node | null): Node[] => flat(n).map((f) => f.node);
const field = (n: Node, name: string) => n.childForFieldName(name);
const text = (n: Node | null) => (n ? unquote(n.text) : "");

function properties(body: Node | null): Record<string, string> {
  const out: Record<string, string> = {};
  for (const c of named(body)) {
    if (c.type !== "property") continue;
    const k = field(c, "name")?.text;
    const v = field(c, "value");
    if (!k || !v) continue;
    const val = ["string_literal", "quoted_identifier", "identifier", "boolean", "integer"].includes(v.type) ? unquote(v.text) : ws(v.text);
    out[k] = val.length > PROP_MAX ? `${val.slice(0, PROP_MAX)}...` : val;
  }
  return out;
}
function obsoleteOf(props: Record<string, string>): Obsolete | null {
  const state = props.ObsoleteState;
  if (!state) return null;
  return { state: state === "Removed" ? "Removed" : state === "No" ? "No" : "Pending", tag: props.ObsoleteTag ?? null, reason: props.ObsoleteReason ?? null };
}

// ---------------------------------------------------------------------------------------------- members

const withClean = <T extends object>(o: T, clean: string[]): T => (clean.length ? { ...o, clean: [...new Set(clean)] } : o);
function fields(body: Node | null): AlField[] {
  const out: AlField[] = [];
  for (const sec of flat(body).filter((c) => c.node.type === "fields_section")) {
    for (const { node: f, clean } of flat(field(sec.node, "body")).filter((c) => c.node.type === "field_declaration")) {
      const props = properties(field(f, "body"));
      out.push(withClean({ id: Number(field(f, "id")?.text), name: text(field(f, "name")), type: ws(field(f, "type")?.text ?? ""), properties: props, tooltip: props.ToolTip ?? null, obsolete: obsoleteOf(props) }, [...sec.clean, ...clean]));
    }
  }
  return out;
}
function values(body: Node | null): AlValue[] {
  return flat(body).filter((c) => c.node.type === "enum_value_declaration").map(({ node: v, clean }) => {
    const props = properties(field(v, "body"));
    return withClean({ id: Number(field(v, "value_id")?.text), name: text(field(v, "value_name")), properties: props, obsolete: obsoleteOf(props) }, clean);
  });
}
function keys(body: Node | null): AlObject["keys"] {
  const out: AlObject["keys"] = [];
  for (const sec of named(body).filter((c) => c.type === "keys_section")) {
    for (const k of named(field(sec, "body")).filter((c) => c.type === "key_declaration")) {
      const props = properties(field(k, "body"));
      out.push({ name: text(field(k, "name")), fields: named(field(k, "fields")).map((x) => unquote(x.text)), clustered: props.Clustered?.toLowerCase() === "true" });
    }
  }
  return out;
}
function attribute(a: Node): AlAttribute {
  const content = field(a, "attribute") ?? a;
  const list = named(field(content, "arguments")).find((x) => x.type === "attribute_argument_list");
  return { name: field(content, "name")?.text ?? "", args: named(list ?? null).map((x) => ws(x.text)) };
}
const EVENT_ATTRS: Record<string, AlProcedure["event"]> = { integrationevent: "integration", businessevent: "business", internalevent: "internal", eventsubscriber: "subscriber" };
/** `[EventSubscriber(ObjectType::Table, Database::Customer, 'OnAfterInsertEvent', '', false, false)]` */
function subscription(attrs: AlAttribute[]): AlProcedure["subscribes_to"] {
  const a = attrs.find((x) => x.name.toLowerCase() === "eventsubscriber");
  if (!a || a.args.length < 3) return null;
  const after = (s: string) => unquote(s.includes("::") ? s.slice(s.indexOf("::") + 2) : s);
  const element = unquote(a.args[3] ?? "");
  return { object_type: after(a.args[0]), object_name: after(a.args[1]), event: unquote(a.args[2]), element: element || null };
}
function docOf(comments: string[]): string | null {
  const raw = comments.map((c) => c.replace(/^\s*\/\/\/\s?/, "")).join(" ");
  const m = raw.match(/<summary>([\s\S]*?)<\/summary>/i);
  const t = ws((m ? m[1] : raw).replace(/<[^>]+>/g, " "));
  return t ? (t.length > PROP_MAX ? `${t.slice(0, PROP_MAX)}...` : t) : null;
}
function procedure(p: Node, attrs: AlAttribute[], comments: string[], withDocs: boolean, clean: string[]): AlProcedure {
  const mod = field(p, "modifier")?.text.toLowerCase() ?? "";
  const scope = mod.includes("local") ? "local" : mod.includes("internal") ? "internal" : mod.includes("protected") ? "protected" : "global";
  const suffix = named(p).find((c) => c.type === "interface_procedure_suffix");
  const ret = field(p, "return_type") ?? (suffix ? field(suffix, "return_type") : null);
  const params = named(field(p, "parameters") ?? (suffix ? field(suffix, "parameters") : null)).filter((x) => x.type === "parameter")
    .map((x) => ({ name: text(field(x, "name")), type: ws(field(x, "type")?.text ?? ""), var: !!field(x, "modifier")?.text.toLowerCase().includes("var") }));
  const obsAttr = attrs.find((a) => a.name.toLowerCase() === "obsolete");
  const event = attrs.map((a) => EVENT_ATTRS[a.name.toLowerCase()]).find(Boolean) ?? null;
  return {
    name: text(field(p, "name")), scope, params, returns: ret ? ws(ret.text) : null, attributes: attrs, event, subscribes_to: subscription(attrs),
    obsolete: obsAttr ? { state: "Pending", tag: unquote(obsAttr.args[1] ?? "") || null, reason: unquote(obsAttr.args[0] ?? "") || null } : null,
    doc: withDocs ? docOf(comments) : null, line: p.startPosition.row + 1, ...(clean.length ? { clean: [...new Set(clean)] } : {}),
  };
}
/** Procedures in source order; attributes and /// comments right before a procedure belong to it. */
function procedures(body: Node | null, withDocs: boolean): AlProcedure[] {
  const out: AlProcedure[] = [];
  let attrs: AlAttribute[] = [], comments: string[] = [];
  for (const { node: c, clean } of flat(body)) {
    if (c.type === "attribute_item") { attrs.push(attribute(c)); continue; }
    if (c.type === "comment") { if (c.text.trimStart().startsWith("///")) comments.push(c.text); continue; }
    if (c.type === "procedure" || c.type === "interface_procedure") out.push(procedure(c, attrs, comments, withDocs, clean));
    attrs = []; comments = [];
  }
  return out;
}

// ---------------------------------------------------------------------------------------------- objects

/**
 * Content hash: what the object declares, not where it was found or how its code is laid out. Version, country,
 * layer, file, commit and build are left out, and so are procedure line numbers (they move when code above them
 * changes) and doc comments (only MIT sources keep them). An unchanged declaration hashes the same in 28 and 29
 * (timelines, version diffs) and a country copy identical to W1 is recognised as such (overlays).
 */
export function objectHash(o: Omit<AlObject, "hash">): string {
  const { file: _f, file_hash: _h, commit: _c, build: _b, version: _v, country: _cc, layer: _l, ...rest } = o as AlObject;
  delete (rest as Partial<AlObject>).hash;
  const procedures = rest.procedures.map(({ line: _line, doc: _doc, ...p }) => p);
  return sha256(canonicalJson({ ...rest, procedures }));
}

/** Every object declared in one file. Unknown declarations are ignored; a syntax error marks the object, not the run. */
export function extractSource(parser: Parser, src: string, ctx: FileContext): AlObject[] {
  const tree = parser.parse(src);
  if (!tree) return [];
  try {
    const root = tree.rootNode;
    const ns = named(root).find((c) => c.type === "namespace_declaration");
    const namespace = ns ? direct(ns).find((c) => c.type === "namespace_name")?.text.replace(/\s+/g, "") ?? null : null;
    const file_hash = sha256(src);
    const out: AlObject[] = [];
    for (const { node: n, clean } of flat(root)) {
      const type = n.type.replace(/_declaration$/, "") as ObjectType;
      if (!n.type.endsWith("_declaration") || !OBJECT_TYPES.includes(type)) continue;
      const body = field(n, "body");
      const idText = field(n, "object_id")?.text;
      const props = properties(body);
      const o: Omit<AlObject, "hash"> = {
        schema: "al-object@1", version: ctx.version, build: ctx.build ?? null, country: ctx.country, layer: ctx.layer, app: ctx.app ?? null,
        namespace, type, id: idText ? Number(idText) : null, name: text(field(n, "object_name")), extends: field(n, "base_object") ? text(field(n, "base_object")) : null,
        file: ctx.file, file_hash, commit: ctx.commit ?? null, properties: props, obsolete: obsoleteOf(props),
        fields: fields(body), values: values(body), keys: keys(body), procedures: procedures(body, !!ctx.docs),
        triggers: named(body).filter((c) => c.type === "trigger_declaration").map((t) => text(field(t, "name"))),
        parse_error: n.hasError, ...(clean.length ? { clean: [...new Set(clean)] } : {}),
      };
      out.push({ ...o, hash: objectHash(o) });
    }
    return out;
  } finally {
    tree.delete();
  }
}

/** Stable object key across versions and countries: `<type>/<id>`, or `<type>/<name>` for id-less objects. */
export const objectKey = (o: Pick<AlObject, "type" | "id" | "name">) => `${o.type}/${o.id ?? o.name.toLowerCase()}`;
