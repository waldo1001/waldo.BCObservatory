/**
 * The neighbourhood explorer (D66 phase 3, view C). One object in the middle; ring 1 its direct code relations, right
 * what it points to and left what points to it; ring 2 the grouped kinds as pills; the top arc Learn pages and media.
 * Data: code/neighbours/<major>/<system>.json (one file per system, cached per URL), index.json when the URL has no
 * system. The list is the first view (always in the DOM and the tab order); the SVG picture is a second view on it.
 */
import {
  RINGS, TOP, edgeStyle, groupBySystem, keyOf, objectTitle, parseState, placeArc, placeFan, placePills, placeSide, primaryKind, rankKeys, serialiseState, step,
  type NameRow, type Pt, type Ring, type RingRow, type State,
} from "./explorer-core";
import { findObjects } from "./palette";

type EventRow = [string, string, string | null, [string, string][]];
interface NbObject {
  rings: Partial<Record<Ring, RingRow[]>>; totals: Partial<Record<Ring, number>>; top: Partial<Record<Ring, string[]>>;
  events?: EventRow[]; quiet?: number; learn?: [string, string][]; media?: [string, "v" | "p", string][];
}
interface NbFile { major: string; system: string; names: Record<string, NameRow>; objects: Record<string, NbObject> }
type Group = Ring | "learn" | "media";
const GROUPS: Group[] = [...RINGS, "learn", "media"];
const GROUP_LABEL: Record<Group, string> = { relates: "Relates to", referenced: "Referenced by", pages: "Pages, codeunits", extensions: "Extensions", subscribers: "Subscribers", learn: "Learn pages", media: "Videos, posts" };
const PILL_LABEL: Record<"pages" | "extensions" | "subscribers", string> = { pages: "pages, codeunits", extensions: "extensions", subscribers: "subscribers" };
const PILL_KIND: Record<"pages" | "extensions" | "subscribers", string> = { pages: "source_table", extensions: "extends", subscribers: "subscribes" };
const PROP: Record<string, string> = { source_table: "SourceTable", lookup_page: "LookupPageId", drilldown_page: "DrillDownPageId", card_page: "CardPageId", runs_on: "TableNo", extends: "extends", table_relation: "TableRelation", calc_formula: "CalcFormula" };
const CX = 450, CY = 420, R1 = 160, R2 = 260, GAP = 90;

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
const cut = (s: string, n: number) => (s.length > n ? `${s.slice(0, n - 1)}…` : s);
const f1 = (n: number) => n.toFixed(1);
/** What a relation says, as a sentence: source verb target. */
function sentence(kind: string, s: string, t: string): string {
  switch (kind) {
    case "table_relation": return `${s} relates to ${t} through a field`;
    case "calc_formula": return `${s} calculates a field from ${t}`;
    case "source_table": return `${s} shows ${t}`;
    case "lookup_page": return `${s} uses ${t} as its lookup page`;
    case "drilldown_page": return `${s} uses ${t} as its drill-down page`;
    case "card_page": return `${s} opens ${t} as its card`;
    case "runs_on": return `${s} runs on ${t}`;
    case "extends": return `${s} extends ${t}`;
    case "subscribes": return `${s} subscribes to events of ${t}`;
    default: return `${s} points to ${t} (${kind})`;
  }
}

export function mountExplorer(el: HTMLElement): void {
  const base = el.dataset.base ?? "/";
  const majors = (el.dataset.majors ?? "").split(" ").filter(Boolean);
  const labels = JSON.parse(el.dataset.labels ?? "{}") as Record<string, string>;
  const exceptions = JSON.parse(el.dataset.exceptions ?? "{}") as Record<string, string>;
  const common = el.dataset.common ?? "official|derived";
  const $ = <T extends Element>(s: string) => el.querySelector<T>(s)!;
  const form = $<HTMLFormElement>(".xp-start"), grid = $<HTMLElement>(".xp-grid"), status = $<HTMLElement>(".xp-status");
  const svg = $<SVGSVGElement>(".xp-svg"), pic = $<HTMLElement>(".xp-pic"), list = $<HTMLElement>(".xp-list"), panel = $<HTMLElement>(".xp-panel");
  const empty = $<HTMLElement>(".xp-empty"), filters = $<HTMLElement>(".xp-filter-list"), quiet = $<HTMLElement>(".xp-quiet");
  const verSel = $<HTMLSelectElement>(".xp-v"), asList = $<HTMLButtonElement>(".xp-aslist"), h1of = $<HTMLElement>(".xp-h1-of");
  const reduce = matchMedia("(prefers-reduced-motion: reduce)"), phone = matchMedia("(max-width: 600px)");

  const st: State = parseState(location.search);
  if (!st.v || !majors.includes(st.v)) st.v = majors[majors.length - 1] ?? null;
  const names = new Map<string, NameRow>();
  const files = new Map<string, Promise<NbFile | null>>();
  let index: Promise<Record<string, string[]>> | null = null, rows: Promise<Parameters<typeof findObjects>[0]> | null = null;
  const getJson = <T>(url: string): Promise<T | null> => fetch(url).then((r) => (r.ok ? (r.json() as Promise<T>) : null)).catch(() => null);
  const getFile = (v: string, s: string) => {
    const url = `${base}code/neighbours/${v}/${s}.json`;
    if (!files.has(url)) files.set(url, getJson<NbFile>(url).then((f) => { if (f?.names) for (const [k, n] of Object.entries(f.names)) names.set(k, n); return f?.objects ? f : null; }));
    return files.get(url)!;
  };
  const getRows = () => (rows ??= getJson<{ rows: Parameters<typeof findObjects>[0] }>(`${base}index/objects.json`).then((j) => j?.rows ?? []));
  const systemFromIndex = async (v: string, key: string) => {
    index ??= getJson<Record<string, string[]>>(`${base}code/neighbours/${v}/index.json`).then((j) => j ?? {});
    for (const [s, keys] of Object.entries(await index)) if (keys.includes(key)) return s;
    return null;
  };

  // explorer state beyond the URL
  let entry: NbObject | null = null, loading = false, fadeOnce = false;
  let sel: { group: Group; key: string } | null = null, expanded: { group: Ring; key: string } | null = null, expandInfo: { keys: string[]; more: number } | null = null;
  let open: Group | "events" | null = null, evSel: string | null = null;
  const hidden = new Set<Group>(), kindOff = new Set<string>();
  const trail: { key: string; system: string }[] = [];

  const nameOf = (k: string): NameRow => names.get(k) ?? [k.split("/")[0], /^\d+$/.test(k.split("/")[1] ?? "") ? Number(k.split("/")[1]) : null, k.split("/")[1] ?? k, "development"];
  const title = (k: string) => objectTitle(nameOf(k));
  const sysOf = (k: string) => nameOf(k)[3];
  const sysLabel = (s: string) => labels[s] ?? s;
  const objHref = (k: string) => `${base}objects/${k}/`;
  const selfHref = (k: string, s: string) => `${location.pathname}${serialiseState({ ...st, o: k, s })}`;
  const sync = () => history.replaceState(null, "", `${location.pathname}${serialiseState(st)}${location.hash}`);
  const ringRows = (g: Ring) => (entry?.rings[g] ?? []).filter((r) => !kindOff.size || open !== g || !kindOff.has(r[1]));
  const neighbours = (g: Ring) => rankKeys(entry?.rings[g] ?? []);
  const count = (g: Group) => (g === "learn" ? entry?.learn?.length ?? 0 : g === "media" ? entry?.media?.length ?? 0 : entry?.totals[g] ?? 0);
  const events = () => [...(entry?.events ?? [])].sort((a, b) => b[3].length - a[3].length || (a[0] < b[0] ? -1 : 1));

  // ---- picture -------------------------------------------------------------------------------------------------
  const shape = (kind: "object" | "learn" | "video" | "post" | "event", x: number, y: number, fill: string, size = 14) => {
    const h = size / 2;
    if (kind === "learn") return `<circle class="shape learn" cx="${f1(x)}" cy="${f1(y)}" r="7"/>`;
    if (kind === "video") return `<path class="shape video" d="M${f1(x)} ${f1(y - 8)}L${f1(x + 8)} ${f1(y + 6)}L${f1(x - 8)} ${f1(y + 6)}Z"/>`;
    if (kind === "post") return `<rect class="shape post" x="${f1(x - 8)}" y="${f1(y - 3)}" width="16" height="6" rx="1"/>`;
    if (kind === "event") return `<path class="shape event" d="M${f1(x)} ${f1(y - h)}L${f1(x + h)} ${f1(y)}L${f1(x)} ${f1(y + h)}L${f1(x - h)} ${f1(y)}Z"/>`;
    return `<rect class="shape" x="${f1(x - h)}" y="${f1(y - h)}" width="${size}" height="${size}" rx="3" style="fill: ${fill}"/>`;
  };
  const edge = (x1: number, y1: number, x2: number, y2: number, kind: string) => {
    const s = edgeStyle(kind), d = `x1="${f1(x1)}" y1="${f1(y1)}" x2="${f1(x2)}" y2="${f1(y2)}"`;
    return `<line class="xe ${s}" ${d}/>${s === "double" ? `<line class="xe-in" ${d}/>` : ""}`;
  };
  interface NodeSpec { id: string; group: string; key: string; side: string; i: number; p: Pt; kind: "object" | "learn" | "video" | "post" | "event"; fill: string; label: string; sub: string; aria: string; edgeKind: string; from?: { x: number; y: number }; anchor: "start" | "end" | "mid"; size?: number; cls?: string; delay: number; above?: boolean }
  const node = (n: NodeSpec) => {
    const { x, y } = n.p, sz = n.size ?? 14, rr = sz / 2 + 4;
    const tx = n.anchor === "mid" ? x : n.anchor === "end" ? x - sz / 2 - 9 : x + sz / 2 + 9;
    const ty = n.above ? y - sz / 2 - 24 : y + 4, sy = n.above ? ty + 13 : ty + 15;
    const fade = !fadeOnce || reduce.matches ? "" : ` fade" style="animation-delay: ${n.delay * 300}ms`;
    const from = n.from ?? { x: CX, y: CY };
    return `<g class="xn ${n.cls ?? ""}${fade}" role="button" tabindex="0" data-id="${esc(n.id)}" data-group="${n.group}" data-k="${esc(n.key)}" data-side="${n.side}" data-i="${n.i}" aria-label="${esc(n.aria)}">`
      + `${edge(from.x, from.y, x, y, n.edgeKind)}<title>${esc(n.aria)}</title>`
      + `<rect class="hit" x="${f1(x - 22)}" y="${f1(y - 22)}" width="44" height="44"/>`
      + `<rect class="ring" x="${f1(x - rr)}" y="${f1(y - rr)}" width="${rr * 2}" height="${rr * 2}" rx="5"/>`
      + shape(n.kind, x, y, n.fill, sz)
      + `<text class="lb ${n.anchor === "start" ? "" : n.anchor}" x="${f1(tx)}" y="${f1(ty)}">${esc(n.label)}</text>`
      + `<text class="sl ${n.anchor === "start" ? "" : n.anchor}" x="${f1(tx)}" y="${f1(sy)}">${esc(n.sub)}</text></g>`;
  };
  const pill = (group: string, x: number, y: number, text: string, aria: string, kind: string | null, delay: number) => {
    const w = Math.max(84, text.length * 7 + 24), fade = !fadeOnce || reduce.matches ? "" : ` fade" style="animation-delay: ${delay * 300}ms`;
    return `<g class="xn pill${open === group ? " open" : ""}${fade}" role="button" tabindex="0" data-pill="${group}" data-id="pill|${group}" data-side="pill" data-i="0" aria-label="${esc(aria)}" aria-expanded="${open === group}">`
      + (kind ? edge(CX, CY, x, y - 15, kind) : "")
      + `<rect class="ring" x="${f1(x - w / 2 - 4)}" y="${f1(y - 19)}" width="${w + 8}" height="38" rx="18"/>`
      + `<rect x="${f1(x - w / 2)}" y="${f1(y - 15)}" width="${w}" height="30" rx="15"/><text class="grp mid" x="${f1(x)}" y="${f1(y + 4)}">${esc(text)}</text></g>`;
  };
  const guides = (onlyEmpty: boolean) => onlyEmpty
    ? `<circle class="empty-ring" cx="${CX}" cy="${CY}" r="${R1}"/>`
    : `<circle class="guide" cx="${CX}" cy="${CY}" r="${R1}"/><circle class="guide r2" cx="${CX}" cy="${CY}" r="${R2}"/><line class="divider" x1="${CX}" y1="${CY - R2 - 40}" x2="${CX}" y2="${CY + R2 + 40}"/>`;
  const centreMark = (k: string) => {
    const n = nameOf(k);
    return `<rect class="centre" x="${CX - 20}" y="${CY - 20}" width="40" height="40" rx="6" style="stroke: var(--sys-${n[3]}); stroke-width: 3"/>`
      + `<text class="lb mid" x="${CX}" y="${CY + 42}" style="font-size: 15px">${esc(cut(title(k), 40))}</text><text class="sl mid" x="${CX}" y="${CY + 58}">${esc(sysLabel(n[3]))}</text>`;
  };
  const dirLabels = (k: string) => {
    const short = cut(nameOf(k)[2], 22);
    if (st.mode === "events") return `<text class="dir" x="${CX + 12}" y="${CY - 186}">${evSel ? `→ subscribers of ${esc(cut(evSel, 34))}` : "→ subscribers"}</text><text class="dir end" x="${CX - 12}" y="${CY - 186}">events ${esc(short)} publishes</text>`;
    return `<text class="dir" x="${CX + 12}" y="${CY - 186}">→ ${esc(short)} points to</text><text class="dir end" x="${CX - 12}" y="${CY - 186}">points to ${esc(short)} →</text>`;
  };

  function drawPicture(): void {
    const k = st.o!;
    if (loading || !entry) {
      svg.innerHTML = guides(!loading) + (loading ? dirLabels(k) : "") + centreMark(k);
      return;
    }
    let out = guides(false) + dirLabels(k);
    if (st.mode === "events") out += drawEvents();
    else out += drawRelations();
    svg.innerHTML = out + centreMark(k);
    fadeOnce = false;
  }

  function drawRelations(): string {
    let out = "";
    const sides: [Ring, "right" | "left"][] = [["relates", "right"], ["referenced", "left"]];
    sides.forEach(([g, side], ri) => {
      if (hidden.has(g) || !count(g)) return;
      const ranked = neighbours(g), shown = ranked.slice(0, TOP), pts = placeSide(shown.length, side, CX, CY, R1);
      shown.forEach((n, i) => {
        const kinds = [...new Set(n.rows.map((r) => r[1]))], s = sysOf(n.key), isExp = expanded?.group === g && expanded.key === n.key;
        out += node({ id: `${g}|${n.key}`, group: g, key: n.key, side, i, p: pts[i], kind: "object", fill: `var(--sys-${s})`, label: cut(title(n.key), 32) + (isExp ? " - expanded" : ""), sub: `${sysLabel(s)} · ${kinds.join(", ")}`,
          aria: `${title(n.key)}, ${GROUP_LABEL[g].toLowerCase()}, ${kinds.join(", ")}, ${sysLabel(s)}`, edgeKind: primaryKind(n.rows), anchor: side === "right" ? "start" : "end", delay: ri, above: isExp,
          cls: sel?.group === g && sel.key === n.key ? "sel" : "" });
        if (isExp && expandInfo) out += drawFan(n.key, pts[i], side);
      });
      if (ranked.length > TOP) out += pill(g, CX + (side === "right" ? 158 : -158), CY + 186, `+ ${ranked.length - TOP} more`, `${GROUP_LABEL[g]}: ${ranked.length - TOP} more, open the full list`, null, ri);
    });
    const pp = placePills(CX, CY, R2);
    (["pages", "extensions", "subscribers"] as const).forEach((g) => {
      if (hidden.has(g) || !count(g)) return;
      out += pill(g, pp[g].x, pp[g].y + 4, `${PILL_LABEL[g]} - ${count(g)}`, `${GROUP_LABEL[g]}: ${count(g)}, open the list`, PILL_KIND[g], 2);
    });
    // top arc: up to two Learn pages and one video or post, then a pill per group
    const arc: { g: "learn" | "media"; i: number }[] = [];
    if (!hidden.has("learn")) for (let i = 0; i < Math.min(2, count("learn")); i++) arc.push({ g: "learn", i });
    if (!hidden.has("media") && count("media")) arc.push({ g: "media", i: 0 });
    const ap = placeArc(arc.length, CX, CY, R2);
    arc.forEach((a, i) => {
      const p = ap[i], anchor = arc.length === 1 || (arc.length === 3 && i === 1) ? "mid" : i === 0 ? "end" : "start";
      if (a.g === "learn") {
        const [url, t] = entry!.learn![a.i];
        out += node({ id: `learn|${url}`, group: "learn", key: url, side: "arc", i, p, kind: "learn", fill: "", label: cut(t, 30), sub: "Learn page", aria: `Learn page: ${t}`, edgeKind: "learn", anchor, delay: 3, above: true, cls: sel?.key === url ? "sel" : "" });
      } else {
        const [id, vp, t] = entry!.media![0];
        out += node({ id: `media|${id}`, group: "media", key: id, side: "arc", i, p, kind: vp === "v" ? "video" : "post", fill: "", label: cut(t, 30), sub: vp === "v" ? "video" : "post", aria: `${vp === "v" ? "Video" : "Post"}: ${t}`, edgeKind: "learn", anchor, delay: 3, above: true, cls: sel?.key === id ? "sel" : "" });
      }
    });
    if (!hidden.has("learn") && count("learn")) out += pill("learn", CX - 90, CY - R2 - 58, `Learn pages - ${count("learn")}`, `Learn pages: ${count("learn")}, open the list`, null, 3);
    if (!hidden.has("media") && count("media")) out += pill("media", CX + 90, CY - R2 - 58, `videos, posts - ${count("media")}`, `Videos and posts: ${count("media")}, open the list`, null, 3);
    return out;
  }

  function drawFan(parent: string, p: Pt, side: "right" | "left"): string {
    const pts = placeFan(expandInfo!.keys.length, p.a, CX, CY, R1 + GAP, 12);
    let out = `<g class="hop2">`;
    expandInfo!.keys.forEach((k, i) => {
      const s = sysOf(k);
      out += node({ id: `hop2|${k}`, group: "hop2", key: k, side: "hop2", i, p: pts[i], kind: "object", fill: `var(--sys-${s})`, label: cut(title(k), 28), sub: sysLabel(s), from: p,
        aria: `${title(k)}, a neighbour of ${title(parent)}, ${sysLabel(s)}: re-centre on it`, edgeKind: "table_relation", anchor: side === "right" ? "start" : "end", size: 10, delay: 0, cls: "small" });
    });
    // the count sits under the outermost fan node's label, where its hover line would go
    const q = pts[pts.length - 1];
    if (expandInfo!.more && q) out += `<text class="sl on ${side === "right" ? "" : "end"}" x="${f1(q.x + (side === "right" ? 14 : -14))}" y="${f1(q.y + 30)}">+ ${expandInfo!.more} more of its own</text>`;
    return `${out}</g>`;
  }

  /**
   * Events mode: the published events on the left (ring 1, diamonds sized by subscriber count, most subscribed first),
   * the subscribers of the selected one on the right, in their system colours. The centre raises the event, the
   * subscriber runs: right = the centre points to it, as in relations mode.
   */
  function drawEvents(): string {
    let out = "";
    const evs = events(), left = evs.slice(0, TOP), pts = placeSide(left.length, "left", CX, CY, R1);
    left.forEach((e, i) => {
      const n = e[3].length, size = Math.min(22, 10 + Math.sqrt(n) * 3), on = evSel === e[0];
      out += node({ id: `ev|${e[0]}`, group: "events", key: e[0], side: "left", i, p: pts[i], kind: "event", fill: "", size, label: cut(e[0], 32), sub: `${e[1]} · ${n} subscriber${n === 1 ? "" : "s"}`,
        aria: `Event ${e[0]}, ${e[1]}, ${n} subscriber${n === 1 ? "" : "s"}`, edgeKind: "table_relation", anchor: "end", delay: 0, cls: on ? "sel" : "" });
    });
    if (evs.length > TOP) out += pill("events", CX - 158, CY + 186, `+ ${evs.length - TOP} more events`, `${evs.length - TOP} more events with subscribers, open the list`, null, 1);
    const e = evs.find((x) => x[0] === evSel);
    if (!e) return out + (evs.length ? `<text class="dir" x="${CX + 40}" y="${CY + 4}">Select an event to see who subscribes.</text>` : "");
    const subs = e[3].slice(0, TOP), sp = placeSide(subs.length, "right", CX, CY, R1);
    subs.forEach(([k, proc], j) => {
      const s = sysOf(k);
      out += node({ id: `sub|${e[0]}|${k}`, group: "subscribers", key: k, side: "right", i: j, p: sp[j], kind: "object", fill: `var(--sys-${s})`, label: cut(title(k), 32), sub: `${sysLabel(s)} · ${cut(proc, 30)}`,
        aria: `${title(k)} subscribes to ${e[0]} with ${proc}, ${sysLabel(s)}`, edgeKind: "subscribes", anchor: "start", delay: 1, cls: sel?.group === "subscribers" && sel.key === k ? "sel" : "" });
    });
    if (e[3].length > TOP) out += `<text class="grp" x="${CX + 100}" y="${CY + 190}">+ ${e[3].length - TOP} more in the panel</text>`;
    return out;
  }

  // ---- list (the first view) -----------------------------------------------------------------------------------
  const row = (g: Group, k: string, kinds: string, s: string, dir: string, id: string) =>
    `<li><button type="button" class="xp-row" data-id="${esc(id)}" data-group="${g}" data-k="${esc(k)}"><span class="sq" style="--dot: var(--sys-${s})"></span><span class="t">${esc(title(k))}</span><span class="k">${esc(kinds)}</span><span class="sys">${esc(sysLabel(s))} ${dir}</span></button></li>`;
  function drawList(): void {
    if (!entry) { list.innerHTML = `<p class="meta">${esc(emptyText())}</p>`; return; }
    const openAll = !phone.matches;
    let out = "", first = true;
    const details = (label: string, n: number, body: string, g: string) => { const o = openAll || first; first = false; return `<details data-group="${g}"${o ? " open" : ""}><summary>${esc(label)} <b>${n}</b></summary><ul>${body}</ul></details>`; };
    if (st.mode === "events") {
      const evs = events();
      const body = evs.map((e) => `<li><button type="button" class="xp-row" data-id="ev|${esc(e[0])}" data-ev="${esc(e[0])}"><span class="sq" style="--dot: var(--nb-event)"></span><span class="t mono">${esc(e[0])}</span><span class="k">${esc(e[1])}</span><span class="sys">${e[3].length} subscriber${e[3].length === 1 ? "" : "s"}</span></button></li>`
        + e[3].map(([k, proc]) => row("subscribers", k, proc, sysOf(k), "", `sub|${e[0]}|${k}`)).join("")).join("");
      out += details("Events with subscribers", evs.length, body, "events");
      if (entry.quiet) out += `<p class="meta">${entry.quiet} more published event${entry.quiet === 1 ? "" : "s"} without a first-party subscriber.</p>`;
    } else {
      for (const g of GROUPS) {
        if (hidden.has(g) || !count(g)) continue;
        let body = "";
        if (g === "learn") body = entry.learn!.map(([url, t]) => `<li><a class="xp-row" data-id="learn|${esc(url)}" href="${esc(url)}" rel="noopener"><span class="sq c" style="--dot: var(--link)"></span><span class="t">${esc(t)}</span><span class="k">Learn</span></a></li>`).join("");
        else if (g === "media") body = entry.media!.map(([id, vp, t]) => `<li><a class="xp-row" data-id="media|${esc(id)}" href="${base}${vp === "v" ? "videos" : "posts"}/${esc(id)}/"><span class="sq" style="--dot: var(--ev-${vp === "v" ? "video" : "blog"}-text)"></span><span class="t">${esc(t)}</span><span class="k">${vp === "v" ? "video" : "post"}</span></a></li>`).join("");
        else body = neighbours(g).map((n) => row(g, n.key, [...new Set(n.rows.map((r) => r[1]))].join(", "), sysOf(n.key), n.rows[0][2] === "out" ? "→" : "←", `${g}|${n.key}`)).join("");
        out += details(GROUP_LABEL[g], count(g), body, g);
      }
      if (!out) out = `<p class="meta">Every ring is filtered out. Tick a ring in the filters to show it.</p>`;
    }
    list.innerHTML = out;
  }

  // ---- rail ----------------------------------------------------------------------------------------------------
  function drawRail(): void {
    for (const b of el.querySelectorAll<HTMLButtonElement>(".xp-mode button")) b.setAttribute("aria-pressed", String(b.dataset.mode === st.mode));
    verSel.value = st.v ?? "";
    if (st.mode === "events") {
      const evs = entry?.events ?? [];
      filters.innerHTML = `<p class="xp-filter">Events with subscribers <b>${evs.length}</b></p><p class="xp-filter">Subscriptions <b>${evs.reduce((n, e) => n + e[3].length, 0)}</b></p>`;
      quiet.hidden = !entry?.quiet;
      quiet.textContent = entry?.quiet ? `${entry.quiet} event${entry.quiet === 1 ? "" : "s"} without a first-party subscriber: counted here, not drawn.` : "";
      return;
    }
    quiet.hidden = true;
    filters.innerHTML = GROUPS.map((g) => `<label class="xp-filter${hidden.has(g) ? " off" : ""}"><input type="checkbox" data-group="${g}"${hidden.has(g) || !count(g) ? "" : " checked"}${count(g) ? "" : " disabled"} /> ${GROUP_LABEL[g]} <b>${count(g)}</b></label>`).join("");
  }

  // ---- panel ---------------------------------------------------------------------------------------------------
  const badges = (k: string) => el.querySelector<HTMLTemplateElement>(`template[data-badges="${exceptions[k] ?? common}"]`)?.innerHTML ?? "";
  function cards(k: string, rows: RingRow[]): string {
    const c = title(st.o!), n = title(k), cn = nameOf(st.o!)[2], nn = nameOf(k)[2];
    return rows.flatMap((r) => {
      const target = r[2] === "out" ? nn : cn;
      if (r[1] === "subscribes") {
        const procs = (entry?.events ?? []).flatMap((e) => e[3].filter((s) => s[0] === k).map((s) => [e[0], s[1]]));
        return procs.map(([ev, proc]) => `<li><span class="kind">subscribes</span><code>${esc(ev)} → ${esc(proc)}</code></li>`);
      }
      if (!r[3].length) return [`<li><span class="kind">${esc(r[1])}</span><code>${esc(PROP[r[1]] ?? r[1])} → ${esc(target)}</code></li>`];
      return r[3].map((via) => `<li><span class="kind">${esc(r[1])}</span><code>"${esc(via)}" → ${esc(target)}</code></li>`);
    }).join("") || `<li><span class="kind">link</span><code>${esc(c)} - ${esc(n)}</code></li>`;
  }
  function drawPanel(): void {
    const k = st.o!, n = nameOf(k);
    let out = `<div class="xp-id"><span class="type-label" style="color: var(--sys-${n[3]})">${esc(n[0])}</span>${badges(k)}</div>`
      + `<h2>${esc(title(k))}</h2><p class="mono-meta">${esc(sysLabel(n[3]))} · BC${esc(st.v ?? "")}${entry ? ` · ${RINGS.reduce((a, g) => a + count(g), 0)} neighbours` : ""}</p>`;
    if (sel && sel.group !== "learn" && sel.group !== "media") {
      const g = sel.group as Ring, rows = (entry?.rings[g] ?? []).filter((r) => r[0] === sel!.key), kind = primaryKind(rows) || (g === "subscribers" ? "subscribes" : "");
      const out_ = rows[0]?.[2] === "out", s = out_ ? title(k) : title(sel.key), t = out_ ? title(sel.key) : title(k);
      out += `<h3>Selected link</h3><p class="xp-sentence">${esc(sentence(kind, s, t))}.</p><ul class="xp-cards">${cards(sel.key, rows.length ? rows : [[sel.key, "subscribes", "in", []]])}</ul>`
        + `<p class="xp-acts"><button type="button" class="btn primary" data-recentre="${esc(sel.key)}">Re-centre on ${esc(cut(title(sel.key), 40))}</button><a class="btn" href="${objHref(sel.key)}">Open its page</a></p>`
        + `<p class="meta">${esc(sysLabel(sysOf(sel.key)))}. ${expanded?.key === sel.key ? `Expanded: ${expandInfo ? `its top ${expandInfo.keys.length} neighbours${expandInfo.more ? ` and ${expandInfo.more} more` : ""}.` : "loading its neighbours."}` : (g === "relates" || g === "referenced") ? "E or a second click expands it." : ""}</p>`;
    } else if (sel) {
      const isLearn = sel.group === "learn", item = isLearn ? entry?.learn?.find((l) => l[0] === sel!.key) : entry?.media?.find((m) => m[0] === sel!.key);
      if (item) out += `<h3>Selected</h3><p class="xp-sentence">${isLearn ? "Microsoft Learn names it" : item[1] === "v" ? "A video mentions it" : "A post mentions it"}: ${esc(isLearn ? item[1] : (item as [string, string, string])[2])}.</p>`
        + `<p class="xp-acts"><a class="btn primary" href="${isLearn ? esc(item[0]) : `${base}${item[1] === "v" ? "videos" : "posts"}/${esc(item[0])}/`}">${isLearn ? "Open on Learn" : "Open its page"}</a></p>`;
    } else if (evSel && st.mode === "events") {
      const e = entry?.events?.find((x) => x[0] === evSel);
      if (e) out += `<h3>Selected event</h3><p class="xp-sentence"><code>${esc(e[0])}</code> (${esc(e[1])}${e[2] ? `, obsolete: ${esc(e[2])}` : ""}): ${e[3].length} first-party subscriber${e[3].length === 1 ? "" : "s"}.</p>`
        + `<ul class="xp-cards">${e[3].map(([s, p]) => `<li><span class="kind">${esc(sysLabel(sysOf(s)))}</span><code>${esc(title(s))} → ${esc(p)}</code></li>`).join("")}</ul>`;
    } else {
      out += `<p class="meta">${entry ? "Select a neighbour (click, or Enter on a node or row) to read the link. E or a second click expands it; Esc steps back along the trail." : esc(emptyText())}</p>`;
    }
    if (open) out += drawGroup();
    out += `<p class="xp-acts">${sel ? "" : `<a class="btn" href="${objHref(k)}">Open its page</a>`}</p>`;
    if (trail.length) out += `<nav class="xp-trail" aria-label="Trail"><h3>Trail</h3><ol>${trail.map((t, i) => i === trail.length - 1 ? `<li><span aria-current="location">${esc(title(t.key))}</span></li>` : `<li><a href="${esc(selfHref(t.key, t.system))}" data-trail="${i}">${esc(title(t.key))}</a></li>`).join("")}</ol></nav>`;
    out += `<p><a href="${base}#star=object/${esc(k)}&amp;system=${esc(n[3])}">← Back to the galaxy, at this object</a></p>`
      + `<p class="meta">Subscribers are first-party code only: the W1 base application and Microsoft's own apps. Partner extensions are not in the data.</p>`;
    panel.innerHTML = out;
  }
  function drawGroup(): string {
    if (open === "learn" || open === "media") {
      const items = open === "learn" ? (entry?.learn ?? []).map(([u, t]) => `<li><a class="xp-row" href="${esc(u)}" rel="noopener"><span class="t">${esc(t)}</span></a></li>`) : (entry?.media ?? []).map(([id, vp, t]) => `<li><a class="xp-row" href="${base}${vp === "v" ? "videos" : "posts"}/${esc(id)}/"><span class="t">${esc(t)}</span><span class="k">${vp === "v" ? "video" : "post"}</span></a></li>`);
      return `<section class="xp-group"><h3>${GROUP_LABEL[open]} - ${items.length}</h3><ul>${items.join("")}</ul></section>`;
    }
    if (open === "events") {
      const evs = events().slice(TOP);
      return `<section class="xp-group"><h3>More events - ${evs.length}</h3><ul>${evs.map((e) => `<li><button type="button" class="xp-row" data-ev="${esc(e[0])}"><span class="t mono">${esc(e[0])}</span><span class="k">${e[3].length} subscriber${e[3].length === 1 ? "" : "s"}</span></button></li>`).join("")}</ul></section>`;
    }
    const g = open!, all = entry?.rings[g] ?? [], kinds = [...new Set(all.map((r) => r[1]))].sort();
    const ranked = rankKeys(ringRows(g)), groups = groupBySystem(ranked, (n) => sysOf(n.key)), max = Math.max(1, ...groups.map(([, l]) => l.length));
    return `<section class="xp-group"><h3>${GROUP_LABEL[g]} - ${count(g)} - by system</h3>`
      + (kinds.length > 1 ? `<div class="xp-kinds" role="group" aria-label="Filter by relation kind">${kinds.map((kd) => `<label><input type="checkbox" data-kind="${esc(kd)}"${kindOff.has(kd) ? "" : " checked"} /> ${esc(kd)}</label>`).join("")}</div>` : "")
      + groups.map(([s, l]) => `<div class="xp-sys-h" style="--dot: var(--sys-${s})"><span>${esc(sysLabel(s))}</span><b>${l.length}</b><span class="xp-bar" style="width: ${Math.round((l.length / max) * 100)}%"></span></div>`
        + `<ul>${l.map((n) => `<li><button type="button" class="xp-row${sel?.key === n.key ? " sel" : ""}" data-id="${esc(`${g}|${n.key}`)}" data-group="${g}" data-k="${esc(n.key)}"><span class="t">${esc(title(n.key))}</span><span class="k">${esc([...new Set(n.rows.map((r) => r[1]))].join(", "))}</span></button></li>`).join("")}</ul>`).join("")
      + (groups.length ? "" : `<p class="meta">No relation of the ticked kinds.</p>`) + `</section>`;
  }

  // ---- empty state and the whole render ------------------------------------------------------------------------
  const otherMajor = () => majors.filter((m) => m !== st.v).sort((a, b) => Math.abs(Number(a) - Number(st.v)) - Math.abs(Number(b) - Number(st.v)) || Number(b) - Number(a))[0] ?? null;
  const emptyText = () => (st.mode === "events" && entry ? `No first-party code subscribes to its events in BC${st.v}.` : `Nothing points here, and it points nowhere. In BC${st.v}.`);
  const isEmpty = () => !entry || (st.mode === "events" ? !entry.events?.length : !GROUPS.some((g) => count(g)));
  function render(): void {
    if (!st.o) return;
    h1of.textContent = `of ${title(st.o)}`;
    document.title = `Neighbourhood of ${title(st.o)} · BC Observatory`;
    const none = !loading && isEmpty();
    empty.hidden = !none;
    if (none) {
      const om = otherMajor();
      empty.innerHTML = `<p>${esc(emptyText())}</p><div>${st.mode === "events" ? `<button type="button" class="btn" data-go-mode="relations">Relations mode</button>` : `<button type="button" class="btn" data-go-mode="events">Try events mode</button>`}${om ? `<button type="button" class="btn" data-go-v="${om}">Try BC${om}</button>` : ""}</div>`;
    }
    const keep = focusKey();
    drawRail(); drawList(); drawPanel();
    if (none) svg.innerHTML = guides(true) + centreMark(st.o); else drawPicture();
    restoreFocus(keep);
  }
  // keep keyboard focus on the same node or row across a redraw
  const focusKey = () => { const a = document.activeElement as HTMLElement | null; return a && el.contains(a) && a.dataset.id ? { id: a.dataset.id, inSvg: !!a.closest("svg") } : null; };
  const restoreFocus = (k: { id: string; inSvg: boolean } | null) => {
    if (!k) return;
    const t = (k.inSvg ? svg : list).querySelector<HTMLElement | SVGElement>(`[data-id="${CSS.escape(k.id)}"]`) ?? svg.querySelector<SVGElement>(`[data-id="${CSS.escape(k.id)}"]`);
    (t as HTMLElement | null)?.focus({ preventScroll: true });
  };

  async function centreOn(key: string, system: string | null, push = true): Promise<void> {
    st.o = key; st.s = system ?? names.get(key)?.[3] ?? st.s;
    sel = null; expanded = null; expandInfo = null; open = null; evSel = null; kindOff.clear();
    loading = true; entry = null;
    form.hidden = true; grid.hidden = false;
    h1of.textContent = `of ${title(key)}`;
    drawPicture();
    status.textContent = `Loading the BC${st.v} neighbourhood of ${title(key)}…`;
    const v = st.v!;
    if (!st.s) st.s = await systemFromIndex(v, key);
    let f = st.s ? await getFile(v, st.s) : null;
    // a stale or wrong system in the link: the index knows the right file
    if (!f?.objects[key]) { const s = await systemFromIndex(v, key); if (s && s !== st.s) { st.s = s; f = await getFile(v, s); } }
    if (st.o !== key || st.v !== v) return; // a newer request won
    entry = f?.objects[key] ?? null;
    if (!names.has(key)) { const r = (await getRows()).find((x) => x[0] === key); if (r) names.set(key, [r[1], r[2], r[3], st.s ?? "development"]); }
    loading = false; fadeOnce = true;
    if (push && trail[trail.length - 1]?.key !== key) trail.push({ key, system: st.s ?? "" });
    sync();
    status.textContent = entry ? (st.mode === "events" ? `${title(key)}: ${entry.events?.length ?? 0} events with subscribers.` : `${title(key)}: ${RINGS.filter((g) => count(g)).map((g) => `${count(g)} ${GROUP_LABEL[g].toLowerCase()}`).join(", ") || "no code relations"}.`) : emptyText();
    render();
  }

  async function expand(g: Ring, key: string): Promise<void> {
    if (expanded?.key === key && expanded.group === g) { expanded = null; expandInfo = null; render(); return; }
    expanded = { group: g, key }; expandInfo = null; sel = { group: g, key };
    render();
    const f = await getFile(st.v!, sysOf(key)), o = f?.objects[key];
    if (expanded?.key !== key) return;
    const all = rankKeys(Object.values(o?.rings ?? {}).flat() as RingRow[]).filter((n) => n.key !== st.o && n.key !== key);
    expandInfo = { keys: all.slice(0, 2).map((n) => n.key), more: Math.max(0, all.length - 2) };
    status.textContent = `${title(key)} expanded: ${all.length} neighbours of its own.`;
    render();
  }
  function select(g: Group, key: string): void {
    if (sel?.group === g && sel.key === key && (g === "relates" || g === "referenced")) { void expand(g, key); return; }
    sel = { group: g, key };
    if (expanded && expanded.key !== key) { expanded = null; expandInfo = null; }
    render();
  }
  function back(): boolean {
    if (expanded) { expanded = null; expandInfo = null; render(); return true; }
    if (open) { open = null; render(); return true; }
    if (sel || evSel) { sel = null; evSel = null; render(); return true; }
    if (trail.length > 1) { trail.pop(); const t = trail[trail.length - 1]; void centreOn(t.key, t.system, false); return true; }
    return false;
  }
  const recentre = (key: string) => { void centreOn(key, sysOf(key)); };

  // ---- events --------------------------------------------------------------------------------------------------
  function activate(t: Element, how: "click" | "enter" | "expand"): void {
    const a = t.closest<HTMLElement | SVGElement>("[data-pill], [data-id], [data-ev]");
    if (!a) return;
    const d = (a as HTMLElement).dataset;
    if (d.pill) { open = open === d.pill ? null : (d.pill as Group | "events"); kindOff.clear(); render(); return; }
    if (d.ev !== undefined && !d.k) { evSel = evSel === d.ev ? null : d.ev; sel = null; render(); return; }
    const g = d.group, k = d.k;
    if (!g || !k) return;
    if (g === "hop2") { recentre(k); return; }
    if (g === "events") { evSel = evSel === k ? null : k; sel = null; render(); return; }
    if (phone.matches && a.closest(".xp-list") && g !== "learn" && g !== "media") { recentre(k); return; }
    if (how === "expand" && (g === "relates" || g === "referenced")) { void expand(g, k); return; }
    select(g as Group, k);
  }
  svg.addEventListener("click", (e) => activate(e.target as Element, "click"));
  svg.addEventListener("keydown", (e) => {
    const n = (e.target as Element).closest<SVGElement>(".xn");
    if (!n) return;
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); activate(n, "enter"); return; }
    if (e.key === "e" || e.key === "E") { e.preventDefault(); activate(n, "expand"); return; }
    const dirs: Record<string, 1 | -1> = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };
    if (!(e.key in dirs)) return;
    e.preventDefault();
    const same = [...svg.querySelectorAll<SVGElement>(`.xn[data-side="${n.dataset.side}"]`)].sort((a, b) => Number(a.dataset.i) - Number(b.dataset.i));
    same[step(same.length, same.indexOf(n), dirs[e.key])]?.focus();
  });
  list.addEventListener("click", (e) => { const t = (e.target as Element).closest("button.xp-row"); if (t) activate(t, "click"); });
  panel.addEventListener("click", (e) => {
    const t = e.target as HTMLElement;
    const rc = t.closest<HTMLElement>("[data-recentre]");
    if (rc) { recentre(rc.dataset.recentre!); return; }
    const tr = t.closest<HTMLAnchorElement>("[data-trail]");
    if (tr && !(e as MouseEvent).metaKey && !(e as MouseEvent).ctrlKey) { e.preventDefault(); const i = Number(tr.dataset.trail); trail.splice(i + 1); void centreOn(trail[i].key, trail[i].system, false); return; }
    const r = t.closest("button.xp-row");
    if (r) activate(r, "click");
  });
  panel.addEventListener("change", (e) => {
    const c = e.target as HTMLInputElement;
    if (c.dataset.kind) { if (c.checked) kindOff.delete(c.dataset.kind); else kindOff.add(c.dataset.kind); render(); }
  });
  filters.addEventListener("change", (e) => {
    const c = e.target as HTMLInputElement, g = c.dataset.group as Group | undefined;
    if (!g) return;
    if (c.checked) hidden.delete(g); else hidden.add(g);
    if (open === g && hidden.has(g)) open = null;
    render();
  });
  // focus shows on the node and its list row together
  const mark = (id: string | undefined, on: boolean) => { if (!id) return; for (const x of el.querySelectorAll(`[data-id="${CSS.escape(id)}"]`)) x.classList.toggle("kf", on); };
  el.addEventListener("focusin", (e) => mark((e.target as HTMLElement).dataset?.id, true));
  el.addEventListener("focusout", (e) => mark((e.target as HTMLElement).dataset?.id, false));
  for (const b of el.querySelectorAll<HTMLButtonElement>(".xp-mode button")) b.addEventListener("click", () => {
    st.mode = b.dataset.mode === "events" ? "events" : "relations"; sel = null; evSel = null; open = null; expanded = null; expandInfo = null;
    sync(); render();
  });
  empty.addEventListener("click", (e) => {
    const b = (e.target as HTMLElement).closest<HTMLElement>("button");
    if (b?.dataset.goMode) { st.mode = b.dataset.goMode === "events" ? "events" : "relations"; sync(); render(); }
    if (b?.dataset.goV) { st.v = b.dataset.goV; index = null; void centreOn(st.o!, st.s, false); }
  });
  verSel.addEventListener("change", () => { st.v = verSel.value; index = null; void centreOn(st.o!, st.s, false); });
  asList.addEventListener("click", () => {
    const on = asList.getAttribute("aria-pressed") !== "true";
    asList.setAttribute("aria-pressed", String(on)); asList.textContent = on ? "Show as picture" : "Show as list";
    list.classList.toggle("vh", !on); pic.hidden = on;
  });
  addEventListener("keydown", (e) => {
    if (e.key !== "Escape" || grid.hidden || document.querySelector("dialog[open]")) return;
    const t = e.target as HTMLElement;
    if (t.matches("input, select, textarea")) return;
    if (back()) e.preventDefault();
  });
  phone.addEventListener("change", () => { if (st.o && !loading) render(); });

  // ---- start: the URL, or the form -----------------------------------------------------------------------------
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const fd = new FormData(form), type = String(fd.get("type")), q = String(fd.get("q") ?? "").trim();
    st.v = String(fd.get("v") ?? st.v); index = null;
    let key = keyOf(type, q);
    if (!key) {
      status.textContent = "Looking up the name…";
      key = findObjects(await getRows(), `${type} ${q}`)[0]?.row[0] ?? null;
    }
    if (!key) { status.textContent = `No ${type} matches "${q}". Try its number, or Ctrl+K.`; return; }
    const s = await systemFromIndex(st.v!, key);
    if (!s) { status.textContent = `${key} has no code relations, events, Learn pages or videos in BC${st.v}.`; }
    trail.length = 0;
    await centreOn(key, s);
  });
  if (st.o) void centreOn(st.o, st.s);
  else { form.hidden = false; grid.hidden = true; const fv = form.querySelector<HTMLSelectElement>('select[name="v"]'); if (fv && st.v) fv.value = st.v; sync(); }
}
