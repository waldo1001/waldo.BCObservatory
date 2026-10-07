---
id: post/stefanmaron-com/https-stefanmaron-com-posts-al-runner-tests-against-cronus--822317b971
type: post
title: "AL Runner: Testing Against Real Cronus Data, Debugging Restored, and Mutation-Ready Coverage"
summary: AL Runner, a testing tool for Business Central AL code, now supports testing against real Cronus demo data via the --test-data flag, restores breakpoint debugging through Debug Adapter Protocol, enables per-test coverage attribution for mutation testing, and introduces TDD mode for agentic development workflows.
tier: community
language: en
tags:
  - testing
  - debugging
  - code quality
  - mutation testing
  - al runner
  - tdd
  - coverage
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
  input_hash: 9c2798301b9e124c40c2649dcbed729d975c22c283876ee03e33d57cf956a4d8
evidence:
  - kind: blog
    url: https://stefanmaron.com/posts/al-runner-tests-against-cronus/
    title: "AL Runner: Testing Against Real Cronus Data, Debugging Restored, and Mutation-Ready Coverage"
    date: "2026-09-01"
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
post_id: https://stefanmaron.com/posts/al-runner-tests-against-cronus/
source_id: stefanmaron-com
source_name: Stefan Maron
url: https://stefanmaron.com/posts/al-runner-tests-against-cronus/
published_at: "2026-09-01T16:30:00.000Z"
author: Stefan Maron
full_text: false
words: 1615
quotes: []
code_objects_mentioned:
  - other AL Runner
  - other bcdb
  - other ALchemist
  - other LethAL
systems:
  - development
  - platform
versions_mentioned:
  - 2.10.0
  - 2.8.0
  - "2.2"
  - "2.3"
  - "28.1"
  - "27.5"
preview:
  embeddable: true
  frame_url: null
  image: null
  image_alt: null
  image_w: null
  image_h: null
  site_name: Stefan Maron
  favicon: https://stefanmaron.com/icons/favicon-32x32.png
  probed_at: "2026-10-07T11:50:11.272Z"
---

# AL Runner: Testing Against Real Cronus Data, Debugging Restored, and Mutation-Ready Coverage

[Read the post](https://stefanmaron.com/posts/al-runner-tests-against-cronus/) · Stefan Maron (Stefan Maron, MVP) · 2026-09-01 · 1615 words · tier community · **unreviewed** (machine-generated)

> AL Runner, a testing tool for Business Central AL code, now supports testing against real Cronus demo data via the --test-data flag, restores breakpoint debugging through Debug Adapter Protocol, enables per-test coverage attribution for mutation testing, and introduces TDD mode for agentic development workflows.

## Key points

- The --test-data flag hydrates the in-memory test database with 39,231 real rows from the Cronus backup (344 tables), enabling tests to find bugs that only appear with real setup data present.
- Breakpoint debugging restored via --dap protocol with precise pause boundaries aligned to AL statement execution, supporting next/stepIn/stepOut operations.
- Per-test coverage tracking (perTestCoverage field) enables mutation testing tools to narrow down which tests actually exercise a mutated line, reducing test suite execution time from ~5 hours to minutes.
- --tdd mode allows tests referencing unimplemented symbols to fail gracefully rather than causing compilation errors, with inference generating stubs for inferable signatures.
- Behavior change in v2.8.0: compilation now fails when BC's compiler reports errors, matching real BC service tier behavior.

## AL objects mentioned

As named in the post; not yet joined to the code pillar.

- other "AL Runner"
- other "bcdb"
- other "ALchemist"
- other "LethAL"

## Context

- Features: Real Cronus data testing, Breakpoint debugging with Debug Adapter Protocol, Per-test coverage attribution, Mutation testing support, TDD mode, Watch mode with TDD, Localized demo data via --country, NumberSequence support
- Versions: 2.10.0, 2.8.0, 2.2, 2.3, 28.1, 27.5

Source: Stefan Maron, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
