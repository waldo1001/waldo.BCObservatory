---
id: topic/dev-itpro/development/rules-guidelines-and-best-practices/best-practices/performance
type: topic
title: Performance
summary: "Performance best practices for Business Central development: how to troubleshoot a performance problem (measure, locate the bottleneck, eliminate it) and which diagnostic tools to use, plus performance guidance for AL developers on pages, web services, reports, AL code, data access and testing."
tier: official
language: en
system: platform
review:
  state: reviewed
  by: opus
  at: "2026-10-07T05:23:21.103Z"
  flags: []
generated:
  at: "2026-10-08T06:31:25.130Z"
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
  posts:
    - post/demiliani-com/11962
    - post/demiliani-com/12267
    - post/demiliani-com/12836
    - post/demiliani-com/14031
    - post/demiliani-com/15968
    - post/duiliotacconi-com/1717
    - post/duiliotacconi-com/1786
    - post/duiliotacconi-com/1850
    - post/duiliotacconi-com/2149
    - post/mohana-blog/tag-blogger-com-1999-blog-1492436440038408053-post-483274250682537951--01a78739b7
    - post/stefanmaron-com/https-stefanmaron-com-posts-bc-background-processing-make-it-feel-fast--2f2ea5c72a
    - post/stefanmaron-com/https-stefanmaron-com-posts-modify-deserves-the-same-rule-as-validate--71cb43acff
    - post/stefanmaron-com/https-stefanmaron-com-posts-planning-table-indexes-bc-performance--d30e727e97
  guidelines: []
  changes:
    - change/bcquality/134
    - change/bcquality/135
    - change/bcquality/148
    - change/bcquality/161
    - change/bcquality/198
    - change/bcquality/205
    - change/bcquality/215
    - change/bcquality/94
    - change/bcquality/97
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
  video: 3
  blog: 13
  guideline: 0
bc_forms: []
member_hash: 87e0401ecfb45548d0ce9048fe69d8ae348b7da98d89e7045ac6d9370b225de2
narrative: generated
---

# Performance

> Performance best practices for Business Central development: how to troubleshoot a performance problem (measure, locate the bottleneck, eliminate it) and which diagnostic tools to use, plus performance guidance for AL developers on pages, web services, reports, AL code, data access and testing.

Path: [Development](../../../development.md) > [Rules, guidelines, and best practices](../../rules-guidelines-and-best-practices.md) > [Best practices](../best-practices.md) > Performance · tier official · system platform · narrative reviewed (checked by Opus)

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

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#134 knowledge(performance): add community rules for performance](../../../../../changes/bcquality/134.md) (code change): "16 community performance rules for Business Central to BCQuality"
- [#135 Correct severe misconception about SetCurrentKey in the knowledge base](../../../../../changes/bcquality/135.md) (code change): "SetCurrentKey generates ORDER BY clauses, not SQL index hints"
- [#148 Add Job Queue reliability and scheduling guidance](../../../../../changes/bcquality/148.md) (code change): "reliability and scheduling practices for Job Queue and Task Scheduler workloads"
- [#161 AL methods limited during write transactions (RunModal, Codeunit.Run)](../../../../../changes/bcquality/161.md) (code change): "New performance guidance documents platform restrictions on calling RunModal"
- [#198 Add BC performance knowledge from OptimAL learnings](../../../../../changes/bcquality/198.md) (code change): "Six new articles on workload-based keys, overlapping indexes, buffered inserts"
- [#205 Preserve business filters when recommending Record.Get](../../../../../changes/bcquality/205.md) (code change): "Preserve business filters when recommending Record.Get. The performance guidance for replacing"
- [#215 knowledge(performance): grouped query (Count + ColumnFilter = HAVING) for distinct values and duplicates](../../../../../changes/bcquality/215.md) (code change): "use query objects with grouped methods and column filters to detect duplicate values"
- [#94 Correct performance knowledge guidance](../../../../../changes/bcquality/94.md) (code change): "Several performance knowledge articles and their samples were corrected for partial records, transactions"
- [#97 Add per-row AL performance guidance](../../../../../changes/bcquality/97.md) (code change): "New performance guidance documents how to use SetAutoCalcFields for per-row FlowFields"
- [Dynamics 365 Business Central: compressing API responses at max.](../../../../../posts/demiliani-com/11962.md) (community post): "Brotli significantly decreases bandwidth usage and transfer times for high-volume API calls"
- [Dynamics 365 Business Central: finally we’ll have TRUNCATE table in SaaS.](../../../../../posts/demiliani-com/12267.md) (community post): "efficient bulk deletion of table rows in SaaS environments"
- [Dynamics 365 Business Central: use sequential GUIDs when possible.](../../../../../posts/demiliani-com/12836.md) (community post): "Performance benchmarks showed 42% improvement on inserts and 31% on updates"
- [Dynamics 365 Business Central: AL transaction isolation levels and cache usage.](../../../../../posts/demiliani-com/14031.md) (community post): "Record.ReadIsolation sets the isolation level for reads on a specific record instance"
- [Dynamics 365 Business Central: AL Query objects and the new ReadState property.](../../../../../posts/demiliani-com/15968.md) (community post): "ReadState property lets developers specify transaction isolation levels for individual queries"
- [LockTimeoutDuration in AL](../../../../../posts/duiliotacconi-com/1717.md) (community post): "lock timeout values are limited to a maximum of 1.71 million milliseconds"
- [Guid.CreateSequentialGuid in AL](../../../../../posts/duiliotacconi-com/1786.md) (community post): "reducing index fragmentation and improving performance for GUID-based keys"
- [Rec.Truncate in AL](../../../../../posts/duiliotacconi-com/1850.md) (community post): "Truncating a whole table without filters is far faster than DeleteAll"
- [Partial Record vs NST Caching : the strange case of Calculate Low Level Code](../../../../../posts/duiliotacconi-com/2149.md) (community post): "performance regressions when combined with NST caching in Business Central"
- [BC 29 lets a single index span base table and table extension fields](../../../../../posts/mohana-blog/tag-blogger-com-1999-blog-1492436440038408053-post-483274250682537951--01a78739b7.md) (community post): "Developers must still consider the 40-key-per-table limit and write performance costs when adding new indexes"
- [If You Can't Make It Fast, Make It Feel Fast](../../../../../posts/stefanmaron-com/https-stefanmaron-com-posts-bc-background-processing-make-it-feel-fast--2f2ea5c72a.md) (community post): "making users wait for work that needs no input from them is a design choice"
- [I Can Turn Off My Code. I Can't Turn Off Yours.](../../../../../posts/stefanmaron-com/https-stefanmaron-com-posts-modify-deserves-the-same-rule-as-validate--71cb43acff.md) (community post): "developers set RunTrigger to false on Insert, Modify, or DeleteAll, they silently disable all subscribers"
- [Planning Table Indexes for the Best Performance](../../../../../posts/stefanmaron-com/https-stefanmaron-com-posts-planning-table-indexes-bc-performance--d30e727e97.md) (community post): "Every added index increases insert or update time by 10-20%"
- [Concurrency in Business Central: Parallel processes without deadlocks and timeouts](../../../../../videos/-_TaZY2Clh0.md) (video): "Concurrency in Business Central: Parallel processes without deadlocks and timeouts"
- [Business Central Under the Hood episode 12: Evolving AL for Performance](../../../../../videos/1xdpUmeun-s.md) (video): "Evolving AL for Performance optimization data transfer set load fields"
- [Business Central Under the Hood episode 5: How To Make Your AL Code Super Fast](../../../../../videos/lpwDSdEJrIQ.md) (video): "al code performance; database optimization; sql queries; indexing; caching"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
