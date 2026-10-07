# BC Code Atlas as a grounding partner: call graph in the pages, the atlas one call away

Status: proposed, 2026-10-07. Decision: D67. Owner: waldo.
Scope: the Claude Code plugin and its skills, object pages (markdown and site), the code pillar's post-loop, video
and post pages, the Mini's tool set and the developer's Mac. Not in scope: hosting any part of bc-code-atlas,
tool-enabled LLM calls (section 9, D68), storing source text.

## 1. Goal

Stefan Maron's bc-code-atlas (MIT, `github.com/StefanMaron/bc-code-atlas`) is an MCP service over Business
Central's AL source: semantic search over code and Learn, an exact structural graph with real `calls`,
`subscribes` and `extends` edges read from source, exact procedure bodies, and a version registry (symbol diffs and
history over `MSDyn365BC.Sandbox.Code.History`). It is hosted at `https://bc-code-atlas.stefanmaron.dev/mcp`, no
auth, read-only, young, and one person's server.

The observatory has what the atlas lacks: Obsolete* tracking, structured version and country diffs, the Learn
join, roadmap, videos, posts, curated hubs, trust tiers and evidence. The atlas has what the observatory cannot
have by policy or by extractor: procedure bodies (never stored here, D10), the call graph (our extractor reads
declarations, not bodies) and semantic code search. The two are complementary. D10 already said so ("bc-code-atlas
is linked as a companion, graphify-al optionally supplies call/subscriber edges") and PLAN 4.6 planned the
companion link and the graphify-al run; neither was built.

After this change:

- An agent with the observatory plugin has both servers and a skill that says which to ask for what, and how to
  behave on a hobby server.
- Every object page tells an agent the exact atlas call that opens this object's real source, from facts we
  already hold (type and name), and says the atlas is external.
- Object pages gain "Calls", "Called by" and "Implements" sections and the Neighbourhood gains a `calls` ring,
  from a nightly graphify-al run on the checkouts the code pillar already keeps on the Mini. Edges only, object to
  object with procedure names; never a body, never a line of text.
- Video and post pages link the AL objects they mention to their object pages through our own index, and say
  which names were not found.
- The Mini and the developer's Mac get one new tool, the pinned graphify-al fork, installed per user with `uv
  tool` like yt-dlp. No servers, no ports, no secrets, no embeddings.

### Non-goals

- Running the atlas's five servers on the Mini (search, graph, registry, build, aggregator). Nothing in the nightly
  needs a server; the graph server alone would hold a 700 MB graph resident (3 to 5 GB expected) on a machine at
  15 of 24 GB. Section 9 keeps the door open with a go/no-go rule.
- Semantic code search of our own. D13 and D63 settled search for our pages; the atlas does code search better
  than a port would.
- Any `claude -p` call with tools. Every model call stays `--tools "" --strict-mcp-config`
  (`pipeline/lib/llm.ts:185-193`). A tool-enabled review role is a separate decision, D68 (section 9).
- Calling the hosted instance from the pipeline, ever. Bulk work runs the graphify-al CLI on our own checkouts.
- Source text in the public tree: no bodies, no signatures beyond what the extractor already stores, no
  `source_location` line numbers from graphify, no snippets.

### What exists today (verified 2026-10-07)

- Hosted atlas, probed read-only over streamable HTTP (SSE framing, `mcp-session-id` header): server
  `bc-code-atlas 1.28.1`, 21 tools, all prefixed `bcatlas_`: `search`, `query_graph`, `get_node`, `resolve_node`
  (`object_type`, `object_name`, optional `member`), `find_by_global_id`, `get_neighbors`, `get_signature`,
  `get_procedure_body`, `get_object_source`, `get_community`, `god_nodes`, `graph_stats`, `shortest_path`,
  `list_countries`, `list_versions`, `resolve_version`, `request_version`, `version_status`, `list_warm_versions`,
  `diff`, `symbol_history`. Default corpus is `w1-28` (Sandbox.Code.History branch `w1-28`); warm pairs: w1
  28.0/28.1/28.2, de and us 28.0, a few small country pairs. 29.0, 29.1 and 30.0 resolve but are not warm;
  `request_version` starts a build on Stefan's VM. Graph: 442,605 nodes, 1,045,826 edges, 75 % EXTRACTED,
  25 % INFERRED. `get_node("codeunit Sales-Post")` finds nothing (fuzzy label); `resolve_node("codeunit",
  "Sales-Post")` returns `Codeunit 80 "Sales-Post"`, id `posting_salespost_codeunit_sales_post`, source
  `Base Application/Sales/Posting/SalesPost.Codeunit.al L84`. A neighbour line reads
  `--> .RefreshTempLines() of Codeunit 80 "Sales-Post" [calls] [EXTRACTED] [id: …] at=…SalesPost.Codeunit.al:L787`.
  Latency 1 to 7 s per call; one 60 s timeout in twenty calls; the launch post reports a two-day silent outage.
- Self-hosting (README): Python via uv, five servers (search :8801 with sentence-transformers
  `ibm-granite/granite-embedding-97m-multilingual-r2`, graph :8802 on the graphify-al fork, registry :8803 over
  git, build :8804, aggregator :8800). Full semantic reindex of 250k chunks: about 3 minutes on an RTX 4080,
  about 20 hours on CPU; Apple MPS untested upstream. The graph layer has no ML dependency and builds in 4 to 5
  minutes per version on CPU (REPORT.md). Stefan runs it on a Linux VM with systemd behind a Cloudflare tunnel.
- The graphify-al fork (`StefanMaron/graphify-al`, branch `bc-code-atlas-fixes`, `AL_SUPPORT.md`): CLI
  `python -m graphify update <dir>` writes `<dir>/graphify-out/graph.json` with nodes and edges (`relation`,
  `confidence` EXTRACTED | INFERRED | AMBIGUOUS, `source_file`, `source_location`). AL relations: `contains`,
  `method`, `calls` (intra-object calls, type-resolved cross-object codeunit calls, `Codeunit.Run` /
  `Page.Run` / `Report.Run` by `Object::"Name"`, interface dispatch fanned out to every implementer),
  `subscribes`, `extends`, `binds`, `usercontrol`, `relates_to`, `computes_from`, `implements`, `imports`. Object
  labels are AL headers, `Codeunit 80 "Sales-Post"`; member labels `.CheckAndUpdate() of Codeunit 80 "Sales-Post"`.
  A `.graphifyignore` (template `build/build/graphify.ignore.template` in bc-code-atlas) keeps READMEs and media
  out of the graph. The `leiden` extra needs Python below 3.13; communities are not used here.
- Our code pillar: sparse blobless checkouts persist on the Mini under `/Users/bcobs/observatory/cache/code/`
  (`bcapps-29`: 1.2 GB, 28,167 `.al` files; `bcapps-30`; `sandbox-history-23` to `-28`, `-28-be`, `-28-nl`;
  3.8 GB in all). Snapshot majors 28, 29, 30 (`config/versions.json`); 23 to 27 are diffs (D62). Every snapshot
  object stores `file` relative to the checkout root (`src/Layers/W1/BaseApp/…/SalesPost.Codeunit.al`) and is keyed
  `type/id`, or `type/<lower-cased name>` for interfaces and other id-less types (`objectKey`,
  `pipeline/code/extract.ts:269`).
- Relations (D45, `pipeline/code/relations.ts`, `data/code/relations/<major>.json`, 5.7 to 6.9 MB): edges
  `table_relation`, `calc_formula`, `source_table`, `runs_on`, `lookup_page`, `drilldown_page`, `card_page`,
  `extends`, plus event subscriptions placed on their publishers. No `calls`, no `implements`. The site reads the
  file once per build (`site/src/lib/relations.ts`), rings `relates | referenced | pages | extensions |
  subscribers | learn`, `SHARD_CAP = 12`; `Neighbourhood.astro:26` maps rings to section anchors.
- The code pillar's `linked` and `published` stages are `passThrough({})` (`pipeline/orchestrator/stages.ts:42`)
  and cost no quota (`quotaFor`, `pipeline/lib/queue.ts:26-33`). Handlers can declare a `lane`; lanes are `web: 3`
  and `youtube: 1` (`config/budget.json`).
- Video and post pages print "AL objects mentioned … not yet joined to the code pillar"
  (`pipeline/render/post.ts:55`, `pipeline/render/video.ts:111`) from Haiku's `{type, name}` list;
  `pipeline/link/graph.ts:77-84` already resolves those names to `mentions` edges by exact type and lower-cased
  name (`objectByName`), and `data/index/objects.json` (`bcobs-objects@1`, `rows`) carries every object page.
  D65 (`docs/specs/discovery.md` 6.1) plans to factor that resolver into `pipeline/link/mentions.ts`.
- The plugin registers one server (`plugin/.mcp.json`: `bc-observatory` via npx) and three skills (`bc-lookup`,
  `bc-whats-new`, `bc-localization`). The Mini installs yt-dlp and deno per user with `uv tool`
  (`infra/mini/35-tools.sh`); `infra/mini/selfcheck.sh` is the weekly health check; `config/tooling.json` pins
  tools. Our own derived post page for the atlas announcement exists
  (`content/posts/stefanmaron-com/https-stefanmaron-com-posts-bc-code-atlas-grounded-search-for-agents--bcbd495f28.md`)
  with `code_objects_mentioned: [codeunit SalesLineReserve, table SalesLine]` and `links.objects: []`.

## 2. Reader- and agent-facing behaviour, after

### 2.1 An agent with the plugin

Two servers are connected: `bc-observatory` (curated pages, ids, versions, diffs, Learn join, roadmap, videos,
posts) and `bc-code-atlas` (bodies, call graph, semantic code search, symbol history; default corpus w1-28). The
`bc-grounding` skill tells the agent to start at the observatory for "what is it, which version, is it obsolete,
where is it documented, what changed", to go to the atlas for "what does it do, who calls it, show me the body",
and to name the corpus version when quoting the atlas. The skill carries the etiquette of section 3.

### 2.2 Object page (markdown and site)

New sections, in this order after "Extended by" and before "Across versions":

- `## Calls`: up to `REL_CAP` objects this object calls, with the heaviest first (number of distinct caller /
  callee procedure pairs), each with up to three procedure pairs: `Codeunit 12 "Gen. Jnl.-Post Line"` (7 calls:
  `PostSalesDoc → RunWithCheck`, …). The counts and names are from the extracted graph; nothing else.
- `## Called by`: the reverse, same shape.
- `## Implements`: interfaces this object implements, and on an interface page `## Implemented by`.
- `## Ask your agent`: one short block, present on every object page:
  "Source bodies and the full call graph live in bc-code-atlas (external, Stefan Maron, MIT; w1-28 by
  default): `bcatlas_resolve_node(object_type: "codeunit", object_name: "Sales-Post")`, then
  `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id. CLI:
  `node bc-code-atlas.js resolve-node codeunit "Sales-Post"`." The strings are built from `o.type` and `o.name`
  only. No URL to a page on the atlas exists (it is MCP-only), so nothing to link; the block names the server.

Frontmatter: `relations.calls` and `relations.called_by` counts (the site's stat strip picks them up like
`referenced_by`), `relations.implements` count. The Neighbourhood gets a `calls` ring (both directions, weight =
pair count) mapped to `#calls`.

### 2.3 Video and post pages

"AL objects mentioned" becomes a list of links to object pages for every name that resolves by exact type and
name; names that do not resolve stay as text with "not found in BC28-30" once at the end of the list. The
frontmatter's `links.objects` is filled with the resolved page ids, so the Related block (D65), the graph and the
MCP see them.

### 2.4 Everywhere else

Nothing changes for readers of `llms.txt`, the MCP (`get_object` serves the markdown, so the new sections appear
without a code change) or the digests.

## 3. Decisions

| # | Decision | Why |
|---|---|---|
| 1 | The hosted atlas is for humans and their agents, one call per question, through the plugin and the skill. The nightly never calls it. Its URL appears in `plugin/.mcp.json`, the skill and the "Ask your agent" block only; never in a workflow, `selfcheck.sh` or any scheduled job. | It is one person's server, young, with a two-day outage on record. A 16k-object sweep would be a denial of service with extra steps. |
| 2 | Bulk edges come from the graphify-al CLI on our own checkouts, not from `bcatlas_resolve_node` + `bcatlas_get_neighbors` per object. | 16k objects × 2 calls at 1 to 7 s is 9 to 60 hours a night, against a corpus (Sandbox w1-28) that is not our BCApps 29 and 30 and not at our snapshot commit. The CLI runs at the exact commit recorded in `data/code/<major>/w1/manifest.json`, so edges and pages agree by construction, and `source_file` joins exactly. |
| 3 | Only `EXTRACTED` edges are kept; `INFERRED` and `AMBIGUOUS` are counted and dropped. Only `calls` and `implements` are taken; `subscribes`, `extends`, `binds`, `relates_to`, `computes_from` exist in our relations already (D45) and stay there. | D29: nothing guessed. One source of truth per edge kind; no second, slightly different `extends`. |
| 4 | Cross-object edges only, aggregated per (source object, target object): count of distinct (caller procedure, callee procedure) pairs and up to five pairs by name. Intra-object calls are dropped. | Object pages are about objects. Intra-object edges are about half the `calls` edges and say nothing a reader of the object page needs. Procedure names are metadata the extractor already publishes (D10). |
| 5 | Join graphify nodes to our keys by the object label `^(\w+) (\d+) "(.+)"$` → `type/id`, cross-checked against the snapshot object's `file` equal to the edge's `source_file`; id-less types (interface, permission set) by `type/<lower-cased name>`. Anything else is `unresolved` with a reason (`no_label`, `no_object`, `file_mismatch`, `ambiguous`) and counted. Node ids such as `posting_salespost_codeunit_sales_post` are never parsed. | The label is the AL header and carries the id; the file path is the second exact key (D61 joins by the same path). Node ids are an implementation detail of graphify. |
| 6 | A separate file per major, `data/code/graph/<major>/calls.json` (compact, one edge per line, like D62's diffs) with `manifest.json` beside it; `al-relations@1` is unchanged. Schema `schemas/al-graph.json`, `additionalProperties: false`, with the projection allowlist `s, t, k, n, via[]`. No `summary`, `content`, `snippet`, `source_location`, node table or label text leaves the cache directory. | Every post-loop phase and the Pages build on a 7 GB ubuntu runner parse `relations.json` (D53, D57); call edges would triple it. The allowlist is the content-policy guard (D10, CONTENT-NOTICE row). |
| 7 | The run is the code pillar's `linked` stage (today `passThrough({})`), for majors in `versions.json.snapshot` only, in a new lane `cpu: 1`, charging a new quota `graph_jobs: 1`, with a 60-minute timeout and `nice -n 10`, ordered by `narrative_order` (29, 28, 30). `graphify-out/` lives under the checkout in the cache, never under the runner's `_work`. | One graph a night keeps the window; vNext's head moves daily and must not starve 29. `quotaFor` makes `linked` free today; graph extraction is minutes of CPU, so it gets its own quota, not `code_jobs` (which the snapshot needs). |
| 8 | The fork is pinned by commit SHA in `config/tooling.json` (`graphify_al.ref`), installed per user with `uv tool install --python 3.12` on the Mini (`35-tools.sh`) and on the developer's Mac; `selfcheck.sh` checks it. The fixture in `tests/fixtures/graphify/` is a 30-edge `graph.json` from that SHA; a bump re-generates the fixture. | The fork has no releases. An unpinned `uv tool run` on a moving branch would change edges silently. Per-user `uv tool` keeps Jarvis's brew libraries untouched (HANDOFF deviation 2). |
| 9 | A measured spike precedes phase 2 and writes its numbers into this spec: wall time, max RSS, `graph.json` size, edges by relation × confidence for `bcapps-29` W1 alone and with `src/Apps/W1`, and precision on twenty known `Sales-Post` callees against the hosted w1-28. Go when W1 + apps finishes under 30 minutes and 6 GB RSS; otherwise W1 only, or apps in a second night. | The only published numbers are for w1-28 of the sandbox history (17k files, 4 to 5 minutes); BCApps 29 with apps is 28k files on a Mini that also runs the nightly. |
| 10 | The mentions join uses our own index, not the atlas: `pipeline/link/mentions.ts` resolves `{type, name}` by exact type and lower-cased name against `data/index/objects.json`; two candidates stay unresolved. Shared with D65, which wants the same module; whichever lands first creates it. | Deterministic, offline, D29. `bcatlas_resolve_node` would answer for w1-28, not for the versions the page covers. |
| 11 | The "Ask your agent" block is text built from `o.type` and `o.name`; it says "external, serves source bodies, not hosted here". Re-rendering 16k object pages once is accepted and done in one commit outside a live nightly. | The companion was promised in D10 and PLAN 4.6. The page holds a call string, not content. |
| 12 | Stefan is told before phase 0 ships (an issue or message on the atlas repository: the plugin points agents at his server, with the etiquette quoted). | Courtesy, and the fastest way to hear about rate limits or a planned API key. |
| 13 | The spec names, and does not implement, D68: a tool-enabled `review` role against a local aggregator only. | The owner chose to keep every model call tool-less until a measured need exists (2026-10-07). |

## 4. Contract

### 4.1 Plugin (`plugin/.mcp.json`, `plugin/skills/bc-grounding/SKILL.md` new, `plugin/skills/bc-lookup/SKILL.md`)

`plugin/.mcp.json`:

```json
{
  "mcpServers": {
    "bc-observatory": { "command": "npx", "args": ["-y", "bc-observatory@latest"] },
    "bc-code-atlas": { "type": "http", "url": "https://bc-code-atlas.stefanmaron.dev/mcp" }
  }
}
```

`bc-grounding/SKILL.md` (frontmatter `name`, `description` naming both servers and the words "source code",
"procedure body", "who calls", "call graph", "verify in the code"):

1. Observatory first for identity and context: `get_object(type, idOrName)` gives id, fields, events, public
   procedures, obsolete state, versions, countries, Learn pages, and (after phase 2) calls and callers.
2. Atlas for behaviour: `bcatlas_resolve_node(object_type, object_name[, member])`, never `bcatlas_get_node`
   with a free label; then `bcatlas_get_neighbors` for the exact edges, `bcatlas_get_signature` to confirm,
   `bcatlas_get_procedure_body` to read. Say "w1-28" (or the resolved version) with every atlas fact; the
   observatory page says which versions the object exists in.
3. `bcatlas_search` only when the name is unknown; prefer `search` on the observatory for topics and docs.
4. Never call `bcatlas_request_version` unless the user asked for a version that is not warm and accepts the wait;
   it starts a build on the maintainer's server. `bcatlas_list_warm_versions` first.
5. One question, one or two calls. If the atlas does not answer (timeout, error), say so and answer from the
   observatory with its evidence; do not retry in a loop.
6. Never answer object ids, field numbers or versions from memory (as `bc-lookup`).

`bc-lookup/SKILL.md` gets one line: "For procedure bodies and the call graph, see `bc-grounding`."

### 4.2 Object pages (`pipeline/render/object.ts`, `schemas/frontmatter.object.json`, site)

- `pipeline/render/object.ts`: read `data/code/graph/<major>/calls.json` through `readCalls(dataDir, major)`
  (4.4) into the `World` next to `relations`; in the renderer, after "Extended by": `## Calls`, `## Called by`,
  `## Implements` / `## Implemented by`, each capped at `REL_CAP` with "and N more: data/code/graph/<major>/calls.json";
  then `## Ask your agent` (2.2). Frontmatter `relations` gains `calls`, `called_by`, `implements`. Pages are
  rewritten only when content changes, as today.
- `schemas/frontmatter.object.json`: the three integer properties under `relations`.
- `site/src/lib/relations.ts`: `Ring` gains `calls`; `relationsFor(major)` also reads `calls.json` when present
  and `rawNeighbours` adds both directions with `weight = n`; `SHARD_CAP` unchanged.
  `site/src/components/Neighbourhood.astro`: `SECTION.calls = "#calls"`, `RING_LABEL.calls = "calls"`.
- `site/src/pages/objects/[...id]/index.astro`: stats strip adds `calls` and `called_by` when present. The "Ask
  your agent" block flows through the markdown (D45: the site sees it all through the markdown).

### 4.3 Call graph job (`pipeline/code/callgraph.ts` new, `config/graphify.ignore` new, `schemas/al-graph.json` new)

`runCallGraph(job, deps): Promise<CallGraphRun>` for one snapshot major:

1. `dir = codeCheckoutDir(deps.cacheDir, job)` (`pipeline/code/job.ts:53`); refuse when the checkout's HEAD is
   not the commit in `data/code/<major>/w1/manifest.json` (the snapshot and the graph must agree; log and skip).
2. Write `<dir>/.graphifyignore` from `config/graphify.ignore` every run (the checkout is reset each night). The
   file ignores everything except the W1 layer paths and `src/Apps/W1/*/app` from `config/versions.json`
   (country layers would collide on ids), plus the template's media and document rules.
3. Spawn `nice -n 10 graphify update <dir>` with `GRAPHIFY_MAX_GRAPH_BYTES=2GB`, a 60-minute timeout (kill, log,
   `fail()` the item with backoff). Where `graphify` is the `uv tool` shim on `PATH`
   (`/Users/bcobs/.local/bin`); `deps.graphifyBin` overrides for tests.
4. Read `<dir>/graphify-out/graph.json` with a streaming JSON parser (the file may pass 500 MB; the spike decides
   between `stream-json` and a two-pass line reader); never load it whole.
5. Project: keep edges with `relation in {calls, implements}` and `confidence == "EXTRACTED"`; resolve both ends to
   object keys (decision 5) using a slim index built by `iterSnapshot(dataDir, major, "w1")` and the apps snapshot
   (key, name, file); drop edges where `s === t`; aggregate per `(s, t, k)` with `n` and the first five
   `via` pairs `"<caller proc> → <callee proc>"` sorted by name. Counters: `kept`, `dropped_intra`,
   `dropped_inferred`, `dropped_ambiguous`, `unresolved` by reason, `relations_seen` by relation.
6. Write `data/code/graph/<major>/calls.json` (schema `al-calls@1`: `schema`, `major`, `commit`,
   `graphify: { ref, version }`, `edges[]`, `stats`, `unresolved[]` capped like `UNRESOLVED_KEPT`) as compact
   one-edge-per-line JSON through `writeIfInputsChanged` (exported from `pipeline/code/diff.ts:197`; inputs:
   snapshot commit, apps commit, `graphify_al.ref`, `CALLGRAPH_VERSION`), and `manifest.json` with the run
   numbers (wall ms, max RSS from `/usr/bin/time -l` when available, `graph.json` bytes).
7. Return `{ written, edges, unresolved, ms }` for the run report (`report.code.graph`).

`schemas/al-graph.json`: the `al-calls@1` document; `edges[].k` enum `calls | implements`; `via` items are strings
of at most 200 characters; `additionalProperties: false` everywhere.

### 4.4 Readers (`pipeline/code/relations.ts`)

`export function readCalls(dataDir, major): Calls | null` and `callsIncoming/callsOutgoing(calls)` maps, mirroring
`incoming/outgoing`. `al-relations@1` and `buildRelations` untouched.

### 4.5 Orchestrator (`pipeline/orchestrator/stages.ts`, `pipeline/lib/queue.ts`, `config/budget.json`, `nightly.ts`)

- `stages.ts:42`: `code.linked = { accepts: isSnapshotMajor, run: callGraphHandler(codeDeps), lane: "cpu" }`;
  `published` stays `passThrough({})`. The handler calls `runCallGraph` and returns `StageResult` with
  `output_hash` = the written file's hash, so an unchanged graph is a no-op.
- `queue.ts quotaFor`: `pillar === "code" && stage === "linked"` → `"graph_jobs"`; everything else as today.
  Ordering of code `linked` items follows `versions.json.narrative_order`.
- `config/budget.json`: `quotas.graph_jobs: 1`, `lanes.cpu: 1`. The usage guard does not scale it (deterministic,
  like `code_jobs`).
- `nightly.ts`: `report.code.graph` summarised in the run report; `scripts/run-summary.ts` prints one line.
- `schemas/run-report.json`: the new `code.graph` object.

### 4.6 Mentions (`pipeline/link/mentions.ts` new, `pipeline/render/post.ts`, `pipeline/render/video.ts`, `pipeline/link/graph.ts`)

- `mentions.ts`: `loadObjectIndex(dataDir)` from `data/index/objects.json`; `resolveMentions(objects: {type,
  name}[], index): { resolved: { type, name, pageId }[], unresolved: { type, name }[] }` by exact type and
  lower-cased trimmed name; a name with two pages is unresolved (`ambiguous`). The same function replaces the inline
  `objectByName` in `pipeline/link/graph.ts:77-84`.
- `post.ts:55` and `video.ts:111`: resolved names render as links (`[codeunit 99000845 "Sales Line-Reserve"](../../objects/codeunit/99000845.md)`),
  unresolved as plain text; one closing line "Not found in BC28-30: table "SalesLine"" when any; `links.objects`
  filled with the page ids. The index is loaded once per render run, not per page.
- `graph.ts`: `mentions` edges from `links.objects` and from `mentioned()` are de-duplicated.

### 4.7 Tooling and installs (`config/tooling.json`, `infra/mini/35-tools.sh`, `infra/mini/selfcheck.sh`, `docs/RUNBOOK.md`)

Nothing in this section runs before the implementation PR.

- `config/tooling.json`: `"graphify_al": { "repo": "https://github.com/StefanMaron/graphify-al", "ref": "<sha>",
  "python": "3.12", "package": "<name from the fork's pyproject.toml>" }`. The SHA is resolved at spike time
  (`gh api repos/StefanMaron/graphify-al/branches/bc-code-atlas-fixes --jq .commit.sha`).
- `35-tools.sh` (sudo, gated like yt-dlp): `as_bcobs uv tool install --upgrade --python "$py"
  "<package>[al] @ git+<repo>@<ref>"`; prints `graphify --version`. No brew, no shared libraries. Re-run to move
  the pin.
- `selfcheck.sh`: `check "graphify-al" graphify --version` and, when `tooling.json` pins a ref, that the installed
  version string contains it (or the `uv tool list` entry shows the SHA).
- `docs/RUNBOOK.md`: the `35-tools.sh` line says "yt-dlp, deno, graphify-al"; a new subsection "Local development
  (developer Mac)": `uv tool install --python 3.12 "<package>[al] @ git+<repo>@<ref>"`, `BCOBS_CACHE_DIR=$HOME/.cache/bcobs
  npm run nightly -- --dry-run --pillars code` (the sparse checkout is created by the existing fetch stage),
  `uv tool uninstall <package>` to remove; and "Atlas in your own Claude Code": `claude mcp add --transport http
  bc-code-atlas https://bc-code-atlas.stefanmaron.dev/mcp` (user scope; or install the plugin), `claude mcp remove
  bc-code-atlas` to undo, the VS Code `.vscode/mcp.json` form from the atlas README, and the etiquette of decision 1.
- `README.md`: a line under the install commands: "Source bodies and the call graph: bc-code-atlas by Stefan
  Maron (MIT), connected by the plugin." with the repository link.

### 4.8 Content policy (`CONTENT-NOTICE.md`)

New row in the tier table after the source-code row: "Official: call graph (same checkouts) | edges only |
object-to-object `calls` and `implements` edges with procedure names and counts, from a graphify-al run on the same
checkouts; never bodies, never line text". BC28 edges derive from `MSDyn365BC.Sandbox.Code.History` (no license),
the same treatment as its snapshot: metadata only.

## 5. Test plan (write first)

- `tests/unit/callgraph.test.ts` with `tests/fixtures/graphify/graph.json` (30 edges: intra-object calls, an
  INFERRED cross-object call, an AMBIGUOUS one, an `implements`, a `subscribes` to be ignored, a target with no
  object, a label whose file does not match, a doc node) and a two-object snapshot fixture through the existing
  `writeSnapshot` helper used by `code-job.test.ts`: projection keeps exactly the EXTRACTED cross-object `calls`
  and `implements`; aggregation counts pairs and caps `via` at five; every unresolved reason appears once; the file
  is compact one-edge-per-line and validates against `schemas/al-graph.json`; a rerun with the same inputs writes
  nothing; a commit mismatch skips with a logged reason; the timeout kills the child (fake `graphifyBin` that
  sleeps). No field outside the allowlist survives (`JSON.stringify(output)` contains no `source_location`,
  `summary`, `content`).
- `tests/unit/object-pages.test.ts`: a page gets "## Calls", "## Called by", "## Implements", "## Ask your
  agent" with the exact `bcatlas_resolve_node(object_type: "codeunit", object_name: "Sales-Post")` string; caps;
  frontmatter counts; a page without `calls.json` renders the block and no sections; the page validates.
- `tests/unit/relations.test.ts`: `readCalls` and the incoming/outgoing maps.
- `tests/unit/queue.test.ts` and `tests/unit/execute.test.ts`: `quotaFor("code", "linked") === "graph_jobs"`;
  lane `cpu` runs one at a time; the quota enumeration includes `graph_jobs`.
- `tests/unit/blog-posts.test.ts`, `tests/unit/video-pages.test.ts`: resolved mentions become links and
  `links.objects`; unresolved and ambiguous stay text with the closing line; the index is read once.
- `tests/unit/graph.test.ts`: no duplicate `mentions` edge when both `links.objects` and the mentioned list name
  the same object.
- `tests/unit/mcp.test.ts`: unchanged (the markdown carries the sections); one assertion that `get_object` on a
  fixture page with "## Called by" returns it.
- Site: `npm run site:build` on the fixture content stays within today's time and RSS envelope (recorded in the
  run summary of the first nightly).
- A workflow lint rule or test: the string `bc-code-atlas.stefanmaron.dev` appears nowhere under `.github/`,
  `infra/`, `pipeline/` or `scripts/` (decision 1); allowed in `plugin/`, `docs/`, `README.md`,
  `pipeline/render/object.ts` (the block text) and `content/`.

## 6. Tasks

Phase 0, zero infrastructure, ships first:

1. `plugin/.mcp.json`, `plugin/skills/bc-grounding/SKILL.md`, the `bc-lookup` cross-reference, `README.md` line.
2. `pipeline/render/object.ts` "Ask your agent" block + test; one commit that re-renders the object pages, made
   when no nightly is running.
3. Tell Stefan (decision 12). Bump the plugin version (`plugin/.claude-plugin/plugin.json`).

Spike (gated, on the Mini as `bcobs`, read-only on the repository; numbers go into section 7):

4. `uv tool run --python 3.12 --from "<package>[al] @ git+<repo>@<sha>" graphify update
   /Users/bcobs/observatory/cache/code/bcapps-29` under `nice -n 10 /usr/bin/time -l`, first with a
   `.graphifyignore` limited to the W1 layer, then including `src/Apps/W1`. Record wall, max RSS, `graph.json`
   bytes, `jq` counts by relation × confidence, and compare twenty `Sales-Post` callees with
   `bcatlas_get_neighbors` on the hosted w1-28 (manual, a dozen calls). Remove `graphify-out/` afterwards.

Phase 1, installs (implementation PR, gated as every Mini step):

5. `config/tooling.json` pin; `infra/mini/35-tools.sh`; `infra/mini/selfcheck.sh`; `docs/RUNBOOK.md` (Mini line,
   local development, atlas in Claude Code). Run `35-tools.sh --yes` on the Mini, `selfcheck` via
   `workflow_dispatch`. Developer Mac: the same `uv tool install`.

Phase 2, call graph:

6. `schemas/al-graph.json`, fixture, `tests/unit/callgraph.test.ts`; `pipeline/code/callgraph.ts`;
   `config/graphify.ignore`.
7. `pipeline/code/relations.ts` readers; `pipeline/render/object.ts` sections and counts;
   `schemas/frontmatter.object.json`; site ring and stats; tests.
8. `stages.ts`, `queue.ts`, `config/budget.json`, `nightly.ts`, `schemas/run-report.json`, `run-summary.ts`;
   `CONTENT-NOTICE.md` row.
9. First real run: `workflow_dispatch` with `pillars: code`; check `data/code/graph/29/manifest.json` numbers
   against the spike, `npm run check:leak`, then let the nightly take 28 and 30 on the following nights.

Phase 3, mentions:

10. `pipeline/link/mentions.ts` (or adopt D65's if it landed), `post.ts`, `video.ts`, `graph.ts`, tests.

Close:

11. `docs/DECISIONS.md` D67, `docs/PLAN.md` 4.6 and section 5 row M9, `AGENTS.md`, `docs/HANDOFF.md`.

## 7. Spike results (to be filled before phase 2 is approved)

| Run | Files | Wall | Max RSS | graph.json | calls EXTRACTED / INFERRED | implements | Precision (20 callees) |
|---|---|---|---|---|---|---|---|
| bcapps-29 W1 only | | | | | | | |
| bcapps-29 W1 + Apps/W1 | | | | | | | |
| sandbox-history-28 W1 | | | | | | | |

Go rule (decision 9): W1 + apps under 30 minutes and 6 GB RSS, precision at or above 18 of 20.

### 7.1 Phase 3 built (2026-10-07, `dev/spec`), deviations

Video and post pages join the objects they name. Verified by re-rendering every video page and the posts the new
check flags from the committed `data/` (outputs discarded, no nightly): 423 video pages and 273 post pages changed;
592 distinct object links (videos 328 on 156 pages, posts 264 on 125 pages) out of 2,915 mention lines; the graph
keeps exactly 592 `mentions` edges, all of weight 1, before and after (62,291 edges in all, unchanged). The atlas
announcement post lists `codeunit "SalesLineReserve"` and `table "SalesLine"` as "Not found in BC28-30": the post
names them as variables, not as the objects' names. `validate:content` passes; the site resolves the links.

1. **Resolver adopted from D65, extended.** `pipeline/link/mentions.ts` keeps `objectByName` / `mentionedObjects`
   (graph, Related and app pages, which read the pages anyway) and adds `loadObjectIndex(dataDir)` over
   `data/index/objects.json` (parsed once per run, kept while the file is unchanged), `resolveMentions` and
   `mentionSection`. A country row's " (XX)" suffix is stripped, so both maps agree (checked: 0 differences on the
   committed data); a country page that shares a W1 name makes it ambiguous, as on the pages.
2. **Three outcomes, not two.** Ambiguous names (8 today) get their own closing line, "More than one object has this
   name, so none is linked", because "not found" would be false. Names whose type has no object pages (`other`,
   `api`: 997 of the 2,915) stay as text and are never called "not found": they were never looked up.
3. **Link label** is the object's header from the index, `table 252 "General Posting Setup"`, not the name as heard;
   an unresolved line keeps the name as heard. A video keeps one line per mention with its timestamp.
4. **Graph.** For videos and posts, `links.objects` and the mentioned names are one set: one `mentions` edge per
   object (`edge()` would otherwise have counted the pair twice). Related is unchanged (it resolves the same names).
5. **Re-render path.** Video pages already re-render every night (`rerenderVideoPages`). Posts did not, so the
   preview-probe phase also re-renders `pendingMentionPages`: posts whose `links.objects` or mention section differ
   from what the current index gives. Both run before the `objects-index` phase, so a new or renamed object page
   reaches the media pages one night later.
6. **No index, no join.** Without `data/index/objects.json` (a fresh checkout, tests) the section says "not joined
   to the object pages (no object index)" and `links.objects` stays empty. Section 2.3 asks for no "Ask your agent"
   hint on media pages, so there is none.

## 8. Verification

- Phase 0: `npm test`; `npm run validate:content`; `grep -c 'bcatlas_resolve_node' content/objects/codeunit/80.md`
  is 1; `claude mcp list` in a session with the plugin shows both servers connected; one manual question through
  `bc-grounding` ends with an observatory evidence link and an atlas fact labelled w1-28.
- Phase 1: `infra/mini/selfcheck.sh` prints `ok graphify-al`; `uv tool list` on the Mac shows the pinned SHA.
- Phase 2: `npm run typecheck && npm test`; `npm run nightly -- --dry-run --pillars code` logs the `linked` stage
  and the lane; after the first real run `ls data/code/graph/29/` shows `calls.json` and `manifest.json`;
  `grep -c '^## Called by' content/objects/codeunit/80.md` is 1; `npm run validate:content && npm run check:leak`
  green; `node -e` over `calls.json` finds no key outside the allowlist; `npm run site:build` time and RSS within
  the recorded envelope; the Neighbourhood on `/objects/codeunit/80/` shows a `calls` ring.
- Phase 3: the atlas announcement post page links `table/37` and `codeunit/99000845` (or lists them as not found,
  truthfully); `npm run validate:content` green.
- Always: `grep -rn 'bc-code-atlas.stefanmaron.dev' .github infra pipeline scripts` returns only the object
  renderer's block text.

## 9. Later, not in this spec

- **D68, tool-enabled review.** If the Opus review role should verify object claims against real source, the
  change is: `buildArgs` (`pipeline/lib/llm.ts:185`) gains `--mcp-config <local aggregator>` and `--allowedTools`
  for the `review` role only, behind `config/models.json` `tools: true` default false, keeping
  `--strict-mcp-config`; allowlist `bcatlas_resolve_node`, `bcatlas_get_neighbors`, `bcatlas_get_signature`,
  `bcatlas_shortest_path`; deny `get_procedure_body`, `get_object_source`, `diff`, `request_version`; `childEnv`
  allowlist unchanged; a per-call tool budget; and a validator that rejects review output containing AL syntax
  (`begin`, `end;`, `procedure `) before it reaches a public page. It needs a local aggregator (next item). The
  LLM cache in the vault may hold tool results; the vault is private.
- **Local atlas servers on the Mini.** `infra/mini/90-atlas.sh` (gated): clone with submodules into
  `/Users/bcobs/atlas`, `uv sync` the subprojects, LaunchDaemons for graph, registry and aggregator bound to
  `127.0.0.1`, pointed at our own checkouts through `BCATLAS_SOURCE_DIR`. Go only if the graph server's resident
  RSS plus the nightly's peak RSS stays under 20 GB and the graph for BCApps 29 + apps loads under
  `GRAPHIFY_MAX_GRAPH_BYTES`. Semantic search needs an embedding index (about 20 h CPU, MPS untested): off by
  default.
- **Federation.** The atlas stamps every AL node with a `global_id` (namespace or `app:<publisher>::<name>`, plus
  object type; `bcatlas_find_by_global_id`) for joining independently built graphs. If the observatory ever exposes
  compatible ids on object pages, an agent can hop between the two without name matching.
- **Version-aware companion.** When the atlas keeps 29 and 30 warm, the block can name the resolved version to
  pass as `version`; today it would start builds on Stefan's server.

## 10. Risks and open questions

- The fork moves without releases: pinned SHA, fixture regenerated on each bump, a test that fails loudly when the
  edge shape changes.
- `graph.json` for BCApps 29 with apps may exceed the 700 MB reference (the sandbox w1-28 has 17k files, we have
  28k): the spike decides W1 only, or apps in a second run, or a higher `GRAPHIFY_MAX_GRAPH_BYTES`. Streaming read
  is mandatory either way.
- EXTRACTED `calls` are still resolved by graphify's own type resolution (variables, `Codeunit.Run` arguments):
  the twenty-callee precision sample guards against systematic error; the page says "from the extracted call
  graph", not "complete".
- Interface dispatch is fanned out to every implementer: a `calls` edge to an implementer is a possible call, not
  an observed one. Either drop edges whose `via` callee is an interface method (the fixture has one) or label them;
  the spike shows how many there are. Default: keep, with `k: "calls"` and the interface method named in `via`.
- 30-vNext's head moves daily; with one graph a night, 29 goes first by `narrative_order`, then 28, then 30, and
  a changed 30 waits. Acceptable.
- Platform objects not in the repository (`Access Control`, `Global Triggers`) and test codeunits produce
  `unresolved` with counts, as D45 does today.
- A Pages build reads one more file per major (a few MB): well within the 7 GB runner; `SHARD_CAP` unchanged.
- The hosted instance will be down some days; the skill says what to do, and nothing of ours depends on it.
- The 16k-page re-render for the block lands in one commit; the nightly's leak check and `validate:content` run
  on it like any content commit.
- Open: whether `uv tool install` of a git dependency with an extra needs the package name or a path (`[al]`
  syntax differs between PEP 508 and `uv tool`); resolved at spike time and written into `tooling.json`.

## 11. Files

New: `docs/specs/code-atlas.md` (this), `plugin/skills/bc-grounding/SKILL.md`, `pipeline/code/callgraph.ts`,
`pipeline/link/mentions.ts`, `config/graphify.ignore`, `schemas/al-graph.json`, `tests/unit/callgraph.test.ts`,
`tests/fixtures/graphify/graph.json`.

Modified: `plugin/.mcp.json`, `plugin/.claude-plugin/plugin.json`, `plugin/skills/bc-lookup/SKILL.md`,
`README.md`, `pipeline/render/object.ts`, `pipeline/render/post.ts`, `pipeline/render/video.ts`,
`pipeline/code/relations.ts`, `pipeline/code/diff.ts` (export `writeIfInputsChanged`), `pipeline/link/graph.ts`,
`pipeline/orchestrator/stages.ts`, `pipeline/orchestrator/nightly.ts`, `pipeline/lib/queue.ts`,
`scripts/run-summary.ts`, `schemas/frontmatter.object.json`, `schemas/run-report.json`, `config/budget.json`,
`config/tooling.json`, `site/src/lib/relations.ts`, `site/src/components/Neighbourhood.astro`,
`site/src/pages/objects/[...id]/index.astro`, `infra/mini/35-tools.sh`, `infra/mini/selfcheck.sh`,
`docs/RUNBOOK.md`, `CONTENT-NOTICE.md`, `docs/DECISIONS.md`, `docs/PLAN.md`, `AGENTS.md`, `docs/HANDOFF.md`, the
tests in section 5.

## 12. Proposed edits to other files (not applied)

To be made in the implementation PR, not before.

### `docs/DECISIONS.md`, append

- **D67 bc-code-atlas is the observatory's grounding partner: linked everywhere, run nowhere, and its call graph
  reproduced from our own checkouts (spec `docs/specs/code-atlas.md`, not yet implemented).** Stefan Maron's
  atlas serves what this repository must never hold (D10): procedure bodies, and a call graph read from them. The
  owner chose (2026-10-07) three things and declined two. Chosen: (a) the plugin registers the hosted atlas next to
  `bc-observatory`, and a `bc-grounding` skill fixes the division of labour (observatory for identity, versions,
  obsolete state, docs and changes; atlas for behaviour and bodies, w1-28 by default) and the etiquette on a
  one-person server (resolve, don't search; never `request_version` unasked; one or two calls per question; the
  nightly never calls it); (b) object pages carry an "Ask your agent" block built from type and name, and new
  "Calls", "Called by" and "Implements" sections from a nightly graphify-al run (the pinned fork, `uv tool`, per
  user) on the code pillar's own sparse checkouts at the snapshot commit: EXTRACTED cross-object edges only,
  aggregated per object pair with procedure names and counts, joined by the AL header label and the file path
  (D29, D45), written compact to `data/code/graph/<major>/calls.json` under a schema with an allowlist and never
  into `relations.json`; one graph a night in a `cpu` lane with its own quota; (c) video and post pages join their
  mentioned objects through `data/index/objects.json`, offline. Declined: hosting the atlas's servers on the Mini
  (3 to 5 GB resident for a graph nobody in the pipeline reads; a go/no-go rule is recorded) and tool-enabled model
  calls (D68 when a measured need exists). Bulk through the hosted MCP was ruled out on arithmetic: 16k objects at
  1 to 7 s a call is a night of someone else's CPU for a corpus that is not ours.

### `docs/PLAN.md` section 4.6

Replace the graphify-al paragraph and the companion line with: "**Call graph** (`docs/specs/code-atlas.md`, D67):
the code pillar's `linked` stage runs the pinned graphify-al fork on the snapshot checkout, keeps EXTRACTED
cross-object `calls` and `implements` edges, and writes `data/code/graph/<major>/calls.json`; object pages render
Calls / Called by / Implements. **Companion:** every object page names the `bcatlas_resolve_node` call that opens
it in bc-code-atlas; the plugin connects both servers."

### `docs/PLAN.md` section 5, row after M8

| **M9 code atlas** | bc-code-atlas as grounding partner (`docs/specs/code-atlas.md`, D67): plugin + `bc-grounding` skill, "Ask your agent" on object pages, graphify-al call graph (Calls / Called by / Implements, `calls` ring), mentions joined on video and post pages, graphify-al pinned on the Mini and the Mac | 1–2 weeks | none: deterministic, no LLM |

### `CONTENT-NOTICE.md`, tier table

| Official: call graph (same checkouts) | edges only | object-to-object `calls` and `implements` edges with procedure names and counts, from a graphify-al run on the same checkouts; never bodies, never line text |

### `AGENTS.md`

Section "If you are an agent answering questions": after the MCP sentence, "Procedure bodies and the full call
graph are not here by policy; the plugin also connects bc-code-atlas (Stefan Maron) for those, and every object
page says how to ask it."

### `docs/HANDOFF.md`, open specs

- **BC Code Atlas as a grounding partner**: `docs/specs/code-atlas.md`, decision D67, PLAN milestone M9. Status:
  proposed, spec complete, no code written, nothing installed. Phase 0 (plugin, skill, "Ask your agent" block) needs
  no infrastructure; the spike in section 6 task 4 must fill section 7 before phase 2; installs are section 4.7.
