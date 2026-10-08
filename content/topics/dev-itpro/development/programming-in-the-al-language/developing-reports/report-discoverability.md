---
id: topic/dev-itpro/development/programming-in-the-al-language/developing-reports/report-discoverability
type: topic
title: Report discoverability
summary: "Report discoverability in AL covers how users find reports in Business Central: Tell me search, role center navigation, Role/Report explorer, page-based report actions, teaching tips and help links. It answers questions about the UsageCategory, AdditionalSearchTerms, AccessByPermission and ApplicationArea properties."
tier: official
language: en
system: reporting
review:
  state: reviewed
  by: opus
  at: "2026-10-07T21:13:11.968Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: cd92d30c27ce2c6310407a80cac429a6c49a55b916d6ef4bd827bbe42c7cbfca
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
    - post/thatnavguy-com/https-thatnavguy-com-blog-2025-bc-friday-tips-54-report-explorer--38c2959604
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

> Report discoverability in AL covers how users find reports in Business Central: Tell me search, role center navigation, Role/Report explorer, page-based report actions, teaching tips and help links. It answers questions about the UsageCategory, AdditionalSearchTerms, AccessByPermission and ApplicationArea properties.

Path: [Development](../../../development.md) > [Programming in the AL language](../../programming-in-the-al-language.md) > [Developing reports](../developing-reports.md) > Report discoverability · tier official · system reporting · narrative reviewed (checked by Opus)

## Overview

This section explains how to make reports and pages easy for users to find. The main mechanism is the Tell me search feature, which you configure in AL code by setting the UsageCategory property on a page or report. You can also add extra search terms to help users who search with different words.

The two pages work together. "Report discoverability" gives the broader picture: Tell me searchability, role center navigation, visibility in the Role/Report explorer, report actions on pages (promoted actions), teaching tips, and help links. "Add pages and reports to Tell me" is the how-to for the Tell me part, including the properties involved.

Start with "Add pages and reports to Tell me" if you need a report to show up in search. Read "Report discoverability" if you are planning how users will reach a report from role centers, pages and explorers.

## Key points

- Set the UsageCategory property in AL to make a page or report searchable in Tell me.
- UsageCategory also affects how the object is categorized in the Role Explorer.
- The AdditionalSearchTerms property adds extra search terms to improve discoverability.
- AccessByPermission and ApplicationArea properties are part of the Tell me configuration.
- Reports can also be reached through role center navigation and the Role/Report explorer.
- Page-based report actions (promoted actions), teaching tips and help links add further discoverability.
- The Report discoverability page references 2023 release wave 1.

## Learn pages

- [Add pages and reports to Tell me](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-menusuite-functionality): Description of how you use AL to add pages and reports so that they're discoverable through search in the client.
- [Report discoverability](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-reports-discoverability): Introducing how to make Business Central reports discoverable by users.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [BC Friday Tips #54 Report Explorer](../../../../../posts/thatnavguy-com/https-thatnavguy-com-blog-2025-bc-friday-tips-54-report-explorer--38c2959604.md) (community post): "Report Explorer is a discovery tool in Business Central that helps users browse"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
