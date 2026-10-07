import { test } from "node:test";
import assert from "node:assert/strict";
import { versionRanges } from "../../pipeline/lib/versions.js";

test("versionRanges: collapsed runs, sorted and deduped (spec version-lens 2.3)", () => {
  assert.equal(versionRanges(["24", "25", "26", "28"]), "BC24-26, BC28");
  assert.equal(versionRanges(["28", "29", "30"]), "BC28-30");
  assert.equal(versionRanges(["29"]), "BC29");
  assert.equal(versionRanges(["24", "26", "30"]), "BC24, BC26, BC30");
  assert.equal(versionRanges(["30", "28", "29", "29"]), "BC28-30");
  assert.equal(versionRanges([]), "");
});

test("versionRanges: numeric input, a custom prefix, a gap is never bridged", () => {
  assert.equal(versionRanges([28, 29]), "BC28-29");
  assert.equal(versionRanges(["28", "29", "30"], "v"), "v28-30");
  assert.equal(versionRanges(["28", "30"], ""), "28, 30");
  assert.equal(versionRanges(["24", "26"]), "BC24, BC26");
  assert.equal(versionRanges(["9", "10", "11"]), "BC9-11", "numeric, not lexical, order");
});
