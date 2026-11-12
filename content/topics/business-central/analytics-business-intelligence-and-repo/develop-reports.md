---
id: topic/business-central/analytics-business-intelligence-and-repo/develop-reports
type: topic
title: Develop reports
summary: "Developing reports in Business Central: how to build report layouts (Word, Excel, RDLC) and datasets written in AL. It answers questions about creating and managing layouts, choosing a default layout, report structure, and performance tuning for AL developers."
tier: official
language: en
system: reporting
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-12T00:57:40.556Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 398f157f8ff5c301ca5769ad2a730edf9f79a6b1dd14eee69edc41feb95011a7
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/ui-fonts
    title: Available Fonts in Business Central
    date: "2025-02-28"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/ui-excel-report-layouts
    title: Create Excel Report Layouts in Business Central
    date: "2026-11-09"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/ui-design-word-layouts-business-central-add-in
    title: Design Word Layouts with the Business Central Add-in
    date: "2026-11-09"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/reports-develop-reports
    title: Develop Business Central Report Layouts and Datasets
    date: "2026-11-11"
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
    date: "2026-11-09"
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
    - object/page/9662
    - object/page/9663
    - object/page/9666
    - object/page/9670
  features: []
  topics:
    - topic/business-central/analytics-business-intelligence-and-repo
    - topic/business-central/analytics-business-intelligence-and-repo/develop-reports/develop-report-layouts
    - topic/business-central/analytics-business-intelligence-and-repo/develop-reports/develop-report-datasets
  localizations: []
  videos:
    - video/fy96_jdL1PQ
  posts:
    - post/gerardorenteria-blog/12801
    - post/thatnavguy-com/https-thatnavguy-com-blog-2025-bc-friday-tips-58-spotting-report-with-savevalues--5715116553
    - post/yzhums-com/72933
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
  code: 7
  video: 1
  blog: 3
  guideline: 0
bc_forms:
  - 9650
  - 9652
  - 9660
  - 9662
  - 9663
  - 9666
  - 9670
member_hash: 6ce0f942fb3e2f96a865c076baeda340628eecd3cb65b7e48d8a6db24e7a88da
narrative: generated
---

# Develop reports

> Developing reports in Business Central: how to build report layouts (Word, Excel, RDLC) and datasets written in AL. It answers questions about creating and managing layouts, choosing a default layout, report structure, and performance tuning for AL developers.

Path: [Analytics, business intelligence, and reporting](../analytics-business-intelligence-and-repo.md) > Develop reports · tier official · system reporting · narrative **unreviewed** (model text not yet checked)

## Overview

This area covers the two parts of a Business Central report: the dataset, which is defined in AL code, and the layout, which controls how the data is presented. Layouts can be Word, Excel or RDLC. The landing page introduces both and points to the subtopics.

Develop report layouts covers creating, designing, selecting and managing Word, Excel and RDLC layouts. It also covers themes, header/footer layouts, available fonts and mapping data fields. Develop report datasets gives an overview of building reports with datasets, layouts and request pages, and adds performance guidance for AL code, pages and web services.

Start with the dataset overview to understand how a report object is structured. Then go to the layout pages for the layout type you plan to use.

## Key points

- Reports combine a dataset (AL), a layout and a request page.
- Supported layout types are Word, Excel and RDLC.
- Layouts can be created, imported, exported and set as the default for a report.
- Layout pages cover themes, header/footer layouts and available fonts.
- Layout design includes mapping data fields from the dataset.
- Dataset pages include performance guidance for AL code, pages and web services.
- Reports can be customized by changing the layout or by modifying the dataset in AL.

## Subtopics

- [Develop report layouts](develop-reports/develop-report-layouts.md) (9 pages)
- [Develop report datasets](develop-reports/develop-report-datasets.md) (2 pages)

## More Learn pages

- [Develop Business Central Report Layouts and Datasets](https://learn.microsoft.com/dynamics365/business-central/reports-develop-reports): Find guidance for customizing Business Central report layouts in Word, Excel, or RDLC, and learn when a developer must change the report dataset.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [📊 Mermaid Diagrams in Business Central: Dynamic Visual Intelligence 🎨](../../../posts/gerardorenteria-blog/12801.md) (community post): "renders Mermaid.js diagrams from live BC table data"
- [BC Friday Tips #58 Spotting Report with SaveValues](../../../posts/thatnavguy-com/https-thatnavguy-com-blog-2025-bc-friday-tips-58-spotting-report-with-savevalues--5715116553.md) (community post): "The SaveValues property in Business Central reports remembers user-selected options on the request page"
- [Business Central 2026 release wave 1 (BC28.1): Control the lifecycle of report layouts (Layout Status)](../../../posts/yzhums-com/72933.md) (community post): "Layout statuses control approval stages: Draft, Pending Approval, Approved, and Retired"
- [Episode 520: Reports, Dashboards, and Scorecards: A Complete Guide to Reporting in Business Central](../../../videos/fy96_jdL1PQ.md) (video): "reporting capabilities; training strategy; reporting technologies; power bi; dashboards"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 9650 "Custom Report Layouts"](../../../objects/page/9650.md) · on [Table 9650 "Custom Report Layout"](../../../objects/table/9650.md) · via [Develop report layouts](develop-reports/develop-report-layouts.md)
- [Page 9652 "Report Layout Selection"](../../../objects/page/9652.md) · on [Table 9651 "Report Layout Selection"](../../../objects/table/9651.md) · via [Develop report layouts](develop-reports/develop-report-layouts.md)
- [Page 9660 "Report Layouts"](../../../objects/page/9660.md) · via [Develop report layouts](develop-reports/develop-report-layouts.md)
- [Page 9662 "Report Layout New Dialog"](../../../objects/page/9662.md) · captioned "Add New Layout for a Report" · via [Develop report layouts](develop-reports/develop-report-layouts.md)
- [Page 9663 "Tenant Report Layout Cfg"](../../../objects/page/9663.md) · captioned "Report defaults for theme and header-footer" · via [Develop report layouts](develop-reports/develop-report-layouts.md)
- [Page 9666 "Report Theme and Header/Footer"](../../../objects/page/9666.md) · captioned "Manage themes and header-footer layouts" · via [Develop report layouts](develop-reports/develop-report-layouts.md)
- [Page 9670 "Layout Theme and Header/Footer"](../../../objects/page/9670.md) · captioned "Theme and header-footer per layout" · via [Develop report layouts](develop-reports/develop-report-layouts.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
