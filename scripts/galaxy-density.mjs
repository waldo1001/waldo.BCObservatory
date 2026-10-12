#!/usr/bin/env node
/**
 * Galaxy density probe (D92, docs/specs/galaxy-controls.md 7.1). Not part of CI.
 *
 * Serves a built site under the base path, the same way scripts/ui-sweep.mjs does, and counts what the home galaxy's
 * canvas draws on top of what: captions over stars, plot labels under captions and ports, ports over each other, over
 * the bar and over captions, per system at system and star level. An init script wraps CanvasRenderingContext2D and
 * records the last frame (it starts at setTransform); ports, system labels and the bar come from the DOM. A second
 * part measures the galaxy bar (rows, height, bottom) at five widths, the panel's page y at 390 px and the first Tab
 * stop in the galaxy.
 *
 *   npm --prefix site run build && node scripts/galaxy-density.mjs            # site/dist
 *   SWEEP_PORT=4204 node scripts/galaxy-density.mjs ../other/site/dist         # another build, for a before/after
 *   DENSITY_JSON=/tmp/d.json SYSTEMS=finance,sales PARTS=states node scripts/galaxy-density.mjs   # PARTS: states, bar
 *
 * Classification: a star is a non-gradient fill of one full arc with r <= 14, or of one roundRect with w = h <= 26.5
 * and radius 0.12 w; a media body an 8 x 3 rect or a path starting with moveTo; a caption a fillText with baseline
 * `middle` and font `600 12px` (its plate: x - 5, y - 10, w + 10, 20); a plot label a fillText with baseline `top`
 * (x, y, w, 11). A star or caption counts when drawn at alpha 0.3 or more. Two boxes overlap when their interiors
 * intersect. Deterministic: no network beyond 127.0.0.1, no LLM. Playwright is found as ui-sweep.mjs finds it.
 */
import { spawn } from "node:child_process";
import { existsSync, mkdtempSync, readdirSync, readFileSync, rmSync, symlinkSync, writeFileSync } from "node:fs";
import { homedir, tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const repo = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = resolve(process.argv[2] ?? join(repo, "site", "dist"));
const basePath = (process.env.SWEEP_BASE ?? "waldo.BCObservatory").replace(/^\/|\/$/g, "");
const port = Number(process.env.SWEEP_PORT ?? 4189);
const NAMED = ["finance", "sales", "development", "platform"];

function findPlaywright() {
  const dirs = [];
  if (process.env.PLAYWRIGHT_DIR) dirs.push(process.env.PLAYWRIGHT_DIR);
  const npx = join(homedir(), ".npm", "_npx");
  if (existsSync(npx)) for (const d of readdirSync(npx)) dirs.push(join(npx, d, "node_modules"));
  for (const d of dirs) {
    const pkg = join(d, "playwright", "package.json");
    if (!existsSync(pkg)) continue;
    const main = JSON.parse(readFileSync(pkg, "utf8")).main ?? "index.js";
    return pathToFileURL(join(d, "playwright", main)).href;
  }
  return null;
}

const pw = findPlaywright();
if (!pw) {
  console.log("galaxy-density: Playwright not found (set PLAYWRIGHT_DIR to a node_modules folder that holds playwright). Skipped.");
  process.exit(0);
}
if (!existsSync(join(dist, "index.html"))) {
  console.error(`galaxy-density: ${dist}/index.html is missing; build the site first (npm run build in site/).`);
  process.exit(2);
}
const pwMod = await import(pw);
const { chromium } = pwMod.chromium ? pwMod : pwMod.default;

const root = mkdtempSync(join(tmpdir(), "galaxy-density-"));
symlinkSync(dist, join(root, basePath));
const server = spawn("python3", ["-m", "http.server", String(port), "--bind", "127.0.0.1"], { cwd: root, stdio: "ignore" });
const stop = () => { server.kill(); rmSync(root, { recursive: true, force: true }); };
process.on("exit", stop);
const B = `http://127.0.0.1:${port}/${basePath}/`;
for (let i = 0; ; i++) {
  try { if ((await fetch(B)).ok) break; } catch { /* not up yet */ }
  if (i > 50) { console.error(`galaxy-density: server on port ${port} did not start`); process.exit(2); }
  await new Promise((r) => setTimeout(r, 100));
}

const g = JSON.parse(readFileSync(join(dist, "graph", "summary.json"), "utf8"));
const topStar = (sys) => g.nodes.filter((n) => n.group === sys && n.cross?.length).sort((a, b) => b.weight - a.weight)[0]?.id;
const systems = process.env.SYSTEMS ? process.env.SYSTEMS.split(",") : g.systems.map((s) => s.id);
const parts = (process.env.PARTS ?? "states,bar").split(",");

/** Runs in the page before any script: records what the galaxy canvas draws in its last frame. */
const init = () => {
  const P = CanvasRenderingContext2D.prototype;
  let path = [];
  const rec = (window.__probe = { cur: [] });
  const gal = (c) => !!c.canvas.closest?.("section.galaxy");
  const wrap = (k, f) => { const o = P[k]; P[k] = function (...a) { if (gal(this)) f.call(this, ...a); return o.apply(this, a); }; };
  wrap("setTransform", () => { rec.cur = []; });
  wrap("beginPath", () => { path = []; });
  wrap("arc", (x, y, r, s, e) => path.push({ k: "arc", x, y, r, full: Math.abs(e - s) >= 6.28 }));
  wrap("roundRect", (x, y, w, h, rad) => path.push({ k: "rr", x, y, w, h, rad }));
  wrap("rect", (x, y, w, h) => path.push({ k: "rect", x, y, w, h }));
  wrap("moveTo", (x, y) => path.push({ k: "mt", x, y }));
  wrap("fill", function () { rec.cur.push({ op: "fill", path: path.slice(), a: this.globalAlpha, grad: typeof this.fillStyle !== "string" }); });
  wrap("fillText", function (t, x, y, mw) { const w = this.measureText(t).width; rec.cur.push({ op: "text", t, x, y, w: mw === undefined ? w : Math.min(w, mw), font: this.font, base: this.textBaseline, a: this.globalAlpha }); });
};

/** Runs in the page: the overlap counts of one state. */
const measure = () => {
  const ops = window.__probe.cur;
  const sec = document.querySelector("section.galaxy"), canvas = sec.querySelector("canvas"), o = canvas.getBoundingClientRect();
  const rel = (el) => { const r = el.getBoundingClientRect(); return { x: r.left - o.left, y: r.top - o.top, w: r.width, h: r.height }; };
  const vis = (el) => !!el && !el.hidden && getComputedStyle(el).display !== "none" && el.getBoundingClientRect().width > 0;
  const stars = [], media = [], caps = [], plots = [], plotFonts = new Set();
  for (const op of ops) {
    if (op.op === "fill" && !op.grad && op.path.length === 1) {
      const p = op.path[0];
      if (p.k === "arc" && p.full && p.r <= 14) stars.push({ x: p.x - p.r, y: p.y - p.r, w: 2 * p.r, h: 2 * p.r, a: op.a });
      else if (p.k === "rr" && Math.abs(p.w - p.h) < 0.01 && p.w <= 26.5 && Math.abs(p.rad - p.w * 0.12) < 0.01) stars.push({ x: p.x, y: p.y, w: p.w, h: p.h, a: op.a });
      else if (p.k === "rect" && p.w === 8 && p.h === 3) media.push({ x: p.x, y: p.y, w: 8, h: 3 });
      else if (p.k === "mt") media.push({ x: p.x - 4, y: p.y, w: 8, h: 7 });
    }
    if (op.op === "text" && op.base === "middle" && op.font.startsWith("600 12px") && op.a >= 0.3) caps.push({ x: op.x - 5, y: op.y - 10, w: op.w + 10, h: 20 });
    if (op.op === "text" && op.base === "top") { plots.push({ x: op.x, y: op.y, w: op.w, h: 11 }); plotFonts.add(op.font); }
  }
  const allPorts = [...document.querySelectorAll(".g-port")];
  const ports = allPorts.filter(vis).map(rel);
  const onCanvas = (r) => r.x + r.w > 0 && r.y + r.h > 0 && r.x < o.width && r.y < o.height;
  const sysLabels = [...document.querySelectorAll(".g-sys")].filter(vis).map(rel).filter(onCanvas);
  const bars = [".g-lensbar", ".g-viewbar", ".g-tools"].map((q) => document.querySelector(q)).filter(vis).map(rel);
  const hit = (a, b) => a.x < b.x + b.w && b.x < a.x + a.w && a.y < b.y + b.h && b.y < a.y + a.h;
  const pairs = (A, Bs, same = false) => { let n = 0; A.forEach((a, i) => Bs.forEach((b, j) => { if (same && j <= i) return; if (hit(a, b)) n++; })); return n; };
  const any = (A, Bs) => A.filter((a) => Bs.some((b) => hit(a, b))).length;
  const visStars = stars.filter((s) => s.a >= 0.3);
  return {
    level: sec.dataset.level, panelOpen: !document.querySelector(".g-panel").hidden,
    captions: caps.length, capOnStar: any(caps, visStars), capStarPairs: pairs(caps, visStars), capCap: pairs(caps, caps, true),
    ports: ports.length, portsHidden: allPorts.length - ports.length, portPort: pairs(ports, ports, true), portCap: pairs(ports, caps),
    portBar: pairs(ports, bars), portOnStar: any(ports, visStars),
    plots: plots.length, plotCap: pairs(plots, caps), plotPort: pairs(plots, ports), plotFonts: [...plotFonts],
  };
};

/** Runs in the page: the galaxy bar's geometry, relative to the canvas (the section has a 1 px top border). */
const barGeo = () => {
  const sec = document.querySelector("section.galaxy"), o = sec.querySelector("canvas").getBoundingClientRect();
  const vis = (el) => !!el && !el.hidden && getComputedStyle(el).display !== "none" && el.getBoundingClientRect().width > 0;
  const bar = document.querySelector(".g-bar") ?? document.querySelector(".g-lensbar");
  const groups = [".g-lensbar", ".g-viewbar"].map((q) => document.querySelector(q)).filter(vis);
  const kids = groups.flatMap((gr) => [...gr.children]).filter((c) => vis(c) && !c.classList.contains("skip"));
  const r = bar.getBoundingClientRect(), tools = document.querySelector(".g-tools");
  const panel = document.querySelector(".g-panel").getBoundingClientRect();
  return {
    rows: new Set(kids.map((c) => Math.round(c.getBoundingClientRect().top))).size, height: Math.round(r.height), bottom: Math.round(r.bottom - o.top),
    width: Math.round(r.width), tools: vis(tools) ? Math.round(tools.getBoundingClientRect().bottom - o.top) : null,
    panelY: Math.round(panel.top + window.scrollY), level: sec.dataset.level,
  };
};

const browser = await chromium.launch();
const res = [], bars = [];
const visit = async (p, hash, wait) => { await p.goto(B + hash); await p.reload(); await p.waitForTimeout(wait); };
try {
  for (const [w, h, only] of parts.includes("states") ? [[1440, 900, null], [1280, 800, NAMED], [1024, 768, null]] : []) {
    const ctx = await browser.newContext({ viewport: { width: w, height: h } });
    await ctx.addInitScript(init);
    await ctx.addInitScript(() => { try { localStorage.setItem("bcobs-galaxy-intro", "seen"); } catch { /* none */ } });
    const p = await ctx.newPage();
    for (const sys of systems.filter((s) => !only || only.includes(s))) {
      for (const [lvl, hash] of [["system", `#system=${sys}`], ["star", `#star=${encodeURIComponent(topStar(sys) ?? "")}`]]) {
        if (lvl === "star" && !topStar(sys)) continue;
        await visit(p, hash, 2600);
        res.push({ w, sys, lvl, ...(await p.evaluate(measure)) });
        const m = res.at(-1);
        console.log(`${w} ${lvl.padEnd(6)} ${sys.padEnd(15)} captions ${m.captions} over a star ${m.capOnStar} pairs ${m.capStarPairs} cap-cap ${m.capCap} | plots ${m.plots} over a caption ${m.plotCap} under a port ${m.plotPort} | ports ${m.ports} hidden ${m.portsHidden} port-port ${m.portPort} over the bar ${m.portBar} over a caption ${m.portCap} over a star ${m.portOnStar}`);
      }
    }
    await ctx.close();
  }
  for (const [w, h] of parts.includes("bar") ? [[1440, 900], [1280, 800], [1024, 768], [768, 1024], [390, 844]] : []) {
    const ctx = await browser.newContext({ viewport: { width: w, height: h } });
    await ctx.addInitScript(() => { try { localStorage.setItem("bcobs-galaxy-intro", "seen"); } catch { /* none */ } });
    const p = await ctx.newPage();
    for (const [name, hash] of [["galaxy", ""], ["system", "#system=finance"]]) {
      await visit(p, hash, 1800);
      const b = await p.evaluate(barGeo);
      await p.evaluate(() => document.querySelector("section.galaxy").focus());
      await p.keyboard.press("Tab");
      b.firstTab = await p.evaluate(() => { const a = document.activeElement; return a?.closest("section.galaxy") ? (a.getAttribute("aria-label") || a.textContent || a.tagName).trim().replace(/\s+/g, " ").slice(0, 30) : null; });
      bars.push({ w, name, ...b });
      console.log(`bar ${w} ${name.padEnd(6)} rows ${b.rows} height ${b.height} bottom ${b.bottom}${b.tools !== null ? ` (tools row bottom ${b.tools})` : ""}${w <= 480 ? ` panel at page y ${b.panelY}` : ""} first Tab: ${b.firstTab}`);
    }
    await ctx.close();
  }
} finally {
  await browser.close();
}

if (!parts.includes("states")) process.exit(0);
const sum = (rows, k) => rows.reduce((a, r) => a + (r[k] ?? 0), 0);
const states = (rows, k) => rows.filter((r) => r[k] > 0).length;
console.log("\nSums (section 1.2 of the spec):");
for (const w of [1440, 1024]) for (const lvl of ["system", "star"]) {
  const rs = res.filter((r) => r.w === w && r.lvl === lvl);
  console.log(`${w} ${lvl.padEnd(6)} (${rs.length} states): captions ${sum(rs, "captions")}, over a star ${sum(rs, "capOnStar")}, caption-star pairs ${sum(rs, "capStarPairs")}, caption-caption ${sum(rs, "capCap")}; ports ${sum(rs, "ports")} (hidden ${sum(rs, "portsHidden")}), port-port ${sum(rs, "portPort")} (${states(rs, "portPort")} states), over a caption ${sum(rs, "portCap")}, over the bar ${sum(rs, "portBar")} (${states(rs, "portBar")} states), over a star ${sum(rs, "portOnStar")}; plot labels ${sum(rs, "plots")}, over a caption ${sum(rs, "plotCap")}, under a port ${sum(rs, "plotPort")}`);
}
const main = res.filter((r) => r.w !== 1280), named = res.filter((r) => NAMED.includes(r.sys));
const fonts = [...new Set(res.flatMap((r) => r.plotFonts))];
console.log("\nTargets (section 7.3):");
console.log(`caption-caption overlaps, ${main.length} states: ${sum(main, "capCap")}`);
console.log(`caption-star pairs, ${main.length} states: ${sum(main, "capStarPairs")}; captions placed: ${sum(main, "captions")}`);
console.log(`captions over a star, system level, 1440 / 1024: ${sum(main.filter((r) => r.w === 1440 && r.lvl === "system"), "capOnStar")} / ${sum(main.filter((r) => r.w === 1024 && r.lvl === "system"), "capOnStar")}`);
console.log(`caption-star pairs, the four named systems at 1440, 1280 and 1024 (${named.length} states): ${sum(named, "capStarPairs")}; captions ${sum(named, "captions")}`);
console.log(`plot label fonts: ${fonts.join(" | ") || "none drawn"}`);
console.log(`plot label over a caption, 1440 / 1024: ${sum(main.filter((r) => r.w === 1440), "plotCap")} / ${sum(main.filter((r) => r.w === 1024), "plotCap")}`);
console.log(`plot label under a port, star level, 1440 / 1024: ${sum(main.filter((r) => r.w === 1440 && r.lvl === "star"), "plotPort")} / ${sum(main.filter((r) => r.w === 1024 && r.lvl === "star"), "plotPort")}`);
console.log(`port-port overlaps, star level, 1440 / 1024: ${sum(main.filter((r) => r.w === 1440), "portPort")} / ${sum(main.filter((r) => r.w === 1024), "portPort")}`);
console.log(`port over the bar, 1024: ${sum(main.filter((r) => r.w === 1024), "portBar")}; port over a caption, 1024: ${sum(main.filter((r) => r.w === 1024), "portCap")}; ports hidden: ${sum(main, "portsHidden")}`);
if (process.env.DENSITY_JSON) writeFileSync(process.env.DENSITY_JSON, JSON.stringify({ states: res, bars }, null, 1));
process.exit(0);
