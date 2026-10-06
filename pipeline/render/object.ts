/**
 * Object and localization pages (PLAN M2, D30), deterministic, from data/code/:
 *
 * - content/objects/<type>/<id>.md: every W1 and first-party app object of the snapshot majors, rendered from the
 *   preferred major (versions.json `narrative_order`: 29, then 28, then 30) with its members, its life across the
 *   majors, the countries that replace it, the Learn pages naming it (ms.search.form), the topic hubs of those pages
 *   and its deprecations. Facts from the code pillar; nothing machine-written. Country-only objects get no object
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
import { objectKey, type AlObject, type AlProcedure } from "../code/extract.js";
import { readSnapshot, snapshotDir, type SnapshotManifest } from "../code/job.js";
import { APPS, deprecations, type AlDiff, type ObjectDiff } from "../code/diff.js";
import type { DocsObjects } from "../code/docs-objects.js";
import { PIPELINE_VERSION } from "../version.js";

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
export interface ObjectWorld {
  majors: string[]; preferred: Map<string, { obj: AlObject; major: string; manifest: SnapshotManifest }>; life: Map<string, Life>;
  replacedIn: Map<string, string[]>; docs: DocsObjects | null; topicsByUrl: Map<string, string[]>;
  /** Page key of an extension's base object, once page keys are known. */
  basePage?: (o: AlObject) => string | null;
}

/** Everything the object pages need, read once. */
export function loadObjectWorld(dataDir: string, contentDir: string): ObjectWorld {
  const v = loadConfig<Versions>("versions");
  const majors = Object.keys(v.majors).filter((m) => exists(resolve(snapshotDir(dataDir, m, "w1"), "manifest.json"))).sort((a, b) => Number(a) - Number(b));
  const order = [...v.narrative_order.filter((m) => majors.includes(m)), ...majors.filter((m) => !v.narrative_order.includes(m))];
  const preferred: ObjectWorld["preferred"] = new Map();
  const life = new Map<string, Life & { hash: string }>();
  const byMajor = new Map<string, Map<string, AlObject>>();
  for (const m of majors) {
    const all = new Map<string, AlObject>();
    for (const part of ["w1", APPS]) for (const o of readSnapshot(dataDir, m, part)) if (!all.has(objectKey(o))) all.set(objectKey(o), o);
    byMajor.set(m, all);
    for (const [k, o] of all) {
      const l = life.get(k);
      if (!l) life.set(k, { versions: [m], changed: [], hash: o.hash });
      else { l.versions.push(m); if (l.hash !== o.hash) l.changed.push(m); l.hash = o.hash; }
    }
  }
  for (const m of order) {
    const man = (part: string) => readJson<SnapshotManifest>(resolve(snapshotDir(dataDir, m, part), "manifest.json"));
    const w1m = man("w1");
    const appm = exists(resolve(snapshotDir(dataDir, m, APPS), "manifest.json")) ? man(APPS) : w1m;
    for (const [k, o] of byMajor.get(m)!) if (!preferred.has(k)) preferred.set(k, { obj: o, major: m, manifest: w1m.apps.includes(o.app ?? "") ? w1m : appm });
  }
  // countries that replace an object, in the newest major they have
  const replacedIn = new Map<string, string[]>();
  for (const cc of countriesOf(dataDir)) {
    const m = [...majors].reverse().find((x) => exists(resolve(snapshotDir(dataDir, x, cc), "manifest.json")));
    if (!m) continue;
    for (const o of readSnapshot(dataDir, m, cc)) { const k = objectKey(o); if (life.has(k)) replacedIn.set(k, [...(replacedIn.get(k) ?? []), cc]); }
  }
  const docsPath = resolve(dataDir, "index", "docs-objects.json");
  const topicsByUrl = new Map<string, string[]>();
  for (const f of listFiles(resolve(contentDir, "topics"), ".md")) {
    const fm = matter(readText(f)).data as { id?: string; links?: { learn?: string[] } };
    for (const u of fm.links?.learn ?? []) topicsByUrl.set(u, [...(topicsByUrl.get(u) ?? []), fm.id!]);
  }
  return { majors, preferred, life: new Map([...life].map(([k, { hash: _h, ...l }]) => [k, l])), replacedIn, docs: exists(docsPath) ? readJson<DocsObjects>(docsPath) : null, topicsByUrl };
}
function countriesOf(dataDir: string): string[] {
  const set = new Set<string>();
  const root = resolve(dataDir, "code");
  if (!exists(root)) return [];
  for (const m of readdirSync(root).filter((d) => /^\d+$/.test(d))) for (const cc of readdirSync(resolve(root, m))) if (cc !== "w1" && cc !== APPS) set.add(cc);
  return [...set].sort();
}

export function renderObjectPage(o: AlObject, w: ObjectWorld, major: string, manifest: SnapshotManifest, now: Date, hasLocalization: (cc: string) => boolean): string {
  const key = objectKey(o);
  const life = w.life.get(key) ?? { versions: [major], changed: [] };
  const docs = w.docs?.by_object[key] ?? [];
  const topics = [...new Set(docs.flatMap((d) => w.topicsByUrl.get(d.url) ?? []))].sort();
  const countries = (w.replacedIn.get(key) ?? []).sort();
  const events = o.procedures.filter((p) => p.event && p.event !== "subscriber");
  const subs = o.procedures.filter((p) => p.subscribes_to);
  const pub = o.procedures.filter((p) => !p.event && p.scope !== "local");
  const local = o.procedures.filter((p) => !p.event && p.scope === "local").length;
  const deps = deprecations([o]);
  const src = githubBlob(manifest.repo, manifest.commit, o.file);
  const versions = `BC${life.versions[0]}${life.versions.length > 1 ? `-${life.versions.at(-1)}` : ""}`;
  // our snapshots start at the oldest major: an object already there may be decades old, so "introduced" is unknown
  const sinceOldest = life.versions[0] === w.majors[0];
  const removedAfter = life.versions.at(-1) !== w.majors.at(-1);
  const summary = [
    `${titleOf(o)}${o.app ? ` in ${o.app}` : ""}${o.namespace ? ` (${o.namespace})` : ""}${o.extends ? `, extends "${o.extends}"` : ""}.`,
    `${[o.fields.length ? `${o.fields.length} fields` : "", o.values.length ? `${o.values.length} values` : "", pub.length ? `${pub.length} public procedures` : "", events.length ? `${events.length} events` : "", subs.length ? `${subs.length} event subscribers` : ""].filter(Boolean).join(", ")}.`,
    `${sinceOldest ? `Present since at least BC${life.versions[0]}` : `Introduced in BC${life.versions[0]}`}${life.versions.at(-1) !== life.versions[0] ? `, still in BC${life.versions.at(-1)}` : ""}${life.changed.length ? `, changed in ${life.changed.map((v) => `BC${v}`).join(", ")}` : ""}${removedAfter ? `, gone after BC${life.versions.at(-1)}` : ""}.`,
    o.obsolete && o.obsolete.state !== "No" ? `Obsolete (${o.obsolete.state}${o.obsolete.tag ? ` since ${o.obsolete.tag}` : ""}).` : "",
  ].filter((x) => x && x !== ".").join(" ").replace(/\.\s*\./g, ".");
  const fm = {
    id: `object/${objectPageKey(o)}`, type: "object", title: titleOf(o), summary, tier: "official", language: "en",
    tags: [o.type, ...(o.app ? [o.app.toLowerCase()] : [])],
    versions: { introduced: sinceOldest ? null : life.versions[0], last_changed: life.changed.at(-1) ?? null, deprecated: o.obsolete?.tag ?? null },
    review: { state: "unreviewed", by: null, at: null, flags: [] },
    generated: { at: now.toISOString(), pipeline: PIPELINE_VERSION, prompts: {}, input_hash: sha256(`${o.hash}|${life.versions}|${life.changed}|${countries}|${docs.map((d) => d.url)}`) },
    evidence: [{ kind: "code", url: src, title: `${o.file} (${manifest.branch})`, date: null, commit: manifest.commit, t: null, quote: null }, ...docs.map((d) => ({ kind: "learn", url: d.url, title: d.title, date: null, commit: null, t: null, quote: null }))],
    links: {
      learn: docs.map((d) => d.url), objects: w.basePage?.(o) ? [`object/${w.basePage(o)}`] : [], features: [], topics, localizations: countries.filter(hasLocalization).map((cc) => `localization/${cc}`),
      videos: [], posts: [], guidelines: [],
    },
    object_type: o.type, object_id: o.id, name: o.name, namespace: o.namespace, app: o.app, extends: o.extends,
    first_version: life.versions[0], last_version: life.versions.at(-1)!, present_in: life.versions, changed_in: life.changed, source_major: major,
    obsolete: o.obsolete, countries, ms_search_form_ids: docs.map((d) => d.id),
    counts: { fields: o.fields.length, procedures: o.procedures.length, events: events.length, subscribers: subs.length },
  };
  validateOrThrow("frontmatter.object", fm, `object page ${key}`);

  const lines: string[] = [`# ${titleOf(o)}`, "", `> ${summary}`, "",
    `${o.app ?? "unknown app"}${o.namespace ? ` · ${o.namespace}` : ""} · ${versions} · [source at ${manifest.commit.slice(0, 8)}](${src}) · facts from BC${major}`, "",
    ...(w.basePage?.(o) ? [`Extends [${cell(o.extends!)}](../${w.basePage(o)}.md).`, ""] : [])];
  const props = KEY_PROPS.filter((p) => o.properties[p] !== undefined);
  if (props.length) lines.push("## Properties", "", "| Property | Value |", "|---|---|", ...props.map((p) => `| ${p} | ${cell(o.properties[p])} |`), "");
  if (o.fields.length) {
    lines.push("## Fields", "", "| No. | Name | Type | Notes |", "|---|---|---|---|");
    for (const f of o.fields) lines.push(`| ${f.id} | ${cell(f.name)} | ${cell(f.type)} | ${[f.obsolete ? `obsolete ${f.obsolete.state}${f.obsolete.tag ? ` ${f.obsolete.tag}` : ""}` : "", f.clean?.length ? `#if not ${f.clean.join(", ")}` : ""].filter(Boolean).join("; ")} |`);
    lines.push("");
  }
  if (o.keys.length) lines.push("## Keys", "", ...o.keys.map((k) => `- ${cell(k.name)}: ${k.fields.map(cell).join(", ")}${k.clustered ? " (clustered)" : ""}`), "");
  if (o.values.length) lines.push("## Values", "", "| Ordinal | Name | Notes |", "|---|---|---|", ...o.values.map((v) => `| ${v.id} | ${cell(v.name) || "(blank)"} | ${v.obsolete ? `obsolete ${v.obsolete.state}${v.obsolete.tag ? ` ${v.obsolete.tag}` : ""}` : ""} |`), "");
  if (events.length) lines.push("## Events published", "", ...events.map((p) => `- \`${cell(sig(p))}\` (${p.event}${p.obsolete ? `, obsolete ${p.obsolete.tag ?? ""}` : ""})`), "");
  if (subs.length) lines.push("## Event subscriptions", "", ...subs.map((p) => `- ${cell(p.name)} subscribes to ${p.subscribes_to!.object_type} "${cell(p.subscribes_to!.object_name)}" ${cell(p.subscribes_to!.event)}${p.subscribes_to!.element ? ` (${cell(p.subscribes_to!.element)})` : ""}`), "");
  if (pub.length) lines.push("## Procedures", "", ...pub.map((p) => `- \`${cell(sig(p))}\`${p.scope !== "global" ? ` (${p.scope})` : ""}${p.obsolete ? ` (obsolete ${p.obsolete.tag ?? ""}${p.obsolete.reason ? `: ${cell(p.obsolete.reason)}` : ""})` : ""}${p.doc ? `: ${cell(p.doc)}` : ""}`), ...(local ? ["", `Plus ${local} local procedures.`] : []), "");
  else if (local) lines.push("## Procedures", "", `${local} local procedures, no public ones.`, "");
  if (o.triggers.length) lines.push("## Triggers", "", o.triggers.join(", "), "");
  lines.push("## Across versions", "", `- Present in: ${life.versions.map((v) => `BC${v}`).join(", ")}`, `- Changed (declaration) in: ${life.changed.length ? life.changed.map((v) => `BC${v}`).join(", ") : "none"}`,
    ...(o.obsolete && o.obsolete.state !== "No" ? [`- Obsolete: ${o.obsolete.state}${o.obsolete.tag ? ` since ${o.obsolete.tag}` : ""}${o.obsolete.reason ? `, "${cell(o.obsolete.reason)}"` : ""}`] : []), "");
  if (countries.length) lines.push("## Countries that replace it", "", countries.map((cc) => (hasLocalization(cc) ? `[${cc.toUpperCase()}](../../localizations/${cc}.md)` : cc.toUpperCase())).join(", "), "");
  if (docs.length) lines.push("## Documented on Microsoft Learn", "", ...docs.map((d) => `- [${cell(d.title)}](${d.url})`), "");
  if (deps.length) lines.push("## Deprecations", "", ...deps.map((d) => `- ${d.kind}${d.member ? ` ${cell(d.member)}` : ""}: ${d.state ?? "guarded"}${d.tag ? ` ${d.tag}` : ""}${d.clean.length ? ` (#if not ${d.clean.join(", ")})` : ""}${d.reason ? `, "${cell(d.reason)}"` : ""}`), "");
  lines.push("Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).", "");
  return `---\n${toYaml(fm, { lineWidth: 0, version: "1.1" })}---\n\n${lines.join("\n").replace(/\n{3,}/g, "\n\n").trim()}\n`;
}

// ---------------------------------------------------------------------------------------------- localizations

const countryNames = () => loadConfig<{ learn_local_functionality: Record<string, string> }>("countries").learn_local_functionality;
function memberSummary(d: ObjectDiff): string {
  const n = (xs: { change: string }[] | undefined, c: string) => xs?.filter((x) => x.change === c).length ?? 0;
  return [n(d.fields, "added") ? `+${n(d.fields, "added")} fields` : "", n(d.fields, "changed") ? `${n(d.fields, "changed")} fields changed` : "",
    n(d.events, "added") ? `+${n(d.events, "added")} events` : "", n(d.procedures, "added") ? `+${n(d.procedures, "added")} procedures` : "",
    n(d.procedures, "changed") ? `${n(d.procedures, "changed")} procedures changed` : "", d.properties?.length ? `${d.properties.length} properties` : ""].filter(Boolean).join(", ") || "body changes only";
}

export function renderLocalizationPage(cc: string, d: AlDiff, older: { major: string; summary: Record<string, unknown> }[], hasObjectPage: (key: string) => string | null, topic: string | null, now: Date): string {
  const name = countryNames()[cc.toUpperCase()] ?? cc.toUpperCase();
  const added = d.objects.filter((o) => o.change === "added"), replaced = d.objects.filter((o) => o.change === "replaced"), removed = d.objects.filter((o) => o.change === "removed");
  const fieldsAdded = Number(d.summary.fields_added ?? 0), eventsAdded = Number(d.summary.events_added ?? 0);
  const summary = `${name} (${cc.toUpperCase()}) localization of Business Central in BC${d.to.version}: ${added.length} objects of its own, ${replaced.length} W1 objects changed (${fieldsAdded} fields and ${eventsAdded} events added)${removed.length ? `, ${removed.length} W1 objects dropped` : ""}. From the code; country apps outside the Base Application are not included yet.`;
  const fm = {
    id: `localization/${cc}`, type: "localization", title: `${name} (${cc.toUpperCase()})`, summary, tier: "official", language: "en", tags: ["localization", cc],
    review: { state: "unreviewed", by: null, at: null, flags: [] },
    generated: { at: now.toISOString(), pipeline: PIPELINE_VERSION, prompts: {}, input_hash: sha256(JSON.stringify([d.from, d.to, d.summary])) },
    evidence: [{ kind: "code", url: `https://github.com/microsoft/BCApps`, title: `country diff ${d.to.version}-${cc}`, date: null, commit: d.to.commit, t: null, quote: null }],
    links: { learn: [], objects: replaced.map((o) => hasObjectPage(o.key)).filter((x): x is string => !!x).map((p) => `object/${p}`), features: [], topics: topic ? [topic] : [], localizations: [], videos: [], posts: [], guidelines: [] },
    country: cc.toUpperCase(), version: d.to.version, w1_version: d.from.version, added_objects: added.length, replaced_objects: replaced.length, removed_objects: removed.length,
    added_fields: fieldsAdded, added_events: eventsAdded, learn_folder: countryNames()[cc.toUpperCase()] ? `LocalFunctionality/${countryNames()[cc.toUpperCase()]}` : null,
  };
  validateOrThrow("frontmatter.localization", fm, `localization page ${cc}`);
  const lines = [`# ${name} (${cc.toUpperCase()})`, "", `> ${summary}`, "",
    `BC${d.to.version} · country layer against W1 · ${topic ? `Learn: [local functionality](../topics/${topic.replace(/^topic\//, "")}.md)` : "no Learn local functionality hub found"}`, ""];
  if (replaced.length) {
    lines.push("## W1 objects this country changes", "", "| Object | Changes |", "|---|---|");
    for (const o of replaced) { const p = hasObjectPage(o.key); lines.push(`| ${p ? `[${cell(o.key)} "${cell(o.name)}"](../objects/${p}.md)` : `${cell(o.key)} "${cell(o.name)}"`} | ${memberSummary(o)} |`); }
    lines.push("");
  }
  if (added.length) lines.push("## Objects of its own", "", "Country-only objects have no object page yet (their ids repeat across countries).", "", ...added.map((o) => `- ${cell(o.key)} "${cell(o.name)}"`), "");
  if (removed.length) lines.push("## W1 objects it drops", "", ...removed.map((o) => { const p = hasObjectPage(o.key); return `- ${p ? `[${cell(o.key)} "${cell(o.name)}"](../objects/${p}.md)` : cell(o.key)}`; }), "");
  if (older.length) lines.push("## Other versions", "", ...older.map((x) => `- BC${x.major}: ${x.summary.objects} objects differ from W1 (${x.summary.fields_added} fields, ${x.summary.events_added} events added)`), "");
  lines.push("Source: country layer of the Base Application compared with W1 of the same version (data/code/diffs/country/).", "");
  return `---\n${toYaml(fm, { lineWidth: 0, version: "1.1" })}---\n\n${lines.join("\n").replace(/\n{3,}/g, "\n\n").trim()}\n`;
}

// ---------------------------------------------------------------------------------------------- run

export interface CodePagesRun { objects: number; written: number; removed: number; localizations: number }

export function renderCodePages(dataDir: string, contentDir: string, now = new Date()): CodePagesRun {
  const w = loadObjectWorld(dataDir, contentDir);
  const run: CodePagesRun = { objects: 0, written: 0, removed: 0, localizations: 0 };
  if (!w.majors.length) return run;
  // localization diffs first: object pages link the countries that have a page
  const diffDir = resolve(dataDir, "code", "diffs", "country");
  const byCountry = new Map<string, { major: string; path: string }[]>();
  for (const f of exists(diffDir) ? readdirSync(diffDir).filter((n) => n.endsWith(".json")) : []) {
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
  const wanted = new Set<string>();
  for (const [k, { obj, major, manifest }] of w.preferred) {
    const pk = pageKeys.get(k);
    if (!pk) continue;
    wanted.add(pk);
    if (writeIfChanged(objectPagePath(contentDir, pk), renderObjectPage(obj, w, major, manifest, now, hasLoc))) run.written++;
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
    const page = renderLocalizationPage(cc, d, older.map((x) => ({ major: x.major, summary: readJson<AlDiff>(x.path).summary })), (key) => pageKeys.get(key) ?? null, topicFor(cc), now);
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
    "> subscriptions, obsolete state, versions, countries that replace it, Learn pages naming it. Frontmatter: schemas/frontmatter.object.json.", "",
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
