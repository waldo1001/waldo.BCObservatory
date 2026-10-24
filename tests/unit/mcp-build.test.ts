import { test } from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync, statSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { ROOT } from "../../pipeline/lib/paths.js";

test("the MCP server bundles to one file with the shared scorer inside and no MiniSearch (D86 4.7, test 4)", () => {
  const out = join(mkdtempSync(join(tmpdir(), "bcobs-mcp-build-")), "server.js");
  execFileSync(process.execPath, ["--import", "tsx", join(ROOT, "packages/mcp/build.ts"), out], { cwd: join(ROOT, "packages/mcp"), stdio: "pipe" });
  const js = readFileSync(out, "utf8");
  assert.ok(js.startsWith("#!/usr/bin/env node\n"), "a shebang for npx");
  assert.equal(statSync(out).mode & 0o111, 0o111, "executable");
  assert.doesNotMatch(js, /from ["']@bc-observatory\/search["']/, "the private package is inlined");
  assert.doesNotMatch(js, /["']\.\/embed\.js["']/, "embed.ts is inlined");
  assert.doesNotMatch(js, /minisearch/i);
  assert.match(js, /from "@modelcontextprotocol\/sdk\/server\/mcp\.js"/, "the npm dependencies stay imports");
  assert.match(js, /from "zod"/);
  assert.match(js, /function parseQuery\(/, "the parser is in the bundle");
  assert.match(js, /Compact view:/, "sections.ts is in the bundle (D93)");
  assert.doesNotMatch(js, /["']\.\/sections\.js["']/, "sections.ts is inlined");
  const pkg = JSON.parse(readFileSync(join(ROOT, "packages/mcp/package.json"), "utf8"));
  assert.equal(pkg.version, /const VERSION = "([^"]+)"/.exec(readFileSync(join(ROOT, "packages/mcp/src/server.ts"), "utf8"))?.[1], "package.json and the server's VERSION agree");
  assert.equal(pkg.dependencies.minisearch, undefined);
  assert.equal(JSON.parse(readFileSync(join(ROOT, "package.json"), "utf8")).dependencies.minisearch, undefined);
});

test("D110 test 12: the connection string is baked in only when AI_CONNECTION_STRING is set at build time", () => {
  const dir = mkdtempSync(join(tmpdir(), "bcobs-mcp-build-ai-"));
  const build = (out: string, env: NodeJS.ProcessEnv) => {
    execFileSync(process.execPath, ["--import", "tsx", join(ROOT, "packages/mcp/build.ts"), out], { cwd: join(ROOT, "packages/mcp"), stdio: "pipe", env });
    return readFileSync(out, "utf8");
  };
  const { AI_CONNECTION_STRING: _drop, ...clean } = process.env;
  const plain = build(join(dir, "plain.js"), clean);
  assert.doesNotMatch(plain, /__BCOBS_AI__/);
  assert.doesNotMatch(plain, /InstrumentationKey=/);
  const baked = build(join(dir, "baked.js"), { ...clean, AI_CONNECTION_STRING: "InstrumentationKey=00000000-0000-0000-0000-000000000000;IngestionEndpoint=https://example.test/" });
  assert.match(baked, /https:\/\/example\.test\//);
  for (const js of [plain, baked]) assert.doesNotMatch(js, /applicationinsights/);
});
