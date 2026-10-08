/**
 * Site search over the same index the MCP server uses (data/index/, served under index/), ranked by the shared scorer
 * of packages/search (D86): the same order as the MCP, an exact object reference ("t36", "cu 80") first, then title,
 * caption, tags and summary matches per query word with plurals, one typo and synonyms forgiven, hubs ranked by their
 * size and review state, base objects before first-party and country ones, important objects before obscure ones. The
 * results page groups the hits (Start here, Roadmap, Videos, Posts, AL objects by app, Fields, Events, Procedures, ...)
 * behind a row of tabs, opens with "Exactly this" for a reference, a bare number or a kind: query, and says "did you
 * mean" when the words matched weakly or not at all.
 */
import {
  hints, hrefOf, parseQuery, search, symbolLine, type Hint, type Hit, type Index, type PageRecord, type ParsedQuery, type SearchRecord,
} from "@bc-observatory/search";
import { countriesNow, loadPages } from "./index-loader.js";

/** An index row: a page record of data/index/pages-*.json. */
export type Row = PageRecord;

const TYPE: Record<string, string> = { topic: "topic hub", app: "first-party app", feature: "roadmap feature", object: "AL object", localization: "localization", video: "video", post: "community post", change: "code change", source: "source", digest: "weekly digest", release: "release" };
const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!);

/** The query parsed against the countries the loaded index knows. */
export const parse = (q: string, index: Index): ParsedQuery => parseQuery(q, { countries: countriesNow(index) });

// ---------------------------------------------------------------------------------------------- groups (D65 3.1, D86)

export interface GroupDef { id: string; label: string; types: string[]; cap: number; one: string; many: string }
/** The fixed order of the results page; an empty group is omitted. `one`/`many` word the status line. */
export const GROUPS: GroupDef[] = [
  { id: "start", label: "Start here", types: ["topic", "app"], cap: 5, one: "to start with", many: "to start with" },
  { id: "roadmap", label: "Roadmap", types: ["feature"], cap: 10, one: "roadmap", many: "roadmap" },
  { id: "video", label: "Videos", types: ["video"], cap: 10, one: "video", many: "videos" },
  { id: "post", label: "Community posts", types: ["post"], cap: 10, one: "post", many: "posts" },
  { id: "object", label: "AL objects", types: ["object"], cap: 10, one: "AL object", many: "AL objects" },
  { id: "field", label: "Fields", types: [], cap: 10, one: "field", many: "fields" },
  { id: "event", label: "Events", types: [], cap: 10, one: "event", many: "events" },
  { id: "proc", label: "Procedures", types: [], cap: 10, one: "procedure", many: "procedures" },
  { id: "value", label: "Enum values", types: [], cap: 10, one: "enum value", many: "enum values" },
  { id: "change", label: "Code changes", types: ["change"], cap: 10, one: "code change", many: "code changes" },
  { id: "localization", label: "Localizations", types: ["localization"], cap: 10, one: "localization", many: "localizations" },
  { id: "source", label: "Sources", types: ["source"], cap: 10, one: "source", many: "sources" },
  { id: "digest", label: "Digests", types: ["digest"], cap: 10, one: "digest", many: "digests" },
  { id: "other", label: "Other pages", types: [], cap: 10, one: "other page", many: "other pages" },
];
const GROUP_OF_TYPE = new Map(GROUPS.flatMap((g) => g.types.map((t) => [t, g.id] as const)));
/** A page by its type, a symbol by its kind. */
export const groupOf = (r: Pick<SearchRecord, "type"> & { kind?: SearchRecord["kind"] }) => (r.kind && r.kind !== "page" ? r.kind : GROUP_OF_TYPE.get(r.type) ?? "other");
/** The `type=` query parameter as a tab: a page type (topic, feature, ...) or a group id (start, roadmap); "" is All. */
export function tabOf(type: string | null): string {
  if (!type) return "";
  if (GROUPS.some((g) => g.id === type)) return type;
  return GROUP_OF_TYPE.get(type) ?? "";
}
/** The tab as the `type=` parameter it is written back as: a page type where one exists, so old links stay valid. */
export const typeParamOf = (tab: string) => (tab === "roadmap" ? "feature" : tab);

export interface Group { def: GroupDef; hits: Hit[] }
/** Every hit of a query, best first (score, then newest, bigger, more important, title). */
export function rank(index: Index, q: string | ParsedQuery): Hit[] {
  return search(index, typeof q === "string" ? parse(q, index) : q);
}
/** The hits in the fixed group order, empty groups left out. */
export function groupHits(hits: Hit[]): Group[] {
  const by = new Map<string, Hit[]>();
  for (const h of hits) { const g = groupOf(h.r); const l = by.get(g); if (l) l.push(h); else by.set(g, [h]); }
  return GROUPS.filter((g) => by.has(g.id)).map((def) => ({ def, hits: by.get(def.id)! }));
}
/** AL object hits per app: Base Application first, then the first-party apps, then the country layers ("BE layer"); objects without an app last. */
export function byApp(hits: Hit[]): [string, Hit[]][] {
  const m = new Map<string, Hit[]>();
  for (const h of hits) { const a = h.r.app ?? "", l = m.get(a); if (l) l.push(h); else m.set(a, [h]); }
  const tier = (a: string) => (a === "Base Application" ? 0 : !a ? 3 : / layer$/.test(a) ? 2 : 1);
  return [...m].sort(([a], [b]) => tier(a) - tier(b) || a.localeCompare(b));
}
/** `312 results for "posting date": 3 to start with, 9 videos, 14 posts, 80 AL objects, 61 fields, 12 events` */
export function statusLine(q: string, groups: Group[]): string {
  const total = groups.reduce((n, g) => n + g.hits.length, 0);
  if (!total) return `No results for "${q}".`;
  return `${total.toLocaleString("en")} ${total === 1 ? "result" : "results"} for "${q}": ${groups.map((g) => `${g.hits.length.toLocaleString("en")} ${g.hits.length === 1 ? g.def.one : g.def.many}`).join(", ")}`;
}

// ---------------------------------------------------------------------------------------------- rendering

const badge = (tier: string) => `<span class="badge ${esc(tier)}">${tier === "community" ? "community - not Microsoft" : tier === "mixed" ? "mixed - official and community" : "official - Microsoft"}</span>`;
/** `matched "customer"`: a synonym or a typo says which word it met, so a reader learns it. */
const matched = (h: Hit) => h.why.filter((w) => w.startsWith("matched ")).map((w) => ` <span class="sr-matched meta">${esc(w)}</span>`).join("");
const cut = (s: string, n: number) => (s.length > n ? `${s.slice(0, n - 3)}...` : s);

function symbolHtml(h: Hit, base: string): string {
  const r = h.r;
  return `<li><span><a class="row-title" href="${esc(hrefOf(base, r.id))}">${esc(r.name)}</a>${matched(h)}</span>
      <span class="row-meta"><span class="mono-meta">${esc(symbolLine(r))}</span></span>${r.text ? `<p class="meta">${esc(cut(r.text, 160))}</p>` : ""}</li>`;
}
function rowHtml(h: Hit, base: string, inApp: boolean): string {
  if (h.r.kind !== "page" || !h.r.page) return symbolHtml(h, base);
  const r = h.r.page;
  const caption = r.type === "object" && r.caption ? ` <span class="sr-caption meta">captioned "${esc(r.caption)}"</span>` : "";
  // an object's app is the heading it sits under; every other label says where the result sits
  const where = r.path_label && !(inApp && r.type === "object") ? `<span class="sr-path mono-meta">${esc(r.path_label)}</span>` : "";
  const stats = r.stats ? `<span class="sr-stats meta">${esc(r.stats)}</span>` : "";
  return `<li><span><a class="row-title" href="${base}${esc(r.path)}/">${esc(r.title)}</a>${caption}${matched(h)}</span>${where}${stats}
      <span class="row-meta"><span class="type-label"${r.system ? ` style="color: var(--sys-${esc(r.system)})"` : ""}>${TYPE[r.type] ?? esc(r.type)}</span>${badge(r.tier)}${r.status ? `<span class="mono-meta">${esc(r.status)}</span>` : ""}${r.date ? `<span class="mono-meta">${esc(r.date)}</span>` : ""}</span>
      <p class="meta">${esc(cut(r.summary, 220))}</p><span class="mono-meta">${esc(r.path)}.md</span></li>`;
}
/** A list with `visible` rows open, the next ones up to `max` behind "Show N more", and a count of the rest. */
function listHtml(hits: Hit[], base: string, visible: number, max: number, inApp = false): string {
  const shown = hits.slice(0, visible), more = hits.slice(visible, max), rest = hits.length - shown.length - more.length;
  return `<ul class="rows">${shown.map((h) => rowHtml(h, base, inApp)).join("")}</ul>${more.length ? `<details class="more"><summary>Show ${more.length} more</summary><ul class="rows">${more.map((h) => rowHtml(h, base, inApp)).join("")}</ul></details>` : ""}${rest > 0 ? `<p class="meta sr-rest">and ${rest.toLocaleString("en")} more: add a word to narrow the search.</p>` : ""}`;
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

/**
 * "Exactly this", above the groups: the referenced object with its country twins as links ("also in BE, NL"), the
 * objects carrying a bare number across types, or the first symbols of a kind: query.
 */
export function exactHtml(q: ParsedQuery, hits: Hit[], base: string): string {
  let body = "";
  if (q.ref) {
    const refs = hits.filter((h) => h.s >= 850);
    if (!refs.length) return "";
    const [first, ...twins] = refs;
    body = `<ul class="rows">${rowHtml(first, base, false)}</ul>${twins.length ? `<p class="meta sr-twins">also in ${twins.map((t) => `<a href="${base}${esc(t.r.id)}/">${esc((t.r.country ?? "W1").toUpperCase())}</a>`).join(", ")}</p>` : ""}`;
  } else if (q.number !== null) {
    const ids = hits.filter((h) => !h.r.country).slice(0, 12);
    if (!ids.length) return "";
    body = `<ul class="rows">${ids.map((h) => rowHtml(h, base, false)).join("")}</ul>`;
  } else if (q.kind) {
    const syms = hits.filter((h) => h.r.kind === q.kind).slice(0, 5);
    if (!syms.length) return "";
    body = `<ul class="rows">${syms.map((h) => rowHtml(h, base, false)).join("")}</ul>`;
  } else return "";
  return `<section class="sr-group sr-exact" aria-labelledby="sr-exact"><h2 class="section-title" id="sr-exact">Exactly this</h2>${body}</section>`;
}

/** The did-you-mean line: a suggestion re-runs the search, a hub or an object opens. */
export function hintsHtml(hs: Hint[], base: string): string {
  if (!hs.length) return "";
  const one = (h: Hint) => {
    if (h.query) return `<a href="${base}search/?q=${encodeURIComponent(h.query)}" data-q="${esc(h.query)}">${esc(h.text)}</a>`;
    if (h.path) {
      // the page named after the last colon is the link ("... start with the hub: Sales.")
      const m = /^(.*: )([^:]+)\.$/.exec(h.text);
      return m ? `${esc(m[1])}<a href="${base}${esc(h.path)}/">${esc(m[2])}</a>.` : `${esc(h.text)} <a href="${base}${esc(h.path)}/">Open it</a>.`;
    }
    return esc(h.text);
  };
  return `<p class="sr-hints">${hs.map(one).join(" · ")}</p>`;
}

/** Which hints show: every one when nothing or only weak words matched; a typo, a missed reference or a question always. */
export function shownHints(q: ParsedQuery, hits: Hit[], hs: Hint[]): Hint[] {
  const weak = !hits.length || hits[0].s < 6;
  return hs.filter((h) => weak || q.question || !!q.ref || /: no page; /.test(h.text));
}

export async function mountSearch(root: HTMLElement): Promise<void> {
  const base = root.dataset.base ?? "/";
  const input = root.querySelector<HTMLInputElement>("input[name=q]")!;
  const out = root.querySelector<HTMLElement>(".results")!;
  const status = root.querySelector<HTMLElement>(".status")!;
  const hintsEl = root.querySelector<HTMLElement>(".hints")!;
  const tablist = root.querySelector<HTMLElement>("[role=tablist]")!;
  const tabs = () => [...tablist.querySelectorAll<HTMLButtonElement>("[role=tab]")];
  const params = new URLSearchParams(location.search);
  input.value = params.get("q") ?? "";
  let tab = tabOf(params.get("type"));
  status.textContent = "Loading the index...";
  // first paint after the hubs and media shards (D86 2.2); the AL objects fill in when their shards arrive
  let index: Index, waiting = "";
  try { index = await loadPages(base, ["hubs", "media"]); } catch { status.textContent = "The search index is not available right now."; return; }
  waiting = "loading AL objects…";
  const objects = loadPages(base, ["objects"]).then(() => { waiting = ""; run(); }).catch(() => { waiting = ""; run(); });
  const paintTabs = (counts: Map<string, number> | null) => {
    const all = counts ? [...counts.values()].reduce((a, c) => a + c, 0) : null;
    for (const b of tabs()) {
      const id = b.dataset.tab ?? "", on = id === tab;
      b.setAttribute("aria-selected", String(on));
      b.tabIndex = on ? 0 : -1;
      const n = counts ? (id ? counts.get(id) ?? 0 : all) : null;
      b.querySelector("small")!.textContent = n === null ? "" : n.toLocaleString("en");
      b.classList.toggle("empty", n === 0);
      if (b.dataset.optional !== undefined) b.hidden = !n && !on; // only when something lands there
    }
  };
  const run = () => {
    const raw = input.value.trim();
    const url = new URL(location.href);
    if (raw) url.searchParams.set("q", raw); else url.searchParams.delete("q");
    if (tab) url.searchParams.set("type", typeParamOf(tab)); else url.searchParams.delete("type");
    history.replaceState(null, "", url);
    if (!raw) { out.innerHTML = ""; hintsEl.innerHTML = ""; paintTabs(null); status.textContent = `${index.records.length.toLocaleString("en")} pages indexed. Try "t18", "Sales-Post", "OnAfterPostSalesDoc" or "BE".`; return; }
    const q = parse(raw, index);
    const hits = search(index, q);
    const groups = groupHits(hits);
    paintTabs(new Map(groups.map((g) => [g.def.id, g.hits.length])));
    status.textContent = `${statusLine(raw, groups)}${waiting ? ` (${waiting})` : ""}`;
    hintsEl.innerHTML = hintsHtml(shownHints(q, hits, hints(index, q, hits)), base);
    const html = (tab ? "" : exactHtml(q, hits, base)) + resultsHtml(groups, base, tab);
    out.innerHTML = html || (tab && groups.length ? `<p class="meta">No ${esc(GROUPS.find((g) => g.id === tab)?.label.toLowerCase() ?? "results")} for "${esc(raw)}". <button type="button" class="btn" data-all>Show all types</button></p>` : "");
    out.querySelector<HTMLButtonElement>("[data-all]")?.addEventListener("click", () => select("", true));
  };
  // a suggestion re-runs the search in place
  hintsEl.addEventListener("click", (e) => {
    const a = (e.target as HTMLElement).closest<HTMLAnchorElement>("a[data-q]");
    if (!a) return;
    e.preventDefault(); input.value = a.dataset.q ?? ""; run();
  });
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
  void objects;
}
