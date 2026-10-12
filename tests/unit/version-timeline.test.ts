/** D88: the version timeline folds quiet majors into ranges, and a member's change pills are one span with one title. */
import assert from "node:assert/strict";
import { test } from "node:test";
import { markMembers, timelineCols, type ObjectHistory } from "../../site/src/lib/versions.js";

const ms = ["23", "24", "25", "26", "27", "28", "29", "30"].map((version) => ({ version }));
const history = (change: Record<string, "added" | "changed" | "removed">, counts: Record<string, Record<string, number>> = {}, fields: Record<string, { version: string; change: "added" | "changed" | "removed" }[]> = {}): ObjectHistory => ({
  change: new Map(Object.entries(change)),
  members: { fields: new Map(Object.entries(fields)), procedures: new Map(), events: new Map() },
  counts: new Map(Object.entries(counts)),
});

test("timelineCols: present since the oldest major and changed once is three columns, not eight", () => {
  const all = ms.map((m) => m.version);
  const cols = timelineCols(ms, all, ["26"], history({ "26": "changed" }, { "26": { "fields changed": 3 } }));
  assert.deepEqual(cols.map((c) => [`BC${c.from}${c.to !== c.from ? `-${c.to}` : ""}`, c.text, c.changed]), [
    ["BC23-25", "present", false], ["BC26", "3 fields changed", true], ["BC27-30", "unchanged", false],
  ]);
});

test("timelineCols: an object added in BC28 keeps its 'added' column; the majors before fold into one 'not present'", () => {
  const cols = timelineCols(ms, ["28", "29", "30"], ["28"], history({ "28": "added" }));
  assert.deepEqual(cols.map((c) => [`BC${c.from}${c.to !== c.from ? `-${c.to}` : ""}`, c.text, c.present]), [
    ["BC23-27", "not present", false], ["BC28", "added", true], ["BC29-30", "unchanged", true],
  ]);
});

test("timelineCols: two changed majors in a row stay two columns", () => {
  const all = ms.map((m) => m.version);
  const cols = timelineCols(ms, all, ["29", "30"], history({ "29": "changed", "30": "changed" }));
  assert.deepEqual(cols.map((c) => c.from), ["23", "29", "30"]);
  assert.equal(cols[0].to, "28");
});

test("markMembers: one pill per member with every version, one title, the symbols kept", () => {
  const h = history({}, {}, { "Name": [{ version: "25", change: "changed" }, { version: "26", change: "changed" }], "Telex No.": [{ version: "25", change: "removed" }] });
  const html = markMembers("<table><tr><td>2</td><td>Name</td><td>Text[100]</td></tr><tr><td>10</td><td>Telex No.</td><td>Text[20]</td></tr></table>", h);
  assert.ok(html.includes('<td>Name <span class="pill" title="changed in BC25, BC26">Δ BC25 Δ BC26</span></td>'), html);
  assert.ok(html.includes('<td>Telex No. <span class="pill" title="removed in BC25">− BC25</span></td>'), html);
  assert.equal((html.match(/class="pill"/g) ?? []).length, 2, "one span per member, not per version");
});
