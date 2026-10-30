import { test } from "node:test";
import assert from "node:assert/strict";
import { chmodSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { createTelemetry, envelope, parseConnection, resourceEnvelope, telemetryEnabled, type ToolCall } from "../../packages/mcp/src/telemetry.js";

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
    "bc-observatory: counts tool calls (tool name, outcome, duration, client name, a random install id from ~/.cache/bc-observatory/install-id, and the country and city of your IP address) and which Observatory pages answers point to (without any id or location); never your questions or anything else about this machine. In Azure Application Insights, West Europe, kept 90 days. Turn off: BC_OBSERVATORY_TELEMETRY=0 or DO_NOT_TRACK=1. https://waldo1001.github.io/waldo.BCObservatory/mcp/#privacy");
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

// ------------------------------------------------------------------------------------------- D127 resource counts

type Env = { tags: Record<string, string>; time: string; data: { baseData: { name: string; properties: Record<string, string>; measurements: Record<string, number> } } };
const bodies = (r: ReturnType<typeof recorder>) => r.calls.flatMap((c) => c.body as Env[]);

test("D127 test 1: the resource envelope has no session, user, client or location, and its time is on the hour", () => {
  const e = resourceEnvelope({ tool: "bc_get_object", resource: "objects/table/36", rank: 1 }, { iKey: IKEY, version: "0.14.0", now: new Date("2026-10-30T14:37:12.345Z") });
  assert.deepEqual(e, {
    name: "Microsoft.ApplicationInsights.Event",
    time: "2026-10-30T14:00:00.000Z",
    iKey: IKEY,
    tags: {
      "ai.cloud.role": "bc-observatory-mcp",
      "ai.cloud.roleInstance": "obs",
      "ai.location.ip": "0.0.0.0",
      "ai.application.ver": "0.14.0",
      "ai.internal.sdkVersion": "bc-observatory-mcp:0.14.0",
    },
    data: { baseType: "EventData", baseData: { ver: 2, name: "Obs.Resource",
      properties: { tool: "bc_get_object", resource: "objects/table/36", mcpVersion: "0.14.0" },
      measurements: { rank: 1 } } },
  });
  const t = (e as Env).tags, props = (e as Env).data.baseData.properties;
  for (const k of ["ai.session.id", "ai.user.id"]) assert.equal(k in t, false, k);
  for (const k of ["client", "clientVersion"]) assert.equal(k in props, false, k);
});

test("D127 test 2: only an ok answer sends its resources", () => {
  const r = recorder();
  const t = on(r.fetchImpl);
  for (const o of ["nomatch", "notfound", "error"] as const) t.resources("bc_search", o, ["objects/table/36"]);
  assert.equal(r.calls.length, 0);
  t.resources("bc_search", "ok", ["objects/table/36"]);
  assert.equal(r.calls.length, 1);
  assert.equal(bodies(r)[0].data.baseData.name, "Obs.Resource");
  t.resources("bc_search", "ok", []);
  assert.equal(r.calls.length, 1, "no resources, no request");
});

test("D127 test 3: at most three resources, ranked, deduplicated, in one POST", () => {
  const r = recorder();
  on(r.fetchImpl).resources("bc_search", "ok", ["other", "objects/table/36", "other", "objects/table/37", "objects/table/38", "objects/table/39"]);
  assert.equal(r.calls.length, 1);
  assert.deepEqual(bodies(r).map((e) => [e.data.baseData.properties.resource, e.data.baseData.measurements.rank]),
    [["other", 1], ["objects/table/36", 2], ["objects/table/37", 3]]);
});

test("D127 test 4: resources share the 1,000-event budget with tool calls", () => {
  const r = recorder();
  const t = on(r.fetchImpl);
  for (let i = 0; i < 999; i++) t.track({ tool: "bc_ls", outcome: "ok", ms: 1 });
  t.resources("bc_search", "ok", ["objects/table/36", "objects/table/37", "objects/table/38"]);
  assert.equal(bodies(r).filter((e) => e.data.baseData.name === "Obs.Resource").length, 1);
  t.resources("bc_search", "ok", ["objects/table/36"]);
  t.track({ tool: "bc_ls", outcome: "ok", ms: 1 });
  assert.equal(bodies(r).length, 1000);
});

test("D127 test 5: every off switch stops the resource events too", () => {
  const envs: NodeJS.ProcessEnv[] = [{ BC_OBSERVATORY_TELEMETRY: "0" }, { DO_NOT_TRACK: "1" }, { CI: "true" }, { BC_OBSERVATORY_LOCAL: "/x" }];
  for (const env of envs) {
    const r = recorder();
    createTelemetry({ env, connection: CS, version: "0.14.0", getClient: () => ({}), fetchImpl: r.fetchImpl }).resources("bc_cat", "ok", ["objects/table/36"]);
    assert.equal(r.calls.length, 0, JSON.stringify(env));
  }
  const r = recorder();
  createTelemetry({ env: {}, connection: undefined, version: "0.14.0", getClient: () => ({}), fetchImpl: r.fetchImpl }).resources("bc_cat", "ok", ["objects/table/36"]);
  assert.equal(r.calls.length, 0, "no connection string");
});

test("D127 test 6: the notice names the page counts in all five places", async () => {
  assert.match(on(recorder().fetchImpl).notice(SITE)!, /which Observatory pages answers point to \(without any id or location\)/);
  const { mcpMarkdown } = await import("../../site/src/lib/mcp.js");
  const md = mcpMarkdown({ server: "9.9.9", plugin: "8.8.8" }, "https://github.com/o/r", "https://example.test/x/");
  for (const [f, text] of [["site/src/lib/mcp.ts", md], ...["packages/mcp/README.md", "plugin/README.md", "site/src/pages/mcp/index.astro"].map((f) => [f, read(f)])]) {
    assert.match(text, /not\s+who\s+looked\s+it\s+up/, f);
    assert.doesNotMatch(text, /never sends your questions, paths, object ids/, f);
  }
});

test("D127 test 7: resourceOf keeps a catalogue id and turns everything else into other", async () => {
  const { resourceOf } = await import("../../packages/mcp/src/server.js");
  const ids = new Set(["objects/table/36", "objects/codeunit/80#event-OnAfterPostSalesDoc", "https://learn.microsoft.com/x"]);
  const cases: [string, string][] = [
    ["objects/table/36", "objects/table/36"],
    ["/objects/table/36.md", "objects/table/36"],
    ["objects/table/36/", "objects/table/36"],
    ["objects/codeunit/80#event-OnAfterPostSalesDoc", "objects/codeunit/80#event-OnAfterPostSalesDoc"],
    ["objects/table/36#field-999", "objects/table/36"],
    ["https://learn.microsoft.com/x", "https://learn.microsoft.com/x"],
    ["customers/acme-nv", "other"],
    ["jan@acme.be", "other"],
    ["Sales Header for ACME NV", "other"],
    ["", "other"],
  ];
  for (const [path, want] of cases) assert.equal(resourceOf(path, ids), want, path);
});

test("D127 test 8a: answer passes a tool's resources through the gate with its outcome, and never what was typed", async () => {
  const { answer, pointTo, NO_MATCH } = await import("../../packages/mcp/src/server.js");
  const seen: [string, string, string[]][] = [];
  const resources = (tool: string, outcome: string, paths: string[]) => { seen.push([tool, outcome, paths]); };
  const none = () => {};
  await answer("bc_cat", () => { pointTo("Sales Header for ACME NV"); return "x"; }, false, none, resources)({});
  assert.deepEqual(seen.at(-1), ["bc_cat", "ok", ["other"]]);
  await answer("bc_search", () => { pointTo("objects/table/36"); return `nothing\n${NO_MATCH}`; }, false, none, resources)({});
  assert.deepEqual(seen.at(-1)?.slice(0, 2), ["bc_search", "nomatch"]);
  await answer("bc_cat", () => { pointTo("objects/table/36"); throw new Error("HTTP 500 for x"); }, false, none, resources)({});
  assert.deepEqual(seen.at(-1)?.slice(0, 2), ["bc_cat", "error"], "a throwing tool's outcome is error: telemetry.resources sends nothing for it (test 2)");
  await answer("bc_ls", () => "dirs", false, none, resources)({});
  assert.deepEqual(seen.at(-1), ["bc_ls", "ok", []], "a tool that points nowhere sends an empty list");
});
