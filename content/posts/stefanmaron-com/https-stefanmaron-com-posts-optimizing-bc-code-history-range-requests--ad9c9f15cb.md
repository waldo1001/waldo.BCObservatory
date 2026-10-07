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
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T20:00:32.874Z"
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

[Read the post](https://stefanmaron.com/posts/optimizing-bc-code-history-range-requests/) · Stefan Maron (Stefan Maron, MVP) · 2026-02-27 · 1948 words · tier community · **unreviewed** (machine-generated)

> Optimizing the MSDyn365BC.Sandbox.Code.History repository's daily download pipeline by fixing silent failures in PowerShell scripts and implementing HTTP Range requests to reduce bandwidth usage from 800MB-2GB+ per country artifact to roughly 120MB, cutting cumulative compute time by 86% across 50 parallel countries.

## Key points

- Silent error suppression ($ErrorActionPreference = "SilentlyContinue") masked multiple bugs including expression parsing, null array indexing, and incorrect git commit patterns that were causing re-processing and duplicates.
- ZIP files store a central directory at the end, enabling selective downloads via HTTP Range requests: download only the 64KB header to find the Applications folder location, then download just that byte range instead of the entire 800MB-2GB file.
- Range request approach reduced download time from 18 seconds to 1 second per country (88% bandwidth savings) and total cumulative compute time from nearly 12 days to 38 hours daily across two workflows running 50 countries in parallel.
- Implementation uses Python standard library only (struct, zlib, tempfile) for ZIP parsing and selective extraction in-memory, with PowerShell orchestration and curl for HTTP, with automatic fallback to full download if range approach fails.
- Additional optimizations included targeted git fetch (only needed branches instead of --all) and cleanup of 196 obsolete vNext branches, enabling daily processing of hotfix-heavy sandbox artifacts across roughly 50 countries.

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
