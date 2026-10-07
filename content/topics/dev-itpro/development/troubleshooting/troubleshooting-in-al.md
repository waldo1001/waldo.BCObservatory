---
id: topic/dev-itpro/development/troubleshooting/troubleshooting-in-al
type: topic
title: Troubleshooting in AL
summary: "Troubleshooting in AL covers tools and guidance for finding errors and performance problems in Business Central extensions: the AL debugger, snapshot debugging, AL Profiler, Page Inspection, AL performance articles, and printing troubleshooting. It answers how-to questions about debugging, profiling and diagnosing slow code or printer errors."
tier: official
language: en
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:23:30.195Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 90c8eeacc22289091a4f5ab57dc847d73e8ab6be827f631dc12f0b6c409743e0
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-profiler-overview
    title: AL Profiler overview
    date: "2025-09-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-debugging
    title: Debugging in AL
    date: "2025-08-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-inspecting-pages
    title: Inspecting pages
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
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-snapshot-debugging
    title: Snapshot debugging
    date: "2026-08-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-reports-troubleshoot-printing
    title: Troubleshooting Printing
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-profiler-overview
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-debugging
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-inspecting-pages
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/performance/performance-developer
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-snapshot-debugging
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-reports-troubleshoot-printing
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development/troubleshooting
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Development
  - Troubleshooting
  - Troubleshooting in AL
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development/troubleshooting
children: []
coverage:
  learn: 6
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 9da1fe15b2f204fe13ee3995e8174dab30aa920160aa61853ce3b3395b01e924
narrative: generated
---

# Troubleshooting in AL

> Troubleshooting in AL covers tools and guidance for finding errors and performance problems in Business Central extensions: the AL debugger, snapshot debugging, AL Profiler, Page Inspection, AL performance articles, and printing troubleshooting. It answers how-to questions about debugging, profiling and diagnosing slow code or printer errors.

Path: [Development](../../development.md) > [Troubleshooting](../troubleshooting.md) > Troubleshooting in AL · tier official · system development · narrative reviewed by Opus

## Overview

This section brings together the tools a developer uses to find and fix problems in AL code. Debugging in AL covers the Visual Studio Code debugger, breakpoints and database inspection. Snapshot debugging records execution on a production cloud server so it can be inspected offline. Page Inspection shows page structure, source tables, extensions and filters in the web client.

For performance, the AL Profiler records code execution in instrumentation or sampling mode to locate hot spots. The performance articles for AL developers add guidance on page design, web services, reports, coding patterns, data access and testing. A separate page covers printing problems, including payload checks and the Windows Event Log.

Start with Debugging in AL for functional errors, or with AL Profiler overview and the performance articles for slow processes. Use Page Inspection when you need to understand a page without reading code, and Snapshot debugging when the problem only occurs in production.

## Key points

- Debugging in AL uses the Visual Studio Code debugger with conditional breakpoints, break on errors, break on record changes, SQL debugging, database locks inspection and web service debugging.
- Snapshot debugging records a specified user session on a production cloud server. Snappoints log variable state without stopping execution, and you debug the snapshot offline in VS Code. The page mentions versions 17.2 and 18.1.
- AL Profiler offers instrumentation and sampling modes, SQL call tracking, call stack views, CodeLens integration and in-client profiling. The page mentions 2025 release wave 2.
- Page Inspection in the web client shows page structure, source table and fields, extensions and filters without examining code. The page mentions 2023 release wave 2.
- Performance articles cover page background tasks, Edit-in-Excel, query objects, partial records, table extension impact and event subscription performance.
- Troubleshooting Printing explains how to resolve printer and report payload errors, read the Windows Event Log, and test printers using the Printers system table.

## Learn pages

- [AL Profiler overview](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-profiler-overview): Description of how to use the AL profiler and the Performance Profiler to analyze performance in code written for Business Central.
- [Debugging in AL](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-debugging): Debugging in AL with Visual Studio Code and the AL Language extension.
- [Inspecting pages](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-inspecting-pages): Learn about the structure of a page and its' underlying data.
- [Performance Articles for AL Developers](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/performance/performance-developer): Learn how to write efficient AL code, pages, reports, and web services, and use tools like the AL Profiler to improve performance in Business Central.
- [Snapshot debugging](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-snapshot-debugging): Overview of how snapshot debugging allows recording running AL code for Business Central.
- [Troubleshooting Printing](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-reports-troubleshoot-printing): Dynamics 365 Business Central supports different types of events including BusinessEvent, IntegrationEvent, Global, and trigger events.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
