---
id: topic/business-central/analytics-business-intelligence-and-repo/develop-reports/develop-report-datasets
type: topic
title: Develop report datasets
summary: "Report dataset development in Business Central: an overview of building reports with datasets, layouts (Excel, Word, RDL) and request pages, plus performance guidance for AL developers. It answers questions about report structure, layout choices, and tuning AL code, pages, and web services."
tier: official
language: en
system: reporting
review:
  state: reviewed
  by: opus
  at: "2026-10-07T05:21:28.466Z"
  flags: []
generated:
  at: "2026-10-07T05:23:51.651Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 06a4da56f5e28a0f3da6586f5abbc1ca15696cf616374c888462262a51586d60
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/performance/performance-developer
    title: Performance Articles for AL Developers
    date: "2026-09-18"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-reports
    title: Reports overview
    date: "2023-12-05"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/performance/performance-developer
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-reports
  objects: []
  features: []
  topics:
    - topic/business-central/analytics-business-intelligence-and-repo/develop-reports
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Analytics, business intelligence, and reporting
  - Develop reports
  - Develop report datasets
toc_file: business-central/TOC.md
parent: topic/business-central/analytics-business-intelligence-and-repo/develop-reports
children: []
coverage:
  learn: 2
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 5ca3e133e33abdc1442938051f313b20bcb39e9766f705756fb12e441cdfd578
narrative: generated
---

# Develop report datasets

> Report dataset development in Business Central: an overview of building reports with datasets, layouts (Excel, Word, RDL) and request pages, plus performance guidance for AL developers. It answers questions about report structure, layout choices, and tuning AL code, pages, and web services.

Path: [Analytics, business intelligence, and reporting](../../analytics-business-intelligence-and-repo.md) > [Develop reports](../develop-reports.md) > Develop report datasets · tier official · system reporting · narrative reviewed by Opus

## Overview

This section is for AL developers who build reports and need their datasets to perform well. It has two pages: a reports overview and a collection of performance articles for AL developers.

Start with Reports overview. It explains how reports print, display, and process data, and how the dataset, the layout, and the request page work together. It also covers report extensions and discoverability. Layout options are Excel, Word, and RDL, and you can design them visually.

Then read Performance Articles for AL Developers. It covers efficient page design, web services, reports, AL coding patterns, data access optimization, and testing. Use it to tune the datasets and code behind your reports and the rest of the application.

## Key points

- Reports can be used for printing, displaying, and processing data.
- Reports are built using datasets, layouts, and request pages.
- Layout options include Excel, Word, and RDL, with visual layout design.
- Report extensions and discoverability are covered in the overview.
- Performance guidance covers pages, web services, reports, AL coding patterns, data access, and testing.
- Specific performance topics include page background tasks, Edit-in-Excel, query objects, partial records, table extension impact, and event subscriptions.
- The performance articles reference 2021 release wave 2, 2023 release wave 1, and 2023 release wave 2.

## Learn pages

- [Performance Articles for AL Developers](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/performance/performance-developer): Learn how to write efficient AL code, pages, reports, and web services, and use tools like the AL Profiler to improve performance in Business Central.
- [Reports overview](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-reports): Use reports to display information from database to structure and summarize information and print documents, such as invoices.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
