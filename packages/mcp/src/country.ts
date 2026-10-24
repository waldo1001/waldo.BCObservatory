/**
 * What a country layer adds to a W1 object it replaces (D95 phase B), as text an agent reads: the block `get_object`
 * prints before the W1 page, the "Replaced in" line of a W1 lookup without a country, and the answer of `cat` for a
 * member that exists only in the layer. Pure functions over one object of a country diff
 * (`data/code/diffs/country/<major>-<cc>.json`, `pipeline/code/diff.ts`); no I/O, bundled into dist/server.js like
 * sections.ts and embed.ts.
 */

/** A member of a diff object: added (`to`), removed (`from`) or changed (`to` without properties, and `delta` of [from, to]). */
export interface DiffMember { id: string; name: string; change: "added" | "removed" | "changed"; from?: unknown; to?: unknown; delta?: Record<string, unknown> }
/** An object of a country diff, as `pipeline/code/diff.ts` writes it (the parts this file reads). */
export interface DiffObject {
  key: string; name: string; change: "added" | "removed" | "changed" | "replaced";
  properties?: unknown[]; fields?: DiffMember[]; values?: DiffMember[]; procedures?: DiffMember[]; events?: DiffMember[]; keys?: DiffMember[];
}
interface Param { name: string; type: string; var?: boolean }
interface ProcTo { scope?: string; params?: Param[]; returns?: string | null; event?: string | null; obsolete?: { state?: string } | null }
interface FieldTo { type?: string; obsolete?: { state?: string } | null; properties?: Record<string, string> }

/** Member lines before the block says "... and n more". */
export const BLOCK_MEMBERS = 40;
const DELTA_CLIP = 140;
const KINDS = ["fields", "values", "events", "procedures", "keys"] as const;
type Kind = (typeof KINDS)[number];
const NOUN: Record<Kind, [string, string]> = { fields: ["field", "fields"], values: ["value", "values"], events: ["event", "events"], procedures: ["procedure", "procedures"], keys: ["key", "keys"] };
const plural = (n: number, kind: Kind) => `${n} ${NOUN[kind][n === 1 ? 0 : 1]}`;
const of = (o: DiffObject, kind: Kind, change: DiffMember["change"]) => (o[kind] ?? []).filter((m) => m.change === change);
const clip = (s: string, n = DELTA_CLIP) => (s.length > n ? `${s.slice(0, n - 1)}…` : s);

/** `table/18` as `Table 18`: the fallback for a title when the caller has no page record of the owner. */
export function titleOfKey(key: string, name: string): string {
  const [type, id] = key.split("/");
  return `${type.charAt(0).toUpperCase()}${type.slice(1)} ${id} "${name}"`;
}

/** `+3 fields, +1 event, +1 procedure` for what a layer adds to an object; empty when it adds no member. */
export function addedSummary(o: DiffObject): string {
  return KINDS.filter((k) => k !== "keys").map((k) => [k, of(o, k, "added").length] as const).filter(([, n]) => n > 0).map(([k, n]) => `+${plural(n, k)}`).join(", ");
}

/** `AU (+2 fields), BE (+3 fields, +1 event, +1 procedure), CA, ...`: a layer that adds no member is named without a count. Null for no layer. */
export function replacedInLine(layers: { cc: string; object: DiffObject }[]): string | null {
  if (!layers.length) return null;
  const parts = [...layers].sort((a, b) => a.cc.localeCompare(b.cc)).map(({ cc, object }) => {
    const s = addedSummary(object);
    return `${cc.toUpperCase()}${s ? ` (${s})` : ""}`;
  });
  return `Replaced in: ${parts.join(", ")}.`;
}

/** `var Customer: Record Customer; xCustomer: Record Customer` */
const paramsOf = (ps: Param[] | undefined) => (ps ?? []).map((p) => `${p.var ? "var " : ""}${p.name}: ${p.type}`).join("; ");
/** `FormatEnterpriseNo(EnterpriseNo: Text; CountryCode: Code[10]): Text` */
const signature = (name: string, to: ProcTo) => `${name}(${paramsOf(to.params)})${to.returns ? `: ${to.returns}` : ""}`;
const procLine = (m: DiffMember) => {
  const to = (m.to ?? {}) as ProcTo;
  return `${signature(m.name, to)} (${to.event && to.event !== "subscriber" ? to.event : to.scope ?? "global"})${to.obsolete?.state ? ` [obsolete ${to.obsolete.state}]` : ""}`;
};
const fieldLine = (m: DiffMember) => `${m.id} "${m.name}" ${((m.to ?? {}) as FieldTo).type ?? ""}`.trimEnd();

/** The properties of a field the way a page prints them: `Caption "Enterprise No."; OptimizeForTextSearch`. */
export function propertiesText(p: Record<string, string> | undefined): string {
  return Object.entries(p ?? {}).map(([k, v]) => (v === "true" ? k : /^(Caption|ToolTip)/.test(k) ? `${k} "${v}"` : `${k} ${v}`)).join("; ");
}

/** What differs in a changed member, from its delta: `Caption: "Cust." -> "Customer"; type: Date -> DateTime`. */
function deltaText(d: Record<string, unknown> | undefined): string {
  if (!d) return "";
  const show = (v: unknown) => (typeof v === "string" ? v : JSON.stringify(v));
  const parts: string[] = [];
  for (const [k, v] of Object.entries(d)) {
    if (k === "properties") { for (const [pk, pv] of Object.entries(v as Record<string, [string | null, string | null]>)) parts.push(`${pk}: ${pv[0] ?? "-"} -> ${pv[1] ?? "-"}`); continue; }
    const [a, b] = v as [unknown, unknown];
    if (Array.isArray(a) && Array.isArray(b)) {
      const add = (b as string[]).filter((x) => !(a as string[]).includes(x)), rem = (a as string[]).filter((x) => !(b as string[]).includes(x));
      parts.push(`${k} ${[...add.map((x) => `+${x}`), ...rem.map((x) => `-${x}`)].join(", ") || "reordered"}`);
    } else parts.push(`${k}: ${show(a ?? "-")} -> ${show(b ?? "-")}`);
  }
  return clip(parts.join("; "));
}
/** `Key14 (+Enterprise No., -Blocked)`, `Key18 (new: Salesperson Code)`, `Key20 (removed)`. */
function keyLine(m: DiffMember): string {
  if (m.change === "added") return `${m.name} (new: ${(((m.to ?? {}) as { fields?: string[] }).fields ?? []).join(", ")})`;
  if (m.change === "removed") return `${m.name} (removed)`;
  return `${m.name} (${deltaText(m.delta) || "changed"})`.replace(/\(fields /, "(");
}

/** The first line: `BE replaces Table 18 "Customer" (BC29): +3 fields, +1 event, +1 procedure; 1 key changed.` */
function headline(o: DiffObject, cc: string, major: string, title: string): string {
  const added = addedSummary(o);
  const other: string[] = [];
  for (const k of KINDS) {
    const changed = of(o, k, "changed").length + (k === "keys" ? of(o, k, "added").length : 0), removed = of(o, k, "removed").length;
    if (changed) other.push(`${plural(changed, k)} changed`);
    if (removed) other.push(`${plural(removed, k)} removed`);
  }
  if (o.properties?.length) other.push(`${o.properties.length} ${o.properties.length === 1 ? "property" : "properties"} changed`);
  const tail = [added || "no member added", ...(other.length ? [other.join(", ")] : [])].join("; ");
  return `${cc.toUpperCase()} replaces ${title} (BC${major}): ${tail}.`;
}

/**
 * The block `get_object(type, id, country)` prints before the W1 page when the country replaces the object (spec 2.3):
 * the headline, then what the layer adds (fields, events, procedures with signatures, values), what it changes, and
 * where the diff lives. At most 40 member lines; the rest is counted. `title` is the owner's page title
 * (`Table 18 "Customer"`); without one, the diff's key and name.
 */
export function countryBlock(o: DiffObject, cc: string, major: string, opts: { title?: string } = {}): string {
  const C = cc.toUpperCase(), title = opts.title ?? titleOfKey(o.key, o.name);
  const groups: [string, string[]][] = [
    ["Fields added", of(o, "fields", "added").map(fieldLine)],
    ["Values added", of(o, "values", "added").map((m) => `${m.id} ${m.name}`)],
    ["Events added", of(o, "events", "added").map(procLine)],
    ["Procedures added", of(o, "procedures", "added").map(procLine)],
    ["Keys changed", [...of(o, "keys", "changed"), ...of(o, "keys", "added"), ...of(o, "keys", "removed")].map(keyLine)],
    ["Fields changed", of(o, "fields", "changed").map((m) => `${m.id} "${m.name}"${m.delta ? ` (${deltaText(m.delta)})` : ""}`)],
    ["Events changed", of(o, "events", "changed").map((m) => `${m.name}${m.delta ? ` (${deltaText(m.delta)})` : ""}`)],
    ["Procedures changed", of(o, "procedures", "changed").map((m) => `${m.name}${m.delta ? ` (${deltaText(m.delta)})` : ""}`)],
  ];
  const out = [headline(o, cc, major, title)];
  let room = BLOCK_MEMBERS, more = 0;
  for (const [label, items] of groups) {
    if (!items.length) continue;
    const shown = items.slice(0, Math.max(0, room));
    room -= shown.length; more += items.length - shown.length;
    if (shown.length) out.push(`${label}: ${shown.join("; ")}`);
  }
  if (more) out.push(`... and ${more} more: bc_localization("${C}", section: "w1_objects_this_country_changes")`);
  out.push(`Source: data/code/diffs/country/${major}-${cc.toLowerCase()}.json; the ${C} page: localizations/${cc.toLowerCase()}.`);
  return out.join("\n");
}

/** What a `cat` anchor of a member only a layer has points at (`field-11310`, `event-OnBefore...`, `proc-Format...`, `value-0`). */
export interface MemberAnchor { kind: "field" | "value" | "event" | "proc"; key: string }
export function parseAnchor(anchor: string): MemberAnchor | null {
  const m = /^#?(field|value|event|proc)-(.+)$/.exec(anchor);
  return m ? { kind: m[1] as MemberAnchor["kind"], key: m[2] } : null;
}

/**
 * The answer of `cat("objects/table/18#field-11310")` for a member the W1 page does not have but the country layer
 * adds (spec 2.3): one row, in the layout of the W1 page's table, and where to read more. Null when the layer's diff has
 * no such added member. `title` is the owner's page title, `site` the site base, `path` the W1 page's path.
 */
export function memberAnswer(o: DiffObject, a: MemberAnchor, cc: string, opts: { title?: string; site: string; path: string }): string | null {
  const C = cc.toUpperCase(), title = opts.title ?? titleOfKey(o.key, o.name);
  const head = (what: string) => `${title}, ${what} (added by the ${C} layer, not in W1):`;
  const foot = `W1 page: ${opts.site}${opts.path}/ · ${C} layer: localizations/${cc.toLowerCase()}`;
  if (a.kind === "field") {
    const m = of(o, "fields", "added").find((x) => x.id === a.key);
    if (!m) return null;
    const to = (m.to ?? {}) as FieldTo;
    return `${head(`field ${m.id}`)}\n| No. | Name | Type | Properties | Layer |\n|---|---|---|---|---|\n| ${m.id} | ${m.name} | ${to.type ?? ""} | ${propertiesText(to.properties)} | ${C} |\n\n${foot}\n`;
  }
  if (a.kind === "value") {
    const m = of(o, "values", "added").find((x) => x.id === a.key);
    if (!m) return null;
    return `${head(`value ${m.id}`)}\n| Ordinal | Name | Layer |\n|---|---|---|\n| ${m.id} | ${m.name} | ${C} |\n\n${foot}\n`;
  }
  const list = a.kind === "event" ? of(o, "events", "added") : of(o, "procedures", "added");
  const hits = list.filter((x) => x.name === a.key);
  if (!hits.length) return null;
  return `${head(`${a.kind === "event" ? "event" : "procedure"} ${a.key}`)}\n${hits.map((m) => `- \`${signature(m.name, (m.to ?? {}) as ProcTo)}\` (${((m.to ?? {}) as ProcTo).event ?? ((m.to ?? {}) as ProcTo).scope ?? "global"})`).join("\n")}\n\n${foot}\n`;
}
