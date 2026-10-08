/**
 * The symbols index (D86 4.4): the fields, published events, global procedures and enum values of the pages' major
 * (narrative_order[0] with a snapshot, as objects.json), W1 and Microsoft's first-party apps, country layers left out
 * (their ids repeat per country, D52). One file per kind of tuple rows under a content-hashed name, plus a manifest:
 *
 *   data/index/symbols-manifest.json          { schema: "bcobs-symbols@1", major, commit, built_at, objects, kinds }
 *   data/index/symbols-<kind>-<sha12>.json     { schema, kind, major, count, rows }
 *
 *   fields  [pk, name, id, type, tooltip <= 160 or null]
 *   events  [pk, name, "integration" | "business", subscribers, doc or null, obsoleteState or null]
 *   procs   [pk, name, paramCount, returnType or null, doc or null, obsoleteState or null]
 *   values  [pk, name, ordinal, caption or null]
 *
 * `pk` is the object's page key (table/36). Rows sort by pk, then id or name, so a quiet night rewrites nothing. A kind
 * past the 8 MiB shard cap is written as several files (`files` in the manifest instead of `file`). The site's search
 * and the MCP read it to answer "OnAfterPostSalesDoc" and "Posting Date"; object pages carry the matching anchors.
 */
import { resolve } from "node:path";
import { exists, listFiles, readJson, readText, removeIfExists, writeText } from "../lib/fsx.js";
import { sha256 } from "../lib/text.js";
import { objectKey } from "../code/extract.js";
import { iterSnapshot, snapshotDir, type SnapshotManifest } from "../code/job.js";
import { APPS } from "../code/diff.js";
import { captionText } from "./object.js";
import { objectPagesByKey, pagesMajor, type EventsIndex, type ObjectPages } from "./objects-index.js";
import { SHARD_BYTES } from "./search.js";

export type SymbolKind = "fields" | "events" | "procs" | "values";
export const SYMBOL_KINDS: SymbolKind[] = ["fields", "events", "procs", "values"];
export const TEXT_MAX = 160;
export interface SymbolsKindEntry { file?: string; files?: string[]; count: number; sha256: string; bytes: number }
export interface SymbolsManifest { schema: "bcobs-symbols@1"; major: string | null; commit: string | null; built_at: string; objects: number; kinds: Record<SymbolKind, SymbolsKindEntry> }

/** A text cut to `TEXT_MAX` characters, an ellipsis marking the cut; empty is null. */
export const cutText = (s: string | null | undefined, max = TEXT_MAX): string | null => {
  const t = s?.replace(/\s+/g, " ").trim();
  if (!t) return null;
  return t.length > max ? `${t.slice(0, max - 1)}…` : t;
};

export function renderSymbolsIndex(contentDir: string, dataDir: string, pages: ObjectPages = objectPagesByKey(contentDir), now = new Date()): SymbolsManifest {
  const major = pagesMajor(dataDir);
  const rows: Record<SymbolKind, unknown[][]> = { fields: [], events: [], procs: [], values: [] };
  let commit: string | null = null, objects = 0;
  if (major) {
    commit = readJson<SnapshotManifest>(resolve(snapshotDir(dataDir, major, "w1"), "manifest.json")).commit ?? null;
    // subscribers per published event, from events.json of the same major (D49), else none
    const subs = new Map<string, number>();
    const ep = resolve(dataDir, "index", "events.json");
    if (exists(ep)) {
      const ev = readJson<EventsIndex>(ep);
      if (ev.major === major) for (const [pk, name, , , s] of ev.rows) subs.set(`${pk} ${name}`, s.length);
    }
    for (const part of ["w1", APPS]) {
      if (!exists(resolve(snapshotDir(dataDir, major, part), "manifest.json"))) continue;
      for (const o of iterSnapshot(dataDir, major, part)) {
        const pk = pages.pageOfKey.get(objectKey(o));
        if (!pk) continue;
        objects++;
        if (o.type === "table" || o.type === "tableextension") for (const f of o.fields) rows.fields.push([pk, f.name, f.id, f.type, cutText(f.tooltip)]);
        if (o.type === "enum" || o.type === "enumextension") for (const v of o.values) rows.values.push([pk, v.name, v.id, captionText(v.properties?.Caption) ?? null]);
        for (const p of o.procedures) {
          if (p.event === "integration" || p.event === "business") rows.events.push([pk, p.name, p.event, subs.get(`${pk} ${p.name}`) ?? 0, cutText(p.doc), p.obsolete?.state ?? null]);
          else if (p.scope === "global" && !p.event) rows.procs.push([pk, p.name, p.params.length, p.returns ?? null, cutText(p.doc), p.obsolete?.state ?? null]);
        }
      }
    }
  }
  const byId = (a: unknown[], b: unknown[]) => String(a[0]).localeCompare(String(b[0])) || Number(a[2]) - Number(b[2]) || String(a[1]).localeCompare(String(b[1]));
  const byName = (a: unknown[], b: unknown[]) => String(a[0]).localeCompare(String(b[0])) || String(a[1]).localeCompare(String(b[1]));
  rows.fields.sort(byId); rows.values.sort(byId); rows.events.sort(byName); rows.procs.sort(byName);

  const dir = resolve(dataDir, "index");
  const written = new Set<string>();
  const kinds = {} as Record<SymbolKind, SymbolsKindEntry>;
  for (const kind of SYMBOL_KINDS) {
    // one file per kind; past the shard cap, several (a kind is then listed with files[])
    const parts: unknown[][][] = [];
    let buf: unknown[][] = [], size = 0;
    for (const r of rows[kind]) {
      const n = JSON.stringify(r).length + 1;
      if (size + n > SHARD_BYTES && buf.length) { parts.push(buf); buf = []; size = 0; }
      buf.push(r); size += n;
    }
    parts.push(buf);
    const files: string[] = [], texts: string[] = [];
    let bytes = 0;
    parts.forEach((part, i) => {
      const text = `${JSON.stringify({ schema: "bcobs-symbols@1", kind, major, count: part.length, rows: part })}\n`;
      const file = `symbols-${kind}${parts.length > 1 ? `-${i + 1}` : ""}-${sha256(text).slice(0, 12)}.json`;
      if (!exists(resolve(dir, file))) writeText(resolve(dir, file), text);
      files.push(file); texts.push(text); written.add(file); bytes += Buffer.byteLength(text);
    });
    // the file's sha256; for a kind in several files, that of the files one after the other
    kinds[kind] = { ...(files.length === 1 ? { file: files[0] } : { files }), count: rows[kind].length, sha256: sha256(texts.join("")), bytes };
  }
  for (const f of listFiles(dir, ".json")) {
    const name = f.slice(f.lastIndexOf("/") + 1);
    if (/^symbols-(fields|events|procs|values)-.+\.json$/.test(name) && !written.has(name)) removeIfExists(f);
  }
  // built_at moves only when the content does: a quiet night rewrites nothing
  const mp = resolve(dir, "symbols-manifest.json");
  const prev = exists(mp) ? readJson<SymbolsManifest>(mp) : null;
  const body = { schema: "bcobs-symbols@1" as const, major, commit, objects, kinds };
  const same = prev && JSON.stringify({ ...prev, built_at: undefined }) === JSON.stringify({ ...body, built_at: undefined });
  const manifest: SymbolsManifest = { schema: body.schema, major, commit, built_at: same ? prev!.built_at : now.toISOString(), objects, kinds };
  const text = `${JSON.stringify(manifest, null, 2)}\n`;
  if (!exists(mp) || readText(mp) !== text) writeText(mp, text);
  return manifest;
}
