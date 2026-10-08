#!/usr/bin/env node
/**
 * Panel list sweep (D78, docs/specs/panel-lists.md 4.3). Not part of CI.
 *
 * Serves site/dist under the base path with `python3 -m http.server`, visits every galaxy panel state (both lens
 * pickers, a lens of each group, the version and this-week lenses (all kinds, code only, code in one system, D80), the galaxy panel, three systems, a star panel, a
 * Tilt) at 1440 and 390 px, and fails when a `.g-panel` or `details.ask` row has a label of 4+ characters that is
 * narrower than 24 px and taller than 40 px: a label squeezed into a marker column, written one character per line.
 *
 * Playwright is not a dependency of the repository. It is imported from PLAYWRIGHT_DIR (a node_modules folder that
 * holds `playwright`), else from the global npx cache; when neither has it the sweep says so and exits 0.
 *
 *   npm --prefix site run build && node scripts/ui-sweep.mjs
 *   PLAYWRIGHT_DIR=/path/to/node_modules SWEEP_PORT=4188 node scripts/ui-sweep.mjs
 *
 * Deterministic: no network beyond 127.0.0.1, no LLM.
 */
import { spawn } from "node:child_process";
import { existsSync, mkdtempSync, readdirSync, readFileSync, rmSync, symlinkSync } from "node:fs";
import { homedir, tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const repo = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(repo, "site", "dist");
const basePath = (process.env.SWEEP_BASE ?? "waldo.BCObservatory").replace(/^\/|\/$/g, "");
const port = Number(process.env.SWEEP_PORT ?? 4188);
const widths = [1440, 390];

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
  console.log("ui-sweep: Playwright not found (set PLAYWRIGHT_DIR to a node_modules folder that holds playwright). Skipped.");
  process.exit(0);
}
if (!existsSync(join(dist, "index.html"))) {
  console.error("ui-sweep: site/dist/index.html is missing; build the site first (npm run build in site/).");
  process.exit(2);
}
const pwMod = await import(pw);
const { chromium } = pwMod.chromium ? pwMod : pwMod.default;

// serve site/dist as /<base>/ from a temp folder with one symlink
const root = mkdtempSync(join(tmpdir(), "ui-sweep-"));
symlinkSync(dist, join(root, basePath));
const server = spawn("python3", ["-m", "http.server", String(port), "--bind", "127.0.0.1"], { cwd: root, stdio: "ignore" });
const stop = () => { server.kill(); rmSync(root, { recursive: true, force: true }); };
process.on("exit", stop);
const B = `http://127.0.0.1:${port}/${basePath}/`;
for (let i = 0; ; i++) {
  try { if ((await fetch(B)).ok) break; } catch { /* not up yet */ }
  if (i > 50) { console.error(`ui-sweep: server on port ${port} did not start`); process.exit(2); }
  await new Promise((r) => setTimeout(r, 100));
}

// the states: picked from the build, so a renamed lens or system never silently drops out
const g = JSON.parse(readFileSync(join(dist, "graph", "summary.json"), "utf8"));
const systems = g.systems.map((s) => s.id);
const sysPick = ["finance", "development", "localization"].filter((s) => systems.includes(s));
for (const s of systems) if (sysPick.length < 3 && !sysPick.includes(s)) sysPick.push(s);
const star = [...g.nodes].filter((n) => n.type === "object").sort((a, b) => b.weight - a.weight)[0]?.id;

/** Squeezed labels in the open panel and in every `details.ask` menu (opened for the measure). */
async function measure(p) {
  return p.evaluate(() => {
    const opened = [];
    for (const d of document.querySelectorAll("details.ask")) if (!d.open) { d.open = true; opened.push(d); }
    const bad = [];
    for (const el of document.querySelectorAll(".g-panel li, .g-panel button, .g-panel a, details.ask li, details.ask a, details.ask button")) {
      if (!el.getBoundingClientRect().width) continue;
      for (const c of el.querySelectorAll(":scope > span, :scope > small, :scope > b")) {
        const r = c.getBoundingClientRect(); const txt = (c.textContent ?? "").trim();
        if (txt.length >= 4 && r.width > 0 && r.width < 24 && r.height > 40) bad.push(`${txt.slice(0, 40)} (${Math.round(r.width)}x${Math.round(r.height)})`);
      }
    }
    for (const d of opened) d.open = false;
    return bad;
  });
}

const browser = await chromium.launch();
const results = [];
try {
  for (const vw of widths) {
    const p = await browser.newPage({ viewport: { width: vw, height: 900 } });
    const visit = async (hash, wait = 900) => { await p.goto(B + hash); await p.reload(); await p.waitForTimeout(wait); };
    await visit("");
    const groupFirst = await p.$$eval("[data-g-lens] optgroup", (gs) => gs.map((o) => [o.label, o.querySelector("option")?.value]).filter(([, v]) => v));
    const bar = await p.$$eval(".g-lensbar .g-lens[data-lens]", (bs) => bs.map((b) => b.dataset.lens).filter(Boolean));
    const states = [
      ["Pick a localization", "#lens=pick:localization"],
      ["Pick a source", "#lens=pick:source"],
      ...groupFirst.map(([label, id]) => [`lens ${label}: ${id}`, `#lens=${encodeURIComponent(id)}`]),
      ...[...new Set(bar)].map((id) => [`lens ${id}`, `#lens=${encodeURIComponent(id)}`]),
      // D80: the this-week pills and the code groups
      ["this week, code only", "#lens=landed&kinds=c"],
      ["this week, code in administration", "#system=administration&lens=landed&kinds=c"],
      ["galaxy panel", "#"],
      ...sysPick.map((s) => [`system ${s}`, `#system=${s}`]),
      ...(star ? [[`star ${star}`, `#star=${star}`]] : []),
      ...(sysPick[0] ? [[`tilt ${sysPick[0]}`, `#system=${sysPick[0]}&tilt=1`]] : []),
    ];
    for (const [label, hash] of states) {
      await visit(hash, hash.includes("tilt") ? 1500 : 900);
      results.push({ where: `${vw} ${label}`, bad: await measure(p) });
    }
    await p.close();
  }
} finally {
  await browser.close();
}

let total = 0;
for (const r of results) {
  total += r.bad.length;
  console.log(`${r.where.padEnd(48)} ${r.bad.length}${r.bad.length ? `  e.g. ${r.bad.slice(0, 2).join("; ")}` : ""}`);
}
console.log(`ui-sweep: ${results.length} states, ${total} squeezed ${total === 1 ? "row" : "rows"}`);
process.exit(total ? 1 : 0);
