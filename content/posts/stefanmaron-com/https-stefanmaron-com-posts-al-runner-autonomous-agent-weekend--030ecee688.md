---
id: post/stefanmaron-com/https-stefanmaron-com-posts-al-runner-autonomous-agent-weekend--030ecee688
type: post
title: "AL Runner: A Weekend of Autonomous Agents, a Windows Cross-Check, and 59% of Microsoft's Tests Passing"
summary: AL Runner, a testing framework for Business Central, achieved significant progress through autonomous agent loops over a weekend, adding 832 new tests and implementing a Windows cross-check workflow that discovered platform-level differences between Linux and Windows BC instances. The suite now passes 59% of Microsoft's 40,530 base-app tests, revealing both permission configuration issues and genuine behavioral differences that need addressing.
tier: community
language: en
tags:
  - al runner
  - autonomous agents
  - testing framework
  - linux vs windows
  - test coverage
  - platform differences
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
  input_hash: 8567239c1b6771e66ee7f073c30e826d3ea4e6668eee7621025d7ea7ee229135
evidence:
  - kind: blog
    url: https://stefanmaron.com/posts/al-runner-autonomous-agent-weekend/
    title: "AL Runner: A Weekend of Autonomous Agents, a Windows Cross-Check, and 59% of Microsoft's Tests Passing"
    date: "2026-09-08"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://stefanmaron.com/posts/al-runner-autonomous-agent-weekend/
    title: "AL Runner: A Weekend of Autonomous Agents, a Windows Cross-Check, and 59% of Microsoft's Tests Passing"
    date: "2026-09-08"
    commit: null
    t: null
    quote: Every one of those tests pins its answer against a real BC service tier
  - kind: blog
    url: https://stefanmaron.com/posts/al-runner-autonomous-agent-weekend/
    title: "AL Runner: A Weekend of Autonomous Agents, a Windows Cross-Check, and 59% of Microsoft's Tests Passing"
    date: "2026-09-08"
    commit: null
    t: null
    quote: 59.2% is coverage of everything AL Runner can discover, not coverage of what Microsoft actually runs day to day.
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://stefanmaron.com/posts/al-runner-autonomous-agent-weekend/
source_id: stefanmaron-com
source_name: Stefan Maron
url: https://stefanmaron.com/posts/al-runner-autonomous-agent-weekend/
published_at: "2026-09-08T05:33:56.000Z"
author: Stefan Maron
full_text: false
words: 1359
quotes:
  - text: Every one of those tests pins its answer against a real BC service tier
    why_it_matters: Shows the rigor of the test suite - tests validate against actual running BC instances, not mocks, ensuring reliability.
  - text: 59.2% is coverage of everything AL Runner can discover, not coverage of what Microsoft actually runs day to day.
    why_it_matters: Clarifies what test coverage percentages mean and that Microsoft itself disables over 40% of available tests, providing context for improvement targets.
code_objects_mentioned:
  - codeunit CertificateOfSupplyPartiallyShippedOrder
  - other SymbolReference.json
  - other BaseApp test surface
systems:
  - development
  - platform
  - administration
versions_mentioned:
  - v2.11.0
preview:
  embeddable: true
  frame_url: null
  image: null
  image_alt: null
  image_w: null
  image_h: null
  site_name: Stefan Maron
  favicon: https://stefanmaron.com/icons/favicon-32x32.png
  probed_at: "2026-10-07T11:50:07.945Z"
---

# AL Runner: A Weekend of Autonomous Agents, a Windows Cross-Check, and 59% of Microsoft's Tests Passing

[Read the post](https://stefanmaron.com/posts/al-runner-autonomous-agent-weekend/) · Stefan Maron (Stefan Maron, MVP) · 2026-09-08 · 1359 words · tier community · **unreviewed** (machine-generated)

> AL Runner, a testing framework for Business Central, achieved significant progress through autonomous agent loops over a weekend, adding 832 new tests and implementing a Windows cross-check workflow that discovered platform-level differences between Linux and Windows BC instances. The suite now passes 59% of Microsoft's 40,530 base-app tests, revealing both permission configuration issues and genuine behavioral differences that need addressing.

## Key points

- Autonomous agents working in coordinated loops merged 351 pull requests and added 832 tests in five days to the AL Runner test suite.
- A nightly Windows workflow discovered that Linux CI had false positives; the first run caught 672 failures including 659 permission issues affecting 96 test codeunits.
- Eight behavioral differences between Linux and Windows BC instances were identified and filed, including SingleInstance codeunit state loss and IsolatedStorage encryption failures on Linux.
- AL Runner now passes 23,985 of Microsoft's 40,530 base-app tests (59.2%), though Microsoft itself disables 16,141 of these tests in its own pipelines.
- A report MaxIteration bug in metadata reconstruction caused a test to execute 101,000 extra times; this bug was fixed at five call sites.

## Quotes

- "Every one of those tests pins its answer against a real BC service tier" (Shows the rigor of the test suite - tests validate against actual running BC instances, not mocks, ensuring reliability.)
- "59.2% is coverage of everything AL Runner can discover, not coverage of what Microsoft actually runs day to day." (Clarifies what test coverage percentages mean and that Microsoft itself disables over 40% of available tests, providing context for improvement targets.)

## AL objects mentioned

As named in the post; not yet joined to the code pillar.

- codeunit "CertificateOfSupplyPartiallyShippedOrder"
- other "SymbolReference.json"
- other "BaseApp test surface"

## Context

- Features: AL Runner testing framework, Autonomous agent loops for implementation and review, Windows and Linux cross-platform testing, Nightly automated test workflows, Permission-based test validation, Report metadata reconstruction, TestPermissions property handling, Microsoft base-app test execution
- Versions: v2.11.0

Source: Stefan Maron, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
