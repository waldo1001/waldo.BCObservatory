---
id: post/stefanmaron-com/https-stefanmaron-com-posts-bc-linux-boot-time-and-al-go-fast-lane--3ddf109c8d
type: post
title: "BC on Linux: A Working Web Client, Faster Boots, Local Dev on Mac and Linux, and a Fast Lane in AL-Go"
summary: Running Business Central on Linux now supports a working web client for local development, achieving cold boot times of 79 seconds and test runs of 1,067 tests in 69 seconds. The project includes AL-Go integration with a Linux fast lane for pull requests and snapshot-based caching for even faster development cycles.
tier: community
language: en
tags:
  - linux
  - local development
  - web client
  - performance
  - al-go
  - testing
  - docker
  - ci/cd
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
  input_hash: 5ac84f96b05810466f5989e9d9ce4c5e45735af54787cba5ff569868aad2004d
evidence:
  - kind: blog
    url: https://stefanmaron.com/posts/bc-linux-boot-time-and-al-go-fast-lane/
    title: "BC on Linux: A Working Web Client, Faster Boots, Local Dev on Mac and Linux, and a Fast Lane in AL-Go"
    date: "2026-08-10"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://stefanmaron.com/posts/bc-linux-boot-time-and-al-go-fast-lane/
    title: "BC on Linux: A Working Web Client, Faster Boots, Local Dev on Mac and Linux, and a Fast Lane in AL-Go"
    date: "2026-08-10"
    commit: null
    t: null
    quote: 1,067 tests across 151 codeunits, all passing, in 69 seconds total.
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://stefanmaron.com/posts/bc-linux-boot-time-and-al-go-fast-lane/
source_id: stefanmaron-com
source_name: Stefan Maron
url: https://stefanmaron.com/posts/bc-linux-boot-time-and-al-go-fast-lane/
published_at: "2026-08-10T05:00:00.000Z"
author: Stefan Maron
full_text: false
words: 1307
quotes:
  - text: 1,067 tests across 151 codeunits, all passing, in 69 seconds total.
    why_it_matters: Demonstrates real-world performance gains from persistent connections across test runs in production scenarios.
code_objects_mentioned: []
systems:
  - development
  - platform
  - integration
versions_mentioned:
  - BC 29
preview:
  embeddable: true
  frame_url: null
  image: null
  image_alt: null
  image_w: null
  image_h: null
  site_name: Stefan Maron
  favicon: https://stefanmaron.com/icons/favicon-32x32.png
  probed_at: "2026-10-07T11:50:26.135Z"
---

# BC on Linux: A Working Web Client, Faster Boots, Local Dev on Mac and Linux, and a Fast Lane in AL-Go

[Read the post](https://stefanmaron.com/posts/bc-linux-boot-time-and-al-go-fast-lane/) · Stefan Maron (Stefan Maron, MVP) · 2026-08-10 · 1307 words · tier community · **unreviewed** (machine-generated)

> Running Business Central on Linux now supports a working web client for local development, achieving cold boot times of 79 seconds and test runs of 1,067 tests in 69 seconds. The project includes AL-Go integration with a Linux fast lane for pull requests and snapshot-based caching for even faster development cycles.

## Key points

- Web client works on Linux with field edits persisting and direct URL navigation, enabling true local development without Windows
- Cold boot time reduced from 209 to 79 seconds by fixing cache lookup paths; persistent test connections run 1,067 tests in 69 seconds
- BC 29 supported with proper .NET runtime selection; artifact downloads now consistent with parallel downloading and automatic retry
- AL-Go fork offers linuxFastLane setting for PR builds on Linux without Windows runners; snapshot mode restores BC in as little as 16 seconds for local setups

## Quotes

- "1,067 tests across 151 codeunits, all passing, in 69 seconds total." (Demonstrates real-world performance gains from persistent connections across test runs in production scenarios.)

## Context

- Features: web client on Linux, persistent test connections, snapshot mode, linuxFastLane, automatic caching, parallel artifact downloading, BC 29 support
- Versions: BC 29

Source: Stefan Maron, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
