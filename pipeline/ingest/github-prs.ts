/**
 * Merged pull requests as change items (D61, docs/specs/bcapps-pull-requests.md section 4.2). Discovery only: the
 * list payload carries what classification needs (merge date and SHA, base branch, author type, labels, title, body),
 * so bots and backports cost no extra call; the record and the file list are the `fetched` stage's.
 *
 * Tracked branches: BCApps's per major (config/versions.json, `snapshot_source: bcapps`), or the source's `branch`
 * for another repository. Per branch the list is read newest-updated first until an entry is older than the cursor
 * (the highest `updated_at` of the last complete listing), updated before the backfill horizon, or page 10. A 304 means
 * nothing new. Cursor and ETag advance only after a complete listing: a rate-limit stop leaves them, and the next run
 * picks up where it is. The body is never stored here.
 */
import { resolve } from "node:path";
import { readJsonOr, writeJson, writeJsonLines } from "../lib/fsx.js";
import { ghGet, GithubRateLimited, type GhResponse } from "../lib/github.js";
import type { SourceDef } from "../lib/config.js";
import { horizonFor } from "../lib/queue.js";
import { backportOf, isBot, isCommunity, titleKey } from "../changes/classify.js";
import { newResult, tally, type IngestContext, type SourceResult } from "./types.js";

/** Bump to re-fetch and re-extract every change (the input hash carries it). */
export const CHANGE_VERSION = 1;
/** A normal night stops at the cursor long before this; the first listing (the backfill) reads down to the horizon. */
export const MAX_PAGES = 10;
export const BACKFILL_PAGES = 100;

export interface PrListEntry {
  number: number; title: string; body?: string | null; html_url: string; state: string; draft?: boolean;
  merged_at: string | null; updated_at: string; created_at?: string; merge_commit_sha: string | null;
  base: { ref: string }; user: { login: string; type: string } | null; labels: { name: string }[];
}
export interface Backport { number: number; base: string; merged_at: string; url: string; title_key: string }
type BranchState = { cursor: string | null; etag: string | null };

export const repoSlug = (repo: string) => repo.split("/")[1].toLowerCase();
export const changesDir = (dataDir: string, repo: string) => resolve(dataDir, "changes", repoSlug(repo));
export const backportsPath = (dataDir: string, repo: string) => resolve(changesDir(dataDir, repo), "backports.json");
/**
 * What is moving but not merged (spec section 9): open pull requests per tracked branch (no page until merged, no
 * fetch, bots left out), the newest open issues (BCApps's public bug tracker) and the releases. Lists only.
 */
export const activityPath = (dataDir: string, repo: string) => resolve(changesDir(dataDir, repo), "activity.json");
export interface OpenPr { number: number; title: string; url: string; base: string; major: string | null; author: string | null; labels: string[]; draft: boolean; created_at: string; updated_at: string; community_contribution: boolean }
export interface OpenIssue { number: number; title: string; url: string; labels: string[]; author: string | null; created_at: string; comments: number }
export interface Release { tag: string; name: string; url: string; published_at: string | null; prerelease: boolean }
export interface Activity { open: OpenPr[]; issues: OpenIssue[]; releases: Release[] }
export const OPEN_PER_BRANCH = 100;
export const ISSUES_KEPT = 50;
export const RELEASES_KEPT = 20;
/** Every merged pull request seen, bots and backports included: what the digest counts. `[merged day, base, kind]`. */
export const mergedLogPath = (dataDir: string, repo: string) => resolve(changesDir(dataDir, repo), "merged.json");
export type MergedKind = "item" | "bot" | "backport";
const statePath = (stateDir: string) => resolve(stateDir, "github-prs.json");

/** The branches a source tracks, with the BC major each maps to (null for repositories that are not BCApps). */
export function trackedBranches(source: Pick<SourceDef, "repo" | "branch">, versions: IngestContext["versions"]): { branch: string; major: string | null }[] {
  if (source.repo === "microsoft/BCApps") {
    return Object.entries(versions.majors)
      .filter(([, v]) => v.snapshot_source === "bcapps" && typeof v.bcapps_branch === "string")
      .map(([major, v]) => ({ branch: String(v.bcapps_branch), major }))
      .sort((a, b) => Number(b.major) - Number(a.major));
  }
  return [{ branch: source.branch ?? "main", major: null }];
}

export async function ingestGithubPrs(source: SourceDef, ctx: IngestContext): Promise<SourceResult> {
  const r = newResult(source);
  const repo = source.repo!;
  const dataDir = ctx.dataDir ?? resolve(ctx.roadmapDir, "..");
  const stateDir = ctx.stateDir ?? resolve(dataDir, "state");
  const state = readJsonOr<Record<string, Record<string, BranchState>>>(statePath(stateDir), {});
  const mine = (state[source.id] ??= {});
  const horizon = horizonFor(source, ctx.now);
  const backports = readJsonOr<Record<string, Backport[]>>(backportsPath(dataDir, repo), {});
  const log = readJsonOr<Record<string, [string, string, MergedKind]>>(mergedLogPath(dataDir, repo), {});
  const seen = (pr: PrListEntry, kind: MergedKind) => { log[String(pr.number)] = [pr.merged_at!.slice(0, 10), pr.base.ref, kind]; };
  const orphanKey = "unmatched";
  let merged = 0, bots = 0, ports = 0;
  const notes: string[] = [];
  const branches = trackedBranches(source, ctx.versions);
  try {
    for (const { branch, major } of branches) {
      const prev = mine[branch] ?? { cursor: null, etag: null };
      let url: string | null = `/repos/${repo}/pulls?state=closed&sort=updated&direction=desc&base=${encodeURIComponent(branch)}&per_page=100`;
      let top: string | null = null, etag: string | null = null;
      let pages = 0, done = false;
      while (url && !done && pages < (prev.cursor ? MAX_PAGES : BACKFILL_PAGES)) {
        const res: GhResponse<PrListEntry[]> = await ghGet<PrListEntry[]>(url, { etag: pages === 0 ? prev.etag : null, http: ctx.http });
        pages++;
        if (res.status === 304) { done = true; etag = prev.etag; top = prev.cursor; break; }
        if (pages === 1) etag = res.etag;
        for (const pr of res.json ?? []) {
          top ??= pr.updated_at;
          if (prev.cursor && pr.updated_at < prev.cursor) { done = true; break; }
          // the list is sorted by update: an old pull request with a fresh comment comes early. It is skipped, and the
          // listing stops only once updates themselves are older than the horizon (a merge is never after its update)
          if (horizon && Date.parse(pr.updated_at) < horizon.getTime()) { done = true; break; }
          if (!pr.merged_at) continue;
          if (horizon && Date.parse(pr.merged_at) < horizon.getTime()) continue;
          merged++;
          if (isBot(pr)) { bots++; seen(pr, "bot"); continue; }
          const bp = backportOf(pr);
          if (bp) {
            ports++;
            seen(pr, "backport");
            const entry: Backport = { number: pr.number, base: pr.base.ref, merged_at: pr.merged_at, url: pr.html_url, title_key: titleKey(pr.title) };
            const k = bp.original ? String(bp.original) : orphanKey;
            const list = (backports[k] ??= []);
            if (!list.some((b) => b.number === pr.number)) list.push(entry);
            continue;
          }
          seen(pr, "item");
          const labels = pr.labels.map((l) => l.name).sort();
          const { change } = ctx.manifest.discover({
            pillar: "change", source: source.id, key: String(pr.number), tier: "official", title: pr.title, url: pr.html_url,
            published_at: pr.merged_at, input_hash: `${pr.merge_commit_sha}:c${CHANGE_VERSION}`,
            meta: { number: pr.number, repo, base: pr.base.ref, major, merge_commit_sha: pr.merge_commit_sha, author: pr.user?.login ?? null,
              author_type: pr.user?.type ?? null, labels, community_contribution: isCommunity(labels), title_key: titleKey(pr.title) },
          }, ctx.now);
          tally(r, change);
        }
        url = done ? null : res.next;
      }
      // a complete listing (or a 304) moves the cursor; the page cap counts as complete: older entries are older
      mine[branch] = { cursor: top ?? prev.cursor, etag: etag ?? prev.etag };
      notes.push(branch);
    }
    await readActivity(source, ctx, dataDir, mine, branches);
  } catch (e) {
    if (!(e instanceof GithubRateLimited)) throw e;
    r.ok = false;
    r.error = e.message;
  }
  for (const list of Object.values(backports)) list.sort((a, b) => a.merged_at.localeCompare(b.merged_at) || a.number - b.number);
  writeJson(backportsPath(dataDir, repo), Object.fromEntries(Object.entries(backports).sort(([a], [b]) => a.localeCompare(b))));
  writeJsonLines(mergedLogPath(dataDir, repo), Object.fromEntries(Object.entries(log).sort((a, b) => Number(a[0]) - Number(b[0]))));
  writeJson(statePath(stateDir), state);
  const cursor = Object.values(mine).map((s) => s.cursor).filter(Boolean).sort().at(-1);
  r.note = `${merged} merged in ${notes.join(", ") || "no branch"}; ${bots} bots, ${ports} backports skipped${cursor ? `; cursor ${cursor.slice(0, 10)}` : ""}`;
  return r;
}

interface IssueEntry { number: number; title: string; html_url: string; labels: { name: string }[]; user: { login: string } | null; created_at: string; comments: number; pull_request?: unknown }
interface ReleaseEntry { tag_name: string; name: string | null; html_url: string; published_at: string | null; prerelease: boolean; draft: boolean }

/** Open pull requests, open issues and releases, each with its own ETag: a quiet night is a handful of 304s. */
async function readActivity(source: SourceDef, ctx: IngestContext, dataDir: string, mine: Record<string, BranchState>, branches: { branch: string; major: string | null }[]): Promise<void> {
  const repo = source.repo!;
  const prev = readJsonOr<Activity>(activityPath(dataDir, repo), { open: [], issues: [], releases: [] });
  const get = async <T>(key: string, path: string): Promise<T | null> => {
    const st = mine[key] ?? { cursor: null, etag: null };
    const res = await ghGet<T>(path, { etag: st.etag, http: ctx.http });
    if (res.status === 304) return null;
    mine[key] = { cursor: null, etag: res.etag };
    return res.json;
  };
  const open: OpenPr[] = [];
  for (const { branch, major } of branches) {
    const list = await get<PrListEntry[]>(`open:${branch}`, `/repos/${repo}/pulls?state=open&sort=updated&direction=desc&base=${encodeURIComponent(branch)}&per_page=${OPEN_PER_BRANCH}`);
    if (list === null) { open.push(...prev.open.filter((p) => p.base === branch)); continue; }
    for (const pr of list) {
      if (isBot(pr) || backportOf(pr)) continue;
      const labels = pr.labels.map((l) => l.name).sort();
      open.push({ number: pr.number, title: pr.title, url: pr.html_url, base: pr.base.ref, major, author: pr.user?.login ?? null, labels, draft: !!pr.draft,
        created_at: pr.created_at ?? pr.updated_at, updated_at: pr.updated_at, community_contribution: isCommunity(labels) });
    }
  }
  const issuesRaw = await get<IssueEntry[]>("issues", `/repos/${repo}/issues?state=open&sort=created&direction=desc&per_page=${ISSUES_KEPT}`);
  const issues = issuesRaw === null ? prev.issues : issuesRaw.filter((i) => !i.pull_request).slice(0, ISSUES_KEPT)
    .map((i) => ({ number: i.number, title: i.title, url: i.html_url, labels: i.labels.map((l) => l.name).sort(), author: i.user?.login ?? null, created_at: i.created_at, comments: i.comments }));
  const relRaw = await get<ReleaseEntry[]>("releases", `/repos/${repo}/releases?per_page=${RELEASES_KEPT}`);
  const releases = relRaw === null ? prev.releases : relRaw.filter((x) => !x.draft)
    .map((x) => ({ tag: x.tag_name, name: x.name || x.tag_name, url: x.html_url, published_at: x.published_at, prerelease: x.prerelease }));
  open.sort((a, b) => b.updated_at.localeCompare(a.updated_at) || b.number - a.number);
  writeJson(activityPath(dataDir, repo), { open, issues, releases } satisfies Activity);
}
