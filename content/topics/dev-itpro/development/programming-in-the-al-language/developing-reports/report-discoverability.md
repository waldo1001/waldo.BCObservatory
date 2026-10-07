---
id: topic/dev-itpro/development/programming-in-the-al-language/developing-reports/report-discoverability
type: topic
title: Report discoverability
summary: Report discoverability in AL covers how users find and open reports in Business Central. It answers questions about making pages and reports searchable in Tell me with UsageCategory, and about role center navigation, the Role/Report explorer, page actions, teaching tips and help links.
tier: official
language: en
system: reporting
review:
  state: reviewed
  by: opus
  at: "2026-10-07T05:23:30.097Z"
  flags: []
generated:
  at: "2026-10-07T05:23:51.651Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 34d211b87f14e12cf1c24e6d858b282ec6efa21b3478a440dd33a21ad4fb73f6
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-menusuite-functionality
    title: Add pages and reports to Tell me
    date: "2025-05-15"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-reports-discoverability
    title: Report discoverability
    date: "2024-03-11"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-menusuite-functionality
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-reports-discoverability
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development/programming-in-the-al-language/developing-reports
  localizations: []
  videos: []
  posts:
    - post/thatnavguy-com/https://thatnavguy.com/blog/2025/bc-friday-tips-54-report-explorer/
  guidelines: []
learn_toc_path:
  - Development
  - Programming in the AL language
  - Developing reports
  - Report discoverability
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development/programming-in-the-al-language/developing-reports
children: []
coverage:
  learn: 2
  code: 0
  video: 0
  blog: 1
  guideline: 0
bc_forms: []
member_hash: c4c09f2ca20130f8a6d449fc199dc5fb43c9f13048142d3bf114c7f408782637
narrative: generated
---

# Report discoverability

> Report discoverability in AL covers how users find and open reports in Business Central. It answers questions about making pages and reports searchable in Tell me with UsageCategory, and about role center navigation, the Role/Report explorer, page actions, teaching tips and help links.

Path: [Development](../../../development.md) > [Programming in the AL language](../../programming-in-the-al-language.md) > [Developing reports](../developing-reports.md) > Report discoverability · tier official · system reporting · narrative reviewed by Opus

## Overview

This section is about making reports easy for users to find. It has two pages. One is a general overview of the ways a report can be discovered. The other is a focused guide on adding pages and reports to Tell me search.

The overview lists the discovery paths: Tell me searchability, role center navigation, visibility in the Role/Report explorer, report actions on pages (such as promoted actions), teaching tips, and help links. The Tell me page shows the AL side. You set the UsageCategory property, and optionally AdditionalSearchTerms, so the object appears in search.

Start with the overview to pick the discovery paths that fit your report. Then use the Tell me page for the property settings. That page also mentions the AccessByPermission and ApplicationArea properties and the role explorer.

## Key points

- Tell me makes pages and reports searchable when the UsageCategory property is set in AL code.
- UsageCategory categories named include Lists, Tasks, ReportsAndAnalysis and Administration.
- AdditionalSearchTerms adds extra search terms for finding an object.
- Reports can also be discovered through role center navigation, the Role/Report explorer, and actions on pages such as promoted actions.
- Teaching tips and help links are part of report discoverability.
- The Tell me page also covers the AccessByPermission and ApplicationArea properties.

## Learn pages

- [Add pages and reports to Tell me](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-menusuite-functionality): Description of how you use AL to add pages and reports so that they're discoverable through search in the client.
- [Report discoverability](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-reports-discoverability): Introducing how to make Business Central reports discoverable by users.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [BC Friday Tips #54 Report Explorer](../../../../../posts/thatnavguy-com/https://thatnavguy.com/blog/2025/bc-friday-tips-54-report-explorer/.md) (community post): "Report Explorer is a discovery tool in Business Central that helps users browse"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
