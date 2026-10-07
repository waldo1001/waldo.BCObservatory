/**
 * Object mentions of videos and posts (D65, factored out of graph.ts; D67 phase 3): AL objects by exact type and name
 * ("table Customer"), the way the extractors record them in `objects_mentioned` and `code_objects_mentioned`. Exact
 * only, and a name two objects of one type share (an object moved between apps) is left out rather than guessed. This
 * is the one place outside the seed import that resolves by name (spec section 1, design intent); the graph, Related,
 * the app pages and the video and post pages share it.
 *
 * Two inputs give the same map: the object pages' frontmatter (graph, Related, app pages, which read the pages anyway)
 * and data/index/objects.json (video and post pages, rendered in the item loop, where reading 16k pages per page is
 * not an option). A country layer's row carries its name with " (XX)"; the page carries it bare, so the index loader
 * strips the suffix and both maps agree.
 */
import { statSync } from "node:fs";
import { resolve } from "node:path";
import { loadConfig } from "../lib/config.js";
import { readJson } from "../lib/fsx.js";
import { versionRanges } from "../lib/versions.js";

/** Object page frontmatter fields the index needs. */
export interface ObjectNameRow { id: string; fm: Record<string, any> }
/** `"<object type> <name>"` lower-cased -> object page id, or null when two objects share it. */
export type ObjectByName = Map<string, string | null>;

const nameKey = (type: string, name: string) => `${type.trim()} ${name.trim()}`.toLowerCase();
const put = (m: ObjectByName, k: string, id: string) => m.set(k, m.has(k) && m.get(k) !== id ? null : id);

export function objectByName(pages: Iterable<ObjectNameRow>): ObjectByName {
  const m: ObjectByName = new Map();
  for (const { id, fm } of pages) {
    if (fm.type !== "object" || !fm.object_type || !fm.name) continue;
    put(m, `${fm.object_type} ${String(fm.name)}`.toLowerCase(), id);
  }
  return m;
}

/** The object page ids a video's or post's frontmatter names, distinct, in mention order. */
export function mentionedObjects(fm: Record<string, any>, byName: ObjectByName): string[] {
  return [...new Set([...(fm.objects_mentioned ?? []), ...(fm.code_objects_mentioned ?? [])]
    .map((m: unknown) => byName.get(String(m).toLowerCase().trim())).filter((x): x is string => !!x))];
}

/** What a link to an object page needs: its page key (`codeunit/80`, the path under content/objects) and its header. */
export interface ObjectRef { pageId: string; key: string; type: string; id: number | null; name: string }
export interface ObjectIndex { byName: ObjectByName; refs: Map<string, ObjectRef>; types: Set<string> }

/** data/index/objects.json rows (`bcobs-objects@1`): [page key, type, id, name, app, ...]. */
export function objectIndexFromRows(rows: [string, string, number | null, string, string | null, ...unknown[]][]): ObjectIndex {
  const byName: ObjectByName = new Map(), refs = new Map<string, ObjectRef>(), types = new Set<string>();
  for (const [key, type, id, name, app] of rows) {
    const cc = /^([A-Z]{2}) layer$/.exec(app ?? "")?.[1];
    const bare = cc && name.endsWith(` (${cc})`) ? name.slice(0, -(cc.length + 3)) : name;
    const pageId = `object/${key}`;
    put(byName, nameKey(type, bare), pageId);
    refs.set(pageId, { pageId, key, type, id, name });
    types.add(type);
  }
  return { byName, refs, types };
}

let cache: { path: string; stamp: string; index: ObjectIndex } | null = null;
let reads = 0;
/** How often loadObjectIndex parsed the file (tests: once per render run, not once per page). */
export const objectIndexReads = () => reads;

/**
 * data/index/objects.json as an ObjectIndex, or null when the file does not exist (a fresh checkout, a test). Parsed
 * once and kept while the file is unchanged: a render run asks per page and pays one stat.
 */
export function loadObjectIndex(dataDir: string): ObjectIndex | null {
  const path = resolve(dataDir, "index", "objects.json");
  let stamp: string;
  try { const s = statSync(path); stamp = `${s.mtimeMs}|${s.size}`; } catch { return null; }
  if (cache && cache.path === path && cache.stamp === stamp) return cache.index;
  reads++;
  const index = objectIndexFromRows(readJson<{ rows: Parameters<typeof objectIndexFromRows>[0] }>(path).rows ?? []);
  cache = { path, stamp, index };
  return index;
}

export interface Mention { type: string; name: string }
export type Unresolved<M> = M & { reason: "not_found" | "ambiguous" | "not_an_object_type" };
export interface Resolution<M extends Mention> {
  resolved: (M & { ref: ObjectRef })[]; unresolved: Unresolved<M>[]; pageIds: string[];
  /** Per input mention, in input order: its object page, or null. */
  refs: (ObjectRef | null)[];
}

/**
 * Resolve `{type, name}` mentions by exact type and lower-cased trimmed name. Kept in order, one entry per mention
 * (a video may name an object at several seconds). `not_an_object_type`: the extractor's `other` or `api`, which name
 * no object type with pages and are never looked up. `pageIds`: the resolved pages, distinct, in mention order.
 */
export function resolveMentions<M extends Mention>(objects: M[], index: ObjectIndex): Resolution<M> {
  const resolved: Resolution<M>["resolved"] = [], unresolved: Unresolved<M>[] = [], refs: (ObjectRef | null)[] = [];
  for (const o of objects) {
    const type = String(o.type).trim().toLowerCase();
    const hit = index.types.has(type) ? index.byName.get(nameKey(type, String(o.name))) : undefined;
    const ref = hit ? index.refs.get(hit) ?? null : null;
    refs.push(ref);
    if (ref) resolved.push({ ...o, ref });
    else unresolved.push({ ...o, reason: !index.types.has(type) ? "not_an_object_type" : hit === null ? "ambiguous" : "not_found" });
  }
  return { resolved, unresolved, pageIds: [...new Set(resolved.map((r) => r.ref.pageId))], refs };
}

/** "BC28-30": the snapshot majors the object pages cover (config/versions.json). */
export function coveredMajors(): string {
  return versionRanges(loadConfig<{ snapshot: string[] }>("versions").snapshot);
}

const esc = (s: string) => s.replace(/\|/g, "\\|").replace(/([[\]])/g, "\\$1").replace(/\s+/g, " ").trim();
/** `codeunit 99000845 "Sales Line-Reserve"`, the label of a link to an object page. */
export const refLabel = (r: ObjectRef) => `${r.type}${r.id != null ? ` ${r.id}` : ""} "${esc(r.name)}"`;
/** `[codeunit 80 "Sales-Post"](<up>objects/codeunit/80.md)`; `up` is the page's way to the content root. */
export const refLink = (r: ObjectRef, up: string) => `[${refLabel(r)}](${up}objects/${r.key}.md)`;
const asNamed = (o: Mention) => `${o.type} "${esc(String(o.name))}"`;

/**
 * The "AL objects mentioned" section of a video or post page (D67 2.3): every mention one bullet, a link where the name
 * resolves, plain text where it does not, then one line naming the object-type names that were not found and one for
 * names two objects share. `suffix` adds per-mention text (a video's timestamp). Without an index nothing is joined
 * and the section says so.
 */
export function mentionSection<M extends Mention>(objects: M[], index: ObjectIndex | null, o: { up: string; source: string; suffix?: (m: M) => string }): { lines: string[]; pageIds: string[] } {
  if (!objects.length) return { lines: [], pageIds: [] };
  const sfx = o.suffix ?? (() => "");
  if (!index) return { lines: ["## AL objects mentioned", "", `${o.source}; not joined to the object pages (no object index).`, "", ...objects.map((m) => `- ${asNamed(m)}${sfx(m)}`), ""], pageIds: [] };
  const r = resolveMentions(objects, index);
  const lines = ["## AL objects mentioned", "", `${o.source}. A name that matches one object page by exact type and name links to it; the others stay as named.`, "",
    ...objects.map((m, i) => `- ${r.refs[i] ? refLink(r.refs[i]!, o.up) : asNamed(m)}${sfx(m)}`), ""];
  const distinct = (xs: Mention[]) => [...new Set(xs.map(asNamed))];
  const missing = distinct(r.unresolved.filter((u) => u.reason === "not_found"));
  const shared = distinct(r.unresolved.filter((u) => u.reason === "ambiguous"));
  if (missing.length) lines.push(`Not found in ${coveredMajors()}: ${missing.join(", ")}.`, "");
  if (shared.length) lines.push(`More than one object has this name, so none is linked: ${shared.join(", ")}.`, "");
  return { lines, pageIds: r.pageIds };
}
