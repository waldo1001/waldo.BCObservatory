/**
 * Topic links outside the nightly: measure cost and quality on a sample, or backfill.
 *
 *   npm run link:topics -- [--videos N] [--posts N] [--keys k1,k2] [--quota N] [--concurrency N] [--write]
 *
 * Without --write it copies data/extract and data/links into a temp data dir and writes there; content/topics is read
 * in place. --videos / --posts pick the first N units of each kind (by key); omit all for every unit.
 */
import { cpSync, existsSync, mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { llmStats } from "../pipeline/lib/llm.js";
import { CONTENT_DIR, DATA_DIR } from "../pipeline/lib/paths.js";
import { gatherTopicUnits, linkTopics, topicCandidates, topicLinksPath } from "../pipeline/link/topics.js";

const argv = process.argv.slice(2);
const val = (f: string) => { const i = argv.indexOf(f); return i >= 0 ? argv[i + 1] : undefined; };
const num = (f: string) => (val(f) === undefined ? undefined : Number(val(f)));

let dataDir = DATA_DIR;
if (!argv.includes("--write")) {
  dataDir = join(mkdtempSync(join(tmpdir(), "bcobs-topiclinks-")), "data");
  for (const d of ["extract/video", "extract/blog", "links"]) if (existsSync(resolve(DATA_DIR, d))) cpSync(resolve(DATA_DIR, d), resolve(dataDir, d), { recursive: true });
}
const all = gatherTopicUnits(dataDir, CONTENT_DIR);
const nv = num("--videos"), np = num("--posts");
const keys = val("--keys")?.split(",").map((k) => k.trim()).filter(Boolean) ?? [];
const pick = nv === undefined && np === undefined && !keys.length ? null
  : new Set([...all.filter((u) => u.kind === "video").slice(0, nv ?? 0), ...all.filter((u) => u.kind === "post").slice(0, np ?? 0)].map((u) => u.key).concat(keys));
const { links, run } = await linkTopics(dataDir, CONTENT_DIR, {
  quota: num("--quota") ?? 1000, deadline: new Date(Date.now() + 3_600_000), clock: () => new Date(),
  concurrency: num("--concurrency") ?? 3, ...(pick ? { only: (k: string) => pick.has(k) } : {}),
});
const title = new Map(topicCandidates(CONTENT_DIR).map((c) => [c.id, `${c.path}`]));
let none = 0;
for (const u of Object.values(links.units)) {
  if (pick && !pick.has(u.key)) continue;
  if (!u.matches.length) { none++; console.log(`${u.key} "${u.title}"\n    (no topic)`); continue; }
  console.log(`${u.key} "${u.title}"`);
  for (const m of u.matches) console.log(`    -> ${title.get(m.topic) ?? m.topic}\n       quote: "${m.quote}"`);
}
const s = llmStats();
const sampled = pick ? pick.size : all.length;
console.log(JSON.stringify({ data_dir: dataDir, links: topicLinksPath(dataDir), units_total: all.length, sampled, without_topic: none, run: { ...run, rejections: run.rejections }, llm: { calls: s.calls, cost_usd: s.cost_usd, per_unit_usd: sampled ? s.cost_usd / sampled : 0, tokens: s.tokens_by_model } }, null, 2));
