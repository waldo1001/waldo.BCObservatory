---
id: post/stefanmaron-com/https-stefanmaron-com-posts-weekly-recap-2026-08-28--d2fed15c7a
type: post
title: "Weekly Recap: August 21-28"
summary: Weekly recap covering AL Runner CI tooling fixes, Linux fast lane pipeline bugs, a major OpenPageInspection browser extension rewrite for cross-browser support, and Azure CLI authentication contributions to the navapi Business Central API client.
tier: community
language: en
tags:
  - al runner
  - ci/cd
  - linux
  - browser extension
  - authentication
  - api client
  - changelog
  - testing
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-07T23:47:09.390Z"
  flags: []
generated:
  at: "2026-10-07T22:42:12.892Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: d777113398a9afd54b0478b354830b7e1bc82b303b09a93fb14d1ace07351e51
evidence:
  - kind: blog
    url: https://stefanmaron.com/posts/weekly-recap-2026-08-28/
    title: "Weekly Recap: August 21-28"
    date: "2026-08-28"
    commit: null
    t: null
    quote: null
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://stefanmaron.com/posts/weekly-recap-2026-08-28/
source_id: stefanmaron-com
source_name: Stefan Maron
url: https://stefanmaron.com/posts/weekly-recap-2026-08-28/
published_at: "2026-08-28T07:30:00.000Z"
author: Stefan Maron
full_text: false
words: 1443
quotes: []
code_objects_mentioned:
  - other AL Runner
  - other MsDyn365Bc.On.Linux
  - other BusinessCentral.AL.Language.Tests
  - other OpenPageInspection
  - other navapi
systems:
  - development
  - platform
versions_mentioned:
  - BC 29 preview
preview:
  embeddable: true
  frame_url: null
  image: null
  image_alt: null
  image_w: null
  image_h: null
  site_name: Stefan Maron
  favicon: https://stefanmaron.com/icons/favicon-32x32.png
  probed_at: "2026-10-07T11:50:14.745Z"
---

# Weekly Recap: August 21-28

[Read the post](https://stefanmaron.com/posts/weekly-recap-2026-08-28/) · Stefan Maron (Stefan Maron, MVP) · 2026-08-28 · 1443 words · tier community · reviewed (checked by Opus)

> Weekly recap covering AL Runner CI tooling fixes, Linux fast lane pipeline bugs, a major OpenPageInspection browser extension rewrite for cross-browser support, and Azure CLI authentication contributions to the navapi Business Central API client.

## Key points

- AL Runner hit a CI incident where a PR body describing the skip-ci directive ended up in the squash commit and skipped required checks; a pre-merge script now scans PR titles and bodies for it
- The AL Runner changelog generator now understands scoped commit prefixes and keeps the Unreleased section current from commit history
- Linux fast lane fixes: newline-separated directory lists to handle spaces in folder names, compile-only projects with zero tests no longer fail, and a fallback for the moved compiler binary in BC 29 preview
- OpenPageInspection was rebuilt as a WXT project for Chromium and Firefox, triggering page inspection through BC's own Ctrl+Alt+F1 keydown
- navapi gained optional Azure CLI token authentication with identity pinning so users need no stored client secret

## AL objects mentioned

As named in the post. A name that matches one object page by exact type and name links to it; the others stay as named.

- other "AL Runner"
- other "MsDyn365Bc.On.Linux"
- other "BusinessCentral.AL.Language.Tests"
- other "OpenPageInspection"
- other "navapi"

## Context

- Features: scoped commit prefix recognition, continuous changelog generation, directory path handling in pipelines, zero-test project support, cross-browser page inspection, Azure CLI authentication, identity pinning, endpoint search by name or entity type
- Versions: BC 29 preview

Source: Stefan Maron, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
