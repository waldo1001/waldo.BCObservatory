/**
 * The galaxy (design/HANDOFF.md section 5, D42, PLAN 4.7; "galaxy, honest" D66): canvas for stars, edges and star
 * labels; DOM for system labels, lens bar, ports, panel and the list view.
 *
 * - Levels: galaxy -> system -> star -> page (level 4 flies into the star and opens its page). Wheel, pinch and drag
 *   zoom and pan freely at any level; labels appear as there is room for them and never overlap.
 * - Layout (pipeline, D66): hubs on their Learn table-of-contents tree, objects in namespace plots; the tree guides and
 *   plots are drawn behind the stars of the system in view.
 * - Encodings: hue = system; brightness = evidence on the star (Learn pages, videos, posts); size = connections;
 *   circle hub, rounded square object, triangle video, bar post; dashed teal ring = community evidence; accent ring
 *   and pulse = landed this week; accent frame = changed in the lens version; hollow dashed square = obsolete.
 * - A focused star draws its edges: solid inside its system, dashed to a port per target system (max 6). Ports are
 *   buttons; the panel lists the same crossings, so the ports are never the only way.
 * - Lenses, one at a time: changed in a version, this week, then type, tier, localization, source, no evidence, and
 *   search. Matching stars keep their brightness and get the lens mark, the rest dims to 0.3.
 * - Panel: the current scope as lists; the star panel carries the exit dock (real links to the instruments).
 * - List view: the system in view as a sortable table instead of the canvas. Below 480 px the galaxy is a static
 *   locator strip above the panel.
 * - Tilt (A, D66): at system level the same stars and x/y come apart into four planes (media, topic hubs, code with every
 *   object of the system, countries) with the lines between them; a click takes a core sample through all four. The
 *   planes load from graph/layers/<system>.json only when the reader tilts. The list per plane is its list view.
 * Camera: translate(vx - tx*s, vy - ty*s) scale(s), flown with the handoff's easing; a cut under reduced motion.
 */
type Plot = [string, number, number, number, number, number];
interface Sys { id: string; label: string; x: number; y: number; r: number; ord?: number; tree?: [string, string][]; plots?: Plot[] }
type Target = string | [string, string];
interface Node {
  id: string; type: string; label: string; tier: string; group: string; weight: number; url?: string; lit_at: string | null; x: number; y: number;
  ev?: number; cs?: number; cv?: string[]; ob?: string[]; ec?: number; nn?: number; ns?: string;
  cross?: [string, number, string, Target[]][]; crossMore?: number; mb?: { n: number; top: [string, string, string | null][] };
}
interface Edge { s: string; t: string; type: string }
interface Summary { systems: Sys[]; nodes: Node[]; edges: Edge[]; sysedges?: [string, string, number][]; touches?: Record<string, string[]>; reach?: Record<string, Record<string, number>> }
interface Landed { anchor: string | null; days: number; items: [string, string, string, string[], string?][] }
interface Ego { id: string; nodes: Node[]; edges: Edge[] }
type Level = 1 | 2 | 3;
interface Lens { id: string; label: string; group: string; match: (n: Node) => boolean; lines?: boolean; reach?: Record<string, number>; search?: string; pages?: Row[]; total?: number; version?: string; exit?: { href: string; label: string } }

/** What the header's live search needs from a mounted galaxy (live-search.ts). */
export interface GalaxyApi {
  hasStar(id: string): boolean;
  /** Light up a search's hits as an ad-hoc lens; null clears it. */
  setSearch(h: SearchHits | null): void;
  /** Called when the galaxy itself drops the search lens (another lens chosen, Esc, breadcrumb, "Clear"). */
  onSearchCleared(cb: () => void): void;
  /** Called when the page opens with #q=... */
  onHashQuery(cb: (q: string) => void): void;
}
type Rect = { x: number; y: number; w: number; h: number };

import { dominantSystem, labelAlpha, ranksByGroup, smoothstep, threshold } from "./galaxy-labels.js";
import { parseHash, portSpot, sortRows, type SortKey } from "./galaxy-core.js";
import { bounds, coreSample, corners, inQuad, lerp, mediaSpot, norm, OBSOLETE, PLANE_LABEL, PLANES, planeGeometry, planeRows, plotOf, project, restLines, STAR, type Bounds, type LayersFile, type Line, type Plane, type PlaneId, type Sample, type Thing } from "./layers-core.js";
import type { Row } from "./search.js";
import type { SearchHits } from "./live-search.js";

const FLY_MS = 1100, DRAW_MS = 600;
/** cubic-bezier(.65,0,.2,1) (tokens motion.cameraFly): solve x(m) = t by bisection, return y(m). */
const ease = (t: number) => {
  const bez = (m: number, p1: number, p2: number) => 3 * m * (1 - m) ** 2 * p1 + 3 * m * m * (1 - m) * p2 + m ** 3;
  let lo = 0, hi = 1;
  for (let i = 0; i < 24; i++) { const m = (lo + hi) / 2; if (bez(m, 0.65, 0.2) < t) lo = m; else hi = m; }
  return bez((lo + hi) / 2, 0, 1);
};
const pathOf = (n: { id: string; url?: string }) => n.url ?? `${n.id.slice(0, n.id.indexOf("/"))}s/${n.id.slice(n.id.indexOf("/") + 1)}/`;
const TYPE: Record<string, string> = { topic: "topic hub", feature: "roadmap feature", object: "AL object", localization: "localization", source: "source", video: "video", post: "community post" };
const KIND: Record<string, string> = { table_relation: "table relation", calc_formula: "calc formula", source_table: "source table", runs_on: "runs on", lookup_page: "lookup page", drilldown_page: "drill-down page", card_page: "card page", extends: "extends", documents: "documented by", relates: "related hub", localizes: "localized by", demonstrates: "demonstrated by", mentions: "mentioned by", discusses: "discussed by" };
/** Tier badge words, as Badges.astro writes them. */
const TIER: Record<string, string> = { official: "official - Microsoft", community: "community - not Microsoft", mixed: "mixed - official and community" };
const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!);
const hit = (a: Rect, b: Rect) => a.x < b.x + b.w && b.x < a.x + a.w && a.y < b.y + b.h && b.y < a.y + a.h;
/** `Table 18 "Customer"` -> Customer (the events explorer filters by name). */
const objectName = (label: string) => /"(.+)"$/.exec(label)?.[1] ?? label;

export async function mountGalaxy(root: HTMLElement): Promise<GalaxyApi | null> {
  const base = root.dataset.base ?? "/";
  const canvas = root.querySelector("canvas")!;
  const labels = root.querySelector<HTMLElement>(".g-labels")!;
  const ports = root.querySelector<HTMLElement>(".g-ports")!;
  const panel = root.querySelector<HTMLElement>(".g-panel")!;
  const panelBody = root.querySelector<HTMLElement>(".g-panel-body")!;
  const crumbs = root.querySelector<HTMLElement>(".g-crumbs")!;
  const levelEl = root.querySelector<HTMLElement>(".g-level")!;
  const legend = root.querySelector<HTMLElement>(".g-legend")!;
  const lensBar = root.querySelector<HTMLElement>(".g-lensbar")!;
  const tiltWrap = root.querySelector<HTMLElement>(".g-tilt")!;
  const tiltInput = root.querySelector<HTMLInputElement>("[data-g-tilt]")!;
  const planesBtn = root.querySelector<HTMLButtonElement>("[data-g-planes]")!;
  const planeLabels = root.querySelector<HTMLElement>(".g-planes")!;
  const table = root.querySelector<HTMLElement>(".g-table")!;
  const prevBtn = root.querySelector<HTMLButtonElement>("[data-g-prev]")!;
  const nextBtn = root.querySelector<HTMLButtonElement>("[data-g-next]")!;
  const listBtn = root.querySelector<HTMLButtonElement>("[data-g-list]")!;
  const viewBtn = root.querySelector<HTMLButtonElement>("[data-g-view]")!;
  const fullBtn = root.querySelector<HTMLButtonElement>("[data-g-full]")!;
  const lensSel = root.querySelector<HTMLSelectElement>("[data-g-lens]")!;
  const fade = root.querySelector<HTMLElement>(".g-fade")!;

  let g: Summary;
  try { g = await (await fetch(`${base}graph/summary.json`)).json(); } catch { root.classList.add("g-empty"); return null; }
  if (!g.nodes?.length) { root.classList.add("g-empty"); return null; }
  const week: Landed = await fetch(`${base}graph/landed.json`).then((r) => (r.ok ? r.json() : null)).catch(() => null) ?? { anchor: null, days: 7, items: [] };
  // older graphs filed source pages under a system: sources always live in their own
  for (const n of g.nodes) if (n.type === "source") n.group = "sources";

  const byId = new Map(g.nodes.map((n) => [n.id, n]));
  const sysById = new Map(g.systems.map((s) => [s.id, s]));
  // the Sources system follows its stars (older graphs placed channel stars inside another system)
  const srcStars = g.nodes.filter((n) => n.group === "sources");
  const srcSys = sysById.get("sources");
  if (srcSys && srcStars.length && srcStars.some((n) => Math.hypot(n.x - srcSys.x, n.y - srcSys.y) > srcSys.r * 3)) {
    srcSys.x = srcStars.reduce((a, n) => a + n.x, 0) / srcStars.length; srcSys.y = srcStars.reduce((a, n) => a + n.y, 0) / srcStars.length;
    srcSys.r = Math.max(40, ...srcStars.map((n) => Math.hypot(n.x - srcSys.x, n.y - srcSys.y)));
  }
  const adj = new Map<string, string[]>();
  const edgeType = new Map<string, string>();
  for (const e of g.edges) {
    if (!byId.has(e.s) || !byId.has(e.t)) continue;
    adj.set(e.s, [...(adj.get(e.s) ?? []), e.t]);
    adj.set(e.t, [...(adj.get(e.t) ?? []), e.s]);
    edgeType.set(`${e.s}|${e.t}`, e.type); edgeType.set(`${e.t}|${e.s}`, e.type);
  }
  const maxW = Math.max(...g.nodes.map((n) => n.weight), 1);
  const maxEv = Math.max(...g.nodes.map((n) => n.ev ?? 0), 1);
  const radius = (n: Node) => Math.max(2, Math.sqrt(n.weight) * 1.1);
  /** Brightness: evidence when the graph carries it, else connections. */
  const bright = (n: Node) => (n.ev !== undefined ? 0.35 + 0.65 * Math.sqrt(n.ev / maxEv) : n.type === "object" && g.nodes.some((x) => x.ev !== undefined) ? 0.35 : 0.5 + 0.5 * n.weight / maxW);
  // landed this week: from the pipeline's week (the run date), never the reader's clock; older graphs fall back to lit_at
  const landedMedia = new Set(week.items.map((i) => i[0]));
  const lit = new Set<string>(week.anchor ? week.items.flatMap((i) => i[3]).filter((id) => byId.has(id)) : (() => {
    const today = new Date(), weekAgo = new Date(today.getTime() - 7 * 864e5).toISOString().slice(0, 10), now = today.toISOString().slice(0, 10);
    return g.nodes.filter((n) => n.lit_at && n.lit_at.length === 10 && n.lit_at >= weekAgo && n.lit_at <= now).map((n) => n.id);
  })());
  // caption order inside each system never changes between frames (D44)
  const rank = ranksByGroup(g.nodes);
  const versions = [...new Set(g.nodes.flatMap((n) => n.cv ?? []))].sort();
  // an object star never outgrows its cell in the namespace plot (the plots hold every object of the system)
  const cell = new Map<string, number>();
  for (const s of g.systems) for (const [, x, y, w, h, count] of s.plots ?? []) {
    const c = Math.sqrt((w * h) / Math.max(1, count));
    for (const n of g.nodes) if (n.type === "object" && n.group === s.id && n.x >= x - 1 && n.x <= x + w + 1 && n.y >= y - 1 && n.y <= y + h + 1) cell.set(n.id, Math.min(cell.get(n.id) ?? Infinity, c));
  }
  const sysedgeMax = Math.max(1, ...(g.sysedges ?? []).map((e) => e[2]));

  // world bounds, field stars (seeded noise, not data: HANDOFF 7)
  const xs = g.systems.map((s) => s.x), ys = g.systems.map((s) => s.y);
  const world = { x0: Math.min(...xs) - 220, x1: Math.max(...xs) + 220, y0: Math.min(...ys) - 200, y1: Math.max(...ys) + 280 };
  let seed = 42;
  const rnd = () => ((seed = (seed * 1664525 + 1013904223) >>> 0) / 2 ** 32);
  const field = Array.from({ length: 900 }, () => ({ x: world.x0 + rnd() * (world.x1 - world.x0), y: world.y0 + rnd() * (world.y1 - world.y0), r: 0.4 + rnd() * 0.9, a: 0.15 + rnd() * 0.45 }));

  // lenses: one at a time, built from the data. The bar holds the version and "this week" lenses, the select the rest.
  const barLenses: Lens[] = [
    ...versions.map((v) => ({ id: `version:${v}`, label: `changed in BC${v}`, group: "Version", version: v, match: (n: Node) => !!n.cv?.includes(v) || !!n.ob?.includes(v), exit: { href: `${base}code/versions/`, label: "Member-level changes per version" } })),
    { id: "landed", label: "this week", group: "Time", match: (n: Node) => lit.has(n.id) },
  ];
  const lenses: Lens[] = [
    ...barLenses,
    ...["topic", "feature", "object", "localization", "source"].map((t) => ({ id: `type:${t}`, label: `${TYPE[t]}s`, group: "Type", match: (n: Node) => n.type === t })),
    { id: "tier:community", label: "mostly community evidence", group: "Tier", match: (n: Node) => (n.cs ?? 0) >= 0.5 || n.tier === "community" },
    { id: "tier:official", label: "official only", group: "Tier", match: (n: Node) => n.tier === "official" && !(n.cs ?? 0) },
    { id: "coverage", label: "no Learn page, video or post", group: "Coverage", match: (n: Node) => !n.ev && n.type !== "source", exit: { href: `${base}coverage/`, label: "The coverage heatmap" } },
    ...g.nodes.filter((n) => n.type === "localization").sort((a, b) => a.label.localeCompare(b.label)).map((l) => ({
      id: `loc:${l.id}`, label: l.label, group: "Localization", lines: true, exit: { href: `${base}${pathOf(l)}`, label: `What ${l.label} changes, down to the field` },
      match: (n: Node) => n === l || (adj.get(l.id) ?? []).includes(n.id),
    })),
    ...g.nodes.filter((n) => n.type === "source").sort((a, b) => a.label.localeCompare(b.label)).map((s) => {
      const touch = new Set([...(g.touches?.[s.id] ?? []), ...(adj.get(s.id) ?? [])]);
      return { id: `src:${s.id}`, label: s.label, group: "Source", lines: true, reach: g.reach?.[s.id], match: (n: Node) => n === s || touch.has(n.id) };
    }),
  ];
  const lensById = new Map(lenses.map((l) => [l.id, l]));
  for (const grp of [...new Set(lenses.filter((l) => !barLenses.includes(l)).map((l) => l.group))]) {
    const og = document.createElement("optgroup"); og.label = grp;
    for (const l of lenses.filter((x) => x.group === grp && !barLenses.includes(x))) { const o = document.createElement("option"); o.value = l.id; o.textContent = l.label; og.append(o); }
    lensSel.append(og);
  }
  const lensButtons = barLenses.map((l) => {
    const b = document.createElement("button");
    b.type = "button"; b.className = "g-lens"; b.dataset.lens = l.id; b.setAttribute("aria-pressed", "false");
    b.innerHTML = `<span>${esc(l.label)}</span> <span class="g-lens-n"></span>`;
    b.addEventListener("click", () => setLens(lens?.id === l.id ? "" : l.id, true));
    return b;
  });
  // the home page's questions menu (D70) stays first, top left
  const ask = lensBar.querySelector(".g-ask");
  if (ask) ask.after(...lensButtons); else lensBar.prepend(...lensButtons);

  const reduce = matchMedia("(prefers-reduced-motion: reduce)");
  let colors: Record<string, string> = {};
  const readColors = () => {
    const cs = getComputedStyle(document.documentElement);
    const v = (k: string) => cs.getPropertyValue(`--${k}`).trim();
    colors = {
      bg: v("g-bg"), core: v("g-core"), field: v("g-field"), edge: v("g-edge"), edgeActive: v("g-edge-active"), starActive: v("g-star-active"), accent: v("accent-dot"), text: v("text"), plate: v("g-bg"),
      community: v("g-community") || v("tier-community-border"), video: v("ev-video-text"), blog: v("ev-blog-text"), learn: v("ev-learn-text"),
      cross: v("g-edge-cross") || v("g-edge-active"), tree: v("g-tree") || v("g-edge"), plot: v("g-plot-border") || v("line"), plotLabel: v("g-plot-label") || v("muted"),
      media: v("g-media") || v("text-2"), mediaNew: v("g-media-new") || v("accent-dot"), version: v("g-version") || v("accent-dot"), obsolete: v("g-obsolete") || v("muted"),
    };
    for (const s of g.systems) colors[s.id] = v(`sys-${s.id}`) || v("muted");
  };
  readColors();

  // state
  let W = 0, H = 0, dpr = 1;
  const cam = { s: 1, tx: 0, ty: 0, vx: 0, vy: 0 };
  let level: Level = 1, focusSys: Sys | null = null, focusStar: Node | null = null, hover: Node | null = null, mark: Node | null = null;
  let lens: Lens | null = null, lensSet = new Set<string>(), lensLines: [Node, Node][] = [];
  let panelOpen = false, userPanel: boolean | null = null; // the reader's own choice wins once made
  let listView = false, sortKey: SortKey = "connections";
  let ego: Ego | null = null;
  // tilt (A): 0 = flat, 1 = four planes; the planes of the system in view, a core sample, a lens per plane
  let tilt = 0, tiltAnim: { from: number; to: number; t0: number } | null = null;
  const layersCache = new Map<string, Promise<LayersFile | null>>();
  let layers: LayersFile | null = null, sample: { thing: Thing; s: Sample } | null = null;
  let tiltLens: { kind: "country"; code: string } | { kind: "coverage" } | null = null;
  let folded = new Set<PlaneId>(), planeTab: PlaneId = "code", hoverThing: Thing | null = null;
  // level of detail (HANDOFF A section 8): the code plane is namespace plots with counts; one plot opens to its objects
  let layerBounds: Bounds | null = null, objPlot: number[] = [], openPlot = -1;
  let drawnTiles: { i: number; q: { x: number; y: number }[] }[] = [];
  /** Where each thing was drawn in the last tilted frame, for the pointer. */
  let drawnThings: { thing: Thing; x: number; y: number }[] = [];
  const tilted = () => level === 2 && tilt > 0 && !!layers && layers.system === focusSys?.id;
  /** When the camera arrived at the focused star (its edges draw outward from then on). */
  let focusAt = 0;
  /** A port that led to a system where the far end is not a star: the panel names the objects it points at. */
  let arrival: { from: Node; sys: string; targets: Target[]; count: number; kind: string } | null = null;
  const mobile = () => W <= 480;
  const narrow = () => W <= 720;
  const fitScale = () => Math.min(W / (world.x1 - world.x0), H / (world.y1 - world.y0));
  const sysScale = (s: Sys) => Math.min(W, H) * 0.36 / Math.max(s.r, 40);
  const panelW = () => (panelOpen && !narrow() ? 380 : 0);
  const viewCentre = () => panelOpen && !mobile() ? (narrow() ? { vx: W / 2, vy: H * 0.225 } : { vx: (W - 380) / 2, vy: H / 2 }) : { vx: W / 2, vy: H / 2 };
  const toScreen = (x: number, y: number) => ({ x: cam.vx + (x - cam.tx) * cam.s, y: cam.vy + (y - cam.ty) * cam.s });
  const toWorld = (x: number, y: number) => ({ x: cam.tx + (x - cam.vx) / cam.s, y: cam.ty + (y - cam.vy) / cam.s });

  // camera
  let anim: { from: typeof cam; to: typeof cam; t0: number; done?: () => void } | null = null;
  const target = (): typeof cam => {
    const { vx, vy } = viewCentre();
    if (level === 1) return { s: fitScale() * (panelW() ? (W - 380) / W : 1), tx: (world.x0 + world.x1) / 2, ty: (world.y0 + world.y1) / 2, vx, vy };
    const s = sysScale(focusSys!);
    if (level === 2) return { s, tx: focusSys!.x, ty: focusSys!.y, vx, vy };
    return { s: s * 1.8, tx: focusStar!.x, ty: focusStar!.y, vx, vy };
  };
  let raf = 0;
  let labelsFading = false;
  const drawing = () => level === 3 && !reduce.matches && Number.isFinite(focusAt) && performance.now() - focusAt < DRAW_MS;
  const animating = () => !!anim || !!tiltAnim || labelsFading || drawing() || (!reduce.matches && lit.size > 0 && !tilted());
  const loop = () => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame((t) => {
      if (anim) {
        const k = Math.min(1, (t - anim.t0) / FLY_MS), e = ease(k);
        for (const key of ["s", "tx", "ty", "vx", "vy"] as const) cam[key] = anim.from[key] + (anim.to[key] - anim.from[key]) * e;
        if (k >= 1) { const d = anim.done; anim = null; d?.(); }
      }
      if (tiltAnim) {
        const k = Math.min(1, (t - tiltAnim.t0) / 600);
        tilt = tiltAnim.from + (tiltAnim.to - tiltAnim.from) * ease(k);
        tiltInput.value = String(Math.round(tilt * 100));
        if (k >= 1) { tilt = tiltAnim.to; tiltAnim = null; renderPanel(); renderTable(); renderChrome(); setHash(); }
      }
      draw(t);
      if (animating()) loop();
    });
  };
  const redraw = () => { if (animating()) return; draw(); if (labelsFading) loop(); };
  const flyTo = (to: typeof cam, instant = false, done?: () => void) => {
    if (instant || reduce.matches) { Object.assign(cam, to); anim = null; draw(); done?.(); return; }
    anim = { from: { ...cam }, to, t0: performance.now(), done };
    loop();
  };
  const fly = (instant = false) => flyTo(target(), instant, () => { if (level === 3) { focusAt = performance.now(); loop(); } });

  const resize = () => {
    const r = canvas.getBoundingClientRect();
    if (!r.width || !r.height) return;
    W = r.width; H = r.height; dpr = window.devicePixelRatio || 1;
    canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
    root.classList.toggle("g-mobile", mobile());
    fly(true);
  };

  // drawing
  const ctx = canvas.getContext("2d")!;
  /** The system the reader zoomed into by hand at galaxy level (D44): edges and captions behave as at system level. */
  let eff: Sys | null = null;
  const visibleRect = () => ({ x0: 0, y0: 0, x1: W - panelW(), y1: H - (panelOpen && narrow() && !mobile() ? H * 0.55 : 0) });
  const scopeSys = () => focusSys ?? eff;
  const inScope = (n: Node) => (level === 1 && !eff) || n.group === scopeSys()?.id || (level === 3 && !!focusStar && (n === focusStar || !!adj.get(focusStar.id)?.includes(n.id)));
  const alpha = (n: Node) => {
    if (lens) return lensSet.has(n.id) ? Math.max(0.6, bright(n)) : 0.3 * bright(n);
    if (level === 1) return bright(n);
    if (n.group !== focusSys?.id) return level === 3 && focusStar && adj.get(focusStar.id)?.includes(n.id) ? 0.7 : 0.16;
    if (level === 3 && focusStar && n !== focusStar && !adj.get(focusStar.id)?.includes(n.id)) return 0.4;
    return bright(n);
  };
  // zoomed out: the handoff's dots, max(1.6, sqrt(weight) * 0.42) design px (5.5 world units per design unit);
  // zoomed in: proportional to connections
  const diameter = (n: Node) => {
    const d = Math.min(Math.max(1.6, Math.sqrt(n.weight) * 0.42 * cam.s * 5.5, radius(n) * 2 * cam.s / 3), 26);
    const c = cell.get(n.id);
    return c ? Math.max(1.6, Math.min(d, c * cam.s * 0.9)) : d;
  };
  const line = (a: { x: number; y: number }, b: { x: number; y: number }) => { ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); };
  /** Screen spots of the focused star's ports, recomputed every frame and mirrored by the DOM buttons. */
  let portSpots: { sys: string; x: number; y: number }[] = [];

  function draw(t = performance.now()) {
    if (!W) return;
    eff = level === 1 && !lens ? dominantSystem(g.systems, cam, visibleRect(), sysScale) : null;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.fillStyle = colors.bg; ctx.fillRect(0, 0, W, H);
    const c = toScreen((world.x0 + world.x1) / 2, (world.y0 + world.y1) / 2);
    const core = ctx.createRadialGradient(c.x, c.y, 0, c.x, c.y, Math.max(1, 900 * cam.s));
    core.addColorStop(0, colors.core); core.addColorStop(1, "transparent");
    ctx.fillStyle = core; ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = colors.field;
    for (const f of field) { const p = toScreen(f.x, f.y); if (p.x < 0 || p.y < 0 || p.x > W || p.y > H) continue; ctx.globalAlpha = f.a; ctx.fillRect(p.x, p.y, f.r, f.r); }
    if (tilted()) { drawTilted(t); placePorts(); placeSystemLabels(); return; }
    planeLabels.hidden = true;
    for (const s of g.systems) {
      const p = toScreen(s.x, s.y), r = Math.max(1, (s.r + 30) * cam.s);
      const halo = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r);
      halo.addColorStop(0, colors[s.id]); halo.addColorStop(1, "transparent");
      // a source lens lights the systems it writes about, in proportion
      const reach = lens?.reach ? (lens.reach[s.id] ?? 0) / Math.max(...Object.values(lens.reach), 1) : 0;
      ctx.globalAlpha = lens?.reach ? 0.05 + 0.4 * reach : lens ? 0.08 : level === 1 ? 0.2 : s === focusSys ? 0.16 : 0.06;
      ctx.fillStyle = halo; ctx.beginPath(); ctx.arc(p.x, p.y, r, 0, Math.PI * 2); ctx.fill();
    }
    // galaxy level: the heaviest system pairs, width by weight (tokens galaxy.systemEdge)
    if (level === 1 && !lens && g.sysedges?.length) {
      ctx.strokeStyle = colors.edge;
      const k = 1 - smoothstep(0.6, 1, eff ? cam.s / sysScale(eff) : 0);
      for (const [a, b, w] of g.sysedges) {
        const A = sysById.get(a), B = sysById.get(b);
        if (!A || !B) continue;
        ctx.globalAlpha = 0.55 * k; ctx.lineWidth = 1 + (3 * w) / sysedgeMax;
        line(toScreen(A.x, A.y), toScreen(B.x, B.y));
      }
      ctx.lineWidth = 1;
    }
    // the system in view: Learn tree guides and namespace plots (decorative: the panel and the list carry the facts)
    const scope = scopeSys();
    if (scope) {
      const k = level >= 2 ? 1 : smoothstep(0.8, 1, cam.s / sysScale(scope));
      ctx.strokeStyle = colors.tree; ctx.lineWidth = 1; ctx.globalAlpha = 0.7 * k;
      for (const [p, q] of scope.tree ?? []) { const a = byId.get(p), b = byId.get(q); if (a && b) line(toScreen(a.x, a.y), toScreen(b.x, b.y)); }
      ctx.font = "400 10px var(--font-mono), ui-monospace, monospace"; ctx.textBaseline = "top";
      for (const [path, x, y, w, h, count] of scope.plots ?? []) {
        const p = toScreen(x, y), sw = w * cam.s, sh = h * cam.s;
        if (sw < 3 || sh < 3 || p.x > W || p.y > H || p.x + sw < 0 || p.y + sh < 0) continue;
        ctx.globalAlpha = 0.9 * k; ctx.strokeStyle = colors.plot; ctx.beginPath(); ctx.roundRect(p.x, p.y, sw, sh, Math.min(4, sw / 4)); ctx.stroke();
        if (sw > 70 && sh > 16) {
          const name = path.split(".").pop()!;
          ctx.fillStyle = colors.plotLabel; ctx.globalAlpha = 0.85 * k;
          ctx.fillText(`${name.length > 22 ? `${name.slice(0, 21)}…` : name} ${count}`, p.x + 4, p.y + 3, sw - 8);
        }
      }
    }
    // edges: inside the focused system and the star's own; a lens draws its constellation instead
    ctx.lineWidth = 1;
    portSpots = [];
    if (lens?.lines) {
      ctx.strokeStyle = colors.accent; ctx.globalAlpha = 0.55; ctx.setLineDash([4, 4]);
      for (const [a, b] of lensLines) line(toScreen(a.x, a.y), toScreen(b.x, b.y));
      ctx.setLineDash([]);
    } else if (eff) {
      // zoomed into a system by hand: its edges come up as the camera reaches the system's own zoom
      ctx.strokeStyle = colors.edge; ctx.globalAlpha = 0.3 * smoothstep(0.8, 1, cam.s / sysScale(eff));
      for (const e of g.edges) {
        const a = byId.get(e.s), b = byId.get(e.t);
        if (!a || !b || a.group !== eff.id || b.group !== eff.id) continue;
        line(toScreen(a.x, a.y), toScreen(b.x, b.y));
      }
    } else if (level >= 2) {
      // focused star: in-system edges solid, outward-drawn over 600 ms; edges that leave the system dashed
      const k = reduce.matches ? 1 : Math.min(1, (t - focusAt) / DRAW_MS);
      const kIn = Math.min(1, k * 1.6), kOut = Math.max(0, k * 1.6 - 0.6);
      for (const e of g.edges) {
        const a = byId.get(e.s), b = byId.get(e.t);
        if (!a || !b) continue;
        const own = level === 3 && focusStar && (a === focusStar || b === focusStar);
        if (!own && (a.group !== focusSys!.id || b.group !== focusSys!.id)) continue;
        if (!own) { ctx.globalAlpha = level === 3 ? 0.1 : 0.3; ctx.strokeStyle = colors.edge; line(toScreen(a.x, a.y), toScreen(b.x, b.y)); continue; }
        const other = a === focusStar ? b : a, p = toScreen(focusStar!.x, focusStar!.y), q = toScreen(other.x, other.y);
        // an edge that leaves the system is a port (below) and a row in the panel, not a line across the galaxy
        if (other.group !== focusStar!.group || kIn <= 0) continue;
        ctx.globalAlpha = 0.9; ctx.strokeStyle = colors.edgeActive;
        line(p, { x: p.x + (q.x - p.x) * kIn, y: p.y + (q.y - p.y) * kIn });
      }
      ctx.setLineDash([]);
      // ports: one dashed edge per target system, ending at the canvas edge in that system's direction
      if (level === 3 && focusStar?.cross?.length && !listView) {
        const p = toScreen(focusStar.x, focusStar.y), v = visibleRect();
        for (const [sys] of focusStar.cross) {
          const S = sysById.get(sys);
          if (S) portSpots.push({ sys, ...portSpot(p, toScreen(S.x, S.y), { x0: v.x0 + 24, y0: v.y0 + 110, x1: v.x1 - 24, y1: v.y1 - 56 }) });
        }
        placePorts();
        if (kOut > 0 && !mobile()) for (const spot of portSpots) {
          ctx.globalAlpha = 0.9; ctx.strokeStyle = colors.cross; ctx.setLineDash([6, 4]);
          line(p, { x: p.x + (spot.x - p.x) * kOut, y: p.y + (spot.y - p.y) * kOut });
          ctx.setLineDash([]);
        }
      }
    }
    if (!portSpots.length) placePorts();
    // stars
    const shown: { n: Node; p: { x: number; y: number }; d: number }[] = [];
    const lensV = lens?.version;
    for (const n of g.nodes) {
      const p = toScreen(n.x, n.y), d = diameter(n);
      if (p.x < -d || p.y < -d || p.x > W + d || p.y > H + d) continue;
      const active = n === focusStar || n === hover || n === mark;
      const a = active ? 1 : alpha(n);
      const obsolete = !!lensV && !!n.ob?.includes(lensV);
      ctx.globalAlpha = a;
      ctx.fillStyle = active ? colors.starActive : colors[n.group] ?? colors.field;
      ctx.shadowColor = active ? colors.starActive : colors[n.group] ?? "transparent";
      ctx.shadowBlur = a > 0.2 && !obsolete ? d * (active ? 3 : 1.6) : 0;
      ctx.beginPath();
      if (n.type === "object") ctx.roundRect(p.x - d / 2, p.y - d / 2, d, d, d * 0.12); else ctx.arc(p.x, p.y, d / 2, 0, Math.PI * 2);
      if (obsolete && !active) { ctx.strokeStyle = colors.obsolete; ctx.lineWidth = 1; ctx.setLineDash([2, 2]); ctx.stroke(); ctx.setLineDash([]); } else ctx.fill();
      ctx.shadowBlur = 0;
      // community evidence: dashed teal ring (any share)
      if ((n.cs ?? 0) > 0 && a > 0.2 && d > 3) { ctx.strokeStyle = colors.community; ctx.lineWidth = 1; ctx.setLineDash([2, 3]); ctx.beginPath(); ctx.arc(p.x, p.y, d / 2 + 2.5, 0, Math.PI * 2); ctx.stroke(); ctx.setLineDash([]); }
      if (lens && lensSet.has(n.id)) {
        ctx.lineWidth = 1.2; ctx.globalAlpha = 0.9;
        if (lensV && n.cv?.includes(lensV)) { ctx.strokeStyle = colors.version; ctx.strokeRect(p.x - d / 2 - 4, p.y - d / 2 - 4, d + 8, d + 8); }
        else if (!lensV) { ctx.strokeStyle = colors.accent; ctx.beginPath(); ctx.arc(p.x, p.y, d / 2 + 4, 0, Math.PI * 2); ctx.stroke(); }
      }
      if (n === mark) { ctx.strokeStyle = colors.accent; ctx.lineWidth = 2; ctx.globalAlpha = 1; ctx.beginPath(); ctx.arc(p.x, p.y, d / 2 + 8, 0, Math.PI * 2); ctx.stroke(); }
      if (a > 0.25 || active) shown.push({ n, p, d });
    }
    // media bodies beside the hubs of the system in view: triangle video, bar post, accent when landed this week
    if (level >= 2 && focusSys) {
      for (const n of g.nodes) {
        if (n.group !== focusSys.id || !n.mb) continue;
        const p = toScreen(n.x, n.y), d = diameter(n);
        if (d < 4 || p.x < -30 || p.y < -30 || p.x > W + 30 || p.y > H + 30) continue;
        const r0 = d / 2 + 10;
        ctx.globalAlpha = level === 3 && focusStar && n !== focusStar && !adj.get(focusStar.id)?.includes(n.id) ? 0.3 : 0.95;
        n.mb.top.forEach(([id, kind], i) => {
          const ang = -Math.PI / 2 + (i * Math.PI) / 6, x = p.x + Math.cos(ang) * r0, y = p.y + Math.sin(ang) * r0;
          ctx.fillStyle = landedMedia.has(id) ? colors.mediaNew : colors.media;
          ctx.beginPath();
          if (kind === "v") { ctx.moveTo(x, y - 4); ctx.lineTo(x + 4, y + 3); ctx.lineTo(x - 4, y + 3); ctx.closePath(); } else ctx.rect(x - 4, y - 1.5, 8, 3);
          ctx.fill();
        });
      }
    }
    // landed this week: pulse ring (scale .7 to 1.25, opacity .9 to 0, 2400 ms); a static double ring under reduced motion
    if (lit.size) {
      const k = (t % 2400) / 2400;
      ctx.strokeStyle = colors.accent; ctx.lineWidth = 1.5;
      for (const id of lit) {
        const n = byId.get(id)!, p = toScreen(n.x, n.y), r = 8 + diameter(n) / 2;
        if (p.x < -40 || p.y < -40 || p.x > W + 40 || p.y > H + 40) continue;
        if (reduce.matches) {
          for (const [rr, a] of [[r, 1], [r * 1.5, 0.35]]) { ctx.globalAlpha = a; ctx.beginPath(); ctx.arc(p.x, p.y, rr, 0, Math.PI * 2); ctx.stroke(); }
        } else { ctx.globalAlpha = 0.9 * (1 - k); ctx.beginPath(); ctx.arc(p.x, p.y, r * (0.7 + 0.55 * k), 0, Math.PI * 2); ctx.stroke(); }
      }
    }
    ctx.globalAlpha = 1;
    drawStarLabels(shown, placeSystemLabels(), t);
  }

  // tilt (A): the planes of the system in view, things sliding from their flat spot to their plane, lines between planes
  const planesNow = (): Plane[] => planeGeometry({ x0: 24, y0: 112, x1: W - panelW() - 24, y1: H - 36 }, folded);
  /** Every thing's spot on its plane at the current tilt (flat spot when tilt is 0). */
  function spotOf(th: Thing, planes: Plane[]): { x: number; y: number } | null {
    const f = layers!, plane = planes[PLANES.indexOf(th.plane)];
    const at = (x: number, y: number) => { const n = norm(layerBounds!, x, y); return lerp(toScreen(x, y), project(plane, n.u, n.v), tilt); };
    if (th.plane === "code" || th.plane === "countries") { const o = f.objects[th.i]; return o ? at(o[1], o[2]) : null; }
    if (th.plane === "hubs") { const h = f.hubs[th.i]; return h ? at(h[1], h[2]) : null; }
    const m = mediaSpot(f, th.i);
    return at(m.x, m.y);
  }
  const thingLabel = (th: Thing): string => {
    const f = layers!;
    if (th.plane === "code") return objectTitle(f.objects[th.i][0]);
    if (th.plane === "hubs") return byId.get(f.hubs[th.i][0])?.label ?? f.hubs[th.i][0];
    if (th.plane === "media") return f.media[th.i][3];
    return `${(th.code ?? "").toUpperCase()}: replaces ${f.countries[th.code ?? ""] ?? 0} objects here`;
  };
  /** `table/18` -> `Table 18 "Customer"` when the object is a star, else the type and id (the panel links its page). */
  const objectTitle = (key: string) => byId.get(`object/${key}`)?.label ?? key.replace(/^(\w)(\w*)\//, (_m, a: string, b: string) => `${a.toUpperCase()}${b} `);
  function drawTilted(t: number) {
    const f = layers!, planes = planesNow(), k = tilt, lineK = smoothstep(0.66, 1, k);
    const colorOf = (id: string) => colors[id] ?? colors.field;
    const sysCol = colorOf(f.system), locCol = colorOf("localization");
    const css = getComputedStyle(document.documentElement), v = (x: string) => css.getPropertyValue(`--${x}`).trim();
    const plane = { fill: v("ly-plane"), border: v("ly-plane-border"), active: v("ly-plane-active"), line: v("ly-line"), core: v("ly-core"), noLine: v("ly-no-line"), noLineLens: v("ly-no-line-lens") };
    const activePlanes = new Set<PlaneId>(tiltLens?.kind === "country" ? ["code", "countries"] : tiltLens?.kind === "coverage" ? ["hubs", "code"] : []);
    // plates
    for (const p of planes) {
      const c = corners(p);
      ctx.globalAlpha = (p.folded ? 0.5 : 0.7) * k; ctx.fillStyle = plane.fill; ctx.strokeStyle = activePlanes.has(p.id) ? plane.active : plane.border; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(c[0].x, c[0].y); for (const q of c.slice(1)) ctx.lineTo(q.x, q.y); ctx.closePath(); ctx.fill(); ctx.globalAlpha = k; ctx.stroke();
    }
    placePlaneLabels(planes);
    const inSample = (th: Thing) => !sample || (th.plane === "code" ? sample.s.objects.has(th.i) : th.plane === "hubs" ? sample.s.hubs.has(th.i) : th.plane === "media" ? sample.s.media.has(th.i) : sample.s.countries.has(th.code ?? ""));
    const country = tiltLens?.kind === "country" ? tiltLens.code : null;
    const lensMatch = (th: Thing) => {
      if (!tiltLens) return true;
      if (!country) return th.plane !== "code" || f.objects[th.i][3] === 0;
      if (th.plane === "code" || th.plane === "countries") return f.objects[th.i][6].split(" ").includes(country);
      return th.plane === "hubs" && f.objects.some((o) => o[6].split(" ").includes(country) && o[4].includes(th.i));
    };
    const dim = (th: Thing) => (inSample(th) && lensMatch(th) ? 1 : 0.3);
    const fold = (id: PlaneId) => folded.has(id) && k > 0.5;
    // lines between planes: the stars' at rest, a core sample's own, a country lens's replacements
    const lines: (Line & { lens?: boolean })[] = [];
    if (sample) {
      const th = sample.thing;
      if (th.plane === "code") { for (const h of f.objects[th.i][4]) lines.push({ kind: "names", from: { plane: "hubs", i: h }, to: th }); for (const c of sample.s.countries) lines.push({ kind: "replaces", from: th, to: { plane: "countries", i: th.i, code: c } }); }
      for (const m of sample.s.media) for (const h of f.media[m][2]) if (sample.s.hubs.has(h)) lines.push({ kind: "mentions", from: { plane: "media", i: m }, to: { plane: "hubs", i: h } });
      if (th.plane !== "code") for (const o of sample.s.objects) for (const h of f.objects[o][4]) if (sample.s.hubs.has(h) && lines.length < 300) lines.push({ kind: "names", from: { plane: "hubs", i: h }, to: { plane: "code", i: o } });
    } else if (country) {
      f.objects.forEach((o, i) => { if (o[6].split(" ").includes(country)) lines.push({ kind: "replaces", from: { plane: "code", i }, to: { plane: "countries", i, code: country }, lens: true }); });
    } else lines.push(...restLines(f));
    if (lineK > 0) {
      for (const l of lines) {
        if (fold(l.from.plane) || fold(l.to.plane)) continue;
        const a = spotOf(l.from, planes), b = spotOf(l.to, planes);
        if (!a || !b) continue;
        ctx.globalAlpha = lineK * (sample ? 0.95 : 0.55); ctx.strokeStyle = l.lens ? colors.accent : plane.line; ctx.lineWidth = 1;
        ctx.setLineDash(l.kind === "mentions" ? [1, 5] : l.kind === "replaces" ? [6, 4] : []);
        line(a, b);
      }
      ctx.setLineDash([]);
    }
    drawnThings = [];
    const keep = (th: Thing, p: { x: number; y: number }) => { if (!fold(th.plane)) drawnThings.push({ thing: th, x: p.x, y: p.y }); };
    // countries plane: one mark per replaced object, size by how many countries replace it
    if (!fold("countries")) f.objects.forEach((o, i) => {
      if (!o[6]) return;
      const th: Thing = { plane: "countries", i, code: o[6].split(" ")[0] }, p = spotOf(th, planes)!, n = o[6].split(" ").length;
      ctx.globalAlpha = k * dim(th) * 0.9; ctx.fillStyle = locCol;
      const d = 1.5 + Math.min(4, Math.sqrt(n));
      ctx.beginPath(); ctx.moveTo(p.x, p.y - d); ctx.lineTo(p.x + d, p.y); ctx.lineTo(p.x, p.y + d); ctx.lineTo(p.x - d, p.y); ctx.closePath(); ctx.fill();
    });
    // code plane, level of detail: a tile per namespace plot (fill = share named by a Learn page), the stars on top,
    // and the objects of the one open plot; every other object is a count, never a missing dot
    drawnTiles = [];
    if (!fold("code") && k > 0.05) {
      const codePlane = planes[PLANES.indexOf("code")];
      const onCode = (x: number, y: number) => { const n = norm(layerBounds!, x, y); return lerp(toScreen(x, y), project(codePlane, n.u, n.v), k); };
      const plots = focusSys!.plots ?? [];
      const totals = plots.map(() => [0, 0]);
      f.objects.forEach((o, i) => { const pi = objPlot[i]; if (pi >= 0) { totals[pi][0]++; if (o[3] > 0) totals[pi][1]++; } });
      ctx.font = "400 10px var(--font-mono), ui-monospace, monospace"; ctx.textBaseline = "top";
      plots.forEach(([path, x, y, w, h], i) => {
        const q = [onCode(x, y), onCode(x + w, y), onCode(x + w, y + h), onCode(x, y + h)];
        drawnTiles.push({ i, q });
        const [n, named] = totals[i], share = n ? named / n : 0;
        const lensOn = tiltLens?.kind === "coverage";
        ctx.globalAlpha = k * (lensOn ? 0.1 + 0.5 * (1 - share) : 0.1 + 0.45 * share) * (sample && ![...sample.s.objects].some((o) => objPlot[o] === i) ? 0.4 : 1);
        ctx.fillStyle = lensOn ? plane.noLineLens : sysCol;
        ctx.beginPath(); ctx.moveTo(q[0].x, q[0].y); for (const c of q.slice(1)) ctx.lineTo(c.x, c.y); ctx.closePath(); ctx.fill();
        ctx.globalAlpha = k; ctx.strokeStyle = i === openPlot ? colors.accent : v("ly-divider") || plane.border; ctx.lineWidth = i === openPlot ? 1.5 : 1; ctx.stroke();
        const tw = q[1].x - q[0].x;
        if (tw > 46 && q[3].y - q[0].y > 12 && k > 0.6) {
          ctx.fillStyle = colors.plotLabel; ctx.globalAlpha = k;
          const name = path.split(".").pop()!;
          ctx.fillText(`${short(name, Math.max(4, Math.floor(tw / 7) - 4))} ${n}`, q[0].x + 3, q[0].y + 2, tw - 6);
        }
      });
    }
    if (!fold("code")) f.objects.forEach((o, i) => {
      const th: Thing = { plane: "code", i }, p = spotOf(th, planes)!, star = (o[7] & STAR) !== 0;
      const open = objPlot[i] === openPlot && openPlot >= 0, inS = sample?.s.objects.has(i);
      if (!star && !open && !inS && k > 0.5) return;
      const a = dim(th) * (star ? 1 : 0.85);
      const d = star ? 6 : 3;
      ctx.globalAlpha = Math.max(a * (0.3 + 0.7 * k), star ? a : 0);
      if (!star && k < 0.05) return;
      const noUp = o[3] === 0;
      if (tiltLens?.kind === "coverage" && noUp) { ctx.strokeStyle = plane.noLineLens; ctx.lineWidth = 2; ctx.strokeRect(p.x - d / 2 - 1, p.y - d / 2 - 1, d + 2, d + 2); }
      else if (noUp && !star) { ctx.strokeStyle = plane.noLine; ctx.lineWidth = 1; ctx.strokeRect(p.x - d / 2, p.y - d / 2, d, d); }
      else { ctx.fillStyle = (o[7] & OBSOLETE) && lens?.version ? colors.obsolete : sysCol; ctx.fillRect(p.x - d / 2, p.y - d / 2, d, d); }
      if (star || k > 0.5) keep(th, p);
    });
    // topic hubs and media
    if (!fold("hubs")) f.hubs.forEach((h, i) => {
      const th: Thing = { plane: "hubs", i }, p = spotOf(th, planes)!;
      ctx.globalAlpha = dim(th); ctx.fillStyle = sysCol; ctx.beginPath(); ctx.arc(p.x, p.y, 4, 0, Math.PI * 2); ctx.fill(); keep(th, p);
    });
    if (!fold("media")) f.media.forEach((m, i) => {
      const th: Thing = { plane: "media", i }, p = spotOf(th, planes)!;
      ctx.globalAlpha = dim(th) * k; ctx.fillStyle = landedMedia.has(m[0]) ? colors.mediaNew : colors.media; ctx.beginPath();
      if (m[1] === "v") { ctx.moveTo(p.x, p.y - 4); ctx.lineTo(p.x + 4, p.y + 3); ctx.lineTo(p.x - 4, p.y + 3); ctx.closePath(); } else ctx.rect(p.x - 4, p.y - 1.5, 8, 3);
      ctx.fill(); keep(th, p);
    });
    // core sample: one vertical accent line through the focused thing, top plane to bottom plane, its counterparts ringed
    if (sample && k > 0.5) {
      const p = spotOf(sample.thing, planes)!, top = planes.find((x) => !x.folded) ?? planes[0], bottom = [...planes].reverse().find((x) => !x.folded) ?? planes[3];
      ctx.globalAlpha = 1; ctx.strokeStyle = plane.core; ctx.lineWidth = 2;
      line({ x: p.x, y: top.top - 6 }, { x: p.x, y: bottom.top + bottom.depth + 6 });
      ctx.beginPath(); ctx.arc(p.x, p.y, 8, 0, Math.PI * 2); ctx.stroke();
      ctx.lineWidth = 1;
    }
    // hover: the thing's name next to it
    if (hoverThing) {
      const p = spotOf(hoverThing, planes);
      if (p) {
        const text = short(thingLabel(hoverThing), 48);
        ctx.font = "600 12px 'Bricolage Grotesque Variable', system-ui, sans-serif"; ctx.textBaseline = "middle";
        const w = ctx.measureText(text).width + 10;
        ctx.globalAlpha = 0.9; ctx.fillStyle = colors.plate; ctx.beginPath(); ctx.roundRect(p.x + 8, p.y - 10, w, 20, 3); ctx.fill();
        ctx.globalAlpha = 1; ctx.fillStyle = colors.text; ctx.fillText(text, p.x + 13, p.y);
      }
    }
    ctx.globalAlpha = 1;
  }
  /** Plane labels: screen space, left of each plane; a real button that folds and unfolds it. */
  function placePlaneLabels(planes: Plane[]) {
    const f = layers!;
    planeLabels.hidden = tilt < 0.3;
    const counts: Record<PlaneId, number> = { media: f.media.length, hubs: f.hubs.length, code: f.objects.length, countries: Object.keys(f.countries).length };
    if (planeLabels.dataset.sys !== f.system) {
      planeLabels.dataset.sys = f.system;
      planeLabels.innerHTML = PLANES.map((id) => `<button type="button" class="g-plane" data-plane="${id}" aria-pressed="true"><b>${PLANE_LABEL[id]}</b><small>${counts[id]} ${id === "countries" ? "countries" : id === "code" ? "objects" : id === "hubs" ? "hubs" : "videos and posts"}${counts[id] ? "" : ": none in this system"}</small></button>`).join("");
      for (const b of planeLabels.querySelectorAll<HTMLButtonElement>("[data-plane]")) b.addEventListener("click", () => { const id = b.dataset.plane as PlaneId; if (folded.has(id)) folded.delete(id); else folded.add(id); redraw(); });
    }
    for (const b of planeLabels.querySelectorAll<HTMLButtonElement>("[data-plane]")) {
      const p = planes[PLANES.indexOf(b.dataset.plane as PlaneId)];
      b.setAttribute("aria-pressed", String(!p.folded)); b.title = p.folded ? "Unfold this plane" : "Fold this plane";
      b.style.transform = `translate(${Math.round(Math.max(8, p.left - 0.92 * p.depth - 170))}px, ${Math.round(p.top + p.depth / 2 - 18)}px)`;
    }
  }
  const thingAt = (mx: number, my: number): Thing | null => {
    let best: Thing | null = null, bd = 9 ** 2;
    for (const d of drawnThings) { const e = (d.x - mx) ** 2 + (d.y - my) ** 2; if (e < bd) { bd = e; best = d.thing; } }
    return best;
  };
  function takeSample(th: Thing | null) {
    sample = th && layers ? { thing: th, s: coreSample(layers, th) } : null;
    renderPanel(); redraw();
    if (th) panelBody.querySelector<HTMLElement>("h2")?.focus({ preventScroll: true });
  }
  async function setTilt(to: number, instant = false) {
    if (level !== 2 || !focusSys) return;
    if (to > 0 && layers?.system !== focusSys.id) {
      const id = focusSys.id;
      if (!layersCache.has(id)) layersCache.set(id, fetch(`${base}graph/layers/${id}.json`).then((r) => (r.ok ? r.json() : null)).catch(() => null));
      const f = await layersCache.get(id)!;
      if (!f || focusSys?.id !== id) { tiltInput.value = "0"; return; }
      layers = f; sample = null; tiltLens = null; folded = new Set(); openPlot = -1;
      layerBounds = bounds(f);
      const plots = focusSys.plots ?? [];
      objPlot = f.objects.map((o) => plotOf(plots, o[1], o[2]));
    }
    if (instant || reduce.matches || mobile()) { tilt = to; tiltAnim = null; tiltInput.value = String(Math.round(to * 100)); }
    else { tiltAnim = { from: tilt, to, t0: performance.now() }; loop(); }
    if (to === 0) { sample = null; tiltLens = null; }
    renderPanel(); renderTable(); renderChrome(); setHash(); redraw();
  }

  // ports: real buttons pinned where the focused star's dashed edges leave the canvas
  function placePorts() {
    const want = level === 3 && focusStar?.cross?.length && !listView && !mobile() ? focusStar.cross : [];
    if (ports.dataset.star !== (want.length ? focusStar!.id : "")) {
      ports.dataset.star = want.length ? focusStar!.id : "";
      ports.innerHTML = want.map(([sys, count, kind, named]) => `<button type="button" class="g-port" data-port="${esc(sys)}" style="--dot: var(--sys-${esc(sys)})"><b>${esc(sysById.get(sys)?.label ?? sys)} →</b><small>${count} ${esc(KIND[kind] ?? kind)} · ${esc(named.map((x) => short(targetLabel(x), 22)).join(", "))}</small></button>`).join("");
      for (const b of ports.querySelectorAll<HTMLButtonElement>("[data-port]")) b.addEventListener("click", () => takePort(b.dataset.port!));
    }
    // each port at its edge spot, then pushed along the edge until it overlaps no earlier port
    const placed: Rect[] = [];
    for (const b of ports.querySelectorAll<HTMLButtonElement>("[data-port]")) {
      const s = portSpots.find((x) => x.sys === b.dataset.port);
      b.hidden = !s;
      if (!s) continue;
      const w = b.offsetWidth || 160, h = b.offsetHeight || 40, x1 = W - panelW() - w - 8, y1 = H - h - 8;
      const r = { x: Math.min(Math.max(8, s.x - w / 2), x1), y: Math.min(Math.max(96, s.y - h / 2), y1), w, h };
      const vertical = r.x <= 8 || r.x >= x1;
      for (let i = 0; i < 12 && placed.some((o) => hit(r, { x: o.x - 4, y: o.y - 4, w: o.w + 8, h: o.h + 8 })); i++) {
        if (vertical) r.y = r.y + h + 8 > y1 ? 96 + ((r.y + h + 8) % Math.max(1, y1 - 96)) : r.y + h + 8;
        else r.x = r.x + w + 8 > x1 ? 8 + ((r.x + w + 8) % Math.max(1, x1 - 8)) : r.x + w + 8;
      }
      placed.push(r);
      s.x = r.x + w / 2; s.y = r.y + h / 2;
      b.style.transform = `translate(${Math.round(r.x)}px, ${Math.round(r.y)}px)`;
    }
  }
  const short = (s: string, n: number) => (s.length > n ? `${s.slice(0, n - 1)}…` : s);
  const targetLabel = (t: Target) => (typeof t === "string" ? byId.get(t)?.label ?? t : t[1]);
  const targetId = (t: Target) => (typeof t === "string" ? t : t[0]);
  /** Follow a port: fly to the star at the far end when it is one, else to its system with the objects named. */
  function takePort(sys: string) {
    const row = focusStar?.cross?.find((r) => r[0] === sys);
    const S = sysById.get(sys);
    if (!row || !S || !focusStar) return;
    const star = row[3].map(targetId).map((id) => byId.get(id)).find(Boolean);
    if (star) { goStar(star); return; }
    arrival = { from: focusStar, sys, targets: row[3], count: row[1], kind: row[2] };
    goSystem(S, true);
  }

  // system labels: DOM buttons under (or above) their cluster; a label that would overlap a bigger system's waits
  const sysButtons = new Map<string, HTMLButtonElement>();
  for (const s of g.systems) {
    const b = document.createElement("button");
    b.type = "button"; b.className = "g-sys"; b.textContent = s.label;
    b.style.setProperty("--dot", `var(--sys-${s.id})`);
    b.addEventListener("click", (e) => { e.stopPropagation(); goSystem(s); });
    labels.append(b); sysButtons.set(s.id, b);
  }
  const sysOrder = [...g.systems].sort((a, b) => b.r - a.r);
  /** Screen areas the toolbar, breadcrumb, lens bar, legend and level indicator occupy: no label goes under them. */
  const chromeRects = (): Rect[] => [crumbs, root.querySelector<HTMLElement>(".g-tools")!, lensBar, legend, levelEl, prevBtn.parentElement!, ...ports.querySelectorAll<HTMLElement>(".g-port:not([hidden])"), ...(panelOpen ? [panel] : [])].map((el) => {
    const r = el.getBoundingClientRect(), o = canvas.getBoundingClientRect();
    return { x: r.left - o.left - 4, y: r.top - o.top - 4, w: r.width + 8, h: r.height + 8 };
  }).filter((r) => r.w > 8 && r.h > 8);
  function placeSystemLabels(): Rect[] {
    const taken: Rect[] = chromeRects();
    for (const s of sysOrder) {
      const b = sysButtons.get(s.id)!;
      if (mobile() || tilt > 0 || !(level === 1 || (level === 2 && !narrow()))) { b.hidden = true; continue; }
      b.hidden = false;
      const w = b.offsetWidth || s.label.length * 8 + 16;
      const below = toScreen(s.x, s.y + s.r + 6), above = toScreen(s.x, s.y - s.r - 6);
      const spot = [{ x: below.x - w / 2, y: below.y, w, h: 26 }, { x: above.x - w / 2, y: above.y - 26, w, h: 26 }].find((r) => !taken.some((o) => hit(r, o)));
      if (!spot) { b.hidden = true; continue; }
      taken.push(spot);
      b.style.transform = `translate(${spot.x}px, ${spot.y}px)`;
      b.classList.toggle("dim", (level === 2 && s !== focusSys) || (!!lens && !lens.reach?.[s.id] && !g.nodes.some((n) => n.group === s.id && lensSet.has(n.id))));
    }
    return taken;
  }
  // star labels on the canvas (D44): each star's caption has a zoom threshold from its weight rank in its system and
  // fades in over a zoom window, brightest first, placed only where there is room; the focused, hovered and marked
  // stars always get theirs, lens matches next. A caption placed last frame keeps its slot (hysteresis).
  let prevPlaced = new Set<string>();
  const placedAt = new Map<string, number>();
  const textWidth = new Map<string, number>();
  function drawStarLabels(shown: { n: Node; p: { x: number; y: number }; d: number }[], taken: Rect[], now: number) {
    ctx.font = "600 12px 'Bricolage Grotesque Variable', system-ui, sans-serif";
    ctx.textBaseline = "middle";
    const forced = (n: Node) => n === focusStar || n === hover || n === mark;
    const near = level === 3 && focusStar ? new Set(adj.get(focusStar.id) ?? []) : null;
    const scope = scopeSys();
    const sysOf = (n: Node) => sysById.get(n.group);
    /** Target alpha from zoom: 1 for forced stars, lens matches and the focused star's connections; else by rank. */
    const target = (n: Node): number => {
      if (forced(n)) return 1;
      if (lens) return lensSet.has(n.id) ? 1 : 0;
      if (near) return near.has(n.id) ? 1 : 0;
      const sys = sysOf(n);
      if (!sys) return 0;
      const zs = cam.s / sysScale(sys), t = threshold(rank.get(n.id) ?? 99);
      return labelAlpha(zs, scope && n.group !== scope.id ? 2 * t : t, reduce.matches);
    };
    const pri = (n: Node) => (forced(n) ? 1e9 : 0) + (lens && lensSet.has(n.id) ? 1e6 : 0) + (inScope(n) ? 1e3 : 0) + (prevPlaced.has(n.id) ? 500 : 0) + n.weight;
    const cands = shown.map((x) => ({ ...x, a: target(x.n) })).filter((x) => x.a >= 0.03)
      .sort((a, b) => pri(b.n) - pri(a.n));
    const lensCap = lens ? 30 : Infinity, max = mobile() ? 0 : narrow() ? 30 : 60;
    const v = visibleRect();
    const placed = new Set<string>();
    labelsFading = false;
    let count = 0, lensCount = 0;
    for (const { n, p, d, a } of cands) {
      const isForced = forced(n);
      if (!isForced && count >= max) break;
      if (!isForced && lens && lensSet.has(n.id) && lensCount >= lensCap) continue;
      const text = n.label.length > 40 ? `${n.label.slice(0, 38)}…` : n.label;
      let w = textWidth.get(n.id);
      if (w === undefined) { w = ctx.measureText(text).width + 10; textWidth.set(n.id, w); }
      const r = { x: p.x + d / 2 + 6, y: p.y - 10, w, h: 20 };
      if (r.x + w > v.x1) r.x = p.x - d / 2 - 6 - w;
      if (!isForced && (r.x < v.x0 || r.x + w > v.x1 || r.y < v.y0 || r.y + r.h > v.y1 || taken.some((o) => hit(r, o)))) continue;
      taken.push(r); placed.add(n.id); count++;
      if (lens && lensSet.has(n.id)) lensCount++;
      // a caption that just found room fades in over 300 ms (not under reduced motion)
      let alpha = a;
      if (!reduce.matches && !isForced) {
        const since = now - (placedAt.get(n.id) ?? (placedAt.set(n.id, now), now));
        if (since < 300) { alpha *= since / 300; labelsFading = true; }
      }
      ctx.globalAlpha = 0.82 * alpha; ctx.fillStyle = colors.plate; ctx.beginPath(); ctx.roundRect(r.x, r.y, r.w, r.h, 3); ctx.fill();
      ctx.globalAlpha = alpha; ctx.fillStyle = colors.text; ctx.fillText(text, r.x + 5, r.y + 10);
    }
    for (const id of placedAt.keys()) if (!placed.has(id)) placedAt.delete(id);
    prevPlaced = placed;
    ctx.globalAlpha = 1;
  }

  // lens: the matching set and, for localizations and sources, constellation lines (nearest-neighbour tree)
  const clearedCbs: (() => void)[] = [], hashQueryCbs: ((q: string) => void)[] = [];
  /** A #q= in the URL before the live search registered (it mounts after the galaxy): delivered on registration. */
  let pendingQuery: string | null = null;
  const leaveSearch = () => { if (lens?.search) for (const cb of clearedCbs) cb(); };
  /** Choose a lens; `keepScope` keeps the system or star in view (the version and "this week" lenses work at every level). */
  function setLens(id: string, keepScope = false) {
    leaveSearch();
    lens = lensById.get(id) ?? null;
    lensSet = new Set(lens ? g.nodes.filter(lens.match).map((n) => n.id) : []);
    lensLines = [];
    if (lens?.lines) {
      const pts = g.nodes.filter((n) => lensSet.has(n.id));
      const inTree = new Set<Node>(pts.slice(0, 1));
      while (inTree.size < pts.length) {
        let best: [Node, Node] | null = null, bd = Infinity;
        for (const a of inTree) for (const b of pts) { if (inTree.has(b)) continue; const d = (a.x - b.x) ** 2 + (a.y - b.y) ** 2; if (d < bd) { bd = d; best = [a, b]; } }
        if (!best) break;
        lensLines.push(best); inTree.add(best[1]);
      }
    }
    lensSel.value = lens && !barLenses.includes(lens) ? lens.id : "";
    if (lens && !keepScope) { level = 1; focusSys = null; focusStar = null; }
    if (lens && level === 3 && focusStar && !lensSet.has(focusStar.id)) { level = 2; focusStar = null; }
    update();
  }
  const clearLens = () => { leaveSearch(); lens = null; lensSet.clear(); lensLines = []; lensSel.value = ""; };
  /** A search as an ad-hoc lens (D44): the hits with a star light up, systems with star-less hits glow, the panel lists both. */
  function setSearch(h: SearchHits | null) {
    const had = !!lens?.search;
    if (!h) { if (had) { lens = null; lensSet.clear(); lensLines = []; update(); } return; }
    const set = new Set(h.ids);
    lens = { id: `q:${h.q}`, label: `"${h.q}"`, group: "Search", match: (n) => set.has(n.id), reach: h.reach, search: h.q, pages: h.pages, total: h.total };
    lensSet = set; lensLines = []; lensSel.value = "";
    if (!had && level > 1) { level = 1; focusSys = null; focusStar = null; update(); return; }
    // typing never moves the camera; the panel does not auto-open on narrow screens (the soft keyboard is up)
    if (!had) panelOpen = userPanel ?? !narrow();
    renderPanel(); renderChrome(); setHash(); redraw();
  }

  // panel: the list of the current scope; hovering or focusing a row marks its star
  const row = (n: Node, extra = "") => `<li><button type="button" data-star="${esc(n.id)}"><span class="g-dot${n.type === "object" ? " sq" : ""}" style="--dot: var(--sys-${esc(n.group)})"></span><span>${esc(n.label)}</span><small>${extra || TYPE[n.type] || n.type}</small></button></li>`;
  const mediaRow = (id: string, kind: string, date: string | null, extra = "") => `<li><a href="${esc(base + pathOf({ id }))}"><span class="g-shape ${kind === "v" ? "tri" : "bar"}${landedMedia.has(id) ? " new" : ""}" aria-hidden="true"></span><span>${esc(byId.get(id)?.label ?? mediaTitle.get(id) ?? id)}</span><small>${kind === "v" ? "video" : "post"}${date ? ` · ${esc(date)}` : ""}${extra}</small></a></li>`;
  /** Media titles: this week's from landed.json, the rest from the ego graph of the open star; the id is the fallback. */
  const mediaTitle = new Map<string, string>(week.items.filter((i) => i[4]).map((i) => [i[0], i[4]!]));
  const targetRow = (t: Target) => {
    const id = targetId(t), star = byId.get(id);
    return star ? row(star) : `<li><a href="${esc(base + pathOf({ id }))}"><span class="g-dot sq" style="--dot: var(--muted)"></span><span>${esc(targetLabel(t))}</span><small>page</small></a></li>`;
  };
  const landedRows = (filter: (hubs: string[]) => boolean, cap = 40) => {
    const items = week.items.filter((i) => filter(i[3]));
    return items.length ? `<ul class="g-list">${items.slice(0, cap).map(([id, k, d, hubs]) => mediaRow(id, k, d, hubs.length ? ` · ${hubs.length} star${hubs.length > 1 ? "s" : ""}` : "")).join("")}</ul>${items.length > cap ? `<p class="g-meta">and ${items.length - cap} more</p>` : ""}` : "";
  };
  const weekLabel = () => (week.anchor ? `the ${week.days} days up to ${week.anchor}` : "the last 7 days");
  const exitLink = (href: string, label: string, n: string | number | null, primary = false) => `<a class="g-exit${primary ? " primary" : ""}" href="${esc(href)}">${esc(label)}${n !== null && n !== "" ? ` <span>${esc(String(n))}</span>` : ""}</a>`;
  /** The exit dock: real links to the instruments that answer what the picture cannot. */
  function exitDock(n: Node): string {
    if (n.type === "object") {
      const key = n.id.slice("object/".length);
      const latest = n.cv?.length ? n.cv[n.cv.length - 1] : null;
      const prev = latest ? String(Number(latest) - 1) : null;
      const locs = (adj.get(n.id) ?? []).filter((id) => id.startsWith("localization/"));
      return `<h3>Look closer with an instrument</h3><div class="g-dock">
        ${exitLink(`${base}neighbourhood/?o=${encodeURIComponent(key)}&s=${encodeURIComponent(n.group)}${lens?.version ? `&v=${lens.version}` : ""}`, "Neighbourhood", n.nn ? `${n.nn} objects` : null, true)}
        <div class="g-dock-2">
          ${latest && prev ? exitLink(`${base}code/versions/${prev}__${latest}/`, "Versions", `changed in ${n.cv!.map((v) => `BC${v}`).join(", ")}`) : exitLink(`${base}code/versions/`, "Versions", "no change in the snapshots")}
          ${exitLink(`${base}events/?q=${encodeURIComponent(objectName(n.label))}`, "Events", n.ec ?? 0)}
          ${locs.length ? exitLink(`${base}${pathOf({ id: locs[0] })}`, "Country diff", `${locs.length} countries`) : ""}
          ${n.ns ? exitLink(`${base}objects/?ns=${encodeURIComponent(n.ns)}`, "Atlas", n.ns) : ""}
        </div></div>`;
    }
    if (n.type === "source") return "";
    return `<h3>Look closer with an instrument</h3><div class="g-dock"><div class="g-dock-2">
      ${exitLink(`${base}coverage/`, "Coverage", n.ev ? `${n.ev} evidence items` : "no evidence yet")}
      ${exitLink(`${base}search/?q=${encodeURIComponent(n.label)}`, "Search", null)}
    </div></div>`;
  }
  function crossSection(n: Node): string {
    if (!n.cross?.length) return "";
    return `<h3>Crosses into other systems</h3><ul class="g-cross">${n.cross.map(([sys, count, kind, named]) => `<li><p><button type="button" class="g-cross-sys" data-port="${esc(sys)}" style="color: var(--sys-${esc(sys)})">${esc(sysById.get(sys)?.label ?? sys)} →</button> <small>${count} ${count === 1 ? "object" : "objects"} · ${esc(KIND[kind] ?? kind)}</small></p><ul class="g-list">${named.map(targetRow).join("")}</ul>${count > named.length ? `<p class="g-meta">and ${count - named.length} more in the neighbourhood</p>` : ""}</li>`).join("")}</ul>
      ${n.crossMore ? `<p class="g-meta">+ ${n.crossMore} more systems: the neighbourhood lists them all.</p>` : ""}`;
  }
  /** The panel while tilted: the planes and their lenses, or the core sample in plane order (HANDOFF A section 4). */
  function tiltPanel(): string {
    const f = layers!;
    const thingBtn = (th: Thing, label: string, extra = "") => `<li><button type="button" data-thing="${th.plane}|${th.i}${th.code ? `|${esc(th.code)}` : ""}"><span class="g-dot${th.plane === "code" ? " sq" : ""}" style="--dot: var(--sys-${th.plane === "countries" ? "localization" : esc(f.system)})"></span><span>${esc(label)}</span><small>${extra}</small></button></li>`;
    const undocumented = f.objects.filter((o) => o[3] === 0).length;
    if (sample) {
      const th = sample.thing, ss = sample.s;
      const posts = [...ss.media].some((m) => f.media[m][1] === "p");
      const tier = posts && (ss.hubs.size || ss.objects.size) ? "mixed" : posts ? "community" : "official";
      const objectRows = [...ss.objects].slice(0, 12).map((i) => `<li><a href="${esc(`${base}objects/${f.objects[i][0]}/`)}"><span class="g-dot sq" style="--dot: var(--sys-${esc(f.system)})"></span><span>${esc(objectTitle(f.objects[i][0]))}</span><small>${f.objects[i][3]} Learn</small></a></li>`).join("");
      const exits = th.plane === "code" ? `${exitLink(`${base}neighbourhood/?o=${encodeURIComponent(f.objects[th.i][0])}&s=${encodeURIComponent(f.system)}`, "Neighbourhood", null, true)}${exitLink(`${base}objects/${f.objects[th.i][0]}/`, "Open the page", null)}`
        : th.plane === "countries" ? exitLink(`${base}localizations/${esc(th.code ?? "")}/`, "Country diff", null, true)
        : th.plane === "hubs" ? exitLink(`${base}${pathOf({ id: f.hubs[th.i][0] })}`, "Open the page", null, true)
        : exitLink(`${base}${pathOf({ id: f.media[th.i][0] })}`, "Open the page", null, true);
      return `<p class="g-kicker">core sample · ${esc(PLANE_LABEL[th.plane])}</p><h2 tabindex="-1">${esc(thingLabel(th))}</h2>
        <p class="g-badges"><span class="badge ${tier}">${esc(TIER[tier])}</span></p>
        <div class="g-dock">${exits}</div>
        <h3>Media <span class="g-n">${ss.media.size}</span></h3>${ss.media.size ? `<ul class="g-list">${[...ss.media].slice(0, 8).map((i) => mediaRow(f.media[i][0], f.media[i][1], null)).join("")}</ul>` : `<p class="g-meta">No video or post on these hubs.</p>`}
        <h3>Topic hubs <span class="g-n">${ss.hubs.size}</span></h3>${ss.hubs.size ? `<ul class="g-list">${[...ss.hubs].slice(0, 12).map((i) => thingBtn({ plane: "hubs", i }, byId.get(f.hubs[i][0])?.label ?? f.hubs[i][0], `${f.hubs[i][3]} media`)).join("")}</ul>` : `<p class="g-meta">No Learn hub of this system names it: the coverage gap.</p>`}
        <h3>Code <span class="g-n">${ss.objects.size}</span></h3>${ss.objects.size ? `<ul class="g-list">${objectRows}</ul>${ss.objects.size > 12 ? `<p class="g-meta">and ${ss.objects.size - 12} more</p>` : ""}` : `<p class="g-meta">No object here.</p>`}
        <h3>Countries <span class="g-n">${ss.countries.size}</span></h3>${ss.countries.size ? `<ul class="g-list">${[...ss.countries].sort().map((c) => `<li><a href="${esc(`${base}localizations/${c}/`)}"><span class="g-dot" style="--dot: var(--sys-localization)"></span><span>${esc(c.toUpperCase())}</span><small>replaces it</small></a></li>`).join("")}</ul>` : `<p class="g-meta">No country replaces it.</p>`}
        <p><button type="button" class="btn" data-unsample>Back to the planes</button></p>`;
    }
    const lensRows = tiltLens?.kind === "coverage" ? `<h3>No Learn page names them <span class="g-n">${undocumented}</span></h3><ul class="g-list">${f.objects.map((o, i) => [o, i] as const).filter(([o]) => o[3] === 0).sort(([a], [b]) => (b[7] & STAR) - (a[7] & STAR) || a[0].localeCompare(b[0], "en", { numeric: true })).slice(0, 60).map(([o, i]) => thingBtn({ plane: "code", i }, objectTitle(o[0]), (o[7] & STAR) ? "star" : "")).join("")}</ul>${undocumented > 60 ? `<p class="g-meta">and ${undocumented - 60} more in the list per plane</p>` : ""}<p><a class="btn" href="${base}coverage/">The coverage heatmap</a></p>`
      : tiltLens?.kind === "country" ? (() => { const rows = f.objects.map((o, i) => [o, i] as const).filter(([o]) => o[6].split(" ").includes((tiltLens as { code: string }).code)); return `<h3>Replaced by ${esc(tiltLens.code.toUpperCase())} <span class="g-n">${rows.length}</span></h3><ul class="g-list">${rows.slice(0, 60).map(([o, i]) => thingBtn({ plane: "code", i }, objectTitle(o[0]))).join("")}</ul><p><a class="btn" href="${base}localizations/${esc(tiltLens.code)}/">Country diff for ${esc(tiltLens.code.toUpperCase())}</a></p>`; })()
      : "";
    return `<p class="g-kicker">system · tilted</p><h2 tabindex="-1">${esc(f.label)}</h2>
      <ul class="g-planecounts">
        <li><b>${f.media.length}</b> videos and posts</li><li><b>${f.hubs.length}</b> topic hubs</li><li><b>${f.objects.length}</b> AL objects, ${f.objects.length - undocumented} named by a Learn page</li><li><b>${Object.keys(f.countries).length}</b> countries replace ${f.objects.filter((o) => o[6]).length} of them</li>
      </ul>
      <p class="g-meta">Lines at rest are the stars' only: a missing line on any other object means "not drawn", not "no link". Click any thing for its core sample; the coverage lens draws absence.</p>
      <h3>Lens per plane</h3>
      <p class="g-tiltlens"><label>Country <select data-tilt-country><option value="">none</option>${Object.entries(f.countries).map(([c, n]) => `<option value="${esc(c)}"${tiltLens?.kind === "country" && tiltLens.code === c ? " selected" : ""}>${esc(c.toUpperCase())} · ${n}</option>`).join("")}</select></label>
        <button type="button" class="g-lens" data-tilt-coverage aria-pressed="${tiltLens?.kind === "coverage"}">no Learn page</button></p>
      ${lensRows}
      <h3>Namespace plots <span class="g-n">${(focusSys?.plots ?? []).length}</span></h3>
      <p class="g-meta">The code plane shows each namespace as a tile with its count; open one to see its objects.</p>
      <ul class="g-list">${(focusSys?.plots ?? []).map((pl, i) => [pl, i] as const).sort(([a], [b]) => b[5] - a[5]).slice(0, 40).map(([pl, i]) => { const n = objPlot.filter((x) => x === i).length, named = f.objects.filter((o, j) => objPlot[j] === i && o[3] > 0).length; return `<li><button type="button" data-plot="${i}" aria-pressed="${i === openPlot}"><span class="g-dot sq" style="--dot: var(--sys-${esc(f.system)})"></span><span>${esc(pl[0])}</span><small>${n} · ${named} on Learn</small></button></li>`; }).join("")}</ul>
      <p><button type="button" class="btn" data-planes-list>List per plane</button> <button type="button" class="btn" data-flatten>Flatten</button></p>`;
  }
  /** The list per plane: one tab per plane, one row per thing, a count column per other plane. */
  function renderPlaneTable() {
    const f = layers!;
    const rows = planeRows(f, planeTab, (id) => byId.get(id)?.label ?? id);
    const cols = PLANES.filter((p) => p !== planeTab);
    const label = (r: (typeof rows)[number]) => (planeTab === "code" ? objectTitle(r.label) : r.label);
    rows.sort((a, b) => (planeTab === "code" ? ((b.flags ?? 0) & STAR) - ((a.flags ?? 0) & STAR) : 0) || cols.reduce((s, c) => s + (b.cols[c] ?? 0) - (a.cols[c] ?? 0), 0) || label(a).localeCompare(label(b), "en", { numeric: true }));
    table.innerHTML = `<div role="tablist" aria-label="Planes" class="g-tabs">${PLANES.map((p) => `<button type="button" role="tab" aria-selected="${p === planeTab}" data-tab="${p}">${PLANE_LABEL[p]}</button>`).join("")}</div>
      <p class="g-meta">${esc(f.label)}, ${esc(PLANE_LABEL[planeTab])}: ${rows.length}</p>
      <table><thead><tr><th scope="col">${esc(PLANE_LABEL[planeTab])}</th>${cols.map((c) => `<th scope="col" class="num">${esc(PLANE_LABEL[c])}</th>`).join("")}</tr></thead>
      <tbody>${rows.slice(0, 500).map((r) => `<tr><th scope="row"><button type="button" data-thing="${r.thing.plane}|${r.thing.i}${r.thing.code ? `|${esc(r.thing.code)}` : ""}">${esc(label(r))}</button></th>${cols.map((c) => `<td class="num">${r.cols[c] ?? "-"}</td>`).join("")}</tr>`).join("")}</tbody></table>
      ${rows.length > 500 ? `<p class="g-meta">and ${rows.length - 500} more</p>` : ""}`;
    for (const b of table.querySelectorAll<HTMLButtonElement>("[data-tab]")) b.addEventListener("click", () => { planeTab = b.dataset.tab as PlaneId; renderTable(); table.querySelector<HTMLElement>(`[data-tab="${planeTab}"]`)?.focus(); });
    for (const b of table.querySelectorAll<HTMLButtonElement>("[data-thing]")) {
      const [plane, i, code] = b.dataset.thing!.split("|");
      b.addEventListener("click", () => { if (!mobile()) { listView = false; renderTable(); renderChrome(); setHash(); } takeSample({ plane: plane as PlaneId, i: Number(i), ...(code ? { code } : {}) }); });
    }
  }
  function renderPanel() {
    root.classList.toggle("g-panel-open", panelOpen);
    listBtn.setAttribute("aria-expanded", String(panelOpen));
    listBtn.textContent = panelOpen ? "Hide panel" : "Show panel";
    panel.hidden = !panelOpen;
    let html = "";
    if (tilted() || (level === 2 && tilt > 0 && layers && mobile())) html = tiltPanel();
    else if (lens?.search) {
      const hits = g.nodes.filter((n) => lensSet.has(n.id)).sort((a, b) => b.weight - a.weight);
      const reach = Object.entries(lens.reach ?? {}).sort((a, b) => b[1] - a[1]);
      const without = (lens.total ?? hits.length) - hits.length;
      html = `<p class="g-kicker">search</p><h2 tabindex="-1">${esc(lens.label)}</h2><p class="g-meta">${hits.length} stars light up, ${without} pages without a star.</p>
        <p><a class="btn" href="${base}search/?q=${encodeURIComponent(lens.search)}">All results</a> <button type="button" class="btn" data-clear-lens>Clear</button></p>
        ${hits.length ? `<h3>Stars</h3><ul class="g-list">${hits.slice(0, 80).map((n) => row(n)).join("")}</ul>` : ""}
        ${reach.length ? `<h3>Systems with matching pages</h3><ul class="g-list">${reach.map(([id, n]) => `<li><button type="button" data-sys="${esc(id)}"><span class="g-dot" style="--dot: var(--sys-${esc(id)})"></span><span>${esc(sysById.get(id)?.label ?? id)}</span><small>${n} pages</small></button></li>`).join("")}</ul>` : ""}
        ${lens.pages?.length ? `<h3>Pages without a star</h3><ul class="g-list">${lens.pages.slice(0, 30).map((r) => `<li><a href="${esc(`${base}${r.path}/`)}"><span class="g-dot" style="--dot: var(--sys-${esc(r.system ?? "platform")}, var(--muted))"></span><span>${esc(r.title)}</span><small>${esc(r.type)}</small></a></li>`).join("")}</ul>` : ""}`;
    } else if (lens) {
      const scope = level >= 2 && focusSys ? focusSys : null;
      const hits = g.nodes.filter((n) => lensSet.has(n.id) && (!scope || n.group === scope.id)).sort((a, b) => b.weight - a.weight);
      const reach = Object.entries(lens.reach ?? {}).sort((a, b) => b[1] - a[1]);
      const per = new Map<string, number>();
      for (const n of g.nodes) if (lensSet.has(n.id)) per.set(n.group, (per.get(n.group) ?? 0) + 1);
      const extra = (n: Node) => (lens!.version ? [n.cv?.includes(lens!.version) ? `changed in BC${lens!.version}` : "", n.ob?.includes(lens!.version) ? "obsolete" : ""].filter(Boolean).join(", ") : "");
      html = `<p class="g-kicker">lens · ${esc(lens.group.toLowerCase())}${scope ? ` · ${esc(scope.label)}` : ""}</p><h2 tabindex="-1">${esc(lens.label)}</h2>
        <p class="g-meta">${hits.length} stars light up${scope ? ` in ${esc(scope.label)}` : ""}${lens.lines && hits.length > 1 ? ", joined into a constellation" : ""}${lens.id === "landed" ? `: ${week.items.length} videos and posts landed in ${esc(weekLabel())}` : ""}.</p>
        <p>${lens.exit ? `<a class="btn" href="${esc(lens.exit.href)}">${esc(lens.exit.label)}</a> ` : ""}<button type="button" class="btn" data-clear-lens>Clear the lens</button></p>
        ${lens.id === "landed" ? `<h3>Landed in ${esc(weekLabel())}</h3>${landedRows((hubs) => !scope || hubs.some((h) => byId.get(h)?.group === scope.id))}` : ""}
        ${!scope && !reach.length && per.size > 1 ? `<h3>Per system</h3><ul class="g-list">${[...per].sort((a, b) => b[1] - a[1]).map(([id, c]) => `<li><button type="button" data-sys="${esc(id)}" data-keep-lens><span class="g-dot" style="--dot: var(--sys-${esc(id)})"></span><span>${esc(sysById.get(id)?.label ?? id)}</span><small>${c}</small></button></li>`).join("")}</ul>` : ""}
        ${reach.length ? `<h3>Systems it writes about</h3><ul class="g-list">${reach.map(([id, n]) => `<li><button type="button" data-sys="${esc(id)}"><span class="g-dot" style="--dot: var(--sys-${esc(id)})"></span><span>${esc(sysById.get(id)?.label ?? id)}</span><small>${n} items</small></button></li>`).join("")}</ul>` : ""}
        <h3>Stars</h3><ul class="g-list">${hits.slice(0, 150).map((n) => row(n, extra(n))).join("")}</ul>`;
    } else if (level === 1) {
      html = `<p class="g-kicker">galaxy</p><h2 tabindex="-1">${g.systems.length} systems</h2><p class="g-meta">${g.nodes.length} stars. Systems sit next to the ones they share the most links with. Pick a system, or a lens to see where something touches the galaxy.</p><ul class="g-list">${g.systems.map((s) => `<li><button type="button" data-sys="${esc(s.id)}"><span class="g-dot" style="--dot: var(--sys-${esc(s.id)})"></span><span>${esc(s.label)}</span><small>${g.nodes.filter((n) => n.group === s.id).length}</small></button></li>`).join("")}</ul>
        ${week.items.length ? `<h3>Landed in ${esc(weekLabel())}</h3>${landedRows(() => true, 12)}` : ""}`;
    } else if (level === 2 && focusSys) {
      const stars = g.nodes.filter((n) => n.group === focusSys!.id).sort((a, b) => b.weight - a.weight);
      const plots = focusSys.plots ?? [];
      const came = arrival?.sys === focusSys.id ? arrival : null;
      html = `<p class="g-kicker">system</p><h2 tabindex="-1">${esc(focusSys.label)}</h2><p class="g-meta">${stars.length} stars, brightest first${plots.length ? `; ${plots.reduce((s, p) => s + p[5], 0)} AL objects in ${plots.length} namespace plots` : ""}.</p>
        ${came ? `<div class="g-arrival"><p>From <button type="button" data-star="${esc(came.from.id)}">${esc(came.from.label)}</button>: ${came.count} ${came.count === 1 ? "object" : "objects"} here by ${esc(KIND[came.kind] ?? came.kind)}, none of them a star.</p><ul class="g-list">${came.targets.map(targetRow).join("")}</ul></div>` : ""}
        <ul class="g-list">${stars.slice(0, 150).map((n) => row(n)).join("")}</ul>${stars.length > 150 ? `<p class="g-meta">and ${stars.length - 150} more</p>` : ""}
        ${landedRows((hubs) => hubs.some((h) => byId.get(h)?.group === focusSys!.id), 12) ? `<h3>Landed in ${esc(weekLabel())}</h3>${landedRows((hubs) => hubs.some((h) => byId.get(h)?.group === focusSys!.id), 12)}` : ""}`;
    } else if (level === 3 && focusStar) {
      const n = focusStar, near = (adj.get(n.id) ?? []).map((id) => byId.get(id)!).filter(Boolean).sort((a, b) => b.weight - a.weight);
      const inside = near.filter((x) => x.group === n.group), outside = near.filter((x) => x.group !== n.group);
      const href = n.type === "source" && n.url?.startsWith("http") ? n.url : `${base}${pathOf(n)}`;
      const mine = week.items.filter((i) => i[3].includes(n.id));
      for (const m of ego?.id === n.id ? ego.nodes : []) mediaTitle.set(m.id, m.label);
      html = `<p class="g-kicker" style="color: var(--sys-${esc(n.group)})">${TYPE[n.type] ?? n.type} · ${esc(sysById.get(n.group)?.label ?? n.group)}</p><h2 tabindex="-1">${esc(n.label)}</h2>
        <p class="g-badges"><span class="badge ${esc(n.tier)}">${esc(TIER[n.tier] ?? n.tier)}</span>${n.cv?.length ? ` <span class="badge status-other">changed in ${n.cv.map((v) => `BC${esc(v)}`).join(", ")}</span>` : ""}${n.ob?.length ? ` <span class="badge obsolete">obsolete in BC${esc(n.ob[0])}</span>` : ""}</p>
        <p class="g-meta">${n.ev ? `${n.ev} evidence items${n.cs ? `, ${Math.round(n.cs * 100)}% community` : ""} · ` : "no evidence yet · "}${near.length} connected stars</p>
        <p><a class="btn primary" href="${esc(href)}" data-open>Open the page</a></p>
        ${exitDock(n)}
        ${crossSection(n)}
        ${mine.length ? `<h3>Landed in ${esc(weekLabel())}</h3><ul class="g-list">${mine.map(([id, k, d]) => mediaRow(id, k, d)).join("")}</ul>` : ""}
        ${n.mb ? `<h3>Videos and posts</h3><ul class="g-list">${n.mb.top.map(([id, k, d]) => mediaRow(id, k, d)).join("")}</ul>${n.mb.n > n.mb.top.length ? `<p class="g-meta">and ${n.mb.n - n.mb.top.length} more on the page</p>` : ""}` : ""}
        ${inside.length ? `<h3>In this system</h3><ul class="g-list">${inside.slice(0, 60).map((x) => row(x, KIND[edgeType.get(`${n.id}|${x.id}`) ?? ""] ?? "")).join("")}</ul>` : ""}
        ${outside.length ? `<h3>Linked stars in other systems</h3><ul class="g-list">${outside.slice(0, 40).map((x) => row(x, `${esc(sysById.get(x.group)?.label ?? x.group)}`)).join("")}</ul>` : ""}`;
    }
    panelBody.innerHTML = html;
    for (const b of panelBody.querySelectorAll<HTMLButtonElement>("[data-star]")) {
      const n = byId.get(b.dataset.star!);
      if (!n) continue;
      b.addEventListener("click", () => goStar(n));
      const on = () => { mark = n; redraw(); }, off = () => { if (mark === n) { mark = null; redraw(); } };
      b.addEventListener("mouseenter", on); b.addEventListener("focus", on);
      b.addEventListener("mouseleave", off); b.addEventListener("blur", off);
    }
    for (const b of panelBody.querySelectorAll<HTMLButtonElement>("[data-sys]")) {
      const s = sysById.get(b.dataset.sys!)!;
      b.addEventListener("click", () => goSystem(s, false, b.hasAttribute("data-keep-lens")));
    }
    for (const b of panelBody.querySelectorAll<HTMLButtonElement>("[data-port]")) b.addEventListener("click", () => takePort(b.dataset.port!));
    panelBody.querySelector("[data-clear-lens]")?.addEventListener("click", () => setLens("", true));
    for (const b of panelBody.querySelectorAll<HTMLButtonElement>("[data-thing]")) {
      const [plane, i, code] = b.dataset.thing!.split("|");
      b.addEventListener("click", () => takeSample({ plane: plane as PlaneId, i: Number(i), ...(code ? { code } : {}) }));
    }
    panelBody.querySelector("[data-flatten]")?.addEventListener("click", () => setTilt(0));
    for (const b of panelBody.querySelectorAll<HTMLButtonElement>("[data-plot]")) b.addEventListener("click", () => { const i = Number(b.dataset.plot); openPlot = openPlot === i ? -1 : i; renderPanel(); redraw(); panelBody.querySelector<HTMLElement>(`[data-plot="${i}"]`)?.focus(); });
    panelBody.querySelector("[data-unsample]")?.addEventListener("click", () => takeSample(null));
    panelBody.querySelector("[data-planes-list]")?.addEventListener("click", () => { listView = true; renderTable(); renderChrome(); setHash(); table.querySelector<HTMLElement>("[role=tab]")?.focus(); });
    panelBody.querySelector<HTMLSelectElement>("[data-tilt-country]")?.addEventListener("change", (e) => {
      const code = (e.currentTarget as HTMLSelectElement).value;
      tiltLens = code ? { kind: "country", code } : null; folded = new Set(code ? ["media", "hubs"] : []); sample = null; renderPanel(); redraw();
    });
    panelBody.querySelector("[data-tilt-coverage]")?.addEventListener("click", () => {
      const on = tiltLens?.kind !== "coverage";
      tiltLens = on ? { kind: "coverage" } : null; folded = new Set(on ? ["media", "countries"] : []); sample = null; renderPanel(); redraw();
    });
    panelBody.querySelector<HTMLAnchorElement>("[data-open]")?.addEventListener("click", (e) => { if (focusStar) { e.preventDefault(); openPage(focusStar, (e.currentTarget as HTMLAnchorElement).href); } });
  }
  // list view: the system in view (or every system) as a sortable table in place of the canvas
  function renderTable() {
    root.classList.toggle("g-listview", listView);
    viewBtn.setAttribute("aria-pressed", String(listView));
    table.hidden = !listView;
    if (!listView) { table.innerHTML = ""; return; }
    if (level === 2 && tilt > 0 && layers?.system === focusSys?.id) { renderPlaneTable(); return; }
    const scope = focusSys;
    const nodes = sortRows(g.nodes.filter((n) => (!scope || n.group === scope.id) && (!lens || lensSet.has(n.id))), sortKey);
    const th = (k: SortKey, label: string) => `<th scope="col" aria-sort="${sortKey === k ? (k === "star" || k === "kind" ? "ascending" : "descending") : "none"}"><button type="button" data-sort="${k}">${label}</button></th>`;
    table.innerHTML = `<p class="g-meta">${scope ? esc(scope.label) : "All systems"}${lens ? `, lens "${esc(lens.label)}"` : ""}: ${nodes.length} stars</p>
      <table><thead><tr>${th("star", "Star")}${th("kind", "Kind")}${scope ? "" : th("system", "System")}${th("connections", "Connections")}${th("evidence", "Evidence")}${th("changed", "Changed in")}</tr></thead>
      <tbody>${nodes.slice(0, 400).map((n) => `<tr><th scope="row"><button type="button" data-star="${esc(n.id)}"><span class="g-dot${n.type === "object" ? " sq" : ""}" style="--dot: var(--sys-${esc(n.group)})"></span>${esc(n.label)}</button></th><td>${esc(TYPE[n.type] ?? n.type)}</td>${scope ? "" : `<td>${esc(sysById.get(n.group)?.label ?? n.group)}</td>`}<td class="num">${Math.round(n.weight)}</td><td class="num">${n.ev ?? 0}</td><td>${(n.cv ?? []).map((v) => `BC${esc(v)}`).join(", ")}${n.ob?.length ? ` (obsolete BC${esc(n.ob[0])})` : ""}</td></tr>`).join("")}</tbody></table>
      ${nodes.length > 400 ? `<p class="g-meta">and ${nodes.length - 400} more: narrow with a system or a lens</p>` : ""}`;
    for (const b of table.querySelectorAll<HTMLButtonElement>("[data-sort]")) b.addEventListener("click", () => { sortKey = b.dataset.sort as SortKey; renderTable(); table.querySelector<HTMLButtonElement>(`[data-sort="${sortKey}"]`)?.focus(); });
    for (const b of table.querySelectorAll<HTMLButtonElement>("[data-star]")) b.addEventListener("click", () => { const n = byId.get(b.dataset.star!); if (n) { listView = false; goStar(n); } });
  }
  function renderChrome() {
    const parts = [level === 1 && !lens ? `<span aria-current="page">Galaxy</span>` : `<button type="button" data-crumb="1">Galaxy</button>`];
    if (lens) parts.push(`<span${level === 1 ? ` aria-current="page"` : ""}>${esc(lens.label)}</span>`);
    if (level >= 2 && focusSys) parts.push(level === 2 ? `<span aria-current="page">${esc(focusSys.label)}</span>` : `<button type="button" data-crumb="2">${esc(focusSys.label)}</button>`);
    if (level === 3 && focusStar) parts.push(`<span aria-current="page">${esc(focusStar.label)}</span>`);
    crumbs.innerHTML = parts.join('<span aria-hidden="true">/</span>');
    crumbs.querySelector('[data-crumb="1"]')?.addEventListener("click", () => { if (lens && level === 1) setLens(""); else goGalaxy(); });
    crumbs.querySelector('[data-crumb="2"]')?.addEventListener("click", () => goSystem(focusSys!, false, true));
    levelEl.textContent = ["", "galaxy", "system", "star"][level];
    prevBtn.hidden = nextBtn.hidden = level !== 2;
    root.dataset.level = String(level);
    for (const b of lensButtons) {
      const on = lens?.id === b.dataset.lens;
      b.setAttribute("aria-pressed", String(on)); b.classList.toggle("on", on);
      b.querySelector(".g-lens-n")!.textContent = on ? String(lensSet.size) : "";
    }
    legend.hidden = level < 2 || mobile() || tilt > 0;
    // an older graph has no plots and no layers files: no Tilt to offer until the nightly writes them
    const canTilt = level === 2 && !!focusSys?.plots?.length;
    tiltWrap.hidden = !canTilt || mobile();
    planesBtn.hidden = !canTilt || !mobile();
    planesBtn.setAttribute("aria-pressed", String(tilt > 0));
    if (level !== 2) tiltInput.value = "0";
  }
  const setHash = () => {
    const parts: string[] = [];
    if (lens?.search) parts.push(`q=${encodeURIComponent(lens.search)}`);
    else if (lens) parts.push(`lens=${encodeURIComponent(lens.id)}`);
    if (level === 2 && focusSys) parts.push(`system=${focusSys.id}`);
    if (level === 3 && focusStar) parts.push(`star=${encodeURIComponent(focusStar.id)}`);
    if (level === 2 && tilt > 0) parts.push("tilt=1");
    if (listView) parts.push("view=list");
    history.replaceState(null, "", parts.length ? `#${parts.join("&")}` : location.pathname + location.search);
  };
  /** Leaving the system level flattens: Tilt is a state of one system, not a place. */
  const flatten = () => { tilt = 0; tiltAnim = null; sample = null; tiltLens = null; folded = new Set(); hoverThing = null; };
  function update(instant = false) {
    if (level !== 2) flatten();
    panelOpen = mobile() || (userPanel ?? ((level >= 2 || !!lens) && !narrow()));
    renderPanel(); renderChrome(); renderTable(); setHash(); fly(instant);
  }
  function goGalaxy() { level = 1; focusSys = null; focusStar = null; arrival = null; if (lens && !lens.search && !barLenses.includes(lens)) clearLens(); update(); }
  function goSystem(s: Sys, fromPort = false, keepLens = false) {
    if (!lens?.search && !keepLens && !(lens && barLenses.includes(lens))) clearLens();
    if (!fromPort) arrival = null;
    if (focusSys !== s) flatten();
    level = 2; focusSys = s; focusStar = null; update();
    if (fromPort) panelBody.querySelector<HTMLElement>("h2")?.focus({ preventScroll: true });
  }
  async function goStar(n: Node) {
    level = 3; focusSys = sysById.get(n.group) ?? focusSys; focusStar = n; mark = null; arrival = null;
    focusAt = reduce.matches ? 0 : Number.POSITIVE_INFINITY;
    if (lens && !lensSet.has(n.id)) clearLens();
    update();
    panelBody.querySelector<HTMLElement>("h2")?.focus({ preventScroll: true });
    if (ego?.id !== n.id) {
      try { const e: Ego = await (await fetch(`${base}graph/ego/${n.id}.json`)).json(); if (focusStar === n) { ego = e; renderPanel(); } } catch { /* no ego graph for this star */ }
    }
  }
  /** Level 4: fly into the star, fade, open its page. */
  function openPage(n: Node, href: string) {
    if (reduce.matches) { location.href = href; return; }
    fade.hidden = false;
    requestAnimationFrame(() => fade.classList.add("on"));
    flyTo({ ...cam, s: cam.s * 6, tx: n.x, ty: n.y }, false, () => { location.href = href; });
  }
  const step = (d: number) => { const i = g.systems.indexOf(focusSys!); goSystem(g.systems[(i + d + g.systems.length) % g.systems.length], false, true); };
  prevBtn.addEventListener("click", () => step(-1));
  nextBtn.addEventListener("click", () => step(1));
  listBtn.addEventListener("click", () => { userPanel = !panelOpen; update(); });
  viewBtn.addEventListener("click", () => { listView = !listView; renderTable(); renderChrome(); setHash(); if (listView) table.querySelector<HTMLElement>("button")?.focus(); else redraw(); });
  lensSel.addEventListener("change", () => setLens(lensSel.value));
  // the tilt control: a labelled range that follows the hand and snaps to flat or tilted on release
  tiltInput.addEventListener("input", async () => {
    const v = Number(tiltInput.value) / 100;
    if (!layers || layers.system !== focusSys?.id) { await setTilt(v > 0.5 ? 1 : 0, true); return; }
    tiltAnim = null; tilt = v; redraw();
  });
  tiltInput.addEventListener("change", () => setTilt(Number(tiltInput.value) >= 50 ? 1 : 0));
  planesBtn.addEventListener("click", async () => { if (tilt > 0) { await setTilt(0, true); listView = false; } else { await setTilt(1, true); listView = true; } renderTable(); renderChrome(); setHash(); });
  const zoomBy = (k: number, sx = W / 2, sy = H / 2) => {
    anim = null;
    const w = toWorld(sx, sy);
    cam.s = Math.min(fitScale() * 60, Math.max(fitScale() * 0.6, cam.s * k));
    cam.tx = w.x - (sx - cam.vx) / cam.s; cam.ty = w.y - (sy - cam.vy) / cam.s;
    redraw();
  };
  root.querySelector("[data-g-in]")?.addEventListener("click", () => zoomBy(1.5));
  root.querySelector("[data-g-out]")?.addEventListener("click", () => zoomBy(1 / 1.5));
  const fullscreen = () => {
    if (document.fullscreenElement === root) { document.exitFullscreen(); return; }
    if (root.classList.contains("g-full")) { root.classList.remove("g-full"); fullBtn.textContent = "Full screen"; resize(); return; }
    const css = () => { root.classList.add("g-full"); fullBtn.textContent = "Exit full screen"; resize(); };
    if (root.requestFullscreen) root.requestFullscreen().catch(css); else css();
  };
  fullBtn.addEventListener("click", fullscreen);
  document.addEventListener("fullscreenchange", () => { fullBtn.textContent = document.fullscreenElement === root ? "Exit full screen" : "Full screen"; });

  // pointer: hover label, click a star, background click zooms out one level; drag pans; wheel and pinch zoom
  const nodeAt = (mx: number, my: number) => {
    let best: Node | null = null, bd = 13 ** 2;
    for (const n of g.nodes) {
      if (alpha(n) < 0.2 && n !== focusStar && !(lens && lensSet.has(n.id))) continue;
      const p = toScreen(n.x, n.y), d = (p.x - mx) ** 2 + (p.y - my) ** 2;
      if (d < bd) { bd = d; best = n; }
    }
    return best;
  };
  const pos = (e: { clientX: number; clientY: number }) => { const r = canvas.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; };
  const pointers = new Map<number, { x: number; y: number }>();
  let drag: { x: number; y: number; tx: number; ty: number; moved: boolean } | null = null, pinch: { d: number; s: number } | null = null;
  canvas.addEventListener("pointerdown", (e) => {
    canvas.setPointerCapture(e.pointerId);
    pointers.set(e.pointerId, pos(e));
    if (pointers.size === 1) drag = { ...pos(e), tx: cam.tx, ty: cam.ty, moved: false };
    if (pointers.size === 2) { const [a, b] = [...pointers.values()]; pinch = { d: Math.hypot(a.x - b.x, a.y - b.y) || 1, s: cam.s }; }
  });
  canvas.addEventListener("pointermove", (e) => {
    const p = pos(e);
    if (pointers.has(e.pointerId)) pointers.set(e.pointerId, p);
    if (pinch && pointers.size === 2) {
      const [a, b] = [...pointers.values()];
      zoomBy((pinch.s * Math.hypot(a.x - b.x, a.y - b.y) / pinch.d) / cam.s, (a.x + b.x) / 2, (a.y + b.y) / 2);
      if (drag) drag.moved = true;
      return;
    }
    if (drag && pointers.size === 1) {
      const dx = p.x - drag.x, dy = p.y - drag.y;
      if (Math.abs(dx) + Math.abs(dy) > 4) drag.moved = true;
      if (drag.moved && tilt > 0) return;
      if (drag.moved) { anim = null; cam.tx = drag.tx - dx / cam.s; cam.ty = drag.ty - dy / cam.s; canvas.style.cursor = "grabbing"; redraw(); }
      return;
    }
    if (tilted()) { const th = thingAt(p.x, p.y); if (JSON.stringify(th) !== JSON.stringify(hoverThing)) { hoverThing = th; canvas.style.cursor = th ? "pointer" : "default"; redraw(); } return; }
    const n = nodeAt(p.x, p.y);
    if (n !== hover) { hover = n; canvas.style.cursor = n ? "pointer" : "grab"; redraw(); }
  });
  const endPointer = (e: PointerEvent) => {
    pointers.delete(e.pointerId);
    if (pointers.size < 2) pinch = null;
    if (pointers.size === 0) { canvas.style.cursor = hover ? "pointer" : "grab"; setTimeout(() => (drag = null)); }
  };
  canvas.addEventListener("pointerup", endPointer);
  canvas.addEventListener("pointercancel", endPointer);
  canvas.addEventListener("pointerleave", () => { if (hover) { hover = null; redraw(); } });
  canvas.addEventListener("click", (e) => {
    if (drag?.moved) return;
    const p = pos(e);
    if (tilted()) {
      const th = thingAt(p.x, p.y);
      if (th) { takeSample(th); return; }
      const tile = drawnTiles.find((x) => inQuad(x.q, p.x, p.y));
      if (tile) { openPlot = openPlot === tile.i ? -1 : tile.i; renderPanel(); redraw(); return; }
      if (sample) takeSample(null); else setTilt(0);
      return;
    }
    const n = nodeAt(p.x, p.y);
    if (n) { goStar(n); return; }
    if (level === 1 && !lens) {
      let best: Sys | null = null, bd = Infinity;
      for (const s of g.systems) { const q = toScreen(s.x, s.y), d = Math.hypot(q.x - p.x, q.y - p.y); if (d < (s.r + 40) * cam.s && d < bd) { bd = d; best = s; } }
      if (best) goSystem(best);
      return;
    }
    if (level === 3) goSystem(focusSys!, false, true); else if (level === 2) goGalaxy();
  });
  canvas.addEventListener("wheel", (e) => { e.preventDefault(); const p = pos(e); zoomBy(Math.exp(-e.deltaY * 0.0015), p.x, p.y); }, { passive: false });
  /** Arrow keys at star level: the nearest star of the system in that direction (HANDOFF D section 6). */
  const nearestIn = (dx: number, dy: number): Node | null => {
    if (!focusStar) return null;
    let best: Node | null = null, bs = Infinity;
    for (const n of g.nodes) {
      if (n === focusStar || n.group !== focusStar.group) continue;
      const vx = n.x - focusStar.x, vy = n.y - focusStar.y, d = Math.hypot(vx, vy), cos = (vx * dx + vy * dy) / (d || 1);
      if (cos < 0.5) continue;
      const score = d / cos;
      if (score < bs) { bs = score; best = n; }
    }
    return best;
  };
  root.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && (level > 1 || lens || listView)) {
      e.preventDefault();
      if (listView) { listView = false; renderTable(); renderChrome(); setHash(); redraw(); return; }
      if (sample) { takeSample(null); return; }
      if (tilt > 0) { setTilt(0); return; }
      if (lens && level === 1) setLens(""); else if (level === 3) goSystem(focusSys!, false, true); else goGalaxy();
      return;
    }
    if ((e.target as HTMLElement).closest("select, input, .g-table")) return;
    const dir: Record<string, [number, number]> = { ArrowRight: [1, 0], ArrowLeft: [-1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] };
    if (level === 3 && dir[e.key] && !(e.target as HTMLElement).closest(".g-panel")) {
      const n = nearestIn(...dir[e.key]);
      if (n) { e.preventDefault(); goStar(n); }
      return;
    }
    if (level === 2 && (e.key === "ArrowRight" || e.key === "ArrowLeft") && !(e.target as HTMLElement).closest(".g-panel")) { e.preventDefault(); step(e.key === "ArrowRight" ? 1 : -1); }
    if (e.key === "+" || e.key === "=") zoomBy(1.5);
    if (e.key === "-") zoomBy(1 / 1.5);
    if (e.key === "f" || e.key === "F") fullscreen();
    if ((e.key === "t" || e.key === "T") && level === 2) setTilt(tilt > 0 ? 0 : 1);
  });
  new ResizeObserver(() => resize()).observe(root);
  addEventListener("bcobs-theme", () => { readColors(); redraw(); });
  matchMedia("(prefers-color-scheme: light)").addEventListener("change", () => { readColors(); redraw(); });

  // deep links: #system=<id>, #star=<id>, #lens=<id>, #q=<query>, #view=list, combined with & (#system=finance&lens=version:30).
  // A star that is not in the summary (the explorer links every object) opens its system instead: #star=<id>&system=<id>.
  const fromHash = (): boolean => {
    const h = parseHash(location.hash);
    if (!h.size) return false;
    const q = h.get("q");
    if (q) { if (hashQueryCbs.length) for (const cb of hashQueryCbs) cb(q); else pendingQuery = q; return true; }
    listView = h.get("view") === "list";
    const star = byId.get(h.get("star") ?? ""), sys = sysById.get(h.get("system") ?? "") ?? (star ? sysById.get(star.group) : undefined);
    const l = h.get("lens");
    const pick = l?.startsWith("pick:") ? l.slice(5) : null;
    if (l && !pick && lensById.has(l)) {
      lens = null;
      if (star) { level = 3; focusSys = sysById.get(star.group) ?? null; focusStar = star; }
      else if (sys) { level = 2; focusSys = sys; focusStar = null; }
      setLens(l, !!(star || sys));
      if (star) goStar(star);
      return true;
    }
    if (star) goStar(star); else if (sys) { goSystem(sys); if (h.get("tilt") === "1") setTilt(1, true); } else if (!pick && !listView) return false;
    // #lens=pick:source or pick:localization: open the lens picker on that group (the home page's question entries)
    if (pick) {
      const grp = { source: "Source", localization: "Localization" }[pick];
      const first = lenses.find((x) => x.group === grp);
      if (first) { lensSel.focus(); lensSel.value = ""; panelOpen = true; renderPanel(); panelBody.innerHTML = `<p class="g-kicker">lens</p><h2 tabindex="-1">Pick a ${esc(pick)}</h2><p class="g-meta">Choose one in the lens list above: the galaxy lights up where it touches Business Central.</p><ul class="g-list">${lenses.filter((x) => x.group === grp).map((x) => `<li><button type="button" data-pick="${esc(x.id)}"><span>${esc(x.label)}</span></button></li>`).join("")}</ul>`; for (const b of panelBody.querySelectorAll<HTMLButtonElement>("[data-pick]")) b.addEventListener("click", () => setLens(b.dataset.pick!)); }
    }
    if (listView && !star && !sys) { renderTable(); renderChrome(); }
    return true;
  };
  addEventListener("hashchange", () => { if (fromHash()) root.scrollIntoView({ block: "start", behavior: reduce.matches ? "auto" : "smooth" }); });
  resize();
  const linked = fromHash();
  if (!linked) update(true);
  root.classList.add("g-ready");
  if (linked) root.scrollIntoView({ block: "start" });
  if (animating()) loop();
  return {
    hasStar: (id) => byId.has(id), setSearch,
    onSearchCleared: (cb) => { clearedCbs.push(cb); },
    onHashQuery: (cb) => { hashQueryCbs.push(cb); if (pendingQuery) { const q = pendingQuery; pendingQuery = null; cb(q); } },
  };
}
