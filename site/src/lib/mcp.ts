/**
 * The MCP page (D84): what the bc-observatory server and the Claude Code plugin do, what to ask, how to install.
 * Facts come from the tree at build time (packages/mcp/package.json, plugin/.claude-plugin/plugin.json); the tool and
 * skill lists here are pinned to the server and the plugin by tests/unit/mcp.test.ts. No Astro imports.
 */
export interface Tool { name: string; title: string; what: string; example: string }
export interface Skill { name: string; what: string }
export interface Ask { ask: string; via: string }
export interface InstallStep { client: string; how: string; code: string; lang: "bash" | "json" }

export const SERVER_CMD = "claude mcp add bc-observatory -- npx -y bc-observatory@latest";
export const PLUGIN_CMD = "claude plugin marketplace add waldo1001/waldo.BCObservatory";
export const ATLAS_URL = "https://bc-code-atlas.stefanmaron.dev/mcp";

/** The nine tools, in the server's order (packages/mcp/src/server.ts registerTool), each with the ask it answers. */
export const TOOLS: Tool[] = [
  { name: "search", title: "Search the knowledge base", what: "Every page by title, AL object caption, summary and tags; hybrid (keywords plus meaning), so a paraphrase still finds the page. Filter by type, tier or galaxy system.", example: "search('posting preview')" },
  { name: "ls", title: "List pages", what: "Browse the page tree; an empty path lists the sections.", example: "ls('objects/table')" },
  { name: "cat", title: "Read a page", what: "The full markdown of a page: frontmatter with evidence and links, then the body.", example: "cat('localizations/be')" },
  { name: "get_object", title: "Look up an AL object", what: "An object of W1 or a first-party app by type and id or exact name: fields, keys, events, public procedures, obsolete state, versions, countries that replace it, Learn pages.", example: "get_object('table', '18')" },
  { name: "diff_object", title: "What changed in an object", what: "Member-level changes of a W1 object between two consecutive versions: fields, events, procedures, keys, properties, obsolete state.", example: "diff_object('codeunit', 'Sales-Post', '29', '30')" },
  { name: "localization", title: "A country localization", what: "What a country layer adds to or changes in W1, with its Learn local functionality hub.", example: "localization('BE')" },
  { name: "whats_new", title: "What is new", what: "Videos, posts, roadmap features, AL extension releases and code changes (merged pull requests) dated on or after a date, newest first.", example: "whats_new('2026-10-01')" },
  { name: "blog_footprint", title: "A source's footprint", what: "What a blog or channel covers: its posts or videos and the systems they touch.", example: "blog_footprint('kauffmann-nl')" },
  { name: "feedback", title: "Report a problem with a page", what: "A prefilled GitHub issue link for a page (wrong fact, missing evidence, broken link). Nothing is sent by the agent.", example: "feedback('objects/table/18', 'field 7 is wrong')" },
];

/** The plugin's skills (plugin/skills/<name>/SKILL.md), one line each, from their descriptions. */
export const SKILLS: Skill[] = [
  { name: "bc-lookup", what: "Business Central facts with evidence: AL objects, Learn documentation, roadmap features, videos and posts. For 'what is table 18', 'where is this documented'." },
  { name: "bc-whats-new", what: "Recent videos, posts and roadmap features with status, and what changed in the code between versions. For 'what's new', 'what changed in BC30'." },
  { name: "bc-localization", what: "Which objects a country layer adds, which W1 objects it changes, added fields and events, and where Learn documents the local functionality." },
  { name: "bc-grounding", what: "Both servers together: the observatory for ids, fields, events, versions, callers and evidence, bc-code-atlas for the procedure body and what one procedure calls." },
];

/** What to type once it is installed, and what the agent reaches for. */
export const ASKS: Ask[] = [
  { ask: "What is on table 18, and which fields are obsolete?", via: "get_object" },
  { ask: "What changed in codeunit Sales-Post between BC29 and BC30?", via: "diff_object" },
  { ask: "What does the Belgian localization change in W1?", via: "localization" },
  { ask: "What is new in Business Central since last Monday?", via: "whats_new" },
  { ask: "Where is posting preview documented, and who blogged about it?", via: "search, cat" },
  { ask: "What does kauffmann-nl write about?", via: "blog_footprint" },
  { ask: "Show me the body of Sales-Post.PostInvoice and what it calls.", via: "bc-code-atlas via the plugin" },
];

export function installSteps(repo: string): InstallStep[] {
  return [
    { client: "Claude Code: the plugin (server, four skills, bc-code-atlas)", how: "One command. The plugin registers the MCP server and the bc-code-atlas server and ships the four skills.", code: PLUGIN_CMD, lang: "bash" },
    { client: "Claude Code: the server only", how: "No skills, no atlas: just the nine tools.", code: SERVER_CMD, lang: "bash" },
    { client: "Claude Desktop, Cursor, Windsurf and other MCP clients", how: "Add the server to the client's MCP configuration (claude_desktop_config.json, .cursor/mcp.json, ...).", code: JSON.stringify({ mcpServers: { "bc-observatory": { command: "npx", args: ["-y", "bc-observatory@latest"] } } }, null, 2), lang: "json" },
    { client: "VS Code (GitHub Copilot)", how: "In .vscode/mcp.json of the workspace, or the user profile's mcp.json.", code: JSON.stringify({ servers: { "bc-observatory": { type: "stdio", command: "npx", args: ["-y", "bc-observatory@latest"] }, "bc-code-atlas": { type: "http", url: ATLAS_URL } } }, null, 2), lang: "json" },
    { client: "From a checkout of the repository", how: "Reads every page from disk instead of the site; for working on the knowledge base itself.", code: `git clone ${repo}.git && cd waldo.BCObservatory && npm ci\nclaude mcp add bc-observatory -- env BC_OBSERVATORY_LOCAL=$PWD node --import tsx packages/mcp/src/server.ts`, lang: "bash" },
  ];
}

export interface McpVersions { server: string; plugin: string }

/** The markdown twin (/mcp.md). */
export function mcpMarkdown(v: McpVersions, repo: string, site: string): string {
  const L = [
    "# MCP: Business Central for your agent", "",
    "The knowledge base this site is built from, as an MCP server your agent can query, and a Claude Code plugin around it. Every answer carries the page, its trust tier (official is Microsoft, community is everyone else) and its evidence. No API key, no account: the server downloads the site's search index once a day and reads pages as markdown.", "",
    `Server: \`bc-observatory\` ${v.server} on npm (Node 20 or newer). Plugin: \`bc-observatory\` ${v.plugin} from the repository's marketplace.`, "",
    "## What to ask", "", ...ASKS.map((a) => `- "${a.ask}" (${a.via})`), "",
    "## The tools", "", ...TOOLS.map((t) => `- **${t.name}**: ${t.what} Example: \`${t.example}\`.`), "",
    "## The plugin (Claude Code)", "", ...SKILLS.map((s) => `- **${s.name}**: ${s.what}`), "",
    `The plugin also connects [bc-code-atlas](https://github.com/StefanMaron/bc-code-atlas) by Stefan Maron (${ATLAS_URL}) for procedure bodies and the per-procedure call graph; the observatory keeps the object-level facts.`, "",
    "## Install", "", ...installSteps(repo).flatMap((s) => [`### ${s.client}`, "", s.how, "", "```" + s.lang, s.code, "```", ""]),
    "### Without any install", "",
    `[llms.txt](${site}llms.txt) lists every section; every page has a markdown twin at its URL plus \`.md\`; GitMCP and DeepWiki (badges in the [README](${repo})) read the repository directly.`, "",
    "## How it answers", "",
    "The server fetches `index/` and the page markdown from the published site over HTTPS and caches them by hash in `~/.cache/bc-observatory/` (refreshed daily). Search is hybrid: keywords plus a small static embedding model (model2vec potion-base-8M, 30 MB, downloaded once, checked by SHA-256) computed locally; `BC_OBSERVATORY_EMBEDDINGS=0` turns the model off. `BC_OBSERVATORY_LOCAL` reads a checkout instead; `BC_OBSERVATORY_SITE` points at another deployment. Nothing is sent anywhere: `feedback` only returns a link.", "",
    `Source: [packages/mcp](${repo}/tree/main/packages/mcp) and [plugin](${repo}/tree/main/plugin) in the repository, MIT.`, "",
  ];
  return L.join("\n");
}
