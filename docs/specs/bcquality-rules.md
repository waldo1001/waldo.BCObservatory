---
issue: 58
status: implemented
---

# BCQuality rules as pages: the knowledge base, not just its pull requests

Status: implemented, 2026-10-29 (section 12 records what was built and where it differs). Decision: D126 (appended
2026-10-29). Milestone: M61. Owner: waldo.
Scope: the `guidelines` pillar for the `bcquality` source (flow, published stage, renderer, schema, index page), the
search record and shard, the BCQuality change pages' `links.guidelines`, the leak gate, the site section, the MCP
(`bc_search` type, layer, `bc_get_object` rows) and its release. Every claim below was verified against the tree at
`975188d766` on 2026-10-29; upstream numbers come from a shallow clone of microsoft/BCQuality at `a4593a1`
(2026-10-20), the commit the newest change page (`content/changes/bcquality/249.md`) was built from. Not in scope:
the `custom/` layer (empty upstream, section 3), the `alguidelines` source (links-only, stays skipped), topic hubs
listing rules (LLM, section 8), a `bc_brief` layer for rules (section 8), any model text.

## 1. Goal

`sources.yaml:78-87` registers microsoft/BCQuality as an official, `full_text: true` source with paths `microsoft/`
and `community/`, and `docs/PLAN.md:64` calls it "a first-class source". It is ingested and then dropped:

- `pipeline/ingest/git-content.ts:33` gives it pillar `guidelines`; there are 458 manifests in
  `data/manifest/guidelines/bcquality/`, and **all 458 sit at `state: "fetched"`**
  (`cat data/manifest/guidelines/bcquality/* | grep -o '"state": *"[a-z_]*"' | sort | uniq -c`).
- `pipeline/orchestrator/stages.ts:68` registers only `guidelines: { fetched: gitPageFetched() }`. No later stage has a
  handler, so nothing moves.
- `pipeline/lib/manifest.ts:49` gives the pillar the full LLM flow (`extracted`, `summarized`, `linked`, `reviewed`,
  `published`). `pipeline/lib/queue.ts:23` maps it to quota `guidelines` (`config/budget.json:43`, 20 a night), and
  `reviewed` would take `opus_reviews` (`queue.ts:33`). None of that fits a source whose files are already structured
  text under MIT.
- `gitPageFetched` (`pipeline/fetch/git-page.ts:123-139`) parses Learn frontmatter: `ms.search.keywords`, `ms.date`,
  `ms.topic`. A BCQuality rule has none of these, so every rule manifest has `keywords: []`, `description: null` and no
  `identifiers` (the D94 backfill only takes pillar `docs`, `git-page.ts:211`, called from `nightly.ts:508`).
- No `content/guidelines/`, no search record, nothing in the MCP. The hooks were planned and left empty:
  `links.guidelines` is in the base schema (`schemas/frontmatter.base.json`, `links` property) and in every change
  page (`pipeline/render/change.ts:64` writes `guidelines: []`), `"guidelines"` is in `ID_LINKS`
  (`pipeline/validate/content.ts:21`), and the evidence kind `guideline` exists in the base schema.

Only the pull requests reach readers (`bcquality-prs`, `sources.yaml:134-145`, 102 pages in `content/changes/bcquality/`).
An agent can find out that rule X changed last week, but not what rule X says.

Measured upstream at `a4593a1` (script: `python3 -I measure.py <clone> <worktree>`, which walks `microsoft/` and
`community/`):

| measure | value |
|---|---|
| rule markdown files | 458 (435 knowledge rules, 23 review skills under `*/skills/`) |
| words, all rules (manifest `stages.fetched.words`) | 151,977, so about 330 per rule |
| frontmatter on every file | `bc-version`, `technologies`, `countries`, `application-area` (458) |
| `domain` and `keywords` | 435 (all knowledge rules; skills carry `kind`, `id`, `version`, `title`, `description`, `inputs`, `outputs`) |
| domains | performance 82, ui 39, data-modeling 38, style 33, security 30, upgrade 26, events 25, privacy 20, testing 20, agents 20, web-services 17, reporting 12, error-handling 11, scm 10, appsource 10, breaking-changes 9, finance 9, telemetry 7, query 6, interfaces 6, copilot 5 |
| `##` headings | Description 435, Best Practice 433, Anti Pattern 418, References 85, Source 44, See also 27; skills: Relevance, Worklist, Action, Output 23 each |
| `.good.al` / `.bad.al` examples | 751 files beside 384 rules, all matched by stem (`<rule>.good.al`, `<rule>.bad.al`, numbered variants) |
| `custom/` | `README.md` and two `.gitkeep` files only |
| BCQuality change pages that touch a rule file | 94 of 102 (`objects_unjoined` paths under `microsoft/` or `community/` ending `.md`); 439 of the 458 current rules are named by at least one |

After this change:
- Every BCQuality rule and review skill under `microsoft/` and `community/` is a page,
  `content/guidelines/<repo path without .md>.md`, rendered deterministically from the blob: the rule text under MIT
  with attribution, its facets, links to its AL examples on GitHub, the objects and Learn pages it names, and the pull
  requests that changed it.
- The pages are search records of type `guideline` (site and MCP), `bc_cat` reads them, and `bc_get_object` lists the
  rules that name an object.
- BCQuality change pages link to the rules they changed (`links.guidelines`), and a rule page lists those changes.
- No tokens: the pillar's flow becomes `discovered → fetched → published`, with no quota.

## 2. Reader- and agent-facing behaviour, after

**Site section** "Quality rules" at `/guidelines/` (nav group 2, after "Code changes"), noun "BCQuality rule" /
"BCQuality rules", blurb: "Microsoft's BCQuality knowledge base for AL: each rule with its good and bad examples, the
objects it names and the pull requests that changed it." The index lists the rules grouped by domain (the domain
headings in the order of the table above, by count; review skills last under "Review skills"). Each row: title, layer
chip (`microsoft` or `community`), first sentence of the summary.

**A rule page**, for example `/guidelines/microsoft/knowledge/performance/admin-and-migration-pages-tolerate-lower-perf/`:

```
# Admin and migration pages tolerate lower performance discipline

> Some pages run rarely and against small datasets, and the upstream guidance explicitly calls for treating them as lower severity.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/admin-and-migration-pages-tolerate-lower-perf.md) · microsoft layer · performance · BC all · tier official · derived

## Description
<the rule's own section text, verbatim>

## Best Practice
<verbatim>

## Anti Pattern
<verbatim>

## Examples
- [Good: admin-and-migration-pages-tolerate-lower-perf.good.al](https://github.com/microsoft/BCQuality/blob/main/...)
- [Bad: ...](...)

## Names
- [Codeunit 80 "Sales-Post"](../../../../objects/codeunit/80.md) (names this object)
- [Record.SetLoadFields(...) Method](https://learn.microsoft.com/...) (names SetLoadFields)

## Changed by
- [#249 Route guard-dependent and/or conditions to the short-circuit article](../../../../changes/bcquality/249.md), 2026-10-20

---
From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
```

Sections that are empty are left out (no "Examples" on the 74 rules without examples, no "Names" when nothing
resolves). The rule's H1 is replaced by the page title; every other heading and paragraph is the rule's own, in order.

**A change page** (`content/changes/bcquality/<n>.md`) gets its rule files in `links.guidelines` as page ids, and its
"Unjoined files" lines for those paths become links to the rule pages.

**MCP.**
- `bc_search('SetLoadFields admin page')` returns guideline hits in a layer "Quality rules"; `type: 'guideline'`
  filters to them. The layer order: Learn, Code, Quality rules, Changes, Community and videos, Other.
- `bc_cat('guidelines/microsoft/knowledge/performance/admin-and-migration-pages-tolerate-lower-perf')` returns the page.
- `bc_get_object('codeunit', '80')` ends with `BCQuality rules naming this object:` and at most 10 rows
  (`title · path`), read from the guideline search records. On an object no rule names, the line is absent.
- `bc_ls('guidelines')` lists the domains, `bc_ls('guidelines/microsoft/knowledge/performance')` the rules.
- `bc_status` counts `guideline` under page counts by type (it reads `by_type`, nothing to add).

## 3. Decisions

**D126 draft text:**

> **D126 BCQuality rules are pages, built without a model.** microsoft/BCQuality's knowledge base (`microsoft/` and
> `community/`, 458 files on 2026-10-29) was ingested since M1 and never left `fetched`. Each rule and review skill is
> now a page, `content/guidelines/<repo path>.md`, type `guideline`, tier official, review `derived`: the rule's own
> text reproduced under its MIT licence with the copyright line and `content/guidelines/LICENSE-BCQuality.txt`, its
> frontmatter facets, its `.good.al`/`.bad.al` files as GitHub links (no code copied), the objects it names (typed
> references certain, unique multi-word code spans possibly related) and the Learn pages it names (coded ids and
> unique method names), and the BCQuality pull requests whose files include it (exact path, both directions). The
> pillar's flow is `discovered → fetched → published` with no quota; the LLM quota `guidelines` is removed. The
> `custom/` layer stays out: upstream it holds only a template, and its content belongs in forks. Object pages do not
> list rules (D88: no bytes on object pages); `bc_get_object` lists them from the search records instead.

Rejected:
- **Search rows only, Learn-style (D94).** Cheapest (one shard, no pages), but `bc_cat` could not return a rule,
  nothing on the site could link to one, and `links.guidelines` would stay empty. The owner chose pages.
- **An LLM summary or extraction per rule.** The files are already structured (Description / Best Practice / Anti
  Pattern on 418 of 435 rules) and MIT; a model pass would add cost and a review state for text we can show as it is.
- **Topic hubs listing rules (link/topics.ts as a fourth unit kind).** An LLM pass of 458 items through
  `topic_links`; deferred to section 8, so this spec costs no tokens.
- **Inlining the `.al` examples.** 751 files; every example edit would rewrite a page and pages would roughly double.
  Links cost one line each.
- **Rules on object pages.** D88: nothing may add bytes to object pages (25,666 of them, 454 MB of the 717 MB Pages
  tar on 2026-10-29). The reverse direction lives in the MCP and in search.
- **Bare single-word object names in code spans.** Measured: the most frequent unique hits were `local`
  (permissionset 1001, 35 times), `location` (table 14, 29), `severity` (enum 9190, 15), `Status` (report 706): noise.
  Only typed references and multi-word names count (section 4.4).
- **The `custom/` layer.** `custom/README.md` says it is a template for forks and upstream does not accept custom
  rules; `bcquality-prs` keeps listing it in `paths` (`sources.yaml:142`) because PRs can change the template.

## 4. Contract

### 4.1 Flow and quota

- `pipeline/lib/manifest.ts:49`: `guidelines: ["discovered", "fetched", "published"]`, with a comment naming D126.
- `pipeline/lib/queue.ts:23`: `guidelines: null` in `PILLAR_QUOTA`. `config/budget.json:43` drops `"guidelines": 20`,
  and `pipeline/lib/budget.ts:109` drops `"guidelines"` from `LLM_QUOTAS`. `tests/unit/queue.test.ts:59` passes
  `guidelines: 0` as a quota and is updated with them.
- Items that are `fetched` today move to `published` on the first run (the next stage of `fetched` in the new flow).
  The `alguidelines` items are `skipped` (`links-only`, `git-content.ts:51`) and stay so.
- `published` runs only for source `bcquality`. An item of another `guidelines-git` source that is not skipped returns
  `{ skip: "no-renderer" }`.

### 4.2 Fetched: BCQuality frontmatter

`parsePage` (`git-page.ts:123`) reads two more things, used only when the keys exist (Learn pages are unchanged):

```ts
export interface PageMeta { /* existing fields */ bcq?: BcqMeta }
export interface BcqMeta {
  domain: string | null;            // frontmatter `domain`; null on skills
  keywords: string[];               // frontmatter `keywords` (array), at most 20
  bc_version: string[];             // `bc-version`, e.g. ["all"] or [">=24"]
  technologies: string[]; countries: string[]; application_area: string[];
  kind: "rule" | "skill";           // "skill" when the path has /skills/ or frontmatter `kind` is set
  summary: string | null;           // see below
}
```

- `summary`: for a rule, the first paragraph under `## Description`, markdown links reduced to their text and code
  spans to their content, cut at the last sentence end at or before 300 characters (whole paragraph when shorter);
  for a skill, frontmatter `description`. Null when neither exists.
- `gitPageFetched` writes `meta.bcq` and sets `meta.description` to `summary` (so the leak gate's official text, 4.6,
  holds it), `meta.keywords` to `bcq.keywords`, and `meta.identifiers` with `IDENTIFIERS_RULE` as today.
- `backfillIdentifiers` and its call (`nightly.ts:508`) are not needed: every BCQuality item is re-fetched once,
  because phase 1 bumps a `BCQ_META_RULE = 1` and `planQueue` treats a `guidelines` item whose `meta.bcq_rule` is
  missing or lower as due for `fetched` again. A fetched stage is free (`queue.ts:31`).

### 4.3 Published: the page

`pipeline/render/guideline.ts`, modelled on `pipeline/render/hotfix.ts`:

```ts
export const guidelinePagePath = (contentDir: string, repoPath: string) => resolve(contentDir, "guidelines", repoPath);
export function guidelinePublished(): StageHandler;             // reads the blob again from the mirror (mirrorFor), renders, writes
export function renderGuidelinePage(i: GuidelineInput, joins: GuidelineJoins, now: Date): string;   // pure
export function renderGuidelineIndex(contentDir: string, manifest: Manifest): number;               // content/guidelines/llms.txt, removes pages of removed items
export function rerenderGuidelinePages(manifest: Manifest, dataDir: string, contentDir: string, mirrorsDir: string, now: Date): number; // after change pages, like rerenderHotfixPages
export function examplesOf(tree: string[], repoPath: string): { label: string; path: string }[];  // "<stem>.good.al", "<stem>.bad.al", "<stem>.good.2.al" ...
export function rewriteRuleLinks(body: string, repoPath: string, rulePaths: Set<string>, blobBase: string): string;
```

- Body: the blob's markdown after the frontmatter, the first `# ` heading removed, relative links rewritten: a link to
  another rule file that has a page becomes a relative page link; any other relative link becomes an absolute GitHub
  blob URL at `main`. Fenced code stays as it is.
- Examples come from the mirror's tree at the published commit (`lsTree` over the rule's folder). `git-content.ts`
  already lists the tree (`git-content.ts:38`) but keeps only `.md` (`isContentPage`); `examplesOf` takes the full listing, which the
  published stage reads once per run and caches by folder.
- `LICENSE-BCQuality.txt`: the upstream `LICENSE` blob at the same commit, written to `content/guidelines/` when it
  differs.
- `content/guidelines/llms.txt`: `llmsTitle("guidelines")`, a two-line blockquote (what this is, "Frontmatter:
  schemas/frontmatter.guideline.json"), the count, then one line per rule grouped by domain.
- Removal: `markRemoved` (`git-content.ts:54`) marks deleted rules. `renderGuidelineIndex` deletes the page of every
  item marked `removed-upstream`.

Frontmatter (`schemas/frontmatter.guideline.json`, `allOf` base):

```yaml
id: guideline/microsoft/knowledge/performance/admin-and-migration-pages-tolerate-lower-perf
type: guideline
title: Admin and migration pages tolerate lower performance discipline
summary: Some pages run rarely and against small datasets, and the upstream guidance explicitly calls for treating them as lower severity.
tier: official
language: en
tags: [admin-page, migration, wizard, hybrid, permissions, lower-severity]
system: development
review: { state: derived, by: null, at: null, flags: [] }
generated: { at: "...", pipeline: 0.2.0, input_hash: <blob id> }
evidence:
  - { kind: guideline, url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/admin-and-migration-pages-tolerate-lower-perf.md, title: "microsoft/BCQuality: Admin and migration pages tolerate lower performance discipline", date: "2026-09-09", commit: a4593a1..., t: null, quote: null }
links: { learn: [], objects: [], features: [], topics: [], localizations: [], videos: [], posts: [], guidelines: [], changes: [change/bcquality/249], related: [...] }
repo_path: microsoft/knowledge/performance/admin-and-migration-pages-tolerate-lower-perf.md
layer: microsoft            # microsoft | community
kind: rule                  # rule | skill
domain: performance         # null on skills
bc_version: [all]
technologies: [al]
countries: [w1]
application_area: [all]
examples: 2
```

- `system`: `DOMAIN_SYSTEM = { finance: "finance", scm: "inventory", agents: "copilot", copilot: "copilot",
  reporting: "reporting" }`, everything else `development`. All five are systems the change pages already use.
- `date` in evidence: the manifest's `published_at` (the last commit touching the file), as a date.

### 4.4 Joins (deterministic, no title matching)

`pipeline/link/guidelines.ts`, pure functions over the rule body (fences removed, as `pageIdentifiers` does):

- **Typed object references** → `links.objects`, crosslink label `names`, by `code`:
  `/\b(Table|Page|Codeunit|Report|Enum|Query|XmlPort)\s+(\d+\s+)?"([^"]+)"/i`, resolved with `resolveMentions`
  (`pipeline/link/mentions.ts:93`) against `loadObjectIndex`. Measured: 75 such references upstream.
- **Multi-word code spans** → `links.related`, label `possibly related`: a single-backtick span (quotes stripped) that
  contains a space, `.`, `-` or `/`, whose lower-cased name is one object across all types, or one table where every
  other object of that name is a page. Single-word spans never count (section 3). Measured on the multi-word subset:
  `Notification Lifecycle Mgt.`, `Report Selections`, `Item Ledger Entry`, `Sales Line` (table over page), and so on.
- **Learn pages** → `links.learn` (URLs), label `names`: an identifier of the rule (D94/D95 rule) that is a coded id
  (`AL0432`, `AS0001`) joins the Learn rows whose path ends `-<id lower>`; a camelCase/PascalCase identifier joins the
  one `methods-auto/` row ending `-<name lower>-method` when exactly one exists. Measured: 104 rules get at least one
  Learn row, 190 in all, at most 10 on one rule.
- **Pull requests** → `links.changes` on the rule, `links.guidelines` on the change: a BCQuality change page whose
  `objects_unjoined[].path` equals the rule's `repo_path`. Built from the change pages' frontmatter at render time
  (`changesByWorkItem` in `hotfix.ts:37` is the pattern). On the change side, `pipeline/render/change.ts:64` fills
  `guidelines` from the same map (`guidelinesByPath(contentDir)`), and line 88's unjoined line links the rule page when
  one exists.
- Caps: at most 24 objects, 12 Learn rows and 30 changes per rule page (newest first); the schema enforces them.
- The guideline rows go into `data/links/crosslinks.json` only in the rule-to-target direction. `buildCrossLinks`
  must not write rows onto object pages from guidelines (D88).

### 4.5 Search and MCP

- `pipeline/render/search.ts`: `pageToRecord` sets for `fm.type === "guideline"`: `source: fm.layer`,
  `status: fm.kind`, `path_label: "BCQuality › <domain>"` (skills: "BCQuality › review skills"), `tags: fm.tags` plus
  the rule's identifiers, and a new `objects?: string[]` field (the page ids in `links.objects` and the
  `possibly related` objects). `kindOfType` (`search.ts:59`) leaves `guideline` in `hubs`.
- `packages/search`: `PageRecord` gets `objects?: string[]`. No scorer weight change in phase 2; the golden file
  (`tests/fixtures/search-golden.json`) gets two guideline cases (4.5 tests).
- `packages/mcp/src/server.ts`: line 356 maps `guideline` to layer "Quality rules", ordered after Code. The
  `bc_search` description's type list (line 685) gains `guideline`. `toolGetObject` appends the guideline rows whose
  `objects` include the object's page id, at most 10, sorted by title. The `bc_whats_new` text (line 700) is unchanged
  (rules are not news; their PRs are).
- MCP version 0.12.1 → 0.13.0 in the three places it lives: `packages/mcp/package.json:3`,
  `packages/mcp/src/server.ts:44`, `plugin/README.md:3` (that line also names plugin 0.9.0, which does not change).
  Found with `git grep -n '0\.12\.1' -- ':!package-lock.json' ':!docs/' ':!content/' ':!data/'`; the plugin version
  0.9.0 lives in `.claude-plugin/marketplace.json:9`, `plugin/.claude-plugin/plugin.json:3` and `plugin/README.md:3`
  and stays. `package-lock.json` follows `npm install`. Release with the `publish-mcp` workflow (D40):
  `gh workflow run publish-mcp.yml --ref main`, after the phase 2 commit is on main and a nightly has published the pages.

### 4.6 Leak gate and notice

- `pipeline/validate/leak.ts:213` `OFFICIAL_ONLY` gains `/^content\/guidelines\//`: the renderer reads only the
  BCQuality blob, the tree, the object index, the Learn shard and the change pages' frontmatter, never a post.
- `readOfficialText` (`leak.ts:223`) also reads `data/manifest/guidelines/bcquality/*.json`, pushing `title` with
  `meta.description` (the summary), so a post quoting a rule's first sentence does not make the search shard a leak
  (D51 provenance, D120 shape).
- `CONTENT-NOTICE.md:14`: the BCQuality row becomes "yes | rule text reproduced under the MIT licence with the
  copyright line on every page and the licence in `content/guidelines/LICENSE-BCQuality.txt`; examples linked".

### 4.7 Site

Following the hotfix type (D106), the files are: `site/src/content.config.ts` (a `guidelines` collection, glob
`**/*.md` under `../content/guidelines`, id = path without `.md`), `site/src/pages/guidelines/index.astro`,
`site/src/pages/guidelines/[...id]/index.astro`, `site/src/pages/guidelines/[...id].md.ts`,
`site/src/pages/guidelines/llms.txt.ts`, and `pipeline/lib/sections.ts` (`SectionId` gains `"guidelines"`, an entry
after `changes` with `group: 2`). The rest-parameter routes are needed because ids have four segments.

## 5. Test plan (write first)

`tests/unit/guideline-parse.test.ts`:
- `parsePage` on the fixture `tests/fixtures/bcquality/admin-and-migration-pages-tolerate-lower-perf.md` (the file
  above, verbatim, MIT): `bcq.domain === "performance"`, `bcq.keywords` has 6 entries, `bcq.kind === "rule"`,
  `bcq.summary` starts "Some pages run rarely" and ends at the first sentence end within 300 characters.
- On a skill fixture (`microsoft/skills/review/al-performance-review.md`, frontmatter only plus two headings):
  `kind === "skill"`, `domain === null`, `summary` = frontmatter `description`.
- On a Learn fixture already in `tests/fixtures/`: `bcq` is undefined and every existing field is unchanged.

`tests/unit/guideline-render.test.ts`:
- `renderGuidelinePage` on the rule fixture with examples `[.good.al, .bad.al]`, one typed reference, one change:
  frontmatter validates against `schemas/frontmatter.guideline.json`; the body has no `# ` line from the rule; has
  `## Description`, `## Best Practice`, `## Anti Pattern` in order, then `## Examples` (2 lines), `## Names`,
  `## Changed by`; ends with the MIT line naming the commit; `review.state === "derived"`.
- No examples, no joins: no `## Examples`, `## Names`, `## Changed by`.
- `rewriteRuleLinks`: `[x](../style/foo.md)` with `microsoft/knowledge/style/foo.md` in the set → `../style/foo.md`
  (a page link); with it absent → `https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/foo.md`;
  `[y](https://...)` unchanged; a link inside a fenced block unchanged.
- `examplesOf(tree, "microsoft/knowledge/performance/a.md")` with `a.good.al`, `a.bad.al`, `a.good.2.al`, `ab.good.al`
  → three entries, labels `Good`, `Bad`, `Good 2`; `ab.good.al` excluded.
- The page path for `community/knowledge/agents/x.md` is `content/guidelines/community/knowledge/agents/x.md`, its id
  `guideline/community/knowledge/agents/x`.

`tests/unit/guideline-joins.test.ts`:
- Typed: `Codeunit 80 "Sales-Post"` resolves to `codeunit/80`, label `names`.
- Spans: `` `local` `` and `` `Status` `` → nothing; `` `Item Ledger Entry` `` → `table/32`, `possibly related`;
  `` `Sales Line` `` with a table and a page of that name → the table; a name shared by two tables → nothing.
- Learn: identifier `AS0001` with a row `dev-itpro/developer/analyzers/appsourcecop-as0001` → that URL;
  `SetLoadFields` with two `methods-auto` rows (record, recordref) → nothing; a name with one row → that URL.
- PRs: a change page fixture whose `objects_unjoined` holds the rule's path → the rule gets `change/bcquality/249`
  and `guidelinesByPath` maps the path to the rule id.
- Caps: 30 typed references → 24 objects in frontmatter.

`tests/unit/queue.test.ts` (extend): a `guidelines` item at `fetched` plans `published` with quota `null`; a
`guidelines` item with `meta.bcq_rule` missing plans `fetched` again; `quotaFor("guidelines", "published") === null`.

`tests/unit/search-index.test.ts` (extend): a guideline page becomes a record with
`type: "guideline"`, `path_label: "BCQuality › performance"`, `objects` set, in the `hubs` shard.

`tests/unit/mcp.test.ts` (extend): a guideline hit prints under "Quality rules", after "Code"; `bc_get_object` on an
object two guideline records name ends with the two rows; on an object none names, no such line.

`tests/unit/leak-official-indexes.test.ts` (extend): `officialOnlyOutput("content/guidelines/microsoft/knowledge/x.md")`
is true; `readOfficialText` includes a guideline manifest's title and description.

`tests/unit/sections.test.ts` (extend): `guidelines` is a section in nav group 2 after `changes`.

`tests/fixtures/search-golden.json` (run by `tests/unit/search-golden.test.ts`): `"SetLoadFields admin migration page"` returns the admin-and-migration rule in
the top 5; `"guideline: agent setup user security id"` with `type: guideline` returns the agents rule first.

## 6. Tasks

**Phase 1: the pages (one large content commit).** Ships alone; rewrites nothing that exists except the 94 BCQuality
change pages (their `links.guidelines` and unjoined lines).
1. Tests of 4.2, 4.3, 4.4 and the queue tests, failing.
2. Flow and quota (4.1); `BCQ_META_RULE` and the re-fetch rule.
3. `parsePage` BCQuality fields and `gitPageFetched` writes (4.2).
4. `pipeline/link/guidelines.ts` joins (4.4).
5. `pipeline/render/guideline.ts`, `schemas/frontmatter.guideline.json`, the `published` handler in `stages.ts:68`,
   `rerenderGuidelinePages` and `renderGuidelineIndex` in `nightly.ts` after the hotfix calls (`nightly.ts:482-483`).
6. `render/change.ts:64` and `:88` read `guidelinesByPath`.
7. Leak gate and `CONTENT-NOTICE.md` (4.6).
8. Run once on the Mini (section 7). The first run writes 458 pages, `LICENSE-BCQuality.txt`, `llms.txt` and 94
   change pages in one checkpoint commit: about 1.2 MB of markdown (458 × ~2.5 KB) and, once built, about 7 MB of
   Pages tar (the change section runs 18.9 MB for 2,536 files on 2026-10-29, ~15 KB per page with its twin).

**Phase 2: search, site, MCP.** Needs phase 1's pages on main.
9. Search record (4.5) and its tests; golden cases.
10. Site section (4.7) and `sections.ts`.
11. MCP layer, type list, `bc_get_object` rows; version 0.13.0 in the three places; `packages/mcp/README.md`
    mentions the new layer next to the existing layer list (line 54).
12. `publish-mcp` dispatch after the deploy shows `/guidelines/`.

## 7. Verification

- `npm test` and `npm run typecheck` green (`package.json:16-17`).
- `npm run validate:content`: 0 errors with the new pages.
- `npm run check:leak` on the Mini after the first run: clean.
- On the Mini, phase 1: run the nightly for this pillar only (`gh workflow run nightly -f pillars=guidelines`, the
  RUNBOOK's dispatch form at `docs/RUNBOOK.md:67`), then on the pushed tree:
  `cat data/manifest/guidelines/bcquality/* | grep -o '"state": *"[a-z_]*"' | sort | uniq -c` → 458 published;
  `find content/guidelines -name '*.md' ! -name llms.txt | wc -l` → 458;
  `grep -L '^  guidelines: \[\]' content/changes/bcquality/*.md | wc -l` → 94 BCQuality change pages with a
  non-empty `links.guidelines`. The run report shows zero quota use for `guidelines`.
- Site: `npm run site:build` with Node 24 and `--max-old-space-size=8192` (the local default Node OOMs), then
  `npx tsx scripts/site-size.ts site/dist --json site-size.json`: tar bytes up by less than 10 MB, `guidelines` in the
  section table; open `/guidelines/` and two rule pages (one with examples, one skill).
- MCP, against the local index after phase 2 (`npx bc-observatory@0.13.0` over stdio once published, or the built
  package before): `bc_search('SetLoadFields admin page')` shows a "Quality rules" layer; `bc_cat` on a rule path
  returns the body; `bc_get_object('table', '32')` lists rules naming Item Ledger Entry.

## 8. Later, not in this spec

- Topic hubs list their rules: guidelines as a fourth unit kind of `pipeline/link/topics.ts` (LLM, `topic_links`).
- A "Quality rules" layer in `bc_brief` (the layered answer, D106) for a question about an object or a pattern.
- Rule-to-rule links from "See also" and "Related" sections as `links.guidelines` (they are rewritten as page links in
  this spec, not recorded in frontmatter).
- The `custom/` layer, if upstream ever ships content there.
- Showing example code inline (rejected here for bytes; revisit if the Pages tar moves hosts).

## 9. Risks and open questions

- **Licence wording.** MIT needs the copyright and permission notice with substantial portions. Default: the
  copyright line on every page plus `LICENSE-BCQuality.txt` linked from it. If the owner wants a different line,
  only the footer string changes.
- **The community layer is tier official.** `community/` files are contributed through Microsoft's repository and
  reviewed by its maintainers; the source is `tier: official` today (`sources.yaml:82`). Default: keep official,
  show the `community` layer chip so readers see the difference. Not a change of tier.
- **A post quoting a rule beyond its first sentence** would match the page, which is official-only (4.6, no finding),
  but not the search shard's summary beyond 300 characters (no such text there). No action.
- **Upstream renames a rule.** The page id follows the path, so a rename is a removal plus an addition; the PR join
  keeps both paths on the change page. Default: accept, as Learn renames are handled today.
- **The re-fetch rule (4.2)** costs one `git cat-file` per rule once; the blobs were read when the items were first
  fetched (2026-10-06), and if the mirror lacks any, `prefetchPlanned` (`nightly.ts:706-720`) fetches them first.
- **Plan risk rating** (for a League build): additive, new type and files, and the only rewritten pages are the 94
  BCQuality change pages. Expected `low-risk`; the planner decides.
- **Decision and milestone numbers** D126 and M61 were taken from `origin/main` at `975188d766` plus every worktree's
  docs on 2026-10-29 (highest D125, M60). Re-run the number command of `.claude/skills/bcobs-spec/SKILL.md` section 5
  before approving if other specs landed since.

## 10. Files

New: `pipeline/render/guideline.ts`, `pipeline/link/guidelines.ts`, `schemas/frontmatter.guideline.json`,
`site/src/pages/guidelines/index.astro`, `site/src/pages/guidelines/[...id]/index.astro`,
`site/src/pages/guidelines/[...id].md.ts`, `site/src/pages/guidelines/llms.txt.ts`,
`tests/unit/guideline-parse.test.ts`, `tests/unit/guideline-render.test.ts`, `tests/unit/guideline-joins.test.ts`,
`tests/fixtures/bcquality/*` (two rule files, one skill file, one change page).
Generated by the run: `content/guidelines/**`, `data/manifest/guidelines/bcquality/*`, the search index shards.

Changed: `pipeline/lib/manifest.ts`, `pipeline/lib/queue.ts`, `pipeline/lib/budget.ts`, `config/budget.json`,
`pipeline/fetch/git-page.ts`, `pipeline/orchestrator/stages.ts`, `pipeline/orchestrator/nightly.ts`,
`pipeline/render/change.ts`, `pipeline/render/search.ts`, `pipeline/validate/leak.ts`, `pipeline/lib/sections.ts`,
`packages/search/src/types.ts`, `packages/mcp/src/server.ts`, `packages/mcp/package.json`, `packages/mcp/README.md`,
`plugin/README.md`, `site/src/content.config.ts`, `CONTENT-NOTICE.md`, `AGENTS.md` (the page list at lines 30-31),
`tests/unit/queue.test.ts`, `tests/unit/search-index.test.ts`, `tests/unit/mcp.test.ts`, `tests/unit/leak-official-indexes.test.ts`,
`tests/unit/sections.test.ts`, `tests/fixtures/search-golden.json`, `docs/DECISIONS.md`, `docs/PLAN.md`,
`docs/HANDOFF.md`, `docs/RUNBOOK.md` (one line: guidelines need no quota).

## 11. Definition of Done

- [x] All tests of section 5 exist, failed first, and pass; the full suite and typecheck are green.
- [x] `guidelines` flow is `discovered → fetched → published`; `quotaFor("guidelines", any stage)` is null; no
      `guidelines` key in `config/budget.json` or `LLM_QUOTAS`.
- [ ] After one run: 458 BCQuality items `published`, 458 pages under `content/guidelines/` (the count may differ if
      upstream changed; it equals the manifest's non-removed `bcquality` items), `LICENSE-BCQuality.txt` and
      `llms.txt` present, `validate:content` clean, `check:leak` clean. (Open: operator step 1 of section 12; a local
      probe of all 458 items passed `validate:content`, the Mini run and its `check:leak` have not happened.)
- [x] Every page has `review.state: derived`, no model text, the MIT footer with the commit, and validates against
      `schemas/frontmatter.guideline.json`.
- [x] BCQuality change pages that touch a rule file carry it in `links.guidelines` (94 on the 2026-10-29 data, or
      the current equivalent), and the rule page lists them under "Changed by".
- [x] No object page changed in the run's diff because of this work (D88).
- [ ] Search returns `guideline` records; the two golden cases pass; `/guidelines/` and a rule page render on the
      deployed site; the Pages tar grew by less than 10 MB. (Built and measured locally: 9.64 MB, both golden rows hold
      on the probe's pages; open: the deployed site and un-pending the rows, operator steps 1 and 2.)
- [ ] MCP 0.13.0 published through `publish-mcp`; `bc_search` shows "Quality rules", `bc_get_object` lists naming
      rules, `bc_cat` reads a rule. (The three behaviours pass in `tests/unit/mcp.test.ts` over stdio; open: the publish,
      operator step 3.)
- [x] `CONTENT-NOTICE.md` BCQuality row updated.
- [x] D126 appended to docs/DECISIONS.md; PLAN M61 marked shipped; HANDOFF entry moved from "Open specs" to "Where
      things stand"; section 12 "Built, deviations" inserted (this section kept as 13, marked applied) and status
      implemented in the frontmatter and the body. A League build leaves the spec alone and writes section 12 and the
      status lines into docs/built/bcquality-rules.md; the PR's review moves them in (sdd-build section 4,
      sdd-review section 6).

## 12. Built, deviations (2026-10-29)

Built by a manual `/sdd-build` session on branch `claude/build-bcquality-rules-833518` from `origin/main` at
`c323735b1c`, rebased onto `08604c1abc` (D125), in three commits: phase 1 `761dc2393c` (flow, quota, parse, joins,
renderer, schema, change pages, leak gate), phase 2 `e62ae26e73` (search record, scorer factor, site section, MCP
0.13.0), then the ship-time edits.

**Verified.**
- Red first: phase 1's `guideline-parse`, `guideline-render`, `guideline-joins` and the queue test failed on missing
  modules and the missing `BCQ_META_RULE` export; phase 2's search-index, sections, about, MCP and search-core tests
  failed on the missing record fields, section, layer and `GUIDELINE_FACTOR`. The change-page join test was written
  after `render/change.ts` (not red first).
- `npm run typecheck` clean; `npm test` 803 tests, 802 passed, 0 failed, 1 skipped (as on main), and after the
  rebase onto D125 814 tests, 813 passed, 0 failed; `validate:content`
  (29,647 pages without the rule pages), `validate:sources` and `lint:workflows` clean.
- A local probe rendered all 458 items from a full clone of microsoft/BCQuality at `a4593a1` into this tree's
  `content/` (fetched and published handlers, `rerenderChangePages`, `rerenderGuidelinePages`, `renderGuidelineIndex`),
  then: `validateContent` 0 errors over 30,105 pages; the only other files it changed were 85 BCQuality change pages
  (`links.guidelines` and their unjoined lines), no object page (D88). With those pages present, the site and MCP golden
  runners pass every row and both new D126 rows hold. The probe's output was discarded before each commit.
- `npm run site:build` (Node 24, `--max-old-space-size=8192`) with the probe's pages: 30,156 pages; `/guidelines/`
  groups the rules by domain, a rule page and a review skill render with every site link resolving (objects, changes,
  the licence), the change page links its rule, the home page shows the Quality rules card. `scripts/site-size.ts`:
  726.2 MiB with the pages against a baseline build of the same code without them, `guidelines` 9.40 MB of tar in
  919 files.

| measure | spec | measured |
|---|---|---|
| pages | 458 | 458 (435 rules, 23 skills) |
| markdown | about 1.2 MB | 2.77 MB (rule text alone 1.35 MB; frontmatter 0.74 MB) |
| change pages joined | 94 | 85: the other 9 name only rule paths since removed upstream |
| rules with a pull request | 439 | 439 (828 rows, at most 17 on one rule) |
| rules with a Learn row | 104, 190 rows | 104, 184 rows (at most 10) |
| typed object references | 75 upstream | 35 resolved rows on 20 rules |
| possibly related objects | - | 178 rows |
| rules with examples | 384 | 384 |
| Pages tar growth | under 10 MB | 9.64 MB (9,635,840 bytes; guidelines section 9.40 MB): inside the bound, with little room |

**Deviations.**
- Re-fetch rule (4.2): the spec put it in `planQueue`, but `advance()` accepts only `nextStage(item)`, so a planned
  `fetched` on a `fetched` item would throw. The rule lives in `nextStage` (which `planQueue` calls): a `guidelines`
  item at `fetched` or `published` with `meta.bcq_rule` below `BCQ_META_RULE` is due for `fetched`. Every `guidelines`
  item's fetched stage writes `bcq_rule`, so no item loops.
- `rerenderGuidelinePages` returns a `Promise<number>` (it reads the blobs with one `cat-file --batch`) and runs in its
  own `guidelines` phase after the hotfix calls; the run report gains `guidelines: {rerendered, pages}`
  (`schemas/run-report.json`).
- Guideline rows never enter `data/links/crosslinks.json`: the page builds its own rows, as the hotfix pages do, so no
  object page can get one (D88) and `buildCrossLinks` is unchanged.
- The search record's field is `objects_named`, not `objects`: `PageRecord.objects` is already the change pages' count
  of objects touched (D91). The frontmatter gains `identifiers` (the rule's D94/D95 identifiers), because the record is
  built from frontmatter alone and its tags are keywords plus identifiers.
- Scorer: section 4.5 said no weight change. With the pages present, four events rules outranked the Learn page
  `devenv-event-types` on two golden rows ("IntegrationEvent vs BusinessEvent", 4.5 to 7.0 against 2.13). Owner's
  choice: `GUIDELINE_FACTOR = 0.3` in `packages/search/src/score.ts` (0.4 to 0.8 measured and still failing that row;
  dropping the identifiers from the tags lost the SetLoadFields row and did not fix the events one).
- Nav: the owner chose a home card and an About row after Code changes instead of nav group 2; with "Quality rules"
  the nav would be 101 characters, over D90's 90-character cap for one line at 900 px. The site search has a "Quality
  rules" group and tab (optional, like Enum values).
- Golden rows: the second row is `"agent setup user security id"` with a new `type` field on golden rows (the site
  runner keeps hits of that type, the MCP runner passes it as `bc_search` `type`); `guideline:` is no query prefix. The
  first row uses a new `top5` check. Both rows are `pending` until the first nightly commits `content/guidelines`
  (they hold on the probe's pages).
- The spec's Learn fixture "already in tests/fixtures" does not exist; the parse test uses an inline Learn page like
  `git-page.test.ts`. The skill fixture is the real file's frontmatter, H1, intro and two sections.
- The site also serves `guidelines/LICENSE-BCQuality.txt` (the pages link it), and rewrites that link to the section
  root, since a relative link from a directory URL would miss it by one level.
- `package-lock.json`: the workspace's version line edited to 0.13.0, as the release commits of 0.12.x did, instead of
  running `npm install`.
- Not done here (operator steps): the first run on the Mini, `check:leak` on the Mini, the deployed site check, the
  `publish-mcp` dispatch, and un-pending the two golden rows.

**Operator steps.**
1. Push, then dispatch the pillar so the pages land (RUNBOOK dispatch form):
   `gh workflow run nightly -f pillars=guidelines`. On the pushed tree: 458 `published` in
   `data/manifest/guidelines/bcquality`, 458 pages under `content/guidelines`, `check:leak` clean in the run.
2. Then remove `pending` from the two D126 rows of `tests/fixtures/search-golden.json` (the site runner prints
   "HOLDS now, remove pending").
3. After the Pages deploy shows `/guidelines/`: `gh workflow run publish-mcp.yml --ref main` (D40) for MCP 0.13.0.
4. Close issue #58.

## 13. Proposed edits to other files (applied 2026-10-29, see section 12)

- `docs/DECISIONS.md`: append the D126 text of section 3, with the ship date and any deviations.
- `docs/PLAN.md` section 5 (applied by the spec session as "proposed"; the builder marks it shipped):
  `| **M61 BCQuality rules as pages** | 458 BCQuality rules and review skills as deterministic pages with examples, object and Learn joins and their pull requests; search type `guideline`, a Quality rules section, MCP 0.13.0 (`docs/specs/bcquality-rules.md`, D126, proposed) | one to two days | none: no model, the guidelines quota is removed |`
- `docs/HANDOFF.md` "Open specs" (applied by the spec session); at ship time move it to "Where things stand" with the
  page count, the change pages joined and the MCP version.
- `CONTENT-NOTICE.md:14`: as 4.6.
- `docs/RUNBOOK.md`: under the nightly's pillars, "guidelines: deterministic since D126, no quota".
- `AGENTS.md:30-31` lists the page kinds (`releases/al-<version>`, `hotfixes/<update>`): add
  `guidelines/<repo path>` (BCQuality rules and review skills, one page per file, D126). `AGENTS.md:13` already names
  BCQuality as official.
