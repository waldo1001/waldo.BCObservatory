import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdirSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import matter from "gray-matter";
import { parseUpdateIndex, parseUpdatePage, type HotfixSnapshot } from "../../pipeline/ingest/support-updates.js";
import { objectsNamed, renderHotfixIndex, renderHotfixPage } from "../../pipeline/render/hotfix.js";
import { objectIndexFromRows } from "../../pipeline/link/mentions.js";
import { buildCrossLinks } from "../../pipeline/link/crosslinks.js";
import { officialOnlyOutput } from "../../pipeline/validate/leak.js";
import { validate } from "../../pipeline/lib/schema.js";
import { writeJson } from "../../pipeline/lib/fsx.js";
import { loadSources } from "../../pipeline/lib/config.js";

const FX = resolve(import.meta.dirname, "../fixtures");
const INDEX = "https://support.microsoft.com/en-us/servicing/dynamics/business-central/released-updates-for-microsoft-dynamics-365-business-central-2026-release-wave-1";

test("support updates: the index yields every update with its KB number and month; relative links resolve", () => {
  const links = parseUpdateIndex(readFileSync(join(FX, "support-updates-index.html"), "utf8"), INDEX);
  assert.deepEqual(links.map((l) => l.update), ["28.6", "28.5", "28.4", "28.1"]);
  assert.deepEqual([links[0].kb, links[0].month], ["5130861", "2026-10"]);
  assert.match(links[0].url, /^https:\/\/support\.microsoft\.com\/en-us\/servicing\/dynamics\/business-central\/update\/2026\/10\/update-28-6-/);
  assert.match(links[3].url, /^https:\/\/support\.microsoft\.com\/en-us\/servicing\/dynamics\/business-central\/update\/2026\/04\/update-28-1-/);
});

test("support updates: the 28.6 page parses into entries with group, area and country; 648146 is a Finance application hotfix", () => {
  const p = parseUpdatePage(readFileSync(join(FX, "support-update-28-6.html"), "utf8"));
  assert.equal(p.application_build, "28.6.55443");
  assert.equal(p.platform_build, "28.0.55350");
  assert.equal(p.entries.length, 69, "81 rows minus 12 table headers");
  const e = p.entries.find((x) => x.id === "648146")!;
  assert.deepEqual(e, { id: "648146", title: "Revert a previous behavior change, restoring the original calculation logic for Purchase Invoice lines of type G/L Account.", area: "Finance", group: "application", country: null });
  assert.equal(p.entries.find((x) => x.id === "648450")?.group, "platform");
  assert.equal(p.entries.find((x) => x.id === "648450")?.area, null);
  assert.ok(p.entries.some((x) => x.group === "local" && x.country === "DE"));
  assert.throws(() => parseUpdatePage("<html><h1>x</h1></html>"), /Problems that are resolved/);
});

test("support updates: sources.yaml carries the source with 28.4 to 28.6 and validates", () => {
  const s = loadSources().find((x) => x.id === "ms-support-updates")!;
  assert.equal(s.kind, "support-updates");
  assert.equal(s.tier, "official");
  assert.deepEqual(s.fetch?.updates, ["28.4", "28.5", "28.6"]);
});

const snap = (): HotfixSnapshot => {
  const p = parseUpdatePage(readFileSync(join(FX, "support-update-28-6.html"), "utf8"));
  return { schema: "bcobs-hotfix@1", update: "28.6", major: "28", kb: "5130861", url: "https://support.microsoft.com/x", month: "2026-10", application_build: p.application_build, platform_build: p.platform_build, title: p.title, fetched_at: "2026-10-23T00:00:00Z", entries: p.entries };
};

test("hotfix page: rows anchored by ID, fixes by work item, possibly related by exact object name and type word", () => {
  const index = objectIndexFromRows([["page/118", "page", 118, "General Ledger Setup", "Base Application"]]);
  assert.deepEqual(objectsNamed("Hide the ‘Show Currency’ fields on the General Ledger Setup page to prevent errors.", index), ["object/page/118"]);
  const page = renderHotfixPage(snap(), { byWorkItem: new Map([["648146", [{ id: "change/bcapps/12000", title: "#12000 Revert purchase invoice calculation" }]]]), index }, new Date("2026-10-23T00:00:00Z"));
  const { data, content } = matter(page);
  const v = validate("frontmatter.hotfix", data);
  assert.equal(v.ok, true, v.errors.join("; "));
  assert.deepEqual(data.links.changes, ["change/bcapps/12000"]);
  assert.equal(data.entry_ids.length, 69);
  assert.match(content, /\| <a id="648146"><\/a>648146 \| Revert a previous behavior change, restoring the original calculation logic for Purchase Invoice lines of type G\/L Account\. \| Finance \| fixes \[#12000\]\(\.\.\/changes\/bcapps\/12000\.md\) \|/);
  assert.match(content, /possibly related \[Page 118 "General Ledger Setup"\]\(\.\.\/objects\/page\/118\.md\)/);
  assert.equal(data.links.related[0].label, "possibly related");
  assert.match(content, /^## Platform hotfixes$/m);
  assert.match(content, /^### DE$/m);
});

test("hotfix entries: a change whose work item is an entry's ID gets a certain fixes row to the anchored entry", () => {
  const r = buildCrossLinks({
    learn: [], documented: new Map(), objects: objectIndexFromRows([]), eventOwners: new Map(), titles: new Map(), media: [], overrides: [], model: [],
    changes: [{ id: "change/bcapps/12000", title: "#12000 x", objects: [], work_items: ["648146"] }],
    hotfixes: [{ update: "28.6", id: "648146", title: "Revert a previous behavior change" }],
  });
  assert.deepEqual(r.pages["change/bcapps/12000"][0], { to: "hotfix/28.6#648146", title: "Update 28.6, 648146: Revert a previous behavior change", label: "fixes", why: "work item 648146", by: "code" });
});

test("hotfix index and leak gate: llms.txt lists the updates; snapshots, pages and fixtures are official-only", () => {
  const root = mkdtempSync(join(tmpdir(), "bcobs-hf-"));
  const dataDir = join(root, "data"), contentDir = join(root, "content");
  writeJson(join(dataDir, "hotfixes", "28", "28.6.json"), snap());
  mkdirSync(join(contentDir, "hotfixes"), { recursive: true });
  writeFileSync(join(contentDir, "hotfixes", "28.6.md"), renderHotfixPage(snap(), { byWorkItem: new Map(), index: null }, new Date()));
  assert.equal(renderHotfixIndex(contentDir, dataDir), 1);
  assert.match(readFileSync(join(contentDir, "hotfixes", "llms.txt"), "utf8"), /- \[Update 28\.6\]\(28\.6\.md\): 69 entries, 2026-10, application build 28\.6\.55443/);
  for (const p of ["data/hotfixes/28/28.6.json", "content/hotfixes/28.6.md", "tests/fixtures/support-update-28-6.html", "tests/fixtures/support-updates-index.html"]) assert.ok(officialOnlyOutput(p), p);
});

test("support updates: official only on support.microsoft.com", async () => {
  const { validateSourcesDoc } = await import("../../pipeline/validate/sources.js");
  const s = { id: "ms-support-updates", kind: "support-updates", name: "Support updates", url: INDEX, tier: "official", full_text: false, language: "en", fetch: { updates: ["28.6"] }, backfill: { all: true }, enabled: true } as any;
  const doc = (x: any) => ({ version: 1, sources: [x] }) as any;
  assert.deepEqual(validateSourcesDoc(doc(s), [s]).errors, []);
  const other = { ...s, url: "https://example.com/updates" };
  assert.ok(validateSourcesDoc(doc(other), [other]).errors.some((e) => /reserved for Microsoft/.test(e)));
});
