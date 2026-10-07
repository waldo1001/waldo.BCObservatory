/**
 * Site search over the same index the MCP server uses (data/index/pages-<n>.json, served under index/). Loaded on
 * demand; scoring is plain and deterministic (D35, D65): an exact object reference ("table 18") first, then title,
 * caption, tags and summary matches per query word, with hubs ranked by their size and review state and objects
 * demoted on generic queries. The results page groups the hits (Start here, Roadmap, Videos, Posts, AL objects by app,
 * ...) behind a row of tabs.
 */
export interface Row {
  path: string; type: string; title: string; summary: string; tier: string; system?: string | null; date?: string | null; tags?: string[]; status?: string;
  app?: string | null; path_label?: string; caption?: string; members?: number; narrative?: "reviewed" | "unreviewed" | "none"; stats?: string;
}

const TYPE: Record<string, string> = { topic: "topic hub", app: "first-party app", feature: "roadmap feature", object: "AL object", localization: "localization", video: "video", post: "community post", change: "code change", source: "source", digest: "weekly digest" };
const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!);
const words = (s: string) => s.toLowerCase().normalize("NFKD").replace(/[^\p{L}\p{N}\s.-]/gu, " ").split(/\s+/).filter((w) => w.length > 1 || /\d/.test(w));
/** Words that say the reader is after an AL object: no demotion then. */
const OBJECT_WORDS = new Set(["table", "page", "codeunit", "report", "enum", "query", "xmlport", "interface", "permissionset", "field", "event"]);
const NARRATIVE: Record<string, number> = { reviewed: 2, unreviewed: 0, none: -2 };

/** An object's name, the part of its title in quotes: 'Page 8059 "Service Objects"' -> "service objects". */
const nameOf = (title: string) => /"(.*)"$/.exec(title)?.[1] ?? title;

export function score(r: Row, q: string): number {
  const ws = words(q);
  if (!ws.length) return 0;
  const ref = /^(table|page|codeunit|report|enum|query|xmlport|interface|permissionset)\s*(\d+)$/i.exec(q.trim());
  if (ref && r.path === `objects/${ref[1].toLowerCase()}/${ref[2]}`) return 1000;
  const title = r.title.toLowerCase(), caption = (r.caption ?? "").toLowerCase(), tags = (r.tags ?? []).join(" ").toLowerCase(), summary = r.summary.toLowerCase();
  const topic = r.type === "topic", object = r.type === "object";
  let s = 0, named = false;
  for (const w of ws) {
    // the caption is the name the reader sees on screen: it counts like the title, once per word
    const t = title.includes(w) || caption.includes(w) ? 3 : 0;
    // a hub's tags are the titles above it in the Learn TOC: a word already in its own title does not count again,
    // or every subtopic of "Subscription billing" would outrank the hub itself
    const g = tags.includes(w) && !(topic && t) ? 2 : 0, m = summary.includes(w) ? 1 : 0;
    if (!t && !g && !m) return 0; // every word must match somewhere
    if (t || g) named = true;
    s += t + g + m;
  }
  // starts with / equals the whole query: the title; for an object its name or its caption ("customer" = Table 18)
  const whole = q.toLowerCase().trim(), names = object ? [nameOf(title), caption].filter(Boolean) : [title];
  if (names.some((n) => n.startsWith(whole))) s += 3;
  if (names.some((n) => n === whole)) s += 10;
  // a hub (or an app page) is a starting point in proportion to what hangs off it: 47 members +5.6, 5 members +2.6;
  // only when its title or its TOC path names the query, or "Finance" (256 pages) would top every query its summary has
  if ((topic || r.type === "app") && named) s += Math.log2((r.members ?? 0) + 1);
  if (topic && r.narrative) s += NARRATIVE[r.narrative] ?? 0;
  if (object) {
    // 25k object pages would drown a generic query; asking for an object (a type word, a number) lifts the demotion
    if (!/\d/.test(q) && !ws.some((w) => OBJECT_WORDS.has(w))) s *= 0.6;
  } else s += 0.5;
  return s;
}

let rowsPromise: Promise<Row[]> | null = null;
/** The whole index (manifest, then every shard), fetched once per page. */
export function loadRows(base: string): Promise<Row[]> {
  return (rowsPromise ??= (async () => {
    const man = await (await fetch(`${base}index/index-manifest.json`)).json();
    let rows: Row[] = [];
    for (const s of man.shards) rows = rows.concat(await (await fetch(`${base}index/${s.file}`)).json());
    return rows;
  })());
}

// ---------------------------------------------------------------------------------------------- groups (D65 3.1)

export interface GroupDef { id: string; label: string; types: string[]; cap: number; one: string; many: string }
/** The fixed order of the results page; an empty group is omitted. `one`/`many` word the status line. */
export const GROUPS: GroupDef[] = [
  { id: "start", label: "Start here", types: ["topic", "app"], cap: 5, one: "to start with", many: "to start with" },
  { id: "roadmap", label: "Roadmap", types: ["feature"], cap: 10, one: "roadmap", many: "roadmap" },
  { id: "video", label: "Videos", types: ["video"], cap: 10, one: "video", many: "videos" },
  { id: "post", label: "Community posts", types: ["post"], cap: 10, one: "post", many: "posts" },
  { id: "object", label: "AL objects", types: ["object"], cap: 10, one: "AL object", many: "AL objects" },
  { id: "change", label: "Code changes", types: ["change"], cap: 10, one: "code change", many: "code changes" },
  { id: "localization", label: "Localizations", types: ["localization"], cap: 10, one: "localization", many: "localizations" },
  { id: "source", label: "Sources", types: ["source"], cap: 10, one: "source", many: "sources" },
  { id: "digest", label: "Digests", types: ["digest"], cap: 10, one: "digest", many: "digests" },
  { id: "other", label: "Other pages", types: [], cap: 10, one: "other page", many: "other pages" },
];
const GROUP_OF_TYPE = new Map(GROUPS.flatMap((g) => g.types.map((t) => [t, g.id] as const)));
export const groupOf = (r: Pick<Row, "type">) => GROUP_OF_TYPE.get(r.type) ?? "other";
/** The `type=` query parameter as a tab: a page type (topic, feature, ...) or a group id (start, roadmap); "" is All. */
export function tabOf(type: string | null): string {
  if (!type) return "";
  if (GROUPS.some((g) => g.id === type)) return type;
  return GROUP_OF_TYPE.get(type) ?? "";
}
/** The tab as the `type=` parameter it is written back as: a page type where one exists, so old links stay valid. */
export const typeParamOf = (tab: string) => (tab === "roadmap" ? "feature" : tab);

export interface Hit { r: Row; s: number }
export interface Group { def: GroupDef; hits: Hit[] }
/** Every hit, best first; within an equal score the newest first (videos, posts), the bigger hub, then by title. */
export function rank(rows: Row[], q: string): Hit[] {
  return rows.map((r) => ({ r, s: score(r, q) })).filter((h) => h.s > 0)
    .sort((a, b) => b.s - a.s || (b.r.date ?? "").localeCompare(a.r.date ?? "") || (b.r.members ?? 0) - (a.r.members ?? 0) || a.r.title.localeCompare(b.r.title));
}
/** The hits in the fixed group order, empty groups left out. */
export function groupHits(hits: Hit[]): Group[] {
  const by = new Map<string, Hit[]>();
  for (const h of hits) { const g = groupOf(h.r); const l = by.get(g); if (l) l.push(h); else by.set(g, [h]); }
  return GROUPS.filter((g) => by.has(g.id)).map((def) => ({ def, hits: by.get(def.id)! }));
}
/** AL object hits per app: Base Application first, then alphabetical; objects without an app last. */
export function byApp(hits: Hit[]): [string, Hit[]][] {
  const m = new Map<string, Hit[]>();
  for (const h of hits) { const a = h.r.app ?? "", l = m.get(a); if (l) l.push(h); else m.set(a, [h]); }
  return [...m].sort(([a], [b]) => (a === b ? 0 : a === "Base Application" ? -1 : b === "Base Application" ? 1 : !a ? 1 : !b ? -1 : a.localeCompare(b)));
}
/** `312 results for "subscription": 3 to start with, 6 roadmap, 9 videos, 14 posts, 280 AL objects` */
export function statusLine(q: string, groups: Group[]): string {
  const total = groups.reduce((n, g) => n + g.hits.length, 0);
  if (!total) return `No results for "${q}".`;
  return `${total.toLocaleString("en")} ${total === 1 ? "result" : "results"} for "${q}": ${groups.map((g) => `${g.hits.length.toLocaleString("en")} ${g.hits.length === 1 ? g.def.one : g.def.many}`).join(", ")}`;
}

// ---------------------------------------------------------------------------------------------- rendering

const badge = (tier: string) => `<span class="badge ${esc(tier)}">${tier === "community" ? "community - not Microsoft" : tier === "mixed" ? "mixed - official and community" : "official - Microsoft"}</span>`;
function rowHtml(r: Row, base: string, inApp: boolean): string {
  const caption = r.type === "object" && r.caption ? ` <span class="sr-caption meta">captioned "${esc(r.caption)}"</span>` : "";
  // an object's app is the heading it sits under; every other label says where the result sits
  const where = r.path_label && !(inApp && r.type === "object") ? `<span class="sr-path mono-meta">${esc(r.path_label)}</span>` : "";
  const stats = r.stats ? `<span class="sr-stats meta">${esc(r.stats)}</span>` : "";
  return `<li><span><a class="row-title" href="${base}${esc(r.path)}/">${esc(r.title)}</a>${caption}</span>${where}${stats}
      <span class="row-meta"><span class="type-label"${r.system ? ` style="color: var(--sys-${esc(r.system)})"` : ""}>${TYPE[r.type] ?? esc(r.type)}</span>${badge(r.tier)}${r.status ? `<span class="mono-meta">${esc(r.status)}</span>` : ""}${r.date ? `<span class="mono-meta">${esc(r.date)}</span>` : ""}</span>
      <p class="meta">${esc(r.summary.length > 220 ? `${r.summary.slice(0, 217)}...` : r.summary)}</p><span class="mono-meta">${esc(r.path)}.md</span></li>`;
}
/** A list with `visible` rows open, the next ones up to `max` behind "Show N more", and a count of the rest. */
function listHtml(hits: Hit[], base: string, visible: number, max: number, inApp = false): string {
  const shown = hits.slice(0, visible), more = hits.slice(visible, max), rest = hits.length - shown.length - more.length;
  return `<ul class="rows">${shown.map((h) => rowHtml(h.r, base, inApp)).join("")}</ul>${more.length ? `<details class="more"><summary>Show ${more.length} more</summary><ul class="rows">${more.map((h) => rowHtml(h.r, base, inApp)).join("")}</ul></details>` : ""}${rest > 0 ? `<p class="meta sr-rest">and ${rest.toLocaleString("en")} more: add a word to narrow the search.</p>` : ""}`;
}
/** The grouped results; a `tab` renders that one group with room for more rows. */
export function resultsHtml(groups: Group[], base: string, tab: string): string {
  const one = !!tab;
  return groups.filter((g) => !one || g.def.id === tab).map(({ def, hits }) => {
    const body = def.id === "object"
      ? byApp(hits).map(([app, hs]) => `<h3 class="sr-app">${esc(app || "Other objects")} <small>${hs.length.toLocaleString("en")}</small></h3>${listHtml(hs, base, one ? 25 : 10, one ? 200 : 50, true)}`).join("")
      : listHtml(hits, base, one ? 50 : def.cap, one ? 500 : 50);
    return `<section class="sr-group" aria-labelledby="sr-${def.id}"><h2 class="section-title" id="sr-${def.id}">${esc(def.label)} <small>${hits.length.toLocaleString("en")}</small></h2>${body}</section>`;
  }).join("");
}

export async function mountSearch(root: HTMLElement): Promise<void> {
  const base = root.dataset.base ?? "/";
  const input = root.querySelector<HTMLInputElement>("input[name=q]")!;
  const out = root.querySelector<HTMLElement>(".results")!;
  const status = root.querySelector<HTMLElement>(".status")!;
  const tablist = root.querySelector<HTMLElement>("[role=tablist]")!;
  const tabs = () => [...tablist.querySelectorAll<HTMLButtonElement>("[role=tab]")];
  const params = new URLSearchParams(location.search);
  input.value = params.get("q") ?? "";
  let tab = tabOf(params.get("type"));
  status.textContent = "Loading the index...";
  let rows: Row[] = [];
  try { rows = await loadRows(base); } catch { status.textContent = "The search index is not available right now."; return; }
  const paintTabs = (counts: Map<string, number> | null) => {
    const all = counts ? [...counts.values()].reduce((a, c) => a + c, 0) : null;
    for (const b of tabs()) {
      const id = b.dataset.tab ?? "", on = id === tab;
      b.setAttribute("aria-selected", String(on));
      b.tabIndex = on ? 0 : -1;
      const n = counts ? (id ? counts.get(id) ?? 0 : all) : null;
      b.querySelector("small")!.textContent = n === null ? "" : n.toLocaleString("en");
      b.classList.toggle("empty", n === 0);
      if (id === "other") b.hidden = !n && !on; // only when something lands there
    }
  };
  const run = () => {
    const q = input.value.trim();
    const url = new URL(location.href);
    if (q) url.searchParams.set("q", q); else url.searchParams.delete("q");
    if (tab) url.searchParams.set("type", typeParamOf(tab)); else url.searchParams.delete("type");
    history.replaceState(null, "", url);
    if (!q) { out.innerHTML = ""; paintTabs(null); status.textContent = `${rows.length.toLocaleString("en")} pages indexed. Try "subscription", "table 18", "Sales-Post" or "Belgium".`; return; }
    const groups = groupHits(rank(rows, q));
    paintTabs(new Map(groups.map((g) => [g.def.id, g.hits.length])));
    status.textContent = statusLine(q, groups);
    const html = resultsHtml(groups, base, tab);
    out.innerHTML = html || (tab && groups.length ? `<p class="meta">No ${esc(GROUPS.find((g) => g.id === tab)?.label.toLowerCase() ?? "results")} for "${esc(q)}". <button type="button" class="btn" data-all>Show all types</button></p>` : "");
    out.querySelector<HTMLButtonElement>("[data-all]")?.addEventListener("click", () => select("", true));
  };
  const select = (id: string, focus: boolean) => {
    tab = id; run();
    if (focus) tabs().find((b) => (b.dataset.tab ?? "") === id)?.focus();
  };
  for (const b of tabs()) b.addEventListener("click", () => select(b.dataset.tab ?? "", false));
  // a tablist: arrow keys, Home and End move between the tabs and select them
  tablist.addEventListener("keydown", (e) => {
    const list = tabs().filter((b) => !b.hidden), i = list.findIndex((b) => b === document.activeElement);
    if (i < 0) return;
    const to = e.key === "ArrowRight" ? (i + 1) % list.length : e.key === "ArrowLeft" ? (i - 1 + list.length) % list.length : e.key === "Home" ? 0 : e.key === "End" ? list.length - 1 : -1;
    if (to < 0) return;
    e.preventDefault();
    select(list[to].dataset.tab ?? "", true);
  });
  let t = 0;
  input.addEventListener("input", () => { clearTimeout(t); t = window.setTimeout(run, 150); });
  // Enter in the field opens the first result of the active group
  root.querySelector("form")!.addEventListener("submit", (e) => {
    e.preventDefault(); clearTimeout(t); run();
    const first = out.querySelector<HTMLAnchorElement>("a.row-title");
    if (first) location.href = first.href;
  });
  run();
}
