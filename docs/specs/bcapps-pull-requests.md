# Code changes: merged BCApps pull requests as observed changes

Status: implemented, 2026-10-07, v1 and every phase of section 9 (section 12 records what was built and where it differs). Decision: D61. Owner: waldo.
Scope: merged pull requests of `microsoft/BCApps` on the branches the code pillar tracks (`main`, `releases/29.x`;
`releases/30.x` when `config/versions.json` adds it). Open pull requests, issues, releases and other repositories
are later phases (section 9).

## 1. Goal

The observatory answers "what is Table 36 Sales Header" and "how does BC30 differ from BC29", but not "what moved
in BCApps this week, and which objects did it touch". A merged pull request is the unit of behaviour change in
Microsoft's code: it has a title, a description, a merge date, an author, a base branch (so a BC version) and a
list of changed files. After this change every merged pull request that touches AL source becomes a page under
`content/changes/`, described in our words, joined by exact file path to the object pages it changed, counted in
the weekly digest, indexed for search, present in the graph and served by the MCP `whats_new` and `search` tools.
Object pages gain a "Recent changes" section. Pull requests that do not touch AL source (bots, backports, build,
tests, translations, docs) are counted but get no page.

### Non-goals

- Per-commit history, diffs or source text. The code pillar stays metadata-only (D10); a change page carries file
  paths and counts, never a `patch`.
- A narrative (Sonnet) pass. One Haiku facts pass per batch of pull requests, like blog posts (D34).
- Open pull requests, issues, releases, tags, other repositories, topic-hub links for changes, a source footprint
  page for the pull-request source. All in section 9.

### What exists today (verified 2026-10-07)

- BCApps is observed as one snapshot per BC major: `git ls-remote` of the branch head (`pipeline/ingest/code.ts`),
  a depth-1 sparse checkout (`pipeline/code/job.ts`), per-object JSON under `data/code/<major>/`. Every change the
  observatory reports is snapshot against snapshot: version diffs, country diffs, Learn drift. The weekly digest
  shows the head SHA per major; W40 and W41 show the same SHA.
- No manifest pillar, page type, evidence kind or MCP tool represents a pull request, commit, issue or release
  (`schemas/manifest-item.json`, `schemas/frontmatter.base.json`). Nothing in `pipeline/` calls the GitHub API.
- BCApps merged 236 pull requests in the seven days before 2026-10-07. Roughly a third are bots (AL-Go system
  files, BCArtifact version bumps, dependabot) or backports (`[29.x] ...`, `(backport #n)`). Every pull request
  carries labels (`Team: Finance`, `AL: System Application`, `AL: Apps (W1)`, `From Fork`, `Automation`,
  `BugFixAgent`).
- Every snapshot object stores its source path (`"file": "src/Layers/W1/BaseApp/Foundation/PaymentTerms/
  PaymentTerms.Table.al"`), so a pull request's changed files join to object pages by exact path. That is an exact
  id join (D29, D45), not title matching.

## 2. Requirements

### In scope

Merged pull requests on the tracked branches; deterministic classification; exact object join; one Haiku facts
pass for AL-touching pull requests; a page per AL-touching pull request; a "Recent changes" section and
`links.changes` on object pages; a "Code changes" section in the weekly digest; search index, graph edges,
`whats_new` and `search(type: "change")` in the MCP server; site section `/changes/`; a three-month backfill;
documentation (D61, CONTENT-NOTICE row, AGENTS.md section list, RUNBOOK token note, PLAN tables).

### Out of scope (section 9)

Open pull requests, issues, releases and tags, other repositories (BCQuality, AL-Go), topic-hub links for changes,
a source footprint page for `bcapps-prs`, a Sonnet narrative, per-commit history.

### Acceptance criteria

- **AC1** Given the nightly runs after a merge into `main` that touches `PaymentTerms.Table.al`, then
  `content/changes/bcapps/<n>.md` exists, validates against `frontmatter.change`, lists `object/table/3` in
  `links.objects`, and `content/objects/table/3.md` lists the pull request under "Recent changes" with
  `links.changes` containing `change/bcapps/<n>`.
- **AC2** Given a merged pull request by `business-central-bot[bot]` or titled `[29.x] ...`, then no manifest item
  and no page are created; the backport is listed on the original pull request's page under "Also merged into",
  and both are counted in the digest.
- **AC3** Given a merged pull request that changes only `.github/`, `build/`, `.xlf` files or test apps, then the
  item ends `skipped` with reason `non-code`, no Haiku call is made, no page exists, and it is counted in the
  digest.
- **AC4** Given a later comment, label or title edit on a merged pull request, then the next nightly makes no
  fetch and no Haiku call for it; a title edit reaches the page through the post-loop re-render.
- **AC5** Given the GitHub rate limit is exhausted mid-run, then the affected items are held (not failed, no
  attempt counted), the listing cursor does not advance, and the next run recovers without a manual step.
- **AC6** Given `npm run check:leak` and `npm run validate:content` after a nightly with change pages, then both
  pass, and no page or data file contains pull-request body text beyond one verbatim quote under 25 words.
- **AC7** Given the MCP `whats_new` tool with `since` = yesterday, then merged change pages are returned with
  their merge date; `search(type: "change")` finds them by title and by object name.
- **AC8** Given the weekly digest, then `sections.changes`, `sections.changes_behavior` and
  `sections.changes_obsoletions` are present, and a "Code changes" section lists per-branch counts and up to 20
  behaviour changes with page links.
- **AC9** Given a normal night, then the run report shows at most 40 GitHub calls and at most 3 Haiku calls for
  the change pillar, within the `config/budget.json` caps.

## 3. Decisions

| # | Decision | Why |
|---|---|---|
| 1 | Scope v1 = merged pull requests into the tracked branches. Open pull requests, issues and releases later; the id scheme leaves room (GitHub numbers pull requests and issues in one sequence). | A merged pull request is the moment behaviour changes. Open ones churn. |
| 2 | Every merged pull request is recorded and counted; a page is rendered only for pull requests that touch AL under the app folders. Bots and backports are filtered from the list payload; build-, test-, translation- and docs-only pull requests are skipped at fetch. Backports are recorded and shown on the original's page. | About 12,000 pages a year otherwise, most of them noise, and every post-loop phase parses every page nightly (D53, D57). The digest still reports the full count. |
| 3 | Discovery through GitHub REST `GET /repos/{repo}/pulls?state=closed&sort=updated&direction=desc&base=<branch>&per_page=100`, with ETag and a per-branch cursor. Per pull request at fetch: `GET /pulls/{n}` and `GET /pulls/{n}/files`. | One list payload carries `merged_at`, `merge_commit_sha`, `base.ref`, `user.type`, `labels`, `title`, `body`, so bot and backport classification costs no extra call. The search endpoint lacks most of these and has its own 10 requests a minute unauthenticated limit. |
| 4 | Token: the nightly workflow passes `GITHUB_TOKEN: ${{ github.token }}` as step `env` (1,000 requests an hour, ephemeral, no new secret, D14). Manual and backfill runs read `BCOBS_GITHUB_TOKEN` from the Mini env file (optional fine-grained PAT, public read only). Unauthenticated (60 an hour) still carries a normal night. | No repository secrets (PLAN 4.4). A normal night needs 25 to 40 calls; a backfill about 1,800. |
| 5 | `input_hash = <merge_commit_sha>:c<CHANGE_VERSION>`, not `updated_at`. | `updated_at` moves on every later comment or label and would re-run fetch and Haiku (`Manifest.discover` marks a changed hash `stale`). A merged pull request's file list never changes. Title edits are metadata refreshes. |
| 6 | The pull-request body is read for extraction and never stored. The public tree holds number, title, merge date, author login, labels, changed file paths with counts, derived summary and key points, at most one verbatim quote under 25 words. Tier `official`; a `From Fork` label is surfaced as `community_contribution: true`. | Matches the metadata-only row for BCApps in CONTENT-NOTICE (D10) and keeps the leak gate trivially satisfied. |
| 7 | Deterministic first: systems come from `objectSystem(namespace)` of the joined objects (`pipeline/lib/systems.ts`); Haiku's `systems` is a fallback when nothing joined. No Sonnet pass. | Facts come from validators, not prompts (AGENTS.md). |
| 8 | Backfill three months (`backfill: { months: 3 }` on the source, bounded by the existing `horizonFor` in `pipeline/lib/queue.ts`). | Covers the 29.x stabilisation and the start of 30. |
| 9 | New source kind `github-pr`, new pillar `change`, new page type `change`, pages at `content/changes/bcapps/<n>.md`, page id `change/bcapps/<n>` where `bcapps` is the repo slug; the manifest id is `change/bcapps-prs/<n>` and is translated like blog keys (D58c). | `BY_KIND` and `PILLAR_OF` are one adapter and one pillar per kind; reusing `code-git` with a flag would make both multi-valued. The content validator derives the id from the path. |

## 4. Contract

### 4.1 Source

`sources.yaml`, after `bcapps`:

```yaml
- id: bcapps-prs
  kind: github-pr
  name: microsoft/BCApps pull requests
  url: https://github.com/microsoft/BCApps/pulls?q=is%3Apr+is%3Amerged
  tier: official
  repo: microsoft/BCApps
  license: MIT
  mode: metadata-only
  backfill: { months: 3 }
```

`schemas/sources.json`: `kind` enum gains `github-pr`; the git-kinds `allOf` rule (requires `repo`) includes it.
`pipeline/lib/config.ts` `SourceKind` gains it. `pipeline/validate/sources.ts` enforces `mode: metadata-only` for
`github-pr` as it does for `code-git`. `pipeline/ingest/types.ts` `PILLAR_OF["github-pr"] = "change"`;
`pipeline/ingest/index.ts` `BY_KIND["github-pr"] = ingestGithubPrs`.

### 4.2 Discovery (`pipeline/ingest/github-prs.ts`, new)

- Tracked branches: the entries of `config/versions.json` `majors` whose `snapshot_source` is `bcapps`, as
  `{ major, branch: bcapps_branch }` (today `main` to 30, `releases/29.x` to 29; 28 is excluded by
  `bcapps_has_baseapp: false`).
- State `data/state/github-prs.json`: `{ "<source id>": { "<branch>": { cursor, etag } } }` where `cursor` is the
  highest `updated_at` seen. Per branch, page the list until an entry has `updated_at < cursor`, or
  `merged_at < horizon`, or page 10. A 304 means nothing new. `cursor` and `etag` advance only after a complete
  listing; a rate-limit stop leaves them.
- Per entry: skip `merged_at === null`. Classify from the payload (rules in `pipeline/changes/classify.ts`):
  - bot: `user.type === "Bot"`, login ends in `[bot]`, or title matches
    `^\[AL-Go\]|^Update (AL-Go|BCArtifact|version|translations?)\b` (case-insensitive);
  - backport: title matches `^\[(\d+\.x|main)\]\s`, or title or body contains `backport #<n>` or `cherry-pick`.
    Recorded in `data/changes/bcapps/backports.json` keyed by the original number
    (`[{ number, base, merged_at, url }]`, the original parsed from `#<n>` when present), not discovered;
  - otherwise `manifest.discover({ pillar: "change", source, key: String(number), tier: "official", title,
    url: html_url, published_at: merged_at, input_hash: "<merge_commit_sha>:c<CHANGE_VERSION>",
    meta: { number, base, major, merge_commit_sha, author, author_type, labels, community_contribution } })`.
    `community_contribution` is `true` when the labels include `From Fork`.
- The body is not stored at ingest. The result note reads
  `"<n> merged in <branches>; <b> bots, <k> backports skipped; cursor <date>"`. A rate limit sets `ok: false`;
  items already discovered stay.

### 4.3 Classification (`pipeline/changes/classify.ts`, new)

Path classes, `classifyPath(path)`:

| class | rule |
|---|---|
| `al-src` | `.al` under `src/Layers/<L>/BaseApp/`, `src/System Application/App/`, `src/Business Foundation/App/`, `src/Apps/<L>/<App>/app/` (the roots `config/versions.json` `code.bcapps` lists) |
| `al-test` | `.al` under a `test` or `Test` path segment |
| `translation` | `.xlf` |
| `build` | `.github/`, `build/`, scripts and JSON outside app folders |
| `docs` | `.md` |
| `other` | everything else |

Pull-request class: `code` if any file is `al-src`; otherwise `test-only`, `translation`, `build`, `docs` or
`non-code` by the dominant class. Only `code` continues past `fetched`. Also extracted here: `fixes_issues` from
`(?:fixes|closes|resolves) #(\d+)` and `work_items` from `AB#(\d+)`. Every rule is an exported constant with a
test.

### 4.4 File index and object join (`pipeline/code/files-index.ts`, new)

- `data/code/<major>/files.json`, schema `bcobs-files@1`:
  `{ commit, extractor, files: { "<path>": { key, type, id, name, app, namespace, cc, page } } }`. Built in
  `refreshCodeDerived` (`pipeline/code/diff.ts`) by streaming `iterSnapshot` over `w1`, `apps` and every country
  directory, keeping `file`, `type`, `id`, `name`, `app`, `namespace`; keys through `objectKey`
  (`pipeline/code/extract.ts`), page keys through `objectPageKey` (`pipeline/render/object.ts`). Written with
  `writeIfInputsChanged` on `[FILES_VERSION, commit, extractor]`; `loadFileIndex(dataDir, major)` builds it lazily
  when missing. About 22,000 entries per major, BC29 and BC30 only.
- `joinFiles(files, index)` returns `{ objects: [{ path, status, key, type, id, name, app, cc, page }],
  unjoined: [{ path, status, reason }] }`. Exact path only. A `renamed` file joins its new name and records
  `previous_filename`; a `removed` or unknown path goes to `unjoined` with reason `removed` or `not-in-snapshot`.
  Country layer paths resolve through the country entries; a regional base (DACH, NA) resolves to its first child
  country alphabetically. A W1 object replaced by a country keeps the W1 page, as object rendering does.
- `systems` = unique `objectSystem(namespace)` of the joined objects, most frequent first.
- The snapshot lags a merge by up to a night (`code_jobs: 1`), so files a very recent pull request added are
  unjoined for a night. The post-loop phase `changes-relink` re-joins records whose `join.commit` differs from the
  index commit and that still have unjoined `al-src` paths.

### 4.5 Fetch stage and change record (`pipeline/fetch/change.ts`, new)

- Lane `github`. One or two calls: `GET /repos/{repo}/pulls/{n}` (title, body, labels, merged_by) and
  `GET /repos/{repo}/pulls/{n}/files?per_page=100`, following `next` only when `changed_files > 100`.
- Writes `data/changes/bcapps/<n>.json`, schema `bcobs-change@1`:

```
number, repo, url, base, major, merged_at, merge_commit_sha, author, author_type, labels, community_contribution,
title, body_hash, fixes_issues[], work_items[], change_class,
files[]: { path, status, additions, deletions, class }        // never `patch`
totals: { files, additions, deletions, al }
join: { major, commit, objects[], unjoined[] }
systems[], apps[]
```

- The body goes to `.cache/changes/<n>.body` for the same night's extraction only; `data/` keeps `body_hash`.
- Returns `{ skip: "non-code" }` for every class but `code` (the executor marks the item `skipped`); otherwise
  `{ data: { files, al, objects, unjoined }, output_hash }` where the hash covers the record without the body.
- `GithubRateLimited` becomes `StageHold` (`pipeline/orchestrator/execute.ts`): the group is untouched and no
  attempt is counted.

### 4.6 Extraction (`pipeline/extract/change.ts`, new; template `pipeline/extract/post.ts`)

- `STAGE = "extract-change"`, `PROMPT_VERSION = 1`, role `facts` (Haiku), `BATCH_SIZE = 6`, body excerpt at most
  4,000 characters, file list at most 60 lines with `al-src` first, joined objects listed as
  `table 3 "Payment Terms" (Base Application)`.
- Output per pull request, validated by an inline schema:

```
summary        string, at most 400 characters, our words
key_points     string[], at most 5
change_kind    feature | fix | refactor | obsoletion | performance | breaking | other
behavior_change boolean
breaking       boolean
obsoletions[]  { object, member | null, replacement | null }   // kept only if `object` equals a joined object
systems[]      taxonomy ids, used only when the join found nothing
quote          string | null                                    // kept only if verbatim in the body and under 25 words
```

- Written to `data/extract/change/bcapps-prs/<n>.json`; `output_hash = sha256(canonicalJson(facts))`. Items whose
  class is not `code` never reach this stage.

### 4.7 Page (`pipeline/render/change.ts`, new; `schemas/frontmatter.change.json`, new)

- Path `content/changes/bcapps/<n>.md`, id `change/bcapps/<n>`, `type: change`, `tier: official`. Frontmatter
  beyond the base fields:

```
number, repo, source_id, url, kind: pr, base_branch, major, merged_at, author, author_type,
community_contribution, labels[], change_class, change_kind, behavior_change, breaking,
files: { count, additions, deletions, al }, apps[],
objects_touched[]: { key, page, type, id, name, app, status },
objects_unjoined[]: { path, status, reason },
obsoletions[], backports[]: { number, base, url }, fixes_issues[], work_items[], systems[],
quote, joined_against: { major, commit }
```

- Evidence: one entry `kind: code`, `url` = the pull request, `commit` = the merge SHA. `links.objects` = the page
  ids of the joined objects. `schemas/frontmatter.base.json` gains `change` in the type enum and id pattern and a
  `links.changes` key; `pipeline/validate/content.ts` `ID_LINKS` gains `changes`.
- Body: title line `# #<n> <title>`; the summary as a quote; a merge line (branch, major, date, author, files
  and counts, kind, tier, unreviewed); `## What changed` (key points, a behaviour-change or breaking line);
  `## AL objects touched` (links to object pages, unjoined paths plain); `## Obsoletions`; `## Also merged into`
  (from `backports.json`); `## Context` (fixes, work items, labels, systems); the source notice: metadata of a
  merged pull request in microsoft/BCApps, no source text (D10).
- `renderChangeIndex(contentDir)` writes `content/changes/llms.txt` newest first (template `renderPostIndex`).
  `rerenderChangePages` re-renders pages whose title, backports or join changed (template `rerenderFeaturePages`).

### 4.8 Object pages, digest, search, graph, MCP, site

- `data/code/changes-by-object.json`, schema `bcobs-changes-by-object@1`:
  `{ "<objectKey>": [{ number, page, title, merged_at, major, kind, status }] }`, newest first, at most 50 per
  object, built from `data/changes/bcapps/*.json` restricted to records with a page.
- `pipeline/render/object.ts`: the world loads the reverse index; the page's input-hash seed includes the change
  numbers; `links.changes`; a `## Recent changes` section before `## Across versions`, one line per change:
  `- 2026-10-03 [#1234 title](../../changes/bcapps/1234.md) (main, BC30, feature)`. `writeIfChanged` already
  limits rewrites to pages whose content moved.
- `pipeline/render/digest.ts`: counts `changes` (all merged, bots and backports included), `changes_behavior`,
  `changes_obsoletions`; `links.changes`; `## Code changes` after `## Code` with per-branch counts, up to 20
  behaviour changes with page links, and the obsoletions; the summary sentence gains the count.
- `pipeline/render/search.ts` `pageRecord`: `source = source_id`, `date = merged_at`.
- `pipeline/link/graph.ts` and `schemas/graph.json`: node type `change`, edge type `changes` from change to
  object; change nodes stay out of the summary graph and appear in ego graphs.
- `packages/mcp/src/server.ts`: tool descriptions and instructions mention change pages (`whats_new`, the
  `search` type list). No new tool in v1.
- Site: `changes` collection in `site/src/content.config.ts`; `/changes/` pages cloned from `posts/`; a search
  option; the root `llms.txt` and the home counter.
- `schemas/run-report.json`: `changes: { fetched, skipped_non_code, held, pages, relinked, api_calls }`.

### 4.9 GitHub client and token (`pipeline/lib/github.ts`, new)

- `ghGet(path, { token?, etag? })` returns `{ status: 200 | 304, json, etag, next, remaining, reset }`. Headers
  `accept: application/vnd.github+json`, `x-github-api-version: 2022-11-28`, `authorization: Bearer <token>` when
  a token exists, `if-none-match` when an etag exists. Parses the `link` header for `rel="next"` and the
  `x-ratelimit-*` headers.
- `githubToken()` = `BCOBS_GITHUB_TOKEN`, else `GITHUB_TOKEN`. The nightly workflow sets
  `GITHUB_TOKEN: ${{ github.token }}` as step `env` (the existing workflow lint only forbids `${{ }}` inside
  `run:`). The token never appears in a message or a report.
- `GithubRateLimited` is thrown on 403 or 429 with `remaining === 0`, or pre-emptively when `remaining < 5`.
- `pipeline/lib/http.ts` gains `headers` and an `ok(status)` predicate so a 304 is not an error.

### 4.10 Budget

`config/budget.json`: `quotas.change_fetch: 60` (deterministic, like `captions`), `quotas.changes: 40` (LLM, in
`LLM_QUOTAS` in `pipeline/lib/budget.ts`), `lanes.github: 2`, `lane_timeout_seconds.github: 120`.
`pipeline/lib/queue.ts`: `change` in `PILLAR_ORDER` after `blog`; `PILLAR_QUOTA.change = "changes"`; `quotaFor`
returns `change_fetch` for the `fetched` stage. `pipeline/lib/manifest.ts`: `change` in `Pillar`;
`FLOWS.change = ["discovered", "fetched", "extracted", "linked", "published"]`.

## 5. Test plan (write first)

- `tests/unit/changes-ingest.test.ts` (fake HTTP map as in `tests/unit/ingest.test.ts`): paging per branch; bots
  and backports write `backports.json` and discover nothing; cursor and etag persist only after a complete
  listing; 304 is no change; a rate limit gives `ok: false` with the cursor untouched; the horizon stops paging; a
  rerun is `unchanged`.
- `tests/unit/changes-classify.test.ts`: path classes for every root in `config/versions.json`; pull-request
  class; bot and backport rules; `fixes #n` and `AB#n` extraction.
- `tests/unit/changes-join.test.ts`: snapshot fixtures through `writeSnapshot` (w1, apps, be) build `files.json`;
  join modified, added, renamed, removed; country layer paths; systems from namespaces; lazy build when the index
  is missing.
- `tests/unit/changes-extract.test.ts` (fake `Llm` as in `tests/unit/blog-posts.test.ts`): six per call; an
  obsoletion is dropped when its object is not joined; a quote is dropped when not verbatim; a non-code item
  never reaches extraction.
- `tests/unit/change-pages.test.ts`: the page passes `validateContent`; `llms.txt` is written; the reverse index
  is built; an object page gains the section and `links.changes` and is rewritten only when its changes change;
  digest counts and section; `pageRecord`; the graph edge.
- `tests/unit/mcp.test.ts`: a fixture change page is found by `whats_new` and `search(type: "change")`.
- `tests/schema/sources.test.ts`: `github-pr` requires `repo` and `metadata-only`. `tests/unit/queue.test.ts`
  and `tests/unit/execute.test.ts`: the pillar and quota enumerations.

## 6. Tasks

1. Pillar plumbing: `pipeline/lib/manifest.ts`, `schemas/manifest-item.json`, `pipeline/lib/queue.ts`,
   `pipeline/lib/budget.ts`, `config/budget.json`, `pipeline/lib/config.ts`, `schemas/sources.json`,
   `pipeline/validate/sources.ts`, `pipeline/ingest/types.ts`, `pipeline/ingest/index.ts`, `sources.yaml`,
   `.github/workflows/nightly.yml` (token env, pillar list).
2. `pipeline/lib/github.ts`; `pipeline/lib/http.ts` headers and `ok`.
3. `pipeline/changes/classify.ts`; `pipeline/code/files-index.ts` and its hook in `refreshCodeDerived`.
4. `pipeline/ingest/github-prs.ts`.
5. `pipeline/fetch/change.ts`, `pipeline/extract/change.ts`, `pipeline/render/change.ts`; wiring in
   `pipeline/orchestrator/stages.ts`.
6. Schemas: `schemas/frontmatter.change.json`, the base enum and `links.changes`, `schemas/graph.json`,
   `schemas/run-report.json`; `ID_LINKS` in `pipeline/validate/content.ts`.
7. Post-loop in `pipeline/orchestrator/nightly.ts`: `changes-relink` after `code-derived`, `changes-index` before
   `code-pages`, `rerenderChangePages` and `renderChangeIndex` in `indexes`; report counts. All deterministic
   `phase` calls (D57 reserves `optionalPhase` for LLM phases).
8. `pipeline/render/object.ts`, `pipeline/render/digest.ts`, `pipeline/render/search.ts`,
   `pipeline/link/graph.ts`.
9. `packages/mcp/src/server.ts` text; site collection, pages, search option, `llms.txt`, home counter.
10. Docs: D61 (recorded with this spec), CONTENT-NOTICE row, AGENTS.md section list, RUNBOOK token note, PLAN 4.2
    and 4.3 rows.
11. Backfill on the Mini (section 8).

## 7. Verification

`npm run validate:sources`; `npm run typecheck && npm test`; `npm run validate:content`;
`npm run lint:workflows`; `npm run nightly -- --dry-run --pillars change --only bcapps-prs` (real listing and
fetch into the temp data directory, Haiku cache-only); on the Mini
`npm run nightly -- --pillars change --only bcapps-prs --quota 5 --commit` for the first real pages, then
`npm run check:leak`. AC1 to AC9 are checked on the first full nightly after the backfill.

## 8. Backfill and cost

- A normal night: about 34 merged a day, 15 to 20 items after the bot and backport filter, 10 to 12 of class
  `code`. API: about 3 list calls (often 304) plus 1 or 2 per item, 25 to 40 in total. Haiku: 2 calls, a few
  cents. Fits the unauthenticated limit with the reserve; the Actions token makes it comfortable.
- Backfill of three months: about 3,000 merged, 1,500 items, 900 pages, 1,500 to 1,800 API calls (a token is
  required: about 25 hours unauthenticated), 150 Haiku calls, about 5 dollars. Two or three nights at
  `changes: 40`, or one run:
  `BCOBS_GITHUB_TOKEN=... npm run nightly -- --pillars change --only bcapps-prs --unlimited --commit --push`.
- Leak gate: change pages are official tier and carry at most one quote under 25 words, so the shingle scan cannot
  match; `data/changes/` holds no body.

## 9. Phases after v1

- Open pull requests as an "upcoming" view: same adapter with `state=open`, `kind: pr`, `state: open`, no page
  until merged; re-hashed on `updated_at` because an open pull request does change.
- Issues (`kind: issue`): BCApps uses GitHub issues as its public bug tracker; `fixes_issues` already points at
  them.
- Releases and tags, other repositories (`microsoft/BCQuality`, `microsoft/AL-Go`): the source kind is generic;
  the repo slug is the page folder.
- Topic-hub links: `pipeline/link/topics.ts` gets a third unit kind `change`, with `unitPageId` translation.
- A source footprint page for `bcapps-prs` (`pipeline/render/source.ts` groups only posts and videos today).
- A Sonnet narrative per week ("what moved in BCApps this week") in the digest, when the budget allows.

## 10. Risks and open questions

- The Actions token's ability to read `microsoft/BCApps` through the API from a self-hosted runner is expected
  (public read) and is verified once with a `workflow_dispatch` before the first nightly.
- Backport detection is heuristic. A backport that carries neither the `[29.x]` prefix nor a `backport #n` note
  becomes a normal item on `releases/29.x`, with its own page. Acceptable; the rule list is a constant with tests
  and grows from observation.
- The snapshot lags a merge by up to a night; `changes-relink` closes the gap for added files. Files of a
  first-party app that the extractor does not cover remain unjoined and are listed as paths.
- `ID_LINKS` keeps `objects` out of the cross-reference check (20,000 pages); the change renderer emits only
  object ids whose page exists according to the file index.
- The PR body excerpt is Microsoft text on an MIT repository and is used for extraction only. If a later phase
  wants the body on the page, that is a new CONTENT-NOTICE row, not a quiet change.

## 11. Files

New: `pipeline/lib/github.ts`, `pipeline/ingest/github-prs.ts`, `pipeline/changes/classify.ts`,
`pipeline/changes/index.ts`, `pipeline/code/files-index.ts`, `pipeline/fetch/change.ts`,
`pipeline/extract/change.ts`, `pipeline/render/change.ts`, `schemas/frontmatter.change.json`,
`site/src/pages/changes/*`, the tests in section 5.

Modified: `sources.yaml`, `schemas/sources.json`, `schemas/manifest-item.json`, `schemas/frontmatter.base.json`,
`schemas/graph.json`, `schemas/run-report.json`, `config/budget.json`, `pipeline/lib/config.ts`,
`pipeline/lib/manifest.ts`, `pipeline/lib/queue.ts`, `pipeline/lib/budget.ts`, `pipeline/lib/http.ts`,
`pipeline/ingest/types.ts`, `pipeline/ingest/index.ts`, `pipeline/validate/sources.ts`,
`pipeline/validate/content.ts`, `pipeline/orchestrator/stages.ts`, `pipeline/orchestrator/nightly.ts`,
`pipeline/code/diff.ts`, `pipeline/render/object.ts`, `pipeline/render/digest.ts`, `pipeline/render/search.ts`,
`pipeline/link/graph.ts`, `packages/mcp/src/server.ts`, `site/src/content.config.ts`,
`site/src/pages/llms.txt.ts`, `site/src/pages/search/index.astro`, `site/src/pages/index.astro`,
`.github/workflows/nightly.yml`, `docs/DECISIONS.md`, `docs/PLAN.md`, `docs/RUNBOOK.md`, `CONTENT-NOTICE.md`,
`AGENTS.md`.

## Definition of Done

- [x] Section 5 tests written first and green; `npm run typecheck && npm test`, `npm run validate:sources`,
      `npm run validate:content`, `npm run lint:workflows`, `npm run check:leak` green.
- [ ] AC1 to AC9 observed on a real nightly after the three-month backfill.
- [x] D61 recorded; CONTENT-NOTICE row, AGENTS.md section list, RUNBOOK token note and PLAN rows updated.
- [ ] MCP package description updated (publish optional, D40).

## 12. Outcome (2026-10-07)

v1 (sections 2 to 8) and every phase of section 9 are built. Tests: `changes-classify`, `changes-ingest`,
`changes-join`, `change-pages` (fetch, extract, link, publish, object page, reverse index, digest, search record,
graph edge), `changes-phases` (topic units, source page, narrative, activity), plus the MCP, schema and queue
additions; 299 tests in all.

Checked against the live API (dry run, `--pillars change --only bcapps-prs`): the three-month listing found 1,435
merged pull requests on `main` and `releases/29.x`, 120 bots and 176 backports among them, 1,139 items. Six recent
ones went through every stage with a real Haiku call; their pages validate and join to the object pages they
changed (#12207 to seven System Application objects, #11560 to ten E-Document and PEPPOL objects).

Differences from sections 1 to 8:

- **Case-insensitive join.** BCApps spells an app folder both `app/` and `App/`; the snapshot stores `app/`. The
  path classes and the join compare without case. (Object pages build their GitHub source links from the same
  lowercased paths, which can 404 for `App/` apps: a code-pillar issue, not fixed here.)
- **The horizon is read on `updated_at`.** The list is sorted by update, so an old pull request with a fresh comment
  came first and stopped the listing; it is now skipped. The first listing of a branch pages down to the horizon
  (at most 100 pages) instead of ten, or a backfill would set the cursor past what it never read.
- **`[main]` titles.** A `[29.x]` or `[releases/29.x]` prefix marks a backport; a `[main]` prefix does only with a
  backport note in the body, because BCApps uses it for originals too. A backport without `#n` finds its original
  by title (`title_key`).
- **What is kept per pull request.** A non-code pull request keeps its totals, not its file list. Every merged one,
  bots and backports included, is logged in `data/changes/<repo>/merged.json` for the digest's counts.
- **The file index** is refreshed by the nightly's `changes-relink` phase rather than inside `refreshCodeDerived`
  (an import cycle), one entry per line. **The reverse index** is keyed by object page key, not object key: a
  country's own objects share an object key across countries.
- **Order of the post-loop:** relink, re-render change pages, reverse index and change index all run before
  `code-pages`, so object pages read tonight's changes.

Section 9, as built:

- **Open pull requests, issues, releases:** `data/changes/<repo>/activity.json` per source (three ETag-conditional
  lists a night), the site's `/changes/upcoming/`, the changes `llms.txt`, releases in the digest. A change's
  `fixes_issues` get title and state (at most three calls). No manifest items: an open pull request has no page.
- **Other repositories:** `al-go-prs` (`Actions/`, `Templates/`) and `bcquality-prs` (`microsoft/`, `community/`,
  `custom/`, `skills/`); a source's `paths` decides its source files before any extension rule.
- **Topic-hub links:** a change is a unit of `link/topics.ts` (systems from the join first), and topic pages list it
  under "Videos, posts and code changes" with `links.changes`.
- **Source footprint:** `content/sources/bcapps-prs.md` and the others, dated by merge, with a flight path.
- **Weekly narrative:** `pipeline/summarize/changes-week.ts`, one Sonnet call when a week's change pages move,
  quota `change_narrative: 1`; rendered at the top of the digest's "Code changes".

Open: the backfill itself (RUNBOOK, "Code changes"), after which AC1 to AC9 are observed on a real nightly.
