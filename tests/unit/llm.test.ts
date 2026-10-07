/**
 * llm.ts against a scripted fake `claude` binary: no network, no subscription usage.
 * The fake answers from scenario.json (one response per call) and logs args, env keys, cwd and stdin.
 */
import { test, beforeEach } from "node:test";
import assert from "node:assert/strict";
import { chmodSync, mkdtempSync, readFileSync, readdirSync, writeFileSync, existsSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import {
  attributeModel, buildArgs, childEnv, complete, LlmBudgetExhausted, LlmInfraError, llmStats, meterEnvelope, modelFamily,
  parseStream, resetLlmStats, setSpendLimit, spendRemaining, type LlmCacheEntry,
} from "../../pipeline/lib/llm.js";
import { ROOT } from "../../pipeline/lib/paths.js";

const FAKE = `#!/usr/bin/env node
import { readFileSync, appendFileSync, existsSync } from "node:fs";
const dir = new URL(".", import.meta.url).pathname;
const scenario = JSON.parse(readFileSync(dir + "scenario.json", "utf8"));
const logPath = dir + "calls.jsonl";
const n = existsSync(logPath) ? readFileSync(logPath, "utf8").split("\\n").filter(Boolean).length : 0;
let stdin = "";
process.stdin.on("data", (d) => (stdin += d));
process.stdin.on("end", () => {
  appendFileSync(logPath, JSON.stringify({ args: process.argv.slice(2), env: Object.keys(process.env), cwd: process.cwd(), stdin }) + "\\n");
  const r = scenario[Math.min(n, scenario.length - 1)];
  if (r.flood) { const chunk = "x".repeat(64 * 1024); for (let i = 0; i < r.flood; i++) process.stdout.write(chunk); process.exit(0); }
  if (r.stderr) process.stderr.write(r.stderr);
  if (r.init !== null) process.stdout.write(JSON.stringify({ type: "system", subtype: "init", apiKeySource: "none", model: "claude-haiku-4-5", ...(r.init ?? {}) }) + "\\n");
  process.stdout.write(JSON.stringify({ type: "assistant", message: { content: [] } }) + "\\n");
  if (r.result) process.stdout.write(JSON.stringify({ type: "result", subtype: "success", is_error: false, total_cost_usd: 0.001, ...r.result }) + "\\n");
  process.exit(r.exit ?? 0);
});
`;

const schema = { type: "object", properties: { topics: { type: "array", items: { type: "string" } } }, required: ["topics"], additionalProperties: false };
const usage = (model: string, outputTokens = 50) => ({ [model]: { inputTokens: 100, outputTokens } });
let dir = "";

function scenario(responses: unknown[]) {
  writeFileSync(join(dir, "scenario.json"), JSON.stringify(responses));
}
function calls(): { args: string[]; env: string[]; cwd: string; stdin: string }[] {
  const p = join(dir, "calls.jsonl");
  return existsSync(p) ? readFileSync(p, "utf8").split("\n").filter(Boolean).map((l) => JSON.parse(l)) : [];
}
const req = (over: Record<string, unknown> = {}) => ({
  stage: "extract-test", promptVersion: 1, role: "facts" as const, system: "Extract topics.",
  prompt: "COMMUNITY FULL TEXT that must never land in the cache", schema, inputs: [{ kind: "post", id: "demo-1", hash: "abc" }], ...over,
});
function cacheEntries(): LlmCacheEntry[] {
  const stageDir = join(dir, "cache", "extract-test");
  return existsSync(stageDir) ? readdirSync(stageDir).map((f) => JSON.parse(readFileSync(join(stageDir, f), "utf8"))) : [];
}

beforeEach(() => {
  dir = mkdtempSync(join(tmpdir(), "bcobs-llm-test-"));
  const bin = join(dir, "claude-fake.mjs");
  writeFileSync(bin, FAKE);
  chmodSync(bin, 0o755);
  process.env.BCOBS_CLAUDE_BIN = bin;
  process.env.BCOBS_LLM_CACHE_DIR = join(dir, "cache");
  process.env.BCOBS_LLM_RETRY_MS = "0";
  delete process.env.BCOBS_LLM_MAX_STDOUT;
  delete process.env.LLM_CACHE_ONLY;
  delete process.env.LLM_CACHE_DEBUG;
  delete process.env.LLM_MODEL_FACTS;
  resetLlmStats();
});

test("arguments: subscription CLI flags, no tools, never --bare", () => {
  const args = buildArgs("sys", schema, "haiku", 1);
  assert.ok(!args.includes("--bare"));
  assert.equal(args[args.indexOf("--tools") + 1], "");
  assert.equal(args[args.indexOf("--output-format") + 1], "stream-json");
  assert.ok(args.includes("--verbose") && args.includes("--strict-mcp-config") && args.includes("--no-session-persistence"));
  assert.ok(!args.includes("--effort"));
  const low = buildArgs("sys", schema, "haiku", 1, "low");
  assert.equal(low[low.indexOf("--effort") + 1], "low");
});

test("child environment drops API keys and base URLs, keeps the OAuth token", () => {
  const env = childEnv({ PATH: "/bin", HOME: "/h", ANTHROPIC_API_KEY: "test-not-a-key", ANTHROPIC_BASE_URL: "http://x", ANTHROPIC_AUTH_TOKEN: "t", CLAUDE_CODE_OAUTH_TOKEN: "oauth", CLAUDECODE: "1" });
  assert.equal(env.CLAUDE_CODE_OAUTH_TOKEN, "oauth");
  for (const k of ["ANTHROPIC_API_KEY", "ANTHROPIC_BASE_URL", "ANTHROPIC_AUTH_TOKEN", "CLAUDECODE"]) assert.equal(env[k], undefined, k);
  assert.equal(env.DISABLE_AUTOUPDATER, "1");
  assert.equal(env.MAX_THINKING_TOKENS, undefined);
  assert.equal(childEnv({ PATH: "/bin" }, 0).MAX_THINKING_TOKENS, "0");
});

test("model attribution picks the entry with the most output tokens", () => {
  assert.equal(attributeModel({ "claude-haiku-4-5": { outputTokens: 12 }, "claude-sonnet-5-5": { outputTokens: 900 } }), "claude-sonnet-5-5");
  assert.equal(attributeModel(undefined), null);
  assert.equal(modelFamily("claude-opus-5-5"), "opus");
  assert.equal(modelFamily("haiku"), "haiku");
});

test("stream parsing finds init and result among other events", () => {
  const out = ['{"type":"system","subtype":"init","apiKeySource":"none"}', "noise", '{"type":"assistant"}', '{"type":"result","is_error":false}'].join("\n");
  const { init, result } = parseStream(out);
  assert.equal(init.apiKeySource, "none");
  assert.equal(result.is_error, false);
});

test("miss calls the CLI once, caches hashes not prompts, then hits the cache", async () => {
  scenario([{ result: { structured_output: { topics: ["posting groups"] }, modelUsage: usage("claude-haiku-4-5-20251001") } }]);
  const saved = process.env.ANTHROPIC_API_KEY;
  process.env.ANTHROPIC_API_KEY = "test-not-a-key";
  try {
    const first = await complete<{ topics: string[] }>(req());
    assert.equal(first.cached, false);
    assert.deepEqual(first.output.topics, ["posting groups"]);
    assert.equal(first.meta.model, "claude-haiku-4-5-20251001");
    assert.equal(first.meta.model_source, "modelUsage");
    assert.equal(first.meta.api_key_source, "none");
    assert.equal(first.meta.model_mismatch, undefined);
    const second = await complete(req());
    assert.equal(second.cached, true);
  } finally {
    if (saved === undefined) delete process.env.ANTHROPIC_API_KEY; else process.env.ANTHROPIC_API_KEY = saved;
  }
  const log = calls();
  assert.equal(log.length, 1);
  assert.ok(!log[0].env.includes("ANTHROPIC_API_KEY"), "API key leaked into the child env");
  assert.ok(!log[0].cwd.startsWith(ROOT), "child ran inside the repo and would load its CLAUDE.md");
  assert.equal(log[0].args[log[0].args.indexOf("--model") + 1], "haiku");
  assert.equal(log[0].args[log[0].args.indexOf("--effort") + 1], "low", "facts run at low effort (config/models.json)");
  assert.ok(log[0].env.includes("MAX_THINKING_TOKENS"), "facts run without thinking (config/models.json)");
  const [entry] = cacheEntries();
  const raw = JSON.stringify(entry);
  assert.ok(!raw.includes("COMMUNITY FULL TEXT"), "prompt text stored in the cache");
  assert.equal(entry.request.inputs[0].id, "demo-1");
  assert.match(entry.request.prompt_sha256, /^[0-9a-f]{64}$/);
});

test("LLM_CACHE_DEBUG=1 keeps the prompt for local debugging", async () => {
  process.env.LLM_CACHE_DEBUG = "1";
  scenario([{ result: { structured_output: { topics: [] }, modelUsage: usage("claude-haiku-4-5") } }]);
  await complete(req());
  assert.ok(cacheEntries()[0].request.prompt?.includes("COMMUNITY FULL TEXT"));
});

test("schema-invalid output is retried with feedback", async () => {
  scenario([
    { result: { structured_output: { wrong: true }, modelUsage: usage("claude-haiku-4-5") } },
    { result: { structured_output: { topics: ["vat"] }, modelUsage: usage("claude-haiku-4-5") } },
  ]);
  const r = await complete(req());
  assert.equal(r.meta.attempts, 2);
  assert.match(calls()[1].stdin, /previous answer was rejected/);
});

test("a different model family doing the work is recorded as a mismatch", async () => {
  scenario([{ result: { structured_output: { topics: [] }, modelUsage: { "claude-haiku-4-5": { outputTokens: 3 }, "claude-sonnet-5-5": { outputTokens: 400 } } } }]);
  const r = await complete(req());
  assert.deepEqual(r.meta.model_mismatch, { expected: "haiku", got: "claude-sonnet-5-5" });
});

test("API-key authentication aborts with an infra error and caches nothing", async () => {
  scenario([{ init: { apiKeySource: "ANTHROPIC_API_KEY" }, result: { structured_output: { topics: [] } } }]);
  await assert.rejects(complete(req()), LlmInfraError);
  assert.equal(cacheEntries().length, 0);
  assert.equal(calls().length, 1, "infra errors must not be retried");
});

test("not logged in and usage limit are infra errors", async () => {
  scenario([{ init: null, stderr: "Not logged in · Please run /login", exit: 1 }]);
  await assert.rejects(complete(req()), LlmInfraError);
  scenario([{ result: { is_error: true, subtype: "error_during_execution", result: "Claude AI usage limit reached" } }]);
  await assert.rejects(complete(req({ promptVersion: 2 })), LlmInfraError);
});

test("ordinary failures retry three times, then fail the item", async () => {
  scenario([{ result: { is_error: true, subtype: "error_max_budget_usd", result: "budget exceeded" } }]);
  await assert.rejects(complete(req()), /failed after 3 attempts/);
  assert.equal(calls().length, 3);
});

test("LLM_CACHE_ONLY=1 turns a miss into an error without calling the CLI", async () => {
  process.env.LLM_CACHE_ONLY = "1";
  scenario([{ result: { structured_output: { topics: [] } } }]);
  await assert.rejects(complete(req()), /LLM_CACHE_ONLY/);
  assert.equal(calls().length, 0);
});

test("metering: envelope cost and per-model tokens add up; costUSD sum stands in for a missing total", () => {
  meterEnvelope({ "claude-haiku-4-5": { inputTokens: 100, outputTokens: 40, cacheReadInputTokens: 7, costUSD: 0.01 } }, 0.012);
  meterEnvelope({ "claude-haiku-4-5": { inputTokens: 50, outputTokens: 10, costUSD: 0.004 }, "claude-sonnet-5-5": { outputTokens: 5, costUSD: 0.02 } }, undefined);
  const s = llmStats();
  assert.equal(Math.round(s.cost_usd * 1e6), 36_000); // 0.012 + (0.004 + 0.02)
  assert.deepEqual(s.tokens_by_model["claude-haiku-4-5"], { calls: 2, input: 150, output: 50, cache_read: 7, cache_creation: 0, cost_usd: 0.014 });
  assert.equal(s.tokens_by_model["claude-sonnet-5-5"].calls, 1);
});

test("spend limit: the call that crosses it finishes, the next miss is refused, cache hits stay free", async () => {
  scenario([
    { result: { structured_output: { topics: ["a"] }, total_cost_usd: 0.03, modelUsage: usage("claude-haiku-4-5") } },
    { result: { structured_output: { topics: ["b"] }, total_cost_usd: 0.03, modelUsage: usage("claude-haiku-4-5") } },
  ]);
  setSpendLimit(0.02);
  await complete(req());
  assert.equal(spendRemaining(), 0);
  await assert.rejects(complete(req({ prompt: "another item" })), (e: unknown) => e instanceof LlmBudgetExhausted && !(e instanceof LlmInfraError));
  assert.equal((await complete(req())).cached, true);
  assert.equal(calls().length, 1);
  assert.equal(llmStats().calls, 1);
});

test("spend limit: retries stop once the allowance is gone; 0 blocks the first call", async () => {
  scenario([{ result: { is_error: true, subtype: "error_during_execution", result: "boom", total_cost_usd: 0.05 } }]);
  setSpendLimit(0.05);
  await assert.rejects(complete(req()), LlmBudgetExhausted);
  assert.equal(calls().length, 1);
  resetLlmStats();
  setSpendLimit(0);
  await assert.rejects(complete(req({ prompt: "x" })), LlmBudgetExhausted);
  assert.equal(calls().length, 1);
});

test("a model stream that does not stop fails the call, not the run (D56)", async () => {
  process.env.BCOBS_LLM_MAX_STDOUT = String(128 * 1024);
  try {
    scenario([{ flood: 8 }, { flood: 8 }, { flood: 8 }]); // 512 KB each, four times the cap
    await assert.rejects(() => complete(req()), /model output exceeded .* MB: the model stream did not stop/);
    // and nothing of the runaway output is cached
    assert.deepEqual(cacheEntries(), []);
  } finally {
    delete process.env.BCOBS_LLM_MAX_STDOUT;
  }
});
