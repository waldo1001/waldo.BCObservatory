/**
 * Code pillar discovery: one code-job item per (source repo, BC major) from config/versions.json.
 * `git ls-remote` only; the head commit is the input hash, so a new build makes the job stale (M2 extracts).
 */
import type { SourceDef } from "../lib/config.js";
import { lsRemote } from "../lib/git.js";
import { newResult, tally, type IngestContext, type SourceResult } from "./types.js";

const BRANCH_FIELD: Record<string, string> = { bcapps: "bcapps_branch", sandbox_history: "sandbox_branch", onprem_history: "onprem_branch" };

export async function ingestCode(source: SourceDef, ctx: IngestContext): Promise<SourceResult> {
  const r = newResult(source);
  const repoKey = Object.entries(ctx.versions.repos).find(([, url]) => url === `https://github.com/${source.repo}`)?.[0];
  const field = repoKey ? BRANCH_FIELD[repoKey] : undefined;
  if (!field) throw new Error(`${source.id}: repo ${source.repo} is not listed in config/versions.json repos`);
  const wanted = Object.entries(ctx.versions.majors)
    .map(([major, def]) => ({ major, branch: def[field] }))
    .filter((x): x is { major: string; branch: string } => typeof x.branch === "string");
  const heads = await lsRemote(ctx.repoUrl(source.repo!), wanted.map((w) => `refs/heads/${w.branch}`));
  const missing: string[] = [];
  for (const { major, branch } of wanted) {
    const sha = heads.get(branch);
    if (!sha) { missing.push(branch); continue; }
    const { change } = ctx.manifest.discover({
      pillar: "code", source: source.id, key: major, tier: source.tier, title: `${source.name} ${branch} (BC${major})`,
      url: `https://github.com/${source.repo}/tree/${branch}`, published_at: null, input_hash: sha,
      meta: { major, branch, sha },
    }, ctx.now);
    tally(r, change);
  }
  if (missing.length) { r.ok = false; r.error = `branches not found: ${missing.join(", ")}`; }
  r.note = `${wanted.length - missing.length}/${wanted.length} branches`;
  return r;
}
