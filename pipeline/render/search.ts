/**
 * Search index for the MCP server and other agents (PLAN 4.7, D35): data/index/pages-<n>.json + index-manifest.json.
 *
 * One record per content page (path, type, title, summary, tier, system, date, tags, plus a few type facts such as
 * object type/id, country, source), in shards of at most SHARD_BYTES, sorted by path so a quiet night rewrites
 * nothing. The manifest lists the shards with their sha256; clients fetch a shard only when its hash changed and build
 * their own MiniSearch index from the records (no coupling to MiniSearch's serialisation format). Pagefind serves the
 * site's own search later (M3 UI).
 */
import { relative, resolve } from "node:path";
import matter from "gray-matter";
import { loadConfig } from "../lib/config.js";
import { exists, listFiles, readJson, readText, removeIfExists, writeText } from "../lib/fsx.js";
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
}
export interface IndexManifest { schema: "bcobs-index@1"; pages: number; shards: { file: string; count: number; sha256: string }[]; by_type: Record<string, number> }

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
  if (fm.type === "video") { r.source = fm.channel; if (fm.source_name) r.path_label = String(fm.source_name); }
  if (fm.type === "feature") { r.status = fm.status; if (fm.area) r.path_label = String(fm.area); }
  // an AL Language extension version (D85): pre-release until a stable upload exists, labelled with its wave
  if (fm.type === "release") { r.status = fm.prerelease ? "prerelease" : "released"; if (fm.wave) r.path_label = `${fm.wave}${fm.major ? ` (BC${fm.major})` : ""}`; }
  // a change page (D61): its repository source, and its kind as the status (feature, fix, breaking, ...)
  if (fm.type === "change") Object.assign(r, { source: fm.source_id, status: fm.change_kind });
  return r;
}

export function renderSearchIndex(contentDir: string, dataDir: string): IndexManifest {
  const records: PageRecord[] = [];
  for (const f of listFiles(contentDir, ".md")) {
    let fm: Record<string, any>;
    try { fm = matter(readText(f)).data; } catch { continue; }
    if (!fm.type) continue;
    records.push(pageRecord(relative(contentDir, f).replace(/\.md$/, ""), fm));
  }
  records.sort((a, b) => a.path.localeCompare(b.path));
  const dir = resolve(dataDir, "index");
  const shards: IndexManifest["shards"] = [];
  let buf: PageRecord[] = [], size = 0;
  const flush = () => {
    if (!buf.length) return;
    const file = `pages-${shards.length + 1}.json`;
    const text = `${JSON.stringify(buf)}\n`;
    const p = resolve(dir, file);
    if (!exists(p) || readText(p) !== text) writeText(p, text);
    shards.push({ file, count: buf.length, sha256: sha256(text) });
    buf = []; size = 0;
  };
  for (const r of records) {
    const n = JSON.stringify(r).length + 1;
    if (size + n > SHARD_BYTES) flush();
    buf.push(r); size += n;
  }
  flush();
  for (const f of listFiles(dir, ".json")) {
    const name = f.slice(f.lastIndexOf("/") + 1);
    if (/^pages-\d+\.json$/.test(name) && !shards.some((s) => s.file === name)) removeIfExists(f);
  }
  const by_type: Record<string, number> = {};
  for (const r of records) by_type[r.type] = (by_type[r.type] ?? 0) + 1;
  const manifest: IndexManifest = { schema: "bcobs-index@1", pages: records.length, shards, by_type };
  const mp = resolve(dir, "index-manifest.json");
  const text = `${JSON.stringify(manifest, null, 2)}\n`;
  if (!exists(mp) || readText(mp) !== text) writeText(mp, text);
  return manifest;
}
export const loadIndexManifest = (dataDir: string) => readJson<IndexManifest>(resolve(dataDir, "index", "index-manifest.json"));
