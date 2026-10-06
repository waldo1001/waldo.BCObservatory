/** Repository paths. Everything derives from ROOT so scripts work from any cwd. */
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
export const ROOT = resolve(here, "..", "..");
export const CONFIG_DIR = resolve(ROOT, "config");
export const SCHEMAS_DIR = resolve(ROOT, "schemas");
export const CONTENT_DIR = resolve(ROOT, "content");
export const DATA_DIR = resolve(ROOT, "data");
export const MANIFEST_DIR = resolve(DATA_DIR, "manifest");
export const RUNS_DIR = resolve(MANIFEST_DIR, "_runs");
export const CAPTIONS_DIR = resolve(DATA_DIR, "captions");
export const INDEX_DIR = resolve(DATA_DIR, "index");
export const GRAPH_DIR = resolve(DATA_DIR, "graph");
export const CODE_DIR = resolve(DATA_DIR, "code");
export const ROADMAP_DIR = resolve(DATA_DIR, "roadmap");
export const OVERRIDES_DIR = resolve(DATA_DIR, "overrides");
export const SOURCES_FILE = resolve(ROOT, "sources.yaml");

/** Local runtime cache (git mirrors, yt-dlp archive, LLM cache mirror). Outside the repo on the Mini. */
export const CACHE_DIR = process.env.BCOBS_CACHE_DIR ?? resolve(ROOT, ".cache");
/** Private vault checkout (community raw text + LLM cache). Never inside the public repo. */
export const VAULT_DIR = process.env.BCOBS_VAULT_DIR ?? resolve(ROOT, "vault");
export const LLM_CACHE_DIR = process.env.BCOBS_LLM_CACHE_DIR ?? resolve(VAULT_DIR, "llm-cache");
