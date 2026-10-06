/** Small filesystem helpers. All writes are temp-then-rename so a killed run never leaves half a file. */
import { existsSync, mkdirSync, readFileSync, readdirSync, renameSync, statSync, writeFileSync, unlinkSync } from "node:fs";
import { dirname, join, resolve } from "node:path";

export function ensureDir(dir: string): void {
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
}
export function exists(path: string): boolean {
  return existsSync(path);
}
export function readText(path: string): string {
  return readFileSync(path, "utf8");
}
export function readJson<T = unknown>(path: string): T {
  return JSON.parse(readFileSync(path, "utf8")) as T;
}
export function readJsonOr<T>(path: string, fallback: T): T {
  return existsSync(path) ? readJson<T>(path) : fallback;
}
export function writeText(path: string, text: string): void {
  ensureDir(dirname(path));
  const tmp = `${path}.${process.pid}.tmp`;
  writeFileSync(tmp, text, "utf8");
  renameSync(tmp, path);
}
export function writeJson(path: string, value: unknown, pretty = true): void {
  writeText(path, (pretty ? JSON.stringify(value, null, 2) : JSON.stringify(value)) + "\n");
}
export function appendLine(path: string, line: string): void {
  ensureDir(dirname(path));
  writeFileSync(path, line.endsWith("\n") ? line : line + "\n", { flag: "a", encoding: "utf8" });
}
export function removeIfExists(path: string): void {
  if (existsSync(path)) unlinkSync(path);
}
/** Recursive file listing with an optional extension filter. Returns absolute paths, sorted. */
export function listFiles(dir: string, ext?: string | string[]): string[] {
  if (!existsSync(dir)) return [];
  const exts = ext === undefined ? null : Array.isArray(ext) ? ext : [ext];
  const out: string[] = [];
  const walk = (d: string) => {
    for (const name of readdirSync(d)) {
      const p = join(d, name);
      const st = statSync(p);
      if (st.isDirectory()) walk(p);
      else if (!exts || exts.some((e) => p.endsWith(e))) out.push(p);
    }
  };
  walk(resolve(dir));
  return out.sort();
}
