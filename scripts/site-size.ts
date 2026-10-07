/**
 * Size of the built site as GitHub Pages receives it (D76): `npx tsx scripts/site-size.ts site/dist [--json out]`.
 * actions/upload-pages-artifact tars the directory with GNU tar (`tar --dereference -cvf artifact.tar .`), so the
 * number that counts is the tar, not `du` (disk blocks, 12% over on 59,000 small files). The tar is computed, not
 * built: a 512-byte header per entry (files and directories, `./` included), data in 512-byte blocks, a GNU
 * long-name header for a path over 100 bytes, 1,024 bytes of end-of-archive, the whole padded to 10,240-byte records.
 * Exit 0 under 800 MB, 0 with a warning annotation from 800 MB, 1 from 900 MB (MB = 2^20 bytes, as `du -m` counted).
 */
import { appendFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { extname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

export const MB = 1024 * 1024;
export const WARN_MB = 800;
export const FAIL_MB = 900;
const BLOCK = 512, RECORD = 10240;

export interface Section { name: string; bytes: number; tar_bytes: number; files: number }
export interface SiteSize {
  tar_bytes: number; apparent_bytes: number; files: number; dirs: number;
  section_count: number; sections: Section[]; exts: Record<string, { bytes: number; files: number }>;
}

const blocks = (n: number) => Math.ceil(n / BLOCK) * BLOCK;
/** Tar bytes of one entry as GNU tar writes it; `path` as stored (`./objects/...`, a directory with its trailing `/`). */
export function tarEntryBytes(path: string, size: number): number {
  const len = Buffer.byteLength(path);
  // a name of up to 100 bytes fits the header; a longer one gets a ././@LongLink header plus its name, NUL-terminated
  const longName = len > 100 ? BLOCK + blocks(len + 1) : 0;
  return longName + BLOCK + blocks(size);
}

export function measure(dist: string): SiteSize {
  let tar = 0, apparent = 0, files = 0, dirs = 0;
  const sections = new Map<string, Section>();
  const exts: SiteSize["exts"] = {};
  const section = (name: string) => {
    let s = sections.get(name);
    if (!s) sections.set(name, (s = { name, bytes: 0, tar_bytes: 0, files: 0 }));
    return s;
  };
  const walk = (dir: string, rel: string) => {
    dirs++;
    const t = tarEntryBytes(`./${rel}`, 0);
    tar += t;
    if (rel) section(rel.split("/")[0]).tar_bytes += t;
    for (const name of readdirSync(dir).sort()) {
      const abs = join(dir, name), r = rel + name;
      const st = statSync(abs); // follows links, as `tar --dereference` does
      if (st.isDirectory()) { walk(abs, `${r}/`); continue; }
      const t = tarEntryBytes(`./${r}`, st.size);
      tar += t; apparent += st.size; files++;
      const s = section(rel ? r.split("/")[0] : "(root)");
      s.bytes += st.size; s.tar_bytes += t; s.files++;
      const e = (exts[extname(name).toLowerCase()] ??= { bytes: 0, files: 0 });
      e.bytes += st.size; e.files++;
    }
  };
  walk(resolve(dist), "");
  tar = Math.ceil((tar + 2 * BLOCK) / RECORD) * RECORD;
  const sorted = [...sections.values()].sort((a, b) => b.bytes - a.bytes || a.name.localeCompare(b.name));
  return { tar_bytes: tar, apparent_bytes: apparent, files, dirs, section_count: sorted.length, sections: sorted.slice(0, 10), exts };
}

export interface Verdict { level: "ok" | "warn" | "fail"; exit: 0 | 1; annotation: string | null }
const mb = (b: number) => (b / MB).toFixed(1);
export function verdict(tarBytes: number): Verdict {
  const msg = `site is ${Math.floor(tarBytes / MB)} MB of ${FAIL_MB} MB (tar bytes; Pages limit 1 GB)`;
  if (tarBytes >= FAIL_MB * MB) return { level: "fail", exit: 1, annotation: `::error::${msg}` };
  if (tarBytes >= WARN_MB * MB) return { level: "warn", exit: 0, annotation: `::warning::${msg}` };
  return { level: "ok", exit: 0, annotation: null };
}

export function summaryMarkdown(r: SiteSize): string {
  return [
    `### Site size: ${mb(r.tar_bytes)} MB of ${FAIL_MB} MB (warn from ${WARN_MB} MB)`,
    "",
    "| measure | value |",
    "|---|---|",
    `| tar bytes | ${mb(r.tar_bytes)} MB |`,
    `| apparent bytes | ${mb(r.apparent_bytes)} MB |`,
    `| files | ${r.files.toLocaleString("en")} |`,
    `| headroom to ${FAIL_MB} MB | ${mb(FAIL_MB * MB - r.tar_bytes)} MB |`,
    "",
    "| section | MB | files |",
    "|---|---|---|",
    ...r.sections.map((s) => `| ${s.name} | ${mb(s.bytes)} | ${s.files.toLocaleString("en")} |`),
    "",
  ].join("\n");
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const args = process.argv.slice(2);
  const j = args.indexOf("--json");
  const out = j >= 0 ? args[j + 1] : null;
  const dist = args.find((a, i) => !a.startsWith("--") && (j < 0 || i !== j + 1));
  if (!dist || (j >= 0 && !out)) { console.error("usage: site-size.ts <dist> [--json <out>]"); process.exit(2); }
  const r = measure(dist);
  const md = summaryMarkdown(r);
  console.log(md);
  console.log(`tar_bytes ${r.tar_bytes}, apparent_bytes ${r.apparent_bytes}, files ${r.files}, dirs ${r.dirs}`);
  if (process.env.GITHUB_STEP_SUMMARY) appendFileSync(process.env.GITHUB_STEP_SUMMARY, `${md}\n`);
  if (out) writeFileSync(out, `${JSON.stringify(r, null, 2)}\n`);
  const v = verdict(r.tar_bytes);
  if (v.annotation) console.log(v.annotation);
  process.exit(v.exit);
}
