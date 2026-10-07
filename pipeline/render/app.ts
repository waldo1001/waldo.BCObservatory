/**
 * First-party app pages (D65, discovery spec 3.6 and 6.2), deterministic, from what the other stages already wrote:
 * content/apps/<slug>.md + content/apps/llms.txt, one page per app folder of the apps snapshots
 * (data/code/<major>/apps/manifest.json).
 *
 * - objects: the object pages under content/objects/ whose `app` is the app (names, captions, hubs)
 * - "What Learn documents it": the hubs those object pages link (`links.topics`, a table's inherited hubs included)
 * - "Videos and posts": items whose `objects_mentioned` resolve to the app's objects by exact name (link/mentions.ts)
 * - "Roadmap": features whose title contains the app name, case-insensitive, listed as possibly related: the one name
 *   match on the page, and it says so
 * Facts from the code pillar and the joins; nothing machine-written. The Related block is the site's, from
 * data/links/related.json, so a neighbour never changes this page's input hash.
 */
import { relative, resolve } from "node:path";
import { stringify as toYaml } from "yaml";
import { appSlug, firstPartyApps } from "../lib/apps.js";
import { loadConfig } from "../lib/config.js";
import { exists, listFiles, readJsonOr, readText, removeIfExists, writeText } from "../lib/fsx.js";
import { validateOrThrow } from "../lib/schema.js";
import { objectSystem } from "../lib/systems.js";
import { versionRanges } from "../lib/versions.js";
import { sha256 } from "../lib/text.js";
import { mentionedObjects, objectByName } from "../link/mentions.js";
import { frontmatterOf } from "../link/related.js";
import { PIPELINE_VERSION } from "../version.js";

const LINK_CAP = 200;
const cell = (s: string) => s.replace(/\|/g, "\\|").replace(/\s+/g, " ").trim();
const TYPE_NOUN: Record<string, [string, string]> = {
  table: ["table", "tables"], tableextension: ["table extension", "table extensions"], page: ["page", "pages"], pageextension: ["page extension", "page extensions"],
  codeunit: ["codeunit", "codeunits"], report: ["report", "reports"], reportextension: ["report extension", "report extensions"], query: ["query", "queries"],
  xmlport: ["XMLport", "XMLports"], enum: ["enum", "enums"], enumextension: ["enum extension", "enum extensions"], interface: ["interface", "interfaces"],
  permissionset: ["permission set", "permission sets"], permissionsetextension: ["permission set extension", "permission set extensions"],
  entitlement: ["entitlement", "entitlements"], profile: ["profile", "profiles"], controladdin: ["control add-in", "control add-ins"],
  pagecustomization: ["page customization", "page customizations"], dotnet: ["DotNet package", "DotNet packages"],
};
const noun = (type: string, n: number) => `${n} ${(TYPE_NOUN[type] ?? [type, `${type}s`])[n === 1 ? 0 : 1]}`;
const TYPE_ORDER = ["table", "tableextension", "page", "pageextension", "report", "reportextension", "codeunit", "query", "xmlport", "enum", "enumextension", "interface", "permissionset", "permissionsetextension", "entitlement", "profile", "controladdin", "pagecustomization", "dotnet"];
const typeRank = (t: string) => { const i = TYPE_ORDER.indexOf(t); return i < 0 ? 99 : i; };
/** "BC28-30", "BC28, BC30" (D72); "no snapshot" when the app is in none. */
export const versionsLabel = (ms: readonly string[]) => (ms.length ? versionRanges(ms) : "no snapshot");

export interface AppObject { id: string; pk: string; title: string; type: string; oid: number | null; name: string; caption: string | null; namespace: string | null; topics: string[]; present_in: string[] }
export interface AppHub { id: string; title: string; path: string[] }
export interface AppMedia { id: string; kind: "video" | "post"; title: string; date: string | null; objects: string[] }
export interface AppFeature { id: string; title: string; status: string | null; ga: string | null }
export interface AppSource { repo: string; commit: string; branch: string; folder: string }
export interface AppInput { name: string; majors: string[]; objects: AppObject[]; hubs: Map<string, AppHub>; media: AppMedia[]; features: AppFeature[]; source: AppSource | null }

/** The most common first two namespace segments; null when no object has a namespace. */
function namespaceRoot(objs: AppObject[]): string | null {
  const n = new Map<string, number>();
  for (const o of objs) if (o.namespace) { const r = o.namespace.split(".").slice(0, 2).join("."); n.set(r, (n.get(r) ?? 0) + 1); }
  return [...n].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))[0]?.[0] ?? null;
}
function appSystem(objs: AppObject[]): string {
  const n = new Map<string, number>();
  for (const o of objs) { const s = objectSystem(o.namespace); n.set(s, (n.get(s) ?? 0) + 1); }
  return [...n].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))[0]?.[0] ?? "development";
}

export function renderAppPage(a: AppInput, now: Date): string {
  const objs = [...a.objects].sort((x, y) => typeRank(x.type) - typeRank(y.type) || (x.oid ?? Infinity) - (y.oid ?? Infinity) || x.name.localeCompare(y.name));
  const ids = new Set(objs.map((o) => o.id));
  const byType = new Map<string, AppObject[]>();
  for (const o of objs) byType.set(o.type, [...(byType.get(o.type) ?? []), o]);
  const types = [...byType.keys()].sort((x, y) => byType.get(y)!.length - byType.get(x)!.length || typeRank(x) - typeRank(y));
  // hubs reached through the objects, most objects first
  const hubCount = new Map<string, number>();
  for (const o of objs) for (const h of new Set(o.topics)) if (a.hubs.has(h)) hubCount.set(h, (hubCount.get(h) ?? 0) + 1);
  const hubs = [...hubCount].sort((x, y) => y[1] - x[1] || a.hubs.get(x[0])!.title.localeCompare(a.hubs.get(y[0])!.title) || x[0].localeCompare(y[0]));
  const media = a.media.filter((m) => m.objects.some((o) => ids.has(o)))
    .sort((x, y) => (y.date ?? "").localeCompare(x.date ?? "") || x.id.localeCompare(y.id));
  const videos = media.filter((m) => m.kind === "video"), posts = media.filter((m) => m.kind === "post");
  const needle = a.name.toLowerCase();
  const features = a.features.filter((f) => f.title.toLowerCase().includes(needle)).sort((x, y) => (y.ga ?? "").localeCompare(x.ga ?? "") || x.id.localeCompare(y.id));
  const nsRoot = namespaceRoot(objs);
  const system = appSystem(objs);
  const versions = versionsLabel(a.majors);
  const summary = [
    `${a.name}${nsRoot ? ` (${nsRoot})` : ""}: ${objs.length} object${objs.length === 1 ? "" : "s"} in ${versions} (${types.slice(0, 5).map((t) => noun(t, byType.get(t)!.length)).join(", ")}${types.length > 5 ? ", ..." : ""})`,
    hubs.length ? `documented by ${hubs.length} Learn hub${hubs.length === 1 ? "" : "s"}` : "no Learn hub documents its objects yet",
    [videos.length ? `${videos.length} video${videos.length === 1 ? "" : "s"}` : "", posts.length ? `${posts.length} post${posts.length === 1 ? "" : "s"}` : ""].filter(Boolean).join(", ") || "",
  ].filter(Boolean).join("; ") + ".";
  const slug = appSlug(a.name);
  const facts = { objs: objs.map((o) => [o.id, o.title, o.caption, o.topics, o.present_in]), hubs, media: media.map((m) => [m.id, m.title, m.date]), features: features.map((f) => [f.id, f.title, f.status, f.ga]), majors: a.majors, source: a.source };
  const srcUrl = a.source ? `${a.source.repo}/tree/${a.source.commit}/${a.source.folder.split("/").map(encodeURIComponent).join("/")}` : null;
  const fm = {
    id: `app/${slug}`, type: "app", title: a.name, summary: summary.slice(0, 600), tier: "official", language: "en",
    tags: ["first-party app", system], system,
    review: { state: "unreviewed", by: null, at: null, flags: [] },
    generated: { at: now.toISOString(), pipeline: PIPELINE_VERSION, prompts: {}, input_hash: sha256(JSON.stringify(facts)) },
    evidence: a.source && srcUrl ? [{ kind: "code", url: srcUrl, title: `${a.source.folder} (${a.source.branch})`, date: null, commit: a.source.commit, t: null, quote: null }] : [],
    links: {
      learn: [], objects: objs.slice(0, LINK_CAP).map((o) => o.id), features: features.map((f) => f.id), topics: hubs.map(([h]) => h), localizations: [],
      videos: videos.map((m) => m.id), posts: posts.map((m) => m.id), guidelines: [],
    },
    app: a.name, namespace_root: nsRoot, present_in: a.majors,
    counts: { objects: objs.length, by_type: Object.fromEntries(types.map((t) => [t, byType.get(t)!.length])), hubs: hubs.length, videos: videos.length, posts: posts.length },
  };
  validateOrThrow("frontmatter.app", fm, `app page ${a.name}`);

  const lines = [`# ${a.name}`, "", `> ${summary}`, "",
    `First-party app · ${a.source ? `folder \`${a.source.folder}\`` : "BCApps"}${nsRoot ? ` · namespace \`${nsRoot}\`` : ""} · ${versions} · system ${system} · facts from the code pillar and the joins, nothing machine-written`, ""];
  if (hubs.length) {
    lines.push("## What Learn documents it", "", "The topic hubs whose Learn pages name this app's pages and reports (a table counts through the pages on it), by the number of the app's objects they document.", "");
    for (const [h, n] of hubs) {
      const hub = a.hubs.get(h)!;
      const crumbs = hub.path.slice(0, -1);
      lines.push(`- [${cell(hub.title)}](../topics/${h.replace(/^topic\//, "")}.md)${crumbs.length ? ` (${cell(crumbs.join(" > "))})` : ""}: ${n} object${n === 1 ? "" : "s"}`);
    }
    lines.push("");
  }
  lines.push("## Objects", "", `${objs.length} objects, by type.`, "");
  for (const t of [...byType.keys()].sort((x, y) => typeRank(x) - typeRank(y) || x.localeCompare(y))) {
    const list = byType.get(t)!;
    lines.push(`### ${(TYPE_NOUN[t] ?? [t, `${t}s`])[1].replace(/^./, (c) => c.toUpperCase())} (${list.length})`, "", "| Id | Name | Caption |", "|---|---|---|");
    for (const o of list) lines.push(`| ${o.oid ?? ""} | [${cell(o.name)}](../objects/${o.pk}.md) | ${o.caption ? cell(o.caption) : ""} |`);
    lines.push("");
  }
  if (media.length) {
    const title = new Map(objs.map((o) => [o.id, o.title]));
    lines.push("## Videos and posts", "", "Videos and posts that name this app's objects by exact type and name.", "");
    for (const m of media) {
      const named = m.objects.filter((o) => ids.has(o)).map((o) => title.get(o)!);
      const path = m.kind === "video" ? `../videos/${m.id.slice("video/".length)}.md` : `../posts/${m.id.slice("post/".length)}.md`;
      lines.push(`- [${cell(m.title)}](${path}) (${m.kind === "video" ? "video" : "community post"}${m.date ? `, ${m.date}` : ""}): names ${cell(named.slice(0, 3).join(", "))}${named.length > 3 ? ` and ${named.length - 3} more` : ""}`);
    }
    lines.push("");
  }
  if (features.length) {
    lines.push("## Roadmap", "", `Possibly related: these roadmap features have "${cell(a.name)}" in their title. A name match, the only one on this page; check the feature.`, "",
      ...features.map((f) => `- [${cell(f.title)}](../features/${f.id.slice("feature/".length)}.md)${f.status ? ` (${f.status}${f.ga ? `, GA ${f.ga}` : ""})` : ""}`), "");
  }
  lines.push(`Source: ${srcUrl ? `[${a.source!.folder}](${srcUrl})` : "microsoft/BCApps"}; objects from data/code/, hubs from data/index/docs-objects.json through the object pages.`, "");
  return `---\n${toYaml(fm, { lineWidth: 0, version: "1.1" })}---\n\n${lines.join("\n").replace(/\n{3,}/g, "\n\n").trim()}\n`;
}

// ---------------------------------------------------------------------------------------------- run

export interface AppPagesRun { apps: number; written: number; removed: number }

const stable = (p: string) => p.replace(/^(generated:\n {2}at: ).*$/m, "$1");

/** Write every app page and content/apps/llms.txt; remove pages of apps no snapshot lists any more. */
export function renderAppPages(dataDir: string, contentDir: string, now = new Date()): AppPagesRun {
  const run: AppPagesRun = { apps: 0, written: 0, removed: 0 };
  const apps = firstPartyApps(dataDir);
  const dir = resolve(contentDir, "apps");
  const pages = (section: string) => listFiles(resolve(contentDir, section), ".md").map((f) => frontmatterOf(readText(f))).filter((fm): fm is Record<string, any> => !!fm?.id);
  const objectPages = pages("objects").filter((fm) => fm.type === "object");
  const byApp = new Map<string, AppObject[]>();
  for (const fm of objectPages) {
    if (fm.country || !fm.app || !apps.has(String(fm.app))) continue;
    const pk = String(fm.id).slice("object/".length);
    byApp.set(String(fm.app), [...(byApp.get(String(fm.app)) ?? []), {
      id: fm.id, pk, title: String(fm.title), type: String(fm.object_type), oid: typeof fm.object_id === "number" ? fm.object_id : null, name: String(fm.name),
      caption: fm.caption ? String(fm.caption) : null, namespace: fm.namespace ?? null, topics: (fm.links?.topics ?? []).map(String), present_in: (fm.present_in ?? []).map(String),
    }]);
  }
  const hubData = readJsonOr<{ topics?: { id: string; title: string; breadcrumb: string[] }[] }>(resolve(dataDir, "hubs", "topics.json"), {}).topics ?? [];
  // only hubs with a page: the object pages name them, the validator checks every link
  const hubs = new Map(hubData.filter((h) => exists(resolve(contentDir, "topics", `${h.id.replace(/^topic\//, "")}.md`))).map((h) => [h.id, { id: h.id, title: h.title, path: [...h.breadcrumb, h.title] }]));
  const byName = objectByName(objectPages.map((fm) => ({ id: fm.id, fm })));
  const media: AppMedia[] = [...pages("videos"), ...pages("posts")].filter((fm) => fm.type === "video" || fm.type === "post")
    .map((fm) => ({ id: fm.id, kind: fm.type, title: String(fm.title), date: fm.published_at ? String(fm.published_at).slice(0, 10) : null, objects: mentionedObjects(fm, byName) }))
    .filter((m) => m.objects.length);
  const features: AppFeature[] = pages("features").filter((fm) => fm.type === "feature").map((fm) => ({ id: fm.id, title: String(fm.title), status: fm.status ?? null, ga: fm.ga_date ? String(fm.ga_date) : null }));
  const source = (name: string, majors: string[]): AppSource | null => {
    const m = majors.at(-1);
    const man = m ? readJsonOr<{ repo?: string; commit?: string; branch?: string } | null>(resolve(dataDir, "code", m, "apps", "manifest.json"), null) : null;
    const glob = loadConfig<{ code?: { bcapps?: { apps?: string } } }>("versions").code?.bcapps?.apps;
    return man?.repo && man.commit && glob ? { repo: man.repo, commit: man.commit, branch: man.branch ?? "", folder: glob.replace("*", name) } : null;
  };
  const keep = new Set<string>();
  const rows: { slug: string; name: string; system: string; objects: number; hubs: number }[] = [];
  for (const [name, majors] of [...apps].sort(([a], [b]) => a.localeCompare(b))) {
    const objs = byApp.get(name) ?? [];
    if (!objs.length) continue;
    const slug = appSlug(name);
    if (keep.has(slug)) continue; // two folder names with one slug: the first keeps it
    keep.add(slug);
    const page = renderAppPage({ name, majors, objects: objs, hubs, media, features, source: source(name, majors) }, now);
    const path = resolve(dir, `${slug}.md`);
    if (!exists(path) || stable(readText(path)) !== stable(page)) { writeText(path, page); run.written++; }
    const fm = frontmatterOf(page)!;
    rows.push({ slug, name, system: String(fm.system), objects: objs.length, hubs: Number(fm.counts?.hubs ?? 0) });
  }
  run.apps = keep.size;
  for (const f of listFiles(dir, ".md")) if (!keep.has(relative(dir, f).replace(/\.md$/, ""))) { removeIfExists(f); run.removed++; }
  const index = ["# BC Observatory: first-party apps", "",
    "> Microsoft's first-party apps in BCApps (src/Apps/W1), one page each: their objects by type, the Learn hubs that document them,",
    "> the videos and posts that name their objects, roadmap features with the app's name in the title. Frontmatter:",
    "> schemas/frontmatter.app.json. Related pages per app: data/links/related.json.", "",
    `${rows.length} apps:`, "",
    ...rows.map((r) => `- [${cell(r.name)}](${r.slug}.md): ${r.objects} objects, ${r.hubs} Learn hubs, system ${r.system}`), ""].join("\n");
  const idx = resolve(dir, "llms.txt");
  if (rows.length && (!exists(idx) || readText(idx) !== index)) writeText(idx, index);
  return run;
}
