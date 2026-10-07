---
id: topic/dev-itpro/development/rules-guidelines-and-best-practices/best-practices/performance
type: topic
title: Performance
summary: "Performance best practices for Business Central development: how to troubleshoot a performance problem (measure, locate the bottleneck, eliminate it) and which diagnostic tools to use, plus performance guidance for AL developers on pages, web services, reports, AL code, data access and testing."
tier: official
language: en
system: platform
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T01:17:01.427Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 96dedaea327617142e33a2bd70a4837313687fe12178cb0fa9c5db729cc55657
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/performance/performance-work-perf-problem
    title: How to work with a performance problem
    date: "2026-09-18"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/performance/performance-developer
    title: Performance Articles for AL Developers
    date: "2026-09-18"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/performance/performance-work-perf-problem
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/performance/performance-developer
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development/rules-guidelines-and-best-practices/best-practices
  localizations: []
  videos:
    - video/-_TaZY2Clh0
    - video/1xdpUmeun-s
    - video/lpwDSdEJrIQ
    - video/qABlX4AL3GM
  posts:
    - post/aardvarklabs-blog/3761
    - post/demiliani-com/14031
    - post/duiliotacconi-com/1850
    - post/duiliotacconi-com/1894
    - post/duiliotacconi-com/2149
    - post/mohana-blog/tag:blogger.com,1999:blog-1492436440038408053.post-483274250682537951
    - post/stefanmaron-com/https://stefanmaron.com/posts/bc-background-processing-make-it-feel-fast/
  guidelines: []
learn_toc_path:
  - Development
  - Rules, guidelines, and best practices
  - Best practices
  - Performance
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development/rules-guidelines-and-best-practices/best-practices
children: []
coverage:
  learn: 2
  code: 0
  video: 4
  blog: 7
  guideline: 0
bc_forms: []
member_hash: 87e0401ecfb45548d0ce9048fe69d8ae348b7da98d89e7045ac6d9370b225de2
narrative: generated
---

# Performance

> Performance best practices for Business Central development: how to troubleshoot a performance problem (measure, locate the bottleneck, eliminate it) and which diagnostic tools to use, plus performance guidance for AL developers on pages, web services, reports, AL code, data access and testing.

Path: [Development](../../../development.md) > [Rules, guidelines, and best practices](../../rules-guidelines-and-best-practices.md) > [Best practices](../best-practices.md) > Performance · tier official · system platform · **unreviewed** (machine-generated narrative)

## Overview

This section is about finding and fixing performance problems in Business Central and about writing AL code that performs well from the start. It has two pages and no subtopics.

"How to work with a performance problem" describes the troubleshooting process: measure, locate the bottleneck, eliminate it. It also lists the diagnostic tools: the scheduled performance profiler, the in-client Performance Profiler, the AL Profiler, telemetry with Azure Application Insights, database missing indexes and database wait statistics.

"Performance Articles for AL Developers" collects guidance for developers on efficient page design, web services, reports, AL coding patterns, data access optimization and testing. Start with the troubleshooting page when you have a slow scenario to analyze. Use the AL developer articles when designing or reviewing code.

## Key points

- The recommended approach to a performance problem is to measure, locate the bottleneck, then eliminate it.
- Profiling tools covered: scheduled performance profiler, in-client Performance Profiler and AL Profiler.
- Telemetry with Azure Application Insights is one of the diagnostic sources.
- Database-level analysis uses Database Missing Indexes and Database Wait Statistics.
- AL developer guidance covers page background tasks, Edit-in-Excel performance, query object optimization and partial records.
- Developers can also find guidance on table extension impact analysis and event subscription performance.
- The AL developer articles reference 2021 release wave 2, 2023 release wave 1 and 2023 release wave 2.
- Topics span pages, web services, reports, AL coding patterns, data access and testing strategies.

## Learn pages

- [How to work with a performance problem](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/performance/performance-work-perf-problem): Troubleshooting process that can help to guide you to find the root cause slow performance.
- [Performance Articles for AL Developers](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/performance/performance-developer): Learn how to write efficient AL code, pages, reports, and web services, and use tools like the AL Profiler to improve performance in Business Central.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [Optimizing Business Central Indexes for Performance with Copilot](../../../../../posts/aardvarklabs-blog/3761.md) (community post): "Benchmark system performance before and after applying indexes"
- [Dynamics 365 Business Central: AL transaction isolation levels and cache usage.](../../../../../posts/demiliani-com/14031.md) (community post): "higher isolation levels bypassing the cache on every read"
- [Rec.Truncate in AL](../../../../../posts/duiliotacconi-com/1850.md) (community post): "It works best when deleting 50-60% or more of a table's content"
- [FlowFields with same filters and table in a single OUTER APPLY](../../../../../posts/duiliotacconi-com/1894.md) (community post): "reducing SQL queries and improving query performance"
- [Partial Record vs NST Caching : the strange case of Calculate Low Level Code](../../../../../posts/duiliotacconi-com/2149.md) (community post): "SetLoadFields prevents NST caching for partial records, causing repeated SQL queries"
- [BC 29 lets a single index span base table and table extension fields](../../../../../posts/mohana-blog/tag:blogger.com,1999:blog-1492436440038408053.post-483274250682537951.md) (community post): "Developers must still consider the 40-key-per-table limit and write performance costs when adding new indexes"
- [If You Can't Make It Fast, Make It Feel Fast](../../../../../posts/stefanmaron-com/https://stefanmaron.com/posts/bc-background-processing-make-it-feel-fast/.md) (community post): "User perception matters as much as actual performance"
- [Concurrency in Business Central: Parallel processes without deadlocks and timeouts](../../../../../videos/-_TaZY2Clh0.md) (video): "Concurrency in Business Central: Parallel processes without deadlocks"
- [Business Central Under the Hood episode 12: Evolving AL for Performance](../../../../../videos/1xdpUmeun-s.md) (video): "performance optimization; data transfer; set load fields; read isolation"
- [Business Central Under the Hood episode 5: How To Make Your AL Code Super Fast](../../../../../videos/lpwDSdEJrIQ.md) (video): "AL code performance; database optimization; sql queries; indexing; caching"
- [Business Central 29.0: Major Change to Table Extensions & SQL.](../../../../../videos/qABlX4AL3GM.md) (video): "Partial record loading with set load field; Avoid direct SQL operations; Compiler warnings"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
