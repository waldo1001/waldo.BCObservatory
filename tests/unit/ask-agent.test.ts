import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { PILL_DAYS, askKind, askPrompts, emptySearchHint, pillVisible, type AskKind } from "../../site/src/scripts/ask-agent-core.js";
import { pickTab } from "../../site/src/scripts/install-tabs.js";

// D124: "Ask your agent" prompts, the empty-search hint and the header pill, all built in the browser (no page bytes)

const DAY = 864e5;

test("D124 test 8: askKind maps the page's type label to a prompt kind, and nothing else gets one", () => {
  for (const t of ["table", "codeunit", "page", "report", "tableextension", "xmlport", "query"]) assert.equal(askKind(t), "object", t);
  for (const t of ["enum", "interface", "permissionset", "controladdin"]) assert.equal(askKind(t), "object-no-events", t);
  assert.equal(askKind("roadmap feature"), "feature");
  assert.equal(askKind("code change · fix · breaking"), "change");
  for (const t of ["video", "community post", "weekly digest", "localization · BC30", ""]) assert.equal(askKind(t), null, t);
});

test("D124 test 9: the prompts name the page once, end with the Observatory, and name no BC version", () => {
  assert.deepEqual(askPrompts("object", 'Table 18 "Customer"'), [
    'What changed in Table 18 "Customer" between the last Business Central versions? Use BC Observatory.',
    'Which events does Table 18 "Customer" publish, and who subscribes to them? Use BC Observatory.',
  ]);
  const title = 'Enum 38 "Purchase Document Type"';
  for (const k of ["object", "object-no-events", "feature", "change"] as AskKind[]) {
    for (const p of askPrompts(k, title)) {
      assert.ok(p.endsWith("Use BC Observatory."), p);
      assert.equal(p.split(title).length - 1, 1, p);
      assert.ok(!/\bBC ?\d{2}\b/.test(p), p);
    }
  }
  assert.ok(askPrompts("object-no-events", title)[1].startsWith(`Where is ${title} used`));
});

test("D124 test 10: the pill shows without a stored time, and hides for 90 days after a dismissal", () => {
  const now = Date.UTC(2026, 9, 27);
  assert.equal(PILL_DAYS, 90);
  assert.equal(pillVisible(null, now), true);
  assert.equal(pillVisible("abc", now), true);
  assert.equal(pillVisible(String(now - 89 * DAY), now), false);
  assert.equal(pillVisible(String(now - 91 * DAY), now), true);
  assert.equal(pillVisible(String(now + DAY), now), false);
});

test("D124 test 11: the empty-search hint links to the install section", () => {
  assert.equal(emptySearchHint("/x/").href, "/x/mcp/#install");
});

test("D124 test 12: the object page takes copy from the shared clipboard module", () => {
  const src = readFileSync(new URL("../../site/src/scripts/object-page.ts", import.meta.url), "utf8");
  assert.ok(/import \{[^}]*copyButton[^}]*\} from "\.\/clipboard"/.test(src));
  assert.ok(!/function copy\(/.test(src) && !/function copyButton\(/.test(src));
});

test("D124: /mcp opens the hash's tab, else the remembered one, else the first", () => {
  const ids = ["claude-code", "copilot-cli", "vscode"];
  assert.equal(pickTab("#install-vscode", "copilot-cli", ids), "vscode");
  assert.equal(pickTab("#install-nope", "copilot-cli", ids), "copilot-cli");
  assert.equal(pickTab("", "gone", ids), "claude-code");
  assert.equal(pickTab("#tools", null, ids), "claude-code");
});
