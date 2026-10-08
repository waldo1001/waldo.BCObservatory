import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { landed } from "../../site/src/lib/state.js";

test("header pill counts (D80): media and code changes of the week; an older file without changes counts 0", () => {
  const dir = mkdtempSync(join(tmpdir(), "bcobs-state-"));
  const p = join(dir, "landed.json");
  writeFileSync(p, JSON.stringify({ anchor: "2026-10-08", days: 7, items: [["post/a", "p", "2026-10-08", [], "A"]] }));
  assert.deepEqual(landed(p), { anchor: "2026-10-08", count: 1, changes: 0, hasChanges: false });
  writeFileSync(p, JSON.stringify({ anchor: "2026-10-08", days: 7, items: [], changes: [["change/bcapps/1", "fix", "2026-10-07", [], "#1", "finance", 0, []]] }));
  assert.deepEqual(landed(p), { anchor: "2026-10-08", count: 0, changes: 1, hasChanges: true });
  assert.deepEqual(landed(join(dir, "missing.json")), { anchor: null, count: 0, changes: 0, hasChanges: false });
  // D81: an empty array is a computed week without changes; only a missing key means "not computed yet"
  writeFileSync(p, JSON.stringify({ anchor: "2026-10-08", days: 7, items: [], changes: [] }));
  assert.deepEqual(landed(p), { anchor: "2026-10-08", count: 0, changes: 0, hasChanges: true });
});
