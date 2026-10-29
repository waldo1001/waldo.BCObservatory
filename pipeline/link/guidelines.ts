/**
 * Joins of a BCQuality rule page (D126, docs/specs/bcquality-rules.md 4.4). Deterministic, over the rule's own text
 * with fenced code removed, never by title:
 *
 * - typed object references (`Codeunit 80 "Sales-Post"`) -> links.objects, label `names`;
 * - multi-word code spans (`Item Ledger Entry`) whose name is one object across all types, or one table where every
 *   other object of that name is a page -> links.related, label `possibly related`; single words never count;
 * - coded ids (AS0001) and method names (SetLoadFields) among the rule's identifiers (D94/D95) -> the Learn page whose
 *   path ends with the id, or the one methods-auto page of that method -> links.learn, label `names`;
 * - the BCQuality change pages whose unjoined files hold the rule's repo path -> links.changes (and links.guidelines
 *   on the change page, render/change.ts).
 *
 * The rows stay on the rule page: nothing here reaches data/links/crosslinks.json, so no object page grows (D88).
 */
import { resolve } from "node:path";
import { listFiles, readText } from "../lib/fsx.js";
import { pageIdentifiers } from "../fetch/git-page.js";
import { refLabel, resolveMentions, type Mention, type ObjectIndex } from "./mentions.js";
import { frontmatterOf } from "./related.js";

export const BCQUALITY_REPO = "microsoft/BCQuality";
/** Caps per rule page; frontmatter.guideline.json enforces them. */
export const MAX_OBJECTS = 24;
export const MAX_LEARN = 12;
export const MAX_CHANGES = 30;

const stripFences = (s: string) => s.replace(/^[ \t]*(```|~~~)[\s\S]*?^[ \t]*\1/gm, " ");
const TYPED = /\b(Table|Page|Codeunit|Report|Enum|Query|XmlPort)\s+(?:\d+\s+)?"([^"\n]+)"/gi;
const SPAN = /(?<!`)`([^`\n]+)`(?!`)/g;

/** Object pages a rule names by type and exact name, distinct, in order. */
export function typedObjects(body: string, index: ObjectIndex): string[] {
  const mentions: Mention[] = [...stripFences(body).matchAll(TYPED)].map((m) => ({ type: m[1].toLowerCase(), name: m[2].trim() }));
  return resolveMentions(mentions, index).pageIds;
}

const byBareName = new WeakMap<ObjectIndex, Map<string, { pageId: string; type: string }[]>>();
function namesOf(index: ObjectIndex): Map<string, { pageId: string; type: string }[]> {
  let m = byBareName.get(index);
  if (m) return m;
  m = new Map();
  for (const r of index.refs.values()) {
    const k = r.name.trim().toLowerCase();
    m.set(k, [...(m.get(k) ?? []), { pageId: r.pageId, type: r.type }]);
  }
  byBareName.set(index, m);
  return m;
}

/** Object pages a multi-word code span names: one object of that name, or one table whose namesakes are all pages. */
export function spanObjects(body: string, index: ObjectIndex): string[] {
  const out: string[] = [];
  for (const m of stripFences(body).matchAll(SPAN)) {
    const name = m[1].trim().replace(/^"(.*)"$/, "$1").trim();
    if (!/[ ./-]/.test(name)) continue;
    const hits = namesOf(index).get(name.toLowerCase()) ?? [];
    const tables = hits.filter((h) => h.type === "table");
    const pick = hits.length === 1 ? hits[0] : tables.length === 1 && hits.every((h) => h.type === "table" || h.type === "page") ? tables[0] : null;
    if (pick && !out.includes(pick.pageId)) out.push(pick.pageId);
  }
  return out;
}

const isCoded = (s: string) => /^[A-Z]{2,3}\d{4}$/.test(s);
const pathOf = (url: string) => url.replace(/[?#].*$/, "").replace(/\/+$/, "").toLowerCase();
/** Learn pages a rule's identifiers name: a coded id by the path's `-<id>` ending, a method by its one methods-auto page. */
export function learnJoins(identifiers: string[], learnUrls: string[]): { url: string; identifier: string }[] {
  const out: { url: string; identifier: string }[] = [];
  const add = (url: string, identifier: string) => { if (!out.some((x) => x.url === url)) out.push({ url, identifier }); };
  for (const id of identifiers) {
    const lower = id.toLowerCase();
    if (isCoded(id)) { for (const u of learnUrls) if (pathOf(u).endsWith(`-${lower}`)) add(u, id); continue; }
    const methods = learnUrls.filter((u) => pathOf(u).includes("/methods-auto/") && pathOf(u).endsWith(`-${lower}-method`));
    if (methods.length === 1) add(methods[0], id);
  }
  return out;
}

export interface RuleChange { id: string; title: string; date: string }
const newestFirst = (a: RuleChange, b: RuleChange) => b.date.localeCompare(a.date) || b.id.localeCompare(a.id, "en", { numeric: true });
/** BCQuality change pages by the repo paths of their unjoined files (content/changes/bcquality/*.md), newest first. */
export function changesByRulePath(contentDir: string): Map<string, RuleChange[]> {
  const m = new Map<string, RuleChange[]>();
  for (const f of listFiles(resolve(contentDir, "changes"), ".md")) {
    const fm = frontmatterOf(readText(f));
    if (fm?.type !== "change" || String(fm.repo ?? "").toLowerCase() !== BCQUALITY_REPO.toLowerCase()) continue;
    const c: RuleChange = { id: String(fm.id), title: String(fm.title), date: String(fm.merged_at ?? "").slice(0, 10) };
    for (const u of (fm.objects_unjoined ?? []) as { path?: string }[]) {
      if (typeof u.path !== "string" || !u.path.endsWith(".md")) continue;
      const l = m.get(u.path) ?? [];
      if (!l.some((x) => x.id === c.id)) l.push(c);
      m.set(u.path, l);
    }
  }
  for (const l of m.values()) l.sort(newestFirst);
  return m;
}

/** Rule repo path -> its page id, from the pages under content/guidelines (the change pages' side of the join). */
export function guidelinesByPath(contentDir: string): Map<string, string> {
  const m = new Map<string, string>();
  for (const f of listFiles(resolve(contentDir, "guidelines"), ".md")) {
    const fm = frontmatterOf(readText(f));
    if (fm?.type === "guideline" && typeof fm.repo_path === "string") m.set(fm.repo_path, String(fm.id));
  }
  return m;
}

export interface GuidelineJoins {
  examples: { label: string; path: string }[];
  /** typed references: certain, `names` */
  objects: { id: string; title: string; why: string }[];
  /** multi-word code spans: `possibly related` */
  related: { id: string; title: string; why: string }[];
  learn: { url: string; identifier: string }[];
  changes: RuleChange[];
  /** every rule path that has a page: a link to one stays a page link */
  rulePaths: Set<string>;
}
export interface GuidelineJoinInput {
  repoPath: string; body: string; tree: string[]; index: ObjectIndex | null; learnUrls: string[];
  changesByPath: Map<string, RuleChange[]>; rulePaths: Set<string>;
}

/** Example files beside a rule: `<stem>.good.al`, `<stem>.bad.al`, `<stem>.good.2.al`; labels Good, Bad, Good 2. */
export function examplesOf(tree: string[], repoPath: string): { label: string; path: string }[] {
  const stem = repoPath.replace(/\.md$/, "");
  const esc = stem.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(`^${esc}\\.(good|bad)(?:\\.(\\d+))?\\.al$`);
  return tree.flatMap((p) => { const m = re.exec(p); return m ? [{ path: p, kind: m[1], n: Number(m[2] ?? 1) }] : []; })
    .sort((a, b) => a.n - b.n || (a.kind === b.kind ? 0 : a.kind === "good" ? -1 : 1))
    .map((e) => ({ path: e.path, label: `${e.kind === "good" ? "Good" : "Bad"}${e.n > 1 ? ` ${e.n}` : ""}` }));
}

/** Everything a rule page links, capped. */
export function guidelineJoins(i: GuidelineJoinInput): GuidelineJoins {
  let body = i.body;
  if (body.startsWith("---")) body = body.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, "");
  const typed = i.index ? typedObjects(body, i.index) : [];
  const spans = i.index ? spanObjects(body, i.index).filter((id) => !typed.includes(id)) : [];
  const title = (id: string) => { const r = i.index?.refs.get(id); return r ? refLabel(r) : id; };
  const objects = typed.slice(0, MAX_OBJECTS).map((id) => ({ id, title: title(id), why: "the rule names it" }));
  const related = spans.slice(0, Math.max(0, MAX_OBJECTS - objects.length)).map((id) => ({ id, title: title(id), why: "a code span in the rule names it" }));
  return {
    examples: examplesOf(i.tree, i.repoPath), objects, related,
    learn: learnJoins(pageIdentifiers(body), i.learnUrls).slice(0, MAX_LEARN),
    changes: [...(i.changesByPath.get(i.repoPath) ?? [])].sort(newestFirst).slice(0, MAX_CHANGES),
    rulePaths: i.rulePaths,
  };
}
