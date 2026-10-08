---
id: post/stefanmaron-com/https-stefanmaron-com-posts-al-runner-tests-against-cronus--822317b971
type: post
title: "AL Runner: Testing Against Real Cronus Data, Debugging Restored, and Mutation-Ready Coverage"
summary: "AL Runner, an in-memory test runner for Business Central AL code, gained several capabilities through v2.10.0: a --test-data flag that loads real Cronus demo rows from the BC backup, restored breakpoint debugging via a Debug Adapter Protocol server, per-test coverage for mutation testing, and TDD mode that now works with watch. v2.8.0 also makes compilation fail whenever the BC compiler reports an error."
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
  state: reviewed
  by: opus
  at: "2026-10-07T23:47:50.436Z"
  flags: []
generated:
  at: "2026-10-07T22:42:12.892Z"
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

[Read the post](https://stefanmaron.com/posts/al-runner-tests-against-cronus/) · Stefan Maron (Stefan Maron, MVP) · 2026-09-01 · 1615 words · tier community · reviewed (checked by Opus)

> AL Runner, an in-memory test runner for Business Central AL code, gained several capabilities through v2.10.0: a --test-data flag that loads real Cronus demo rows from the BC backup, restored breakpoint debugging via a Debug Adapter Protocol server, per-test coverage for mutation testing, and TDD mode that now works with watch. v2.8.0 also makes compilation fail whenever the BC compiler reports an error.

## Key points

- The --test-data flag fills the in-memory database from the Cronus backup in the BC artifact cache. On BC 28.1 W1 that is 344 tables and 39,231 rows, so tests can catch bugs that depend on setup data.
- --dap brings back breakpoint debugging with per-statement stepping, using the same statement hook as coverage, and offers both TCP and stdio transports.
- A new perTestCoverage field (v2.8.0) shows which statements each test executed. Mutation tools such as LethAL can then run each mutant only against the tests that touched the changed line, instead of the full suite, which took about five hours in one measured run.
- --tdd turns tests that reference missing symbols into failed tests with a diagnostic, can generate stubs for signatures it can infer, and now works together with --watch.
- Behavior change in v2.8.0: compilation stops with exit code 3 on any compiler error, matching what a real BC service tier would refuse to publish.

## AL objects mentioned

As named in the post. A name that matches one object page by exact type and name links to it; the others stay as named.

- other "AL Runner"
- other "bcdb"
- other "ALchemist"
- other "LethAL"

## Context

- Features: Real Cronus data testing, Breakpoint debugging with Debug Adapter Protocol, Per-test coverage attribution, Mutation testing support, TDD mode, Watch mode with TDD, Localized demo data via --country, NumberSequence support
- Versions: 2.10.0, 2.8.0, 2.2, 2.3, 28.1, 27.5

Source: Stefan Maron, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
