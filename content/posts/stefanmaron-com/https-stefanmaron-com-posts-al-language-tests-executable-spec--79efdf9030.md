---
id: post/stefanmaron-com/https-stefanmaron-com-posts-al-language-tests-executable-spec--79efdf9030
type: post
title: "AL Language Tests: An Executable Spec for How BC Actually Behaves"
summary: The BusinessCentral.AL.Language.Tests repository creates an executable specification of AL language behavior by running tests against real BC service tiers across multiple versions. It ensures AL Runner (an AL emulator) behaves accurately and provides a reference for undocumented AL features verified by CI.
tier: community
language: en
tags:
  - al language
  - testing
  - al runner
  - emulator
  - ci
  - behavior verification
  - documentation
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
  input_hash: 74150515af7bf5303fb19b74f76458cab096b571bba6b8e5178aea6936cc10e7
evidence:
  - kind: blog
    url: https://stefanmaron.com/posts/al-language-tests-executable-spec/
    title: "AL Language Tests: An Executable Spec for How BC Actually Behaves"
    date: "2026-09-03"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://stefanmaron.com/posts/al-language-tests-executable-spec/
    title: "AL Language Tests: An Executable Spec for How BC Actually Behaves"
    date: "2026-09-03"
    commit: null
    t: null
    quote: The test gets written and verified against real BC before touching the emulator's code, so the fix targets confirmed behavior, not a guess.
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://stefanmaron.com/posts/al-language-tests-executable-spec/
source_id: stefanmaron-com
source_name: Stefan Maron
url: https://stefanmaron.com/posts/al-language-tests-executable-spec/
published_at: "2026-09-03T04:00:00.000Z"
author: Stefan Maron
full_text: false
words: 977
quotes:
  - text: The test gets written and verified against real BC before touching the emulator's code, so the fix targets confirmed behavior, not a guess.
    why_it_matters: Explains the critical workflow ensuring fixes are based on actual BC behavior, not assumptions
code_objects_mentioned:
  - other AL Runner
  - other BusinessCentral.AL.Language.Tests
systems:
  - development
  - platform
versions_mentioned:
  - "27.0"
  - "27.3"
  - "27.5"
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
  probed_at: "2026-10-07T11:50:09.725Z"
---

# AL Language Tests: An Executable Spec for How BC Actually Behaves

[Read the post](https://stefanmaron.com/posts/al-language-tests-executable-spec/) · Stefan Maron (Stefan Maron, MVP) · 2026-09-03 · 977 words · tier community · reviewed (checked by Opus)

> The BusinessCentral.AL.Language.Tests repository creates an executable specification of AL language behavior by running tests against real BC service tiers across multiple versions. It ensures AL Runner (an AL emulator) behaves accurately and provides a reference for undocumented AL features verified by CI.

## Key points

- AL Runner is an emulator that speeds up tests but must match real BC behavior to be trustworthy
- The test repository runs CI against actual BC service tiers (versions 27.0 through 28.4) to verify language behavior
- Tests are written against real BC first, then used to fix the emulator, preventing fixes from targeting incorrect assumptions
- The CI matrix expanded from two versions to eight to catch version-specific bugs that only appear in certain BC releases
- The repository serves as executable documentation and catches when Microsoft changes existing behavior

## Quotes

- "The test gets written and verified against real BC before touching the emulator's code, so the fix targets confirmed behavior, not a guess." (Explains the critical workflow ensuring fixes are based on actual BC behavior, not assumptions)

## AL objects mentioned

As named in the post. A name that matches one object page by exact type and name links to it; the others stay as named.

- other "AL Runner"
- other "BusinessCentral.AL.Language.Tests"

## Context

- Features: AL language emulation, automated testing, CI/CD validation, cross-version testing, record behavior validation, xRec snapshot handling, nested validate trigger handling
- Versions: 27.0, 27.3, 27.5, 28.3, 28.4

Source: Stefan Maron, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
