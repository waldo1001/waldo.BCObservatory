/**
 * The one place that talks to a language model: `claude -p` on the owner's Claude subscription.
 * Ported from the release-wave pipeline with three fixes (PLAN section 8) and two safety nets.
 *
 * - No API backend and no API key, ever. The child gets an allowlisted environment, so ANTHROPIC_API_KEY,
 *   ANTHROPIC_BASE_URL and friends from the parent never reach it. The CLI's init event must report
 *   apiKeySource "none" (subscription OAuth), otherwise the call aborts the run with LlmInfraError.
 * - Never `--bare`: it reads only ANTHROPIC_API_KEY and ignores subscription OAuth.
 * - Fix 1, model attribution: the modelUsage entry with the most output tokens is the model that did the
 *   work. A family other than the requested one is recorded as meta.model_mismatch.
 * - Fix 2, no API backend (see above).
 * - Fix 3, cache privacy: <cache>/<stage>/<key>.json holds output, meta, input refs and hashes. Prompts are
 *   kept only with LLM_CACHE_DEBUG=1, because community prompts contain full text.
 * - The child runs in a neutral temp directory so no project CLAUDE.md is pulled into pipeline calls.
 *
 * - Metering (D17): every CLI call adds its envelope's total_cost_usd and per-model tokens to llmStats().
 *   setSpendLimit() caps the dollars this process may spend; once reached, complete() throws
 *   LlmBudgetExhausted before starting another call. Cache hits are free and never blocked.
 *
 * Cache key = sha256(promptVersion, model, system, prompt, schema); retries are free.
 * LLM_CACHE_ONLY=1 turns a cache miss into an error (CI, golden tests).
 */
import { spawn } from "node:child_process";
import { tmpdir } from "node:os";
import { resolve } from "node:path";
import AjvModule from "ajv/dist/2020.js";
import { models } from "./config.js";
import { ensureDir, exists, readJson, writeJson } from "./fsx.js";
import { logger } from "./log.js";
import { LLM_CACHE_DIR } from "./paths.js";
import { sha256 } from "./text.js";

const Ajv: any = (AjvModule as any).default ?? AjvModule;
const log = logger("llm");

export type Role = "facts" | "prose" | "review" | "smoke";
/** What a prompt was built from. Stored in the cache instead of the prompt text. */
export interface InputRef { kind: string; id: string; hash?: string; path?: string }
export interface LlmRequest {
  stage: string;                 // cache folder, e.g. "extract-video"
  promptVersion: string | number; // bump to invalidate the cache for a stage
  role: Role;                    // picks model, budget and timeout from config/models.json
  model?: string;                // explicit override of the role's model
  system: string;
  prompt: string;
  schema: Record<string, unknown>;
  inputs?: InputRef[];
  label?: string;                // for logs
}
export interface ModelUsageEntry {
  inputTokens?: number; outputTokens?: number; cacheReadInputTokens?: number; cacheCreationInputTokens?: number; costUSD?: number;
}
export interface LlmMeta {
  backend: "cli";
  requested_model: string;
  model: string;
  model_source: "modelUsage" | "init" | "requested";
  model_mismatch?: { expected: string; got: string };
  api_key_source: string | null;
  prompt_version: string;
  key: string;
  created_at: string;
  duration_ms: number;
  attempts: number;
  usage?: unknown;
  model_usage?: Record<string, ModelUsageEntry>;
  cost_usd?: number;
}
export interface LlmCacheEntry<T = unknown> {
  meta: LlmMeta;
  request: {
    stage: string; label?: string; role: Role; prompt_version: string; model: string; inputs: InputRef[];
    system_sha256: string; prompt_sha256: string; schema_sha256: string; prompt_chars: number;
    system?: string; prompt?: string; // only with LLM_CACHE_DEBUG=1
  };
  output: T;
}
export interface LlmResult<T> { output: T; cached: boolean; meta: LlmMeta }

/** Infra failures (CLI missing, not logged in, API-key auth, usage limit) abort the run instead of one item. */
export class LlmInfraError extends Error {
  constructor(message: string) { super(message); this.name = "LlmInfraError"; }
}

/** The run's spend allowance is used up: start no more LLM work tonight. Not an item failure, not an infra error. */
export class LlmBudgetExhausted extends Error {
  constructor(public readonly spent_usd: number, public readonly limit_usd: number) {
    super(`LLM spend allowance used up: $${spent_usd.toFixed(4)} of $${limit_usd.toFixed(4)}`);
    this.name = "LlmBudgetExhausted";
  }
}

const MAX_ATTEMPTS = 3;
const FAMILIES = ["haiku", "sonnet", "opus", "fable", "mythos"] as const;
const AUTH_RE = /not logged in|please run \/login|invalid api key|oauth token|authentication_error|unauthori[sz]ed|\b401\b|credit balance/i;
/** Subscription limit hit: abort and let the next night resume. Transient overload or 429 stays an item retry. */
const LIMIT_RE = /usage limit|hit your limit|limit reached/i;
const ENV_ALLOW = [
  "PATH", "HOME", "USER", "LOGNAME", "SHELL", "TMPDIR", "LANG", "LC_ALL", "LC_CTYPE", "TZ",
  "CLAUDE_CODE_OAUTH_TOKEN", "CLAUDE_CONFIG_DIR",
  "HTTPS_PROXY", "HTTP_PROXY", "NO_PROXY", "https_proxy", "http_proxy", "no_proxy",
];

const ajv = new Ajv({ strict: false, allErrors: true, allowUnionTypes: true });
const validators = new Map<string, any>();
export interface TokenTotals { calls: number; input: number; output: number; cache_read: number; cache_creation: number; cost_usd: number }
const stats = {
  calls: 0, cache_hits: 0, failures: 0, by_model: {} as Record<string, number>, cost_usd: 0,
  tokens_by_model: {} as Record<string, TokenTotals>,
};
let spendLimitUsd: number | null = null;

/** Counters for the run report and the re-guard every N calls. */
export function llmStats() { return structuredClone(stats); }
export function resetLlmStats() {
  Object.assign(stats, { calls: 0, cache_hits: 0, failures: 0, by_model: {}, cost_usd: 0, tokens_by_model: {} });
  spendLimitUsd = null;
}
/** Dollars (API-equivalent, from total_cost_usd) this process may spend on CLI calls; null = unlimited. */
export function setSpendLimit(usd: number | null) { spendLimitUsd = usd; }
export function spendRemaining(): number | null {
  return spendLimitUsd === null ? null : Math.max(0, spendLimitUsd - stats.cost_usd);
}
/** Add one envelope to the meter. Falls back to the per-model costUSD sum when total_cost_usd is missing. */
export function meterEnvelope(modelUsage: Record<string, ModelUsageEntry> | undefined | null, totalCostUsd: unknown): number {
  let sum = 0;
  for (const [name, u] of Object.entries(modelUsage ?? {})) {
    const t = (stats.tokens_by_model[name] ??= { calls: 0, input: 0, output: 0, cache_read: 0, cache_creation: 0, cost_usd: 0 });
    t.calls++;
    t.input += u?.inputTokens ?? 0;
    t.output += u?.outputTokens ?? 0;
    t.cache_read += u?.cacheReadInputTokens ?? 0;
    t.cache_creation += u?.cacheCreationInputTokens ?? 0;
    t.cost_usd += u?.costUSD ?? 0;
    sum += u?.costUSD ?? 0;
  }
  const cost = typeof totalCostUsd === "number" && Number.isFinite(totalCostUsd) ? totalCostUsd : sum;
  stats.cost_usd += cost;
  return cost;
}
function assertAllowance(): void {
  if (spendLimitUsd !== null && stats.cost_usd >= spendLimitUsd) throw new LlmBudgetExhausted(stats.cost_usd, spendLimitUsd);
}

export function resolveModel(role: Role, override?: string): string {
  if (override) return override;
  const env = process.env[`LLM_MODEL_${role.toUpperCase()}`];
  if (env) return env;
  const m = models().roles[role];
  if (!m) throw new Error(`config/models.json has no model for role ${role}`);
  return m;
}
export function modelFamily(name: string): string | null {
  const n = name.toLowerCase();
  return FAMILIES.find((f) => n.includes(f)) ?? null;
}
/** The model that did the work: the modelUsage entry with the most output tokens. */
export function attributeModel(modelUsage: Record<string, ModelUsageEntry> | undefined | null): string | null {
  let best: string | null = null;
  let max = -1;
  for (const [name, u] of Object.entries(modelUsage ?? {})) {
    const out = u?.outputTokens ?? 0;
    if (out > max) { max = out; best = name; }
  }
  return best;
}
export function cacheKey(req: Pick<LlmRequest, "promptVersion" | "system" | "prompt" | "schema">, model: string): string {
  return sha256(JSON.stringify({ v: String(req.promptVersion), model, system: req.system, prompt: req.prompt, schema: req.schema }));
}
/** Read at call time so tests and the Mini's env file can point it elsewhere. */
export function cacheRoot(): string {
  return process.env.BCOBS_LLM_CACHE_DIR ?? LLM_CACHE_DIR;
}
/** CLI arguments. Never contains --bare. */
export function buildArgs(system: string, schema: Record<string, unknown>, model: string, budgetUsd: number): string[] {
  return [
    "-p", "--model", model, "--tools", "", "--strict-mcp-config", "--no-session-persistence",
    "--disable-slash-commands", "--permission-prompts", "none", "--system-prompt", system,
    "--output-format", "stream-json", "--verbose", "--json-schema", JSON.stringify(schema),
    "--max-budget-usd", String(budgetUsd),
  ];
}
/** Allowlisted child environment: subscription OAuth token yes, API keys and base URLs never. */
export function childEnv(src: NodeJS.ProcessEnv = process.env): NodeJS.ProcessEnv {
  const env: NodeJS.ProcessEnv = {};
  for (const k of ENV_ALLOW) if (src[k] !== undefined) env[k] = src[k];
  env.CLAUDE_CODE_ENABLE_TELEMETRY = "0";
  env.DISABLE_AUTOUPDATER = "1"; // the pinned CLI version stays pinned (config/tooling.json)
  return env;
}

export async function complete<T = unknown>(req: LlmRequest): Promise<LlmResult<T>> {
  const model = resolveModel(req.role, req.model);
  const key = cacheKey(req, model);
  const path = resolve(cacheRoot(), req.stage, `${key}.json`);
  if (exists(path)) {
    const entry = readJson<LlmCacheEntry<T>>(path);
    stats.cache_hits++;
    return { output: entry.output, cached: true, meta: entry.meta };
  }
  if (process.env.LLM_CACHE_ONLY === "1") {
    throw new Error(`LLM cache miss for ${req.stage}/${req.label ?? key} while LLM_CACHE_ONLY=1`);
  }
  const cfg = models();
  const budgetUsd = cfg.max_budget_usd_per_call[req.role] ?? 3;
  const timeoutMs = (cfg.timeout_minutes[req.role] ?? 10) * 60_000;
  const schemaHash = sha256(JSON.stringify(req.schema));
  const validate = schemaValidator(schemaHash, req.schema);
  const started = Date.now();
  let lastErr = "";

  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    const prompt = attempt === 1 ? req.prompt
      : `${req.prompt}\n\nYour previous answer was rejected: ${lastErr.slice(0, 600)}\nReturn JSON that satisfies the schema exactly.`;
    assertAllowance(); // also between retries: a retry is a new paid call
    let raw: RawResult;
    try {
      raw = await callCli(req.system, prompt, req.schema, model, budgetUsd, timeoutMs);
    } catch (e) {
      if (e instanceof LlmInfraError) throw e;
      lastErr = errText(e);
      log.warn(`${req.label ?? req.stage}: attempt ${attempt} failed: ${lastErr.slice(0, 300)}`);
      await sleep(retryDelayMs() * attempt);
      continue;
    }
    if (!validate(raw.output)) {
      lastErr = "schema validation failed: " + ajv.errorsText(validate.errors, { separator: "; " });
      log.warn(`${req.label ?? req.stage}: attempt ${attempt} ${lastErr.slice(0, 300)}`);
      continue;
    }
    const meta = buildMeta(raw, model, req, key, started, attempt);
    const debug = process.env.LLM_CACHE_DEBUG === "1";
    const entry: LlmCacheEntry = {
      meta,
      request: {
        stage: req.stage, label: req.label, role: req.role, prompt_version: String(req.promptVersion), model,
        inputs: req.inputs ?? [], system_sha256: sha256(req.system), prompt_sha256: sha256(req.prompt),
        schema_sha256: schemaHash, prompt_chars: req.prompt.length,
        ...(debug ? { system: req.system, prompt: req.prompt } : {}),
      },
      output: raw.output,
    };
    writeJson(path, entry);
    return { output: raw.output as T, cached: false, meta };
  }
  stats.failures++;
  throw new Error(`LLM call failed after ${MAX_ATTEMPTS} attempts (${req.label ?? req.stage}): ${lastErr}`);
}

/** Uncached auth + model-family check before any batch (nightly preflight, 80-verify). */
export async function ping(role: Role = "smoke"): Promise<{ ok: boolean; requested_model: string; model: string; api_key_source: string | null; model_mismatch?: { expected: string; got: string }; duration_ms: number }> {
  const model = resolveModel(role);
  const started = Date.now();
  const schema = { type: "object", properties: { reply: { type: "string" } }, required: ["reply"], additionalProperties: false };
  const raw = await callCli("Answer with the single word ok in the reply field.", "ping", schema, model, 0.5, 120_000);
  const real = attributeModel(raw.modelUsage) ?? raw.initModel ?? model;
  const mismatch = familyMismatch(model, real);
  return { ok: !mismatch, requested_model: model, model: real, api_key_source: raw.apiKeySource, ...(mismatch ? { model_mismatch: mismatch } : {}), duration_ms: Date.now() - started };
}

/** Run async tasks with a concurrency limit, preserving the order of results. */
export async function pMap<T, R>(items: T[], fn: (item: T, i: number) => Promise<R>, concurrency = 3): Promise<R[]> {
  const results: R[] = new Array(items.length);
  let next = 0;
  const workers = Array.from({ length: Math.min(concurrency, items.length) }, async () => {
    while (next < items.length) { const i = next++; results[i] = await fn(items[i], i); }
  });
  await Promise.all(workers);
  return results;
}

// ---------------------------------------------------------------------------------------------------------

interface RawResult {
  output: unknown;
  modelUsage?: Record<string, ModelUsageEntry>;
  initModel?: string;
  usage?: unknown;
  cost_usd?: number;
  apiKeySource: string | null;
}

function schemaValidator(hash: string, schema: Record<string, unknown>) {
  let v = validators.get(hash);
  if (!v) { v = ajv.compile(schema); validators.set(hash, v); }
  return v;
}
function familyMismatch(requested: string, real: string): { expected: string; got: string } | undefined {
  const expected = modelFamily(requested);
  const got = modelFamily(real);
  return expected && got !== expected ? { expected, got: real } : undefined;
}
function buildMeta(raw: RawResult, model: string, req: LlmRequest, key: string, started: number, attempts: number): LlmMeta {
  const fromUsage = attributeModel(raw.modelUsage);
  const real = fromUsage ?? raw.initModel ?? model;
  const mismatch = familyMismatch(model, real);
  if (mismatch) log.warn(`${req.label ?? req.stage}: requested ${model} but ${real} did the work`);
  return {
    backend: "cli", requested_model: model, model: real,
    model_source: fromUsage ? "modelUsage" : raw.initModel ? "init" : "requested",
    ...(mismatch ? { model_mismatch: mismatch } : {}),
    api_key_source: raw.apiKeySource, prompt_version: String(req.promptVersion), key,
    created_at: new Date().toISOString(), duration_ms: Date.now() - started, attempts,
    usage: raw.usage, model_usage: raw.modelUsage, cost_usd: raw.cost_usd,
  };
}

/** Parse `--output-format stream-json --verbose` output: the init event and the final result event. */
export function parseStream(stdout: string): { init?: any; result?: any } {
  let init: any, result: any;
  for (const line of stdout.split("\n")) {
    const t = line.trim();
    if (!t.startsWith("{")) continue;
    let ev: any;
    try { ev = JSON.parse(t); } catch { continue; }
    if (ev.type === "system" && ev.subtype === "init") init = ev;
    else if (ev.type === "result") result = ev;
  }
  return { init, result };
}

async function callCli(system: string, prompt: string, schema: Record<string, unknown>, model: string, budgetUsd: number, timeoutMs: number): Promise<RawResult> {
  const bin = process.env.BCOBS_CLAUDE_BIN ?? "claude";
  const cwd = resolve(tmpdir(), "bc-observatory-llm");
  ensureDir(cwd);
  stats.calls++;
  let res: { stdout: string; stderr: string; code: number | null };
  try {
    res = await run(bin, buildArgs(system, schema, model, budgetUsd), prompt, timeoutMs, cwd);
  } catch (e: any) {
    if (e?.code === "ENOENT") throw new LlmInfraError(`claude CLI not found (${bin})`);
    throw e;
  }
  const { init, result } = parseStream(res.stdout);
  const apiKeySource: string | null = init?.apiKeySource ?? null;
  if (apiKeySource !== null && apiKeySource !== "none") {
    throw new LlmInfraError(`claude authenticated with an API key (apiKeySource=${apiKeySource}); this pipeline runs on the subscription only`);
  }
  if (!result) {
    const tail = (res.stderr || res.stdout).slice(-500);
    if (AUTH_RE.test(tail)) throw new LlmInfraError(`claude is not authenticated: ${tail}`);
    if (LIMIT_RE.test(tail)) throw new LlmInfraError(`subscription limit reached: ${tail}`);
    throw new Error(`claude exited ${res.code} without a result: ${tail}`);
  }
  const realModel = attributeModel(result.modelUsage) ?? init?.model;
  if (realModel) stats.by_model[realModel] = (stats.by_model[realModel] ?? 0) + 1;
  meterEnvelope(result.modelUsage, result.total_cost_usd);
  if (result.is_error) {
    const text = String(result.result ?? result.errors ?? result.subtype ?? "");
    if (AUTH_RE.test(text)) throw new LlmInfraError(`claude is not authenticated: ${text.slice(0, 300)}`);
    if (LIMIT_RE.test(text)) throw new LlmInfraError(`subscription limit reached: ${text.slice(0, 300)}`);
    throw new Error(`claude error (${result.subtype}): ${text.slice(0, 400)}`);
  }
  let output = result.structured_output;
  if (output === undefined) output = parseJsonLoose(String(result.result ?? ""));
  return { output, modelUsage: result.modelUsage, initModel: init?.model, usage: result.usage, cost_usd: result.total_cost_usd, apiKeySource };
}

function parseJsonLoose(text: string): unknown {
  const t = text.trim().replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/, "");
  try { return JSON.parse(t); } catch { /* fall through */ }
  const a = t.indexOf("{"), b = t.lastIndexOf("}");
  if (a >= 0 && b > a) return JSON.parse(t.slice(a, b + 1));
  throw new Error("no JSON object in model output");
}

function run(cmd: string, args: string[], stdin: string, timeoutMs: number, cwd: string): Promise<{ stdout: string; stderr: string; code: number | null }> {
  return new Promise((resolvePromise, reject) => {
    const child = spawn(cmd, args, { cwd, stdio: ["pipe", "pipe", "pipe"], env: childEnv() });
    let stdout = "", stderr = "";
    const timer = setTimeout(() => { child.kill("SIGKILL"); reject(new Error(`timeout after ${timeoutMs} ms`)); }, timeoutMs);
    child.stdout.on("data", (d) => (stdout += d));
    child.stderr.on("data", (d) => (stderr += d));
    child.on("error", (e) => { clearTimeout(timer); reject(e); });
    child.on("close", (code) => { clearTimeout(timer); resolvePromise({ stdout, stderr, code }); });
    child.stdin.on("error", () => { /* child exited before reading stdin; the close handler reports it */ });
    child.stdin.end(stdin);
  });
}

function retryDelayMs(): number {
  const v = Number(process.env.BCOBS_LLM_RETRY_MS);
  return Number.isFinite(v) && v >= 0 ? v : 2000;
}
const errText = (e: unknown) => String((e as any)?.message ?? e);
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
