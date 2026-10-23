import { test } from "node:test";
import assert from "node:assert/strict";
import type { PageRecord, SearchRecord } from "@bc-observatory/search";
import { brief, plainLinks, type BriefDeps } from "../../packages/mcp/src/brief.js";

const COPY = "https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/tenant-admin-center-environments-copy";
const FABRIC = "https://learn.microsoft.com/dynamics365/business-central/admin-set-up-fabric-mirroring";
const rec = (path: string, type: string, title: string, summary: string, o: Partial<PageRecord> = {}): PageRecord => ({ path, type, title, summary, tier: type === "post" ? "community" : "official", ...o });
const pages: Record<string, PageRecord> = {
  "objects/codeunit/1886": rec("objects/codeunit/1886", "object", 'Codeunit 1886 "Environment Cleanup"', "2 events."),
  "changes/bcapps/12152": rec("changes/bcapps/12152", "change", "#12152 [MCP] Clear environment description after environment copy", "#12152 [MCP] Clear environment description after environment copy (merged into main on 2026-09-30).", { date: "2026-09-30" }),
  "videos/kOCiyVql0go": rec("videos/kOCiyVql0go", "video", "Introducing: Business Central Integration with Microsoft Fabric", "Fabric mirroring."),
};
const md: Record<string, string> = {
  "objects/codeunit/1886": `---\nid: object/codeunit/1886\n---\n\n# Codeunit 1886\n\n## Linked pages\n\n- [Copy an environment](${COPY}) — documents: the cleanup events run when an environment is copied (checked by hand)\n\n## Possibly related\n\nNo source states these links.\n\n- [#13005 \\[Master Data Management\\] Cleanup](../../changes/bcapps/13005.md) — possibly related: touches Codeunit 7237 (checked by hand)\n\n## Recent changes\n\n- 2026-10-20 [#13005 Cleanup when copying environment](../../changes/bcapps/13005.md) (main, BC30, fix)\n\n## Heads up (community)\n\n- warning: "copies keep their job queue" — [A post](../../posts/x/1.md), applies to Codeunit 1886 "Environment Cleanup"\n`,
  "changes/bcapps/12152": "---\nid: change/bcapps/12152\n---\n\n# #12152\n\n## What changed\n\n- Clears the description.\n",
  "videos/kOCiyVql0go": "---\nid: video/kOCiyVql0go\n---\n\n# Fabric\n\n## Disclaimers in the video\n\n- [0:19](https://www.youtube.com/watch?v=kOCiyVql0go&t=19s) preview: this is coming in public preview in version 29.x, likely 29.1\n",
};
const hit = (r: PageRecord): SearchRecord => ({ kind: "page", page: r, id: r.path, type: r.type, title: r.title } as unknown as SearchRecord);
const deps = (hits: PageRecord[], facts: Record<string, [string, string][]> = {}): BriefDeps => ({
  hits: () => hits.map(hit), record: (p) => pages[p], page: async (p) => md[p] ?? null, learnFacts: async () => new Map(Object.entries(facts)),
});
const learnRec = (url: string, title: string) => ({ path: url, type: "learn", title, summary: "", tier: "official" }) as PageRecord;

test("brief: five layers in order, Learn with its key facts, every line with tier and source", async () => {
  const out = await brief({ query: "environment copy cleanup" }, deps([learnRec(COPY, "Copy an environment"), pages["objects/codeunit/1886"], pages["changes/bcapps/12152"]], { [COPY]: [["fact", "Job queue entries go on hold."], ["limit", "Outgoing email stays off."]] }));
  const heads = out.split("\n").filter((l) => l.startsWith("## "));
  assert.deepEqual(heads, ["## How it works (Learn)", "## In the code", "## Changed lately", "## Heads up", "## Gaps"]);
  assert.match(out, new RegExp(`- Copy an environment \\[official, ${COPY.replace(/[.?]/g, "\\$&")}\\]\\n  - Job queue entries go on hold\\.\\n  - limit: Outgoing email stays off\\.`));
  assert.match(out, /## In the code\n- Codeunit 1886 "Environment Cleanup": 2 events\. \[official, objects\/codeunit\/1886\]/);
  assert.match(out, /- 2026-10-20 #13005 Cleanup when copying environment \(changes\/bcapps\/13005\) \(main, BC30, fix\) \(on objects\/codeunit\/1886\)/);
  assert.match(out, /- warning: "copies keep their job queue" — A post \(posts\/x\/1\), applies to Codeunit 1886 "Environment Cleanup" \[community, from objects\/codeunit\/1886\]/);
  for (const l of out.split("\n").filter((x) => /^- /.test(x) && !/^- \(no /.test(x))) assert.match(l, /\[(official|community)|\((on|from) [a-z]+\/|Not stated by any source|title only/, l);
});

test("brief: every possibly related row is a gap, and a change described by its title only says so", async () => {
  const out = await brief({ query: "environment copy cleanup" }, deps([pages["objects/codeunit/1886"], pages["changes/bcapps/12152"]]));
  assert.match(out, /## Gaps\n- Not stated by any source: #13005 \[Master Data Management\] Cleanup \(changes\/bcapps\/13005\) — possibly related: touches Codeunit 7237 \(checked by hand\) \(on objects\/codeunit\/1886\)/);
  assert.match(out, /- #12152 \[MCP\] Clear environment description after environment copy: the pull request describes itself by its title only \[official, changes\/bcapps\/12152\]/);
  assert.match(out, /- Copy an environment \[official, https:\/\/learn[^\]]+\] \(linked from objects\/codeunit\/1886\)/, "a Learn page the object links to reaches the Learn layer");
});

test("brief: status statements from two sources stand side by side, never reconciled", async () => {
  const out = await brief({ query: "fabric mirroring status" }, deps([learnRec(FABRIC, "Set up Business Central data mirroring to Microsoft Fabric"), pages["videos/kOCiyVql0go"]], { [FABRIC]: [["status", "Production-ready preview from October 2026."]] }));
  assert.match(out, /## Status statements, side by side \(not resolved\)\n- Learn, Set up Business Central data mirroring to Microsoft Fabric: Production-ready preview from October 2026\. \[official, https:[^\]]+\]\n- Introducing: Business Central Integration with Microsoft Fabric: 0:19 <https:[^>]+> preview: this is coming in public preview in version 29\.x, likely 29\.1 \[official, videos\/kOCiyVql0go\]/);
  const one = await brief({ query: "fabric mirroring status" }, deps([pages["videos/kOCiyVql0go"]]));
  assert.doesNotMatch(one, /side by side/, "one source is no conflict");
});

test("brief: a path starts from that page; nothing found says so; links read as paths", async () => {
  assert.match(await brief({ path: "objects/codeunit/1886" }, deps([])), /^# Brief: objects\/codeunit\/1886/);
  assert.match(await brief({ path: "objects/nope" }, deps([])), /No page at objects\/nope/);
  assert.match(await brief({ query: "zzz" }, deps([])), /Nothing found for "zzz"/);
  assert.equal(plainLinks("- [Table 18 \\[x\\]](../../objects/table/18.md#field-3) and [Learn](https://learn.microsoft.com/a)"), "- Table 18 [x] (objects/table/18#field-3) and Learn <https://learn.microsoft.com/a>");
});

test("brief: a linked title with brackets inside reads as a path", () => {
  assert.equal(plainLinks("- 2026-10-08 [#12195 [Fabric] Exclude tables](../../changes/bcapps/12195.md) (main)"), "- 2026-10-08 #12195 [Fabric] Exclude tables (changes/bcapps/12195) (main)");
});
