import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import {
  INSTRUMENTS, SECTIONS, contentSections, countLabel, instrument, llmsTitle, navGroupStarts, navSections, section,
} from "../../pipeline/lib/sections.js";
import { GROUPS } from "../../site/src/scripts/search.js";

const NAV = ["Topics", "AL objects", "Localizations", "Roadmap", "Code changes", "Videos", "Posts", "Weekly digests", "Sources", "MCP", "About"];

test("the nav: eleven names in three groups, short enough for one line at 900 px (D90)", () => {
  assert.deepEqual(navSections().map((s) => s.name), NAV);
  assert.deepEqual(navGroupStarts(), [5, 10]);
  const chars = navSections().reduce((n, s) => n + s.name.length, 0);
  assert.ok(chars <= 90, `nav labels are ${chars} characters`);
  // the header's CSS spaces the groups apart by nav index: the map and the stylesheet move together
  const css = readFileSync(new URL("../../site/src/styles/site.css", import.meta.url), "utf8");
  const rules = [...css.matchAll(/([^{}]*\.site-nav[^{}]*)\{/g)].map((m) => m[1]);
  for (const i of navGroupStarts()) assert.ok(rules.some((r) => r.includes(`nth-child(${i})`)), `a .site-nav rule selects nth-child(${i})`);
});

test("content sections in home and About order, each with a one-sentence blurb", () => {
  assert.deepEqual(contentSections().map((s) => s.id),
    ["topics", "objects", "apps", "localizations", "features", "changes", "releases", "videos", "posts", "digests", "sources"]);
  for (const s of contentSections()) {
    assert.ok(s.blurb && s.blurb.endsWith("."), `${s.id} blurb ends with a full stop`);
    assert.ok(!s.blurb!.includes("—"), `${s.id} blurb has no em-dash`);
  }
});

test("count labels and llms.txt headings come from the one name", () => {
  assert.equal(countLabel("features", 80), "80 roadmap features");
  assert.equal(countLabel("topics", 1), "1 topic hub");
  assert.equal(countLabel("objects", 25646), "25,646 AL objects");
  assert.equal(countLabel("releases", 63), "63 AL Language extension versions");
  assert.equal(countLabel("localizations", 22), "22 country layers");
  assert.equal(llmsTitle("features"), "# BC Observatory: Roadmap");
  assert.equal(llmsTitle("objects"), "# BC Observatory: AL objects");
  assert.throws(() => countLabel("mcp", 1), /no count noun/);
});

test("ids and paths are unique, unknown ids throw, the eight instruments in strip order", () => {
  assert.equal(new Set(SECTIONS.map((s) => s.id)).size, SECTIONS.length);
  assert.equal(new Set(SECTIONS.map((s) => s.path)).size, SECTIONS.length);
  assert.throws(() => section("nope"), /unknown section nope/);
  assert.deepEqual(INSTRUMENTS.map((i) => i.name),
    ["Version lens", "Deprecation radar", "Event explorer", "Neighbourhood explorer", "Country heatmap", "Coverage heatmap", "Learn drift", "This week"]);
  assert.equal(new Set(INSTRUMENTS.map((i) => i.path)).size, INSTRUMENTS.length);
  assert.equal(instrument("drift").name, "Learn drift");
  assert.throws(() => instrument("nope"), /unknown instrument nope/);
  // only the two sections that are a galaxy system of their own carry one
  assert.deepEqual(SECTIONS.filter((s) => s.system).map((s) => [s.id, s.system]), [["localizations", "localization"], ["sources", "sources"]]);
});

test("search groups and tabs that stand for a section say its name", () => {
  const pairs: [string, string][] = [["roadmap", "features"], ["video", "videos"], ["post", "posts"], ["object", "objects"],
    ["change", "changes"], ["localization", "localizations"], ["source", "sources"], ["digest", "digests"]];
  const page = readFileSync(new URL("../../site/src/pages/search/index.astro", import.meta.url), "utf8");
  for (const [group, id] of pairs) {
    const name = section(id).name;
    assert.equal(GROUPS.find((g) => g.id === group)?.label, name, `search group ${group}`);
    assert.ok(page.includes(`["${group}", "${name}"]`), `search tab ${group} says ${name}`);
  }
});
