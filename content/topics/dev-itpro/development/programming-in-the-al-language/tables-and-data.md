---
id: topic/dev-itpro/development/programming-in-the-al-language/tables-and-data
type: topic
title: Tables and data
summary: Tables and data in AL covers defining tables, reading and modifying records, Query objects, FlowFields, indexing (SIFT, NCCI), streaming, and XMLport or Excel import and export. It also covers number sequences and DataTransfer. It answers how-to and syntax questions about working with Business Central data.
tier: official
language: en
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:14:51.727Z"
  flags: []
generated:
  at: "2026-10-07T09:49:55.895Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 0f0792da65ec0f7d5659f60ae95ac2e2aaf2cbedf824daf9508bfebcb5a94f92
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-query-accessing-columns
    title: Accessing Columns of a Query Dataset
    date: "2024-04-29"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-adding-tooltips
    title: Add tooltips to table and page fields
    date: "2024-03-13"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-query-totals-grouping
    title: Aggregating data in query objects
    date: "2024-05-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/optimize-sql-al-Database-methods-and-performance-on-server
    title: AL database methods and performance on SQL Server
    date: "2025-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/analysis-mode
    title: Analyze list page and query data using data analysis
    date: "2026-09-18"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-filter-pages-for-filtering-tables
    title: Creating filter pages for filtering tables
    date: "2023-03-31"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-creating-flowfields-and-flowfilters
    title: Creating FlowFields and FlowFilters
    date: "2024-06-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-query-links-joins
    title: Data Item Links
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-date-virtual-table
    title: Date virtual table
    date: "2025-01-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-xmlport-schema
    title: Defining an XMLport Schema in AL
    date: "2026-08-24"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-table-field-text-search
    title: Enable optimized text search on table fields
    date: "2024-10-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-integrating-dynamics-365-for-sales-extension-development
    title: Enabling Microsoft Dataverse Tables for Extension Development
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-excel-buffer
    title: Exporting data to Excel using ExcelBuffer
    date: "2025-03-10"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-partial-records-faq
    title: FAQ for Partial Records
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-query-filters
    title: Filtering in Query objects
    date: "2024-06-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-flowfields
    title: FlowFields overview
    date: "2026-07-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-flowfilter-overview
    title: FlowFilters overview
    date: "2026-07-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-get-find-and-next-methods
    title: Get, Find, and Next methods
    date: "2025-05-26"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-insert-modify-modifyall-delete-and-deleteall-methods
    title: Insert, Modify, ModifyAll, Delete, and DeleteAll Methods
    date: "2025-09-30"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/instream/instream-data-type
    title: InStream data type
    date: "2025-08-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-integer-virtual-table
    title: Integer virtual table
    date: "2025-01-08"
    commit: null
    t: null
    quote: null
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
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-number-sequences
    title: Number sequences in Business Central
    date: "2023-11-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/outstream/outstream-data-type
    title: OutStream data type
    date: "2025-08-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-query-object
    title: Query object
    date: "2024-11-22"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-query-overview
    title: Query Overview
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-read-isolation
    title: Record instance isolation level
    date: "2024-01-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-query-retrieve-date-data
    title: Retrieving Date Data in Queries
    date: "2025-09-30"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-set-relationships-between-tables
    title: Setting Relationships Between Tables
    date: "2021-04-01"
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
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-retaining-data-after-publishing
    title: Synchronizing extension test data
    date: "2021-08-26"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/system/system-copystream-method
    title: System.CopyStream(OutStream, InStream [, Integer]) Method
    date: "2024-08-26"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-table-ext-object
    title: Table extension object
    date: "2024-04-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-table-object
    title: Table object
    date: "2026-06-12"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-number-sequences
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-data-transfer
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development/programming-in-the-al-language
    - topic/dev-itpro/development/programming-in-the-al-language/tables-and-data/defining-table-structures
    - topic/dev-itpro/development/programming-in-the-al-language/tables-and-data/modifying-data
    - topic/dev-itpro/development/programming-in-the-al-language/tables-and-data/reading-data
    - topic/dev-itpro/development/programming-in-the-al-language/tables-and-data/using-query-objects
    - topic/dev-itpro/development/programming-in-the-al-language/tables-and-data/flowfields-and-flowfilters
    - topic/dev-itpro/development/programming-in-the-al-language/tables-and-data/indexing-data-for-performance
    - topic/dev-itpro/development/programming-in-the-al-language/tables-and-data/streaming-data
    - topic/dev-itpro/development/programming-in-the-al-language/tables-and-data/importing-and-exporting-data
  localizations: []
  videos:
    - video/a1LQ3-SCtPE
    - video/OLN-2Ec2GMM
    - video/uCJ48biqLf8
  posts:
    - post/aardvarklabs-blog/2333
    - post/sauravdhyani-com/tag-blogger-com-1999-blog-3122193036149030463-post-7756402263170151476--0af9b880b1
    - post/thatnavguy-com/https-thatnavguy-com-blog-2026-bc-friday-tips-83-record-isdirty--62bcf5d8a3
  guidelines: []
learn_toc_path:
  - Development
  - Programming in the AL language
  - Tables and data
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development/programming-in-the-al-language
children:
  - topic/dev-itpro/development/programming-in-the-al-language/tables-and-data/defining-table-structures
  - topic/dev-itpro/development/programming-in-the-al-language/tables-and-data/modifying-data
  - topic/dev-itpro/development/programming-in-the-al-language/tables-and-data/reading-data
  - topic/dev-itpro/development/programming-in-the-al-language/tables-and-data/using-query-objects
  - topic/dev-itpro/development/programming-in-the-al-language/tables-and-data/flowfields-and-flowfilters
  - topic/dev-itpro/development/programming-in-the-al-language/tables-and-data/indexing-data-for-performance
  - topic/dev-itpro/development/programming-in-the-al-language/tables-and-data/streaming-data
  - topic/dev-itpro/development/programming-in-the-al-language/tables-and-data/importing-and-exporting-data
coverage:
  learn: 56
  code: 0
  video: 3
  blog: 3
  guideline: 0
bc_forms:
  - 16
  - 22
  - 25
  - 26
  - 27
  - 31
  - 143
  - 144
  - 456
  - 457
  - 458
  - 459
  - 460
  - 461
  - 9300
  - 9301
  - 9303
  - 9304
  - 9305
  - 9306
  - 9307
  - 9309
  - 9310
  - 9311
member_hash: eed398dfb63a207a296a8ab43da02dd954d3110c41391c2aae850c37c5e87540
narrative: generated
---

# Tables and data

> Tables and data in AL covers defining tables, reading and modifying records, Query objects, FlowFields, indexing (SIFT, NCCI), streaming, and XMLport or Excel import and export. It also covers number sequences and DataTransfer. It answers how-to and syntax questions about working with Business Central data.

Path: [Development](../../development.md) > [Programming in the AL language](../programming-in-the-al-language.md) > Tables and data · tier official · system development · narrative reviewed by Opus

## Overview

This section groups what an AL developer needs to define, store, read, change and move data in Business Central. The subtopics follow a usual workflow: defining table structures, reading data, modifying data, querying with Query objects, calculating values with FlowFields and FlowFilters, and tuning performance with indexes. Other subtopics cover streaming data and importing or exporting data through XMLports and Excel.

The section's own pages cover two tools. Number sequences use SQL Server sequences to generate numeric identifiers. They allow gaps and do not block, so they suit non-continuous numbering better than number series. DataTransfer is an AL data type for bulk copying data between SQL-based tables during upgrade and install, and it is much faster than row-by-row record operations.

Start with Defining table structures if you are building new objects. Go to Reading data and Indexing data for performance when tuning speed. Use the DataTransfer page when writing upgrade code that moves large volumes of data.

## Key points

- Defining table structures covers table objects, table extensions, system fields, TableRelation, ToolTip and OptimizeForTextSearch.
- Modifying data covers Insert, Modify, Delete and Truncate, temporary tables, virtual tables (Date, Integer), media on records and Dataverse table properties.
- Reading data covers Get, Find, FindSet and Next, partial records, isolation levels, SQL performance and read scale-out.
- Query objects define dataitems and columns, joins, filters, aggregation and date parts, as an alternative to record variables.
- FlowFields and FlowFilters calculate values dynamically without storing data, using CalcFormula.
- SIFT and NCCI give fast sums over numeric columns, with guidance on tuning, tracing and migrating from SIFT to NCCI.
- Number sequences use the NumberSequence type (Insert, Delete, Next, Current, Exists) and allow gaps without blocking.
- DataTransfer (CopyRows, CopyFields, SetTables, AddFieldValue, AddConstantValue, AddJoin) does bulk table-to-table transfers in upgrade and install; the page lists 2022 release wave 2.

## Subtopics

- [Defining table structures](tables-and-data/defining-table-structures.md) (7 pages)
- [Modifying data](tables-and-data/modifying-data.md) (9 pages)
- [Reading data](tables-and-data/reading-data.md) (6 pages)
- [Using Query objects](tables-and-data/using-query-objects.md) (9 pages)
- [FlowFields and FlowFilters](tables-and-data/flowfields-and-flowfilters.md) (3 pages)
- [Indexing data for performance](tables-and-data/indexing-data-for-performance.md) (9 pages)
- [Streaming data](tables-and-data/streaming-data.md) (5 pages)
- [Importing and exporting data](tables-and-data/importing-and-exporting-data.md) (6 pages)

## More Learn pages

- [Number sequences in Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-number-sequences): This article describes how to create and use number sequences in AL code in Dynamics 365 Business Central.
- [Transferring data between tables using DataTransfer](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-data-transfer): Learn about the DataTransfer object type and how to use it to move data between tables.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [Essential Guides to Data Imports in Business Central](../../../../posts/aardvarklabs-blog/2333.md) (community post): "AL code patterns for handling JSON, delimited data, Excel files, and XML formats"
- [How to Group and Consolidate General Journal Lines Using Query Object in Business Central.](../../../../posts/sauravdhyani-com/tag-blogger-com-1999-blog-3122193036149030463-post-7756402263170151476--0af9b880b1.md) (community post): "consolidate General Journal Lines in Business Central using Query Objects"
- [BC Friday Tips #83 Check Whether a Record Has Changed](../../../../posts/thatnavguy-com/https-thatnavguy-com-blog-2026-bc-friday-tips-83-record-isdirty--62bcf5d8a3.md) (community post): "Record.IsDirty() method detects whether a record has been modified"
- [What's New: Server and Database - A Faster Data Stack (2023 release wave 2)](../../../../videos/a1LQ3-SCtPE.md) (video): "table extensions companion tables database joins schema redesign"
- [What’s New: AL Runtime and Database (2024 release wave 1)](../../../../videos/OLN-2Ec2GMM.md) (video): "number sequence; change log cleanup; alter key; field tooltips; translatable texts"
- [FieldExist() and Field() get a text overload](../../../../videos/uCJ48biqLf8.md) (video): "FieldExist() text overload; Field() text overload; Accessing table extension fields"

## Business Central pages and reports

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 16, 22, 25, 26, 27, 31, 143, 144, 456, 457, 458, 459, 460, 461, 9300, 9301, 9303, 9304, 9305, 9306, 9307, 9309, 9310, 9311.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
