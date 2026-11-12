---
id: topic/business-central/get-started/get-productive-in-business-central/change-the-look-of-externally-facing-doc/use-obsolete-features
type: topic
title: Use obsolete features
summary: "Obsolete procedures for custom report layouts in legacy Business Central versions: creating, importing, exporting, selecting and updating RDLC and Word layouts. It answers questions about the old Report Layout Selection workflow and points to the current replacement pages."
tier: official
language: en
system: platform
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
  input_hash: b665baa554e4ae04d4522ba9b80ed7d9a305d3d3e34e91f1ee8229cb07525a67
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/ui-how-create-custom-report-layout
    title: (Obsolete) Create and Modify Custom Report Layouts
    date: "2026-11-11"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/ui-how-import-and-export-report-layout
    title: (Obsolete) Import and Export Custom Report Layouts
    date: "2026-11-11"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/ui-how-change-layout-currently-used-report
    title: (Obsolete) Set the Layout Used by a Report
    date: "2026-11-11"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/ui-update-report-layouts
    title: (Obsolete) Update Custom Report Layouts
    date: "2026-11-11"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/ui-how-create-custom-report-layout
    - https://learn.microsoft.com/dynamics365/business-central/ui-how-import-and-export-report-layout
    - https://learn.microsoft.com/dynamics365/business-central/ui-how-change-layout-currently-used-report
    - https://learn.microsoft.com/dynamics365/business-central/ui-update-report-layouts
  objects:
    - object/page/9650
    - object/page/9652
  features: []
  topics:
    - topic/business-central/get-started/get-productive-in-business-central/change-the-look-of-externally-facing-doc
  localizations: []
  videos: []
  posts:
    - post/yzhums-com/77038
  guidelines: []
learn_toc_path:
  - Get started
  - Get productive in Business Central
  - Change the look of externally facing documents
  - Use obsolete features
toc_file: business-central/TOC.md
parent: topic/business-central/get-started/get-productive-in-business-central/change-the-look-of-externally-facing-doc
children: []
coverage:
  learn: 4
  code: 2
  video: 0
  blog: 1
  guideline: 0
bc_forms:
  - 9650
  - 9652
member_hash: b9c9d8ad9dfd983cfa467832cc7e0de27bddcaaece3cd1c0f60ea84c3a6dde4a
narrative: generated
---

# Use obsolete features

> Obsolete procedures for custom report layouts in legacy Business Central versions: creating, importing, exporting, selecting and updating RDLC and Word layouts. It answers questions about the old Report Layout Selection workflow and points to the current replacement pages.

Path: [Get started](../../../get-started.md) > [Get productive in Business Central](../../get-productive-in-business-central.md) > [Change the look of externally facing documents](../change-the-look-of-externally-facing-doc.md) > Use obsolete features · tier official · system platform · narrative **unreviewed** (model text not yet checked)

## Overview

This section holds four pages describing the legacy way of working with custom report layouts. They cover RDLC and Word layouts and the Report Layout Selection page. Each page is marked obsolete and refers readers to the current workflow, mainly "Get started creating report layouts" and "Set the layout used by a report".

The pages follow the life of a layout. You create or copy a layout, export or import it as a file, set which layout a report uses, and update layouts after dataset changes. Start here only if you work with an older version or need to understand legacy behavior. For new work, use the current pages named in each article.

## Key points

- All four pages are marked obsolete and point to current layout documentation.
- Custom layouts can be created by copying an existing layout, in RDLC or Word format.
- Layouts are exported and imported as files from the Report Layout Selection page: Word as .docx, RDLC as .rdlc or .rdl.
- Setting a report's layout means changing the layout type (RDLC, Word or custom) on the Report Layout Selection page.
- Relevant fields on that page include Layout Type, Company Name and Layout Description.
- After dataset changes, layouts can be updated automatically from error messages.
- Layout updates can be tested first, and applied to one layout or to all layouts.
- Manual layout editing is the fallback when automatic updates fail.

## Learn pages

- [(Obsolete) Create and Modify Custom Report Layouts](https://learn.microsoft.com/dynamics365/business-central/ui-how-create-custom-report-layout): Create, copy, and modify report layouts in versions of Business Central that still provide the legacy Custom Report Layouts page and its actions.
- [(Obsolete) Import and Export Custom Report Layouts](https://learn.microsoft.com/dynamics365/business-central/ui-how-import-and-export-report-layout): Export and import Word or RDLC layout files in versions of Business Central that still provide the legacy Custom Report Layouts page and its actions.
- [(Obsolete) Set the Layout Used by a Report](https://learn.microsoft.com/dynamics365/business-central/ui-how-change-layout-currently-used-report): Change the layout used by a report in versions of Business Central that still include the legacy Report Layout Selection and Custom Report Layouts pages.
- [(Obsolete) Update Custom Report Layouts](https://learn.microsoft.com/dynamics365/business-central/ui-update-report-layouts): Test and update legacy custom report layouts after dataset changes in Business Central, and find guidance for changes that require manual fixes.
  - In the observatory: [Page 9656 "Report Layout Update Log"](../../../../../objects/page/9656.md)

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [Business Central 2026 release wave 2 (BC29): Custom Report Layouts are now deprecated and have been removed](../../../../../posts/yzhums-com/77038.md) (community post): "This legacy feature from Dynamics NAV was already obsolete but retained"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 9650 "Custom Report Layouts"](../../../../../objects/page/9650.md) · on [Table 9650 "Custom Report Layout"](../../../../../objects/table/9650.md)
- [Page 9652 "Report Layout Selection"](../../../../../objects/page/9652.md) · on [Table 9651 "Report Layout Selection"](../../../../../objects/table/9651.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
