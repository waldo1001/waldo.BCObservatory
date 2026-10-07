import { test } from "node:test";
import assert from "node:assert/strict";
import { chipOf, type Evidence } from "../../site/src/lib/evidence.js";

const ev = (over: Partial<Evidence>): Evidence => ({ kind: "learn", url: "https://learn.microsoft.com/x", title: "Set up VAT", date: "2026-09-01", commit: null, t: null, quote: null, ...over });

test("a video at a second: the deep link, the second as data, the quote as the text (D64)", () => {
  const c = chipOf(ev({ kind: "video", url: "https://www.youtube.com/watch?v=tj1vvsmAMVs&t=76s", title: "Expense Agent", t: 76, quote: "the agent now reads receipts in nine languages" }));
  assert.equal(c.href, "https://www.youtube.com/watch?v=tj1vvsmAMVs&t=76s", "the href stays the real deep link (the source stage's fallback)");
  assert.deepEqual([c.kind, c.t, c.meta], ["video", 76, "at 1:16"]);
  assert.equal(c.text, '"the agent now reads receipts in nine languages"');
  assert.equal(c.title, "Expense Agent", "the video's title moves to the hover title");
});

test("code: a file path in mono with branch @ commit; a pull request reads as one", () => {
  const file = chipOf(ev({ kind: "code", url: "https://github.com/microsoft/BCApps/blob/abc/src/x.al", title: "src/Layers/W1/BaseApp/Customer.Table.al (releases/29.x)", commit: "d7c9c667c671da2c" }));
  assert.deepEqual([file.text, file.meta, file.mono], ["src/Layers/W1/BaseApp/Customer.Table.al", "releases/29.x @ d7c9c667", true]);
  const pr = chipOf(ev({ kind: "code", url: "https://github.com/microsoft/BCApps/pull/4821", title: "", commit: "0123456789abcdef" }));
  assert.deepEqual([pr.text, pr.mono], ["pull request #4821", false], "D61 change pages: a PR URL, not a blob");
});

test("blog reads as post; a kind nobody styled yet gets a neutral tag, not a broken one", () => {
  assert.deepEqual([chipOf(ev({ kind: "blog" })).label, chipOf(ev({ kind: "blog" })).kind], ["post", "blog"], "data-kind keeps the schema's word");
  const later = chipOf(ev({ kind: "change" }));
  assert.deepEqual([later.cls, later.label], ["other", "change"]);
  assert.equal(chipOf(ev({ kind: "guideline" })).cls, "guideline");
});
