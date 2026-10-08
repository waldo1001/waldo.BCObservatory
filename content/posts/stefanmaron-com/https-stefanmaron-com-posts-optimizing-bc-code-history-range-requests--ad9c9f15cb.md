---
id: post/stefanmaron-com/https-stefanmaron-com-posts-optimizing-bc-code-history-range-requests--ad9c9f15cb
type: post
title: Optimizing BC Code History Downloads with HTTP Range Requests
summary: Optimizing the MSDyn365BC.Sandbox.Code.History repository's daily download pipeline by fixing silent failures in PowerShell scripts and implementing HTTP Range requests to reduce bandwidth usage from 800MB-2GB+ per country artifact to roughly 120MB, cutting cumulative compute time by 86% across 50 parallel countries.
tier: community
language: en
tags:
  - github actions
  - code history
  - performance optimization
  - powershell scripting
  - http range requests
  - zip file parsing
  - ci/cd pipeline
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-08T01:56:40.475Z"
  flags: []
generated:
  at: "2026-10-08T01:26:53.141Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: bad2fd7a5bbe3d22819980589ecffa00026b54c22ef35778a2d7259ac97d66f2
evidence:
  - kind: blog
    url: https://stefanmaron.com/posts/optimizing-bc-code-history-range-requests/
    title: Optimizing BC Code History Downloads with HTTP Range Requests
    date: "2026-02-27"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://stefanmaron.com/posts/optimizing-bc-code-history-range-requests/
    title: Optimizing BC Code History Downloads with HTTP Range Requests
    date: "2026-02-27"
    commit: null
    t: null
    quote: The error suppression had been papering over null references, parsing bugs, missing folder handling, and incorrect commit patterns - all at once.
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://stefanmaron.com/posts/optimizing-bc-code-history-range-requests/
source_id: stefanmaron-com
source_name: Stefan Maron
url: https://stefanmaron.com/posts/optimizing-bc-code-history-range-requests/
published_at: "2026-02-27T06:00:00.000Z"
author: Stefan Maron
full_text: false
words: 1948
quotes:
  - text: The error suppression had been papering over null references, parsing bugs, missing folder handling, and incorrect commit patterns - all at once.
    why_it_matters: Demonstrates how silent error handling can hide systemic problems in automation scripts, requiring explicit error checking to reveal cascading issues.
code_objects_mentioned:
  - other MSDyn365BC.Sandbox.Code.History
  - other MSDyn365BC.Code.History
  - other Auto_load_versions.ps1
  - other Auto_load_versions_vNext.ps1
  - other download_range_helper.py
  - other Download-ApplicationsRange.ps1
systems:
  - development
  - platform
  - integration
versions_mentioned: []
preview:
  embeddable: true
  frame_url: null
  image: null
  image_alt: null
  image_w: null
  image_h: null
  site_name: Stefan Maron
  favicon: https://stefanmaron.com/icons/favicon-32x32.png
  probed_at: "2026-10-07T11:50:38.474Z"
---

# Optimizing BC Code History Downloads with HTTP Range Requests

[Read the post](https://stefanmaron.com/posts/optimizing-bc-code-history-range-requests/) · Stefan Maron (Stefan Maron, MVP) · 2026-02-27 · 1948 words · tier community · reviewed (checked by Opus)

> Optimizing the MSDyn365BC.Sandbox.Code.History repository's daily download pipeline by fixing silent failures in PowerShell scripts and implementing HTTP Range requests to reduce bandwidth usage from 800MB-2GB+ per country artifact to roughly 120MB, cutting cumulative compute time by 86% across 50 parallel countries.

## Key points

- Removing the global SilentlyContinue error setting exposed hidden bugs: an arithmetic parsing mistake, null array indexing, missing Applications folders, and a vNext grep mismatch that caused re-processing and duplicates.
- Because a ZIP keeps its central directory at the end, the pipeline fetches the last 64KB, finds the Applications entries, and downloads only that byte range with HTTP Range requests.
- In a German benchmark the download dropped from 18 seconds to about 1 second, with roughly 88% less bandwidth. Combined compute across both daily workflows fell from nearly 12 days to about 38 hours.
- A small stdlib-only Python script parses the ZIP and decompresses in memory, a PowerShell wrapper and curl handle the HTTP calls, and every failure falls back to the old full download.
- Targeted git fetches and the cleanup of 196 obsolete vNext branches also cut run time.

## Quotes

- "The error suppression had been papering over null references, parsing bugs, missing folder handling, and incorrect commit patterns - all at once." (Demonstrates how silent error handling can hide systemic problems in automation scripts, requiring explicit error checking to reveal cascading issues.)

## AL objects mentioned

As named in the post. A name that matches one object page by exact type and name links to it; the others stay as named.

- other "MSDyn365BC.Sandbox.Code.History"
- other "MSDyn365BC.Code.History"
- other "Auto_load_versions.ps1"
- other "Auto_load_versions_vNext.ps1"
- other "download_range_helper.py"
- other "Download-ApplicationsRange.ps1"

## Context

- Features: HTTP Range request optimization, ZIP central directory parsing, GitHub Actions matrix parallelization, PowerShell error handling, Git workflow automation, Bandwidth reduction, In-memory decompression, Selective artifact extraction

Source: Stefan Maron, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
