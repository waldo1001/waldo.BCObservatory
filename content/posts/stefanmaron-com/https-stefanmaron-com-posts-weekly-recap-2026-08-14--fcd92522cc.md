---
id: post/stefanmaron-com/https-stefanmaron-com-posts-weekly-recap-2026-08-14--fcd92522cc
type: post
title: "Weekly Recap: August 7-14"
summary: A weekly recap covering AL Runner v2 improvements closing emulation gaps against real BC, reference suite growth through sandbox-verified testing, bc-code-atlas enhancements for cross-app call graphs with deterministic global IDs, AL-Go fast lane hardening for multi-workflow stability, and compile-time benchmarking showing NuGet-sourced compilation is faster due to smaller dependency caches.
tier: community
language: en
tags:
  - al runner
  - testing
  - code analysis
  - ci/cd pipeline
  - performance benchmarking
  - cross-app integration
  - linux support
system: development
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T20:00:32.874Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: 3ad3e59ed90c34142e3cc3a95b868c9ed96987daeddc2aca20f8cbb2f5dbc047
evidence:
  - kind: blog
    url: https://stefanmaron.com/posts/weekly-recap-2026-08-14/
    title: "Weekly Recap: August 7-14"
    date: "2026-08-14"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://stefanmaron.com/posts/weekly-recap-2026-08-14/
    title: "Weekly Recap: August 7-14"
    date: "2026-08-14"
    commit: null
    t: null
    quote: run the corpus against real BC, find a case where the runner and BC disagree, fix it
  - kind: blog
    url: https://stefanmaron.com/posts/weekly-recap-2026-08-14/
    title: "Weekly Recap: August 7-14"
    date: "2026-08-14"
    commit: null
    t: null
    quote: if a measured run disagrees with the assumption, the measurement wins
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://stefanmaron.com/posts/weekly-recap-2026-08-14/
source_id: stefanmaron-com
source_name: Stefan Maron
url: https://stefanmaron.com/posts/weekly-recap-2026-08-14/
published_at: "2026-08-14T07:30:00.000Z"
author: Stefan Maron
full_text: false
words: 1839
quotes:
  - text: run the corpus against real BC, find a case where the runner and BC disagree, fix it
    why_it_matters: Explains the systematic approach to closing emulation gaps through measured comparison rather than assumptions
  - text: if a measured run disagrees with the assumption, the measurement wins
    why_it_matters: Illustrates the core testing discipline of validating against real BC behavior as the authoritative reference
code_objects_mentioned:
  - other AL Runner
  - other bc-code-atlas
  - other AL-Go
  - other BusinessCentral.AL.Language.Tests
  - other MsDyn365Bc.On.Linux
  - other al-go-compile-bench
systems:
  - development
  - integration
  - platform
versions_mentioned:
  - BC 27.x
  - BC 28.x
preview:
  embeddable: true
  frame_url: null
  image: null
  image_alt: null
  image_w: null
  image_h: null
  site_name: Stefan Maron
  favicon: https://stefanmaron.com/icons/favicon-32x32.png
  probed_at: "2026-10-07T11:50:20.937Z"
---

# Weekly Recap: August 7-14

[Read the post](https://stefanmaron.com/posts/weekly-recap-2026-08-14/) · Stefan Maron (Stefan Maron, MVP) · 2026-08-14 · 1839 words · tier community · **unreviewed** (machine-generated)

> A weekly recap covering AL Runner v2 improvements closing emulation gaps against real BC, reference suite growth through sandbox-verified testing, bc-code-atlas enhancements for cross-app call graphs with deterministic global IDs, AL-Go fast lane hardening for multi-workflow stability, and compile-time benchmarking showing NuGet-sourced compilation is faster due to smaller dependency caches.

## Key points

- AL Runner shipped 85 PRs fixing emulation-to-real-BC divergences in rename propagation, calc formulas, test paging, and event dispatch
- Added safety mechanisms like count-baseline floors to prevent silent test vanishing and reclassified permanent gaps from temporary ones
- bc-code-atlas global_id enables cross-instance call graphs by using deterministic identity-based keys independent of indexing
- Fast lane hardening fixed silent build skips in non-PR workflows and missing-package errors in compile-only projects
- Compile benchmarking revealed NuGet folder dependency caches are faster than artifact folders because they only contain actual closure, not all bundled apps

## Quotes

- "run the corpus against real BC, find a case where the runner and BC disagree, fix it" (Explains the systematic approach to closing emulation gaps through measured comparison rather than assumptions)
- "if a measured run disagrees with the assumption, the measurement wins" (Illustrates the core testing discipline of validating against real BC behavior as the authoritative reference)

## AL objects mentioned

As named in the post. A name that matches one object page by exact type and name links to it; the others stay as named.

- other "AL Runner"
- other "bc-code-atlas"
- other "AL-Go"
- other "BusinessCentral.AL.Language.Tests"
- other "MsDyn365Bc.On.Linux"
- other "al-go-compile-bench"

## Context

- Features: AL Runner emulation correctness, Event dispatch with EventSubscriberInstance Manual, TableRelation rename propagation, TestPage AutoSplitKey numbering, Cross-app call graph navigation, Deterministic global IDs, AL-Go fast lane multi-workflow support, TLS reverse proxy support for containers
- Versions: BC 27.x, BC 28.x

Source: Stefan Maron, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
