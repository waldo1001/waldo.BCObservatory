/**
 * check:leak (D08, CONTENT-NOTICE.md, PLAN stage 9): community text must not reach the public repository.
 *
 * Policy checks (no vault needed, so they also run in PR CI):
 * - nothing under vault/ and no LLM cache file is in the tree git would commit
 * - captions live only in data/captions/microsoft/, and only for videos of official video sources
 * - on pages whose tier is not official, every quote is under 25 words unless the page's source opted in (full_text)
 *
 * Shingle scan (needs the vault): every run of SHINGLE consecutive words of community raw text (captions and post
 * bodies of sources without full_text) is hashed; any file git would commit that contains one of those runs is a
 * leak. SHINGLE = 25 because community quotes stay under 25 words. Raw text layout in the vault (the contract for
 * every stage that stores community text):
 *   vault/captions/community/<source>/<key>.segments.json   { segments: [{ text }] }
 *   vault/posts/<source>/<key>.{md,txt,html,json}            post bodies (json: every string value)
 * The vault is required as soon as any community item has stored raw text (a captioned video or a fetched post);
 * before that a missing vault only skips the scan.
 *
 * Provenance (D51): a run of words shared with a community post is only a leak when the file could have taken it
 * from that post. Two cases where it could not, and the scan says so:
 *   - files generated from Microsoft's code alone (data/code/, content/objects/): a blogger quoting an AL signature
 *     shares words with the extractor's output, which never reads a post.
 *   - runs that also appear in official text the repo holds (the roadmap snapshot, Learn's own page descriptions):
 *     the blogger quoted Microsoft too. Checked only when a hit occurs, so a clean run pays nothing.
 * The policy checks above apply to every file either way.
 *
 * Incremental mode (`changedOnly`): only files that differ from HEAD (modified, staged or untracked) are scanned and
 * quote-checked; the nightly's checkpoint commits use it, because everything already committed passed an earlier
 * gate and a full scan of ~1 GB blocks the process for tens of seconds. The night's final commit scans everything.
 */
import { execFileSync } from "node:child_process";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { extname, join, resolve } from "node:path";
import matter from "gray-matter";
import type { SourceDef } from "../lib/config.js";
import { listFiles } from "../lib/fsx.js";
import { stripHtml } from "../lib/http.js";
import { QUOTE_MAX_WORDS } from "../lib/quotes.js";
import { cleanVtt } from "../caption/vtt-clean.js";

export const SHINGLE = QUOTE_MAX_WORDS + 1;
const TEXT_EXT = new Set([".md", ".json", ".jsonl", ".txt", ".yaml", ".yml", ".html", ".htm", ".xml", ".csv", ".vtt", ".js", ".mjs", ".ts", ".astro", ".css", ".svg"]);
const MAX_FILE_BYTES = 50 * 1024 * 1024;

export interface LeakFinding { kind: "vault-in-tree" | "llm-cache-in-tree" | "captions-location" | "quote-length" | "shingle" | "vault-missing"; path: string; detail: string }
export interface LeakReport {
  files_scanned: number; shingles: number; raw_docs: number; vault: "scanned" | "missing" | "not-needed"; findings: LeakFinding[];
  /** Hits suppressed because the run is also in official text the repo holds (the post quoted Microsoft). */
  official_runs: number;
}

/** Words as both sides see them: lowercase letters and digits, punctuation and markdown dropped, link text kept. */
export function leakWords(s: string): string[] {
  return s.toLowerCase().replace(/[‘’ʼ`]/g, "'").replace(/[^a-z0-9']+/g, " ").split(" ").filter((w) => w && w !== "'");
}

/**
 * Text of a file as a reader sees it. A VTT goes through the caption cleaner (cue timings, inline tags and the
 * rolling-caption repeats removed), otherwise cue breaks and repeated lines would split every run of words.
 */
export function scanText(path: string, raw: string): string {
  if (!path.toLowerCase().endsWith(".vtt")) return raw;
  try { return cleanVtt(raw).segments.map((s) => s.text).join(" "); } catch { return raw; }
}

// ---------------------------------------------------------------------------------------------- shingle hashing
// Two rolling polynomial hashes mod 31-bit primes, combined into a 53-bit key. A hit is verified against the raw text
// before it is reported, so a hash collision can never fail a run.
const P1 = 2147483647, P2 = 2147483629, B1 = 1000003, B2 = 917503;
const mulmod = (a: number, b: number, p: number) => {
  // a, b < 2^31: split b to keep every product below 2^53
  const hi = Math.floor(b / 65536), lo = b % 65536;
  return ((a * hi % p) * 65536 + a * lo) % p;
};
function wordHash(w: string): number {
  let h = 2166136261;
  for (let i = 0; i < w.length; i++) { h ^= w.charCodeAt(i); h = Math.imul(h, 16777619) >>> 0; }
  return h;
}
const pow = (b: number, e: number, p: number) => { let r = 1; for (let i = 0; i < e; i++) r = mulmod(r, b, p); return r; };
const TOP1 = pow(B1, SHINGLE - 1, P1), TOP2 = pow(B2, SHINGLE - 1, P2);

/** Call fn(key, start) for every SHINGLE-word window of words. */
export function forEachShingle(words: string[], fn: (key: number, start: number) => boolean | void): void {
  if (words.length < SHINGLE) return;
  const hs = words.map(wordHash);
  let a = 0, b = 0;
  for (let i = 0; i < words.length; i++) {
    if (i >= SHINGLE) {
      a = (a - mulmod(hs[i - SHINGLE] % P1, TOP1, P1) + P1) % P1;
      b = (b - mulmod(hs[i - SHINGLE] % P2, TOP2, P2) + P2) % P2;
    }
    a = (mulmod(a, B1, P1) + hs[i] % P1) % P1;
    b = (mulmod(b, B2, P2) + hs[i] % P2) % P2;
    if (i >= SHINGLE - 1 && fn(a * 4194304 + (b % 4194304), i - SHINGLE + 1) === true) return;
  }
}

/**
 * Per-item guard for derived community text: the first run of SHINGLE words of `raw` that `derived` repeats, or null.
 * Stages call it before writing an extraction, summary or review of a community item, so one item is skipped
 * instead of the commit-time scan blocking the whole night.
 */
export function repeatsRun(raw: string, derived: string): string | null {
  return repeatChecker(raw)(derived);
}
/** repeatsRun with the raw text indexed once, for checking many strings against the same source. */
export function repeatChecker(raw: string): (derived: string) => string | null {
  const rw = leakWords(raw);
  const index = new Set<number>();
  forEachShingle(rw, (k) => { index.add(k); });
  const hay = ` ${rw.join(" ")} `;
  return (derived: string) => {
    if (!index.size) return null;
    const dw = leakWords(derived);
    let hit: string | null = null;
    forEachShingle(dw, (k, start) => {
      if (!index.has(k)) return;
      const run = dw.slice(start, start + SHINGLE).join(" ");
      if (!hay.includes(` ${run} `)) return;
      hit = run;
      return true;
    });
    return hit;
  };
}
/**
 * Trim every string inside `value` that repeats a run of SHINGLE raw words to its first SCRUB_WORDS words + " ...",
 * which stays under the quote limit. Returns the trimmed copy and how many strings were trimmed.
 */
export const SCRUB_WORDS = 20;
export function scrubRepeats<T>(value: T, check: (s: string) => string | null): { value: T; trimmed: number } {
  let trimmed = 0;
  const walk = (v: unknown): unknown => {
    if (typeof v === "string") {
      if (!check(v)) return v;
      trimmed++;
      return `${v.split(/\s+/).slice(0, SCRUB_WORDS).join(" ")} ...`;
    }
    if (Array.isArray(v)) return v.map(walk);
    if (v && typeof v === "object") return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, walk(x)]));
    return v;
  };
  return { value: walk(value) as T, trimmed };
}

// ---------------------------------------------------------------------------------------------- vault raw text

export interface RawDoc { source: string; key: string; path: string; words: string[] }

export function readRawDocs(vaultDir: string, optedIn: Set<string>): RawDoc[] {
  const out: RawDoc[] = [];
  const add = (source: string, path: string, text: string) => {
    if (optedIn.has(source)) return;
    out.push({ source, key: path.slice(path.lastIndexOf("/") + 1), path, words: leakWords(text) });
  };
  const caps = resolve(vaultDir, "captions", "community");
  for (const source of subdirs(caps)) {
    for (const p of listFiles(join(caps, source), ".segments.json")) {
      const d = JSON.parse(readFileSync(p, "utf8"));
      add(source, p, (d.segments ?? []).map((s: any) => String(s.text ?? "")).join(" "));
    }
  }
  const posts = resolve(vaultDir, "posts");
  for (const source of subdirs(posts)) {
    for (const p of listFiles(join(posts, source), [".md", ".txt", ".html", ".json"])) {
      const raw = readFileSync(p, "utf8");
      add(source, p, p.endsWith(".html") ? stripHtml(raw) : p.endsWith(".json") ? jsonStrings(JSON.parse(raw)).join(" ") : raw);
    }
  }
  return out;
}
const subdirs = (dir: string) => (existsSync(dir) ? readdirSync(dir).filter((n) => statSync(join(dir, n)).isDirectory()).sort() : []);
function jsonStrings(v: unknown): string[] {
  if (typeof v === "string") return [v];
  if (Array.isArray(v)) return v.flatMap(jsonStrings);
  if (v && typeof v === "object") return Object.values(v).flatMap(jsonStrings);
  return [];
}

/** Raw community text exists somewhere once a community item was captioned or a community post was fetched. */
export function communityRawExpected(dataDir: string, sources: SourceDef[]): string | null {
  for (const s of sources) {
    if (s.tier === "official" || s.full_text) continue;
    for (const pillar of ["video", "blog"]) {
      for (const p of listFiles(resolve(dataDir, "manifest", pillar, s.id), ".json")) {
        const st = JSON.parse(readFileSync(p, "utf8")).stages ?? {};
        if (st.captioned || (pillar === "blog" && st.fetched)) return p;
      }
    }
  }
  return null;
}

/**
 * Files generated only from Microsoft's AL code: the snapshots and everything derived from them, and the object
 * pages rendered from those snapshots. No community text ever reaches these steps, so a shared run of words means
 * the post quoted Microsoft's code. Indexing the code itself as official text would cost a gigabyte, hence by path.
 */
const OFFICIAL_ONLY = [/^data\/code\//, /^content\/objects\//];
export const officialOnlyOutput = (rel: string) => OFFICIAL_ONLY.some((re) => re.test(rel));

/** Official text the repo holds: the newest roadmap snapshot and Learn's own page descriptions (manifest meta). */
export function readOfficialText(dataDir: string): string[] {
  const out: string[] = [];
  const snaps = resolve(dataDir, "roadmap", "snapshots");
  const latest = existsSync(snaps) ? readdirSync(snaps).filter((f) => f.endsWith(".json")).sort().pop() : undefined;
  if (latest) {
    try {
      for (const e of JSON.parse(readFileSync(join(snaps, latest), "utf8")).items ?? []) out.push(`${e.title ?? ""} ${e.description ?? ""}`);
    } catch { /* a half-written snapshot is not official text */ }
  }
  for (const p of listFiles(resolve(dataDir, "manifest", "docs"), ".json")) {
    try {
      const d = JSON.parse(readFileSync(p, "utf8")).meta?.description;
      if (typeof d === "string") out.push(d);
    } catch { /* skip */ }
  }
  return out;
}

// ---------------------------------------------------------------------------------------------- the check

/** Files that differ from HEAD (modified, staged, untracked-not-ignored, renamed targets), relative to repoDir. */
export function changedFiles(repoDir: string): string[] {
  try {
    const out = execFileSync("git", ["status", "--porcelain", "-z", "-uall"], { cwd: repoDir, maxBuffer: 256 * 1024 * 1024 }).toString("utf8").split("\0");
    const files: string[] = [];
    for (let i = 0; i < out.length; i++) {
      const e = out[i];
      if (!e) continue;
      const code = e.slice(0, 2), path = e.slice(3);
      if (code.startsWith("R") || code.startsWith("C")) i++; // -z: the rename source follows as its own entry
      if (!code.includes("D") && existsSync(join(repoDir, path))) files.push(path);
    }
    return files;
  } catch {
    return committableFiles(repoDir);
  }
}

/** Files git would commit: tracked plus untracked-not-ignored, relative to repoDir. Falls back to a walk without git. */
export function committableFiles(repoDir: string): string[] {
  try {
    return execFileSync("git", ["ls-files", "-z", "-co", "--exclude-standard"], { cwd: repoDir, maxBuffer: 256 * 1024 * 1024 })
      .toString("utf8").split("\0").filter(Boolean).filter((f) => existsSync(join(repoDir, f)));
  } catch {
    return listFiles(repoDir).map((p) => p.slice(resolve(repoDir).length + 1)).filter((f) => !/^(\.git|node_modules|vault|\.cache)\//.test(f) && !f.includes("/node_modules/"));
  }
}

export function checkLeak(o: { repoDir: string; dataDir?: string; contentDir?: string; vaultDir: string; sources: SourceDef[]; policyOnly?: boolean; changedOnly?: boolean }): LeakReport {
  const dataDir = o.dataDir ?? resolve(o.repoDir, "data");
  const contentDir = o.contentDir ?? resolve(o.repoDir, "content");
  const findings: LeakFinding[] = [];
  const files = o.changedOnly ? changedFiles(o.repoDir) : committableFiles(o.repoDir);
  const fileSet = o.changedOnly ? new Set(files.map((f) => resolve(o.repoDir, f))) : null;
  const optedIn = new Set(o.sources.filter((s) => s.tier === "official" || s.full_text).map((s) => s.id));

  // structure
  const officialVideoIds = new Set<string>();
  for (const s of o.sources.filter((x) => x.tier === "official")) {
    // file names are fileKey-encoded (lowercased + hash); the item id carries the real video id
    for (const p of listFiles(resolve(dataDir, "manifest", "video", s.id), ".json")) {
      const id = String(JSON.parse(readFileSync(p, "utf8")).id ?? "");
      officialVideoIds.add(id.slice(id.lastIndexOf("/") + 1));
    }
  }
  const dataRel = resolve(dataDir).slice(resolve(o.repoDir).length + 1);
  for (const f of files) {
    if (f.startsWith("vault/")) findings.push({ kind: "vault-in-tree", path: f, detail: "vault files belong in the private vault repository" });
    else if (/(^|\/)llm-cache\//.test(f)) findings.push({ kind: "llm-cache-in-tree", path: f, detail: "the LLM cache belongs in the private vault" });
    const cap = f.startsWith(`${dataRel}/captions/`) ? f.slice(dataRel.length + 10).split("/") : null;
    if (cap) {
      if (cap[0] !== "microsoft" || cap.length !== 2) findings.push({ kind: "captions-location", path: f, detail: "captions in the public repo live only in data/captions/microsoft/" });
      else {
        const id = cap[1].replace(/\.(segments\.json|vtt)$/, "");
        if (!officialVideoIds.has(id)) findings.push({ kind: "captions-location", path: f, detail: `no official video source has video ${id}` });
      }
    }
  }

  // quotes on pages that are not official
  for (const p of fileSet ? listFiles(contentDir, ".md").filter((f) => fileSet.has(f)) : listFiles(contentDir, ".md")) {
    const fm = matter(readFileSync(p, "utf8")).data as any;
    if (!fm.tier || fm.tier === "official") continue;
    const source = fm.channel ?? fm.source;
    if (source && optedIn.has(source)) continue;
    const quotes: string[] = [...(fm.evidence ?? []).map((e: any) => e?.quote), ...(fm.quotes ?? []).map((q: any) => q?.text)].filter((q): q is string => typeof q === "string");
    for (const q of quotes) {
      const n = leakWords(q).length;
      if (n > QUOTE_MAX_WORDS) findings.push({ kind: "quote-length", path: p.slice(resolve(o.repoDir).length + 1), detail: `${n}-word quote on a ${fm.tier} page (max ${QUOTE_MAX_WORDS}): "${q.slice(0, 60)}..."` });
    }
  }

  // shingles
  const report: LeakReport = { files_scanned: 0, shingles: 0, raw_docs: 0, vault: "not-needed", findings, official_runs: 0 };
  if (o.policyOnly) return report; // PR CI: no vault there by design; the Mini's nightly gate runs the scan
  if (!existsSync(o.vaultDir)) {
    const why = communityRawExpected(dataDir, o.sources);
    if (why) { report.vault = "missing"; findings.push({ kind: "vault-missing", path: o.vaultDir, detail: `community raw text exists (${why.slice(resolve(o.repoDir).length + 1)}) but the vault is not here, so the scan cannot run` }); }
    return report;
  }
  report.vault = "scanned";
  const docs = readRawDocs(o.vaultDir, optedIn);
  report.raw_docs = docs.length;
  const index = new Map<number, number>();
  docs.forEach((d, i) => forEachShingle(d.words, (k) => { if (!index.has(k)) index.set(k, i); }));
  report.shingles = index.size;
  if (!index.size) return report;
  const hits: { f: string; run: string; doc: RawDoc; head: string }[] = [];
  for (const f of files) {
    if (f.startsWith("vault/") || !TEXT_EXT.has(extname(f).toLowerCase())) continue;
    if (officialOnlyOutput(f)) continue; // generated from Microsoft's code alone: it cannot carry a post's words
    const abs = join(o.repoDir, f);
    if (statSync(abs).size > MAX_FILE_BYTES) continue;
    report.files_scanned++;
    const words = leakWords(scanText(f, readFileSync(abs, "utf8")));
    forEachShingle(words, (k, start) => {
      const di = index.get(k);
      if (di === undefined) return;
      const run = words.slice(start, start + SHINGLE).join(" ");
      if (!` ${docs[di].words.join(" ")} `.includes(` ${run} `)) return; // hash collision
      hits.push({ f, run, doc: docs[di], head: words.slice(start, start + 10).join(" ") });
      return true; // one finding per file is enough
    });
  }
  // a run the repo also holds as official text (roadmap, Learn descriptions) came from Microsoft, not from the post
  if (hits.length) {
    const official = ` ${readOfficialText(dataDir).map((t) => leakWords(t).join(" ")).join(" | ")} `;
    for (const h of hits) {
      if (official.includes(` ${h.run} `)) { report.official_runs++; continue; }
      findings.push({ kind: "shingle", path: h.f, detail: `${SHINGLE}+ consecutive words of ${h.doc.source}/${h.doc.key}: "${h.head} ..."` });
    }
  }
  return report;
}
