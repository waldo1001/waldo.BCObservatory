---
id: video/Gjs00Wy0HlI
type: video
title: "What's New: AL-Go for GitHub on Build and Performance (2025 release wave 1)"
summary: "AL-Go for GitHub changes in the 2025 release wave 1: incremental builds for CI/CD, workflow concurrency, conditional settings by build mode, preprocessor symbols, short-lived artifacts, versioning strategy 3 and commit options. Shows how each is configured for Business Central build pipelines."
tier: official
language: en
tags:
  - al-go
  - incremental builds
  - workflow concurrency
  - build modes
  - conditional settings
  - preprocessor symbols
  - versioning strategy
  - commit options
  - devops
  - ci/cd
system: platform
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T21:12:03.732Z"
  pipeline: 0.2.0
  prompts:
    extract-video: 1
    summarize-video: 2
  input_hash: 12366abace8975f685e7e7200e350c16f29b98a97da42b1c64d37fb5a23ea84b
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=Gjs00Wy0HlI&t=46s
    title: "What's New: AL-Go for GitHub on Build and Performance (2025 release wave 1)"
    date: "2025-04-01T15:00:30.000Z"
    commit: null
    t: 46
    quote: incremental builds is all about only building what's needed
  - kind: video
    url: https://www.youtube.com/watch?v=Gjs00Wy0HlI&t=81s
    title: "What's New: AL-Go for GitHub on Build and Performance (2025 release wave 1)"
    date: "2025-04-01T15:00:30.000Z"
    commit: null
    t: 81
    quote: The primary reason for that was that we wanted every CI/CD build to have like a complete set of artifacts built and we've solved
  - kind: video
    url: https://www.youtube.com/watch?v=Gjs00Wy0HlI&t=230s
    title: "What's New: AL-Go for GitHub on Build and Performance (2025 release wave 1)"
    date: "2025-04-01T15:00:30.000Z"
    commit: null
    t: 230
    quote: it works very well with incremental builds if you set up incremental builds on a branch
  - kind: video
    url: https://www.youtube.com/watch?v=Gjs00Wy0HlI&t=376s
    title: "What's New: AL-Go for GitHub on Build and Performance (2025 release wave 1)"
    date: "2025-04-01T15:00:30.000Z"
    commit: null
    t: 376
    quote: with the latest version of Ego now, we also support conditional settings based on build modes.
  - kind: video
    url: https://www.youtube.com/watch?v=Gjs00Wy0HlI&t=630s
    title: "What's New: AL-Go for GitHub on Build and Performance (2025 release wave 1)"
    date: "2025-04-01T15:00:30.000Z"
    commit: null
    t: 630
    quote: it actually makes sense to have a versioning strategy where three digits are controlled by appjon and only one digit controlled by GitHub which
  - kind: video
    url: https://www.youtube.com/watch?v=Gjs00Wy0HlI&t=689s
    title: "What's New: AL-Go for GitHub on Build and Performance (2025 release wave 1)"
    date: "2025-04-01T15:00:30.000Z"
    commit: null
    t: 689
    quote: in the latest versions of go we now allow that. Uh so what you'll do is you'll add this commit options construct.
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: Gjs00Wy0HlI
channel: yt-microsoft
source_name: Microsoft Dynamics 365 Business Central (YouTube)
url: https://www.youtube.com/watch?v=Gjs00Wy0HlI
published_at: "2025-04-01T15:00:30.000Z"
duration_s: 815
captions: full
audience:
  - developer
  - administrator
  - partner
chapters:
  - t: 0
    title: Introduction and Overview
  - t: 46
    title: Incremental Builds and Artifacts
  - t: 209
    title: Workflow Concurrency and Settings
  - t: 342
    title: Conditional Settings and Build Modes
  - t: 509
    title: Artifact Structure Changes
  - t: 603
    title: Versioning Strategy 3
  - t: 661
    title: Commit Options and Integration
features:
  - name: Incremental Builds
    status: unclear
    t: 46
    verified: false
    status_source: video
  - name: Workflow Concurrency
    status: unclear
    t: 220
    verified: false
    status_source: video
  - name: Conditional Settings Based Build Modes
    status: unclear
    t: 354
    verified: false
    status_source: video
  - name: Preprocessor Symbols in AL-Go
    status: unclear
    t: 423
    verified: false
    status_source: video
  - name: Short-Lived Artifacts
    status: unclear
    t: 509
    verified: false
    status_source: video
  - name: Versioning Strategy 3
    status: unclear
    t: 603
    verified: false
    status_source: video
  - name: Commit Options
    status: unclear
    t: 661
    verified: false
    status_source: video
objects_mentioned:
  - other AL-Go
  - other GitHub
  - other app.json
quotes:
  - t: 46
    text: incremental builds is all about only building what's needed
    check: exact
  - t: 81
    text: The primary reason for that was that we wanted every CI/CD build to have like a complete set of artifacts built and we've solved
    check: exact
  - t: 230
    text: it works very well with incremental builds if you set up incremental builds on a branch
    check: fuzzy
  - t: 376
    text: with the latest version of Ego now, we also support conditional settings based on build modes.
    check: exact
  - t: 630
    text: it actually makes sense to have a versioning strategy where three digits are controlled by appjon and only one digit controlled by GitHub which
    check: exact
  - t: 689
    text: in the latest versions of go we now allow that. Uh so what you'll do is you'll add this commit options construct.
    check: exact
---

# What's New: AL-Go for GitHub on Build and Performance (2025 release wave 1)

> AL-Go for GitHub changes in the 2025 release wave 1: incremental builds for CI/CD, workflow concurrency, conditional settings by build mode, preprocessor symbols, short-lived artifacts, versioning strategy 3 and commit options. Shows how each is configured for Business Central build pipelines.

[Watch on YouTube](https://www.youtube.com/watch?v=Gjs00Wy0HlI) · Microsoft Dynamics 365 Business Central (YouTube) · 2025-04-01 · 13:35 · tier official · **unreviewed** (machine-generated)

## Overview

This 14-minute video from the Business Central channel walks through what is new in AL-Go for GitHub on build and performance. It starts with incremental builds, which now apply to CI/CD builds and not only pull requests, and pairs them with workflow concurrency so earlier builds are cancelled when commits arrive quickly.

It then covers conditional settings based on build modes, preprocessor symbols as settings, a change to how full artifacts are created as short-lived artifacts, versioning strategy 3, and a commit options construct for injecting messages, auto-merge and pull request labels, for example to integrate with work item tools.

## Key points

- Incremental builds build only the apps modified in the commit; before they were enabled only for pull requests, now CI/CD builds are covered with complete artifact sets.
- Workflow concurrency can cancel prior builds when several commits come in quickly, and it works with incremental builds on a branch.
- Conditional settings can now depend on build mode, so modes such as default and next major can use different artifacts and behaviors.
- Preprocessor symbols can be added as AL-Go settings to select different code paths at compile time.
- Full artifacts are now created in all builds as short-lived artifacts, replacing artificial intermediate artifacts, with a configurable retention period instead of the one-day default.
- Versioning strategy 3: app.json controls major, minor and build numbers, and the GitHub counter controls only the fourth digit.
- The commit options construct supports a message suffix, auto-merge and pull request labels, useful for work item management integration.

## Chapters

- [0:00](https://www.youtube.com/watch?v=Gjs00Wy0HlI&t=0s) Introduction and Overview
- [0:46](https://www.youtube.com/watch?v=Gjs00Wy0HlI&t=46s) Incremental Builds and Artifacts
- [3:29](https://www.youtube.com/watch?v=Gjs00Wy0HlI&t=209s) Workflow Concurrency and Settings
- [5:42](https://www.youtube.com/watch?v=Gjs00Wy0HlI&t=342s) Conditional Settings and Build Modes
- [8:29](https://www.youtube.com/watch?v=Gjs00Wy0HlI&t=509s) Artifact Structure Changes
- [10:03](https://www.youtube.com/watch?v=Gjs00Wy0HlI&t=603s) Versioning Strategy 3
- [11:01](https://www.youtube.com/watch?v=Gjs00Wy0HlI&t=661s) Commit Options and Integration

## Features

| Feature | Status | At | Evidence |
|---|---|---|---|
| Incremental Builds | status not stated, demoed | [0:46](https://www.youtube.com/watch?v=Gjs00Wy0HlI&t=46s) |  |
| Workflow Concurrency | status not stated, demoed | [3:40](https://www.youtube.com/watch?v=Gjs00Wy0HlI&t=220s) |  |
| Conditional Settings Based Build Modes | status not stated, demoed | [5:54](https://www.youtube.com/watch?v=Gjs00Wy0HlI&t=354s) |  |
| Preprocessor Symbols in AL-Go | status not stated, demoed | [7:03](https://www.youtube.com/watch?v=Gjs00Wy0HlI&t=423s) |  |
| Short-Lived Artifacts | status not stated | [8:29](https://www.youtube.com/watch?v=Gjs00Wy0HlI&t=509s) |  |
| Versioning Strategy 3 | status not stated | [10:03](https://www.youtube.com/watch?v=Gjs00Wy0HlI&t=603s) |  |
| Commit Options | status not stated, demoed | [11:01](https://www.youtube.com/watch?v=Gjs00Wy0HlI&t=661s) |  |

## AL objects mentioned

As heard in the captions. A name that matches one object page by exact type and name links to it; the others stay as named.

- other "AL-Go" at [0:17](https://www.youtube.com/watch?v=Gjs00Wy0HlI&t=17s)
- other "GitHub" at [0:17](https://www.youtube.com/watch?v=Gjs00Wy0HlI&t=17s)
- other "app.json" at [10:16](https://www.youtube.com/watch?v=Gjs00Wy0HlI&t=616s)

## Quotes

- [0:46](https://www.youtube.com/watch?v=Gjs00Wy0HlI&t=46s) "incremental builds is all about only building what's needed"
- [1:21](https://www.youtube.com/watch?v=Gjs00Wy0HlI&t=81s) "The primary reason for that was that we wanted every CI/CD build to have like a complete set of artifacts built and we've solved"
- [3:50](https://www.youtube.com/watch?v=Gjs00Wy0HlI&t=230s) "it works very well with incremental builds if you set up incremental builds on a branch"
- [6:16](https://www.youtube.com/watch?v=Gjs00Wy0HlI&t=376s) "with the latest version of Ego now, we also support conditional settings based on build modes."
- [10:30](https://www.youtube.com/watch?v=Gjs00Wy0HlI&t=630s) "it actually makes sense to have a versioning strategy where three digits are controlled by appjon and only one digit controlled by GitHub which"
- [11:29](https://www.youtube.com/watch?v=Gjs00Wy0HlI&t=689s) "in the latest versions of go we now allow that. Uh so what you'll do is you'll add this commit options construct."

Presenters (as heard): Freddy Christensen, Alexander.
