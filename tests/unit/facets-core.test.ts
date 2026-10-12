import { test } from "node:test";
import assert from "node:assert/strict";
import {
  facetCounts, facetSummary, filterRows, foldFacet, isAllOn, listSearch, readListState, rescueState, slug, type Facet, type FacetDef, type ListState, type Switch,
} from "../../site/src/scripts/facets-core.js";

// D91 C2: the filter engine of the list pages and the features table; pure, no DOM
type Row = { path: string; status: string; major?: string; breaking?: boolean };
const rows: Row[] = [
  { path: "changes/bcapps/3", status: "fix", major: "30" },
  { path: "changes/bcapps/2", status: "feature", major: "30", breaking: true },
  { path: "changes/bcapps/1", status: "fix", major: "29" },
  { path: "changes/al-go/9", status: "feature" },
  { path: "changes/bcquality/5", status: "breaking", breaking: true },
  { path: "changes/bcquality/4", status: "other" },
];
const facets: Facet<Row>[] = [{ id: "repo", value: (r) => r.path.split("/")[1] }, { id: "kind", value: (r) => r.status }, { id: "major", value: (r) => r.major ?? "none" }];
const switches: Switch<Row>[] = [{ id: "breaking", test: (r) => !!r.breaking || r.status === "breaking" }];
const defs: FacetDef[] = [{ id: "repo", values: ["bcapps", "al-go", "bcquality"] }, { id: "kind", values: ["breaking", "feature", "fix", "other", "refactor"] }, { id: "major", values: ["30", "29", "none"] }];
const st = (q: string) => readListState(q, defs, ["breaking"]);
const sorted = (s: Set<string>) => [...s].sort().join(",");
const paths = (rs: Row[]) => rs.map((r) => r.path.replace(/^changes\//, ""));
/** A state as plain data, for deepEqual. */
const plain = (s: ListState) => ({ on: Object.fromEntries(Object.entries(s.on).map(([k, v]) => [k, sorted(v)])), sw: sorted(s.sw) });

test("isAllOn: every facet full and no switch pressed", () => {
  assert.deepEqual([isAllOn(st(""), defs), isAllOn(st("?repo=al-go"), defs), isAllOn(st("?breaking=1"), defs)], [true, false, false]);
});

test("filterRows and facetCounts with everything on", () => {
  assert.equal(filterRows(rows, facets, switches, st("")).length, 6);
  assert.deepEqual(facetCounts(rows, facets, switches, st("")), {
    facets: { repo: { bcapps: 3, "al-go": 1, bcquality: 2 }, kind: { fix: 2, feature: 2, breaking: 1, other: 1 }, major: { 30: 2, 29: 1, none: 3 } },
    switches: { breaking: 2 },
  });
});

test("a facet's counts ignore its own facet and follow the others and the switch", () => {
  assert.deepEqual(paths(filterRows(rows, facets, switches, st("?repo=bcapps"))), ["bcapps/3", "bcapps/2", "bcapps/1"]);
  assert.deepEqual(facetCounts(rows, facets, switches, st("?repo=bcapps")), {
    facets: { repo: { bcapps: 3, "al-go": 1, bcquality: 2 }, kind: { fix: 2, feature: 1 }, major: { 30: 2, 29: 1 } },
    switches: { breaking: 1 },
  });
  assert.deepEqual(paths(filterRows(rows, facets, switches, st("?breaking=1"))), ["bcapps/2", "bcquality/5"]);
  const c = facetCounts(rows, facets, switches, st("?breaking=1"));
  assert.deepEqual(c.facets.repo, { bcapps: 1, bcquality: 1 });
  assert.deepEqual(c.facets.kind, { feature: 1, breaking: 1 });
  assert.deepEqual(c.switches, { breaking: 2 });
});

test("readListState: unknown values dropped, other parameters ignored, a switch only for 1", () => {
  assert.deepEqual(plain(st("?repo=al-go,nope&kind=fix&breaking=1&q=x")), { on: { repo: "al-go", kind: "fix", major: "29,30,none" }, sw: "breaking" });
  assert.equal(st("?breaking=yes").sw.size, 0);
  assert.equal(st("?breaking=0").sw.size, 0);
});

test("listSearch: other parameters kept, values in pill order with readable commas, nothing when all on", () => {
  const some: ListState = { ...st(""), on: { ...st("").on, repo: new Set(["bcquality", "al-go"]) } };
  assert.equal(listSearch("?q=x", some, defs, ["breaking"]), "?q=x&repo=al-go,bcquality");
  assert.equal(listSearch("?q=x&repo=al-go", st(""), defs, ["breaking"]), "?q=x");
  assert.equal(listSearch("", st(""), defs, ["breaking"]), "");
  assert.equal(listSearch("", st("?breaking=1"), defs, ["breaking"]), "?breaking=1");
});

test("rescueState: a facet with nothing behind it comes back on; a combination with no rows comes back all on", () => {
  assert.deepEqual(plain(rescueState(rows, facets, switches, st("?repo=al-go&kind=breaking"), defs)), plain(st("")));
  assert.deepEqual(plain(rescueState(rows, facets, switches, st("?repo=al-go&breaking=1"), defs)), plain(st("")));
  assert.deepEqual(plain(rescueState(rows, facets, switches, st("?repo=al-go"), defs)), plain(st("?repo=al-go")));
  assert.deepEqual(plain(rescueState(rows, facets, switches, st("?kind=refactor"), defs)), plain(st("")), "no row has refactor: D82's usablePills");
});

const BLOGS = [
  ["demiliani-com", "Stefano Demiliani"], ["aardvarklabs-blog", "Aardvark Labs"], ["gerardorenteria-blog", "Gerardo Renteria"], ["thatnavguy-com", "That NAV Guy"],
  ["thinkaboutit-be", "think about IT - Steven Renders"], ["stefanmaron-com", "Stefan Maron"], ["sauravdhyani-com", "Saurav Dhyani"], ["mohana-blog", "Mohana's Dynamics NAV & BC blog"],
  ["duiliotacconi-com", "Duilio Tacconi"], ["dvlprlife-com", "DvlprLife"], ["thedynamicsexplorer-com", "The Dynamics Explorer"], ["waldo-be", "waldo's blog"],
  ["bertverbeek-nl", "Discover MS BC - Bert Verbeek"], ["freddysblog", "Freddys blog"], ["olofsimren-com", "Olof Simren"], ["jpearson-blog", "James Pearson"],
  ["tine-staric-net", "Tech Adventures in Business Central"], ["vondervoort-be", "Vondervoort.be"], ["katson-com", "Katson.com"], ["kauffmann-nl", "Kauffmann @ Dynamics 365 Business Central"], ["kine-cz", "Kine's info"],
].map(([id, label]) => ({ id, label }));
const CHANNELS = [
  ["yt-microsoft", "Microsoft Dynamics 365 Business Central (YouTube)"], ["yt-areopa", "Areopa webinars"], ["yt-hougaard", "Erik Hougaard"], ["yt-mibuso", "mibuso.com / BC TechDays"],
  ["yt-saurav", "Saurav Dhyani"], ["yt-dynamicscorner", "Dynamics Corner podcast"], ["yt-bcmusings", "Business Central Musings"], ["yt-stefanmaron", "Stefan Maron"],
].map(([id, label]) => ({ id, label }));

test("foldFacet: more than 8 values or more than 120 characters of labels", () => {
  assert.equal(BLOGS.length, 21);
  assert.equal(foldFacet(BLOGS.map((b) => b.label)), true);
  assert.equal(CHANNELS.map((c) => c.label).join("").length, 173);
  assert.equal(foldFacet(CHANNELS.map((c) => c.label)), true);
  assert.equal(foldFacet(["breaking", "feature", "fix", "obsoletion", "other", "performance", "refactor"]), false);
  assert.equal(foldFacet(["2026", "2025"]), false);
  assert.equal(foldFacet("abcdefgh".split("")), false);
  assert.equal(foldFacet("abcdefghi".split("")), true);
});

test("facetSummary: the fold's summary carries the facet's state", () => {
  assert.equal(facetSummary("Blog", new Set(["demiliani-com"]), BLOGS), "Blog · Stefano Demiliani");
  assert.equal(facetSummary("Blog", new Set(BLOGS.map((b) => b.id)), BLOGS), "Blog · all 21");
  assert.equal(facetSummary("Channel", new Set(["yt-areopa", "yt-hougaard", "yt-mibuso"]), CHANNELS), "Channel · 3 of 8");
});

test("slug: the URL id of a wave or an area", () => {
  assert.deepEqual([slug("2026 release wave 2"), slug("Reporting and data analysis")], ["2026-release-wave-2", "reporting-and-data-analysis"]);
  assert.deepEqual([slug("E-Documents"), slug("Copilot & agents"), slug("Sustainabilty Management")], ["e-documents", "copilot-agents", "sustainabilty-management"]);
});
