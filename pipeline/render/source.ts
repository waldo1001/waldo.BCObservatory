/**
 * Source footprints and coverage (PLAN M3, D39), deterministic, from the content pages:
 *
 * - content/sources/<id>.md per blog or channel with at least one page: what it covers (galaxy systems, topics,
 *   AL objects named, roadmap features it demonstrates), when (first and last item, items per quarter: the
 *   "flight path"), and its most recent items. Frontmatter: schemas/frontmatter.source.json.
 * - data/index/coverage.json: galaxy system × pillar (Learn pages, AL objects, videos, community posts, roadmap
 *   features): where Business Central is well covered and where it is thin. The site draws it as a heatmap.
 */
import { relative, resolve } from "node:path";
import matter from "gray-matter";
import { stringify as toYaml } from "yaml";
import { loadSources, taxonomy, type SourceDef } from "../lib/config.js";
import { exists, listFiles, readJson, readText, removeIfExists, writeText } from "../lib/fsx.js";
import { validateOrThrow } from "../lib/schema.js";
import { sha256 } from "../lib/text.js";
import { objectSystem } from "../link/graph.js";
import { PIPELINE_VERSION } from "../version.js";
import { reviewOf } from "../lib/review.js";
import { STATUS_LABEL } from "./feature.js";

const cell = (s: string) => s.replace(/\|/g, "\\|").replace(/\s+/g, " ").trim();
const stable = (p: string) => p.replace(/^(generated:\n {2}at: ).*$/m, "$1");
const top = (m: Map<string, number>, n: number) => [...m].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).slice(0, n).map(([id, weight]) => ({ id, weight }));
const quarter = (d: string) => `${d.slice(0, 4)}-Q${Math.floor((Number(d.slice(5, 7)) - 1) / 3) + 1}`;

interface Item { path: string; fm: Record<string, any> }
/** D79: what a source page prints for a roadmap feature, read from its feature page. Keyed by `feature/<id>`. */
export interface FeatureRef { title: string; area: string | null; status: string | null; ga_date: string | null }

/** D79: one roadmap feature line, by title, with area, status, GA month and how many items show it. */
function featureLine(id: string, count: number, noun: [string, string], ref?: FeatureRef): string {
  const n = id.replace(/^feature\//, "");
  if (!ref?.title) return `- [${n}](../features/${n}.md)`;
  const parts = [ref.area, ref.status ? (STATUS_LABEL as Record<string, string>)[ref.status] ?? ref.status : null, ref.ga_date ? `GA ${ref.ga_date}` : null, `${count} ${count === 1 ? noun[0] : noun[1]}`].filter(Boolean);
  return `- [${cell(ref.title)}](../features/${n}.md): ${parts.join(", ")}`;
}

export function renderSourcePage(src: SourceDef, items: Item[], now: Date, featureRefs: Map<string, FeatureRef> = new Map()): string {
  const sorted = [...items].sort((a, b) => String(a.fm.published_at ?? "").localeCompare(String(b.fm.published_at ?? "")));
  const systems = new Map<string, number>(), topics = new Map<string, number>(), objects = new Map<string, number>(), features = new Map<string, number>(), quarters = new Map<string, number>();
  for (const { fm } of sorted) {
    for (const s of [fm.system, ...(fm.systems ?? [])].filter(Boolean)) systems.set(s, (systems.get(s) ?? 0) + 1);
    for (const t of fm.tags ?? []) topics.set(String(t), (topics.get(String(t)) ?? 0) + 1);
    for (const o of [...(fm.code_objects_mentioned ?? []), ...(fm.objects_mentioned ?? []), ...((fm.objects_touched ?? []) as { type: string; name: string }[]).map((x) => `${x.type} ${x.name}`)]) objects.set(String(o), (objects.get(String(o)) ?? 0) + 1);
    for (const f of fm.links?.features ?? []) features.set(f, (features.get(f) ?? 0) + 1);
    if (fm.published_at) quarters.set(quarter(String(fm.published_at)), (quarters.get(quarter(String(fm.published_at))) ?? 0) + 1);
  }
  const first = sorted.find((i) => i.fm.published_at)?.fm.published_at ?? null, last = [...sorted].reverse().find((i) => i.fm.published_at)?.fm.published_at ?? null;
  // D61: a pull-request source is a repository; its items are change pages, dated by their merge
  const kindLabel = src.kind === "youtube" ? "channel" : src.kind === "github-pr" ? "repository" : "blog";
  const sysTop = top(systems, 6);
  const summary = `${src.name}${src.author?.name && src.author.name !== src.name ? ` (${src.author.name}${src.author.mvp ? ", MVP" : ""})` : src.author?.mvp ? " (MVP)" : ""}: ${items.length} ${src.kind === "youtube" ? "videos" : src.kind === "github-pr" ? "code changes" : "posts"} in the knowledge base${first ? `, ${String(first).slice(0, 10)} to ${String(last).slice(0, 10)}` : ""}, mostly about ${sysTop.slice(0, 3).map((s) => s.id).join(", ") || "Business Central"}.`;
  const fm = {
    id: `source/${src.id}`, type: "source", title: src.name, summary, tier: src.tier === "official" ? "official" : "community", language: src.language ?? "en", tags: [kindLabel],
    review: reviewOf(false),
    generated: { at: now.toISOString(), pipeline: PIPELINE_VERSION, prompts: {}, input_hash: sha256(JSON.stringify(sorted.map((i) => i.path))) },
    evidence: [{ kind: src.kind === "youtube" ? "video" : src.kind === "github-pr" ? "code" : "blog", url: src.url, title: src.name, date: null, commit: null, t: null, quote: null }],
    links: { learn: [], objects: [], features: [...features.keys()].sort(), topics: [], localizations: [], videos: sorted.filter((i) => i.fm.type === "video").map((i) => i.fm.id), posts: sorted.filter((i) => i.fm.type === "post").map((i) => i.fm.id), guidelines: [],
      ...(sorted.some((i) => i.fm.type === "change") ? { changes: sorted.filter((i) => i.fm.type === "change").map((i) => i.fm.id) } : {}) },
    source_id: src.id, kind: src.kind, url: src.url, author: src.author?.name ?? null, mvp: !!src.author?.mvp, full_text: !!src.full_text, item_count: items.length,
    footprint: { systems: sysTop, topics: top(topics, 10), objects: top(objects, 12), features: top(features, 10) },
    first_item: first ? String(first).slice(0, 10) : null, last_item: last ? String(last).slice(0, 10) : null,
  };
  validateOrThrow("frontmatter.source", fm, `source page ${src.id}`);
  const lines = [`# ${src.name}`, "", `> ${summary}`, "", `[${src.url}](${src.url}) · ${kindLabel} · tier ${fm.tier}${src.full_text ? " · full text opted in" : ""}`, ""];
  lines.push("## Footprint", "", "| Systems | Topics | AL objects named |", "|---|---|---|");
  for (let i = 0; i < Math.max(fm.footprint.systems.length, fm.footprint.topics.length, fm.footprint.objects.length, 1); i++) {
    const s = fm.footprint.systems[i], t = fm.footprint.topics[i], o = fm.footprint.objects[i];
    lines.push(`| ${s ? `${s.id} (${s.weight})` : ""} | ${t ? `${cell(t.id)} (${t.weight})` : ""} | ${o ? `${cell(o.id)} (${o.weight})` : ""} |`);
  }
  lines.push("");
  if (quarters.size) lines.push("## Flight path", "", "Items per quarter, oldest first:", "", ...[...quarters].sort().map(([q, c]) => `- ${q}: ${"*".repeat(Math.min(c, 40))} ${c}`), "");
  if (features.size) {
    const noun: [string, string] = src.kind === "youtube" ? ["video", "videos"] : src.kind === "github-pr" ? ["code change", "code changes"] : ["post", "posts"];
    // count descending, then title; within a count a feature without a page (bare id) goes last
    const title = (f: string) => featureRefs.get(f)?.title || "";
    const order = [...features].sort((a, b) => b[1] - a[1] || Number(!title(a[0])) - Number(!title(b[0])) || title(a[0]).localeCompare(title(b[0])) || a[0].localeCompare(b[0]));
    lines.push("## Roadmap features it demonstrates", "", ...order.map(([f, c]) => featureLine(f, c, noun, featureRefs.get(f))), "");
  }
  lines.push("## Most recent", "", ...[...sorted].reverse().slice(0, 20).map((i) => `- [${cell(String(i.fm.title))}](../${i.path}.md)${i.fm.published_at ? ` (${String(i.fm.published_at).slice(0, 10)})` : ""}`), "");
  lines.push(`Source: ${src.kind === "youtube" ? "videos" : src.kind === "github-pr" ? "code changes" : "posts"} of this source in BC Observatory, derived pages only (CONTENT-NOTICE.md).`, "");
  return `---\n${toYaml(fm, { lineWidth: 0, version: "1.1" })}---\n\n${lines.join("\n").replace(/\n{3,}/g, "\n\n").trim()}\n`;
}

export interface Coverage { systems: string[]; pillars: string[]; counts: Record<string, Record<string, number>> }

export function renderSourcesAndCoverage(contentDir: string, dataDir: string, now = new Date()): { sources: number; coverage: Coverage } {
  const pages: Item[] = [];
  for (const f of listFiles(contentDir, ".md")) {
    let fm: Record<string, any>;
    try { fm = matter(readText(f)).data; } catch { continue; }
    if (fm.type) pages.push({ path: relative(contentDir, f).replace(/\.md$/, ""), fm });
  }
  // D79: roadmap features by page id, so source pages print their titles
  const featureRefs = new Map<string, FeatureRef>(pages.filter((p) => p.fm.type === "feature").map(({ fm }) => [fm.id, { title: fm.title, area: fm.area ?? null, status: fm.status ?? null, ga_date: fm.ga_date ?? null }]));
  // source pages
  const bySource = new Map<string, Item[]>();
  for (const p of pages) {
    const s = p.fm.type === "post" || p.fm.type === "change" ? p.fm.source_id : p.fm.type === "video" ? p.fm.channel : null;
    // a change is dated by its merge: the footprint and flight path read published_at
    if (s) bySource.set(s, [...(bySource.get(s) ?? []), p.fm.type === "change" ? { ...p, fm: { ...p.fm, published_at: p.fm.merged_at } } : p]);
  }
  const wanted = new Set<string>();
  for (const src of loadSources()) {
    const items = bySource.get(src.id);
    if (!items?.length) continue;
    const path = resolve(contentDir, "sources", `${src.id}.md`);
    wanted.add(path);
    const page = renderSourcePage(src, items, now, featureRefs);
    if (!exists(path) || stable(readText(path)) !== stable(page)) writeText(path, page);
  }
  for (const f of listFiles(resolve(contentDir, "sources"), ".md")) if (!wanted.has(f)) removeIfExists(f);
  const idx = resolve(contentDir, "sources", "llms.txt");
  const rows = [...wanted].map((f) => matter(readText(f)).data).sort((a: any, b: any) => b.item_count - a.item_count);
  const text = ["# BC Observatory: sources", "", "> Blogs, channels and code repositories in the knowledge base and what they cover (footprint, flight path). Frontmatter: schemas/frontmatter.source.json.", "",
    ...rows.map((d: any) => `- [${cell(d.title)}](${d.source_id}.md): ${d.item_count} items, ${d.tier}`), ""].join("\n");
  if (rows.length) { if (!exists(idx) || readText(idx) !== text) writeText(idx, text); } else removeIfExists(idx);

  // coverage: galaxy system × pillar
  const systems = taxonomy().systems.map((s) => s.id);
  const pillars = ["learn", "objects", "videos", "posts", "features"];
  const counts: Coverage["counts"] = Object.fromEntries(systems.map((s) => [s, Object.fromEntries(pillars.map((p) => [p, 0]))]));
  const bump = (s: string | undefined, p: string) => { if (s && counts[s]) counts[s][p]++; };
  for (const { fm } of pages) {
    if (fm.type === "object") bump(objectSystem(fm.namespace), "objects");
    else if (fm.type === "video") bump(fm.system, "videos");
    else if (fm.type === "post") bump(fm.system, "posts");
    else if (fm.type === "feature") bump(fm.system, "features");
  }
  const extracts = resolve(dataDir, "extract", "docs");
  for (const f of listFiles(extracts, ".json")) bump(readJson<{ systems?: string[] }>(f).systems?.[0], "learn");
  const coverage: Coverage = { systems, pillars, counts };
  const cp = resolve(dataDir, "index", "coverage.json");
  const ctext = `${JSON.stringify(coverage, null, 2)}\n`;
  if (!exists(cp) || readText(cp) !== ctext) writeText(cp, ctext);
  return { sources: wanted.size, coverage };
}
