/** Git plumbing for ingest: blobless bare mirrors (trees and history, no file contents), ls-remote, ls-tree, log. */
import { execFile } from "node:child_process";
import { existsSync } from "node:fs";
import { dirname } from "node:path";
import { ensureDir } from "./fsx.js";

export function git(args: string[], cwd?: string): Promise<string> {
  return new Promise((resolvePromise, reject) => {
    execFile("git", args, { cwd, maxBuffer: 512 * 1024 * 1024, env: { ...process.env, GIT_TERMINAL_PROMPT: "0" } }, (err, stdout, stderr) => {
      if (err) reject(new Error(`git ${args.slice(0, 3).join(" ")} failed: ${String(stderr || err.message).trim().slice(0, 400)}`));
      else resolvePromise(stdout);
    });
  });
}

/** Clone once (bare, blob:none, single branch), then fetch deltas. Returns the mirror path. */
export async function ensureMirror(url: string, dir: string, branch: string): Promise<string> {
  if (!existsSync(dir)) {
    ensureDir(dirname(dir));
    await git(["clone", "-q", "--bare", "--filter=blob:none", "--single-branch", "--branch", branch, url, dir]);
  } else {
    await git(["fetch", "-q", "--filter=blob:none", "origin", `+refs/heads/${branch}:refs/heads/${branch}`], dir);
  }
  return dir;
}

export async function lsRemote(url: string, refs: string[]): Promise<Map<string, string>> {
  const out = await git(["ls-remote", url, ...refs]);
  const map = new Map<string, string>();
  for (const line of out.split("\n")) {
    const [sha, ref] = line.trim().split(/\s+/);
    if (sha && ref) map.set(ref.replace(/^refs\/heads\//, ""), sha);
  }
  return map;
}

export interface TreeEntry { path: string; blob: string }
export async function lsTree(dir: string, ref: string, paths: string[]): Promise<TreeEntry[]> {
  const out = await git(["ls-tree", "-r", "--full-tree", ref, "--", ...paths], dir);
  const entries: TreeEntry[] = [];
  for (const line of out.split("\n")) {
    const m = line.match(/^\d+ blob ([0-9a-f]{40})\t(.+)$/);
    if (m) entries.push({ blob: m[1], path: m[2] });
  }
  return entries;
}

/** Last commit date (UTC ISO) per path, from one newest-first history walk. */
export async function lastCommitDates(dir: string, ref: string, paths: string[]): Promise<Map<string, string>> {
  const out = await git(["log", "--format=C %cI", "--name-only", "--no-renames", ref, "--", ...paths], dir);
  const dates = new Map<string, string>();
  let current = "";
  for (const line of out.split("\n")) {
    if (line.startsWith("C ")) { current = new Date(line.slice(2).trim()).toISOString(); continue; }
    const p = line.trim();
    if (p && current && !dates.has(p)) dates.set(p, current);
  }
  return dates;
}

export async function headSha(dir: string, ref: string): Promise<string> {
  return (await git(["rev-parse", ref], dir)).trim();
}
