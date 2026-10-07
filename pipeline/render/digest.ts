/**
 * Weekly digest (PLAN M4, D36), deterministic: content/digests/<YYYY-Www>.md + content/digests/llms.txt; the site
 * adds /rss.xml. Per ISO week (Monday to Sunday, UTC): roadmap features added or changed (snapshot diffs; the first
 * snapshot is not news), videos and community posts published, Learn pages changed (their last commit), the code
 * snapshots and version-diff summary, and the deprecation radar (Obsolete* by tag, CLEAN-guarded code whose cleanup
 * version has arrived). The nightly re-renders the current and the previous week (late arrivals); older weeks stay.
 */
import { readdirSync } from "node:fs";
import { relative, resolve } from "node:path";
import matter from "gray-matter";
import { stringify as toYaml } from "yaml";
import { exists, listFiles, readJson, readText, removeIfExists, writeText } from "../lib/fsx.js";
import type { ManifestItem } from "../lib/manifest.js";
import { validateOrThrow } from "../lib/schema.js";
import { sha256 } from "../lib/text.js";
import type { RoadmapEntry } from "../ingest/roadmap.js";
import type { SnapshotManifest } from "../code/job.js";
import type { AlDiff, Deprecation } from "../code/diff.js";
import { latestRoadmap } from "./feature.js";
import { postPageKey } from "./post.js";
import { loadSources } from "../lib/config.js";
import { activityPath, mergedLogPath, type Activity, type MergedKind } from "../ingest/github-prs.js";
import { loadNarrative, PROMPT_VERSION as NARR_V, STAGE as NARR_STAGE, type WeekNarrative } from "../summarize/changes-week.js";
import { reviewOf, type Review } from "../lib/review.js";
import { PIPELINE_VERSION } from "../version.js";

const cell = (s: string) => s.replace(/\|/g, "\\|").replace(/\s+/g, " ").trim();
const day = (d: Date) => d.toISOString().slice(0, 10);

/** ISO week of a date: { id: "2026-W41", start: Monday, end: Sunday } (UTC). */
export function isoWeek(d: Date): { id: string; start: string; end: string } {
  const t = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));
  const dow = t.getUTCDay() || 7;
  const monday = new Date(t); monday.setUTCDate(t.getUTCDate() - dow + 1);
  const thursday = new Date(monday); thursday.setUTCDate(monday.getUTCDate() + 3);
  const year = thursday.getUTCFullYear();
  const jan4 = new Date(Date.UTC(year, 0, 4));
  const week1 = new Date(jan4); week1.setUTCDate(jan4.getUTCDate() - ((jan4.getUTCDay() || 7) - 1));
  const n = Math.round((monday.getTime() - week1.getTime()) / (7 * 86_400_000)) + 1;
  const sunday = new Date(monday); sunday.setUTCDate(monday.getUTCDate() + 6);
  return { id: `${year}-W${String(n).padStart(2, "0")}`, start: day(monday), end: day(sunday) };
}

const inWeek = (date: string | null | undefined, w: { start: string; end: string }) => !!date && date.slice(0, 10) >= w.start && date.slice(0, 10) <= w.end;

export interface DigestInput { items: ManifestItem[]; dataDir: string; contentDir: string; currentMajor: string }

export function renderDigest(w: { id: string; start: string; end: string }, inp: DigestInput, now: Date): { page: string; counts: Record<string, number> } {
  const { items, dataDir, contentDir } = inp;
  // roadmap
  const roadmap = latestRoadmap(dataDir);
  const diffDir = resolve(dataDir, "roadmap", "diffs");
  const rdiffs = (exists(diffDir) ? readdirSync(diffDir) : []).filter((f) => f.endsWith(".json") && inWeek(f.slice(0, 10), w)).map((f) => readJson<{ from: string | null; added: string[]; changed: string[] }>(resolve(diffDir, f))).filter((d) => d.from);
  const rAdded = [...new Set(rdiffs.flatMap((d) => d.added))].filter((id) => roadmap.has(id));
  const rChanged = [...new Set(rdiffs.flatMap((d) => d.changed))].filter((id) => roadmap.has(id) && !rAdded.includes(id));
  const feature = (id: string) => { const e = roadmap.get(id) as RoadmapEntry; return `- [${cell(e.title)}](../features/${id}.md): ${e.area ?? "no area"}, ${e.status}${e.ga ? `, GA ${e.ga}` : ""}`; };
  // videos, posts, docs
  const pub = (i: ManifestItem) => i.state === "published";
  const videos = items.filter((i) => i.pillar === "video" && pub(i) && inWeek(i.published_at, w)).sort((a, b) => String(b.published_at).localeCompare(String(a.published_at)));
  const posts = items.filter((i) => i.pillar === "blog" && pub(i) && inWeek(i.published_at, w)).sort((a, b) => String(b.published_at).localeCompare(String(a.published_at)));
  const docs = items.filter((i) => i.pillar === "docs" && inWeek(i.published_at, w) && i.meta?.ms_topic !== "reference").sort((a, b) => String(b.published_at).localeCompare(String(a.published_at)));
  const vid = (i: ManifestItem) => { const id = i.id.slice(i.id.lastIndexOf("/") + 1); return exists(resolve(contentDir, "videos", `${id}.md`)) ? `- [${cell(i.title)}](../videos/${id}.md) (${i.source}, ${i.published_at!.slice(0, 10)})` : `- [${cell(i.title)}](${i.url}) (${i.source}, ${i.published_at!.slice(0, 10)})`; };
  const post = (i: ManifestItem) => { const pk = postPageKey(i); return exists(resolve(contentDir, "posts", `${pk}.md`)) ? `- [${cell(i.title)}](../posts/${pk}.md) (${i.source}, ${i.published_at!.slice(0, 10)})` : `- [${cell(i.title)}](${i.url}) (${i.source})`; };
  // code
  const codeDir = resolve(dataDir, "code");
  const snaps = (exists(codeDir) ? readdirSync(codeDir).filter((d) => /^\d+$/.test(d)) : []).sort((a, b) => Number(a) - Number(b))
    .map((m) => { const p = resolve(codeDir, m, "w1", "manifest.json"); return exists(p) ? readJson<SnapshotManifest>(p) : null; }).filter((x): x is SnapshotManifest => !!x);
  const vdir = resolve(codeDir, "diffs", "version");
  const vdiffs = (exists(vdir) ? readdirSync(vdir).filter((f) => f.endsWith(".json")).sort() : []).map((f) => readJson<AlDiff>(resolve(vdir, f)));
  // deprecation radar
  const depPath = resolve(codeDir, "deprecations", `${inp.currentMajor}.json`);
  const dep = exists(depPath) ? readJson<{ count: number; by_tag: Record<string, number>; items: Deprecation[] }>(depPath) : null;
  const overdue = dep ? dep.items.filter((d) => d.clean_version && Number(d.clean_version) <= Number(inp.currentMajor)) : [];
  const tags = dep ? Object.entries(dep.by_tag).filter(([t]) => t !== "untagged").sort((a, b) => b[0].localeCompare(a[0], "en", { numeric: true })).slice(0, 8) : [];

  // code changes (D61): every merged pull request counts (bots and backports too); pages for the AL-touching ones
  const merged: { repo: string; n: string; day: string; base: string; kind: MergedKind }[] = [];
  for (const s of loadSources().filter((x) => x.kind === "github-pr" && x.repo)) {
    const p = mergedLogPath(dataDir, s.repo!);
    if (exists(p)) for (const [n, [d, base, kind]] of Object.entries(readJson<Record<string, [string, string, MergedKind]>>(p))) if (inWeek(d, w)) merged.push({ repo: s.repo!, n, day: d, base, kind });
  }
  const changePages = listFiles(resolve(contentDir, "changes"), ".md").map((f) => ({ rel: relative(resolve(contentDir, "changes"), f).replace(/\.md$/, ""), fm: matterData(f) }))
    .filter((c) => c.fm?.type === "change" && inWeek(String(c.fm.merged_at), w)).sort((a, b) => String(b.fm.merged_at).localeCompare(String(a.fm.merged_at)));
  const behavior = changePages.filter((c) => c.fm.behavior_change || c.fm.breaking);
  const obsoleting = changePages.filter((c) => (c.fm.obsoletions ?? []).length);
  const counts = { roadmap_added: rAdded.length, roadmap_changed: rChanged.length, videos: videos.length, posts: posts.length, docs: docs.length, deprecations: dep?.count ?? 0, cleanup_due: overdue.length,
    changes: merged.length, changes_behavior: behavior.length, changes_obsoletions: obsoleting.length };
  const summary = `Business Central, week ${w.id} (${w.start} to ${w.end}): ${counts.videos} videos, ${counts.posts} community posts, ${counts.docs} Learn pages changed, ${counts.roadmap_added} roadmap features added and ${counts.roadmap_changed} changed, ${counts.changes} pull requests merged into the code (${counts.changes_behavior} changing behaviour); ${counts.deprecations} obsolete elements in BC${inp.currentMajor}, ${counts.cleanup_due} with their cleanup due.`;
  // the week's narrative is the only model text of a digest (D77); one Opus rejected is withheld (D21)
  const { story, review } = digestReview(loadNarrative(dataDir, w.id));
  const fm = {
    id: `digest/${w.id}`, type: "digest", title: `BC Observatory weekly: ${w.id}`, summary, tier: "mixed", language: "en", tags: ["digest"],
    review,
    generated: { at: now.toISOString(), pipeline: PIPELINE_VERSION, prompts: story ? { [NARR_STAGE]: NARR_V } : {}, input_hash: sha256(JSON.stringify([counts, videos.map((i) => i.id), posts.map((i) => i.id), rAdded, rChanged, changePages.map((c) => c.rel), loadNarrative(dataDir, w.id)?.input_hash ?? null])) },
    evidence: [], links: { learn: docs.slice(0, 50).map((i) => i.url), objects: [], features: [...rAdded, ...rChanged].map((id) => `feature/${id}`), topics: [], localizations: [], videos: videos.filter((i) => exists(resolve(contentDir, "videos", `${i.id.slice(i.id.lastIndexOf("/") + 1)}.md`))).map((i) => `video/${i.id.slice(i.id.lastIndexOf("/") + 1)}`), posts: posts.filter((i) => exists(resolve(contentDir, "posts", `${postPageKey(i)}.md`))).map((i) => `post/${postPageKey(i)}`), guidelines: [], changes: changePages.slice(0, 50).map((c) => `change/${c.rel}`) },
    week: w.id, range: { start: w.start, end: w.end }, sections: counts,
  };
  validateOrThrow("frontmatter.digest", fm, `digest ${w.id}`);
  const lines = [`# BC Observatory weekly: ${w.id}`, "", `> ${summary}`, "", `${w.start} to ${w.end} · machine-generated from the knowledge base · RSS: ../../rss.xml`, ""];
  lines.push("## Roadmap", "");
  if (rAdded.length || rChanged.length) lines.push(...(rAdded.length ? ["Added:", "", ...rAdded.map(feature), ""] : []), ...(rChanged.length ? ["Changed:", "", ...rChanged.map(feature), ""] : []));
  else lines.push("No roadmap changes this week.", "");
  lines.push("## Videos", "", ...(videos.length ? videos.slice(0, 60).map(vid) : ["No new videos with a page this week."]), "");
  lines.push("## Community posts", "", ...(posts.length ? posts.slice(0, 80).map(post) : ["No new posts with a page this week."]), "");
  lines.push("## Learn pages changed", "", ...(docs.length ? [`${docs.length} pages had commits this week${docs.length > 40 ? "; the 40 most recent" : ""}:`, "", ...docs.slice(0, 40).map((i) => `- [${cell(i.title)}](${i.url})`)] : ["No Learn page commits this week."]), "");
  lines.push("## Code", "", ...snaps.map((m) => `- BC${m.major}: ${m.branch} at ${m.commit.slice(0, 8)}, ${m.objects} W1 objects`),
    ...vdiffs.map((d) => `- BC${d.from.version} to BC${d.to.version}: ${d.summary.objects} objects differ (${d.summary.fields_added} fields, ${d.summary.events_added} events, ${d.summary.procedures_added} procedures added)`), "");
  lines.push("## Code changes", "");
  if (story) lines.push(`${story.text}`, "", `(${story.changes} changes summarised by Sonnet from the change pages; ${review.state === "reviewed" ? "reviewed, checked by Opus" : "unreviewed, model text not yet checked"}.)`, "");
  else if (review.state === "flagged") lines.push("The week's narrative was withheld after an Opus review found a problem.", "");
  if (merged.length) {
    const byBranch = new Map<string, Record<MergedKind, number>>();
    for (const m of merged) { const b = byBranch.get(`${m.repo} ${m.base}`) ?? { item: 0, bot: 0, backport: 0 }; b[m.kind]++; byBranch.set(`${m.repo} ${m.base}`, b); }
    lines.push(`${merged.length} pull requests merged, ${changePages.length} of them touch AL source and have a page:`, "",
      ...[...byBranch].sort((a, b) => a[0].localeCompare(b[0])).map(([k, c]) => `- ${k.replace(" ", ": ")}: ${c.item + c.bot + c.backport} merged (${c.bot} bots, ${c.backport} backports)`), "");
    if (behavior.length) lines.push(`Behaviour changes${behavior.length > 20 ? " (the 20 most recent)" : ""}:`, "", ...behavior.slice(0, 20).map((c) => `- [${cell(c.fm.title)}](../changes/${c.rel}.md) (${c.fm.base_branch}, ${c.fm.change_kind}${c.fm.breaking ? ", breaking" : ""})`), "");
    if (obsoleting.length) lines.push("Obsoletions:", "", ...obsoleting.flatMap((c) => (c.fm.obsoletions as { object: string; member: string | null }[]).map((o) => `- ${cell(o.object)}${o.member ? `: ${cell(o.member)}` : ""} ([#${c.fm.number}](../changes/${c.rel}.md))`)), "");
  } else lines.push("No pull requests merged this week, or the change pillar has not run yet.", "");
  const released = loadSources().filter((x) => x.kind === "github-pr" && x.repo).flatMap((x) => {
    const p = activityPath(dataDir, x.repo!);
    return exists(p) ? readJson<Activity>(p).releases.filter((r) => inWeek(r.published_at, w)).map((r) => ({ ...r, repo: x.repo! })) : [];
  });
  if (released.length) lines.push("Releases:", "", ...released.map((r) => `- [${cell(r.repo)} ${cell(r.name)}](${r.url}) (${r.published_at!.slice(0, 10)}${r.prerelease ? ", prerelease" : ""})`), "");

  lines.push("## Deprecation radar", "");
  if (dep) {
    lines.push(`${dep.count} obsolete or CLEAN-guarded elements in W1 of BC${inp.currentMajor}. Newest tags:`, "", "| Tag | Elements |", "|---|---|", ...tags.map(([t, n]) => `| ${t} | ${n} |`), "");
    if (overdue.length) {
      const byObj = new Map<string, number>();
      for (const d of overdue) byObj.set(`${d.key} "${d.object}"`, (byObj.get(`${d.key} "${d.object}"`) ?? 0) + 1);
      lines.push(`Cleanup due: ${overdue.length} elements are guarded by a CLEAN symbol at or below BC${inp.currentMajor} and still in the code. Most affected objects:`, "",
        ...[...byObj].sort((a, b) => b[1] - a[1]).slice(0, 15).map(([o, n]) => `- ${cell(o)}: ${n}`), "");
    }
  } else lines.push("No code snapshot yet.", "");
  return { page: `---\n${toYaml(fm, { lineWidth: 0, version: "1.1" })}---\n\n${lines.join("\n").replace(/\n{3,}/g, "\n\n").trim()}\n`, counts };
}

/** The narrative a digest shows and the page's review block: derived without one, its review's state with one. */
export function digestReview(n: WeekNarrative | null): { story: WeekNarrative | null; review: Review } {
  const rv = n?.review && n.review.input_hash === n.input_hash ? n.review : null;
  if (rv?.state === "flagged") return { story: null, review: { state: "flagged", by: rv.by, at: rv.at, flags: ["narrative-rejected"] } };
  return { story: n, review: reviewOf(!!n, rv) };
}

/** An older week's page keeps its content ("older weeks stay"); only its review block follows the narrative (D77). */
export function syncDigestReview(path: string, review: Review): boolean {
  const text = readText(path);
  const block = `review:\n  state: ${review.state}\n  by: ${review.by ?? "null"}\n  at: ${review.at ? JSON.stringify(review.at) : "null"}\n  flags: ${review.flags.length ? `\n${review.flags.map((f) => `    - ${f}`).join("\n")}` : "[]"}\n`;
  const next = text.replace(/^review:\n(?: {2}.*\n| {4}- .*\n)*/m, block);
  if (next === text) return false;
  writeText(path, next);
  return true;
}

const stable = (p: string) => p.replace(/^(generated:\n {2}at: ).*$/m, "$1");
function matterData(f: string): Record<string, any> { try { return matter(readText(f)).data; } catch { return {}; } }

/** Render the current week and `back` weeks before it; write only on change; refresh the index. */
export function renderDigests(inp: DigestInput, now: Date, back = 1): string[] {
  const written: string[] = [], rendered = new Set<string>();
  for (let i = back; i >= 0; i--) {
    const d = new Date(now); d.setUTCDate(d.getUTCDate() - 7 * i);
    const w = isoWeek(d);
    rendered.add(w.id);
    const { page } = renderDigest(w, inp, now);
    const path = resolve(inp.contentDir, "digests", `${w.id}.md`);
    if (!exists(path) || stable(readText(path)) !== stable(page)) { writeText(path, page); written.push(w.id); }
  }
  const dir = resolve(inp.contentDir, "digests");
  const files = listFiles(dir, ".md").map((f) => relative(dir, f)).sort().reverse();
  // older weeks are not re-rendered; their review block still says whether the page holds model text (D77)
  for (const f of files) {
    const id = f.replace(/\.md$/, "");
    if (/^\d{4}-W\d{2}$/.test(id) && !rendered.has(id)) syncDigestReview(resolve(dir, f), digestReview(loadNarrative(inp.dataDir, id)).review);
  }
  const idx = resolve(dir, "llms.txt");
  if (!files.length) { removeIfExists(idx); return written; }
  const text = ["# BC Observatory: weekly digests", "", "> What changed in Business Central each ISO week: roadmap, videos, community posts, Learn commits, code snapshots,", "> deprecation radar. Frontmatter: schemas/frontmatter.digest.json. RSS: ../rss.xml.", "",
    ...files.map((f) => `- [${f.replace(/\.md$/, "")}](${f})`), ""].join("\n");
  if (!exists(idx) || readText(idx) !== text) writeText(idx, text);
  return written;
}
