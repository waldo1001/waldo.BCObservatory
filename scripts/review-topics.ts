/**
 * The Opus review of the topic links outside the nightly: measure cost and read the verdicts.
 *
 *   npm run review:topics -- [--data DIR] [--quota N] [--concurrency N] [--write]
 *
 * Without --data and --write it copies data/extract and data/links into a temp data dir and writes the verdicts
 * there; content/topics is read in place. --data points at a dir an earlier `npm run link:topics` wrote, so a
 * sample can be linked and then reviewed. Each verdict is printed with the hub, the item and Opus's reason.
 */
import { cpSync, existsSync, mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { llmStats } from "../pipeline/lib/llm.js";
import { CONTENT_DIR, DATA_DIR } from "../pipeline/lib/paths.js";
import { loadTopicLinks, loadTopicReview, topicCandidates, topicReviewPath, topicVerdictKey } from "../pipeline/link/topics.js";
import { gatherTopicLinks, reviewTopicLinks } from "../pipeline/review/topics.js";

const argv = process.argv.slice(2);
const val = (f: string) => { const i = argv.indexOf(f); return i >= 0 ? argv[i + 1] : undefined; };
const num = (f: string) => (val(f) === undefined ? undefined : Number(val(f)));

let dataDir = val("--data") ?? DATA_DIR;
if (!val("--data") && !argv.includes("--write")) {
  dataDir = join(mkdtempSync(join(tmpdir(), "bcobs-topicreview-")), "data");
  for (const d of ["extract/video", "extract/blog", "links"]) if (existsSync(resolve(DATA_DIR, d))) cpSync(resolve(DATA_DIR, d), resolve(dataDir, d), { recursive: true });
}

const before = gatherTopicLinks(loadTopicLinks(dataDir), dataDir, CONTENT_DIR);
const run = await reviewTopicLinks(dataDir, CONTENT_DIR, {
  quota: num("--quota") ?? 1000, deadline: new Date(Date.now() + 3_600_000), clock: () => new Date(), concurrency: num("--concurrency") ?? 3,
});

const hub = new Map(topicCandidates(CONTENT_DIR).map((c) => [c.id, c]));
const review = loadTopicReview(dataDir);
for (const [id, ls] of [...before].sort(([a], [b]) => a.localeCompare(b))) {
  const verdicts = review.verdicts[id];
  if (!verdicts) continue;
  console.log(`\n${hub.get(id)?.path ?? id}`);
  for (const l of ls) {
    const v = verdicts[topicVerdictKey(l.key, l.hash)];
    if (!v) continue;
    console.log(`  ${v.verdict === "keep" ? "KEEP" : "DROP"}  ${l.key} "${l.title}"\n        ${v.reason}`);
  }
}
const s = llmStats();
console.log(`\n${JSON.stringify({ data_dir: dataDir, review: topicReviewPath(dataDir), run, llm: { calls: s.calls, cost_usd: s.cost_usd, per_call_usd: s.calls ? s.cost_usd / s.calls : 0, tokens: s.tokens_by_model } }, null, 2)}`);
