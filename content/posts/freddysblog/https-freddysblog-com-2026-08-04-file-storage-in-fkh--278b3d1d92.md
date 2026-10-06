---
id: post/freddysblog/https-freddysblog-com-2026-08-04-file-storage-in-fkh--278b3d1d92
type: post
title: File storage in Fkh (Freddy’s Kubernetes Helper)
summary: Fkh file storage provides versioned, authenticated file management in Azure blob storage for Business Central containers, eliminating the need for SAS URLs or secret credentials. It includes CLI commands for uploading, downloading, listing, and removing files with version control.
tier: community
language: en
tags:
  - file storage
  - kubernetes
  - azure
  - versioning
  - cli
  - containers
system: platform
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-06T21:44:18.590Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: 7a2ab3ba59a8080254017c044bc80081196405c75d68ca3d3bdd56c793534cdf
evidence:
  - kind: blog
    url: https://freddysblog.com/2026/08/04/file-storage-in-fkh/
    title: File storage in Fkh (Freddy’s Kubernetes Helper)
    date: "2026-08-04"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://freddysblog.com/2026/08/04/file-storage-in-fkh/
    title: File storage in Fkh (Freddy’s Kubernetes Helper)
    date: "2026-08-04"
    commit: null
    t: null
    quote: Every file is stored under a name, and each upload creates a new version under that name.
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://freddysblog.com/2026/08/04/file-storage-in-fkh
source_id: freddysblog
source_name: Freddys blog
url: https://freddysblog.com/2026/08/04/file-storage-in-fkh/
published_at: "2026-08-04T10:00:00.000Z"
author: Freddy Kristiansen
full_text: false
words: 946
quotes:
  - text: Every file is stored under a name, and each upload creates a new version under that name.
    why_it_matters: Describes the versioning mechanism that enables rollback and historical tracking of file changes
code_objects_mentioned: []
systems:
  - platform
  - development
  - administration
versions_mentioned: []
---

# File storage in Fkh (Freddy’s Kubernetes Helper)

> Fkh file storage provides versioned, authenticated file management in Azure blob storage for Business Central containers, eliminating the need for SAS URLs or secret credentials. It includes CLI commands for uploading, downloading, listing, and removing files with version control.

[Read the post](https://freddysblog.com/2026/08/04/file-storage-in-fkh/) · Freddys blog (Freddy Kristiansen) · 2026-08-04 · 946 words · tier community · **unreviewed** (machine-generated)

## Key points

- File storage replaces ad-hoc file handling with versioned, secure storage in Azure blob storage accessible through authenticated channels only
- Uploading and deleting are admin-only operations, while downloading and listing are available to authorized users
- Version manifest (all.json) tracks all file versions automatically, defaulting to UTC timestamps if no explicit version label is provided
- CLI commands support scripting and pipeline integration with pattern matching and flexible version selection

## Quotes

- "Every file is stored under a name, and each upload creates a new version under that name." (Describes the versioning mechanism that enables rollback and historical tracking of file changes)

## Context

- Features: versioned file storage, blob storage integration, authenticated access, version manifest, CLI commands, admin controls, pattern matching

Source: Freddys blog, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
