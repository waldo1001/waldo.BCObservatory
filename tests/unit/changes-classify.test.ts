/** D61: deterministic classification of merged pull requests (paths, pull requests, bots, backports, references). */
import { test } from "node:test";
import assert from "node:assert/strict";
import { backportOf, classifyChange, classifyPath, codeRoots, isBot, isCommunity, references, titleKey } from "../../pipeline/changes/classify.js";

test("classifyPath: every BCApps app root is AL source; tests, translations, build and docs are not", () => {
  for (const p of [
    "src/Layers/W1/BaseApp/Foundation/PaymentTerms/PaymentTerms.Table.al",
    "src/Layers/BE/BaseApp/Foundation/Address/CountryRegion.Table.al",
    "src/System Application/App/Email/src/Email.Codeunit.al",
    "src/Business Foundation/App/NoSeries/src/NoSeries.Codeunit.al",
    "src/Apps/W1/EDocument/app/src/EDocument.Table.al",
    "src/Apps/DE/EDocumentDE/app/src/X.Codeunit.al",
    "src/Apps/W1/EDocument/App/src/Document/EDocumentType.Enum.al",
    "src/Apps/W1/Shopify/App/src/Order handling/Codeunits/ShpfyProcessOrder.Codeunit.al",
  ]) assert.equal(classifyPath(p), "al-src", p);
  assert.equal(classifyPath("src/Apps/W1/Shopify/Test/Order Handling/ShpfyOrdersAPITest.Codeunit.al"), "al-test");
  assert.equal(classifyPath("src/Apps/W1/EDocument/test/src/EDocTests.Codeunit.al"), "al-test");
  assert.equal(classifyPath("src/System Application/Test Library/Email/src/X.Codeunit.al"), "al-test");
  assert.equal(classifyPath("src/Layers/W1/Tests/ERM/X.Codeunit.al"), "al-test");
  assert.equal(classifyPath("src/Apps/W1/EDocument/app/Translations/EDocument.de-DE.xlf"), "translation");
  assert.equal(classifyPath(".github/workflows/ci.yaml"), "build");
  assert.equal(classifyPath("build/scripts/x.ps1"), "build");
  assert.equal(classifyPath("src/Apps/W1/EDocument/README.md"), "docs");
  assert.equal(classifyPath("src/rulesets/ruleset.json"), "other");
  assert.equal(classifyPath("src/Tools/X.al"), "other", "AL outside an app root");
});

test("classifyChange: code wins; otherwise the dominant class", () => {
  assert.equal(classifyChange(["src/Layers/W1/BaseApp/A.Table.al", "x.xlf", "y.xlf"]), "code");
  assert.equal(classifyChange(["src/Apps/W1/X/test/A.Codeunit.al"]), "test-only");
  assert.equal(classifyChange(["a.xlf", "b.xlf", ".github/x.yml"]), "translation");
  assert.equal(classifyChange([".github/x.yml"]), "build");
  assert.equal(classifyChange(["README.md"]), "docs");
  assert.equal(classifyChange([]), "non-code");
});

test("codeRoots: another repository names its own roots", () => {
  const roots = codeRoots({ repo: "microsoft/AL-Go", paths: ["Actions/", "Templates/*/"] });
  assert.equal(classifyPath("Actions/RunPipeline/RunPipeline.ps1", roots), "al-src");
  assert.equal(classifyChange(["Templates/PTE/.github/AL-Go-Settings.json"], roots), "code");
  assert.equal(classifyChange(["Tests/x.ps1"], roots), "non-code");
  const kb = codeRoots({ repo: "microsoft/BCQuality", paths: ["microsoft/", "community/", "skills/"] });
  assert.equal(classifyChange(["microsoft/al/naming.md"], kb), "code", "a knowledge base's markdown is its source");
  assert.equal(classifyChange(["README.md"], kb), "docs");
});

test("bots and backports from the list payload", () => {
  assert.equal(isBot({ title: "x", user: { login: "dependabot[bot]", type: "Bot" } }), true);
  assert.equal(isBot({ title: "[29.x] Update BCArtifact version. New value: 29.1.55471.0", user: { login: "someone", type: "User" } }), true, "branch prefix stripped first");
  assert.equal(isBot({ title: "[AL-Go] Update system files", user: { login: "x", type: "User" } }), true);
  assert.equal(isBot({ title: "Fix posting", user: { login: "x", type: "User" } }), false);
  assert.deepEqual(backportOf({ title: "[29.x] Fix posting", body: "" }), { original: null });
  assert.deepEqual(backportOf({ title: "[releases/29.x] Fix effective permission filtering", body: "Backport of #9692 to `releases/29.x`." }), { original: 9692 });
  assert.deepEqual(backportOf({ title: "Fix x (backport #12)", body: "" }), { original: 12 });
  assert.equal(backportOf({ title: "[main] carry out overwrites changed req wksh direct unit cost", body: "Fixes a bug" }), null, "[main] alone is the original");
  assert.deepEqual(backportOf({ title: "[main] port", body: "cherry-pick of #77" }), { original: 77 });
  assert.equal(titleKey("[29.x] Fix  Posting!"), titleKey("Fix posting"));
});

test("references and community contributions", () => {
  assert.deepEqual(references("Fixes #12. Also closes #3 and resolves: #12\n[AB#640900](https://x) AB#5"), { fixes_issues: [3, 12], work_items: [5, 640900] });
  assert.deepEqual(references(null), { fixes_issues: [], work_items: [] });
  assert.equal(isCommunity(["From Fork", "Team: Finance"]), true);
  assert.equal(isCommunity(["Team: Finance"]), false);
});
