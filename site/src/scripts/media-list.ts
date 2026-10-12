/**
 * D91: a list page (changes, videos, posts) in the browser. The build wrote the newest 50 rows, the pills with their
 * counts and a closed title list of every other page. Nothing is fetched until the reader acts (a pill, the switch,
 * "Show more" or a filtered URL); then the media records come through index-loader (the search index's media shard,
 * from Cache Storage when the search stored it) and every row is rendered from them with list-rows.ts.
 */
import type { PageRecord } from "@bc-observatory/search";
import { bindFacets, writeSearch } from "./facets.js";
import { facetCounts, filterRows, isAllOn, readListState, rescueState, type ListState } from "./facets-core.js";
import { loadMediaRecords } from "./index-loader.js";
import { CHANGE_FACETS, CHANGE_SWITCHES, LIST_STATIC, LIST_STEP, MEDIA_FACETS, changeRow, listOrder, moreText, postRow, videoRow, type MediaType } from "./list-rows.js";

const fmt = (n: number) => n.toLocaleString("en");

export function mountMediaList(doc: Document = document): void {
  const ul = doc.querySelector<HTMLUListElement>("ul[data-list]"), root = doc.querySelector<HTMLElement>("[data-facets]");
  const more = doc.querySelector<HTMLButtonElement>("[data-more]"), status = doc.querySelector<HTMLElement>("[data-more-status]");
  const archive = doc.querySelector<HTMLDetailsElement>("details.list-archive"), count = doc.querySelector<HTMLElement>(".list-count");
  if (!ul || !root || !more || !status) return;
  const type = ul.dataset.list as MediaType, base = doc.body.dataset.base ?? "/";
  let icons: Record<string, string> = {};
  try { icons = JSON.parse(doc.querySelector("script[data-icons]")?.textContent || "{}"); } catch { /* rows without icons */ }
  const ui = bindFacets(root);
  const ids = new Set(ui.defs.map((d) => d.id));
  const facets = (type === "change" ? CHANGE_FACETS : MEDIA_FACETS).filter((f) => ids.has(f.id));
  const switches = type === "change" ? CHANGE_SWITCHES.filter((s) => ui.switches.includes(s.id)) : [];
  const rowOf = type === "change" ? changeRow : type === "video" ? videoRow : (r: PageRecord) => postRow(r, icons[r.source ?? ""] ?? null);
  let st: ListState = readListState(location.search, ui.defs, ui.switches), shown = LIST_STATIC;
  let records: PageRecord[] | null = null, loading: Promise<boolean> | null = null;
  if (more.textContent?.trim()) more.hidden = false;

  /** The records once, in list order; on failure the 50 static rows stay and the title list opens. */
  const ensure = (): Promise<boolean> => (loading ??= (async () => {
    more.disabled = true;
    status.textContent = "Loading the full list";
    try {
      const all = (await loadMediaRecords(base)).filter((r) => r.type === type).sort(listOrder);
      if (!all.length) throw new Error(`no ${type} records`);
      records = all;
      st = rescueState(records, facets, switches, st, ui.defs);
      return true;
    } catch {
      status.textContent = "The full list did not load; every title is in the list below.";
      if (archive) archive.open = true;
      loading = null; // the next pill or click tries again
      return false;
    }
  })());

  /** Filter, then the first `shown` rows; the pills, the count line, the bottom line, the URL. Returns the rows' total. */
  const render = (): number => {
    const recs = records!, rows = filterRows(recs, facets, switches, st);
    ul.innerHTML = rows.slice(0, shown).map(rowOf).join("");
    ui.show(st, facetCounts(recs, facets, switches, st));
    if (count) count.textContent = isAllOn(st, ui.defs) ? "" : `${fmt(rows.length)} of ${fmt(recs.length)} shown`;
    const m = moreText(Math.min(shown, rows.length), rows.length);
    status.textContent = m.status;
    more.hidden = !m.button;
    more.disabled = false;
    if (m.button) more.textContent = m.button;
    if (archive) archive.hidden = true; // it served crawlers and readers without JavaScript
    writeSearch(st, ui);
    return rows.length;
  };

  ui.onChange(async (next) => {
    st = next;
    shown = LIST_STATIC;
    writeSearch(st, ui);
    if (await ensure()) render();
  });
  more.addEventListener("click", async () => {
    const before = ul.children.length;
    shown = Math.max(shown, before) + LIST_STEP;
    if (!(await ensure())) return;
    render();
    // focus the first newly shown row's link, or the bottom line when nothing was added
    const row = ul.children[before] as HTMLElement | undefined;
    const target = row?.querySelector<HTMLElement>("a:not([tabindex])") ?? status;
    if (target === status) status.tabIndex = -1;
    target.focus();
  });

  // a filtered URL: drop unknown values now, then load and show it; all on: nothing until the reader acts
  writeSearch(st, ui);
  if (!isAllOn(st, ui.defs)) {
    ui.show(st);
    void ensure().then((ok) => { if (ok) render(); });
  }
}
