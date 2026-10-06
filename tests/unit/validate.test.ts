import { test } from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { stringify as toYaml } from "yaml";
import { writeJson, writeText } from "../../pipeline/lib/fsx.js";
import type { SourceDef } from "../../pipeline/lib/config.js";
import type { ManifestItem } from "../../pipeline/lib/manifest.js";
import { renderFeaturePage } from "../../pipeline/render/feature.js";
import { learnText } from "../../pipeline/render/topic.js";
import { relativeLinks, validateContent } from "../../pipeline/validate/content.js";
import { checkLeak, forEachShingle, leakWords, SHINGLE } from "../../pipeline/validate/leak.js";

const NOW = new Date("2026-10-07T01:00:00Z");
const entry = { id: "573253", title: "More countries", area: "Expense Agent", description: "d", status: "In development", release_phase: "General Availability", ga: "December CY2026", preview: "October CY2026", created: null, modified: null, cloud: [], platforms: [] };
const item: ManifestItem = { id: "roadmap/m365-roadmap/573253", pillar: "roadmap", source: "m365-roadmap", tier: "official", title: "t", url: "https://www.microsoft.com/microsoft-365/roadmap?id=573253", state: "published", stages: {}, attempts: 0, input_hash: "h" };

function contentDir() {
  const dir = join(mkdtempSync(join(tmpdir(), "bcobs-content-")), "content");
  writeText(join(dir, "features/573253.md"), renderFeaturePage(item, entry, NOW));
  writeText(join(dir, "features/llms.txt"), "- [More countries](573253.md)\n");
  return dir;
}

test("validate:content: a rendered page and its index pass", () => {
  assert.deepEqual(validateContent(contentDir()), { pages: 1, indexes: 1, errors: [] });
});

test("validate:content: schema, id/path, duplicate ids, dangling link ids and broken relative links fail", () => {
  const dir = contentDir();
  const page = renderFeaturePage(item, entry, NOW);
  writeText(join(dir, "features/999.md"), page); // same id as 573253, wrong for its path
  writeText(join(dir, "features/bad.md"), page.replace("type: feature", "type: feature\nstatus: shipped").replace(/^status: preview\n/m, ""));
  writeText(join(dir, "features/links.md"), page.replace("id: feature/573253", "id: feature/links").replace("videos: []", "videos:\n    - video/AAAAAAAAAA1").replace("## Dates", "[gone](../videos/AAAAAAAAAA1.md#t)\n\n## Dates"));
  writeText(join(dir, "features/llms.txt"), "- [More countries](573253.md)\n- [Old](old.md)\n");
  const errs = validateContent(dir).errors.join("\n");
  assert.match(errs, /999\.md: id feature\/573253 should be feature\/999/);
  assert.match(errs, /id feature\/573253 also used by/);
  assert.match(errs, /bad\.md: schema frontmatter\.feature: .*status/);
  assert.match(errs, /links\.md: links\.videos names video\/AAAAAAAAAA1, which has no page/);
  assert.match(errs, /links\.md: broken link \.\.\/videos\/AAAAAAAAAA1\.md/);
  assert.match(errs, /llms\.txt: broken link old\.md/);
  assert.deepEqual(relativeLinks("[a](https://x) [b](#y) [c](mailto:z) [d](../d.md#k)"), ["../d.md"]);
});

test("Learn descriptions: includes become text, repo-relative links become Learn URLs", () => {
  const url = "https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/embed-app-using-application-family";
  assert.equal(learnText("Use the family in [!INCLUDE[embed app](../developer/includes/embedapp.md)] and [!INCLUDE[prod_short](../includes/prod_short.md)].", url),
    "Use the family in embed app and Business Central.");
  assert.equal(learnText("See [report object](../developer/devenv-report-object.md#props) or [Learn](https://x).", url),
    "See [report object](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-report-object#props) or [Learn](https://x).");
});

// ------------------------------------------------------------------------------------------------- check:leak

const OFFICIAL = { id: "yt-ms", kind: "youtube", tier: "official", full_text: true } as SourceDef;
const COMMUNITY = { id: "yt-comm", kind: "youtube", tier: "community", full_text: false } as SourceDef;
const OPTED_IN = { id: "blog-optin", kind: "blog", tier: "community", full_text: true } as SourceDef;
const SOURCES = [OFFICIAL, COMMUNITY, OPTED_IN];
const words = (n: number, from = 0) => Array.from({ length: n }, (_, i) => `w${i + from}`).join(" ");

function gitRepo() {
  const dir = mkdtempSync(join(tmpdir(), "bcobs-leak-"));
  const g = (...a: string[]) => execFileSync("git", a, { cwd: dir, stdio: "pipe" });
  g("init", "-q", "-b", "main");
  writeFileSync(join(dir, ".gitignore"), "vault/\n");
  writeJson(join(dir, "data/manifest/video/yt-ms/aaaaaaaaaa1--1234567890.json"), { id: "video/yt-ms/AAAAAAAAAA1", stages: {} });
  writeText(join(dir, "data/captions/microsoft/AAAAAAAAAA1.vtt"), "WEBVTT\n");
  return { dir, g, vault: join(dir, "vault") };
}

test("check:leak policy: vault and cache files in the tree, captions outside microsoft/ or of a non-official video", () => {
  const { dir, g, vault } = gitRepo();
  assert.deepEqual(checkLeak({ repoDir: dir, vaultDir: vault, sources: SOURCES }).findings, []);
  writeText(join(dir, "vault/llm-cache/x.json"), "{}");
  g("add", "-f", "vault/llm-cache/x.json"); // ignored, but tracked by force: still in the tree
  writeText(join(dir, "data/captions/community/yt-comm/BBBBBBBBBB1.vtt"), "WEBVTT\n");
  writeText(join(dir, "data/captions/microsoft/BBBBBBBBBB1.segments.json"), "{}");
  const kinds = checkLeak({ repoDir: dir, vaultDir: join(dir, "nope"), sources: SOURCES }).findings.map((f) => `${f.kind} ${f.path}`).sort();
  assert.deepEqual(kinds, [
    "captions-location data/captions/community/yt-comm/BBBBBBBBBB1.vtt",
    "captions-location data/captions/microsoft/BBBBBBBBBB1.segments.json",
    "vault-in-tree vault/llm-cache/x.json", // one finding per file: vault/ wins over llm-cache/
  ]);
  writeText(join(dir, "data/llm-cache/y.json"), "{}");
  assert.ok(checkLeak({ repoDir: dir, vaultDir: join(dir, "nope"), sources: SOURCES }).findings.some((f) => f.kind === "llm-cache-in-tree" && f.path === "data/llm-cache/y.json"));
});

test("check:leak policy: long quotes on community pages, unless the source opted in", () => {
  const { dir, vault } = gitRepo();
  const page = (channel: string, quote: string) => `---\n${toYaml({ id: "video/x", type: "video", tier: "community", channel, evidence: [{ kind: "video", url: "u", quote }], quotes: [] })}---\n`;
  writeText(join(dir, "content/videos/a.md"), page("yt-comm", words(SHINGLE - 1)));
  assert.deepEqual(checkLeak({ repoDir: dir, vaultDir: vault, sources: SOURCES }).findings, []);
  writeText(join(dir, "content/videos/b.md"), page("yt-comm", words(SHINGLE)));
  writeText(join(dir, "content/videos/c.md"), page("blog-optin", words(SHINGLE + 10)));
  const f = checkLeak({ repoDir: dir, vaultDir: vault, sources: SOURCES }).findings;
  assert.deepEqual(f.map((x) => `${x.kind} ${x.path}`), ["quote-length content/videos/b.md"]);
});

test("check:leak shingles: 25 consecutive community words anywhere fail, 24 pass, opted-in sources and VTT repeats handled", () => {
  const { dir, vault } = gitRepo();
  writeJson(join(vault, "captions/community/yt-comm/CCCCCCCCCC1.segments.json"), { segments: [{ text: words(40) }] });
  writeText(join(vault, "posts/blog-optin/p1.md"), words(40, 1000));
  writeText(join(dir, "data/extract/video/ok.json"), JSON.stringify({ text: `${words(SHINGLE - 1)} and ${words(SHINGLE - 1, 30)}` }));
  writeText(join(dir, "content/posts/optin.md"), words(40, 1000));
  let r = checkLeak({ repoDir: dir, vaultDir: vault, sources: SOURCES });
  assert.deepEqual([r.vault, r.raw_docs, r.findings], ["scanned", 1, []]);
  writeText(join(dir, "content/videos/leak.md"), `Intro. ${words(SHINGLE, 5).toUpperCase().replace(/ /g, ", ")}.`);
  // a rolling-caption VTT repeats each line in the next cue; the cleaner removes that before scanning
  const cues = [words(9, 10), words(9, 19), words(9, 28)]; // 27 words, each line repeated in the next cue
  writeText(join(dir, "data/captions/microsoft/AAAAAAAAAA1.vtt"), `WEBVTT\n\n00:00:01.000 --> 00:00:02.000\n${cues[0]}\n\n00:00:02.000 --> 00:00:03.000\n${cues[0]}\n${cues[1]}\n\n00:00:03.000 --> 00:00:04.000\n${cues[1]}\n${cues[2]}\n`);
  r = checkLeak({ repoDir: dir, vaultDir: vault, sources: SOURCES });
  assert.deepEqual(r.findings.map((f) => `${f.kind} ${f.path}`).sort(), ["shingle content/videos/leak.md", "shingle data/captions/microsoft/AAAAAAAAAA1.vtt"]);
});

test("check:leak changedOnly scans only what differs from HEAD", () => {
  const { dir, g, vault } = gitRepo();
  writeJson(join(vault, "captions/community/yt-comm/CCCCCCCCCC1.segments.json"), { segments: [{ text: words(40) }] });
  writeText(join(dir, "data/old.json"), words(30)); // committed before: the full scan still sees it
  g("add", "-A"); g("-c", "user.name=t", "-c", "user.email=t@e", "commit", "-q", "-m", "x");
  assert.equal(checkLeak({ repoDir: dir, vaultDir: vault, sources: SOURCES, changedOnly: true }).findings.length, 0);
  assert.equal(checkLeak({ repoDir: dir, vaultDir: vault, sources: SOURCES }).findings.length, 1);
  writeText(join(dir, "content/videos/new.md"), words(30, 2));
  assert.deepEqual(checkLeak({ repoDir: dir, vaultDir: vault, sources: SOURCES, changedOnly: true }).findings.map((f) => f.path), ["content/videos/new.md"]);
});

test("check:leak: the vault is required once community raw text exists", () => {
  const { dir } = gitRepo();
  const missing = join(dir, "no-vault");
  assert.equal(checkLeak({ repoDir: dir, vaultDir: missing, sources: SOURCES }).vault, "not-needed");
  writeJson(join(dir, "data/manifest/video/yt-comm/dddddddddd1--1.json"), { id: "video/yt-comm/DDDDDDDDDD1", stages: { captioned: { at: "x" } } });
  const r = checkLeak({ repoDir: dir, vaultDir: missing, sources: SOURCES });
  assert.deepEqual([r.vault, r.findings.map((f) => f.kind)], ["missing", ["vault-missing"]]);
  assert.deepEqual(checkLeak({ repoDir: dir, vaultDir: missing, sources: SOURCES, policyOnly: true }).findings, [], "PR CI: policy checks only");
});

test("shingle hashing: every window of SHINGLE words, same key for the same words", () => {
  const keys: number[] = [];
  forEachShingle(leakWords(words(SHINGLE + 2)), (k) => { keys.push(k); });
  assert.equal(keys.length, 3);
  const again: number[] = [];
  forEachShingle(leakWords(`x ${words(SHINGLE)}`), (k) => { again.push(k); });
  assert.equal(again[1], keys[0]);
  assert.deepEqual(leakWords("It's [a](b) GOOD-day, 2026!"), ["it's", "a", "b", "good", "day", "2026"]);
});
