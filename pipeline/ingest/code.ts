/**
 * Code pillar discovery: one code-job item per (source repo, BC major) from config/versions.json.
 * `git ls-remote` only; the head commit, the extractor version and a hash of the source's code config
 * (config/versions.json `code.<source>`: which folders are extracted) are the input hash, so a new build, an extractor
 * fix or a config fix makes the job stale (M2 extracts).
 * The call graph (D67) has inputs of its own (graphify-al pin, projection version, scope): when only those change, a
 * published snapshot item goes back to `extracted`, so `linked` runs again without a re-extraction.
 */
import type { SourceDef } from "../lib/config.js";
import { EXTRACTOR_VERSION } from "../code/extract.js";
import { graphifyPin, graphKey, ignoreTemplate } from "../code/callgraph.js";
import { rewind } from "../lib/manifest.js";
import { lsRemote } from "../lib/git.js";
import { shortHash } from "../lib/text.js";
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
  let relinked = 0;
  const gKey = graphKey(graphifyPin(), { apps: ctx.versions.callgraph?.apps ?? true }, ignoreTemplate());
  for (const { major, branch } of wanted) {
    const sha = heads.get(branch);
    if (!sha) { missing.push(branch); continue; }
    const { item, change } = ctx.manifest.discover({
      pillar: "code", source: source.id, key: major, tier: source.tier, title: `${source.name} ${branch} (BC${major})`,
      url: `https://github.com/${source.repo}/tree/${branch}`, published_at: null, input_hash: `${sha}:x${EXTRACTOR_VERSION}:c${shortHash(JSON.stringify(ctx.versions.code?.[source.id] ?? null), 8)}`,
      meta: { major, branch, sha },
    }, ctx.now);
    tally(r, change);
    const def = ctx.versions.majors[major];
    const graphed = def?.snapshot_source === source.id && def.diff_only !== true && (ctx.versions.snapshot ?? []).includes(major);
    if (graphed && item.state === "published" && item.stages.linked?.graph_key !== gKey) { ctx.manifest.save(rewind(item, "extracted")); relinked++; }
  }
  if (missing.length) { r.ok = false; r.error = `branches not found: ${missing.join(", ")}`; }
  r.note = `${wanted.length - missing.length}/${wanted.length} branches${relinked ? `, ${relinked} back to linked (call graph)` : ""}`;
  return r;
}
