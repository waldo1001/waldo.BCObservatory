---
id: post/sshadows-dk/https-sshadows-dk-blog-bc-toolbox-vs-microsoft-mcp--e9364890ee
type: post
title: Microsoft Ships an AL MCP Server. So Why Did I Build My Own?
summary: A developer explains why they built custom MCP servers for Business Central development beyond Microsoft's official AL MCP Server. While Microsoft's tools excel at writing and compiling AL code, the custom toolbox adds verification capabilities including code coverage, interactive debugging, profiling analysis, call graphs, breaking change detection, and UI-driven testing.
tier: community
language: en
tags:
  - al development
  - mcp servers
  - testing
  - debugging
  - code coverage
  - profiling
  - static analysis
  - verification
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-25T16:50:23.607Z"
  flags: []
generated:
  at: "2026-10-25T16:41:48.094Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: 43d5b1c4a01be2c15af4629b139b571756d19e1c423b0ef620e655178e7a74d8
evidence:
  - kind: blog
    url: https://sshadows.dk/blog/bc-toolbox-vs-microsoft-mcp/
    title: Microsoft Ships an AL MCP Server. So Why Did I Build My Own?
    date: "2026-07-10"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://sshadows.dk/blog/bc-toolbox-vs-microsoft-mcp/
    title: Microsoft Ships an AL MCP Server. So Why Did I Build My Own?
    date: "2026-07-10"
    commit: null
    t: null
    quote: Microsoft has built a solid AL development toolchain.
  - kind: blog
    url: https://sshadows.dk/blog/bc-toolbox-vs-microsoft-mcp/
    title: Microsoft Ships an AL MCP Server. So Why Did I Build My Own?
    date: "2026-07-10"
    commit: null
    t: null
    quote: The scarce resource is knowing whether the code you just ran actually works.
  - kind: blog
    url: https://sshadows.dk/blog/bc-toolbox-vs-microsoft-mcp/
    title: Microsoft Ships an AL MCP Server. So Why Did I Build My Own?
    date: "2026-07-10"
    commit: null
    t: null
    quote: Microsoft is teaching agents to write AL. I'm teaching them to know when they're wrong.
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://sshadows.dk/blog/bc-toolbox-vs-microsoft-mcp/
source_id: sshadows-dk
source_name: SShadowS
url: https://sshadows.dk/blog/bc-toolbox-vs-microsoft-mcp/
published_at: "2026-07-10T00:00:00.000Z"
author: Torben Leth
full_text: false
words: 1661
quotes:
  - text: Microsoft has built a solid AL development toolchain.
    why_it_matters: Acknowledges Microsoft's strength in the compile-and-publish loop while establishing context for what they don't cover
  - text: The scarce resource is knowing whether the code you just ran actually works.
    why_it_matters: "Identifies the key gap: agents can write code fast but need verification that changes don't break things"
  - text: Microsoft is teaching agents to write AL. I'm teaching them to know when they're wrong.
    why_it_matters: "Summarizes the philosophy behind the custom toolbox: verification and observability for agent-driven development"
code_objects_mentioned: []
systems:
  - development
  - integration
versions_mentioned: []
preview:
  embeddable: false
  frame_url: null
  image: https://sshadows.dk/images/posts/bc-toolbox-vs-microsoft-mcp/cover.webp
  image_alt: null
  image_w: null
  image_h: null
  site_name: SShadowS
  favicon: https://sshadows.dk/favicon.svg
  probed_at: "2026-10-25T16:46:40.232Z"
---

# Microsoft Ships an AL MCP Server. So Why Did I Build My Own?

[Read the post](https://sshadows.dk/blog/bc-toolbox-vs-microsoft-mcp/) · SShadowS (Torben Leth) · 2026-07-10 · 1661 words · tier community · reviewed (checked by Opus)

> A developer explains why they built custom MCP servers for Business Central development beyond Microsoft's official AL MCP Server. While Microsoft's tools excel at writing and compiling AL code, the custom toolbox adds verification capabilities including code coverage, interactive debugging, profiling analysis, call graphs, breaking change detection, and UI-driven testing.

## Key points

- Microsoft's AL MCP Server covers the writing half (build, compile, publish, symbols), while its debugger tools are usable only from Copilot inside VS Code
- The author's bc-dev-mcp adds test discovery, per-method test results with procedure-level coverage, eight debug tools for any MCP client, and ranked profiling hotspots
- al-call-hierarchy and its alsem CLI provide whole-program call graphs, event fan-out, 41 detectors with SARIF output, and breaking-change diffs
- business-central-mcp drives the real web client over its WebSocket protocol, end to end against on-prem and Docker instances

## Quotes

- "Microsoft has built a solid AL development toolchain." (Acknowledges Microsoft's strength in the compile-and-publish loop while establishing context for what they don't cover)
- "The scarce resource is knowing whether the code you just ran actually works." (Identifies the key gap: agents can write code fast but need verification that changes don't break things)
- "Microsoft is teaching agents to write AL. I'm teaching them to know when they're wrong." (Summarizes the philosophy behind the custom toolbox: verification and observability for agent-driven development)

## Context

- Features: AL MCP Server (altool launchmcpserver), test discovery and per-method coverage, interactive debugging with breakpoints, profiling with hotspot analysis, call hierarchy and event fan-out, breaking-change diff detection, UI automation via WebSocket protocol, whole-program static analysis with SARIF

Source: SShadowS, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
