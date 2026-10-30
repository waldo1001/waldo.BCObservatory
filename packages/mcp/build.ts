/**
 * Bundles the server into one file, dist/server.js (D86): src/server.ts with packages/search (a private workspace
 * package, never published) and embed.ts inlined; the npm dependencies (MCP SDK, zod) stay imports.
 * D105: a second bundle, mcpb-out/server/server.js, with every dependency inlined, is the Claude Desktop extension's
 * server (packed by publish-mcp.yml with mcpb/manifest.json). It lives outside dist/ so the npm tarball does not carry it.
 * Run with tsx: `tsx build.ts [outfile] [mcpbOutfile]`.
 */
import { chmodSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { build, type BuildOptions } from "esbuild";

const here = dirname(fileURLToPath(import.meta.url));
const pkg = JSON.parse(readFileSync(join(here, "package.json"), "utf8")) as { dependencies: Record<string, string> };
const outfile = resolve(process.argv[2] ?? join(here, "dist", "server.js"));
const mcpbOutfile = resolve(process.argv[3] ?? join(here, "mcpb-out", "server", "server.js"));
const common: BuildOptions = {
  entryPoints: [join(here, "src", "server.ts")], bundle: true, platform: "node", format: "esm", target: "node20", logLevel: "warning",
  // D110: the Application Insights connection string, from the publish-mcp secret; empty (telemetry off) everywhere else
  define: { __BCOBS_AI__: JSON.stringify(process.env.AI_CONNECTION_STRING ?? "") },
};
await build({
  ...common, outfile,
  // the dependencies by name and their subpaths (@modelcontextprotocol/sdk/server/mcp.js); never --packages=external,
  // which would leave the bare @bc-observatory/search import in the bundle
  external: Object.keys(pkg.dependencies).flatMap((d) => [d, `${d}/*`]),
});
// D105: the extension has no node_modules, so nothing stays external
await build({ ...common, outfile: mcpbOutfile, external: [] });
for (const f of [outfile, mcpbOutfile]) chmodSync(f, 0o755);
console.log(`built ${outfile} and ${mcpbOutfile}`);
