---
id: post/stefanmaron-com/https-stefanmaron-com-posts-al-runner-v2-emit-through-bc--e1f81e05ab
type: post
title: "AL Runner v2: What Feedback Told Me v1 Was Missing"
summary: AL Runner v2 introduces a fundamental architecture change that enables integration testing against real Microsoft and third-party dependencies instead of mocks, moving from type-renaming and stubbing to using BC's own compiler and patching only low-level database operations. The update emphasizes fail-loudly error handling so tests cannot silently pass with wrong results, and introduces a separate language behavior test suite that validates all tests against real Business Central before trusting them.
tier: community
language: en
tags:
  - al runner
  - testing
  - unit tests
  - integration tests
  - mocking
  - al compiler
  - debugging
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-07T23:47:50.247Z"
  flags: []
generated:
  at: "2026-10-07T22:42:12.892Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: ac86cd18c149dbcd15ac6016836043eb77c52eb35f8f21046314b5c713f5566d
evidence:
  - kind: blog
    url: https://stefanmaron.com/posts/al-runner-v2-emit-through-bc/
    title: "AL Runner v2: What Feedback Told Me v1 Was Missing"
    date: "2026-08-10"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://stefanmaron.com/posts/al-runner-v2-emit-through-bc/
    title: "AL Runner v2: What Feedback Told Me v1 Was Missing"
    date: "2026-08-10"
    commit: null
    t: null
    quote: v2 can run against real dependency code, which means it can do integration testing, not just unit testing against a mock.
  - kind: blog
    url: https://stefanmaron.com/posts/al-runner-v2-emit-through-bc/
    title: "AL Runner v2: What Feedback Told Me v1 Was Missing"
    date: "2026-08-10"
    commit: null
    t: null
    quote: If your test exercises something out of the runner's scope, the test fails. It cannot quietly pass.
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://stefanmaron.com/posts/al-runner-v2-emit-through-bc/
source_id: stefanmaron-com
source_name: Stefan Maron
url: https://stefanmaron.com/posts/al-runner-v2-emit-through-bc/
published_at: "2026-08-10T05:00:00.000Z"
author: Stefan Maron
full_text: false
words: 1538
quotes:
  - text: v2 can run against real dependency code, which means it can do integration testing, not just unit testing against a mock.
    why_it_matters: This is the core architectural breakthrough that makes v2 practical for real-world extensions where mocking is insufficient
  - text: If your test exercises something out of the runner's scope, the test fails. It cannot quietly pass.
    why_it_matters: Fail-loud behavior prevents false confidence from tests that pass for the wrong reasons, which is a critical reliability improvement
code_objects_mentioned: []
systems:
  - development
  - platform
versions_mentioned:
  - v2.0.0
  - v2.0.1
  - v2.1.0
  - v2.1.1
preview:
  embeddable: true
  frame_url: null
  image: null
  image_alt: null
  image_w: null
  image_h: null
  site_name: Stefan Maron
  favicon: https://stefanmaron.com/icons/favicon-32x32.png
  probed_at: "2026-10-07T11:50:23.213Z"
---

# AL Runner v2: What Feedback Told Me v1 Was Missing

[Read the post](https://stefanmaron.com/posts/al-runner-v2-emit-through-bc/) · Stefan Maron (Stefan Maron, MVP) · 2026-08-10 · 1538 words · tier community · reviewed (checked by Opus)

> AL Runner v2 introduces a fundamental architecture change that enables integration testing against real Microsoft and third-party dependencies instead of mocks, moving from type-renaming and stubbing to using BC's own compiler and patching only low-level database operations. The update emphasizes fail-loudly error handling so tests cannot silently pass with wrong results, and introduces a separate language behavior test suite that validates all tests against real Business Central before trusting them.

## Key points

- v1 stubbed all dependencies by renaming types, limiting tests to isolated unit tests; v2 compiles through BC's real compiler and loads actual dependency DLLs for true integration testing
- v2 throws exceptions immediately for unsupported APIs with clear messages instead of silently falling back to stubs that produce misleading passing tests
- A separate BusinessCentral.AL.Language.Tests repository runs the full test suite against real BC Cloud sandboxes on multiple versions to ensure tests are correct before the runner is held to them
- The migration from regex to syntax tree parser discovered 1,600 mishandled CalcFormula conditions across the Base App that had gone unnoticed
- Early v2 releases (v2.0.0 through v2.1.1) achieved full test passage and added Windows support, auto-provisioning of test toolkit, and fixes for filter corruption in multi-table queries

## Quotes

- "v2 can run against real dependency code, which means it can do integration testing, not just unit testing against a mock." (This is the core architectural breakthrough that makes v2 practical for real-world extensions where mocking is insufficient)
- "If your test exercises something out of the runner's scope, the test fails. It cannot quietly pass." (Fail-loud behavior prevents false confidence from tests that pass for the wrong reasons, which is a critical reliability improvement)

## Context

- Features: integration testing against real dependencies, in-process XML report rendering, fail-loud error handling, query execution, filter processing, syntax tree based parsing, auto-provisioning with test toolkit
- Versions: v2.0.0, v2.0.1, v2.1.0, v2.1.1

Source: Stefan Maron, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
