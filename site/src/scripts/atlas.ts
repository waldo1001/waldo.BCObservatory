/**
 * The codebase atlas (D47): a zoomable treemap of the AL objects by namespace (Microsoft > Sales > Customer), drawn
 * from index/objects.json. Size = object count; colour = the galaxy system of the namespace, or a lens: changed in a
 * major, obsolete share, Learn coverage, country overrides. Filters by type, app, introduced major and obsolete.
 * Clicking a rectangle zooms into that namespace; the table below lists the objects of the current view.
 */
import { buildTree as buildTreeOf, descendants, nsSegments, squarify, type TreeNode } from "../../../pipeline/lib/treemap";
type Row = [string, string, number | null, string, string | null, string | null, string | null, string | null, string, number, number];
type Node = TreeNode<Row>;
/** D72: one `changed:<major>` lens per major the page renders (config/versions.json), the rest fixed. */
type Lens = "system" | `changed:${string}` | "introduced" | "obsolete" | "learn" | "countries";
const LENS_FIXED: Record<string, string> = { system: "galaxy system", obsolete: "obsolete share", learn: "documented on Learn", countries: "replaced by countries" };
/** The legend's wording of a lens; `introFrom` is the first major an object can be introduced in (the second snapshot). */
export const lensLabel = (lens: Lens, introFrom: string | undefined): string =>
  lens.startsWith("changed:") ? `changed in BC${lens.slice(8)}` : lens === "introduced" ? `introduced in BC${introFrom ?? "?"} or later` : LENS_FIXED[lens] ?? lens;
const LABEL: Record<string, string> = { table: "Table", tableextension: "Table ext.", page: "Page", pageextension: "Page ext.", codeunit: "Codeunit", report: "Report", reportextension: "Report ext.", query: "Query", xmlport: "XMLport", enum: "Enum", enumextension: "Enum ext.", interface: "Interface", permissionset: "Permission set", permissionsetextension: "Perm. set ext.", entitlement: "Entitlement", profile: "Profile", controladdin: "Control add-in", pagecustomization: "Page cust.", dotnet: "DotNet" };
const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!);

/** Namespace segments after the vendor: "Microsoft.Sales.Customer" -> ["Sales", "Customer"]; no namespace -> [app]. */
export const segments = (r: Row): string[] => nsSegments(r[5], r[4]);
export const buildTree = (rows: Row[]): Node => buildTreeOf(rows, segments);
export { descendants, squarify };

export function mountAtlas(root: HTMLElement): void {
  const base = root.dataset.base ?? "/";
  const canvas = root.querySelector("canvas")!, ctx = canvas.getContext("2d")!;
  const crumbs = root.querySelector<HTMLElement>(".atlas-crumbs")!, legend = root.querySelector<HTMLElement>(".atlas-legend")!;
  const tbody = root.querySelector<HTMLElement>(".atlas-table tbody")!, tstat = root.querySelector<HTMLElement>(".atlas-count")!, more = root.querySelector<HTMLButtonElement>("[data-more]")!;
  const lensSel = root.querySelector<HTMLSelectElement>("[name=lens]")!, typeSel = root.querySelector<HTMLSelectElement>("[name=type]")!, appSel = root.querySelector<HTMLSelectElement>("[name=app]")!;
  const introSel = root.querySelector<HTMLSelectElement>("[name=intro]")!, obsChk = root.querySelector<HTMLInputElement>("[name=obsolete]")!, nameIn = root.querySelector<HTMLInputElement>("[name=name]")!;
  const tip = root.querySelector<HTMLElement>(".atlas-tip")!;
  const majors: string[] = (() => { try { return JSON.parse(root.dataset.majors ?? "[]"); } catch { return []; } })();
  const introFrom = majors[1] ?? majors[0];
  let all: Row[] = [], filtered: Row[] = [], tree: Node, view: Node, hover: Node | null = null, shown = 200;
  const css = getComputedStyle(document.documentElement), v = (k: string) => css.getPropertyValue(`--${k}`).trim();
  const sysOf = (path: string) => (root.dataset.systems ? (JSON.parse(root.dataset.systems) as Record<string, string>)[path.split(".")[0].toLowerCase()] : undefined);
  const metric = (rows: Row[], lens: Lens): number => {
    if (!rows.length) return 0;
    const share = (f: (r: Row) => boolean) => rows.filter(f).length / rows.length;
    if (lens.startsWith("changed:")) { const m = lens.slice(8); return share((r) => r[8].split(" ").includes(m)); }
    switch (lens) {
      case "introduced": return share((r) => r[7] !== null);
      case "obsolete": return share((r) => !!r[6] && r[6] !== "No");
      case "learn": return share((r) => r[9] > 0);
      case "countries": return share((r) => r[10] > 0);
      default: return 0;
    }
  };
  const apply = () => {
    const q = nameIn.value.trim().toLowerCase();
    filtered = all.filter((r) => (!typeSel.value || r[1] === typeSel.value) && (!appSel.value || r[4] === appSel.value)
      && (!introSel.value || (introSel.value === "old" ? r[7] === null : r[7] === introSel.value)) && (!obsChk.checked || (!!r[6] && r[6] !== "No"))
      && (!q || r[3].toLowerCase().includes(q) || (r[5] ?? "").toLowerCase().includes(q)));
    tree = buildTree(filtered);
    // keep the current zoom path when it still exists
    let n: Node | undefined = tree;
    for (const seg of (view?.path ?? "").split(".").filter(Boolean)) { n = n?.children.get(seg); if (!n) break; }
    view = n ?? tree; shown = 200;
    draw(); table();
    const url = new URL(location.href);
    const state: Record<string, string> = { lens: lensSel.value, type: typeSel.value, app: appSel.value, intro: introSel.value, obs: obsChk.checked ? "1" : "", q: nameIn.value, ns: view.path };
    for (const [k, val] of Object.entries(state)) { if (val && !(k === "lens" && val === "system")) url.searchParams.set(k, val); else url.searchParams.delete(k); }
    history.replaceState(null, "", url);
  };
  function draw() {
    const W = canvas.clientWidth, H = Math.max(360, Math.min(640, Math.round(W * 0.56))), dpr = window.devicePixelRatio || 1;
    canvas.style.height = `${H}px`; canvas.width = W * dpr; canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = v("g-bg"); ctx.fillRect(0, 0, W, H);
    const kids = [...view.children.values()];
    // objects directly under the view (no deeper namespace) get a synthetic leaf
    if (view.rows.length) kids.push({ name: view.children.size ? "(this level)" : view.name, path: view.path, children: new Map(), rows: view.rows, count: view.rows.length, x: 0, y: 0, w: 0, h: 0 });
    squarify(kids, 2, 2, W - 4, H - 4);
    const lens = lensSel.value as Lens;
    ctx.font = "600 12px 'Bricolage Grotesque Variable', system-ui, sans-serif"; ctx.textBaseline = "top";
    for (const k of kids) {
      const sys = sysOf(k.path || view.path);
      const col = sys ? v(`sys-${sys}`) : v("muted");
      ctx.fillStyle = col;
      ctx.globalAlpha = lens === "system" ? 0.35 : 0.08 + 0.72 * metric(descendants(k), lens);
      ctx.fillRect(k.x, k.y, k.w, k.h);
      ctx.globalAlpha = 1; ctx.strokeStyle = v("g-bg"); ctx.lineWidth = 2; ctx.strokeRect(k.x, k.y, k.w, k.h);
      if (k === hover) { ctx.strokeStyle = v("accent-dot"); ctx.lineWidth = 2; ctx.strokeRect(k.x + 1, k.y + 1, k.w - 2, k.h - 2); }
      if (k.w > 60 && k.h > 24) {
        const label = k.name.length * 7 > k.w - 10 ? `${k.name.slice(0, Math.max(3, Math.floor((k.w - 14) / 7)))}…` : k.name;
        ctx.fillStyle = v("text"); ctx.fillText(label, k.x + 6, k.y + 5);
        if (k.h > 40) { ctx.fillStyle = v("text-2"); ctx.font = "400 11px 'JetBrains Mono', monospace"; ctx.fillText(lens === "system" ? String(k.count) : `${k.count} · ${Math.round(metric(descendants(k), lens) * 100)}%`, k.x + 6, k.y + 22); ctx.font = "600 12px 'Bricolage Grotesque Variable', system-ui, sans-serif"; }
      }
    }
    (view as Node & { kids?: Node[] }).kids = kids;
    crumbs.innerHTML = [`<button type="button" data-ns="">All objects</button>`, ...view.path.split(".").filter(Boolean).map((seg, i, a) => `<button type="button" data-ns="${esc(a.slice(0, i + 1).join("."))}">${esc(seg)}</button>`)].join('<span aria-hidden="true"> / </span>');
    for (const b of crumbs.querySelectorAll<HTMLButtonElement>("button")) b.addEventListener("click", () => zoomTo(b.dataset.ns ?? ""));
    legend.textContent = lens === "system" ? "Size = objects. Colour = the galaxy system of the namespace. Click a block to zoom in; the table lists what you see." : `Size = objects. Brightness = share ${lensLabel(lens, introFrom)} (${Math.round(metric(descendants(view), lens) * 100)}% of the ${descendants(view).length} objects in view).`;
  }
  const zoomTo = (path: string) => { let n: Node | undefined = tree; for (const seg of path.split(".").filter(Boolean)) n = n?.children.get(seg); view = n ?? tree; hover = null; shown = 200; draw(); table(); const url = new URL(location.href); if (view.path) url.searchParams.set("ns", view.path); else url.searchParams.delete("ns"); history.replaceState(null, "", url); };
  const kidAt = (mx: number, my: number) => ((view as Node & { kids?: Node[] }).kids ?? []).find((k) => mx >= k.x && mx <= k.x + k.w && my >= k.y && my <= k.y + k.h) ?? null;
  const pos = (e: MouseEvent) => { const r = canvas.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; };
  canvas.addEventListener("mousemove", (e) => { const p = pos(e); const k = kidAt(p.x, p.y); if (k !== hover) { hover = k; draw(); } if (k) { tip.hidden = false; tip.textContent = `${k.path || k.name}: ${k.count} objects`; tip.style.transform = `translate(${p.x + 12}px, ${p.y + 12}px)`; canvas.style.cursor = k.children.size || k.rows.length ? "zoom-in" : "default"; } else tip.hidden = true; });
  canvas.addEventListener("mouseleave", () => { hover = null; tip.hidden = true; draw(); });
  canvas.addEventListener("click", (e) => { const p = pos(e); const k = kidAt(p.x, p.y); if (!k) return; if (k.children.size) zoomTo(k.path); else { const first = k.rows[0]; if (k.rows.length === 1 && first) location.href = `${base}objects/${first[0]}/`; else zoomTo(k.path); } });
  function table() {
    const rows = descendants(view).sort((a, b) => a[1].localeCompare(b[1]) || (a[2] ?? 0) - (b[2] ?? 0) || a[3].localeCompare(b[3]));
    tstat.textContent = `${rows.length.toLocaleString("en")} objects${view.path ? ` in ${view.path}` : ""}${rows.length > shown ? `, first ${shown}` : ""}`;
    tbody.innerHTML = rows.slice(0, shown).map((r) => `<tr><td><a href="${base}objects/${esc(r[0])}/">${esc(LABEL[r[1]] ?? r[1])}${r[2] !== null ? ` ${r[2]}` : ""} "${esc(r[3])}"</a></td><td class="mono-meta">${esc(r[5] ?? "")}</td><td>${esc(r[4] ?? "")}</td><td class="mono-meta">${r[7] ? `BC${r[7]}` : ""}${r[8] ? ` · Δ ${r[8].split(" ").map((x) => `BC${x}`).join(", ")}` : ""}${r[6] && r[6] !== "No" ? ` · obsolete` : ""}${r[9] ? ` · ${r[9]} Learn` : ""}${r[10] ? ` · ${r[10]} countries` : ""}</td></tr>`).join("");
    more.hidden = rows.length <= shown;
  }
  more.addEventListener("click", () => { shown += 400; table(); });
  for (const el of [lensSel, typeSel, appSel, introSel, obsChk]) el.addEventListener("change", apply);
  let t = 0; nameIn.addEventListener("input", () => { clearTimeout(t); t = window.setTimeout(apply, 150); });
  new ResizeObserver(() => { if (tree) draw(); }).observe(canvas);
  addEventListener("bcobs-theme", () => { if (tree) draw(); });
  fetch(`${base}index/objects.json`).then((r) => r.json()).then((j) => {
    all = j.rows as Row[];
    for (const [name, sel] of [["type", typeSel], ["app", appSel]] as const) {
      const vals = [...new Set(all.map((r) => (name === "type" ? r[1] : r[4])).filter((x): x is string => !!x))].sort();
      for (const val of vals) { const o = document.createElement("option"); o.value = val; o.textContent = name === "type" ? (LABEL[val] ?? val) : val; sel.append(o); }
    }
    const p = new URLSearchParams(location.search);
    lensSel.value = (p.get("lens") ?? "system").replace(/^changed(\d+)$/, "changed:$1"); if (!lensSel.value) lensSel.value = "system"; typeSel.value = p.get("type") ?? ""; appSel.value = p.get("app") ?? ""; introSel.value = p.get("intro") ?? ""; obsChk.checked = p.get("obs") === "1"; nameIn.value = p.get("q") ?? "";
    view = { name: "", path: p.get("ns") ?? "", children: new Map(), rows: [], count: 0, x: 0, y: 0, w: 0, h: 0 } as Node;
    apply();
  }).catch(() => { legend.textContent = "The objects index is not available."; });
}
