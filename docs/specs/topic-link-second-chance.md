---
issue: 16
status: implemented
---

# A video or post whose topic links were all dropped gets one second chance at the right hub

Status: implemented, 2026-10-19 (section 12 records what was built and where it differs). Decision: D102 (appended
2026-10-19). Milestone: M40. Owner: waldo.
Scope: the topic linker (`pipeline/link/topics.ts`: which candidates a unit gets, how its calls are planned and
prompted, what its record keeps), its script (`scripts/link-topics.ts`), the tests (`tests/unit/topic-links.test.ts`),
and one operator backfill. Every claim below was verified against the tree at `7e11d31f57` (`origin/main`,
2026-10-19). `data/` and `content/` are unchanged since `188b66164c`, where the numbers were measured, with the
commands in section 7. Not in scope: the 156 units the linker found no hub for, the 20 items with no system, code
changes (their topic links are never reviewed, section 8), the review prompt, the topic pages, the graph and the
site. No page template, no schema in `schemas/`, nothing on the site changes; only which links exist does.

## 1. Goal

The owner searched "Telemetry", tilted the Platform system and found few blog posts on the telemetry hubs. Four of
their own BC Telemetry Buddy posts are on no hub at all.

The tilted view is not at fault. It draws exactly the videos and posts that the system's topic hubs list
(`layersFiles`, `pipeline/link/graph.ts:419`; media enter only through a hub, `:434`). A hub lists what
`mediaByTopic` gives it (`pipeline/link/topics.ts:240`, read by `pipeline/render/topic.ts:213`). That is the Haiku
matcher's links (D43) minus the links Opus dropped (D54). On 2026-10-19, **328 of 619 posts and 202 of 619 videos are
on no hub**. They are therefore missing from every hub page and every tilted view.

Why, per item that is on no hub (section 7, command 1):

| Cause | Posts | Videos |
|---|---|---|
| Linked, then every link dropped by the Opus review (D54) | 227 | 148 |
| The linker found no hub that fits | 81 | 75 |
| No system on the extraction, so no candidate hubs: PowerToys, OBS, Thanksgiving, a 555 timer (correctly absent) | 19 | 1 |

The first two rows are unit states in `data/links/topics.json`; the third counts extractions that never become a unit
(`postUnit` returns null without candidates, `:100`). The rows add up to more than 202 videos because 20 of them (12
"dropped", 8 "no hub") do show in the tilted view: they are on a roadmap feature through the roadmap links (D21). They
still have no topic hub.

A drop is final today. The review only writes `keep` or `drop` (`pipeline/review/topics.ts:175`), and the linker
redoes a unit only when its hash changes (`pipeline/link/topics.ts:195`). The hash covers the unit's text and its
candidates (`:87`), so neither changes after a drop. Yet the drop reasons often say where the item belongs. D54
showed the reviewer the hub's siblings for exactly that reason ("the commonest error is an item that belongs one
section over"). Of the 875 drop verdicts, at least 133 name another home in their reason (a rough regex lower bound).
The pipeline reads none of them.

The owner's case: "BC Telemetry Buddy – 84 commits later.." (`post/waldo-be/318423`, systems development and platform)
was linked on 2026-10-08 to *Instrumenting with telemetry*. Opus dropped it on 2026-10-19: "About a tool for analysing
and querying telemetry, not instrumenting AL code." *Monitor and analyze telemetry* (system platform) was among its
candidates all along, but nothing ever asked again. "BC Telemetry Buddy – When Your 12-Year-Old…", "Troubleshooting
Series – Ep5 – Telemetry" and "When Auditing meets Telemetry" are the same story.

After this change:
- A video or post whose every link the review dropped is linked once more. Its dropped hubs leave its candidate list,
  and their titles, Learn paths and Opus's reasons go to Haiku as "rejected". The new links go through the same Opus
  review as any other link.
- The unit's record keeps what was rejected (`second`) for good. It is never offered those hubs again and never gets a
  third pass.
- First-round linking is unchanged: same prompts byte for byte, same order, and new items go first under the quota.
- 375 units qualify today (227 posts, 148 videos), in 71 Haiku calls. An operator backfill does them, and the review
  backlog they join, in one evening for about $20, instead of weeks at the nightly's scaled quotas (section 9).

## 2. Reader- and agent-facing behaviour, after

Nothing new to read. The same views fill in:

- A topic hub page's "Videos and posts" section (`pipeline/render/topic.ts:103`) lists the second-chance items whose new
  link Opus kept. Its wording ("Linked by a Haiku matcher with a grounding quote…") stays true.
- The tilted view: the media plane, a core sample's Media list and the plane counts gain those items. The flat galaxy's
  media bodies and source touches gain them too, and so do Related and the MCP's `cat` of a hub page. All of these
  read the hub pages or `mediaByTopic`.
- The dropped hub never lists the item again. Today it already doesn't.
- Nothing is labelled "second chance" anywhere a reader looks. The flag lives in `data/links/topics.json` only.

## 3. Decisions

Draft D102 text: section 12.

What was decided, and what was rejected:

1. **Who proposes the second hub: Haiku, through the existing linker.** Exclusion changes the unit's candidates, which
   changes its hash, which makes the existing staleness (`:195`) pick it up. No new stage, quota or schedule is needed.
   Rejected: an Opus "re-home" call. It costs about three times as much, needs a new prompt to tune, and the review
   judges the result anyway. Rejected: letting the reviewer name a replacement in its drop verdict. It sees only the
   dropped hub's siblings and subtopics (`hubContext`, `pipeline/review/topics.ts:91-100`), so it misses the owner's
   case, which crosses Learn branches (development > instrumenting to administration > monitor). Covering today's
   875 drops would also need a full re-review, about $40. Owner, 2026-10-19.
2. **Only units whose every link was dropped.** A unit with one kept link is on a hub already. A unit with a link
   that has no verdict yet waits for its review. The 156 "no hub fits" units are left as they are: their hash does
   not change, so they would need a round marker and smaller batches (section 8). Owner, 2026-10-19.
3. **One extra pass, ever.** `second` is written with the relinked record and carried on every later write. A unit
   with `second` is never eligible again, whatever its new links' verdicts. This bounds the cost and stops a ping-pong
   between Haiku and Opus. Rejected: up to three passes. Each pass costs a review of every hub it touches, and the
   gain is unmeasured. Revisit only on the measured keep rate (section 9).
4. **The rejection travels in the prompt, not the text.** The unit's `text` stays what it was, so quotes are still
   checked against the item's own derived text (`validateTopicLinks`, `:158-176`). The review rebuilds the same text
   (`gatherTopicLinks`, `pipeline/review/topics.ts:70-88`) and judges the new link fresh, to the same standard and
   without knowing it is a second try.
5. **Second-chance units get their own calls, after the first-round calls.** A first-round call's prompt stays byte
   for byte what it is today, so its cache entries and the existing tests hold (the cache key covers system, prompt,
   schema and prompt version, `pipeline/lib/llm.ts:169`). New items, which have no link at all, keep priority under
   the 20-call nightly quota. The linker's `SYSTEM` and `PROMPT_VERSION` do not change. A version bump would make all
   2,355 units stale: about 400 calls plus a full re-review.
6. **Grouping stays as it is.** Calls go by first system, six units each (`planTopicCalls`, `:130-140`): 71 calls for
   the 375 units, with a median candidate union of 237 hubs per call. Each item already names its own hub ids in the
   prompt (`:153`), and the validation rejects any other (`:164`). Rejected for now: grouping second-chance units by
   their full system set. That takes 154 calls for a median union of 110. Revisit only if the measured keep rate is
   low (section 9).
7. **What the review dropped stays dropped through a re-extraction.** A re-extracted unit with `second` keeps its
   exclusions. A drop judges the fit between an item and a hub, and a re-extraction of the same item rarely changes
   its subject. Default; open question 1.

## 4. Contract

`pipeline/link/topics.ts`:

```ts
/** D102: what the review dropped before a unit's one extra linking pass; kept on the record for good. */
export interface SecondChance { at: string; dropped: { topic: string; reason: string }[] }
export interface TopicLinkUnit { kind: UnitKind; key: string; hash: string; title: string; source: string | null; at: string; matches: TopicMatch[]; second?: SecondChance }
export interface Pending { /* as today */ second?: SecondChance }
export interface TopicLinkRun { /* as today */ second: { due: number; called: number; matched: number } }

/**
 * The unit's second chance: its `second` when it has one (carried, never recomputed); else, when it has links and the
 * review dropped every one of them at the unit's current hash, those hubs with Opus's reasons; else null.
 */
export function secondChanceOf(u: TopicLinkUnit | undefined, review: TopicReview, at: string): SecondChance | null;

// videoUnit, postUnit, changeUnit gain `exclude?: ReadonlySet<string>` (topic ids). The candidates are
// inSystems(all, systems) without the excluded ids. They still return null only when inSystems(all, systems) is empty
// before exclusion. A unit whose exclusions empty the list is returned with cands [] (handled in linkTopics, below).
export function gatherTopicUnits(dataDir: string, contentDir: string, second?: (key: string) => SecondChance | null): Pending[];

// planTopicCalls: the first-round units (no `second`) first, grouped and batched exactly as today; then the
// second-chance units in calls of their own, the same grouping and BATCH_SIZE. A call never mixes the two.
// topicCallPrompt: a first-round call returns today's string unchanged. A second-chance call prefixes one line:
//   "Second pass: a reviewer rejected the hubs under `rejected` for each item, with the reason. They are no longer
//   among its hubs. The reason often names where the item belongs: link that hub when it is among the item's hubs,
//   else the best other fit, or none."
// and each evidence item gains `rejected: [{ title, path, why }]` (the dropped hub's title and Learn path from the
// candidates, `why` the verdict reason; a dropped hub no longer among the topic pages is left out of `rejected`).
```

`linkTopics` (`:178-226`):

1. Load `loadTopicReview(dataDir)` next to `prev`.
2. `second(key) = secondChanceOf(prev.units[key], review, now)`, passed to `gatherTopicUnits`. The excluded set is
   `second.dropped` topics.
3. Stale is `prev.units[u.key]?.hash !== u.hash`, as today. An eligible unit is stale because its candidates changed.
   A unit already relinked (has `second`) is not stale, because its record's hash was computed from the same
   exclusions.
4. A stale unit with `cands.length === 0` is written without a call: `{ ..., hash, matches: [], second }`. This keeps
   its record live, so line 194 never drops it.
5. A relinked unit's record is `{ kind, key, hash, title, source, at, matches, second }`. `second` comes from step 2
   and is written only with the relinked record. A unit the quota stops keeps its old record and is eligible again
   next run, because its verdicts are still there.
6. `run.second`: `due` = stale units with `second` and no `second` on their previous record; `called` = those sent
   this run; `matched` = the links they got.

The review (`pipeline/review/topics.ts`), `mediaByTopic`, the topic pages and the graph do not change. A
second-chance link has no verdict, so its hub falls due like any other (`:146-147`).

Example record after the second pass (`data/links/topics.json`). The new match is illustrative: which hub Haiku picks
is not known in advance.

```json
"post/waldo-be/318423": {
 "kind": "post",
 "key": "post/waldo-be/318423",
 "hash": "<new: the same text, the candidates without instrumenting-with-telemetry>",
 "title": "BC Telemetry Buddy – 84 commits later..",
 "source": "waldo-be",
 "at": "2026-10-20T02:10:00.000Z",
 "matches": [{ "topic": "topic/dev-itpro/administration/monitor-and-analyze-telemetry", "quote": "<3-15 words verbatim from the unit text>" }],
 "second": {
  "at": "2026-10-20T02:10:00.000Z",
  "dropped": [{ "topic": "topic/dev-itpro/development/programming-in-the-al-language/instrumenting-with-telemetry", "reason": "About a tool for analysing and querying telemetry, not instrumenting AL code." }]
 }
}
```

`reason` is Opus's sentence about our derived text, already stored in `data/links/topics-review.json`; it is no
community text (CONTENT-NOTICE.md). `scripts/link-topics.ts` prints, under a unit with `second`, one line per
rejected hub: `rejected: <path>: <reason>`. Its JSON summary includes `run.second`.

## 5. Test plan (write first)

In `tests/unit/topic-links.test.ts`, with its fixtures and fake `Llm` (`:43`, `:51`). Each test names its input and
the expected output.

1. `secondChanceOf`: a unit with two matches, both `drop` at its current hash, returns both topics with their reasons.
   One `keep` returns null. One match without a verdict returns null. `matches: []` returns null. Drops recorded only
   at an older hash return null. A unit that already has `second` returns that same object, even when its new matches
   are all dropped.
2. Candidates: `postUnit(x, all, new Set([hubA]))` lacks hubA in `cands`, and its hash differs from `postUnit(x, all)`.
   With every candidate excluded it returns a unit with `cands: []`, not null.
3. End to end, two runs:
   - Day 1: `linkTopics` links post P to hub A. A review fake drops it with reason "belongs under B".
   - Day 2: `linkTopics` calls again for P only. The call's prompt starts with the "Second pass" line and P's
     evidence lists `rejected: [{ title: A's title, path: A's path, why: "belongs under B" }]`. A is not among P's hub
     ids. The fake answers B. The record has `matches: [B]`, `second.dropped: [{ topic: A, reason: "belongs under B" }]`,
     and `run.second` is `{ due: 1, called: 1, matched: 1 }`.
4. First-round prompts are unchanged. In the day 2 run, a new video V sits in its own call. That call's prompt equals
   `topicCallPrompt` of the same input on today's code (a stored fixture string) and contains no `rejected`.
   V's call comes before P's.
5. A rejected hub is refused on the second pass: the fake answers A for P. The validation rejects it ("not a
   candidate of this item"), and P's record has `matches: []` and `second` set.
6. No third pass: day 3, the review drops B. Day 4, `linkTopics` makes no call for P, its record is unchanged, and
   `run.second.due` is 0.
7. Quota: quota 1, with one new unit and one eligible unit. Only the new unit's call runs. The eligible unit's record
   is byte-identical to before (no `second`) and `run.second.due` is 1. The next run with quota 5 relinks it.
8. Views: after day 2 and a `keep` verdict on P → B, `mediaByTopic` lists P under B and not under A.
9. Re-extraction: P with `second` gets a new summary. It is relinked (its hash changed), keeps `second` and its
   exclusions, and A is still not among its hubs.
10. Excluded to empty: an eligible unit whose system has only hub A. It is written with `matches: []` and `second`,
    no call is made, and the next run it is neither stale nor dropped from `topics.json`.
11. The review sees the same text: `gatherTopicLinks` for P → B carries the unit's text without the rejection and
    without the "Second pass" line.

Existing tests stay green unchanged, notably "incremental: unchanged units are not redone" (`:78`) and "the quota caps
calls" (`:91`).

## 6. Tasks

Phase 1, code (ships alone, no content change):

1. Tests 1-11 above, red.
2. `SecondChance`, `secondChanceOf`, the `exclude` parameter on the three unit builders, `second` on `Pending` and
   `TopicLinkUnit`.
3. `gatherTopicUnits(…, second)`; `linkTopics` steps 1-6 of section 4; `run.second`.
4. `planTopicCalls` ordering and separation; `topicCallPrompt` for second-chance calls.
5. `scripts/link-topics.ts`: print the rejected lines and `run.second`.
6. `npm test`, `npm run typecheck`. The push touches `pipeline/link/**`, so it starts a derive on the Mini (RUNBOOK
   "Derived data", D81). That derive changes no page, because no link changed yet.

From then on every nightly does second passes after its first-round calls, within `topic_links` (40, scaled to 20 by
headroom on 2026-10-16 to 19, `data/manifest/_runs/2026-10-1[6-9].json`). Their links join the review queue.

Phase 2, operator backfill (recommended; one evening, about $20). It does the 375 second passes and the review queue
they join, which already held 138 due hubs on 2026-10-19 and grows faster than 7 review calls a night clear it:

1. Check that no nightly is running: `gh run list --workflow nightly --limit 1`.
2. In a clean checkout of `main` on the developer Mac (`claude` logged in, the same subscription the nightly uses):
   `git pull`, then `npm run link:topics -- --write --quota 150`. Expect about 116 calls: the first-round stale
   units, then 71 second-chance calls. Expect about $3 at the measured $0.023-0.037 a call.
3. `npm run review:topics -- --write --quota 400`. Expect about 220 calls: the 138 due hubs plus those the new links
   open. Expect about $13-18 at the measured $0.058-0.081 a call (2026-10-08 and 2026-10-16 to 19 run reports). These
   calls are not metered against the nightly spend caps, which read run reports only; the scripts print their cost.
4. Commit `data/links/topics.json` and `data/links/topics-review.json` by name:
   `content: topic links second chance backfill (D102)`. Then `git pull --rebase origin main` and push.
5. `gh workflow run nightly -f stages=derive`. That rewrites the topic pages that gain or lose media and the graph
   (`data/graph/summary.json`, `layers/*.json`, `ego/*.json`) in one `content: derive` commit.
6. Section 7, commands 1 and 2. Write the numbers into D102 and the HANDOFF entry.

Without phase 2 the nightly gets there on its own: the link backlog in about six nights; the review takes weeks at
7 calls a night. Readers see each night's kept links after that night's content commit.

## 7. Verification

From a checkout of `main`, before and after phase 2:

1. Unit states (media only; `due` = eligible for a second pass, `final` = had it, every link still dropped):
   ```bash
   node -e 'const L=require("./data/links/topics.json"),R=require("./data/links/topics-review.json");const v=(t,u)=>R.verdicts[t]?.[u.key+"@"+u.hash.slice(0,16)]?.verdict,s={};for(const u of Object.values(L.units)){if(u.kind==="change")continue;const vs=u.matches.map(m=>v(m.topic,u));const k=!u.matches.length?"none":vs.some(x=>!x)?"open":vs.every(x=>x==="drop")?(u.second?"final":"due"):"kept";(s[u.kind]??={})[k]=(s[u.kind][k]||0)+1}console.log(JSON.stringify(s))'
   ```
   On 2026-10-19: `{"post":{"open":98,"kept":194,"due":227,"none":81},"video":{"kept":281,"due":148,"none":75,"open":116}}`.
   After phase 2: `due` is 0, and every former `due` unit is `kept`, `open`, `final` or `none` (with `second`).
2. Videos and posts in some tilted view (after the derive):
   ```bash
   node -e 'const fs=require("fs"),d="data/graph/layers/",s={p:new Set(),v:new Set()};for(const f of fs.readdirSync(d))for(const m of JSON.parse(fs.readFileSync(d+f)).media)s[m[1]].add(m[0]);console.log({posts:s.p.size,videos:s.v.size})'
   ```
   On 2026-10-19: `{ posts: 291, videos: 417 }` of 619 each. It must not go down. The gain is the measured result of
   D102, so write it into D102.
3. The owner's case: `node -e 'console.log(JSON.stringify(require("./data/links/topics.json").units["post/waldo-be/318423"],null,1))'`
   shows `second`, and the page `content/topics/dev-itpro/administration/monitor-and-analyze-telemetry.md` or another
   telemetry hub lists it when Opus kept the new link. If Opus dropped it, `final`: report it, do not tune for it.
4. The run report of the first nightly after phase 1 has `topic_links.second` with `due` > 0 (or 0 after phase 2).
5. `npm test`, `npm run typecheck`, `npm run check:leak` (unchanged: no community text added).

## 8. Later, not in this spec

- The 156 units the linker found no hub for, such as "Truncate vs. DeleteAll", "Page Scripting" and "Global NuGet
  Symbols". Their hash does not change, so a second ask needs a round marker. Smaller batches would give each unit
  its own candidate list: a median of 111 hubs per unit (up to 404), instead of the union a six-unit call offers.
- Topic links of code changes are never reviewed: 963 change units have links and 0 verdicts. `gatherTopicLinks`
  reads only video and blog extractions (`pipeline/review/topics.ts:76-77`). Bringing them under D54 costs roughly $25
  of Opus once.
- The review quota: 7 calls a night under headroom scaling against 138 due hubs and rising (61, 94, 130, 138 on
  2026-10-16 to 19). Every new link reopens its whole hub (`:146-147` gathers all its links). That is an owner
  decision on `topic_reviews`.
- The tilted view's core-sample Media list stops at 8 with no "and N more" (`site/src/scripts/galaxy.ts:1079`).
  *Instrumenting with telemetry* has 17.
- Second-chance calls grouped by the full system set, if the keep rate measured here is low (section 3, decision 6).

## 9. Risks and open questions

Each risk or question below ends with the default the coder takes.

1. **Does `second` survive a re-extraction?** Default yes (decision 7). If the owner wants a re-extraction to reopen
   the fit, drop `second` when the unit's text changes, in `secondChanceOf`, and add a test.
2. **Does a future linker `PROMPT_VERSION` bump reset `second`?** Default no. A deliberate reset is a one-off script
   that deletes `second` from the records, decided when the bump is.
3. **Phase 2 or the nightly's pace?** Default: run phase 2. It costs about $20 outside the spend caps, versus weeks of
   review quota.
4. **Haiku repeats a near miss** (*Troubleshooting with telemetry* instead of *Monitor and analyze*). The review
   judges it, and one pass is the bound. Measure the keep rate of second-pass links: `kept` and `open` against
   `final` (command 1). If fewer than one in five gain a kept link, record that in D102 and stop. No third pass, no
   tuning in this spec.
5. **The reason points outside the item's systems** (the hub it names is no candidate). Validation rejects the pick
   ("not a candidate of this item", `run.rejections`), and the unit ends `none` with `second`. Count these in
   phase 2; widening a unit's systems is a separate decision.
6. **A re-review flips a kept link to drop.** Hubs are re-judged whole, so a unit with one kept link can become
   all-dropped later. It then gets its one second pass. The cascade is bounded because a unit has one pass ever.
7. **The review queue grows by the second-chance links.** Phase 2 clears it. Without phase 2, readers wait longer for
   every new link, not only these (section 8).

## 10. Files

Changed: `pipeline/link/topics.ts`, `scripts/link-topics.ts`, `tests/unit/topic-links.test.ts`, `docs/DECISIONS.md`,
`docs/PLAN.md`, `docs/HANDOFF.md`, this spec.
Phase 2 commits: `data/links/topics.json`, `data/links/topics-review.json`. The derive then commits topic pages under
`content/topics/` and `data/graph/`.
New: none (one stored prompt fixture inside the test file).

## 11. Definition of Done

- [x] Tests 1-11 pass. The existing topic-link and topic-review tests pass unchanged. `npm run typecheck` is clean.
      (Verified 2026-10-29: passes on main.)
- [x] A first-round call's prompt is byte-identical to before (test 4). `SYSTEM` and `PROMPT_VERSION` of
      `pipeline/link/topics.ts` are unchanged.
- [x] `run.second` appears in the nightly run report (`topic_links.second`).
- [ ] Phase 2 done, or explicitly deferred by the owner. Commands 1 and 2 of section 7 recorded before and after.
      (Open: operator step, not done.)
- [x] `docs/DECISIONS.md` has D102 with the measured numbers. `docs/PLAN.md` M40 is marked shipped. `docs/HANDOFF.md`
      moves the entry from "Open specs" to "Where things stand". This spec gains "12. Built, deviations" and
      `status: implemented` (`/sdd-build`).

## 12. Built, deviations (2026-10-19)

Built by waldo.Jarvis's League (operator mode), phase 1 only. Phase 2 (the backfill) is an operator step.

- **Code** (`pipeline/link/topics.ts`): `SecondChance`, `second` on `TopicLinkUnit` and `Pending`, `secondChanceOf`,
  `exclude` on `videoUnit`/`postUnit`/`changeUnit` (internal helper `candsOf`: null only when the systems have no hub
  before exclusion), `gatherTopicUnits(…, second)`, `planTopicCalls` (first-round units first, second-chance units in
  calls of their own), `topicCallPrompt` (the "Second pass" line and `rejected` for a second-chance call only),
  `linkTopics` steps 1-6 and `run.second {due, called, matched}`. `SYSTEM` and `PROMPT_VERSION` unchanged.
- **Script** (`scripts/link-topics.ts`): prints `rejected: <path>: <reason>` under a unit with `second`; the JSON
  summary carries `run.second` through the run object.
- **Tests** (`tests/unit/topic-links.test.ts`): tests 1-11 of the spec's section 5. The existing fake's hub-line lookup
  changed from "line 2 of the prompt" to "the line starting `[{"id"`" so it also reads a second-pass prompt; no other
  existing test changed.
- **Verified**: `npm run typecheck` clean. `npm test` exits 1 in the League sandbox and its output is truncated
  (the middle, where the topic-link tests print, is cut; reporter flags are ignored by `tsx --test`), so the per-test
  result is not confirmed by the builder: the League's own measured run decides. Red evidence: before the code, the
  test file imports `secondChanceOf`/`postUnit(…, exclude)` that did not exist.
- **Spec vs measured**: none measured; the numbers of spec section 7 need the backfill.
- **Deviations**:
  - `Pending` also carries `rejected` (the dropped hubs' title, path and reason, resolved in `gatherTopicUnits`,
    which has the candidate list); the contract named only `second`. Internal.
  - A second-chance call's evidence items all carry `rejected` (an empty list when no dropped hub is still a topic
    page), so the item shape is the same within one call.
- **Operator steps still open**: phase 2 of the spec (section 6), commands as written in HANDOFF; the derive on the
  Mini after the push (RUNBOOK "Derived data", D81) changes no page.

**Review, 2026-10-29 (owner session, after PR #18 merged without the review step).** Moved this hand-over in from `docs/built/topic-link-second-chance.md`. Verified: `tests/unit/topic-links.test.ts` passes on `main` (62 of 62 with `galaxy-core`), and the full suite was green at 813 of 814 (1 skipped) on 2026-10-29. Still open: phase 2, the backfill (operator step, section 6).

## 13. Proposed edits to other files (applied 2026-10-19, see section 12)

**`docs/DECISIONS.md`**, appended:

```
- **D102 A video or post whose topic links were all dropped gets one second chance (2026-10-19).** D54's review only
  keeps or drops, and the linker redoes a unit only when its hash changes, so a dropped link was final. On 2026-10-19,
  227 posts and 148 videos had every link dropped and sat on no hub page and in no tilted view. In all, 328 of 619
  posts and 202 of 619 videos were on no hub; the rest were "no hub fits" or had no system. The drop reasons often
  name the right home ("a tool for analysing telemetry, not instrumenting AL code"), and nothing read them. Now
  `linkTopics` gives such a unit one more pass. Its dropped hubs leave its candidates, which changes its hash, so the
  existing staleness picks it up. Their titles, Learn paths and Opus's reasons go into the prompt as `rejected`, and
  the new links go through the same review. The record keeps `second` (the dropped hubs and reasons) for good: those
  hubs are never offered again and there is no third pass. Second-chance units get their own calls after the
  first-round ones, so a first-round prompt is unchanged byte for byte and new items keep priority. Rejected: an Opus
  re-home call (about three times the cost, and the review judges the result anyway); the reviewer naming a
  replacement (it sees only siblings, which misses cross-branch moves like the owner's telemetry posts, and covering
  the backlog needed a ~$40 re-review); the 156 "no hub fits" units (no hash change, later); more than one extra
  pass; grouping second-chance calls by the full system set (154 calls instead of 71). Measured: <due before/after,
  kept/open/final after, posts and videos in a tilted view before/after, backfill cost>. Spec:
  docs/specs/topic-link-second-chance.md.
```

**`docs/PLAN.md`** section 5, a row before `v0.2+`:

```
| **M40 Topic link second chance** | a video or post whose every topic link Opus dropped is linked once more without those hubs, with the reasons as "rejected" in the prompt, and reviewed as usual; `second` on the unit record, one extra pass ever; first-round prompts unchanged; operator backfill of the 375 units and the review queue (`docs/specs/topic-link-second-chance.md`, D102, proposed) | half a day, plus one evening of backfill | low: ~71 Haiku calls (~$3) and ~220 Opus review calls (~$15) once, then within the nightly quotas |
```

**`docs/HANDOFF.md`** "Open specs, not yet implemented", after the D101 entry:

```
- **Topic link second chance, D102** (`docs/specs/topic-link-second-chance.md`, M40, issue #16). Status: proposed
  2026-10-19, nothing implemented. Start with phase 1, task 1: tests 1-11 in `tests/unit/topic-links.test.ts`. Phase 1
  is code only (its push starts a derive that changes nothing). Phase 2 is an operator backfill on the Mac: link,
  review, commit `data/links`, derive. It takes one evening and costs about $20. Until it lands, 375 videos and posts
  whose every topic link was dropped stay on no hub page and in no tilted view, among them four of the owner's own
  telemetry posts.
```

At ship time the entry moves to "Where things stand" with what was built and the measured numbers.
