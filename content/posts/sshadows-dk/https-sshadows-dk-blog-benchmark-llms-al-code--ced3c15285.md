---
id: post/sshadows-dk/https-sshadows-dk-blog-benchmark-llms-al-code--ced3c15285
type: post
title: How I Benchmark LLMs on AL Code
summary: CentralGauge is an open source benchmark designed to evaluate Large Language Models on AL code generation for Business Central. The post explains the methodology, task design philosophy, two-attempt scoring mechanism, and results showing how different models perform on domain-specific AL code compared to generic benchmarks.
tier: community
language: en
tags:
  - al code generation
  - llm benchmarking
  - code quality evaluation
  - business central development
  - ai model testing
  - domain specific performance
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
  input_hash: c50d631b925139d344e2559ca6a78b58afa9523eddbefc84bca3915ec9525a7e
evidence:
  - kind: blog
    url: https://sshadows.dk/blog/benchmark-llms-al-code/
    title: How I Benchmark LLMs on AL Code
    date: "2026-01-16"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://sshadows.dk/blog/benchmark-llms-al-code/
    title: How I Benchmark LLMs on AL Code
    date: "2026-01-16"
    commit: null
    t: null
    quote: Generic code benchmarks cannot tell you how an LLM will perform on your specific domain.
  - kind: blog
    url: https://sshadows.dk/blog/benchmark-llms-al-code/
    title: How I Benchmark LLMs on AL Code
    date: "2026-01-16"
    commit: null
    t: null
    quote: The model should know this. If it does not, that is a valid test failure.
  - kind: blog
    url: https://sshadows.dk/blog/benchmark-llms-al-code/
    title: How I Benchmark LLMs on AL Code
    date: "2026-01-16"
    commit: null
    t: null
    quote: Model ranking on AL tasks does not match generic benchmark rankings.
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://sshadows.dk/blog/benchmark-llms-al-code/
source_id: sshadows-dk
source_name: SShadowS
url: https://sshadows.dk/blog/benchmark-llms-al-code/
published_at: "2026-01-16T00:00:00.000Z"
author: Torben Leth
full_text: false
words: 1343
quotes:
  - text: Generic code benchmarks cannot tell you how an LLM will perform on your specific domain.
    why_it_matters: This is the core justification for why specialized benchmarks like CentralGauge are necessary rather than relying on generic benchmarks like HumanEval
  - text: The model should know this. If it does not, that is a valid test failure.
    why_it_matters: Explains the benchmark's philosophy of testing domain knowledge rather than instruction-following ability, ensuring tasks measure genuine AL competency
  - text: Model ranking on AL tasks does not match generic benchmark rankings.
    why_it_matters: Demonstrates that domain-specific performance cannot be predicted from general-purpose benchmarks, validating the need for specialized evaluation
code_objects_mentioned:
  - codeunit Assert
  - table Product Category
systems:
  - development
  - platform
versions_mentioned: []
preview:
  embeddable: false
  frame_url: null
  image: https://sshadows.dk/images/posts/benchmark-llms-al-code/gauge.webp
  image_alt: null
  image_w: null
  image_h: null
  site_name: SShadowS
  favicon: https://sshadows.dk/favicon.svg
  probed_at: "2026-10-25T16:46:50.764Z"
---

# How I Benchmark LLMs on AL Code

[Read the post](https://sshadows.dk/blog/benchmark-llms-al-code/) · SShadowS (Torben Leth) · 2026-01-16 · 1343 words · tier community · reviewed (checked by Opus)

> CentralGauge is an open source benchmark designed to evaluate Large Language Models on AL code generation for Business Central. The post explains the methodology, task design philosophy, two-attempt scoring mechanism, and results showing how different models perform on domain-specific AL code compared to generic benchmarks.

## Key points

- AL's niche characteristics (syntax, conventions, standard library patterns) require specialized benchmarking distinct from Python or JavaScript benchmarks
- The benchmark includes 56 tasks across three difficulty tiers with real compilation in a Business Central container and test execution to ensure viability
- The two-attempt mechanism measures both code generation quality and self-correction ability, penalizing second attempts by 10 points
- Model performance rankings on AL tasks differ significantly from generic benchmarks, with Opus 4.5 leading at 66% pass rate and dramatic cost efficiency variations between providers
- Contributing new tasks requires defining YAML specifications with test codeunits that validate expected behavior rather than vague requirements

## Quotes

- "Generic code benchmarks cannot tell you how an LLM will perform on your specific domain." (This is the core justification for why specialized benchmarks like CentralGauge are necessary rather than relying on generic benchmarks like HumanEval)
- "The model should know this. If it does not, that is a valid test failure." (Explains the benchmark's philosophy of testing domain knowledge rather than instruction-following ability, ensuring tasks measure genuine AL competency)
- "Model ranking on AL tasks does not match generic benchmark rankings." (Demonstrates that domain-specific performance cannot be predicted from general-purpose benchmarks, validating the need for specialized evaluation)

## AL objects mentioned

As named in the post. A name that matches one object page by exact type and name links to it; the others stay as named.

- codeunit "Assert"
- table "Product Category"

Not found in BC28-30: codeunit "Assert", table "Product Category".

## Context

- Features: AL code generation, LLM evaluation, Benchmark task design, Two-attempt scoring, Real compilation testing, Self-correction measurement, Cost tracking, Parallel execution

Source: SShadowS, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
