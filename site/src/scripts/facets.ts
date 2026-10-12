/**
 * D91: the pills of a filter block (`.facets`) in the browser. The markup is the build's: `.pills[data-facet]` groups of
 * `button[data-pill]` (the label is the text before `<small>`, the count is in it), `button[data-switch]`, and a closed
 * `details.facet-fold` around a long facet. A pill click applies pickPill, a switch click toggles. The DOM wiring around
 * the tested helpers of facets-core.ts and pills-core.ts.
 */
import { facetCounts, facetSummary, filterRows, isAllOn, listSearch, readListState, rescueState, type Counts, type FacetDef, type ListState } from "./facets-core.js";
import { pickDisabled, pickPill, pillDisabled } from "./pills-core.js";

export interface FacetUi {
  defs: FacetDef[]; switches: string[]; labels: Record<string, { id: string; label: string }[]>; state: ListState;
  /** aria-pressed, disabled (pickDisabled; the switch pillDisabled), the <small> counts, the fold summaries. Without
   *  counts only what is pressed and the summaries change (the records are not in yet). */
  show(st: ListState, counts?: Counts): void;
  onChange(fn: (st: ListState) => void): void;
}

const fmt = (n: number) => n.toLocaleString("en");
const setCount = (b: HTMLButtonElement, n: number) => { const s = b.querySelector("small"); if (s) s.textContent = fmt(n); };

/** Reads `.pills[data-facet]` (ids from `button[data-pill]` in order, labels from the button's text before <small>),
 *  `button[data-switch]` and `details.facet-fold > summary`; a pill click applies pickPill, a switch click toggles. */
export function bindFacets(root: HTMLElement): FacetUi {
  const groups = [...root.querySelectorAll<HTMLElement>(".pills[data-facet]")].map((g) => {
    const id = g.dataset.facet!, pills = [...g.querySelectorAll<HTMLButtonElement>("button[data-pill]")];
    return { id, pills, label: g.getAttribute("aria-label") ?? id, summary: g.closest("details.facet-fold")?.querySelector<HTMLElement>(":scope > summary") ?? null };
  });
  const swBtns = [...root.querySelectorAll<HTMLButtonElement>("button[data-switch]")];
  const defs: FacetDef[] = groups.map((g) => ({ id: g.id, values: g.pills.map((b) => b.dataset.pill!) }));
  const labels = Object.fromEntries(groups.map((g) => [g.id, g.pills.map((b) => ({ id: b.dataset.pill!, label: (b.firstChild?.textContent ?? "").trim() }))]));
  const listeners: ((st: ListState) => void)[] = [];
  const ui: FacetUi = {
    defs, switches: swBtns.map((b) => b.dataset.switch!), labels,
    state: { on: Object.fromEntries(defs.map((d) => [d.id, new Set(d.values)])), sw: new Set() },
    show(st, counts) {
      ui.state = st;
      for (const g of groups) {
        const on = st.on[g.id], full = g.pills.every((b) => on.has(b.dataset.pill!));
        for (const b of g.pills) {
          const k = b.dataset.pill!, pressed = on.has(k);
          b.setAttribute("aria-pressed", String(pressed));
          if (counts) { const n = counts.facets[g.id]?.[k] ?? 0; setCount(b, n); b.disabled = pickDisabled(pressed, full, n); }
        }
        if (g.summary) g.summary.textContent = facetSummary(g.label, on, labels[g.id]);
      }
      for (const b of swBtns) {
        const k = b.dataset.switch!, pressed = st.sw.has(k);
        b.setAttribute("aria-pressed", String(pressed));
        if (counts) { const n = counts.switches[k] ?? 0; setCount(b, n); b.disabled = pillDisabled(pressed, n); }
      }
    },
    onChange(fn) { listeners.push(fn); },
  };
  const change = (next: ListState) => { ui.show(next); for (const fn of listeners) fn(next); };
  for (const g of groups) for (const b of g.pills) b.addEventListener("click", () => {
    const st = ui.state, d = defs.find((x) => x.id === g.id)!;
    change({ on: { ...st.on, [g.id]: pickPill(st.on[g.id], b.dataset.pill!, d.values) }, sw: st.sw });
  });
  for (const b of swBtns) b.addEventListener("click", () => {
    const st = ui.state, sw = new Set(st.sw), k = b.dataset.switch!;
    if (sw.has(k)) sw.delete(k); else sw.add(k);
    change({ on: st.on, sw });
  });
  return ui;
}

/** The URL for a state: replaceState only when it changes; other parameters and the hash stay. */
export function writeSearch(st: ListState, ui: Pick<FacetUi, "defs" | "switches">): void {
  const s = listSearch(location.search, st, ui.defs, ui.switches);
  if (s !== location.search) history.replaceState(history.state, "", `${location.pathname}${s}${location.hash}`);
}

/** A plain left click (no modifier): the others keep the browser's own meaning (new tab, new window). */
const plainClick = (e: MouseEvent) => e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey;

/** /features/: rows are `table[data-facet-table] tbody tr`, a facet's value is `tr.dataset[<facet id>]`; filters in
 *  place (`tr.hidden`), writes the count line and the URL, and turns `a[data-cell]` clicks (plainClick) into a state
 *  read from the link's query, then scrolls `#all-features` into view (smooth unless reduced motion). */
export function mountTableFacets(root: HTMLElement, table: HTMLTableElement): void {
  const ui = bindFacets(root);
  const rows = [...(table.tBodies[0]?.rows ?? [])];
  const facets = ui.defs.map((d) => ({ id: d.id, value: (tr: HTMLTableRowElement) => tr.dataset[d.id] ?? "" }));
  const count = root.querySelector<HTMLElement>(".list-count");
  let st = ui.state;
  const render = () => {
    const pass = new Set(filterRows(rows, facets, [], st));
    for (const tr of rows) tr.hidden = !pass.has(tr);
    ui.show(st, facetCounts(rows, facets, [], st));
    if (count) count.textContent = isAllOn(st, ui.defs) ? "" : `${fmt(pass.size)} of ${fmt(rows.length)} shown`;
    writeSearch(st, ui);
  };
  const open = (search: string) => { st = rescueState(rows, facets, [], readListState(search, ui.defs, []), ui.defs); render(); };
  ui.onChange((next) => { st = next; render(); });
  document.addEventListener("click", (e) => {
    const a = (e.target as Element | null)?.closest?.<HTMLAnchorElement>("a[data-cell]");
    if (!a || !plainClick(e)) return;
    e.preventDefault();
    open(new URL(a.href).search);
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById("all-features")?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  });
  open(location.search);
}
