/**
 * The galaxy (design/HANDOFF.md section 5, D42, PLAN 4.7): canvas for stars, edges and star labels; DOM for system
 * labels, toolbar, lens and panel.
 *
 * - Levels: galaxy -> system -> star -> page (level 4 flies into the star and opens its page). Wheel, pinch and drag
 *   zoom and pan freely at any level; labels appear as there is room for them and never overlap.
 * - Encodings: hue = system; brightness = evidence on the star (Learn pages, videos, posts); a ring in the community
 *   colour when most of that evidence is community; size = connections. Newly lit stars pulse.
 * - Lenses: type, tier, version, a localization (constellation lines between the objects it changes) or a source
 *   (where a blog or channel touches the galaxy). Matching stars light up, the rest dims; the panel lists them.
 * - Panel: the list of the current scope (systems, a system's stars, a star's connections and evidence, a lens's
 *   matches); hovering a row marks its star. It collapses and reopens; the galaxy can go full screen.
 * Camera: translate(vx - tx*s, vy - ty*s) scale(s), flown with the handoff's easing; a cut under reduced motion.
 */
interface Sys { id: string; label: string; x: number; y: number; r: number }
interface Node { id: string; type: string; label: string; tier: string; group: string; weight: number; url?: string; lit_at: string | null; x: number; y: number; ev?: number; cs?: number; cv?: string[] }
interface Edge { s: string; t: string; type: string }
interface Summary { systems: Sys[]; nodes: Node[]; edges: Edge[]; touches?: Record<string, string[]>; reach?: Record<string, Record<string, number>> }
interface Ego { id: string; nodes: Node[]; edges: Edge[] }
type Level = 1 | 2 | 3;
interface Lens { id: string; label: string; group: string; match: (n: Node) => boolean; lines?: boolean; reach?: Record<string, number>; search?: string; pages?: Row[]; total?: number }

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
import type { Row } from "./search.js";
import type { SearchHits } from "./live-search.js";

const FLY_MS = 1100;
/** cubic-bezier(.65,0,.2,1) (tokens motion.cameraFly): solve x(m) = t by bisection, return y(m). */
const ease = (t: number) => {
  const bez = (m: number, p1: number, p2: number) => 3 * m * (1 - m) ** 2 * p1 + 3 * m * m * (1 - m) * p2 + m ** 3;
  let lo = 0, hi = 1;
  for (let i = 0; i < 24; i++) { const m = (lo + hi) / 2; if (bez(m, 0.65, 0.2) < t) lo = m; else hi = m; }
  return bez((lo + hi) / 2, 0, 1);
};
const pathOf = (n: Node) => n.url ?? `${n.id.slice(0, n.id.indexOf("/"))}s/${n.id.slice(n.id.indexOf("/") + 1)}/`;
const TYPE: Record<string, string> = { topic: "topic hub", feature: "roadmap feature", object: "AL object", localization: "localization", source: "source", video: "video", post: "community post" };
const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!);
const hit = (a: Rect, b: Rect) => a.x < b.x + b.w && b.x < a.x + a.w && a.y < b.y + b.h && b.y < a.y + a.h;

export async function mountGalaxy(root: HTMLElement): Promise<GalaxyApi | null> {
  const base = root.dataset.base ?? "/";
  const canvas = root.querySelector("canvas")!;
  const labels = root.querySelector<HTMLElement>(".g-labels")!;
  const panel = root.querySelector<HTMLElement>(".g-panel")!;
  const panelBody = root.querySelector<HTMLElement>(".g-panel-body")!;
  const crumbs = root.querySelector<HTMLElement>(".g-crumbs")!;
  const levelEl = root.querySelector<HTMLElement>(".g-level")!;
  const prevBtn = root.querySelector<HTMLButtonElement>("[data-g-prev]")!;
  const nextBtn = root.querySelector<HTMLButtonElement>("[data-g-next]")!;
  const listBtn = root.querySelector<HTMLButtonElement>("[data-g-list]")!;
  const fullBtn = root.querySelector<HTMLButtonElement>("[data-g-full]")!;
  const lensSel = root.querySelector<HTMLSelectElement>("[data-g-lens]")!;
  const fade = root.querySelector<HTMLElement>(".g-fade")!;

  let g: Summary;
  try { g = await (await fetch(`${base}graph/summary.json`)).json(); } catch { root.classList.add("g-empty"); return null; }
  if (!g.nodes?.length) { root.classList.add("g-empty"); return null; }
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
  for (const e of g.edges) {
    if (!byId.has(e.s) || !byId.has(e.t)) continue;
    adj.set(e.s, [...(adj.get(e.s) ?? []), e.t]);
    adj.set(e.t, [...(adj.get(e.t) ?? []), e.s]);
  }
  const maxW = Math.max(...g.nodes.map((n) => n.weight), 1);
  const maxEv = Math.max(...g.nodes.map((n) => n.ev ?? 0), 1);
  const radius = (n: Node) => Math.max(2, Math.sqrt(n.weight) * 1.1);
  /** Brightness: evidence when the graph carries it, else connections. */
  const bright = (n: Node) => (n.ev !== undefined ? 0.35 + 0.65 * Math.sqrt(n.ev / maxEv) : 0.5 + 0.5 * n.weight / maxW);
  const today = new Date();
  const weekAgo = new Date(today.getTime() - 7 * 864e5).toISOString().slice(0, 10), now = today.toISOString().slice(0, 10);
  const lit = new Set(g.nodes.filter((n) => n.lit_at && n.lit_at.length === 10 && n.lit_at >= weekAgo && n.lit_at <= now).map((n) => n.id));
  // caption order inside each system never changes between frames (D44)
  const rank = ranksByGroup(g.nodes);

  // world bounds, field stars (seeded noise, not data: HANDOFF 7)
  const xs = g.systems.map((s) => s.x), ys = g.systems.map((s) => s.y);
  const world = { x0: Math.min(...xs) - 220, x1: Math.max(...xs) + 220, y0: Math.min(...ys) - 200, y1: Math.max(...ys) + 280 };
  let seed = 42;
  const rnd = () => ((seed = (seed * 1664525 + 1013904223) >>> 0) / 2 ** 32);
  const field = Array.from({ length: 900 }, () => ({ x: world.x0 + rnd() * (world.x1 - world.x0), y: world.y0 + rnd() * (world.y1 - world.y0), r: 0.4 + rnd() * 0.9, a: 0.15 + rnd() * 0.45 }));

  // lenses: one at a time, built from the data
  const lenses: Lens[] = [
    ...["topic", "feature", "object", "localization", "source"].map((t) => ({ id: `type:${t}`, label: `${TYPE[t]}s`, group: "Type", match: (n: Node) => n.type === t })),
    { id: "tier:community", label: "mostly community evidence", group: "Tier", match: (n: Node) => (n.cs ?? 0) >= 0.5 || n.tier === "community" },
    { id: "tier:official", label: "official only", group: "Tier", match: (n: Node) => n.tier === "official" && !(n.cs ?? 0) },
    ...[...new Set(g.nodes.flatMap((n) => n.cv ?? []))].sort().map((v) => ({ id: `version:${v}`, label: `objects changed in BC${v}`, group: "Version", match: (n: Node) => !!n.cv?.includes(v) })),
    ...g.nodes.filter((n) => n.type === "localization").sort((a, b) => a.label.localeCompare(b.label)).map((l) => ({
      id: `loc:${l.id}`, label: l.label, group: "Localization", lines: true,
      match: (n: Node) => n === l || (adj.get(l.id) ?? []).includes(n.id),
    })),
    ...g.nodes.filter((n) => n.type === "source").sort((a, b) => a.label.localeCompare(b.label)).map((s) => {
      const touch = new Set([...(g.touches?.[s.id] ?? []), ...(adj.get(s.id) ?? [])]);
      return { id: `src:${s.id}`, label: s.label, group: "Source", lines: true, reach: g.reach?.[s.id], match: (n: Node) => n === s || touch.has(n.id) };
    }),
  ];
  const lensById = new Map(lenses.map((l) => [l.id, l]));
  for (const grp of [...new Set(lenses.map((l) => l.group))]) {
    const og = document.createElement("optgroup"); og.label = grp;
    for (const l of lenses.filter((x) => x.group === grp)) { const o = document.createElement("option"); o.value = l.id; o.textContent = l.label; og.append(o); }
    lensSel.append(og);
  }

  const reduce = matchMedia("(prefers-reduced-motion: reduce)");
  let colors: Record<string, string> = {};
  const readColors = () => {
    const cs = getComputedStyle(document.documentElement);
    const v = (k: string) => cs.getPropertyValue(`--${k}`).trim();
    colors = { bg: v("g-bg"), core: v("g-core"), field: v("g-field"), edge: v("g-edge"), edgeActive: v("g-edge-active"), starActive: v("g-star-active"), accent: v("accent-dot"), text: v("text"), plate: v("g-bg"), community: v("tier-community-border"), video: v("ev-video-text"), blog: v("ev-blog-text"), learn: v("ev-learn-text") };
    for (const s of g.systems) colors[s.id] = v(`sys-${s.id}`) || v("muted");
  };
  readColors();

  // state
  let W = 0, H = 0, dpr = 1;
  const cam = { s: 1, tx: 0, ty: 0, vx: 0, vy: 0 };
  let level: Level = 1, focusSys: Sys | null = null, focusStar: Node | null = null, hover: Node | null = null, mark: Node | null = null;
  let lens: Lens | null = null, lensSet = new Set<string>(), lensLines: [Node, Node][] = [];
  let panelOpen = false, userPanel: boolean | null = null; // the reader's own choice wins once made
  let ego: Ego | null = null;
  const narrow = () => W <= 720;
  const fitScale = () => Math.min(W / (world.x1 - world.x0), H / (world.y1 - world.y0));
  const sysScale = (s: Sys) => Math.min(W, H) * 0.36 / Math.max(s.r, 40);
  const viewCentre = () => panelOpen ? (narrow() ? { vx: W / 2, vy: H * 0.225 } : { vx: (W - 380) / 2, vy: H / 2 }) : { vx: W / 2, vy: H / 2 };
  const toScreen = (x: number, y: number) => ({ x: cam.vx + (x - cam.tx) * cam.s, y: cam.vy + (y - cam.ty) * cam.s });
  const toWorld = (x: number, y: number) => ({ x: cam.tx + (x - cam.vx) / cam.s, y: cam.ty + (y - cam.vy) / cam.s });

  // camera
  let anim: { from: typeof cam; to: typeof cam; t0: number; done?: () => void } | null = null;
  const target = (): typeof cam => {
    const { vx, vy } = viewCentre();
    if (level === 1) return { s: fitScale() * (panelOpen && !narrow() ? (W - 380) / W : 1), tx: (world.x0 + world.x1) / 2, ty: (world.y0 + world.y1) / 2, vx, vy };
    const s = sysScale(focusSys!);
    if (level === 2) return { s, tx: focusSys!.x, ty: focusSys!.y, vx, vy };
    return { s: s * 1.8, tx: focusStar!.x, ty: focusStar!.y, vx, vy };
  };
  let raf = 0;
  let labelsFading = false;
  const animating = () => !!anim || labelsFading || (!reduce.matches && (lit.size > 0 || (level === 3 && ego?.id === focusStar?.id)));
  const loop = () => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame((t) => {
      if (anim) {
        const k = Math.min(1, (t - anim.t0) / FLY_MS), e = ease(k);
        for (const key of ["s", "tx", "ty", "vx", "vy"] as const) cam[key] = anim.from[key] + (anim.to[key] - anim.from[key]) * e;
        if (k >= 1) { const d = anim.done; anim = null; d?.(); }
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
  const fly = (instant = false) => flyTo(target(), instant);

  const resize = () => {
    const r = root.getBoundingClientRect();
    if (!r.width || !r.height) return;
    W = r.width; H = r.height; dpr = window.devicePixelRatio || 1;
    canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
    fly(true);
  };

  // drawing
  const ctx = canvas.getContext("2d")!;
  /** The system the reader zoomed into by hand at galaxy level (D44): edges and captions behave as at system level. */
  let eff: Sys | null = null;
  const visibleRect = () => ({ x0: 0, y0: 0, x1: W - (panelOpen && !narrow() ? 380 : 0), y1: H - (panelOpen && narrow() ? H * 0.55 : 0) });
  const scopeSys = () => focusSys ?? eff;
  const inScope = (n: Node) => (level === 1 && !eff) || n.group === scopeSys()?.id || (level === 3 && !!focusStar && (n === focusStar || !!adj.get(focusStar.id)?.includes(n.id)));
  const alpha = (n: Node) => {
    if (lens) return lensSet.has(n.id) ? 1 : 0.1;
    if (level === 1) return bright(n);
    if (n.group !== focusSys?.id) return level === 3 && focusStar && adj.get(focusStar.id)?.includes(n.id) ? 0.7 : 0.16;
    if (level === 3 && focusStar && n !== focusStar && !adj.get(focusStar.id)?.includes(n.id)) return 0.3;
    return bright(n);
  };
  // zoomed out: the handoff's dots, max(1.6, sqrt(weight) * 0.42) design px (5.5 world units per design unit);
  // zoomed in: proportional to connections
  const diameter = (n: Node) => Math.min(Math.max(1.6, Math.sqrt(n.weight) * 0.42 * cam.s * 5.5, radius(n) * 2 * cam.s / 3), 26);

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
    for (const s of g.systems) {
      const p = toScreen(s.x, s.y), r = Math.max(1, (s.r + 30) * cam.s);
      const halo = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r);
      halo.addColorStop(0, colors[s.id]); halo.addColorStop(1, "transparent");
      // a source lens lights the systems it writes about, in proportion
      const reach = lens?.reach ? (lens.reach[s.id] ?? 0) / Math.max(...Object.values(lens.reach), 1) : 0;
      ctx.globalAlpha = lens ? 0.05 + 0.4 * reach : level === 1 ? 0.2 : s === focusSys ? 0.16 : 0.06;
      ctx.fillStyle = halo; ctx.beginPath(); ctx.arc(p.x, p.y, r, 0, Math.PI * 2); ctx.fill();
    }
    // edges: inside the focused system and the star's own; a lens draws its constellation instead
    ctx.lineWidth = 1;
    if (lens?.lines) {
      ctx.strokeStyle = colors.accent; ctx.globalAlpha = 0.55; ctx.setLineDash([4, 4]);
      for (const [a, b] of lensLines) { const p = toScreen(a.x, a.y), q = toScreen(b.x, b.y); ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke(); }
      ctx.setLineDash([]);
    } else if (eff) {
      // zoomed into a system by hand: its edges come up as the camera reaches the system's own zoom
      ctx.strokeStyle = colors.edge; ctx.globalAlpha = 0.3 * smoothstep(0.8, 1, cam.s / sysScale(eff));
      for (const e of g.edges) {
        const a = byId.get(e.s), b = byId.get(e.t);
        if (!a || !b || a.group !== eff.id || b.group !== eff.id) continue;
        const p = toScreen(a.x, a.y), q = toScreen(b.x, b.y);
        ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
      }
    } else if (level >= 2) {
      for (const e of g.edges) {
        const a = byId.get(e.s), b = byId.get(e.t);
        if (!a || !b) continue;
        const own = level === 3 && focusStar && (a === focusStar || b === focusStar);
        if (!own && (a.group !== focusSys!.id || b.group !== focusSys!.id)) continue;
        const p = toScreen(a.x, a.y), q = toScreen(b.x, b.y);
        ctx.globalAlpha = own ? 0.9 : level === 3 ? 0.1 : 0.3;
        ctx.strokeStyle = own ? colors.edgeActive : colors.edge;
        ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
      }
    }
    // stars
    const shown: { n: Node; p: { x: number; y: number }; d: number }[] = [];
    for (const n of g.nodes) {
      const p = toScreen(n.x, n.y), d = diameter(n);
      if (p.x < -d || p.y < -d || p.x > W + d || p.y > H + d) continue;
      const active = n === focusStar || n === hover || n === mark;
      const a = active ? 1 : alpha(n);
      ctx.globalAlpha = a;
      ctx.fillStyle = active ? colors.starActive : colors[n.group] ?? colors.field;
      ctx.shadowColor = active ? colors.starActive : colors[n.group] ?? "transparent";
      ctx.shadowBlur = a > 0.2 ? d * (active ? 3 : 1.6) : 0;
      ctx.beginPath();
      if (n.type === "object") ctx.roundRect(p.x - d / 2, p.y - d / 2, d, d, d * 0.12); else ctx.arc(p.x, p.y, d / 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
      if ((n.cs ?? 0) >= 0.5 && a > 0.2 && d > 3) { ctx.strokeStyle = colors.community; ctx.lineWidth = 1.2; ctx.beginPath(); ctx.arc(p.x, p.y, d / 2 + 2.5, 0, Math.PI * 2); ctx.stroke(); }
      if (lens && lensSet.has(n.id)) { ctx.strokeStyle = colors.accent; ctx.lineWidth = 1.2; ctx.globalAlpha = 0.9; ctx.beginPath(); ctx.arc(p.x, p.y, d / 2 + 4, 0, Math.PI * 2); ctx.stroke(); }
      if (n === mark) { ctx.strokeStyle = colors.accent; ctx.lineWidth = 2; ctx.globalAlpha = 1; ctx.beginPath(); ctx.arc(p.x, p.y, d / 2 + 8, 0, Math.PI * 2); ctx.stroke(); }
      if (a > 0.25 || active) shown.push({ n, p, d });
    }
    // orbiting evidence around the focused star: its videos and posts (ego graph); Learn pages as a faint ring
    if (level === 3 && focusStar && ego?.id === focusStar.id) {
      const p = toScreen(focusStar.x, focusStar.y), r0 = diameter(focusStar) / 2 + 18;
      const bodies = ego.nodes.filter((n) => n.type === "video" || n.type === "post");
      const spin = reduce.matches ? 0 : (t / 40000) * Math.PI * 2;
      bodies.forEach((b, i) => {
        const ring = r0 + (i % 3) * 10, a = spin * (1 + (i % 3) * 0.3) + (i / Math.max(1, bodies.length)) * Math.PI * 2;
        ctx.globalAlpha = 0.9; ctx.fillStyle = b.type === "video" ? colors.video : colors.blog;
        ctx.beginPath(); ctx.arc(p.x + Math.cos(a) * ring, p.y + Math.sin(a) * ring * 0.85, 2.6, 0, Math.PI * 2); ctx.fill();
      });
      if ((focusStar.ev ?? 0) > bodies.length) { ctx.globalAlpha = 0.3; ctx.strokeStyle = colors.learn; ctx.setLineDash([2, 3]); ctx.beginPath(); ctx.arc(p.x, p.y, r0 + 34, 0, Math.PI * 2); ctx.stroke(); ctx.setLineDash([]); }
    }
    // newly lit: pulse ring (scale .7 to 1.25, opacity .9 to 0, 2400 ms); static under reduced motion
    if (lit.size) {
      const k = reduce.matches ? 0.5 : (t % 2400) / 2400;
      ctx.strokeStyle = colors.accent; ctx.lineWidth = 1.5;
      for (const id of lit) {
        const n = byId.get(id)!, p = toScreen(n.x, n.y), r = (8 + diameter(n) / 2) * (0.7 + 0.55 * k);
        ctx.globalAlpha = reduce.matches ? 0.8 : 0.9 * (1 - k);
        ctx.beginPath(); ctx.arc(p.x, p.y, r, 0, Math.PI * 2); ctx.stroke();
      }
    }
    ctx.globalAlpha = 1;
    drawStarLabels(shown, placeSystemLabels(), t);
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
  /** Screen areas the toolbar, breadcrumb and level indicator occupy: no label goes under them. */
  const chromeRects = (): Rect[] => [crumbs, root.querySelector<HTMLElement>(".g-tools")!, levelEl, prevBtn.parentElement!, ...(panelOpen ? [panel] : [])].map((el) => {
    const r = el.getBoundingClientRect(), o = root.getBoundingClientRect();
    return { x: r.left - o.left - 4, y: r.top - o.top - 4, w: r.width + 8, h: r.height + 8 };
  }).filter((r) => r.w > 8);
  function placeSystemLabels(): Rect[] {
    const taken: Rect[] = chromeRects();
    for (const s of sysOrder) {
      const b = sysButtons.get(s.id)!;
      if (!(level === 1 || (level === 2 && !narrow()))) { b.hidden = true; continue; }
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
    const lensCap = lens ? 30 : Infinity, max = narrow() ? 30 : 60;
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
  function setLens(id: string) {
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
    lensSel.value = lens?.id ?? "";
    if (lens) { level = 1; focusSys = null; focusStar = null; }
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
  const row = (n: Node) => `<li><button type="button" data-star="${esc(n.id)}"><span class="g-dot" style="--dot: var(--sys-${esc(n.group)})"></span><span>${esc(n.label)}</span><small>${TYPE[n.type] ?? n.type}</small></button></li>`;
  function renderPanel() {
    root.classList.toggle("g-panel-open", panelOpen);
    listBtn.setAttribute("aria-expanded", String(panelOpen));
    listBtn.textContent = panelOpen ? "Hide list" : "Show list";
    panel.hidden = !panelOpen;
    let html = "";
    if (lens?.search) {
      const hits = g.nodes.filter((n) => lensSet.has(n.id)).sort((a, b) => b.weight - a.weight);
      const reach = Object.entries(lens.reach ?? {}).sort((a, b) => b[1] - a[1]);
      const without = (lens.total ?? hits.length) - hits.length;
      html = `<p class="g-kicker">search</p><h2 tabindex="-1">${esc(lens.label)}</h2><p class="g-meta">${hits.length} stars light up, ${without} pages without a star.</p>
        <p><a class="btn" href="${base}search/?q=${encodeURIComponent(lens.search)}">All results</a> <button type="button" class="btn" data-clear-lens>Clear</button></p>
        ${hits.length ? `<h3>Stars</h3><ul class="g-list">${hits.slice(0, 80).map(row).join("")}</ul>` : ""}
        ${reach.length ? `<h3>Systems with matching pages</h3><ul class="g-list">${reach.map(([id, n]) => `<li><button type="button" data-sys="${esc(id)}"><span class="g-dot" style="--dot: var(--sys-${esc(id)})"></span><span>${esc(sysById.get(id)?.label ?? id)}</span><small>${n} pages</small></button></li>`).join("")}</ul>` : ""}
        ${lens.pages?.length ? `<h3>Pages without a star</h3><ul class="g-list">${lens.pages.slice(0, 30).map((r) => `<li><a href="${esc(`${base}${r.path}/`)}"><span class="g-dot" style="--dot: var(--sys-${esc(r.system ?? "platform")}, var(--muted))"></span><span>${esc(r.title)}</span><small>${esc(r.type)}</small></a></li>`).join("")}</ul>` : ""}`;
    } else if (lens) {
      const hits = g.nodes.filter((n) => lensSet.has(n.id)).sort((a, b) => b.weight - a.weight);
      const reach = Object.entries(lens.reach ?? {}).sort((a, b) => b[1] - a[1]);
      html = `<p class="g-kicker">lens · ${esc(lens.group.toLowerCase())}</p><h2 tabindex="-1">${esc(lens.label)}</h2><p class="g-meta">${hits.length} stars light up${lens.lines && hits.length > 1 ? ", joined into a constellation" : ""}.</p><p><button type="button" class="btn" data-clear-lens>Clear the lens</button></p>
        ${reach.length ? `<h3>Systems it writes about</h3><ul class="g-list">${reach.map(([id, n]) => `<li><button type="button" data-sys="${esc(id)}"><span class="g-dot" style="--dot: var(--sys-${esc(id)})"></span><span>${esc(sysById.get(id)?.label ?? id)}</span><small>${n} items</small></button></li>`).join("")}</ul><h3>Stars</h3>` : ""}
        <ul class="g-list">${hits.slice(0, 150).map(row).join("")}</ul>`;
    } else if (level === 1) {
      html = `<p class="g-kicker">galaxy</p><h2 tabindex="-1">${g.systems.length} systems</h2><p class="g-meta">${g.nodes.length} stars. Pick a system, or a lens to see where something touches the galaxy.</p><ul class="g-list">${g.systems.map((s) => `<li><button type="button" data-sys="${esc(s.id)}"><span class="g-dot" style="--dot: var(--sys-${esc(s.id)})"></span><span>${esc(s.label)}</span><small>${g.nodes.filter((n) => n.group === s.id).length}</small></button></li>`).join("")}</ul>`;
    } else if (level === 2 && focusSys) {
      const stars = g.nodes.filter((n) => n.group === focusSys!.id).sort((a, b) => b.weight - a.weight);
      html = `<p class="g-kicker">system</p><h2 tabindex="-1">${esc(focusSys.label)}</h2><p class="g-meta">${stars.length} stars, brightest first</p><ul class="g-list">${stars.slice(0, 150).map(row).join("")}</ul>${stars.length > 150 ? `<p class="g-meta">and ${stars.length - 150} more</p>` : ""}`;
    } else if (level === 3 && focusStar) {
      const n = focusStar, near = (adj.get(n.id) ?? []).map((id) => byId.get(id)!).filter(Boolean).sort((a, b) => b.weight - a.weight);
      const bodies = ego?.id === n.id ? ego.nodes.filter((x) => x.type === "video" || x.type === "post") : [];
      const href = n.type === "source" && n.url?.startsWith("http") ? n.url : `${base}${pathOf(n)}`;
      html = `<p class="g-kicker" style="color: var(--sys-${esc(n.group)})">${TYPE[n.type] ?? n.type} · ${esc(sysById.get(n.group)?.label ?? n.group)}</p><h2 tabindex="-1">${esc(n.label)}</h2>
        <p class="g-meta">tier ${esc(n.tier)}${n.ev ? ` · ${n.ev} evidence items${n.cs ? `, ${Math.round(n.cs * 100)}% community` : ""}` : ""} · ${near.length} connected</p>
        <p><a class="btn primary" href="${esc(href)}" data-open>Open page</a></p>
        ${bodies.length ? `<h3>Orbiting evidence</h3><ul class="g-list">${bodies.slice(0, 30).map((b) => `<li><a href="${esc(base + pathOf(b))}"><span class="g-dot" style="--dot: ${b.type === "video" ? "var(--ev-video-text)" : "var(--ev-blog-text)"}"></span><span>${esc(b.label)}</span><small>${TYPE[b.type]}</small></a></li>`).join("")}</ul>` : ""}
        ${near.length ? `<h3>Connected stars</h3><ul class="g-list">${near.slice(0, 60).map(row).join("")}</ul>` : ""}`;
    }
    panelBody.innerHTML = html;
    for (const b of panelBody.querySelectorAll<HTMLButtonElement>("[data-star]")) {
      const n = byId.get(b.dataset.star!)!;
      b.addEventListener("click", () => goStar(n));
      const on = () => { mark = n; redraw(); }, off = () => { if (mark === n) { mark = null; redraw(); } };
      b.addEventListener("mouseenter", on); b.addEventListener("focus", on);
      b.addEventListener("mouseleave", off); b.addEventListener("blur", off);
    }
    for (const b of panelBody.querySelectorAll<HTMLButtonElement>("[data-sys]")) {
      const s = sysById.get(b.dataset.sys!)!;
      b.addEventListener("click", () => goSystem(s));
    }
    panelBody.querySelector("[data-clear-lens]")?.addEventListener("click", () => setLens(""));
    panelBody.querySelector<HTMLAnchorElement>("[data-open]")?.addEventListener("click", (e) => { if (focusStar) { e.preventDefault(); openPage(focusStar, (e.currentTarget as HTMLAnchorElement).href); } });
  }
  function renderChrome() {
    const parts = [level === 1 && !lens ? `<span aria-current="page">Galaxy</span>` : `<button type="button" data-crumb="1">Galaxy</button>`];
    if (lens) parts.push(`<span aria-current="page">${esc(lens.label)}</span>`);
    if (level >= 2 && focusSys) parts.push(level === 2 ? `<span aria-current="page">${esc(focusSys.label)}</span>` : `<button type="button" data-crumb="2">${esc(focusSys.label)}</button>`);
    if (level === 3 && focusStar) parts.push(`<span aria-current="page">${esc(focusStar.label)}</span>`);
    crumbs.innerHTML = parts.join('<span aria-hidden="true">/</span>');
    crumbs.querySelector('[data-crumb="1"]')?.addEventListener("click", () => { if (lens) setLens(""); else goGalaxy(); });
    crumbs.querySelector('[data-crumb="2"]')?.addEventListener("click", () => goSystem(focusSys!));
    levelEl.textContent = ["", "galaxy", "system", "star"][level];
    prevBtn.hidden = nextBtn.hidden = level !== 2;
    root.dataset.level = String(level);
  }
  const setHash = () => {
    const h = lens?.search ? `#q=${encodeURIComponent(lens.search)}` : lens ? `#lens=${encodeURIComponent(lens.id)}` : level === 1 ? "" : level === 2 ? `#system=${focusSys!.id}` : `#star=${encodeURIComponent(focusStar!.id)}`;
    history.replaceState(null, "", h || location.pathname + location.search);
  };
  function update(instant = false) {
    panelOpen = userPanel ?? ((level >= 2 || !!lens) && !narrow());
    renderPanel(); renderChrome(); setHash(); fly(instant);
  }
  function goGalaxy() { level = 1; focusSys = null; focusStar = null; update(); }
  function goSystem(s: Sys) { if (!lens?.search) clearLens(); level = 2; focusSys = s; focusStar = null; update(); }
  async function goStar(n: Node) {
    level = 3; focusSys = sysById.get(n.group) ?? focusSys; focusStar = n; mark = null;
    if (lens && !lensSet.has(n.id)) clearLens();
    update();
    panelBody.querySelector<HTMLElement>("h2")?.focus({ preventScroll: true });
    if (ego?.id !== n.id) {
      try { const e: Ego = await (await fetch(`${base}graph/ego/${n.id}.json`)).json(); if (focusStar === n) { ego = e; renderPanel(); loop(); } } catch { /* no ego graph for this star */ }
    }
  }
  /** Level 4: fly into the star, fade, open its page. */
  function openPage(n: Node, href: string) {
    if (reduce.matches) { location.href = href; return; }
    fade.hidden = false;
    requestAnimationFrame(() => fade.classList.add("on"));
    flyTo({ ...cam, s: cam.s * 6, tx: n.x, ty: n.y }, false, () => { location.href = href; });
  }
  const step = (d: number) => { const i = g.systems.indexOf(focusSys!); goSystem(g.systems[(i + d + g.systems.length) % g.systems.length]); };
  prevBtn.addEventListener("click", () => step(-1));
  nextBtn.addEventListener("click", () => step(1));
  listBtn.addEventListener("click", () => { userPanel = !panelOpen; update(); });
  lensSel.addEventListener("change", () => setLens(lensSel.value));
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
      if (alpha(n) < 0.2 && n !== focusStar) continue;
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
      if (drag.moved) { anim = null; cam.tx = drag.tx - dx / cam.s; cam.ty = drag.ty - dy / cam.s; canvas.style.cursor = "grabbing"; redraw(); }
      return;
    }
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
    const n = nodeAt(p.x, p.y);
    if (n) { goStar(n); return; }
    if (level === 1 && !lens) {
      let best: Sys | null = null, bd = Infinity;
      for (const s of g.systems) { const q = toScreen(s.x, s.y), d = Math.hypot(q.x - p.x, q.y - p.y); if (d < (s.r + 40) * cam.s && d < bd) { bd = d; best = s; } }
      if (best) goSystem(best);
      return;
    }
    if (level === 3) goSystem(focusSys!); else if (level === 2) goGalaxy();
  });
  canvas.addEventListener("wheel", (e) => { e.preventDefault(); const p = pos(e); zoomBy(Math.exp(-e.deltaY * 0.0015), p.x, p.y); }, { passive: false });
  root.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && (level > 1 || lens)) { e.preventDefault(); if (lens) setLens(""); else if (level === 3) goSystem(focusSys!); else goGalaxy(); return; }
    if ((e.target as HTMLElement).closest("select, input")) return;
    if (level === 2 && (e.key === "ArrowRight" || e.key === "ArrowLeft") && !(e.target as HTMLElement).closest(".g-panel")) { e.preventDefault(); step(e.key === "ArrowRight" ? 1 : -1); }
    if (e.key === "+" || e.key === "=") zoomBy(1.5);
    if (e.key === "-") zoomBy(1 / 1.5);
    if (e.key === "f" || e.key === "F") fullscreen();
  });
  new ResizeObserver(() => resize()).observe(root);
  addEventListener("bcobs-theme", () => { readColors(); redraw(); });
  matchMedia("(prefers-color-scheme: light)").addEventListener("change", () => { readColors(); redraw(); });

  // deep links: #system=<id>, #star=<id>, #lens=<id>, #q=<query>
  const fromHash = (): boolean => {
    const m = /^#(system|star|lens|q)=(.+)$/.exec(location.hash);
    if (!m) return false;
    const id = decodeURIComponent(m[2]);
    if (m[1] === "q") { if (hashQueryCbs.length) for (const cb of hashQueryCbs) cb(id); else pendingQuery = id; return true; }
    if (m[1] === "system" && sysById.has(id)) { goSystem(sysById.get(id)!); return true; }
    if (m[1] === "star" && byId.has(id)) { goStar(byId.get(id)!); return true; }
    if (m[1] === "lens" && lensById.has(id)) { setLens(id); return true; }
    return false;
  };
  addEventListener("hashchange", fromHash);
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
