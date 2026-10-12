import { test } from "node:test";
import assert from "node:assert/strict";
import { cpSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import {
  countryNumbers, coverageNumbers, deprecationNumbers, driftNumbers, eventNumbers, instrumentCards, neighbourNumbers, readInstruments,
  versionNumbers, type InstrumentInputs,
} from "../../site/src/lib/instruments.js";

const B = "/b/";
// the numbers of the spec's section 2.4 (data of bb3a37e016)
const REAL: InstrumentInputs = {
  version: { from: "29", to: "30", vnext: true, changed: 156, added: 27, removed: 2 },
  deprecations: { major: "29", count: 1225, due: 1055 },
  events: { major: "29", count: 26296, subscriptions: 5163 },
  neighbours: { major: "30", vnext: true, relations: 20561, objects: 8521 },
  countries: { countries: 22, areas: 38, replaced: 1878 },
  coverage: { empty: 15, cells: 100 },
  drift: { obsolete: 42, undocumented: 40 },
  week: { items: 6, changes: 35 },
};

test("the reductions: version pair, deprecations due, events, relations, countries, coverage, drift (D90)", () => {
  assert.deepEqual(versionNumbers({ from: { version: "29" }, to: { version: "30" }, summary: { by_change: { changed: { table: 35, codeunit: 121 }, added: { page: 27 }, removed: { codeunit: 2 } } } }, { "30": { vnext: true } }),
    { from: "29", to: "30", vnext: true, changed: 156, added: 27, removed: 2 });
  assert.deepEqual(deprecationNumbers({ count: 5, items: [{ clean_version: "25" }, { clean_version: "29" }, { clean_version: "30" }, { clean_version: null }, { clean_version: "27" }] }, "29"),
    { major: "29", count: 5, due: 3 });
  assert.deepEqual(eventNumbers({ major: "29", count: 26296, subscriptions: 5163, rows: [] }), { major: "29", count: 26296, subscriptions: 5163 });
  assert.deepEqual(neighbourNumbers({ major: "30", edges: [{ s: "table/18", t: "page/21" }, { s: "page/21", t: "table/36" }, { s: "table/18", t: "table/36" }] }, { "30": { vnext: true } }),
    { major: "30", vnext: true, relations: 3, objects: 3 });
  assert.deepEqual(countryNumbers({ areas: ["Sales", "Bank", "Unused"], countries: { be: { cells: { Sales: { replaced: 2, added: 1 }, Bank: { replaced: 0, added: 3 } } }, nl: { cells: { Sales: { replaced: 1, added: 0 } } } } }),
    { countries: 2, areas: 2, replaced: 3 });
  assert.deepEqual(coverageNumbers({ systems: ["finance", "sales"], pillars: ["learn", "videos"], counts: { finance: { learn: 609, videos: 0 }, sales: { learn: 0, videos: 22 } } }),
    { empty: 2, cells: 4 });
  assert.deepEqual(driftNumbers({ obsolete_documented: [{}, {}], new_undocumented: [{}], missing: [] }), { obsolete: 2, undocumented: 1 });
});

test("instrumentCards: the eight cards of section 2.4, exact", () => {
  assert.deepEqual(instrumentCards(REAL, B), [
    { id: "versions", name: "Version lens", value: "156", caption: "objects changed from BC29 to BC30 (vNext), 27 added, 2 removed", href: "/b/code/versions/" },
    { id: "deprecations", name: "Deprecation radar", value: "1,225", caption: "obsolete elements in BC29, 1,055 with their cleanup due", href: "/b/code/deprecations/" },
    { id: "events", name: "Event explorer", value: "26,296", caption: "published events in BC29, 5,163 first-party subscriptions", href: "/b/events/" },
    { id: "neighbourhood", name: "Neighbourhood explorer", value: "20,561", caption: "code relations between 8,521 objects in BC30 (vNext)", href: "/b/neighbourhood/" },
    { id: "countries", name: "Country heatmap", value: "1,878", caption: "W1 objects replaced by 22 country layers, across 38 areas of the code", href: "/b/localizations/#heat" },
    { id: "coverage", name: "Coverage heatmap", value: "15 of 100", caption: "galaxy system and pillar cells with nothing in them: no Learn page, AL object, video, post or roadmap feature", href: "/b/coverage/" },
    { id: "drift", name: "Learn drift", value: "42", caption: "obsolete objects Learn still documents; 40 new pages and reports without docs", href: "/b/drift/" },
    { id: "week", name: "This week", value: "6 new · 35 PRs", caption: "videos and posts, and merged pull requests, of the last 7 days; open them in the galaxy", href: "/b/#lens=landed" },
  ]);
});

test("instrumentCards: a missing input drops its card, an uncomputed week shows its items only, singulars read right", () => {
  const seven = instrumentCards({ ...REAL, events: null }, B);
  assert.equal(seven.length, 7);
  assert.ok(!seven.some((c) => c.name === "Event explorer"));
  assert.equal(instrumentCards({ ...REAL, week: { items: 6, changes: null } }, B).find((c) => c.id === "week")?.value, "6 new");
  assert.equal(instrumentCards({ ...REAL, week: { items: 1, changes: 1 } }, B).find((c) => c.id === "week")?.value, "1 new · 1 PR");
  assert.equal(instrumentCards({ ...REAL, version: { ...REAL.version!, changed: 1 } }, B)[0].caption, "object changed from BC29 to BC30 (vNext), 27 added, 2 removed");
  assert.equal(instrumentCards({ ...REAL, version: { ...REAL.version!, from: "28", to: "29", vnext: false } }, B)[0].caption, "objects changed from BC28 to BC29, 27 added, 2 removed");
  assert.equal(instrumentCards({ ...REAL, deprecations: { major: "29", count: 1, due: 1 } }, B)[1].caption, "obsolete element in BC29, 1 with its cleanup due");
  assert.equal(instrumentCards({ ...REAL, drift: { obsolete: 1, undocumented: 1 } }, B).find((c) => c.id === "drift")?.caption, "obsolete object Learn still documents; 1 new page or report without docs");
  assert.deepEqual(instrumentCards({ version: null, deprecations: null, events: null, neighbours: null, countries: null, coverage: null, drift: null, week: null }, B), []);
});

const VERSIONS = { narrative_order: ["29", "28", "30"], majors: { "30": { vnext: true } } };
const FIX = new URL("../fixtures/instruments/", import.meta.url).pathname;

test("readInstruments: the newest pair, the first narrative major with deprecations, the newest relations", () => {
  const got = readInstruments(FIX, VERSIONS);
  assert.deepEqual(got.version, { from: "29", to: "30", vnext: true, changed: 4, added: 1, removed: 1 });
  assert.deepEqual(got.deprecations, { major: "29", count: 3, due: 2 });
  assert.deepEqual(got.events, { major: "29", count: 3, subscriptions: 2 });
  assert.deepEqual(got.neighbours, { major: "30", vnext: true, relations: 3, objects: 3 });
  assert.deepEqual(got.countries, { countries: 2, areas: 2, replaced: 3 });
  assert.deepEqual(got.coverage, { empty: 1, cells: 4 });
  assert.deepEqual(got.drift, { obsolete: 1, undocumented: 2 });
  assert.deepEqual(got.week, { items: 2, changes: 3 });
  assert.equal(instrumentCards(got, B).length, 8);
  // the radar opens on the first narrative major that has a file
  assert.equal(readInstruments(FIX, { narrative_order: ["31", "28"], majors: {} }).deprecations?.major, "28");
});

test("readInstruments: a missing or broken file gives no card and never throws", () => {
  const tmp = mkdtempSync(join(tmpdir(), "bcobs-inst-"));
  try {
    cpSync(FIX, tmp, { recursive: true });
    rmSync(join(tmp, "index", "events.json"));
    rmSync(join(tmp, "graph", "landed.json"));
    writeFileSync(join(tmp, "index", "coverage.json"), "{ not json");
    const got = readInstruments(tmp, VERSIONS);
    assert.equal(got.events, null);
    assert.equal(got.week, null);
    assert.equal(got.coverage, null);
    assert.ok(got.version && got.drift);
    assert.equal(instrumentCards(got, B).length, 5);
    rmSync(join(tmp, "code"), { recursive: true });
    const bare = readInstruments(tmp, VERSIONS);
    assert.equal(bare.version, null);
    assert.equal(bare.deprecations, null);
    assert.equal(bare.neighbours, null);
  } finally {
    rmSync(tmp, { recursive: true, force: true });
  }
});

test("readInstruments: a week whose changes the pipeline has not computed yet (D81) has changes null", () => {
  const tmp = mkdtempSync(join(tmpdir(), "bcobs-inst-"));
  try {
    cpSync(FIX, tmp, { recursive: true });
    cpSync(join(FIX, "graph", "landed-uncomputed.json"), join(tmp, "graph", "landed.json"));
    assert.deepEqual(readInstruments(tmp, VERSIONS).week, { items: 2, changes: null });
  } finally {
    rmSync(tmp, { recursive: true, force: true });
  }
});
