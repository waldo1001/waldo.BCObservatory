// D123: before a web search or fetch about Business Central, remind the agent that the Observatory is connected.
// A PreToolUse hook (plugin/hooks/hooks.json): reads the hook JSON on stdin, prints one JSON line or nothing, never
// blocks the tool, never writes, never calls the network. Plain ESM without dependencies: it runs from the installed
// plugin folder, which has no node_modules.
import { realpathSync } from "node:fs";
import { fileURLToPath } from "node:url";

export const REMINDER =
  "This looks like a Business Central question. The bc-observatory MCP server is connected and answers these with " +
  "evidence: call bc_search first (bc_whats_new for what is new, bc_get_object for one AL object). If its tools are " +
  'deferred, load them with ToolSearch "bc-observatory": deferred means available, not missing. Use the web only for ' +
  "what the Observatory has no answer to, and say so.";

/** Hosts the Observatory itself hands out: fetching them is following the Observatory, not bypassing it. */
export const SKIP_HOSTS = ["learn.microsoft.com", "waldo1001.github.io"];

const PATTERNS = [
  /\bbusiness ?central\b/i,
  /\bdynamics 365 bc\b/i,
  /\bdynamics nav\b/i,
  /\bBC ?[1-3][0-9]\b/,
  /\bAL (object|language|extension|code|developer)s?\b/i,
  /\b(codeunit|tableextension|pageextension|enumextension|reportextension)s?\b/i,
  /\bBCApps\b/i,
  /\bAL-Go\b/i,
  /\bOn(After|Before)[A-Z]\w+/,
  /\/dynamics365\/business-central\//i,
];

/** True when the text reads as a Business Central question. "BC" alone is too common: it needs a version or a BC-only word. */
export function isBcQuestion(text) {
  return typeof text === "string" && PATTERNS.some((p) => p.test(text));
}

function hostOf(url) {
  try { return new URL(url).hostname.toLowerCase(); } catch { return null; }
}

/** The JSON line to print for one hook input, or null for nothing. */
export function decide(input, env) {
  if (env.BC_OBSERVATORY_HOOK === "0" || !input || typeof input !== "object") return null;
  const tool = input.tool_input;
  if (!tool || typeof tool !== "object") return null;
  let text;
  if (input.tool_name === "WebSearch") text = tool.query;
  else if (input.tool_name === "WebFetch") {
    const host = hostOf(tool.url);
    if (!host || SKIP_HOSTS.includes(host)) return null;
    text = `${tool.url} ${tool.prompt ?? ""}`;
  } else return null;
  if (!isBcQuestion(text)) return null;
  return JSON.stringify({ hookSpecificOutput: { hookEventName: "PreToolUse", additionalContext: REMINDER } });
}

async function main() {
  let raw = "";
  for await (const chunk of process.stdin) raw += chunk;
  const line = decide(JSON.parse(raw), process.env);
  if (line) process.stdout.write(`${line}\n`);
}

const entry = process.argv[1] && realpathSync(process.argv[1]) === realpathSync(fileURLToPath(import.meta.url));
if (entry) main().catch(() => {}).finally(() => process.exit(0));
