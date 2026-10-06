/**
 * Code diffs, timelines and the deprecation radar (PLAN 4.6, D27), deterministic, from data/code/<major>/<cc>/.
 *
 * - version diff: W1 of consecutive snapshot majors (28→29, 29→30) → data/code/diffs/version/<from>__<to>.json
 * - country diff: a country overlay against W1 of the same major → data/code/diffs/country/<major>-<cc>.json
 *   ("added" = country-only objects, "replaced" = W1 objects the country changes, "removed" = W1 objects it drops)
 * - timelines: per object type, every W1 object across the snapshot majors (introduced, changed, obsoleted, removed)
 *   → data/code/timelines/<type>.json (one file per type instead of one per object: ~10k files saved)
 * - deprecations: every Obsolete* and CLEAN guard per major, grouped by tag → data/code/deprecations/<major>.json;
 *   `clean_version` is the version a `#if not CLEAN<n>` guard names: Microsoft removes the code once it defines that
 *   symbol, so a guard naming a version at or below the snapshot's own is cleanup still pending, not a removal date
 * Member detail compares by stable identity: fields and enum values by id, keys by name, procedures by name plus
 * parameter types (overloads). Outputs record the snapshot commits they came from and are rewritten only when
 * those change.
 */
import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { exists, readJson, writeJson } from "../lib/fsx.js";
import { logger } from "../lib/log.js";
import { objectKey, type AlObject, type AlProcedure, type Obsolete } from "./extract.js";
import { iterSnapshot, readSnapshot, snapshotDir, type SnapshotManifest } from "./job.js";

const log = logger("code-diff");

export interface MemberChange { id: string; name: string; change: "added" | "removed" | "changed"; from?: unknown; to?: unknown }
export interface ObjectDiff {
  key: string; name: string; change: "added" | "removed" | "changed" | "replaced";
  properties?: { name: string; from: string | null; to: string | null }[];
  fields?: MemberChange[]; values?: MemberChange[]; procedures?: MemberChange[]; events?: MemberChange[]; keys?: MemberChange[];
  triggers?: { added: string[]; removed: string[] };
  obsolete?: { from: Obsolete | null; to: Obsolete | null };
}
export interface Ref { version: string; country: string; commit: string | null }
export interface AlDiff { schema: "al-diff@1"; kind: "version" | "country"; from: Ref; to: Ref; summary: Record<string, unknown>; objects: ObjectDiff[] }

const procId = (p: AlProcedure) => `${p.name.toLowerCase()}(${p.params.map((x) => x.type.toLowerCase()).join(",")})`;
const same = (a: unknown, b: unknown) => JSON.stringify(a ?? null) === JSON.stringify(b ?? null);

function members<T>(a: T[], b: T[], id: (x: T) => string, name: (x: T) => string, view: (x: T) => unknown): MemberChange[] {
  const A = new Map(a.map((x) => [id(x), x])), B = new Map(b.map((x) => [id(x), x]));
  const out: MemberChange[] = [];
  for (const [k, x] of B) {
    const y = A.get(k);
    if (!y) out.push({ id: k, name: name(x), change: "added", to: view(x) });
    else if (!same(view(y), view(x))) out.push({ id: k, name: name(x), change: "changed", from: view(y), to: view(x) });
  }
  for (const [k, y] of A) if (!B.has(k)) out.push({ id: k, name: name(y), change: "removed", from: view(y) });
  return out;
}
const procView = (p: AlProcedure) => ({ scope: p.scope, params: p.params, returns: p.returns, event: p.event, obsolete: p.obsolete, subscribes_to: p.subscribes_to, attributes: p.attributes });

/** Member-level difference of two versions of one object (same key). */
export function objectDiff(a: AlObject, b: AlObject, change: ObjectDiff["change"]): ObjectDiff {
  const d: ObjectDiff = { key: objectKey(b), name: b.name, change };
  const props = [...new Set([...Object.keys(a.properties), ...Object.keys(b.properties)])].filter((k) => a.properties[k] !== b.properties[k]).sort()
    .map((k) => ({ name: k, from: a.properties[k] ?? null, to: b.properties[k] ?? null }));
  if (props.length) d.properties = props;
  const f = members(a.fields, b.fields, (x) => String(x.id), (x) => x.name, (x) => ({ name: x.name, type: x.type, obsolete: x.obsolete, clean: x.clean ?? null, properties: x.properties }));
  if (f.length) d.fields = f;
  const v = members(a.values, b.values, (x) => String(x.id), (x) => x.name, (x) => ({ name: x.name, obsolete: x.obsolete }));
  if (v.length) d.values = v;
  const all = members(a.procedures, b.procedures, procId, (x) => x.name, procView);
  const ev = all.filter((m) => ((m.to ?? m.from) as { event: string | null }).event && ((m.to ?? m.from) as { event: string | null }).event !== "subscriber");
  const pr = all.filter((m) => !ev.includes(m));
  if (pr.length) d.procedures = pr;
  if (ev.length) d.events = ev;
  const k = members(a.keys, b.keys, (x) => x.name.toLowerCase(), (x) => x.name, (x) => ({ fields: x.fields, clustered: x.clustered }));
  if (k.length) d.keys = k;
  if (!same(a.obsolete, b.obsolete)) d.obsolete = { from: a.obsolete, to: b.obsolete };
  const tAdded = b.triggers.filter((t) => !a.triggers.includes(t)), tRemoved = a.triggers.filter((t) => !b.triggers.includes(t));
  if (tAdded.length || tRemoved.length) d.triggers = { added: tAdded, removed: tRemoved };
  return d;
}

function summarize(objects: ObjectDiff[]): Record<string, unknown> {
  const by: Record<string, Record<string, number>> = {};
  let fields = 0, events = 0, procedures = 0, obsoleted = 0;
  for (const o of objects) {
    const type = o.key.split("/")[0];
    (by[o.change] ??= {})[type] = (by[o.change][type] ?? 0) + 1;
    fields += o.fields?.filter((m) => m.change === "added").length ?? 0;
    events += o.events?.filter((m) => m.change === "added").length ?? 0;
    procedures += o.procedures?.filter((m) => m.change === "added").length ?? 0;
    if (o.obsolete?.to && !o.obsolete.from) obsoleted++;
  }
  return { objects: objects.length, by_change: by, fields_added: fields, events_added: events, procedures_added: procedures, objects_obsoleted: obsoleted };
}

/** W1 of one major against W1 of the next. */
export function versionDiff(a: AlObject[], b: AlObject[], from: Ref, to: Ref): AlDiff {
  const A = new Map(a.map((o) => [objectKey(o), o])), B = new Map(b.map((o) => [objectKey(o), o]));
  const objects: ObjectDiff[] = [];
  for (const [k, o] of B) {
    const prev = A.get(k);
    if (!prev) objects.push({ key: k, name: o.name, change: "added" });
    else if (prev.hash !== o.hash) objects.push(objectDiff(prev, o, "changed"));
  }
  for (const [k, o] of A) if (!B.has(k)) objects.push({ key: k, name: o.name, change: "removed" });
  objects.sort((x, y) => x.key.localeCompare(y.key, "en", { numeric: true }));
  return { schema: "al-diff@1", kind: "version", from, to, summary: summarize(objects), objects };
}

/** A country overlay against W1 of the same major: what the country brings. */
export function countryDiff(w1: AlObject[], overlay: AlObject[], absent: string[], from: Ref, to: Ref): AlDiff {
  const W = new Map(w1.map((o) => [objectKey(o), o]));
  const objects: ObjectDiff[] = overlay.map((o) => {
    const base = W.get(objectKey(o));
    return base ? objectDiff(base, o, "replaced") : { key: objectKey(o), name: o.name, change: "added" as const };
  });
  for (const k of absent) objects.push({ key: k, name: W.get(k)?.name ?? k, change: "removed" });
  objects.sort((x, y) => x.key.localeCompare(y.key, "en", { numeric: true }));
  return { schema: "al-diff@1", kind: "country", from, to, summary: summarize(objects), objects };
}

// ---------------------------------------------------------------------------------------------- timelines, radar

export interface TimelineEntry { name: string; versions: string[]; introduced: string; changed: string[]; obsoleted: { version: string; state: string; tag: string | null }[]; removed: string | null }
/** Per object type: key → its life across the snapshot majors (W1). */
export function timelines(snapshots: { version: string; objects: AlObject[] }[]): Map<string, Record<string, TimelineEntry>> {
  const life = new Map<string, TimelineEntry & { hash: string; obs: string | null }>();
  for (const { version, objects } of snapshots) {
    const seen = new Set<string>();
    for (const o of objects) {
      const k = objectKey(o);
      seen.add(k);
      const t = life.get(k);
      const obs = o.obsolete ? `${o.obsolete.state}|${o.obsolete.tag ?? ""}` : null;
      if (!t) { life.set(k, { name: o.name, versions: [version], introduced: version, changed: [], obsoleted: o.obsolete ? [{ version, state: o.obsolete.state, tag: o.obsolete.tag }] : [], removed: null, hash: o.hash, obs }); continue; }
      if (t.removed) t.removed = null; // came back
      t.versions.push(version);
      if (t.hash !== o.hash) t.changed.push(version);
      if (obs && obs !== t.obs) t.obsoleted.push({ version, state: o.obsolete!.state, tag: o.obsolete!.tag });
      Object.assign(t, { name: o.name, hash: o.hash, obs });
    }
    for (const [k, t] of life) if (!seen.has(k) && !t.removed && t.versions.length) t.removed = version;
  }
  const byType = new Map<string, Record<string, TimelineEntry>>();
  for (const [k, { hash: _h, obs: _o, ...t }] of [...life].sort(([a], [b]) => a.localeCompare(b, "en", { numeric: true }))) {
    const [type, id] = k.split("/");
    (byType.get(type) ?? byType.set(type, {}).get(type)!)[id] = t;
  }
  return byType;
}

export interface Deprecation { key: string; object: string; member: string | null; kind: "object" | "field" | "value" | "procedure"; state: string | null; tag: string | null; reason: string | null; clean: string[]; clean_version: string | null }
/** Every obsolete or CLEAN-guarded element of one snapshot; `clean_version` from the CLEAN guard (CLEAN28 → 28). */
export function deprecations(objects: AlObject[]): Deprecation[] {
  const out: Deprecation[] = [];
  const cleanVersion = (clean: string[]) => { const n = clean.map((c) => Number(c.match(/(\d+)$/)?.[1])).filter(Number.isFinite); return n.length ? String(Math.min(...n)) : null; };
  const add = (o: AlObject, kind: Deprecation["kind"], member: string | null, obs: Obsolete | null, clean: string[] = []) => {
    if (!obs && !clean.length) return;
    if (obs?.state === "No") return;
    out.push({ key: objectKey(o), object: o.name, member, kind, state: obs?.state ?? null, tag: obs?.tag ?? null, reason: obs?.reason ?? null, clean, clean_version: cleanVersion(clean) });
  };
  for (const o of objects) {
    add(o, "object", null, o.obsolete, o.clean);
    for (const f of o.fields) add(o, "field", f.name, f.obsolete, f.clean);
    for (const v of o.values) add(o, "value", v.name, v.obsolete, v.clean);
    for (const p of o.procedures) add(o, "procedure", p.name, p.obsolete, p.clean);
  }
  return out.sort((a, b) => (a.tag ?? "~").localeCompare(b.tag ?? "~", "en", { numeric: true }) || a.key.localeCompare(b.key, "en", { numeric: true }) || (a.member ?? "").localeCompare(b.member ?? ""));
}

// ---------------------------------------------------------------------------------------------- refresh

const manifestOf = (dataDir: string, major: string, cc: string): SnapshotManifest | null => {
  const p = resolve(snapshotDir(dataDir, major, cc), "manifest.json");
  return exists(p) ? readJson<SnapshotManifest>(p) : null;
};
const ref = (major: string, cc: string, m: SnapshotManifest): Ref => ({ version: major, country: cc, commit: m.commit });
/** Write `doc` unless the file already records the same inputs. */
function writeIfInputsChanged(path: string, inputs: unknown, build: () => unknown): boolean {
  if (exists(path) && same(readJson<{ inputs?: unknown }>(path).inputs, inputs)) return false;
  writeJson(path, { inputs, ...(build() as object) });
  return true;
}

export interface CodeDerivedRun { version_diffs: number; country_diffs: number; timelines: number; deprecations: number; written: number }

/** Recompute everything derived from the snapshots whose inputs changed. Majors in numeric order. */
export function refreshCodeDerived(dataDir: string, majors: string[]): CodeDerivedRun {
  const run: CodeDerivedRun = { version_diffs: 0, country_diffs: 0, timelines: 0, deprecations: 0, written: 0 };
  const present = majors.filter((m) => manifestOf(dataDir, m, "w1")).sort((a, b) => Number(a) - Number(b));
  if (!present.length) return run;
  // memory: at most two W1 snapshots at a time (a version diff); everything else streams
  const cache = new Map<string, AlObject[]>();
  const w1 = (m: string) => {
    if (!cache.has(m)) { if (cache.size >= 2) cache.delete(cache.keys().next().value!); cache.set(m, readSnapshot(dataDir, m, "w1")); }
    return cache.get(m)!;
  };
  const root = resolve(dataDir, "code");

  for (let i = 1; i < present.length; i++) {
    const [a, b] = [present[i - 1], present[i]];
    const ma = manifestOf(dataDir, a, "w1")!, mb = manifestOf(dataDir, b, "w1")!;
    run.version_diffs++;
    if (writeIfInputsChanged(resolve(root, "diffs", "version", `${a}__${b}.json`), [ma.commit, mb.commit, ma.extractor, mb.extractor], () => versionDiff(w1(a), w1(b), ref(a, "w1", ma), ref(b, "w1", mb)))) run.written++;
  }
  for (const m of present) {
    const mw = manifestOf(dataDir, m, "w1")!;
    for (const cc of countriesOf(dataDir, m)) {
      const mc = manifestOf(dataDir, m, cc)!;
      run.country_diffs++;
      if (writeIfInputsChanged(resolve(root, "diffs", "country", `${m}-${cc}.json`), [mw.commit, mc.commit, mc.extractor, mc.absent ?? []], () => countryDiff(w1(m), readSnapshot(dataDir, m, cc), mc.absent ?? [], ref(m, "w1", mw), ref(m, cc, mc)))) run.written++;
    }
    run.deprecations++;
    if (writeIfInputsChanged(resolve(root, "deprecations", `${m}.json`), [mw.commit, mw.extractor], () => {
      const list = deprecations(w1(m));
      const byTag: Record<string, number> = {};
      for (const d of list) byTag[d.tag ?? "untagged"] = (byTag[d.tag ?? "untagged"] ?? 0) + 1;
      return { major: m, count: list.length, by_tag: byTag, items: list };
    })) run.written++;
  }
  const inputs = present.map((m) => [m, manifestOf(dataDir, m, "w1")!.commit]);
  const tlDir = resolve(root, "timelines");
  const stamp = resolve(tlDir, "_inputs.json");
  if (!exists(stamp) || !same(readJson(stamp), inputs)) {
    cache.clear();
    // timelines need only key, name, hash and obsolete state per object
    const slim = (m: string) => [...iterSnapshot(dataDir, m, "w1")].map((o) => ({ type: o.type, id: o.id, name: o.name, hash: o.hash, obsolete: o.obsolete }) as AlObject);
    const byType = timelines(present.map((m) => ({ version: m, objects: slim(m) })));
    for (const [type, map] of byType) { writeJson(resolve(tlDir, `${type}.json`), { versions: present, objects: map }); run.written++; }
    writeJson(stamp, inputs);
    run.timelines = byType.size;
  }
  log.info(`code derived: ${run.version_diffs} version diffs, ${run.country_diffs} country diffs, ${run.written} files written`);
  return run;
}
function countriesOf(dataDir: string, major: string): string[] {
  const dir = resolve(dataDir, "code", major);
  if (!existsSync(dir)) return [];
  return readdirSyncSafe(dir).filter((cc) => cc !== "w1" && cc !== APPS && manifestOf(dataDir, major, cc)).sort();
}
import { readdirSync } from "node:fs";
/** data/code/<major>/apps holds first-party apps: a snapshot of its own, not a country. */
export const APPS = "apps";
const readdirSyncSafe = (d: string) => { try { return readdirSync(d); } catch { return []; } };
