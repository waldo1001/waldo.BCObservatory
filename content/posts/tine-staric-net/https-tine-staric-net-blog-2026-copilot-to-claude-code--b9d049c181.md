---
id: post/tine-staric-net/https-tine-staric-net-blog-2026-copilot-to-claude-code--b9d049c181
type: post
title: Copilot is agent-first, Claude Code is skill-first
summary: Copilot uses an agent-first architecture where you select a persona before interacting, while Claude Code is skill-first with a single agent throughout a session. Understanding this difference is crucial when migrating custom agents between platforms, as agents that step into conversations in Copilot map to skills in Claude Code, while those that fork and report map to subagents.
tier: community
language: en
tags:
  - agent architecture
  - skill vs subagent
  - platform migration
  - claude code
  - copilot
  - tool restrictions
  - workflow design
system: copilot
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T12:54:54.417Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: 90363ee617db1445a513a1cabd6585a05df5ae6c18e4afb4a9f0ba7d531057b3
evidence:
  - kind: blog
    url: https://tine.staric.net/blog/2026/copilot-to-claude-code/
    title: Copilot is agent-first, Claude Code is skill-first
    date: "2026-08-21"
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
post_id: https://tine.staric.net/blog/2026/copilot-to-claude-code/
source_id: tine-staric-net
source_name: Tech Adventures in Business Central
url: https://tine.staric.net/blog/2026/copilot-to-claude-code/
published_at: "2026-08-21T08:00:00.000Z"
author: Tine Staric
full_text: false
words: 1097
quotes: []
code_objects_mentioned: []
systems:
  - copilot
  - development
versions_mentioned:
  - Claude Code
  - Copilot vol.3
preview:
  embeddable: true
  frame_url: null
  image: https://tine.staric.net/images/copilottoclaudecode/main.png
  image_alt: null
  image_w: null
  image_h: null
  site_name: Tech Adventures in Business Central | AL Development & AI Solutions
  favicon: https://tine.staric.net/favicon.ico
  probed_at: "2026-10-07T11:50:11.748Z"
---

# Copilot is agent-first, Claude Code is skill-first

[Read the post](https://tine.staric.net/blog/2026/copilot-to-claude-code/) · Tech Adventures in Business Central (Tine Staric) · 2026-08-21 · 1097 words · tier community · **unreviewed** (machine-generated)

> Copilot uses an agent-first architecture where you select a persona before interacting, while Claude Code is skill-first with a single agent throughout a session. Understanding this difference is crucial when migrating custom agents between platforms, as agents that step into conversations in Copilot map to skills in Claude Code, while those that fork and report map to subagents.

## Key points

- Copilot agents come in two types: runSubagent agents that fork and report back (equivalent to Claude Code subagents), and dropdown agents that prepend instructions to the current conversation (equivalent to skills)
- Claude Code skills cannot restrict tools since they are inline text read by the main agent, while Copilot agents could guarantee tool restrictions; critical tool restrictions require Claude Code subagents instead
- Migrating workflows requires sorting each agent by its actual isolation behavior rather than file type, not translating agents one-to-one between platforms
- Skills from Copilot transfer directly to Claude Code without changes, but dropdown agents require restructuring
- Determine whether to use a skill or subagent by asking if it needs on-demand invocation and whether work belongs in the current conversation or an isolated context

## Context

- Features: Copilot agent selection, Claude Code subagents, Claude Code skills, runSubagent API, Tool restriction in agents, Context isolation, MCP server configuration
- Versions: Claude Code, Copilot vol.3

Source: Tech Adventures in Business Central, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
