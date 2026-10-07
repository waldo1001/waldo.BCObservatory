/** D61 end to end without network: fetch, extract, link, publish a change; the object page, digest, search and graph see it. */
import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, mkdtempSync, readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import matter from "gray-matter";
import type { HttpGet } from "../../pipeline/lib/http.js";
import type { LlmRequest } from "../../pipeline/lib/llm.js";
import { Manifest, type ManifestItem } from "../../pipeline/lib/manifest.js";
import { writeJson } from "../../pipeline/lib/fsx.js";
import type { Llm } from "../../pipeline/extract/video.js";
import type { StageContext, StageFn, BatchFn } from "../../pipeline/orchestrator/execute.js";
import { changeFetched, changeRecordPath, readChangeRecord } from "../../pipeline/fetch/change.js";
import { BATCH_SIZE, changeExtractedHandler, extractChanges } from "../../pipeline/extract/change.js";
import { changeLinked, changePublished, changesByObjectPath, renderChangeIndex, renderChangesByObject } from "../../pipeline/render/change.js";
import { backportsPath, mergedLogPath } from "../../pipeline/ingest/github-prs.js";
import { renderCodePages } from "../../pipeline/render/object.js";
import { renderDigest } from "../../pipeline/render/digest.js";
import { pageRecord } from "../../pipeline/render/search.js";
import { buildGraph } from "../../pipeline/link/graph.js";
import { validateContent } from "../../pipeline/validate/content.js";
import { snapshotFixture } from "../helpers/change-fixture.js";

const now = new Date("2026-10-07T03:00:00Z");
const REPO = "microsoft/BCApps";
const BODY = "<!-- template -->\nThis change adds a due date calculation to payment terms so that invoices pick the right date.\n\nFixes #4321\n[AB#640900](https://x)";

function gh(prs: Record<number, { title: string; files: { filename: string; status: string; additions?: number; deletions?: number }[]; body?: string }>): HttpGet & { calls: string[] } {
  const calls: string[] = [];
  const f = (async (url: string) => {
    calls.push(url);
    const issue = url.match(/\/issues\/(\d+)$/);
    if (issue) return Number(issue[1]) === 4321
      ? new Response(JSON.stringify({ number: 4321, title: "Due date is wrong", state: "closed" }), { headers: { "x-ratelimit-remaining": "900" } })
      : new Response("{}", { status: 404, headers: { "x-ratelimit-remaining": "900" } });
    const m = url.match(/\/pulls\/(\d+)(\/files)?/)!;
    const pr = prs[Number(m[1])];
    const json = m[2] ? pr.files.map((x) => ({ additions: 3, deletions: 1, ...x }))
      : { number: Number(m[1]), title: pr.title, body: pr.body ?? BODY, html_url: `https://github.com/${REPO}/pull/${m[1]}`, merged_at: "2026-10-05T10:00:00Z", merge_commit_sha: `sha${m[1]}`, base: { ref: "main" }, user: { login: "dev", type: "User" }, labels: [{ name: "Team: Finance" }, { name: "From Fork" }], changed_files: pr.files.length };
    return new Response(JSON.stringify(json), { headers: { "x-ratelimit-remaining": "900" } });
  }) as HttpGet & { calls: string[] };
  f.calls = calls;
  return f;
}
const item = (n: number, title: string): ManifestItem => ({ id: `change/bcapps-prs/${n}`, pillar: "change", source: "bcapps-prs", tier: "official", title, url: `https://github.com/${REPO}/pull/${n}`, published_at: "2026-10-05T10:00:00Z", state: "discovered", stages: { discovered: { at: "2026-10-05T11:00:00.000Z" } }, attempts: 0, meta: { number: n, repo: REPO, base: "main", major: "30" } });
const fakeLlm = (reqs: LlmRequest[]): Llm => async <T>(r: LlmRequest) => {
  reqs.push(r);
  const keys = [...r.prompt.matchAll(/### PR key=(c\d+)/g)].map((m) => m[1]);
  return { output: { changes: keys.map((key) => ({ key, summary: "Payment terms calculate a due date for invoices.", key_points: ["Adds a due date calculation"], change_kind: "feature", behavior_change: true, breaking: false,
    obsoletions: [{ object: "Payment Terms", member: "Old Field", replacement: "New Field" }, { object: "Customer", member: null, replacement: null }], systems: ["finance"],
    quote: "This change adds a due date calculation to payment terms so that invoices pick the right date." })) } as T, cached: false, meta: { model: "claude-haiku-4-5", cost_usd: 0.01 } as any };
};

async function world() {
  const root = mkdtempSync(join(tmpdir(), "bcobs-changes-"));
  const dataDir = join(root, "data"), contentDir = join(root, "content"), cacheDir = join(root, "cache");
  await snapshotFixture(dataDir);
  renderCodePages(dataDir, contentDir, now);
  const ctx = { now: () => now, dataDir, contentDir, mirrorsDir: "", manifest: new Manifest(join(dataDir, "manifest")), sources: new Map() } as unknown as StageContext;
  return { root, dataDir, contentDir, cacheDir, ctx };
}

test("fetch: record without patch or body, join, skip non-code; extraction: verbatim quote, joined obsoletions only", async () => {
  const w = await world();
  const http = gh({
    101: { title: "Payment terms: due date calculation", files: [{ filename: "src/Layers/W1/BaseApp/Foundation/PaymentTerms/PaymentTerms.Table.al", status: "modified" }, { filename: "src/Layers/W1/BaseApp/New.Codeunit.al", status: "added" }, { filename: "src/Apps/W1/X/app/Translations/x.de-DE.xlf", status: "modified" }] },
    102: { title: "Translations", files: [{ filename: "a.xlf", status: "modified" }, { filename: ".github/x.yml", status: "modified" }] },
  });
  const fetch = changeFetched({ cacheDir: w.cacheDir, http }) as { run: StageFn };
  const r1 = await fetch.run(item(101, "Payment terms"), w.ctx);
  assert.equal(r1.skip, undefined);
  assert.deepEqual(r1.data, { change_class: "code", files: 3, al: 2, objects: 1, unjoined: 1 });
  const rec = readChangeRecord(w.dataDir, item(101, ""))!;
  assert.deepEqual([rec.fixes_issues, rec.work_items, rec.community_contribution, rec.join.objects[0].page, rec.systems], [[4321], [640900], true, "table/3", ["platform"]]);
  const raw = readFileSync(changeRecordPath(w.dataDir, REPO, 101), "utf8");
  assert.ok(!raw.includes("due date calculation to payment") && !raw.includes("patch"), "no body, no patch in data/");
  const r2 = await fetch.run(item(102, "Translations"), w.ctx);
  assert.deepEqual([r2.skip, readChangeRecord(w.dataDir, item(102, ""))!.files.length], ["non-code", 0], "non-code: skipped, totals only");
  // extraction
  const reqs: LlmRequest[] = [];
  const x = (await extractChanges([item(101, "")], { dataDir: w.dataDir, cacheDir: w.cacheDir, http }, fakeLlm(reqs))).get("change/bcapps-prs/101") as any;
  assert.equal(reqs.length, 1);
  assert.ok(!reqs[0].prompt.includes("<!-- template -->"), "HTML comments of the PR template are dropped");
  assert.deepEqual(x.obsoletions, [{ object: "Payment Terms", member: "Old Field", replacement: "New Field" }], "Customer was not joined: dropped");
  assert.equal(x.quote, "This change adds a due date calculation to payment terms so that invoices pick the right date.", "verbatim and under 25 words: kept");
});

test("extraction batches six per call and drops a quote that is not verbatim", async () => {
  const w = await world();
  const prs = Object.fromEntries(Array.from({ length: 7 }, (_, i) => [200 + i, { title: `Change ${i}`, files: [{ filename: "src/Layers/W1/BaseApp/Foundation/PaymentTerms/PaymentTerms.Table.al", status: "modified" }], body: "Short body that says nothing quotable here at all." }]));
  const http = gh(prs);
  const fetch = changeFetched({ cacheDir: w.cacheDir, http }) as { run: StageFn };
  const items = Object.keys(prs).map((n) => item(Number(n), "x"));
  for (const it of items) await fetch.run(it, w.ctx);
  const reqs: LlmRequest[] = [];
  const out = await (changeExtractedHandler({ cacheDir: w.cacheDir, http }, fakeLlm(reqs)) as { batch: { run: BatchFn } }).batch.run(items, w.ctx);
  assert.equal(BATCH_SIZE, 6);
  assert.deepEqual(reqs.map((r) => [...r.prompt.matchAll(/### PR key=/g)].length), [6, 1]);
  assert.ok([...out.values()].every((v) => !(v instanceof Error)));
  const x = JSON.parse(readFileSync(join(w.dataDir, "extract/change/bcapps-prs/200.json"), "utf8"));
  assert.equal(x.quote, null, "the model's quote is not in this body: dropped");
});

test("published page, object page section, reverse index, digest, search record and graph edge (AC1, AC8)", async () => {
  const w = await world();
  const http = gh({ 101: { title: "Payment terms: due date calculation", files: [{ filename: "src/Layers/W1/BaseApp/Foundation/PaymentTerms/PaymentTerms.Table.al", status: "modified" }, { filename: "src/Layers/BE/BaseApp/Foundation/PaymentTerms/PaymentTerms.Table.al", status: "modified" }] } });
  let it = item(101, "Payment terms: due date calculation");
  w.ctx.manifest.save(it);
  writeJson(backportsPath(w.dataDir, REPO), { unmatched: [{ number: 150, base: "releases/29.x", merged_at: "2026-10-06T00:00:00Z", url: `https://github.com/${REPO}/pull/150`, title_key: "payment terms due date calculation" }] });
  writeJson(mergedLogPath(w.dataDir, REPO), { "101": ["2026-10-05", "main", "item"], "102": ["2026-10-05", "main", "bot"], "150": ["2026-10-06", "releases/29.x", "backport"] });
  const fetch = changeFetched({ cacheDir: w.cacheDir, http }) as { run: StageFn };
  await fetch.run(it, w.ctx);
  await (changeExtractedHandler({ cacheDir: w.cacheDir, http }, fakeLlm([])) as { batch: { run: BatchFn } }).batch.run([it], w.ctx);
  await (changeLinked() as StageFn)(it, w.ctx);
  const pub = await (changePublished() as StageFn)(it, w.ctx);
  const page = join(w.contentDir, "changes/bcapps/101.md");
  assert.ok(existsSync(page));
  assert.match(String(pub.data?.path), /content\/changes\/bcapps\/101\.md$/);
  const fm = matter(readFileSync(page, "utf8"));
  assert.deepEqual([fm.data.id, fm.data.links.objects, fm.data.objects_touched.length, fm.data.backports[0].number, fm.data.change_kind], ["change/bcapps/101", ["object/table/3"], 1, 150, "feature"], "W1 and BE copies: one object line");
  assert.match(fm.content, /## Also merged into\n\n- \[#150\]/);
  assert.match(fm.content, /- \[Table 3 "Payment Terms"\]\(\.\.\/\.\.\/objects\/table\/3\.md\)/);
  assert.match(fm.content, /Fixes: \[#4321 Due date is wrong\]\(https:\/\/github\.com\/microsoft\/BCApps\/issues\/4321\) \(closed\)/);
  // reverse index, then the object page
  assert.equal(renderChangesByObject(w.contentDir, w.dataDir), 1);
  assert.equal(JSON.parse(readFileSync(changesByObjectPath(w.dataDir), "utf8"))["table/3"][0].page, "bcapps/101");
  assert.equal(renderChangeIndex(w.contentDir), 1);
  const r = renderCodePages(w.dataDir, w.contentDir, now);
  assert.ok(r.written >= 1);
  const obj = matter(readFileSync(join(w.contentDir, "objects/table/3.md"), "utf8"));
  assert.deepEqual(obj.data.links.changes, ["change/bcapps/101"]);
  assert.match(obj.content, /## Recent changes\n\n- 2026-10-05 \[#101 Payment terms: due date calculation\]\(\.\.\/\.\.\/changes\/bcapps\/101\.md\) \(main, BC30, feature\)\n\n## Across versions\n/);
  assert.equal(renderCodePages(w.dataDir, w.contentDir, now).written, 0, "nothing moved: no rewrite");
  assert.deepEqual(validateContent(w.contentDir, now).errors, []);
  // digest
  w.ctx.manifest.save({ ...it, state: "published" });
  const d = renderDigest({ id: "2026-W41", start: "2026-10-05", end: "2026-10-11" }, { items: [], dataDir: w.dataDir, contentDir: w.contentDir, currentMajor: "30" }, now);
  assert.deepEqual([d.counts.changes, d.counts.changes_behavior, d.counts.changes_obsoletions], [3, 1, 1]);
  assert.match(d.page, /## Code changes\n\n3 pull requests merged, 1 of them touch AL source[\s\S]*microsoft\/BCApps: main: 2 merged \(1 bots, 0 backports\)[\s\S]*\[#101 Payment terms[\s\S]*Obsoletions:\n\n- Payment Terms: Old Field/);
  // search record and graph
  assert.deepEqual(pageRecord("changes/bcapps/101", fm.data), { path: "changes/bcapps/101", type: "change", title: "#101 Payment terms: due date calculation", summary: fm.data.summary, tier: "official", system: "platform", date: "2026-10-05", tags: fm.data.tags.slice(0, 8), source: "bcapps-prs", status: "feature" });
  assert.ok(fm.data.tags.includes("table payment terms"), "found by object name");
  const g = buildGraph(w.contentDir);
  assert.ok(g.edges.some((e) => e.type === "changes" && [e.s, e.t].includes("change/bcapps/101") && [e.s, e.t].includes("object/table/3")));
  it = { ...it, state: "published" };
  assert.ok(it);
});
