---
id: topic/dev-itpro/business-central-on-premises/administration/analyzing-database-performance
type: topic
title: Analyzing database performance
summary: Analyzing database performance for Business Central on-premises covers how to find slow SQL queries using the Windows event log, Application Insights thresholds, and the SQL Server Query Store. It answers questions about configuring long-running query thresholds, reading the logged events, and comparing query plans.
tier: official
language: en
system: platform
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-20T01:01:32.224Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 4a82fb1b0a33de92f7e01f4a32958dd5d0928b4d46704e1b4575908aacccaf16
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/monitor-long-running-sql-queries-event-log
    title: Monitoring Long-Running SQL Queries in the Event Log
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/troubleshoot-query-performance-using-query-store
    title: "Troubleshooting: Using Query Store to Monitor Query Performance"
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/troubleshoot-long-running-queries-using-event-log
    title: Using Event Log to Monitor Long-Running SQL Queries
    date: "2026-11-17"
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
    - post/dvlprlife-com/https-www-dvlprlife-com-2026-06-weekly-review-business-central-al-development-may-24-30-2026--fa7b3b0afa
    - post/sauravdhyani-com/tag-blogger-com-1999-blog-3122193036149030463-post-3728891053687741480--7cb5bca9a9
    - post/sauravdhyani-com/tag-blogger-com-1999-blog-3122193036149030463-post-4052415603111434126--e2c225526c
    - post/yzhums-com/71379
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

> Analyzing database performance for Business Central on-premises covers how to find slow SQL queries using the Windows event log, Application Insights thresholds, and the SQL Server Query Store. It answers questions about configuring long-running query thresholds, reading the logged events, and comparing query plans.

Path: [Business Central on-premises](../../business-central-on-premises.md) > [Administration](../administration.md) > Analyzing database performance · tier official · system platform · narrative **unreviewed** (model text not yet checked)

## Overview

This section helps administrators of Business Central on-premises find and investigate slow database queries. It has three pages and no subtopics. Two pages deal with long-running query logging on Business Central Server, and one deals with the SQL Server Query Store.

Start with the pages on long-running SQL queries. They explain how the SqlLongRunningThreshold setting makes the server log queries that exceed a threshold. You can read these entries in Windows Event Viewer, under Windows Logs or Applications and Services Logs. The entries include AL call stack information, which helps you find the code behind a slow query. A separate setting, SqlLongRunningThresholdForApplicationInsights, sets the threshold for sending the same kind of data to Application Insights telemetry. You change both with the Set-NAVServerConfiguration cmdlet.

Use the Query Store page when you need to look at SQL Server itself. Query Store keeps query history, plans, and runtime statistics. You can use it to spot query plan changes and compare performance between periods.

## Key points

- SqlLongRunningThreshold sets the threshold above which Business Central Server logs a SQL query as long-running.
- SqlLongRunningThresholdForApplicationInsights sets the threshold for sending long-running query data to Application Insights.
- Both settings are configured with the Set-NAVServerConfiguration cmdlet. The page that covers them mentions version 29.
- Logged long-running queries can be read in Windows Event Viewer, under Windows Logs or Applications and Services Logs.
- Event entries include AL call stack information, which helps identify queries that are candidates for optimization.
- Query Store is a SQL Server feature that captures query history, plans, and runtime statistics.
- Query Store helps find query plan changes and compare performance differences when troubleshooting.

## Learn pages

- [Monitoring Long-Running SQL Queries in the Event Log](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/monitor-long-running-sql-queries-event-log): Monitor long-running SQL queries from Business Central Server in the Windows event log and Application Insights to investigate slow database operations.
  - Long-running SQL query time is measured as time spent on the database as seen from the server
  - SqlLongRunningThreshold configuration setting controls when successful SQL queries are logged as long-running
  - In version 29, the default SqlLongRunningThreshold value is 750 milliseconds
  - SqlLongRunningThresholdForApplicationInsights separately controls the Application Insights telemetry threshold
  - Step: Change SqlLongRunningThreshold setting dynamically without server restart using Set-NAVServerConfiguration with ApplyTo Memory parameter
- [Troubleshooting: Using Query Store to Monitor Query Performance](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/troubleshoot-query-performance-using-query-store): Use SQL Server Query Store to troubleshoot query performance. The SQL Server Query Store feature provides insight on database query plan choice and performance.
  - SQL Server Query Store captures history of queries, plans, and runtime statistics.
  - Status: Query Store available in SQL Server 2016 and later and Azure SQL Database.
  - Tracks executions, average execution time, physical IO reads, and row counts per query.
  - Helps identify performance differences caused by query plan changes over time.
  - Simplifies troubleshooting by providing history of queries executed on database.
- [Using Event Log to Monitor Long-Running SQL Queries](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/troubleshoot-long-running-queries-using-event-log): Use Windows Event Viewer to investigate long-running SQL queries in Business Central and inspect SQL statements and AL call stacks for optimization.
  - Event Viewer Application window displays SQL queries exceeding SqlLongRunningThreshold as warnings.
  - Default SqlLongRunningThreshold is 1000 milliseconds for identifying slow queries.
  - Long running queries with explicit AL code include AL call stack showing generated SQL.
  - AL call stack identifies specific AL method and line causing slow query execution.
  - Limit: Queries from triggers without code or GetPage calls do not include AL call stack.
  - Threshold can be set to different value without restarting server instance.

Key facts from Microsoft Learn (CC BY 4.0), in our own words (D106); open the page for the full text.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [Weekly Review: Business Central AL Development – May 24–30, 2026](../../../../posts/dvlprlife-com/https-www-dvlprlife-com-2026-06-weekly-review-business-central-al-development-may-24-30-2026--fa7b3b0afa.md) (community post): "Index Management page uses SQL DMV queries to help decide which indexes to disable"
- [Business Central 2026 Release Wave 2: Turn SIFT Indexes On or Off](../../../../posts/sauravdhyani-com/tag-blogger-com-1999-blog-3122193036149030463-post-3728891053687741480--7cb5bca9a9.md) (community post): "SIFT indexes maintain pre-calculated aggregate information using SQL indexed views"
- [Manage Database Index Usage in Business Central.](../../../../posts/sauravdhyani-com/tag-blogger-com-1999-blog-3122193036149030463-post-4052415603111434126--e2c225526c.md) (community post): "manage database indexes directly from the client without SQL access"
- [Business Central 2026 release wave 1 (BC28): Manage database index usage and cost per company (View index and Turn off indexes)](../../../../posts/yzhums-com/71379.md) (community post): "view database index details in the UI and selectively disable non-unique indexes"
- [What's New: Enhanced Index Management (2026 release wave 1)](../../../../videos/IAacWsvav1E.md) (video): "index management; database performance; storage optimization"
- [Business Central Under the Hood episode 3: How Many Users Can Business Central Handle in the Cloud?](../../../../videos/snVsG69X-kw.md) (video): "Database locks page; Database missing indexes page"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
