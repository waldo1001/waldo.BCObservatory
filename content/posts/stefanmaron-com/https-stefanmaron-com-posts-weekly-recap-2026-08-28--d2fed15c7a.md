---
id: post/stefanmaron-com/https-stefanmaron-com-posts-weekly-recap-2026-08-28--d2fed15c7a
type: post
title: "Weekly Recap: August 21-28"
summary: Weekly recap covering AL Runner CI tooling fixes, Linux fast lane pipeline bugs, a major OpenPageInspection browser extension rewrite for cross-browser support, and Azure CLI authentication contributions to the navapi Business Central API client.
tier: community
language: en
tags:
  - al runner
  - ci/cd
  - linux
  - browser extension
  - authentication
  - api client
  - changelog
  - testing
system: development
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-06T21:40:31.641Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: ea8918ba1adcc332ce85e5da9528139e54b106ad9eea6a0d67e00c4a806330fd
evidence:
  - kind: blog
    url: https://stefanmaron.com/posts/weekly-recap-2026-08-28/
    title: "Weekly Recap: August 21-28"
    date: "2026-08-28"
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
post_id: https://stefanmaron.com/posts/weekly-recap-2026-08-28/
source_id: stefanmaron-com
source_name: Stefan Maron
url: https://stefanmaron.com/posts/weekly-recap-2026-08-28/
published_at: "2026-08-28T07:30:00.000Z"
author: Stefan Maron
full_text: false
words: 1443
quotes: []
code_objects_mentioned:
  - other AL Runner
  - other MsDyn365Bc.On.Linux
  - other BusinessCentral.AL.Language.Tests
  - other OpenPageInspection
  - other navapi
systems:
  - development
  - platform
versions_mentioned:
  - BC 29 preview
---

# Weekly Recap: August 21-28

> Weekly recap covering AL Runner CI tooling fixes, Linux fast lane pipeline bugs, a major OpenPageInspection browser extension rewrite for cross-browser support, and Azure CLI authentication contributions to the navapi Business Central API client.

[Read the post](https://stefanmaron.com/posts/weekly-recap-2026-08-28/) · Stefan Maron (Stefan Maron, MVP) · 2026-08-28 · 1443 words · tier community · **unreviewed** (machine-generated)

## Key points

- AL Runner's changelog generator now handles scoped commit prefixes and automatically maintains the Unreleased section from commit history
- Linux fast lane fixed directory path handling bugs by switching from space-separated to newline-separated lists and made test steps handle zero-test projects
- OpenPageInspection rewritten as a WXT project supporting Chromium and Firefox with improved page inspection using BC's native Ctrl+Alt+F1 shortcut
- navapi gained optional Azure CLI authentication allowing users to avoid storing client secrets, with identity pinning for multi-account scenarios

## AL objects mentioned

As named in the post; not yet joined to the code pillar.

- other "AL Runner"
- other "MsDyn365Bc.On.Linux"
- other "BusinessCentral.AL.Language.Tests"
- other "OpenPageInspection"
- other "navapi"

## Context

- Features: scoped commit prefix recognition, continuous changelog generation, directory path handling in pipelines, zero-test project support, cross-browser page inspection, Azure CLI authentication, identity pinning, endpoint search by name or entity type
- Versions: BC 29 preview

Source: Stefan Maron, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
