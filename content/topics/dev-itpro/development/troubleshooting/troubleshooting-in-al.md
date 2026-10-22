---
id: topic/dev-itpro/development/troubleshooting/troubleshooting-in-al
type: topic
title: Troubleshooting in AL
summary: "Troubleshooting in AL covers tools and guidance for finding and fixing problems in Business Central extensions: the AL Profiler, VS Code debugging, snapshot debugging, Page Inspection, performance articles, and printing troubleshooting. It answers questions on diagnosing slow code, debugging errors, and inspecting pages."
tier: official
language: en
system: development
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-22T01:12:33.102Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: de5753d4db57f900f30be94414c09d536f65078a6546a86a4e7c6e025efcced9
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-profiler-overview
    title: Analyze AL Performance with the AL Profiler
    date: "2026-10-07"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-debugging
    title: Debug AL Code in Visual Studio Code
    date: "2026-10-07"
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

> Troubleshooting in AL covers tools and guidance for finding and fixing problems in Business Central extensions: the AL Profiler, VS Code debugging, snapshot debugging, Page Inspection, performance articles, and printing troubleshooting. It answers questions on diagnosing slow code, debugging errors, and inspecting pages.

Path: [Development](../../development.md) > [Troubleshooting](../troubleshooting.md) > Troubleshooting in AL · tier official · system development · narrative **unreviewed** (model text not yet checked)

## Overview

This section groups the tools an AL developer uses to diagnose problems. Debugging in Visual Studio Code handles functional errors with breakpoints, conditional breakpoints, break on errors and record changes, and SQL behavior inspection. Snapshot debugging extends this to production cloud servers by recording a user session and replaying it offline.

For performance, the AL Profiler records execution in instrumentation or sampling mode and shows call stacks, timings, and SQL calls. The performance articles for AL developers add guidance on page design, web services, reports, AL patterns, data access, and testing. Page Inspection in the web client shows page structure, source tables, extensions, and filters without reading code.

Start with Debug AL Code for general errors, the AL Profiler for slow code, and Page Inspection to understand an unfamiliar page. Use Troubleshooting Printing when printer or report payload errors occur.

## Key points

- The AL Profiler has instrumentation and sampling modes, configured in launch.json and viewed in VS Code.
- Profiler output includes top-down and bottom-up call stack views, SQL call tracking, CodeLens inline timings, and a Performance Profiler page.
- VS Code debugging supports breakpoints, conditional breakpoints, break on errors, break on record changes, and attach and debug next.
- Snapshot debugging records AL execution on production cloud servers for a specified user session and uses snappoints that log variables without stopping execution.
- Snapshot debugging can debug built-in codeunit triggers and has verbosity control; the input lists versions 17.2 and 18.1.
- Page Inspection shows page structure, source table fields, extensions, and filters in the web client (2023 release wave 2).
- Performance articles cover page background tasks, Edit-in-Excel, query objects, partial records, table extension impact, and event subscriptions.
- Troubleshooting Printing explains how to validate printer payloads, read the Windows Event Log, and test printers using the Printers system table.

## Learn pages

- [Analyze AL Performance with the AL Profiler](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-profiler-overview): Use instrumentation or sampling with the AL Profiler to analyze AL execution, SQL activity, call stacks, and performance hot spots.
- [Debug AL Code in Visual Studio Code](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-debugging): Debug AL code in Visual Studio Code by using breakpoints, attach sessions, record-write breaks, SQL statistics, and debugger settings.
- [Inspecting pages](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-inspecting-pages): Learn about the structure of a page and its' underlying data.
- [Performance Articles for AL Developers](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/performance/performance-developer): Learn how to write efficient AL code, pages, reports, and web services, and use tools like the AL Profiler to improve performance in Business Central.
- [Snapshot debugging](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-snapshot-debugging): Overview of how snapshot debugging allows recording running AL code for Business Central.
- [Troubleshooting Printing](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-reports-troubleshoot-printing): Dynamics 365 Business Central supports different types of events including BusinessEvent, IntegrationEvent, Global, and trigger events.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
