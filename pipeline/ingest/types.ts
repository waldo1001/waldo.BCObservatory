/** Shared ingest context and per-source result. Ingest is deterministic discovery: no LLM, no page bodies. */
import type { SourceDef, SourceKind } from "../lib/config.js";
import type { HttpGet } from "../lib/http.js";
import type { DiscoverChange, Manifest, Pillar } from "../lib/manifest.js";

export interface VersionsConfig {
  majors: Record<string, Record<string, string | boolean | null>>;
  repos: Record<string, string>;
  /** config/versions.json `code`: what each snapshot source extracts; hashed into the code items' input hash. */
  code?: Record<string, unknown>;
  /** Majors snapshotted in full, and the order the code pillar works them (29, 28, 30). */
  snapshot?: string[];
  narrative_order?: string[];
  /** D67 call graph scope: `apps` false = W1 only. */
  callgraph?: { apps?: boolean };
}
export interface IngestContext {
  manifest: Manifest;
  http: HttpGet;
  now: Date;
  /** Persistent blobless git mirrors (outside the repo on the Mini). */
  mirrorsDir: string;
  /** data/roadmap: dated snapshots and diffs. */
  roadmapDir: string;
  /** owner/repo to clone URL; tests point it at local repositories. */
  repoUrl: (repo: string) => string;
  /** Hosts of registered sources; discovery suggests only hosts outside this set. */
  knownHosts: Set<string>;
  versions: VersionsConfig;
  /** data/state: small committed bookkeeping (e.g. when a channel was last reconciled). */
  stateDir?: string;
  /** The data directory (change records, backports: D61); defaults to the parent of roadmapDir. */
  dataDir?: string;
  /** Full channel listing for the weekly reconcile; tests inject a fake, production uses yt-dlp. */
  flatPlaylist?: (channelId: string) => Promise<{ id: string; title: string; duration_s: number | null }[]>;
}
export interface Suggestion { host: string; count: number; sample_title: string; sample_url: string }
export interface SourceResult {
  id: string;
  kind: SourceKind;
  ok: boolean;
  deferred?: boolean;
  error?: string;
  note?: string;
  counts: Record<DiscoverChange | "removed", number>;
  suggestions?: Suggestion[];
}

export const PILLAR_OF: Record<SourceKind, Pillar | null> = {
  "docs-git": "docs", "guidelines-git": "guidelines", "code-git": "code", youtube: "video", blog: "blog",
  "roadmap-api": "roadmap", discovery: null, "github-pr": "change",
};

export function newResult(source: Pick<SourceDef, "id" | "kind">): SourceResult {
  return { id: source.id, kind: source.kind, ok: true, counts: { new: 0, changed: 0, updated: 0, unchanged: 0, removed: 0 } };
}
export function tally(r: SourceResult, change: DiscoverChange): void {
  r.counts[change]++;
}
