/**
 * The event explorer (D49): every published event of the current major with its subscribers, from index/events.json
 * and index/objects.json (titles, namespaces). Filters: kind, subscribers (any / with / none), area, text. Grouped
 * by area, then publisher; an event opens to its subscribers, each a link.
 */
type ObjRow = [string, string, number | null, string, string | null, string | null, string | null, ...unknown[]];
type EventRow = [string, string, string, string | null, [string, string][]];
const LABEL: Record<string, string> = { table: "Table", tableextension: "Table ext.", page: "Page", pageextension: "Page ext.", codeunit: "Codeunit", report: "Report", reportextension: "Report ext.", query: "Query", xmlport: "XMLport", enum: "Enum", enumextension: "Enum ext.", interface: "Interface", permissionset: "Permission set" };
const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!);
const areaOf = (ns: string | null, app: string | null) => { if (ns) { const p = ns.split("."); return (p[0] === "Microsoft" || p[0] === "System" ? p[1] : p[0]) ?? p[0]; } return app ?? "(no namespace)"; };

export function mountEvents(root: HTMLElement): void {
  const base = root.dataset.base ?? "/";
  const out = root.querySelector<HTMLElement>(".ev-out")!, stats = root.querySelector<HTMLElement>(".ev-stats")!;
  const kindSel = root.querySelector<HTMLSelectElement>("[name=kind]")!, subsSel = root.querySelector<HTMLSelectElement>("[name=subs]")!, areaSel = root.querySelector<HTMLSelectElement>("[name=area]")!, q = root.querySelector<HTMLInputElement>("[name=q]")!;
  let objs = new Map<string, ObjRow>(), events: EventRow[] = [];
  const title = (pk: string) => { const r = objs.get(pk); return r ? `${LABEL[r[1]] ?? r[1]}${r[2] !== null ? ` ${r[2]}` : ""} "${r[3]}"` : pk; };
  const area = (pk: string) => { const r = objs.get(pk); return r ? areaOf(r[5], r[4]) : "(unknown)"; };
  const link = (pk: string) => `${base}objects/${pk}/`;
  const apply = () => {
    const needle = q.value.trim().toLowerCase();
    const rows = events.filter((e) => (!kindSel.value || e[2] === kindSel.value) && (subsSel.value !== "with" || e[4].length) && (subsSel.value !== "none" || !e[4].length)
      && (!areaSel.value || area(e[0]) === areaSel.value) && (!needle || e[1].toLowerCase().includes(needle) || title(e[0]).toLowerCase().includes(needle) || e[4].some(([s]) => title(s).toLowerCase().includes(needle))));
    const total = rows.length, subs = rows.reduce((n, e) => n + e[4].length, 0), withSubs = rows.filter((e) => e[4].length).length;
    stats.innerHTML = `<li><span><b>${total.toLocaleString("en")}</b>events</span></li><li><span><b>${withSubs.toLocaleString("en")}</b>with first-party subscribers</span></li><li><span><b>${subs.toLocaleString("en")}</b>subscriptions</span></li>`;
    // by area, then publisher
    const byArea = new Map<string, Map<string, EventRow[]>>();
    for (const e of rows) { const a = area(e[0]); const m = byArea.get(a) ?? new Map(); m.set(e[0], [...(m.get(e[0]) ?? []), e]); byArea.set(a, m); }
    const areas = [...byArea].sort((x, y) => [...y[1].values()].flat().length - [...x[1].values()].flat().length || x[0].localeCompare(y[0]));
    let shownAreas = 0;
    out.innerHTML = areas.slice(0, 40).map(([a, pubs]) => {
      shownAreas++;
      const n = [...pubs.values()].flat().length;
      const pubList = [...pubs].sort((x, y) => y[1].reduce((s, e) => s + e[4].length, 0) - x[1].reduce((s, e) => s + e[4].length, 0) || title(x[0]).localeCompare(title(y[0]), "en", { numeric: true }));
      return `<details class="ev-area" ${areas.length <= 3 || !!needle ? "open" : ""}><summary><span class="ev-area-name">${esc(a)}</span> <span class="mono-meta">${pubs.size} publishers · ${n} events · ${[...pubs.values()].flat().reduce((s, e) => s + e[4].length, 0)} subscriptions</span></summary>
        ${pubList.slice(0, 80).map(([pk, evs]) => `<div class="ev-pub"><a href="${link(pk)}" class="row-title">${esc(title(pk))}</a> <span class="mono-meta">${evs.length} events · ${evs.reduce((s, e) => s + e[4].length, 0)} subscriptions</span>
          <ul class="rows">${evs.sort((x, y) => y[4].length - x[4].length || x[1].localeCompare(y[1])).slice(0, 120).map((e) => `<li><span class="badge ${e[2] === "trigger_event" ? "status-other" : e[2] === "business" ? "status-preview" : "status-ga"}">${esc(e[2] === "trigger_event" ? "trigger" : e[2])}</span> <code>${esc(e[1])}</code>${e[3] ? ` <span class="badge obsolete">obsolete ${esc(e[3])}</span>` : ""} <span class="mono-meta">${e[4].length} subscribers</span>
            ${e[4].length ? `<details class="ev-subs"><summary>subscribers</summary><ul>${e[4].slice(0, 100).map(([s, proc]) => `<li><a href="${link(s)}">${esc(title(s))}</a> <span class="mono-meta">${esc(proc)}</span></li>`).join("")}${e[4].length > 100 ? `<li class="mono-meta">and ${e[4].length - 100} more</li>` : ""}</ul></details>` : ""}</li>`).join("")}</ul>
          ${evs.length > 120 ? `<p class="meta">and ${evs.length - 120} more events</p>` : ""}</div>`).join("")}
        ${pubList.length > 80 ? `<p class="meta">and ${pubList.length - 80} more publishers in this area</p>` : ""}</details>`;
    }).join("") + (areas.length > shownAreas ? `<p class="meta">and ${areas.length - shownAreas} more areas: narrow the filters</p>` : "");
    const url = new URL(location.href);
    for (const [k, v] of [["kind", kindSel.value], ["subs", subsSel.value], ["area", areaSel.value], ["q", q.value]]) { if (v) url.searchParams.set(k, v); else url.searchParams.delete(k); }
    history.replaceState(null, "", url);
  };
  Promise.all([fetch(`${base}index/objects.json`).then((r) => r.json()), fetch(`${base}index/events.json`).then((r) => r.json())]).then(([o, e]) => {
    objs = new Map((o.rows as ObjRow[]).map((r) => [r[0], r]));
    events = e.rows as EventRow[];
    for (const a of [...new Set(events.map((x) => area(x[0])))].sort()) { const opt = document.createElement("option"); opt.value = a; opt.textContent = a; areaSel.append(opt); }
    const p = new URLSearchParams(location.search);
    kindSel.value = p.get("kind") ?? ""; subsSel.value = p.get("subs") ?? ""; areaSel.value = p.get("area") ?? ""; q.value = p.get("q") ?? "";
    apply();
  }).catch(() => { out.innerHTML = `<p class="meta">The events index is not available.</p>`; });
  for (const el of [kindSel, subsSel, areaSel]) el.addEventListener("change", apply);
  let t = 0; q.addEventListener("input", () => { clearTimeout(t); t = window.setTimeout(apply, 150); });
}
