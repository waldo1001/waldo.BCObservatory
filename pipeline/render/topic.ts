/**
 * Topic hub pages (deterministic until hub narratives exist): content/topics/<path>.md + content/topics/llms.txt.
 *
 * A hub page is an overlay on Learn (D01): breadcrumb, subtopics, and its member pages linked out to Learn with
 * their Learn description (CC BY, attributed via evidence), plus the BC pages and reports their ms.search.form names,
 * joined to the object pages through data/index/docs-objects.json (D65: `links.objects`, `coverage.code`).
 * Nothing on these pages is machine-written yet; `narrative: none` says so. Pages of hubs that left the TOC are removed.
 */
import { readdirSync, rmSync, statSync } from "node:fs";
import { join, posix, relative, resolve } from "node:path";
import matter from "gray-matter";
import { stringify as toYaml } from "yaml";
import { loadDocsObjects, type ObjectRef } from "../code/docs-objects.js";
import type { Relations } from "../code/relations.js";
import { exists, readJson, readText, removeIfExists, writeJson, writeText } from "../lib/fsx.js";
import type { ManifestItem } from "../lib/manifest.js";
import { validateOrThrow } from "../lib/schema.js";
import type { TopicHub } from "../link/toc.js";
import { loadTopicLinks, loadTopicReview, mediaByTopic } from "../link/topics.js";
import { PROMPT_VERSION as HUB_V, STAGE as HUB_STAGE } from "../summarize/hub.js";
import type { ReviewedNarrative } from "../review/hub.js";
import { PIPELINE_VERSION } from "../version.js";
import { reviewOf } from "../lib/review.js";

const MAX_EVIDENCE = 40;
export const topicRel = (id: string) => `${id.replace(/^topic\//, "")}.md`;
/** Relative link between two topic pages, so the markdown works on GitHub and on the site alike. */
export const topicLink = (fromId: string, toId: string) => posix.relative(posix.dirname(topicRel(fromId)), topicRel(toId));
const cell = (s: string) => s.replace(/\|/g, "\\|").replace(/\s+/g, " ").trim();

/** Learn's own include tokens; any other include shows its label. */
const INCLUDES: Record<string, string> = { prod_short: "Business Central", prod_long: "Dynamics 365 Business Central" };
/**
 * A Learn description in our markdown: `[!INCLUDE[label](path)]` becomes its text, and a link relative to the Learn
 * repo becomes the absolute Learn URL it points at (resolved against the page's own URL, .md dropped), so no page
 * links to a file that only exists in the Learn repository.
 */
export function learnText(desc: string, pageUrl: string): string {
  return desc
    .replace(/\[!INCLUDE\[([^\]]*)\]\([^)]*\)\]/gi, (_, label: string) => INCLUDES[label] ?? label)
    .replace(/\[([^\]]*)\]\(([^)\s]+)\)/g, (all, text: string, href: string) => {
      if (/^[a-z][a-z0-9+.-]*:/i.test(href) || href.startsWith("#")) return all;
      try { return `[${text}](${new URL(href.replace(/\.md(?=#|$)/, ""), pageUrl).href})`; } catch { return text; }
    });
}

/** A video or post linked to a topic (link/topics.ts): page id, kind, title and the quote that grounds the link. */
export interface TopicMedia { key: string; kind: "video" | "post" | "change"; title: string; quote: string }

export function renderTopicPage(hub: TopicHub, byId: Map<string, TopicHub>, items: Map<string, ManifestItem>, now: Date, stored?: ReviewedNarrative, media: TopicMedia[] = [], code?: HubCode): string {
  const review = stored?.review && stored.review.input_hash === stored.input_hash ? stored.review : undefined;
  // a narrative Opus rejected is not shown; the page says it was flagged
  const narrative = review?.state === "flagged" ? undefined : stored;
  const members = hub.members.map((id) => items.get(id)).filter((x): x is ManifestItem => !!x)
    .sort((a, b) => a.title.localeCompare(b.title));
  const direct = new Set(hub.children.flatMap((c) => byId.get(c)?.members ?? []));
  const own = members.filter((m) => !direct.has(m.id));
  const forms = [...new Set(members.flatMap((m) => ((m.meta?.search_form as { id: number | null }[] | undefined) ?? []).map((f) => f.id).filter((x): x is number => typeof x === "number")))].sort((a, b) => a - b);
  const objs = code ? hubObjects(hub, byId, code) : { objects: [], unjoined: [] };
  const crumbs = [...hub.breadcrumb, hub.title].join(" > ");
  const summary = narrative?.summary ?? `Learn section ${crumbs}: ${members.length} Microsoft Learn pages${hub.children.length ? ` in ${hub.children.length} subtopics` : ""}. Index of what Learn documents here, linked to Learn.`;
  const fm = {
    id: hub.id, type: "topic", title: hub.title, summary: summary.slice(0, 600), tier: "official", language: "en",
    ...(hub.system ? { system: hub.system } : {}),
    review: review ? { state: review.state, by: review.by, at: review.at, flags: review.state === "flagged" ? ["narrative-rejected"] : [] } : reviewOf(!!narrative),
    generated: { at: now.toISOString(), pipeline: PIPELINE_VERSION, prompts: narrative ? { [HUB_STAGE]: HUB_V } : {}, input_hash: narrative?.input_hash ?? hub.member_hash },
    evidence: members.slice(0, MAX_EVIDENCE).map((m) => ({ kind: "learn", url: m.url, title: m.title, date: (m.meta?.ms_date as string | undefined) ?? m.published_at?.slice(0, 10) ?? null, commit: null, t: null, quote: null })),
    // own pages only: descendants are linked from their own subtopic page
    links: {
      learn: own.map((m) => m.url), objects: objectIds(objs.objects), features: [], topics: [...(hub.parent ? [hub.parent] : []), ...hub.children], localizations: [],
      videos: media.filter((x) => x.kind === "video").map((x) => x.key), posts: media.filter((x) => x.kind === "post").map((x) => x.key), guidelines: [],
      ...(media.some((x) => x.kind === "change") ? { changes: media.filter((x) => x.kind === "change").map((x) => x.key) } : {}),
    },
    learn_toc_path: [...hub.breadcrumb, hub.title], toc_file: hub.toc, parent: hub.parent, children: hub.children,
    coverage: { learn: members.length, code: objectIds(objs.objects).length, video: media.filter((x) => x.kind === "video").length, blog: media.filter((x) => x.kind === "post").length, guideline: 0 }, bc_forms: forms, member_hash: hub.member_hash, narrative: narrative ? "generated" : "none",
  };
  validateOrThrow("frontmatter.topic", fm, `topic page ${hub.id}`);

  const up = (id: string) => { const h = byId.get(id); return h ? `[${h.title}](${topicLink(hub.id, id)})` : id; };
  const lines = [
    `# ${hub.title}`, "",
    `> ${summary}`, "",
    `Path: ${[...ancestors(hub, byId).map(up), hub.title].join(" > ")} · tier official · system ${hub.system ?? "none"} · ${narrative ? (review?.state === "reviewed" ? "narrative reviewed by Opus" : "**unreviewed** (machine-generated narrative)") : review?.state === "flagged" ? "**flagged**: narrative withheld after review" : "no narrative yet"}`, "",
  ];
  if (narrative) lines.push("## Overview", "", narrative.overview, "", "## Key points", "", ...narrative.key_points.map((k) => `- ${k}`), "");
  if (hub.children.length) {
    lines.push("## Subtopics", "", ...hub.children.map((c) => byId.get(c)).filter((c): c is TopicHub => !!c)
      .map((c) => `- [${c.title}](${topicLink(hub.id, c.id)}) (${c.members.length} pages)`), "");
  }
  if (own.length) {
    lines.push(hub.children.length ? "## More Learn pages" : "## Learn pages", "");
    for (const m of own) lines.push(`- [${cell(m.title)}](${m.url})${m.meta?.description ? `: ${cell(learnText(String(m.meta.description), m.url))}` : ""}`);
    lines.push("");
  }
  if (media.length) {
    // page links relative to this topic page: content/topics/<rel> -> content/<videos|posts>/<id>.md
    const up = "../".repeat(topicRel(hub.id).split("/").length);
    const link = (x: TopicMedia) => `${up}${x.kind === "video" ? "videos" : x.kind === "change" ? "changes" : "posts"}/${x.key.slice(x.key.indexOf("/") + 1)}.md`;
    const label = { video: "video", post: "community post", change: "code change" } as const;
    lines.push(media.some((x) => x.kind === "change") ? "## Videos, posts and code changes" : "## Videos and posts", "", "Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.", "",
      ...media.map((x) => `- [${cell(x.title)}](${link(x)}) (${label[x.kind]}): "${cell(x.quote)}"`), "");
  }
  if (objs.objects.length || objs.unjoined.length) lines.push(...objectsSection(hub, byId, objs));
  else if (forms.length) lines.push("## Business Central pages and reports", "", `Learn's ms.search.form names these object ids: ${forms.join(", ")}.`, "");
  lines.push("Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.", "");
  return `---\n${toYaml(fm, { lineWidth: 0, version: "1.1" })}---\n\n${lines.join("\n").replace(/\n{3,}/g, "\n\n").trim()}\n`;
}

// ---------------------------------------------------------------------------------------------- objects (D65)

/** An object page as a hub links it: page key, title, caption, and the table it runs on (pages only). */
export interface HubObjectPage { pk: string; title: string; caption: string | null; source_table: { pk: string | null; title: string } | null }
/** What a hub needs from the code pillar: the Learn → object join and the object pages that exist. */
export interface HubCode { byDoc: Record<string, ObjectRef[]>; page: (key: string) => HubObjectPage | null }
export interface HubObject extends HubObjectPage { key: string; via: string | null }

/**
 * The objects a hub's Learn pages name (its own and its subtopics'), by exact key through `by_doc`. `via` is the direct
 * subtopic a member belongs to, null for the hub's own pages. Objects without a page (not in W1 or the first-party
 * apps) are returned apart as `unjoined`. Own first, then via; each by type, then id.
 */
export function hubObjects(hub: TopicHub, byId: Map<string, TopicHub>, code: HubCode): { objects: HubObject[]; unjoined: string[] } {
  const viaOf = new Map<string, string>();
  for (const c of hub.children) for (const m of byId.get(c)?.members ?? []) if (!viaOf.has(m)) viaOf.set(m, c);
  const out = new Map<string, HubObject>();
  const unjoined = new Set<string>();
  const ordered = [...hub.members.filter((m) => !viaOf.has(m)), ...hub.members.filter((m) => viaOf.has(m))];
  for (const m of ordered) {
    for (const r of code.byDoc[m] ?? []) {
      if (out.has(r.key)) continue;
      const p = code.page(r.key);
      if (!p) { unjoined.add(r.key); continue; }
      out.set(r.key, { key: r.key, ...p, via: viaOf.get(m) ?? null });
    }
  }
  const byKey = (a: HubObject, b: HubObject) => Number(!!a.via) - Number(!!b.via) || a.key.split("/")[0].localeCompare(b.key.split("/")[0]) || a.key.localeCompare(b.key, "en", { numeric: true });
  return { objects: [...out.values()].sort(byKey), unjoined: [...unjoined].filter((k) => !out.has(k)).sort((a, b) => a.localeCompare(b, "en", { numeric: true })) };
}
const objectIds = (xs: HubObject[]) => [...new Set(xs.map((o) => `object/${o.pk}`))].sort((a, b) => a.localeCompare(b, "en", { numeric: true }));
const keyLabel = (key: string) => { const [t, id] = key.split("/"); return `${t.charAt(0).toUpperCase()}${t.slice(1)} ${id}`; };

function objectsSection(hub: TopicHub, byId: Map<string, TopicHub>, objs: { objects: HubObject[]; unjoined: string[] }): string[] {
  const up = "../".repeat(topicRel(hub.id).split("/").length);
  const out = ["## Business Central pages and reports", "",
    "The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.", ""];
  for (const o of objs.objects) {
    // the table a page runs on is linked when it has a page of its own
    const t = o.source_table;
    const on = t ? (t.pk ? `[${cell(t.title)}](${up}objects/${t.pk}.md)` : cell(t.title)) : null;
    const via = o.via ? byId.get(o.via) : undefined;
    out.push(`- [${cell(o.title)}](${up}objects/${o.pk}.md)${o.caption ? ` · captioned "${cell(o.caption)}"` : ""}${on ? ` · on ${on}` : ""}${via ? ` · via [${cell(via.title)}](${topicLink(hub.id, via.id)})` : ""}`);
  }
  if (objs.unjoined.length) out.push("", `Learn also names ${objs.unjoined.length} object${objs.unjoined.length === 1 ? "" : "s"} with no object page: ${objs.unjoined.join(", ")}.`);
  return [...out, ""];
}

/**
 * Lookup over content/objects/ (rendered before the hubs in the nightly) and the relations file of each object's
 * source major (`source_table` edges, D45). Pages are read lazily and cached; null when the join file is missing.
 */
export function loadHubCode(dataDir: string, contentDir: string): HubCode | null {
  const docs = loadDocsObjects(dataDir);
  if (!docs) return null;
  const fm = new Map<string, { pk: string; title: string; caption: string | null; major: string | null } | null>();
  const read = (key: string) => {
    if (fm.has(key)) return fm.get(key)!;
    const path = resolve(contentDir, "objects", `${key}.md`);
    let v: { pk: string; title: string; caption: string | null; major: string | null } | null = null;
    if (exists(path)) {
      const d = matter(readText(path)).data as { title?: string; caption?: string; source_major?: string };
      v = { pk: key, title: String(d.title ?? key), caption: d.caption ? String(d.caption) : null, major: d.source_major ? String(d.source_major) : null };
    }
    fm.set(key, v);
    return v;
  };
  const tables = new Map<string, Map<string, string>>(); // major → page key → table key
  const tableOf = (major: string | null, key: string): string | null => {
    if (!major || !key.startsWith("page/")) return null;
    if (!tables.has(major)) {
      const p = resolve(dataDir, "code", "relations", `${major}.json`);
      const m = new Map<string, string>();
      if (exists(p)) for (const e of readJson<Relations>(p).edges) if (e.k === "source_table" && !m.has(e.s)) m.set(e.s, e.t);
      tables.set(major, m);
    }
    return tables.get(major)!.get(key) ?? null;
  };
  return {
    byDoc: docs.by_doc,
    page: (key) => {
      const o = read(key);
      if (!o) return null;
      const t = tableOf(o.major, key);
      const tp = t ? read(t) : null;
      return { pk: o.pk, title: o.title, caption: o.caption, source_table: t ? (tp ? { pk: tp.pk, title: tp.title } : { pk: null, title: keyLabel(t) }) : null };
    },
  };
}

function ancestors(hub: TopicHub, byId: Map<string, TopicHub>): string[] {
  const out: string[] = [];
  for (let p = hub.parent; p; p = byId.get(p)?.parent ?? null) out.unshift(p);
  return out;
}

/** Write hub data and pages; remove pages of hubs that no longer exist. Returns the page count. */
export function renderTopics(hubs: TopicHub[], items: ManifestItem[], dataDir: string, contentDir: string, now: Date, narratives: Map<string, ReviewedNarrative> = new Map()): number {
  writeJson(resolve(dataDir, "hubs", "topics.json"), { hubs: hubs.length, generated_by: "pipeline/link/toc.ts", topics: hubs });
  const byId = new Map(hubs.map((h) => [h.id, h]));
  const byItem = new Map(items.map((i) => [i.id, i]));
  const media = mediaByTopic(loadTopicLinks(dataDir), loadTopicReview(dataDir));
  const code = loadHubCode(dataDir, contentDir) ?? undefined;
  const dir = resolve(contentDir, "topics");
  const keep = new Set<string>();
  const stable = (p: string) => p.replace(/^(generated:\n {2}at: ).*$/m, "$1");
  for (const h of hubs) {
    const rel = topicRel(h.id);
    keep.add(rel);
    const path = resolve(dir, rel);
    const page = renderTopicPage(h, byId, byItem, now, narratives.get(h.id), media.get(h.id) ?? [], code);
    if (!exists(path) || stable(readText(path)) !== stable(page)) writeText(path, page);
  }
  if (exists(dir)) {
    for (const f of walk(dir)) {
      const rel = relative(dir, f);
      if (rel.endsWith(".md") && !keep.has(rel)) removeIfExists(f);
    }
    pruneEmpty(dir);
  }
  const index = [
    "# BC Observatory: topics", "",
    "> Topic hubs seeded from the Microsoft Learn TOCs: each hub lists what Learn documents in that section, with links out to Learn.",
    "> Hub narratives (from member summaries) and cross-links to videos and blogs are being added. `links.objects` names the AL",
    "> object pages (content/objects/) whose pages and reports the hub's Learn pages name, by exact id (data/index/docs-objects.json).",
    "> Related hubs, objects and apps per hub, each with a reason from a closed set: data/links/related.json (`why` lists the set).", "",
    `${hubs.length} topics. Roots and their direct subtopics:`, "",
    ...hubs.filter((h) => h.breadcrumb.length <= 1).map((h) => `${h.breadcrumb.length ? "  " : ""}- [${cell(h.title)}](${topicRel(h.id)}): ${h.members.length} Learn pages`),
    "",
  ].join("\n");
  const idx = resolve(dir, "llms.txt");
  if (!exists(idx) || readText(idx) !== index) writeText(idx, index);
  return hubs.length;
}

function walk(dir: string): string[] {
  return readdirSync(dir).flatMap((n) => { const p = join(dir, n); return statSync(p).isDirectory() ? walk(p) : [p]; });
}
function pruneEmpty(dir: string): void {
  for (const n of readdirSync(dir)) {
    const p = join(dir, n);
    if (statSync(p).isDirectory()) { pruneEmpty(p); if (!readdirSync(p).length) rmSync(p, { recursive: true }); }
  }
}
