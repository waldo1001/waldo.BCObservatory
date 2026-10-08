/**
 * The object finder (D46): Ctrl/Cmd+K (or the header button) opens a palette that jumps to an AL object. `t18`,
 * `table 18`, `cu 80`, `Customer`, `page customer list` and `field:Posting Date` all work. Names rank with the shared
 * scorer of packages/search (D86), so the palette, the search page and the MCP agree. The palette reads the object
 * shards of the shared search index (index-loader.ts) when it first opens, never with the page; findObjects keeps
 * the explorer's lookup over index/objects.json rows.
 */
import { countriesOf, hrefOf, parseQuery, prepare, search, type Index, type SearchRecord } from "@bc-observatory/search";
import { loadPages } from "./index-loader.js";

type Row = [string, string, number | null, string, string | null, string | null, string | null, ...unknown[]]; // pk, type, id, name, app, ns, obsolete (+ atlas columns)
interface Hit { row: Row; note?: string; rank: number }

const LABEL: Record<string, string> = { table: "Table", tableextension: "Table extension", page: "Page", pageextension: "Page extension", codeunit: "Codeunit", report: "Report", reportextension: "Report extension", query: "Query", xmlport: "XMLport", enum: "Enum", enumextension: "Enum extension", interface: "Interface", permissionset: "Permission set", permissionsetextension: "Permission set extension", entitlement: "Entitlement", profile: "Profile", controladdin: "Control add-in", pagecustomization: "Page customization" };
const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!);
const title = (r: Row) => `${LABEL[r[1]] ?? r[1]}${r[2] !== null ? ` ${r[2]}` : ""} "${r[3]}"`;
const byTitle = (a: Hit, b: Hit) => title(a.row).localeCompare(title(b.row), "en", { numeric: true });

/** objects.json rows as records of the shared scorer, once per rows array: name, app (a country row's app is "BE layer"), Learn pages as the importance. */
const indexes = new WeakMap<Row[], { index: Index; rows: Map<SearchRecord, Row>; countries: string[] }>();
function indexOf(rows: Row[]) {
  let x = indexes.get(rows);
  if (x) return x;
  const map = new Map<SearchRecord, Row>(), countries = new Set<string>();
  const recs = rows.map((r) => {
    const country = / layer$/.test(r[4] ?? "") ? (r[4] as string).slice(0, 2).toLowerCase() : null;
    if (country) countries.add(country);
    const name = country ? r[3].replace(/ \([A-Z]{2}\)$/, "") : r[3];
    const rec: SearchRecord = { id: `objects/${r[0]}`, kind: "page", type: "object", name, title: title(r), text: "", objectType: r[1], objectId: r[2], app: r[4], country,
      layer: country ? 2 : !r[4] || r[4] === "Base Application" ? 0 : 1, importance: 0, inbound: typeof r[9] === "number" ? r[9] : 0 };
    map.set(rec, r);
    return rec;
  });
  x = { index: prepare(recs), rows: map, countries: [...countries] };
  indexes.set(rows, x);
  return x;
}

/** Rank object rows for a query; exported for the unit test and the explorer. */
export function findObjects(rows: Row[], q: string, fields?: Record<string, string[]>): Hit[] {
  const s = q.trim();
  if (!s) return [];
  const fieldQ = /^field:\s*(.*)$/i.exec(s);
  if (fieldQ) {
    if (!fields) return [];
    const needle = fieldQ[1].toLowerCase().trim();
    if (!needle) return [];
    const byPk = new Map(rows.map((r) => [r[0], r]));
    const hits: Hit[] = [];
    for (const [name, pks] of Object.entries(fields)) {
      const rank = name === needle ? 0 : name.startsWith(needle) ? 1 : name.includes(needle) ? 2 : -1;
      if (rank < 0) continue;
      for (const pk of pks) { const row = byPk.get(pk); if (row) hits.push({ row, note: `field "${name}"`, rank }); }
    }
    return hits.sort((a, b) => a.rank - b.rank || byTitle(a, b)).slice(0, 60);
  }
  const { index, rows: rowOf, countries } = indexOf(rows);
  const pq = parseQuery(s, { countries });
  const hits: Hit[] = search(index, pq, { kinds: ["page"], filter: (r) => r.type === "object" }).slice(0, 60).map((h, i) => ({ row: rowOf.get(h.r)!, rank: i, ...(h.why.find((w) => w.startsWith("matched ")) ? { note: h.why.find((w) => w.startsWith("matched "))! } : {}) }));
  // a jump-to tool: after the referenced object, the ids of that type that start with the digits ("t18" -> 1800, 1801, ...)
  if (pq.ref) {
    const ref = pq.ref, digits = String(ref.id);
    const prefix = rows.filter((r) => r[1] === ref.type && r[2] !== null && String(r[2]).startsWith(digits) && r[2] !== ref.id).sort((a, b) => (a[2] ?? 0) - (b[2] ?? 0));
    hits.push(...prefix.slice(0, 20).map((row, i) => ({ row, rank: hits.length + i })));
  }
  // a type word alone lists that type
  if (!hits.length && pq.types.length && !pq.terms.some((t) => !/^[a-z]+$/.test(t.text))) return rows.filter((r) => pq.types.includes(r[1] as never)).slice(0, 60).map((row, i) => ({ row, rank: i }));
  return hits;
}

/** A palette row: the page it opens and what it says. */
export interface PalHit { href: string; title: string; sub: string; note?: string }

/**
 * The palette over the shared index's object records (D86 2.2): a reference with the ids that start with its digits,
 * else names ranked by the shared scorer; `field:` lists the objects that have a field of that name (fields.json).
 */
export function paletteHits(index: Index, q: string, fields?: Record<string, string[]>): PalHit[] {
  const s = q.trim();
  if (!s) return [];
  const objects = index.byType.get("object") ?? [];
  const recs = objects.map((i) => index.records[i]);
  const hit = (r: SearchRecord, note?: string): PalHit => ({ href: r.id, title: r.title, sub: [r.app ?? "", r.page?.namespace ?? ""].filter(Boolean).join(" · ") + (r.page?.obsolete && r.page.obsolete !== "No" ? " · obsolete" : ""), ...(note ? { note } : {}) });
  const fieldQ = /^field:\s*(.*)$/i.exec(s);
  if (fieldQ) {
    if (!fields) return [];
    const needle = fieldQ[1].toLowerCase().trim();
    if (!needle) return [];
    const byPk = new Map(recs.map((r) => [r.id.slice("objects/".length), r]));
    const out: { h: PalHit; rank: number }[] = [];
    for (const [name, pks] of Object.entries(fields)) {
      const rank = name === needle ? 0 : name.startsWith(needle) ? 1 : name.includes(needle) ? 2 : -1;
      if (rank < 0) continue;
      for (const pk of pks) { const r = byPk.get(pk); if (r) out.push({ h: hit(r, `field "${name}"`), rank }); }
    }
    return out.sort((a, b) => a.rank - b.rank || a.h.title.localeCompare(b.h.title, "en", { numeric: true })).slice(0, 60).map((x) => x.h);
  }
  const pq = parseQuery(s, { countries: countriesOf(index) });
  const hits = search(index, pq, { kinds: ["page"], filter: (r) => r.type === "object" }).slice(0, 60).map((h) => hit(h.r, h.why.find((w) => w.startsWith("matched "))));
  if (pq.ref) {
    const ref = pq.ref, digits = String(ref.id);
    const more = recs.filter((r) => r.objectType === ref.type && r.objectId != null && !r.country && String(r.objectId).startsWith(digits) && r.objectId !== ref.id).sort((a, b) => (a.objectId ?? 0) - (b.objectId ?? 0));
    hits.push(...more.slice(0, 20).map((r) => hit(r)));
  }
  return hits;
}

export function mountPalette(base: string): void {
  let fields: Promise<Record<string, string[]>> | null = null;
  const load = () => loadPages(base, ["objects"]).catch(() => null);
  const loadFields = () => (fields ??= fetch(`${base}index/fields.json`).then((r) => r.json()).then((j) => j.fields as Record<string, string[]>).catch(() => ({})));
  const dlg = document.createElement("dialog");
  dlg.className = "pal";
  dlg.innerHTML = `<form method="dialog" class="pal-form"><label class="skip" for="pal-q">Find an AL object</label>
    <input id="pal-q" type="search" autocomplete="off" spellcheck="false" placeholder="table 18, cu 80, Customer, page customer list, field:Posting Date" />
    <button type="submit" class="icon-btn" aria-label="Close">×</button></form>
    <p class="pal-status meta" aria-live="polite">Type to find an object. Enter opens it; ↑↓ move; Esc closes.</p>
    <ul class="pal-list" role="listbox" aria-label="Objects"></ul>`;
  document.body.append(dlg);
  const input = dlg.querySelector<HTMLInputElement>("#pal-q")!, list = dlg.querySelector<HTMLUListElement>(".pal-list")!, status = dlg.querySelector<HTMLElement>(".pal-status")!;
  let hits: PalHit[] = [], active = 0;
  const href = (h: PalHit) => hrefOf(base, h.href);
  const render = () => {
    list.innerHTML = hits.map((h, i) => `<li role="option" aria-selected="${i === active}" class="${i === active ? "on" : ""}"><a href="${esc(href(h))}"><span class="pal-title">${esc(h.title)}</span><span class="pal-sub">${esc(h.note ? `${h.note} · ` : "")}${esc(h.sub)}</span></a></li>`).join("");
    list.querySelector<HTMLElement>("li.on")?.scrollIntoView({ block: "nearest" });
  };
  let timer = 0;
  const run = async () => {
    const q = input.value;
    const index = await load();
    const f = /^field:/i.test(q) ? await loadFields() : undefined;
    if (input.value !== q) return;
    if (!index) { status.textContent = "The object index is not available right now."; return; }
    hits = paletteHits(index, q, f); active = 0;
    const n = index.byType.get("object")?.length ?? 0;
    status.textContent = q.trim() ? (hits.length ? `${hits.length === 60 ? "First 60" : hits.length} objects` : "No object matches. Try a type and id (t18), a name, or field:Name.") : `${n.toLocaleString("en")} AL objects. Type to find one.`;
    render();
  };
  const open = () => { if (!dlg.open) dlg.showModal(); input.select(); load().then(() => { if (!input.value) run(); }); };
  input.addEventListener("input", () => { clearTimeout(timer); timer = window.setTimeout(run, 80); });
  input.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") { e.preventDefault(); active = Math.min(hits.length - 1, active + 1); render(); }
    if (e.key === "ArrowUp") { e.preventDefault(); active = Math.max(0, active - 1); render(); }
    if (e.key === "Enter" && hits[active]) { e.preventDefault(); location.href = href(hits[active]); }
  });
  dlg.addEventListener("click", (e) => { if (e.target === dlg) dlg.close(); });
  addEventListener("keydown", (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); open(); }
  });
  for (const b of document.querySelectorAll<HTMLElement>("[data-palette]")) b.addEventListener("click", open);
}
