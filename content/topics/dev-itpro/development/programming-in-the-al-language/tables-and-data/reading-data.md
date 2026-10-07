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
  at: "2026-10-07T13:37:30.849Z"
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
    - post/demiliani-com/14031
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
  blog: 1
  guideline: 0
bc_forms: []
member_hash: 3379cd754f86203aa303a146696436a67af354ae6edb858e850701c69ce460a8
narrative: generated
---

# Reading data

> Reading data in AL covers how to retrieve records from Business Central tables efficiently. It answers questions about Get, Find, FindSet and Next, partial records, record isolation levels, SQL performance of database methods, and read scale-out.

Path: [Development](../../../development.md) > [Programming in the AL language](../../programming-in-the-al-language.md) > [Tables and data](../tables-and-data.md) > Reading data · tier official · system development · narrative reviewed by Opus

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
- [FAQ for Partial Records](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-partial-records-faq): Answers some of the most typical questions about the partial records capability in Business Central
- [Get, Find, and Next methods](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-get-find-and-next-methods): Learn about the Get, Find, and Next methods for searching records in Business Central.
- [Record instance isolation level](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-read-isolation): Learn how to set the isolation levels used when querying the Business Central database.
- [Using partial records](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-partial-records): Describes the partial records capability in Business Central.
- [Using Read Scale-Out for Better Performance](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/database-read-scale-out-overview): Learn how to use read scale-out in Business Central to improve performance

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#11847 Use matching key for workflow event step instance lookup](../../../../../changes/bcapps/11847.md) (code change): "A workflow step instance lookup key is redefined to match the actual filter and sort order"
- [Dynamics 365 Business Central: AL transaction isolation levels and cache usage.](../../../../../posts/demiliani-com/14031.md) (community post): "Record.ReadIsolation method controls database transaction isolation"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
