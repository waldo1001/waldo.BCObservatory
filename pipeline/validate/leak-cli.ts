/**
 * npm run check:leak [-- --policy-only] : exit 1 when community text could reach the public repository
 * (validate/leak.ts). --policy-only skips the vault scan and its requirement: PR CI has no vault by design.
 */
import { loadSources } from "../lib/config.js";
import { ROOT, VAULT_DIR } from "../lib/paths.js";
import { checkLeak } from "./leak.js";

const started = Date.now();
const policyOnly = process.argv.includes("--policy-only");
const r = checkLeak({ repoDir: ROOT, vaultDir: VAULT_DIR, sources: loadSources(), policyOnly });
for (const f of r.findings.slice(0, 200)) console.error(`leak: ${f.kind} ${f.path}: ${f.detail}`);
if (r.findings.length > 200) console.error(`... and ${r.findings.length - 200} more`);
const scan = r.vault === "scanned" ? `${r.raw_docs} community raw texts, ${r.shingles} shingles, ${r.files_scanned} files scanned`
  : r.vault === "missing" ? "vault missing" : policyOnly ? "policy checks only (--policy-only)" : "no community raw text yet, shingle scan not needed";
console.log(`check:leak: ${scan} (${((Date.now() - started) / 1000).toFixed(1)} s)`);
console.log(r.findings.length ? `check:leak FAILED (${r.findings.length} findings)` : "check:leak OK");
process.exit(r.findings.length ? 1 : 0);
