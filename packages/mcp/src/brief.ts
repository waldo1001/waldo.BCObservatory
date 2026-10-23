/**
 * brief(query | path) (D106, spec 4.5): one answer in five layers, each line with its tier and source.
 *
 *   How it works (Learn)   Learn articles the query names, with their key facts (data/index/learn-facts-*.json),
 *                          and the Learn pages the found pages link to
 *   In the code            the object pages found, and the objects the other pages link to
 *   Changed lately         code changes, AL releases and hotfix lists found, an object's recent changes, links to them
 *   Heads up               cautions the relevance guard attached, a post's warnings, a video's disclaimers
 *   Gaps                   what no source states: every "possibly related" row, a change described by its title only
 *
 * plus "Status statements, side by side" when two sources speak about a status, never reconciled.
 *
 * Deterministic: keyword hits of the shared scorer (no meaning list), then the pages' own rendered sections (the MCP
 * reads pages, it parses no YAML). The data access is injected so a test can drive it without a server.
 */
import type { PageRecord, SearchRecord } from "@bc-observatory/search";
import { parsePage, type Section } from "./sections.js";

export interface BriefDeps {
  /** Keyword hits for a query, best first (pages, Learn articles and symbols). */
  hits: (query: string) => SearchRecord[];
  /** The record of a page path, when the index has it. */
  record: (path: string) => PageRecord | undefined;
  /** A page's markdown, or null. */
  page: (path: string) => Promise<string | null>;
  /** Learn URL -> its key facts as [kind, text]. */
  learnFacts: () => Promise<Map<string, [string, string][]>>;
  /** Learn articles sharing at least half the query's distinctive words (title and summary), best first; optional. */
  learnByWords?: (query: string) => PageRecord[];
  /** Learn articles nearest the query by meaning (the D63 model over Learn rows, D107); absent or empty without a model. */
  learnByMeaning?: (query: string) => Promise<PageRecord[]>;
}
export interface BriefArgs { query?: string; path?: string }

/** Pages of one layer read for one brief: enough to answer, few enough to stay short. */
export const PER_LAYER = 3;
/** Pages reached in one hop along certain links (a found page's "Linked pages", a Learn article's "In the observatory"). */
export const HOPS = 8;
/** Learn articles found by meaning per brief (D107): the static model ranks the page Learn's own search leads with within its first five more often than within three. */
export const MEANING = 5;
const ROWS = 5;

type Layer = "learn" | "code" | "changes" | "heads" | "other";
const layerOfType = (t: string): Layer => (t === "learn" ? "learn" : t === "object" ? "code" : t === "change" || t === "release" || t === "hotfix" ? "changes" : t === "video" || t === "post" ? "heads" : "other");

/** `[x](../../objects/codeunit/1886.md)` -> `x (objects/codeunit/1886)`, a URL as `x <url>`. */
export function plainLinks(row: string): string {
  // a title may hold one level of brackets: "[#12195 [Fabric] Exclude tables](../../changes/bcapps/12195.md)"
  return row.replace(/\[((?:\\.|\[[^\]]*\]|[^\]])*)\]\(([^)\s]+)\)/g, (_, t: string, href: string) => {
    const title = t.replace(/\\([[\]|])/g, "$1");
    if (/^https?:/.test(href)) return `${title} <${href}>`;
    const path = href.replace(/^(\.\.\/)+|^\.\//, "").replace(/\.md(#.*)?$/, "$1");
    return `${title} (${path})`;
  });
}
const rowsOf = (s: Section | undefined) => (s?.rows ?? []).map((r) => r.lines[0]).filter((l) => l.startsWith("- "));
const section = (md: string, heading: string) => parsePage(md).sections.find((s) => s.heading === heading);
const tierOf = (r: PageRecord | undefined) => r?.tier || "official";
const src = (r: PageRecord) => `[${tierOf(r)}, ${r.path}]`;

export async function brief(a: BriefArgs, d: BriefDeps): Promise<string> {
  const subject = (a.path ?? a.query ?? "").trim();
  if (!subject) return "Give a query (what you want to know) or a path (a page to start from).";
  // the pages to read: a path alone, or per layer the best keyword hits (a symbol counts for its object)
  const seeds: PageRecord[] = [], learnHits: PageRecord[] = [];
  /** How a Learn article was found when not by the keyword search: " (found by words)", " (found by meaning)". */
  const how = new Map<PageRecord, string>();
  if (a.path) {
    const r = d.record(a.path.replace(/^\/+|\/+$|\.md$/g, ""));
    if (!r) return `No page at ${a.path}. search() finds the path.`;
    seeds.push(r);
  } else {
    const per = new Map<Layer, number>();
    // every word must match a page; when none does, the query with one word left out, each in turn (a question's
    // wording carries words no page holds: "... permissions status")
    let found = d.hits(subject);
    const words = subject.split(/\s+/).filter(Boolean);
    if (!found.some((h) => h.kind !== "page" || h.page?.type !== "learn") && words.length >= 3) {
      const seen = new Set(found.map((h) => h.id));
      for (let i = 0; i < words.length; i++) for (const h of d.hits(words.filter((_, j) => j !== i).join(" "))) if (!seen.has(h.id)) { seen.add(h.id); found.push(h); }
    }
    for (const h of found) {
      const r = h.kind === "page" ? h.page : d.record(h.id.split("#")[0]);
      if (!r || seeds.includes(r) || learnHits.includes(r)) continue;
      const layer = layerOfType(r.type);
      if ((per.get(layer) ?? 0) >= PER_LAYER) continue;
      per.set(layer, (per.get(layer) ?? 0) + 1);
      (layer === "learn" ? learnHits : seeds).push(r);
    }
    // never less than Learn: Learn articles that share most of the query's words, when the every-word search found few
    if (learnHits.length < PER_LAYER) for (const r of d.learnByWords?.(subject) ?? []) if (learnHits.length < PER_LAYER + 2 && !learnHits.includes(r)) { learnHits.push(r); how.set(r, " (found by words)"); }
    // and the ones nearest by meaning (D107): what Learn's own search finds for a question in other words
    let byMeaning = 0;
    for (const r of (await d.learnByMeaning?.(subject)) ?? []) if (byMeaning < MEANING && !learnHits.includes(r)) { learnHits.push(r); how.set(r, " (found by meaning)"); byMeaning++; }
    if (!seeds.length && !learnHits.length) return `Nothing found for "${subject}". Try fewer words, or search() to see what there is.`;
  }
  const facts = await d.learnFacts();
  const md = new Map<string, string>();
  for (const r of seeds) { const m = await d.page(r.path); if (m) md.set(r.path, m); }
  // one hop along certain links: what the found pages link to by name, and what a found Learn article's hub row lists
  // as "In the observatory" (the code no word of the query names: Codeunit 1886 for "environment copy cleanup")
  const hop: string[] = [];
  const take = (row: string) => { for (const m of row.matchAll(/\]\((?:\.\.\/)+((?:objects|changes|hotfixes|posts|videos)\/[^)#\s]+)\.md[^)]*\)/g)) if (!hop.includes(m[1])) hop.push(m[1]); };
  for (const r of seeds) for (const row of rowsOf(section(md.get(r.path) ?? "", "Linked pages"))) take(row);
  for (const l of learnHits) {
    if (!l.hub) continue;
    const hub = await d.page(l.hub);
    const at = hub?.split("\n").findIndex((x) => x.startsWith(`- [`) && x.includes(`](${l.path})`)) ?? -1;
    if (hub && at >= 0) for (const x of hub.split("\n").slice(at + 1)) { if (!x.startsWith("  - ")) break; if (x.startsWith("  - In the observatory:")) take(x); }
  }
  for (const p of hop.slice(0, HOPS)) {
    const r = d.record(p);
    if (!r || seeds.includes(r)) continue;
    const m = await d.page(p);
    if (m) { md.set(p, m); seeds.push(r); }
  }

  // a row that points at a page this brief shows anyway adds nothing
  const shown = new Set(seeds.map((r) => r.path));
  const pointsAtShown = (row: string) => [...row.matchAll(/\]\((?:\.\.\/)+([^)#\s]+)\.md/g)].some((m) => shown.has(m[1]));
  const learn: string[] = [], code: string[] = [], changes: string[] = [], heads: string[] = [], gaps: string[] = [], status: string[] = [];
  const learnSeen = new Set<string>();
  const factLines = (url: string) => (facts.get(url) ?? []).map(([k, t]) => `  - ${k === "fact" ? "" : `${k}: `}${t}`);
  const addLearn = (url: string, title: string, via: string) => {
    if (learnSeen.has(url)) return;
    learnSeen.add(url);
    learn.push(`- ${title} [official, ${url}]${via}`, ...factLines(url));
    for (const [k, t] of facts.get(url) ?? []) if (k === "status") status.push(`- Learn, ${title}: ${t} [official, ${url}]`);
  };
  for (const r of learnHits) addLearn(r.path, r.title, how.get(r) ?? (r.path_label ? ` (in ${r.path_label})` : ""));

  for (const r of seeds) {
    const m = md.get(r.path) ?? "";
    const layer = layerOfType(r.type);
    const head = `- ${r.title}: ${r.summary} ${src(r)}`;
    if (layer === "code") code.push(head);
    else if (layer === "changes") changes.push(`- ${r.title}${r.date ? ` (${r.date})` : ""}: ${r.summary} ${src(r)}`);
    else if (layer === "heads") heads.push(head);
    else code.push(head.replace(/^- /, "- (hub) "));
    if (!m) continue;
    // Learn pages this page links to, certain or not, each read once
    for (const row of [...rowsOf(section(m, "Documented on Microsoft Learn")), ...rowsOf(section(m, "Linked pages"))]) {
      const link = /\[((?:\\.|[^\]])*)\]\((https:\/\/learn\.microsoft\.com[^)\s]*)\)/.exec(row);
      if (link) addLearn(link[2], link[1].replace(/\\([[\]|])/g, "$1"), ` (linked from ${r.path})`);
    }
    for (const row of rowsOf(section(m, "Linked pages"))) {
      if (/learn\.microsoft\.com/.test(row) || pointsAtShown(row)) continue;
      const line = `${plainLinks(row)} (from ${r.path})`;
      if (/\((objects|localizations)\//.test(plainLinks(row))) code.push(line);
      else if (/\((changes|hotfixes|releases)\//.test(plainLinks(row))) changes.push(line);
      else heads.push(line);
    }
    for (const row of rowsOf(section(m, "Recent changes")).slice(0, ROWS)) changes.push(`${plainLinks(row)} (on ${r.path})`);
    for (const row of rowsOf(section(m, "Heads up (community)"))) heads.push(`${plainLinks(row)} [community, from ${r.path}]`);
    for (const row of rowsOf(section(m, "Heads up"))) heads.push(`${plainLinks(row)} ${src(r)}`);
    for (const row of rowsOf(section(m, "Disclaimers in the video"))) {
      heads.push(`${plainLinks(row)} ${src(r)}`);
      status.push(`- ${r.title}: ${plainLinks(row).replace(/^- /, "")} ${src(r)}`);
    }
    for (const row of rowsOf(section(m, "Possibly related"))) gaps.push(`- Not stated by any source: ${plainLinks(row).replace(/^- /, "")} (on ${r.path})`);
    if (r.type === "change" && / \(merged into \S+ on \d{4}-\d{2}-\d{2}\)\.$/.test(r.summary)) gaps.push(`- ${r.title}: the pull request describes itself by its title only ${src(r)}`);
    if (r.type === "feature" && r.status) status.push(`- Roadmap, ${r.title}: ${r.status} ${src(r)}`);
  }
  if (!learn.length) gaps.push("- No Learn page among the results: the Learn MCP's microsoft_docs_search may know one; this brief shows only what the observatory links.");

  const uniq = (xs: string[]) => [...new Set(xs)];
  const block = (h: string, xs: string[], none: string) => [`## ${h}`, ...(xs.length ? uniq(xs) : [none]), ""];
  const out = [`# Brief: ${subject}`, "",
    "Five layers, each line with its tier and source; Learn first, then the code, what changed, warnings, and what no source says. cat(path) opens a page, a Learn url reads with microsoft_docs_fetch.", "",
    ...block("How it works (Learn)", learn, "- (no Learn page found)"),
    ...block("In the code", code, "- (no object page found)"),
    ...block("Changed lately", changes, "- (no code change, release or hotfix found)"),
    ...block("Heads up", heads, "- (no warning found)"),
    ...block("Gaps", gaps, "- (none found)")];
  const sources = new Set(status.map((s) => s.replace(/.*\[[^,\]]+, ([^\]]+)\]$/, "$1")));
  if (status.length >= 2 && sources.size >= 2) out.push("## Status statements, side by side (not resolved)", ...uniq(status), "");
  return out.join("\n").trim();
}
