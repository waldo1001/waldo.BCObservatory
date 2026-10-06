/**
 * Compact object indexes for the site's Cmd+K finder and for agents (D46): data/index/objects.json, one short row per
 * object page, and data/index/fields.json, field name -> the object pages that have a field of that name (from the
 * preferred major's snapshots). Both are plain arrays to keep them small: 16k objects fit in ~1.5 MB, 15k distinct
 * field names in ~1.1 MB. Rewritten only when their content changes.
 */
import { relative, resolve } from "node:path";
import matter from "gray-matter";
import { loadConfig } from "../lib/config.js";
import { exists, listFiles, readText, writeText } from "../lib/fsx.js";
import { objectKey } from "../code/extract.js";
import { iterSnapshot, snapshotDir } from "../code/job.js";
import { APPS } from "../code/diff.js";
import type { Relations } from "../code/relations.js";

/**
 * [page key, type, id, name, app, namespace, obsolete state, introduced major | null, changed-in majors ("29 30"),
 *  Learn pages naming it, countries replacing it]. The palette reads the first seven, the atlas all of them.
 */
export type ObjectRow = [string, string, number | null, string, string | null, string | null, string | null, string | null, string, number, number];
export interface ObjectsIndex { schema: "bcobs-objects@1"; count: number; rows: ObjectRow[] }
export interface FieldsIndex { schema: "bcobs-fields@1"; major: string | null; count: number; fields: Record<string, string[]> }
/** [publisher page key, event name, kind, obsolete | null, subscribers as [page key, procedure][]] */
export type EventRow = [string, string, string, string | null, [string, string][]];
export interface EventsIndex { schema: "bcobs-events@1"; major: string | null; count: number; subscriptions: number; rows: EventRow[] }

export function renderObjectsIndex(contentDir: string, dataDir: string): { objects: number; fields: number; events: number } {
  const rows: ObjectRow[] = [];
  const pageOfKey = new Map<string, string>();
  const root = resolve(contentDir, "objects");
  for (const f of listFiles(root, ".md")) {
    let fm: Record<string, any>;
    try { fm = matter(readText(f)).data; } catch { continue; }
    if (fm.type !== "object") continue;
    const pk = relative(root, f).replace(/\.md$/, "");
    rows.push([pk, String(fm.object_type), fm.object_id ?? null, fm.country ? `${fm.name} (${fm.country})` : String(fm.name), fm.country ? `${fm.country} layer` : fm.app ?? null, fm.namespace ?? null, fm.obsolete?.state ?? null,
      fm.versions?.introduced ?? null, (fm.changed_in ?? []).join(" "), (fm.links?.learn ?? []).length, (fm.countries ?? []).length]);
    // the fields index maps W1 and app objects to their page; country ids repeat, so they stay out of it (D52)
    if (!fm.country) pageOfKey.set(objectKey({ type: fm.object_type, id: fm.object_id ?? null, name: String(fm.name) }), pk);
  }
  rows.sort((a, b) => a[0].localeCompare(b[0]));
  const dir = resolve(dataDir, "index");
  const write = (name: string, obj: unknown) => { const p = resolve(dir, name), text = `${JSON.stringify(obj)}\n`; if (!exists(p) || readText(p) !== text) writeText(p, text); };
  write("objects.json", { schema: "bcobs-objects@1", count: rows.length, rows } satisfies ObjectsIndex);

  // fields from the preferred major (the one the pages are rendered from), W1 + first-party apps
  const v = loadConfig<{ narrative_order: string[] }>("versions");
  const major = v.narrative_order.find((m) => exists(resolve(snapshotDir(dataDir, m, "w1"), "manifest.json"))) ?? null;
  const fields = new Map<string, Set<string>>();
  if (major) {
    for (const part of ["w1", APPS]) {
      if (!exists(resolve(snapshotDir(dataDir, major, part), "manifest.json"))) continue;
      for (const o of iterSnapshot(dataDir, major, part)) {
        const pk = pageOfKey.get(objectKey(o));
        if (!pk) continue;
        for (const f of o.fields) { const k = f.name.toLowerCase(); (fields.get(k) ?? fields.set(k, new Set()).get(k)!).add(pk); }
      }
    }
  }
  const sorted = Object.fromEntries([...fields].sort(([a], [b]) => a.localeCompare(b)).map(([k, s]) => [k, [...s].sort()]));
  write("fields.json", { schema: "bcobs-fields@1", major, count: fields.size, fields: sorted } satisfies FieldsIndex);

  // published events with their subscribers (data/code/relations/<major>.json, D45) for the event explorer (D49)
  const events: EventRow[] = [];
  let subscriptions = 0;
  const relPath = major ? resolve(dataDir, "code", "relations", `${major}.json`) : null;
  if (relPath && exists(relPath)) {
    const rel = JSON.parse(readText(relPath)) as Relations;
    for (const [key, ev] of Object.entries(rel.events)) {
      const pk = pageOfKey.get(key);
      if (!pk) continue;
      for (const [name, e] of Object.entries(ev)) {
        const subs = e.subs.map((x) => [pageOfKey.get(x.s) ?? x.s, x.proc] as [string, string]);
        subscriptions += subs.length;
        events.push([pk, name, e.kind, e.obsolete, subs]);
      }
    }
    events.sort((a, b) => a[0].localeCompare(b[0]) || a[1].localeCompare(b[1]));
  }
  write("events.json", { schema: "bcobs-events@1", major, count: events.length, subscriptions, rows: events } satisfies EventsIndex);
  return { objects: rows.length, fields: fields.size, events: events.length };
}
