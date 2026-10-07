---
id: topic/dev-itpro/development/development-environment/other-tools
type: topic
title: Other tools
summary: "Other development tools for Business Central: Page Inspection for examining page structure and data sources, the Txt2Al tool for converting C/AL objects to AL, and the table data viewer for inspecting tenant tables. Answers questions about debugging pages, converting NAV 14 code, and viewing table contents."
tier: official
language: en
system: administration
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:28:14.151Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 99ea45295ee2f2f670b998ab6e8da16aca66dd811f6f51e472e3afb7d9802c91
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-inspecting-pages
    title: Inspecting pages
    date: "2026-09-18"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-txt2al-tool
    title: The Txt2Al Conversion Tool
    date: "2024-04-18"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-view-table-data
    title: Viewing table data
    date: "2024-06-17"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-inspecting-pages
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-txt2al-tool
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-view-table-data
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development/development-environment
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Development
  - Development environment
  - Other tools
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development/development-environment
children: []
coverage:
  learn: 3
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 65eebd9af81fd595dc18bdf793e4c9ef9821938e8715db9823a8cfbad8615fa7
narrative: generated
---

# Other tools

> Other development tools for Business Central: Page Inspection for examining page structure and data sources, the Txt2Al tool for converting C/AL objects to AL, and the table data viewer for inspecting tenant tables. Answers questions about debugging pages, converting NAV 14 code, and viewing table contents.

Path: [Development](../../development.md) > [Development environment](../development-environment.md) > Other tools · tier official · system administration · narrative reviewed by Opus

## Overview

This section collects three supporting tools for developers working in the Business Central development environment. Each is independent of the others and addresses a separate task: understanding how a page is built, converting older C/AL code, and looking at raw table data.

Page Inspection is a web client pane that shows a page's structure, source table, fields, extensions, and filters, so you can debug without reading code. The table data viewer gives read-only access to tenant database tables, including extension columns, from the web client or VS Code. The Txt2Al tool converts C/AL objects from Dynamics NAV version 14 into AL for building extensions.

Start with Inspecting pages or Viewing table data for day-to-day debugging. Use the Txt2Al page when you are migrating existing C/AL code to extensions.

## Key points

- Page Inspection is a web client pane showing page structure, data sources, extensions, filters, and source table fields; its Learn page references 2023 release wave 2.
- Page Inspection helps you understand and debug page design without examining code.
- Viewing table data is read-only and covers tenant database tables, including extension columns; its Learn page references 2020 release wave 1.
- Table data can be opened from the web client or from VS Code; it requires read permissions.
- VS Code access to table data uses launch.json configuration.
- Txt2Al converts C/AL objects from Dynamics NAV version 14 to AL for Business Central extensions.
- Txt2Al has parameters for object types and output, and can generate DELTA files, inject .NET add-ins, set the translation format, and control file naming patterns.
- Txt2Al can default data classification during conversion.

## Learn pages

- [Inspecting pages](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-inspecting-pages): Learn about the structure of a page and its' underlying data.
- [The Txt2Al Conversion Tool](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-txt2al-tool): Description of the converter tool that allows you to take C/AL objects and convert them into .al format.
- [Viewing table data](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-view-table-data): View tables in browser for troubleshooting

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
