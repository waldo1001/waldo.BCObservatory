import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { writeJson } from "../../pipeline/lib/fsx.js";
import type { LlmRequest } from "../../pipeline/lib/llm.js";
import type { ManifestItem } from "../../pipeline/lib/manifest.js";
import type { Llm } from "../../pipeline/extract/video.js";
import { changeExtractionPath, type ChangeExtraction } from "../../pipeline/extract/change.js";
import { changeRecordPath, type ChangeRecord } from "../../pipeline/fetch/change.js";
import { applyChangeReview, changeReviewPath, dueChanges, reviewChanges, type ChangeReviewOut } from "../../pipeline/review/change.js";

const BODY = "Moves the posting preview to a background session. Obsoletes the old event.";
const item = (n: number): ManifestItem => ({
  id: `change/bcapps-prs/${n}`, pillar: "change", source: "bcapps-prs", tier: "official", title: `PR ${n}`, url: `https://github.com/microsoft/BCApps/pull/${n}`,
  published_at: `2026-10-0${(n % 9) + 1}T08:00:00Z`, state: "published", stages: { published: { at: "2026-10-07T01:00:00Z" } }, attempts: 0, flags: [], meta: { repo: "microsoft/BCApps" },
});
const rec = (n: number): ChangeRecord => ({
  schema: "bcobs-change@1", number: n, repo: "microsoft/BCApps", source: "bcapps-prs", url: `https://github.com/microsoft/BCApps/pull/${n}`, base: "main", major: "29",
  merged_at: "2026-10-05T10:00:00Z", merge_commit_sha: `sha${n}`, author: "dev", author_type: "User", labels: [], community_contribution: false,
  title: `Posting preview in background ${n}`, body_hash: "bh", fixes_issues: [], work_items: [], change_class: "code",
  files: [{ path: "src/Apps/W1/BaseApp/App/src/Posting.Codeunit.al", status: "modified", additions: 3, deletions: 1, class: "al-src" as any }],
  totals: { files: 1, additions: 3, deletions: 1, al: 1 },
  join: { major: "29", commit: "c", objects: [{ key: "codeunit/12", page: "codeunit/12", type: "codeunit", id: 12, name: "Gen. Jnl.-Post Line", app: "Base Application", cc: "w1", status: "modified" } as any], unjoined: [] },
  systems: ["finance"], apps: ["Base Application"],
});
const x = (n: number): ChangeExtraction => ({
  item_id: `change/bcapps-prs/${n}`, number: n, summary: "Posting preview runs in a background session.", key_points: ["Background session"],
  change_kind: "feature", behavior_change: true, breaking: false, obsoletions: [{ object: "Gen. Jnl.-Post Line", member: "OnOldEvent", replacement: null }],
  systems: ["finance"], quote: null, prompt_version: 1, llm: { model: "haiku", cached: false, cost_usd: 0.01, changes_in_call: 1 },
});
const out = (ref: string, over: Partial<ChangeReviewOut> = {}): ChangeReviewOut => ({ ref, verdict: "approve", issues: [], summary: null, key_points: null, change_kind: null, behavior_change: null, breaking: null, drop_obsoletions: [], ...over });
const fake = (per: (ref: string) => ChangeReviewOut) => {
  const reqs: LlmRequest[] = [];
  const llm: Llm = async <T>(r: LlmRequest) => {
    reqs.push(r);
    const refs = [...r.prompt.matchAll(/### PR ref=(c\d+)/g)].map((m) => m[1]);
    return { output: { reviews: refs.map(per) } as T, cached: false, meta: { model: "claude-opus-5-5", cost_usd: 0.09 } as any };
  };
  return { llm, reqs };
};
function setup(n: number) {
  const dataDir = mkdtempSync(join(tmpdir(), "bcobs-review-change-"));
  const items = Array.from({ length: n }, (_, i) => item(i + 1));
  for (const it of items) { const k = Number(it.id.split("/")[2]); writeJson(changeRecordPath(dataDir, "microsoft/BCApps", k), rec(k)); writeJson(changeExtractionPath(dataDir, it), x(k)); }
  const saved = new Map<string, ManifestItem>();
  return { dataDir, items, saved, save: (i: ManifestItem) => { saved.set(i.id, i); } };
}
const bodies: string[] = [];
const opts = (s: ReturnType<typeof setup>, llm: Llm, quota = 10) => ({
  quota, deadline: new Date("2099-01-01"), clock: () => new Date("2026-10-08T02:00:00Z"), llm, cacheDir: s.dataDir, save: s.save,
  body: async (i: ManifestItem) => { bodies.push(i.id); return BODY; },
});
const readX = (dataDir: string, it: ManifestItem) => JSON.parse(readFileSync(changeExtractionPath(dataDir, it), "utf8")) as ChangeExtraction;

test("fix edits pass the extractor's validators: a breaking kind stays breaking, unknown obsoletions are refused", () => {
  const r = applyChangeReview(x(1), out("c1", { verdict: "fix", change_kind: "breaking", breaking: false, behavior_change: false, drop_obsoletions: [1, 4], summary: "The posting preview moved — to a background session." }));
  assert.deepEqual([r.x.change_kind, r.x.breaking, r.x.behavior_change, r.x.obsoletions.length], ["breaking", true, false, 0]);
  assert.equal(r.x.summary, "The posting preview moved - to a background session.");
  assert.equal(r.rejected.length, 2, r.rejected.join("; ")); // breaking false on a breaking kind, obsoletion 4
});

test("approve, fix and reject over batches of 6; the body comes from the cache reader and is never stored", async () => {
  const s = setup(7);
  bodies.length = 0;
  const { llm, reqs } = fake((ref) => out(ref, ref === "c1" ? { verdict: "reject", issues: ["describes another change"] } : ref === "c2" ? { verdict: "fix", key_points: ["Runs in the background", "Old event obsolete"] } : {}));
  const { run, touched } = await reviewChanges(s.items, s.dataDir, opts(s, llm));
  assert.deepEqual(reqs.map((r) => (r.prompt.match(/### PR ref=/g) ?? []).length), [6, 1]);
  assert.deepEqual([reqs[0].role, reqs[0].stage], ["review", "review-change"]);
  assert.ok(reqs[0].prompt.includes(BODY) && reqs[0].prompt.includes('codeunit 12 "Gen. Jnl.-Post Line"'), "Opus sees what Haiku saw");
  assert.equal(bodies.length, 7);
  assert.deepEqual([run.reviewed, run.fixed, run.rejected, run.calls], [7, 1, 2, 2], "c1 of each call rejected, c2 of the first fixed");
  assert.equal(touched.length, 7);
  // newest first: item 8 does not exist; published_at day = n % 9 + 1, so item 7 (day 8) is first
  const first = s.items[6], second = s.items[5];
  assert.equal(s.saved.get(first.id)!.review!.state, "flagged");
  assert.deepEqual([readX(s.dataDir, first).summary, readX(s.dataDir, first).key_points, readX(s.dataDir, first).change_kind], ["", [], "feature"], "reject drops the model text, keeps the facts");
  assert.deepEqual(readX(s.dataDir, second).key_points, ["Runs in the background", "Old event obsolete"]);
  assert.equal(s.saved.get(second.id)!.review!.state, "reviewed");
  const record = readFileSync(changeReviewPath(s.dataDir, first), "utf8");
  assert.ok(!record.includes(BODY), "the description is not in the record");
  assert.equal(JSON.parse(record).verdict, "reject");
});

test("an unchanged input hash is not reviewed twice; quota counts calls", async () => {
  const s = setup(7);
  const r1 = await reviewChanges(s.items, s.dataDir, opts(s, fake((ref) => out(ref)).llm, 1));
  assert.deepEqual([r1.run.calls, r1.run.reviewed, r1.run.stopped], [1, 6, "quota"]);
  assert.equal(dueChanges(s.items, s.dataDir).length, 1);
  const again = fake((ref) => out(ref));
  await reviewChanges(s.items, s.dataDir, opts(s, again.llm));
  await reviewChanges(s.items, s.dataDir, opts(s, again.llm));
  assert.equal(again.reqs.length, 1, "only the one left over, once");
});
