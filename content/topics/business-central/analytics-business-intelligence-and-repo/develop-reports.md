---
id: topic/business-central/analytics-business-intelligence-and-repo/develop-reports
type: topic
title: Develop reports
summary: "Developing Business Central reports: how report objects combine datasets and layouts (Word, Excel, RDLC, external), plus layout setup, themes, fonts, and performance guidance for AL developers. It answers questions about report structure, layout choice, and customization."
tier: official
language: en
system: reporting
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-26T01:05:31.204Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 7fac47734333efc0d3d194acff4e52fe7f66593e033d3bb39e0ae2715da8c760
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/ui-fonts
    title: Available Fonts in Business Central
    date: "2026-11-12"
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
    date: "2026-11-12"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/ui-get-started-layouts
    title: Get started creating report layouts
    date: "2026-11-12"
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
    - video/2N2NhNH7dsk
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

> Developing Business Central reports: how report objects combine datasets and layouts (Word, Excel, RDLC, external), plus layout setup, themes, fonts, and performance guidance for AL developers. It answers questions about report structure, layout choice, and customization.

Path: [Analytics, business intelligence, and reporting](../analytics-business-intelligence-and-repo.md) > Develop reports · tier official · system reporting · narrative **unreviewed** (model text not yet checked)

## Overview

Report development in Business Central centers on the report object, which defines a dataset and one or more layouts. Layouts can be Word, Excel, or RDLC. Datasets need AL programming knowledge, while Word and Excel layouts can be customized in a self-service way.

The section's own page is an introduction to these layout types and datasets. Two subtopics go deeper. Develop report datasets gives an overview of building reports with datasets, layouts, and request pages, and adds performance guidance for AL code, pages, and web services. Develop report layouts covers choosing a layout type, designing and mapping it, setting which layout a report uses, configuring themes and header/footer layouts, and checking available fonts.

Start with the overview page to understand the layout types. Then use the datasets pages if you write AL, or the layouts pages if you adjust how a report looks.

## Key points

- A report object defines both the dataset and the layouts.
- Supported layout formats include Word, Excel, and RDLC; external layouts are also covered.
- Datasets require AL programming knowledge.
- Word and Excel layouts can be customized self-service.
- Report datasets pages cover request pages and performance tuning for AL code, pages, and web services.
- Report layout pages cover designing and mapping layouts and setting which layout a report uses.
- Layout pages also cover themes, header/footer layouts, and checking available fonts.

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
- [What's new in reporting: Layout Management and Report Inbox API's (2026 release wave 2)](../../../videos/2N2NhNH7dsk.md) (video): "Layout management; layout status; report layouts; report inbox"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 9650 "Custom Report Layouts"](../../../objects/page/9650.md) · captioned "Custom Report Layouts (Obsoleted)" · on [Table 9650 "Custom Report Layout"](../../../objects/table/9650.md) · via [Develop report layouts](develop-reports/develop-report-layouts.md)
- [Page 9652 "Report Layout Selection"](../../../objects/page/9652.md) · captioned "Report Layout Selection (Obsoleted)" · on [Table 9651 "Report Layout Selection"](../../../objects/table/9651.md) · via [Develop report layouts](develop-reports/develop-report-layouts.md)
- [Page 9660 "Report Layouts"](../../../objects/page/9660.md) · via [Develop report layouts](develop-reports/develop-report-layouts.md)
- [Page 9662 "Report Layout New Dialog"](../../../objects/page/9662.md) · captioned "Add New Layout for a Report" · via [Develop report layouts](develop-reports/develop-report-layouts.md)
- [Page 9663 "Tenant Report Layout Cfg"](../../../objects/page/9663.md) · captioned "Report defaults for theme and header-footer" · via [Develop report layouts](develop-reports/develop-report-layouts.md)
- [Page 9666 "Report Theme and Header/Footer"](../../../objects/page/9666.md) · captioned "Manage themes and header-footer layouts" · via [Develop report layouts](develop-reports/develop-report-layouts.md)
- [Page 9670 "Layout Theme and Header/Footer"](../../../objects/page/9670.md) · captioned "Theme and header-footer per layout" · via [Develop report layouts](develop-reports/develop-report-layouts.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
