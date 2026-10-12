/**
 * Search index for the site, the MCP server and other agents (PLAN 4.7, D35, D86): data/index/index-manifest.json and
 * the page shards it lists, pages-hubs-<sha12>.json, pages-media-<sha12>.json and pages-objects-<n>-<sha12>.json.
 *
 * One record per content page (path, type, title, summary, tier, system, date, tags, plus a few type facts such as
 * object type/id, name, country, source, inbound references), in shards of at most SHARD_BYTES per kind, sorted by path
 * so a quiet night rewrites nothing. The names carry the content's sha256, so a browser keeps a shard in Cache Storage
 * until it changes, and the manifest lists each shard with its kind and hash. The site and the MCP rank the records
 * with the shared scorer of packages/search (D86); the site searches its own index, Pagefind was never built.
 *
 * D94: learn-<sha12>.json holds one row per Microsoft Learn article (learnShard), which has no page here. The manifest
 * lists it under `learn`, not under `shards`: every reader of `shards` reads page records, and the MCP releases before
 * D94 load every entry there.
 */
import { relative, resolve } from "node:path";
import matter from "gray-matter";
import type { LearnHub, LearnRow, LearnShard } from "@bc-observatory/search";
import { loadConfig } from "../lib/config.js";
import { exists, listFiles, readJson, readText, removeIfExists, writeText } from "../lib/fsx.js";
import { Manifest, type ManifestItem } from "../lib/manifest.js";
import { objectSystem } from "../lib/systems.js";
import { sha256 } from "../lib/text.js";

export const SHARD_BYTES = 8 * 1024 * 1024;
export interface PageRecord {
  path: string; type: string; title: string; summary: string; tier: string; system?: string; date?: string; tags?: string[];
  object_type?: string; object_id?: number | null; app?: string | null; country?: string; source?: string; status?: string; obsolete?: string | null;
  /** What a result is and where it sits (D65): a hub's Learn TOC path above it, an object's app, a feature's roadmap area,
   *  a video's channel or a post's blog, an app page's system. */
  path_label?: string;
  /** An object's Caption when it differs from its name ("Service Objects" captioned "Subscriptions"). */
  caption?: string;
  /** Topic hubs and app pages: how much hangs off them (Learn pages + objects + videos + posts), for ranking. */
  members?: number;
  /** Topic hubs: the narrative state, for ranking and the result row. */
  narrative?: "reviewed" | "unreviewed" | "none";
  /** Topic hubs and app pages: the stats line of the result row ("47 Learn pages · 27 objects · 2 videos · reviewed"). */
  stats?: string;
  /** Objects (D86): the name, the namespace, the majors the object is present in ("23-30"), what points at it
   *  (references, callers, pages, event subscribers, Learn pages) and its event subscribers, for ranking. */
  name?: string; namespace?: string | null; present_in?: string; inbound?: number; subscribers?: number;
  /** D91, change pages: base branch, the BC major it maps to, objects touched, and the two flags the changes list prints. */
  branch?: string; major?: string; objects?: number; breaking?: boolean; community?: boolean;
  /** D91, video pages: the review state the videos list prints as a badge, and the author's poster opt-out. */
  review?: string; embed?: boolean;
}
export type ShardKind = "hubs" | "media" | "objects";
export interface IndexManifest {
  schema: "bcobs-index@1"; pages: number; shards: { file: string; count: number; sha256: string; kind: ShardKind }[];
  /** D94: the Learn articles, one shard of tuple rows (packages/search learnRecords reads it) */
  learn?: { file: string; count: number; sha256: string };
  by_type: Record<string, number>;
}
export const SHARD_KINDS: ShardKind[] = ["hubs", "media", "objects"];
/** The shard a page type lives in (D86): starting points (hubs, apps, features, localizations, sources, digests, releases), media (videos, posts, code changes), AL objects. */
export const kindOfType = (type: string): ShardKind => (type === "object" ? "objects" : type === "video" || type === "post" || type === "change" ? "media" : "hubs");

const PATH_MAX = 40;
/** A hub's TOC path above it, " › "-joined; longer than 40 characters keeps the last two parts. */
export function pathLabel(parts: string[]): string {
  const full = parts.join(" › ");
  return full.length > PATH_MAX && parts.length > 2 ? `… › ${parts.slice(-2).join(" › ")}` : full;
}
let systemLabels: Map<string, string> | null = null;
const systemLabel = (id: string) => (systemLabels ??= new Map(loadConfig<{ systems: { id: string; label: string }[] }>("taxonomy").systems.map((s) => [s.id, s.label]))).get(id) ?? id;
const n = (x: unknown) => (typeof x === "number" && Number.isFinite(x) ? x : 0);
const plural = (k: number, one: string, many = `${one}s`) => `${k} ${k === 1 ? one : many}`;
const len = (x: unknown) => (Array.isArray(x) ? x.length : 0);

/** The majors an object is present in, compact: ["23", ..., "30"] -> "23-30"; a gap lists them ("28 30"). */
export function majorsText(present: unknown): string | null {
  const ms = (Array.isArray(present) ? present : []).map(Number).filter(Number.isFinite).sort((a, b) => a - b);
  if (!ms.length) return null;
  const contiguous = ms.every((m, i) => i === 0 || m === ms[i - 1] + 1);
  return ms.length === 1 ? String(ms[0]) : contiguous ? `${ms[0]}-${ms.at(-1)}` : ms.join(" ");
}

/** The record of one page from its frontmatter. */
export function pageRecord(path: string, fm: Record<string, any>): PageRecord {
  // a real date only (published, GA): object and topic pages are regenerated nightly, which is not news
  const date = fm.published_at ?? fm.ga_date ?? fm.merged_at ?? undefined;
  const r: PageRecord = {
    path, type: String(fm.type), title: String(fm.title ?? ""), summary: String(fm.summary ?? ""), tier: String(fm.tier ?? ""),
    ...(fm.system ? { system: fm.system } : {}), ...(date ? { date: String(date).slice(0, 10) } : {}),
    ...(Array.isArray(fm.tags) && fm.tags.length ? { tags: fm.tags.slice(0, 8).map(String) } : {}),
  };
  if (fm.type === "object") {
    // D86: a country object sits in its country layer, whatever app the code names ("BE layer", as objects.json says)
    const country = fm.country ? String(fm.country).toLowerCase() : null;
    const app = country ? `${String(fm.country).toUpperCase()} layer` : fm.app ?? null;
    const rel = fm.relations ?? {};
    Object.assign(r, { object_type: fm.object_type, object_id: fm.object_id ?? null, name: String(fm.name ?? ""), app, ...(country ? { country } : {}),
      namespace: fm.namespace ?? null, system: objectSystem(fm.namespace), obsolete: fm.obsolete?.state ?? null });
    if (app) r.path_label = String(app);
    if (fm.caption) r.caption = String(fm.caption);
    const present = majorsText(fm.present_in);
    if (present) r.present_in = present;
    r.inbound = n(rel.referenced_by) + n(rel.called_by) + n(rel.pages) + n(rel.event_subscribers) + len(fm.links?.learn);
    r.subscribers = n(rel.event_subscribers);
  }
  if (fm.type === "topic") {
    // D65: the TOC path above the hub tells the three "Subscriptions" hubs apart, and its words (plus the system) are the
    // hub's tags; the hub's own title is left out of both, it already scores as the title
    const toc: string[] = Array.isArray(fm.learn_toc_path) ? fm.learn_toc_path.map(String) : [];
    const above = toc.slice(0, -1);
    if (above.length) r.path_label = pathLabel(above);
    const tags = [...new Set([...above.map((t) => t.toLowerCase()), ...(fm.system ? [String(fm.system)] : [])])];
    if (tags.length && !r.tags) r.tags = tags.slice(0, 8);
    const c = fm.coverage ?? {};
    r.members = n(c.learn) + n(c.code) + n(c.video) + n(c.blog);
    // D77: a derived hub has no narrative, so it ranks as "none"; a flagged one has its narrative withheld, also "none"
    r.narrative = fm.narrative && fm.narrative !== "none" && fm.review?.state !== "derived" ? (fm.review?.state === "reviewed" ? "reviewed" : "unreviewed") : "none";
    r.stats = [plural(n(c.learn), "Learn page"), n(c.code) ? plural(n(c.code), "object") : "", n(c.video) ? plural(n(c.video), "video") : "",
      n(c.blog) ? plural(n(c.blog), "post") : "", r.narrative === "none" ? "no narrative" : r.narrative].filter(Boolean).join(" · ");
  }
  if (fm.type === "app") {
    // first-party app pages (D65 tranche 3b): Start here next to the hubs, labelled with their system
    if (fm.system) r.path_label = systemLabel(String(fm.system));
    const objects = n(fm.counts?.objects), hubs = len(fm.links?.topics), videos = len(fm.links?.videos), posts = len(fm.links?.posts);
    r.members = objects + hubs + videos + posts;
    r.stats = [plural(objects, "object"), hubs ? plural(hubs, "Learn hub") : "", videos ? plural(videos, "video") : "", posts ? plural(posts, "post") : ""].filter(Boolean).join(" · ");
  }
  if (fm.type === "localization") r.country = fm.country;
  if (fm.type === "post") { r.source = fm.source_id; if (fm.source_name) r.path_label = String(fm.source_name); }
  if (fm.type === "video") {
    r.source = fm.channel; if (fm.source_name) r.path_label = String(fm.source_name);
    // D91: the videos list prints the review badge and drops the poster for an author's opt-out
    if (fm.review?.state) r.review = String(fm.review.state);
    if (fm.embed === false) r.embed = false;
  }
  if (fm.type === "feature") { r.status = fm.status; if (fm.area) r.path_label = String(fm.area); }
  // an AL Language extension version (D85): pre-release until a stable upload exists, labelled with its wave
  if (fm.type === "release") { r.status = fm.prerelease ? "prerelease" : "released"; if (fm.wave) r.path_label = `${fm.wave}${fm.major ? ` (BC${fm.major})` : ""}`; }
  // a change page (D61): its repository source, and its kind as the status (feature, fix, breaking, ...)
  // D91: and what the changes list prints: branch, major, objects touched, the breaking and community flags
  if (fm.type === "change") Object.assign(r, { source: fm.source_id, status: fm.change_kind,
    ...(fm.base_branch ? { branch: String(fm.base_branch) } : {}), ...(fm.major ? { major: String(fm.major) } : {}),
    objects: Array.isArray(fm.objects_touched) ? fm.objects_touched.length : 0,
    ...(fm.breaking ? { breaking: true } : {}), ...(fm.community_contribution ? { community: true } : {}) });
  return r;
}

// ---------------------------------------------------------------------------------------------- Learn (D94)

export const LEARN_BASE = "https://learn.microsoft.com/dynamics365/business-central/";
/**
 * Learn reference sections no hub lists: their folder is the "where" of an article without a hub. On 2026-10-12 they
 * held about 4,190 of the 4,588 articles without one (methods 1,848, diagnostics 922, API v2.0 358, properties 351,
 * analyzers 281, API v1.0 237, triggers 151, attributes 41); the rest have no label.
 */
export const LEARN_SECTIONS: [string, string][] = [
  ["dev-itpro/developer/methods-auto/", "AL reference › Methods"], ["dev-itpro/developer/diagnostics/", "AL reference › Diagnostics"],
  ["dev-itpro/developer/properties/", "AL reference › Properties"], ["dev-itpro/developer/triggers-auto/", "AL reference › Triggers"],
  ["dev-itpro/developer/attributes/", "AL reference › Attributes"], ["dev-itpro/developer/analyzers/", "AL reference › Code analyzers"],
  ["dev-itpro/api-reference/v2.0/", "API reference › v2.0"], ["dev-itpro/api-reference/v1.0/", "API reference › v1.0"],
];
/** A topic hub as the Learn shard needs it: its page path, Learn TOC path, system and own Learn pages (`links.learn`). */
export interface LearnHubPage { path: string; toc: string[]; system: string | null; learn: string[] }
/** A Learn description as plain text: an include token becomes its words, a markdown link its text. */
const INCLUDES: Record<string, string> = { prod_short: "Business Central", prod_long: "Dynamics 365 Business Central" };
export const plainLearn = (s: string) => s.replace(/\[!INCLUDE\[([^\]]*)\]\([^)]*\)\]/gi, (_, l: string) => INCLUDES[l] ?? l)
  .replace(/\[([^\]]*)\]\([^)\s]*\)/g, "$1").replace(/\s+/g, " ").trim();

/**
 * One row per Learn article that is fetched and not skipped (D94), sorted by URL: its title; the extraction's summary
 * where one exists, else Learn's own description; ms.date; the hub that lists it (a page several hubs list goes to a
 * hub of its own docs set, then the deepest, then the first by path) or its reference section; the extraction's first
 * system when it differs from the hub's; the identifiers of the fetched stage. A hub's label is its full TOC path,
 * shortened like a topic's (pathLabel).
 */
export function learnShard(items: ManifestItem[], extracts: Map<string, { summary?: string; systems?: string[] }>, hubPages: LearnHubPage[]): LearnShard {
  const rootOf = (urlPath: string) => (urlPath.startsWith("dev-itpro/") ? "topics/dev-itpro/" : "topics/business-central/");
  const hubOfUrl = new Map<string, LearnHubPage>();
  const better = (a: LearnHubPage, b: LearnHubPage, root: string) =>
    (a.path.startsWith(root) ? 0 : 1) - (b.path.startsWith(root) ? 0 : 1) || b.toc.length - a.toc.length || a.path.localeCompare(b.path);
  for (const h of hubPages) {
    for (const url of h.learn) {
      const cur = hubOfUrl.get(url);
      if (!cur || better(h, cur, rootOf(url.slice(LEARN_BASE.length))) < 0) hubOfUrl.set(url, h);
    }
  }
  // official items only: the leak scan treats this shard as Microsoft text (validate/leak.ts OFFICIAL_ONLY, D94)
  const live = items.filter((i) => i.tier === "official" && i.stages.fetched && i.state !== "skipped").sort((a, b) => a.url.localeCompare(b.url));
  const hubKey = (h: LearnHub) => `${h[0]}\u0000${h[1]}`;
  const hubs = new Map<string, LearnHub>();
  const pending: { row: LearnRow; hub: LearnHub | null }[] = [];
  for (const i of live) {
    const path = i.url.startsWith(LEARN_BASE) ? i.url.slice(LEARN_BASE.length) : i.url;
    const page = hubOfUrl.get(i.url);
    const section = page ? undefined : LEARN_SECTIONS.find(([prefix]) => path.startsWith(prefix));
    const hub: LearnHub | null = page ? [page.path, pathLabel(page.toc), page.system] : section ? ["", section[1], null] : null;
    if (hub && !hubs.has(hubKey(hub))) hubs.set(hubKey(hub), hub);
    const ex = extracts.get(i.id), meta = i.meta ?? {};
    const summary = plainLearn(ex?.summary || String(meta.description ?? ""));
    const system = ex?.systems?.[0] ?? null;
    const ids = Array.isArray(meta.identifiers) ? meta.identifiers.map(String) : [];
    const row: LearnRow = [path, i.title, summary, typeof meta.ms_date === "string" ? meta.ms_date : null, -1, system && system !== hub?.[2] ? system : null, ids];
    pending.push({ row, hub });
  }
  const order = [...hubs.values()].sort((a, b) => a[0].localeCompare(b[0]) || a[1].localeCompare(b[1]));
  const at = new Map(order.map((h, k) => [hubKey(h), k]));
  const rows = pending.map(({ row, hub }) => {
    row[4] = hub ? at.get(hubKey(hub))! : -1;
    // trailing empties go: no identifiers, then no system of its own
    if (!row[6]?.length) row.length = 6;
    if (row.length === 6 && row[5] == null) row.length = 5;
    return row;
  });
  return { schema: "bcobs-learn@1", base: LEARN_BASE, hubs: order, rows };
}

/** The extractions of Learn pages by item id (data/extract/docs/<source>/*.json): summary and systems only. */
export function learnExtracts(dataDir: string): Map<string, { summary?: string; systems?: string[] }> {
  const out = new Map<string, { summary?: string; systems?: string[] }>();
  for (const f of listFiles(resolve(dataDir, "extract", "docs"), ".json")) {
    try { const x = readJson<{ item_id: string; summary?: string; systems?: string[] }>(f); out.set(x.item_id, { summary: x.summary, systems: x.systems }); } catch { /* a broken file is skipped */ }
  }
  return out;
}

export function renderSearchIndex(contentDir: string, dataDir: string): IndexManifest {
  const records: PageRecord[] = [];
  const hubPages: LearnHubPage[] = [];
  for (const f of listFiles(contentDir, ".md")) {
    let fm: Record<string, any>;
    try { fm = matter(readText(f)).data; } catch { continue; }
    if (!fm.type) continue;
    const path = relative(contentDir, f).replace(/\.md$/, "");
    records.push(pageRecord(path, fm));
    if (fm.type === "topic" && Array.isArray(fm.links?.learn) && fm.links.learn.length) {
      hubPages.push({ path, toc: Array.isArray(fm.learn_toc_path) ? fm.learn_toc_path.map(String) : [String(fm.title ?? "")], system: fm.system ? String(fm.system) : null, learn: fm.links.learn.map(String) });
    }
  }
  records.sort((a, b) => a.path.localeCompare(b.path));
  const dir = resolve(dataDir, "index");
  // D86: one set of shards per kind, so the site loads objects only when a query asks for them; content-hashed names,
  // so a browser keeps a shard until it changes
  const shards: IndexManifest["shards"] = [];
  for (const kind of SHARD_KINDS) {
    const mine = records.filter((r) => kindOfType(r.type) === kind);
    const parts: PageRecord[][] = [];
    let buf: PageRecord[] = [], size = 0;
    for (const r of mine) {
      const n = JSON.stringify(r).length + 1;
      if (size + n > SHARD_BYTES && buf.length) { parts.push(buf); buf = []; size = 0; }
      buf.push(r); size += n;
    }
    if (buf.length) parts.push(buf);
    parts.forEach((part, i) => {
      const text = `${JSON.stringify(part)}\n`, sha = sha256(text);
      // objects always carry their number (two files today); hubs and media only when they ever need a second file
      const file = `pages-${kind}${kind === "objects" || parts.length > 1 ? `-${i + 1}` : ""}-${sha.slice(0, 12)}.json`;
      const p = resolve(dir, file);
      if (!exists(p)) writeText(p, text);
      shards.push({ file, count: part.length, sha256: sha, kind });
    });
  }
  // D94: the Learn articles, when the data dir holds the docs manifest
  let learn: IndexManifest["learn"];
  const shard = learnShard(new Manifest(resolve(dataDir, "manifest")).list("docs"), learnExtracts(dataDir), hubPages);
  if (shard.rows.length) {
    const text = `${JSON.stringify(shard)}\n`, sha = sha256(text), file = `learn-${sha.slice(0, 12)}.json`;
    const p = resolve(dir, file);
    if (!exists(p)) writeText(p, text);
    learn = { file, count: shard.rows.length, sha256: sha };
  }
  // sweep: unlisted page shards, the old unhashed pages-<n>.json among them, and an older Learn shard
  for (const f of listFiles(dir, ".json")) {
    const name = f.slice(f.lastIndexOf("/") + 1);
    if (/^pages-.+\.json$/.test(name) && !shards.some((s) => s.file === name)) removeIfExists(f);
    if (/^learn-.+\.json$/.test(name) && name !== learn?.file) removeIfExists(f);
  }
  const by_type: Record<string, number> = {};
  for (const r of records) by_type[r.type] = (by_type[r.type] ?? 0) + 1;
  const manifest: IndexManifest = { schema: "bcobs-index@1", pages: records.length, shards, ...(learn ? { learn } : {}), by_type };
  const mp = resolve(dir, "index-manifest.json");
  const text = `${JSON.stringify(manifest, null, 2)}\n`;
  if (!exists(mp) || readText(mp) !== text) writeText(mp, text);
  return manifest;
}
export const loadIndexManifest = (dataDir: string) => readJson<IndexManifest>(resolve(dataDir, "index", "index-manifest.json"));
