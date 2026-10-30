/**
 * D110: one Obs.ToolCall event per tool call to Application Insights; nothing about the machine.
 * Plain fetch to the ingestion endpoint, no SDK. The tool name, outcome, duration, server version, the MCP client's
 * name and version, a random session id held in memory, and (D111) a random install id the server keeps in the cache
 * folder: never an argument, never device data. Application Insights derives country and city from the sender (D111).
 * D127: beside it, one Obs.Resource event per page an answer points to, unlinked: no session, user, client or location,
 * the time rounded down to the hour, the page an index id or "other" (the server's gate, never what was typed).
 */
import { randomUUID } from "node:crypto";

export type Outcome = "ok" | "nomatch" | "notfound" | "error";
export interface ToolCall { tool: string; outcome: Outcome; ms: number }
export interface Client { name?: string; version?: string }
export interface ResourceHit { tool: string; resource: string; rank: number }

export const MAX_EVENTS = 1000;
const DEFAULT_ENDPOINT = "https://dc.services.visualstudio.com/";
const GUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

/** The connection string parsed, or null: absent, empty or malformed means off. */
export function parseConnection(cs: string | undefined): { iKey: string; endpoint: string } | null {
  if (!cs) return null;
  const parts = new Map(cs.split(";").map((p) => p.split("=")).filter((kv) => kv.length >= 2)
    .map(([k, ...v]) => [k.trim().toLowerCase(), v.join("=").trim()] as const));
  const iKey = parts.get("instrumentationkey");
  if (!iKey || !GUID.test(iKey)) return null;
  const endpoint = (parts.get("ingestionendpoint") || DEFAULT_ENDPOINT).replace(/\/?$/, "/");
  return { iKey, endpoint };
}

const set = (v: string | undefined) => v !== undefined && v !== "";
/** Off when any switch says so. */
export function telemetryEnabled(env: NodeJS.ProcessEnv, cs: string | undefined): boolean {
  if (/^(0|false|off|no)$/i.test(env.BC_OBSERVATORY_TELEMETRY ?? "")) return false;
  if (set(env.DO_NOT_TRACK) && env.DO_NOT_TRACK !== "0") return false;
  if (set(env.CI) && env.CI !== "false") return false;
  if (set(env.BC_OBSERVATORY_LOCAL)) return false;
  return parseConnection(cs) !== null;
}

const clean = (s: string | undefined) => (s ?? "").toLowerCase().trim().replace(/[^a-z0-9._@/ -]/g, "").slice(0, 40) || "unknown";

/** The envelope for one call; pure, so the tests check it field by field. */
export function envelope(c: ToolCall, ctx: { iKey: string; session: string; user?: string; version: string; client: Client; now: Date }): object {
  return {
    name: "Microsoft.ApplicationInsights.Event",
    time: ctx.now.toISOString(),
    iKey: ctx.iKey,
    tags: {
      "ai.cloud.role": "bc-observatory-mcp",
      "ai.cloud.roleInstance": "obs",
      "ai.session.id": ctx.session,
      ...(ctx.user ? { "ai.user.id": ctx.user } : {}),
      "ai.application.ver": ctx.version,
      "ai.internal.sdkVersion": `bc-observatory-mcp:${ctx.version}`,
    },
    data: { baseType: "EventData", baseData: { ver: 2, name: "Obs.ToolCall",
      properties: { tool: c.tool, outcome: c.outcome, client: clean(ctx.client.name), clientVersion: clean(ctx.client.version), mcpVersion: ctx.version },
      measurements: { ms: Math.round(c.ms) } } },
  };
}

/** D127: the envelope for one page an answer pointed to; pure. Nothing links it to the user, the session or a place. */
export function resourceEnvelope(h: ResourceHit, ctx: { iKey: string; version: string; now: Date }): object {
  const hour = new Date(ctx.now);
  hour.setUTCMinutes(0, 0, 0);
  return {
    name: "Microsoft.ApplicationInsights.Event",
    time: hour.toISOString(),
    iKey: ctx.iKey,
    tags: {
      "ai.cloud.role": "bc-observatory-mcp",
      "ai.cloud.roleInstance": "obs",
      "ai.location.ip": "0.0.0.0",
      "ai.application.ver": ctx.version,
      "ai.internal.sdkVersion": `bc-observatory-mcp:${ctx.version}`,
    },
    data: { baseType: "EventData", baseData: { ver: 2, name: "Obs.Resource",
      properties: { tool: h.tool, resource: h.resource, mcpVersion: ctx.version },
      measurements: { rank: h.rank } } },
  };
}

/** Fire-and-forget POST; never throws, at most MAX_EVENTS per process. */
export function createTelemetry(opts: { env: NodeJS.ProcessEnv; connection: string | undefined; version: string;
  getClient: () => Client; getInstallId?: () => string | undefined; fetchImpl?: typeof fetch }) {
  const conn = parseConnection(opts.connection);
  const enabled = conn !== null && telemetryEnabled(opts.env, opts.connection);
  const session = randomUUID();
  // D111: read (or create) the install id only while counting is on; off means nothing touches the disk
  let user: string | undefined;
  if (enabled) { try { user = opts.getInstallId?.(); } catch { user = undefined; } }
  const send = opts.fetchImpl ?? fetch;
  let sent = 0;
  const post = (events: object[]) => {
    send(`${conn!.endpoint}v2/track`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(events), signal: AbortSignal.timeout(3000) })
      .catch(() => {});
  };
  return {
    enabled,
    track(c: ToolCall): void {
      if (!enabled || !conn || sent >= MAX_EVENTS) return;
      sent++;
      try {
        let client: Client = {};
        try { client = opts.getClient() ?? {}; } catch { /* no client info */ }
        post([envelope(c, { iKey: conn.iKey, session, user, version: opts.version, client, now: new Date() })]);
      } catch { /* telemetry never reaches the caller */ }
    },
    /** D127: the first three distinct pages of an ok answer, already through the server's gate; one POST, same budget. */
    resources(tool: string, outcome: Outcome, paths: string[]): void {
      if (!enabled || !conn || outcome !== "ok") return;
      try {
        const now = new Date();
        const events = [...new Set(paths)].slice(0, 3).map((resource, i) => ({ tool, resource, rank: i + 1 }))
          .slice(0, Math.max(0, MAX_EVENTS - sent)).map((h) => resourceEnvelope(h, { iKey: conn.iKey, version: opts.version, now }));
        if (!events.length) return;
        sent += events.length;
        post(events);
      } catch { /* telemetry never reaches the caller */ }
    },
    notice(site: string): string | null {
      return enabled ? `bc-observatory: counts tool calls (tool name, outcome, duration, client name, a random install id from ~/.cache/bc-observatory/install-id, and the country and city of your IP address) and which Observatory pages answers point to (without any id or location); never your questions or anything else about this machine. In Azure Application Insights, West Europe, kept 90 days. Turn off: BC_OBSERVATORY_TELEMETRY=0 or DO_NOT_TRACK=1. ${site}mcp/#privacy` : null;
    },
  };
}
