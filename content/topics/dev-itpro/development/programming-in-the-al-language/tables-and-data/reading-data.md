---
id: topic/dev-itpro/development/programming-in-the-al-language/tables-and-data/reading-data
type: topic
title: Reading data
summary: Reading data in AL covers how to retrieve records from Business Central tables efficiently. It answers questions about Get, Find, FindSet and Next, partial records, record isolation levels, SQL performance of database methods, and read scale-out.
tier: official
language: en
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:23:27.211Z"
  flags: []
generated:
  at: "2026-10-26T06:43:56.210Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: f88763a2f28c8f284b22b561558ab181d7108d52c6e33a108cde28d675e011a3
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/optimize-sql-al-Database-methods-and-performance-on-server
    title: AL database methods and performance on SQL Server
    date: "2025-04-01"
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
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-get-find-and-next-methods
    title: Get, Find, and Next methods
    date: "2025-05-26"
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
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-partial-records
    title: Using partial records
    date: "2023-09-27"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/database-read-scale-out-overview
    title: Using Read Scale-Out for Better Performance
    date: "2025-04-23"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/optimize-sql-al-Database-methods-and-performance-on-server
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-partial-records-faq
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-get-find-and-next-methods
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-read-isolation
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-partial-records
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/database-read-scale-out-overview
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development/programming-in-the-al-language/tables-and-data
  localizations: []
  videos: []
  posts:
    - post/aardvarklabs-blog/3118
    - post/duiliotacconi-com/1425
    - post/yzhums-com/61561
    - post/yzhums-com/67623
    - post/yzhums-com/71365
  guidelines: []
  changes:
    - change/bcapps/11847
learn_toc_path:
  - Development
  - Programming in the AL language
  - Tables and data
  - Reading data
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development/programming-in-the-al-language/tables-and-data
children: []
coverage:
  learn: 6
  code: 0
  video: 0
  blog: 5
  guideline: 0
bc_forms: []
member_hash: 3379cd754f86203aa303a146696436a67af354ae6edb858e850701c69ce460a8
narrative: generated
---

# Reading data

> Reading data in AL covers how to retrieve records from Business Central tables efficiently. It answers questions about Get, Find, FindSet and Next, partial records, record isolation levels, SQL performance of database methods, and read scale-out.

Path: [Development](../../../development.md) > [Programming in the AL language](../../programming-in-the-al-language.md) > [Tables and data](../tables-and-data.md) > Reading data · tier official · system development · narrative reviewed (checked by Opus)

## Overview

This section explains how AL code reads data and how to do it with less load on SQL Server. It starts with the basic retrieval methods (Get, Find, FindFirst, FindLast, GetBySystemId, Next). It then moves to performance guidance: which database methods suit which scenarios, why CalcFields and CalcSums need separate SQL unless results are cached, and how SetAutoCalcFields, ModifyAll and DeleteAll help performance.

The other pages cover three ways to reduce cost further. Partial records load only selected fields and load the rest just-in-time; there is a usage page and a FAQ. Record instance isolation level limits locking on individual record instances. Read scale-out sends read-only workloads, such as analytical queries and OData GET requests, to a read-only database replica.

Start with "Get, Find, and Next methods" for the basics, then read "AL database methods and performance on SQL Server". Use the partial records, isolation level and read scale-out pages when tuning specific reports, pages or integrations.

## Key points

- Get, Find, FindFirst, FindLast, GetBySystemId and Next cover key-based and filter-based record retrieval in AL.
- FindSet and Next suit looping over records; CalcFields and CalcSums need separate SQL unless cached.
- SetAutoCalcFields, ModifyAll and DeleteAll are named as ways to improve performance.
- Partial records load a subset of fields using SetLoadFields, AddLoadFields, SetBaseLoadFields and LoadFields; AreFieldsLoaded checks the loaded status.
- Unselected fields load just-in-time when accessed; the FAQ mentions an Enable Partial Records server setting and table extension optimization.
- Record instance isolation level (ReadIsolation) offers Default, ReadUncommitted, ReadCommitted, RepeatableRead and UpdLock to limit locks.
- Read scale-out uses the DataAccessIntent property to run read-only workloads on replicas, and the intent can be overridden at runtime.

## Learn pages

- [AL database methods and performance on SQL Server](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/optimize-sql-al-Database-methods-and-performance-on-server): Read about the relationship between basic database methods in AL and SQL statements in Business Central.
  - Record.Get is optimized for retrieving a single record based on primary key values.
  - Record.Find('-') and Record.Find('+') use self-tuning TOP X calls and are best for reading when you might not need all records.
  - Record.FindSet is optimized for reading the complete set of records in specified filters and ranges.
  - Each CalcFields or CalcSums call requires a separate SQL statement unless the result is cached from a recent identical calculation.
  - SetAutoCalcFields method optimizes performance by calculating FlowFields during record retrieval instead of in separate calls.
  - Using FindSet with var parameter and direct Modify or Delete avoids extra SQL statements compared to copying records.
  - ModifyAll and DeleteAll revert to individual SQL calls if triggers, event subscribers, security filtering, Media fields, or companion tables exist.
- [FAQ for Partial Records](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-partial-records-faq): Answers some of the most typical questions about the partial records capability in Business Central
- [Get, Find, and Next methods](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-get-find-and-next-methods): Learn about the Get, Find, and Next methods for searching records in Business Central.
  - In the observatory: [Table 18 "Customer"](../../../../../objects/table/18.md), [Table 27 "Item"](../../../../../objects/table/27.md), [Table 37 "Sales Line"](../../../../../objects/table/37.md)
- [Record instance isolation level](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-read-isolation): Learn how to set the isolation levels used when querying the Business Central database.
- [Using partial records](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-partial-records): Describes the partial records capability in Business Central.
  - In the observatory: [Table 27 "Item"](../../../../../objects/table/27.md)
- [Using Read Scale-Out for Better Performance](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/database-read-scale-out-overview): Learn how to use read scale-out in Business Central to improve performance
  - Read scale-out isolates analytical read-only workloads from business process read-write transactions to prevent performance degradation.
  - Read scale-out uses a read-only replica of the database instead of the primary read-write database for reports, queries, and API pages.
  - Status: In Business Central Online, read scale-out is readily available and automatically enabled on databases.
  - Developers can set default database access intent on reports and query objects using the DataAccessIntent property.
  - Read-only intent can be enabled on OData GET requests by configuring the Enable Read-Only Intent on GET Requests server setting.
  - Limit: Read scale-out cannot be enabled on sandbox environments; read-only objects only access the primary database.
  - Limit: Using read scale-out may introduce a slight delay when reading data due to replication lag from primary to secondary replicas.

Key facts from Microsoft Learn (CC BY 4.0), in our own words (D106); open the page for the full text.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#11847 Use matching key for workflow event step instance lookup](../../../../../changes/bcapps/11847.md) (code change): "A workflow step instance lookup key is redefined to match the actual filter and sort order"
- [Leveraging RecordRef and FieldRef for Dynamic Coding](../../../../../posts/aardvarklabs-blog/3118.md) (community post): "demonstrates practical use cases like summing amounts across different table types"
- [Optimized Locking feature vs Dynamics 365 Business Central](../../../../../posts/duiliotacconi-com/1425.md) (community post): "Tri-state locking and ReadIsolation in BC apply only to in-transaction single reads"
- [Dynamics 365 Business Central: How to calculate the total (sum) of a column in a table (Four ways)](../../../../../posts/yzhums-com/61561.md) (community post): "CalcSums method works with SumIndexFields in keys for efficiency"
- [Business Central 2025 wave 2 (BC27): RecordRef – Get/Search field by name (New overloads)](../../../../../posts/yzhums-com/67623.md) (community post): "new overloads to RecordRef Field and FieldExist methods"
- [Business Central 2026 release wave 1 (BC28): AL developers can use semantic search on data and metadata](../../../../../posts/yzhums-com/71365.md) (community post): "AL developers can use semantic search on data and metadata. AL developers in Business Central"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
