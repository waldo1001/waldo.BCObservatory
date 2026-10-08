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
  state: reviewed
  by: opus
  at: "2026-10-08T01:56:40.475Z"
  flags: []
generated:
  at: "2026-10-08T01:26:53.141Z"
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

[Read the post](https://stefanmaron.com/posts/introducing-alcops/) · Stefan Maron (Stefan Maron, MVP) · 2026-02-27 · 1542 words · tier community · reviewed (checked by Opus)

> ALCops is a complete replacement for LinterCop that splits code analysis into six domain-specific analyzers (ApplicationCop, DocumentationCop, FormattingCop, LinterCop, PlatformCop, TestAutomationCop) to address structural limitations including GitHub rate limits, overgrown feature scope, and rule severity constraints. It improves code quality through better rule severity defaults, 30 code fixes, correctness fixes, and distributes via NuGet with MCP server support for AI tooling integration.

## Key points

- ALCops replaces LinterCop with six domain-specific analyzers, so teams turn on only the domains they care about instead of suppressing rules in a ruleset.
- It ships on NuGet with net8.0 (AL 16+) and netstandard2.1 builds, one DLL per analyzer, using reflection to cover several AL versions.
- It has 30 code fixes compared with LinterCop's five or six, plus correctness fixes and clearer rule descriptions. Migrated code may show new warnings.
- An MCP server (v0.1 alpha) exposes the analyzers to MCP clients such as Claude Code, and the fix routine applies code fixes directly, so results are deterministic.
- LinterCop is deprecated: no new rules or implementation changes, kept working as long as practical, likely until the end of 2026. LinterCop and ALCops share diagnostic IDs, so they should not run together.

## Quotes

- "LinterCop is deprecated. The README now says so explicitly. Arthur's plan: keep it working as long as practical - probably through the end of 2026." (Critical information for existing LinterCop users about the migration timeline and support window)

## AL objects mentioned

As named in the post. A name that matches one object page by exact type and name links to it; the others stay as named.

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
