---
id: topic/dev-itpro/development/troubleshooting/troubleshooting-in-al
type: topic
title: Troubleshooting in AL
summary: "Troubleshooting in AL covers the tools and guidance for finding and fixing problems in Business Central extensions: the AL Profiler, VS Code debugging, snapshot debugging, Page Inspection, performance articles, and printing troubleshooting. It answers questions about slow code, runtime errors, page structure and printer or report payload errors."
tier: official
language: en
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-24T00:55:56.195Z"
  flags: []
generated:
  at: "2026-10-26T06:43:56.210Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 4dbf96b39631a70ab40f870ef8e30beeeb18e86c148cb90156154bafda56446b
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
    date: "2026-09-25"
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
  posts:
    - post/nataliekarolak-com/3628
    - post/yzhums-com/68854
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
  blog: 2
  guideline: 0
bc_forms: []
member_hash: 9da1fe15b2f204fe13ee3995e8174dab30aa920160aa61853ce3b3395b01e924
narrative: generated
---

# Troubleshooting in AL

> Troubleshooting in AL covers the tools and guidance for finding and fixing problems in Business Central extensions: the AL Profiler, VS Code debugging, snapshot debugging, Page Inspection, performance articles, and printing troubleshooting. It answers questions about slow code, runtime errors, page structure and printer or report payload errors.

Path: [Development](../../development.md) > [Troubleshooting](../troubleshooting.md) > Troubleshooting in AL · tier official · system development · narrative reviewed (checked by Opus)

## Overview

This section gathers the diagnostic tools an AL developer uses when an extension is slow, wrong or misbehaving. Debugging in Visual Studio Code handles functional errors with breakpoints and related features. The AL Profiler handles performance hot spots. Page Inspection helps you understand a page in the web client without reading code.

Snapshot debugging records AL execution on a server and lets you inspect it offline, including through an AI agent via the MCP server interface. The performance articles give broader guidance on page design, web services, reports, AL patterns and data access. A separate page covers printing problems.

Start with Debug AL Code in Visual Studio Code for general errors, or with the AL Profiler if the problem is speed. Use Snapshot debugging when you want to record execution on a server and debug it offline later, and Page Inspection when you need to know where a page's data and extensions come from.

## Key points

- The AL Profiler records execution in instrumentation or sampling mode, configured in launch.json, and shows results in VS Code.
- Profiler results include call stack views (top-down and bottom-up), timings, SQL call activity, the Performance Profiler page and CodeLens inline timings.
- VS Code debugging supports breakpoints, conditional breakpoints, break on errors, break on record changes, snapshot debugging, and attach and debug next.
- Snapshot debugging records execution on the server using snappoints and lets you inspect it offline; an AI agent can also debug a snapshot through the MCP server.
- Page Inspection in the web client shows page structure, source table and fields, extensions and filters.
- Performance articles cover page background tasks, Edit-in-Excel, query objects, partial records, table extension impact and event subscriptions.
- Troubleshooting Printing explains how to use the Windows Event Log, check payload formats, and test printers with the Printers system table.

## Learn pages

- [Analyze AL Performance with the AL Profiler](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-profiler-overview): Use instrumentation or sampling with the AL Profiler to analyze AL execution, SQL activity, call stacks, and performance hot spots.
- [Debug AL Code in Visual Studio Code](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-debugging): Debug AL code in Visual Studio Code by using breakpoints, attach sessions, record-write breaks, SQL statistics, and debugger settings.
- [Inspecting pages](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-inspecting-pages): Learn about the structure of a page and its' underlying data.
- [Performance Articles for AL Developers](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/performance/performance-developer): Learn how to write efficient AL code, pages, reports, and web services, and use tools like the AL Profiler to improve performance in Business Central.
- [Snapshot debugging](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-snapshot-debugging): Overview of how snapshot debugging allows recording running AL code for Business Central.
  - In the observatory: [Codeunit 80 "Sales-Post"](../../../../objects/codeunit/80.md)
- [Troubleshooting Printing](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-reports-troubleshoot-printing): Dynamics 365 Business Central supports different types of events including BusinessEvent, IntegrationEvent, Global, and trigger events.
  - In the observatory: [Page 64 "Printer Selections"](../../../../objects/page/64.md)

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [Help, I don’t get any AL warnings in the Output tab!](../../../../posts/nataliekarolak-com/3628.md) (community post): "AL warnings may appear missing from the Output tab in VS Code"
- [Dynamics 365 Business Central Blog Series: Debugging in AL](../../../../posts/yzhums-com/68854.md) (community post): "AL debugging techniques in Dynamics 365 Business Central, including snapshot"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
