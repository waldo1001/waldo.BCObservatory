---
id: post/stefanmaron-com/https-stefanmaron-com-posts-introducing-alcops--dd54d0b34f
type: post
title: Introducing ALCops — LinterCop's Next Chapter
summary: ALCops is a complete replacement for LinterCop that splits code analysis into six domain-specific analyzers (ApplicationCop, DocumentationCop, FormattingCop, LinterCop, PlatformCop, TestAutomationCop) to address structural limitations including GitHub rate limits, overgrown feature scope, and rule severity constraints. It improves code quality through better rule severity defaults, 30 code fixes, correctness fixes, and distributes via NuGet with MCP server support for AI tooling integration.
tier: community
language: en
tags:
  - alcops
  - lintercop
  - code analysis
  - al development
  - mcp server
  - nuget
  - code quality
  - ai tooling
system: development
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
  input_hash: 95b811ecdaf8c5151ed1d4318d8c9f637bd8d3858c753858e2a7d5561297cc3f
evidence:
  - kind: blog
    url: https://stefanmaron.com/posts/introducing-alcops/
    title: Introducing ALCops — LinterCop's Next Chapter
    date: "2026-02-27"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://stefanmaron.com/posts/introducing-alcops/
    title: Introducing ALCops — LinterCop's Next Chapter
    date: "2026-02-27"
    commit: null
    t: null
    quote: "LinterCop is deprecated. The README now says so explicitly. Arthur's plan: keep it working as long as practical - probably through the end of 2026."
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://stefanmaron.com/posts/introducing-alcops/
source_id: stefanmaron-com
source_name: Stefan Maron
url: https://stefanmaron.com/posts/introducing-alcops/
published_at: "2026-02-27T17:00:00.000Z"
author: Stefan Maron
full_text: false
words: 1542
quotes:
  - text: "LinterCop is deprecated. The README now says so explicitly. Arthur's plan: keep it working as long as practical - probably through the end of 2026."
    why_it_matters: Critical information for existing LinterCop users about the migration timeline and support window
code_objects_mentioned:
  - other ApplicationCop
  - other DocumentationCop
  - other FormattingCop
  - other LinterCop
  - other PlatformCop
  - other TestAutomationCop
  - other TransferFieldsCollector
  - other ALCops.Mcp
systems:
  - development
  - platform
  - integration
versions_mentioned:
  - AL 16
  - AL 17
  - v0.5
  - v0.1 alpha
preview:
  embeddable: true
  frame_url: null
  image: null
  image_alt: null
  image_w: null
  image_h: null
  site_name: Stefan Maron
  favicon: https://stefanmaron.com/icons/favicon-32x32.png
  probed_at: "2026-10-07T11:50:36.849Z"
---

# Introducing ALCops — LinterCop's Next Chapter

[Read the post](https://stefanmaron.com/posts/introducing-alcops/) · Stefan Maron (Stefan Maron, MVP) · 2026-02-27 · 1542 words · tier community · **unreviewed** (machine-generated)

> ALCops is a complete replacement for LinterCop that splits code analysis into six domain-specific analyzers (ApplicationCop, DocumentationCop, FormattingCop, LinterCop, PlatformCop, TestAutomationCop) to address structural limitations including GitHub rate limits, overgrown feature scope, and rule severity constraints. It improves code quality through better rule severity defaults, 30 code fixes, correctness fixes, and distributes via NuGet with MCP server support for AI tooling integration.

## Key points

- ALCops replaces LinterCop with six domain-specific analyzers instead of one monolithic tool, allowing teams to opt into only the analysis domains they need
- Distributed via NuGet using reflection to support multiple AL versions with minimal DLL duplication (net8.0 for AL 16+ and netstandard2.1 for older versions)
- Includes 30 code fixes (versus LinterCop's 5-6), improved rule descriptions for AI understanding, and correctness fixes that surface previously hidden issues
- Ships an MCP server exposing analyzers to Claude Code and other MCP-compatible clients, with deterministic code fix application rather than LLM interpretation
- LinterCop is deprecated and maintained only through end of 2026 with no new rules or implementation changes planned

## Quotes

- "LinterCop is deprecated. The README now says so explicitly. Arthur's plan: keep it working as long as practical - probably through the end of 2026." (Critical information for existing LinterCop users about the migration timeline and support window)

## AL objects mentioned

As named in the post; not yet joined to the code pillar.

- other "ApplicationCop"
- other "DocumentationCop"
- other "FormattingCop"
- other "LinterCop"
- other "PlatformCop"
- other "TestAutomationCop"
- other "TransferFieldsCollector"
- other "ALCops.Mcp"

## Context

- Features: domain-specific analyzers, code fixes, NuGet distribution, MCP server integration, VS Code extension, rule severity configuration, AI-friendly rule descriptions, TransferFields coupling check
- Versions: AL 16, AL 17, v0.5, v0.1 alpha

Source: Stefan Maron, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
