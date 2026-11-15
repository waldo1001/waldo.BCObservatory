---
id: topic/business-central/analytics-business-intelligence-and-repo/develop-reports
type: topic
title: Develop reports
summary: "Developing Business Central reports: how report objects combine datasets, layouts (Word, Excel, RDLC) and request pages. It answers questions about building and choosing layouts, structuring datasets in AL, and tuning report performance."
tier: official
language: en
system: reporting
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-15T00:50:59.995Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 7d1ae96083be3e42a164ad2bd4e38d4290b28d9bb473af95769c65517616d31f
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

> Developing Business Central reports: how report objects combine datasets, layouts (Word, Excel, RDLC) and request pages. It answers questions about building and choosing layouts, structuring datasets in AL, and tuning report performance.

Path: [Analytics, business intelligence, and reporting](../analytics-business-intelligence-and-repo.md) > Develop reports · tier official · system reporting · narrative **unreviewed** (model text not yet checked)

## Overview

Reports in Business Central are built from a report object that defines a dataset (the data) and one or more layouts (the presentation). Layouts come in Word, Excel and RDLC types. Word and Excel layouts can be customized by users themselves, while RDLC layouts may need a developer. Changes to the dataset require AL programming.

The section has an introductory page plus two subtopics. Develop report layouts covers creating, designing, selecting and managing Word, Excel and RDLC layouts, mapping data fields, themes, header/footer layouts and available fonts. Develop report datasets covers how datasets, layouts and request pages fit together, with performance guidance for AL code, pages and web services.

Start with the introductory page to see the layout types and who can change what. Then go to layouts if you need to change how a report looks, or to datasets if you need to change which data it contains or how fast it runs.

## Key points

- A report object defines the dataset and layouts that control how data is presented.
- Layout types are Word, Excel and RDLC; custom report layouts are supported.
- Word and Excel layouts can be customized without a developer; RDLC layouts may require developer help.
- Dataset changes require AL programming.
- Layout pages cover creating, designing, selecting and managing layouts, and mapping data fields.
- Layout pages also cover themes, header/footer layouts and available fonts.
- Dataset pages give an overview of datasets, layouts (Excel, Word, RDL) and request pages.
- Performance guidance addresses AL code, pages and web services.

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
