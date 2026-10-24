import { test } from "node:test";
import assert from "node:assert/strict";
import { chmodSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { createTelemetry, envelope, parseConnection, telemetryEnabled, type ToolCall } from "../../packages/mcp/src/telemetry.js";

const root = new URL("../../", import.meta.url);
const read = (p: string) => readFileSync(new URL(p, root), "utf8");
const IKEY = "00000000-0000-0000-0000-000000000000";
const CS = `InstrumentationKey=${IKEY};IngestionEndpoint=https://westeurope-5.in.applicationinsights.azure.com/;LiveEndpoint=https://westeurope.livediagnostics.monitor.azure.com/`;
const SITE = "https://waldo1001.github.io/waldo.BCObservatory/";

/** A fetch that records what it was asked to send. */
function recorder() {
  const calls: { url: string; body: unknown[] }[] = [];
  const fetchImpl = (async (url: string, init: RequestInit) => { calls.push({ url, body: JSON.parse(String(init.body)) }); return new Response(null, { status: 200 }); }) as unknown as typeof fetch;
  return { calls, fetchImpl };
}
const on = (fetchImpl: typeof fetch, client = { name: "claude-code", version: "2.1.4" }) =>
  createTelemetry({ env: {}, connection: CS, version: "0.11.0", getClient: () => client, fetchImpl });

test("D110 test 1: parseConnection reads Buddy's connection string and refuses anything else", () => {
  assert.deepEqual(parseConnection(CS), { iKey: IKEY, endpoint: "https://westeurope-5.in.applicationinsights.azure.com/" });
  assert.deepEqual(parseConnection(`instrumentationkey=${IKEY};ingestionendpoint=https://x.test`), { iKey: IKEY, endpoint: "https://x.test/" });
  assert.deepEqual(parseConnection(`InstrumentationKey=${IKEY}`), { iKey: IKEY, endpoint: "https://dc.services.visualstudio.com/" });
  assert.equal(parseConnection(undefined), null);
  assert.equal(parseConnection(""), null);
  assert.equal(parseConnection("InstrumentationKey=nope"), null);
});

test("D110 test 2: telemetryEnabled honours every off switch", () => {
  assert.equal(telemetryEnabled({}, CS), true);
  for (const v of ["0", "false", "OFF", "no"]) assert.equal(telemetryEnabled({ BC_OBSERVATORY_TELEMETRY: v }, CS), false, v);
  assert.equal(telemetryEnabled({ BC_OBSERVATORY_TELEMETRY: "1" }, CS), true);
  for (const v of ["1", "true"]) assert.equal(telemetryEnabled({ DO_NOT_TRACK: v }, CS), false, `DO_NOT_TRACK=${v}`);
  for (const v of ["0", ""]) assert.equal(telemetryEnabled({ DO_NOT_TRACK: v }, CS), true, `DO_NOT_TRACK=${v}`);
  assert.equal(telemetryEnabled({ CI: "true" }, CS), false);
  assert.equal(telemetryEnabled({ CI: "false" }, CS), true);
  assert.equal(telemetryEnabled({ BC_OBSERVATORY_LOCAL: "/x" }, CS), false);
  assert.equal(telemetryEnabled({}, undefined), false);
  assert.equal(telemetryEnabled({ BC_OBSERVATORY_TELEMETRY: "1" }, ""), false);
});

test("D110 test 3, D111: the envelope carries the install id as user id and no location tag", () => {
  const e = envelope({ tool: "bc_search", outcome: "ok", ms: 412 }, { iKey: IKEY, session: "5b0d1f7e-2c1a-4f53-9a0e-1d8f6f2b7c44", user: "0d2f6c1a-9b3e-4c7d-8e5f-1a2b3c4d5e6f", version: "0.11.0", client: { name: "claude-code", version: "2.1.4" }, now: new Date("2026-11-02T09:14:03.120Z") });
  assert.deepEqual(e, {
    name: "Microsoft.ApplicationInsights.Event",
    time: "2026-11-02T09:14:03.120Z",
    iKey: IKEY,
    tags: {
      "ai.cloud.role": "bc-observatory-mcp",
      "ai.cloud.roleInstance": "obs",
      "ai.session.id": "5b0d1f7e-2c1a-4f53-9a0e-1d8f6f2b7c44",
      "ai.user.id": "0d2f6c1a-9b3e-4c7d-8e5f-1a2b3c4d5e6f",
      "ai.application.ver": "0.11.0",
      "ai.internal.sdkVersion": "bc-observatory-mcp:0.11.0",
    },
    data: { baseType: "EventData", baseData: { ver: 2, name: "Obs.ToolCall",
      properties: { tool: "bc_search", outcome: "ok", client: "claude-code", clientVersion: "2.1.4", mcpVersion: "0.11.0" },
      measurements: { ms: 412 } } },
  });
});

test("D111: without an install id the envelope has no user tag", () => {
  const e = envelope({ tool: "bc_ls", outcome: "ok", ms: 1 }, { iKey: IKEY, session: "s", version: "0.11.0", client: {}, now: new Date(0) }) as { tags: Record<string, string> };
  assert.equal("ai.user.id" in e.tags, false);
  assert.equal("ai.location.ip" in e.tags, false, "D111: Application Insights derives country and city");
});

test("D111: the install id is asked for only when telemetry is on, and travels with every event", () => {
  let asked = 0;
  const getInstallId = () => { asked++; return "0d2f6c1a-9b3e-4c7d-8e5f-1a2b3c4d5e6f"; };
  createTelemetry({ env: { DO_NOT_TRACK: "1" }, connection: CS, version: "0.12.0", getClient: () => ({}), getInstallId });
  createTelemetry({ env: {}, connection: undefined, version: "0.12.0", getClient: () => ({}), getInstallId });
  assert.equal(asked, 0, "off: no file is read or written");
  const r = recorder();
  const t = createTelemetry({ env: {}, connection: CS, version: "0.12.0", getClient: () => ({}), getInstallId, fetchImpl: r.fetchImpl });
  t.track({ tool: "bc_ls", outcome: "ok", ms: 1 });
  t.track({ tool: "bc_cat", outcome: "ok", ms: 1 });
  assert.equal(asked, 1, "read once per process");
  for (const c of r.calls) assert.equal((c.body[0] as { tags: Record<string, string> }).tags["ai.user.id"], "0d2f6c1a-9b3e-4c7d-8e5f-1a2b3c4d5e6f");
  const broken = createTelemetry({ env: {}, connection: CS, version: "0.12.0", getClient: () => ({}), getInstallId: () => { throw new Error("EACCES"); }, fetchImpl: r.fetchImpl });
  assert.doesNotThrow(() => broken.track({ tool: "bc_ls", outcome: "ok", ms: 1 }));
});

test("D111: installId creates a UUID file once, reuses it, replaces junk, and gives up quietly", async () => {
  const { installId } = await import("../../packages/mcp/src/server.js");
  const dir = mkdtempSync(join(tmpdir(), "bcobs-install-"));
  const first = installId(dir);
  assert.match(first ?? "", /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/);
  assert.equal(readFileSync(join(dir, "install-id"), "utf8").trim(), first);
  assert.equal(installId(dir), first, "reused");
  writeFileSync(join(dir, "install-id"), "not a uuid\n");
  const second = installId(dir);
  assert.notEqual(second, first);
  assert.match(second ?? "", /^[0-9a-f-]{36}$/);
  const locked = mkdtempSync(join(tmpdir(), "bcobs-install-ro-"));
  chmodSync(locked, 0o500);
  try { assert.equal(installId(join(locked, "sub")), undefined); } finally { chmodSync(locked, 0o700); }
});

test("D110 test 4: the client name and version are sanitised and cut to 40", () => {
  const ctx = { iKey: IKEY, session: "s", version: "0.11.0", now: new Date(0) };
  const props = (client: { name?: string; version?: string }) => (envelope({ tool: "bc_ls", outcome: "ok", ms: 1 }, { ...ctx, client }) as { data: { baseData: { properties: Record<string, string> } } }).data.baseData.properties;
  assert.equal(props({ name: "Claude-Code\n<script>" }).client, "claude-codescript");
  assert.equal(props({ name: "Claude-Code\n<script>" }).clientVersion, "unknown");
  assert.equal(props({}).client, "unknown");
  assert.equal(props({ name: "x".repeat(100) }).client.length, 40);
});

test("D110 test 5: track posts one envelope per call while enabled, none when off, none past 1000", () => {
  const off = recorder();
  const t0 = createTelemetry({ env: { DO_NOT_TRACK: "1" }, connection: CS, version: "0.11.0", getClient: () => ({}), fetchImpl: off.fetchImpl });
  assert.equal(t0.enabled, false);
  t0.track({ tool: "bc_search", outcome: "ok", ms: 3 });
  assert.equal(off.calls.length, 0);

  const r = recorder();
  const t = on(r.fetchImpl);
  assert.equal(t.enabled, true);
  t.track({ tool: "bc_search", outcome: "ok", ms: 3 });
  assert.equal(r.calls.length, 1);
  assert.equal(r.calls[0].url, "https://westeurope-5.in.applicationinsights.azure.com/v2/track");
  assert.equal(r.calls[0].body.length, 1);
  for (let i = 1; i < 1001; i++) t.track({ tool: "bc_ls", outcome: "ok", ms: 1 });
  assert.equal(r.calls.length, 1000, "the 1001st call sends nothing");
});

test("D110 test 6: a failing, throwing or hanging fetch never reaches the caller", () => {
  const rejecting = (async () => { throw new Error("offline"); }) as unknown as typeof fetch;
  const throwing = (() => { throw new Error("sync"); }) as unknown as typeof fetch;
  const hanging = (() => new Promise(() => {})) as unknown as typeof fetch;
  for (const f of [rejecting, throwing, hanging]) assert.doesNotThrow(() => on(f).track({ tool: "bc_cat", outcome: "error", ms: 9 }));
});

test("D110 test 7: answer records ok, nomatch, notfound and error, and the answer text does not change", async () => {
  process.env.BC_OBSERVATORY_LOCAL = mkdtempSync(join(tmpdir(), "bcobs-telemetry-")); // empty: stamp() gives "", no network
  const { answer, NO_MATCH } = await import("../../packages/mcp/src/server.js");
  const seen: ToolCall[] = [];
  const track = (c: ToolCall) => { seen.push(c); };
  const none = () => {};
  const cases: [string, () => string, string][] = [
    ["bc_search", () => "Table 18 \"Customer\"", "ok"],
    ["bc_search", () => `No pages match "zz".\n${NO_MATCH}`, "nomatch"],
    ["bc_cat", () => { throw new Error("no page at objects/table/99999"); }, "notfound"],
    ["bc_get_object", () => { throw new Error("HTTP 500 for x"); }, "error"],
  ];
  for (const [tool, fn, outcome] of cases) {
    const withTrack = await answer(tool, fn, false, track)({});
    const without = await answer(tool, fn, false, none)({});
    assert.deepEqual(withTrack, without, `${tool} ${outcome}: same answer`);
    const last = seen.at(-1)!;
    assert.equal(last.tool, tool);
    assert.equal(last.outcome, outcome);
    assert.ok(Number.isFinite(last.ms) && last.ms >= 0, `ms ${last.ms}`);
  }
  assert.equal(seen.length, cases.length, "one call each");
});

test("D110 test 8: every registerTool passes its own name to answer", () => {
  const src = read("packages/mcp/src/server.ts");
  const blocks = src.split(/(?=server\.registerTool\()/).slice(1);
  assert.equal(blocks.length, 11);
  for (const b of blocks) {
    const name = /^server\.registerTool\("(\w+)"/.exec(b)![1];
    assert.match(b, new RegExp(`answer\\("${name}"`), `${name} passes its name`);
  }
});

test("D110 test 9: telemetry.ts reads nothing about the machine and never sends the query", () => {
  const src = read("packages/mcp/src/telemetry.ts");
  assert.doesNotMatch(src, /\bos\b|hostname|homedir|userInfo|process\.(platform|version|arch|cwd)|argv|readFileSync|writeFileSync/);
  const r = recorder();
  const t = on(r.fetchImpl, { name: "smoke", version: "0" });
  t.track({ tool: "bc_search", outcome: "ok", ms: 5 });
  const sent = JSON.stringify(r.calls);
  for (const q of ["Sales Header", "t36"]) assert.ok(!sent.includes(q), q);
});

test("D110 test 10: the stderr notice when on, null when off", () => {
  const r = recorder();
  assert.equal(on(r.fetchImpl).notice(SITE),
    "bc-observatory: counts tool calls (tool name, outcome, duration, client name, a random install id from ~/.cache/bc-observatory/install-id, and the country and city of your IP address; never your questions or anything else about this machine) in Azure Application Insights, West Europe, kept 90 days. Turn off: BC_OBSERVATORY_TELEMETRY=0 or DO_NOT_TRACK=1. https://waldo1001.github.io/waldo.BCObservatory/mcp/#privacy");
  assert.equal(createTelemetry({ env: {}, connection: undefined, version: "0.11.0", getClient: () => ({}) }).notice(SITE), null);
});

test("D110 test 13: the privacy notice is in the READMEs and on the MCP page, and 'Nothing is sent anywhere' is gone", async () => {
  const { mcpMarkdown } = await import("../../site/src/lib/mcp.js");
  const md = mcpMarkdown({ server: "9.9.9", plugin: "8.8.8" }, "https://github.com/o/r", "https://example.test/x/");
  assert.match(md, /^## Privacy$/m);
  assert.match(md, /BC_OBSERVATORY_TELEMETRY=0/);
  assert.match(md, /install-id/, "D111: the notice names the install id");
  assert.match(md, /country, region and city/, "D111: the notice names the location");
  assert.doesNotMatch(md, /not to derive a location/);
  assert.doesNotMatch(md, /Nothing is sent anywhere: `feedback`/);
  const page = read("site/src/pages/mcp/index.astro");
  assert.match(page, /id="privacy"/);
  assert.doesNotMatch(page, /Nothing is sent anywhere: <code>/);
  assert.match(read("packages/mcp/README.md"), /^## Privacy and usage counts$/m);
  assert.match(read("plugin/README.md"), /BC_OBSERVATORY_TELEMETRY=0/);
  assert.match(read("plugin/README.md"), /install id/);
  for (const f of ["packages/mcp/README.md", "site/src/pages/mcp/index.astro"]) assert.match(read(f), /install-id/, f);
});
