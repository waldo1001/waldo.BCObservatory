/**
 * `fetched` for a merged pull request (D61, spec section 4.5): the pull request and its file list from the GitHub API,
 * classified and joined to object pages by exact path, written as data/changes/<repo>/<n>.json (`bcobs-change@1`).
 *
 * Metadata only (D10): number, title, merge data, author login, labels, changed paths with counts, the join. Never a
 * `patch`, never the body: the body goes to the runner's cache for tonight's extraction and data/ keeps its hash.
 * A pull request that is not `code` (tests, translations, build, docs only) ends skipped `non-code` with its totals
 * recorded and no file list. An exhausted rate limit holds the item: no attempt counted, the next run continues.
 */
import { resolve } from "node:path";
import { exists, readJson, readText, writeJson, writeText } from "../lib/fsx.js";
import { ghGet, GithubError, GithubRateLimited, type GhResponse } from "../lib/github.js";
import type { HttpGet } from "../lib/http.js";
import type { ManifestItem } from "../lib/manifest.js";
import { canonicalJson, sha256 } from "../lib/text.js";
import { StageHold, type StageHandler } from "../orchestrator/execute.js";
import { classifyChange, classifyPath, codeRoots, isCommunity, references, type ChangeClass, type PathClass } from "../changes/classify.js";
import { joinFiles, loadFileIndex, type JoinedObject, type Unjoined } from "../code/files-index.js";
import { changesDir, repoSlug } from "../ingest/github-prs.js";

/** GitHub lists at most 3,000 files of a pull request (30 pages of 100). */
const MAX_FILE_PAGES = 30;
/** Issues a change names as fixed whose title and state are read (one call each). */
export const MAX_ISSUES = 3;

export interface ChangeFile { path: string; status: string; additions: number; deletions: number; class: PathClass; previous_filename?: string }
export interface ChangeRecord {
  schema: "bcobs-change@1"; number: number; repo: string; source: string; url: string; base: string; major: string | null; merged_at: string;
  merge_commit_sha: string | null; author: string | null; author_type: string | null; labels: string[]; community_contribution: boolean;
  title: string; body_hash: string | null; fixes_issues: number[]; work_items: number[]; change_class: ChangeClass;
  /** Title and state of the issues it fixes (spec section 9: issues), at most MAX_ISSUES calls. */
  issues?: { number: number; title: string; state: string }[];
  files: ChangeFile[]; totals: { files: number; additions: number; deletions: number; al: number };
  join: { major: string | null; commit: string | null; objects: JoinedObject[]; unjoined: Unjoined[] };
  systems: string[]; apps: string[];
}

export const changeNumber = (item: Pick<ManifestItem, "id">) => Number(item.id.slice(item.id.lastIndexOf("/") + 1));
export const changeRepo = (item: Pick<ManifestItem, "meta">) => String(item.meta?.repo ?? "microsoft/BCApps");
export const changeRecordPath = (dataDir: string, repo: string, n: number) => resolve(changesDir(dataDir, repo), `${n}.json`);
export const changeBodyPath = (cacheDir: string, repo: string, n: number) => resolve(cacheDir, "changes", repoSlug(repo), `${n}.body`);

interface PrDetail { number: number; title: string; body: string | null; html_url: string; merged_at: string | null; merge_commit_sha: string | null;
  base: { ref: string }; user: { login: string; type: string } | null; labels: { name: string }[]; changed_files: number }
interface PrFile { filename: string; status: string; additions: number; deletions: number; previous_filename?: string }

/** Join a record's AL source files against the file index of its major (also used by the nightly relink). */
export function joinRecord(rec: Pick<ChangeRecord, "files" | "major">, dataDir: string): { join: ChangeRecord["join"]; systems: string[]; apps: string[] } {
  const index = rec.major ? loadFileIndex(dataDir, rec.major) : null;
  const al = rec.files.filter((f) => f.class === "al-src").map((f) => ({ path: f.path, status: f.status, ...(f.previous_filename ? { previous_filename: f.previous_filename } : {}) }));
  const j = joinFiles(al, index);
  const apps = [...new Set(j.objects.map((o) => o.app).filter((a): a is string => !!a))].sort();
  return { join: { major: rec.major, commit: index?.commit ?? null, objects: j.objects, unjoined: j.unjoined }, systems: j.systems, apps };
}

export function changeFetched(deps: { cacheDir: string; http?: HttpGet; roots?: (source: string) => RegExp[] }): StageHandler {
  return {
    lane: "github",
    run: async (item, ctx) => {
      const repo = changeRepo(item), n = changeNumber(item);
      let pr: PrDetail;
      const files: PrFile[] = [];
      try {
        pr = (await ghGet<PrDetail>(`/repos/${repo}/pulls/${n}`, { http: deps.http })).json!;
        let url: string | null = `/repos/${repo}/pulls/${n}/files?per_page=100`;
        for (let page = 0; url && page < MAX_FILE_PAGES; page++) {
          const res: GhResponse<PrFile[]> = await ghGet<PrFile[]>(url, { http: deps.http });
          files.push(...(res.json ?? []));
          // follow the next page only when the pull request has more than one page of files
          url = pr.changed_files > files.length ? res.next : null;
        }
      } catch (e) {
        if (e instanceof GithubRateLimited) throw new StageHold(e.message);
        throw e;
      }
      if (!pr.merged_at) return { skip: "not-merged" };
      const roots = deps.roots?.(item.source) ?? codeRoots({ repo });
      const all: ChangeFile[] = files.map((f) => ({ path: f.filename, status: f.status, additions: f.additions, deletions: f.deletions, class: classifyPath(f.filename, roots), ...(f.previous_filename ? { previous_filename: f.previous_filename } : {}) }));
      const change_class = classifyChange(all.map((f) => f.path), roots);
      const labels = pr.labels.map((l) => l.name).sort();
      const refs = references(pr.body);
      const major = (item.meta?.major as string | null | undefined) ?? null;
      const totals = { files: Math.max(pr.changed_files, all.length), additions: all.reduce((s, f) => s + f.additions, 0), deletions: all.reduce((s, f) => s + f.deletions, 0), al: all.filter((f) => f.class === "al-src").length };
      const code = change_class === "code";
      const base: ChangeRecord = {
        schema: "bcobs-change@1", number: n, repo, source: item.source, url: pr.html_url, base: pr.base.ref, major, merged_at: pr.merged_at,
        merge_commit_sha: pr.merge_commit_sha, author: pr.user?.login ?? null, author_type: pr.user?.type ?? null, labels, community_contribution: isCommunity(labels),
        title: pr.title, body_hash: pr.body ? sha256(pr.body) : null, ...refs, change_class,
        // a pull request without a page keeps its totals only: a translation run touches thousands of files
        files: code ? all : [], totals, join: { major, commit: null, objects: [], unjoined: [] }, systems: [], apps: [],
      };
      let rec: ChangeRecord = code ? { ...base, ...joinRecord(base, ctx.dataDir) } : base;
      if (code && refs.fixes_issues.length) {
        const issues: NonNullable<ChangeRecord["issues"]> = [];
        try {
          for (const i of refs.fixes_issues.slice(0, MAX_ISSUES)) {
            const res = await ghGet<{ number: number; title: string; state: string; pull_request?: unknown }>(`/repos/${repo}/issues/${i}`, { http: deps.http });
            if (res.json && !res.json.pull_request) issues.push({ number: res.json.number, title: res.json.title, state: res.json.state });
          }
        } catch (e) {
          if (e instanceof GithubRateLimited) throw new StageHold(e.message);
          // an issue that is gone or private (404, 410) is left out; the number still links
          if (!(e instanceof GithubError)) throw e;
        }
        rec = { ...rec, issues };
      }
      writeJson(changeRecordPath(ctx.dataDir, repo, n), rec);
      if (!code) return { skip: "non-code", data: { change_class, files: totals.files } };
      if (pr.body) writeText(changeBodyPath(deps.cacheDir, repo, n), pr.body);
      return {
        output_hash: sha256(canonicalJson(rec)),
        data: { change_class, files: totals.files, al: totals.al, objects: rec.join.objects.length, unjoined: rec.join.unjoined.length },
        patch: { title: pr.title },
      };
    },
  };
}

/** The body for extraction: tonight's cache, else one more call (a run that stopped between the two stages). */
export async function changeBody(item: ManifestItem, cacheDir: string, http?: HttpGet): Promise<string> {
  const repo = changeRepo(item), n = changeNumber(item);
  const p = changeBodyPath(cacheDir, repo, n);
  if (exists(p)) return readText(p);
  try {
    const pr = (await ghGet<{ body: string | null }>(`/repos/${repo}/pulls/${n}`, { http })).json;
    if (pr?.body) writeText(p, pr.body);
    return pr?.body ?? "";
  } catch (e) {
    if (e instanceof GithubRateLimited) throw new StageHold(e.message);
    throw e;
  }
}

export const readChangeRecord = (dataDir: string, item: Pick<ManifestItem, "id" | "meta">): ChangeRecord | null => {
  const p = changeRecordPath(dataDir, changeRepo(item), changeNumber(item));
  return exists(p) ? readJson<ChangeRecord>(p) : null;
};
