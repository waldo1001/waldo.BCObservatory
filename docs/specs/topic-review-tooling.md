---
issue: 49
status: implemented
---

# Topic review keeps tools and practice built on what a Learn section documents

Status: implemented, 2026-10-25 (section 12 records what was built and where it differs). Decision: D117 (appended 2026-10-25). Milestone: M54. Owner: waldo.
Scope: the Opus topic-link review (`pipeline/review/topics.ts`, D54): its keep rule, and a re-review of the hubs that hold a drop. Every claim below was verified against the tree at `382cdd7b39` on 2026-10-25. Not in scope: the Haiku matcher (`pipeline/link/topics.ts`), new hubs for what Learn does not document, source names in search (a separate gap: `bc_search` matches neither "pearson test" nor "jpearson-blog test").

## 1. Goal

The owner wants the links between posts and topic hubs to be complete: "I really need the links to be 100%." Today the review drops almost half of what the matcher proposes. Measured on `data/links/topics-review.json` at `382cdd7b39`: 1,516 verdicts over 303 hubs, 801 keep and 715 drop (47%); 393 of the drops are posts, 322 videos. 244 hubs hold at least one drop, with 1,388 links between them.

The drops follow the prompt (`pipeline/review/topics.ts:40-48`): drop when an item "only shares the product area, module, agent or vocabulary", "is about a different capability", or "is too general to tell", and "If one item is plainly the section's subject and another only mentions it in passing, the passing one is a drop". So a post about a tool, an extension or a practice built on a documented feature is dropped. Examples from the verdicts:
- "One-Click Performance Analysis Inside Business Central" (sshadows-dk), dropped from the Performance Profiler hub: "Its subject is a third-party AI analysis extension added to the profiler page, not the documented profiler itself."
- "AL Perf v2 Drops Friday" (sshadows-dk), dropped from Performance: "About a third-party AI performance-analysis tool, not the documented performance best practices."
- All 19 vjeko-com links were dropped, among them Object ID Ninja posts from ALTool (right: Ninja is not ALTool) and AI-assisted AL development posts from "Coding agents in AL" (right: that section is about building agents).

Consequences:
- The galaxy draws a source's flight path from posts with a hub edge (`flights()`, `pipeline/link/graph.ts:381-392`); the edges come from topic pages, which list only kept links (`mediaByTopic`, `pipeline/link/topics.ts:300-308`). In `data/graph/flights.json` four blogs have fewer than two stops, so no comet: freddysblog 0 (10 posts), sshadows-dk 1 (13), tine-staric-net 1 (9), kine-cz 1 (3).
- The same posts are missing from the topic hubs' "Videos and posts".

A second problem makes the review impossible to correct: verdicts never expire. `PROMPT_VERSION` is written into the file (`pipeline/review/topics.ts:194`) but never read, and a hub is due only while a link has no verdict (`pipeline/review/topics.ts:145-147`). A changed prompt re-reviews nothing.

After this change:
- The review keeps an item that explains, demonstrates or discusses what the section documents, and also one about a tool, extension, script or practice that works with, extends, measures or automates it. It still drops vocabulary-only matches, a sibling section's subject, the example-not-the-lesson case, and items no part of the section touches.
- Every verdict records the review standard it was made under (`v`). A drop made under an older standard makes its hub due again, so the whole hub is re-weighed under the new rule; keeps under an older standard stay valid.

## 2. Reader- and agent-facing behaviour, after

- After the re-review run, topic hubs list the posts and videos the new rule keeps; the galaxy draws comets for sources that reach two or more stops; source lenses light more stars.
- Nothing changes until a run with review quota and spend reaches the due hubs (section 6, phase 2).

## 3. Decisions

D117 (draft): the topic review keeps tools, extensions and practice built on what a section documents, and leans to keep when in doubt; verdicts carry the review standard (`v`, `PROMPT_VERSION` 2), and a drop under an older standard makes its hub due again.

Rejected:
- Re-reviewing everything (keeps too): 1,516 links instead of the 244 hubs with a drop; a keep stays a keep under a looser rule.
- Dropping the review: it removes real mismatches (Object ID Ninja is not ALTool; a cost-accounting demo app does not make a post about cost accounting).
- New community-tooling hubs: a larger design (hub type, naming, seeding); it would give vjeko's Object ID Ninja posts a home, which a looser rule cannot. Later (section 8).

## 4. Contract

- `TopicVerdict` (`pipeline/link/topics.ts:65`) gains `v?: number`, the review `PROMPT_VERSION` it was made under; absent means 1.
- `pipeline/review/topics.ts`: `PROMPT_VERSION = 2`; every verdict written carries `v: PROMPT_VERSION`; a hub's `open` count adds links whose verdict is `drop` with `(v ?? 1) < PROMPT_VERSION`. `mediaByTopic` is unchanged: an old drop stays hidden until its hub is re-reviewed.
- `SYSTEM` keep and drop rules, new text:

```
For each link decide:
- keep: the item explains, demonstrates or discusses something this Learn section documents. One part of the section is enough: a video on a single setting of a feature the section documents is kept. Also keep an item about a tool, extension, script or practice that works with, extends, measures or automates what the section documents: a third-party extension on the Performance Profiler page belongs to the Performance Profiler section.
- drop: the item only shares words with the section; its subject is a capability this section does not document; a sibling or parent section documents its subject more exactly; its subject is the example rather than the lesson (a post on AI-assisted coding whose demo app does cost accounting is not about cost accounting); or no part of what it covers is in this section.
When in doubt, keep: a reader of this section would rather find a related item than miss it.
```

Example verdict record: `{ "verdict": "keep", "reason": "A profiler extension that analyses the documented profiler's output.", "at": "2026-10-26T01:00:00.000Z", "v": 2 }`.

## 5. Test plan (write first)

In `tests/unit/topic-links.test.ts`, with the existing fixture (`linked()`, `fakeReview`):
1. "a verdict records the review standard it was made under": after `reviewTopicLinks`, every verdict in `topics-review.json` has `v === PROMPT_VERSION` (2). Fails today: no `v`.
2. "a drop under an older standard makes its hub due again; an old keep does not": review once (VAT keep, telemetry drop), strip `v` from the stored verdicts, run again: `candidates` is 1 and the one call carries the telemetry hub. Fails today: `candidates` is 0.
3. "the review keeps tools built on a documented feature": `SYSTEM` matches `/tool, extension, script or practice/` and `/When in doubt, keep/`, and no longer contains "the passing one is a drop". Fails today.

## 6. Tasks

Phase 1 (ships alone, no LLM spend):
1. Tests from section 5.
2. `TopicVerdict.v`, `PROMPT_VERSION = 2`, the due rule, the new `SYSTEM`.
3. `npm run typecheck`, `npm test`.
4. Ship-time edits (section 12).

Phase 2 (operator step): the re-review. 244 hubs, about 220 Opus calls at about $0.10 each (the D54 sample in `config/budget.json`, `topic_reviews`), so roughly $25-50; at the normal quota of 15 calls a night it takes about 15 nights. With the owner's go, one unlimited run: `gh workflow run nightly.yml --ref main -f pillars=blog -f only=vjeko-com -f unlimited=true` (the review pass is global; `only` keeps the item stages small). Topic pages, the graph and `pages` follow in the same run.

## 7. Verification

- `npm run typecheck`, `npm test`.
- After phase 2: `data/links/topics-review.json` has no verdict without `v: 2` in a hub that held a drop; the drop share is reported (before: 715 of 1,516); `data/graph/flights.json` stops for freddysblog, sshadows-dk, tine-staric-net, kine-cz and vjeko-com are reported.

## 8. Later, not in this spec

- Hubs for community tooling and AI-assisted AL development (Object ID Ninja, AL LSP, LLM benchmarks), which Learn does not document.
- Source and author names in search (`bc_search` "pearson test" finds nothing), and a source filter.

## 9. Risks and open questions

- **Cost of phase 2.** Roughly $25-50 once; default: ask the owner before dispatching.
- **Over-keeping.** "When in doubt, keep" can let weak links through. The drop rules for vocabulary-only, sibling sections and example-not-lesson stay. Default: measure the new drop share after phase 2 and revisit if keeps look wrong on hub pages.
- **Keeps flip to drops.** A due hub is re-weighed as a whole, so an old keep can become a drop. Default: accept; it is the same standard applied to the set.

## 10. Files

Changed: `pipeline/link/topics.ts`, `pipeline/review/topics.ts`, `tests/unit/topic-links.test.ts`; at ship time `docs/DECISIONS.md`, `docs/PLAN.md`, `docs/HANDOFF.md`, this spec. New: none.

## 11. Definition of Done

- [x] The three tests of section 5 fail before the change and pass after it.
- [x] `npm run typecheck` and `npm test` pass.
- [x] After phase 2: every verdict in a hub that held a drop carries `v: 2`, and the new drop share and the five sources' flight stops are recorded.
- [x] D117 appended to docs/DECISIONS.md; PLAN M54 marked shipped; HANDOFF entry moved from "Open specs" to "Where things stand"; section 12 "Built, deviations" inserted (this section kept as 13, marked applied) and status implemented in the frontmatter and the body. A League build leaves the spec alone and writes section 12 and the status lines into docs/built/topic-review-tooling.md; the PR's review moves them in (sdd-build section 4, sdd-review section 6).

## 12. Built, deviations (2026-10-25)

- **Built** on `fix/topic-review-tooling`, after the spec commit: `TopicVerdict.v` (`pipeline/link/topics.ts`), review
  `PROMPT_VERSION` 2, the `open()` due rule, `v` on every written verdict and the new `SYSTEM` text
  (`pipeline/review/topics.ts`), three tests in `tests/unit/topic-links.test.ts`.
- **Red:** the three new tests failed before the change: no `v` on a verdict ("actual: false, expected: true"),
  `candidates` 0 instead of 1, and `SYSTEM` not matching `/tool, extension, script or practice/`; the other 25 passed.
- **Green:** `tests/unit/topic-links.test.ts` 28 of 28. `npm run typecheck` clean. `npm test`: 754 tests, 753 pass, 0 fail.
- **Mutation:** the old-drop condition in `open()` replaced by `false`: 1 test fails (the re-review test); restored.
- **Deviations:** none.
- **Phase 2, done 2026-10-25:** run 40217838372 (`-f pillars=blog -f only=vjeko-com -f unlimited=true`, owner's go):
  topic reviews "198 of 183 hubs, 791 kept, 294 dropped"; run cost $8.58 (178 Opus calls), against the $25-50 estimate.
- **Measured after phase 2** (`data/links/topics-review.json`, `data/graph/flights.json` at `e313f6f259`):

  | | before | after |
  |---|---|---|
  | dropped links | 715 of 1,516 (47%) | 389 of 1,371 (28%) |
  | flight stops freddysblog / sshadows-dk / tine-staric-net / kine-cz / vjeko-com | 0 / 1 / 1 / 1 / 2 | 0 / 2 / 1 / 1 / 4 |

  95 drops without `v: 2` remain in 61 hubs; none of them belongs to a live link (its unit hash changed or the link is
  gone), so every live link is judged under standard 2.
- **What the review cannot fix:** freddysblog (9 of 9 posts), tine-staric-net (7 of 9) and kine-cz get no hub proposed
  or only "Coding agents in AL" for AI-assisted development posts: no Learn section documents their subject. That is the
  community-tooling hubs of section 8.

## 13. Proposed edits to other files (applied 2026-10-25, see section 12)

D117 text for `docs/DECISIONS.md`: "D117: the topic review (D54) keeps tools, extensions and practice built on what a Learn section documents, and keeps when in doubt; verdicts carry the review standard (`v`, review `PROMPT_VERSION` 2) and a drop under an older standard makes its hub due again (issue #49). Before: 715 of 1,516 links dropped. Rejected: re-reviewing keeps; dropping the review; community-tooling hubs (later)."

`docs/PLAN.md` section 5, before the `v0.2+` row:
`| **M54 Looser topic review** | keep rule for tools and practice, verdicts carry the standard, drops re-reviewed (\`docs/specs/topic-review-tooling.md\`, D117, proposed) | small | one re-review, ~$25-50 |`

`docs/HANDOFF.md`, "Open specs, not yet implemented": `docs/specs/topic-review-tooling.md`, D117, M54, issue #49. Status: proposed 2026-10-25, nothing implemented. Start with the tests of section 5. Until it lands, the review drops 47% of topic links and four blogs have no flight path.
