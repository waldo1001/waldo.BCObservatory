import { test } from "node:test";
import assert from "node:assert/strict";
import { join } from "node:path";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
import { ROOT } from "../../pipeline/lib/paths.js";
import { checkRow, goldenRoot, goldenRows, type GoldenHit } from "../helpers/search-golden.js";

/** The hit lines of a search answer: "- <title> ... path=<id> [keyword]", a symbol "- <name> (<what> of ...) path=<id>#... [keyword]". */
function parseHits(text: string, present: (id: string) => string | undefined): GoldenHit[] {
  return [...text.matchAll(/^- (.*?) (?:\[[^\]]*\]|\((?:field|event|procedure|value)[^)]*\)) path=(\S+)/gm)].map((m) => {
    const id = m[2], symbol = id.includes("#");
    const kind = symbol ? /#(field|event|proc|value)-/.exec(id)![1] : "page";
    return { id, symbol, object: !symbol && id.startsWith("objects/"), name: symbol ? m[1] : undefined, kind, majorOk: present(id) !== undefined };
  });
}

test("the golden queries on the MCP server, keyword and default mode (D86 5, test 3)", async () => {
  const { root, symbols } = await goldenRoot();
  const transport = new StdioClientTransport({ command: process.execPath, args: ["--import", "tsx", join(ROOT, "packages/mcp/src/server.ts")], env: { ...process.env, BC_OBSERVATORY_LOCAL: root } as Record<string, string>, cwd: ROOT });
  const client = new Client({ name: "golden", version: "0" });
  await client.connect(transport);
  const call = async (name: string, args: Record<string, unknown>) => ((await client.callTool({ name, arguments: args })).content as { text: string }[])[0].text;
  try {
    const failures: string[] = [];
    for (const row of goldenRows()) {
      if (row.pending && !symbols) continue;
      for (const mode of ["keyword", "hybrid"]) {
        const text = await call("search", { query: row.q, limit: 50, mode });
        // "bc30 sales": the first hit's page says it is present in that major
        let first: string | undefined;
        if (row.major) { const id = /path=(\S+)/.exec(text)?.[1]; first = id ? await call("cat", { path: id }) : undefined; }
        const present = (id: string) => (row.major && first && new RegExp(`present_in:[\\s\\S]*?- "${row.major}"`).test(first) && id ? id : undefined);
        const hits = parseHits(text, present);
        const hints = [...text.matchAll(/^Hint: (.*?)(?: \(search "(.*)"\)| \(cat\("(.*)"\)\))?$/gm)].map((m) => ({ text: m[1], ...(m[3] ? { path: m[3] } : {}) }));
        const err = checkRow(row, hits, hints);
        if (err) failures.push(`${row.q} (${mode}): ${err}`);
      }
    }
    assert.deepEqual(failures, []);
    // get_object resolves names, captions, country objects and references
    assert.match(await call("get_object", { type: "table", idOrName: "Sales Header" }), /^---\nid: object\/table\/36\n/);
    assert.match(await call("get_object", { type: "codeunit", idOrName: "Sales-Post" }), /^---\nid: object\/codeunit\/80\n/);
    assert.match(await call("get_object", { type: "page", idOrName: "Customer Card" }), /^---\nid: object\/page\/21\n/);
    assert.match(await call("get_object", { type: "page", idOrName: "Customers" }), /^---\nid: object\/page\/36954\n/, "a name before a caption (Page 22 is captioned Customers)");
    assert.match(await call("get_object", { type: "page", idOrName: "subscriptions" }), /^---\nid: object\/page\/8059\n/, "by its caption");
    assert.match(await call("get_object", { type: "table", idOrName: "VAT VIES Correction" }), /^---\nid: object\/table\/11300-be\n/);
    assert.match(await call("get_object", { type: "table", idOrName: "11300", country: "BE" }), /^---\nid: object\/table\/11300-be\n/);
    assert.match(await call("get_object", { type: "table", idOrName: "t36" }), /^---\nid: object\/table\/36\n/);
    assert.match((await call("search", { query: "customer", system: "sales", limit: 5 })).split("\n").find((l) => l.startsWith("- ")) ?? "", /Table 18 "Customer"/);
    const today = new Date().toISOString().slice(0, 10);
    const news = await call("whats_new", { since: today, limit: 100 });
    for (const d of news.matchAll(/, (\d{4}-\d{2}-\d{2})\] path=/g)) assert.ok(d[1] <= today, `${d[1]} is after today`);
  } finally {
    await client.close();
  }
});
