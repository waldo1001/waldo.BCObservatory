/**
 * Usage guard CLI (PLAN 4.5). Prints the decision as JSON on stdout and, inside Actions, writes it to $GITHUB_OUTPUT.
 * Exit codes: 0 go, 3 skip (over a usage limit), 4 reduced (usage unreadable). --dry-run always exits 0.
 * Token: BCOBS_USAGE_OAUTH_TOKEN (login-scoped, user:profile). Never printed.
 */
import { appendFileSync } from "node:fs";
import { budget } from "../../pipeline/lib/config.js";
import { decideGuard, readPlanUsage } from "../../pipeline/lib/budget.js";

const dryRun = process.argv.includes("--dry-run");
const usage = await readPlanUsage({ token: process.env.BCOBS_USAGE_OAUTH_TOKEN, fetch, now: () => new Date() });
const g = decideGuard(usage, budget());
console.log(JSON.stringify(g));

if (process.env.GITHUB_OUTPUT) {
  const lines = [
    `decision=${g.decision}`, `status=${g.status}`, `factor=${g.factor}`, `facts_only=${g.facts_only}`,
    `headroom=${g.headroom ?? ""}`, `five_hour=${g.five_hour ?? ""}`, `seven_day=${g.seven_day ?? ""}`, `resets_at=${g.resets_at ?? ""}`,
  ];
  appendFileSync(process.env.GITHUB_OUTPUT, lines.join("\n") + "\n");
}
if (g.decision !== "go") console.error(`usage guard: ${g.decision} (${g.status}${g.detail ? `: ${g.detail}` : ""})`);
process.exit(dryRun ? 0 : g.decision === "go" ? 0 : g.decision === "skip" ? 3 : 4);
