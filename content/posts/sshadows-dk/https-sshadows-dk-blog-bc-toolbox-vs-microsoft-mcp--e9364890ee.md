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
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-25T16:42:05.789Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: 7626ce5e7e8915f03d84195791e6a56197f5ee2b229ea8fe5842d9f8bf768d94
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
code_objects_mentioned:
  - codeunit [Test] methods
systems:
  - development
  - integration
  - copilot
versions_mentioned: []
---

# Microsoft Ships an AL MCP Server. So Why Did I Build My Own?

[Read the post](https://sshadows.dk/blog/bc-toolbox-vs-microsoft-mcp/) · SShadowS (Torben Leth) · 2026-07-10 · 1661 words · tier community · **unreviewed** (model text not yet checked)

> A developer explains why they built custom MCP servers for Business Central development beyond Microsoft's official AL MCP Server. While Microsoft's tools excel at writing and compiling AL code, the custom toolbox adds verification capabilities including code coverage, interactive debugging, profiling analysis, call graphs, breaking change detection, and UI-driven testing.

## Key points

- Microsoft's AL MCP covers the writing half of development (compile, publish, build) but lacks tools for verifying changes actually work
- Custom toolbox adds per-method test results with coverage, interactive debugging accessible from any MCP client, ranked profiling hotspots, and whole-program call graphs
- Break-in-glass debugger, event fan-out analysis, and static detectors help agents understand what their changes break before shipping
- Business-central-mcp drives the real web UI end-to-end (create orders, post, print) on on-prem and Docker, not just cloud APIs

## Quotes

- "Microsoft has built a solid AL development toolchain." (Acknowledges Microsoft's strength in the compile-and-publish loop while establishing context for what they don't cover)
- "The scarce resource is knowing whether the code you just ran actually works." (Identifies the key gap: agents can write code fast but need verification that changes don't break things)
- "Microsoft is teaching agents to write AL. I'm teaching them to know when they're wrong." (Summarizes the philosophy behind the custom toolbox: verification and observability for agent-driven development)

## AL objects mentioned

As named in the post. A name that matches one object page by exact type and name links to it; the others stay as named.

- codeunit "\[Test\] methods"

Not found in BC28-30: codeunit "\[Test\] methods".

## Context

- Features: AL MCP Server (altool launchmcpserver), test discovery and per-method coverage, interactive debugging with breakpoints, profiling with hotspot analysis, call hierarchy and event fan-out, breaking-change diff detection, UI automation via WebSocket protocol, whole-program static analysis with SARIF

Source: SShadowS, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
