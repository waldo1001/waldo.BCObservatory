import { test } from "node:test";
import assert from "node:assert/strict";
import { codeGroup, groupChanges, kindsParam, landedRingsOn, legendItems, lensChip, lensMenu, mediaMeta, packPorts, parseHash, parseKinds, pickerRows, pillDisabled, portSpot, searchLeaves, sortRows, starIntro, toggleKind, usableKinds, versionMenu, weekPills } from "../../site/src/scripts/galaxy-core.js";

test("galaxy hash: combined keys, the old single-key form, unknown keys dropped", () => {
  assert.deepEqual([...parseHash("#system=finance&lens=version%3A30")], [["system", "finance"], ["lens", "version:30"]]);
  assert.deepEqual([...parseHash("#star=object%2Ftable%2F18")], [["star", "object/table/18"]]);
  assert.deepEqual([...parseHash("#evil=1&view=list")], [["view", "list"]]);
  assert.equal(parseHash("").size, 0);
  assert.deepEqual([...parseHash("#system=development&tilt=1&plane=media")], [["system", "development"], ["tilt", "1"], ["plane", "media"]]);
  assert.deepEqual([...parseHash("#q=Telemetry&system=development&tilt=1&plane=media")], [["q", "Telemetry"], ["system", "development"], ["tilt", "1"], ["plane", "media"]], "D100: a search keeps its scope in the link");
});

test("D100: a first search leaves a flat system or star for the galaxy, never a tilted system or a scope the link named", () => {
  const s = (o: Partial<Parameters<typeof searchLeaves>[0]>) => searchLeaves({ had: false, level: 2, tilt: 0, fromHash: false, ...o });
  assert.equal(s({}), true, "flat system: D44's jump");
  assert.equal(s({ level: 3 }), true);
  assert.equal(s({ level: 1 }), false);
  assert.equal(s({ tilt: 1 }), false, "tilted: stays");
  assert.equal(s({ tilt: 0.4 }), false, "sliding: stays");
  assert.equal(s({ fromHash: true }), false, "the link named the scope");
  assert.equal(s({ had: true }), false, "refining a search never moves");
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

test("packPorts: a port sits at its spot when it is free, else in the nearest free slot on the border (D92)", () => {
  const area = { x0: 8, y0: 100, x1: 600, y1: 500 };
  const at = (x: number, y: number) => ({ x, y, w: 220, h: 44 });
  assert.deepEqual(packPorts([at(300, 100)], area, []), [{ x: 190, y: 100, w: 220, h: 44 }], "centred on the spot, clamped under y0");
  const six = packPorts(Array.from({ length: 6 }, () => at(300, 100)), area, []);
  assert.deepEqual(six.map((b) => b && [b.x, b.y]), [[190, 100], [8, 152], [380, 152], [8, 204], [380, 204], [8, 256]]);
  const gap = 8, boxes = six.filter((b): b is NonNullable<typeof b> => !!b);
  assert.equal(boxes.length, 6);
  for (const b of boxes) assert.ok(b.w === 220 && b.h === 44 && b.x >= area.x0 && b.y >= area.y0 && b.x + b.w <= area.x1 && b.y + b.h <= area.y1, "inside the area");
  boxes.forEach((a, i) => boxes.forEach((b, j) => {
    if (j <= i) return;
    const near = a.x < b.x + b.w + gap && b.x < a.x + a.w + gap && a.y < b.y + b.h + gap && b.y < a.y + a.h + gap;
    assert.ok(!near, `ports ${i} and ${j} keep the gap`);
  }));
  assert.deepEqual(packPorts([at(300, 100)], area, [{ x: 150, y: 90, w: 300, h: 60 }]), [{ x: 8, y: 152, w: 220, h: 44 }], "an obstacle on the spot");
  assert.deepEqual(packPorts([at(100, 20)], { x0: 0, y0: 0, x1: 200, y1: 40 }, []), [null], "larger than the area");
  assert.deepEqual(packPorts(Array.from({ length: 6 }, () => at(300, 100)), area, []), six, "deterministic");
  assert.deepEqual(packPorts([], area, []), []);
});

test("parseHash keeps every deep link into the galaxy (D92, spec 2.5)", () => {
  assert.deepEqual([...parseHash("#lens=landed&kinds=v,p")], [["lens", "landed"], ["kinds", "v,p"]]);
  assert.deepEqual([...parseHash("#lens=pick:source")], [["lens", "pick:source"]]);
  assert.deepEqual([...parseHash("#lens=version:29")], [["lens", "version:29"]]);
  assert.deepEqual([...parseHash("#lens=coverage")], [["lens", "coverage"]]);
  assert.deepEqual([...parseHash("#system=finance&tilt=1")], [["system", "finance"], ["tilt", "1"]]);
  assert.deepEqual([...parseHash("#star=object%2Ftable%2F18&system=sales")], [["star", "object/table/18"], ["system", "sales"]]);
  assert.deepEqual([...parseHash("#view=list")], [["view", "list"]]);
  assert.deepEqual([...parseHash("#q=sales%20post")], [["q", "sales post"]]);
});

const MENU_LENSES = [
  { id: "version:29", label: "changed in BC29", group: "Version", version: "29" },
  { id: "version:30", label: "changed in BC30", group: "Version", version: "30" },
  { id: "landed", label: "this week", group: "Time" },
  { id: "type:topic", label: "topic hubs", group: "Type" },
  { id: "tier:official", label: "official only", group: "Tier" },
  { id: "coverage", label: "no Learn page, video or post", group: "Coverage" },
  { id: "loc:localization/be", label: "Belgium (BE)", group: "Localization" },
  { id: "loc:localization/nl", label: "Netherlands (NL)", group: "Localization" },
  { id: "src:source/yt-microsoft", label: "Microsoft", group: "Source" },
];
const MENU_COUNTS = new Map([["version:30", 27], ["version:29", 97], ["landed", 45], ["type:topic", 605], ["tier:official", 905], ["coverage", 124]]);
const MENU_MAJORS = { "30": { label: "2027 release wave 1 (BC30, vNext)", vnext: true }, "29": { label: "2026 release wave 2 (BC29)" } };

test("lensMenu: every lens in seven groups, versions newest first, countries and sources as picker entries (D92)", () => {
  const m = lensMenu(MENU_LENSES, MENU_COUNTS, MENU_MAJORS, "version:29");
  assert.deepEqual(m.map((g) => g.id), ["version", "time", "type", "tier", "coverage", "country", "source"]);
  assert.deepEqual(m.map((g) => g.label), ["Version", "Time", "Type", "Tier", "Coverage", "Country", "Source"]);
  assert.deepEqual(m[0].entries, [
    { id: "version:30", label: "BC30 vNext", n: 27, on: false, title: "2027 release wave 1 (BC30, vNext)" },
    { id: "version:29", label: "BC29", n: 97, on: true, title: "2026 release wave 2 (BC29)" },
  ]);
  assert.deepEqual(m[1].entries, [{ id: "landed", label: "this week", n: 45, on: false, title: null }]);
  assert.deepEqual(m[2].entries, [{ id: "type:topic", label: "topic hubs", n: 605, on: false, title: null }]);
  assert.deepEqual(m[3].entries, [{ id: "tier:official", label: "official only", n: 905, on: false, title: null }]);
  assert.deepEqual(m[4].entries, [{ id: "coverage", label: "no Learn page, video or post", n: 124, on: false, title: null }]);
  assert.deepEqual(m[5].entries, [{ id: "pick:localization", label: "Pick a country", n: 2, on: false, title: null }]);
  assert.deepEqual(m[6].entries, [{ id: "pick:source", label: "Pick a source", n: 1, on: false, title: null }]);
});

test("lensMenu: the pressed entry follows the active lens; an older graph without versions; a missing count is 0 (D92)", () => {
  const pressed = (active: string | null) => lensMenu(MENU_LENSES, MENU_COUNTS, MENU_MAJORS, active).flatMap((g) => g.entries.filter((e) => e.on).map((e) => e.id));
  assert.deepEqual(pressed("loc:localization/be"), ["pick:localization"]);
  assert.deepEqual(pressed("src:source/yt-microsoft"), ["pick:source"]);
  assert.deepEqual(pressed("q:sales"), []);
  assert.deepEqual(pressed(null), []);
  assert.deepEqual(pressed("landed"), ["landed"]);
  const old = lensMenu(MENU_LENSES.filter((l) => l.group !== "Version"), MENU_COUNTS, MENU_MAJORS, null);
  assert.equal(old[0].id, "time");
  assert.equal(lensMenu([{ id: "tier:community", label: "mostly community evidence", group: "Tier" }], new Map(), {}, null)[0].entries[0].n, 0);
  assert.deepEqual(lensMenu([], new Map(), {}, null), []);
});

test("lensChip: the label cut past 28 characters with the full label in title, the count, the accessible name (D92)", () => {
  assert.deepEqual(lensChip("changed in BC30", 27), { text: "changed in BC30", count: "27", aria: "Clear the lens: changed in BC30", title: null });
  assert.deepEqual(lensChip("Microsoft Dynamics 365 Business Central", 212), { text: "Microsoft Dynamics 365 Busi…", count: "212", aria: "Clear the lens: Microsoft Dynamics 365 Business Central", title: "Microsoft Dynamics 365 Business Central" });
  const l28 = "abcdefghijklmnopqrstuvwxyz12";
  assert.equal(l28.length, 28);
  assert.deepEqual(lensChip(l28, 1), { text: l28, count: "1", aria: `Clear the lens: ${l28}`, title: null });
  assert.equal(lensChip(l28 + "3", 1).text, "abcdefghijklmnopqrstuvwxyz1…");
});
