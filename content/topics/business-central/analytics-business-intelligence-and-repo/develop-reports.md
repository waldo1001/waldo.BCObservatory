---
id: topic/business-central/analytics-business-intelligence-and-repo/develop-reports
type: topic
title: Develop reports
summary: "Report development in Business Central: building report layouts (Word, Excel, RDLC, external, composite) and report datasets in AL. It answers how to create, edit, import, export and assign layouts, how datasets, layouts and request pages fit together, and how to tune report-related AL code."
tier: official
language: en
system: reporting
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:19:19.086Z"
  flags: []
generated:
  at: "2026-10-07T15:52:42.721Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 13904237510b56465ea956c52340d17cdb24d6c9b177768d7037378ce6248c34
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/ui-fonts
    title: Available fonts
    date: "2025-02-28"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/ui-design-word-layouts-business-central-add-in
    title: Design Word Layouts with the Business Central Add-in
    date: "2026-09-09"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/reports-develop-reports
    title: Develop report layouts and datasets
    date: "2022-02-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/ui-get-started-layouts
    title: Get started creating report layouts
    date: "2026-09-09"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/ui-how-add-fields-word-report-layout
    title: Map Data Fields in Word Layouts
    date: "2026-09-09"
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
    url: https://learn.microsoft.com/dynamics365/business-central/ui-manage-report-layouts
    title: Report and document layouts overview
    date: "2026-09-09"
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
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/ui-set-report-layout
    title: Set the Layout Used by a Report in Business Central
    date: "2026-09-09"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/ui-set-up-report-themes-header-footer-layouts
    title: Set Up Report Themes and Header/Footer Layouts
    date: "2026-09-09"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/ui-excel-report-layouts
    title: Working with Excel layouts
    date: "2024-09-09"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/ui-rdlc-report-layouts
    title: Working with RDLC Layouts
    date: "2026-06-17"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/reports-develop-reports
  objects:
    - object/page/9650
    - object/page/9652
    - object/page/9660
    - object/page/9663
    - object/page/9666
    - object/page/9670
  features: []
  topics:
    - topic/business-central/analytics-business-intelligence-and-repo
    - topic/business-central/analytics-business-intelligence-and-repo/develop-reports/develop-report-layouts
    - topic/business-central/analytics-business-intelligence-and-repo/develop-reports/develop-report-datasets
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Analytics, business intelligence, and reporting
  - Develop reports
toc_file: business-central/TOC.md
parent: topic/business-central/analytics-business-intelligence-and-repo
children:
  - topic/business-central/analytics-business-intelligence-and-repo/develop-reports/develop-report-layouts
  - topic/business-central/analytics-business-intelligence-and-repo/develop-reports/develop-report-datasets
coverage:
  learn: 12
  code: 6
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 9650
  - 9652
  - 9660
  - 9663
  - 9666
  - 9670
member_hash: 6ce0f942fb3e2f96a865c076baeda340628eecd3cb65b7e48d8a6db24e7a88da
narrative: generated
---

# Develop reports

> Report development in Business Central: building report layouts (Word, Excel, RDLC, external, composite) and report datasets in AL. It answers how to create, edit, import, export and assign layouts, how datasets, layouts and request pages fit together, and how to tune report-related AL code.

Path: [Analytics, business intelligence, and reporting](../analytics-business-intelligence-and-repo.md) > Develop reports · tier official · system reporting · narrative reviewed by Opus

## Overview

This section covers the two halves of a Business Central report: the dataset, which is defined in AL, and the layout, which presents the data. The top-level page introduces creating and customizing layouts in Word, Excel and RDLC formats and developing datasets with AL.

Two subtopics go deeper. Develop report layouts covers layout types, designing and mapping fields, themes, header/footer layouts, choosing which layout a report uses, and available fonts. Develop report datasets gives an overview of building reports from datasets, layouts and request pages, plus performance guidance for AL code, pages and web services.

Start with the overview page to see how the parts connect. Then go to the datasets pages if you are defining report data, or to the layouts pages if you are designing or assigning a layout.

## Key points

- Layout types covered: Word, Excel, RDLC, external and composite.
- Layout tasks include creating, editing, importing, exporting and assigning layouts to reports.
- Default layout configuration and choosing the layout a report uses are covered.
- Themes and header/footer layouts are covered, along with font availability and font management.
- Datasets are developed in AL and combined with layouts (Excel, Word, RDL) and request pages.
- Performance guidance for AL developers covers AL code, pages and web services.
- The dataset subtopic has 2 pages and the layouts subtopic has 9.

## Subtopics

- [Develop report layouts](develop-reports/develop-report-layouts.md) (9 pages)
- [Develop report datasets](develop-reports/develop-report-datasets.md) (2 pages)

## More Learn pages

- [Develop report layouts and datasets](https://learn.microsoft.com/dynamics365/business-central/reports-develop-reports): Provides an overview of Business Central data.

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 9650 "Custom Report Layouts"](../../../objects/page/9650.md) · on [Table 9650 "Custom Report Layout"](../../../objects/table/9650.md) · via [Develop report layouts](develop-reports/develop-report-layouts.md)
- [Page 9652 "Report Layout Selection"](../../../objects/page/9652.md) · on [Table 9651 "Report Layout Selection"](../../../objects/table/9651.md) · via [Develop report layouts](develop-reports/develop-report-layouts.md)
- [Page 9660 "Report Layouts"](../../../objects/page/9660.md) · via [Develop report layouts](develop-reports/develop-report-layouts.md)
- [Page 9663 "Tenant Report Layout Cfg"](../../../objects/page/9663.md) · captioned "Report defaults for theme and header-footer" · via [Develop report layouts](develop-reports/develop-report-layouts.md)
- [Page 9666 "Report Theme and Header/Footer"](../../../objects/page/9666.md) · captioned "Manage themes and header-footer layouts" · via [Develop report layouts](develop-reports/develop-report-layouts.md)
- [Page 9670 "Layout Theme and Header/Footer"](../../../objects/page/9670.md) · captioned "Theme and header-footer per layout" · via [Develop report layouts](develop-reports/develop-report-layouts.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
