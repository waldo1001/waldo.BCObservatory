---
id: post/stefanmaron-com/https-stefanmaron-com-posts-bc-code-atlas-grounded-search-for-agents--bcbd495f28
type: post
title: "Introducing bc-code-atlas: Real BC Source for Coding Agents, Not a Guess"
summary: "bc-code-atlas is an MCP server, with a hosted instance and a self-host option, that lets AI agents or humans search Business Central Base Application source across versions and country variants. It combines semantic search, an exact call/subscribe/extend graph built on graphify-al, exact-source lookup tools, and version and country diffing so every hit can be checked against the real AL file. The author notes it is young: the public instance has no real authentication and has had outages."
tier: community
language: en
tags:
  - ai agents
  - source code search
  - al development
  - code verification
  - mcp server
  - base application
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-07T23:47:50.060Z"
  flags: []
generated:
  at: "2026-10-07T22:42:12.892Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: a7c419def25ff7a64891b63ad9b19c63ce94e2509288cac029ac7a62a92a3bb6
evidence:
  - kind: blog
    url: https://stefanmaron.com/posts/bc-code-atlas-grounded-search-for-agents/
    title: "Introducing bc-code-atlas: Real BC Source for Coding Agents, Not a Guess"
    date: "2026-08-10"
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
post_id: https://stefanmaron.com/posts/bc-code-atlas-grounded-search-for-agents/
source_id: stefanmaron-com
source_name: Stefan Maron
url: https://stefanmaron.com/posts/bc-code-atlas-grounded-search-for-agents/
published_at: "2026-08-10T05:00:00.000Z"
author: Stefan Maron
full_text: false
words: 1023
quotes: []
code_objects_mentioned:
  - codeunit SalesLineReserve
  - table SalesLine
systems:
  - development
  - platform
versions_mentioned:
  - BC 28.1
  - BC 28.2
  - multiple major versions (10-11)
preview:
  embeddable: true
  frame_url: null
  image: null
  image_alt: null
  image_w: null
  image_h: null
  site_name: Stefan Maron
  favicon: https://stefanmaron.com/icons/favicon-32x32.png
  probed_at: "2026-10-07T11:50:24.629Z"
---

# Introducing bc-code-atlas: Real BC Source for Coding Agents, Not a Guess

[Read the post](https://stefanmaron.com/posts/bc-code-atlas-grounded-search-for-agents/) · Stefan Maron (Stefan Maron, MVP) · 2026-08-10 · 1023 words · tier community · reviewed (checked by Opus)

> bc-code-atlas is an MCP server, with a hosted instance and a self-host option, that lets AI agents or humans search Business Central Base Application source across versions and country variants. It combines semantic search, an exact call/subscribe/extend graph built on graphify-al, exact-source lookup tools, and version and country diffing so every hit can be checked against the real AL file. The author notes it is young: the public instance has no real authentication and has had outages.

## Key points

- Addresses AI agent hallucination by ensuring all code results are verifiable against actual BC source files
- Offers semantic search for behavior-based discovery and exact structural graph analysis for precise call tracing
- Supports diffing symbols across BC versions and country variants to track real code changes
- Built on graphify-al for AL language parsing and tree-sitter-al integration

## AL objects mentioned

As named in the post. A name that matches one object page by exact type and name links to it; the others stay as named.

- codeunit "SalesLineReserve"
- table "SalesLine"

Not found in BC28-30: codeunit "SalesLineReserve", table "SalesLine".

## Context

- Features: Semantic search by meaning, Exact structural graph analysis, Version and country variant diffing, Procedure body lookup, Object source retrieval, MCP server integration
- Versions: BC 28.1, BC 28.2, multiple major versions (10-11)

Source: Stefan Maron, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
