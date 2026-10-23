/**
 * Learn confirmation (D106) outside the nightly: measure cost and quality on a sample, or backfill.
 *
 *   npm run link:learn-confirm -- [--units N] [--keys k1,k2] [--quota N] [--concurrency N] [--write]
 *
 * --quota counts units (default 1000). Without --write it copies data/links into a temp data dir and writes there;
 * everything else (Learn manifest and extractions, indexes, content) is read in place. --units picks the first N
 * units by key.
 */
import { cpSync, existsSync, mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { llmStats } from "../pipeline/lib/llm.js";
import { CONTENT_DIR, DATA_DIR } from "../pipeline/lib/paths.js";
import { confirmLearnLinks, gatherConfirmUnits, learnConfirmPath } from "../pipeline/link/learn-confirm.js";

const argv = process.argv.slice(2);
const val = (f: string) => { const i = argv.indexOf(f); return i >= 0 ? argv[i + 1] : undefined; };
const num = (f: string) => (val(f) === undefined ? undefined : Number(val(f)));

let dataDir = DATA_DIR;
if (!argv.includes("--write")) {
  dataDir = join(mkdtempSync(join(tmpdir(), "bcobs-learnconfirm-")), "data");
  for (const d of ["manifest", "extract", "index", "overrides"]) if (existsSync(resolve(DATA_DIR, d))) cpSync(resolve(DATA_DIR, d), resolve(dataDir, d), { recursive: true, filter: (p) => !p.includes("/_runs/") });
  if (existsSync(resolve(DATA_DIR, "links"))) cpSync(resolve(DATA_DIR, "links"), resolve(dataDir, "links"), { recursive: true });
}
const now = new Date();
const all = gatherConfirmUnits(dataDir, CONTENT_DIR, now);
const n = num("--units");
const keys = val("--keys")?.split(",").map((k) => k.trim()).filter(Boolean) ?? [];
const pick = n === undefined && !keys.length ? null : new Set([...all.slice(0, n ?? 0).map((u) => u.key), ...keys]);
const { confirm, run } = await confirmLearnLinks(dataDir, CONTENT_DIR, {
  quota: num("--quota") ?? 1000, deadline: new Date(Date.now() + 3_600_000), clock: () => now,
  concurrency: num("--concurrency") ?? 3, ...(pick ? { only: (k: string) => pick.has(k) } : {}),
});
for (const [k, u] of Object.entries(confirm.units)) {
  if (pick && !pick.has(k)) continue;
  console.log(`${k}${u.picks.length ? "" : "\n    (no Learn page)"}`);
  for (const p of u.picks) console.log(`    -> ${p.url}\n       ${p.reason}`);
}
const s = llmStats();
const sampled = pick ? pick.size : all.length;
console.log(JSON.stringify({ data_dir: dataDir, file: learnConfirmPath(dataDir), units_total: all.length, sampled, run, llm: { calls: s.calls, cost_usd: s.cost_usd, per_unit_usd: sampled ? s.cost_usd / sampled : 0 } }, null, 2));
