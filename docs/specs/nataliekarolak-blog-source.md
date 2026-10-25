---
issue: 50
status: implemented
---

# Add nataliekarolak.wordpress.com (Natalie Karolak) as a community blog source

Status: implemented, 2026-10-25 (section 12 records what was built and where it differs). Decision: D118 (appended 2026-10-25). Milestone: M55. Owner: waldo.
Scope: one entry in `sources.yaml`, plus the first ingest of that source. Every claim below was verified against the tree at `85264807a1` on 2026-10-25, and the site facts were fetched from https://nataliekarolak.wordpress.com on 2026-10-25. Not in scope: full text (needs the author's consent block), any pipeline code.

## 1. Goal

The owner asked to add Natalie Karolak's blog https://nataliekarolak.wordpress.com. It is not registered: `git grep -n -i karolak -- sources.yaml` is empty.

Facts read from the site on 2026-10-25:
- WordPress.com. Feed: `https://nataliekarolak.wordpress.com/feed/`, 200 `application/rss+xml`, 10 items (2025-10-02 to 2026-10-02), `dc:creator` "Natalie Karolak" on every item.
- REST: `https://public-api.wordpress.com/wp/v2/sites/nataliekarolak.wordpress.com/posts` is 200 and holds 64 posts back to 2022-11-03; 16 of them fall inside the 18-month backfill window (since 2025-04-25). The feed alone would miss the 6 older ones in the window.
- Site name: "The BC Docs Librarian" (feed title). Newest post: "Docs: What's new in BC 29 for developers and admins".
- MVP: the About page (`/about/`) says "I was an MVP award holder from 2012 to 2016, and I regained the MVP award in 2024 and continue to hold it."

The pattern to follow: `thedynamicsexplorer-com` (`sources.yaml:349-354`), a WordPress.com blog with `feed` plus the public-api `rest` URL. Insert point: after `vjeko-com` (`sources.yaml:373-378`, D116). Defaults (`sources.yaml:6-12`): tier `community`, `full_text: false`, 18 months backfill, `enabled: true`.

After this change:
- `sources.yaml` lists `nataliekarolak-com`, kind blog, tier community, derived mode.
- The next ingest takes the 16 posts inside the window; they get summaries and pages, and a source page appears on the sources page.

## 2. Reader- and agent-facing behaviour, after

- A source page "The BC Docs Librarian" by Natalie Karolak (MVP), one post page per post, each linking back; text derived per `CONTENT-NOTICE.md`.
- `blog_footprint` for the source returns its posts (after the MCP's daily index refresh).

## 3. Decisions

D118 (draft): nataliekarolak.wordpress.com is registered as community blog `nataliekarolak-com`, derived mode, no consent block, `full_text: false`, fetched from its feed and the public WordPress.com REST API. Same shape as `thedynamicsexplorer-com`.

Rejected:
- Feed only: 10 items, misses 6 of the 16 posts inside the window.
- `full_text: true`: needs the author's written opt-in.

## 4. Contract

Insert after the `vjeko-com` entry (`sources.yaml:378`):

```yaml
  - id: nataliekarolak-com
    kind: blog
    name: The BC Docs Librarian
    url: https://nataliekarolak.wordpress.com
    author: { name: Natalie Karolak, mvp: true }
    fetch: { feed: https://nataliekarolak.wordpress.com/feed/, rest: https://public-api.wordpress.com/wp/v2/sites/nataliekarolak.wordpress.com/posts }
```

The id follows the registry's domain-with-dashes habit without the `wordpress` host part; the URL keeps the real host.

## 5. Test plan (write first)

No test counts sources, so there is no red test to write.
- Before: `npm run validate:sources` reports 49 sources (blog 27), `sources.yaml OK`.
- After: 50 sources (blog 28), `sources.yaml OK`; `npm run typecheck` and `npm test` pass.

## 6. Tasks

Phase 1 (ships alone):
1. Add the entry from section 4 to `sources.yaml`.
2. Run `npm run validate:sources`, `npm run typecheck`, `npm test`.
3. Ship-time edits (section 12).

Phase 2 (operator step, at the owner's request with the caps lifted for one run):
`gh workflow run nightly.yml --ref main -f pillars=blog -f only=nataliekarolak-com -f unlimited=true`. `pages` deploys after it.

## 7. Verification

- `npm run validate:sources`, `npm run typecheck`, `npm test`.
- After phase 2: `content/sources/nataliekarolak-com.md` and the post pages on main; `https://waldo1001.github.io/waldo.BCObservatory/sources/nataliekarolak-com/` is 200.

## 8. Later, not in this spec

- Full text, if the author opts in.
- The 48 posts older than the window, if the owner wants a longer backfill.

## 9. Risks and open questions

- **Weekly spend cap.** Normal nightlies get $0 this week; default: the owner's unlimited run (phase 2), whose global passes also run without quotas.
- **Queue.** The D117 re-review run may be running; nightly runs share one concurrency group, so this one waits behind it.

## 10. Files

Changed: `sources.yaml`; at ship time `docs/DECISIONS.md`, `docs/PLAN.md`, `docs/HANDOFF.md`, this spec. New: none.

## 11. Definition of Done

- [x] `sources.yaml` has the `nataliekarolak-com` entry with the feed, the REST URL and `mvp: true`.
- [x] `npm run validate:sources` (50 sources), `npm run typecheck` and `npm test` pass.
- [x] No `full_text: true`, no consent block.
- [ ] After phase 2: the source page and the post pages are on main, and the live sources page lists the source.
- [x] D118 appended to docs/DECISIONS.md; PLAN M55 marked shipped; HANDOFF entry moved from "Open specs" to "Where things stand"; section 12 "Built, deviations" inserted (this section kept as 13, marked applied) and status implemented in the frontmatter and the body. A League build leaves the spec alone and writes section 12 and the status lines into docs/built/nataliekarolak-blog-source.md; the PR's review moves them in (sdd-build section 4, sdd-review section 6).

## 12. Built, deviations (2026-10-25)

- **Built:** the section 4 entry in `sources.yaml` after `vjeko-com`, in the commit after the spec commit on
  `spec/nataliekarolak-blog-source`, pushed to main together.
- **Verified:** `npm run validate:sources`: 50 sources (blog 27 -> 28), `sources.yaml OK`. `npm run typecheck`: clean.
  `npm test`: 754 tests, 753 pass, 0 fail.
- **Spec versus measured:** sources 50 (spec 50), blogs 28 (spec 28).
- **Deviations:** none.
- **Open:** phase 2 (`gh workflow run nightly.yml --ref main -f pillars=blog -f only=nataliekarolak-com -f
  unlimited=true`) and the Definition of Done item that checks its pages.

## 13. Proposed edits to other files (applied 2026-10-25, see section 12)

D118 text for `docs/DECISIONS.md`: "D118: nataliekarolak.wordpress.com (Natalie Karolak, MVP) is added as community blog `nataliekarolak-com`, derived mode, feed plus public WordPress.com REST (issue #50). Rejected: feed only; full text without opt-in."

`docs/PLAN.md` section 5, before the `v0.2+` row:
`| **M55 The BC Docs Librarian blog source** | one `sources.yaml` entry for Natalie Karolak's blog, derived mode, feed and REST (\`docs/specs/nataliekarolak-blog-source.md\`, D118, proposed) | small | low: one more blog in ingest and derive |`

`docs/HANDOFF.md`, "Open specs, not yet implemented": `docs/specs/nataliekarolak-blog-source.md`, D118, M55, issue #50. Status: proposed 2026-10-25, nothing implemented. Start with task 1. Until it lands, Natalie Karolak's posts are not in the Observatory.
