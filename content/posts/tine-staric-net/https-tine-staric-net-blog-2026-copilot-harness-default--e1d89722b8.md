---
id: post/tine-staric-net/https-tine-staric-net-blog-2026-copilot-harness-default--e1d89722b8
type: post
title: The Copilot harness is now VS Code's default
summary: VS Code 1.142 now uses the Copilot harness as the default for agent sessions instead of a VS Code-specific runtime. This aligns the Copilot experience across VS Code, GitHub CLI, the Agents window, and the Copilot app, enabling sessions to run in a separate process and persist across surfaces while requiring users to manually migrate personal configurations like instructions, agents, and MCP servers from their old locations to ~/.copilot.
tier: community
language: en
tags:
  - copilot
  - vs code
  - agent harness
  - migration
  - personal setup
  - mcp servers
system: development
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-17T00:21:16.127Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: 03f1ceee08bbce9f42c6dc5593d000cb4d40f8f8abc5a5d3c919eafafef2cc8b
evidence:
  - kind: blog
    url: https://tine.staric.net/blog/2026/copilot-harness-default/
    title: The Copilot harness is now VS Code's default
    date: "2026-10-16"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://tine.staric.net/blog/2026/copilot-harness-default/
    title: The Copilot harness is now VS Code's default
    date: "2026-10-16"
    commit: null
    t: null
    quote: The agent experience shared consistently across GitHub Copilot products.
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://tine.staric.net/blog/2026/copilot-harness-default/
source_id: tine-staric-net
source_name: Tech Adventures in Business Central
url: https://tine.staric.net/blog/2026/copilot-harness-default/
published_at: "2026-10-16T08:00:00.000Z"
author: Tine Staric
full_text: false
words: 581
quotes:
  - text: The agent experience shared consistently across GitHub Copilot products.
    why_it_matters: "This quote explains the core benefit of the Copilot harness: unified behavior across multiple tools."
code_objects_mentioned: []
systems:
  - development
  - copilot
  - platform
versions_mentioned:
  - VS Code 1.142
preview:
  embeddable: true
  frame_url: null
  image: null
  image_alt: null
  image_w: null
  image_h: null
  site_name: null
  favicon: null
  probed_at: "2026-10-07T11:50:56.953Z"
---

# The Copilot harness is now VS Code's default

[Read the post](https://tine.staric.net/blog/2026/copilot-harness-default/) · Tech Adventures in Business Central (Tine Staric) · 2026-10-16 · 581 words · tier community · **unreviewed** (model text not yet checked)

> VS Code 1.142 now uses the Copilot harness as the default for agent sessions instead of a VS Code-specific runtime. This aligns the Copilot experience across VS Code, GitHub CLI, the Agents window, and the Copilot app, enabling sessions to run in a separate process and persist across surfaces while requiring users to manually migrate personal configurations like instructions, agents, and MCP servers from their old locations to ~/.copilot.

## Key points

- The Copilot harness is now VS Code's default, replacing the VS Code-specific Copilot Chat runtime
- Sessions run in Agent Host, a separate process that persists in the background and can be shared between the editor and Agents window
- Personal configurations must be manually migrated to ~/.copilot; prompt files become skills with reduced capabilities and MCP server auto-updates are disabled
- Migration is guided through a review list with options to migrate automatically or with an agent-guided session using credits

## Quotes

- "The agent experience shared consistently across GitHub Copilot products." (This quote explains the core benefit of the Copilot harness: unified behavior across multiple tools.)

## Context

- Features: Copilot harness, Agent Host, agent sessions, personal instructions, personal agents, MCP servers, prompt file conversion
- Versions: VS Code 1.142

Source: Tech Adventures in Business Central, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
