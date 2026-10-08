---
id: post/stefanmaron-com/https-stefanmaron-com-posts-al-runner-run-al-tests-without-bc--693c9fd16b
type: post
title: "AL Runner: Run AL Unit Tests Without a BC Service Tier"
summary: AL Runner is a CLI tool that transpiles AL code to C# and executes unit tests in-memory without a BC service tier, Docker, or SQL Server, completing test runs in seconds instead of 20-30 minutes. It uses the BC compiler's public API to convert AL objects to C#, rewrites runtime types with mocks, and compiles everything with Roslyn for fast local testing.
tier: community
language: en
tags:
  - unit testing
  - al compiler
  - ci/cd pipeline
  - performance
  - ai coding agents
  - test execution
  - mock testing
  - development tools
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-08T01:55:26.425Z"
  flags: []
generated:
  at: "2026-10-08T01:26:53.141Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: cb90914d8780544aca288e8958ff967a37d378784b684e78adfb5ea9dd83c8c1
evidence:
  - kind: blog
    url: https://stefanmaron.com/posts/al-runner-run-al-tests-without-bc/
    title: "AL Runner: Run AL Unit Tests Without a BC Service Tier"
    date: "2026-04-24"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://stefanmaron.com/posts/al-runner-run-al-tests-without-bc/
    title: "AL Runner: Run AL Unit Tests Without a BC Service Tier"
    date: "2026-04-24"
    commit: null
    t: null
    quote: AL Runner drops that overhead entirely. Transpilation, in-memory compilation, and test execution all happen in seconds.
  - kind: blog
    url: https://stefanmaron.com/posts/al-runner-run-al-tests-without-bc/
    title: "AL Runner: Run AL Unit Tests Without a BC Service Tier"
    date: "2026-04-24"
    commit: null
    t: null
    quote: AL Runner is a pure CLI tool - cross-platform, no GUI, machine-readable output. That makes it a natural fit for coding agents.
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://stefanmaron.com/posts/al-runner-run-al-tests-without-bc/
source_id: stefanmaron-com
source_name: Stefan Maron
url: https://stefanmaron.com/posts/al-runner-run-al-tests-without-bc/
published_at: "2026-04-24T05:00:00.000Z"
author: Stefan Maron
full_text: false
words: 2128
quotes:
  - text: AL Runner drops that overhead entirely. Transpilation, in-memory compilation, and test execution all happen in seconds.
    why_it_matters: "Demonstrates the core value: eliminating the 15-30 minute container startup time that slows down development cycles."
  - text: AL Runner is a pure CLI tool - cross-platform, no GUI, machine-readable output. That makes it a natural fit for coding agents.
    why_it_matters: Shows how the design intentionally supports AI agent integration for automated test-driven development workflows.
code_objects_mentioned: []
systems:
  - development
  - platform
versions_mentioned:
  - BC 26
  - BC 27
  - BC 28
preview:
  embeddable: true
  frame_url: null
  image: null
  image_alt: null
  image_w: null
  image_h: null
  site_name: Stefan Maron
  favicon: https://stefanmaron.com/icons/favicon-32x32.png
  probed_at: "2026-10-07T11:50:30.633Z"
---

# AL Runner: Run AL Unit Tests Without a BC Service Tier

[Read the post](https://stefanmaron.com/posts/al-runner-run-al-tests-without-bc/) · Stefan Maron (Stefan Maron, MVP) · 2026-04-24 · 2128 words · tier community · reviewed (checked by Opus)

> AL Runner is a CLI tool that transpiles AL code to C# and executes unit tests in-memory without a BC service tier, Docker, or SQL Server, completing test runs in seconds instead of 20-30 minutes. It uses the BC compiler's public API to convert AL objects to C#, rewrites runtime types with mocks, and compiles everything with Roslyn for fast local testing.

## Key points

- AL Runner transpiles AL to C# using Microsoft.Dynamics.Nav.CodeAnalysis.Compilation.Emit(), rewrites BC runtime types with in-memory mocks, and executes tests via Roslyn compilation without a service tier.
- Test execution runs in seconds compared to 15-30 minute container-based pipelines, making it ideal for CI pre-checks and AI coding agents that need fast feedback loops.
- Dependencies are handled via auto-stubs, hand-written stubs, or compiled DLLs; code inside .app packages requires stubs or --compile-dep workaround.
- Supports codeunits, tables, enums, queries, record operations, events, TestPage, JSON types, and many AL features; does not support transaction semantics, parallel sessions, UI rendering, or real HTTP I/O.
- Available as a global dotnet tool with cross-platform support (Windows, Linux, macOS), automated BC Service Tier DLL downloads, and machine-readable output for agent integration.

## Quotes

- "AL Runner drops that overhead entirely. Transpilation, in-memory compilation, and test execution all happen in seconds." (Demonstrates the core value: eliminating the 15-30 minute container startup time that slows down development cycles.)
- "AL Runner is a pure CLI tool - cross-platform, no GUI, machine-readable output. That makes it a natural fit for coding agents." (Shows how the design intentionally supports AI agent integration for automated test-driven development workflows.)

## Context

- Features: AL unit test execution, In-memory test compilation, Dependency stubbing, TestPage support, Event subscriber testing, Debug Adapter Protocol, CI/CD integration, Machine-readable output
- Versions: BC 26, BC 27, BC 28

Source: Stefan Maron, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
