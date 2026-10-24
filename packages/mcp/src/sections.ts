/**
 * Long pages come back compact, and an agent reads one section at a time (D93). Pure functions over a page's markdown
 * (the site's twin, or content/<path>.md in local mode); no I/O, bundled into dist/server.js like embed.ts.
 *
 * A page that fits the budget (30,000 characters, BC_OBSERVATORY_MAX_CHARS) comes back unchanged. A longer one comes
 * back as a compact view: the frontmatter without `generated` and with long lists cut, the title block, the section
 * keys with their row counts, and the first 5 rows of each section. `section`, `offset` and `limit` read one section in
 * row slices that never cross the budget; `frontmatter` is a section of lines; a symbol path
 * (`objects/codeunit/80#event-OnAfterPostSalesDoc`) returns that member's row. Characters are String.length.
 */
import { editDistance } from "@bc-observatory/search";

export const DEFAULT_BUDGET = 30_000, MIN_BUDGET = 5_000;
export const PREVIEW_ROWS = 5, ROW_CLIP = 200, PROSE_CLIP = 800, HEAD_LINE_MAX = 120;
export const FM_LIST_CHARS = 600, FM_LIST_MIN = 3, RESERVE = 300;

/** The 25 headings pipeline/render/object.ts emits on object pages, with the key an agent passes as `section`. */
export const OBJECT_KEYS: Record<string, string> = {
  "Properties": "properties",
  "Fields": "fields",
  "Fields on this page": "controls",
  "Actions": "actions",
  "Keys": "keys",
  "Values": "values",
  "Events published": "events",
  "Trigger event subscribers": "trigger_subscribers",
  "Event subscriptions": "subscriptions",
  "Procedures": "procedures",
  "Triggers": "triggers",
  "Relations": "relations",
  "Referenced by": "referenced_by",
  "Pages and codeunits on this table": "pages",
  "Extended by": "extended_by",
  "Calls": "calls",
  "Called by": "called_by",
  "Implements": "implements",
  "Implemented by": "implemented_by",
  "Recent changes": "changes",
  "Across versions": "versions",
  "Countries that replace it": "countries",
  "Documented on Microsoft Learn": "learn",
  "Deprecations": "deprecations",
  "Ask your agent": "ask",
};

/** A table row, or a list item with its indented lines (and any text between it and the next row). */
export interface Row { lines: string[]; table: [string, string] | null; group: string | null }
/** A `## ` section: its lines as on the page, split into the text before the first row, the rows, and the text after. */
export interface Section { heading: string; key: string; lines: string[]; head: string[]; rows: Row[]; tail: string[] }
export interface ParsedPage { frontmatter: string; preamble: string; sections: Section[] }
export interface ViewArgs { section?: string; offset?: number; limit?: number }

const snake = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "");
const blank = (l: string) => l.trim() === "";
const fmt = (n: number) => n.toLocaleString("en-US");
const FENCE = /^\s*```/;
const SEPARATOR = /^\|\s*:?-/;
const CAP_NOTE = /^- and \d+ more/;

/** BC_OBSERVATORY_MAX_CHARS: unset, empty or not a number gives 30,000; 0 turns the budget off; 1 to 4,999 become 5,000. */
export function budgetOf(env: string | undefined): number {
  const n = env === undefined || env.trim() === "" ? NaN : Number(env);
  if (!Number.isFinite(n) || n < 0) return DEFAULT_BUDGET;
  if (n === 0) return Infinity;
  return Math.max(MIN_BUDGET, Math.floor(n));
}

export function sectionKey(heading: string): string {
  return OBJECT_KEYS[heading] ?? snake(heading);
}

/** Head, rows and tail of a section's lines (D93 4.1, rules 1-5). No text of the page is lost. */
function splitSection(lines: string[]): Pick<Section, "head" | "rows" | "tail"> {
  const head: string[] = [], rows: Row[] = [];
  // text after a row, held until the next row (then it joins the previous row) or the end (then it is the tail)
  let pending: { line: string; kind: "text" | "table" | "group" }[] = [];
  let table: [string, string] | null = null, group: string | null = null;
  let inTable = false, afterRow = false, fence: "row" | "text" | null = null;
  const other = (line: string, kind: "text" | "table" | "group" = "text") => {
    if (rows.length) pending.push({ line, kind });
    else head.push(line);
  };
  const addRow = (first: string) => {
    if (rows.length) {
      const prev = rows[rows.length - 1];
      for (const p of pending) {
        if (p.kind === "group" && p.line === group) continue;
        if (p.kind === "table" && table && (p.line === table[0] || p.line === table[1])) continue;
        if (!blank(p.line)) prev.lines.push(p.line);
      }
    }
    pending = [];
    rows.push({ lines: [first], table, group });
    afterRow = true;
  };
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    if (fence) {
      if (fence === "row") rows[rows.length - 1].lines.push(l);
      else other(l);
      if (FENCE.test(l)) fence = null;
      continue;
    }
    if (FENCE.test(l)) {
      if (afterRow && /^ {2,}/.test(l)) { rows[rows.length - 1].lines.push(l); fence = "row"; }
      else { other(l); fence = "text"; afterRow = false; inTable = false; table = null; }
      continue;
    }
    if (afterRow && /^ {2,}\S/.test(l)) { rows[rows.length - 1].lines.push(l); continue; }
    if (l.startsWith("|")) {
      if (!inTable && i + 1 < lines.length && SEPARATOR.test(lines[i + 1])) {
        table = [l, lines[i + 1]];
        inTable = true;
        afterRow = false;
        other(l, "table");
        other(lines[++i], "table");
        continue;
      }
      if (inTable) { addRow(l); continue; }
    } else if (inTable) { inTable = false; table = null; }
    if (l.startsWith("- ") && !CAP_NOTE.test(l)) { addRow(l); continue; }
    afterRow = false;
    if (l.startsWith("### ")) { group = l; other(l, "group"); continue; }
    other(l);
  }
  const tail = pending.map((p) => p.line);
  return { head, rows, tail };
}

let memo: { md: string; page: ParsedPage } | null = null;

export function parsePage(md: string): ParsedPage {
  if (memo && memo.md === md) return memo.page;
  const all = md.split("\n");
  let i = 0, frontmatter = "";
  if (all[0] === "---") {
    const end = all.indexOf("---", 1);
    if (end > 0) { frontmatter = all.slice(1, end).join("\n"); i = end + 1; }
  }
  const pre: string[] = [], chunks: { heading: string; lines: string[] }[] = [];
  let fence = false;
  for (; i < all.length; i++) {
    const l = all[i];
    if (!fence && l.startsWith("## ")) { chunks.push({ heading: l.slice(3).trim(), lines: [] }); continue; }
    if (FENCE.test(l)) fence = !fence;
    (chunks.length ? chunks[chunks.length - 1].lines : pre).push(l);
  }
  const seen = new Map<string, number>();
  const sections = chunks.map(({ heading, lines }) => {
    while (lines.length && blank(lines[lines.length - 1])) lines.pop();
    const base = sectionKey(heading), n = (seen.get(base) ?? 0) + 1;
    seen.set(base, n);
    return { heading, key: n === 1 ? base : `${base}_${n}`, lines, ...splitSection(lines) };
  });
  const preamble = pre.join("\n").replace(/^\s*\n/, "").replace(/\s+$/, "");
  const page = { frontmatter, preamble, sections };
  memo = { md, page };
  return page;
}

/** The frontmatter as a section: no heading, one row per line. */
function frontmatterSection(p: ParsedPage): Section {
  const lines = p.frontmatter ? p.frontmatter.split("\n") : [];
  return { heading: "", key: "frontmatter", lines, head: [], rows: lines.map((l) => ({ lines: [l], table: null, group: null })), tail: [] };
}

/** Words an agent types for a page's `controls` section (D97). */
export const CONTROL_WORDS = ["fields", "columns", "members"] as const;
const isControlWord = (w: string) => (CONTROL_WORDS as readonly string[]).includes(w);

export function findSection(p: ParsedPage, want: string): Section | null {
  const w = want.trim().toLowerCase(), ws = snake(want);
  if (w === "frontmatter") return frontmatterSection(p);
  return p.sections.find((s) => s.key === w) ?? p.sections.find((s) => s.heading.toLowerCase() === w)
    ?? p.sections.find((s) => ws !== "" && snake(s.heading) === ws)
    ?? (isControlWord(w) ? p.sections.find((s) => s.key === "controls") ?? null : null);
}

/** Up to two section keys near `want`: the key starts with it, it starts with the key, either contains the other (4 or more
 *  characters), or the edit distance is 2 or less; `frontmatter` counts. No suggestion for an alias word (D97). */
export function nearestKeys(p: ParsedPage, want: string): string[] {
  const w = snake(want);
  if (w === "" || isControlWord(want.trim().toLowerCase())) return [];
  const keys = [...p.sections.map((s) => s.key), "frontmatter"];
  const near = (k: string) => k.startsWith(w) || w.startsWith(k) || (Math.min(k.length, w.length) >= 4 && (k.includes(w) || w.includes(k))) || editDistance(w, k, 2) <= 2;
  return keys.filter(near).slice(0, 2);
}

const keyList = (p: ParsedPage, counts = false) =>
  [...p.sections.map((s) => (counts && s.rows.length ? `${s.key} (${s.rows.length})` : s.key)), "frontmatter"].join(", ");
const titleOf = (p: ParsedPage, path: string) => p.preamble.split("\n").find((l) => l.startsWith("# "))?.slice(2).trim() || path;
/** A string over n characters cut so that it and the "…" take n (the mark may say more), never inside a surrogate pair. */
function clip(s: string, n: number, mark = "…"): string {
  if (s.length <= n) return s;
  const end = /[\uD800-\uDBFF]/.test(s[n - 2]) ? n - 2 : n - 1;
  return `${s.slice(0, end)}${mark}`;
}

const indentOf = (l: string) => l.length - l.trimStart().length;
/** A key or item whose value is a block scalar (`|`, `>-`, ...): its deeper lines are text, not YAML structure. */
const BLOCK_SCALAR = /(?:^|:|-)\s*[|>][-+0-9]*\s*$/;
const LIST_ITEM = /^( *)-(?: |$)/;

/** Block lists over 600 characters keep their leading items up to 600 characters, at least 3, then one comment line. */
function cutLists(lines: string[]): string[] {
  const out: string[] = [];
  let i = 0;
  while (i < lines.length) {
    const l = lines[i], m = LIST_ITEM.exec(l);
    if (!m) {
      out.push(l);
      i++;
      if (BLOCK_SCALAR.test(l)) { const ind = indentOf(l); while (i < lines.length && (blank(lines[i]) || indentOf(lines[i]) > ind)) out.push(lines[i++]); }
      continue;
    }
    const ind = m[1].length, items: string[][] = [];
    while (i < lines.length && indentOf(lines[i]) === ind && LIST_ITEM.test(lines[i])) {
      const item = [lines[i++]];
      while (i < lines.length && (indentOf(lines[i]) > ind || (blank(lines[i]) && i + 1 < lines.length && indentOf(lines[i + 1]) > ind))) item.push(lines[i++]);
      items.push(BLOCK_SCALAR.test(item[0]) ? item : [item[0], ...cutLists(item.slice(1))]);
    }
    const size = (k: number) => items.slice(0, k).map((it) => it.join("\n")).join("\n").length;
    if (size(items.length) <= FM_LIST_CHARS) { out.push(...items.flat()); continue; }
    let k = 0;
    while (k < items.length && size(k + 1) <= FM_LIST_CHARS) k++;
    k = Math.max(k, FM_LIST_MIN);
    out.push(...items.slice(0, k).flat());
    if (k < items.length) out.push(`${" ".repeat(ind)}# … ${items.length - k} more; section: "frontmatter"`);
  }
  return out;
}

/** The frontmatter of a compact view: no top-level `generated` block, long block lists cut; still valid YAML. */
export function compactFrontmatter(yaml: string): string {
  const lines = yaml.split("\n"), kept: string[] = [];
  for (let i = 0; i < lines.length; i++) {
    if (/^generated:/.test(lines[i])) {
      while (i + 1 < lines.length && (indentOf(lines[i + 1]) > 0 || blank(lines[i + 1]))) i++;
      continue;
    }
    kept.push(lines[i]);
  }
  return cutLists(kept).join("\n");
}

export function compactView(md: string, path: string, budget: number): string {
  const p = parsePage(md);
  const out: string[] = [];
  if (md.startsWith("---\n") && p.frontmatter !== "") out.push("---", compactFrontmatter(p.frontmatter), "---", "");
  if (p.preamble) out.push(p.preamble, "");
  out.push(`Compact view: this page is ${fmt(md.length)} characters and one answer holds ${fmt(budget)}, so each section shows its first ${PREVIEW_ROWS} rows. Sections: ${keyList(p, true)}. Read one with bc_cat("${path}", section: "<key>"); offset and limit page through a long one.`, "");
  for (const s of p.sections) {
    out.push(`## ${s.heading}`);
    const more = `… (section: "${s.key}")`;
    if (!s.rows.length) {
      const text = s.head.filter((l) => !blank(l)).join("\n");
      if (text) out.push(clip(text, PROSE_CLIP, more));
    } else {
      const lead = s.head.find((l) => !blank(l) && !l.startsWith("|") && !l.startsWith("### "));
      if (lead && lead.length <= HEAD_LINE_MAX) out.push(lead);
      let group: string | null = null, table: string | null = null;
      for (const r of s.rows.slice(0, PREVIEW_ROWS)) {
        if (r.group && r.group !== group) { out.push(r.group); group = r.group; }
        const t = r.table ? r.table.join("\n") : null;
        if (r.table && t !== table) out.push(...r.table);
        table = t;
        out.push(clip(r.lines[0], ROW_CLIP));
      }
      if (s.rows.length > PREVIEW_ROWS) out.push(`→ ${s.rows.length - PREVIEW_ROWS} more of ${s.rows.length}: bc_cat("${path}", section: "${s.key}", offset: ${PREVIEW_ROWS})`);
      else {
        const text = s.tail.filter((l) => !blank(l)).join("\n");
        if (text) out.push(clip(text, PROSE_CLIP, more));
      }
    }
    out.push("");
  }
  return `${out.join("\n").replace(/\n{3,}/g, "\n\n").replace(/\n+$/, "")}\n`;
}

const dropLeadingBlank = (lines: string[]) => { let i = 0; while (i < lines.length && blank(lines[i])) i++; return lines.slice(i); };

export function sectionView(md: string, path: string, want: string, offset: number | undefined, limit: number | undefined, budget: number, site: string): string {
  const p = parsePage(md);
  // a section answer ends with one newline, like a page, a compact view and a member answer
  const nl = (lines: string[]) => `${lines.join("\n")}\n`;
  const s = findSection(p, want);
  if (!s) {
    const near = nearestKeys(p, want).map((k) => `"${k}"`);
    return `No section "${want}" on ${path}. ${near.length ? `Did you mean ${near.join(" or ")}? ` : ""}Sections: ${keyList(p)}.`;
  }
  const fm = s.key === "frontmatter" && s.heading === "";
  const first = `${titleOf(p, path)}, section "${s.key}": ${site}${path}/`;
  const heading = fm ? [] : [`## ${s.heading}`];
  const n = s.rows.length, off = Math.max(0, Math.floor(offset ?? 0));
  const verbatim = nl(fm ? [first, "", "---", ...s.lines, "---"] : [first, "", ...heading, ...s.lines]);
  if (!n || (off === 0 && limit === undefined && verbatim.length <= budget)) return verbatim;
  const tail = dropLeadingBlank(s.tail);
  if (off >= n) return nl([first, "", ...heading, "", ...(tail.length ? tail : [`No rows after ${n} in section "${s.key}" of ${path}.`])]);
  const out = [first, "", ...heading, ...(fm ? [] : [""])];
  let group: string | null = null, table: string | null = null;
  if (off === 0) {
    out.push(...dropLeadingBlank(s.head));
    // the head counts as printed: it holds the first row's table header and group line
    group = s.rows[0].group;
    table = s.rows[0].table ? s.rows[0].table.join("\n") : null;
  }
  let len = out.join("\n").length, b = off;
  const end = limit === undefined ? n : Math.min(n, off + Math.max(1, Math.floor(limit)));
  for (let r = off; r < end; r++) {
    const row = s.rows[r], add: string[] = [];
    let g = group, t = table;
    if (row.group && row.group !== g) { add.push(...(out.length && !blank(out[out.length - 1]) ? [""] : []), row.group, ""); g = row.group; t = null; }
    const rt = row.table ? row.table.join("\n") : null;
    if (row.table && rt !== t) add.push(...row.table);
    t = rt;
    add.push(...row.lines);
    const size = add.join("\n").length + 1;
    if (r > off && len + size > budget - RESERVE) break;
    out.push(...add);
    len += size;
    group = g;
    table = t;
    b = r + 1;
  }
  const rows = `Rows ${off + 1}-${b} of ${n}.`;
  if (b < n) return nl([...out, "", `${rows} Next: bc_cat("${path}", section: "${s.key}", offset: ${b})`]);
  if (!tail.length) return nl([...out, "", rows]);
  const withTail = nl([...out, "", ...tail, "", rows]);
  if (limit === undefined && withTail.length <= budget) return withTail;
  return nl([...out, "", `${rows} The section's closing text: bc_cat("${path}", section: "${s.key}", offset: ${n})`]);
}

const ANCHOR_SECTION: Record<string, [string, string]> = { field: ["fields", "field"], value: ["values", "value"], event: ["events", "event"], proc: ["procedures", "procedure"] };

/** `#field-<id>`, `#value-<ordinal>`, `#event-<Name>`, `#proc-<Name>` (every overload): the member's rows, else null. */
export function anchorView(md: string, path: string, anchor: string, site: string): string | null {
  const a = anchor.replace(/^#/, ""), m = /^(field|value|event|proc)-(.+)$/.exec(a);
  if (!m) return null;
  const [key, label] = ANCHOR_SECTION[m[1]];
  const p = parsePage(md);
  const s = p.sections.find((x) => x.key === key);
  if (!s) return null;
  const match = m[1] === "field" || m[1] === "value" ? (l: string) => l.startsWith(`| ${m[2]} |`) : (l: string) => l.startsWith(`- \`${m[2]}(`);
  const rows = s.rows.filter((r) => match(r.lines[0]));
  if (!rows.length) return null;
  return `${[`${titleOf(p, path)}, ${label} ${m[2]}: ${site}${path}/#${a}`, "", `## ${s.heading}`, ...(rows[0].table ?? []), ...rows.flatMap((r) => r.lines)].join("\n")}\n`;
}

/** What get_object, cat and localization answer (D93 4.1): a member, a section, a hint, the page, or its compact view. */
export function pageView(md: string, path: string, a: ViewArgs, budget: number, site: string): string {
  const hash = path.indexOf("#");
  if (hash >= 0) {
    const clean = path.slice(0, hash), anchor = path.slice(hash);
    return anchorView(md, clean, anchor, site) ?? `(No row for ${anchor} on this page.)\n\n${pageView(md, clean, {}, budget, site)}`;
  }
  if (a.section !== undefined && a.section.trim() !== "") return sectionView(md, path, a.section, a.offset, a.limit, budget, site);
  if (a.offset !== undefined || a.limit !== undefined) {
    return `offset and limit read one section: bc_cat("${path}", section: "<key>", offset: ${a.offset ?? 0}). Sections: ${keyList(parsePage(md))}.`;
  }
  if (md.length <= budget) return md;
  return compactView(md, path, budget);
}
