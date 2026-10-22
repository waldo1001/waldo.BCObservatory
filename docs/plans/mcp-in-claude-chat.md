# Plan: docs/specs/mcp-in-claude-chat.md (issue #24, D105, M43)

Status: waiting for the owner. Blast-radius rating: **risky**. No code has been edited.

## Why risky

- Phase 1 task 4 adds an `mcpb` job (with `permissions: contents: write`) to `.github/workflows/publish-mcp.yml`. `.github/`
  is a `risky` path.
- Phase 2 adds `.github/workflows/deploy-mcp.yml`, a deploy secret and a host. The spec says it waits for the owner's
  host choice (D105c), and the coder takes no host by default.
- Phase 2 task 10 also switches `plugin/.mcp.json` to a hosted URL.
- Everything else is low-risk or safe: `packages/mcp`, `site/src/lib/mcp.ts`, docs, skills and tests.

## Intended order once approved

Phase 1 (ships alone, no host):
1. Tests first: `mcp-build.test.ts` (dist/http.js, mcpb bundle fully bundled, manifest version), `mcp.test.ts`
   (installSteps, "Can Claude install it for me?" sentence, skills contain the `#install` link). Run them and see them fail.
2. `site/src/lib/mcp.ts`: `MCPB_URL`, the two new steps, reworded Desktop step, paragraph, `install` anchor.
3. `plugin/README.md`, `README.md`, and the missing-server rule in the four skills.
4. `packages/mcp/build.ts` second output, `mcpb/manifest.json`, `icon.png`, the `mcpb` job in `publish-mcp.yml`.
5. Versions: MCP 0.8.0 to 0.9.0, plugin 0.4.0 to 0.5.0, in the places listed in task 5.
6. Ship-time edits (operator mode): `docs/built/mcp-in-claude-chat.md`, D105 in DECISIONS, M43 in PLAN, HANDOFF.

Phase 2 (only after the owner picks a host): `ratelimit.ts`, `http.ts`, `warm()`, the Dockerfile, the host config and
`deploy-mcp.yml`, `plugin/.mcp.json`, versions 0.10.0 and 0.6.0, and the RUNBOOK "Hosted MCP" section.

## Operator steps the League cannot do

- `npx @anthropic-ai/mcpb validate` and `pack` (network), the `publish-mcp.yml` dispatch, and installing the `.mcpb` in Claude Desktop.
- The host choice, its secret, and the deploy.

## Decision needed

Approve the `.github/` change (the `mcpb` job) and say whether to build phase 1 only. The spec stays `draft`.
