---
id: post/stefanmaron-com/https-stefanmaron-com-posts-unittestswithoutbaseapp--b93d0ec831
type: post
title: You don't need the base app to run your unit tests
summary: Unit tests for self-contained Business Central logic do not require the base application to run. By structuring code as isolated sub-extensions with their own app.json files and only platform dependencies, developers can significantly reduce container startup time and pipeline costs.
tier: community
language: en
tags:
  - unit testing
  - ci/cd pipelines
  - code architecture
  - performance optimization
  - compiler behavior
  - sub-extensions
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
  input_hash: 83f1ca0af2c2d75e4231f17515cf1eef6ea9ee6df8858a00b552e12fa4ea9899
evidence:
  - kind: blog
    url: https://stefanmaron.com/posts/unittestswithoutbaseapp/
    title: You don't need the base app to run your unit tests
    date: "2026-05-24"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://stefanmaron.com/posts/unittestswithoutbaseapp/
    title: You don't need the base app to run your unit tests
    date: "2026-05-24"
    commit: null
    t: null
    quote: If your tests are truly testing a unit, they should not need the entire application stack as their environment.
  - kind: blog
    url: https://stefanmaron.com/posts/unittestswithoutbaseapp/
    title: You don't need the base app to run your unit tests
    date: "2026-05-24"
    commit: null
    t: null
    quote: Eight minutes down to under two is not a marginal improvement. It changes how often you run tests and how fast you can iterate.
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://stefanmaron.com/posts/unittestswithoutbaseapp/
source_id: stefanmaron-com
source_name: Stefan Maron
url: https://stefanmaron.com/posts/unittestswithoutbaseapp/
published_at: "2026-05-24T22:00:00.000Z"
author: Stefan Maron
full_text: false
words: 850
quotes:
  - text: If your tests are truly testing a unit, they should not need the entire application stack as their environment.
    why_it_matters: This principle establishes why isolated testing is both valid and efficient - it's fundamental to unit test philosophy
  - text: Eight minutes down to under two is not a marginal improvement. It changes how often you run tests and how fast you can iterate.
    why_it_matters: Quantifies the practical benefit, showing that performance gains directly impact development workflow and feedback loops
code_objects_mentioned: []
systems:
  - development
  - platform
  - reporting
versions_mentioned:
  - "27"
  - "28"
preview:
  embeddable: true
  frame_url: null
  image: null
  image_alt: null
  image_w: null
  image_h: null
  site_name: Stefan Maron
  favicon: https://stefanmaron.com/icons/favicon-32x32.png
  probed_at: "2026-10-07T11:50:27.733Z"
---

# You don't need the base app to run your unit tests

[Read the post](https://stefanmaron.com/posts/unittestswithoutbaseapp/) · Stefan Maron (Stefan Maron, MVP) · 2026-05-24 · 850 words · tier community · **unreviewed** (machine-generated)

> Unit tests for self-contained Business Central logic do not require the base application to run. By structuring code as isolated sub-extensions with their own app.json files and only platform dependencies, developers can significantly reduce container startup time and pipeline costs.

## Key points

- Isolate business logic and its tests in sub-extensions with no application dependency, only platform dependency
- Use nested app.json files as compilation scopes - the AL compiler picks up only the app.json at the root folder it targets
- Deploy isolated sub-extensions to containers without the base app to match test scope with environment scope
- Test pipeline execution time reduced from 8 minutes to under 2 minutes by eliminating unnecessary base app overhead
- This pattern mirrors Microsoft's own application stack structure but requires code to be architected for isolation from the start

## Quotes

- "If your tests are truly testing a unit, they should not need the entire application stack as their environment." (This principle establishes why isolated testing is both valid and efficient - it's fundamental to unit test philosophy)
- "Eight minutes down to under two is not a marginal improvement. It changes how often you run tests and how fast you can iterate." (Quantifies the practical benefit, showing that performance gains directly impact development workflow and feedback loops)

## Context

- Features: sub-extension compilation, isolated test environments, base app removal, container configuration, pipeline optimization
- Versions: 27, 28

Source: Stefan Maron, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
