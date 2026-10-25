---
id: post/sshadows-dk/https-sshadows-dk-blog-centralgauge-benchmark-update--5f5ba99f0c
type: post
title: "CentralGauge Benchmark Update: Why the Numbers Changed"
summary: CentralGauge, an AI benchmark for AL code generation in Business Central, underwent significant infrastructure fixes that corrected code extraction bugs, removed impossible tasks, and clarified ambiguous specifications. These improvements made benchmark scores more reliable and revealed that Claude Opus 4.6 achieves 98.2% consistency with 76.2% pass rate, outperforming other tested models.
tier: community
language: en
tags:
  - al code generation
  - benchmark
  - llm evaluation
  - code extraction
  - model comparison
  - business central
system: development
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-25T16:42:21.979Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: 64f32fba17dfb45e3a15496d4b5c40a76c45f1d921e4f363ee1b9a20ce413641
evidence:
  - kind: blog
    url: https://sshadows.dk/blog/centralgauge-benchmark-update/
    title: "CentralGauge Benchmark Update: Why the Numbers Changed"
    date: "2026-02-10"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://sshadows.dk/blog/centralgauge-benchmark-update/
    title: "CentralGauge Benchmark Update: Why the Numbers Changed"
    date: "2026-02-10"
    commit: null
    t: null
    quote: Models were generating valid AL code, but the harness was mangling it before compilation.
  - kind: blog
    url: https://sshadows.dk/blog/centralgauge-benchmark-update/
    title: "CentralGauge Benchmark Update: Why the Numbers Changed"
    date: "2026-02-10"
    commit: null
    t: null
    quote: "Gemini 3 Pro's self-correction gap remains the most striking anomaly: only 3.75% of first-attempt failures are recovered on the second attempt."
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://sshadows.dk/blog/centralgauge-benchmark-update/
source_id: sshadows-dk
source_name: SShadowS
url: https://sshadows.dk/blog/centralgauge-benchmark-update/
published_at: "2026-02-10T00:00:00.000Z"
author: Torben Leth
full_text: false
words: 961
quotes:
  - text: Models were generating valid AL code, but the harness was mangling it before compilation.
    why_it_matters: Explains that the initial benchmark failures were partly due to broken test infrastructure, not model capability, which is critical for fair model comparison
  - text: "Gemini 3 Pro's self-correction gap remains the most striking anomaly: only 3.75% of first-attempt failures are recovered on the second attempt."
    why_it_matters: Reveals a structural weakness in how Gemini handles error recovery compared to other models, affecting multi-attempt strategies
code_objects_mentioned: []
systems:
  - development
  - platform
versions_mentioned: []
---

# CentralGauge Benchmark Update: Why the Numbers Changed

[Read the post](https://sshadows.dk/blog/centralgauge-benchmark-update/) · SShadowS (Torben Leth) · 2026-02-10 · 961 words · tier community · **unreviewed** (model text not yet checked)

> CentralGauge, an AI benchmark for AL code generation in Business Central, underwent significant infrastructure fixes that corrected code extraction bugs, removed impossible tasks, and clarified ambiguous specifications. These improvements made benchmark scores more reliable and revealed that Claude Opus 4.6 achieves 98.2% consistency with 76.2% pass rate, outperforming other tested models.

## Key points

- Code extraction pipeline had critical bugs including unstripped markdown fences, greedy regex capturing, and missing delimiters that corrupted valid model output
- 11 tasks had 0% pass rates across all models due to infrastructure failures like missing report layouts, incorrect test policies, and wrong error code assertions
- Ambiguous task specifications caused noisy results; aligning function signatures with tests and handling valid AL patterns improved task pass rates significantly
- Claude Opus 4.6 ranks first with 76.2% pass@1 and 98.2% consistency; Gemini 3 Pro shows the largest self-correction gap at only 3.75% recovery rate
- Future focus includes continued task auditing, agent benchmark support with Docker containers, and scale improvements for faster benchmark runs

## Quotes

- "Models were generating valid AL code, but the harness was mangling it before compilation." (Explains that the initial benchmark failures were partly due to broken test infrastructure, not model capability, which is critical for fair model comparison)
- "Gemini 3 Pro's self-correction gap remains the most striking anomaly: only 3.75% of first-attempt failures are recovered on the second attempt." (Reveals a structural weakness in how Gemini handles error recovery compared to other models, affecting multi-attempt strategies)

## Context

- Features: CentralGauge benchmark, AL code generation testing, multi-model comparison, self-correction analysis, agent benchmarking with Docker, task specification validation

Source: SShadowS, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
