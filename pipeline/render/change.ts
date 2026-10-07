/**
 * Change pages (D61, spec section 4.7): content/changes/<repo>/<n>.md per merged pull request that touches AL source,
 * plus content/changes/llms.txt and data/code/changes-by-object.json (the object pages' "Recent changes").
 *
 * Deterministic from the change record (data/changes/<repo>/<n>.json) and the extraction. Tier official: metadata of
 * Microsoft's code (D10), our summary, at most one verbatim quote under 25 words, never the body or a patch. Objects
 * are linked only when their page exists, so a join against a newer snapshot never produces a dead link.
 */
import { relative, resolve } from "node:path";
import matter from "gray-matter";
import { stringify as toYaml } from "yaml";
import { exists, listFiles, readJson, readJsonOr, readText, removeIfExists, writeJson, writeText } from "../lib/fsx.js";
import type { Manifest, ManifestItem } from "../lib/manifest.js";
import { validateOrThrow } from "../lib/schema.js";
import { sha256 } from "../lib/text.js";
import type { StageContext, StageHandler } from "../orchestrator/execute.js";
import { titleKey } from "../changes/classify.js";
import { loadFileIndex } from "../code/files-index.js";
import { changeNumber, changeRecordPath, changeRepo, joinRecord, readChangeRecord, type ChangeRecord } from "../fetch/change.js";
import { readChangeExtraction, type ChangeExtraction } from "../extract/change.js";
import { activityPath, backportsPath, repoSlug, type Activity, type Backport } from "../ingest/github-prs.js";
import { loadSources } from "../lib/config.js";
import { PIPELINE_VERSION } from "../version.js";

const cell = (s: string) => s.replace(/\|/g, "\\|").replace(/\s+/g, " ").trim();
const plural = (n: number, w: string) => `${n} ${w}${n === 1 ? "" : "s"}`;
const stable = (p: string) => p.replace(/^(generated:\n {2}at: ).*$/m, "$1");
const TYPE_LABEL: Record<string, string> = { table: "Table", tableextension: "Table extension", page: "Page", pageextension: "Page extension", codeunit: "Codeunit", report: "Report", reportextension: "Report extension", query: "Query", xmlport: "XMLport", enum: "Enum", enumextension: "Enum extension", interface: "Interface", permissionset: "Permission set", permissionsetextension: "Permission set extension", profile: "Profile", controladdin: "Control add-in", entitlement: "Entitlement" };
export const objectTitle = (o: { type: string; id: number | null; name: string }) => `${TYPE_LABEL[o.type] ?? o.type}${o.id !== null && o.id !== undefined ? ` ${o.id}` : ""} "${o.name}"`;

export const changePageKey = (item: Pick<ManifestItem, "id" | "meta">) => `${repoSlug(changeRepo(item))}/${changeNumber(item)}`;
export const changePagePath = (contentDir: string, pageKey: string) => resolve(contentDir, "changes", `${pageKey}.md`);

/** Backports of a change: by the number their body names, or by the same title without its branch prefix. */
export function backportsFor(rec: Pick<ChangeRecord, "number" | "title">, all: Record<string, Backport[]>): Backport[] {
  const k = titleKey(rec.title);
  const byTitle = (all.unmatched ?? []).filter((b) => b.title_key === k);
  const seen = new Set<number>();
  return [...(all[String(rec.number)] ?? []), ...byTitle].filter((b) => !seen.has(b.number) && seen.add(b.number))
    .sort((a, b) => a.merged_at.localeCompare(b.merged_at) || a.number - b.number);
}

export function renderChangePage(item: ManifestItem, rec: ChangeRecord, x: ChangeExtraction, backports: Backport[], contentDir: string, now: Date): string {
  const pk = changePageKey(item);
  const hasPage = (p: string) => exists(resolve(contentDir, "objects", `${p}.md`));
  // one line per object, however many of its files changed (a table and its country copies)
  const objects = [...new Map(rec.join.objects.map((o) => [o.page, o])).values()];
  const linked = objects.filter((o) => hasPage(o.page));
  const systems = rec.systems.length ? rec.systems : x.systems;
  const day = rec.merged_at.slice(0, 10);
  const repoShort = repoSlug(rec.repo);
  const summary = x.summary || `${rec.title} (merged into ${rec.base} on ${day}).`;
  const fm = {
    id: `change/${pk}`, type: "change", title: `#${rec.number} ${rec.title}`, summary, tier: "official", language: "en",
    tags: [...new Set([x.change_kind, rec.base, ...(rec.major ? [`bc${rec.major}`] : []), ...objects.slice(0, 6).map((o) => `${o.type} ${o.name}`.toLowerCase())])].slice(0, 10),
    ...(systems[0] ? { system: systems[0] } : {}),
    review: { state: item.review?.state ?? "unreviewed", by: item.review?.by ?? null, at: item.review?.at ?? null, flags: item.flags ?? [] },
    generated: { at: now.toISOString(), pipeline: PIPELINE_VERSION, prompts: { "extract-change": x.prompt_version }, input_hash: rec.merge_commit_sha ?? null },
    evidence: [{ kind: "code", url: rec.url, title: `${rec.repo}#${rec.number}: ${rec.title}`, date: day, commit: rec.merge_commit_sha, t: null, quote: x.quote }],
    links: { learn: [], objects: linked.map((o) => `object/${o.page}`), features: [], topics: [], localizations: [], videos: [], posts: [], guidelines: [], changes: [] },
    number: rec.number, repo: rec.repo, source_id: rec.source, url: rec.url, kind: "pr", base_branch: rec.base, major: rec.major, merged_at: rec.merged_at,
    author: rec.author, author_type: rec.author_type, community_contribution: rec.community_contribution, labels: rec.labels,
    change_class: rec.change_class, change_kind: x.change_kind, behavior_change: x.behavior_change, breaking: x.breaking,
    files: { count: rec.totals.files, additions: rec.totals.additions, deletions: rec.totals.deletions, al: rec.totals.al }, apps: rec.apps,
    objects_touched: objects.map((o) => ({ key: o.key, page: hasPage(o.page) ? o.page : null, type: o.type, id: o.id, name: o.name, app: o.app, status: o.status })),
    objects_unjoined: rec.join.unjoined.map((u) => ({ path: u.path, status: u.status, reason: u.reason })),
    obsoletions: x.obsoletions, backports: backports.map((b) => ({ number: b.number, base: b.base, url: b.url })),
    fixes_issues: rec.fixes_issues, work_items: rec.work_items, systems, quote: x.quote,
    joined_against: { major: rec.join.major, commit: rec.join.commit },
  };
  validateOrThrow("frontmatter.change", fm, `change page ${pk}`);
  const issueOf = new Map((rec.issues ?? []).map((i) => [i.number, i]));
  const ghIssue = (n: number) => { const i = issueOf.get(n); return `[#${n}${i ? ` ${cell(i.title)}` : ""}](https://github.com/${rec.repo}/issues/${n})${i ? ` (${i.state})` : ""}`; };
  const lines = [`# #${rec.number} ${rec.title}`, "", `> ${summary}`, "",
    `[Pull request](${rec.url}) · merged into \`${rec.base}\`${rec.major ? ` (BC${rec.major})` : ""} on ${day}${rec.author ? ` by ${rec.author}${rec.community_contribution ? " (community contribution)" : ""}` : ""} · ${plural(rec.totals.files, "file")} (+${rec.totals.additions} -${rec.totals.deletions}), ${rec.totals.al} AL · ${x.change_kind} · tier official · **unreviewed** (machine-generated)`, ""];
  lines.push("## What changed", "", ...x.key_points.map((k) => `- ${k}`));
  if (x.breaking) lines.push("- Breaking: existing extensions can stop compiling or working.");
  else if (x.behavior_change) lines.push("- Behaviour changes for users or extensions.");
  lines.push("");
  if (objects.length || rec.join.unjoined.length) {
    lines.push("## AL objects touched", "");
    for (const o of objects) lines.push(`- ${hasPage(o.page) ? `[${cell(objectTitle(o))}](../../objects/${o.page}.md)` : cell(objectTitle(o))}${o.app ? `, ${o.app}` : ""}${o.cc !== "w1" ? ` (${o.cc.toUpperCase()} layer)` : ""}: ${o.status}`);
    // an added file waits for tonight's snapshot; a modified one is in an app the snapshot does not cover
    for (const u of rec.join.unjoined) lines.push(`- \`${cell(u.path)}\`: ${u.status}${u.reason === "not-in-snapshot" ? `, not in the BC${rec.join.major ?? "?"} snapshot${u.status === "added" ? " yet" : ""}` : ""}`);
    lines.push("");
  }
  if (x.obsoletions.length) lines.push("## Obsoletions", "", ...x.obsoletions.map((o) => `- ${cell(o.object)}${o.member ? `: ${cell(o.member)}` : ""}${o.replacement ? `, replaced by ${cell(o.replacement)}` : ""}`), "");
  if (backports.length) lines.push("## Also merged into", "", ...backports.map((b) => `- [#${b.number}](${b.url}) into \`${b.base}\` on ${b.merged_at.slice(0, 10)}`), "");
  const context = [
    rec.fixes_issues.length ? `- Fixes: ${rec.fixes_issues.map(ghIssue).join(", ")}` : "",
    rec.work_items.length ? `- Work items: ${rec.work_items.map((n) => `AB#${n}`).join(", ")}` : "",
    rec.labels.length ? `- Labels: ${rec.labels.map(cell).join(", ")}` : "",
    systems.length ? `- Systems: ${systems.join(", ")}` : "",
    x.quote ? `- From the description: "${cell(x.quote)}"` : "",
  ].filter(Boolean);
  if (context.length) lines.push("## Context", "", ...context, "");
  lines.push(`Source: metadata of a merged pull request in ${rec.repo} (${repoShort}): title, labels, changed paths and counts, with a summary in our words. No source text and no description beyond one short quote (D10, D61).`, "");
  return `---\n${toYaml(fm, { lineWidth: 0, version: "1.1" })}---\n\n${lines.join("\n").replace(/\n{3,}/g, "\n\n").trim()}\n`;
}

/** Write a change's page from its record and extraction; true when the file changed. */
export function writeChangePage(item: ManifestItem, ctx: Pick<StageContext, "dataDir" | "contentDir" | "now">): { written: boolean; path: string } | null {
  const rec = readChangeRecord(ctx.dataDir, item);
  const x = readChangeExtraction(ctx.dataDir, item);
  if (!rec || !x || rec.change_class !== "code") return null;
  const bps = backportsFor(rec, readJsonOr<Record<string, Backport[]>>(backportsPath(ctx.dataDir, rec.repo), {}));
  const page = renderChangePage(item, rec, x, bps, ctx.contentDir, ctx.now());
  const path = changePagePath(ctx.contentDir, changePageKey(item));
  const written = !exists(path) || stable(readText(path)) !== stable(page);
  if (written) writeText(path, page);
  return { written, path };
}

/** `linked`: re-join against the newest file index (the snapshot may have caught up since the fetch). */
export function changeLinked(): StageHandler {
  return async (item, ctx) => {
    const rec = readChangeRecord(ctx.dataDir, item);
    if (!rec) throw new Error("change record missing");
    const j = joinRecord(rec, ctx.dataDir);
    if (j.join.commit !== rec.join.commit) writeJson(changeRecordPath(ctx.dataDir, rec.repo, rec.number), { ...rec, ...j });
    return { data: { objects: j.join.objects.length, unjoined: j.join.unjoined.length, commit: j.join.commit } };
  };
}

export function changePublished(): StageHandler {
  return async (item, ctx) => {
    const r = writeChangePage(item, ctx);
    if (!r) throw new Error("change record or extraction missing");
    return { output_hash: sha256(stable(readText(r.path))), data: { path: relative(resolve(ctx.contentDir, ".."), r.path) } };
  };
}

/** Post-loop (`changes-relink`): records joined against an older snapshot that still miss AL paths are joined again. */
export function relinkChanges(manifest: Pick<Manifest, "list">, dataDir: string): number {
  let n = 0;
  for (const item of manifest.list("change")) {
    if (item.state !== "published") continue;
    const rec = readChangeRecord(dataDir, item);
    if (!rec || !rec.major || !rec.join.unjoined.some((u) => u.reason === "not-in-snapshot")) continue;
    const idx = loadFileIndex(dataDir, rec.major);
    if (!idx || idx.commit === rec.join.commit) continue;
    writeJson(changeRecordPath(dataDir, rec.repo, rec.number), { ...rec, ...joinRecord(rec, dataDir) });
    n++;
  }
  return n;
}

/** Re-render every published change page: titles, backports and joins move after the page was first written. */
export function rerenderChangePages(manifest: Pick<Manifest, "list">, ctx: Pick<StageContext, "dataDir" | "contentDir" | "now">): number {
  let n = 0;
  for (const item of manifest.list("change")) if (item.state === "published" && writeChangePage(item, ctx)?.written) n++;
  return n;
}

export interface ChangeRef { number: number; page: string; title: string; merged_at: string; major: string | null; base: string; kind: string; status: string }
export const changesByObjectPath = (dataDir: string) => resolve(dataDir, "code", "changes-by-object.json");
export const MAX_PER_OBJECT = 50;

/**
 * data/code/changes-by-object.json (`bcobs-changes-by-object@1`): per object page key, the changes with a page that
 * touched it, newest first, at most MAX_PER_OBJECT. Built from the pages, so only changes a reader can open count.
 */
export function renderChangesByObject(contentDir: string, dataDir: string): number {
  const by: Record<string, ChangeRef[]> = {};
  for (const f of listFiles(resolve(contentDir, "changes"), ".md")) {
    const fm = matter(readText(f)).data as Record<string, any>;
    if (fm.type !== "change") continue;
    const page = relative(resolve(contentDir, "changes"), f).replace(/\.md$/, "");
    for (const o of (fm.objects_touched ?? []) as { page: string | null; status: string }[]) {
      if (!o.page) continue;
      const list = (by[o.page] ??= []);
      if (!list.some((c) => c.page === page)) list.push({ number: fm.number, page, title: String(fm.title).replace(/^#\d+ /, ""), merged_at: String(fm.merged_at).slice(0, 10), major: fm.major ?? null, base: fm.base_branch, kind: fm.change_kind, status: o.status });
    }
  }
  const out: Record<string, unknown> = { schema: "bcobs-changes-by-object@1" };
  for (const k of Object.keys(by).sort()) out[k] = by[k].sort((a, b) => b.merged_at.localeCompare(a.merged_at) || b.number - a.number).slice(0, MAX_PER_OBJECT);
  const p = changesByObjectPath(dataDir);
  const text = `${JSON.stringify(out)}\n`;
  if (!exists(p) || readText(p) !== text) writeText(p, text);
  return Object.keys(by).length;
}

/** The activity lists (open pull requests, issues, releases) of every pull-request source, for the index and the site. */
export function loadActivity(dataDir: string): { repo: string; activity: Activity }[] {
  return loadSources().filter((s) => s.kind === "github-pr" && s.enabled && s.repo).map((s) => ({ repo: s.repo!, activity: readJsonOr<Activity>(activityPath(dataDir, s.repo!), { open: [], issues: [], releases: [] }) }))
    .filter((x) => x.activity.open.length || x.activity.issues.length || x.activity.releases.length);
}

/** content/changes/llms.txt: every change page, newest first; then what is open and the releases, per repository. */
export function renderChangeIndex(contentDir: string, dataDir?: string): number {
  const dir = resolve(contentDir, "changes");
  const rows = listFiles(dir, ".md").map((f) => ({ rel: relative(dir, f), fm: matter(readText(f)).data as any })).filter((r) => r.fm.type === "change")
    .sort((a, b) => String(b.fm.merged_at).localeCompare(String(a.fm.merged_at)) || b.fm.number - a.fm.number);
  const idx = resolve(dir, "llms.txt");
  if (!rows.length) { removeIfExists(idx); return 0; }
  const text = ["# BC Observatory: code changes", "", "> Merged pull requests of Microsoft's Business Central code (microsoft/BCApps) that touch AL source: what changed, in our words,",
    "> joined by exact file path to the AL object pages. Tier official, metadata only. Frontmatter: schemas/frontmatter.change.json.", "", `${rows.length} changes, newest first.`, "",
    ...rows.map((r) => `- [${cell(r.fm.title)}](${r.rel}): ${cell(r.fm.summary)} (${r.fm.base_branch}, ${String(r.fm.merged_at).slice(0, 10)}, ${r.fm.change_kind})`), "",
    ...(dataDir ? loadActivity(dataDir).flatMap(({ repo, activity: a }) => [
      `## ${repo}: upcoming`, "", "Open pull requests (no page until merged), most recently updated first; then the newest open issues and the releases.", "",
      ...a.open.slice(0, 30).map((p) => `- [#${p.number} ${cell(p.title)}](${p.url}) (open into ${p.base}${p.draft ? ", draft" : ""}, updated ${p.updated_at.slice(0, 10)})`),
      ...(a.issues.length ? ["", "Open issues:", "", ...a.issues.slice(0, 20).map((i) => `- [#${i.number} ${cell(i.title)}](${i.url}) (${i.created_at.slice(0, 10)}${i.labels.length ? `, ${i.labels.map(cell).join(", ")}` : ""})`)] : []),
      ...(a.releases.length ? ["", "Releases:", "", ...a.releases.slice(0, 10).map((x) => `- [${cell(x.name)}](${x.url}) (${x.published_at?.slice(0, 10) ?? "undated"}${x.prerelease ? ", prerelease" : ""})`)] : []), ""]) : [])].join("\n");
  if (!exists(idx) || readText(idx) !== text) writeText(idx, text);
  return rows.length;
}
