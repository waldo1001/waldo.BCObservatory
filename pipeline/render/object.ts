/**
 * Object and localization pages (PLAN M2, D30), deterministic, from data/code/:
 *
 * - content/objects/<type>/<id>.md: every W1 and first-party app object of the snapshot majors, rendered from the
 *   preferred major (versions.json `narrative_order`: 29, then 28, then 30) with its members, its life across the
 *   majors, the countries that replace it, the Learn pages naming it (ms.search.form), the topic hubs of those pages,
 *   its relations (D45: tables it relates to and that reference it, pages on it, extensions, event subscribers) and
 *   its deprecations. Fields carry an Explanation (their ToolTip, else the ToolTip of a page control bound to them with
 *   the page named, else their Caption) and structural Notes; pages list their layout controls and actions; a table
 *   inherits the Learn pages and hubs of the pages on it (D65). Facts from the code pillar; nothing machine-written. Country-only objects get no object
 *   page (their ids collide across countries); they are listed on their localization page.
 * - content/localizations/<cc>.md: what a country layer brings in the newest major it has (added, replaced and
 *   dropped objects with member summaries) plus the Learn LocalFunctionality topic hub.
 * - content/objects/llms.txt, content/objects/<type>/llms.txt, content/localizations/llms.txt.
 * Pages are rewritten only when their content changes (generated.at ignored); pages of objects that left every
 * snapshot are removed.
 */
import { readdirSync } from "node:fs";
import { relative, resolve } from "node:path";
import matter from "gray-matter";
import { stringify as toYaml } from "yaml";
import { loadConfig } from "../lib/config.js";
import { exists, listFiles, readJson, readText, removeIfExists, writeText } from "../lib/fsx.js";
import { validateOrThrow } from "../lib/schema.js";
import { sha256 } from "../lib/text.js";
import { objectKey, toolTipOf, type AlAction, type AlControl, type AlField, type AlObject, type AlProcedure } from "../code/extract.js";
import { boundField, loadFieldDocs, type FieldDoc, type FieldDocs } from "../code/field-docs.js";
import { isSkeleton, iterSnapshot, snapshotDir, type SnapshotManifest } from "../code/job.js";
import { APPS, deprecations, type AlDiff, type ObjectDiff } from "../code/diff.js";
import { incoming, outgoing, type RelEdge, type Relations } from "../code/relations.js";
import { areaOf } from "../lib/systems.js";
import { loadDocsObjects, type DocRef, type DocsObjects } from "../code/docs-objects.js";
import { PIPELINE_VERSION } from "../version.js";
import { changesByObjectPath, type ChangeRef } from "./change.js";
import { loadLocalizationNarrative, PROMPT_VERSION as LOC_V, STAGE as LOC_STAGE, type LocalizationNarrative } from "../summarize/localization.js";

const TYPE_LABEL: Record<string, string> = {
  table: "Table", tableextension: "Table extension", page: "Page", pageextension: "Page extension", codeunit: "Codeunit", report: "Report",
  reportextension: "Report extension", query: "Query", xmlport: "XMLport", enum: "Enum", enumextension: "Enum extension", interface: "Interface",
  permissionset: "Permission set", permissionsetextension: "Permission set extension", entitlement: "Entitlement", profile: "Profile",
  controladdin: "Control add-in", pagecustomization: "Page customization", dotnet: "DotNet",
};
const KEY_PROPS = ["Caption", "Access", "Extensible", "TableType", "DataClassification", "SourceTable", "PageType", "UsageCategory", "ApplicationArea", "LookupPageId", "DrillDownPageId", "DefaultLayout", "Subtype", "SingleInstance", "TableNo", "Permissions", "ObsoleteState", "ObsoleteTag", "ObsoleteReason"];
const cell = (s: string) => s.replace(/\|/g, "\\|").replace(/\s+/g, " ").trim();
const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "unnamed";
/** Page path segment of an object: content/objects/<type>/<id or name slug>. */
export const objectPageKey = (o: Pick<AlObject, "type" | "id" | "name">) => `${o.type}/${o.id ?? slug(o.name)}`;
export const objectPagePath = (contentDir: string, pageKey: string) => resolve(contentDir, "objects", `${pageKey}.md`);
const titleOf = (o: Pick<AlObject, "type" | "id" | "name">) => `${TYPE_LABEL[o.type] ?? o.type}${o.id !== null ? ` ${o.id}` : ""} "${o.name}"`;
const stable = (p: string) => p.replace(/^(generated:\n {2}at: ).*$/m, "$1");
const writeIfChanged = (path: string, page: string) => { if (!exists(path) || stable(readText(path)) !== stable(page)) { writeText(path, page); return true; } return false; };
const githubBlob = (repo: string, commit: string, file: string) => `${repo}/blob/${commit}/${file.split("/").map(encodeURIComponent).join("/")}`;
const sig = (p: AlProcedure) => `${p.name}(${p.params.map((x) => `${x.var ? "var " : ""}${x.name}: ${x.type}`).join("; ")})${p.returns ? `: ${p.returns}` : ""}`;

interface Versions { majors: Record<string, unknown>; narrative_order: string[] }

interface Life { versions: string[]; changed: string[] }
export interface RelationsView { rel: Relations; in: Map<string, RelEdge[]>; out: Map<string, RelEdge[]> }
/** An object only a country layer has: the record of its preferred major, and the majors that country ships it in. */
export interface OwnObject { obj: AlObject; cc: string; major: string; manifest: SnapshotManifest; versions: string[] }
/** Page key of a country's own object: the id alone would collide between countries. */
export const ownPageKey = (o: Pick<AlObject, "type" | "id" | "name">, cc: string) => `${objectPageKey(o)}-${cc}`;
export interface ObjectWorld {
  majors: string[]; preferred: Map<string, { obj: AlObject; major: string; manifest: SnapshotManifest }>; life: Map<string, Life>;
  replacedIn: Map<string, string[]>; docs: DocsObjects | null; topicsByUrl: Map<string, string[]>;
  /** Relations per major (data/code/relations/<major>.json, D45), where the file exists. */
  relations: Map<string, RelationsView>;
  /** A country's own objects (not in W1 or the first-party apps), keyed "<cc>|<object key>" (D52). */
  countryOnly: Map<string, OwnObject>;
  /** Page key of an extension's base object, once page keys are known. */
  basePage?: (o: AlObject) => string | null;
  /** Page key and title of any object key, once page keys are known (relations link through it). */
  pageOf?: (key: string) => { pk: string; title: string } | null;
  /** Object key of a W1 or first-party app object by type and exact name (AL references objects by name), D65. */
  keyByName?: (type: string, name: string) => string | null;
  /** Merged pull requests with a page that touched the object, per page key, newest first (D61). */
  changes?: Map<string, ChangeRef[]>;
  /** Field docs per major (data/code/field-docs/<major>.json, D65): the ToolTip of the page control bound to a field. */
  fieldDocs?: Map<string, FieldDocs>;
}

/** Everything the object pages need, read once. */
export function loadObjectWorld(dataDir: string, contentDir: string): ObjectWorld {
  const v = loadConfig<Versions>("versions");
  const majors = Object.keys(v.majors).filter((m) => exists(resolve(snapshotDir(dataDir, m, "w1"), "manifest.json"))).sort((a, b) => Number(a) - Number(b));
  const order = [...v.narrative_order.filter((m) => majors.includes(m)), ...majors.filter((m) => !v.narrative_order.includes(m))];
  const preferred: ObjectWorld["preferred"] = new Map();
  const life = new Map<string, Life & { hash: string }>();
  // memory: one pass keeps only a hash per object and major; full objects are kept for the page's own major only
  const parts = (m: string) => ["w1", APPS].filter((p) => exists(resolve(snapshotDir(dataDir, m, p), "manifest.json")));
  for (const m of majors) {
    const seen = new Set<string>();
    for (const part of parts(m)) for (const o of iterSnapshot(dataDir, m, part)) {
      const k = objectKey(o);
      if (seen.has(k)) continue;
      seen.add(k);
      const l = life.get(k);
      if (!l) life.set(k, { versions: [m], changed: [], hash: o.hash });
      else { l.versions.push(m); if (l.hash !== o.hash) l.changed.push(m); l.hash = o.hash; }
    }
  }
  for (const m of order) {
    // an older major is a skeleton (D62): it adds to an object's life (versions, changes), never its facts or a page
    if (isSkeleton(dataDir, m)) continue;
    const man = (part: string) => readJson<SnapshotManifest>(resolve(snapshotDir(dataDir, m, part), "manifest.json"));
    const w1m = man("w1");
    const appm = exists(resolve(snapshotDir(dataDir, m, APPS), "manifest.json")) ? man(APPS) : w1m;
    for (const part of parts(m)) for (const o of iterSnapshot(dataDir, m, part)) {
      const k = objectKey(o);
      if (!preferred.has(k)) preferred.set(k, { obj: o, major: m, manifest: part === "w1" ? w1m : appm });
    }
  }
  // countries that replace an object, in the newest major they have
  const replacedIn = new Map<string, string[]>();
  for (const cc of countriesOf(dataDir)) {
    const m = [...majors].reverse().find((x) => exists(resolve(snapshotDir(dataDir, x, cc), "manifest.json")));
    if (!m) continue;
    for (const o of iterSnapshot(dataDir, m, cc)) { const k = objectKey(o); if (life.has(k)) replacedIn.set(k, [...(replacedIn.get(k) ?? []), cc]); }
  }
  const topicsByUrl = new Map<string, string[]>();
  for (const f of listFiles(resolve(contentDir, "topics"), ".md")) {
    const fm = matter(readText(f)).data as { id?: string; links?: { learn?: string[] } };
    for (const u of fm.links?.learn ?? []) topicsByUrl.set(u, [...(topicsByUrl.get(u) ?? []), fm.id!]);
  }
  // a country's own objects: in a country snapshot but in no W1 or app snapshot (D52)
  const countryOnly = new Map<string, OwnObject>();
  const rank = (m: string) => { const i = order.indexOf(m); return i < 0 ? 99 : i; };
  for (const cc of countriesOf(dataDir)) {
    for (const m of majors) {
      if (!exists(resolve(snapshotDir(dataDir, m, cc), "manifest.json"))) continue;
      const man = readJson<SnapshotManifest>(resolve(snapshotDir(dataDir, m, cc), "manifest.json"));
      for (const o of iterSnapshot(dataDir, m, cc)) {
        const k = objectKey(o);
        if (life.has(k)) continue; // the country replaces a W1 object: that object's own page covers it
        const id = `${cc}|${k}`;
        const prev = countryOnly.get(id);
        if (!prev) { countryOnly.set(id, { obj: o, cc, major: m, manifest: man, versions: [m] }); continue; }
        prev.versions.push(m);
        if (rank(m) < rank(prev.major)) Object.assign(prev, { obj: o, major: m, manifest: man });
      }
    }
  }
  const relations = new Map<string, RelationsView>();
  for (const m of majors) {
    const p = resolve(dataDir, "code", "relations", `${m}.json`);
    if (exists(p)) { const rel = readJson<Relations>(p); relations.set(m, { rel, in: incoming(rel), out: outgoing(rel) }); }
  }
  const cbo = changesByObjectPath(dataDir);
  const changes = new Map<string, ChangeRef[]>(exists(cbo) ? Object.entries(readJson<Record<string, unknown>>(cbo)).filter(([k]) => k !== "schema") as [string, ChangeRef[]][] : []);
  const fieldDocs = new Map<string, FieldDocs>();
  for (const m of majors) { const fd = loadFieldDocs(dataDir, m); if (fd) fieldDocs.set(m, fd); }
  return { majors, preferred, life: new Map([...life].map(([k, { hash: _h, ...l }]) => [k, l])), replacedIn, docs: loadDocsObjects(dataDir), topicsByUrl, relations, countryOnly, changes, fieldDocs };
}

const REL_CAP = 50;
const KIND_LABEL: Record<string, string> = { table_relation: "TableRelation", calc_formula: "CalcFormula", source_table: "source table", runs_on: "runs on", lookup_page: "lookup page", drilldown_page: "drill-down page", card_page: "card page", extends: "extends" };
function countriesOf(dataDir: string): string[] {
  const set = new Set<string>();
  const root = resolve(dataDir, "code");
  if (!exists(root)) return [];
  for (const m of readdirSync(root).filter((d) => /^\d+$/.test(d))) for (const cc of readdirSync(resolve(root, m))) if (cc !== "w1" && cc !== APPS) set.add(cc);
  return [...set].sort();
}

export function renderObjectPage(o: AlObject, w: ObjectWorld, major: string, manifest: SnapshotManifest, now: Date, hasLocalization: (cc: string) => boolean, own: OwnObject | null = null): string {
  const key = objectKey(o);
  // a country's own object lives in one country layer: its life is that country's majors, and no country replaces it
  const life = own ? { versions: own.versions, changed: [] as string[] } : w.life.get(key) ?? { versions: [major], changed: [] };
  const docs = own ? [] : w.docs?.by_object[key] ?? [];
  const ownTopics = [...new Set(docs.flatMap((d) => w.topicsByUrl.get(d.url) ?? []))].sort();
  const countries = own ? [] : (w.replacedIn.get(key) ?? []).sort();
  const pageKey = own ? ownPageKey(o, own.cc) : objectPageKey(o);
  const changes = w.changes?.get(pageKey) ?? [];
  const title = own ? `${titleOf(o)} (${own.cc.toUpperCase()})` : titleOf(o);
  const events = o.procedures.filter((p) => p.event && p.event !== "subscriber");
  const subs = o.procedures.filter((p) => p.subscribes_to);
  const pub = o.procedures.filter((p) => !p.event && p.scope !== "local");
  const local = o.procedures.filter((p) => !p.event && p.scope === "local").length;
  const deps = deprecations([o]);
  const src = githubBlob(manifest.repo, manifest.commit, o.file);
  // relations (D45): outgoing from this object, incoming from others, subscribers of its events
  const R = own ? undefined : w.relations.get(major);
  const relOut = R?.out.get(key) ?? [], relIn = R?.in.get(key) ?? [];
  const refs = relIn.filter((e) => e.k === "table_relation" || e.k === "calc_formula");
  const pagesOn = relIn.filter((e) => e.k === "source_table" || e.k === "lookup_page" || e.k === "drilldown_page" || e.k === "card_page");
  const extendedBy = relIn.filter((e) => e.k === "extends"), runOn = relIn.filter((e) => e.k === "runs_on");
  const myEvents = R?.rel.events[key] ?? {};
  const subCount = Object.values(myEvents).reduce((n, e) => n + e.subs.length, 0);
  // a table inherits the Learn pages and hubs of the pages on it (D65): Learn never names a table directly
  const inherited = o.type === "table" && !own ? inheritedDocs(key, relIn, docs, ownTopics, w) : null;
  const learnUrls = [...new Set([...docs.map((d) => d.url), ...(inherited?.learn ?? [])])];
  const topics = [...ownTopics, ...(inherited?.topics ?? [])];
  const caption = captionOf(o);
  const relSig = `${relOut.map((e) => `${e.k}>${e.t}:${e.via ?? ""}`).join(",")}|${relIn.map((e) => `${e.k}<${e.s}:${e.via ?? ""}`).join(",")}|${Object.entries(myEvents).map(([n, e]) => `${n}:${e.subs.map((x) => x.s).join("+")}`).join(",")}`;
  const link = (k: string) => { const p = w.pageOf?.(k); return p ? `[${cell(p.title)}](../${p.pk}.md)` : k; };
  // field docs (D65): a table's fields, or a tableextension's under its base table, explained by bound page controls
  const docsTable = own ? null : o.type === "table" ? key : o.type === "tableextension" ? relOut.find((e) => e.k === "extends")?.t ?? null : null;
  const fd = docsTable ? w.fieldDocs?.get(major)?.tables[docsTable] ?? null : null;
  const fdUsed = fd ? o.fields.map((f) => fd[f.name] ?? null) : [];
  // a page's layout is not in its object hash (extractor 4, D65): the page re-renders when only its controls change
  const layoutSig = o.controls || o.actions ? sha256(JSON.stringify([o.controls ?? [], o.actions ?? []])) : "";
  const versions = `BC${life.versions[0]}${life.versions.length > 1 ? `-${life.versions.at(-1)}` : ""}`;
  // our snapshots start at the oldest major: an object already there may be decades old, so "introduced" is unknown
  const sinceOldest = life.versions[0] === w.majors[0];
  const removedAfter = life.versions.at(-1) !== w.majors.at(-1);
  const summary = [
    `${title}${own ? ` in the ${own.cc.toUpperCase()} country layer` : o.app ? ` in ${o.app}` : ""}${o.namespace ? ` (${o.namespace})` : ""}${o.extends ? `, extends "${o.extends}"` : ""}.`,
    `${[o.fields.length ? `${o.fields.length} fields` : "", o.values.length ? `${o.values.length} values` : "", pub.length ? `${pub.length} public procedures` : "", events.length ? `${events.length} events` : "", subs.length ? `${subs.length} event subscribers` : ""].filter(Boolean).join(", ")}.`,
    `${sinceOldest ? `Present since at least BC${life.versions[0]}` : `Introduced in BC${life.versions[0]}`}${life.versions.at(-1) !== life.versions[0] ? `, still in BC${life.versions.at(-1)}` : ""}${life.changed.length ? `, changed in ${life.changed.map((v) => `BC${v}`).join(", ")}` : ""}${removedAfter ? `, gone after BC${life.versions.at(-1)}` : ""}.`,
    o.obsolete && o.obsolete.state !== "No" ? `Obsolete (${o.obsolete.state}${o.obsolete.tag ? ` since ${o.obsolete.tag}` : ""}).` : "",
  ].filter((x) => x && x !== ".").join(" ").replace(/\.\s*\./g, ".");
  const fm = {
    id: `object/${pageKey}`, type: "object", title, summary, tier: "official", language: "en",
    tags: [o.type, ...(own ? [`${own.cc} layer`] : o.app ? [o.app.toLowerCase()] : [])],
    versions: { introduced: sinceOldest ? null : life.versions[0], last_changed: life.changed.at(-1) ?? null, deprecated: o.obsolete?.tag ?? null },
    review: { state: "unreviewed", by: null, at: null, flags: [] },
    generated: { at: now.toISOString(), pipeline: PIPELINE_VERSION, prompts: {}, input_hash: sha256(`${o.hash}|${life.versions}|${life.changed}|${countries}|${learnUrls}|${relSig}|${own?.cc ?? ""}${changes.length ? `|${changes.map((c) => `${c.page}:${c.title}`).join(",")}` : ""}${layoutSig ? `|layout:${layoutSig}` : ""}${fdUsed.some(Boolean) ? `|fd:${sha256(JSON.stringify(fdUsed))}` : ""}`) },
    evidence: [{ kind: "code", url: src, title: `${o.file} (${manifest.branch})`, date: null, commit: manifest.commit, t: null, quote: null }, ...docs.map((d) => ({ kind: "learn", url: d.url, title: d.title, date: null, commit: null, t: null, quote: null }))],
    links: {
      learn: learnUrls, objects: own ? [] : w.basePage?.(o) ? [`object/${w.basePage(o)}`] : [], features: [], topics,
      localizations: own ? (hasLocalization(own.cc) ? [`localization/${own.cc}`] : []) : countries.filter(hasLocalization).map((cc) => `localization/${cc}`),
      videos: [], posts: [], guidelines: [], ...(changes.length ? { changes: changes.map((c) => `change/${c.page}`) } : {}),
    },
    object_type: o.type, object_id: o.id, name: o.name, ...(caption ? { caption } : {}), namespace: o.namespace, app: o.app, extends: o.extends,
    first_version: life.versions[0], last_version: life.versions.at(-1)!, present_in: life.versions, changed_in: life.changed, source_major: major,
    obsolete: o.obsolete, countries, ms_search_form_ids: docs.map((d) => d.id), ...(own ? { country: own.cc.toUpperCase() } : {}),
    counts: { fields: o.fields.length, procedures: o.procedures.length, events: events.length, subscribers: subs.length, ...(o.controls ? { controls: o.controls.length } : {}), ...(o.actions ? { actions: o.actions.length } : {}) },
    relations: { out: relOut.length, referenced_by: refs.length, pages: pagesOn.length, extended_by: extendedBy.length, event_subscribers: subCount },
  };
  validateOrThrow("frontmatter.object", fm, `object page ${key}`);

  const lines: string[] = [`# ${title}`, "", `> ${summary}`, "",
    `${own ? `${own.cc.toUpperCase()} country layer` : o.app ?? "unknown app"}${o.namespace ? ` · ${o.namespace}` : ""}${caption ? ` · captioned "${cell(caption)}"` : ""} · ${versions} · [source at ${manifest.commit.slice(0, 8)}](${src}) · facts from BC${major}`, "",
    ...(own && hasLocalization(own.cc) ? [`An object of the [${own.cc.toUpperCase()} localization](../../localizations/${own.cc}.md), not part of W1.`, ""] : []),
    ...(!own && w.basePage?.(o) ? [`Extends [${cell(o.extends!)}](../${w.basePage(o)}.md).`, ""] : []),
    ...(inherited?.pages.length ? [inheritedLine(inherited.pages, link), ""] : [])];
  const props = KEY_PROPS.filter((p) => o.properties[p] !== undefined);
  if (props.length) lines.push("## Properties", "", "| Property | Value |", "|---|---|", ...props.map((p) => `| ${p} | ${cell(o.properties[p])} |`), "");
  if (o.fields.length) lines.push(...fieldsSection(o, { link, relOut, keyByName: w.keyByName, doc: fd ? (n) => fd[n] ?? null : undefined }), "");
  if (o.controls?.length) lines.push(...controlsSection(o.controls, boundFieldsOf(o, R, w), w), "");
  if (o.actions?.length) lines.push(...actionsSection(o.actions, link, w), "");
  if (o.keys.length) lines.push("## Keys", "", ...o.keys.map((k) => `- ${cell(k.name)}: ${k.fields.map(cell).join(", ")}${k.clustered ? " (clustered)" : ""}`), "");
  if (o.values.length) lines.push("## Values", "", "| Ordinal | Name | Caption | Notes |", "|---|---|---|---|", ...o.values.map((v) => `| ${v.id} | ${cell(v.name) || "(blank)"} | ${cell(propOf(v.properties, "Caption") ?? "")} | ${v.obsolete ? `obsolete ${v.obsolete.state}${v.obsolete.tag ? ` ${v.obsolete.tag}` : ""}` : ""} |`), "");
  if (events.length) {
    lines.push("## Events published", "");
    for (const p of events) {
      lines.push(`- \`${cell(sig(p))}\` (${p.event}${p.obsolete ? `, obsolete ${p.obsolete.tag ?? ""}` : ""})${p.doc ? `: ${cell(p.doc)}` : ""}`);
      const ss = myEvents[p.name]?.subs ?? [];
      if (ss.length) lines.push(`  - subscribers: ${ss.slice(0, 20).map((x) => `${link(x.s)} ${cell(x.proc)}`).join(", ")}${ss.length > 20 ? `, and ${ss.length - 20} more` : ""}`);
    }
    lines.push("");
  }
  const triggerSubs = Object.entries(myEvents).filter(([, e]) => e.kind === "trigger_event" && e.subs.length);
  if (triggerSubs.length) lines.push("## Trigger event subscribers", "", ...triggerSubs.map(([n, e]) => `- ${cell(n)}: ${e.subs.slice(0, 20).map((x) => `${link(x.s)} ${cell(x.proc)}`).join(", ")}${e.subs.length > 20 ? `, and ${e.subs.length - 20} more` : ""}`), "");
  if (subs.length) lines.push("## Event subscriptions", "", ...subs.map((p) => `- ${cell(p.name)} subscribes to ${p.subscribes_to!.object_type} "${cell(p.subscribes_to!.object_name)}" ${cell(p.subscribes_to!.event)}${p.subscribes_to!.element ? ` (${cell(p.subscribes_to!.element)})` : ""}`), "");
  if (pub.length) lines.push("## Procedures", "", ...pub.map((p) => `- \`${cell(sig(p))}\`${p.scope !== "global" ? ` (${p.scope})` : ""}${p.obsolete ? ` (obsolete ${p.obsolete.tag ?? ""}${p.obsolete.reason ? `: ${cell(p.obsolete.reason)}` : ""})` : ""}${p.doc ? `: ${cell(p.doc)}` : ""}`), ...(local ? ["", `Plus ${local} local procedures.`] : []), "");
  else if (local) lines.push("## Procedures", "", `${local} local procedures, no public ones.`, "");
  if (o.triggers.length) lines.push("## Triggers", "", o.triggers.join(", "), "");
  if (relOut.length) {
    lines.push("## Relations", "");
    for (const e of relOut) lines.push(`- ${e.via ? `${cell(e.via)}: ` : ""}${KIND_LABEL[e.k] ?? e.k} ${link(e.t)}${e.cond ? " (conditional)" : ""}`);
    lines.push("");
  }
  if (refs.length) {
    // grouped by the referencing object; hub tables (Customer, Country/Region: hundreds) are capped
    const by = new Map<string, string[]>();
    for (const e of refs) by.set(e.s, [...(by.get(e.s) ?? []), e.via ?? e.k]);
    const groups = [...by].sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]));
    lines.push("## Referenced by", "", `${refs.length} fields in ${groups.length} objects relate to this table (TableRelation or CalcFormula).`, "");
    for (const [k, vias] of groups.slice(0, REL_CAP)) lines.push(`- ${link(k)}: ${vias.map(cell).join(", ")}`);
    if (groups.length > REL_CAP) lines.push(`- and ${groups.length - REL_CAP} more objects (${refs.length - groups.slice(0, REL_CAP).reduce((n, g) => n + g[1].length, 0)} fields): data/code/relations/${major}.json`);
    lines.push("");
  }
  if (pagesOn.length || runOn.length) {
    lines.push("## Pages and codeunits on this table", "");
    for (const e of pagesOn.slice(0, REL_CAP)) lines.push(`- ${link(e.s)} (${KIND_LABEL[e.k]})`);
    if (pagesOn.length > REL_CAP) lines.push(`- and ${pagesOn.length - REL_CAP} more pages`);
    for (const e of runOn.slice(0, REL_CAP)) lines.push(`- ${link(e.s)} (codeunit runs on it)`);
    lines.push("");
  }
  if (extendedBy.length) lines.push("## Extended by", "", ...extendedBy.slice(0, REL_CAP).map((e) => `- ${link(e.s)}`), ...(extendedBy.length > REL_CAP ? [`- and ${extendedBy.length - REL_CAP} more`] : []), "");
  if (changes.length) lines.push("## Recent changes", "", ...changes.map((c) => `- ${c.merged_at} [#${c.number} ${cell(c.title)}](${"../".repeat(pageKey.split("/").length)}changes/${c.page}.md) (${c.base}${c.major ? `, BC${c.major}` : ""}, ${c.kind}${c.status !== "modified" ? `, ${c.status}` : ""})`), "");
  lines.push(...askYourAgent(o, own?.cc ?? null));
  lines.push("## Across versions", "", `- Present in: ${life.versions.map((v) => `BC${v}`).join(", ")}`, `- Changed (declaration) in: ${life.changed.length ? life.changed.map((v) => `BC${v}`).join(", ") : "none"}`,
    ...(o.obsolete && o.obsolete.state !== "No" ? [`- Obsolete: ${o.obsolete.state}${o.obsolete.tag ? ` since ${o.obsolete.tag}` : ""}${o.obsolete.reason ? `, "${cell(o.obsolete.reason)}"` : ""}`] : []), "");
  if (countries.length) lines.push("## Countries that replace it", "", countries.map((cc) => (hasLocalization(cc) ? `[${cc.toUpperCase()}](../../localizations/${cc}.md)` : cc.toUpperCase())).join(", "), "");
  if (docs.length) lines.push("## Documented on Microsoft Learn", "", ...docs.map((d) => `- [${cell(d.title)}](${d.url})`), "");
  if (deps.length) lines.push("## Deprecations", "", ...deps.map((d) => `- ${d.kind}${d.member ? ` ${cell(d.member)}` : ""}: ${d.state ?? "guarded"}${d.tag ? ` ${d.tag}` : ""}${d.clean.length ? ` (#if not ${d.clean.join(", ")})` : ""}${d.reason ? `, "${cell(d.reason)}"` : ""}`), "");
  lines.push("Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).", "");
  return `---\n${toYaml(fm, { lineWidth: 0, version: "1.1" })}---\n\n${lines.join("\n").replace(/\n{3,}/g, "\n\n").trim()}\n`;
}

// ---------------------------------------------------------------------------------------------- explanations (D65)
// Field explanations, captions and the Learn pages a table inherits through its pages. Facts from the code and the
// docs-objects join only; nothing machine-written.

/** A property by name, case-insensitively (AL property names are). */
export function propOf(props: Record<string, string>, name: string): string | null {
  const n = name.toLowerCase();
  const k = Object.keys(props).find((x) => x.toLowerCase() === n);
  return k === undefined ? null : props[k];
}
const isTrue = (v: string | null) => v?.toLowerCase() === "true";
const isFalse = (v: string | null) => v?.toLowerCase() === "false";

/**
 * A Caption property as the reader sees it. The extractor unquotes a plain string but keeps a value with extra parts
 * verbatim ("'Human Resources', Comment = '...'"): the string literal is the caption. A Locked caption is an API
 * entity name ('agedAccountsReceivable') rather than words for a reader: no caption.
 */
export function captionText(raw: string | null | undefined): string | null {
  const v = raw?.trim();
  if (!v) return null;
  const m = /^'((?:[^']|'')*)'(.*)$/s.exec(v);
  if (!m) return v;
  if (/\bLocked\s*=\s*true\b/i.test(m[2])) return null;
  return m[1].replace(/''/g, "'").trim() || null;
}
/** The object's Caption when it says something its name does not ("Service Objects" captioned "Subscriptions"). */
export function captionOf(o: Pick<AlObject, "name" | "properties">): string | null {
  const c = captionText(propOf(o.properties, "Caption"));
  return c && c !== o.name.trim() ? c : null;
}

export interface FieldRowCtx {
  /** Markdown link for an object key (falls back to the key). */
  link: (key: string) => string;
  /** This object's outgoing relation edges (TableRelation targets resolved by the relations pass, D45). */
  relOut: RelEdge[];
  keyByName?: (type: string, name: string) => string | null;
  /** The ToolTip of a page control bound to the field, from the field docs of the page's major (D65). */
  doc?: (fieldName: string) => FieldDoc | null;
}
/** One Fields row's Explanation and Notes. `provenance` is null for the field's own ToolTip. */
export interface FieldRow { explanation: string; provenance: string | null; notes: string[] }

/**
 * Explanation: the field's ToolTip (either spelling, so records extracted before D65 count too); else the ToolTip of a
 * page control bound to the field (field docs, provenance `via <the page>`); else its Caption when that differs from
 * the name; else an em-dash.
 * Notes: obsolete state and CLEAN guards, then TableRelation, FlowField/FlowFilter, enum type, OptionCaption, not
 * editable, NotBlank, AutoIncrement, and a DataClassification that differs from the object's.
 */
export function fieldRow(f: AlField, o: Pick<AlObject, "properties">, ctx: FieldRowCtx): FieldRow {
  const P = (n: string) => propOf(f.properties, n);
  const tip = f.tooltip ?? toolTipOf(f.properties);
  const caption = captionText(P("Caption"));
  const doc = tip ? null : ctx.doc?.(f.name) ?? null;
  const explanation = tip ?? doc?.tooltip ?? (caption && caption !== f.name.trim() ? caption : "—");
  const provenance = tip ? null : doc ? `via ${ctx.link(doc.page)}` : explanation !== "—" ? "caption" : null;
  const notes: string[] = [];
  if (f.obsolete) notes.push(`obsolete ${f.obsolete.state}${f.obsolete.tag ? ` ${f.obsolete.tag}` : ""}`);
  if (f.clean?.length) notes.push(`#if not ${f.clean.join(", ")}`);
  const tr = P("TableRelation");
  if (tr) {
    const targets = [...new Set(ctx.relOut.filter((e) => e.k === "table_relation" && e.via === f.name).map((e) => e.t))].slice(0, 3);
    const bare = /^("[^"]+"|[A-Za-z_][A-Za-z0-9_]*)$/.test(tr.trim());
    notes.push(targets.length ? `TableRelation ${targets.map(ctx.link).join(", ")}${bare ? "" : ` (${cell(tr)})`}` : `TableRelation ${cell(tr)}`);
  }
  const fc = P("FieldClass")?.toLowerCase();
  if (fc === "flowfield") notes.push(`FlowField: ${cell(P("CalcFormula") ?? "")}`.trim());
  if (fc === "flowfilter") notes.push("FlowFilter");
  const en = f.type.match(/^Enum\s+(.+)$/i);
  if (en) {
    const name = en[1].trim().replace(/^"(.*)"$/, "$1");
    const k = ctx.keyByName?.("enum", name) ?? null;
    notes.push(`enum ${k ? ctx.link(k) : cell(name)}`);
  }
  const oc = P("OptionCaption");
  if (oc) notes.push(`OptionCaption: ${cell(oc)}`);
  if (isFalse(P("Editable"))) notes.push("not editable");
  if (isTrue(P("NotBlank"))) notes.push("NotBlank");
  if (isTrue(P("AutoIncrement"))) notes.push("AutoIncrement");
  const dc = P("DataClassification");
  if (dc && dc !== propOf(o.properties, "DataClassification")) notes.push(`DataClassification ${cell(dc)}`);
  return { explanation, provenance, notes };
}

/** The Fields section: a one-line legend, then No. | Name | Type | Explanation | Notes. */
function fieldsSection(o: AlObject, ctx: FieldRowCtx): string[] {
  const out = ["## Fields", "", "Explanation: the field's ToolTip in the code; without one, the ToolTip of a page control bound to the field (marked via the page); without that, its Caption (marked caption) when that differs from the name.", "",
    "| No. | Name | Type | Explanation | Notes |", "|---|---|---|---|---|"];
  for (const f of o.fields) {
    const r = fieldRow(f, o, ctx);
    out.push(`| ${f.id} | ${cell(f.name)} | ${cell(f.type)} | ${r.explanation === "—" ? "—" : cell(r.explanation)}${r.provenance ? ` <small>${r.provenance}</small>` : ""} | ${r.notes.join("; ")} |`);
  }
  return out;
}

/** A caption without its `&` accelerator (`&Navigate` → Navigate; `&&` is a literal ampersand). */
export const stripAccelerator = (s: string) => s.replace(/&(&?)/g, "$1");
const label = (raw: string | null) => { const c = captionText(raw); return c ? stripAccelerator(c) : null; };
const memberNotes = (x: { obsolete: AlObject["obsolete"]; clean?: string[] }) => {
  const n = [...(x.obsolete && x.obsolete.state !== "No" ? [`obsolete ${x.obsolete.state}${x.obsolete.tag ? ` ${x.obsolete.tag}` : ""}`] : []), ...(x.clean?.length ? [`#if not ${x.clean.join(", ")}`] : [])];
  return n.length ? ` <small>${cell(n.join("; "))}</small>` : "";
};
/** The group column: printed on the first row of each run of the same group, so the table reads grouped. */
function grouped(rows: { group: string | null; cells: string[] }[]): string[] {
  let prev: string | null | undefined;
  return rows.map((r) => { const g = r.group === prev ? "" : cell(label(r.group) ?? ""); prev = r.group; return `| ${g} | ${r.cells.join(" | ")} |`; });
}

/** A page's bound fields: the fields of its SourceTable (a page extension's: its base page's) and of that table's extensions, by lower-cased name. */
type BoundFields = (name: string) => { field: AlField; holder: string } | null;
function boundFieldsOf(o: AlObject, R: RelationsView | undefined, w: ObjectWorld): BoundFields {
  if (!R) return () => null;
  const key = objectKey(o);
  const base = o.type === "pageextension" ? R.out.get(key)?.find((e) => e.k === "extends")?.t : key;
  const table = base ? R.out.get(base)?.find((e) => e.k === "source_table")?.t : undefined;
  if (!table) return () => null;
  const map = new Map<string, { field: AlField; holder: string }>();
  for (const holder of [table, ...(R.in.get(table) ?? []).filter((e) => e.k === "extends").map((e) => e.s)]) {
    for (const f of w.preferred.get(holder)?.obj.fields ?? []) if (!map.has(f.name.toLowerCase())) map.set(f.name.toLowerCase(), { field: f, holder });
  }
  return (name) => map.get(name.toLowerCase()) ?? null;
}

/** Fields on this page (D65): every layout control in source order, grouped by its container. */
function controlsSection(controls: AlControl[], bound: BoundFields, w: ObjectWorld): string[] {
  const rows = controls.map((c) => {
    const name = label(c.caption) ?? c.name;
    let shows = "—", tip = c.tooltip ? cell(c.tooltip) : "—";
    if (c.kind === "field") {
      const n = boundField(c.source_expr), b = n ? bound(n) : null;
      const pk = b ? w.pageOf?.(b.holder)?.pk : null;
      shows = b ? (pk ? `[${cell(b.field.name)}](../${pk}.md#fields)` : cell(b.field.name)) : c.source_expr ? `\`${cell(c.source_expr)}\`` : "—";
      const own = b && !c.tooltip ? b.field.tooltip ?? toolTipOf(b.field.properties) : null;
      if (own) tip = `${cell(own)} <small>from the table field</small>`;
    } else if (c.kind === "part") {
      const k = c.source_expr ? w.keyByName?.("page", c.source_expr) ?? null : null;
      const p = k ? w.pageOf?.(k) : null;
      shows = `part ${p ? `[${cell(p.title)}](../${p.pk}.md)` : cell(c.source_expr ?? "")}`.trim();
    } else if (c.kind === "usercontrol") shows = `add-in ${cell(c.source_expr ?? "")}`.trim();
    else if (c.kind === "label") shows = "label";
    else if (c.kind === "modify") shows = `modifies \`${cell(c.name)}\``;
    return { group: c.group, cells: [`${cell(name)}${memberNotes(c)}`, shows, tip] };
  });
  return ["## Fields on this page", "",
    "Layout controls in source order, grouped by the container they sit in. Shows: the table field a control is bound to (or its expression as written); ToolTip: the control's own, else the bound field's (marked).", "",
    "| Group | Control | Shows | ToolTip |", "|---|---|---|---|", ...grouped(rows)];
}

/** Actions (D65): caption, ToolTip and the object RunObject opens, linked when it has a page here. */
function actionsSection(actions: AlAction[], link: (k: string) => string, w: ObjectWorld): string[] {
  const rows = actions.map((a) => {
    const name = label(a.caption) ?? a.name;
    let runs = "";
    if (a.kind === "modify") runs = `modifies \`${cell(a.name)}\``;
    else if (a.run_object) {
      const r = a.run_object;
      const k = r.id !== null ? `${r.type}/${r.id}` : r.name ? w.keyByName?.(r.type, r.name) ?? null : null;
      const ref = `${TYPE_LABEL[r.type] ?? r.type}${r.id !== null ? ` ${r.id}` : r.name ? ` "${r.name}"` : ""}`;
      runs = k && w.pageOf?.(k) ? link(k) : r.id === null && !r.name ? cell(propOf(a.properties, "RunObject") ?? ref) : cell(ref);
    }
    return { group: a.group, cells: [`${cell(name)}${memberNotes(a)}`, a.tooltip ? cell(a.tooltip) : "—", runs] };
  });
  return ["## Actions", "", "| Group | Action | ToolTip | Runs |", "|---|---|---|---|", ...grouped(rows)];
}

/** What a table inherits from the pages whose SourceTable it is: their Learn pages and the hubs of those pages. */
export interface Inherited { pages: { key: string; docs: number }[]; learn: string[]; topics: string[] }
function inheritedDocs(key: string, relIn: RelEdge[], ownDocs: DocRef[], ownTopics: string[], w: ObjectWorld): Inherited {
  const pages = [...new Set(relIn.filter((e) => e.k === "source_table" && e.t === key).map((e) => e.s))]
    .map((k) => ({ key: k, refs: w.docs?.by_object[k] ?? [] })).filter((p) => p.refs.length)
    .sort((a, b) => b.refs.length - a.refs.length || a.key.localeCompare(b.key, "en", { numeric: true }));
  const own = new Set(ownDocs.map((d) => d.url));
  const learn = [...new Set(pages.flatMap((p) => p.refs.map((d) => d.url)))].filter((u) => !own.has(u));
  const seen = new Set(ownTopics);
  const topics = [...new Set(learn.flatMap((u) => w.topicsByUrl.get(u) ?? []))].filter((t) => !seen.has(t)).sort();
  return { pages: pages.map((p) => ({ key: p.key, docs: p.refs.length })), learn, topics };
}
const INHERITED_CAP = 20;
function inheritedLine(pages: Inherited["pages"], link: (k: string) => string): string {
  const shown = pages.slice(0, INHERITED_CAP).map((p, i) => `${link(p.key)} (${p.docs}${i === 0 ? ` Learn page${p.docs === 1 ? "" : "s"}` : ""})`);
  return `Learn documents this table through its pages: ${shown.join(", ")}${pages.length > INHERITED_CAP ? `, and ${pages.length - INHERITED_CAP} more pages` : ""}.`;
}

/**
 * "Ask your agent" (D67, docs/specs/code-atlas.md 2.2): the exact bc-code-atlas call that opens this object's real
 * source. Built from type and name only (and, for a country's own object, the country); the atlas is external and
 * MCP-only, so the block names the server and links nothing. No body ever lands here (D10). The atlas's default
 * corpus is w1-28 (W1 of BC28); a version-aware block is later work (spec section 9).
 */
export function askYourAgent(o: Pick<AlObject, "type" | "name">, cc: string | null = null): string[] {
  const name = o.name.replace(/\s+/g, " ").trim();
  const note = cc ? `A ${cc.toUpperCase()} country object, not part of W1: the default corpus does not have it; \`bcatlas_list_countries\` shows which countries the atlas has.` : "";
  return ["## Ask your agent", "",
    "Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:", "",
    `- \`bcatlas_resolve_node(object_type: ${JSON.stringify(o.type)}, object_name: ${JSON.stringify(name)})\`, then \`bcatlas_get_neighbors\` or \`bcatlas_get_procedure_body\` on the returned id.`,
    `- CLI: \`node bc-code-atlas.js resolve-node ${o.type} ${JSON.stringify(name)}\``, "",
    ...(note ? [note, ""] : [])];
}

// ---------------------------------------------------------------------------------------------- localizations

const countryNames = () => loadConfig<{ learn_local_functionality: Record<string, string> }>("countries").learn_local_functionality;
function memberSummary(d: ObjectDiff): string {
  const n = (xs: { change: string }[] | undefined, c: string) => xs?.filter((x) => x.change === c).length ?? 0;
  return [n(d.fields, "added") ? `+${n(d.fields, "added")} fields` : "", n(d.fields, "changed") ? `${n(d.fields, "changed")} fields changed` : "",
    n(d.events, "added") ? `+${n(d.events, "added")} events` : "", n(d.procedures, "added") ? `+${n(d.procedures, "added")} procedures` : "",
    n(d.procedures, "changed") ? `${n(d.procedures, "changed")} procedures changed` : "", d.properties?.length ? `${d.properties.length} properties` : ""].filter(Boolean).join(", ") || "body changes only";
}

export function renderLocalizationPage(cc: string, d: AlDiff, older: { major: string; summary: Record<string, unknown> }[], hasObjectPage: (key: string) => string | null, topic: string | null, now: Date, narrative: LocalizationNarrative | null = null): string {
  const name = countryNames()[cc.toUpperCase()] ?? cc.toUpperCase();
  const added = d.objects.filter((o) => o.change === "added"), replaced = d.objects.filter((o) => o.change === "replaced"), removed = d.objects.filter((o) => o.change === "removed");
  const fieldsAdded = Number(d.summary.fields_added ?? 0), eventsAdded = Number(d.summary.events_added ?? 0);
  const facts = `${name} (${cc.toUpperCase()}) localization of Business Central in BC${d.to.version}: ${added.length} objects of its own, ${replaced.length} W1 objects changed (${fieldsAdded} fields and ${eventsAdded} events added)${removed.length ? `, ${removed.length} W1 objects dropped` : ""}. From the code; country apps outside the Base Application are not included yet.`;
  // a narrative only for the version it was written from
  const n = narrative && narrative.version === d.to.version ? narrative : null;
  const summary = n?.summary ?? facts;
  const fm = {
    id: `localization/${cc}`, type: "localization", title: `${name} (${cc.toUpperCase()})`, summary, tier: "official", language: "en", tags: ["localization", cc],
    review: { state: "unreviewed", by: null, at: null, flags: [] },
    generated: { at: now.toISOString(), pipeline: PIPELINE_VERSION, prompts: n ? { [LOC_STAGE]: LOC_V } : {}, input_hash: sha256(JSON.stringify([d.from, d.to, d.summary, n?.input_hash ?? null])) },
    evidence: [{ kind: "code", url: `https://github.com/microsoft/BCApps`, title: `country diff ${d.to.version}-${cc}`, date: null, commit: d.to.commit, t: null, quote: null }],
    links: { learn: [], objects: replaced.map((o) => hasObjectPage(o.key)).filter((x): x is string => !!x).map((p) => `object/${p}`), features: [], topics: topic ? [topic] : [], localizations: [], videos: [], posts: [], guidelines: [] },
    country: cc.toUpperCase(), version: d.to.version, w1_version: d.from.version, added_objects: added.length, replaced_objects: replaced.length, removed_objects: removed.length,
    added_fields: fieldsAdded, added_events: eventsAdded, learn_folder: countryNames()[cc.toUpperCase()] ? `LocalFunctionality/${countryNames()[cc.toUpperCase()]}` : null,
  };
  validateOrThrow("frontmatter.localization", fm, `localization page ${cc}`);
  const lines = [`# ${name} (${cc.toUpperCase()})`, "", `> ${summary}`, "",
    `BC${d.to.version} · country layer against W1 · ${topic ? `Learn: [local functionality](../topics/${topic.replace(/^topic\//, "")}.md)` : "no Learn local functionality hub found"}${n ? " · narrative **unreviewed** (machine-written)" : ""}`, ""];
  if (n) lines.push("## Overview", "", n.overview, "", "## Key points", "", ...n.key_points.map((k) => `- ${k}`), "",
    `Narrative written by Sonnet from the code diff and ${n.learn_pages_used} Learn page summaries. In numbers: ${facts}`, "");
  const byArea = new Map<string, { replaced: number; added: number; fields: number }>();
  for (const o of d.objects) {
    const a = areaOf(o.ns, null), c = byArea.get(a) ?? { replaced: 0, added: 0, fields: 0 };
    if (o.change === "replaced") c.replaced++; else if (o.change === "added") c.added++;
    c.fields += o.fields?.filter((f) => f.change === "added").length ?? 0;
    byArea.set(a, c);
  }
  if (byArea.size) {
    const areasSorted = [...byArea].sort((x, y) => y[1].replaced + y[1].added - (x[1].replaced + x[1].added) || x[0].localeCompare(y[0]));
    const story = new Map((n?.areas ?? []).map((a) => [a.area, a]));
    lines.push("## By area", "", "| Area | W1 objects changed | Own objects | Fields added |", "|---|---|---|---|");
    for (const [a, c] of areasSorted) lines.push(`| ${story.has(a) ? `[${cell(a)}](#${slug(a)})` : cell(a)} | ${c.replaced} | ${c.added} | ${c.fields} |`);
    lines.push("");
    // the story per area (D50): what, why (Learn), the objects that carry it, and a way into the full diff
    for (const [a, c] of areasSorted) {
      const st = story.get(a);
      if (!st) continue;
      lines.push(`### ${a}`, "", st.what, "");
      lines.push(st.why ? `Why: ${st.why}` : "Why: not explained by a Learn page in the input; the code shows the change, not the requirement.", "");
      const cited = st.objects.map((k) => { const o = d.objects.find((x) => x.key === k); const p = hasObjectPage(k); return o ? `${p ? `[${cell(k)} "${cell(o.name)}"](../objects/${p}.md)` : `${cell(k)} "${cell(o.name)}"`}${o.change === "added" ? " (own)" : ""}` : null; }).filter(Boolean);
      if (cited.length) lines.push(`Objects: ${cited.join(", ")}.`, "");
      lines.push(`[All ${c.replaced + c.added} objects of ${cell(a)} in the diff](?ns=${encodeURIComponent(a)}#country-diff)`, "");
    }
  }
  if (replaced.length) {
    lines.push("## W1 objects this country changes", "", "| Object | Changes |", "|---|---|");
    for (const o of replaced) { const p = hasObjectPage(o.key); lines.push(`| ${p ? `[${cell(o.key)} "${cell(o.name)}"](../objects/${p}.md)` : `${cell(o.key)} "${cell(o.name)}"`} | ${memberSummary(o)} |`); }
    lines.push("");
  }
  if (added.length) {
    lines.push("## Objects of its own", "", `${added.length} objects only this country has.`, "");
    for (const o of added) { const p = hasObjectPage(o.key); lines.push(`- ${p ? `[${cell(o.key)} "${cell(o.name)}"](../objects/${p}.md)` : `${cell(o.key)} "${cell(o.name)}"`}`); }
    lines.push("");
  }
  if (removed.length) lines.push("## W1 objects it drops", "", ...removed.map((o) => { const p = hasObjectPage(o.key); return `- ${p ? `[${cell(o.key)} "${cell(o.name)}"](../objects/${p}.md)` : cell(o.key)}`; }), "");
  if (older.length) lines.push("## Other versions", "", ...older.map((x) => `- BC${x.major}: ${x.summary.objects} objects differ from W1 (${x.summary.fields_added} fields, ${x.summary.events_added} events added)`), "");
  lines.push("Source: country layer of the Base Application compared with W1 of the same version (data/code/diffs/country/).", "");
  return `---\n${toYaml(fm, { lineWidth: 0, version: "1.1" })}---\n\n${lines.join("\n").replace(/\n{3,}/g, "\n\n").trim()}\n`;
}

// ---------------------------------------------------------------------------------------------- run

export interface CodePagesRun { objects: number; written: number; removed: number; localizations: number; own_objects?: number }

export function renderCodePages(dataDir: string, contentDir: string, now = new Date()): CodePagesRun {
  const w = loadObjectWorld(dataDir, contentDir);
  const run: CodePagesRun = { objects: 0, written: 0, removed: 0, localizations: 0 };
  if (!w.majors.length) return run;
  // localization diffs first: object pages link the countries that have a page
  const diffDir = resolve(dataDir, "code", "diffs", "country");
  const byCountry = new Map<string, { major: string; path: string }[]>();
  // <major>-<cc>.json only: matrix.json (D49) lives in the same folder
  for (const f of exists(diffDir) ? readdirSync(diffDir).filter((n) => /^\d+-[a-z]+\.json$/.test(n)) : []) {
    const [major, cc] = f.slice(0, -5).split("-");
    byCountry.set(cc, [...(byCountry.get(cc) ?? []), { major, path: resolve(diffDir, f) }]);
  }
  // the current release first (narrative_order: 29, 28, 30), then the others newest first
  const rank = (m: string) => { const i = loadConfig<Versions>("versions").narrative_order.indexOf(m); return i < 0 ? 99 : i; };
  for (const list of byCountry.values()) list.sort((a, b) => rank(a.major) - rank(b.major) || Number(b.major) - Number(a.major));
  const hasLoc = (cc: string) => byCountry.has(cc);
  const pageKeys = new Map<string, string>(); // object key → page key (W1 first, so a clash keeps the W1 object)
  const used = new Set<string>();
  for (const [k, { obj }] of w.preferred) { const pk = objectPageKey(obj); if (!used.has(pk)) { used.add(pk); pageKeys.set(k, pk); } }
  // extensions name their base object; AL references objects by exact name, so this is a code reference
  const byName = new Map<string, string>();
  for (const [k, pk] of pageKeys) { const o = w.preferred.get(k)!.obj; byName.set(`${o.type}/${o.name.toLowerCase()}`, pk); }
  w.basePage = (o) => (o.extends ? byName.get(`${o.type.replace(/extension$/, "")}/${o.extends.toLowerCase()}`) ?? null : null);
  const keyByName = new Map<string, string>();
  for (const k of pageKeys.keys()) { const o = w.preferred.get(k)!.obj; keyByName.set(`${o.type}/${o.name.toLowerCase()}`, k); }
  w.keyByName = (type, name) => keyByName.get(`${type}/${name.toLowerCase()}`) ?? null;
  w.pageOf = (k) => { const pk = pageKeys.get(k); const e = w.preferred.get(k); return pk && e ? { pk, title: titleOf(e.obj) } : null; };
  const wanted = new Set<string>();
  for (const [k, { obj, major, manifest }] of w.preferred) {
    const pk = pageKeys.get(k);
    if (!pk) continue;
    wanted.add(pk);
    if (writeIfChanged(objectPagePath(contentDir, pk), renderObjectPage(obj, w, major, manifest, now, hasLoc))) run.written++;
  }
  // a country's own objects (D52): keyed per country, so the 791 ids two countries share stay apart
  const ownKeys = new Map<string, string>();
  for (const [id, own] of w.countryOnly) {
    const pk = ownPageKey(own.obj, own.cc);
    ownKeys.set(id, pk);
    wanted.add(pk);
    if (writeIfChanged(objectPagePath(contentDir, pk), renderObjectPage(own.obj, w, own.major, own.manifest, now, hasLoc, own))) run.written++;
    run.own_objects = (run.own_objects ?? 0) + 1;
  }
  run.objects = wanted.size;
  for (const f of listFiles(resolve(contentDir, "objects"), ".md")) {
    const pk = relative(resolve(contentDir, "objects"), f).replace(/\.md$/, "");
    if (!wanted.has(pk)) { removeIfExists(f); run.removed++; }
  }
  // localization pages
  const topicFor = (cc: string): string | null => {
    const folder = countryNames()[cc.toUpperCase()];
    if (!folder) return null;
    const counts = new Map<string, number>();
    for (const [url, ids] of w.topicsByUrl) if (url.includes(`/LocalFunctionality/${folder}/`)) for (const id of ids) counts.set(id, (counts.get(id) ?? 0) + 1);
    // the country's own hub is the ancestor of the subtopics that hold most pages: shortest path wins
    return [...counts.keys()].sort((a, b) => a.split("/").length - b.split("/").length || a.localeCompare(b))[0] ?? null;
  };
  for (const [cc, list] of byCountry) {
    const [newest, ...older] = list;
    const d = readJson<AlDiff>(newest.path);
    const pageOf = (key: string) => pageKeys.get(key) ?? ownKeys.get(`${cc}|${key}`) ?? null;
    const page = renderLocalizationPage(cc, d, older.map((x) => ({ major: x.major, summary: readJson<AlDiff>(x.path).summary })), pageOf, topicFor(cc), now, loadLocalizationNarrative(dataDir, cc));
    if (writeIfChanged(resolve(contentDir, "localizations", `${cc}.md`), page)) run.written++;
    run.localizations++;
  }
  for (const f of listFiles(resolve(contentDir, "localizations"), ".md")) if (!byCountry.has(f.slice(f.lastIndexOf("/") + 1, -3))) removeIfExists(f);
  renderCodeIndexes(contentDir, w, pageKeys, byCountry);
  return run;
}

function renderCodeIndexes(contentDir: string, w: ObjectWorld, pageKeys: Map<string, string>, byCountry: Map<string, { major: string; path: string }[]>): void {
  const byType = new Map<string, { pk: string; o: AlObject }[]>();
  for (const [k, pk] of pageKeys) { const o = w.preferred.get(k)!.obj; byType.set(o.type, [...(byType.get(o.type) ?? []), { pk, o }]); }
  const types = [...byType.keys()].sort();
  const top = ["# BC Observatory: AL objects", "",
    "> Every W1 and first-party app object of Business Central (BC" + w.majors.join(", BC") + "), extracted from the code: fields, keys, procedures, events,",
    "> subscriptions, obsolete state, versions, countries that replace it, Learn pages naming it. Frontmatter: schemas/frontmatter.object.json.",
    "> Related objects (both documented in one hub) and the object's first-party app page (content/apps/): data/links/related.json.", "",
    `${pageKeys.size} objects. Per type:`, "", ...types.map((t) => `- [${TYPE_LABEL[t] ?? t}](${t}/llms.txt): ${byType.get(t)!.length}`), ""];
  writeIfChangedText(resolve(contentDir, "objects", "llms.txt"), top.join("\n"));
  for (const t of types) {
    const rows = byType.get(t)!.sort((a, b) => (a.o.id ?? 0) - (b.o.id ?? 0) || a.o.name.localeCompare(b.o.name));
    const text = [`# BC Observatory: ${TYPE_LABEL[t] ?? t} objects`, "", `${rows.length} objects, by id.`, "",
      ...rows.map(({ pk, o }) => `- [${cell(titleOf(o))}](${pk.slice(t.length + 1)}.md): ${o.app ?? ""}${o.obsolete && o.obsolete.state !== "No" ? `, obsolete ${o.obsolete.tag ?? ""}` : ""}`), ""].join("\n");
    writeIfChangedText(resolve(contentDir, "objects", t, "llms.txt"), text);
  }
  const loc = ["# BC Observatory: localizations", "", "> What each country layer of the Base Application adds to or changes in W1, from the code. Frontmatter: schemas/frontmatter.localization.json.", "",
    ...[...byCountry.keys()].sort().map((cc) => `- [${countryNames()[cc.toUpperCase()] ?? cc.toUpperCase()} (${cc.toUpperCase()})](${cc}.md)`), ""];
  if (byCountry.size) writeIfChangedText(resolve(contentDir, "localizations", "llms.txt"), loc.join("\n"));
}
const writeIfChangedText = (p: string, t: string) => { if (!exists(p) || readText(p) !== t) writeText(p, t); };
