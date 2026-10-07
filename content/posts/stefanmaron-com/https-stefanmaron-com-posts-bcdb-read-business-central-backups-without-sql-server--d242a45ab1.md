---
id: post/stefanmaron-com/https-stefanmaron-com-posts-bcdb-read-business-central-backups-without-sql-server--d242a45ab1
type: post
title: "Introducing bcdb: Read a Business Central Backup Without SQL Server"
summary: bcdb is a tool that reads SQL Server backup files (.bak) and Business Central cloud exports (.bacpac) directly without requiring SQL Server or a restore process. It decodes table data using AL field names when provided with extension symbols and supports library and CLI usage.
tier: community
language: en
tags:
  - backup recovery
  - database reading
  - sql server
  - tools
  - data extraction
  - testing
system: platform
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
  input_hash: 5d058dfdcdd4f1f176d84bb8630ea271a33822b5159ecd7aaeb8124b0b3107d9
evidence:
  - kind: blog
    url: https://stefanmaron.com/posts/bcdb-read-business-central-backups-without-sql-server/
    title: "Introducing bcdb: Read a Business Central Backup Without SQL Server"
    date: "2026-09-01"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://stefanmaron.com/posts/bcdb-read-business-central-backups-without-sql-server/
    title: "Introducing bcdb: Read a Business Central Backup Without SQL Server"
    date: "2026-09-01"
    commit: null
    t: null
    quote: "AL Runner doesn't have that constraint: it only cares whether the data structure matches."
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://stefanmaron.com/posts/bcdb-read-business-central-backups-without-sql-server/
source_id: stefanmaron-com
source_name: Stefan Maron
url: https://stefanmaron.com/posts/bcdb-read-business-central-backups-without-sql-server/
published_at: "2026-09-01T07:40:40.000Z"
author: Stefan Maron
full_text: false
words: 1356
quotes:
  - text: "AL Runner doesn't have that constraint: it only cares whether the data structure matches."
    why_it_matters: "Explains the fundamental advantage over service tier restore: enables testing without exact extension versions"
code_objects_mentioned: []
systems:
  - platform
  - development
  - administration
versions_mentioned:
  - BC 21
  - BC 24
  - BC 27.5
  - BC 28.1
preview:
  embeddable: true
  frame_url: null
  image: null
  image_alt: null
  image_w: null
  image_h: null
  site_name: Stefan Maron
  favicon: https://stefanmaron.com/icons/favicon-32x32.png
  probed_at: "2026-10-07T11:50:13.242Z"
---

# Introducing bcdb: Read a Business Central Backup Without SQL Server

[Read the post](https://stefanmaron.com/posts/bcdb-read-business-central-backups-without-sql-server/) · Stefan Maron (Stefan Maron, MVP) · 2026-09-01 · 1356 words · tier community · **unreviewed** (machine-generated)

> bcdb is a tool that reads SQL Server backup files (.bak) and Business Central cloud exports (.bacpac) directly without requiring SQL Server or a restore process. It decodes table data using AL field names when provided with extension symbols and supports library and CLI usage.

## Key points

- Reads .bak and .bacpac files directly by parsing pages and the system catalog without needing SQL Server
- Outputs AL field names and types when given extension symbols; otherwise uses SQL column names
- Available as a .NET global tool and self-contained native binaries for multiple platforms
- Extensively tested against SQL Server restores to verify byte-for-byte accuracy on real production databases
- Designed to support AL Runner by enabling it to work with real data without needing exact extension versions

## Quotes

- "AL Runner doesn't have that constraint: it only cares whether the data structure matches." (Explains the fundamental advantage over service tier restore: enables testing without exact extension versions)

## Context

- Features: backup file parsing, table row decoding, page decompression, BLOB handling, AL field mapping, command-line interface, library interface, serve mode
- Versions: BC 21, BC 24, BC 27.5, BC 28.1

Source: Stefan Maron, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
