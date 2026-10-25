---
id: post/sshadows-dk/https-sshadows-dk-blog-al-lsp-for-agents--c3010747a6
type: post
title: "AL LSP for Agents: Now in VS Code, and a New Home"
summary: AL LSP for Agents brings compiler-powered code intelligence to VS Code Copilot and Claude Code through language server tools. It enables AI agents to navigate AL codebases with features like go-to-definition, find references, call hierarchy analysis, and real-time code quality diagnostics without relying on text search.
tier: community
language: en
tags:
  - al language server
  - copilot integration
  - vs code extension
  - code intelligence
  - call hierarchy
  - code quality
  - language model tools
  - ai agents
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-25T16:50:19.334Z"
  flags: []
generated:
  at: "2026-10-25T16:41:48.094Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: 882bb8322697d42a6493095af8244919ca793d5e7f6c00a0a3d03da44bbfe5ae
evidence:
  - kind: blog
    url: https://sshadows.dk/blog/al-lsp-for-agents/
    title: "AL LSP for Agents: Now in VS Code, and a New Home"
    date: "2026-03-10"
    commit: null
    t: null
    quote: null
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://sshadows.dk/blog/al-lsp-for-agents/
source_id: sshadows-dk
source_name: SShadowS
url: https://sshadows.dk/blog/al-lsp-for-agents/
published_at: "2026-03-10T00:00:00.000Z"
author: Torben Leth
full_text: false
words: 946
quotes: []
code_objects_mentioned: []
systems:
  - development
  - platform
versions_mentioned:
  - v1.5.2
cautions:
  - kind: warning
    quote: This is still a new feature, so expect changes as it matures.
    objects: []
    events: []
    versions: []
  - kind: gotcha
    quote: having the tools available doesn't mean the AI will use them.
    objects: []
    events: []
    versions: []
preview:
  embeddable: false
  frame_url: null
  image: https://sshadows.dk/images/posts/al-lsp-for-agents/cover.webp
  image_alt: null
  image_w: null
  image_h: null
  site_name: SShadowS
  favicon: https://sshadows.dk/favicon.svg
  probed_at: "2026-10-25T16:46:46.091Z"
---

# AL LSP for Agents: Now in VS Code, and a New Home

[Read the post](https://sshadows.dk/blog/al-lsp-for-agents/) · SShadowS (Torben Leth) · 2026-03-10 · 946 words · tier community · reviewed (checked by Opus)

> AL LSP for Agents brings compiler-powered code intelligence to VS Code Copilot and Claude Code through language server tools. It enables AI agents to navigate AL codebases with features like go-to-definition, find references, call hierarchy analysis, and real-time code quality diagnostics without relying on text search.

## Key points

- VS Code extension registers eight Language Model Tools that give Copilot agent mode access to AL language server capabilities for symbol navigation and analysis
- Enriched hover now displays all declared properties on fields and actions, allowing AI agents to make informed decisions based on complete field and action metadata
- Configurable code quality diagnostics detect common AL code smells like unused procedures, high complexity, too many parameters, and long methods
- The tool integrates a Go wrapper coordinating the Microsoft AL Language Server with al-call-hierarchy for precise, compiler-aware answers instead of text-based searching

## Heads up

- warning: "This is still a new feature, so expect changes as it matures."
- gotcha: "having the tools available doesn't mean the AI will use them."

## Context

- Features: go to definition, find references, call hierarchy analysis, code quality diagnostics, enriched hover with field properties, unused procedure detection, complexity warnings, fan-in analysis
- Versions: v1.5.2

Source: SShadowS, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
