/**
 * Cross-links with labels (D106, spec docs/specs/layered-answers.md 4.1): objects, changes, videos and posts link to
 * the Learn pages, objects, posts and changes that match them, in both directions, each row with a label from a closed
 * set and who made it. Certain rows (fixes, documents, names, made by code or a human) also go into the page's
 * `links.<kind>`; "possibly related", "relation unknown" and every model row stay in `links.related` only, so an agent
 * never reads a guess as a fact.
 *
 * Three sources, merged in this order and the later winning on the same target: deterministic joins (Learn extraction
 * objects and D94 identifiers resolved exactly, shared objects), the model confirmation (learn-confirm.ts, always
 * "possibly related"), the human overrides (data/overrides/links.yaml). No title or keyword matching anywhere.
 *
 * Writes data/links/crosslinks.json (`bcobs-crosslinks@1`), one page per line; the object, change, video and post
 * renders read it. Built from data and last night's pages before those renders run, so it never waits on them.
 */
import { statSync } from "node:fs";
import { resolve } from "node:path";
import { exists, listFiles, readJson, readJsonOr, readText, writeText } from "../lib/fsx.js";
import { REMOVED_UPSTREAM } from "../lib/manifest.js";
import { objectTitle } from "../lib/object-title.js";
import { loadObjectIndex, objectIndexFromRows, resolveMentions, type Mention, type ObjectIndex } from "./mentions.js";
import { checkOverrideTargets, isUrl, loadOverrideLinks, pagePathOf, type OverrideLink } from "./overrides.js";
import { frontmatterOf } from "./related.js";

export const SCHEMA = "bcobs-crosslinks@1";
/** Rows per page, certain first; a Learn page keeps a few more (the brief reads them). */
export const MAX_ROWS = 10;
export const MAX_LEARN_ROWS = 24;
/** An object named by more media than this pairs none of them: it is too common to say anything ("Customer"). */
export const MAX_SHARERS = 20;
/** Learn pages a change or a video/post reaches through the objects it touches or names. */
export const MAX_VIA_OBJECTS = 2;
/** Only an object with at most this many certain Learn pages leads a change or a video/post to them: Table 39 "Purchase Line" is on too many to say anything. */
export const MAX_DOCS_VIA = 3;
/** A Learn page naming more objects than this is a list ("Deleted objects in the Base App"): it documents none of them. */
export const MAX_NAMED_PER_LEARN = 40;

export type Label = "fixes" | "documents" | "names" | "possibly related" | "relation unknown";
export type By = "code" | "override" | "model";
export interface CrossLink { to: string; title: string; label: Label; why: string; by: By }
export interface CrossLinks { pages: Record<string, CrossLink[]>; learn: Record<string, CrossLink[]> }

const CERTAIN_LABELS = new Set<Label>(["fixes", "documents", "names"]);
/** A row an agent may read as fact: a certain label made by code or a human. */
export const isCertain = (r: Pick<CrossLink, "label" | "by">) => r.by !== "model" && CERTAIN_LABELS.has(r.label);
const strength = (r: CrossLink) => (r.by === "override" ? 0 : isCertain(r) ? 1 : r.by === "code" ? 2 : 3);

export interface LearnDoc { url: string; title: string; objects: Mention[]; identifiers: string[] }
export interface CrossLinkInput {
  learn: LearnDoc[];
  /** Object page id -> the Learn pages docs-objects.json joins it to (ms.search.form, API pages): already linked. */
  documented: Map<string, { url: string; title: string }[]>;
  objects: ObjectIndex;
  /** Event name, lower-cased -> the one object page that publishes it, or null when several do. */
  eventOwners: Map<string, string | null>;
  /** Page id -> title, for every page a row can point at. */
  titles: Map<string, string>;
  changes: { id: string; title: string; objects: string[]; work_items?: string[] }[];
  /** Hotfix entries (render/hotfix.ts pages): a change carrying one's ID as a work item `fixes` it. */
  hotfixes?: { update: string; id: string; title: string }[];
  media: { id: string; title: string; kind: "video" | "post"; objects: string[] }[];
  overrides: OverrideLink[];
  /** learn-confirm.ts picks per unit (an object or change page id). */
  model: { unit: string; picks: { url: string; reason: string }[] }[];
}

export function buildCrossLinks(inp: CrossLinkInput): CrossLinks {
  const learnTitle = new Map(inp.learn.map((d) => [d.url, d.title]));
  const titles = new Map([...inp.changes, ...inp.media].map((p) => [p.id, p.title] as const));
  const titleOf = (x: string) => inp.titles.get(x) ?? titles.get(x) ?? learnTitle.get(x) ?? x;
  const pages = new Map<string, Map<string, CrossLink>>(), learn = new Map<string, Map<string, CrossLink>>();
  // one row per (page, target): the stronger source wins, a later row of the same strength replaces an earlier one
  const put = (side: Map<string, Map<string, CrossLink>>, from: string, r: CrossLink) => {
    if (from === r.to) return;
    const m = side.get(from) ?? new Map<string, CrossLink>();
    const had = m.get(r.to);
    if (!had || strength(r) <= strength(had)) m.set(r.to, r);
    side.set(from, m);
  };
  // a row always belongs to a page: `hotfix/28.6#648146` is the entry's row on hotfix/28.6
  const add = (from: string, r: CrossLink) => (isUrl(from) ? put(learn, from, r) : put(pages, from.split("#")[0], r));

  // 1. Learn names an object: its extraction's objects resolved exactly, or a D94 identifier that is an event with one owner
  const certainLearn = new Map<string, { url: string; title: string }[]>();
  for (const [id, ds] of inp.documented) certainLearn.set(id, [...ds]);
  const addCertain = (obj: string, url: string) => {
    const list = certainLearn.get(obj) ?? [];
    if (!list.some((d) => d.url === url)) list.push({ url, title: learnTitle.get(url) ?? url });
    certainLearn.set(obj, list);
  };
  for (const d of [...inp.learn].sort((a, b) => a.url.localeCompare(b.url))) {
    const named = new Map<string, string>();
    for (const r of resolveMentions(d.objects, inp.objects).resolved) if (!named.has(r.ref.pageId)) named.set(r.ref.pageId, titleOf(r.ref.pageId));
    for (const ident of d.identifiers) {
      const owner = inp.eventOwners.get(ident.toLowerCase());
      if (owner && !named.has(owner)) named.set(owner, ident);
    }
    if (named.size > MAX_NAMED_PER_LEARN) continue;
    for (const [obj, what] of named) {
      if (inp.documented.get(obj)?.some((x) => x.url === d.url)) continue;
      add(obj, { to: d.url, title: d.title, label: "names", why: what === titleOf(obj) ? "names this object" : `names ${what}`, by: "code" });
      add(d.url, { to: obj, title: titleOf(obj), label: "names", why: `Learn page names ${what}`, by: "code" });
      addCertain(obj, d.url);
    }
  }
  // a human's documents/names to a Learn URL is as certain for the inheritance below
  for (const o of inp.overrides) if (isUrl(o.to) && CERTAIN_LABELS.has(o.label) && o.from.startsWith("object/")) addCertain(o.from, o.to);

  // 2. a change or a video/post reaches the Learn pages of the objects it touches or names: possibly related.
  //    The most specific pages first (documenting the fewest objects), at most MAX_VIA_OBJECTS.
  const docObjects = new Map<string, number>();
  for (const ds of certainLearn.values()) for (const d of ds) docObjects.set(d.url, (docObjects.get(d.url) ?? 0) + 1);
  const viaObjects = (from: string, objs: string[], verb: string) => {
    const cands: { url: string; title: string; obj: string }[] = [];
    for (const obj of objs) {
      const ds = certainLearn.get(obj) ?? [];
      if (ds.length > MAX_DOCS_VIA) continue;
      for (const d of ds) if (!cands.some((c) => c.url === d.url)) cands.push({ ...d, obj });
    }
    cands.sort((a, b) => (docObjects.get(a.url) ?? 0) - (docObjects.get(b.url) ?? 0) || a.url.localeCompare(b.url));
    for (const c of cands.slice(0, MAX_VIA_OBJECTS)) add(from, { to: c.url, title: c.title, label: "possibly related", why: `${verb} ${titleOf(c.obj)}`, by: "code" });
  };
  for (const c of inp.changes) viaObjects(c.id, c.objects, "touches");
  for (const m of inp.media) viaObjects(m.id, m.objects, "names");

  // 2b. a change whose work item is a hotfix entry's ID fixes it (the hotfix page lists the reverse itself)
  const entries = new Map<string, { update: string; id: string; title: string }[]>();
  for (const h of inp.hotfixes ?? []) entries.set(h.id, [...(entries.get(h.id) ?? []), h]);
  for (const c of inp.changes) for (const wi of c.work_items ?? []) for (const h of entries.get(String(wi)) ?? [])
    add(c.id, { to: `hotfix/${h.update}#${h.id}`, title: `Update ${h.update}, ${h.id}: ${h.title}`, label: "fixes", why: `work item ${h.id}`, by: "code" });

  // 3. two videos or posts that name the same, not too common object
  const sharers = new Map<string, string[]>();
  for (const m of [...inp.media].sort((a, b) => a.id.localeCompare(b.id))) for (const o of new Set(m.objects)) sharers.set(o, [...(sharers.get(o) ?? []), m.id]);
  for (const [obj, ms] of [...sharers].sort(([a], [b]) => a.localeCompare(b))) {
    if (ms.length < 2 || ms.length > MAX_SHARERS) continue;
    for (const a of ms) for (const b of ms) if (a !== b) add(a, { to: b, title: titleOf(b), label: "possibly related", why: `both name ${titleOf(obj)}`, by: "code" });
  }

  // 4. the model's picks (learn-confirm.ts): possibly related, its reason as the why
  for (const u of inp.model) for (const p of u.picks) {
    add(u.unit, { to: p.url, title: titleOf(p.url), label: "possibly related", why: p.reason, by: "model" });
    add(p.url, { to: u.unit, title: titleOf(u.unit), label: "possibly related", why: p.reason, by: "model" });
  }

  // 5. the overrides, last, both directions
  for (const o of inp.overrides) {
    add(o.from, { to: o.to, title: titleOf(o.to), label: o.label, why: o.why, by: "override" });
    add(o.to, { to: o.from, title: titleOf(o.from), label: o.label, why: o.why, by: "override" });
  }

  const order = (m: Map<string, CrossLink>, max: number) => [...m.values()]
    .sort((a, b) => Number(!isCertain(a)) - Number(!isCertain(b)) || strength(a) - strength(b) || a.title.localeCompare(b.title) || a.to.localeCompare(b.to)).slice(0, max);
  const out: CrossLinks = { pages: {}, learn: {} };
  for (const id of [...pages.keys()].sort()) out.pages[id] = order(pages.get(id)!, MAX_ROWS);
  for (const url of [...learn.keys()].sort()) out.learn[url] = order(learn.get(url)!, MAX_LEARN_ROWS);
  return out;
}

/** The `links` list a certain row's target belongs in (a Learn URL in `learn`). */
const LIST_OF: Record<string, string> = { object: "objects", change: "changes", video: "videos", post: "posts", topic: "topics", feature: "features" };

/** A row that only joins a list: certain and made by code. Its label adds nothing to the list entry, so `related` leaves it out. */
export const listOnly = (r: CrossLink) => isCertain(r) && r.by === "code" && (isUrl(r.to) || !!LIST_OF[r.to.split("/")[0]]);

/** A page's `links` with its cross-links: certain rows added to their list; `related` holds the rest (hand-made, uncertain, model). */
export function applyCrossLinks<L extends Record<string, unknown>>(links: L, rows: CrossLink[]): L & { related?: CrossLink[] } {
  if (!rows.length) return links;
  const out: Record<string, unknown> = { ...links };
  for (const r of rows) {
    if (!isCertain(r)) continue;
    const list = isUrl(r.to) ? "learn" : LIST_OF[r.to.split("/")[0]];
    if (!list) continue;
    const have = (out[list] as string[] | undefined) ?? [];
    if (!have.includes(r.to)) out[list] = [...have, r.to];
  }
  const related = rows.filter((r) => !listOnly(r));
  if (related.length) out.related = related;
  return out as L & { related?: CrossLink[] };
}

const esc = (s: string) => s.replace(/([[\]])/g, "\\$1").replace(/\s+/g, " ").trim();
/** A row's target as a markdown link from a page whose way to the content root is `up`. */
export function crossLinkHref(to: string, up: string): string {
  if (isUrl(to)) return to;
  const [id, anchor] = to.split("#");
  return `${up}${pagePathOf(id)}${anchor ? `#${anchor}` : ""}`;
}

/** `## Linked pages` (certain rows) and `## Possibly related` (the rest), or nothing. */
export function crossLinkSection(rows: CrossLink[], up: string): string[] {
  const line = (r: CrossLink) => `- [${esc(r.title)}](${crossLinkHref(r.to, up)}) — ${r.label}: ${esc(r.why)}${r.by === "model" ? " (model-linked)" : r.by === "override" ? " (checked by hand)" : ""}`;
  const certain = rows.filter(isCertain), maybe = rows.filter((r) => !isCertain(r));
  const out: string[] = [];
  if (certain.length) out.push("## Linked pages", "", ...certain.map(line), "");
  if (maybe.length) out.push("## Possibly related", "", "No source states these links: they share an object, a model read them, or a person found the same subject.", "", ...maybe.map(line), "");
  return out;
}

// ---------------------------------------------------------------------------------------------- io

export const crossLinksPath = (dataDir: string) => resolve(dataDir, "links", "crosslinks.json");

/** One page per line: valid JSON whose git diff reads page by page. */
export function serializeCrossLinks(r: CrossLinks): string {
  const block = (o: Record<string, unknown>) => Object.entries(o).map(([k, v]) => `${JSON.stringify(k)}:${JSON.stringify(v)}`).join(",\n");
  return `{"schema":${JSON.stringify(SCHEMA)},\n"generated_by":"pipeline/link/crosslinks.ts",\n"pages":{\n${block(r.pages)}\n},\n"learn":{\n${block(r.learn)}\n}}\n`;
}

let cache: { path: string; stamp: string; links: CrossLinks } | null = null;
/** The file, parsed once while it is unchanged (a render run asks per page and pays one stat), or no rows when the stage has not run. */
export function loadCrossLinks(dataDir: string): CrossLinks {
  const p = crossLinksPath(dataDir);
  let stamp: string;
  try { const st = statSync(p); stamp = `${st.mtimeMs}|${st.size}`; } catch { return { pages: {}, learn: {} }; }
  if (cache && cache.path === p && cache.stamp === stamp) return cache.links;
  const j = readJson<CrossLinks & { schema: string }>(p);
  cache = { path: p, stamp, links: { pages: j.pages ?? {}, learn: j.learn ?? {} } };
  return cache.links;
}
export const crossLinksFor = (dataDir: string, id: string): CrossLink[] => loadCrossLinks(dataDir).pages[id] ?? [];

interface DocsItem { id: string; url?: string; title?: string; skip?: string | null; meta?: { identifiers?: string[] } }

/** Learn pages the manifest knows (not removed upstream): url -> title, plus identifiers by item id. */
function learnItems(dataDir: string): DocsItem[] {
  return listFiles(resolve(dataDir, "manifest", "docs"), ".json").map((f) => readJson<DocsItem>(f))
    .filter((i) => i.url && i.skip !== REMOVED_UPSTREAM);
}
export const learnUrlsOf = (dataDir: string) => new Set(learnItems(dataDir).map((i) => i.url!));

/** Everything the stage reads: the Learn manifest and extractions, docs-objects, the object and event indexes, last night's change, video and post pages, the overrides, the model's picks. */
export function loadCrossLinkInput(dataDir: string, contentDir: string): CrossLinkInput & { errors: string[] } {
  const items = learnItems(dataDir);
  const extracted = new Map<string, Mention[]>();
  for (const f of listFiles(resolve(dataDir, "extract", "docs"), ".json")) {
    const x = readJson<{ item_id: string; objects?: Mention[] }>(f);
    if (x.objects?.length) extracted.set(x.item_id, x.objects);
  }
  const learn: LearnDoc[] = items.map((i) => ({ url: i.url!, title: i.title ?? i.url!, objects: extracted.get(i.id) ?? [], identifiers: i.meta?.identifiers ?? [] }));
  const docsObjects = readJsonOr<{ by_object?: Record<string, { url: string; title: string }[]> }>(resolve(dataDir, "index", "docs-objects.json"), {});
  const documented = new Map(Object.entries(docsObjects.by_object ?? {}).map(([k, ds]) => [`object/${k}`, ds.map((d) => ({ url: d.url, title: d.title }))]));
  const objects = loadObjectIndex(dataDir) ?? objectIndexFromRows([]);
  const eventOwners = new Map<string, string | null>();
  for (const [owner, name] of readJsonOr<{ rows?: [string, string, ...unknown[]][] }>(resolve(dataDir, "index", "events.json"), {}).rows ?? []) {
    const k = String(name).toLowerCase(), id = `object/${owner}`;
    eventOwners.set(k, eventOwners.has(k) && eventOwners.get(k) !== id ? null : id);
  }
  const titles = new Map<string, string>();
  for (const r of objects.refs.values()) titles.set(r.pageId, objectTitle(r));
  const pages = (section: string) => listFiles(resolve(contentDir, section), ".md").map((f) => frontmatterOf(readText(f))).filter((fm): fm is Record<string, any> => !!fm?.id);
  const changes = pages("changes").filter((fm) => fm.type === "change").map((fm) => ({ id: String(fm.id), title: String(fm.title), objects: (fm.links?.objects ?? []).map(String), work_items: (fm.work_items ?? []).map(String) }));
  const hotfixes = listFiles(resolve(dataDir, "hotfixes"), ".json").flatMap((f) => { const s = readJson<{ update: string; entries?: { id: string; title: string }[] }>(f); return (s.entries ?? []).map((e) => ({ update: s.update, id: e.id, title: e.title })); });
  const media = [...pages("videos"), ...pages("posts")].filter((fm) => fm.type === "video" || fm.type === "post")
    .map((fm) => ({ id: String(fm.id), title: String(fm.title), kind: fm.type as "video" | "post", objects: (fm.links?.objects ?? []).map(String) }));
  for (const p of [...changes, ...media]) titles.set(p.id, p.title);
  const learnUrls = new Set(learn.map((d) => d.url));
  const all = loadOverrideLinks(dataDir);
  const pageExists = (id: string) => exists(resolve(contentDir, pagePathOf(id)));
  // a hotfix entry's page comes with the source's first ingest: until then its rows wait, without an error
  const pending = (id: string) => id.startsWith("hotfix/") && !pageExists(id);
  const errors = checkOverrideTargets(all.filter((o) => !pending(o.from) && !pending(o.to)), pageExists, learnUrls);
  const bad = new Set(errors.map((e) => e.replace(/^overrides\/links\.yaml: (\S+) .*$/, "$1")));
  const overrides = all.filter((o) => !bad.has(o.from) && !bad.has(o.to) && !pending(o.from) && !pending(o.to));
  for (const o of overrides) for (const id of [o.from, o.to]) if (!isUrl(id) && !titles.has(id)) {
    const fm = frontmatterOf(readText(resolve(contentDir, pagePathOf(id))));
    if (fm?.title) titles.set(id, String(fm.title));
  }
  // learn-confirm.ts (data/links/learn-confirm.json); read here as plain JSON so the two modules do not import each other
  const confirm = readJsonOr<{ units?: Record<string, { picks?: { url: string; reason: string }[] }> }>(resolve(dataDir, "links", "learn-confirm.json"), {});
  const model = Object.entries(confirm.units ?? {}).filter(([, u]) => u.picks?.length)
    .map(([unit, u]) => ({ unit, picks: u.picks!.filter((p) => learnUrls.has(p.url)) }));
  return { learn, documented, objects, eventOwners, titles, changes, hotfixes, media, overrides, model, errors };
}

export interface CrossLinksRun { pages: number; rows: number; certain: number; by: Record<By, number>; learn_pages: number; written: boolean; errors: string[] }

/** The nightly stage: build and write data/links/crosslinks.json when it changed. */
export function refreshCrossLinks(dataDir: string, contentDir: string): CrossLinksRun {
  const { errors, ...inp } = loadCrossLinkInput(dataDir, contentDir);
  const r = buildCrossLinks(inp);
  const text = serializeCrossLinks(r);
  const p = crossLinksPath(dataDir);
  const written = !exists(p) || readText(p) !== text;
  if (written) writeText(p, text);
  const by: Record<By, number> = { code: 0, override: 0, model: 0 };
  let rows = 0, certain = 0;
  for (const list of Object.values(r.pages)) for (const x of list) { rows++; by[x.by]++; if (isCertain(x)) certain++; }
  return { pages: Object.keys(r.pages).length, rows, certain, by, learn_pages: Object.keys(r.learn).length, written, errors };
}
