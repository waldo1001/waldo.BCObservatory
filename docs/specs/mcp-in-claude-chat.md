---
issue: 24
status: draft
---

# The observatory in Claude chat and Claude Desktop: an install guide now, a hosted server later

Status: proposed, 2026-10-22. Decision: D105 (reserved, appended to `docs/DECISIONS.md` at ship time). Milestone: M43
(reserved). Owner: waldo. The owner's word on 2026-10-22: "spec it as a possible new possibility, but we won't do it
just yet". This spec stays `draft` until the owner approves it. Phase 2 also waits for the owner to pick a host
(section 3, D105c).
Scope: how a Claude user who does not use Claude Code gets the observatory. That covers claude.ai chat on the web,
the desktop and mobile apps, and Cowork. The spec adds an install guide per surface (MCP page, both READMEs), a Claude
Desktop extension (`.mcpb`) of today's stdio server, a Streamable HTTP entry point for the server with rate limiting
and a host-neutral container, the switch of `plugin/.mcp.json` to a hosted URL, and the version bumps. Every claim
about the tree was verified against `0e06a19f91` on 2026-10-22. Claims about Claude come from the Claude docs as read
on 2026-10-22 (links in section 1).
Not in scope: authentication (the data is public), procedure bodies (still by policy, D67), and hosting the other two
servers (`bc-code-atlas`, `microsoft-learn` run elsewhere). A directory listing is not in scope either; it is in
section 8.

## 1. Goal

**The problem.** A claude.ai user who adds the marketplace `waldo1001/waldo.BCObservatory` under **Customize > Plugins**
gets the four skills and no observatory tools.

- `plugin/.mcp.json` defines `bc-observatory` as a local command (`"command": "npx", "args": ["-y",
  "bc-observatory@latest"]`). `tests/unit/mcp.test.ts:60` pins that.
- The server speaks only stdio. `packages/mcp/src/server.ts:439-441` connects `createServer()` to a
  `StdioServerTransport` and nothing else.
- Claude's plugin support table ([platform support](https://claude.com/docs/plugins/platform-support)) says: "Local MCP
  server, a command the app starts, including `.mcpb` bundles: Chat: Ignored ... On the web, the plugin's Connectors
  tab marks it Runs in each session".
- The two HTTP servers do reach claude.ai, but not by themselves: "Remote MCP server, `http` or `sse` with a fixed URL:
  Listed on the plugin's Connectors tab; works once you add or connect it there". [Plugins,
  bundled connectors](https://claude.com/docs/plugins/overview#bundled-connectors): "Adding a plugin doesn't add a
  connector to your account or sign you in to anything." Each connector starts as **Not added**. On Team and Enterprise
  plans, an Owner adds it for the organization.
- Nothing we publish says any of this. The MCP page's install list (`site/src/lib/mcp.ts:59-68`, `installSteps`) has
  Claude Code, Copilot CLI, a `claude_desktop_config.json` snippet (which needs Node on the user's machine), VS Code and
  a checkout. It has no Claude chat or Claude Desktop step. `plugin/README.md` and `README.md:19-20` give Claude Code and
  Copilot CLI commands only.

**"Claude, install it" does not exist.** No Claude doc describes chat installing a plugin or a connector for the user.
These are the nearest things, verified in the docs:

- **Install links.** A link that opens the **Add custom connector** dialog prefilled
  ([directory vs custom](https://claude.com/docs/connectors/building/directory-vs-custom#share-an-install-link)):
  `https://claude.ai/customize/connectors?modal=add-custom-connector&connectorName=NAME&connectorUrl=ENCODED_URL`.
  "Install links only prefill the form": the user still confirms. That is one click plus a confirm, for an HTTP server
  only.
- **Suggested Connectors.** Claude recommends a connector in a chat only when that connector is listed in Anthropic's
  directory: "Custom connectors are never suggested". That is section 8.
- **Desktop extensions.** A `.mcpb` "Claude Desktop installs in a single click", with Node bundled: "Included with Claude
  Desktop on macOS and Windows, so users need no separate runtime"
  ([MCPB](https://claude.com/docs/connectors/building/mcpb)). It works in Desktop only, not on the web or mobile.
- **The skills can say what is missing.** The skills do load in chat. When they find no `bc-observatory` tool, they can
  tell the user exactly how to get it and give the link. That is as close to "Claude, install it" as this spec gets
  without a directory listing.

**Why a hosted server is a decision, not a task.** The server is too big for a free tier. Measured on 2026-10-22 with
Node 22.23.1 on macOS, against the live site's index (29,030 pages; symbols 61,765 fields, 25,767 events, 37,444
procedures and 6,371 enum values, from `index-manifest.json` and `symbols-manifest.json` on
`https://waldo1001.github.io/waldo.BCObservatory/index/`). The script imported `toolSearch` from
`packages/mcp/src/server.ts`, ran `search("client")` then `search("posting sales invoice")`, under `/usr/bin/time -l`:

| | Peak RSS | First search (index load) | Next search |
|---|---|---|---|
| Embeddings on | 617 MB | 2.9 s | 19 ms |
| `BC_OBSERVATORY_EMBEDDINGS=0` | 533 MB | 1.1 s | 3 ms |

The index is the memory cost, not the 30 MB model: turning embeddings off saves about 85 MB. Any host needs a 1 GB
instance. On disk, `data/index/` is 39 MB and the model is 29 MB (`du -sh ~/.cache/bc-observatory/models`).

**What the other hosted server does.** `bc-code-atlas` runs on Stefan Maron's own machine, in Docker, behind a
Cloudflare Tunnel ([CLOUDFLARE_TUNNEL.md](https://github.com/StefanMaron/bc-code-atlas/blob/main/CLOUDFLARE_TUNNEL.md)).
It is authless Streamable HTTP with stateful sessions (`initialize` returns an `mcp-session-id`). The owner rejected that
pattern for the Mac Mini on 2026-10-22: public traffic on the home machine (D105c).

After this change:
- The MCP page and both READMEs say, per surface, how to get the observatory into Claude chat, Claude Desktop, Cowork,
  Claude Code and Copilot CLI. They say which steps the user takes by hand, which plans allow it, and what does not work
  yet.
- Claude Desktop users install one `.mcpb` file by double-clicking it. Queries stay on their machine, the same promise
  as `npx`.
- When a skill finds no `bc-observatory` tool, it says how to get one.
- (Phase 2, after the owner picks a host) `bc-observatory` in `plugin/.mcp.json` is an HTTP server at a fixed URL. It
  works in chat, Cowork and mobile once the user selects **Add** on the plugin's Connectors tab. The local stdio server
  stays available and documented for people who want their queries to stay on their machine.

## 2. Reader- and agent-facing behaviour, after

**MCP page and `/mcp.md`** (`site/src/lib/mcp.ts`, `installSteps`). New steps go first, in this order:

1. **Claude (claude.ai, the desktop and mobile apps, Cowork): the plugin.** `how`:
   "Customize > Plugins > Add > Add marketplace, enter `waldo1001/waldo.BCObservatory`, then add bc-observatory. The
   skills load at once. Connectors are not added by the plugin: open the plugin's Connectors tab and select Add for
   bc-code-atlas and microsoft-learn (no sign-in). On Team and Enterprise plans an Owner adds connectors for the
   organization."
   - Phase 1 adds one sentence: "bc-observatory itself shows as Runs in each session and does not work in chat yet: use
     the desktop extension below, or Claude Code."
   - Phase 2 replaces that sentence with: "select Add for bc-observatory too."
   - `code`: the marketplace shorthand `waldo1001/waldo.BCObservatory`, with `lang: "bash"`. The step is a UI path, so
     the code block holds only what the user types.
2. **Claude Desktop: the extension (server only, queries stay on your machine).** `how`: "Download bc-observatory.mcpb
   and double-click it, or drag it into the Claude window, or use Settings > Extensions > Advanced settings > Install
   Extension. Node is included with Claude Desktop." `code`: the download URL (section 4).
3. **Without the plugin: one connector by link** (phase 2 only). `how`: "Opens Claude's Add custom connector dialog
   with the name and URL filled in; you confirm. The Free plan allows one custom connector." `code`: the install link for
   the hosted URL.

The step after these is today's "Claude Desktop, Cursor, Windsurf" step, reworded to "Cursor, Windsurf and other MCP
clients (and Claude Desktop without the extension)". It keeps its `claude_desktop_config.json` snippet.

**A short "Can Claude install it for me?" paragraph** goes on the MCP page and in `plugin/README.md`, verbatim:

> Not yet. Claude in a chat cannot add a plugin or a connector for you: you add the marketplace once, and select Add on
> each connector. Ask anyway: the plugin's skills know when the observatory is missing and give you these steps and
> links. Claude can suggest a connector on its own only when the connector is listed in Anthropic's directory, which
> this one is not (yet).

**Skills.** `plugin/skills/bcobs-lookup/SKILL.md`, `bcobs-whats-new`, `bcobs-localization` and `bcobs-grounding` each
get one rule near the top:

> If no `bc-observatory` tool (search, cat, get_object, ...) is available, say so before answering from memory, and
> give the install steps for the user's app from https://waldo1001.github.io/waldo.BCObservatory/mcp/#install (Claude
> chat: the plugin's Connectors tab; Claude Desktop: the extension; Claude Code: the plugin command). Do not invent
> object ids while the server is missing.

**`plugin/README.md` server table** ("What leaves your machine", column 6):

- Phase 1: the `bc-observatory` row keeps its stdio text and adds "Claude chat: not available until the hosted server
  (D105); Claude Desktop: the extension, same as npx".
- Phase 2: the row becomes the hosted server. Its column 6, verbatim:

> Every call goes to the observatory's hosted server at `<HOSTED_URL>`: the tool name and its arguments (your search
> text, the page paths you read), and the address of the client calling it. From claude.ai that address is Anthropic's
> (`160.79.104.0/21`); from Claude Code it is yours. The server keeps each address in memory only, for rate limiting,
> for at most a minute after its last call. It logs one line per call: time, tool name, duration, status, and whether
> the call came from Anthropic's range. It does not log arguments or addresses. For queries that stay on your machine,
> run the server locally (below).

A section **"Keep queries on your machine"** gives `claude mcp add bc-observatory -- npx -y bc-observatory@latest`
(user scope) and the Desktop extension. It also says: "Claude Code then shows two bc-observatory servers (yours and the
plugin's, different endpoints): turn `plugin:bc-observatory:bc-observatory` off in `/mcp`." This follows the endpoint
rule already in `plugin/README.md` ("You already have a Learn MCP").

**`README.md` install section** (lines 17-23) adds one line: `Claude (claude.ai, Desktop, mobile): Customize > Plugins
> Add marketplace > waldo1001/waldo.BCObservatory, then Add each connector on its Connectors tab (see the MCP page)`.

**MCP server** (phase 2): the same nine tools, the same text answers. Over HTTP an answer is identical to stdio for the
same arguments and the same index; the test plan pins this. A rate-limited call gets HTTP 429 with `Retry-After`.

## 3. Decisions

Draft D105 text:

> **D105 The observatory in Claude chat and Desktop (M43).**
>
> **(a)** Install guide per surface, and the honest limits: claude.ai plugins add skills only, connectors need **Add** on
> the plugin's Connectors tab, Team and Enterprise need an Owner, and chat cannot install anything for the user. The
> skills say how to install when the server is missing.
>
> **(b)** A Claude Desktop extension `bc-observatory.mcpb`, the stdio server bundled with every dependency. It is packed
> by `publish-mcp.yml` (D40) and attached to a GitHub release `mcp-v<version>`. The download URL is
> `releases/latest/download/bc-observatory.mcpb`.
>
> **(c)** A Streamable HTTP entry point (`dist/http.js`): stateless, `POST /mcp`, `GET /health`, no authentication. Rate
> limiting is per client address, plus one shared bucket for Anthropic's egress range `160.79.104.0/21`. The server logs
> no arguments and no addresses. It is deployed from a host-neutral container to the host the owner picks at approval,
> by criteria, not on the owner's home network. `plugin/.mcp.json` points `bc-observatory` at that URL. The stdio server
> stays the npm package and the local option.
>
> **(d)** A directory listing is later (section 8).

Rejected, with the reason:

- **The Mac Mini behind a Cloudflare Tunnel** (what `bc-code-atlas` does). It is free and keeps the cache on disk. The
  owner rejected it on 2026-10-22: every user's queries would be served from the home machine. A bug in the server or
  the SDK would be reachable from the internet on the box that runs the nightly. Uptime would follow the house. It would
  also compete with the derive for memory (about 620 MB resident).
- **Plain per-IP limiting.** Every claude.ai request comes from `160.79.104.0/21`
  ([authentication, network reference](https://claude.com/docs/connectors/building/authentication#network-reference)).
  One per-IP budget would make all claude.ai users share 60 requests a minute.
- **Exempting Anthropic's range.** That leaves no cap on traffic that comes through claude.ai.
- **Stateful sessions** (as `bc-code-atlas` has). The tools keep no per-client state: the caches in `server.ts` (index,
  vectors, country diffs) are module-level and shared. Stateless means any instance answers any request and nothing
  expires.
- **Keyword-only on the host.** It saves about 85 MB of 617 MB and does not make a smaller instance fit (section 1).
  `BC_OBSERVATORY_EMBEDDINGS=0` stays available if a host's memory says otherwise.
- **A second server name** (`bc-observatory-hosted` beside the stdio one). The skills name `bc-observatory`
  (`plugin/skills/*/SKILL.md`). Two names would mean two tool sets in Claude Code and skills that call the wrong one.
- **Cloudflare Workers.** 128 MB of memory per isolate; the index alone needs more than 500 MB.

## 4. Contract

**Phase 1: the desktop extension.**

- `packages/mcp/build.ts` builds a second output, `dist/mcpb/server/server.js`, from the same entry, with
  `external: []`. That bundles the MCP SDK and zod too, so the extension has no `node_modules`.
- `packages/mcp/mcpb/manifest.json`, written with `mcpb init` and then edited:

  ```json
  {
    "manifest_version": "<what mcpb init writes>",
    "name": "bc-observatory",
    "display_name": "BC Observatory",
    "version": "0.9.0",
    "description": "Business Central facts with evidence for Claude: AL objects, localizations, Learn, roadmap, videos, posts.",
    "author": { "name": "waldo (Eric Wauters)", "url": "https://github.com/waldo1001" },
    "homepage": "https://waldo1001.github.io/waldo.BCObservatory/mcp/",
    "license": "MIT",
    "icon": "icon.png",
    "server": {
      "type": "node",
      "entry_point": "server/server.js",
      "mcp_config": { "command": "node", "args": ["${__dirname}/server/server.js"] }
    },
    "compatibility": { "platforms": ["darwin", "win32"], "runtimes": { "node": ">=20" } }
  }
  ```

  The coder checks every field name against
  [MANIFEST.md](https://github.com/modelcontextprotocol/mcpb/blob/main/MANIFEST.md) at build time. `mcpb validate`
  must pass. `icon.png` is 512×512 from the site's favicon source.
- `publish-mcp.yml` (D40, `workflow_dispatch` only) gains a second job, `mcpb`, after `publish`.
  - It needs `permissions: contents: write`, on that job only.
  - It runs `npm run build --workspace=bc-observatory`, then `npx -y @anthropic-ai/mcpb pack packages/mcp/mcpb
    dist/bc-observatory.mcpb` (after copying `dist/mcpb/server` in).
  - It then runs `gh release create mcp-v$version dist/bc-observatory.mcpb --title "bc-observatory $version" --notes
    "..."` when the release does not exist, or `gh release upload --clobber` when it does.
  - The repository has no releases today (`gh release list` printed nothing on 2026-10-22), so
    `https://github.com/waldo1001/waldo.BCObservatory/releases/latest/download/bc-observatory.mcpb` is stable as long as
    only this workflow makes releases. `MCPB_URL` in `site/src/lib/mcp.ts` holds it.

**Phase 2: the HTTP entry point.**

- `packages/mcp/src/server.ts` keeps `createServer()` (`:408`, already transport-agnostic). The `isMain()` block
  (`:439-441`) stays the stdio start. It also exports `warm(): Promise<void>`, which calls `loadIndex()` and, when
  embeddings are on, `loadModel()` and `pageVectors()`.
- New `packages/mcp/src/http.ts` uses `node:http` (no new dependency):
  - `POST /mcp`: rate check (below), body read with a 64 KB cap (413 above it), then
    `new StreamableHTTPServerTransport({ sessionIdGenerator: undefined, enableJsonResponse: true })`, `await
    createServer().connect(t)`, `await t.handleRequest(req, res, body)`, and `res.on("close")` closes both.
    `sessionIdGenerator: undefined` is the SDK's stateless mode
    (`node_modules/@modelcontextprotocol/sdk/dist/esm/server/streamableHttp.d.ts:38`, SDK 1.32.1).
  - `GET /mcp`, `DELETE /mcp`: 405 with a JSON-RPC error `{"code": -32000, "message": "Method not allowed: stateless
    server, POST only"}`.
  - `GET /health`: `200 {"status":"ok","version":"0.10.0","pages":29030,"embeddings":"on"|"off"|"<error>","indexAgeSec":
    <n>}`, or 503 before `warm()` finishes.
  - Anything else: 404.
  - On start: `listen(PORT ?? 8080)`, then `warm()` in the background.
  - DNS-rebinding protection: `allowedHosts` from `BC_OBSERVATORY_ALLOWED_HOSTS` (comma list). Without it, no Host
    check, for local runs. bc-code-atlas hit this behind its tunnel ("Invalid Host header" surfaced as a 421).
- New `packages/mcp/src/ratelimit.ts`, token buckets keyed by client:

  ```ts
  export interface Limits { perIp: number; anthropic: number; windowMs: number }   // defaults 60, 600, 60_000
  export function clientOf(req: { headers: Record<string, string | string[] | undefined>; socket: { remoteAddress?: string } }, header?: string): string
  export function inAnthropicRange(ip: string): boolean      // 160.79.104.0/21, IPv4 and IPv4-mapped IPv6
  export class Limiter { constructor(l: Limits, now?: () => number); take(ip: string): { ok: true } | { ok: false; retryAfterSec: number } }
  ```

  - `clientOf` reads the header named by `BC_OBSERVATORY_CLIENT_IP_HEADER` (e.g. `fly-client-ip`, `cf-connecting-ip`,
    or `x-forwarded-for`, first entry). Without that variable it reads the socket address.
  - All of `160.79.104.0/21` shares one bucket, `anthropic`. Every other address has its own.
  - At most 10,000 buckets: least recently used first out. A bucket idle for a full window is dropped, which is the
    "at most a minute" of section 2.
  - `BC_OBSERVATORY_RATE_IP` and `BC_OBSERVATORY_RATE_ANTHROPIC` override the defaults; `0` means no limit.
- Logging: one line per request on stdout, JSON:
  `{"t":"2026-10-22T10:00:00Z","tool":"search","ms":12,"status":200,"from":"anthropic"|"direct"}`. The tool name comes
  from the JSON-RPC body (`params.name` of a `tools/call`; otherwise the method). No arguments, no address.
- `packages/mcp/package.json`: `bin` gains `"bc-observatory-http": "dist/http.js"`. `build.ts` adds the entry
  `src/http.ts` to `dist/http.js`, with the same externals as `server.js`.
- `packages/mcp/Dockerfile` (host-neutral):
  - `FROM node:22-slim`, `npm ci` for the two runtime dependencies, copy `dist/`.
  - A build step downloads the three model files at the pinned revision and checks their SHA-256, the same as
    `MODEL` in `server.ts:132-139`, into `/models`.
  - `ENV BC_OBSERVATORY_MODEL_DIR=/models XDG_CACHE_HOME=/cache PORT=8080`, `EXPOSE 8080`, `USER node`,
    `CMD ["node","dist/http.js"]`.
  - `/cache` is a volume where the host offers one. Without one, every cold start downloads about 40 MB of index.
- Host-specific files are decided with the host (D105c criteria below): its config file at the repository root and
  `.github/workflows/deploy-mcp.yml`. That workflow is `workflow_dispatch` only, like D40, run after `publish-mcp.yml`.
  It needs one repository secret for the host, the image built from `packages/mcp/Dockerfile`, and a `GET /health`
  check after the deploy that fails the job on non-200.
- `plugin/.mcp.json` after phase 2:

  ```json
  { "mcpServers": {
      "bc-observatory": { "type": "http", "url": "<HOSTED_URL>/mcp" },
      "bc-code-atlas": { "type": "http", "url": "https://bc-code-atlas.stefanmaron.dev/mcp" },
      "microsoft-learn": { "type": "http", "url": "https://learn.microsoft.com/api/mcp" } } }
  ```

  `HOSTED_URL` lives in `site/src/lib/mcp.ts` next to `ATLAS_URL` (`:16`). `SERVER_CMD` (`:13`) stays the local
  command.

**Host criteria (D105c).** The owner picks the host at approval. The coder takes none by default.

- At least 1 GB of memory (617 MB measured peak, plus headroom for concurrent requests).
- Runs a Docker image. HTTPS on a fixed URL, so a custom domain is optional.
- A cold start under about 10 s. The tool timeout on claude.ai is 240 s per call
  ([building](https://claude.com/docs/connectors/building/index)), so this is for the user's patience, not a hard limit.
- The index cache persists across restarts (preferred).
- Deploys from GitHub Actions with one secret. Under $10 a month at this traffic.
- Not the owner's home network.

| Candidate | Fits | Against |
|---|---|---|
| Fly.io, 1 GB shared CPU, auto-stop and auto-start, 1 GB volume | Every criterion. Pay per running second (roughly $0-6 a month). `flyctl deploy` with `FLY_API_TOKEN`. `fly-client-ip` header | A credit card on file. No free tier |
| Google Cloud Run, 1 GiB, scale to zero | Probably free at this volume. HTTPS URL included | No persistent disk, so every cold start re-downloads the index. GitHub deploy needs a GCP project and Workload Identity Federation |
| Hugging Face Space (Docker) | Free, large memory, the model's own host | Sleeps when idle, with slow wake-ups. A deploy is a git push to the Space. Little control over client addresses |
| Render | Docker, simple | The free tier's 512 MB is below the peak. The first plan that fits costs more than $10 |

Optional on any host: a custom domain behind Cloudflare (free plan) for edge DDoS protection and one edge rate-limit
rule. `BC_OBSERVATORY_CLIENT_IP_HEADER=cf-connecting-ip` then.

## 5. Test plan (write first)

`tests/unit/mcp-http.test.ts` (new). It reuses the stdio harness of `tests/unit/mcp-golden.test.ts:23-26` (Client,
`BC_OBSERVATORY_LOCAL`).

1. **Same answers on both transports.**
   - Start `packages/mcp/src/http.ts` with `node --import tsx`, `PORT=0`, `BC_OBSERVATORY_LOCAL=<the golden root>` and
     `BC_OBSERVATORY_EMBEDDINGS=0`. It prints the port. Connect a `Client` with `StreamableHTTPClientTransport`.
   - Start the stdio server the way `mcp-golden.test.ts:23` does.
   - `listTools` returns the same nine names in the same order on both.
   - These calls return identical `content[0].text` on both: `search {query:"t36"}`, `search {query:"Sales Header",
     kind:"field", limit:3}`, `ls {path:"objects/table"}`, `cat {path:"<first path the search returned>"}`,
     `get_object {type:"table", idOrName:"18"}`, `diff_object {type:"table", id:"18", from:"29", to:"30"}`,
     `localization {country:"be"}`, `whats_new {since:"2026-01-01", limit:5}`, `blog_footprint {source:"<a source id in
     the fixture>"}` and `feedback {path:"objects/table/18", message:"x"}`.
2. **Health.** `GET /health` returns 200 with `version` equal to `packages/mcp/package.json` `version` and a numeric
   `pages`. Before warm-up it returns 503: start with an unreachable `BC_OBSERVATORY_SITE` and no `LOCAL`, then assert 503
   within 1 s.
3. **Methods.** `GET /mcp` and `DELETE /mcp` return 405. A `POST` of 70 KB returns 413. `GET /nope` returns 404.
4. **Rate limit over HTTP.** With `BC_OBSERVATORY_RATE_IP=2`, the third `tools/call` within a minute returns 429 with a
   numeric `Retry-After`.

`tests/unit/mcp-ratelimit.test.ts` (new, pure, injected clock):

- `inAnthropicRange`: `160.79.104.0` true, `160.79.111.255` true, `::ffff:160.79.105.7` true, `160.79.112.0` false,
  `160.79.103.255` false, `10.0.0.1` false.
- `Limiter({perIp:2, anthropic:3, windowMs:60000})`:
  - `1.2.3.4` gives ok, ok, then `{ok:false, retryAfterSec: 60}` at t=0. At t=60000 it is ok again.
  - `5.6.7.8` stays ok while `1.2.3.4` is limited.
  - `160.79.104.1`, `160.79.110.9`, `160.79.104.1` give ok, ok, ok, then a fourth from `160.79.107.2` is limited: one
    shared bucket.
  - `perIp: 0` is always ok.
- The bucket cap: 10,001 distinct addresses leave 10,000 buckets, and the first address starts fresh.
- `clientOf`: header `x-forwarded-for: 9.9.9.9, 10.0.0.1` with that header name configured gives `9.9.9.9`. With no
  header configured it gives the socket address, even when the header is present (no spoofing by default).

`tests/unit/mcp-build.test.ts` (extend):

- After the build, `dist/http.js` exists and `dist/mcpb/server/server.js` exists.
- The mcpb bundle contains no `from "@modelcontextprotocol` or `from "zod"` import (fully bundled).
- `packages/mcp/mcpb/manifest.json` `version` equals `packages/mcp/package.json` `version`.

`tests/unit/mcp.test.ts` (change):

- Line 60. Phase 1 keeps `command === "npx"`. Phase 2 asserts `type === "http"` and `url === HOSTED_URL + "/mcp"`.
- `installSteps` contains a step whose `client` starts with `Claude (claude.ai` and one with `Claude Desktop: the
  extension` whose code is `MCPB_URL`.
- `plugin/README.md` and the MCP markdown contain the sentence "Claude in a chat cannot add a plugin or a connector for
  you".
- Every `plugin/skills/*/SKILL.md` contains `waldo1001.github.io/waldo.BCObservatory/mcp/#install`.

## 6. Tasks

**Phase 1: install guide and desktop extension (no host, ships alone).**

1. Write the test changes of section 5 for phase 1: build, mcp.test.ts, skills.
2. `site/src/lib/mcp.ts`:
   - Add `MCPB_URL`, the two new `installSteps` entries and the "Can Claude install it for me?" paragraph in
     `mcpMarkdown`.
   - Reword the Claude Desktop config step.
   - Give the install list the anchor `install` on the page (check what the page already renders: the skills' link
     depends on it).
3. `plugin/README.md`, `README.md` install line, and the four skills' missing-server rule (section 2).
4. `packages/mcp/build.ts` second output, `packages/mcp/mcpb/manifest.json`, `icon.png`, the `mcpb` job in
   `publish-mcp.yml`.
5. Versions. Grep the tree for every place: `git grep -n '0\.8\.0' -- ':!package-lock.json' ':!docs/' ':!data/'` and
   `git grep -n '0\.4\.0' -- ':!package-lock.json' ':!docs/' ':!data/'` on 2026-10-22 gave:
   - MCP 0.8.0 to 0.9.0: `packages/mcp/package.json:3`, `packages/mcp/src/server.ts:38` (`VERSION`), `plugin/README.md:3`,
     and the new `packages/mcp/mcpb/manifest.json`.
   - Plugin 0.4.0 to 0.5.0: `plugin/.claude-plugin/plugin.json:3`, `.claude-plugin/marketplace.json:9`,
     `plugin/README.md:3` (and the history sentence `plugin/README.md:35`, which stays "Until 0.4.0").
   - `packages/mcp/README.md:53` says "as before 0.4.0" about the MCP's own history and stays.
   - `package-lock.json` follows from `npm install`.

**Phase 2: the hosted server (waits for the owner's host choice).**

6. Write `mcp-ratelimit.test.ts` and `mcp-http.test.ts`, and see them fail.
7. `ratelimit.ts`, `http.ts`, `warm()` in `server.ts`, the `build.ts` entry, the `bin` entry.
8. `packages/mcp/Dockerfile`. Build it locally and run it with `-p 8080:8080`. `curl /health`, and one `tools/call`
   with curl.
9. The host's config and `deploy-mcp.yml`, from the owner's pick.
10. `plugin/.mcp.json` to `HOSTED_URL`. `HOSTED_URL` and the phase-2 texts in `site/src/lib/mcp.ts`, `plugin/README.md`
    ("What leaves your machine", "Keep queries on your machine"), `README.md`. The install link (section 2, step 3)
    with `connectorUrl` percent-encoded.
11. Versions again: MCP 0.9.0 to 0.10.0 (the same four places), plugin 0.5.0 to 0.6.0 (the same places).
12. `docs/RUNBOOK.md`: a "Hosted MCP" section. It covers deploy, health check, logs, changing the limits, rolling back
    (redeploy the previous image), and how to undo all of it: point `plugin/.mcp.json` back to `npx`, bump the plugin,
    delete the app on the host.

No phase rewrites a content page or touches `data/`. No derive is needed. The MCP page changes when `pages.yml`
deploys the push.

## 7. Verification

- `npm run typecheck`, then `npx tsx --test tests/unit/mcp*.test.ts`. All tests pass.
- `npm run build --workspace=bc-observatory`. `npx -y @anthropic-ai/mcpb validate packages/mcp/mcpb/manifest.json`.
- The site build on Node 22: prepend `$(ls -d ~/.nvm/versions/node/v22*/bin | tail -1)` to `PATH`, then build `site/`
  (RUNBOOK). Check `/mcp/` and `/mcp.md` for the new steps and the paragraph.
- `claude plugin validate ./plugin` prints `✔ Validation passed`.
- Operator steps:
  - Phase 1, macOS: double-click the packed `.mcpb` in Claude Desktop. Ask "what is table 18" in a Desktop chat; the
    answer cites `get_object`. Remove it under Settings > Extensions.
  - Phase 1, claude.ai: Customize > Plugins > Check for updates. The plugin shows 0.5.0, and its Connectors tab shows
    bc-code-atlas and microsoft-learn as Not added. Add both. A chat asking "show the body of Sales-Post.PostInvoice"
    uses the atlas. A chat asking "what is table 18" says the observatory is missing and links the install page.
  - Phase 2, after the deploy: `curl -s <HOSTED_URL>/health`. Then, in claude.ai, select Add for bc-observatory on the
    Connectors tab. "What is table 18" now uses `get_object`. Try the install link signed in with a second account.
  - Phase 2: fire 70 quick `tools/call` requests from one machine with curl. Some return 429.

## 8. Later, not in this spec

- **Directory listing**, the only path to "Claude suggests the connector in a chat" (Suggested Connectors). It means
  submitting the plugin bundle and the hosted server as a connector from the developer portal
  ([publish](https://claude.com/docs/directory/publish)), and passing the review criteria
  ([review criteria](https://claude.com/docs/connectors/building/review-criteria)): tool annotations, names, and a
  README with a data section. It needs phase 2. The listing URL would then be the install link.
- **Asking bc-code-atlas to share a domain**: ruled out, the two servers stay separate.
- **An MCP App UI** (e.g. an object card).
- **Organization rollout** (Owner sets "Installed by default").

## 9. Risks and open questions

- **Free plan and custom marketplaces.** The docs list directory plugins on "Pro, Max, Team, and Enterprise". Whether
  **Add marketplace** works on Free is not stated. Default: the guide says "Pro, Max, Team and Enterprise", and adds
  "Free: not verified" until the operator checks with a Free account.
- **The Connectors tab click is still manual.** Nothing in this spec removes it. Default: the guide says so plainly, and
  the skills' missing-server rule covers the case where the user forgets.
- **A connector added both from the plugin and from the install link** may show twice. Default: the link is offered
  only "Without the plugin", and the guide says to use one or the other.
- **The `mcpb` manifest fields** move with the MCPB spec. Default: the coder follows MANIFEST.md at build time and
  records any change in section 12.
- **`releases/latest` is owned by this workflow only.** Default: if another workflow ever makes releases, switch
  `MCPB_URL` to a pinned tag and say so in the RUNBOOK.
- **Abuse beyond the limits** (many addresses). Default: the app limits stay, and the Cloudflare edge rule is the next
  step. The data is public, so the risk is cost and availability, not disclosure.
- **A cold host during a claude.ai call.** The first search after a cold start takes about 3 s plus the index download.
  Default: `warm()` on start, and `/health` 503 until warm, so a host with health-gated routing waits.
- **Host terms of use.** Default: none of the candidates forbids a public API at this size. The owner reads the chosen
  host's terms at approval.

## 10. Files

New:
- `packages/mcp/src/http.ts`
- `packages/mcp/src/ratelimit.ts`
- `packages/mcp/mcpb/manifest.json`
- `packages/mcp/mcpb/icon.png`
- `packages/mcp/Dockerfile`
- `tests/unit/mcp-http.test.ts`
- `tests/unit/mcp-ratelimit.test.ts`
- the host's config file
- `.github/workflows/deploy-mcp.yml`

Changed:
- `packages/mcp/src/server.ts` (`warm`, `VERSION`)
- `packages/mcp/build.ts`
- `packages/mcp/package.json`
- `package-lock.json`
- `.github/workflows/publish-mcp.yml`
- `plugin/.mcp.json` (phase 2)
- `plugin/.claude-plugin/plugin.json`
- `.claude-plugin/marketplace.json`
- `plugin/README.md`
- `plugin/skills/*/SKILL.md` (4)
- `README.md`
- `site/src/lib/mcp.ts`
- `tests/unit/mcp.test.ts`
- `tests/unit/mcp-build.test.ts`
- `docs/RUNBOOK.md`
- `docs/DECISIONS.md`, `docs/PLAN.md` and `docs/HANDOFF.md` at ship time

## 11. Definition of Done

Phase 1:
- [ ] The MCP page and `/mcp.md` list the Claude (claude.ai) plugin step and the Claude Desktop extension step first,
  and contain the "Can Claude install it for me?" paragraph verbatim.
- [ ] The four skills carry the missing-server rule with the `#install` link, and the link resolves on the built site.
- [ ] `publish-mcp.yml` attaches `bc-observatory.mcpb` to release `mcp-v0.9.0`. `MCPB_URL` downloads it, and it
  installs and answers in Claude Desktop on macOS (operator).
- [ ] Versions: MCP 0.9.0 and plugin 0.5.0 in every place listed in task 5. `tests/unit/mcp*.test.ts` pass.

Phase 2:
- [ ] The owner picked a host (recorded in D105). `deploy-mcp.yml` deploys it, and `/health` returns 200 with
  `version` 0.10.0.
- [ ] `mcp-http.test.ts` proves identical answers on both transports for all nine tools, plus health, methods, 413 and
  429. `mcp-ratelimit.test.ts` passes.
- [ ] `plugin/.mcp.json` points `bc-observatory` at `HOSTED_URL/mcp`. In claude.ai, after **Add** on the Connectors tab,
  "what is table 18" is answered through `get_object` (operator).
- [ ] The privacy text of section 2 is in `plugin/README.md` and on the MCP page. "Keep queries on your machine" gives
  the stdio command and the Desktop extension.
- [ ] RUNBOOK "Hosted MCP" covers deploy, logs, limits, rollback and undo.
- [ ] D105 appended to docs/DECISIONS.md; PLAN M43 marked shipped; HANDOFF entry moved from "Open specs" to "Where
  things stand"; section 12 "Built, deviations" inserted (this section kept as 13, marked applied) and status
  implemented in the frontmatter and the body. A League build leaves the spec alone and writes section 12 and the
  status lines into docs/built/mcp-in-claude-chat.md; the PR's review moves them in (sdd-build section 4, sdd-review
  section 6).

## 12. Proposed edits to other files (not applied)

**`docs/DECISIONS.md`:** the D105 text of section 3. Add the host the owner picked and the measured numbers of
section 1.

**`docs/PLAN.md` section 5**, before the `v0.2+` row:

`| **M43 Observatory in Claude chat and Desktop** | install guide per surface, skills say how to install, Claude Desktop extension (.mcpb) per MCP release; later a hosted Streamable HTTP server (stateless, rate-limited, host by criteria) and plugin/.mcp.json on its URL (\`docs/specs/mcp-in-claude-chat.md\`, D105, proposed) | phase 1 half a day; phase 2 a day plus the host setup | none: no LLM calls, no page rewritten |`

**`docs/HANDOFF.md`, "Open specs, not yet implemented"** (replaces "None open."):

`- **Observatory in Claude chat and Desktop, D105** (\`docs/specs/mcp-in-claude-chat.md\`, M43, issue #24). Status: proposed 2026-10-22, nothing implemented; the owner wants it specced, not built yet, and phase 2 waits for a host choice (spec section 4, host criteria). Start with phase 1 task 1 (the tests). Until it lands, claude.ai users who add the plugin get the skills only; bc-code-atlas and microsoft-learn need Add on the plugin's Connectors tab, and nothing says so.`

**`AGENTS.md`:** none. **`CONTENT-NOTICE.md`:** none, because no content changes.
