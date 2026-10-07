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
import { exists, listFiles, readJson, readText, removeIfExists, writeText } from "../lib/fsx.js";
import { sha256 } from "../lib/text.js";

export const SHARD_BYTES = 8 * 1024 * 1024;
export interface PageRecord {
  path: string; type: string; title: string; summary: string; tier: string; system?: string; date?: string; tags?: string[];
  object_type?: string; object_id?: number | null; app?: string | null; country?: string; source?: string; status?: string; obsolete?: string | null;
}
export interface IndexManifest { schema: "bcobs-index@1"; pages: number; shards: { file: string; count: number; sha256: string }[]; by_type: Record<string, number> }

/** The record of one page from its frontmatter. */
export function pageRecord(path: string, fm: Record<string, any>): PageRecord {
  // a real date only (published, GA): object and topic pages are regenerated nightly, which is not news
  const date = fm.published_at ?? fm.ga_date ?? fm.merged_at ?? undefined;
  const r: PageRecord = {
    path, type: String(fm.type), title: String(fm.title ?? ""), summary: String(fm.summary ?? ""), tier: String(fm.tier ?? ""),
    ...(fm.system ? { system: fm.system } : {}), ...(date ? { date: String(date).slice(0, 10) } : {}),
    ...(Array.isArray(fm.tags) && fm.tags.length ? { tags: fm.tags.slice(0, 8).map(String) } : {}),
  };
  if (fm.type === "object") Object.assign(r, { object_type: fm.object_type, object_id: fm.object_id ?? null, app: fm.app ?? null, obsolete: fm.obsolete?.state ?? null });
  if (fm.type === "localization") r.country = fm.country;
  if (fm.type === "post") r.source = fm.source_id;
  if (fm.type === "video") r.source = fm.channel;
  if (fm.type === "feature") r.status = fm.status;
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
