---
id: topic/dev-itpro/business-central-on-premises/administration/analyzing-database-performance
type: topic
title: Analyzing database performance
summary: Analyzing database performance for Business Central on-premises covers how to find and troubleshoot slow SQL queries. It answers questions about the SqlLongRunningThreshold setting, reading long-running queries in the Event Log, and using SQL Server Query Store.
tier: official
language: en
system: platform
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:28:03.176Z"
  flags: []
generated:
  at: "2026-10-25T17:55:54.196Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: e4d1b33d7657fd836091df7826ff9ad8e60ad19491ee11376ab51e2eebb068e7
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/monitor-long-running-sql-queries-event-log
    title: Monitoring Long Running SQL Queries to the Event Log
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/troubleshoot-query-performance-using-query-store
    title: "Troubleshooting: Using Query Store to Monitor Query Performance"
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/troubleshoot-long-running-queries-using-event-log
    title: Using Event Log to Monitor Long Running SQL Queries
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/monitor-long-running-sql-queries-event-log
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/troubleshoot-query-performance-using-query-store
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/troubleshoot-long-running-queries-using-event-log
  objects: []
  features: []
  topics:
    - topic/dev-itpro/business-central-on-premises/administration
  localizations: []
  videos:
    - video/IAacWsvav1E
    - video/snVsG69X-kw
  posts:
    - post/aardvarklabs-blog/3761
    - post/dvlprlife-com/https-www-dvlprlife-com-2026-06-weekly-review-business-central-al-development-may-24-30-2026--fa7b3b0afa
    - post/sauravdhyani-com/tag-blogger-com-1999-blog-3122193036149030463-post-3728891053687741480--7cb5bca9a9
    - post/sauravdhyani-com/tag-blogger-com-1999-blog-3122193036149030463-post-4052415603111434126--e2c225526c
  guidelines: []
learn_toc_path:
  - Business Central on-premises
  - Administration
  - Analyzing database performance
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/business-central-on-premises/administration
children: []
coverage:
  learn: 3
  code: 0
  video: 2
  blog: 4
  guideline: 0
bc_forms: []
member_hash: 058bea00d9eccf8163bca3e01c4821b017c920fc8cb8f73c78958b8eb65a9717
narrative: generated
---

# Analyzing database performance

> Analyzing database performance for Business Central on-premises covers how to find and troubleshoot slow SQL queries. It answers questions about the SqlLongRunningThreshold setting, reading long-running queries in the Event Log, and using SQL Server Query Store.

Path: [Business Central on-premises](../../business-central-on-premises.md) > [Administration](../administration.md) > Analyzing database performance · tier official · system platform · narrative reviewed (checked by Opus)

## Overview

This section is about finding slow database queries in Business Central on-premises. It offers two approaches: logging long-running SQL queries from the Business Central server, and using Query Store on SQL Server or Azure SQL Database.

Start with the pages on long-running queries. One explains how to set the SqlLongRunningThreshold on the server (with the Set-NAVServerConfiguration cmdlet) so that queries over the threshold are logged. The other explains how to read those entries in Event Viewer and use the AL call stack to pick queries to optimize. The Query Store page is for deeper troubleshooting with query history, runtime statistics and query plan tracking.

## Key points

- SqlLongRunningThreshold on the Business Central server defines when a SQL query counts as slow.
- The threshold is configured with the Set-NAVServerConfiguration cmdlet.
- Long-running queries are written to the Event Log and can be viewed in Event Viewer.
- Analyzing slow queries together with their AL call stacks helps find the code to optimize.
- Application Insights is also covered alongside the Event Log for monitoring long-running SQL queries.
- Query Store works with Business Central on SQL Server or Azure SQL Database.
- Query Store provides query history, runtime statistics and query plan tracking for troubleshooting.

## Learn pages

- [Monitoring Long Running SQL Queries to the Event Log](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/monitor-long-running-sql-queries-event-log): This topic provides an overview on how to monitor long running SQL queries in the event log starting with NAV 2017.
  - Long running SQL query threshold is controlled by SqlLongRunningThreshold setting with default value of 1000 milliseconds.
  - Query running longer than threshold triggers message in event log and telemetry emission indicating action took longer than expected.
  - Step: Change SqlLongRunningThreshold dynamically without restart using Set-NAVServerConfiguration with -ApplyTo Memory parameter.
  - Query delay can result from database waiting for locks or missing indexes on operations.
  - Monitor long running queries using Windows Event Log or Application Insights for telemetry analysis.
- [Troubleshooting: Using Query Store to Monitor Query Performance](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/troubleshoot-query-performance-using-query-store): Use SQL Server Query Store to troubleshoot query performance. SQL Server Query Store feature provides insight on database query plan choice and performance.
  - SQL Server Query Store captures history of queries, plans, and runtime statistics.
  - Status: Query Store available in SQL Server 2016 and later and Azure SQL Database.
  - Tracks executions, average execution time, physical IO reads, and row counts per query.
  - Helps identify performance differences caused by query plan changes over time.
  - Simplifies troubleshooting by providing history of queries executed on database.
- [Using Event Log to Monitor Long Running SQL Queries](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/troubleshoot-long-running-queries-using-event-log): Shows how to monitor long running SQL queries in Event Viewer. Use the information determine SQL queries that are good candidates for optimization.
  - Event Viewer Application window displays SQL queries exceeding SqlLongRunningThreshold as warnings.
  - Default SqlLongRunningThreshold is 1000 milliseconds for identifying slow queries.
  - Long running queries with explicit AL code include AL call stack showing generated SQL.
  - AL call stack identifies specific AL method and line causing slow query execution.
  - Limit: Queries from triggers without code or GetPage calls do not include AL call stack.
  - Threshold can be set to different value without restarting server instance.

Key facts from Microsoft Learn (CC BY 4.0), in our own words (D106); open the page for the full text.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [Optimizing Business Central Indexes for Performance with Copilot](../../../../posts/aardvarklabs-blog/3761.md) (community post): "export the Database Missing Indexes table to Excel"
- [Weekly Review: Business Central AL Development – May 24–30, 2026](../../../../posts/dvlprlife-com/https-www-dvlprlife-com-2026-06-weekly-review-business-central-al-development-may-24-30-2026--fa7b3b0afa.md) (community post): "Index Management page uses SQL DMV queries to help decide which indexes to disable"
- [Business Central 2026 Release Wave 2: Turn SIFT Indexes On or Off](../../../../posts/sauravdhyani-com/tag-blogger-com-1999-blog-3122193036149030463-post-3728891053687741480--7cb5bca9a9.md) (community post): "SIFT indexes maintain pre-calculated aggregate information using SQL indexed views"
- [Manage Database Index Usage in Business Central.](../../../../posts/sauravdhyani-com/tag-blogger-com-1999-blog-3122193036149030463-post-4052415603111434126--e2c225526c.md) (community post): "manage database indexes directly from the client without SQL access"
- [What's New: Enhanced Index Management (2026 release wave 1)](../../../../videos/IAacWsvav1E.md) (video): "index management; database performance; storage optimization"
- [Business Central Under the Hood episode 3: How Many Users Can Business Central Handle in the Cloud?](../../../../videos/snVsG69X-kw.md) (video): "Database locks page; Database missing indexes page"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
