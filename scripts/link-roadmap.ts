/**
 * Roadmap links outside the nightly: measure cost and quality on a sample, or backfill.
 *
 *   npm run link:roadmap -- [--videos N] [--docs N] [--keys k1,k2] [--quota N] [--review N] [--concurrency N] [--write [--render]]
 *
 * Without --write it copies data/extract, data/roadmap and data/links into a temp data dir and writes there.
 * --videos / --docs pick the first N units of each kind (by key), --keys adds units by key (video/<id> or a docs item id);
 * omit all three for every unit. --review N then runs the Opus coverage review for at most N roadmap features
 * (data/links/roadmap-review.json) and prints every dropped link. --render (with --write) re-renders the published feature and video pages, as the
 * nightly does after linking.
 */
import { cpSync, existsSync, mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { llmStats } from "../pipeline/lib/llm.js";
import { CONTENT_DIR, DATA_DIR } from "../pipeline/lib/paths.js";
import { loadSources } from "../pipeline/lib/config.js";
import { Manifest } from "../pipeline/lib/manifest.js";
import { rerenderVideoPages } from "../pipeline/render/video.js";
import { latestRoadmap, rerenderFeaturePages } from "../pipeline/render/feature.js";
import { readJsonOr } from "../pipeline/lib/fsx.js";
import { candidates, gatherUnits, linkRoadmap, linksPath, systemsPath, type RoadmapSystems } from "../pipeline/link/roadmap.js";
import { gatherLinks, reviewCoverage } from "../pipeline/review/coverage.js";
import { loadLinks, loadReview, verdictOf } from "../pipeline/link/coverage.js";

const argv = process.argv.slice(2);
const val = (f: string) => { const i = argv.indexOf(f); return i >= 0 ? argv[i + 1] : undefined; };
const num = (f: string) => (val(f) === undefined ? undefined : Number(val(f)));

let dataDir = DATA_DIR;
if (!argv.includes("--write")) {
  dataDir = join(mkdtempSync(join(tmpdir(), "bcobs-links-")), "data");
  for (const d of ["extract", "roadmap", "links"]) if (existsSync(resolve(DATA_DIR, d))) cpSync(resolve(DATA_DIR, d), resolve(dataDir, d), { recursive: true });
}
const roadmap = latestRoadmap(dataDir);
const classifiedBefore = readJsonOr<RoadmapSystems>(systemsPath(dataDir), { prompt_version: 0, items: {} }).items;
const all = gatherUnits(dataDir, roadmap, classifiedBefore);
const nv = num("--videos"), nd = num("--docs");
const keys = val("--keys")?.split(",").map((k) => k.trim()).filter(Boolean) ?? [];
const pick = nv === undefined && nd === undefined && !keys.length ? null
  : new Set([...all.filter((u) => u.key.startsWith("video/")).slice(0, nv ?? 0), ...all.filter((u) => !u.key.startsWith("video/")).slice(0, nd ?? 0)].map((u) => u.key).concat(keys));

const { links, run } = await linkRoadmap(dataDir, {
  quota: num("--quota") ?? 1000, deadline: new Date(Date.now() + 3_600_000), clock: () => new Date(),
  concurrency: num("--concurrency") ?? 3, ...(pick ? { only: (k: string) => pick.has(k) } : {}),
});
const byId = new Map(candidates(roadmap, readJsonOr<RoadmapSystems>(systemsPath(dataDir), { prompt_version: 0, items: {} }).items).map((c) => [c.id, c]));
for (const u of Object.values(links.units)) {
  if (pick && !pick.has(u.key)) continue;
  for (const m of u.matches) {
    const c = byId.get(m.roadmap_id);
    console.log(`${u.key}${"name" in m ? ` #${m.feature} "${m.name}"` : ""}\n    -> ${m.roadmap_id} [${c?.systems.join(",")}] ${c?.title}\n    quote: "${m.quote}"`);
  }
}
let review: unknown;
if (num("--review") !== undefined) {
  const r = await reviewCoverage(dataDir, { quota: num("--review")!, deadline: new Date(Date.now() + 3_600_000), clock: () => new Date(), concurrency: num("--concurrency") ?? 3 });
  const rv = loadReview(dataDir);
  for (const [id, ls] of gatherLinks(loadLinks(dataDir), dataDir)) {
    for (const l of ls) {
      const v = verdictOf(rv, id, l.key, l.hash);
      if (v?.verdict === "drop") console.log(`DROP ${id} ${byId.get(id)?.title}\n    ${l.title}: ${l.text.slice(0, 120)}\n    why: ${v.reason}`);
    }
  }
  review = r;
}
if (argv.includes("--write") && argv.includes("--render")) {
  const manifest = new Manifest(resolve(DATA_DIR, "manifest"));
  const now = new Date();
  const pages = rerenderFeaturePages(manifest, DATA_DIR, CONTENT_DIR, now)
    + await rerenderVideoPages(manifest, { dataDir: DATA_DIR, contentDir: CONTENT_DIR, now: () => now, sources: new Map(loadSources().map((x) => [x.id, x])) });
  console.log(`re-rendered ${pages} pages`);
}
const s = llmStats();
console.log(JSON.stringify({ data_dir: dataDir, links: linksPath(dataDir), units_total: all.length, run, review, llm: { calls: s.calls, cache_hits: s.cache_hits, cost_usd: s.cost_usd, tokens: s.tokens_by_model } }, null, 2));
