import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { ROOT } from "../../pipeline/lib/paths.js";

/**
 * Spec frontmatter for waldo.Jarvis's League (docs/specs/*.md, `.league.json`): the scout reads a spec only through a
 * YAML block with `---` on line 1, needs `issue:` (a number) and reads `status:` by its first word. The human `Status:`
 * line in the body stays in step: draft <-> proposed, implemented <-> implemented. Specs without frontmatter (the
 * implemented ones) are left alone; the specs still open in docs/HANDOFF.md must have it.
 */

const STATUSES = ["draft", "approved", "in-progress", "implemented", "failed"];
const BODY_STATUS: Record<string, string> = { draft: "proposed", implemented: "implemented" };

export interface SpecHead { frontmatter: boolean; issue?: string; status?: string; bodyStatus?: string }

/** `---` on line 1; bare scalars; a trailing ` # comment` is not part of the value; status is its first word. */
export function parseSpecHead(text: string): SpecHead {
  const bodyStatus = /^Status: (\w[\w-]*)/m.exec(text.replace(/^---\n[\s\S]*?\n---\n/, ""))?.[1].toLowerCase();
  const m = /^---\n([\s\S]*?)\n---(?:\n|$)/.exec(text);
  if (!m) return { frontmatter: false, bodyStatus };
  const scalar = (key: string) => {
    const v = new RegExp(`^${key}:[ \\t]*(.*)$`, "m").exec(m[1])?.[1].replace(/\s+#.*$/, "").trim();
    return v === undefined || v === "" ? undefined : v;
  };
  return { frontmatter: true, issue: scalar("issue"), status: /^[a-z][a-z-]*/i.exec(scalar("status") ?? "")?.[0].toLowerCase(), bodyStatus };
}

/** What is wrong with a spec's head; empty when it is fine. A spec without frontmatter is only wrong when `required`. */
export function specHeadProblems(h: SpecHead, required: boolean): string[] {
  if (!h.frontmatter) return required ? ["no frontmatter: `---` must be line 1"] : [];
  const out: string[] = [];
  if (!h.issue || !/^\d+$/.test(h.issue)) out.push(`issue must be a number, got ${h.issue ?? "nothing"}`);
  if (!h.status || !STATUSES.includes(h.status)) out.push(`status must start with one of ${STATUSES.join(", ")}, got ${h.status ?? "nothing"}`);
  else if (BODY_STATUS[h.status] && h.bodyStatus !== BODY_STATUS[h.status]) out.push(`status ${h.status} but the body line says "Status: ${h.bodyStatus ?? "(none)"}", expected "${BODY_STATUS[h.status]}"`);
  return out;
}

const SPECS = join(ROOT, "docs/specs");

test("1: parseSpecHead reads issue and the first word of status, ignoring inline comments", () => {
  const h = parseSpecHead("---\nissue: 12\nstatus: draft   # waiting for waldo\n---\n\n# T\n\nStatus: proposed, 2026-10-15. Decision: D97.\n");
  assert.deepEqual(h, { frontmatter: true, issue: "12", status: "draft", bodyStatus: "proposed" });
  assert.equal(parseSpecHead("---\nissue: 3\nstatus: Implemented, 2026-10-15\n---\n# T\n").status, "implemented");
});

test("2: a file without `---` on line 1 has no frontmatter", () => {
  assert.equal(parseSpecHead("\n---\nissue: 1\nstatus: draft\n---\n").frontmatter, false);
  assert.equal(parseSpecHead("# T\n\nStatus: implemented, 2026-10-08.\n").frontmatter, false);
});

test("3: problems: missing or bad issue, unknown status, body line out of step", () => {
  const p = (t: string) => specHeadProblems(parseSpecHead(t), true);
  assert.deepEqual(p("---\nissue: 5\nstatus: draft\n---\n\nStatus: proposed, 2026-10-15.\n"), []);
  assert.deepEqual(p("---\nissue: 5\nstatus: implemented\n---\n\nStatus: implemented, 2026-10-15.\n"), []);
  assert.match(p("---\nstatus: draft\n---\n\nStatus: proposed.\n")[0], /issue must be a number/);
  assert.match(p("---\nissue: #5\nstatus: draft\n---\n\nStatus: proposed.\n")[0], /issue must be a number/);
  assert.match(p("---\nissue: 5\nstatus: ready\n---\n\nStatus: proposed.\n")[0], /status must start with/);
  assert.match(p("---\nissue: 5\nstatus: draft\n---\n\nStatus: implemented, 2026-10-15.\n")[0], /expected "proposed"/);
  assert.match(p("---\nissue: 5\nstatus: implemented\n---\n\nStatus: proposed, 2026-10-15.\n")[0], /expected "implemented"/);
  assert.match(p("---\nissue: 5\nstatus: draft\n---\n\nNo status line.\n")[0], /\(none\)/);
});

test("4: approved, in-progress and failed leave the body line alone (the owner and the League set those)", () => {
  for (const s of ["approved", "in-progress", "failed"]) assert.deepEqual(specHeadProblems(parseSpecHead(`---\nissue: 5\nstatus: ${s}\n---\n\nStatus: proposed.\n`), true), [], s);
});

test("5: a spec without frontmatter is wrong only when it is required to have one", () => {
  const h = parseSpecHead("# T\n\nStatus: implemented, 2026-10-08.\n");
  assert.deepEqual(specHeadProblems(h, false), []);
  assert.deepEqual(specHeadProblems(h, true), ["no frontmatter: `---` must be line 1"]);
});

test("6: every committed spec that has frontmatter is valid", () => {
  const bad: string[] = [];
  for (const f of readdirSync(SPECS).filter((n) => n.endsWith(".md"))) {
    const problems = specHeadProblems(parseSpecHead(readFileSync(join(SPECS, f), "utf8")), false);
    if (problems.length) bad.push(`${f}: ${problems.join("; ")}`);
  }
  assert.deepEqual(bad, []);
});

test("7: every spec listed under 'Open specs, not yet implemented' in HANDOFF has frontmatter", () => {
  const handoff = readFileSync(join(ROOT, "docs/HANDOFF.md"), "utf8");
  const open = /^## Open specs, not yet implemented\n([\s\S]*?)(?=^## )/m.exec(handoff)?.[1] ?? "";
  const listed = [...open.matchAll(/^\*\*[^\n]*?\*\*\s*\(`(docs\/specs\/[a-z0-9-]+\.md)`/gm)].map((m) => m[1]);
  const bad: string[] = [];
  for (const path of listed) {
    const problems = specHeadProblems(parseSpecHead(readFileSync(join(ROOT, path), "utf8")), true);
    if (problems.length) bad.push(`${path}: ${problems.join("; ")}`);
  }
  assert.deepEqual(bad, []);
});
