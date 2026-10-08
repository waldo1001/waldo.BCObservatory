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
  state: reviewed
  by: opus
  at: "2026-10-07T23:47:06.819Z"
  flags: []
generated:
  at: "2026-10-07T22:42:12.892Z"
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

[Read the post](https://stefanmaron.com/posts/bcdb-read-business-central-backups-without-sql-server/) · Stefan Maron (Stefan Maron, MVP) · 2026-09-01 · 1356 words · tier community · reviewed (checked by Opus)

> bcdb is a tool that reads SQL Server backup files (.bak) and Business Central cloud exports (.bacpac) directly without requiring SQL Server or a restore process. It decodes table data using AL field names when provided with extension symbols and supports library and CLI usage.

## Key points

- Reads .bak and .bacpac files directly by parsing pages and the system catalog, with no SQL Server or restore needed
- Gives AL field names and types when passed the .app symbols; otherwise it uses SQL column names
- Ships as a .NET global tool, a NuGet library (BcDb.Core) and native binaries for several platforms
- Checked page by page against fresh SQL Server restores, with over 99.9% of pages identical. It refuses unsupported backup types and column types rather than guessing
- Built mainly so AL Runner can use real customer data without needing the exact extension versions

## Quotes

- "AL Runner doesn't have that constraint: it only cares whether the data structure matches." (Explains the fundamental advantage over service tier restore: enables testing without exact extension versions)

## Context

- Features: backup file parsing, table row decoding, page decompression, BLOB handling, AL field mapping, command-line interface, library interface, serve mode
- Versions: BC 21, BC 24, BC 27.5, BC 28.1

Source: Stefan Maron, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
