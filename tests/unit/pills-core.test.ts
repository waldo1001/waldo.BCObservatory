import { test } from "node:test";
import assert from "node:assert/strict";
import { CHANGE_REPOS, kindsLine, parsePills, pillDisabled, pillsParam, repoOf, togglePill, usablePills } from "../../site/src/scripts/pills-core.js";

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

test("kindsLine: kinds A to Z with their counts, empty for nothing", () => {
  assert.equal(kindsLine(["fix", "feature", "fix"]), "1 feature · 2 fix");
  assert.equal(kindsLine([]), "");
});

test("CHANGE_REPOS and repoOf: the three D61 slugs in pill order, the slug from an entry id", () => {
  assert.deepEqual(CHANGE_REPOS.map(([s]) => s), ["bcapps", "al-go", "bcquality"]);
  assert.deepEqual(CHANGE_REPOS.map(([, l]) => l), ["BCApps", "AL-Go", "BCQuality"]);
  assert.equal(repoOf("bcapps/12207"), "bcapps");
  assert.equal(repoOf("al-go/2229"), "al-go");
});
