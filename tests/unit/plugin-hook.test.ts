import { test } from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { REMINDER, decide, isBcQuestion } from "../../plugin/hooks/bc-first.mjs";

const root = new URL("../../", import.meta.url);
const read = (p: string) => readFileSync(new URL(p, root), "utf8");
const script = fileURLToPath(new URL("plugin/hooks/bc-first.mjs", root));
const search = (query: string) => ({ tool_name: "WebSearch", tool_input: { query }, tool_use_id: "t1" });
const fetchOf = (url: string, prompt = "") => ({ tool_name: "WebFetch", tool_input: { url, prompt }, tool_use_id: "t2" });

test("D123: isBcQuestion matches Business Central words and leaves look-alikes alone", () => {
  for (const t of ["Business Central clear company data", "BC29 table 18", "AL codeunit 80 posting", "OnAfterPostSalesDoc subscribers", "BCApps pull request 13005", "AL-Go release"])
    assert.ok(isBcQuestion(t), t);
  for (const t of ["Node.js LTS version", "bc command line calculator", "Python AL lib", "BC Hydro outage"])
    assert.ok(!isBcQuestion(t), t);
});

test("D123: a Business Central web search gets the reminder as PreToolUse context, and no permission decision", () => {
  const line = decide(search("Business Central clear company data event subscriber"), {});
  assert.ok(line);
  const out = JSON.parse(line!);
  assert.equal(out.hookSpecificOutput.hookEventName, "PreToolUse");
  assert.equal(out.hookSpecificOutput.additionalContext, REMINDER);
  assert.equal(out.hookSpecificOutput.permissionDecision, undefined);
});

test("D123: no reminder off topic, when switched off, for other tools, for the Observatory's own links, or on bad input", () => {
  assert.equal(decide(search("Node.js LTS version"), {}), null);
  assert.equal(decide(search("Business Central posting"), { BC_OBSERVATORY_HOOK: "0" }), null);
  assert.equal(decide({ tool_name: "Bash", tool_input: { command: "echo Business Central" } }, {}), null);
  assert.equal(decide(fetchOf("https://learn.microsoft.com/en-us/dynamics365/business-central/finance-setup", "Business Central setup"), {}), null);
  assert.equal(decide(fetchOf("https://waldo1001.github.io/waldo.BCObservatory/objects/table/18/", "Business Central"), {}), null);
  for (const bad of [null, {}, "WebSearch", { tool_name: "WebSearch" }, { tool_name: "WebFetch", tool_input: { url: "not a url" } }])
    assert.equal(decide(bad, {}), null, JSON.stringify(bad));
});

test("D123: a WebFetch elsewhere about Business Central gets the reminder", () => {
  const line = decide(fetchOf("https://example.com/blog", "summarise the Business Central part"), {});
  assert.equal(JSON.parse(line!).hookSpecificOutput.additionalContext, REMINDER);
});

test("D123: the script prints one JSON line for a Business Central search and stays silent on bad stdin", () => {
  const bad = spawnSync(process.execPath, [script], { input: "not json", encoding: "utf8" });
  assert.equal(bad.status, 0);
  assert.equal(bad.stdout, "");
  const ok = spawnSync(process.execPath, [script], { input: JSON.stringify(search("Business Central clear company data event subscriber")), encoding: "utf8", env: { PATH: process.env.PATH } });
  assert.equal(ok.status, 0);
  const lines = ok.stdout.trim().split("\n");
  assert.equal(lines.length, 1);
  assert.equal(JSON.parse(lines[0]).hookSpecificOutput.additionalContext, REMINDER);
});

test("D123: plugin/hooks/hooks.json registers the hook on WebSearch and WebFetch, and its script exists", () => {
  const hooks = JSON.parse(read("plugin/hooks/hooks.json"));
  const entries = hooks.hooks.PreToolUse;
  assert.equal(entries.length, 1);
  assert.equal(entries[0].matcher, "WebSearch|WebFetch");
  const command: string = entries[0].hooks[0].command;
  const file = command.match(/\$\{CLAUDE_PLUGIN_ROOT\}\/([^"\s]+)/)?.[1];
  assert.ok(file && existsSync(new URL(`plugin/${file}`, root)), command);
});

test("D123: the reminder names bc_search and ToolSearch, without em-dashes", () => {
  assert.ok(REMINDER.includes("bc_search") && REMINDER.includes("ToolSearch"));
  assert.doesNotMatch(REMINDER, /—/);
});
