/**
 * The galaxy (design/HANDOFF.md section 5, D42): canvas for stars and edges, DOM for labels, buttons and the panel.
 * Three levels: galaxy (all systems) -> system (one system, others dimmed) -> star (a star and its connections, side
 * panel). Camera: translate(vx - tx*s, vy - ty*s) scale(s), flown with the handoff's easing; a cut when the reader
 * prefers reduced motion. Every star is reachable without a mouse through the panel's list.
 */
interface Sys { id: string; label: string; x: number; y: number; r: number }
interface Node { id: string; type: string; label: string; tier: string; group: string; weight: number; url?: string; lit_at: string | null; x: number; y: number }
interface Edge { s: string; t: string; type: string }
interface Summary { systems: Sys[]; nodes: Node[]; edges: Edge[] }
type Level = 1 | 2 | 3;

const FLY_MS = 1100;
/** cubic-bezier(.65,0,.2,1) (tokens motion.cameraFly): solve x(m) = t by bisection, return y(m). */
const ease = (t: number) => {
  const bez = (m: number, p1: number, p2: number) => 3 * m * (1 - m) ** 2 * p1 + 3 * m * m * (1 - m) * p2 + m ** 3;
  let lo = 0, hi = 1;
  for (let i = 0; i < 24; i++) { const m = (lo + hi) / 2; if (bez(m, 0.65, 0.2) < t) lo = m; else hi = m; }
  return bez((lo + hi) / 2, 0, 1);
};
const pathOf = (n: Node) => n.url ?? `${n.id.slice(0, n.id.indexOf("/"))}s/${n.id.slice(n.id.indexOf("/") + 1)}/`;
const TYPE: Record<string, string> = { topic: "topic hub", feature: "roadmap feature", object: "AL object", localization: "localization", source: "source" };

export async function mountGalaxy(root: HTMLElement): Promise<void> {
  const base = root.dataset.base ?? "/";
  const canvas = root.querySelector("canvas")!;
  const labels = root.querySelector<HTMLElement>(".g-labels")!;
  const panel = root.querySelector<HTMLElement>(".g-panel")!;
  const crumbs = root.querySelector<HTMLElement>(".g-crumbs")!;
  const levelEl = root.querySelector<HTMLElement>(".g-level")!;
  const prevBtn = root.querySelector<HTMLButtonElement>("[data-g-prev]")!;
  const nextBtn = root.querySelector<HTMLButtonElement>("[data-g-next]")!;
  const tip = root.querySelector<HTMLElement>(".g-tip")!;
  const compact = root.dataset.compact === "true";

  let g: Summary;
  try { g = await (await fetch(`${base}graph/summary.json`)).json(); } catch { root.classList.add("g-empty"); return; }
  if (!g.nodes?.length) { root.classList.add("g-empty"); return; }

  const byId = new Map(g.nodes.map((n) => [n.id, n]));
  const sysById = new Map(g.systems.map((s) => [s.id, s]));
  const adj = new Map<string, string[]>();
  for (const e of g.edges) {
    if (!byId.has(e.s) || !byId.has(e.t)) continue;
    adj.set(e.s, [...(adj.get(e.s) ?? []), e.t]);
    adj.set(e.t, [...(adj.get(e.t) ?? []), e.s]);
  }
  const maxW = Math.max(...g.nodes.map((n) => n.weight), 1);
  const radius = (n: Node) => Math.max(2, Math.sqrt(n.weight) * 1.1);
  const today = new Date();
  const weekAgo = new Date(today.getTime() - 7 * 864e5).toISOString().slice(0, 10), now = today.toISOString().slice(0, 10);
  const lit = new Set(g.nodes.filter((n) => n.lit_at && n.lit_at.length === 10 && n.lit_at >= weekAgo && n.lit_at <= now).map((n) => n.id));
  // field stars: seeded noise, not data (HANDOFF 7)
  const xs = g.systems.map((s) => s.x), ys = g.systems.map((s) => s.y);
  // margins: the clusters plus the labels under them
  const world = { x0: Math.min(...xs) - 220, x1: Math.max(...xs) + 220, y0: Math.min(...ys) - 200, y1: Math.max(...ys) + 280 };
  let seed = 42;
  const rnd = () => ((seed = (seed * 1664525 + 1013904223) >>> 0) / 2 ** 32);
  const field = Array.from({ length: 700 }, () => ({ x: world.x0 + rnd() * (world.x1 - world.x0), y: world.y0 + rnd() * (world.y1 - world.y0), r: 0.4 + rnd() * 0.9, a: 0.15 + rnd() * 0.45 }));

  const reduce = matchMedia("(prefers-reduced-motion: reduce)");
  let colors: Record<string, string> = {};
  const readColors = () => {
    const cs = getComputedStyle(document.documentElement);
    const v = (k: string) => cs.getPropertyValue(`--${k}`).trim();
    colors = { bg: v("g-bg"), core: v("g-core"), field: v("g-field"), edge: v("g-edge"), edgeActive: v("g-edge-active"), starActive: v("g-star-active"), accent: v("accent-dot"), text: v("text") };
    for (const s of g.systems) colors[s.id] = v(`sys-${s.id}`) || v("muted");
  };
  readColors();

  // camera
  let W = 0, H = 0, dpr = 1;
  const cam = { s: 1, tx: 0, ty: 0, vx: 0, vy: 0 };
  let level: Level = 1, focusSys: Sys | null = null, focusStar: Node | null = null, hover: Node | null = null;
  const fitScale = () => Math.min(W / (world.x1 - world.x0), H / (world.y1 - world.y0));
  const sysScale = (s: Sys) => Math.min(W, H) * (compact ? 0.42 : 0.36) / Math.max(s.r, 40);
  const panelOpen = () => level >= 2 && !compact && W > 720;
  // the panel sits right on wide screens and along the bottom (55%) on narrow ones
  const viewCentre = () => (level >= 2 && !compact && W <= 720 ? { vx: W / 2, vy: H * 0.225 } : { vx: panelOpen() ? (W - 380) / 2 : W / 2, vy: H / 2 });
  const toScreen = (x: number, y: number) => ({ x: cam.vx + (x - cam.tx) * cam.s, y: cam.vy + (y - cam.ty) * cam.s });

  let anim: { from: typeof cam; to: typeof cam; t0: number } | null = null;
  const target = (): typeof cam => {
    const { vx, vy } = viewCentre();
    if (level === 1) return { s: fitScale(), tx: (world.x0 + world.x1) / 2, ty: (world.y0 + world.y1) / 2, vx: W / 2, vy: H / 2 };
    const s = sysScale(focusSys!);
    if (level === 2) return { s, tx: focusSys!.x, ty: focusSys!.y, vx, vy };
    return { s: s * 1.8, tx: focusStar!.x, ty: focusStar!.y, vx, vy };
  };
  const fly = (instant = false) => {
    const to = target();
    if (instant || reduce.matches) { Object.assign(cam, to); anim = null; draw(); return; }
    anim = { from: { ...cam }, to, t0: performance.now() };
    loop();
  };

  let raf = 0;
  const loop = () => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame((t) => {
      if (anim) {
        const k = Math.min(1, (t - anim.t0) / FLY_MS), e = ease(k);
        for (const key of ["s", "tx", "ty", "vx", "vy"] as const) cam[key] = anim.from[key] + (anim.to[key] - anim.from[key]) * e;
        if (k >= 1) anim = null;
      }
      draw(t);
      if (anim || (lit.size && !reduce.matches)) loop();
    });
  };

  const resize = () => {
    const r = root.getBoundingClientRect();
    W = r.width; H = r.height; dpr = window.devicePixelRatio || 1;
    canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
    fly(true);
  };

  const ctx = canvas.getContext("2d")!;
  const alpha = (n: Node) => {
    if (level === 1) return 0.5 + 0.5 * n.weight / maxW;
    if (n.group !== focusSys?.id) return 0.18;
    if (level === 3 && focusStar && n !== focusStar && !adj.get(focusStar.id)?.includes(n.id)) return 0.35;
    return 0.55 + 0.45 * n.weight / maxW;
  };
  function draw(t = performance.now()) {
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.fillStyle = colors.bg; ctx.fillRect(0, 0, W, H);
    const c = toScreen((world.x0 + world.x1) / 2, (world.y0 + world.y1) / 2);
    const core = ctx.createRadialGradient(c.x, c.y, 0, c.x, c.y, 700 * cam.s);
    core.addColorStop(0, colors.core); core.addColorStop(1, "transparent");
    ctx.fillStyle = core; ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = colors.field;
    for (const f of field) { const p = toScreen(f.x, f.y); if (p.x < 0 || p.y < 0 || p.x > W || p.y > H) continue; ctx.globalAlpha = f.a; ctx.fillRect(p.x, p.y, f.r, f.r); }
    // system halos
    for (const s of g.systems) {
      const p = toScreen(s.x, s.y), r = (s.r + 30) * cam.s;
      const halo = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r);
      halo.addColorStop(0, colors[s.id]); halo.addColorStop(1, "transparent");
      ctx.globalAlpha = level === 1 ? 0.2 : s === focusSys ? 0.16 : 0.06;
      ctx.fillStyle = halo; ctx.beginPath(); ctx.arc(p.x, p.y, r, 0, Math.PI * 2); ctx.fill();
    }
    // edges: inside the focused system at level 2, the star's own at level 3
    if (level >= 2) {
      ctx.lineWidth = 1;
      for (const e of g.edges) {
        const a = byId.get(e.s), b = byId.get(e.t);
        if (!a || !b) continue;
        const own = level === 3 && focusStar && (a === focusStar || b === focusStar);
        if (!own && (a.group !== focusSys!.id || b.group !== focusSys!.id)) continue;
        const p = toScreen(a.x, a.y), q = toScreen(b.x, b.y);
        ctx.globalAlpha = own ? 0.9 : level === 3 ? 0.12 : 0.35;
        ctx.strokeStyle = own ? colors.edgeActive : colors.edge;
        ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
      }
    }
    // stars
    for (const n of g.nodes) {
      const p = toScreen(n.x, n.y);
      // level 1: the handoff's dots, diameter = max(1.6, sqrt(weight) * 0.42) design px (4.5 world units per design unit)
      const d = level === 1 ? Math.max(1.6, Math.sqrt(n.weight) * 0.42 * cam.s * 4.5) : Math.max(1.2, radius(n) * 2 * cam.s / 2.2);
      if (p.x < -d || p.y < -d || p.x > W + d || p.y > H + d) continue;
      const active = n === focusStar || n === hover;
      ctx.globalAlpha = active ? 1 : alpha(n);
      ctx.fillStyle = active ? colors.starActive : colors[n.group] ?? colors.field;
      ctx.shadowColor = active ? colors.starActive : colors[n.group] ?? "transparent";
      ctx.shadowBlur = d * (active ? 3 : 1.6);
      ctx.beginPath();
      if (n.type === "object") { const r = d * 0.12; ctx.roundRect(p.x - d / 2, p.y - d / 2, d, d, r); } else ctx.arc(p.x, p.y, d / 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
    }
    // newly lit: a pulse ring (scale .7 to 1.25, opacity .9 to 0, 2400 ms); static when motion is reduced
    if (lit.size) {
      const k = reduce.matches ? 0.5 : (t % 2400) / 2400;
      ctx.strokeStyle = colors.accent; ctx.lineWidth = 1.5;
      for (const id of lit) {
        const n = byId.get(id)!, p = toScreen(n.x, n.y), r = (8 + radius(n) * cam.s) * (0.7 + 0.55 * k);
        ctx.globalAlpha = reduce.matches ? 0.8 : 0.9 * (1 - k);
        ctx.beginPath(); ctx.arc(p.x, p.y, r, 0, Math.PI * 2); ctx.stroke();
      }
    }
    ctx.globalAlpha = 1;
    placeLabels();
  }

  // DOM labels: system names (buttons) at level 1 and 2, the five brightest stars of the focused system at level 2
  const sysButtons = new Map<string, HTMLButtonElement>();
  for (const s of g.systems) {
    const b = document.createElement("button");
    b.type = "button"; b.className = "g-sys"; b.textContent = s.label;
    b.style.setProperty("--dot", `var(--sys-${s.id})`);
    b.addEventListener("click", (e) => { e.stopPropagation(); goSystem(s); });
    labels.append(b); sysButtons.set(s.id, b);
  }
  const starLabels: HTMLElement[] = [];
  function placeLabels() {
    for (const s of g.systems) {
      const b = sysButtons.get(s.id)!, p = toScreen(s.x, s.y + s.r + 6);
      b.style.transform = `translate(${p.x}px, ${p.y}px) translate(-50%, 0)`;
      b.hidden = level === 3 || (level === 2 && (W <= 720 ? true : s !== focusSys && compact));
      b.classList.toggle("dim", level === 2 && s !== focusSys);
    }
    for (const el of starLabels) {
      const n = byId.get(el.dataset.id!)!, p = toScreen(n.x, n.y);
      el.style.transform = `translate(${p.x + 8}px, ${p.y}px) translate(0, -50%)`;
    }
    if (hover) { const p = toScreen(hover.x, hover.y); tip.hidden = false; tip.textContent = hover.label; tip.style.transform = `translate(${p.x + 12}px, ${p.y - 12}px) translate(0, -100%)`; } else tip.hidden = true;
  }
  function setStarLabels() {
    for (const el of starLabels.splice(0)) el.remove();
    if (level !== 2 || !focusSys) return;
    for (const n of g.nodes.filter((x) => x.group === focusSys!.id).sort((a, b) => b.weight - a.weight).slice(0, 5)) {
      const el = document.createElement("span");
      el.className = "g-star-label"; el.dataset.id = n.id; el.textContent = n.label;
      labels.append(el); starLabels.push(el);
    }
  }

  // panel: the focused system's stars (the list view) or the focused star and its connections
  const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!);
  const starButton = (n: Node) => `<li><button type="button" data-star="${esc(n.id)}"><span class="g-dot" style="--dot: var(--sys-${n.group})"></span><span>${esc(n.label)}</span><small>${TYPE[n.type] ?? n.type}</small></button></li>`;
  function renderPanel() {
    panel.hidden = level < 2;
    if (level === 2 && focusSys) {
      const stars = g.nodes.filter((n) => n.group === focusSys!.id).sort((a, b) => b.weight - a.weight);
      panel.innerHTML = `<p class="g-kicker">system</p><h2>${esc(focusSys.label)}</h2><p class="g-meta">${stars.length} stars, brightest first</p><ul class="g-list">${stars.slice(0, 60).map(starButton).join("")}</ul>${stars.length > 60 ? `<p class="g-meta">and ${stars.length - 60} more</p>` : ""}`;
    } else if (level === 3 && focusStar) {
      const n = focusStar, near = (adj.get(n.id) ?? []).map((id) => byId.get(id)!).filter(Boolean).sort((a, b) => b.weight - a.weight);
      const href = n.type === "source" && n.url?.startsWith("http") ? n.url : `${base}${pathOf(n)}`;
      panel.innerHTML = `<p class="g-kicker" style="color: var(--sys-${n.group})">${TYPE[n.type] ?? n.type} · ${esc(sysById.get(n.group)?.label ?? n.group)}</p><h2>${esc(n.label)}</h2><p class="g-meta">tier ${esc(n.tier)} · ${near.length} connected</p><p><a class="btn primary" href="${esc(href)}">Open page</a></p>${near.length ? `<h3>Connected stars</h3><ul class="g-list">${near.slice(0, 40).map(starButton).join("")}</ul>` : ""}`;
    }
    for (const b of panel.querySelectorAll<HTMLButtonElement>("[data-star]")) b.addEventListener("click", () => goStar(byId.get(b.dataset.star!)!));
  }
  function renderChrome() {
    const parts = [`<button type="button" data-crumb="1">Galaxy</button>`];
    if (level >= 2 && focusSys) parts.push(level === 2 ? `<span aria-current="page">${esc(focusSys.label)}</span>` : `<button type="button" data-crumb="2">${esc(focusSys.label)}</button>`);
    if (level === 3 && focusStar) parts.push(`<span aria-current="page">${esc(focusStar.label)}</span>`);
    crumbs.innerHTML = parts.join('<span aria-hidden="true">/</span>');
    crumbs.querySelector('[data-crumb="1"]')?.addEventListener("click", () => goGalaxy());
    crumbs.querySelector('[data-crumb="2"]')?.addEventListener("click", () => goSystem(focusSys!));
    levelEl.textContent = ["", "galaxy", "system", "star"][level];
    prevBtn.hidden = nextBtn.hidden = level !== 2;
    root.dataset.level = String(level);
  }
  const setHash = () => {
    if (compact) return;
    const h = level === 1 ? "" : level === 2 ? `#system=${focusSys!.id}` : `#star=${encodeURIComponent(focusStar!.id)}`;
    history.replaceState(null, "", h || location.pathname + location.search);
  };
  function update(instant = false) { setStarLabels(); renderPanel(); renderChrome(); setHash(); fly(instant); }
  function goGalaxy() { level = 1; focusSys = null; focusStar = null; update(); }
  function goSystem(s: Sys) {
    if (compact) { location.href = `${base}#system=${s.id}`; return; }
    level = 2; focusSys = s; focusStar = null; update();
  }
  function goStar(n: Node) {
    if (compact) { location.href = `${base}#star=${encodeURIComponent(n.id)}`; return; }
    level = 3; focusSys = sysById.get(n.group) ?? focusSys; focusStar = n; update();
    panel.querySelector<HTMLElement>("h2")?.focus({ preventScroll: true });
  }
  const step = (d: number) => { const i = g.systems.indexOf(focusSys!); goSystem(g.systems[(i + d + g.systems.length) % g.systems.length]); };
  prevBtn.addEventListener("click", () => step(-1));
  nextBtn.addEventListener("click", () => step(1));

  // pointer: hover label, click a star, background click zooms out one level; drag pans a little
  const nodeAt = (mx: number, my: number) => {
    let best: Node | null = null, bd = 13 ** 2;
    for (const n of g.nodes) {
      if (level >= 2 && n.group !== focusSys?.id && !(focusStar && adj.get(focusStar.id)?.includes(n.id))) continue;
      const p = toScreen(n.x, n.y), d = (p.x - mx) ** 2 + (p.y - my) ** 2;
      if (d < bd) { bd = d; best = n; }
    }
    return best;
  };
  const pos = (e: MouseEvent) => { const r = canvas.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; };
  canvas.addEventListener("mousemove", (e) => {
    if (level === 1) { hover = null; canvas.style.cursor = "pointer"; return; }
    const p = pos(e); const n = nodeAt(p.x, p.y);
    if (n !== hover) { hover = n; canvas.style.cursor = n ? "pointer" : "zoom-out"; if (!anim) draw(); }
  });
  canvas.addEventListener("mouseleave", () => { hover = null; if (!anim) draw(); });
  canvas.addEventListener("click", (e) => {
    const p = pos(e);
    if (level === 1) {
      // nearest system centre within its halo
      let best: Sys | null = null, bd = Infinity;
      for (const s of g.systems) { const q = toScreen(s.x, s.y), d = Math.hypot(q.x - p.x, q.y - p.y); if (d < (s.r + 40) * cam.s && d < bd) { bd = d; best = s; } }
      if (best) goSystem(best);
      return;
    }
    const n = nodeAt(p.x, p.y);
    if (n) goStar(n); else if (level === 3) goSystem(focusSys!); else goGalaxy();
  });
  root.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && level > 1) { e.preventDefault(); if (level === 3) goSystem(focusSys!); else goGalaxy(); }
    if (level === 2 && (e.key === "ArrowRight" || e.key === "ArrowLeft") && !(e.target as HTMLElement).closest(".g-panel")) { e.preventDefault(); step(e.key === "ArrowRight" ? 1 : -1); }
  });
  addEventListener("resize", resize);
  addEventListener("bcobs-theme", () => { readColors(); draw(); });
  matchMedia("(prefers-color-scheme: light)").addEventListener("change", () => { readColors(); draw(); });

  // deep links: #system=<id>, #star=<id>
  const fromHash = () => {
    const m = /^#(system|star)=(.+)$/.exec(location.hash);
    if (!m || compact) return false;
    const id = decodeURIComponent(m[2]);
    if (m[1] === "system" && sysById.has(id)) { level = 2; focusSys = sysById.get(id)!; focusStar = null; }
    else if (m[1] === "star" && byId.has(id)) { const n = byId.get(id)!; level = 3; focusSys = sysById.get(n.group) ?? null; focusStar = n; }
    else return false;
    return true;
  };
  addEventListener("hashchange", () => { if (fromHash()) update(); });
  const linked = fromHash();
  resize();
  update(true);
  root.classList.add("g-ready");
  if (linked) root.scrollIntoView({ block: "start" });
  if (lit.size && !reduce.matches) loop();
}
