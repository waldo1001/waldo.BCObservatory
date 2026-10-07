/**
 * Deterministic classification of merged pull requests (D61, docs/specs/bcapps-pull-requests.md section 4.3).
 * Every rule is an exported constant with a test: the list grows from observation, never from a prompt.
 *
 * - A path is `al-src` (AL under an app folder), `al-test`, `translation`, `build`, `docs` or `other`.
 * - A pull request is `code` when any file is `al-src`; otherwise its dominant class names it. Only `code` gets a page.
 * - Bots (AL-Go system files, BCArtifact bumps, dependabot) and backports are recognised from the list payload alone.
 */

export type PathClass = "al-src" | "al-test" | "translation" | "build" | "docs" | "other";
export type ChangeClass = "code" | "test-only" | "translation" | "build" | "docs" | "non-code";

/**
 * The app roots of microsoft/BCApps the code pillar reads (config/versions.json `code.bcapps`): the Base Application
 * of every layer, System Application, Business Foundation, and every first-party app.
 */
// case-insensitive: BCApps spells an app folder both `app/` and `App/` (src/Apps/W1/EDocument/App/src/...)
export const BCAPPS_ROOTS: RegExp[] = [
  /^src\/Layers\/[^/]+\/BaseApp\//i,
  /^src\/System Application\/App\//i,
  /^src\/Business Foundation\/App\//i,
  /^src\/Apps\/[^/]+\/[^/]+\/app\//i,
];
/** A test app or test library anywhere in the tree: `test/`, `Tests/`, `Test Library/`, `TestLibraries/`. */
export const TEST_SEGMENT = /(^|\/)tests?( ?librar(y|ies))?(\/|$)/i;
export const BUILD_PATHS = /^(\.github|build|scripts|\.vscode|\.config|tools)\/|^[^/]+\.(json|ps1|psm1|yml|yaml|txt|props|targets|cmd|sh)$/i;

/** Code roots of a source: BCApps uses its app folders; another repository lists path prefixes in `paths`. */
export function codeRoots(source: { repo?: string; paths?: string[] }): RegExp[] {
  if (source.paths?.length) return source.paths.map((p) => new RegExp(`^${p.replace(/[.+^${}()|[\]\\]/g, "\\$&").replace(/\*/g, "[^/]+")}`));
  return BCAPPS_ROOTS;
}

export function classifyPath(path: string, roots: RegExp[] = BCAPPS_ROOTS): PathClass {
  const lower = path.toLowerCase();
  // a repository that is not BCApps names its source in `paths` (AL-Go: PowerShell actions; BCQuality: markdown rules):
  // there a root decides first, whatever the extension
  if (roots !== BCAPPS_ROOTS && roots.some((r) => r.test(path))) return TEST_SEGMENT.test(path) ? "al-test" : "al-src";
  if (lower.endsWith(".al")) {
    if (TEST_SEGMENT.test(path)) return "al-test";
    return roots.some((r) => r.test(path)) ? "al-src" : "other";
  }
  if (lower.endsWith(".xlf")) return "translation";
  if (lower.endsWith(".md")) return "docs";
  if (BUILD_PATHS.test(path)) return "build";
  return "other";
}

const PR_CLASS_OF: Record<PathClass, ChangeClass> = { "al-src": "code", "al-test": "test-only", translation: "translation", build: "build", docs: "docs", other: "non-code" };

/** `code` when any file is AL source; otherwise the class most files have (ties: the order of the table above). */
export function classifyChange(paths: string[], roots: RegExp[] = BCAPPS_ROOTS): ChangeClass {
  if (!paths.length) return "non-code";
  const n = new Map<PathClass, number>();
  for (const p of paths) { const c = classifyPath(p, roots); n.set(c, (n.get(c) ?? 0) + 1); }
  if (n.get("al-src")) return "code";
  const order: PathClass[] = ["al-test", "translation", "build", "docs", "other"];
  const top = order.reduce((best, c) => ((n.get(c) ?? 0) > (n.get(best) ?? 0) ? c : best), order[0]);
  return PR_CLASS_OF[top];
}

/** `[29.x] `, `[releases/29.x] `, `[main] ` at the start of a title: the branch a port is aimed at. */
export const BRANCH_PREFIX = /^\[(?:releases\/)?(\d+\.x|main)\]\s*/i;
/** Release-branch prefixes mark a backport by themselves; `[main]` does only with a backport note in the body. */
export const RELEASE_PREFIX = /^\[(?:releases\/)?\d+\.x\]\s/i;
/** "Backport of #9692", "(backport #12)", "cherry-pick of #12", "cherry picked from". */
export const BACKPORT_REF = /\bback-?port(?:ed)?\s+(?:of\s+|from\s+)?#(\d+)|\bcherry[- ]?pick(?:ed)?\b(?:\s+(?:of|from)\s+#(\d+))?/i;
export const BOT_TITLE = /^\[AL-Go\]|^Update (AL-Go|BCArtifact|version|translations?)\b/i;

export interface PrLike { title: string; body?: string | null; user?: { login?: string; type?: string } | null }

export const stripBranchPrefix = (title: string) => title.replace(BRANCH_PREFIX, "").trim();

export function isBot(pr: PrLike): boolean {
  const login = pr.user?.login ?? "";
  return pr.user?.type === "Bot" || /\[bot\]$/i.test(login) || BOT_TITLE.test(stripBranchPrefix(pr.title));
}

/** A backport, and the original's number when the body names it. */
export function backportOf(pr: PrLike): { original: number | null } | null {
  const ref = (pr.body ?? "").match(BACKPORT_REF) ?? pr.title.match(BACKPORT_REF);
  const original = ref ? Number(ref[1] ?? ref[2]) || null : null;
  if (RELEASE_PREFIX.test(pr.title)) return { original };
  if (ref) return { original };
  return null;
}

/** A title without its branch prefix, folded: how a backport finds its original when the body names none. */
export const titleKey = (title: string) => stripBranchPrefix(title).toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

/** Issues a pull request closes (`fixes #12`) and Azure Boards work items (`AB#640900`). */
export const FIXES = /\b(?:fix(?:e[sd])?|close[sd]?|resolve[sd]?)\s*:?\s+#(\d+)/gi;
export const WORK_ITEM = /\bAB#(\d+)/g;
export function references(body: string | null | undefined): { fixes_issues: number[]; work_items: number[] } {
  const b = body ?? "";
  const uniq = (xs: number[]) => [...new Set(xs)].sort((a, c) => a - c);
  return { fixes_issues: uniq([...b.matchAll(FIXES)].map((m) => Number(m[1]))), work_items: uniq([...b.matchAll(WORK_ITEM)].map((m) => Number(m[1]))) };
}

/** A fork's pull request (label `From Fork`): a community contribution to Microsoft's code. */
export const isCommunity = (labels: string[]) => labels.some((l) => /^from fork$/i.test(l));
