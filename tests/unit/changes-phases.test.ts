/** D61 section 9: topic links for changes, the repository's source page, the weekly narrative, issues and releases. */
import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdirSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import matter from "gray-matter";
import type { LlmRequest } from "../../pipeline/lib/llm.js";
import type { Llm } from "../../pipeline/extract/video.js";
import { writeJson } from "../../pipeline/lib/fsx.js";
import { changeUnit, mediaByTopic, unitPageId, type TopicCandidate, type TopicLinks } from "../../pipeline/link/topics.js";
import { acceptNarrative, loadNarrative, narrateChangeWeeks } from "../../pipeline/summarize/changes-week.js";
import { renderSourcesAndCoverage } from "../../pipeline/render/source.js";
import { renderDigest } from "../../pipeline/render/digest.js";
import { renderChangeIndex } from "../../pipeline/render/change.js";
import { activityPath } from "../../pipeline/ingest/github-prs.js";

const now = new Date("2026-10-07T03:00:00Z");
const changePage = (n: number, o: Record<string, unknown> = {}) => `---\n${Object.entries({ id: `change/bcapps/${n}`, type: "change", title: `#${n} Change ${n}`, summary: `Summary of change ${n}.`, tier: "official", source_id: "bcapps-prs", repo: "microsoft/BCApps", number: n,
  merged_at: "2026-10-06T10:00:00Z", base_branch: "main", change_kind: "fix", behavior_change: n % 2 === 0, breaking: false, system: "finance", tags: ["fix"], objects_touched: [{ key: "table/3", page: "table/3", type: "table", id: 3, name: "Payment Terms", app: "Base Application", status: "modified" }], ...o })
  .map(([k, v]) => `${k}: ${JSON.stringify(v)}`).join("\n")}\n---\n\n# #${n}\n`;
function contentWith(pages: Record<string, string>) {
  const root = mkdtempSync(join(tmpdir(), "bcobs-chg9-"));
  for (const [p, text] of Object.entries(pages)) { mkdirSync(join(root, "content", p, ".."), { recursive: true }); writeFileSync(join(root, "content", p), text); }
  return { contentDir: join(root, "content"), dataDir: join(root, "data") };
}

test("topic units: a change is a unit with the join's systems, linked to its page id", () => {
  const cands: TopicCandidate[] = [{ id: "topic/finance/payment-terms", alias: "t1", title: "Payment terms", path: "Finance > Payment terms", system: "finance" }, { id: "topic/sales", alias: "t2", title: "Sales", path: "Sales", system: "sales" }];
  const u = changeUnit({ item_id: "change/bcapps-prs/101", number: 101, title: "Due dates", repo: "microsoft/BCApps", systems_joined: ["finance"], systems: ["sales"], summary: "Payment terms get due dates.", key_points: ["Adds a due date"], change_kind: "feature", behavior_change: true, breaking: false, obsoletions: [], quote: null, prompt_version: 1, llm: {} as any }, cands)!;
  assert.deepEqual([u.kind, u.key, u.cands.map((c) => c.id), u.title], ["change", "change/bcapps/101", ["topic/finance/payment-terms"], "#101 Due dates"]);
  assert.equal(unitPageId("change", u.key), "change/bcapps/101");
  const links: TopicLinks = { prompt_version: 2, units: { [u.key]: { kind: "change", key: u.key, hash: u.hash, title: u.title, source: "bcapps-prs", at: "x", matches: [{ topic: "topic/finance/payment-terms", quote: "get due dates" }] } } };
  assert.deepEqual(mediaByTopic(links).get("topic/finance/payment-terms"), [{ key: "change/bcapps/101", kind: "change", title: "#101 Due dates", quote: "get due dates" }]);
  assert.equal(changeUnit({ item_id: "x/y/1", number: 1, summary: "", key_points: [], systems: [] } as any, cands), null, "an extraction from before titles were stored is skipped");
});

test("the pull-request source gets a footprint page dated by merges", () => {
  const { contentDir, dataDir } = contentWith({ "changes/bcapps/101.md": changePage(101), "changes/bcapps/102.md": changePage(102, { merged_at: "2026-09-01T00:00:00Z" }) });
  renderSourcesAndCoverage(contentDir, dataDir, now);
  const fm = matter(readFileSync(join(contentDir, "sources/bcapps-prs.md"), "utf8"));
  assert.deepEqual([fm.data.kind, fm.data.item_count, fm.data.first_item, fm.data.last_item, fm.data.links.changes], ["github-pr", 2, "2026-09-01", "2026-10-06", ["change/bcapps/102", "change/bcapps/101"]]);
  assert.match(fm.data.summary, /2 code changes in the knowledge base/);
  assert.equal(fm.data.footprint.objects[0].id, "table Payment Terms");
});

test("weekly narrative: one Sonnet call, numbers validated, redone only when the week moves; the digest shows it", async () => {
  const pages = Object.fromEntries([101, 102, 103, 104].map((n) => [`changes/bcapps/${n}.md`, changePage(n)]));
  const { contentDir, dataDir } = contentWith(pages);
  const reqs: LlmRequest[] = [];
  const said = "Payment terms moved this week. #102 and #104 change behaviour for invoices, while #101 and #103 fix rounding. ".repeat(4);
  const llm: Llm = async <T>(r: LlmRequest) => { reqs.push(r); return { output: { text: said } as T, cached: false, meta: { model: "claude-sonnet", cost_usd: 0.05 } as any }; };
  assert.deepEqual(await narrateChangeWeeks(contentDir, dataDir, now, { quota: 1, llm }), { written: 1, rejected: 0, calls: 1 });
  assert.equal(reqs[0].role, "prose");
  assert.equal(loadNarrative(dataDir, "2026-W41")!.changes, 4);
  assert.deepEqual(await narrateChangeWeeks(contentDir, dataDir, now, { quota: 1, llm }), { written: 0, rejected: 0, calls: 0 }, "same week, same changes: no call");
  const d = renderDigest({ id: "2026-W41", start: "2026-10-05", end: "2026-10-11" }, { items: [], dataDir, contentDir, currentMajor: "30" }, now);
  assert.match(d.page, /## Code changes\n\nPayment terms moved this week\. #102[\s\S]*\(4 changes summarised by Sonnet/);
  assert.equal(acceptNarrative(`${said} See #999.`, new Set([101, 102, 103, 104])), null, "an invented number rejects the text");
  assert.equal(acceptNarrative("Too short.", new Set()), null);
});

test("activity: the index lists what is open and the releases; the digest lists the week's releases", () => {
  const { contentDir, dataDir } = contentWith({ "changes/bcapps/101.md": changePage(101) });
  writeJson(activityPath(dataDir, "microsoft/BCApps"), {
    open: [{ number: 300, title: "Add a field", url: "https://github.com/microsoft/BCApps/pull/300", base: "main", major: "30", author: "u", labels: [], draft: true, created_at: "2026-10-01T00:00:00Z", updated_at: "2026-10-06T00:00:00Z", community_contribution: false }],
    issues: [{ number: 7, title: "Posting fails", url: "https://github.com/microsoft/BCApps/issues/7", labels: ["bug"], author: "u", created_at: "2026-10-05T00:00:00Z", comments: 1 }],
    releases: [{ tag: "v30.0", name: "30.0", url: "https://github.com/microsoft/BCApps/releases/v30.0", published_at: "2026-10-06T00:00:00Z", prerelease: false }],
  });
  renderChangeIndex(contentDir, dataDir);
  const idx = readFileSync(join(contentDir, "changes/llms.txt"), "utf8");
  assert.match(idx, /## microsoft\/BCApps: upcoming[\s\S]*#300 Add a field\]\(https:\/\/github\.com\/microsoft\/BCApps\/pull\/300\) \(open into main, draft[\s\S]*Open issues:[\s\S]*#7 Posting fails[\s\S]*Releases:[\s\S]*\[30\.0\]/);
  const d = renderDigest({ id: "2026-W41", start: "2026-10-05", end: "2026-10-11" }, { items: [], dataDir, contentDir, currentMajor: "30" }, now);
  assert.match(d.page, /Releases:\n\n- \[microsoft\/BCApps 30\.0\]/);
});
