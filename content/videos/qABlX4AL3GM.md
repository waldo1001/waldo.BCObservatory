---
id: video/qABlX4AL3GM
type: video
title: "Business Central 29.0: Major Change to Table Extensions & SQL."
summary: "Business Central 29 table extension storage change: extension fields are stored in the same SQL table as the base table instead of companion tables. Covers cross-field indexes, performance effects, continued use of partial loading (SetLoadFields), avoiding direct SQL, and a compiler warning near the column limit. Version 29 is described as in public preview."
tier: community
language: en
tags:
  - table extensions
  - sql storage model
  - database performance
  - indexes
  - data modeling
  - al development
  - extension architecture
  - companion tables
  - partial loading
  - set load field
  - direct sql
  - apis
system: development
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T00:17:53.935Z"
  pipeline: 0.2.0
  prompts:
    extract-video: 1
    summarize-video: 2
  input_hash: 08825e9548e88df9f68c0e704a3fb042bc9096545989e720df4f2af57fde8d12
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=qABlX4AL3GM&t=103s
    title: "Business Central 29.0: Major Change to Table Extensions & SQL."
    date: "2026-09-07T06:00:31.000Z"
    commit: null
    t: 103
    quote: business 29 introduces a major change to the data model used for table extensions
  - kind: video
    url: https://www.youtube.com/watch?v=qABlX4AL3GM&t=114s
    title: "Business Central 29.0: Major Change to Table Extensions & SQL."
    date: "2026-09-07T06:00:31.000Z"
    commit: null
    t: 114
    quote: fields from table extensions are stored in the same database table as the base table instead of being stored
  - kind: video
    url: https://www.youtube.com/watch?v=qABlX4AL3GM&t=151s
    title: "Business Central 29.0: Major Change to Table Extensions & SQL."
    date: "2026-09-07T06:00:31.000Z"
    commit: null
    t: 151
    quote: business 29 is currently in public preview. The platform behavior in Microsoft documentation may change before general availability.
  - kind: video
    url: https://www.youtube.com/watch?v=qABlX4AL3GM&t=603s
    title: "Business Central 29.0: Major Change to Table Extensions & SQL."
    date: "2026-09-07T06:00:31.000Z"
    commit: null
    t: 603
    quote: one business central table, AL table is equivalent to one SQL table. No companion table, no table per extension.
  - kind: video
    url: https://www.youtube.com/watch?v=qABlX4AL3GM&t=751s
    title: "Business Central 29.0: Major Change to Table Extensions & SQL."
    date: "2026-09-07T06:00:31.000Z"
    commit: null
    t: 751
    quote: developers can define indexes that span fields from a base table and its extension table
links:
  learn: []
  objects: []
  features:
    - feature/573315
    - feature/573332
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: qABlX4AL3GM
channel: yt-saurav
source_name: Saurav Dhyani
url: https://www.youtube.com/watch?v=qABlX4AL3GM
published_at: "2026-09-07T06:00:31.000Z"
duration_s: 2104
captions: derived
audience:
  - developer
  - functional consultant
  - administrator
chapters:
  - t: 0
    title: Introduction and overview of table extensions changes
  - t: 103
    title: Business Central 29 table extension data model changes
  - t: 163
    title: Historical evolution of table extension storage
  - t: 240
    title: "Stage one: separate SQL storage for extension data"
  - t: 377
    title: "Stage two: extension companion table model"
  - t: 556
    title: "Stage three: Business Central 29 unified table model"
  - t: 645
    title: Why Microsoft changed the data model
  - t: 751
    title: "Benefits: index capabilities and performance improvements"
  - t: 896
    title: Partial loading and set load field best practices
  - t: 1182
    title: SQL query examples with and without partial load
  - t: 1291
    title: Why to avoid direct SQL and use APIs instead
  - t: 1474
    title: Detecting table approaching SQL column limit warning
  - t: 1685
    title: Table extension changes in BC29 - FAQ and implications
  - t: 1880
    title: Summary - architectural lessons and closing
features:
  - name: Unified table storage for extensions
    status: ga
    t: 103
    verified: false
    status_source: roadmap
    roadmap_ids:
      - "573332"
  - name: Cross-field indexes spanning base and extension tables
    status: ga
    t: 751
    verified: false
    status_source: roadmap
    roadmap_ids:
      - "573315"
  - name: Improved database operation performance for extensions
    status: ga
    t: 751
    verified: false
    status_source: roadmap
    roadmap_ids:
      - "573332"
  - name: Partial record loading with set load field
    status: unclear
    t: 932
    verified: false
    status_source: video
  - name: Avoid direct SQL operations
    status: unclear
    t: 1291
    verified: false
    status_source: video
  - name: Compiler warnings for table column limit
    status: unclear
    t: 1474
    verified: false
    status_source: video
objects_mentioned:
  - table item table
  - table item ledger entry
quotes:
  - t: 103
    text: business 29 introduces a major change to the data model used for table extensions
    check: exact
  - t: 114
    text: fields from table extensions are stored in the same database table as the base table instead of being stored
    check: fuzzy
  - t: 151
    text: business 29 is currently in public preview. The platform behavior in Microsoft documentation may change before general availability.
    check: exact
  - t: 603
    text: one business central table, AL table is equivalent to one SQL table. No companion table, no table per extension.
    check: exact
  - t: 751
    text: developers can define indexes that span fields from a base table and its extension table
    check: exact
---

# Business Central 29.0: Major Change to Table Extensions & SQL.

> Business Central 29 table extension storage change: extension fields are stored in the same SQL table as the base table instead of companion tables. Covers cross-field indexes, performance effects, continued use of partial loading (SetLoadFields), avoiding direct SQL, and a compiler warning near the column limit. Version 29 is described as in public preview.

[Watch on YouTube](https://www.youtube.com/watch?v=qABlX4AL3GM) · Saurav Dhyani · 2026-09-07 · 35:04 · tier community · **unreviewed** (machine-generated)

## Overview

The video walks through how table extension data has been stored in SQL across three stages: separate SQL storage for extension data, extension companion tables, and the Business Central 29 model where one AL table maps to one SQL table. It explains why Microsoft made the change and what it means for developers.

The presenter covers the main effects: indexes can span base and extension fields, and gets and finds can load from one table instead of joining companion tables. He argues that partial loading with set load field is still needed, demonstrates SQL queries with and without partial load, and says direct SQL should be avoided in favor of AL, APIs or queries. The presenter notes that Business Central 29 is in public preview, that he had no access to the SQL server in the cloud, and that the exact threshold for the new column-limit compiler warning is not known to him.

## Key points

- In Business Central 29, fields from table extensions are stored in the same database table as the base table, replacing the companion table model.
- Indexes (keys) can now span fields from a base table and its table extensions, which the earlier two storage models did not allow.
- Finds and other reads can be faster because extension fields are in one table and no join to companion tables is needed; gains depend on query complexity.
- Keep using set load field (partial loading) in version 29 so only the needed fields are fetched.
- Do not read or write SQL directly; use AL, Business Central APIs or queries, and treat the physical SQL schema as an implementation detail that may change.
- Compiler warnings are introduced for tables or table extensions with many normal fields approaching the SQL column limit; the exact threshold is not documented.
- Business Central 29 is in public preview, so documented behavior may change before general availability.

## Chapters

- [0:00](https://www.youtube.com/watch?v=qABlX4AL3GM&t=0s) Introduction and overview of table extensions changes
- [1:43](https://www.youtube.com/watch?v=qABlX4AL3GM&t=103s) Business Central 29 table extension data model changes
- [2:43](https://www.youtube.com/watch?v=qABlX4AL3GM&t=163s) Historical evolution of table extension storage
- [4:00](https://www.youtube.com/watch?v=qABlX4AL3GM&t=240s) Stage one: separate SQL storage for extension data
- [6:17](https://www.youtube.com/watch?v=qABlX4AL3GM&t=377s) Stage two: extension companion table model
- [9:16](https://www.youtube.com/watch?v=qABlX4AL3GM&t=556s) Stage three: Business Central 29 unified table model
- [10:45](https://www.youtube.com/watch?v=qABlX4AL3GM&t=645s) Why Microsoft changed the data model
- [12:31](https://www.youtube.com/watch?v=qABlX4AL3GM&t=751s) Benefits: index capabilities and performance improvements
- [14:56](https://www.youtube.com/watch?v=qABlX4AL3GM&t=896s) Partial loading and set load field best practices
- [19:42](https://www.youtube.com/watch?v=qABlX4AL3GM&t=1182s) SQL query examples with and without partial load
- [21:31](https://www.youtube.com/watch?v=qABlX4AL3GM&t=1291s) Why to avoid direct SQL and use APIs instead
- [24:34](https://www.youtube.com/watch?v=qABlX4AL3GM&t=1474s) Detecting table approaching SQL column limit warning
- [28:05](https://www.youtube.com/watch?v=qABlX4AL3GM&t=1685s) Table extension changes in BC29 - FAQ and implications
- [31:20](https://www.youtube.com/watch?v=qABlX4AL3GM&t=1880s) Summary - architectural lessons and closing

## Features

| Feature | Status | At | Evidence |
|---|---|---|---|
| Unified table storage for extensions | generally available (roadmap [573332](../features/573332.md)) | [1:43](https://www.youtube.com/watch?v=qABlX4AL3GM&t=103s) |  |
| Cross-field indexes spanning base and extension tables | generally available (roadmap [573315](../features/573315.md)) | [12:31](https://www.youtube.com/watch?v=qABlX4AL3GM&t=751s) |  |
| Improved database operation performance for extensions | generally available (roadmap [573332](../features/573332.md)) | [12:31](https://www.youtube.com/watch?v=qABlX4AL3GM&t=751s) |  |
| Partial record loading with set load field | status not stated, demoed | [15:32](https://www.youtube.com/watch?v=qABlX4AL3GM&t=932s) |  |
| Avoid direct SQL operations | status not stated | [21:31](https://www.youtube.com/watch?v=qABlX4AL3GM&t=1291s) |  |
| Compiler warnings for table column limit | status not stated | [24:34](https://www.youtube.com/watch?v=qABlX4AL3GM&t=1474s) |  |

A status with a roadmap link comes from the Microsoft 365 roadmap feature this part of the video covers (matched by Haiku; links Opus dropped are not used); other statuses need a status word in the video itself.

## AL objects mentioned

As heard in the captions; not yet verified against the code pillar.

- table "item table" at [4:25](https://www.youtube.com/watch?v=qABlX4AL3GM&t=265s)
- table "item ledger entry" at [16:59](https://www.youtube.com/watch?v=qABlX4AL3GM&t=1019s)

## Quotes

- [1:43](https://www.youtube.com/watch?v=qABlX4AL3GM&t=103s) "business 29 introduces a major change to the data model used for table extensions"
- [1:54](https://www.youtube.com/watch?v=qABlX4AL3GM&t=114s) "fields from table extensions are stored in the same database table as the base table instead of being stored"
- [2:31](https://www.youtube.com/watch?v=qABlX4AL3GM&t=151s) "business 29 is currently in public preview. The platform behavior in Microsoft documentation may change before general availability."
- [10:03](https://www.youtube.com/watch?v=qABlX4AL3GM&t=603s) "one business central table, AL table is equivalent to one SQL table. No companion table, no table per extension."
- [12:31](https://www.youtube.com/watch?v=qABlX4AL3GM&t=751s) "developers can define indexes that span fields from a base table and its extension table"

## Disclaimers in the video

- [2:31](https://www.youtube.com/watch?v=qABlX4AL3GM&t=151s) preview: business 29 is currently in public preview. The platform behavior in Microsoft documentation may change before general availability.
- [9:28](https://www.youtube.com/watch?v=qABlX4AL3GM&t=568s) preview: Business center 29 onrem version is not available and on business center cloud I don't have access to the SQL server
- [25:40](https://www.youtube.com/watch?v=qABlX4AL3GM&t=1540s) other: it'll be able to detect table approaching SQL column limit. Now this is very interesting. It is as new to ...
- [27:22](https://www.youtube.com/watch?v=qABlX4AL3GM&t=1642s) other: I'm very sure that they would not have taken this decision in isolation of changing the underlying architecture. But I ...
- [28:05](https://www.youtube.com/watch?v=qABlX4AL3GM&t=1685s) other: the Microsoft learn document or the release note very clearly says that it'll give you a compiler warning as it ...
- [28:24](https://www.youtube.com/watch?v=qABlX4AL3GM&t=1704s) other: I don't know what's the exact threshold what kind of compiler warning will be generated does a warning apply appears ...
