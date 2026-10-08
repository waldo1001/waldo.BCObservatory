---
id: post/stefanmaron-com/https-stefanmaron-com-posts-al-runner-coverage-execute-and-a-guard-that-worked--6c4b521103
type: post
title: "AL Runner v2.2 and v2.3: Coverage, Quick Scripts, and a Watch Mode You Can Trust"
summary: AL Runner v2.2 and v2.3 added code coverage reporting, a quick-script execute command for testing snippets without a codeunit, and fixed a watch mode that was recompiling mid-save during file bursts. The releases also included roughly 130 behavioral fixes to align the runner with real Business Central, with startup performance improvements.
tier: community
language: en
tags:
  - al runner
  - testing
  - coverage
  - unit tests
  - integration tests
  - watch mode
  - developer tools
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-07T23:47:35.750Z"
  flags: []
generated:
  at: "2026-10-07T22:42:12.892Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: d4c98fba9f0779ed87f08fad8ea37d8869ba085ace25ab2a735ffe1d28a42fdc
evidence:
  - kind: blog
    url: https://stefanmaron.com/posts/al-runner-coverage-execute-and-a-guard-that-worked/
    title: "AL Runner v2.2 and v2.3: Coverage, Quick Scripts, and a Watch Mode You Can Trust"
    date: "2026-08-20"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://stefanmaron.com/posts/al-runner-coverage-execute-and-a-guard-that-worked/
    title: "AL Runner v2.2 and v2.3: Coverage, Quick Scripts, and a Watch Mode You Can Trust"
    date: "2026-08-20"
    commit: null
    t: null
    quote: If the runner and real BC disagree, the sandbox result wins and the runner gets fixed to match it, not the other way around.
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://stefanmaron.com/posts/al-runner-coverage-execute-and-a-guard-that-worked/
source_id: stefanmaron-com
source_name: Stefan Maron
url: https://stefanmaron.com/posts/al-runner-coverage-execute-and-a-guard-that-worked/
published_at: "2026-08-20T05:00:00.000Z"
author: Stefan Maron
full_text: false
words: 1364
quotes:
  - text: If the runner and real BC disagree, the sandbox result wins and the runner gets fixed to match it, not the other way around.
    why_it_matters: Ensures runner behavior aligns with actual BC behavior, making tests reliable predictors of production behavior
code_objects_mentioned: []
systems:
  - development
  - platform
versions_mentioned:
  - "27.0"
  - "28.0"
  - "28.1"
  - "28.2"
  - "28.3"
  - "28.4"
preview:
  embeddable: true
  frame_url: null
  image: null
  image_alt: null
  image_w: null
  image_h: null
  site_name: Stefan Maron
  favicon: https://stefanmaron.com/icons/favicon-32x32.png
  probed_at: "2026-10-07T11:50:17.671Z"
---

# AL Runner v2.2 and v2.3: Coverage, Quick Scripts, and a Watch Mode You Can Trust

[Read the post](https://stefanmaron.com/posts/al-runner-coverage-execute-and-a-guard-that-worked/) · Stefan Maron (Stefan Maron, MVP) · 2026-08-20 · 1364 words · tier community · reviewed (checked by Opus)

> AL Runner v2.2 and v2.3 added code coverage reporting, a quick-script execute command for testing snippets without a codeunit, and fixed a watch mode that was recompiling mid-save during file bursts. The releases also included roughly 130 behavioral fixes to align the runner with real Business Central, with startup performance improvements.

## Key points

- The --coverage flag gives a statement-level report of which AL lines tests actually ran, based on the compiler's own internal tracking
- The execute command runs a bare AL snippet or a full pasted codeunit without needing a test codeunit
- Watch mode now waits until file changes settle (capped at 10 seconds) instead of a fixed quarter-second delay, avoiding false failures on branch switches or bulk edits
- Editing an existing object's body in watch mode now re-tests without a full app rebuild, about 18x faster on a 2,000-object app
- About 130 fixes align runner behavior with real BC (TestPage, manual event subscribers, transactions, report filters), and startup overhead dropped by roughly a quarter

## Quotes

- "If the runner and real BC disagree, the sandbox result wins and the runner gets fixed to match it, not the other way around." (Ensures runner behavior aligns with actual BC behavior, making tests reliable predictors of production behavior)

## Context

- Features: code coverage reporting, quick execute command, watch mode, AL test execution, statement coverage, file change detection
- Versions: 27.0, 28.0, 28.1, 28.2, 28.3, 28.4

Source: Stefan Maron, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
