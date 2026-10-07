---
id: topic/dev-itpro/development/troubleshooting/troubleshooting-in-al
type: topic
title: Troubleshooting in AL
summary: "Troubleshooting in AL covers tools and guidance for finding and fixing problems in Business Central extensions: the AL debugger, snapshot debugging, the AL Profiler, Page Inspection, performance articles, and printing troubleshooting. It answers questions on debugging, performance hot spots, page structure and printer errors."
tier: official
language: en
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-07T21:13:11.963Z"
  flags: []
generated:
  at: "2026-10-07T21:13:11.969Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 8ef1712d1d69eb067d7272af31dbf963bea0510ca60ac6474c675b7a26c7952a
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

> Troubleshooting in AL covers tools and guidance for finding and fixing problems in Business Central extensions: the AL debugger, snapshot debugging, the AL Profiler, Page Inspection, performance articles, and printing troubleshooting. It answers questions on debugging, performance hot spots, page structure and printer errors.

Path: [Development](../../development.md) > [Troubleshooting](../troubleshooting.md) > Troubleshooting in AL · tier official · system development · narrative reviewed by Opus

## Overview

This section groups the diagnostic tools an AL developer uses when something is wrong or slow. Debugging in AL covers the Visual Studio Code debugger, breakpoints and database inspection. Snapshot debugging records code on a production cloud server so it can be debugged offline. The AL Profiler records execution details to find performance hot spots.

Page Inspection works in the web client and shows page structure, source table, fields, extensions and filters without reading code. Performance Articles for AL Developers gives guidance on pages, web services, reports, AL patterns, data access and testing. Troubleshooting Printing helps with printer and report payload errors.

Start with Debugging in AL for functional errors, the AL Profiler or the performance articles for slowness, Snapshot debugging for issues that only occur in production, and Page Inspection to understand what a page shows and where it comes from.

## Key points

- Debugging in AL uses the Visual Studio Code debugger with breakpoints, conditional breakpoints, break on errors, break on record changes, SQL debugging, database locks inspection and web service debugging.
- Snapshot debugging records AL execution for a specified user session on production cloud servers and replays it offline in Visual Studio Code using snappoints, which log variable state without stopping execution.
- Snapshot debugging pages mention versions 17.2 and 18.1, and include built-in codeunit trigger debugging and verbosity control.
- The AL Profiler has instrumentation and sampling modes, configured in launch.json, and shows call stacks (top-down and bottom-up), timings, SQL calls, a Performance Profiler page and CodeLens timings.
- Page Inspection shows page structure, source table and fields, extensions and filters in the web client; its page references 2023 release wave 2.
- Performance articles cover page background tasks, Edit-in-Excel, query objects, partial records, table extension impact and event subscriptions.
- Troubleshooting Printing covers payload validation, the Windows Event Log, error messages and testing printers through the Printers system table.

## Learn pages

- [Analyze AL Performance with the AL Profiler](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-profiler-overview): Use instrumentation or sampling with the AL Profiler to analyze AL execution, SQL activity, call stacks, and performance hot spots.
- [Debugging in AL](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-debugging): Debugging in AL with Visual Studio Code and the AL Language extension.
- [Inspecting pages](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-inspecting-pages): Learn about the structure of a page and its' underlying data.
- [Performance Articles for AL Developers](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/performance/performance-developer): Learn how to write efficient AL code, pages, reports, and web services, and use tools like the AL Profiler to improve performance in Business Central.
- [Snapshot debugging](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-snapshot-debugging): Overview of how snapshot debugging allows recording running AL code for Business Central.
- [Troubleshooting Printing](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-reports-troubleshoot-printing): Dynamics 365 Business Central supports different types of events including BusinessEvent, IntegrationEvent, Global, and trigger events.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
