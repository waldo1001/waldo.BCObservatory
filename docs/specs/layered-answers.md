---
issue: 26
status: draft
---

# Layered answers: never less than Learn, only more

Status: proposed, 2026-10-23. Decision: D106 (reserved, appended to `docs/DECISIONS.md` at ship time). Milestone: M44
(reserved). Owner: waldo. Built by hand in worktree `../waldo.BCObservatory-build-layered-answers` (branch
`build/layered-answers`), one PR per phase, on the owner's request of 2026-10-23; do not apply `spec-approved` to issue
#26 while that branch exists.
Scope: cross-links between objects, changes, videos, posts and Learn pages with labels; Learn key facts; cautions on
posts and videos with a relevance guard; Microsoft Support "Update 28.x" hotfix lists as an official source; a layered
MCP tool and search grouped by layer; a never-less test over six acceptance questions. Every claim below was verified
against the tree at `106fd5fa11` (origin/main, 2026-10-23) and, where named, against the live Observatory MCP, the
Learn MCP and support.microsoft.com on 2026-10-23. Source: the owner's draft `bc-observatory-layered-answers-spec.md`
(2026-10-23), carried over with one correction (section 1.3). Not in scope: Learn body text (D01, D94 stay), key facts
for all of Learn (section 8), hotfix lists before 28.4 and of other waves (section 8), the site's search page grouping
(the MCP first; section 8).

## 1. Goal

### 1.1 The idea

One answer, stacked in layers, every layer with its source and trust tier:

1. **How it works (official).** What Learn says, with the key facts in the answer itself and a link. Never less than
   what the Learn MCP returns for the same question.
2. **In the code.** Objects, events, subscribers, version diff.
3. **What changed lately.** Merged PRs, AL releases, Microsoft hotfix lists.
4. **Heads up (community and videos).** Posts and video disclaimers that carry a warning, scoped to the object and
   version they apply to.
5. **Gaps.** What no source says (the PR description is only a title; a link nobody states).

Example shape (environment copy):

> **How it works (Learn):** copying an environment stops job queue tasks, turns agents off, disables [list] and clears
> [list]. [link]
> **In the code:** the platform raises OnClearDatabaseConfig / OnClearCompanyConfig on Codeunit 1886 "Environment
> Cleanup"; 16 subscribers, Microsoft's own in Codeunit 8912.
> **Changed lately:** #10207 (Truncate for CRM records), #12152 (environment description cleared), #13005 (MDM cleanup).
> **Heads up (community):** Gerardo Renteria built an anonymize-and-log solution on the same events.
> **Gaps:** not stated whether #10207 and #12152 are on 29.x.

### 1.2 Evidence: where the observatory shows less than Learn today

Learn links per section, counted on `content/` at `106fd5fa11` (`links.learn` not empty):

| Section | With a Learn link |
|---|---|
| objects/page | 1,607 / 5,998 |
| objects/table | 786 / 3,798 (inherited from their pages) |
| objects/report | 265 / 2,216 |
| objects/query | 1 / 460 |
| objects/codeunit | 0 / 5,729 |
| objects/enum | 0 / 1,417 |
| changes/bcapps | 0 / 1,092 |
| videos | 0 / 622 |
| posts | 0 / 623 |

Why:

- The only Learn-object join is `pipeline/code/docs-objects.ts:24-33`: `ms.search.form` to page, report or query, plus
  API pages (`apiIndex`, :50). It says "No name or caption matching". Tables inherit from their pages
  (`pipeline/render/object.ts:485-494`). A codeunit or enum can never get a Learn link.
- Change pages hard-code `links: { learn: [], ..., topics: [], ... }` (`pipeline/render/change.ts:63`); video and post
  pages fill only `objects` (and video `features`) (`pipeline/render/video.ts:88`, `pipeline/render/post.ts:55`).
- The Learn extraction (`pipeline/extract/docs.ts`, `PROMPT_VERSION = 1`) writes `objects` per page into
  `data/extract/docs/<source>/<file>.json`; nothing reads them for links.
- `data/overrides/` holds `embeds.yaml` and `seed-videos.yaml` only: there is no way to hand-seed a link.

The owner's findings, re-checked on the tree:

| Finding | Verified how |
|---|---|
| "Copy an environment" is in the admin-center hub as title plus one line (`content/topics/dev-itpro/administration/admin-center.md:338`). The documented cleanup list is in no file of ours; the extraction holds one summary sentence and `objects: []` (`data/extract/docs/learn-devitpro/dev-itpro-administration-tenant-admin-center-environments-copy-md--225f087513.json`). The Learn-only run returned the list. | file reads; Learn MCP run (owner) |
| Codeunit 1886 "Environment Cleanup" and Codeunit 8912, changes #10207, #12152, #13005 have `links.learn: []`. | `content/objects/codeunit/1886.md`, `8912.md`, `content/changes/bcapps/{10207,12152,13005}.md` |
| Searching "environment copy cleanup OnClearCompanyConfig" returned Sustainability codeunits and a PDF-extraction change first. "Copy an environment" only appears for its exact title: Learn rows get no title boost (`packages/search/src/score.ts:400-421`) and "cleanup" has no synonym (`packages/search/src/synonyms.ts`). | MCP search (owner); scorer read |
| Video `kOCiyVql0go` (Fabric) has `links.learn/objects/posts/topics: []`, although the Learn page "Set up Business Central data mirroring to Microsoft Fabric" (`admin-set-up-fabric-mirroring`), permission sets 48530 "Fabric Exp Admin", 48531 "Fabric Exp Read", 48532 "Fabric Exp Activate" and waldo's post `waldo-be/318707` "Business Central data in Fabric: the way it should be" are all in the tree. | `content/videos/kOCiyVql0go.md`, `content/objects/permissionset/4853{0,1,2}.md` |
| Learn answered the Fabric question with prerequisites, the 8-step guide and three permission sets; the observatory's video answer had the video facts (timestamps verified against the transcript) but none of that. | Learn-only vs observatory-only run (owner) |
| Microsoft Support hotfix lists are not a source. Update 28.6 (`support.microsoft.com/help/5130861`) lists 648146 "Revert a previous behavior change, restoring the original calculation logic for Purchase Invoice lines of type G/L Account" (area Finance). The pages are HTML tables `ID | wording | area`; the index page "Released updates for Microsoft Dynamics 365 Business Central 2026 release wave 1" links 28.1 to 28.6. Whether 648146 fixes That NAV Guy's 28.2 case is stated nowhere. | `curl` of both pages 2026-10-23; `sources.yaml` |
| That NAV Guy's 28.2 post ("Change Behaviour on VAT Prod. Posting Group - Prices Incl. VAT in v28.2"), #11208 (work item 649414) and #11436 (649415) are about the same purchase-line behaviour; none links to another. | page reads |
| Change pages carry `work_items` (AB#, 6 digits; 1,042 distinct numbers over 1,092 pages), the same id space as hotfix entries. | `grep` over `content/changes/bcapps/` |

### 1.3 Correction to the owner's draft

The draft says Sales-Post (Codeunit 80) has zero Obsolete markers on releases/29.x. Our 29/W1 snapshot
(`data/code/29/w1/objects-codeunit-*.jsonl`) has three, all `Pending`, tag 27.0: `OnAfterGetAmountsForDeferral`,
`OnSetPostingPreviewDocumentNo`, `OnGetPostingPreviewDocumentNos`. The relevance guard still holds: waldo's post
"Obsoleted and 'no longer invoked' events in v26" (`posts/waldo-be/317951`) is about the legacy invoice posting events
around Table 49 "Invoice Post. Buffer" (obsolete `Removed`, tag 27.0), not about Codeunit 80's three. The guard's test
therefore rests on object identity, and its fixture includes Codeunit 80's three Pending events so a guard that keyed
on "has obsolete events" would fail it.

### 1.4 After this change

- Objects, changes, videos and posts link to the Learn pages, objects, posts and changes that match them, in both
  directions; each extra link carries a label (`fixes`, `documents`, `names`, `possibly related`, `relation unknown`)
  and who made it (`code`, `override`, `model`). "Possibly related" is never written into `links.*` proper.
- Learn pages of the administration and Fabric hubs carry 3 to 8 key facts in our own words.
- Posts and videos carry `cautions`; an object page shows a caution only when the caution names that object or one of
  its members, and says what it applies to.
- Update 28.4, 28.5 and 28.6 are official pages, one per update, with one search record per entry, joined to changes
  by work item.
- The MCP has `brief(query | path)`, which returns the five layers with sources; `search` groups its results by layer
  and a Learn page whose title the query covers ranks first.
- A test proves, for six questions, that every Learn URL the Learn-only run returned is reachable from the brief.

## 2. Reader- and agent-facing behaviour, after

**Object, change, video and post pages.** Frontmatter `links` gains `related` (section 4.1). The page body gets a
section `## Possibly related` (only when a `possibly related` or `relation unknown` row exists), each row
`- [<title>](<link>) — <label>: <why>` with `(model-linked)` appended for `by: model`. Certain links (`fixes`,
`documents`, `names`, overrides) go into the matching `links.*` list as well and render where those lists render today.
Example on Codeunit 1886:

```
## Possibly related
- [Copy an environment](https://learn.microsoft.com/.../tenant-admin-center-environments-copy) — documents: the cleanup this codeunit raises runs when an environment is copied (owner, 2026-10-23)
```

**Topic hubs.** Under an article row of a scoped hub, the key facts as a nested list, then one attribution line per
hub: "Key facts from Microsoft Learn (CC BY 4.0), in our own words."

**Object pages, Heads up.** `## Heads up (community)` lists the cautions the guard attached:
`- <kind>: "<quote>" — [<post or video title>](<page>), applies to <scope>`. Table 49's page gets the v26 post's
caution with "applies to the legacy invoice posting events (Table 49 "Invoice Post. Buffer", Removed in 27.0)";
Codeunit 80's page does not.

**Hotfix pages.** `content/hotfixes/28.6.md` (tier official): frontmatter `update`, `build`, `released`, `url`,
`entries` count; body one table per area, rows `| <id> | <wording> | <links> |`, each row anchored `#<id>`; links show
`fixes #<change>` for a work-item match and `possibly related <object>` for an exact caption match. `/hotfixes/` lists
the updates newest first.

**MCP `brief`.** Text answer, five headings in fixed order, each line ending with `[<tier>, <source path or url>]`:

```
# Brief: environment copy cleanup
## How it works (Learn)
- Copy an environment — <key fact 1>; <key fact 2>; ... [official, learn: .../tenant-admin-center-environments-copy]
## In the code
- Codeunit 1886 "Environment Cleanup": 2 events; 16 subscribers ... [official, objects/codeunit/1886]
## Changed lately
- #13005 [Master Data Management] Cleanup when copying environment (2026-..) [official, changes/bcapps/13005]
## Heads up
- gerardorenteria-blog/15213: ... [community, posts/gerardorenteria-blog/15213]
## Gaps
- #10207, #12152: the description is a title only; no source says whether they are on 29.x.
## Conflicts
- Fabric mirroring status: video says "public preview in 29.x (likely 29.1)" [video kOCiyVql0go t=19]; Learn setup page says ... [learn]; not resolved.
```

`## Conflicts` appears only when two sources disagree on a status.

**MCP `search`.** Output grouped under `## Learn`, `## Code` (objects, symbols), `## Changes` (changes, releases,
hotfixes), `## Community and videos`, `## Other` (hubs, features, digests), the existing lines unchanged inside each
group; groups ordered by their best hit, except that a Learn record whose title words are all in the query puts
`## Learn` first.

## 3. Decisions

**D106 (draft).** Answers are layered and never show less than Learn. Cross-links carry a label from a closed set and
who made them; uncertain ones live in `links.related`, never in `links.*`. Three ways to make one, in order: a human
override in `data/overrides/links.yaml` with evidence; deterministic joins (extracted names resolved exactly, D94
identifiers, shared objects, work items); a quota-limited Haiku confirmation over candidates the shared scorer
proposes, labelled `possibly related (model-linked)`. Learn pages carry key facts in our own words (no body text, D01
and D94 stand). Cautions attach only by object or member identity and version. Microsoft Support update pages are an
official source storing ID, area and Microsoft's one-line wording with attribution, one page per update. The MCP's
`brief` composes the layers; `search` groups by layer.

Owner decisions of 2026-10-23: (a) the generaliser adds the Haiku confirmation step; (b) hotfix entries store the
one-line wording; (c) search grouped by default; (d) one PR per phase.

Rejected:

- **Learn body text in the index** to answer "what does the copy clear": D01 and D94 stand; key facts in our words
  give the answer at a fraction of the bytes.
- **Title or keyword matching** for links: AGENTS.md forbids it outside the seed import. The scorer only proposes
  candidates; Haiku decides, and the label says so.
- **Deterministic links only plus overrides** (the recommended option in the scoping round): leaves every codeunit no
  Learn page names unlinked unless a human writes it down. The owner chose the model step.
- **One page per hotfix entry**: ~200 pages per update against the bytes-first rule (D88); one page per update with
  anchors gives the same deep links.
- **Hotfix ID, area and link only**: an answer could not say what the fix is without a click.
- **Opt-in search grouping** (`group: "layer"`): the owner chose the default.
- **Cautions by topic overlap**: the v26 post would attach to every posting codeunit (section 1.3).

## 4. Contract

### 4.1 Labelled links (phase 1)

Base frontmatter schemas (`schemas/frontmatter.{object,change,video,post}.json`, and the shared `links` definition)
gain an optional array:

```yaml
links:
  learn: [...]
  related:
    - to: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/tenant-admin-center-environments-copy
      title: Copy an environment
      label: documents        # fixes | documents | names | possibly related | relation unknown
      why: the cleanup this codeunit raises runs when an environment is copied
      by: override            # code | override | model
```

`to` is a page id (`object/codeunit/1886`, `change/bcapps/10207`, `post/waldo-be/318707`, `hotfix/28.6#648146`) or a
Learn URL. Rule: `fixes`, `documents`, `names` with `by: code | override` are certain and also written into the
matching `links.<kind>`; `possibly related`, `relation unknown` and every `by: model` row stay in `related` only.

**Overrides** `data/overrides/links.yaml`, schema `schemas/overrides-links.json`:

```yaml
links:
  - from: object/codeunit/1886
    to: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/tenant-admin-center-environments-copy
    label: documents
    why: the cleanup this codeunit raises runs when an environment is copied
    evidence: { by: waldo, at: "2026-10-23", url: https://github.com/waldo1001/waldo.BCObservatory/issues/26 }
```

Both directions are written (a Learn URL has no page of ours: the reverse lands on the hub that lists it, as
`related` of the hub, and in `brief`). Seeds:

| from | to | label |
|---|---|---|
| object/codeunit/1886, object/codeunit/8912 | Learn `tenant-admin-center-environments-copy` | documents |
| change/bcapps/10207, 12152, 13005 | Learn `tenant-admin-center-environments-copy` | documents |
| change/bcapps/10207, 12152, 13005 | object/codeunit/1886 | possibly related (they subscribe to its events; check at build time with the call graph, else drop) |
| post/gerardorenteria-blog/15213 | object/codeunit/1886, Learn `tenant-admin-center-environments-copy` | names |
| video/kOCiyVql0go | Learn `admin-set-up-fabric-mirroring` | documents |
| video/kOCiyVql0go | object/permissionset/48530, 48531, 48532 | names |
| video/kOCiyVql0go | post/waldo-be/318707 | possibly related (same feature) |
| post/thatnavguy-com/…3b717ab825 | change/bcapps/11208, 11436 | possibly related (same behaviour, no source states the link) |

Every id is checked to exist by the loader; a missing id fails `validate:content`.

**Deterministic generaliser** `pipeline/link/crosslinks.ts`:

```ts
export const SCHEMA = "bcobs-crosslinks@1";
export type Label = "fixes" | "documents" | "names" | "possibly related" | "relation unknown";
export interface CrossLink { to: string; title: string; label: Label; why: string; by: "code" | "override" | "model" }
export function buildCrossLinks(input: CrossLinkInput): Map<string, CrossLink[]>;
```

Rules, each a closed `why` template:

| Rule | Label | why |
|---|---|---|
| Learn extract `objects` resolved exactly by `mentionedObjects` (`pipeline/link/mentions.ts:36`) | names | `Learn page names <object>` |
| D94 identifier of a Learn row equal to an object name or an event of an object | names | `Learn page names <identifier>` |
| change touches an object that has a certain Learn link | possibly related | `touches <object>, documented in <title>` |
| video/post resolves an object that has a certain Learn link | possibly related | `names <object>, documented in <title>` |
| two of video/post resolve the same object, at most 20 sharers per object | possibly related | `both name <object>` |
| video and post share a roadmap feature | possibly related | `same roadmap feature <title>` |
| hotfix entry id in a change's `work_items` (phase 4) | fixes | `work item <id>` |

Output `data/links/crosslinks.json` (`{schema, generated_by, pages: {id: CrossLink[]}}`, one page per line, at most 12
rows per page, certain first). Overrides merge last and win on the same `to`. Consumers: `pipeline/render/object.ts`
(:208, :237), `change.ts:63`, `video.ts:88`, `post.ts:55`; the graph turns rows into `relates` edges
(`pipeline/link/graph.ts`). The nightly runs it right after `related` (`pipeline/orchestrator/nightly.ts:344-362`) and
before the page renders that read it; derive does not rebuild it (D81 boundary stands).

**Model confirmation** `pipeline/link/learn-confirm.ts`, stage `link-learn-confirm`, role `facts` through
`pipeline/lib/llm.ts`, `PROMPT_VERSION = 1`:

- Units: objects and changes with no certain Learn link that changed in the last 6 months (`changed_in` or a change
  page) or that a video or post resolves; changes merged in the last 6 months.
- Candidates: the shared scorer (`packages/search`) over the Learn records with the unit's name, caption, namespace,
  event names (objects) or title (changes); top 5. A unit with no candidate scoring above the floor is skipped, no call.
- Haiku gets the unit's facts and the candidates' titles and extract summaries and returns
  `{picks: [{path, reason ≤ 140 chars}]}`, 0 to 2 picks; picks not in the candidate set are dropped.
- Record `data/links/learn-confirm/<unit>.json` `{candidates_hash, picks, model, prompt_version}`; a unit reruns only
  when its candidate hash changes. 8 units per call.
- Quota `learn_confirm` in `config/budget.json`, default 30 units a night; backfill is an operator run
  `npm run link:learn-confirm -- --write --quota N`.
- Rows: `label: possibly related`, `by: model`, `why: <reason>`.

### 4.2 Learn key facts (phase 2)

`pipeline/extract/docs.ts`: `docsSchema` gains

```json
"key_facts": { "type": "array", "maxItems": 8, "items": { "type": "object", "additionalProperties": false,
  "required": ["text", "kind"], "properties": { "text": { "type": "string" },
  "kind": { "type": "string", "enum": ["fact", "status", "prerequisite", "step", "permission", "limit"] } } } }
```

Prompt: 3 to 8 facts, each at most 200 characters, in your own words, no sentence copied; statuses (preview,
generally available) as `status` with the version or date the page gives. `PROMPT_VERSION = 2`. Deterministic guard:
a fact sharing 12 or more consecutive words with the page body is dropped (`repeatChecker`, `pipeline/validate/leak.ts`);
facts over 200 characters are clipped at a word.

Scope: `config/learn-facts.json` `{ "rule": 1, "hubs": ["topics/dev-itpro/administration", "topics/business-central/analytics-business-intelligence-and-repo/analyze-data-in-business-intelligence-to/microsoft-fabric"] }`
(admin-center, environment copy and restore sit under the first). A rule-marker backfill (`key_facts_rule` on the
manifest item, pattern of `backfillIdentifiers`, `pipeline/fetch/git-page.ts:211`) rewinds only extracted Learn items
of the scoped hubs below the rule to `fetched`, within the `docs` quota. Nightlies complete the scoped hubs; they never
widen the scope. Agents, e-documents or all of Learn are added to `hubs` only by an owner edit of the config, each with a
byte measurement (section 8). Links behave differently: the deterministic generaliser covers every page every nightly,
and the model confirmation grows by its quota (30 units) a night until the backlog is done.

Render: hub article rows (`pipeline/render/topic.ts:95`) get the facts nested; the Learn search shard is unchanged
(bytes: every searcher downloads it); the MCP reads facts from a new compact file `data/index/learn-facts-<sha12>.json`
(`bcobs-learn-facts@1`, `{path: [[kind, text], ...]}`, scoped pages only), listed under `learn_facts` in
`index-manifest.json`, official only and in `OFFICIAL_ONLY`.

### 4.3 Cautions (phase 3)

Stage `extract-cautions`, role `facts`, `PROMPT_VERSION = 1`, 4 posts or 1 video per call, input the stored post body
(vault) or the caption segments:

```json
{ "cautions": [ { "quote": "...", "kind": "warning|gotcha|breaking|preview-disclaimer",
  "objects": [{"type": "table", "name": "Invoice Post. Buffer"}], "events": ["OnBeforePostInvoicePostBuffer"],
  "versions": ["26"] } ] }
```

At most 4 per item. Quotes: posts `verbatimQuote` (4 to 24 words, contiguous), videos `checkQuote`
(`pipeline/lib/quotes.ts`); a caution whose quote fails is dropped; community items pass `scrubRepeats`. Video
`disclaimers` (`pipeline/extract/video-schema.ts:41`) become `preview-disclaimer` cautions deterministically (no
call; objects from the video's resolved mentions only when the disclaimer's window names one). Written to
`data/extract/cautions/<item>.json`; quota `cautions` (default 40 a night), newest first, a rule marker so each item
runs once. Frontmatter `cautions` on post and video schemas (optional).

**Guard** `pipeline/link/cautions.ts`:

```ts
export function attachCautions(items: CautionItem[], objects: ObjectIndex, members: MemberIndex): Map<string, Attached[]>;
```

A caution attaches to object page O only if (a) one of its `objects` resolves exactly to O (`mentions.ts`), or (b) one
of its `events` is a member of O in the code index; and (c) when `versions` is not empty, one of them is in O's
`present_in` or within one major of O's obsolete tag. Nothing else attaches: no topic, system or keyword overlap.
`scope` = `<object title>` plus, when O is obsolete, `<state> in <tag>`; for (b) the event names. Output
`data/links/cautions.json`.

### 4.4 Hotfix lists (phase 4)

- `sources.yaml`: `id: ms-support-updates`, `kind: support-updates`, `tier: official`, `full_text: false`,
  `url: https://support.microsoft.com/en-us/servicing/dynamics/business-central/released-updates-for-microsoft-dynamics-365-business-central-2026-release-wave-1`,
  `fetch: { updates: ["28.4", "28.5", "28.6"] }`.
- Touch points: `schemas/sources.json` (kind enum and required rules), `pipeline/lib/config.ts:8` (`SourceKind`),
  `pipeline/ingest/types.ts` (`PILLAR_OF`), `pipeline/ingest/index.ts` (`BY_KIND`), `pipeline/lib/manifest.ts`
  (`Pillar` `hotfix`, `FLOWS.hotfix = ["discovered","fetched","published"]`), `pipeline/orchestrator/stages.ts`.
- `pipeline/ingest/support-updates.ts`: fetch the index, pick links whose text matches `Update 28.<n>` in the allow
  list, fetch each, parse every table under "Problems that are resolved in this update" (`id="problems-that-are-resolved-in-this-update"`)
  into `HotfixEntry {id: string, title: string, area: string}`; one manifest item per update (`key 28.6`,
  `input_hash` = sha256 of the parsed entries); snapshot `data/hotfixes/28/28.6.json`
  `{schema: "bcobs-hotfix@1", update, build, released, url, fetched_at, entries: HotfixEntry[]}`.
- `pipeline/render/hotfix.ts`: `content/hotfixes/28.6.md` (`schemas/frontmatter.hotfix.json`, type `hotfix`,
  review `derived`), `/hotfixes/` index; search records type `hotfix` per entry with path `hotfixes/28.6#648146`.
- Joins in `crosslinks.ts`: id in `work_items` → `fixes` both ways; wording containing an exact object caption followed
  by its type word (`General Ledger Setup page`) → `possibly related`.
- `OFFICIAL_ONLY` (`pipeline/validate/leak.ts:203`): `^data/hotfixes/`, `^content/hotfixes/`,
  `^tests/fixtures/support-update-`.

### 4.5 `brief` and search grouping (phase 5)

`packages/mcp/src/brief.ts`, registered in `createServer()` after `search`:

```ts
brief({ query?: string, path?: string, version?: string }): string
```

- Resolution: `path` → that page; `query` → the top keyword hits (at most 3 pages per layer) plus every page they link
  certainly and every `related` row.
- Layers from frontmatter and the new files: Learn (certain Learn links, `learn-facts`, Learn hits); code (object
  pages: counts, `present_in`, version diff summary from `data/code/diffs/version/`); changed lately (changes,
  releases, hotfix records, with labels); heads up (attached cautions, community posts and videos linked certainly);
  gaps (rules: a change whose summary is its title; a `possibly related` or `relation unknown` row; a change with no
  29.x backport stated; status conflicts).
- Conflicts: statuses from video `features[].status` and Learn `status` facts of pages linked to the same feature or
  video; listed side by side, never resolved.
- Search: `packages/mcp/src/server.ts:290` renders groups (section 2); `packages/search/src/score.ts` gets a Learn
  title band: a Learn record whose title words (stop words out, plurals folded) are all in the query enters the exact
  band; `synonyms.ts` adds `cleanup ↔ clean up`.
- `VERSION` 0.9.0 (`packages/mcp/package.json`, `server.ts:38`); plugin version bump; `TOOLS` in `site/src/lib/mcp.ts`;
  `AGENTS.md:30`; `packages/mcp/README.md`; skills `bcobs-lookup` and `bcobs-grounding` start with `brief` for a
  question.

### 4.6 Never-less (phase 6)

`tests/fixtures/never-less.json`:

```json
[{ "id": "env-copy", "question": "What does copying an environment clean up, and what changed lately?",
   "learn_urls": ["https://learn.microsoft.com/.../tenant-admin-center-environments-copy", "..."],
   "captured": { "by": "microsoft_docs_search", "at": "2026-10-2x" },
   "must": ["object/codeunit/1886", "object/codeunit/8912", "change/bcapps/10207", "change/bcapps/12152",
            "change/bcapps/13005", "post/gerardorenteria-blog/15213"],
   "labels": {}, "must_not": [], "pending": false }]
```

## 5. Test plan (write first)

Per phase, in `tests/unit/` (node:test, `tsx --test`):

Phase 1
- `link-overrides.test.ts`: the seeds load and validate against the schema; an unknown page id fails; both directions
  written; an override wins over a generated row with the same `to`.
- `crosslinks.test.ts` (toy pages): Learn extract naming `codeunit X` gives X a `names` row and puts the URL in
  `links.learn`; a change touching a documented table gets `possibly related` and its `links.learn` stays empty; two
  posts naming one object get `both name`; a sharer cap of 20 holds; hotfix work-item join gives `fixes` both ways
  (fixture row).
- `object-pages.test.ts`, `changes-render.test.ts` (or the existing change render test), `video-pages`/`post-pages`
  render tests: `## Possibly related` renders with `(model-linked)` for `by: model`; frontmatter validates.
- `learn-confirm.test.ts` with a cached LLM fixture: candidates from the scorer, a pick outside the candidates dropped,
  rows labelled `by: model`, unchanged candidate hash means no call.
- Named gaps on the real tree: a test over the committed `content/` reading the override file proves codeunit/1886 and
  video/kOCiyVql0go resolve their seeds (the ids exist).

Phase 2
- `extract-docs.test.ts`: schema accepts `key_facts`; a fact copying 12 words of the body is dropped; a 260-character
  fact is clipped; the backfill rewinds scoped items below the rule only.
- `topic-pages.test.ts`: facts render nested with the attribution line once.
- `learn-facts-index.test.ts`: the file holds official scoped pages only and is in `OFFICIAL_ONLY`.

Phase 3
- `cautions.test.ts`, fixture `tests/fixtures/cautions-v26.json` (the v26 post's caution as extracted, Table 49 and
  Codeunit 80 rows with Codeunit 80's three Pending obsolete events): attaches to table/49 with scope "Table 49
  "Invoice Post. Buffer", Removed in 27.0"; **does not attach to codeunit/80**; a caution naming no resolvable object
  attaches nowhere; an event member match attaches with the event named; a version outside `present_in` blocks it.
- `extract-cautions.test.ts`: a 30-word quote is dropped; a quote not in the body is dropped; disclaimers map to
  `preview-disclaimer` without a call.

Phase 4
- `support-updates.test.ts`, fixture `tests/fixtures/support-update-28-6.html` (trimmed to the table and the headings):
  parses 648146 with area Finance and the wording above; entry count of the fixture; index fixture yields 28.4-28.6
  only.
- `hotfix-pages.test.ts`: page renders with anchors; frontmatter validates; search records per entry.
- `leak.test.ts`: the three new `OFFICIAL_ONLY` paths.
- `sources.test.ts`: the new kind validates.

Phase 5
- `mcp.test.ts`: ten tools; site `TOOLS` order matches.
- `mcp-brief.test.ts` on the MCP fixture: five headings in order; labels printed; a status conflict is listed with both
  sources; a title-only change gives a gap line; every line has a tier.
- `search-golden.json`: new rows "copy environment cleanup" → Learn "Copy an environment" first; existing rows hold.
- `mcp-golden.test.ts`: grouped output.

Phase 6
- `never-less.test.ts` over `goldenRoot()` (`tests/helpers/search-golden.ts`): per question, every `learn_urls` entry
  appears in the brief (as a link or as the source of key facts), every `must` id appears, `labels` match, `must_not`
  absent (the v26 caution on codeunit/80). Rows depending on nightly output are `pending` until it ran.

## 6. Tasks

**Phase 0 (docs).** This spec, PLAN M44 row, HANDOFF entry, issue #26. One commit, one PR.

**Phase 1 (cross-links), one PR.** Tests first. 1. `schemas/overrides-links.json`, `data/overrides/links.yaml` with the
seeds, `pipeline/link/overrides.ts`. 2. `links.related` in the frontmatter schemas. 3. `pipeline/link/crosslinks.ts`
and the nightly step. 4. Render changes (object, change, video, post) and graph edges. 5. `learn-confirm.ts`, its CLI
`link:learn-confirm`, quota. The next nightly rewrites most object, change, video and post pages once (one large
content commit by the Mini): that is the phase's purpose.

**Phase 2 (key facts), one PR.** Tests first; schema and prompt; guard; rule backfill and `config/learn-facts.json`;
hub render; `learn-facts` index file. Rewrites the scoped hub pages only.

**Phase 3 (cautions), one PR.** Tests first; stage and schema; disclaimer mapping; guard and `cautions.json`; object
page Heads up; frontmatter. Rewrites post and video pages as their cautions land, and the object pages that get one.

**Phase 4 (hotfixes), one PR.** Tests first; source kind, ingest, snapshot, pages, index, search records, joins,
`OFFICIAL_ONLY`, CONTENT-NOTICE row. Adds three pages and touches the change pages that match a work item.

**Phase 5 (brief, search), one PR.** Tests first; `brief.ts`; grouping and Learn title band; docs, skills, versions.
No page rewritten. The npm publish and plugin release are operator steps.

**Phase 6 (never-less), one PR.** Capture the Learn-only URLs per question with the Learn MCP, write the fixture and
the test; un-pend rows as the nightly lands the data.

## 7. Verification

Per PR: `npm run typecheck && npm test`; `npm run validate:content`; `npm run validate:sources` (phase 4);
`npm run check:leak`; site build under Node 22 when `site/` changes; `gh run list --workflow nightly --limit 1` before
every push. Disk: report the Pages tar delta against the budget in the plan below; a phase over budget does not merge.

| Phase | Budget |
|---|---|
| 1 | ≤ 5 MB |
| 2 | ≤ 2 MB |
| 3 | ≤ 1 MB |
| 4 | < 1 MB |
| 5, 6 | ~0 |

After the nightly: with `BC_OBSERVATORY_LOCAL=1`, `cat objects/codeunit/1886` and `cat videos/kOCiyVql0go` show the
seeded links; `search("copy environment cleanup")` shows "Copy an environment" first under `## Learn`;
`brief` on the six questions of section 11 returns all five layers and the never-less test has no pending row.

## 8. Later, not in this spec

- Key facts for all of Learn (~30 MB): a separate decision with a byte measurement.
- Hotfix lists before 28.4, the 2026 wave 2 (29.x) lists, on-premises-only entries.
- Grouping on the site's search page.
- A Heads up section on hub pages.

## 9. Risks and open questions

- **Model links read as fact.** Default: `by: model` rows never enter `links.*`, render with "(model-linked)" and are
  listed as gaps in `brief` unless a certain source agrees.
- **support.microsoft.com markup changes.** Default: the parser fails loudly per update (item `failed`, others go on);
  the fixture pins today's markup.
- **Licence of Support pages.** Default: ID, area, one line, attribution, as decided; a takedown request removes the
  pillar by config.
- **Leak gate on official text quoted by community posts** (the 2026-10-12 and 2026-10-20 cases): handled by
  `OFFICIAL_ONLY` from the first commit of each phase.
- **Page rewrite volume in phase 1.** Default: crosslinks capped at 12 per page; measure on the Mini's first run.
- **Learn-only URLs drift.** The fixture records the capture date; a re-capture is a fixture update, not a test fix.

## 10. Files

New: `docs/specs/layered-answers.md`, `data/overrides/links.yaml`, `schemas/overrides-links.json`,
`schemas/frontmatter.hotfix.json`, `config/learn-facts.json`, `pipeline/link/{overrides,crosslinks,learn-confirm,cautions}.ts`,
`pipeline/extract/cautions.ts`, `pipeline/ingest/support-updates.ts`, `pipeline/render/hotfix.ts`,
`packages/mcp/src/brief.ts`, tests and fixtures of section 5.
Changed: `schemas/frontmatter.{object,change,video,post}.json`, `schemas/sources.json`, `sources.yaml`,
`config/budget.json`, `pipeline/extract/docs.ts`, `pipeline/fetch/git-page.ts`, `pipeline/render/{object,change,video,post,topic,search}.ts`,
`pipeline/link/graph.ts`, `pipeline/lib/{config,manifest}.ts`, `pipeline/ingest/{types,index}.ts`,
`pipeline/orchestrator/{nightly,stages}.ts`, `pipeline/validate/leak.ts`, `packages/search/src/{score,synonyms}.ts`,
`packages/mcp/src/server.ts`, `packages/mcp/{package.json,README.md}`, `plugin/` skills and version,
`site/src/lib/mcp.ts`, `AGENTS.md`, `CONTENT-NOTICE.md`, `docs/{DECISIONS,PLAN,HANDOFF}.md`.

## 11. Acceptance questions and Definition of Done

Acceptance questions (each checked by the owner on 2026-10-23):

1. Environment copy cleanup and fixes: Learn "Copy an environment" with its list, Codeunit 1886 and 8912, #10207,
   #12152, #13005, Gerardo Renteria's post.
2. Fabric launch video (status, setup, APIs, permissions): the video with timestamps (0:19 version/status, 1:22 steps
   1-2, 2:57 step 3, 8:37 six APIs, 9:11 permission sets), the Learn setup page, the three permission sets, waldo's
   post 318707. The status conflict shown as a conflict: video says public preview in 29.x (likely 29.1), Learn setup
   page says production-ready preview in October 2026, Learn FAQ says private preview. Not resolved.
3. VAT Product Posting Group on purchase lines (28.x): That NAV Guy's post (28.2, purchase lines, 100 becomes 86.96),
   #11208 / #11436, Update 28.6 entry 648146 as "possibly related".
4. VAT Product Posting Group on sales lines since 28.4: #12982 / #13085, hotfix 645085 ("hidden breaking change ...
   inserting Sales Line and Purchase Line records") as "relation unknown". Gap: nothing says what the regression is.
5. Events around posting a sales order, BC28 vs latest: Codeunit 80 with 530 events, diff BC28 to BC29 (one added:
   OnBeforeUpdateSalesOrderLineIfExist), Learn "types of events" page. Heads up only for the legacy invoice posting
   events (relevance guard, section 1.3).
6. BE Purchase Ledger recent changes: #12607, #11149, #11161, the Learn BE deferrals page (Exclude Deferral Entries).

Definition of Done:

- [ ] Phase 1: codeunit/1886, codeunit/8912, the three changes and video/kOCiyVql0go carry their seeded links after a
      nightly; `links.related` validates; `possibly related` never in `links.*`; learn-confirm runs within its quota.
- [ ] Phase 2: scoped hub rows carry 3-8 key facts; no fact repeats 12 words of Learn; attribution line present.
- [ ] Phase 3: the v26 caution shows on table/49 and not on codeunit/80; every caution quote under 25 words and
      verbatim.
- [ ] Phase 4: `content/hotfixes/28.4.md`, `28.5.md`, `28.6.md` exist; 648146 is anchored; work-item joins give
      `fixes`; CONTENT-NOTICE row; `OFFICIAL_ONLY` paths.
- [ ] Phase 5: `brief` answers the six questions with five layers; `search` grouped; "copy environment cleanup"
      returns "Copy an environment" first; MCP 0.9.0 built (publish is an operator step).
- [ ] Phase 6: `never-less.test.ts` green with no pending row.
- [ ] Each phase within its disk budget (section 7).
- [ ] D106 appended to docs/DECISIONS.md; PLAN M44 marked shipped; HANDOFF entry moved from "Open specs" to "Where
      things stand"; section 12 "Built, deviations" inserted (this section kept as 13, marked applied) and status
      implemented in the frontmatter and the body. A League build leaves the spec alone and writes section 12 and the
      status lines into docs/built/layered-answers.md; the PR's review moves them in (sdd-build section 4, sdd-review
      section 6).

## 12. Built, deviations (2026-10-23, awaiting the first nightly)

Built by hand on stacked branches, one PR per phase: phase 0 #27, phase 1 #28 (`build/layered-answers-p1`), phase 2 #29
(`-p2`), phase 3 #30 (`-p3`), phase 4 to 6 on `-p4`, `-p5`, `-p6`. Each phase passes `npm test` and typecheck on its
own; the top branch: 710 of 711 pass, 1 skipped; `validate:content` and `validate:sources` OK; the site builds with
and without `content/hotfixes/`. `check:leak` needs the vault: operator check on the Mini.

Measured on the committed tree:
- Phase 1: 4,840 cross-link rows on 1,902 pages (2,549 certain); Pages tar +4.41 MB (objects 2.71, videos 0.62,
  changes 0.60, posts 0.49), budget 5 MB. Codeunit 80 now links Learn "Types of events for extensibility".
- Phase 1d: 3,968 learn-confirm units (about 500 Haiku calls, ~$5 once); quota 80 units a night.
- Phase 2: 265 Learn pages in scope (~30 calls); hubs estimated +0.9 MB (they render from the Learn mirrors on the Mini).
- Phase 3: video disclaimers attach 44 cautions to 36 objects; post cautions come with the nightly (~620 posts, ~$5).
- Phase 4: the live 28.4, 28.5 and 28.6 pages parse into 401 entries; 2 work-item fixes (#11339, #11135), 19 named
  objects. Hotfix 645085 is in Update 28.5 (the draft said Learn).
- Phase 6: on a locally re-rendered tree (no hub render, no key facts) the never-less check holds for 0 of 6
  questions; see Open after the build.

Deviations:
- 1d: candidates from an IDF word overlap over the extracted Learn pages, not the shared search scorer (it needs every
  query word to match); one record file `data/links/learn-confirm.json`, not one per unit.
- 1b: certain rows made by code are not repeated in `links.related` (bytes; they are in `links.<kind>`); an object's
  code-made Learn names join "Documented on Microsoft Learn".
- 1c: a Learn page naming more than 40 objects is a list and names none; a change or video reaches Learn only through
  an object on at most 3 Learn pages; the seeds #10207/#12152 to Codeunit 1886 were dropped (their codeunits do not
  subscribe), #13005 kept (Codeunit 7237 subscribes to OnClearCompanyConfig).
- 2: key facts are their own stage (`extract-learn-facts`, quota `learn_facts`), not a field of extract-docs with a
  rewind (that would make every scoped hub stale and pay narratives and reviews); the Learn search shard is unchanged,
  the MCP reads a separate `learn-facts-<sha12>.json`.
- 3: the stage reads posts only; video cautions come from their disclaimers without a call, frontmatter keeps eight,
  quotes clipped at 240 characters; a disclaimer applies to objects named within 30 seconds.
- 4: entry IDs are search tags on the update page instead of one search record per entry.
- 5: brief reads the pages' rendered sections (the MCP has no YAML library) and adds three steps: a query no page fully
  matches is retried with one word left out; one hop along certain links; Learn articles sharing a third of the
  query's words. Search groups also "Code members" (fields, events, values), last unless one is the best hit.

Open after the build (operator):
- The first nightly: cross-links rewrite ~1,900 pages; ingest of ms-support-updates writes the hotfix pages; hub
  "In the observatory" lines. Then `npm run check:never-less` and un-pend the rows that hold.
- Backfills within quotas or by hand: `npm run link:learn-confirm -- --write`, learn facts, cautions.
- MCP 0.9.0 and plugin 0.5.0 publish.
- Never-less gap that remains by design today: Learn concept pages found by meaning ("Work with VAT on sales and
  purchases", "Event types") share too few words with the questions; the brief says so under Gaps. Closing it needs
  a meaning search over Learn records in the MCP (the D63 model covers pages, not Learn rows): a follow-up.

## 13. Proposed edits to other files (applied 2026-10-23: DECISIONS D106, CONTENT-NOTICE, AGENTS.md; PLAN and HANDOFF updated)

**DECISIONS.md, D106** (at ship time of phase 1, extended per phase): the text of section 3, "D106 (draft)", with the
owner decisions (a)-(d) and the rejected list.

**PLAN.md, M44 row** (applied in phase 0 as "proposed"): see the row in `docs/PLAN.md`.

**HANDOFF.md** (applied in phase 0): "Open specs" entry; at ship time moved to "Where things stand".

**CONTENT-NOTICE.md** (phase 4), new row after the AL Language extension row:
`| Official: Microsoft Support update pages ("Update 28.x for Microsoft Dynamics 365 Business Central") | no | per entry the ID, area and Microsoft's one-line wording with attribution and a link; one page per update (D106) |`
and, under Learn: "Key facts per Learn page are written in our own words (D106); no Learn body text is stored."

**AGENTS.md** (phase 5): `brief` in the tool list at line 30; `hotfixes/` in the sections list; `links.related` and its
labels in point 1.
