/**
 * Workflow lint (PLAN 4.4 security posture), run in pr-validate:
 * 1. A workflow with any job on a self-hosted runner may only trigger on schedule, workflow_dispatch or
 *    push to main. Pull-request code must never reach the Mini.
 * 2. No `${{ ... }}` inside `run:` scripts: pass values through `env:` (no script injection).
 * 3. Third-party actions are pinned to a full commit SHA.
 */
import { readdirSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { parse } from "yaml";
import { ROOT } from "../pipeline/lib/paths.js";

const SELF_HOSTED_TRIGGERS = new Set(["schedule", "workflow_dispatch", "push"]);

function runsOnSelfHosted(runsOn: unknown): boolean {
  if (typeof runsOn === "string") return runsOn.includes("self-hosted");
  if (Array.isArray(runsOn)) return runsOn.some((l) => String(l).includes("self-hosted") || l === "bcobs");
  if (runsOn && typeof runsOn === "object") return runsOnSelfHosted((runsOn as { labels?: unknown }).labels) || "group" in runsOn;
  return false;
}

export function lintWorkflow(name: string, text: string): string[] {
  const errors: string[] = [];
  const doc = parse(text) ?? {};
  const on = doc.on ?? doc[true as unknown as string];
  const triggers: string[] = typeof on === "string" ? [on] : Array.isArray(on) ? on : Object.keys(on ?? {});
  const jobs: Record<string, any> = doc.jobs ?? {};
  const selfHosted = Object.entries(jobs).filter(([, j]) => runsOnSelfHosted(j?.["runs-on"])).map(([id]) => id);
  if (selfHosted.length) {
    const bad = triggers.filter((t) => !SELF_HOSTED_TRIGGERS.has(t));
    if (bad.length) errors.push(`${name}: self-hosted job(s) ${selfHosted.join(", ")} must not trigger on ${bad.join(", ")}`);
    if (triggers.includes("push")) {
      const push = (on as Record<string, any>).push ?? {};
      const branches = push.branches;
      if (!Array.isArray(branches) || branches.length !== 1 || branches[0] !== "main" || push.tags || push["branches-ignore"]) {
        errors.push(`${name}: self-hosted push trigger must be exactly branches: [main]`);
      }
    }
  }
  for (const [id, job] of Object.entries(jobs)) {
    for (const [i, step] of (job?.steps ?? []).entries()) {
      if (typeof step?.run === "string" && step.run.includes("${{")) errors.push(`${name}: job ${id} step ${i + 1} interpolates \${{ }} inside run (use env:)`);
      if (typeof step?.uses === "string" && !step.uses.startsWith("./")) {
        const ref = step.uses.split("@")[1] ?? "";
        if (!/^[0-9a-f]{40}$/.test(ref)) errors.push(`${name}: job ${id} step ${i + 1} uses ${step.uses} without a full commit SHA`);
      }
    }
  }
  return errors;
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  const dir = resolve(ROOT, ".github", "workflows");
  const files = readdirSync(dir).filter((f) => /\.ya?ml$/.test(f));
  const errors = files.flatMap((f) => lintWorkflow(f, readFileSync(resolve(dir, f), "utf8")));
  for (const e of errors) console.error(`error: ${e}`);
  console.log(errors.length ? `${errors.length} workflow problem(s)` : `${files.length} workflows OK`);
  process.exit(errors.length ? 1 : 0);
}
