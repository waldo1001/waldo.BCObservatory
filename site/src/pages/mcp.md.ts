// Markdown twin of /mcp/ (D84).
import type { APIRoute } from "astro";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { REPO } from "../lib/about";
import { mcpMarkdown } from "../lib/mcp";

export const GET: APIRoute = () => {
  const root = resolve(process.cwd(), "..");
  const server = JSON.parse(readFileSync(resolve(root, "packages/mcp/package.json"), "utf8")).version as string;
  const plugin = JSON.parse(readFileSync(resolve(root, "plugin/.claude-plugin/plugin.json"), "utf8")).version as string;
  const site = `${import.meta.env.SITE}${import.meta.env.BASE_URL}`;
  return new Response(mcpMarkdown({ server, plugin }, REPO, site), { headers: { "content-type": "text/markdown; charset=utf-8" } });
};
