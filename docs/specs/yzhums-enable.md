---
issue: 51
status: draft
---

# Switch on yzhums.com (Yun Zhu): derived mode needs no consent

Status: proposed, 2026-10-25. Decision: D119 (reserved, appended to `docs/DECISIONS.md` at ship time). Milestone: M56 (reserved). Owner: waldo.
Scope: the `yzhums-com` entry in `sources.yaml`, the hold-back wording in `sources.yaml` and `docs/PLAN.md`, and the first ingest. Every claim below was verified against the tree at `e67e86f5f0` on 2026-10-25, and the site facts were fetched from https://yzhums.com on 2026-10-25. Not in scope: full text (still needs a consent block), the "11 MAYBE blogs" (named nowhere in the repository, section 9).

## 1. Goal

Yun Zhu's blog has been registered but switched off since the start. `sources.yaml:386-395`: `yzhums-com`, `enabled: false`, with the comment "Held back until the author agrees ... Derived mode ... needs his yes". `docs/PLAN.md:406` lists "Held back: yzhums.com, 11 MAYBE blogs", and the `v0.2+` row (`docs/PLAN.md:470`) carries "yzhums opt-in if agreed". The research notes say only "yzhums.com held back" (`docs/research/2026-10-06-research-findings.md:17`).

That hold-back contradicts the registry's own rule (`sources.yaml:3-4`: `full_text: true` needs tier official or a consent block; derived mode needs neither) and the four blogs added on 2026-10-25 in derived mode without consent (D112, D115, D116, D118). The owner decided: "we don't need consent" for derived mode.

Facts read from the site on 2026-10-25:
- Feed `https://yzhums.com/feed/` 200 `application/rss+xml`, newest item 2026-10-23.
- REST `https://yzhums.com/wp-json/wp/v2/posts` 200; `after=2025-04-25` gives `X-WP-Total: 389`, so 389 posts inside the 18-month window. The entry already has both URLs.

After this change:
- `yzhums-com` is enabled, derived mode, unchanged otherwise (`author: { name: Yun Zhu, mvp: true }`).
- The hold-back comment and the PLAN mentions are gone; `sources.yaml`'s header says derived mode needs no consent.

## 2. Reader- and agent-facing behaviour, after

- A source page "Dynamics 365 Lab - Yun Zhu" and one post page per post (389 inside the window), each linking back; text derived per `CONTENT-NOTICE.md`. Visible after the first ingest run with spend.

## 3. Decisions

D119 (draft): derived mode (summary, quotes of at most 24 words, a link to each post) needs no author consent; `full_text: true` still needs tier official or a consent block. yzhums.com is switched on.

Rejected: keeping a hold-back list for derived mode; the registry rule never required it.

## 4. Contract

`sources.yaml`: delete the three comment lines above `yzhums-com` (`sources.yaml:386-388`) and its `enabled: false` line; add to the header rule (`sources.yaml:3`) that derived mode needs no consent block. `docs/PLAN.md`: "Held back: yzhums.com, 11 MAYBE blogs." becomes "Not yet registered: 11 MAYBE blogs (unnamed)."; ", yzhums opt-in if agreed" leaves the `v0.2+` row.

## 5. Test plan (write first)

No test reads `enabled` per source or counts sources; the validator covers the shape.
- Before: `npm run validate:sources` reports 50 sources, `sources.yaml OK`.
- After: still 50 sources (the entry existed), `sources.yaml OK`; `npm run typecheck`, `npm test` pass.

## 6. Tasks

Phase 1: the edits of section 4; `npm run validate:sources`, `npm run typecheck`, `npm test`; ship-time edits.
Phase 2 (operator step): the first ingest. 389 posts is about 18-30 times a normal blog's backfill: an estimated $45-80 of summaries and reviews at today's measured $0.12-0.20 a post (sshadows-dk $2.79 for 13, vjeko-com $2.58 for 22), and hours of run time. With the owner's go: `gh workflow run nightly.yml --ref main -f pillars=blog -f only=yzhums-com -f unlimited=true`.

## 7. Verification

- `npm run validate:sources`, `npm run typecheck`, `npm test`.
- After phase 2: `content/sources/yzhums-com.md` and the post pages on main; the live sources page counts 38.

## 8. Later, not in this spec

- Full text for yzhums.com, if he opts in.

## 9. Risks and open questions

- **The 11 MAYBE blogs.** PLAN names a count, no list; nothing in the repository or its history names them. Default: none added until the owner names them.
- **Cost and run time of phase 2.** Default: ask the owner before dispatching.

## 10. Files

Changed: `sources.yaml`, `docs/PLAN.md`; at ship time `docs/DECISIONS.md`, `docs/HANDOFF.md`, this spec.

## 11. Definition of Done

- [ ] `yzhums-com` has no `enabled: false`; the hold-back comment is gone; the header says derived mode needs no consent.
- [ ] `docs/PLAN.md` no longer says yzhums.com is held back.
- [ ] `npm run validate:sources`, `npm run typecheck` and `npm test` pass.
- [ ] After phase 2: the source page and post pages are on main and live.
- [ ] D119 appended to docs/DECISIONS.md; PLAN M56 marked shipped; HANDOFF entry moved from "Open specs" to "Where things stand"; section 12 "Built, deviations" inserted (this section kept as 13, marked applied) and status implemented in the frontmatter and the body. A League build leaves the spec alone and writes section 12 and the status lines into docs/built/yzhums-enable.md; the PR's review moves them in (sdd-build section 4, sdd-review section 6).

## 12. Proposed edits to other files (not applied)

D119 text for `docs/DECISIONS.md`: "D119: derived mode needs no author consent; full text still needs tier official or a consent block. yzhums.com (Yun Zhu, MVP), held back since the start, is switched on (issue #51). Rejected: a hold-back list for derived mode."

`docs/PLAN.md` section 5, before the `v0.2+` row:
`| **M56 yzhums.com switched on** | `yzhums-com` enabled, hold-back wording removed (\`docs/specs/yzhums-enable.md\`, D119, proposed) | small | first ingest of 389 posts, ~$45-80 |`

`docs/HANDOFF.md`, "Open specs, not yet implemented": `docs/specs/yzhums-enable.md`, D119, M56, issue #51. Status: proposed 2026-10-25, nothing implemented. Start with section 4.
