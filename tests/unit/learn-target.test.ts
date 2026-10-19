import { test } from "node:test";
import assert from "node:assert/strict";
import { LEARN_BASE, learnFromHash, learnHash, learnRowIndex } from "../../site/src/scripts/learn-target-core.js";
import { LEARN_BASE as RENDER_BASE } from "../../pipeline/render/search.js";

const JSON_FILES = LEARN_BASE + "dev-itpro/developer/devenv-json-files";
const SPACED = LEARN_BASE + "dev-itpro/developer/datatypes/Not supported/devenv-ocx-data-type";
const OUTSIDE = "https://learn.microsoft.com/training/modules/x";

test("learnHash writes the path under the Learn base, readable slashes (D98)", () => {
  assert.equal(learnHash(JSON_FILES), "#learn=dev-itpro/developer/devenv-json-files");
  assert.equal(learnHash(SPACED), "#learn=dev-itpro/developer/datatypes/Not%20supported/devenv-ocx-data-type");
  assert.equal(learnHash(OUTSIDE), "#learn=https%3A//learn.microsoft.com/training/modules/x");
});

test("learnFromHash round-trips and refuses other hashes", () => {
  for (const u of [JSON_FILES, SPACED, OUTSIDE]) assert.equal(learnFromHash(learnHash(u)), u);
  for (const h of ["", "#field-20", "#learn=", "#learn=%E0%A4%A"]) assert.equal(learnFromHash(h), null, h);
});

test("learnRowIndex finds the first href that is the same URL", () => {
  assert.equal(learnRowIndex([LEARN_BASE + "dev-itpro/developer/devenv-directory-app-json", JSON_FILES], JSON_FILES), 1);
  assert.equal(learnRowIndex([LEARN_BASE + "dev-itpro/developer/datatypes/Not%20supported/devenv-ocx-data-type"], SPACED), 0);
  assert.equal(learnRowIndex([LEARN_BASE + "x"], JSON_FILES), -1);
  assert.equal(learnRowIndex(["https://waldo1001.github.io/waldo.BCObservatory/topics/x/"], JSON_FILES), -1);
  assert.equal(learnRowIndex(["http://[bad", JSON_FILES], JSON_FILES), 1, "an unparsable href is skipped");
});

test("the site's LEARN_BASE is the renderer's", () => {
  assert.equal(LEARN_BASE, RENDER_BASE);
});
