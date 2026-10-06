import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import matter from "gray-matter";
import { writeJson } from "../../pipeline/lib/fsx.js";
import type { LlmRequest } from "../../pipeline/lib/llm.js";
import type { ManifestItem } from "../../pipeline/lib/manifest.js";
import { validate } from "../../pipeline/lib/schema.js";
import { docExtractionPath } from "../../pipeline/extract/docs.js";
import type { Llm } from "../../pipeline/extract/video.js";
import { loadLocalizationNarrative, refreshLocalizationNarratives } from "../../pipeline/summarize/localization.js";
import { renderLocalizationPage } from "../../pipeline/render/object.js";

const doc = (k: string): ManifestItem => ({ id: `docs/learn-smb-docs/business-central/LocalFunctionality/Belgium/${k}.md`, pillar: "docs", source: "learn-smb-docs", tier: "official", title: k, url: `https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Belgium/${k}`, state: "published", stages: {}, attempts: 0 });
const diff = { schema: "al-diff@1", kind: "country", from: { version: "29", country: "w1", commit: "c" }, to: { version: "29", country: "be", commit: "c" },
  summary: { objects: 2, fields_added: 1, events_added: 0 }, objects: [{ key: "table/11300", name: "CODA Statement", change: "added" }, { key: "table/18", name: "Customer", change: "replaced", fields: [{ id: "11300", name: "Enterprise No.", change: "added" }] }] };

test("narratives wait for 80% of the Learn pages, then write once per input; the page shows them", async () => {
  const dataDir = join(mkdtempSync(join(tmpdir(), "bcobs-locnarr-")), "data");
  writeJson(join(dataDir, "code/diffs/country/29-be.json"), diff);
  const docs = ["coda", "vat", "intrastat", "reports", "setup"].map(doc);
  const extract = (k: string) => writeJson(docExtractionPath(dataDir, doc(k)), { item_id: doc(k).id, url: doc(k).url, title: `Belgian ${k}`, blob: "b", summary: `How ${k} works in Belgium.`, systems: ["finance"], topics: [], objects: [], features: [], versions: [], parts: 1, prompt_version: 1, llm: [] });
  extract("coda"); extract("vat"); extract("intrastat");
  const reqs: LlmRequest[] = [];
  const llm: Llm = async <T>(r: LlmRequest) => { reqs.push(r); return { output: { summary: "Belgium — CODA bank statements and VAT.", overview: "o", key_points: ["k1", "k2", "k3"], areas: [{ area: "(no namespace)", what: "Belgian CODA statements and the enterprise number on customers.", why: "Belgian banks deliver CODA files.", objects: ["table/11300", "table/18"] }] } as T, cached: false, meta: { model: "claude-sonnet-5-5", cost_usd: 0.03 } as any }; };
  const o = { deadline: new Date("2099-01-01"), clock: () => new Date("2026-10-07T00:00:00Z"), llm, countries: ["BE"] };
  const r1 = await refreshLocalizationNarratives(dataDir, docs, o);
  assert.deepEqual([r1.ready, r1.waiting], [0, ["be (3/5 Learn pages extracted)"]]);
  extract("reports");
  const r2 = await refreshLocalizationNarratives(dataDir, docs, o);
  assert.deepEqual([r2.ready, r2.refreshed, reqs.length, reqs[0].role], [1, 1, 1, "prose"]);
  assert.ok(reqs[0].prompt.includes('table/11300 "CODA Statement"') && reqs[0].prompt.includes("Enterprise No.") && reqs[0].prompt.includes("How coda works in Belgium."));
  assert.equal((await refreshLocalizationNarratives(dataDir, docs, o)).refreshed, 0, "unchanged inputs");
  const n = loadLocalizationNarrative(dataDir, "be")!;
  assert.equal(n.summary, "Belgium - CODA bank statements and VAT.");
  const page = matter(renderLocalizationPage("be", diff as any, [], () => null, null, new Date(), n));
  assert.ok(validate("frontmatter.localization", page.data).ok);
  assert.equal(page.data.summary, n.summary);
  assert.match(page.content, /## Overview[\s\S]*## Key points[\s\S]*- k1/);
  assert.match(page.content, /### \(no namespace\)\n\nBelgian CODA statements[\s\S]*Why: Belgian banks deliver CODA files\.[\s\S]*Objects: table\/11300 "CODA Statement" \(own\), table\/18 "Customer"\.[\s\S]*\[All 2 objects of \(no namespace\) in the diff\]\(\?ns=\(no%20namespace\)#country-diff\)/);
  assert.ok(reqs[0].prompt.includes("By area (JSON"));
  assert.deepEqual((reqs[0].schema as any).properties.areas.items.properties.area.enum, ["(no namespace)"]);
  assert.match(page.content, /narrative \*\*unreviewed\*\*/);
});
