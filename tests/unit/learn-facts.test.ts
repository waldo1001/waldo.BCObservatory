import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import type { Llm } from "../../pipeline/extract/video.js";
import type { ManifestItem } from "../../pipeline/lib/manifest.js";
import { readJson } from "../../pipeline/lib/fsx.js";
import {
  clipFact, copiesPage, factLines, factsDue, FACT_MAX, inScope, keepFacts, learnFactsPath, loadLearnFacts, MAX_FACTS, refreshLearnFacts,
  type LearnFactsConfig, type LearnFactsRecord,
} from "../../pipeline/extract/learn-facts.js";
import { loadConfig } from "../../pipeline/lib/config.js";

const cfg: LearnFactsConfig = { rule: 1, paths: ["^dev-itpro/administration/", "^business-central/(admin-[a-z-]*fabric|fabric-)"] };
const BODY = "When you copy an environment, the job queue entries are set to on hold and the outgoing email is disabled so the copy cannot send anything to customers by accident after it starts.";
const item = (path: string, o: Partial<ManifestItem> = {}): ManifestItem => ({
  id: `docs/learn-devitpro/${path}`, pillar: "docs", source: "learn-devitpro", tier: "official", title: "Copy an environment",
  url: `https://learn.microsoft.com/dynamics365/business-central/${path.replace(/\.md$/, "")}`, published_at: null, language: "en", state: "published",
  stages: {}, attempts: 0, input_hash: "blob1", meta: { path, ms_topic: "how-to", ms_date: "2024-01-19" }, ...o,
} as ManifestItem);

test("learn facts: the committed config scopes administration and Fabric, and nothing else", () => {
  const c = loadConfig<LearnFactsConfig>("learn-facts");
  assert.ok(inScope(item("dev-itpro/administration/tenant-admin-center-environments-copy.md"), c));
  assert.ok(inScope(item("business-central/admin-set-up-fabric-mirroring.md", { source: "learn-smb-docs" }), c));
  assert.ok(inScope(item("business-central/fabric-faq.md", { source: "learn-smb-docs" }), c));
  assert.ok(!inScope(item("business-central/sales-invoice.md"), c));
  assert.ok(!inScope(item("dev-itpro/administration/api/x.md", { meta: { path: "dev-itpro/administration/api/x.md", ms_topic: "reference" } }), c), "generated reference pages are out");
});

test("learn facts: a fact copying twelve words of the page is dropped; long facts are clipped; at most eight", () => {
  assert.equal(copiesPage("The job queue entries are set to on hold and the outgoing email is disabled", BODY), true);
  assert.equal(copiesPage("Job queue entries go on hold and outgoing email is switched off in the copy.", BODY), false);
  const long = clipFact("word ".repeat(80));
  assert.ok(long.length <= FACT_MAX + 1 && long.endsWith("…"));
  const raw = [{ kind: "fact", text: "The job queue entries are set to on hold and the outgoing email is disabled so the copy" },
    ...Array.from({ length: 10 }, (_, i) => ({ kind: i === 0 ? "status" : "nonsense", text: `Fact number ${i} in our words.` })), { kind: "fact", text: "fact number 1 in our words." }];
  const { facts, dropped } = keepFacts(raw, BODY);
  assert.equal(dropped, 1);
  assert.equal(facts.length, MAX_FACTS);
  assert.equal(facts[0].kind, "status");
  assert.equal(facts[1].kind, "fact", "an unknown kind is a fact");
  assert.deepEqual(factLines([{ kind: "permission", text: "Needs the D365 ADMIN set." }]), ["  - Permissions: Needs the D365 ADMIN set."]);
});

test("learn facts: due pages get a record; an unchanged blob under the same rule is not due again; a quota holds", async () => {
  const dataDir = join(mkdtempSync(join(tmpdir(), "bcobs-lf-")), "data");
  const copy = item("dev-itpro/administration/tenant-admin-center-environments-copy.md");
  const restore = item("dev-itpro/administration/tenant-admin-center-backup-restore.md", { title: "Restore", input_hash: "blob2", meta: { path: "dev-itpro/administration/tenant-admin-center-backup-restore.md", ms_topic: "how-to", ms_date: "2025-01-01" } });
  const out = item("business-central/sales-invoice.md");
  let calls = 0;
  const llm: Llm = async <T>(req: { prompt: string }) => {
    calls++;
    const keys = [...req.prompt.matchAll(/### PAGE key=(\S+)/g)].map((m) => m[1]);
    return { output: { pages: keys.map((key) => ({ key, facts: [{ kind: "fact", text: "Job queue entries go on hold in the copy." }, { kind: "limit", text: "Outgoing email stays off until you turn it on." }] })) } as T, cached: false, meta: { model: "claude-haiku-4-5", cost_usd: 0.01 } as any };
  };
  const o = { dataDir, mirrorsDir: "", deadline: new Date(Date.now() + 60_000), clock: () => new Date(), llm, read: async () => BODY, cfg };
  const r1 = await refreshLearnFacts([copy, restore, out], { ...o, quota: 1 });
  assert.deepEqual([r1.due, r1.pages, r1.stopped], [2, 1, "quota"]);
  assert.ok(readJson<LearnFactsRecord>(learnFactsPath(dataDir, restore)).facts.length === 2, "the newest Learn date goes first");
  const r2 = await refreshLearnFacts([copy, restore, out], { ...o, quota: 10 });
  assert.deepEqual([r2.due, r2.pages], [1, 1]);
  assert.equal(factsDue(copy, dataDir, cfg), false);
  assert.equal(factsDue({ ...copy, input_hash: "blob9" }, dataDir, cfg), true, "a changed page is due again");
  assert.equal(factsDue(copy, dataDir, { ...cfg, rule: 2 }), true, "a new rule makes every page due");
  assert.equal(loadLearnFacts(dataDir).get(copy.url)?.[1].kind, "limit");
  assert.equal(calls, 2);
});

test("learn facts on a hub: nested under the article, one attribution line, certain cross-links as 'In the observatory'", async () => {
  const { renderTopics } = await import("../../pipeline/render/topic.js");
  const { writeJson: wj, writeText: wt } = await import("../../pipeline/lib/fsx.js");
  const { serializeCrossLinks, crossLinksPath } = await import("../../pipeline/link/crosslinks.js");
  const root = mkdtempSync(join(tmpdir(), "bcobs-lfhub-"));
  const dataDir = join(root, "data"), contentDir = join(root, "content");
  const copy = item("dev-itpro/administration/tenant-admin-center-environments-copy.md", { meta: { path: "dev-itpro/administration/tenant-admin-center-environments-copy.md", description: "Copy an environment." } });
  wj(learnFactsPath(dataDir, copy), { item_id: copy.id, url: copy.url, title: copy.title, blob: "blob1", rule: 1, prompt_version: 1, facts: [{ kind: "fact", text: "Job queue entries go on hold in the copy." }, { kind: "limit", text: "Outgoing email stays off." }], dropped: 0, llm: [] });
  wt(crossLinksPath(dataDir), serializeCrossLinks({ pages: {}, learn: { [copy.url]: [
    { to: "object/codeunit/1886", title: 'Codeunit 1886 "Environment Cleanup"', label: "documents", why: "w", by: "override" },
    { to: "change/bcapps/9", title: "#9 Something", label: "possibly related", why: "w", by: "code" },
  ] } }));
  const hub = { id: "topic/dev-itpro/administration/admin-center", title: "Admin center", toc: "dev-itpro/TOC.md", breadcrumb: [], parent: null, children: [], members: [copy.id], system: "administration", member_hash: "h".repeat(64) };
  renderTopics([hub], [copy], dataDir, contentDir, new Date("2026-10-23T00:00:00Z"));
  const page = (await import("node:fs")).readFileSync(join(contentDir, "topics/dev-itpro/administration/admin-center.md"), "utf8");
  assert.match(page, /environments-copy\): Copy an environment\.\n  - Job queue entries go on hold in the copy\.\n  - Limit: Outgoing email stays off\.\n  - In the observatory: \[Codeunit 1886 "Environment Cleanup"\]\(\.\.\/\.\.\/\.\.\/objects\/codeunit\/1886\.md\)\n/);
  assert.ok(!page.includes("#9 Something"), "only certain cross-links are listed under the article");
  assert.equal(page.split("Key facts from Microsoft Learn (CC BY 4.0)").length, 2);
});

test("learn facts index: one official-only file listed in the index manifest, registered with the leak gate", async () => {
  const { renderSearchIndex } = await import("../../pipeline/render/search.js");
  const { officialOnlyOutput } = await import("../../pipeline/validate/leak.js");
  const { writeJson: wj } = await import("../../pipeline/lib/fsx.js");
  const { mkdirSync, readFileSync } = await import("node:fs");
  const root = mkdtempSync(join(tmpdir(), "bcobs-lfidx-"));
  const dataDir = join(root, "data"), contentDir = join(root, "content");
  mkdirSync(contentDir, { recursive: true });
  const copy = item("dev-itpro/administration/tenant-admin-center-environments-copy.md");
  wj(learnFactsPath(dataDir, copy), { item_id: copy.id, url: copy.url, title: copy.title, blob: "blob1", rule: 1, prompt_version: 1, facts: [{ kind: "limit", text: "Outgoing email stays off." }], dropped: 0, llm: [] });
  const m = renderSearchIndex(contentDir, dataDir);
  assert.equal(m.learn_facts?.count, 1);
  assert.match(m.learn_facts!.file, /^learn-facts-[0-9a-f]{12}\.json$/);
  const doc = JSON.parse(readFileSync(join(dataDir, "index", m.learn_facts!.file), "utf8"));
  assert.deepEqual(doc.facts[copy.url], [["limit", "Outgoing email stays off."]]);
  assert.ok(officialOnlyOutput(`data/index/${m.learn_facts!.file}`));
  assert.ok(officialOnlyOutput("data/extract/learn-facts/learn-devitpro/x.json"));
  assert.ok(!officialOnlyOutput("data/extract/blog/x/1.json"));
});
