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
  at: "2026-10-06T13:43:32.763Z"
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
  videos: []
  posts: []
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
  video: 0
  blog: 0
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

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
