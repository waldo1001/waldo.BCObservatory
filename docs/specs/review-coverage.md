# Review badges that tell the truth: "derived" for pages without model text, an Opus review for every page with it

Status: implemented, 2026-10-08 (sections 12a and 12b record what was built and where it differs). Decision: D77 (appended). Owner: waldo.
Scope: the `review` frontmatter of every page type, the badge, the search and MCP ranking that read it, and new Opus
review passes for videos, posts, code changes, localization narratives and digest narratives. Every claim below was
verified against the tree at `fd3e20ceb7` on 2026-10-07; counts are from the committed `content/` and
`data/manifest/` at that commit. Not in scope: human review (section 8), re-reviewing hubs, roadmap coverage or topic
links (D21, D23, D54 already do), any change to what the first pass extracts.

## 1. Goal

Every page carries `review.state` (`schemas/frontmatter.base.json:17-20`: `unreviewed | reviewed | flagged`), shown
as a badge (`site/src/components/Badges.astro:8`: "unreviewed - machine-generated", "reviewed - checked by Opus",
"flagged - a review found a problem"). AGENTS.md:11-12 tells agents that `unreviewed` content "is machine-generated
and unchecked". On 2026-10-07, 28,223 of 28,781 pages say `unreviewed` and 558 say `reviewed`:

| Section | Pages | Reviewed | Model-written text on the page |
|---|---|---|---|
| objects | 25,645 | 0 | none: facts extracted from AL source by tree-sitter (D10, `pipeline/code/extract.ts`) |
| changes | 1,080 | 0 | Haiku summary and key points per pull request (`pipeline/extract/change.ts`) |
| videos | 617 | 2 | Haiku extraction and Sonnet summary (`pipeline/extract/video.ts`, `pipeline/summarize/video.ts`) |
| topics | 605 | 556 | Sonnet hub narrative when one exists (`pipeline/summarize/hub.ts`); Opus reviews it (`pipeline/review/hub.ts`) |
| posts | 600 | 0 | Haiku summary, key points and quotes (`pipeline/extract/post.ts`, D34: no second pass) |
| apps | 96 | 0 | none (`pipeline/render/app.ts:91`) |
| features | 80 | 0 | roadmap text and links; the links are already Opus-reviewed per link (D23) |
| sources | 32 | 0 | none (`pipeline/render/source.ts:44`) |
| localizations | 22 | 0 | Sonnet narrative for the countries that have one (`pipeline/summarize/localization.ts`), rendered at `pipeline/render/object.ts:546` |
| digests | 4 | 0 | Sonnet weekly change narrative (`pipeline/summarize/changes-week.ts`) |

Two problems hide behind one word:

1. **25,800 pages carry no model text at all** (objects, apps, sources, features, hubs without a narrative,
   localizations without one) yet read "unreviewed - machine-generated". Nothing on them can ever be reviewed, so the
   badge is a permanent false warning, on exactly the pages whose facts are the most reliable (D02, D10: the code
   pillar is the ground truth for ids and versions).
2. **Most model text is never reviewed.** Opus reviews hubs (quota `opus_reviews` 10, `config/budget.json:50`, biggest
   first) and videos only when the first pass flagged them (`pipeline/orchestrator/stages.ts:9`, `review/video.ts:2`):
   3 of 633 video items ever carried a flag. Posts and code changes have no review stage.

After this change:

- A page without model-written text says **derived**: "derived - from the source, no model text". It never says
  unreviewed again.
- A page with model-written text says `unreviewed` only until its review runs; every such page type has a review
  pass, tied to the input hash of what it reviewed (D21), so a page is reviewed once and again only when it changes.
- The backlog (about 2,300 pages) clears in one or two unlimited runs; afterwards a night reviews what it changed.

## 2. Reader- and agent-facing behaviour, after

- Badges: `derived - from the source, no model text` (new, neutral style, solid border), `reviewed - checked by Opus`,
  `flagged - a review found a problem`, `unreviewed - model text not yet checked` (wording changes: "machine-generated"
  was true of every page, including derived ones).
- AGENTS.md: "`derived` pages hold no model text: facts from the source (code, Learn, roadmap, sources.yaml) placed by
  deterministic code. `unreviewed` marks model text (summaries, narratives) Opus has not checked yet; `reviewed` text
  passed an Opus review against its source; `flagged` text failed one and is withheld or marked."
- A rejected review (Opus says the page is wrong and the edits do not pass validation) follows D21: a rejected video
  is skipped as today; a rejected post or change keeps its facts and drops the model text (summary, key points),
  shows `flagged`, and is not regenerated from unchanged inputs.
- Search (`site/src/scripts/search.ts:18`, `pipeline/render/search.ts:70`) and the MCP re-sort
  (`packages/mcp/src/server.ts:170`) rank hub narratives `reviewed` over `unreviewed` today; `derived` counts as
  `none` for a narrative (no narrative) and is neutral everywhere else. No other ranking changes.
- The galaxy, explorer and lists that print the state (`site/src/scripts/explorer.ts`, `site/src/pages/videos/index.astro`,
  `site/src/lib/tokens.ts`, `site/src/styles/site.css`) learn the fourth value.

## 3. Decisions

**D77 A page's review state says what kind of text it holds.** `derived` is a fourth `review.state` for pages whose
text is all deterministic: object, app, source, feature pages, and hub and localization pages without a narrative. Its
badge reads "derived - from the source, no model text". Every page type that holds model text gets an Opus review
pass tied to the input hash of the text (D21): all videos (no longer only flagged ones), posts and code changes in
batches, localization and digest narratives one by one; hubs, roadmap coverage and topic links keep their reviews.
Edits pass the first pass's validators, a rejection withholds the model text and marks the page `flagged`. The backlog
is reviewed in unlimited runs; quotas then bound a normal night. Cost measured at $0.079 per Opus call (18 calls,
2026-10-06/07); estimated about $120 for the backlog.

Rejected:

- Marking derived pages `reviewed`: Opus never read them; the word would lie the other way.
- Dropping the badge on derived pages: agents read `review.state` in frontmatter (AGENTS.md:11); an absent state is
  ambiguous, a named one is not.
- Reviewing only flagged items, as videos do today: the first pass rarely flags (3 of 633), so "unreviewed" would stay
  the norm.
- A Sonnet review instead of Opus: D07 assigns review to Opus; a reviewer no stronger than the writer adds little.
- Human review now: useful later for the pages the owner checks himself (section 8), not a substitute for coverage.

## 4. Contract

### 4.1 Schema and the one rule (`schemas/frontmatter.base.json`, `pipeline/lib/review.ts` new)

- `review.state` enum gains `derived`. `by` and `at` stay `null` for derived pages.
- `pipeline/lib/review.ts`, pure: `reviewOf(modelText: boolean, review?: { state, by, at, flags }): Review`. No model
  text: `{ state: "derived", by: null, at: null, flags: [] }`. Model text: the stored review, else `unreviewed`.
- Every renderer calls it instead of writing the literal: `object.ts:231` and `:546` (localization: model text when a
  narrative is shown), `app.ts:91`, `source.ts:44`, `feature.ts:79`, `digest.ts:90` (model text when the week has a
  narrative), `topic.ts:64` (model text when a narrative is shown), `post.ts:48`, `change.ts:57`, `video.ts:81`.
- `pipeline/validate/content.ts`: a page with `derived` must not carry a narrative or model summary field (the
  validator knows which fields are model text per type; list them in the validator next to the rule).

### 4.2 Review passes (`pipeline/review/*.ts`)

Shared shape, as `review/hub.ts` and `review/topics.ts` do it: a phase or stage that picks due items (no review for
the current input hash), calls `complete()` with role `review` (`pipeline/lib/llm.ts`, never another path), validates
edits with the first pass's validators, writes `data/review/<kind>/<id>.json` with `{ input_hash, verdict, by, at,
issues, applied, rejected_edits }`, and the renderer reads it through `reviewOf`.

| Kind | Unit | Inputs to Opus | Edits allowed | Quota (new keys in `config/budget.json`) |
|---|---|---|---|---|
| video | one video | transcript segments, extraction, summary, flags (as today) | as today (`review/video.ts`) | `video_reviews` 20 |
| post | batch of 4 posts | per post: the vault text excerpt the extractor saw (`CALL_CHARS`), the extraction | summary, key points, drop a quote, drop an object/feature/system | `post_reviews` 15 batches |
| change | batch of 6 pull requests | per PR: title, body excerpt from tonight's cache (never stored), changed files, joined objects, the extraction | summary, key points, kind, behaviour/breaking flags, drop an obsoletion | `change_reviews` 15 batches |
| localization | one country | the country diff summary and Learn summaries Sonnet saw, the narrative | summary, overview, key points (as `review/hub.ts`) | shares `opus_reviews` |
| digest | one week | the change summaries of the week, the narrative | as hubs | shares `opus_reviews` |

- Videos: the `reviewed` stage runs for every video, not only flagged ones (`stages.ts:9` comment and the
  `linked → reviewed` transition in `pipeline/orchestrator/execute.ts` or `stages.ts`, wherever the flagged-only gate
  lives: verify). Unflagged videos get the same prompt with `flags: []`.
- Posts and changes: a phase after `linked`, like `topic-reviews` (`nightly.ts`), not a stage: batches, due-first by
  `published_at` newest first, so new items are reviewed the night they land and the backlog drains behind them.
- Community posts: the prompt includes post text only within the content policy already used by the extractor (the
  vault excerpt, never written to the public tree, `CONTENT-NOTICE.md`); edits pass the same 25-word guard (D33).
- `facts_only` guard (`pipeline/lib/budget.ts:116`) zeroes the new review quotas like the existing ones.
- Run report and summary: `report.reviews` gains `video`, `post`, `change` counts (reviewed, fixed, rejected, calls,
  cost); `scripts/run-summary.ts` prints one line per kind.

### 4.3 Site (`Badges.astro`, styles, tokens, lists)

`REVIEW.derived = "derived - from the source, no model text"`, `REVIEW.unreviewed = "unreviewed - model text not yet
checked"`. A `.badge.derived` style: solid border, neutral colour from the existing tokens (AA on both themes,
computed like D64). Every place that switches on the state (section 2 list) handles `derived`.

## 5. Test plan (write first)

- `tests/unit/review-state.test.ts`: `reviewOf` for no model text, model text with and without a stored review, a
  flagged review.
- Per renderer, one assertion in the existing page tests (`object-pages`, `app-page`, `topic-pages`, `blog-posts`,
  `video-pages`, `change-pages`, digest and source tests): the page's state is `derived` or follows the stored review.
- `tests/unit/review-post.test.ts`, `review-change.test.ts`: a fake LLM returns approve, fix (with one valid and one
  invalid edit) and reject; the record, the applied/rejected edits and the page's state follow; an unchanged input
  hash is not reviewed twice; the 25-word guard rejects a quoted edit.
- `tests/unit/review-video.test.ts`: an unflagged video reaches `reviewed`.
- `validate:content`: a derived page with a narrative field fails.

## 6. Tasks

Phase 1, honest state (deterministic, no LLM, one PR):

1. Schema enum, `pipeline/lib/review.ts`, the ten renderer call sites, the validator rule, tests.
2. Badge wording and style, the site consumers, AGENTS.md lines 11-12, search and MCP handling of `derived`.
3. The next nightly rewrites the review block of every page (one large content commit, no LLM): ship it when no other
   large rewrite is pending, or together with one.

Phase 2, review coverage (LLM, one PR per kind is fine):

4. Videos: all reach `reviewed`; quota `video_reviews`.
5. `review/post.ts` and `review/change.ts` with their phases, quotas, report lines.
6. Localization and digest narratives through the hub reviewer's shape.
7. Backlog: `gh workflow run nightly -f unlimited=true` (one or two runs); record reviewed, fixed, rejected and cost per
   kind in section 12.

Close: D77 appended, PLAN M15 shipped, HANDOFF moved, AGENTS.md updated, spec section 12 "Built, deviations".

## 7. Verification

- `npm run typecheck && npm test`; `npm run validate:content` on a local render.
- After phase 1's nightly: count states per section on `origin/main` (`git grep -h '^  state:' origin/main --
  content/<section>` or the frontmatter parser): objects, apps, sources, features all `derived`; no section other than
  those with model text has `unreviewed`.
- After phase 2's backlog runs: `unreviewed` count per section near 0 for videos, posts, changes; the run summaries
  list fixed and rejected counts; spot-check five fixed pages of each kind against their source (the review record
  says what changed).
- `npm run check:leak` green after the post reviews (no community text beyond the guard).
- The site build; badges on one page of each state in both themes.

## 8. Later, not in this spec

- **Human review**: a `reviewed` state with `by: "waldo"` set from `data/overrides/reviews.yaml` (page id, date, note),
  for pages the owner checks himself; it would outrank an Opus review in the badge ("reviewed - checked by waldo").
- Reviewing the Haiku topic and roadmap matcher's first pass again after a model change.

## 9. Risks and open questions

- Cost: $0.079 per Opus call measured on hub and coverage reviews; video reviews send transcripts and will cost more
  (estimate $0.15). Backlog estimate: 615 videos × $0.15 ≈ $92, 150 post batches × $0.10 ≈ $15, 180 change batches ×
  $0.08 ≈ $14, 26 narratives ≈ $2: about $120. The first run's report gives the real number; the spend caps stay in
  force on normal nights.
- Rejections remove text from pages that readers see today. That is D21's intent ("no page is better than a wrong
  page"); the run summary lists them so a burst of rejections is noticed.
- The usage guard (D06) may cut a backlog run short; it resumes the next night.
- Open: should a `flagged` post keep its key points if only the summary was rejected? Default: drop both, keep facts.

## 10. Files

New: `docs/specs/review-coverage.md` (this), `pipeline/lib/review.ts`, `pipeline/review/post.ts`,
`pipeline/review/change.ts`, `tests/unit/review-state.test.ts`, `tests/unit/review-post.test.ts`,
`tests/unit/review-change.test.ts`.

Modified: `schemas/frontmatter.base.json`, `schemas/run-report.json`, `pipeline/render/{object,app,source,feature,digest,topic,post,change,video}.ts`,
`pipeline/review/video.ts`, `pipeline/orchestrator/{stages,nightly}.ts` (and `execute.ts` if the flagged-only gate
lives there), `pipeline/lib/budget.ts`, `pipeline/validate/content.ts`, `config/budget.json`, `scripts/run-summary.ts`,
`site/src/components/Badges.astro`, `site/src/styles/site.css`, `site/src/lib/tokens.ts`, `site/src/scripts/{search,explorer}.ts`,
`site/src/pages/videos/index.astro`, `site/src/pages/neighbourhood/index.astro`, `site/src/pages/llms.txt.ts`,
`pipeline/render/search.ts`, `packages/mcp/src/server.ts`, `AGENTS.md`, the page tests of section 5, `docs/DECISIONS.md`,
`docs/PLAN.md`, `docs/HANDOFF.md`.

## 11. Definition of Done

- Tests of section 5 green; typecheck, tests, `validate:content`, `check:leak` and the site build pass.
- No page without model text carries `unreviewed`; every page type with model text has a review pass with a quota and
  a run-report line.
- The backlog runs are done and section 12 records the counts and the cost per kind.
- D77 appended, PLAN M15 shipped, HANDOFF moved, AGENTS.md describes the four states.

## 12. Edits to other files (applied 2026-10-08)

### `docs/DECISIONS.md`, append

The D77 text of section 3, with the measured backlog cost.

### `docs/PLAN.md` section 5, row before `v0.2+`

| **M15 review coverage** | a fourth review state `derived` for pages without model text; Opus reviews for every video, post, code change, localization and digest narrative, tied to the input hash (`docs/specs/review-coverage.md`, D77) | 2 to 3 days, then one or two unlimited runs | medium: about $120 of Opus for the backlog, then the new quotas per night |

### `docs/HANDOFF.md`, open specs

- **Review coverage** (`docs/specs/review-coverage.md`, D77, M15). Status: proposed 2026-10-07, nothing implemented.
  Start with phase 1 (`pipeline/lib/review.ts`, the schema enum and the ten renderer call sites; no LLM). Until it lands
  25,800 pages without any model text read "unreviewed - machine-generated", and videos, posts and changes are
  reviewed only when flagged (3 of 633 videos) or never.

## 12a. Built, part A (phase 1, localization and digest narrative reviews)

Built 2026-10-08 on `dev/next` (part B, the video, post and change passes, is a parallel lane). What landed and where
it departs from sections 4 to 6:

- **`reviewOf` and the call sites** (`pipeline/lib/review.ts`): as 4.1, plus `reviewWords(state)` for the state words a
  page body prints next to its tier, so post, change and localization bodies follow the state instead of a hard-coded
  "**unreviewed**". Post, change and video keep reading `item.review` unchanged: post and change render
  `{ ...reviewOf(true, item.review), flags: item.flags ?? [] }`; video renders
  `{ ...reviewOf(true, item.review ?? (flags.length ? { state: "flagged" } : null)), flags }`, so a first-pass flag
  without a review still reads flagged, and a review on `item.review` (reviewed or flagged) wins. A pass that sets
  `item.review = { state, by, at }` on the manifest item is all the page needs.
- **Localization and digest pages withhold a rejected narrative**, as topic pages do (D21): state `flagged`, flag
  `narrative-rejected`, the deterministic summary and body, and a line saying the narrative was withheld.
- **Digests mark model text in `generated.prompts`** (`narrate-changes: 1`) when the week's narrative is shown; the
  validator reads that, as it reads `hub-localization` on localization pages and `narrative` on topics.
- **Older digest weeks**: the nightly re-renders only the current and the previous week ("older weeks stay"). Their
  frontmatter review block is now synced in place (`syncDigestReview`, content untouched), so the first nightly after
  phase 1 also turns W38 and W39 into `derived`. Without it they would read `unreviewed` forever.
- **Validator** (`pipeline/validate/content.ts` `MODEL_TEXT`, `derivedErrors`): a `derived` page fails when its type
  always holds model text (video, post, change), a topic has `narrative` other than `none`, `generated.prompts` names
  any prompt, or `review.by`/`review.at` is set.
- **Badge**: `.badge.derived` uses `--muted` for text and border (solid): dark 6.75:1 on the background, 6.52:1 on
  surface, 5.87:1 on raised surface; light 5.80:1, 6.32:1, 5.45:1. No new token. Search, the site search script and
  the MCP re-sort read `derived` as "no narrative" (`none`, factor 0.9); explorer and neighbourhood default to
  `official|derived`; `llms.txt` and the MCP README say so.
- **Body wording follows the state** on every page that prints it next to its tier (post, change, video, topic and
  localization narrative lines, the digest's narrative note): the badge texts, `reviewed (checked by Opus)`,
  `**unreviewed** (model text not yet checked)`, `**flagged** (a review found a problem)`. "machine-generated" is gone
  from the state words (it stays only in the digest header and the topic-link note, which describe the page, not a state).
- **Narrative reviews** (`pipeline/review/narrative.ts`, stages `review-localization` and `review-digest`): the hub
  reviewer's shape. Deviation from 4.2: the record lives **in the narrative file itself** (`review` in
  `data/hubs/localizations/<cc>.json` and `data/changes/narratives/<week>.json`), exactly like the hub reviews, not in
  `data/review/<kind>/`. Reason: a refreshed narrative replaces the file and so drops a stale review by construction, and
  the renderers already load that file. The record is the hub review's fields (`state, by, at, verdict, issues,
  input_hash, cost_usd`) plus `applied` and `rejected_edits`.
- **Edits pass the first pass's validators**: localization summary/overview/key points are tidied and clipped, an
  empty field is a rejected edit; a digest's text must pass `acceptNarrative` (length, every `#number` one of the
  week's). **A fix none of whose edits pass counts as a reject** (flagged, withheld): Opus said the text is wrong and
  no valid correction exists.
- **Inputs**: localization reviews read `localizationInputs()` (factored out of `refreshLocalizationNarratives`, no
  behaviour change): the same prompt Sonnet saw. Digest reviews read `weekRows()` as the change pages are now. Only the
  weeks the digest re-renders (current and previous) are due, so a review always reaches its page.
- **Quota**: `opus_reviews`, shared; no new key in `config/budget.json`. Nightly order: `localization-reviews` right
  after `localization-narratives` (before `code-pages` renders the pages), `digest-reviews` right after
  `change-narrative`; both only when the run stopped `done`, like the hub reviews. The hubs get
  `opus_reviews - stage charges - narrativeReviewsUsed`, so the narratives go first on a night; with 22 localizations
  in the backlog and a quota of 10 that is two nights of hub reviews deferred, or one unlimited run.
- **Report**: `report.narrative_reviews.{localization,digest}` (`candidates, reviewed, fixed, rejected, calls,
  cost_usd, stopped`), a new top-level key so it does not collide with part B's `report.reviews`;
  `scripts/run-summary.ts` prints one line per kind.

State counts on a local deterministic re-render of the committed data (2026-10-08, before any narrative review ran):
objects 25,645 derived; apps 96 derived; sources 32 derived; features 80 derived; topics 49 derived, 556 reviewed;
localizations 22 unreviewed (all have a narrative); digests 2 derived (W38, W39), 2 unreviewed (W40, W41); videos 2
reviewed, 615 unreviewed; posts 600 unreviewed; changes 1,080 unreviewed. `validate:content`: 28,781 pages OK.

## 12b. Built, part B (review passes for videos, posts and changes)

Built 2026-10-08 on `dev/spec` (videos in one commit, posts, changes and the nightly wiring in the next). No LLM call,
no nightly run yet; everything below is tested with a fake LLM.

- **Videos.** The flagged-only gate lived in `pipeline/lib/manifest.ts` `nextStage` (not in `stages.ts` or
  `execute.ts`); it now applies to the other pillars only. `quotaFor("video", "reviewed")` is `video_reviews`, so the
  hub reviewer's `opus_reviews` remainder is no longer eaten by video reviews. Prompt version 2: the system prompt
  no longer says "It was flagged". The record gains `input_hash` (extraction plus summary), `by`, `at`.
- **Video backlog (not in the spec).** Published videos never pass `reviewed` again on their own, so the nightly
  rewinds up to `video_reviews` due ones (no record, or a record whose `input_hash` differs; pre-D77 records count
  when the item says `reviewed`) to `linked`, newest first, before planning; ones the run does not reach are put back
  to `published` unchanged after the item loop (`restoreVideoBacklog`), so a cut-short run drops no video from the
  digests. A rejected backlog video loses its page and its summary file (the re-render reads the summary), and is
  skipped `review-rejected` as today.
- **Posts and changes** are one phase, `content-reviews`, after `topic-reviews` (`pipeline/review/coverage-run.ts`,
  shared runner `pipeline/review/batch.ts`). Records are `data/review/post/<source>/<fileKey>.json` and
  `data/review/change/<repo-slug>/<number>.json` (the item id has slashes). The input hash covers the source (post
  excerpt hash; merge SHA, title and body hash) and the extraction; after a fix the record holds the hash of the edited
  extraction, so a fixed page is not reviewed again. When an extraction changes, its `review` goes back to
  `unreviewed` at once (also with quota 0) and the page is re-rendered; the review follows within quota.
- **Rejections.** Post: summary becomes a fixed "Summary withheld ..." sentence (the frontmatter requires a summary),
  key points empty; quotes (verbatim, validated), objects, features, systems stay. Change: summary empty (the
  renderer already falls back to the title line), key points empty; kind, flags and obsoletions stay. State `flagged`.
- **25-word guard.** Every post edit (summary, each key point) is checked against the post text and refused, not
  trimmed, when it repeats 25+ words; the edited extraction as a whole is checked again. Issues that repeat the post
  are dropped from the public record. The guard runs for full-text sources too (stricter than the extractor).
- **Change body.** `changeBody` (tonight's cache, else one GitHub call); never written to the record.
- **Report.** `report.reviews.{video,post,change}`: reviewed (every verdict), fixed, rejected, calls, cost_usd, plus
  candidates, failed, reset, rerendered, stopped for posts and changes. Video numbers are read back from tonight's
  `reviewed` stage records and rejected items' records. `scripts/run-summary.ts` prints one line per kind.
- **Not done here:** renderers still print the literal "**unreviewed** (machine-generated)" in the post and change
  body lines; that is part A's `reviewOf` work.

Backlog the first unlimited run would review (committed `data/manifest/` at `815742eb8e`): videos 521 due in this
checkout (617 published, 2 reviewed; the rest of the community videos need their caption segments from the vault,
so about 615 on the Mini), 615 calls; posts 600 published with an extraction, all due where the vault text is
present, at least 150 calls; changes 1,080 due, 180 calls. About 945 Opus calls, roughly $92 + $15 + $14 at the
section 9 rates.
