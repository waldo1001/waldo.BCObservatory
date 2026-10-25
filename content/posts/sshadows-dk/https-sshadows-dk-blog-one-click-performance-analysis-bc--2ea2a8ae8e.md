---
id: post/sshadows-dk/https-sshadows-dk-blog-one-click-performance-analysis-bc--2ea2a8ae8e
type: post
title: One-Click Performance Analysis Inside Business Central
summary: An open source extension adds an Analyze with AL Perf button to the Business Central Performance Profiler page. It sends the profile to an external analyzer that ranks hotspots, flags anti-patterns such as N+1-style repeated calls, method dominance, deep call stacks and event subscriber hotspots, and returns a plain-English explanation written by Claude. A companion web app also accepts AL source snapshots, which lets it detect unfiltered queries and missing SetLoadFields.
tier: community
language: en
tags:
  - performance analysis
  - profiling
  - optimization
  - code quality
  - anti-patterns
  - debugging
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-25T16:50:16.573Z"
  flags: []
generated:
  at: "2026-10-25T16:41:48.094Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: 32bb9b6c875838e2db047f2d4c22c5b75648929ddd73ec905aaf7574f81029cb
evidence:
  - kind: blog
    url: https://sshadows.dk/blog/one-click-performance-analysis-bc/
    title: One-Click Performance Analysis Inside Business Central
    date: "2026-03-03"
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
post_id: https://sshadows.dk/blog/one-click-performance-analysis-bc/
source_id: sshadows-dk
source_name: SShadowS
url: https://sshadows.dk/blog/one-click-performance-analysis-bc/
published_at: "2026-03-03T00:00:00.000Z"
author: Torben Leth
full_text: false
words: 1059
quotes: []
code_objects_mentioned: []
systems:
  - development
  - platform
versions_mentioned: []
preview:
  embeddable: false
  frame_url: null
  image: https://sshadows.dk/images/posts/one-click-performance-analysis-bc/cover.webp
  image_alt: null
  image_w: null
  image_h: null
  site_name: SShadowS
  favicon: https://sshadows.dk/favicon.svg
  probed_at: "2026-10-25T16:46:47.276Z"
---

# One-Click Performance Analysis Inside Business Central

[Read the post](https://sshadows.dk/blog/one-click-performance-analysis-bc/) · SShadowS (Torben Leth) · 2026-03-03 · 1059 words · tier community · reviewed (checked by Opus)

> An open source extension adds an Analyze with AL Perf button to the Business Central Performance Profiler page. It sends the profile to an external analyzer that ranks hotspots, flags anti-patterns such as N+1-style repeated calls, method dominance, deep call stacks and event subscriber hotspots, and returns a plain-English explanation written by Claude. A companion web app also accepts AL source snapshots, which lets it detect unfiltered queries and missing SetLoadFields.

## Key points

- One button on the Performance Profiler page sends the recorded profile for analysis, and results appear in the client in about 20 to 30 seconds
- Profile-only analysis flags single method dominance, repeated sibling calls (N+1), event subscriber hotspots and deep call stacks, each with a severity and a suggestion
- Uploading the VS Code snapshot zip with AL source to the web app proves loop nesting and catches unfiltered record operations and missing SetLoadFields
- The extension does the quick profile-only path, while the web app at alperf.sshadows.dk does the full analysis with source correlation
- Profiles are sent over HTTPS, analyzed in memory and not stored on the server

## Context

- Features: Performance Profiler integration, AI-powered performance explanation, Anti-pattern detection, Call tree analysis, Source code correlation, N+1 query detection, Event subscriber hotspot detection, Unfiltered query detection

Source: SShadowS, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
