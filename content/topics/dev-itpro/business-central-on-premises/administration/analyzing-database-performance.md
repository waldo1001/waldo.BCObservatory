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
  at: "2026-10-07T02:32:59.251Z"
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
  videos: []
  posts:
    - post/sauravdhyani-com/tag:blogger.com,1999:blog-3122193036149030463.post-4052415603111434126
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
  video: 0
  blog: 1
  guideline: 0
bc_forms: []
member_hash: 058bea00d9eccf8163bca3e01c4821b017c920fc8cb8f73c78958b8eb65a9717
narrative: generated
---

# Analyzing database performance

> Analyzing database performance for Business Central on-premises covers how to find and troubleshoot slow SQL queries. It answers questions about the SqlLongRunningThreshold setting, reading long-running queries in the Event Log, and using SQL Server Query Store.

Path: [Business Central on-premises](../../business-central-on-premises.md) > [Administration](../administration.md) > Analyzing database performance · tier official · system platform · narrative reviewed by Opus

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
- [Troubleshooting: Using Query Store to Monitor Query Performance](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/troubleshoot-query-performance-using-query-store): Use SQL Server Query Store to troubleshoot query performance. SQL Server Query Store feature provides insight on database query plan choice and performance.
- [Using Event Log to Monitor Long Running SQL Queries](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/troubleshoot-long-running-queries-using-event-log): Shows how to monitor long running SQL queries in Event Viewer. Use the information determine SQL queries that are good candidates for optimization.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [Manage Database Index Usage in Business Central.](../../../../posts/sauravdhyani-com/tag:blogger.com,1999:blog-3122193036149030463.post-4052415603111434126.md) (community post): "manage database indexes directly from the client without SQL access"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
