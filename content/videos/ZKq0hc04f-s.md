---
id: video/ZKq0hc04f-s
type: video
title: "What's New: Capturing SQL Calls in Performance Profiles (2025 release wave 2)"
summary: "SQL call tracking in Business Central performance profiles (2025 release wave 2): the in-client profiler and Visual Studio Code snapshots now show total SQL duration, call count and the actual queries. It works in sampling mode only, not instrumentation mode."
tier: official
language: en
tags:
  - performance profiling
  - sql calls
  - performance troubleshooting
  - sampling mode
  - schedule profiles
  - in-client profiler
  - visual studio code
  - performance analysis
system: platform
review:
  state: reviewed
  by: opus
  at: "2026-10-07T22:55:01.184Z"
  flags: []
generated:
  at: "2026-10-07T22:55:01.233Z"
  pipeline: 0.2.0
  prompts:
    extract-video: 1
    summarize-video: 2
  input_hash: da965fcb537c96f7ec46f0cb3903e1c02a99742011c736c0eb45f0d56895f5e8
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=ZKq0hc04f-s&t=18s
    title: "What's New: Capturing SQL Calls in Performance Profiles (2025 release wave 2)"
    date: "2025-10-01T00:00:00Z"
    commit: null
    t: 18
    quote: In this release, we add the ability to track SQL course calls uh both when using the inclient profiler in the web client as
  - kind: video
    url: https://www.youtube.com/watch?v=ZKq0hc04f-s&t=29s
    title: "What's New: Capturing SQL Calls in Performance Profiles (2025 release wave 2)"
    date: "2025-10-01T00:00:00Z"
    commit: null
    t: 29
    quote: This will help consultants and developers and support to faster identify and troubleshoot SQL issues in customer production environments.
  - kind: video
    url: https://www.youtube.com/watch?v=ZKq0hc04f-s&t=183s
    title: "What's New: Capturing SQL Calls in Performance Profiles (2025 release wave 2)"
    date: "2025-10-01T00:00:00Z"
    commit: null
    t: 183
    quote: The schedule profiles is now the recommended approach uh to profiling performance issues because it's so easy to set up and analyze afterwards.
  - kind: video
    url: https://www.youtube.com/watch?v=ZKq0hc04f-s&t=400s
    title: "What's New: Capturing SQL Calls in Performance Profiles (2025 release wave 2)"
    date: "2025-10-01T00:00:00Z"
    commit: null
    t: 400
    quote: you can now see which calls are made to SQL during a performance profile and therefore better assess whether bad performance
  - kind: video
    url: https://www.youtube.com/watch?v=ZKq0hc04f-s&t=453s
    title: "What's New: Capturing SQL Calls in Performance Profiles (2025 release wave 2)"
    date: "2025-10-01T00:00:00Z"
    commit: null
    t: 453
    quote: and SQL call information is also available inside of Visual Studio Code. when you've done uh snapshots or just by importing the profiles. And
  - kind: video
    url: https://www.youtube.com/watch?v=ZKq0hc04f-s&t=524s
    title: "What's New: Capturing SQL Calls in Performance Profiles (2025 release wave 2)"
    date: "2025-10-01T00:00:00Z"
    commit: null
    t: 524
    quote: Now we only support the sampling mode as I mentioned not instrumentation. uh that means that you only get SQL information for the um
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: ZKq0hc04f-s
channel: yt-microsoft
source_name: Microsoft Dynamics 365 Business Central (YouTube)
url: https://www.youtube.com/watch?v=ZKq0hc04f-s
published_at: "2025-10-01T00:00:00Z"
duration_s: 572
captions: full
audience:
  - developer
  - functional consultant
  - administrator
  - partner
chapters:
  - t: 0
    title: Introduction and overview
  - t: 42
    title: Profiling recap and in-client profiler history
  - t: 147
    title: Schedule profiles and SQL details feature
  - t: 223
    title: Demo setup and profile capture
  - t: 301
    title: Demo results and SQL insights
  - t: 400
    title: Summary of capabilities
  - t: 465
    title: Support details and resources
features:
  - name: SQL call tracking in performance profiles
    status: unclear
    t: 18
    verified: false
    status_source: video
  - name: Performance profiler in-client tool
    status: unclear
    t: 70
    verified: false
    status_source: video
  - name: Schedule profiles
    status: unclear
    t: 158
    verified: false
    status_source: video
  - name: SQL call visualization in Visual Studio Code
    status: unclear
    t: 389
    verified: false
    status_source: video
  - name: HTTP call tracking in performance profiles
    status: unclear
    t: 328
    verified: false
    status_source: video
objects_mentioned: []
quotes:
  - t: 18
    text: In this release, we add the ability to track SQL course calls uh both when using the inclient profiler in the web client as
    check: exact
  - t: 29
    text: This will help consultants and developers and support to faster identify and troubleshoot SQL issues in customer production environments.
    check: exact
  - t: 183
    text: The schedule profiles is now the recommended approach uh to profiling performance issues because it's so easy to set up and analyze afterwards.
    check: exact
  - t: 400
    text: you can now see which calls are made to SQL during a performance profile and therefore better assess whether bad performance
    check: exact
  - t: 453
    text: and SQL call information is also available inside of Visual Studio Code. when you've done uh snapshots or just by importing the profiles. And
    check: exact
  - t: 524
    text: Now we only support the sampling mode as I mentioned not instrumentation. uh that means that you only get SQL information for the um
    check: exact
---

# What's New: Capturing SQL Calls in Performance Profiles (2025 release wave 2)

> SQL call tracking in Business Central performance profiles (2025 release wave 2): the in-client profiler and Visual Studio Code snapshots now show total SQL duration, call count and the actual queries. It works in sampling mode only, not instrumentation mode.

[Watch on YouTube](https://www.youtube.com/watch?v=ZKq0hc04f-s) · Microsoft Dynamics 365 Business Central (YouTube) · 2025-10-01 · 9:32 · tier official · reviewed (checked by Opus)

## Overview

The video recaps the in-client performance profiler and schedule profiles, then covers the added ability to track SQL calls in profiles. It is aimed at helping consultants, developers and support find and troubleshoot SQL issues in customer production environments.

A demo captures a profile and shows that most of the time in a slow flow is spent in SQL, with only a little over one second running AL. The same SQL information can be viewed in Visual Studio Code, where hovering over a call shows the full SQL query, which can be copied. The video also notes that profiling tracks outbound HTTP calls and states that schedule profiles are now the recommended way to profile performance issues.

## Key points

- Profiles now show the total duration of SQL calls, the number of calls, and let you drill into the actual SQL queries.
- SQL tracking works in the in-client profiler in the web client and for snapshots captured from Visual Studio Code.
- Only sampling mode is supported; instrumentation mode does not give SQL information.
- SQL information is shown only for AL calls in the call stack captured by sampling.
- In Visual Studio Code, SQL details appear when viewing snapshots or importing profiles; hover over a call to see and copy the full query.
- Schedule profiles capture profiles automatically in the background based on rules a partner sets up, and are now the recommended approach for profiling performance issues.
- Profiling also shows the number and duration of outbound HTTP calls alongside SQL metrics.

## Chapters

- [0:00](https://www.youtube.com/watch?v=ZKq0hc04f-s&t=0s) Introduction and overview
- [0:42](https://www.youtube.com/watch?v=ZKq0hc04f-s&t=42s) Profiling recap and in-client profiler history
- [2:27](https://www.youtube.com/watch?v=ZKq0hc04f-s&t=147s) Schedule profiles and SQL details feature
- [3:43](https://www.youtube.com/watch?v=ZKq0hc04f-s&t=223s) Demo setup and profile capture
- [5:01](https://www.youtube.com/watch?v=ZKq0hc04f-s&t=301s) Demo results and SQL insights
- [6:40](https://www.youtube.com/watch?v=ZKq0hc04f-s&t=400s) Summary of capabilities
- [7:45](https://www.youtube.com/watch?v=ZKq0hc04f-s&t=465s) Support details and resources

## Features

| Feature | Status | At |
|---|---|---|
| SQL call tracking in performance profiles | status not stated, demoed | [0:18](https://www.youtube.com/watch?v=ZKq0hc04f-s&t=18s) |
| Performance profiler in-client tool | status not stated | [1:10](https://www.youtube.com/watch?v=ZKq0hc04f-s&t=70s) |
| Schedule profiles | status not stated, demoed | [2:38](https://www.youtube.com/watch?v=ZKq0hc04f-s&t=158s) |
| SQL call visualization in Visual Studio Code | status not stated, demoed | [6:29](https://www.youtube.com/watch?v=ZKq0hc04f-s&t=389s) |
| HTTP call tracking in performance profiles | status not stated | [5:28](https://www.youtube.com/watch?v=ZKq0hc04f-s&t=328s) |

## Quotes

- [0:18](https://www.youtube.com/watch?v=ZKq0hc04f-s&t=18s) "In this release, we add the ability to track SQL course calls uh both when using the inclient profiler in the web client as"
- [0:29](https://www.youtube.com/watch?v=ZKq0hc04f-s&t=29s) "This will help consultants and developers and support to faster identify and troubleshoot SQL issues in customer production environments."
- [3:03](https://www.youtube.com/watch?v=ZKq0hc04f-s&t=183s) "The schedule profiles is now the recommended approach uh to profiling performance issues because it's so easy to set up and analyze afterwards."
- [6:40](https://www.youtube.com/watch?v=ZKq0hc04f-s&t=400s) "you can now see which calls are made to SQL during a performance profile and therefore better assess whether bad performance"
- [7:33](https://www.youtube.com/watch?v=ZKq0hc04f-s&t=453s) "and SQL call information is also available inside of Visual Studio Code. when you've done uh snapshots or just by importing the profiles. And"
- [8:44](https://www.youtube.com/watch?v=ZKq0hc04f-s&t=524s) "Now we only support the sampling mode as I mentioned not instrumentation. uh that means that you only get SQL information for the um"

Presenters (as heard): Peter Boy.
