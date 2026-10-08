/**
 * Bundles the server into one file, dist/server.js (D86): src/server.ts with packages/search (a private workspace
 * package, never published) and embed.ts inlined; the npm dependencies (MCP SDK, zod) stay imports.
 * Run with tsx: `tsx build.ts [outfile]`.
 */
import { chmodSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { build } from "esbuild";

const here = dirname(fileURLToPath(import.meta.url));
const pkg = JSON.parse(readFileSync(join(here, "package.json"), "utf8")) as { dependencies: Record<string, string> };
const outfile = resolve(process.argv[2] ?? join(here, "dist", "server.js"));
await build({
  entryPoints: [join(here, "src", "server.ts")], outfile, bundle: true, platform: "node", format: "esm", target: "node20",
  // the dependencies by name and their subpaths (@modelcontextprotocol/sdk/server/mcp.js); never --packages=external,
  // which would leave the bare @bc-observatory/search import in the bundle
  external: Object.keys(pkg.dependencies).flatMap((d) => [d, `${d}/*`]), logLevel: "warning",
});
chmodSync(outfile, 0o755);
console.log(`built ${outfile}`);
