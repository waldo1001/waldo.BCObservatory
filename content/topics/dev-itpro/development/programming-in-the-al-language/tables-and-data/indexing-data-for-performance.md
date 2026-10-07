---
id: topic/dev-itpro/development/programming-in-the-al-language/tables-and-data/indexing-data-for-performance
type: topic
title: Indexing data for performance
summary: Indexing data for performance in AL covers SumIndexField Technology (SIFT) and Nonclustered Columnstore Indexes (NCCI) for fast sums over numeric columns. It answers questions about how each works with SQL Server, performance and maintenance trade-offs, tuning and tracing, and migrating from SIFT to NCCI.
tier: official
language: en
system: platform
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:20:50.803Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 79fcdfd77273e7182b617c5fdda03b436274953bd0a83b78ce3c1d11f89cac6a
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-migrating-from-sift-to-ncci
    title: Migrating from SIFT to Nonclustered Columnstore Indexes (NCCIs)
    date: "2022-01-28"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-ncci-tuning-and-tracing
    title: NCCI Tuning and Tracing
    date: "2022-01-28"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-ncci-overview
    title: Nonclustered Columnstore Indexes (NCCI)
    date: "2022-01-28"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-ncci-performance
    title: Nonclustered Columnstore Indexes (NCCI) and Performance
    date: "2022-01-28"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-ncci-and-sql-server
    title: Nonclustered Columnstore Indexes (NCCIs) and SQL Server
    date: "2022-01-28"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-sift-performance
    title: SIFT and Performance
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-sift-and-sql-server
    title: SIFT and SQL Server
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-sift-technology
    title: SumIndexField Technology (SIFT)
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-sift-tuning-and-tracing
    title: Tuning and Tracing
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-migrating-from-sift-to-ncci
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-ncci-tuning-and-tracing
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-ncci-overview
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-ncci-performance
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-ncci-and-sql-server
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-sift-performance
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-sift-and-sql-server
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-sift-technology
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-sift-tuning-and-tracing
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development/programming-in-the-al-language/tables-and-data
  localizations: []
  videos:
    - video/IAacWsvav1E
  posts:
    - post/aardvarklabs-blog/3761
    - post/mohana-blog/tag:blogger.com,1999:blog-1492436440038408053.post-483274250682537951
    - post/stefanmaron-com/https://stefanmaron.com/posts/planning-table-indexes-bc-performance/
    - post/waldo-be/318212
  guidelines: []
learn_toc_path:
  - Development
  - Programming in the AL language
  - Tables and data
  - Indexing data for performance
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development/programming-in-the-al-language/tables-and-data
children: []
coverage:
  learn: 9
  code: 0
  video: 1
  blog: 4
  guideline: 0
bc_forms: []
member_hash: 35d16713950930e7d6df2a51e27b0d618b69b36f632ac1361932d9d0e629cddb
narrative: generated
---

# Indexing data for performance

> Indexing data for performance in AL covers SumIndexField Technology (SIFT) and Nonclustered Columnstore Indexes (NCCI) for fast sums over numeric columns. It answers questions about how each works with SQL Server, performance and maintenance trade-offs, tuning and tracing, and migrating from SIFT to NCCI.

Path: [Development](../../../development.md) > [Programming in the AL language](../../programming-in-the-al-language.md) > [Tables and data](../tables-and-data.md) > Indexing data for performance · tier official · system platform · narrative reviewed by Opus

## Overview

This section deals with two ways to speed up sum calculations on large tables, which matter for FlowFields and queries. SIFT uses SumIndexFields tied to keys and implemented as indexed views in SQL Server. NCCI uses the SQL Server nonclustered columnstore index feature, for analytical queries, with lower maintenance overhead and less database locking than SIFT keys.

## Key points

- SIFT keys create indexed views in SQL Server that use GROUP BY to speed up aggregates on numeric columns.
- SIFT has a maintenance cost, and the MaintainSIFTIndex property is a factor in managing that cost.
- SIFT performance depends on index design and field positioning, and should be tested.
- For tuning and tracing, SQL Server tools such as the profiler help measure SIFT overhead and decide whether to combine SIFT keys. NCCI has its own tuning and tracing guidance with SQL Server tracing and columnstore index maintenance.
- NCCI supports fast sums on decimal, integer and biginteger columns, and helps FlowFields and query performance.
- NCCI in Business Central excludes BLOB fields and reduces database locking compared to SIFT keys.
- Assess whether an NCCI is needed and choose its fields carefully. Consider disabling SIFT indexes, and test performance after any change to the NCCI structure.
- A migration page explains when and how to replace SIFT indexes with NCCI on custom tables to reduce maintenance overhead and improve query performance.

## Learn pages

- [Migrating from SIFT to Nonclustered Columnstore Indexes (NCCIs)](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-migrating-from-sift-to-ncci): Explains how you can change from using SIFT keys to nonclustered columnstore indexes in Business Central tables.
- [NCCI Tuning and Tracing](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-ncci-tuning-and-tracing): Explains how to tune and trace nonclustered columnstore indexes in Business Central.
- [Nonclustered Columnstore Indexes (NCCI)](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-ncci-overview): Provides an introduction to nonclustered columnstore indexes in Business Central.
- [Nonclustered Columnstore Indexes (NCCI) and Performance](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-ncci-performance): This article looks at the factors you must take into consideration when you deal with nonclustered columnstore indexes and performance.
- [Nonclustered Columnstore Indexes (NCCIs) and SQL Server](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-ncci-and-sql-server): Explains how nonclustered columnstore indexes in Business Central tables work with SQL Server.
- [SIFT and Performance](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-sift-performance): This article looks at the factors you must take into consideration when you deal with SIFT and performance.
- [SIFT and SQL Server](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-sift-and-sql-server): Explains how SIFT in Business Central tables work with SQL Server.
- [SumIndexField Technology (SIFT)](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-sift-technology): Provides an introduction to SIFT indexes in Business Central.
- [Tuning and Tracing](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-sift-tuning-and-tracing): Explains how to tune and trace SIFT indexes in Business Central.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [Optimizing Business Central Indexes for Performance with Copilot](../../../../../posts/aardvarklabs-blog/3761.md) (community post): "Optimizing Business Central Indexes for Performance with Copilot"
- [BC 29 lets a single index span base table and table extension fields](../../../../../posts/mohana-blog/tag:blogger.com,1999:blog-1492436440038408053.post-483274250682537951.md) (community post): "Business Central 29 allows table extension keys to span both base table and extension fields in a single index"
- [Planning Table Indexes for the Best Performance](../../../../../posts/stefanmaron-com/https://stefanmaron.com/posts/planning-table-indexes-bc-performance/.md) (community post): "Table indexes in Business Central speed up reads but slow down writes"
- [Troubleshooting Series – Ep3 – Missing Indexes](../../../../../posts/waldo-be/318212.md) (community post): "Indexes can only be added through development via AppSource apps"
- [What's New: Enhanced Index Management (2026 release wave 1)](../../../../../videos/IAacWsvav1E.md) (video): "Enhanced Index Management database performance storage optimization index lifecycle"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
