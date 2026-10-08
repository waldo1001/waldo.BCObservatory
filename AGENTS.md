# AGENTS.md - how to work in and with BC Observatory

BC Observatory weaves official and community knowledge about Microsoft Dynamics 365 Business Central (BC) into one
cross-referenced, agent-first knowledge base. This file is the entry point for humans and agents alike.

## If you are an agent answering questions with this repository

1. Start at `llms.txt` (root) or the section index `content/<section>/llms.txt`. Every page under `content/` is
   markdown with strict frontmatter (`schemas/frontmatter.*.json`): `id`, `type`, `tier`, `summary`, `evidence`, `links`.
2. Trust tiers: `official` = Microsoft (Learn, BCApps, BCQuality, Microsoft's channel, the AL Language extension's
   marketplace changelog); `community` = everyone else;
   `mixed` = hub pages that merge both. Say which tier a claim comes from. `review.state` says what kind of text the
   page holds (D77): `derived` pages hold no model text: facts from the source (code, Learn, roadmap, sources.yaml)
   placed by deterministic code. `unreviewed` marks model text (summaries, narratives) Opus has not checked yet;
   `reviewed` text passed an Opus review against its source; `flagged` text failed one and is withheld or marked.
3. Cite evidence, never memory: each page's `evidence` array carries the source URL, date, commit SHA or video
   second. Quote at most what the page quotes. Never invent object IDs, field numbers or version numbers; the code
   pillar under `data/code/` is the ground truth for those.
4. Version applicability matters: object pages carry `present_in`, `changed_in` and `versions` (an object already in
   the oldest snapshot has `introduced: null`: it may be much older); timelines per type are in
   `data/code/timelines/`, version diffs in `data/code/diffs/version/`. A localization (BE, NL, ...) is an overlay on
   W1; see `content/localizations/` and `data/code/diffs/country/`.
5. Sections: `topics/` (Learn hubs), `objects/<type>/<id>` (AL objects of W1 and Microsoft's first-party apps,
   BC28-30), `localizations/`, `features/` (Microsoft 365 roadmap), `videos/`, `posts/` (community, derived),
   `sources/` (footprints), `digests/` (weekly, with the deprecation radar), `changes/<repo>/<n>` (merged pull
   requests of Microsoft's Business Central repositories, BCApps ones joined to the object pages they changed, D61),
   `releases/al-<version>` (the AL Language extension's changelog, one page per version, D85). Lookups: `data/index/pages-*.json` +
   `index-manifest.json` (every page's metadata), `data/index/docs-objects.json` (Learn page <-> object by exact id),
   `data/code/drift.json`, `data/graph/` (the galaxy; `landed.json` also lists the week's code changes, D80). The MCP server (`packages/mcp`, `npx bc-observatory`) serves
   exactly these: search, ls, cat, get_object, diff_object, localization, whats_new, blog_footprint, feedback; search
   covers fields, events and procedures (`data/index/symbols-*.json`, D86) and ranks like the site's own search. Procedure
   bodies are not here by policy; object pages list calls and callers per object (`data/code/graph/<major>/`, D67); the
   plugin also connects bc-code-atlas (Stefan Maron) for bodies and per-procedure edges, and every object page says how
   to ask it (D75).

## If you are an agent (or human) changing this repository

- Read `docs/PLAN.md` (architecture, decisions, milestones) and `docs/DECISIONS.md` before changing structure.
- The pipeline is deterministic first, LLM last, only on deltas. Facts come from validators, not from prompts.
- LLM calls go through `pipeline/lib/llm.ts` only, on the Claude subscription via `claude -p`. No Anthropic API key,
  ever. Never pass `--bare`. Roles: `facts` = Haiku, `prose` = Sonnet, `review` = Opus (`config/models.json`).
- Content policy (`CONTENT-NOTICE.md`): Microsoft full text; community sources derived only (summary, quotes under
  25 words, links) unless `full_text: true` with consent in `sources.yaml`. Raw community text and the LLM cache go
  to the private vault, never into this repo. `npm run check:leak` runs before every commit on the Mini.
- Generated files live under `content/` and `data/`; do not hand-edit them. Human corrections go in
  `data/overrides/*.yaml`, which the pipeline merges last.
- Every item is keyed by a stable id (videoId, Learn path, object key, post id). No title matching outside the
  one-off seed import.
- Secrets exist only in the Mac Mini's `/Users/bcobs/.config/bcobservatory/env`. The repository has no secrets.
- Workflows that run on the self-hosted runner (`runs-on: [self-hosted, bcobs]`) are triggered by `schedule`,
  `workflow_dispatch` or `push` to `main` only. Pull-request workflows run on `ubuntu-latest`.
- Commit messages: conventional prefixes (`feat:`, `fix:`, `pipeline:`, `content:`, `infra:`, `docs:`). Nightly
  commits are `content: nightly <date> (<n> items)`.

## Layout

| Path | Purpose |
|---|---|
| `sources.yaml` | source registry, community-editable by PR (`schemas/sources.json`) |
| `config/` | taxonomy (galaxy systems), versions, countries, models, budget, tooling pins |
| `schemas/` | JSON Schemas for frontmatter, sources, manifest items, graph, AL objects, diffs, LLM outputs |
| `pipeline/` | the nightly pipeline: `lib`, `orchestrator`, `ingest`, `caption`, `extract`, `code`, `summarize`, `link`, `validate`, `review`, `render` |
| `content/` | generated knowledge base (markdown + frontmatter) |
| `data/` | generated machine data: manifest, captions (Microsoft only), code JSON, indexes, graph, roadmap, overrides |
| `site/` | Astro site, deployed to GitHub Pages; `site/src/about/about.md` is the owner's hand-written About text (D83), the one prose file that is not generated: edit it directly |
| `packages/mcp/` | the `bc-observatory` MCP server (npx) |
| `plugin/` | Claude Code plugin (skills + MCP config) |
| `infra/mini/` | Mac Mini provisioning and nightly runner scripts |
| `docs/` | PLAN, DECISIONS, RUNBOOK, CONTENT-NOTICE, design brief and design handoff; `docs/specs/` holds feature specs |
| `tests/` | schema, unit and golden tests with fixtures |

## Running things

```bash
npm ci
npm run validate:sources          # schema + policy check of sources.yaml
npm run typecheck && npm test     # no network, no LLM
npm run validate:content          # frontmatter schemas, ids, cross-references, relative links in content/
npm run check:leak                # community text never in the public tree (shingle scan when the vault is present)
npm run llm:ping                  # one uncached claude -p call: proves subscription auth + model family
npm run ingest                    # discovery only (git, RSS, APIs), writes data/manifest
npm run nightly -- --dry-run      # full orchestrator with LLM_CACHE_ONLY=1
npm run nightly -- --stages derive  # re-render derived data only (writes content/ and data/), D81
```
