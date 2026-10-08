---
id: post/stefanmaron-com/https-stefanmaron-com-posts-al-runner-autonomous-agent-weekend--030ecee688
type: post
title: "AL Runner: A Weekend of Autonomous Agents, a Windows Cross-Check, and 59% of Microsoft's Tests Passing"
summary: Stefan Maron describes a weekend of autonomous agent loops on AL Runner, shipped as v2.11.0, and its companion AL language test suite, which grew by 832 tests. A new nightly Windows workflow found a missing TestPermissions property in about 100 test codeunits and 8 behavioral differences between BC on Linux and real BC. A full run of Microsoft's BaseApp tests now passes 59.2%, and a hang was traced to a dropped report MaxIteration property.
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
  state: reviewed
  by: opus
  at: "2026-10-07T23:47:00.607Z"
  flags: []
generated:
  at: "2026-10-07T22:42:12.892Z"
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
  - other SymbolReference.json
systems:
  - development
  - platform
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

[Read the post](https://stefanmaron.com/posts/al-runner-autonomous-agent-weekend/) · Stefan Maron (Stefan Maron, MVP) · 2026-09-08 · 1359 words · tier community · reviewed (checked by Opus)

> Stefan Maron describes a weekend of autonomous agent loops on AL Runner, shipped as v2.11.0, and its companion AL language test suite, which grew by 832 tests. A new nightly Windows workflow found a missing TestPermissions property in about 100 test codeunits and 8 behavioral differences between BC on Linux and real BC. A full run of Microsoft's BaseApp tests now passes 59.2%, and a hang was traced to a dropped report MaxIteration property.

## Key points

- AL Runner shipped v2.11.0 after 351 merged PRs. The companion test suite went from 2,346 to 3,178 tests in five days.
- A manual check against a SaaS sandbox, followed by a nightly Windows container workflow, exposed tests passing on Linux CI but failing on real BC. Most failures came from a missing TestPermissions property.
- Eight Linux-versus-Windows differences were filed, including lost SingleInstance codeunit state and IsolatedStorage encryption doing nothing under Linux. Five are closed.
- AL Runner passes 23,985 of 40,530 Microsoft BaseApp tests (59.2%). Microsoft itself disables 16,141 of them, so a figure adjusted to the tests Microsoft actually runs is still being worked out.
- Rebuilding report metadata from SymbolReference.json dropped MaxIteration, so one report dataitem looped 101,001 times. The bug was fixed at 5 call sites.

## Quotes

- "Every one of those tests pins its answer against a real BC service tier" (Shows the rigor of the test suite - tests validate against actual running BC instances, not mocks, ensuring reliability.)
- "59.2% is coverage of everything AL Runner can discover, not coverage of what Microsoft actually runs day to day." (Clarifies what test coverage percentages mean and that Microsoft itself disables over 40% of available tests, providing context for improvement targets.)

## AL objects mentioned

As named in the post. A name that matches one object page by exact type and name links to it; the others stay as named.

- other "SymbolReference.json"

## Context

- Features: AL Runner testing framework, Autonomous agent loops for implementation and review, Windows and Linux cross-platform testing, Nightly automated test workflows, Permission-based test validation, Report metadata reconstruction, TestPermissions property handling, Microsoft base-app test execution
- Versions: v2.11.0

Source: Stefan Maron, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
