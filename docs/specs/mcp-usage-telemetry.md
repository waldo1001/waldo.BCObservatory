---
issue: 39
status: draft
---

# The MCP counts its own use: one event per tool call to Application Insights, opt-out, GDPR-minimal

Status: proposed, 2026-10-24. Decision: D110 (reserved, appended to `docs/DECISIONS.md` at ship time). Milestone: M47
(reserved). Owner: waldo.
Scope: the stdio MCP server `bc-observatory` (`packages/mcp`), its bundle step and publish workflow, the privacy text
in its README, the plugin README and the MCP page of the site. Every claim below was verified against the tree at
`fdbc6da8af` on 2026-10-24, and against `waldo.BCTelemetryBuddy` and `waldo.BCTelemetryBuddy.Usage` as checked out on
the owner's Mac that day. Not in scope: the hosted server of D105 (still a draft; section 8), the site (no page
analytics), the plugin's other two servers, a dashboard (section 8).

## 1. Goal

Nobody can tell how often the Observatory MCP is used. It runs on the user's machine (`npx -y bc-observatory@latest`,
`plugin/.mcp.json`) and reads static files from GitHub Pages (`SITE`, `packages/mcp/src/server.ts:44`), which keeps no
logs. The only signals are npm downloads (838 in the 30 days to 2026-10-24, `api.npmjs.org/downloads/range/last-month/
bc-observatory`), GitHub repo views (95, 13 unique, in 14 days) and clones (2,610, mostly runners). None of them counts
a tool call.

BC Telemetry Buddy already solved this for its own MCP: an Application Insights resource in West Europe with 90 days
retention (`waldo.BCTelemetryBuddy/docs/UserGuide.md:1554,1568`), the connection string injected at release from the
CI secret `AI_CONNECTION_STRING` (`.github/workflows/release-mcp.yml:48-50`). It uses the `applicationinsights` SDK
(`packages/mcp/package.json:56`, `packages/mcp/src/mcpTelemetry.ts:7`) and a persisted installation ID
(`docs/UserGuide.md:1488`). The Observatory takes the resource and the injection, not the SDK and not the stored ID.

The owner's constraint (2026-10-24): respect the GDPR. That shapes every choice below: no stored identifier, no device
data, no IP kept, no arguments, a stated retention, an off switch and a notice that names all of it.

After this change:
- Every tool call of a published MCP sends one event: tool name, outcome, duration, MCP version, the MCP client's name
  and version from the handshake, and a random session id that lives only in that process's memory.
- Search text, paths, ids and every other argument never leave the machine. Neither does anything about the machine.
- `BC_OBSERVATORY_TELEMETRY=0` or `DO_NOT_TRACK=1` turns it off; so do `CI`, `BC_OBSERVATORY_LOCAL` and a build
  without the connection string (every dev and test run).
- One stderr line at startup says it is on and how to turn it off. The npm README, the plugin README and the MCP page
  carry a privacy notice. The page's "Nothing is sent anywhere" (`site/src/lib/mcp.ts:97`) is no longer true and goes.
- The owner reads the counts in the Azure portal with the KQL of section 4.5.

## 2. Reader- and agent-facing behaviour, after

**Agents see nothing new.** Tool answers, descriptions and `INSTRUCTIONS` (`server.ts:638-648`) are unchanged. A
telemetry failure never changes an answer, never delays one, never logs anything.

**Startup, stderr, only when telemetry is on**, verbatim:

> bc-observatory: counts tool calls (tool name, outcome, duration, client name; never your questions or anything about
> this machine) in Azure Application Insights, West Europe, kept 90 days. Turn off: BC_OBSERVATORY_TELEMETRY=0 or
> DO_NOT_TRACK=1. https://waldo1001.github.io/waldo.BCObservatory/mcp/#privacy

The URL is built from `SITE`. MCP clients write stderr to their logs, not into the chat.

**Privacy notice**, the same text in three places: a `## Privacy and usage counts` section in `packages/mcp/README.md`
(after "Using this server", `:15`), a short section in `plugin/README.md` that links to it, and a `## Privacy` block
(`id="privacy"`) on the MCP page, in `site/src/pages/mcp/index.astro` after "How it answers" (`:66`) and in the markdown
twin built by `site/src/lib/mcp.ts` (`:96-97`). Verbatim:

> **Privacy and usage counts.** The `bc-observatory` server counts its own use so its author knows which tools people
> use. Each tool call sends one event to Azure Application Insights (West Europe): the tool name, whether it answered,
> found nothing or failed, how long it took, the server version, the name and version your MCP client reports (for
> example `claude-code 2.1.4`), and a random session id that exists only while the server runs and is never written to
> disk. It never sends your questions, paths, object ids or any other argument, and nothing about your machine: no
> hostname, user name, operating system or file path. Your IP address reaches Microsoft's ingestion endpoint, as with
> any HTTPS request; the server tells Application Insights not to derive a location from it, and Application Insights
> does not store it. Events are kept 90 days, then deleted.
>
> Controller: Eric Wauters (waldo), contact through [GitHub issues](<repo>/issues). Purpose: knowing which tools are
> used, to decide what to build next. Legal basis: legitimate interest (GDPR Art. 6(1)(f)). Processor: Microsoft
> (Azure, EU). No event can be tied to a person, so requests to see or erase "your" events cannot be matched (Art. 11).
> You can object at any time by turning it off: `BC_OBSERVATORY_TELEMETRY=0` or `DO_NOT_TRACK=1` in the server's
> environment. It is also off in CI and when the server reads a local checkout (`BC_OBSERVATORY_LOCAL`).

`site/src/lib/mcp.ts:97` drops "Nothing is sent anywhere: `feedback` only returns a link." and ends with "Apart from
the usage counts below, nothing is sent anywhere: `feedback` only returns a link." The `bc_feedback` lines
(`server.ts:674`, `site/src/lib/mcp.ts:34`) stay: they are about that tool.

## 3. Decisions

**D110 (draft).** The stdio MCP counts its tool calls in the Application Insights resource BC Telemetry Buddy uses,
one `Obs.ToolCall` event per call, sent with `fetch` to the ingestion endpoint (no SDK, no new dependency). The event
carries tool, outcome, duration, MCP version, client name and version, and a per-process random session id held in
memory only; no argument, no device data, `ai.location.ip` set to `0.0.0.0`. It is on by default in a published build
and off with `BC_OBSERVATORY_TELEMETRY=0`, `DO_NOT_TRACK=1`, `CI`, `BC_OBSERVATORY_LOCAL`, or no connection string. The
connection string is injected at bundle time by esbuild `define` from the repository secret `AI_CONNECTION_STRING` in
`publish-mcp.yml`; the source and the repository never hold it. Retention follows the resource (90 days). A privacy
notice in the READMEs and on the MCP page names controller, purpose, basis, data, processor, retention and the off
switch; one stderr line at startup points to it.

Rejected:
- **A persisted installation ID** (Buddy's way). It would count unique installs, but writing an identifier to the
  user's device needs prior consent under the ePrivacy Directive Art. 5(3), which makes the whole feature opt-in. The
  owner picked the per-process id (2026-10-24).
- **No id at all.** Loses calls per session, the one number that says whether people use it in earnest.
- **The `applicationinsights` SDK.** It pulls the OpenTelemetry stack into a server that ships two dependencies (MCP
  SDK, zod), auto-collects by default, and sets `cloud_RoleInstance` from the host. One POST does the job.
- **Buddy's event names (`Mcp.ToolCompleted`, `Mcp.ToolFailed`).** Buddy's dashboard reads exactly those
  (`waldo.BCTelemetryBuddy.Usage/dashboard/sync/queries.ts:20-21,83`); the Observatory's calls would show up as Buddy's.
- **A separate Application Insights resource.** Cleaner separation, but a second resource, secret, budget and alert set
  to run. The owner chose the shared one; `cloud_RoleName` keeps the two apart (section 9, risk 2).
- **Opt-in.** GDPR allows opt-out on legitimate interest for data this minimal; opt-in would give too few events to
  count. Section 9, risk 1 records the stricter reading.
- **Telemetry in `bc_status` output.** The owner picked README plus stderr; no agent-facing change.
- **Batching with a flush on exit.** stdio servers are killed, not closed; a buffer loses its tail. One request per
  call, fire-and-forget, is simpler and loses at most the request in flight.

## 4. Contract

### 4.1 `packages/mcp/src/telemetry.ts` (new)

```ts
/** D110: one Obs.ToolCall event per tool call to Application Insights; nothing about the user or the machine. */
export type Outcome = "ok" | "nomatch" | "notfound" | "error";
export interface ToolCall { tool: string; outcome: Outcome; ms: number }
export interface Client { name?: string; version?: string }

/** The connection string parsed, or null: absent, empty or malformed means off. */
export function parseConnection(cs: string | undefined): { iKey: string; endpoint: string } | null;
/** Off when any switch says so; reasons are for the tests, not printed. */
export function telemetryEnabled(env: NodeJS.ProcessEnv, cs: string | undefined): boolean;
/** The envelope for one call; pure, so the tests check it field by field. */
export function envelope(c: ToolCall, ctx: { iKey: string; session: string; version: string; client: Client; now: Date }): object;
/** Fire-and-forget POST; resolves always, never throws, at most MAX_EVENTS per process. */
export function createTelemetry(opts: { env: NodeJS.ProcessEnv; connection: string | undefined; version: string;
  getClient: () => Client; fetchImpl?: typeof fetch }): { enabled: boolean; track(c: ToolCall): void; notice(site: string): string | null };
```

Rules:
- `parseConnection`: `InstrumentationKey=<guid>;IngestionEndpoint=https://...;...`, keys case-insensitive. The
  endpoint gets a trailing `/`; without `IngestionEndpoint` the default is `https://dc.services.visualstudio.com/`.
  No `InstrumentationKey`, or one that is not a GUID, gives `null`.
- `telemetryEnabled` is false when `BC_OBSERVATORY_TELEMETRY` is `0`, `false`, `off` or `no` (any case), when
  `DO_NOT_TRACK` is set and not `0` or empty, when `CI` is set and not `false` or empty, when `BC_OBSERVATORY_LOCAL` is
  set, or when `parseConnection` gives `null`. Otherwise true.
- Session: `crypto.randomUUID()` once per `createTelemetry`, never written anywhere.
- `client.name` and `client.version`: lower-cased, trimmed, characters outside `[a-z0-9._@/ -]` dropped, cut to 40.
  Missing means `unknown`. The name comes from the MCP `initialize` request (`server.server.getClientVersion()` of the
  SDK's `McpServer`), which the client sends to this server anyway.
- `track`: when disabled, returns. Otherwise counts; beyond `MAX_EVENTS = 1000` per process, returns. POSTs
  `JSON.stringify([envelope])` to `<endpoint>v2/track` with `content-type: application/json`, `AbortSignal.timeout(3000)`,
  not awaited; `.catch(() => {})`. No retry, no queue, no disk cache, no log line.
- `notice(site)`: the stderr text of section 2 when enabled, `null` otherwise.
- The module reads no `os.*`, no `process.platform`, no `process.version`, no path, no hostname: device data is out by
  construction, and a test greps for it (5, test 9).

### 4.2 The envelope (one example record)

```json
[{
  "name": "Microsoft.ApplicationInsights.Event",
  "time": "2026-11-02T09:14:03.120Z",
  "iKey": "00000000-0000-0000-0000-000000000000",
  "tags": {
    "ai.cloud.role": "bc-observatory-mcp",
    "ai.cloud.roleInstance": "obs",
    "ai.session.id": "5b0d1f7e-2c1a-4f53-9a0e-1d8f6f2b7c44",
    "ai.application.ver": "0.11.0",
    "ai.location.ip": "0.0.0.0",
    "ai.internal.sdkVersion": "bc-observatory-mcp:0.11.0"
  },
  "data": { "baseType": "EventData", "baseData": { "ver": 2, "name": "Obs.ToolCall",
    "properties": { "tool": "bc_search", "outcome": "ok", "client": "claude-code", "clientVersion": "2.1.4", "mcpVersion": "0.11.0" },
    "measurements": { "ms": 412 } } }
}]
```

`ai.cloud.roleInstance` is the constant `obs`, so the ingestion side never fills it from anything of the user's.
`ai.location.ip` `0.0.0.0` asks the service not to geolocate the sender (verification 7, check 4 confirms it on the
real resource; section 9, risk 3).

### 4.3 `server.ts` changes

- Import `createTelemetry`. Declare `declare const __BCOBS_AI__: string | undefined;` and read the string as
  `typeof __BCOBS_AI__ === "string" ? __BCOBS_AI__ : undefined` (tsx runs have no define).
- `createServer()` (`:653`) creates the telemetry with `getClient: () => server.server.getClientVersion() ?? {}` and
  passes a `track` to `answer`.
- `answer(fn, stamped)` (`:619-633`) takes the tool name: `answer("bc_search", toolSearch)`. It times the call with
  `performance.now()` and calls `track` once per call, after the answer is built (`track` cannot throw):
  - `ok`: `fn` returned and its text does not contain `NO_MATCH` (`:56`);
  - `nomatch`: the text contains `NO_MATCH`;
  - `notfound`: the `missing !== null` branch (`:625`);
  - `error`: the `isError` branch (`:630`).
- `isMain()` block (`:686-688`): after `connect`, `const n = telemetry.notice(SITE); if (n) process.stderr.write(n + "\n");`.
  The telemetry object is created once at module level so the notice and the tools share one session.
- Every one of the eleven `registerTool` calls (`:655-677`) passes its own name to `answer`; a test (5, test 8) checks
  that the name passed equals the registered name.

### 4.4 Build and publish

- `packages/mcp/build.ts` (`:14-19`): `define: { __BCOBS_AI__: JSON.stringify(process.env.AI_CONNECTION_STRING ?? "") }`.
- `.github/workflows/publish-mcp.yml`: the build step (`run: npm run build --workspace=bc-observatory`) gets
  `env: AI_CONNECTION_STRING: ${{ secrets.AI_CONNECTION_STRING }}`. No other step sees the secret. `pr-validate.yml` and
  local builds have no secret, so their bundles carry `""` and stay off.
- Owner, once: add the repository secret `AI_CONNECTION_STRING` in waldo1001/waldo.BCObservatory with the value of
  the same secret in waldo.BCTelemetryBuddy (`gh secret set AI_CONNECTION_STRING -R waldo1001/waldo.BCObservatory`).
  Rotation follows Buddy's procedure (`Instructions/2. Refactored/Telemetry-Design-and-Implementation.md`, section 1.2,
  "Connection String Rotation Procedure"): set the new value in both repositories, publish both.
- Release: MCP 0.11.0 through the `publish-mcp` workflow dispatch, `gh workflow run publish-mcp.yml --ref main` (D40).
  The plugin needs no new version for the code (`plugin/.mcp.json` runs `bc-observatory@latest`); it bumps to 0.7.0
  because its README changes and states the MCP version.

### 4.5 Reading the counts (Azure portal, Logs)

```kusto
// calls and sessions per day
customEvents | where timestamp > ago(30d) and name == "Obs.ToolCall"
| summarize calls = count(), sessions = dcount(session_Id) by bin(timestamp, 1d) | order by timestamp asc
// per tool, with failure and no-match rates
customEvents | where timestamp > ago(30d) and name == "Obs.ToolCall"
| extend tool = tostring(customDimensions.tool), outcome = tostring(customDimensions.outcome)
| summarize calls = count(), nomatch = countif(outcome == "nomatch"), errors = countif(outcome == "error"),
    p50ms = percentile(todouble(customMeasurements.ms), 50) by tool | order by calls desc
// by client
customEvents | where timestamp > ago(30d) and name == "Obs.ToolCall"
| summarize sessions = dcount(session_Id) by client = tostring(customDimensions.client) | order by sessions desc
```

These go into `docs/RUNBOOK.md` under a new heading "Usage counts (D110)".

## 5. Test plan (write first)

New file `tests/unit/mcp-telemetry.test.ts`; additions to `tests/unit/mcp.test.ts` and `tests/unit/mcp-build.test.ts`.
All network goes through an injected `fetchImpl` that records calls; no test reaches Azure.

1. `parseConnection`: a full Buddy-style string gives `{ iKey, endpoint }` with a trailing `/`; keys in lower case
   work; no `IngestionEndpoint` gives the default endpoint; `undefined`, `""`, `"InstrumentationKey=nope"` give `null`.
2. `telemetryEnabled` with a valid string: `{}` true; `BC_OBSERVATORY_TELEMETRY` `0`, `false`, `OFF`, `no` false and
   `1` true; `DO_NOT_TRACK` `1` and `true` false, `0` and `""` true; `CI` `true` false, `false` true;
   `BC_OBSERVATORY_LOCAL=/x` false. With `undefined` connection: false whatever the env.
3. `envelope`: the record of 4.2 for a fixed `now`, session and client, compared with `deepEqual`; `ai.location.ip` is
   `0.0.0.0`; `ai.cloud.roleInstance` is `obs`; `properties` has exactly the five keys of 4.2.
4. Client sanitising: `{ name: "Claude-Code\n<script>", version: undefined }` gives `client` `claude-codescript`,
   `clientVersion` `unknown`; a 100-character name is cut to 40.
5. `track` when disabled makes no fetch; when enabled makes one POST per call to `<endpoint>v2/track` with a JSON array
   of one envelope; the 1001st call makes no fetch.
6. A `fetchImpl` that rejects, one that throws synchronously and one that never resolves: `track` returns without
   throwing, and the tool answer of test 7 is unchanged.
7. Through `answer` (exported for the test, or via `createServer` with an injected telemetry): a search that finds a
   hit records `ok`; a query with no hit records `nomatch`; `bc_cat` on a missing path records `notfound`; a reader that
   throws records `error`; `ms` is a finite number of at least 0. The answer texts equal those without telemetry.
8. Every tool registered by `createServer()` passes its registered name to `answer` (list the tools from the server and
   the names `track` received after calling each once with minimal valid input; or a source check that each
   `registerTool("<n>", ...)` line contains `answer("<n>"`).
9. Privacy by construction: `packages/mcp/src/telemetry.ts` does not match `/\bos\b|hostname|homedir|userInfo|
   process\.(platform|version|arch|cwd)|argv|readFileSync|writeFileSync/`, and the properties sent in tests 5 and 7
   never contain the query string used ("Sales Header", "t36").
10. `notice(SITE)` equals section 2's text with the site URL when enabled and is `null` when disabled.
11. `mcp.test.ts`: the stdio server started by the existing harness (`:136`, which runs `src/server.ts` under tsx with
    `BC_OBSERVATORY_LOCAL`) writes no telemetry notice to stderr.
12. `mcp-build.test.ts`: a bundle built without `AI_CONNECTION_STRING` contains neither `__BCOBS_AI__` nor
    `InstrumentationKey=`; a bundle built with `AI_CONNECTION_STRING=InstrumentationKey=00000000-0000-0000-0000-
    000000000000;IngestionEndpoint=https://example.test/` contains `https://example.test/`. Neither bundle imports
    `applicationinsights`.
13. Site: the MCP page markdown (`site/src/lib/mcp.ts`) contains `## Privacy` and `BC_OBSERVATORY_TELEMETRY=0` and no
    longer contains "Nothing is sent anywhere: `feedback`"; `packages/mcp/README.md` has the notice heading.

## 6. Tasks

One phase; it ships as one PR and one MCP release. No content is rewritten; the site rebuild changes only the MCP page.

1. Tests of section 5 (red).
2. `packages/mcp/src/telemetry.ts` (4.1, 4.2).
3. `server.ts`: `answer` with tool names and outcome, telemetry at module level, notice after connect (4.3).
4. `build.ts` define; `publish-mcp.yml` secret on the build step (4.4).
5. Privacy text: `packages/mcp/README.md`, `plugin/README.md`, `site/src/pages/mcp/index.astro`,
   `site/src/lib/mcp.ts:97` (section 2).
6. `docs/RUNBOOK.md`: "Usage counts (D110)" with the KQL of 4.5, the secret, rotation, and how to switch it off for the
   whole user base in an emergency (publish with the secret removed: the bundle then carries `""`).
7. Version bump. MCP 0.10.0 to 0.11.0 in `packages/mcp/package.json:3`, `packages/mcp/src/server.ts:43`,
   `plugin/README.md:3`. Plugin 0.6.0 to 0.7.0 in `plugin/.claude-plugin/plugin.json:3`,
   `.claude-plugin/marketplace.json:9`, `plugin/README.md:3`. (Found with `git grep -n '0\.10\.0' -- ':!package-lock.json'
   ':!docs/'` and the same for `0\.6\.0`; re-run both before the commit, other branches may have bumped.)
8. Ship-time docs (section 12), then the owner sets the secret and dispatches `publish-mcp` (section 7, steps 5-7).

## 7. Verification

1. `npm run typecheck` and `npx tsx --test tests/unit/mcp-telemetry.test.ts tests/unit/mcp.test.ts
   tests/unit/mcp-build.test.ts tests/unit/mcp-sections.test.ts` green; then `npm test`.
2. Site build with Node 22 (`PATH=~/.nvm/versions/node/v22*/bin:$PATH npm run build --workspace=site`): the MCP page
   and `mcp.md` show the privacy block; `grep -c "Nothing is sent anywhere: " site/dist/mcp.md` is 0.
3. Local bundle with a fake string, against a local catcher: `AI_CONNECTION_STRING='InstrumentationKey=00000000-0000-
   0000-0000-000000000000;IngestionEndpoint=http://127.0.0.1:8787/' npx tsx packages/mcp/build.ts /tmp/obs.js`, run a
   one-line `node -e` HTTP server on 8787 that prints bodies, drive `/tmp/obs.js` over stdio with one `bc_search
   {query:"Sales Header"}`: one body arrives, `tool` is `bc_search`, the body does not contain `Sales Header`, stderr
   shows the notice. With `DO_NOT_TRACK=1` no body and no notice.
4. After the owner's publish of 0.11.0 (operator steps, not the coder's): run `npx -y bc-observatory@0.11.0` from a
   client once, then in the portal `customEvents | where name == "Obs.ToolCall" | take 5`: the event is there,
   `client_IP` is `0.0.0.0`, `client_City` and `client_CountryOrRegion` are empty, `cloud_RoleInstance` is `obs`.
   If the location fields are filled, that is risk 3: stop and decide before announcing.
5. Buddy's dashboard numbers for the day before and after the publish: unchanged by the Observatory (risk 2).
6. The resource's data retention reads 90 days (portal, Application Insights > Usage and estimated costs > Data
   retention, or the workspace's retention).

Operator steps (owner): 5. set the secret (4.4); 6. add `| where cloud_RoleName != "bc-observatory-mcp"` to the
Buddy dashboard queries that read all `customEvents` (risk 2) before the publish; 7. `gh workflow run
publish-mcp.yml --ref main`, then checks 4 to 6.

## 8. Later, not in this spec

- The hosted server of D105: its spec plans its own log line per call (`docs/specs/mcp-in-claude-chat.md:139,270`).
  When it is built, it should send the same `Obs.ToolCall` with `client` `hosted:<name>` instead of a second scheme,
  and its notice (`:136-140`) must name it.
- An Observatory view in the Buddy dashboard (`waldo.BCTelemetryBuddy.Usage/dashboard`), another repository.
- Counting index downloads or MCP starts (an `Obs.Start` event): not needed while sessions come from tool calls.
- A per-call "hits returned" measurement: useful for search quality, but the `nomatch` outcome covers the main case.

## 9. Risks and open questions

1. **ePrivacy Art. 5(3) read strictly.** The EDPB's Guidelines 2/2023 read "gaining access to information stored in
   terminal equipment" broadly, including software that makes a device send data. On that reading even this ping
   needs consent. The spec keeps the risk small (no device data, nothing stored, only data the server itself produces
   or the client already sent to it) but cannot remove it. Default: opt-out as the owner decided; the owner checks with
   counsel if the Observatory is ever offered commercially. This is not legal advice.
2. **Buddy's dashboard counts all `customEvents`.** Its overview queries have no name or role filter
   (`queries.ts:14-21` and three more), and `UniqueUsers` is `dcount(cloud_RoleInstance)`. After the publish every
   Observatory session would add calls, and the constant `obs` would add one "user". Default: the owner adds the
   role filter before the publish (section 7, operator step 6); the coder writes that step in RUNBOOK and does not touch
   the other repository.
3. **`ai.location.ip` `0.0.0.0` might not stop geolocation.** Application Insights masks the stored IP by default but
   derives city and country from the sender unless told otherwise. Default: ship with the tag, check on the real
   resource (section 7, check 4); if location is still filled, the owner turns on the resource's IP and location
   masking setting or accepts country level, and the notice is corrected before anyone is told.
4. **The connection string is in the published bundle.** Anyone can read it and send fake events. Same trade Buddy
   made (write-only key); Buddy's budget and spike alerts on the shared resource cover it. Default: accept.
5. **Corporate networks that block `*.applicationinsights.azure.com`.** The POST fails silently after at most 3 s,
   off the answer path. Default: accept.
6. **Controller name.** The notice names "Eric Wauters (waldo)". Default: that text; the owner corrects it in review
   if the controller should be a company.
7. **Numbers.** D110 and M47 were reserved after `git fetch` against origin/main at `fdbc6da8af` and every worktree on
   2026-10-24 (highest found: D109, M46).

## 10. Files

New: `packages/mcp/src/telemetry.ts`, `tests/unit/mcp-telemetry.test.ts`.
Changed: `packages/mcp/src/server.ts`, `packages/mcp/build.ts`, `packages/mcp/package.json`, `packages/mcp/README.md`,
`.github/workflows/publish-mcp.yml`, `plugin/README.md`, `plugin/.claude-plugin/plugin.json`,
`.claude-plugin/marketplace.json`, `site/src/pages/mcp/index.astro`, `site/src/lib/mcp.ts`,
`tests/unit/mcp.test.ts`, `tests/unit/mcp-build.test.ts`, `docs/RUNBOOK.md`, `docs/DECISIONS.md`, `docs/PLAN.md`,
`docs/HANDOFF.md`, this spec.

## 11. Definition of Done

- [ ] Tests 1-13 of section 5 exist and pass; `npm run typecheck` and `npm test` green.
- [ ] `packages/mcp/src/telemetry.ts` has no dependency beyond `node:crypto` and global `fetch`; `packages/mcp/
      package.json` dependencies unchanged apart from the version.
- [ ] A local build without `AI_CONNECTION_STRING` sends nothing and prints no notice; with a fake string and a local
      catcher it sends one event per call and never the query text (section 7, check 3).
- [ ] The privacy notice of section 2 is in `packages/mcp/README.md`, linked from `plugin/README.md`, and on the MCP
      page (HTML and `mcp.md`) under `#privacy`; "Nothing is sent anywhere: `feedback`" is gone.
- [ ] `publish-mcp.yml` passes `AI_CONNECTION_STRING` to the build step only.
- [ ] RUNBOOK has "Usage counts (D110)" with the KQL, the secret, rotation, the emergency off and the Buddy dashboard
      filter step.
- [ ] MCP 0.11.0 and plugin 0.7.0 in every place listed in task 7, and no other place holds 0.10.0 or 0.6.0.
- [ ] D110 appended to docs/DECISIONS.md; PLAN M47 marked shipped; HANDOFF entry moved from "Open specs" to "Where
      things stand"; section 12 "Built, deviations" inserted (this section kept as 13, marked applied) and status
      implemented in the frontmatter and the body. A League build leaves the spec alone and writes section 12 and the
      status lines into docs/built/mcp-usage-telemetry.md; the PR's review moves them in (sdd-build section 4,
      sdd-review section 6).

## 12. Proposed edits to other files (not applied)

**`docs/DECISIONS.md`**, append:

> - **D110 The MCP counts its tool calls, GDPR-minimal.** The stdio server sends one `Obs.ToolCall` event per tool call
>   to the Application Insights resource BC Telemetry Buddy uses (West Europe, 90 days), with `fetch` and no SDK: tool,
>   outcome (`ok`, `nomatch`, `notfound`, `error`), duration, MCP version, client name and version from the handshake,
>   and a random session id held in memory only. No argument, no device data, `ai.location.ip` `0.0.0.0`,
>   `cloud_RoleName` `bc-observatory-mcp`. On in a published build; off with `BC_OBSERVATORY_TELEMETRY=0`,
>   `DO_NOT_TRACK=1`, `CI`, `BC_OBSERVATORY_LOCAL` or no connection string. The string comes from the secret
>   `AI_CONNECTION_STRING` through esbuild `define` in `publish-mcp`. A privacy notice (README, plugin README, MCP page
>   `#privacy`) and one stderr line at startup. Basis: legitimate interest, opt-out. Rejected: a persisted install id
>   (ePrivacy consent, so opt-in), the SDK (dependencies, host data), Buddy's event names (its dashboard reads them), a
>   second resource, opt-in. Spec `docs/specs/mcp-usage-telemetry.md`. MCP 0.11.0, plugin 0.7.0.

**`docs/PLAN.md`** section 5, before the `v0.2+` row:

> | **M47 MCP usage counts** | one Application Insights event per MCP tool call, opt-out, privacy notice, MCP 0.11.0 (`docs/specs/mcp-usage-telemetry.md`, D110, proposed) | S | none (no LLM) |

**`docs/HANDOFF.md`**, "Open specs, not yet implemented": the entry this spec session adds (already applied by the
spec commit); at ship time it moves to "Where things stand".
