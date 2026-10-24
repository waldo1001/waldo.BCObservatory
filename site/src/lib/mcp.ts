/**
 * The MCP page (D84): what the bc-observatory server and the Claude Code plugin do, what to ask, how to install.
 * Facts come from the tree at build time (packages/mcp/package.json, plugin/.claude-plugin/plugin.json); the tool and
 * skill lists here are pinned to the server and the plugin by tests/unit/mcp.test.ts. No Astro imports.
 */
export interface Tool { name: string; title: string; what: string; example: string }
export interface Skill { name: string; what: string }
/** A server the plugin connects (plugin/.mcp.json): `command` for a local stdio server, `url` for a remote one. */
export interface PluginServer { name: string; by: string; command?: string; url?: string; for: string }
export interface Ask { ask: string; via: string }
export interface InstallStep { client: string; how: string; code: string; lang: "bash" | "json" }

export const SERVER_CMD = "claude mcp add bc-observatory -- npx -y bc-observatory@latest";
export const PLUGIN_CMD = "claude plugin marketplace add waldo1001/waldo.BCObservatory";
/** The second Claude Code command: the first only adds the marketplace (`claude plugin install <plugin>@<marketplace>`). */
export const PLUGIN_INSTALL_CMD = "claude plugin install bc-observatory@bc-observatory";
/** The step-by-step guide per Claude app, for readers who are not developers (INSTALL.md at the repository root). */
export const installGuide = (repo: string) => `${repo}/blob/main/INSTALL.md`;
export const COPILOT_PLUGIN_CMD = "copilot plugin install waldo1001/waldo.BCObservatory:plugin";
export const ATLAS_URL = "https://bc-code-atlas.stefanmaron.dev/mcp";
export const LEARN_URL = "https://learn.microsoft.com/api/mcp";

/** The eleven tools (D108: bc_ names, so a client that finds deferred tools by keyword finds them), in the server's order (packages/mcp/src/server.ts registerTool), each with the ask it answers. */
export const TOOLS: Tool[] = [
  { name: "bc_search", title: "Search the knowledge base", what: "Every page by title, AL object name and caption, summary and tags, plus fields, events and procedures, ranked like the site's search (t36, cu 80, plurals, one typo, synonyms); hybrid (keywords plus meaning), so a paraphrase still finds the page. A symbol ranks where its owner ranks; a kind: query that finds nothing says so and names the nearest symbols. Filter by type, tier, galaxy system, country, app, object type or kind.", example: "bc_search('posting preview')" },
  { name: "bc_brief", title: "One answer in layers", what: "A question or a page answered in five layers, each line with its tier and source: how it works on Learn (with key facts), the AL objects, what changed lately (code changes, AL releases, hotfix lists), heads up (warnings scoped to the object and version they apply to) and the gaps no source fills; differing status statements side by side.", example: "bc_brief('environment copy cleanup')" },
  { name: "bc_ls", title: "List pages", what: "Browse the page tree; an empty path lists the sections.", example: "bc_ls('objects/table')" },
  { name: "bc_cat", title: "Read a page", what: "A page's markdown: frontmatter with evidence and links, then the body. A long page comes back compact with its section keys; section, offset and limit read one part, and a symbol's path returns just that member.", example: "bc_cat('localizations/be')" },
  { name: "bc_get_object", title: "Look up an AL object", what: "An object of W1, a first-party app or a country layer by type and id, reference, name or caption: fields, keys, events, public procedures, obsolete state, versions, countries that replace it, Learn pages; a country layer that replaces a W1 object prints what it adds before the page. A large object comes back compact; read one section with section, offset and limit. counts.procedures in the frontmatter counts every procedure; the summary's 'public procedures' excludes locals and events.", example: "bc_get_object('table', '18')" },
  { name: "bc_diff_object", title: "What changed in an object", what: "Member-level changes of a W1 object between two consecutive versions: fields, events, procedures, keys, properties, obsolete state.", example: "bc_diff_object('codeunit', 'Sales-Post', '29', '30')" },
  { name: "bc_localization", title: "A country localization", what: "What a country layer adds to or changes in W1, with its Learn local functionality hub. Large countries come back compact, as with bc_cat.", example: "bc_localization('BE')" },
  { name: "bc_whats_new", title: "What is new", what: "Videos, posts, roadmap features, AL extension releases and code changes (merged pull requests) dated on or after a date and up to today, newest first.", example: "bc_whats_new('2026-10-01')" },
  { name: "bc_blog_footprint", title: "A source's footprint", what: "What a blog or channel covers: its posts or videos and the systems they touch.", example: "bc_blog_footprint('kauffmann-nl')" },
  { name: "bc_feedback", title: "Report a problem with a page", what: "A prefilled GitHub issue link for a page (wrong fact, missing evidence, broken link). Nothing is sent by the agent.", example: "bc_feedback('objects/table/18', 'field 7 is wrong')" },
  { name: "bc_status", title: "Is it up", what: "Server version, whether the data is reachable, page counts by type, the code index version and when the data was last deployed. Tells 'the Observatory is down' from 'it has no answer'.", example: "bc_status()" },
];

/** The plugin's skills (plugin/skills/<name>/SKILL.md), one line each, from their descriptions. */
export const SKILLS: Skill[] = [
  { name: "bcobs-lookup", what: "Business Central facts with evidence: AL objects, Learn documentation, roadmap features, videos and posts. For 'what is table 18', 'where is this documented'." },
  { name: "bcobs-whats-new", what: "Recent videos, posts and roadmap features with status, and what changed in the code between versions. For 'what's new', 'what changed in BC30'." },
  { name: "bcobs-localization", what: "Which objects a country layer adds, which W1 objects it changes, added fields and events, and where Learn documents the local functionality." },
  { name: "bcobs-grounding", what: "The servers together: the observatory for ids, fields, events, versions, callers and evidence, bc-code-atlas for the procedure body and what one procedure calls, Microsoft Learn MCP for the Learn page and AL code samples." },
];

/** The servers the plugin registers, as plugin/.mcp.json names them (pinned to it by tests/unit/mcp.test.ts, as plugin/README.md is). */
export const PLUGIN_SERVERS: PluginServer[] = [
  { name: "bc-observatory", by: "this project (waldo), the npm package run locally", command: "npx -y bc-observatory@latest", for: "Business Central facts with evidence and a trust tier: objects, fields, events, versions, localizations, what changed, roadmap, videos, posts. Not procedure bodies or Learn text. Your queries stay on your machine; it downloads the site's search index and the pages you read." },
  { name: "bc-code-atlas", by: "Stefan Maron, a free hobby server (be a polite client)", url: ATLAS_URL, for: "AL source: a procedure body, what one procedure calls, semantic code search of one W1 version. The names and search text of your calls go to his server." },
  { name: "microsoft-learn", by: "Microsoft, public endpoint, no authentication", url: LEARN_URL, for: "Reading a Learn page the observatory points to and AL code samples. The URLs and search text of your calls go to Microsoft." },
];

/** What to type once it is installed, and what the agent reaches for. */
export const ASKS: Ask[] = [
  { ask: "What do you know about Fabric mirroring in the latest BC release?", via: "bc_search" },
  { ask: "What is on table 18, and which fields are obsolete?", via: "bc_get_object" },
  { ask: "What changed in codeunit Sales-Post between BC29 and BC30?", via: "bc_diff_object" },
  { ask: "What does the Belgian localization change in W1?", via: "bc_localization" },
  { ask: "What is new in Business Central since last Monday?", via: "bc_whats_new" },
  { ask: "Where is posting preview documented, and who blogged about it?", via: "bc_search, bc_cat" },
  { ask: "What does kauffmann-nl write about?", via: "bc_blog_footprint" },
  { ask: "Show me the body of Sales-Post.PostInvoice and what it calls.", via: "bc-code-atlas via the plugin" },
  { ask: "Walk me through setting up intercompany partners.", via: "bc-observatory finds the page and Microsoft Learn MCP reads it" },
];

export function installSteps(repo: string): InstallStep[] {
  return [
    { client: "Claude Code: the plugin (server, four skills, bc-code-atlas, Microsoft Learn MCP)", how: "Two commands: the first adds the marketplace, the second installs the plugin. The plugin registers the MCP server, the bc-code-atlas server and Microsoft's Learn MCP server and ships the four skills.", code: `${PLUGIN_CMD}\n${PLUGIN_INSTALL_CMD}`, lang: "bash" },
    { client: "GitHub Copilot CLI: the plugin (server, four skills, bc-code-atlas, Microsoft Learn MCP)", how: "The same plugin, installed from its folder in the repository. Copilot CLI reads the Claude Code manifest as it is. A plugin installed in Copilot CLI is not available in the VS Code Copilot Chat panel; use the VS Code step below for that.", code: COPILOT_PLUGIN_CMD, lang: "bash" },
    { client: "Claude Code: the server only", how: "No skills, no atlas: just the eleven tools.", code: SERVER_CMD, lang: "bash" },
    { client: "Claude Desktop, Cursor, Windsurf and other MCP clients", how: "Add the server to the client's MCP configuration (claude_desktop_config.json, .cursor/mcp.json, ...).", code: JSON.stringify({ mcpServers: { "bc-observatory": { command: "npx", args: ["-y", "bc-observatory@latest"] } } }, null, 2), lang: "json" },
    { client: "VS Code (GitHub Copilot)", how: "In .vscode/mcp.json of the workspace, or the user profile's mcp.json.", code: JSON.stringify({ servers: { "bc-observatory": { type: "stdio", command: "npx", args: ["-y", "bc-observatory@latest"] }, "bc-code-atlas": { type: "http", url: ATLAS_URL }, "microsoft-learn": { type: "http", url: LEARN_URL } } }, null, 2), lang: "json" },
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
    "## The plugin (Claude Code, GitHub Copilot CLI)", "", ...SKILLS.map((s) => `- **${s.name}**: ${s.what}`), "",
    `The plugin also connects [bc-code-atlas](https://github.com/StefanMaron/bc-code-atlas) by Stefan Maron (${ATLAS_URL}) for procedure bodies and the per-procedure call graph; the observatory keeps the object-level facts. It connects Microsoft's [Learn MCP](https://learn.microsoft.com/training/support/mcp) (${LEARN_URL}) too: the observatory finds the Learn page and stores no Learn text, the Learn MCP reads it (\`microsoft_docs_fetch\`) and finds AL code samples (\`microsoft_code_sample_search\`).`, "",
    "## What the plugin installs", "",
    "Three MCP servers and four skills. Nothing needs an account or an API key.", "",
    ...PLUGIN_SERVERS.map((p) => `- \`${p.name}\` (${p.by}; ${p.command ? `\`${p.command}\`` : p.url}): ${p.for}`), "",
    `Routing: the observatory first; bc-code-atlas for procedure bodies and per-procedure edges; Microsoft Learn MCP to read a Learn page the observatory points to and for AL code samples. Switch one plugin server off with /mcp (Claude Code stops connecting to it without removing the plugin); \`claude mcp remove\` acts on servers you added yourself, so to take only some servers install them by hand instead. A Learn MCP you already have at the same URL wins over the plugin's: keep one. Details: [plugin/README.md](${repo}/blob/main/plugin/README.md).`, "",
    "## Install", "", `Step by step for Claude in the browser, on your phone, in Claude Desktop, Claude Code and Copilot CLI: [INSTALL.md](${installGuide(repo)}).`, "", ...installSteps(repo).flatMap((s) => [`### ${s.client}`, "", s.how, "", "```" + s.lang, s.code, "```", ""]),
    "### Without any install", "",
    `[llms.txt](${site}llms.txt) lists every section; every page has a markdown twin at its URL plus \`.md\`; GitMCP and DeepWiki (badges in the [README](${repo})) read the repository directly.`, "",
    "## How it answers", "",
    "The server fetches `index/` from the published site over HTTPS and caches it by hash in `~/.cache/bc-observatory/` (refreshed daily), and reads a page's markdown twin when you ask for it; a page over 30,000 characters comes back as a compact view with its section keys. Search ranks like the site's own search and is hybrid: keywords plus a small static embedding model (model2vec potion-base-8M, 30 MB, downloaded once, checked by SHA-256) computed locally; `BC_OBSERVATORY_EMBEDDINGS=0` turns the model off. `BC_OBSERVATORY_LOCAL` reads a checkout instead; `BC_OBSERVATORY_SITE` points at another deployment. Nothing is sent anywhere: `feedback` only returns a link.", "",
    `Source: [packages/mcp](${repo}/tree/main/packages/mcp) and [plugin](${repo}/tree/main/plugin) in the repository, MIT.`, "",
  ];
  return L.join("\n");
}
