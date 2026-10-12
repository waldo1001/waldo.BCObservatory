import { test } from "node:test";
import assert from "node:assert/strict";
import { CHANGE_REPOS, parsePills, pickDisabled, pickPill, pillDisabled, pillsParam, repoOf, togglePill, usablePills } from "../../site/src/scripts/pills-core.js";

// D82: the changes list's repository pills, over the generic D80 pill helpers
const R = ["bcapps", "al-go", "bcquality"] as const;
type Repo = (typeof R)[number];
const sorted = (s: Set<string>) => [...s].sort().join(",");
const ALL = sorted(new Set(R));

test("parsePills: unknown ids dropped, trimmed, deduplicated; empty or all unknown means every pill", () => {
  assert.equal(sorted(parsePills("al-go", R)), "al-go");
  assert.equal(sorted(parsePills("bcquality,al-go", R)), "al-go,bcquality");
  assert.equal(sorted(parsePills(" al-go , bcapps ", R)), "al-go,bcapps");
  assert.equal(sorted(parsePills("al-go,al-go", R)), "al-go");
  for (const s of ["", "nope", "nope,x", null, undefined]) assert.equal(sorted(parsePills(s, R)), ALL, String(s));
});

test("pillsParam: null when all or none are on, else the ids in pill order", () => {
  assert.equal(pillsParam(new Set<Repo>(R), R), null);
  assert.equal(pillsParam(new Set<Repo>(["bcquality", "al-go"]), R), "al-go,bcquality");
  assert.equal(pillsParam(new Set<Repo>(["bcapps"]), R), "bcapps");
  assert.equal(pillsParam(new Set<Repo>(), R), null);
});

test("togglePill: the last pill never turns off", () => {
  assert.equal(sorted(togglePill(new Set<Repo>(R), "bcapps", R)), "al-go,bcquality");
  assert.equal(sorted(togglePill(new Set<Repo>(["al-go"]), "al-go", R)), ALL);
  assert.equal(sorted(togglePill(new Set<Repo>(["al-go"]), "bcquality", R)), "al-go,bcquality");
});

test("usablePills: a set with nothing behind it falls back to all; one usable pill is enough; an empty list stays as asked", () => {
  assert.equal(sorted(usablePills(new Set<Repo>(["al-go"]), { bcapps: 965, "al-go": 0, bcquality: 90 }, R)), ALL);
  assert.equal(sorted(usablePills(new Set<Repo>(["al-go"]), { bcapps: 965, "al-go": 28, bcquality: 90 }, R)), "al-go");
  assert.equal(sorted(usablePills(new Set<Repo>(["al-go", "bcapps"]), { bcapps: 965, "al-go": 0, bcquality: 90 }, R)), "al-go,bcapps");
  assert.equal(sorted(usablePills(new Set<Repo>(["al-go"]), { bcapps: 0, "al-go": 0, bcquality: 0 }, R)), "al-go");
});

test("pillDisabled: only an empty pill that is off", () => {
  assert.deepEqual([pillDisabled(true, 0), pillDisabled(false, 0), pillDisabled(false, 3)], [false, true, false]);
});

// D91: the list pages' click rule; from "all on" a click keeps one pill, later clicks toggle
test("pickPill: from all on keeps that pill, otherwise toggles, the last one off brings all back, one pill alone toggles", () => {
  assert.equal(sorted(pickPill(new Set<Repo>(R), "al-go", R)), "al-go");
  assert.equal(sorted(pickPill(new Set<Repo>(["al-go"]), "bcquality", R)), "al-go,bcquality");
  assert.equal(sorted(pickPill(new Set<Repo>(["al-go", "bcquality"]), "al-go", R)), "bcquality");
  assert.equal(sorted(pickPill(new Set<Repo>(["al-go"]), "al-go", R)), ALL);
  assert.equal(sorted(pickPill(new Set(["x"]), "x", ["x"])), "x");
});

test("pickDisabled: an empty pill while off, or while its whole facet is on; a pressed pill in a subset never", () => {
  assert.equal(pickDisabled(true, true, 0), true);
  assert.equal(pickDisabled(true, false, 0), false);
  assert.equal(pickDisabled(false, false, 0), true);
  assert.deepEqual([pickDisabled(false, false, 3), pickDisabled(true, true, 5)], [false, false]);
});

test("CHANGE_REPOS and repoOf: the three D61 slugs in pill order, the slug from an entry id", () => {
  assert.deepEqual(CHANGE_REPOS.map(([s]) => s), ["bcapps", "al-go", "bcquality"]);
  assert.deepEqual(CHANGE_REPOS.map(([, l]) => l), ["BCApps", "AL-Go", "BCQuality"]);
  assert.equal(repoOf("bcapps/12207"), "bcapps");
  assert.equal(repoOf("al-go/2229"), "al-go");
});
