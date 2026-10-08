---
id: topic/dev-itpro/development/programming-in-the-al-language/tables-and-data
type: topic
title: Tables and data
summary: Tables and data in AL covers how to define Business Central tables, read and modify records, use queries, FlowFields, indexing (SIFT and NCCI), streaming, and XMLport or Excel import and export. It also covers number sequences and DataTransfer for bulk moves. It answers syntax, performance, and how-to questions.
tier: official
language: en
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-07T21:13:11.932Z"
  flags: []
generated:
  at: "2026-10-08T06:31:25.130Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 85a14c8be6ab10dcd427003a46989f74a71a7257891bb7859bac91699e53a874
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
    title: Add Tooltips to Table and Page Fields
    date: "2026-10-06"
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
    date: "2026-10-01"
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
    date: "2026-10-01"
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
    date: "2026-10-01"
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
  objects:
    - object/page/16
    - object/page/22
    - object/page/25
    - object/page/26
    - object/page/27
    - object/page/31
    - object/page/143
    - object/page/144
    - object/page/456
    - object/page/457
    - object/page/458
    - object/page/459
    - object/page/460
    - object/page/461
    - object/page/9300
    - object/page/9301
    - object/page/9303
    - object/page/9304
    - object/page/9305
    - object/page/9306
    - object/page/9307
    - object/page/9309
    - object/page/9310
    - object/page/9311
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
    - video/OLN-2Ec2GMM
    - video/uCJ48biqLf8
  posts:
    - post/demiliani-com/15968
    - post/mohana-blog/tag-blogger-com-1999-blog-1492436440038408053-post-3210455512131359826--dd131816e4
    - post/sauravdhyani-com/tag-blogger-com-1999-blog-3122193036149030463-post-7756402263170151476--0af9b880b1
    - post/thatnavguy-com/https-thatnavguy-com-blog-2026-bc-friday-tips-83-record-isdirty--62bcf5d8a3
  guidelines: []
  changes:
    - change/bcapps/10255
    - change/bcapps/10486
    - change/bcquality/203
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
  code: 24
  video: 2
  blog: 4
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

> Tables and data in AL covers how to define Business Central tables, read and modify records, use queries, FlowFields, indexing (SIFT and NCCI), streaming, and XMLport or Excel import and export. It also covers number sequences and DataTransfer for bulk moves. It answers syntax, performance, and how-to questions.

Path: [Development](../../development.md) > [Programming in the AL language](../programming-in-the-al-language.md) > Tables and data · tier official · system development · narrative reviewed (checked by Opus)

## Overview

This section is the AL reference for working with data in Business Central. It starts with table structure (objects, fields, keys, triggers, extensions, relationships) and moves through reading and modifying records, Query objects, and FlowFields and FlowFilters for calculated values that are not stored.

Performance topics sit in their own subtopics. Reading data covers Get, Find, FindSet, partial records, isolation levels, and read scale-out. Indexing covers SIFT and NCCI, including tuning, tracing, and migrating from SIFT to NCCI. Importing and exporting covers XMLport objects and Excel Buffer exports. A Streaming data subtopic is also listed.

The section's own two pages cover number sequences and DataTransfer. Number sequences use SQL Server sequences and allow gaps without blocking, unlike number series. DataTransfer does bulk copying between tables during upgrade and install. To begin, read Defining table structures, then Reading data and Modifying data. Go to the indexing and DataTransfer pages when performance matters.

## Key points

- Defining table structures covers the table object, fields, keys, triggers, system fields, table extensions, relationships, tooltips, and optimized text search.
- Modifying data covers Insert, Modify, Delete and Truncate, temporary tables, virtual tables (Date, Integer), media on records, filter pages, Dataverse table properties, and keeping test data between publishes.
- Reading data covers Get, Find, FindSet and Next, partial records, record isolation levels, SQL performance of database methods, and read scale-out.
- Query objects define dataitems and columns, joins, filters, aggregates, and date parts, and their results can be read in code.
- FlowFields and FlowFilters are virtual fields that calculate values at runtime using CalcFormula, with no data stored.
- SIFT and NCCI speed up sums over numeric columns, with trade-offs in performance and maintenance, and a migration path from SIFT to NCCI.
- Number sequences use SQL Server sequences (NumberSequence type with Insert, Delete, Next, Current, Exists). They allow gaps and are non-blocking, unlike number series.
- DataTransfer bulk-copies data between SQL-based tables during upgrade and install (CopyRows, CopyFields, AddJoin, and others), and is faster than row-by-row record operations. It is listed under 2022 release wave 2.

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

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#10255 Add expense activity history foundation](../../../../changes/bcapps/10255.md) (code change): "New append-only activity log table records expense report lifecycle events"
- [#10486 [Quality Management] Use Bin code selection for transfer disposition in workflow response](../../../../changes/bcapps/10486.md) (code change): "The Quality Management transfer disposition now uses the bin"
- [#203 knowledge(data-modeling): Prices Including VAT decides the basis of sales/purchase/service line amounts](../../../../changes/bcquality/203.md) (code change): "Prices Including VAT header flag affects the basis of line amount fields in sales, purchase, and service documents"
- [Dynamics 365 Business Central: AL Query objects and the new ReadState property.](../../../../posts/demiliani-com/15968.md) (community post): "AL query objects now support the ReadState property in Dynamics 365 Business Central"
- [Record.IsDirty in Business Central 29: a worked example](../../../../posts/mohana-blog/tag-blogger-com-1999-blog-1492436440038408053-post-3210455512131359826--dd131816e4.md) (community post): "Record.IsDirty() returns true when in-memory values differ"
- [How to Group and Consolidate General Journal Lines Using Query Object in Business Central.](../../../../posts/sauravdhyani-com/tag-blogger-com-1999-blog-3122193036149030463-post-7756402263170151476--0af9b880b1.md) (community post): "consolidate General Journal Lines in Business Central using Query Objects"
- [BC Friday Tips #83 Check Whether a Record Has Changed](../../../../posts/thatnavguy-com/https-thatnavguy-com-blog-2026-bc-friday-tips-83-record-isdirty--62bcf5d8a3.md) (community post): "Record.IsDirty() method detects whether a record has been modified"
- [What’s New: AL Runtime and Database (2024 release wave 1)](../../../../videos/OLN-2Ec2GMM.md) (video): "number sequence; change log cleanup; alter key; field tooltips; translatable texts"
- [FieldExist() and Field() get a text overload](../../../../videos/uCJ48biqLf8.md) (video): "FieldExist() and Field() get a text overload"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 16 "Chart of Accounts"](../../../../objects/page/16.md) · on [Table 15 "G/L Account"](../../../../objects/table/15.md) · via [Using Query objects](tables-and-data/using-query-objects.md)
- [Page 22 "Customer List"](../../../../objects/page/22.md) · captioned "Customers" · on [Table 18 "Customer"](../../../../objects/table/18.md) · via [Using Query objects](tables-and-data/using-query-objects.md)
- [Page 25 "Customer Ledger Entries"](../../../../objects/page/25.md) · on [Table 21 "Cust. Ledger Entry"](../../../../objects/table/21.md) · via [Using Query objects](tables-and-data/using-query-objects.md)
- [Page 26 "Vendor Card"](../../../../objects/page/26.md) · on [Table 23 "Vendor"](../../../../objects/table/23.md) · via [Using Query objects](tables-and-data/using-query-objects.md)
- [Page 27 "Vendor List"](../../../../objects/page/27.md) · captioned "Vendors" · on [Table 23 "Vendor"](../../../../objects/table/23.md) · via [Using Query objects](tables-and-data/using-query-objects.md)
- [Page 31 "Item List"](../../../../objects/page/31.md) · captioned "Items" · on [Table 27 "Item"](../../../../objects/table/27.md) · via [Using Query objects](tables-and-data/using-query-objects.md)
- [Page 143 "Posted Sales Invoices"](../../../../objects/page/143.md) · on [Table 112 "Sales Invoice Header"](../../../../objects/table/112.md) · via [Using Query objects](tables-and-data/using-query-objects.md)
- [Page 144 "Posted Sales Credit Memos"](../../../../objects/page/144.md) · on [Table 114 "Sales Cr.Memo Header"](../../../../objects/table/114.md) · via [Using Query objects](tables-and-data/using-query-objects.md)
- [Page 456 "No. Series"](../../../../objects/page/456.md) · on [Table 308 "No. Series"](../../../../objects/table/308.md) · via [Using Query objects](tables-and-data/using-query-objects.md)
- [Page 457 "No. Series Lines"](../../../../objects/page/457.md) · on [Table 309 "No. Series Line"](../../../../objects/table/309.md) · via [Using Query objects](tables-and-data/using-query-objects.md)
- [Page 458 "No. Series Relationships"](../../../../objects/page/458.md) · on [Table 310 "No. Series Relationship"](../../../../objects/table/310.md) · via [Using Query objects](tables-and-data/using-query-objects.md)
- [Page 459 "Sales & Receivables Setup"](../../../../objects/page/459.md) · on [Table 311 "Sales & Receivables Setup"](../../../../objects/table/311.md) · via [Using Query objects](tables-and-data/using-query-objects.md)
- [Page 460 "Purchases & Payables Setup"](../../../../objects/page/460.md) · on [Table 312 "Purchases & Payables Setup"](../../../../objects/table/312.md) · via [Using Query objects](tables-and-data/using-query-objects.md)
- [Page 461 "Inventory Setup"](../../../../objects/page/461.md) · on [Table 313 "Inventory Setup"](../../../../objects/table/313.md) · via [Using Query objects](tables-and-data/using-query-objects.md)
- [Page 9300 "Sales Quotes"](../../../../objects/page/9300.md) · on [Table 36 "Sales Header"](../../../../objects/table/36.md) · via [Using Query objects](tables-and-data/using-query-objects.md)
- [Page 9301 "Sales Invoice List"](../../../../objects/page/9301.md) · captioned "Sales Invoices" · on [Table 36 "Sales Header"](../../../../objects/table/36.md) · via [Using Query objects](tables-and-data/using-query-objects.md)
- [Page 9303 "Blanket Sales Orders"](../../../../objects/page/9303.md) · on [Table 36 "Sales Header"](../../../../objects/table/36.md) · via [Using Query objects](tables-and-data/using-query-objects.md)
- [Page 9304 "Sales Return Order List"](../../../../objects/page/9304.md) · captioned "Sales Return Orders" · on [Table 36 "Sales Header"](../../../../objects/table/36.md) · via [Using Query objects](tables-and-data/using-query-objects.md)
- [Page 9305 "Sales Order List"](../../../../objects/page/9305.md) · captioned "Sales Orders" · on [Table 36 "Sales Header"](../../../../objects/table/36.md) · via [Using Query objects](tables-and-data/using-query-objects.md)
- [Page 9306 "Purchase Quotes"](../../../../objects/page/9306.md) · on [Table 38 "Purchase Header"](../../../../objects/table/38.md) · via [Using Query objects](tables-and-data/using-query-objects.md)
- [Page 9307 "Purchase Order List"](../../../../objects/page/9307.md) · captioned "Purchase Orders" · on [Table 38 "Purchase Header"](../../../../objects/table/38.md) · via [Using Query objects](tables-and-data/using-query-objects.md)
- [Page 9309 "Purchase Credit Memos"](../../../../objects/page/9309.md) · on [Table 38 "Purchase Header"](../../../../objects/table/38.md) · via [Using Query objects](tables-and-data/using-query-objects.md)
- [Page 9310 "Blanket Purchase Orders"](../../../../objects/page/9310.md) · on [Table 38 "Purchase Header"](../../../../objects/table/38.md) · via [Using Query objects](tables-and-data/using-query-objects.md)
- [Page 9311 "Purchase Return Order List"](../../../../objects/page/9311.md) · captioned "Purchase Return Orders" · on [Table 38 "Purchase Header"](../../../../objects/table/38.md) · via [Using Query objects](tables-and-data/using-query-objects.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
