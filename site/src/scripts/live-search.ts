/**
 * Live search on the home page (D44): typing in the header field lights up the matching stars in the galaxy. The
 * search index (the MCP server's, ~7 MB) loads when the field gets focus, never on page load. Enter still submits the
 * form to the search page; Escape clears the field, then blurs it. Hits without a star (most AL objects, videos) count
 * towards their galaxy system and are listed in the panel as plain links.
 */
import type { GalaxyApi } from "./galaxy.js";
import { loadRows, score, type Row } from "./search.js";

/** ids: the star ids in panel order; stars: their index rows, same order (path label, members); pages: star-less hits. */
export interface SearchHits { q: string; ids: string[]; stars: Row[]; reach: Record<string, number>; pages: Row[]; total: number }
/** What the panel order needs of a star: its evidence count and graph weight. */
export interface StarFacts { ev?: number; weight: number }

/** Index path -> galaxy node id: "objects/table/18" -> "object/table/18" (the first segment loses its plural s). */
export const nodeIdOf = (path: string) => path.replace(/^([a-z]+)s\//, "$1/");

/** Panel order of the stars (D65 3.2): hubs and apps, then roadmap features, then objects, then the rest. */
const starClass = (type: string) => (type === "topic" || type === "app" ? 0 : type === "feature" ? 1 : type === "object" ? 2 : 3);

/**
 * The hits of a query: stars (in panel order), star-less pages (best first, up to 50) and their count per system.
 * Within a class the score decides (it already weighs a hub's size and review state), then members (a hub's or app's
 * Learn pages, objects and media; the star's evidence count otherwise), then the star's weight.
 */
export function hitsFor(rows: Row[], q: string, hasStar: (id: string) => boolean, facts: (id: string) => StarFacts | undefined = () => undefined): SearchHits {
  const scored = rows.map((r) => ({ r, s: score(r, q) })).filter((h) => h.s > 0).sort((a, b) => b.s - a.s || a.r.title.localeCompare(b.r.title));
  const stars: { r: Row; s: number; size: number; weight: number }[] = [], pages: Row[] = [], reach: Record<string, number> = {};
  for (const { r, s } of scored) {
    const id = nodeIdOf(r.path);
    if (hasStar(id)) { const f = facts(id); stars.push({ r, s, size: r.members ?? f?.ev ?? 0, weight: f?.weight ?? 0 }); }
    else { if (r.system) reach[r.system] = (reach[r.system] ?? 0) + 1; if (pages.length < 50) pages.push(r); }
  }
  stars.sort((a, b) => starClass(a.r.type) - starClass(b.r.type) || b.s - a.s || b.size - a.size || b.weight - a.weight || a.r.title.localeCompare(b.r.title));
  return { q, ids: stars.map((x) => nodeIdOf(x.r.path)), stars: stars.map((x) => x.r), reach, pages, total: scored.length };
}

/** The last part of a path label, for the live region: "Business functionality › Sales" -> "Sales". */
const lastPart = (label: string | undefined) => label?.split(" › ").at(-1) ?? "";
/** `13 stars, 406 pages without a star. First: Subscription billing (Sales).` */
export function liveText(h: SearchHits): string {
  const first = h.stars[0];
  const where = first ? lastPart(first.path_label) : "";
  return `${h.ids.length} ${h.ids.length === 1 ? "star" : "stars"}, ${h.total - h.ids.length} pages without a star.${first ? ` First: ${first.title}${where ? ` (${where})` : ""}.` : ""}`;
}

export function mountLiveSearch(input: HTMLInputElement, api: GalaxyApi, base: string): void {
  let rows: Promise<Row[]> | null = null;
  const load = () => (rows ??= loadRows(base).catch(() => [] as Row[]));
  const live = document.createElement("span");
  live.className = "skip"; live.setAttribute("aria-live", "polite"); live.id = "q-live";
  input.insertAdjacentElement("afterend", live);
  input.setAttribute("aria-controls", "g-panel");
  input.setAttribute("aria-describedby", "q-live");
  let timer = 0, last = "";
  const run = async () => {
    const q = input.value.trim();
    if (q.length < 2) { if (last) { last = ""; api.setSearch(null); live.textContent = ""; } return; }
    const list = await load();
    if (input.value.trim() !== q) return; // the reader kept typing
    last = q;
    const h = hitsFor(list, q, api.hasStar, api.starFacts);
    api.setSearch(h);
    live.textContent = liveText(h);
  };
  input.addEventListener("focus", () => { load(); });
  input.addEventListener("input", () => { clearTimeout(timer); timer = window.setTimeout(run, 150); });
  input.addEventListener("keydown", (e) => {
    if (e.key === "Escape") { e.preventDefault(); if (input.value) { input.value = ""; last = ""; api.setSearch(null); live.textContent = ""; } else input.blur(); }
    if (e.key === "ArrowDown") { const first = document.querySelector<HTMLElement>("#g-panel .g-list button, #g-panel .g-list a"); if (first) { e.preventDefault(); first.focus(); } }
  });
  api.onSearchCleared(() => { input.value = ""; last = ""; live.textContent = ""; });
  api.onHashQuery((q) => { input.value = q; run(); });
}
