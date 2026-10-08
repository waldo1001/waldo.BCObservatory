---
id: topic/dev-itpro/business-central-on-premises/administration/configuring-business-central-database
type: topic
title: Configuring Business Central database
summary: "Configuring the Business Central database for on-premises deployments: SQL Server installation considerations, compatibility level, performance tuning, index management, table partitioning, data compression, and read scale-out. It answers setup and tuning questions about the SQL database behind Business Central."
tier: official
language: en
system: platform
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:23:19.662Z"
  flags: []
generated:
  at: "2026-10-08T06:31:25.130Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 90af627c90e253ac752a18a0b71c2e1e91c02473b48ae28f79d07e3347a96e6a
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/database-read-scale-out-configuration
    title: Configuring a Database for Read Scale-Out
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/installation-considerations-for-microsoft-sql-server
    title: Installation considerations for Microsoft SQL Server and Business Central
    date: "2025-03-12"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/manage-indexes
    title: Manage database index usage
    date: "2026-08-19"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/optimize-sql-server-performance
    title: Optimizing SQL Server Performance with Business Central
    date: "2024-04-16"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/optimize-sql-set-compatibility-level
    title: Setting SQL Compatibility Level to Optimize Database Performance
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/using-sql-partitioning-and-compression
    title: Using Table Partitioning and Data Compression
    date: "2023-06-14"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/database-read-scale-out-configuration
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/installation-considerations-for-microsoft-sql-server
    - https://learn.microsoft.com/dynamics365/business-central/manage-indexes
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/optimize-sql-server-performance
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/optimize-sql-set-compatibility-level
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/using-sql-partitioning-and-compression
  objects:
    - object/page/8700
    - object/page/8705
    - object/page/9521
  features: []
  topics:
    - topic/dev-itpro/business-central-on-premises/administration
  localizations: []
  videos: []
  posts:
    - post/demiliani-com/12820
  guidelines: []
learn_toc_path:
  - Business Central on-premises
  - Administration
  - Configuring Business Central database
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/business-central-on-premises/administration
children: []
coverage:
  learn: 6
  code: 3
  video: 0
  blog: 1
  guideline: 0
bc_forms:
  - 8700
  - 8705
  - 9521
member_hash: 9e9a5d8b688c1cfc28ccfa67c3f09a18394ddc46317f40a6f3627220fe3c2f3a
narrative: generated
---

# Configuring Business Central database

> Configuring the Business Central database for on-premises deployments: SQL Server installation considerations, compatibility level, performance tuning, index management, table partitioning, data compression, and read scale-out. It answers setup and tuning questions about the SQL database behind Business Central.

Path: [Business Central on-premises](../../business-central-on-premises.md) > [Administration](../administration.md) > Configuring Business Central database · tier official · system platform · narrative reviewed (checked by Opus)

## Overview

This section covers how to prepare and tune the SQL Server or Azure SQL database that Business Central uses on-premises. It starts with installation considerations such as disk partitioning, virus scanning, memory, TempDB, full-text search, MAXDOP settings, statistics management and high availability, for both on-premises and Azure deployments.

The remaining pages cover tuning. One sets the SQL compatibility level to match the server version. The performance guide covers data access, table keys, bulk inserts, queries and monitoring tools. Other pages cover managing index usage per company, using table partitioning and data compression, and configuring read scale-out with read-only replicas.

A good starting point is the installation considerations page, then the compatibility level page. The performance guide is the overview for tuning, and the other pages go deeper on single techniques.

## Key points

- Installation considerations cover disk partitioning, virus scanning, memory, TempDB, full-text search, MAXDOP, statistics and high availability.
- Set the database compatibility level to match the server: 140 for SQL Server 2017, 130 for SQL Server 2016, to enable the latest optimization features.
- Index usage can be managed per company: view usage statistics and storage size, and turn indexes on or off, including off for all companies.
- Disabling nonessential indexes can improve write performance and reduce storage costs. Unique indexes and primary keys cannot be disabled.
- Table partitioning and data compression are supported for on-premises databases to improve manageability, query performance and storage use. The CompressionType property is involved.
- Read scale-out uses read-only replicas. Enabling it needs support checks on Azure SQL Database or SQL Server and server instance configuration.
- The performance guide covers compatibility level, data access, table keys, bulk inserts, query hints and monitoring tools.

## Learn pages

- [Configuring a Database for Read Scale-Out](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/database-read-scale-out-configuration): Get tips for how to make your on-premises database ready for read scale-out.
- [Installation considerations for Microsoft SQL Server and Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/installation-considerations-for-microsoft-sql-server): Learn about the requirements for installing and configuring Microsoft SQL Server to work with Business Central.
- [Manage database index usage](https://learn.microsoft.com/dynamics365/business-central/manage-indexes): Learn how to manage database indexes in Business Central to optimize performance, reduce storage costs, and improve write operations with enhanced tools.
- [Optimizing SQL Server Performance with Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/optimize-sql-server-performance): Describes how to optimize performance when accessing data from the SQL Server database.
- [Setting SQL Compatibility Level to Optimize Database Performance](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/optimize-sql-set-compatibility-level): Enable query optimizer features in a database by setting the compatibility level
- [Using Table Partitioning and Data Compression](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/using-sql-partitioning-and-compression): Learn how to use table partitioning and data compression to improve data access performance in Business Central online.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [Dynamics 365 Business Central on-premises and SQL Server 2025.](../../../../posts/demiliani-com/12820.md) (community post): "SQL Server 2025 introduces significant improvements for Dynamics 365 Business Central on-premises"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 8700 "Table Information"](../../../../objects/page/8700.md)
- [Page 8705 "Table Information Card"](../../../../objects/page/8705.md) · captioned "Index Management"
- [Page 9521 "Database Missing Indexes"](../../../../objects/page/9521.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
