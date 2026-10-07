---
id: post/stefanmaron-com/https-stefanmaron-com-posts-bcdb-restore-write-a-cloud-export-into-a-container--0d94b20d91
type: post
title: "bcdb restore: Write a Cloud Export Into a Container"
summary: The bcdb restore tool writes cloud exports directly into a running Docker container without requiring matching schemas, intelligently handling mismatches by skipping missing tables and columns. It restored a production environment in 10 seconds and supports flexible identity table handling, company mapping, and dry-run preview modes.
tier: community
language: en
tags:
  - bcdb
  - restore
  - docker
  - container
  - data migration
  - schema mismatch
  - cloud export
  - bacpac
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
  input_hash: ad8a6d17ea5c730dda224bf33515c75c8942db0aabf2083f15a915a18ae74407
evidence:
  - kind: blog
    url: https://stefanmaron.com/posts/bcdb-restore-write-a-cloud-export-into-a-container/
    title: "bcdb restore: Write a Cloud Export Into a Container"
    date: "2026-09-10"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://stefanmaron.com/posts/bcdb-restore-write-a-cloud-export-into-a-container/
    title: "bcdb restore: Write a Cloud Export Into a Container"
    date: "2026-09-10"
    commit: null
    t: null
    quote: it writes a source's rows straight into a container that's already running, and it doesn't ask the container's schema to match the source first.
  - kind: blog
    url: https://stefanmaron.com/posts/bcdb-restore-write-a-cloud-export-into-a-container/
    title: "bcdb restore: Write a Cloud Export Into a Container"
    date: "2026-09-10"
    commit: null
    t: null
    quote: bcdb restore sees the one company with data on each side, maps it, and logs the mapping so it's never a surprise.
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://stefanmaron.com/posts/bcdb-restore-write-a-cloud-export-into-a-container/
source_id: stefanmaron-com
source_name: Stefan Maron
url: https://stefanmaron.com/posts/bcdb-restore-write-a-cloud-export-into-a-container/
published_at: "2026-09-10T05:33:46.000Z"
author: Stefan Maron
full_text: false
words: 1305
quotes:
  - text: it writes a source's rows straight into a container that's already running, and it doesn't ask the container's schema to match the source first.
    why_it_matters: "Explains the core innovation: schema flexibility eliminates the pre-alignment work normally required for restores"
  - text: bcdb restore sees the one company with data on each side, maps it, and logs the mapping so it's never a surprise.
    why_it_matters: Shows intelligent defaults that work without user specification while maintaining transparency
code_objects_mentioned:
  - table User
  - table Access Control
  - table User Personalization
  - table User Property
  - table Company
  - table Tenant Profile
  - table NAV App
systems:
  - development
  - platform
  - administration
versions_mentioned:
  - 0.2.0
  - 0.1.2
  - "28.4"
  - "28.2"
preview:
  embeddable: true
  frame_url: null
  image: null
  image_alt: null
  image_w: null
  image_h: null
  site_name: Stefan Maron
  favicon: https://stefanmaron.com/icons/favicon-32x32.png
  probed_at: "2026-10-07T11:50:05.572Z"
---

# bcdb restore: Write a Cloud Export Into a Container

[Read the post](https://stefanmaron.com/posts/bcdb-restore-write-a-cloud-export-into-a-container/) · Stefan Maron (Stefan Maron, MVP) · 2026-09-10 · 1305 words · tier community · **unreviewed** (machine-generated)

> The bcdb restore tool writes cloud exports directly into a running Docker container without requiring matching schemas, intelligently handling mismatches by skipping missing tables and columns. It restored a production environment in 10 seconds and supports flexible identity table handling, company mapping, and dry-run preview modes.

## Key points

- Restore works against containers with different extension sets, skipping mismatches instead of failing
- Excludes identity and platform tables by default to prevent login failures and service tier corruption
- Auto-maps company data when one company exists on each side, with verbose logging for ambiguous cases
- Streams and bulk-copies rows without loading full tables to memory, preserving identity values and SQL decimal amounts
- Provides --dry-run flag to preview the entire plan before execution

## Quotes

- "it writes a source's rows straight into a container that's already running, and it doesn't ask the container's schema to match the source first." (Explains the core innovation: schema flexibility eliminates the pre-alignment work normally required for restores)
- "bcdb restore sees the one company with data on each side, maps it, and logs the mapping so it's never a surprise." (Shows intelligent defaults that work without user specification while maintaining transparency)

## AL objects mentioned

As named in the post; not yet joined to the code pillar.

- table "User"
- table "Access Control"
- table "User Personalization"
- table "User Property"
- table "Company"
- table "Tenant Profile"
- table "NAV App"

## Context

- Features: bcdb restore, schema flexibility, identity table exclusion, company mapping, dry-run mode, bulk copy, mismatch handling
- Versions: 0.2.0, 0.1.2, 28.4, 28.2

Source: Stefan Maron, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
