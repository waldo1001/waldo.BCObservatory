/**
 * The shard cache on disk: one folder per site, every file `<key>.json`, the key being the hash the manifests name.
 * Nothing here ever throws: a cache that cannot be written, read or cleaned costs a download, never an answer.
 *
 * Every session of every client starts its own server, and all of them share this folder. A session holds its
 * manifest for at most a day, and a retired shard is gone from the site, so a file may only go when no session can
 * still want it: each load marks the files its manifests name (mtime = now), and a file is deleted only when no
 * manifest has named it for GRACE_MS, twice that day.
 */
import * as fs from "node:fs";
import { randomBytes } from "node:crypto";
import { join } from "node:path";

/** How long a file no manifest names any more stays: two days, a day of margin over the daily reload. */
export const GRACE_MS = 2 * 86_400_000;
/** What the cache owns: `<key>.json`, and the temp file writeCached leaves when a process dies mid-write. */
const OWNED = /\.json(\.\d+\.[0-9a-f]+\.tmp)?$/;

/**
 * The cache file of a key, or null when the key is not a plain file name: the key comes from a downloaded manifest,
 * and one with a path separator in it would name a file outside the folder. Such a shard is downloaded every time.
 */
export function cachePath(dir: string, key: string): string | null {
  return /^[\w.-]+$/.test(key) ? join(dir, `${key}.json`) : null;
}

/** The file operations the cache uses; tests pass their own to stand in for a locked file. */
export type CacheFs = Pick<typeof fs, "readdirSync" | "statSync" | "utimesSync" | "unlinkSync" | "writeFileSync" | "renameSync">;

/** Writes a cache file under a temp name and renames it into place, so no reader ever sees half a file. */
export function writeCached(path: string, text: string, io: CacheFs = fs): void {
  const tmp = `${path}.${process.pid}.${randomBytes(4).toString("hex")}.tmp`;
  try {
    io.writeFileSync(tmp, text);
    io.renameSync(tmp, path);
  } catch {
    try { io.unlinkSync(tmp); } catch { /* nothing was written, or it is locked: the sweep takes it later */ }
  }
}

/**
 * Marks the files in `keep` (names, `<key>.json`) as in use, and with `remove` deletes the cache's other files that
 * no manifest has named for GRACE_MS. Only regular files directly in `dir` that the cache owns are touched: never a
 * folder, a link or any other file. A file that cannot be marked or deleted (locked on Windows, read-only) is skipped.
 */
export function sweepCache(dir: string, keep: ReadonlySet<string>, remove: boolean, now = Date.now(), io: CacheFs = fs): { removed: number } {
  let removed = 0, entries: fs.Dirent[];
  try { entries = io.readdirSync(dir, { withFileTypes: true }); } catch { return { removed }; }
  for (const e of entries) {
    try {
      if (!e.isFile() || !OWNED.test(e.name)) continue;
      const p = join(dir, e.name);
      if (keep.has(e.name)) { io.utimesSync(p, new Date(now), new Date(now)); continue; }
      if (remove && now - io.statSync(p).mtimeMs > GRACE_MS) { io.unlinkSync(p); removed++; }
    } catch { /* this file stays; the next load tries again */ }
  }
  return { removed };
}
