import { test } from "node:test";
import assert from "node:assert/strict";
import { budget } from "../../pipeline/lib/config.js";
import { mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import {
  decideGuard, PLAN_USAGE_URL, readPlanUsage, readSpendHistory, scaleQuotas, spendAllowance, type PlanUsage,
} from "../../pipeline/lib/budget.js";

const TOKEN = "sentinel-token-value-7f3a";
const now = () => new Date("2026-10-07T01:00:00Z");
function fakeFetch(status: number, body: string | (() => never)) {
  const calls: { url: string; init: RequestInit }[] = [];
  const f = (async (url: string, init: RequestInit) => {
    calls.push({ url, init });
    if (typeof body === "function") body();
    return new Response(body as string, { status });
  }) as unknown as typeof fetch;
  return { f, calls };
}
const usage = (five: number, seven: number, r5: string | null = "2026-10-07T04:00:00Z", r7: string | null = "2026-10-10T00:00:00Z"): PlanUsage =>
  ({ fiveHourPct: five, fiveHourResetsAt: r5, sevenDayPct: seven, sevenDayResetsAt: r7, readAt: now().toISOString() });

test("reader: exact request and parsed windows", async () => {
  const { f, calls } = fakeFetch(200, JSON.stringify({ five_hour: { utilization: 0.0, resets_at: null }, seven_day: { utilization: 3.0, resets_at: "2026-10-05T00:00:00.032219+00:00" } }));
  const r = await readPlanUsage({ token: TOKEN, fetch: f, now });
  assert.deepEqual(r, { fiveHourPct: 0, fiveHourResetsAt: null, sevenDayPct: 3, sevenDayResetsAt: "2026-10-05T00:00:00.032219+00:00", readAt: "2026-10-07T01:00:00.000Z" });
  assert.equal(PLAN_USAGE_URL, "https://api.anthropic.com/api/oauth/usage");
  assert.equal(calls.length, 1);
  assert.equal(calls[0].url, PLAN_USAGE_URL);
  assert.equal(calls[0].init.method, "GET");
  const h = calls[0].init.headers as Record<string, string>;
  assert.equal(h.Authorization, `Bearer ${TOKEN}`);
  assert.equal(h["anthropic-beta"], "oauth-2025-04-20");
});

test("reader: unavailable kinds, one fetch at most, token never in detail", async () => {
  const cases: [number, string | (() => never), string][] = [
    [403, "permission_error: OAuth token does not meet scope requirement user:profile", "scope"],
    [403, "forbidden", "http"],
    [500, "oops", "http"],
    [0, () => { throw new Error(`connect failed for ${TOKEN}`); }, "network"],
    [200, "{}", "malformed"],
    [200, JSON.stringify({ five_hour: { utilization: 1 } }), "malformed"],
    [200, "<html>", "malformed"],
  ];
  for (const [status, body, kind] of cases) {
    const { f, calls } = fakeFetch(status || 200, body);
    const r = await readPlanUsage({ token: TOKEN, fetch: f, now });
    assert.ok("unavailable" in r && r.unavailable === kind, `${status} → ${JSON.stringify(r)}`);
    assert.ok(calls.length <= 1);
    assert.ok(!JSON.stringify(r).includes(TOKEN), "token leaked");
  }
  for (const token of [undefined, ""]) {
    const { f, calls } = fakeFetch(200, "{}");
    const r = await readPlanUsage({ token, fetch: f, now });
    assert.ok("unavailable" in r && r.unavailable === "not_configured");
    assert.equal(calls.length, 0);
  }
});

test("guard: a window at its limit binds, the later reset wins", () => {
  const cfg = budget();
  assert.equal(decideGuard(usage(59, 69), cfg).decision, "go");
  const at5 = decideGuard(usage(60, 0), cfg);
  assert.deepEqual([at5.decision, at5.status, at5.resets_at], ["skip", "over_5h", "2026-10-07T04:00:00Z"]);
  const at7 = decideGuard(usage(0, 70), cfg);
  assert.deepEqual([at7.decision, at7.status, at7.resets_at], ["skip", "over_7d", "2026-10-10T00:00:00Z"]);
  assert.equal(decideGuard(usage(80, 90), cfg).resets_at, "2026-10-10T00:00:00Z");
  assert.equal(decideGuard(usage(80, 0, null), cfg).resets_at, null);
});

test("guard: headroom scales LLM quotas, unreadable usage runs reduced", () => {
  const cfg = budget();
  const g = (five: number, seven: number) => decideGuard(usage(five, seven), cfg);
  assert.deepEqual([g(0, 10).factor, g(0, 10).headroom], [1, 60]);
  assert.equal(g(30, 10).factor, 0.5);   // 5h headroom 30
  assert.equal(g(0, 55).factor, 0.25);  // 7d headroom 15
  const low = g(55, 0);                   // 5h headroom 5
  assert.deepEqual([low.factor, low.facts_only], [0.25, true]);
  const red = decideGuard({ unavailable: "scope", detail: "x" }, cfg);
  assert.deepEqual([red.decision, red.status, red.factor], ["reduced", "unavailable:scope", cfg.reduced_factor]);
});

test("quota scaling: LLM quotas scale, deterministic ones do not, facts-only drops prose and review", () => {
  const q = budget().quotas;
  const half = scaleQuotas(q, { factor: 0.5, facts_only: false });
  assert.equal(half.docs, 30);
  assert.equal(half.captions, q.captions);
  assert.equal(half.code_jobs, q.code_jobs);
  const facts = scaleQuotas(q, { factor: 0.25, facts_only: true });
  assert.equal(facts.hub_refresh, 0);
  assert.equal(facts.opus_reviews, 0);
  assert.equal(facts.video_extract, 6);
  assert.equal(scaleQuotas(q, { factor: 0, facts_only: false }).docs, 0);
});

test("spend history: today and the six dates before it; day_cost_usd wins over cost_usd; junk counts 0", () => {
  const dir = mkdtempSync(join(tmpdir(), "bcobs-runs-"));
  const put = (d: string, llm: unknown) => writeFileSync(join(dir, `${d}.json`), JSON.stringify({ date: d, llm }));
  put("2026-10-07", { cost_usd: 1, day_cost_usd: 3 });   // today, after an earlier run on the same date
  put("2026-10-06", { cost_usd: 2 });                     // M0-style report without day_cost_usd
  put("2026-10-01", { cost_usd: 4, day_cost_usd: 4 });    // sixth day back: inside the window
  put("2026-09-30", { cost_usd: 100 });                   // seventh day back: outside
  writeFileSync(join(dir, "2026-10-05.json"), "{not json");
  assert.deepEqual(readSpendHistory(dir, "2026-10-07"), { today_usd: 3, week_before_usd: 6 });
  assert.deepEqual(readSpendHistory(join(dir, "missing"), "2026-10-07"), { today_usd: 0, week_before_usd: 0 });
});

test("spend allowance: the tighter cap binds and never goes negative; the shipped caps are sane", () => {
  const caps = { night_usd: 10, week_usd: 50 };
  assert.deepEqual(
    [spendAllowance(caps, { today_usd: 0, week_before_usd: 0 }).allowance_usd, spendAllowance(caps, { today_usd: 0, week_before_usd: 0 }).binding],
    [10, "night"]);
  const w = spendAllowance(caps, { today_usd: 2, week_before_usd: 45 });
  assert.deepEqual([w.allowance_usd, w.binding], [3, "week"]);
  assert.equal(spendAllowance(caps, { today_usd: 12, week_before_usd: 0 }).allowance_usd, 0);
  assert.equal(spendAllowance(caps, { today_usd: 0, week_before_usd: 60 }).allowance_usd, 0);
  const shipped = budget().spend_caps;
  assert.ok(shipped.night_usd > 0 && shipped.week_usd >= shipped.night_usd);
});
