---
id: post/stefanmaron-com/https-stefanmaron-com-posts-weekly-recap-2026-08-21--3d0dd8a51e
type: post
title: "Weekly Recap: August 14-21"
summary: This weekly recap covers AL Runner releases (v2.2-v2.3.1) with coverage reporting and watch mode improvements, CI/CD fixes for parallel dependency resolution and Linux builds, a major catch-up of bc-code-atlas's stale graphify-al fork that revealed hidden AL-specific behaviors and tree-sitter parser changes, and various smaller tool fixes. It highlights infrastructure improvements that prevent silent failures in builds and dependency resolution.
tier: community
language: en
tags:
  - al runner
  - ci/cd
  - dependency resolution
  - parser
  - testing
  - tools
  - build automation
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
  input_hash: 89fa6cbfb7c4765799221c19da1fd479299638de3779b7a9e822087a486ab5a4
evidence:
  - kind: blog
    url: https://stefanmaron.com/posts/weekly-recap-2026-08-21/
    title: "Weekly Recap: August 14-21"
    date: "2026-08-21"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://stefanmaron.com/posts/weekly-recap-2026-08-21/
    title: "Weekly Recap: August 14-21"
    date: "2026-08-21"
    commit: null
    t: null
    quote: releases now gate on the test suite instead of pushing the release commit and tag before tests finish running
  - kind: blog
    url: https://stefanmaron.com/posts/weekly-recap-2026-08-21/
    title: "Weekly Recap: August 14-21"
    date: "2026-08-21"
    commit: null
    t: null
    quote: "Build/BuildLinux jobs just never spawn: no error, no skipped-job entry, nothing in the run, while PostProcess still marks the whole thing failed"
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://stefanmaron.com/posts/weekly-recap-2026-08-21/
source_id: stefanmaron-com
source_name: Stefan Maron
url: https://stefanmaron.com/posts/weekly-recap-2026-08-21/
published_at: "2026-08-21T07:30:00.000Z"
author: Stefan Maron
full_text: false
words: 1123
quotes:
  - text: releases now gate on the test suite instead of pushing the release commit and tag before tests finish running
    why_it_matters: This prevents dead git tags from failed releases, addressing a real problem that occurred twice in the previous week
  - text: "Build/BuildLinux jobs just never spawn: no error, no skipped-job entry, nothing in the run, while PostProcess still marks the whole thing failed"
    why_it_matters: Illustrates how the PowerShell 5.1 JSON bug created silent failures that were breaking all CI/CD runs without any visible error
code_objects_mentioned:
  - other AL Runner
  - other AL Language Tests
  - other bc-code-atlas
  - other graphify-al
  - other tree-sitter-al
  - other vsc-lintercop
  - other ALCops
  - other BcContainerHelper
systems:
  - development
  - platform
  - integration
versions_mentioned:
  - v2.2
  - v2.3
  - v2.3.1
  - tree-sitter-al 4.0
  - AL Language v18
preview:
  embeddable: true
  frame_url: null
  image: null
  image_alt: null
  image_w: null
  image_h: null
  site_name: Stefan Maron
  favicon: https://stefanmaron.com/icons/favicon-32x32.png
  probed_at: "2026-10-07T11:50:16.097Z"
---

# Weekly Recap: August 14-21

[Read the post](https://stefanmaron.com/posts/weekly-recap-2026-08-21/) · Stefan Maron (Stefan Maron, MVP) · 2026-08-21 · 1123 words · tier community · **unreviewed** (machine-generated)

> This weekly recap covers AL Runner releases (v2.2-v2.3.1) with coverage reporting and watch mode improvements, CI/CD fixes for parallel dependency resolution and Linux builds, a major catch-up of bc-code-atlas's stale graphify-al fork that revealed hidden AL-specific behaviors and tree-sitter parser changes, and various smaller tool fixes. It highlights infrastructure improvements that prevent silent failures in builds and dependency resolution.

## Key points

- AL Runner now gates releases on test suite completion rather than pushing tags before tests finish, preventing dead tags from failed runs
- A PowerShell 5.1 JSON serialization quirk was silently breaking CI/CD builds by making matrix builds non-iterable; fixed with a regression test for actual JSON round-trips
- Thread-unsafe feed-decoration code in dependency resolution was fixed by pre-populating properties before parallel workers start
- bc-code-atlas's fork caught up 677 commits with graphify-al, discovering and re-porting undocumented AL-specific behaviors and fixing tree-sitter 4.0 parser changes
- vsc-lintercop extension now alerts users about LinterCop's end-of-life with ALCops migration notice before AL Language v18

## Quotes

- "releases now gate on the test suite instead of pushing the release commit and tag before tests finish running" (This prevents dead git tags from failed releases, addressing a real problem that occurred twice in the previous week)
- "Build/BuildLinux jobs just never spawn: no error, no skipped-job entry, nothing in the run, while PostProcess still marks the whole thing failed" (Illustrates how the PowerShell 5.1 JSON bug created silent failures that were breaking all CI/CD runs without any visible error)

## AL objects mentioned

As named in the post; not yet joined to the code pillar.

- other "AL Runner"
- other "AL Language Tests"
- other "bc-code-atlas"
- other "graphify-al"
- other "tree-sitter-al"
- other "vsc-lintercop"
- other "ALCops"
- other "BcContainerHelper"

## Context

- Features: coverage reporting, watch mode, inline execute, release gating, parallel dependency resolution, Linux fast lane CI/CD, AL code analysis, deprecation notices
- Versions: v2.2, v2.3, v2.3.1, tree-sitter-al 4.0, AL Language v18

Source: Stefan Maron, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
