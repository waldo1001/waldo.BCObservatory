/**
 * Live search on the home page (D44): typing in the header field lights up the matching stars in the galaxy. The
 * search index (the MCP server's, ~7 MB) loads when the field gets focus, never on page load. Enter still submits the
 * form to the search page; Escape clears the field, then blurs it. Hits without a star (most AL objects, videos) count
 * towards their galaxy system and are listed in the panel as plain links.
 */
import type { GalaxyApi } from "./galaxy.js";
import { loadRows, score, type Row } from "./search.js";

export interface SearchHits { q: string; ids: string[]; reach: Record<string, number>; pages: Row[]; total: number }

/** Index path -> galaxy node id: "objects/table/18" -> "object/table/18" (the first segment loses its plural s). */
export const nodeIdOf = (path: string) => path.replace(/^([a-z]+)s\//, "$1/");

export function hitsFor(rows: Row[], q: string, hasStar: (id: string) => boolean): SearchHits {
  const scored = rows.map((r) => ({ r, s: score(r, q) })).filter((h) => h.s > 0).sort((a, b) => b.s - a.s || a.r.title.localeCompare(b.r.title));
  const ids: string[] = [], pages: Row[] = [], reach: Record<string, number> = {};
  for (const { r } of scored) {
    const id = nodeIdOf(r.path);
    if (hasStar(id)) ids.push(id);
    else { if (r.system) reach[r.system] = (reach[r.system] ?? 0) + 1; if (pages.length < 50) pages.push(r); }
  }
  return { q, ids, reach, pages, total: scored.length };
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
    const h = hitsFor(list, q, api.hasStar);
    api.setSearch(h);
    live.textContent = `${h.ids.length} stars, ${h.total - h.ids.length} pages without a star`;
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
