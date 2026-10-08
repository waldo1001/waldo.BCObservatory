/** AL Language extension release pages (D85): frontmatter, body, "What changed on this page", index and re-render. */
import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import matter from "gray-matter";
import { writeJson } from "../../pipeline/lib/fsx.js";
import { Manifest, type ManifestItem } from "../../pipeline/lib/manifest.js";
import { validate } from "../../pipeline/lib/schema.js";
import type { SnapshotVersion } from "../../pipeline/ingest/marketplace.js";
import type { StageFn } from "../../pipeline/orchestrator/execute.js";
import { releaseChanges, releasePublished, renderReleaseIndex, renderReleasePage, rerenderReleasePages } from "../../pipeline/render/release.js";

const NOW = new Date("2026-10-09T01:00:00Z");
const URL = "https://marketplace.visualstudio.com/items/ms-dynamics-smb.al/changelog";
const V18: SnapshotVersion = {
  key: "al-18.0", version: "18.0", wave: "2026 release wave 2", major: "29", preview_at: "2026-03-06", released_at: "2026-09-09", merged_tracks: true,
  entries: [
    { slug: "_intro", level: 3, title: "", body_md: "Version 18.0 brings the 2026 release wave 2 compiler.", issues: [] },
    { slug: "inherent-permissions-validation-in-multi-root-workspaces", level: 3, title: "Inherent permissions validation in multi-root workspaces", body_md: "The compiler now reports AL0720.", issues: [] },
    { slug: "new-language-features", level: 3, title: "New language features", body_md: "", issues: [] },
    { slug: "isolatedstorage-get-with-read-isolation-level", level: 4, title: "IsolatedStorage.Get with read isolation level", body_md: "```al\n# not a heading\nIsolatedStorage.Get('k', v);\n\n\n```", issues: [] },
    { slug: "github-issues", level: 3, title: "GitHub issues", body_md: "- [#8280](https://github.com/microsoft/AL/issues/8280) Fixed.\n- [#8273](https://github.com/microsoft/AL/issues/8273) Fixed.", issues: [8273, 8280] },
  ],
};
const V30: SnapshotVersion = {
  key: "al-30.0", version: "30.0", wave: "2027 release wave 1", major: "30", preview_at: "2026-10-01", released_at: null, merged_tracks: false,
  entries: [{ slug: "markdown-page-fields", level: 3, title: "Markdown page fields", body_md: "- Added `ExtendedDatatype = Markdown`.", issues: [] }],
};
const itemOf = (v: SnapshotVersion, state: ManifestItem["state"] = "fetched"): ManifestItem => ({
  id: `release/al-language-extension/${v.key}`, pillar: "release", source: "al-language-extension", tier: "official", title: `AL Language extension ${v.version}`,
  url: URL, state, stages: { discovered: { at: "2026-10-08T01:00:00.000Z" }, fetched: { at: "2026-10-08T01:00:00.000Z" } }, attempts: 0, input_hash: "h",
});
const page = (text: string) => matter(text);
const CHANGE = { at: "2026-10-01", added: ["inherent-permissions-validation-in-multi-root-workspaces"], changed: [], removed: [] };

test("release page: frontmatter validates, dated by the release, issues and entries counted, tags without _intro (test 17)", () => {
  const { data } = page(renderReleasePage(itemOf(V18), V18, [], URL, NOW));
  const v = validate("frontmatter.release", data);
  assert.ok(v.ok, v.errors.join("; "));
  assert.deepEqual([data.id, data.type, data.tier, data.system, data.review.state], ["release/al-18.0", "release", "official", "development", "derived"]);
  assert.deepEqual([data.published_at, data.released_at, data.preview_at, data.prerelease, data.major, data.wave], ["2026-09-09", "2026-09-09", "2026-03-06", false, "29", "2026 release wave 2"]);
  assert.deepEqual([data.entry_count, data.issues, data.extension, data.source_id], [4, [8273, 8280], "ms-dynamics-smb.al", "al-language-extension"]);
  assert.deepEqual(data.tags, ["inherent permissions validation in multi-root workspaces", "new language features", "isolatedstorage.get with read isolation level", "github issues"]);
  assert.equal(data.summary, "AL Language extension 18.0 for Business Central 2026 release wave 2 (BC29): previewed 2026-03-06, released 2026-09-09; 4 changelog entries, 2 GitHub issues linked.");
  assert.ok(data.summary.length < 600);
  assert.deepEqual(data.evidence[0], { kind: "marketplace", url: URL, title: "AL Language extension changelog, version 18.0", date: "2026-09-09", commit: null, t: null, quote: null });
  const pre = page(renderReleasePage(itemOf(V30), V30, [], URL, NOW)).data;
  assert.deepEqual([pre.published_at, pre.prerelease], ["2026-10-01", true]);
  assert.match(pre.summary, /previewed 2026-10-01, no stable release yet; 1 changelog entry\.$/);
  // a version the gallery holds no upload of has no date: it is never news in whats_new
  const undated = page(renderReleasePage(itemOf(V30), { ...V30, preview_at: null }, [], URL, NOW)).data;
  assert.ok(validate("frontmatter.release", undated).ok);
  assert.equal(undated.published_at, null);
});

test("release page: 'What changed on this page' before the first entry, only with changes (test 18)", () => {
  const withChange = page(renderReleasePage(itemOf(V18), V18, [{ ...CHANGE, removed: ["old-entry"] }], URL, NOW));
  const body = withChange.content;
  const at = body.indexOf("## What changed on this page");
  assert.ok(at > 0 && at < body.indexOf("## Inherent permissions"));
  assert.match(body, /\n- 2026-10-01: added "Inherent permissions validation in multi-root workspaces"\n- 2026-10-01: removed "old-entry"\n/);
  assert.deepEqual(withChange.data.changes, [{ at: "2026-10-01", added: ["inherent-permissions-validation-in-multi-root-workspaces"], changed: [], removed: ["old-entry"] }]);
  const none = page(renderReleasePage(itemOf(V18), V18, [], URL, NOW));
  assert.ok(!none.content.includes("What changed on this page"));
  assert.deepEqual(none.data.changes, []);
});

test("release page: entry levels map to ## and ###, fenced blocks verbatim, the intro first, the source line last (test 19)", () => {
  const body = page(renderReleasePage(itemOf(V18), V18, [], URL, NOW)).content;
  assert.match(body, /^> AL Language extension 18\.0 for/m);
  assert.match(body, /\[Changelog on the Visual Studio Marketplace\]\(https:\/\/marketplace\.visualstudio\.com\/items\/ms-dynamics-smb\.al\/changelog\) · Business Central 2026 release wave 2 · BC29/);
  assert.ok(body.indexOf("Version 18.0 brings") < body.indexOf("## Inherent permissions"));
  assert.match(body, /\n## New language features\n\n### IsolatedStorage\.Get with read isolation level\n\n```al\n# not a heading\nIsolatedStorage\.Get\('k', v\);\n\n\n```\n/);
  assert.equal((body.match(/^## /gm) ?? []).length, 3);
  assert.match(body, /Source: Visual Studio Marketplace, ms-dynamics-smb\.al changelog, Microsoft's text unchanged\. Dates from the gallery's upload records\. Merged from the stable and pre-release changelogs, which differ for this version\.\n$/);
  assert.ok(!page(renderReleasePage(itemOf(V30), V30, [], URL, NOW)).content.includes("Merged from"));
});

function tree() {
  const root = mkdtempSync(join(tmpdir(), "bcobs-rel-"));
  const dataDir = join(root, "data"), contentDir = join(root, "content");
  const snap = (versions: SnapshotVersion[]) => ({ taken_at: NOW.toISOString(), hash: "x", extension: "ms-dynamics-smb.al", uploads: 4, tracks: { stable: null, prerelease: null }, dropped_bytes: 0, versions });
  return { root, dataDir, contentDir, snap };
}

test("release index: llms.txt newest first, pages of versions the snapshot lacks are deleted and skip removed-upstream (test 20)", async () => {
  const { dataDir, contentDir, snap } = tree();
  writeJson(join(dataDir, "releases/al/snapshots/2026-10-08.json"), snap([V30, V18]));
  const ctx = { dataDir, contentDir, now: () => NOW } as any;
  for (const v of [V30, V18]) {
    const r = await (releasePublished() as StageFn)(itemOf(v), ctx);
    assert.equal(r.data?.path, `content/releases/${v.key}.md`);
  }
  assert.equal((await (releasePublished() as StageFn)({ ...itemOf(V18), id: "release/al-language-extension/al-9.9" }, ctx)).skip, "removed-upstream");
  writeFileSync(join(contentDir, "releases/al-1.0.md"), "---\nid: release/al-1.0\n---\n");
  assert.equal(renderReleaseIndex(contentDir, dataDir), 2);
  assert.equal(existsSync(join(contentDir, "releases/al-1.0.md")), false);
  const idx = readFileSync(join(contentDir, "releases/llms.txt"), "utf8");
  assert.match(idx, /^# BC Observatory: releases\n/);
  assert.match(idx, /\n2 versions, newest first\.\n\n- \[AL Language extension 30\.0\]\(al-30\.0\.md\): 2027 release wave 1 \(BC30\), preview 2026-10-01, not yet released, 1 entry\n- \[AL Language extension 18\.0\]\(al-18\.0\.md\): 2026 release wave 2 \(BC29\), preview 2026-03-06, released 2026-09-09, 4 entries\n/);
});

test("release re-render: a new diff reaches a published page; without one the file is untouched (test 21)", async () => {
  const { dataDir, contentDir, snap } = tree();
  writeJson(join(dataDir, "releases/al/snapshots/2026-10-01.json"), snap([V30, { ...V18, entries: V18.entries.filter((e) => !e.slug.startsWith("inherent")) }]));
  writeJson(join(dataDir, "releases/al/diffs/2026-10-01.json"), { from: null, to: "2026-10-01", added: ["al-30.0", "al-18.0"], removed: [], changed: [], entries: {} });
  const manifest = new Manifest(join(dataDir, "manifest"));
  for (const v of [V30, V18]) manifest.save({ ...itemOf(v, "published"), stages: { ...itemOf(v).stages, published: { at: "2026-10-01T01:00:00.000Z" } } });
  assert.equal(rerenderReleasePages(manifest, dataDir, contentDir, NOW), 2);
  const path = join(contentDir, "releases/al-18.0.md");
  const first = readFileSync(path, "utf8");
  assert.ok(!first.includes("What changed on this page"), "the first snapshot's diff writes no change lines");
  assert.equal(rerenderReleasePages(manifest, dataDir, contentDir, new Date("2026-10-10T01:00:00Z")), 2);
  assert.equal(readFileSync(path, "utf8"), first, "same content: generated.at is not rewritten");
  writeJson(join(dataDir, "releases/al/snapshots/2026-10-11.json"), snap([V30, V18]));
  writeJson(join(dataDir, "releases/al/diffs/2026-10-11.json"), { from: "2026-10-01", to: "2026-10-11", added: [], removed: [], changed: ["al-18.0"], entries: { "al-18.0": { added: ["inherent-permissions-validation-in-multi-root-workspaces"], changed: [], removed: [] } } });
  assert.deepEqual(releaseChanges(dataDir).get("al-18.0"), [{ at: "2026-10-11", added: ["inherent-permissions-validation-in-multi-root-workspaces"], changed: [], removed: [] }]);
  rerenderReleasePages(manifest, dataDir, contentDir, new Date("2026-10-11T01:00:00Z"));
  assert.match(readFileSync(path, "utf8"), /- 2026-10-11: added "Inherent permissions validation in multi-root workspaces"/);
});
