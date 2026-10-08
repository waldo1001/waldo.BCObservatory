import { test } from "node:test";
import assert from "node:assert/strict";
import { codeGroup, groupChanges, kindsParam, landedRingsOn, legendItems, mediaMeta, parseHash, parseKinds, pickerRows, pillDisabled, portSpot, sortRows, starIntro, toggleKind, usableKinds, versionMenu, weekPills } from "../../site/src/scripts/galaxy-core.js";

test("galaxy hash: combined keys, the old single-key form, unknown keys dropped", () => {
  assert.deepEqual([...parseHash("#system=finance&lens=version%3A30")], [["system", "finance"], ["lens", "version:30"]]);
  assert.deepEqual([...parseHash("#star=object%2Ftable%2F18")], [["star", "object/table/18"]]);
  assert.deepEqual([...parseHash("#evil=1&view=list")], [["view", "list"]]);
  assert.equal(parseHash("").size, 0);
});

test("ports sit on the rectangle's edge in the target's direction", () => {
  const r = { x0: 0, y0: 0, x1: 100, y1: 50 };
  assert.deepEqual(portSpot({ x: 50, y: 25 }, { x: 500, y: 25 }, r), { x: 100, y: 25 });
  assert.deepEqual(portSpot({ x: 50, y: 25 }, { x: 50, y: -400 }, r), { x: 50, y: 0 });
  assert.deepEqual(portSpot({ x: 50, y: 25 }, { x: 60, y: 25 }, r), { x: 100, y: 25 }, "a target inside still gets an edge port");
});

test("list view sort: numbers highest first, names A to Z, ties stable", () => {
  const rows = [
    { id: "b", label: "Table 2", type: "object", group: "sales", weight: 5, ev: 1, cv: ["29"] },
    { id: "a", label: "Table 10", type: "object", group: "finance", weight: 9 },
    { id: "c", label: "GL hub", type: "topic", group: "finance", weight: 5, ev: 7, cv: ["30"] },
  ];
  assert.deepEqual(sortRows(rows, "connections").map((r) => r.id), ["a", "c", "b"]);
  assert.deepEqual(sortRows(rows, "star").map((r) => r.id), ["c", "b", "a"]);
  assert.deepEqual(sortRows(rows, "evidence").map((r) => r.id), ["c", "b", "a"]);
  assert.deepEqual(sortRows(rows, "changed").map((r) => r.id), ["c", "b", "a"]);
});

test("landed rings draw only under the this-week lens (D71)", () => {
  assert.equal(landedRingsOn("landed"), true);
  for (const id of ["version:30", "q:sift", "type:topic", "", null, undefined]) assert.equal(landedRingsOn(id), false, String(id));
});

test("versionMenu: newest first, remembered = active ?? newest, vNext from config, title falls back (D72)", () => {
  const majors = { "28": { label: "2026 release wave 1 (BC28)" }, "29": { label: "2026 release wave 2 (BC29)" }, "30": { label: "2027 release wave 1 (BC30, vNext)", vnext: true }, "31": { label: "future" } };
  const counts = new Map([["24", 129], ["28", 113], ["29", 97], ["30", 27]]);
  const m = versionMenu(["24", "29", "28", "30"], counts, majors, null);
  assert.deepEqual(m.entries.map((e) => e.version), ["30", "29", "28", "24"]);
  assert.equal(m.remembered, "30");
  assert.deepEqual(m.entries.map((e) => e.label), ["BC30 vNext", "BC29", "BC28", "BC24"], "vNext only when flagged");
  assert.deepEqual(m.entries.map((e) => e.title), ["2027 release wave 1 (BC30, vNext)", "2026 release wave 2 (BC29)", "2026 release wave 1 (BC28)", "BC24"], "a major absent from config falls back to BC<v>");
  assert.deepEqual(m.entries.map((e) => [e.id, e.count, e.active]), [["version:30", 27, false], ["version:29", 97, false], ["version:28", 113, false], ["version:24", 129, false]]);
  assert.ok(!m.entries.some((e) => e.version === "31"), "a major config lists but the graph has no change in gets no entry");
  const a = versionMenu(["24", "29", "28", "30"], counts, majors, "28");
  assert.equal(a.remembered, "28");
  assert.deepEqual(a.entries.filter((e) => e.active).map((e) => e.version), ["28"]);
  assert.equal(versionMenu(["9", "10"], new Map(), {}, null).remembered, "10", "numeric order, not lexical");
});

test("versionMenu: an older graph without cv has no version lens (D72)", () => {
  assert.deepEqual(versionMenu([], new Map(), { "30": { label: "x", vnext: true } }, null), { remembered: null, entries: [] });
});

test("mediaMeta: kind pill, source, date; unknown parts left out, never a star count (D73)", () => {
  assert.deepEqual(mediaMeta("p", "Waldo's blog", "2026-10-05"), { kind: "post", parts: ["Waldo's blog", "2026-10-05"] });
  assert.deepEqual(mediaMeta("v", "Erik Hougaard", "2026-10-05"), { kind: "video", parts: ["Erik Hougaard", "2026-10-05"] });
  assert.deepEqual(mediaMeta("p", null, "2026-10-05"), { kind: "post", parts: ["2026-10-05"] });
  assert.deepEqual(mediaMeta("v", "Erik Hougaard", null), { kind: "video", parts: ["Erik Hougaard"] });
  assert.deepEqual(mediaMeta("v", undefined, undefined), { kind: "video", parts: [] });
  assert.deepEqual(mediaMeta("p", "", ""), { kind: "post", parts: [] });
  for (const m of [mediaMeta("p", "a", "b"), mediaMeta("v", null, "2026-10-05")]) assert.ok(![m.kind, ...m.parts].some((x) => /star/.test(x)));
});

test("pickerRows: the lens picker's rows, by count then label, with a marker by group and kind (D78)", () => {
  const nodes = [{ id: "a" }, { id: "b" }, { id: "c" }, { id: "d" }];
  const has = (...ids: string[]) => (n: { id: string }) => ids.includes(n.id);
  const lenses = [
    { id: "loc:z", label: "Zambia (ZM)", group: "Localization", match: has("a", "b") },
    { id: "loc:a", label: "Austria (AT)", group: "Localization", match: has("c", "d") },
    { id: "loc:b", label: "Belgium (BE)", group: "Localization", match: has("a", "b", "c") },
    { id: "src:yt", label: "A channel", group: "Source", kind: "youtube", match: has("a") },
    { id: "src:blog", label: "B blog", group: "Source", kind: "blog", match: has("a", "b") },
    { id: "src:pr", label: "C pulls", group: "Source", kind: "github-pr", match: has("a", "b", "c", "d") },
    { id: "src:none", label: "D unknown", group: "Source", match: () => false },
    { id: "type:topic", label: "topics", group: "Type", match: () => true },
  ];
  const loc = pickerRows(lenses, nodes, "Localization");
  assert.deepEqual(loc.map((r) => r.id), ["loc:b", "loc:a", "loc:z"], "count descending, then label");
  assert.deepEqual(loc.map((r) => r.n), [3, 2, 2]);
  assert.ok(loc.every((r) => r.marker === "loc"));
  const src = pickerRows(lenses, nodes, "Source");
  assert.deepEqual(src.map((r) => [r.id, r.n, r.marker]), [["src:pr", 4, "dot"], ["src:blog", 2, "bar"], ["src:yt", 1, "tri"], ["src:none", 0, "dot"]]);
  for (const r of [...loc, ...src]) assert.equal(r.n, nodes.filter(lenses.find((l) => l.id === r.id)!.match).length, "count = the stars the lens lights");
  assert.deepEqual(pickerRows(lenses, nodes, "Nope"), []);
});

test("this-week pills (D80): parse, write and toggle the kinds; the last pill never turns off", () => {
  const set = (s: string) => [...parseKinds(s)].sort().join("");
  assert.equal(set("c"), "c");
  assert.equal(set("p,v"), "pv");
  assert.equal(set("c,c"), "c");
  for (const s of ["", "x", "x,y"]) assert.equal(set(s), "cpv", JSON.stringify(s));
  assert.equal(set(undefined as unknown as string), "cpv");
  assert.equal(kindsParam(new Set(["v", "p", "c"])), null);
  assert.equal(kindsParam(new Set(["p", "v"])), "v,p");
  assert.equal(kindsParam(new Set(["c"])), "c");
  assert.deepEqual([...toggleKind(new Set(["v", "p", "c"]), "c")].sort(), ["p", "v"]);
  assert.deepEqual([...toggleKind(new Set(["c"]), "c")].sort(), ["c", "p", "v"]);
  assert.deepEqual([...toggleKind(new Set(["v"]), "c")].sort(), ["c", "v"]);
  assert.deepEqual([...parseHash("#lens=landed&kinds=c")], [["lens", "landed"], ["kinds", "c"]]);
});

test("week pills (D81): the Code pill only when landed.json computed the week's changes", () => {
  assert.deepEqual(weekPills(false), ["v", "p"]);
  assert.deepEqual(weekPills(true), ["v", "p", "c"]);
});

test("week code groups (D80): tooling by repo, breaking first, then feature, fix, the rest other", () => {
  assert.equal(codeGroup("change/al-go/2392", "feature", 0), "tooling");
  assert.equal(codeGroup("change/bcquality/213", "other", 0), "tooling");
  assert.equal(codeGroup("change/bcapps/12290", "obsoletion", 1), "breaking");
  assert.equal(codeGroup("change/bcapps/1", "breaking", 0), "breaking");
  assert.equal(codeGroup("change/bcapps/12152", "feature", 0), "features");
  assert.equal(codeGroup("change/bcapps/2", "fix", 0), "fixes");
  for (const k of ["refactor", "performance", "other"]) assert.equal(codeGroup("change/bcapps/3", k, 0), "other");
  type Row = [string, string, string, string[], string, string, number, string[]];
  const r = (id: string, kind: string, b = 0): Row => [id, kind, "2026-10-05", [], id, "finance", b, []];
  const rows = [r("change/bcapps/1", "fix"), r("change/al-go/2", "feature"), r("change/bcapps/3", "feature"), r("change/bcapps/4", "fix"), r("change/bcapps/5", "fix", 1)];
  assert.deepEqual(groupChanges(rows).map((g) => [g.group, g.rows.map((x) => x[0])]), [
    ["breaking", ["change/bcapps/5"]], ["features", ["change/bcapps/3"]], ["fixes", ["change/bcapps/1", "change/bcapps/4"]], ["tooling", ["change/al-go/2"]],
  ]);
});

test("this-week pills (D80): a link to an empty kind falls back to all; a pressed pill is never disabled", () => {
  const sorted = (s: Set<string>) => [...s].sort().join("");
  // the live site before the nightly wrote `changes`: kinds=c would open on nothing, with the Code pill stuck
  assert.equal(sorted(usableKinds(new Set(["c"]), { v: 2, p: 18, c: 0 })), "cpv");
  assert.equal(sorted(usableKinds(new Set(["c"]), { v: 2, p: 18, c: 82 })), "c");
  assert.equal(sorted(usableKinds(new Set(["v", "c"]), { v: 2, p: 18, c: 0 })), "cv", "one usable kind is enough");
  assert.equal(sorted(usableKinds(new Set(["c"]), { v: 0, p: 0, c: 0 })), "c", "an empty week stays as asked");
  assert.equal(pillDisabled(true, 0), false);
  assert.equal(pillDisabled(false, 0), true);
  assert.equal(pillDisabled(false, 3), false);
});

test("legend items follow what the canvas draws per level (D87)", () => {
  assert.deepEqual(legendItems(1, null), ["hub", "obj", "com"]);
  assert.deepEqual(legendItems(2, "version:30"), ["hub", "obj", "tri", "bar", "com"]);
  assert.deepEqual(legendItems(3, undefined), ["hub", "obj", "tri", "bar", "cross", "com"]);
  assert.deepEqual(legendItems(1, "landed"), ["hub", "obj", "com", "week"]);
});

test("the star intro counts every type the summary carries and skips the ones it does not (D87)", () => {
  const s = starIntro({ topic: 605, app: 96, feature: 80, localization: 22, source: 32, object: 300 });
  assert.equal(s, "A star is a page that other pages link to: 605 Learn hubs, 96 first-party apps, 80 roadmap features, 22 countries, 32 sources and the 300 most connected AL objects. Videos and posts are not stars: they are the triangles and bars drawn beside the hubs they link to once you open a system.");
  assert.match(starIntro({ topic: 1, object: 2 }), /^A star is a page that other pages link to: 1 Learn hub and the 2 most connected AL objects\./);
  assert.match(starIntro({ topic: 4 }), /: 4 Learn hubs\. Videos/);
});
