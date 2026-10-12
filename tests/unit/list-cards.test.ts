import { test } from "node:test";
import assert from "node:assert/strict";
import { radarLine, weekLine, weekState } from "../../site/src/lib/digest-cards.js";

// D91 C3: the digests index is a card per week, the running week by the build's date
test("weekState: running while the build's day is on or before the week's last day", () => {
  assert.deepEqual([weekState("2026-10-18", "2026-10-12"), weekState("2026-10-12", "2026-10-12"), weekState("2026-10-11", "2026-10-12")], ["running", "running", "complete"]);
});

test("weekLine: PRs, videos, posts, Learn pages, roadmap moves, each when above zero; nothing says so by state", () => {
  assert.equal(weekLine({ changes: 165, videos: 1, posts: 10, docs: 277, roadmap_added: 0, roadmap_changed: 0 }, false), "165 PRs · 1 video · 10 posts · 277 Learn pages");
  assert.equal(weekLine({ videos: 5, posts: 0, docs: 49, roadmap_added: 0, roadmap_changed: 0 }, false), "5 videos · 49 Learn pages", "W38 has no changes key");
  const none = { changes: 0, videos: 0, posts: 0, docs: 0, roadmap_added: 0, roadmap_changed: 0 };
  assert.equal(weekLine(none, true), "Nothing has landed yet this week.");
  assert.equal(weekLine(none, false), "A quiet week.");
  assert.equal(weekLine({ changes: 1, roadmap_added: 2, roadmap_changed: 1 }, false), "1 PR · 2 roadmap features added · 1 roadmap feature changed");
});

test("radarLine: the deprecation radar's two numbers", () => {
  assert.equal(radarLine({ deprecations: 1225, cleanup_due: 1055 }), "1,225 obsolete elements, 1,055 with their cleanup due");
});
