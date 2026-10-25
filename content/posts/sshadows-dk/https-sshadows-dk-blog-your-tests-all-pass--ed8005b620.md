---
id: post/sshadows-dk/https-sshadows-dk-blog-your-tests-all-pass--ed8005b620
type: post
title: Your Tests All Pass. I Have Bad News.
summary: Mutation testing is a technique that validates test quality by intentionally breaking code to see if tests catch the failures. The post introduces LethAL, an open-source tool for AL that performs mutation testing efficiently by compiling once and running mutations as table writes, making it practical for finding gaps in test suites that code coverage alone misses.
tier: community
language: en
tags:
  - testing
  - mutation testing
  - test quality
  - code validation
  - lethal tool
  - al development
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-25T16:50:23.607Z"
  flags: []
generated:
  at: "2026-10-25T16:41:48.094Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: 62707d0143297589a11a8255dc3875a9397243363278b71b802640fa1ffc24c9
evidence:
  - kind: blog
    url: https://sshadows.dk/blog/your-tests-all-pass/
    title: Your Tests All Pass. I Have Bad News.
    date: "2026-08-24"
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
post_id: https://sshadows.dk/blog/your-tests-all-pass/
source_id: sshadows-dk
source_name: SShadowS
url: https://sshadows.dk/blog/your-tests-all-pass/
published_at: "2026-08-24T00:00:00.000Z"
author: Torben Leth
full_text: false
words: 1732
quotes: []
code_objects_mentioned: []
systems:
  - development
versions_mentioned: []
preview:
  embeddable: false
  frame_url: null
  image: https://sshadows.dk/images/posts/your-tests-all-pass/cover.webp
  image_alt: null
  image_w: null
  image_h: null
  site_name: SShadowS
  favicon: https://sshadows.dk/favicon.svg
  probed_at: "2026-10-25T16:46:37.716Z"
---

# Your Tests All Pass. I Have Bad News.

[Read the post](https://sshadows.dk/blog/your-tests-all-pass/) · SShadowS (Torben Leth) · 2026-08-24 · 1732 words · tier community · reviewed (checked by Opus)

> Mutation testing is a technique that validates test quality by intentionally breaking code to see if tests catch the failures. The post introduces LethAL, an open-source tool for AL that performs mutation testing efficiently by compiling once and running mutations as table writes, making it practical for finding gaps in test suites that code coverage alone misses.

## Key points

- Code coverage only shows a line ran; mutation testing shows whether a test would notice that line breaking
- LethAL compiles all mutants into one build and switches between them with a table write, so the demo's 32 mutants ran in 16 seconds instead of roughly an hour
- The credit limit demo exposed three test gaps: no exact-limit boundary test, no posted ledger data so the Balance FlowField was never exercised, and only one customer so the customer filter never mattered
- LethAL targets agent workflows with published JSON Schemas, doctor --json, meaningful exit codes, and quarantine of runs it cannot trust
- Survivors are leads, not verdicts; decide the correct behavior before letting an agent write the killing test

## Context

- Features: Mutation testing, LethAL tool, Test quality validation, Code coverage analysis, Mutation scoring, Agent-driven testing workflow

Source: SShadowS, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
