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
 * those change. Page controls and actions (extractor 4, D65) are not part of any diff: the object hash leaves them
 * out, so a page re-extracted with them pairs with its older record unchanged, and they are dropped on reading.
 */
import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { exists, writeText, readJson, writeJson } from "../lib/fsx.js";
import { logger } from "../lib/log.js";
import { objectKey, type AlObject, type AlProcedure, type Obsolete } from "./extract.js";
import { fullSnapshotRoot, isSkeleton, iterSnapshot, readSnapshot, snapshotDir, type SnapshotManifest } from "./job.js";
import { buildRelations, type Relations } from "./relations.js";
import { buildFieldDocs, fieldDocsPath, FIELD_DOCS_VERSION } from "./field-docs.js";
import { areaOf } from "../lib/systems.js";

const log = logger("code-diff");
/** Bump when a derived file's shape changes: it is part of every file's inputs, so all of them are rewritten. */
export const DERIVED_VERSION = 7; // 7: object counts in every input (a re-extraction at the same commit re-derives); 6: changed members as a delta (D62)

/**
 * A member that differs between two versions. Added: `to`. Removed: `from`. Changed: `to` is its new shape without its
 * properties (the signature readers show) and `delta` holds exactly what differs, each as [from, to], properties one by
 * one (D62): BC28 added AutoFormatType to 12,000 fields, and a full before-and-after per member made 27→28 16 MB.
 */
export interface MemberChange { id: string; name: string; change: "added" | "removed" | "changed"; from?: unknown; to?: unknown; delta?: Record<string, unknown> }
export interface ObjectDiff {
  key: string; name: string; change: "added" | "removed" | "changed" | "replaced";
  /** Namespace of the object (the newer side), for grouping by area (D49). */
  ns?: string | null;
  properties?: { name: string; from: string | null; to: string | null }[];
  fields?: MemberChange[]; values?: MemberChange[]; procedures?: MemberChange[]; events?: MemberChange[]; keys?: MemberChange[];
  triggers?: { added: string[]; removed: string[] };
  obsolete?: { from: Obsolete | null; to: Obsolete | null };
}
export interface Ref { version: string; country: string; commit: string | null }
export interface AlDiff { schema: "al-diff@1"; kind: "version" | "country"; from: Ref; to: Ref; summary: Record<string, unknown>; objects: ObjectDiff[] }

/** An object without its page controls and actions: what the diffs and the radar read (a quarter of a W1 snapshot's bytes from extractor 4 on). */
export const withoutLayout = (o: AlObject): AlObject => {
  if (!o.controls && !o.actions) return o;
  const { controls: _c, actions: _a, ...rest } = o;
  return rest;
};
const lean = (objs: AlObject[]) => objs.map(withoutLayout);
const procId = (p: AlProcedure) => `${p.name.toLowerCase()}(${p.params.map((x) => x.type.toLowerCase()).join(",")})`;
const same = (a: unknown, b: unknown) => JSON.stringify(a ?? null) === JSON.stringify(b ?? null);

function members<T>(a: T[], b: T[], id: (x: T) => string, name: (x: T) => string, view: (x: T) => unknown): MemberChange[] {
  const A = new Map(a.map((x) => [id(x), x])), B = new Map(b.map((x) => [id(x), x]));
  const out: MemberChange[] = [];
  for (const [k, x] of B) {
    const y = A.get(k);
    if (!y) out.push({ id: k, name: name(x), change: "added", to: view(x) });
    else if (!same(view(y), view(x))) out.push({ id: k, name: name(x), change: "changed", ...changedMember(view(y), view(x)) });
  }
  for (const [k, y] of A) if (!B.has(k)) out.push({ id: k, name: name(y), change: "removed", from: view(y) });
  return out;
}
/** The compact form of a changed member: its new shape minus properties, and a [from, to] per differing part (D62). */
export function changedMember(fromView: unknown, toView: unknown): { to: Record<string, unknown>; delta: Record<string, unknown> } {
  const f = (fromView ?? {}) as Record<string, unknown>, t = (toView ?? {}) as Record<string, unknown>;
  const { properties: _p, ...to } = t;
  const delta: Record<string, unknown> = {};
  for (const k of new Set([...Object.keys(f), ...Object.keys(t)])) if (k !== "properties" && !same(f[k], t[k])) delta[k] = [f[k] ?? null, t[k] ?? null];
  if (f.properties || t.properties) {
    const fp = (f.properties ?? {}) as Record<string, string>, tp = (t.properties ?? {}) as Record<string, string>;
    const pd: Record<string, [string | null, string | null]> = {};
    for (const k of [...new Set([...Object.keys(fp), ...Object.keys(tp)])].sort()) if (fp[k] !== tp[k]) pd[k] = [fp[k] ?? null, tp[k] ?? null];
    if (Object.keys(pd).length) delta.properties = pd;
  }
  return { to, delta };
}
const procView = (p: AlProcedure) => ({ scope: p.scope, params: p.params, returns: p.returns, event: p.event, obsolete: p.obsolete, subscribes_to: p.subscribes_to, attributes: p.attributes });

/** Member-level difference of two versions of one object (same key). */
export function objectDiff(a: AlObject, b: AlObject, change: ObjectDiff["change"]): ObjectDiff {
  const d: ObjectDiff = { key: objectKey(b), name: b.name, change, ns: b.namespace ?? null };
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

/**
 * Objects by key. A key can occur twice in W1: an object moved between apps ships in both while the old copy is
 * obsolete (table 242 "Source Code Setup": Business Foundation, plus the Moved copy in the Base Application).
 */
function byKey(objs: AlObject[]): Map<string, AlObject[]> {
  const m = new Map<string, AlObject[]>();
  for (const o of objs) {
    const k = objectKey(o);
    m.set(k, [...(m.get(k) ?? []), o]);
  }
  return m;
}

/** The counterpart of `o` among same-key candidates: the same app, else the only candidate. */
const counterpart = (cands: AlObject[] | undefined, o: AlObject) => cands?.find((c) => c.app === o.app) ?? (cands?.length === 1 ? cands[0] : undefined);

/** W1 of one major against W1 of the next. */
export function versionDiff(a: AlObject[], b: AlObject[], from: Ref, to: Ref): AlDiff {
  const A = byKey(a), B = byKey(b);
  const objects: ObjectDiff[] = [];
  for (const [k, bs] of B) {
    if (!A.has(k)) { objects.push({ key: k, name: bs[0].name, change: "added", ns: bs[0].namespace ?? null }); continue; }
    for (const o of bs) {
      const prev = counterpart(A.get(k), o);
      if (prev && prev.hash !== o.hash) objects.push(objectDiff(prev, o, "changed"));
    }
  }
  for (const [k, as] of A) if (!B.has(k)) objects.push({ key: k, name: as[0].name, change: "removed", ns: as[0].namespace ?? null });
  objects.sort((x, y) => x.key.localeCompare(y.key, "en", { numeric: true }));
  return { schema: "al-diff@1", kind: "version", from, to, summary: summarize(objects), objects };
}

/** A country overlay against W1 of the same major: what the country brings. */
export function countryDiff(w1: AlObject[], overlay: AlObject[], absent: string[], from: Ref, to: Ref): AlDiff {
  const W = byKey(w1);
  const objects: ObjectDiff[] = overlay.map((o) => {
    const base = counterpart(W.get(objectKey(o)), o);
    return base ? objectDiff(base, o, "replaced") : { key: objectKey(o), name: o.name, change: "added" as const, ns: o.namespace ?? null };
  });
  for (const k of absent) objects.push({ key: k, name: W.get(k)?.[0].name ?? k, change: "removed", ns: W.get(k)?.[0].namespace ?? null });
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
      if (seen.has(k)) continue; // a Moved copy of the same key (it sorts after the live object)
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
function writeIfInputsChanged(path: string, inputs0: unknown, build: () => unknown, layout: "pretty" | "by-object" = "pretty"): boolean {
  const inputs = [DERIVED_VERSION, inputs0];
  if (exists(path) && same(readJson<{ inputs?: unknown }>(path).inputs, inputs)) return false;
  const value = { inputs, ...(build() as object) };
  if (layout === "by-object") writeText(path, byObject(value)); else writeJson(path, value);
  return true;
}
/**
 * A diff as compact JSON with one object per line (D62): still one valid JSON document, half the size of indented
 * JSON (27→28 is 11 MB indented, 6 MB this way), and a git diff of it still reads object by object.
 */
export function byObject(value: Record<string, unknown>): string {
  const { objects, ...head } = value;
  if (!Array.isArray(objects)) return `${JSON.stringify(value)}\n`;
  const h = JSON.stringify(head);
  return `${h.slice(0, -1)}${h.length > 2 ? "," : ""}"objects":[\n${objects.map((o) => JSON.stringify(o)).join(",\n")}\n]}\n`;
}

export interface CodeDerivedRun { version_diffs: number; country_diffs: number; timelines: number; deprecations: number; relations?: number; field_docs?: number; matrix?: boolean; written: number }

/** Country x area matrix (D49): per country (its newest major), per area, how many W1 objects it replaces and adds. */
export interface CountryMatrix {
  schema: "country-matrix@1"; areas: string[];
  countries: Record<string, { major: string; cells: Record<string, { replaced: number; added: number; removed: number; fields_added: number }> }>;
}
export function countryMatrix(diffs: { cc: string; diff: AlDiff }[]): CountryMatrix {
  const areas = new Set<string>();
  const countries: CountryMatrix["countries"] = {};
  for (const { cc, diff } of diffs) {
    const cells: Record<string, { replaced: number; added: number; removed: number; fields_added: number }> = {};
    for (const o of diff.objects) {
      const a = areaOf(o.ns, null);
      areas.add(a);
      const c = (cells[a] ??= { replaced: 0, added: 0, removed: 0, fields_added: 0 });
      if (o.change === "replaced") c.replaced++; else if (o.change === "added") c.added++; else if (o.change === "removed") c.removed++;
      c.fields_added += o.fields?.filter((f) => f.change === "added").length ?? 0;
    }
    countries[cc] = { major: diff.to.version, cells: Object.fromEntries(Object.entries(cells).sort(([a], [b]) => a.localeCompare(b))) };
  }
  return { schema: "country-matrix@1", areas: [...areas].sort(), countries: Object.fromEntries(Object.entries(countries).sort(([a], [b]) => a.localeCompare(b))) };
}

/** Recompute everything derived from the snapshots whose inputs changed. Majors in numeric order. */
export function refreshCodeDerived(dataDir: string, majors: string[], o: { cacheDir?: string } = {}): CodeDerivedRun {
  const run: CodeDerivedRun = { version_diffs: 0, country_diffs: 0, timelines: 0, deprecations: 0, written: 0 };
  // every major with a W1 snapshot, older ones as skeletons (D62); `present` = the full ones, which everything but the
  // version diffs and the timelines reads
  const all = majors.filter((m) => manifestOf(dataDir, m, "w1")).sort((a, b) => Number(a) - Number(b));
  const present = all.filter((m) => !isSkeleton(dataDir, m));
  if (!all.length) return run;
  // memory: at most two W1 snapshots at a time (a version diff); everything else streams
  const cache = new Map<string, AlObject[]>();
  const w1 = (m: string) => {
    if (!cache.has(m)) { if (cache.size >= 2) cache.delete(cache.keys().next().value!); cache.set(m, lean(readSnapshot(dataDir, m, "w1"))); }
    return cache.get(m)!;
  };
  /** The full W1 objects of a major: from data/ for a full one, from the runner's cache for a skeleton, else null. */
  const fullW1 = (m: string): AlObject[] | null => {
    if (!isSkeleton(dataDir, m)) return w1(m);
    if (!o.cacheDir || !manifestOf(fullSnapshotRoot(o.cacheDir), m, "w1")) return null;
    if (!cache.has(m)) { if (cache.size >= 2) cache.delete(cache.keys().next().value!); cache.set(m, lean(readSnapshot(fullSnapshotRoot(o.cacheDir), m, "w1"))); }
    return cache.get(m)!;
  };
  const root = resolve(dataDir, "code");

  for (let i = 1; i < all.length; i++) {
    const [a, b] = [all[i - 1], all[i]];
    const ma = manifestOf(dataDir, a, "w1")!, mb = manifestOf(dataDir, b, "w1")!;
    run.version_diffs++;
    const out = resolve(root, "diffs", "version", `${a}__${b}.json`);
    // an older major's full copy is only in the runner's cache: without it the committed diff stays as it is
    // commit and extractor alone missed a re-extraction that found more files at the same commit (BC23/24, 2026-10-07)
    const inputs = [ma.commit, mb.commit, ma.extractor, mb.extractor, ma.objects, mb.objects];
    if (!exists(out) || !same(readJson<{ inputs?: unknown }>(out).inputs, [DERIVED_VERSION, inputs])) {
      const [fa, fb] = [fullW1(a), fullW1(b)];
      if (!fa || !fb) { log.warn(`version diff ${a}__${b}: the full snapshot of ${fa ? b : a} is not in the cache; kept as committed`); continue; }
    }
    if (writeIfInputsChanged(out, inputs, () => versionDiff(fullW1(a)!, fullW1(b)!, ref(a, "w1", ma), ref(b, "w1", mb)), "by-object")) run.written++;
  }
  for (const m of present) {
    const mw = manifestOf(dataDir, m, "w1")!;
    for (const cc of countriesOf(dataDir, m)) {
      const mc = manifestOf(dataDir, m, cc)!;
      run.country_diffs++;
      if (writeIfInputsChanged(resolve(root, "diffs", "country", `${m}-${cc}.json`), [mw.commit, mc.commit, mc.extractor, mc.absent ?? [], mw.objects, mc.objects], () => countryDiff(w1(m), lean(readSnapshot(dataDir, m, cc)), mc.absent ?? [], ref(m, "w1", mw), ref(m, cc, mc)), "by-object")) run.written++;
    }
    run.deprecations++;
    if (writeIfInputsChanged(resolve(root, "deprecations", `${m}.json`), [mw.commit, mw.extractor, mw.objects], () => {
      const list = deprecations(w1(m));
      const byTag: Record<string, number> = {};
      for (const d of list) byTag[d.tag ?? "untagged"] = (byTag[d.tag ?? "untagged"] ?? 0) + 1;
      return { major: m, count: list.length, by_tag: byTag, items: list };
    })) run.written++;
    // relations between the objects of W1 + first-party apps (D45)
    const ma = manifestOf(dataDir, m, APPS);
    run.relations = (run.relations ?? 0) + 1;
    if (writeIfInputsChanged(resolve(root, "relations", `${m}.json`), [mw.commit, mw.extractor, mw.objects, ma?.commit ?? null, ma?.extractor ?? null, ma?.objects ?? null], () => {
      // streamed, never held: the two snapshots of a major are a gigabyte of objects in memory (D51)
      cache.clear();
      const parts = [{ w1: true, objects: () => iterSnapshot(dataDir, m, "w1") }];
      if (ma) parts.push({ w1: false, objects: () => iterSnapshot(dataDir, m, APPS) });
      return buildRelations(m, parts);
    })) run.written++;
    // field docs (D65): the ToolTip of the page control bound to each table field, joined through the relations
    run.field_docs = (run.field_docs ?? 0) + 1;
    if (writeIfInputsChanged(fieldDocsPath(dataDir, m), [FIELD_DOCS_VERSION, mw.commit, mw.extractor, ma?.commit ?? null, ma?.extractor ?? null], () => {
      cache.clear();
      const parts = [{ objects: () => iterSnapshot(dataDir, m, "w1") }];
      if (ma) parts.push({ objects: () => iterSnapshot(dataDir, m, APPS) });
      return buildFieldDocs(m, parts, readJson<Relations>(resolve(root, "relations", `${m}.json`)));
    })) run.written++;
  }
  // the matrix: every country at its newest major
  const newest = new Map<string, { m: string; mc: SnapshotManifest }>();
  for (const m of present) for (const cc of countriesOf(dataDir, m)) newest.set(cc, { m, mc: manifestOf(dataDir, m, cc)! });
  if (newest.size) {
    const mInputs = [...newest].sort(([a], [b]) => a.localeCompare(b)).map(([cc, { m, mc }]) => [cc, m, mc.commit, manifestOf(dataDir, m, "w1")!.commit]);
    run.matrix = writeIfInputsChanged(resolve(root, "diffs", "country", "matrix.json"), mInputs, () =>
      countryMatrix([...newest].sort(([a], [b]) => a.localeCompare(b)).map(([cc, { m }]) => ({ cc, diff: readJson<AlDiff>(resolve(root, "diffs", "country", `${m}-${cc}.json`)) }))));
    if (run.matrix) run.written++;
  }
  const inputs = [DERIVED_VERSION, ...all.map((m) => { const mw = manifestOf(dataDir, m, "w1")!; return [m, mw.commit, mw.objects]; })];
  const tlDir = resolve(root, "timelines");
  const stamp = resolve(tlDir, "_inputs.json");
  if (!exists(stamp) || !same(readJson(stamp), inputs)) {
    cache.clear();
    // timelines need only key, name, hash and obsolete state per object
    const slim = (m: string) => [...iterSnapshot(dataDir, m, "w1")].map((o) => ({ type: o.type, id: o.id, name: o.name, hash: o.hash, obsolete: o.obsolete }) as AlObject);
    // the skeletons carry exactly these fields, so the timelines reach back to the oldest major
    const byType = timelines(all.map((m) => ({ version: m, objects: slim(m) })));
    for (const [type, map] of byType) { writeJson(resolve(tlDir, `${type}.json`), { versions: all, objects: map }); run.written++; }
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
