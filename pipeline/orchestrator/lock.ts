/** Single-run file lock. A lock held by a dead process is taken over (killed run); a live one refuses. */
import { readFileSync, writeFileSync, unlinkSync, existsSync } from "node:fs";
import { dirname } from "node:path";
import { ensureDir } from "../lib/fsx.js";

export function acquireLock(path: string): () => void {
  ensureDir(dirname(path));
  if (existsSync(path)) {
    const pid = Number(readFileSync(path, "utf8").trim());
    if (pid && pid !== process.pid && isAlive(pid)) throw new Error(`another run holds ${path} (pid ${pid})`);
  }
  writeFileSync(path, String(process.pid));
  return () => { try { if (readFileSync(path, "utf8").trim() === String(process.pid)) unlinkSync(path); } catch { /* already gone */ } };
}
function isAlive(pid: number): boolean {
  try { process.kill(pid, 0); return true; } catch (e) { return (e as NodeJS.ErrnoException).code === "EPERM"; }
}
