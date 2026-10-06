/**
 * The galaxy on every page (PLAN 4.7, HANDOFF 3 side column): a mini locator (the page's system, its star marked)
 * and the page's connections from its ego graph (graph/ego/<id>.json, one hop). Drawn in the browser from files the
 * site already serves, so 17k pages carry no inline SVG.
 */
interface Node { id: string; type: string; label: string; group: string; weight: number; url?: string; x: number; y: number }
interface Summary { systems: { id: string; label: string; x: number; y: number; r: number }[]; nodes: Node[] }

const pathOf = (n: Node) => n.url ?? `${n.id.slice(0, n.id.indexOf("/"))}s/${n.id.slice(n.id.indexOf("/") + 1)}/`;
const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!);
let summary: Promise<Summary> | null = null;

export async function mountLocator(root: HTMLElement): Promise<void> {
  const base = root.dataset.base ?? "/", id = root.dataset.id ?? "", sysId = root.dataset.system ?? "";
  const canvas = root.querySelector("canvas")!, link = root.querySelector<HTMLAnchorElement>("a.loc-open")!;
  summary ??= fetch(`${base}graph/summary.json`).then((r) => r.json());
  let g: Summary;
  try { g = await summary; } catch { root.hidden = true; return; }
  const me = g.nodes.find((n) => n.id === id);
  const group = me?.group ?? sysId;
  const stars = g.nodes.filter((n) => n.group === group);
  const sys = g.systems.find((s) => s.id === group);
  if (!stars.length || !sys) { root.hidden = true; return; }
  link.href = `${base}#${me ? `star=${encodeURIComponent(id)}` : `system=${group}`}`;
  const css = getComputedStyle(document.documentElement), v = (k: string) => css.getPropertyValue(`--${k}`).trim();
  const W = canvas.clientWidth || 280, H = canvas.clientHeight || 180, dpr = window.devicePixelRatio || 1;
  canvas.width = W * dpr; canvas.height = H * dpr;
  const ctx = canvas.getContext("2d")!;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  const xs = stars.map((n) => n.x), ys = stars.map((n) => n.y);
  const x0 = Math.min(...xs), x1 = Math.max(...xs), y0 = Math.min(...ys), y1 = Math.max(...ys);
  const s = Math.min((W - 24) / Math.max(1, x1 - x0), (H - 24) / Math.max(1, y1 - y0));
  const P = (n: Node) => ({ x: W / 2 + (n.x - (x0 + x1) / 2) * s, y: H / 2 + (n.y - (y0 + y1) / 2) * s });
  ctx.fillStyle = v("g-bg"); ctx.fillRect(0, 0, W, H);
  const colour = v(`sys-${group}`) || v("muted");
  for (const n of stars) {
    const p = P(n), d = Math.max(1.5, Math.min(6, Math.sqrt(n.weight) * 0.5));
    ctx.globalAlpha = n === me ? 1 : 0.45; ctx.fillStyle = colour;
    ctx.beginPath(); ctx.arc(p.x, p.y, d / 2, 0, Math.PI * 2); ctx.fill();
  }
  if (me) {
    const p = P(me);
    ctx.globalAlpha = 1; ctx.fillStyle = v("g-star-active"); ctx.beginPath(); ctx.arc(p.x, p.y, 3.5, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = v("accent-dot"); ctx.lineWidth = 1.5; ctx.beginPath(); ctx.arc(p.x, p.y, 8, 0, Math.PI * 2); ctx.stroke();
  }
  root.querySelector<HTMLElement>(".loc-caption")!.textContent = me ? `${sys.label}: this page is the marked star among ${stars.length}.` : `${sys.label}, ${stars.length} stars. This page is not one of the galaxy's stars.`;
}

export async function mountConnections(root: HTMLElement): Promise<void> {
  const base = root.dataset.base ?? "/", id = root.dataset.id ?? "";
  let ego: { nodes: Node[]; edges: { s: string; t: string; type: string }[] };
  try { const r = await fetch(`${base}graph/ego/${id}.json`); if (!r.ok) throw 0; ego = await r.json(); } catch { root.hidden = true; return; }
  const near = ego.nodes.filter((n) => n.id !== id).sort((a, b) => b.weight - a.weight);
  if (!near.length) { root.hidden = true; return; }
  const shown = near.slice(0, 14), W = 280, H = 240, cx = W / 2, cy = H / 2, R = 92;
  const type = new Map(ego.edges.map((e) => [e.s === id ? e.t : e.s, e.type]));
  const pts = shown.map((n, i) => { const a = -Math.PI / 2 + (i / shown.length) * Math.PI * 2; return { n, x: cx + Math.cos(a) * R, y: cy + Math.sin(a) * R * 0.8 }; });
  const svg = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Connections of this page">
    ${pts.map((p) => `<line x1="${cx}" y1="${cy}" x2="${p.x.toFixed(1)}" y2="${p.y.toFixed(1)}" class="c-edge"><title>${esc(type.get(p.n.id) ?? "")}</title></line>`).join("")}
    <circle cx="${cx}" cy="${cy}" r="6" class="c-me"/>
    ${pts.map((p) => `<a href="${esc(base + pathOf(p.n))}"><circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="${Math.max(3, Math.min(7, Math.sqrt(p.n.weight) * 0.6)).toFixed(1)}" style="fill: var(--sys-${esc(p.n.group)}, var(--muted))"><title>${esc(p.n.label)}</title></circle></a>`).join("")}
  </svg>`;
  root.querySelector(".con-graph")!.innerHTML = svg;
  root.querySelector(".con-list")!.innerHTML = near.slice(0, 8).map((n) => `<li><a href="${esc(base + pathOf(n))}"><span class="g-dot" style="--dot: var(--sys-${esc(n.group)}, var(--muted))"></span>${esc(n.label)}</a></li>`).join("")
    + (near.length > 8 ? `<li class="mono-meta">and ${near.length - 8} more</li>` : "");
  root.querySelector(".con-count")!.textContent = String(near.length);
}
