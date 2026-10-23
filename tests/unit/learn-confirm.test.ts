import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdirSync, mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import type { Llm } from "../../pipeline/extract/video.js";
import { writeJson } from "../../pipeline/lib/fsx.js";
import {
  candidateIndex, candidatesFor, confirmLearnLinks, learnConfirmPath, loadLearnConfirm, MAX_PICKS, planConfirmCalls, validatePicks, words,
  type ConfirmUnit,
} from "../../pipeline/link/learn-confirm.js";
import { buildCrossLinks, loadCrossLinkInput } from "../../pipeline/link/crosslinks.js";

const COPY = "https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/tenant-admin-center-environments-copy";
const RESTORE = "https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/tenant-admin-center-backup-restore";
const SALES = "https://learn.microsoft.com/dynamics365/business-central/sales-invoice";

test("learn-confirm: words split CamelCase, drop stop words and fold plurals", () => {
  assert.deepEqual(words("OnClearCompanyConfig in the Environment Cleanup Subs"), ["clear", "company", "config", "environment", "cleanup", "subs"], "a four-letter word keeps its s");
});

test("learn-confirm: candidates share distinctive words; a page sharing one common word is not one", () => {
  const idx = candidateIndex([
    { url: COPY, title: "Copy an environment", summary: "Environment copy cleanup: what is cleared when a production environment is copied to a sandbox.", keywords: ["environment", "copy"] },
    { url: RESTORE, title: "Restoring an environment", summary: "Restore an environment from a backup point in time.", keywords: ["environment", "restore"] },
    { url: SALES, title: "Invoice sales", summary: "Post sales invoices to customers.", keywords: ["sales"] },
  ]);
  const c = candidatesFor(idx, 'Codeunit 1886 "Environment Cleanup". Events: OnClearCompanyConfig, OnClearDatabaseConfig', new Set(), 1);
  assert.equal(c[0]?.url, COPY);
  assert.ok(!c.some((d) => d.url === SALES));
  assert.deepEqual(candidatesFor(idx, "Environment", new Set(), 0).map((d) => d.url), [], "one shared word is not enough");
  assert.ok(!candidatesFor(idx, "Environment cleanup copy", new Set([COPY]), 0).some((d) => d.url === COPY), "a page already linked is no candidate");
});

const unit = (key: string, urls: string[]): ConfirmUnit => ({ kind: "object", key, title: key, text: key, hash: `h-${key}`, cands: urls.map((u, i) => ({ alias: `L${i + 1}`, url: u, title: u, summary: "" })) });

test("learn-confirm: calls share candidates under call-wide aliases; picks outside a unit's candidates are dropped", () => {
  const [c] = planConfirmCalls([unit("object/a", [COPY, RESTORE]), unit("object/b", [RESTORE, SALES])]);
  assert.deepEqual(c.cands.map((x) => x.alias), ["L1", "L2", "L3"]);
  assert.deepEqual(c.units[1].cands.map((x) => x.alias), ["L2", "L3"]);
  const { kept, rejected } = validatePicks(c, [
    { ref: "U1", page: "L1", reason: "documents what the copy clears" },
    { ref: "U2", page: "L1", reason: "not its candidate" },
    { ref: "U1", page: "L1", reason: "again" },
    { ref: "U1", page: "L2", reason: "x ".repeat(100) },
  ]);
  assert.deepEqual(kept.get("object/a")!.map((p) => p.url), [COPY, RESTORE]);
  assert.ok(kept.get("object/a")![1].reason.length <= 141);
  assert.deepEqual(kept.get("object/b"), []);
  assert.equal(rejected.length, 2);
  const many = validatePicks(planConfirmCalls([unit("object/a", [COPY, RESTORE, SALES])])[0], ["L1", "L2", "L3"].map((p) => ({ ref: "U1", page: p, reason: "r" })));
  assert.equal(many.kept.get("object/a")!.length, MAX_PICKS);
});

function root() {
  const r = mkdtempSync(join(tmpdir(), "bcobs-lc-"));
  const dataDir = join(r, "data"), contentDir = join(r, "content");
  const doc = (id: string, url: string, title: string, summary: string, keywords: string[]) => {
    writeJson(join(dataDir, "manifest", "docs", "learn-devitpro", `${id}.json`), { id: `docs/learn-devitpro/${id}.md`, url, title, meta: { keywords, identifiers: [] } });
    writeJson(join(dataDir, "extract", "docs", "learn-devitpro", `${id}.json`), { item_id: `docs/learn-devitpro/${id}.md`, url, title, summary, objects: [] });
  };
  doc("copy", COPY, "Copy an environment", "Environment copy cleanup: what is cleared when an environment is copied.", ["environment", "copy"]);
  doc("sales", SALES, "Invoice sales", "Post sales invoices.", ["sales"]);
  writeJson(join(dataDir, "index", "objects.json"), { rows: [["codeunit/1886", "codeunit", 1886, "Environment Cleanup", "System Application", "System.DataAdministration"]] });
  writeJson(join(dataDir, "index", "events.json"), { rows: [["codeunit/1886", "OnClearCompanyConfig", "integration", null, []]] });
  mkdirSync(join(contentDir, "changes", "bcapps"), { recursive: true });
  writeFileSync(join(contentDir, "changes", "bcapps", "1.md"), `---\nid: change/bcapps/1\ntype: change\ntitle: "#1 Clear more on environment copy cleanup"\nmerged_at: "2026-10-01T00:00:00Z"\nlinks:\n  objects:\n    - object/codeunit/1886\n---\n`);
  return { dataDir, contentDir };
}

test("learn-confirm: picks are written, rerun only when a unit's hash moves, and become model rows in the cross-links", async () => {
  const { dataDir, contentDir } = root();
  let calls = 0;
  const llm: Llm = async <T>(req: { prompt: string }) => {
    calls++;
    const items = JSON.parse(req.prompt.split("Items (JSON; each lists the page ids it may link to):\n")[1]) as { ref: string; pages: string[] }[];
    return { output: { picks: items.map((i) => ({ ref: i.ref, page: i.pages[0], reason: "documents what an environment copy clears" })) } as T, cached: false, meta: { cost_usd: 0.01 } as any };
  };
  const o = { quota: 100, deadline: new Date(Date.now() + 60_000), clock: () => new Date("2026-10-23T00:00:00Z"), llm, minScore: 0.5 };
  const { run } = await confirmLearnLinks(dataDir, contentDir, o);
  assert.equal(run.units, 2, "the change and the object it touched");
  assert.equal(calls, 1);
  const rec = loadLearnConfirm(dataDir);
  assert.equal(rec.units["object/codeunit/1886"].picks[0].url, COPY);
  await confirmLearnLinks(dataDir, contentDir, o);
  assert.equal(calls, 1, "unchanged hashes make no call");
  const { errors: _e, ...inp } = loadCrossLinkInput(dataDir, contentDir);
  const row = buildCrossLinks(inp).pages["object/codeunit/1886"].find((r) => r.to === COPY)!;
  assert.deepEqual([row.label, row.by], ["possibly related", "model"]);
  assert.ok(learnConfirmPath(dataDir).endsWith("links/learn-confirm.json"));
});

test("learn-confirm: the quota counts units, and a stopped run keeps the earlier records", async () => {
  const { dataDir, contentDir } = root();
  const llm: Llm = async <T>() => ({ output: { picks: [] } as T, cached: false, meta: { cost_usd: 0 } as any });
  const { run } = await confirmLearnLinks(dataDir, contentDir, { quota: 0, deadline: new Date(Date.now() + 60_000), clock: () => new Date("2026-10-23T00:00:00Z"), llm, minScore: 0.5 });
  assert.equal(run.stopped, "quota");
  assert.equal(run.calls, 0);
});
