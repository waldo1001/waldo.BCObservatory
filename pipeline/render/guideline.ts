/**
 * BCQuality rule pages (D126, docs/specs/bcquality-rules.md 4.3): content/guidelines/<repo path>.md per rule and review
 * skill of microsoft/BCQuality (`microsoft/` and `community/`), content/guidelines/llms.txt and LICENSE-BCQuality.txt.
 *
 * Deterministic from the blob: the rule's own text under its MIT licence (its H1 becomes the page title, relative links
 * point at the rule pages or at GitHub), its frontmatter facets, its `.good.al`/`.bad.al` files as GitHub links (no code
 * copied), the objects and Learn pages it names and the pull requests that changed it (link/guidelines.ts). No model
 * text: review state derived.
 */
import { posix, relative, resolve } from "node:path";
import matter from "gray-matter";
import { stringify as toYaml } from "yaml";
import { loadSources } from "../lib/config.js";
import { exists, listFiles, readJson, readText, removeIfExists, writeText } from "../lib/fsx.js";
import { git, headSha, lsTree } from "../lib/git.js";
import { REMOVED_UPSTREAM, type Manifest, type ManifestItem } from "../lib/manifest.js";
import { reviewOf } from "../lib/review.js";
import { validateOrThrow } from "../lib/schema.js";
import { llmsTitle } from "../lib/sections.js";
import type { StageContext, StageHandler } from "../orchestrator/execute.js";
import { PIPELINE_VERSION } from "../version.js";
import { mirrorFor, parsePage, readBlobs, type BcqMeta } from "../fetch/git-page.js";
import { isContentPage } from "../ingest/git-content.js";
import { BCQUALITY_REPO, changesByRulePath, examplesOf, guidelineJoins, type GuidelineJoins, type RuleChange } from "../link/guidelines.js";
import { loadObjectIndex } from "../link/mentions.js";

export { examplesOf } from "../link/guidelines.js";

export const BLOB_BASE = `https://github.com/${BCQUALITY_REPO}/blob/main/`;
/** The layers that become pages; `custom/` is a template for forks (D126). */
export const GUIDELINE_LAYERS = ["microsoft/", "community/"];
export const LICENSE_FILE = "LICENSE-BCQuality.txt";
const DEFAULT_COPYRIGHT = "Copyright (c) Microsoft Corporation";
/** A domain's galaxy system; every other domain is development. */
export const DOMAIN_SYSTEM: Record<string, string> = { finance: "finance", scm: "inventory", agents: "copilot", copilot: "copilot", reporting: "reporting" };
const stable = (p: string) => p.replace(/^(generated:\n {2}at: ).*$/m, "$1");
const cell = (s: string) => s.replace(/([[\]])/g, "\\$1").replace(/\s+/g, " ").trim();

export const guidelinePagePath = (contentDir: string, repoPath: string) => resolve(contentDir, "guidelines", repoPath);
export const guidelinePageId = (repoPath: string) => `guideline/${repoPath.replace(/\.md$/, "")}`;
export const isGuidelinePath = (p: string) => GUIDELINE_LAYERS.some((l) => p.startsWith(l)) && isContentPage(p);

export interface GuidelineInput {
  repoPath: string; text: string; blob: string; commit: string; publishedAt: string | null;
  /** the upstream LICENSE's copyright line */
  copyright?: string;
  /** Learn URL -> title, for the Names rows */
  learnTitles?: Map<string, string>;
}

const FENCE = /^[ \t]*(```|~~~)[\s\S]*?^[ \t]*\1[^\n]*$/gm;
/** Apply `fn` to the text outside fenced code blocks. */
function outsideFences(body: string, fn: (s: string) => string): string {
  let out = "", last = 0;
  for (const m of body.matchAll(FENCE)) { out += fn(body.slice(last, m.index)) + m[0]; last = m.index! + m[0].length; }
  return out + fn(body.slice(last));
}

/**
 * Relative links of a rule: one to a rule file that has a page stays as it is (the pages mirror the repository's
 * folders); every other relative link becomes an absolute GitHub URL at main. Absolute links, anchors and fenced code stay.
 */
export function rewriteRuleLinks(body: string, repoPath: string, rulePaths: Set<string>, blobBase: string): string {
  const dir = posix.dirname(repoPath);
  return outsideFences(body, (s) => s.replace(/(\[[^\]]*\]\()([^)\s]+)((?:\s+"[^"]*")?\))/g, (all, open: string, href: string, close: string) => {
    if (/^[a-z][a-z0-9+.-]*:/i.test(href) || href.startsWith("#") || href.startsWith("/")) return all;
    const [path, anchor] = href.split("#", 2);
    const target = posix.normalize(posix.join(dir, decodeURI(path))).replace(/^(\.\.\/)+/, "");
    if (rulePaths.has(target)) return all;
    return `${open}${blobBase}${encodeURI(target)}${anchor !== undefined ? `#${anchor}` : ""}${close}`;
  }));
}

/** The rule body without its frontmatter and its first H1. */
function ruleBody(text: string): string {
  let body = text;
  try { body = matter(text).content; } catch { /* malformed frontmatter: the whole text */ }
  let done = false;
  return outsideFences(body, (s) => (done ? s : s.replace(/^# .*(?:\r?\n|$)/m, (h) => { done = true; return ""; }))).trim();
}

const firstSentence = (s: string) => s.match(/^.*?[.!?](?=\s|$)/)?.[0] ?? s;

export function renderGuidelinePage(i: GuidelineInput, joins: GuidelineJoins, now: Date): string {
  const meta = parsePage(i.text, i.repoPath);
  const bcq: BcqMeta = meta.bcq ?? { domain: null, keywords: [], bc_version: [], technologies: [], countries: [], application_area: [], kind: i.repoPath.includes("/skills/") ? "skill" : "rule", summary: null };
  const stem = i.repoPath.slice(i.repoPath.lastIndexOf("/") + 1).replace(/\.md$/, "");
  const title = meta.title ?? stem;
  const summary = (bcq.summary ?? title).slice(0, 600);
  const layer = i.repoPath.split("/")[0];
  const up = "../".repeat(i.repoPath.split("/").length - 1);
  const root = `${up}../`;
  const url = `${BLOB_BASE}${encodeURI(i.repoPath)}`;
  const related = joins.related.map((r) => ({ to: r.id, title: r.title, label: "possibly related" as const, why: r.why, by: "code" as const }));
  const fm = {
    id: guidelinePageId(i.repoPath), type: "guideline", title, summary, tier: "official", language: "en",
    tags: bcq.kind === "skill" ? ["review-skill"] : bcq.keywords,
    system: (bcq.domain && DOMAIN_SYSTEM[bcq.domain]) || "development",
    review: reviewOf(false),
    generated: { at: now.toISOString(), pipeline: PIPELINE_VERSION, prompts: {}, input_hash: i.blob },
    evidence: [{ kind: "guideline", url, title: `${BCQUALITY_REPO}: ${title}`, date: i.publishedAt ? i.publishedAt.slice(0, 10) : null, commit: i.commit, t: null, quote: null }],
    links: {
      learn: joins.learn.map((l) => l.url), objects: joins.objects.map((o) => o.id), features: [], topics: [], localizations: [], videos: [], posts: [], guidelines: [],
      changes: joins.changes.map((c) => c.id), ...(related.length ? { related } : {}),
    },
    repo_path: i.repoPath, layer, kind: bcq.kind, domain: bcq.domain,
    bc_version: bcq.bc_version, technologies: bcq.technologies, countries: bcq.countries, application_area: bcq.application_area,
    examples: joins.examples.length,
  };
  validateOrThrow("frontmatter.guideline", fm, `guideline page ${i.repoPath}`);

  const chips = [`[${bcq.kind === "skill" ? "Skill" : "Rule"} on GitHub](${url})`, `${layer} layer`, bcq.domain ?? "review skill",
    ...(bcq.bc_version.length ? [`BC ${bcq.bc_version.join(", ")}`] : []), "tier official", "derived"];
  const lines = [`# ${title}`, "", `> ${summary}`, "", chips.join(" · "), "", rewriteRuleLinks(ruleBody(i.text), i.repoPath, joins.rulePaths, BLOB_BASE), ""];
  if (joins.examples.length) lines.push("## Examples", "", ...joins.examples.map((e) => `- [${e.label}: ${e.path.slice(e.path.lastIndexOf("/") + 1)}](${BLOB_BASE}${encodeURI(e.path)})`), "");
  const learnTitle = (u: string) => i.learnTitles?.get(u) ?? u.replace(/\/+$/, "").split("/").pop()!;
  const names = [
    ...joins.objects.map((o) => `- [${cell(o.title)}](${root}objects/${o.id.replace(/^object\//, "")}.md) (names this object)`),
    ...joins.learn.map((l) => `- [${cell(learnTitle(l.url))}](${l.url}) (names ${l.identifier})`),
    ...joins.related.map((o) => `- [${cell(o.title)}](${root}objects/${o.id.replace(/^object\//, "")}.md) (possibly related: a code span names it)`),
  ];
  if (names.length) lines.push("## Names", "", ...names, "");
  if (joins.changes.length) lines.push("## Changed by", "", ...joins.changes.map((c) => `- [${cell(c.title)}](${root}changes/${c.id.replace(/^change\//, "")}.md)${c.date ? `, ${c.date}` : ""}`), "");
  lines.push("---", "", `From ${BCQUALITY_REPO} at ${i.commit.slice(0, 7)}, MIT License, ${i.copyright ?? DEFAULT_COPYRIGHT} ([license](${up}${LICENSE_FILE})).`, "");
  return `---\n${toYaml(fm, { lineWidth: 0, version: "1.1" })}---\n\n${lines.join("\n").replace(/\n{3,}/g, "\n\n").trim()}\n`;
}

// ---------------------------------------------------------------------------------------------- io

interface RunState { commit: string; tree: string[]; rulePaths: Set<string>; copyright: string; licenseText: string | null }
/** The mirror's tree and LICENSE at its head, read once per run and mirror. */
const runStates = new Map<string, Promise<RunState>>();
function runState(mirror: string): Promise<RunState> {
  let p = runStates.get(mirror);
  if (!p) {
    p = (async () => {
      const src = loadSources().find((s) => s.repo?.toLowerCase() === BCQUALITY_REPO.toLowerCase());
      const branch = src?.branch ?? "main";
      const commit = await headSha(mirror, branch);
      const tree = (await lsTree(mirror, commit, src?.paths ?? GUIDELINE_LAYERS)).map((e) => e.path);
      let licenseText: string | null = null;
      try { licenseText = await git(["cat-file", "-p", `${commit}:LICENSE`], mirror); } catch { /* no LICENSE at this commit: the default line */ }
      const copyright = licenseText?.split("\n").map((l) => l.trim()).find((l) => /^Copyright/i.test(l)) ?? DEFAULT_COPYRIGHT;
      return { commit, tree, rulePaths: new Set(tree.filter(isGuidelinePath)), copyright, licenseText };
    })();
    p.catch(() => runStates.delete(mirror));
    runStates.set(mirror, p);
  }
  return p;
}
/** Tests and a second run in one process start from the mirror again. */
export const resetGuidelineRunState = () => runStates.clear();

function writeLicense(contentDir: string, text: string | null): void {
  if (!text) return;
  const p = resolve(contentDir, "guidelines", LICENSE_FILE);
  if (!exists(p) || readText(p) !== text) writeText(p, text);
}

interface DocsRow { url?: string; title?: string; skip?: string | null }
/** Learn URLs and titles from the docs manifest (the rows the Learn shard is built from). */
function learnRows(dataDir: string): Map<string, string> {
  const m = new Map<string, string>();
  for (const f of listFiles(resolve(dataDir, "manifest", "docs"), ".json")) {
    const r = readJson<DocsRow>(f);
    if (r.url && r.skip !== REMOVED_UPSTREAM) m.set(r.url, r.title ?? r.url);
  }
  return m;
}

interface PageContext { learn: Map<string, string>; changes: Map<string, RuleChange[]> }
function writePage(item: ManifestItem, text: string, st: RunState, pc: PageContext, dataDir: string, contentDir: string, now: Date): boolean {
  const repoPath = String(item.meta?.path ?? item.id.split("/").slice(2).join("/"));
  const joins = guidelineJoins({ repoPath, body: text, tree: st.tree, index: loadObjectIndex(dataDir), learnUrls: [...pc.learn.keys()], changesByPath: pc.changes, rulePaths: st.rulePaths });
  const page = renderGuidelinePage({ repoPath, text, blob: item.input_hash ?? "", commit: st.commit, publishedAt: item.published_at ?? null, copyright: st.copyright, learnTitles: pc.learn }, joins, now);
  const path = guidelinePagePath(contentDir, repoPath);
  if (exists(path) && stable(readText(path)) === stable(page)) return false;
  writeText(path, page);
  return true;
}

const isBcquality = (item: ManifestItem) => String(item.meta?.repo ?? "").toLowerCase() === BCQUALITY_REPO.toLowerCase();

/** Guidelines `published`: the rule's page from its blob. Another guidelines source has no renderer. */
export function guidelinePublished(): StageHandler {
  let pc: PageContext | null = null;
  return async (item: ManifestItem, ctx: StageContext) => {
    if (!isBcquality(item)) return { skip: "no-renderer" };
    const repoPath = String(item.meta?.path ?? "");
    if (!isGuidelinePath(repoPath)) return { skip: "no-renderer" };
    if (!item.input_hash) throw new Error("no blob id (input_hash) on item");
    const mirror = mirrorFor(ctx.mirrorsDir, item);
    const st = await runState(mirror);
    writeLicense(ctx.contentDir, st.licenseText);
    pc ??= { learn: learnRows(ctx.dataDir), changes: changesByRulePath(ctx.contentDir) };
    const text = await git(["cat-file", "-p", item.input_hash], mirror);
    writePage(item, text, st, pc, ctx.dataDir, ctx.contentDir, ctx.now());
    return { data: { path: `content/guidelines/${repoPath}` }, output_hash: item.input_hash };
  };
}

/**
 * After the change pages: re-render every published rule page from its blob (one `cat-file --batch`), so tonight's
 * pull requests and objects reach pages written earlier. Returns the pages written.
 */
export async function rerenderGuidelinePages(manifest: Manifest, dataDir: string, contentDir: string, mirrorsDir: string, now: Date): Promise<number> {
  const items = manifest.list("guidelines").filter((i) => i.state === "published" && isBcquality(i) && i.input_hash && isGuidelinePath(String(i.meta?.path ?? "")));
  if (!items.length) return 0;
  const mirror = mirrorFor(mirrorsDir, items[0]);
  if (!exists(mirror)) return 0;
  const st = await runState(mirror);
  writeLicense(contentDir, st.licenseText);
  const pc: PageContext = { learn: learnRows(dataDir), changes: changesByRulePath(contentDir) };
  const blobs = await readBlobs(mirror, [...new Set(items.map((i) => i.input_hash!))]);
  let n = 0;
  for (const item of items) {
    const text = blobs.get(item.input_hash!);
    if (text != null && writePage(item, text, st, pc, dataDir, contentDir, now)) n++;
  }
  return n;
}

interface IndexRow { rel: string; title: string; summary: string; layer: string; kind: string; domain: string | null }
/** Domains by rule count, most first (ties by name); review skills last. */
export function groupByDomain<T extends { kind: string; domain: string | null }>(rows: T[]): [string, T[]][] {
  const by = new Map<string, T[]>();
  for (const r of rows) if (r.kind !== "skill") by.set(r.domain ?? "other", [...(by.get(r.domain ?? "other") ?? []), r]);
  const groups = [...by].sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]));
  const skills = rows.filter((r) => r.kind === "skill");
  return [...groups, ...(skills.length ? [["Review skills", skills] as [string, T[]]] : [])];
}

/** content/guidelines/llms.txt, by domain; drops the pages of rules removed upstream. Returns the rule pages listed. */
export function renderGuidelineIndex(contentDir: string, manifest: Manifest): number {
  const dir = resolve(contentDir, "guidelines");
  for (const item of manifest.list("guidelines")) {
    if (item.skip === REMOVED_UPSTREAM && isBcquality(item) && item.meta?.path) removeIfExists(guidelinePagePath(contentDir, String(item.meta.path)));
  }
  if (!exists(dir)) return 0;
  const rows: IndexRow[] = listFiles(dir, ".md").map((f) => ({ f, fm: matter(readText(f)).data as Record<string, any> })).filter((x) => x.fm.type === "guideline")
    .map(({ f, fm }) => ({ rel: relative(dir, f).split("\\").join("/"), title: String(fm.title), summary: String(fm.summary), layer: String(fm.layer), kind: String(fm.kind), domain: fm.domain ?? null }))
    .sort((a, b) => a.title.localeCompare(b.title));
  const idx = resolve(dir, "llms.txt");
  if (!rows.length) { removeIfExists(idx); return 0; }
  const text = [llmsTitle("guidelines"), "",
    "> Microsoft's BCQuality knowledge base for AL (microsoft/BCQuality, MIT): each rule and review skill as a page with its own text,",
    "> its good and bad examples, the objects and Learn pages it names and the pull requests that changed it. Frontmatter: schemas/frontmatter.guideline.json.", "",
    `${rows.length} rules and review skills, by domain.`, "",
    ...groupByDomain(rows).flatMap(([d, rs]) => [`## ${d}`, "", ...rs.map((r) => `- [${cell(r.title)}](${r.rel}): ${cell(firstSentence(r.summary))} (${r.layer})`), ""])].join("\n");
  if (!exists(idx) || readText(idx) !== text) writeText(idx, text);
  return rows.length;
}

export type { GuidelineJoins } from "../link/guidelines.js";
