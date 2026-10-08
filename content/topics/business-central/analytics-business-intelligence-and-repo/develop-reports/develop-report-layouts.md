---
id: topic/business-central/analytics-business-intelligence-and-repo/develop-reports/develop-report-layouts
type: topic
title: Develop report layouts
summary: "Report layout development in Business Central: layout types (Word, Excel, RDLC, external, composite), designing and mapping fields, themes and header/footer layouts, choosing the layout a report uses, and available fonts. It answers how to create, edit, import, export and assign report layouts."
tier: official
language: en
system: reporting
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:20:25.418Z"
  flags: []
generated:
  at: "2026-10-08T02:14:42.423Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: ff2364dc4739ea0b827e6a82573a0ee55e793369517bc22441506d7423ff1e7d
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
    url: https://learn.microsoft.com/dynamics365/business-central/ui-manage-report-layouts
    title: Report and document layouts overview
    date: "2026-09-09"
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
    - https://learn.microsoft.com/dynamics365/business-central/ui-fonts
    - https://learn.microsoft.com/dynamics365/business-central/ui-design-word-layouts-business-central-add-in
    - https://learn.microsoft.com/dynamics365/business-central/ui-get-started-layouts
    - https://learn.microsoft.com/dynamics365/business-central/ui-how-add-fields-word-report-layout
    - https://learn.microsoft.com/dynamics365/business-central/ui-manage-report-layouts
    - https://learn.microsoft.com/dynamics365/business-central/ui-set-report-layout
    - https://learn.microsoft.com/dynamics365/business-central/ui-set-up-report-themes-header-footer-layouts
    - https://learn.microsoft.com/dynamics365/business-central/ui-excel-report-layouts
    - https://learn.microsoft.com/dynamics365/business-central/ui-rdlc-report-layouts
  objects:
    - object/page/9650
    - object/page/9652
    - object/page/9660
    - object/page/9663
    - object/page/9666
    - object/page/9670
  features: []
  topics:
    - topic/business-central/analytics-business-intelligence-and-repo/develop-reports
  localizations: []
  videos:
    - video/-vdhfNMNZQk
    - video/1ft4o9lQzsU
    - video/BofJJPqgrTI
    - video/hn92Al_x-s8
    - video/mS6NDhj20yI
    - video/vLcb31rfZ48
    - video/XLUAuUWtJDw
  posts:
    - post/mohana-blog/tag-blogger-com-1999-blog-1492436440038408053-post-4594837215872264619--a1f1a65db5
    - post/thinkaboutit-be/7750
    - post/thinkaboutit-be/7813
    - post/thinkaboutit-be/8096
    - post/thinkaboutit-be/8250
  guidelines: []
learn_toc_path:
  - Analytics, business intelligence, and reporting
  - Develop reports
  - Develop report layouts
toc_file: business-central/TOC.md
parent: topic/business-central/analytics-business-intelligence-and-repo/develop-reports
children: []
coverage:
  learn: 9
  code: 6
  video: 7
  blog: 5
  guideline: 0
bc_forms:
  - 9650
  - 9652
  - 9660
  - 9663
  - 9666
  - 9670
member_hash: c964d1ff327cfc1561fe3fc25ffa543c57303f23bcfb60bc9a45989aaa758f30
narrative: generated
---

# Develop report layouts

> Report layout development in Business Central: layout types (Word, Excel, RDLC, external, composite), designing and mapping fields, themes and header/footer layouts, choosing the layout a report uses, and available fonts. It answers how to create, edit, import, export and assign report layouts.

Path: [Analytics, business intelligence, and reporting](../../analytics-business-intelligence-and-repo.md) > [Develop reports](../develop-reports.md) > Develop report layouts · tier official · system reporting · narrative reviewed (checked by Opus)

## Overview

Report layouts control the content and format of reports and documents. Business Central supports Word, RDLC, Excel and external layouts, plus composite layouts that combine a reusable theme with header/footer layouts. The overview page explains these types and is the best place to begin.

The remaining pages cover the work by layout type. Word layouts can be designed with the Business Central add-in or by mapping content controls manually in the XML Mapping pane. Excel layouts use formulas, PivotTables, PivotCharts and multiple worksheets. RDLC layouts are designed in SQL Server Report Builder or the Visual Studio RDLC Report Designer extension. A getting-started page covers copying, exporting, importing and validating layouts and managing their status.

Two pages cover applying layouts: one on setting the default layout per company or switching it from the report request page, and one on setting up themes and header/footer layouts for consistent branding. A reference page lists the preinstalled fonts available for Excel, Word, RDLC and barcodes.

## Key points

- Layout types: Word, RDLC, Excel and external, plus composite layouts that combine reusable themes and headers/footers.
- Get started: choose a layout type, copy or export an existing layout, modify it in Word or Excel, import and validate it, and manage its status.
- Word design: the Business Central add-in adds report fields, builds repeating data tables, hides content conditionally and adds layout comments without manual XML editing.
- Manual Word mapping uses the XML Mapping pane for content controls, repeating rows, image fields and label mapping.
- Excel layouts support formulas, PivotTables, PivotCharts and multiple worksheets, with a data sheet holding report data.
- RDLC layouts are advanced designs built in SQL Server Report Builder or the Visual Studio RDLC Report Designer; RDL and RDLC files are supported.
- Layout selection: set a default per company, pick one temporarily on the report request page, or manage them in the Report Layouts and Report Layout Selection pages.
- Themes and header/footer layouts resolve independently, with priority from layout-specific to company and global defaults, and use a part status workflow.

## Learn pages

- [Available fonts](https://learn.microsoft.com/dynamics365/business-central/ui-fonts): Learn about the preinstalled fonts that you can use for your externally facing reports.
- [Design Word Layouts with the Business Central Add-in](https://learn.microsoft.com/dynamics365/business-central/ui-design-word-layouts-business-central-add-in): Learn how to use the Business Central Word add-in to add report fields, create repeating tables, add layout comments, and hide empty content.
- [Get started creating report layouts](https://learn.microsoft.com/dynamics365/business-central/ui-get-started-layouts): Learn how to create and customize report layouts in Dynamics 365 Business Central.
- [Map Data Fields in Word Layouts](https://learn.microsoft.com/dynamics365/business-central/ui-how-add-fields-word-report-layout): Learn how to use the XML Mapping Pane in Word to manually map Business Central report data, labels, images, and repeating rows to content controls.
- [Report and document layouts overview](https://learn.microsoft.com/dynamics365/business-central/ui-manage-report-layouts): Use report layouts to customize documents, for example, to personalize the font, logo, or page settings of PDF files you send to customers.
- [Set the Layout Used by a Report in Business Central](https://learn.microsoft.com/dynamics365/business-central/ui-set-report-layout): Learn how to select the default report layout for each company, temporarily use another layout, and distinguish layout selection from reusable branding.
- [Set Up Report Themes and Header/Footer Layouts](https://learn.microsoft.com/dynamics365/business-central/ui-set-up-report-themes-header-footer-layouts): Learn how to manage reusable report themes and header/footer layouts, approve them, and assign defaults across reports and companies in Business Central.
- [Working with Excel layouts](https://learn.microsoft.com/dynamics365/business-central/ui-excel-report-layouts): Learn how to create and modify report layouts that are built using Excel.
- [Working with RDLC Layouts](https://learn.microsoft.com/dynamics365/business-central/ui-rdlc-report-layouts): Get an introduction to RDLC report layouts.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [Composite Layouts in Business Central 29.0: Brand One Report End to End](../../../../posts/mohana-blog/tag-blogger-com-1999-blog-1492436440038408053-post-4594837215872264619--a1f1a65db5.md) (community post): "Composite layouts in Business Central 29.0: branding is split into three separate parts"
- [How Do I: Use the Word Add-in for Business Central Report Layouts](../../../../posts/thinkaboutit-be/7750.md) (community post): "simplifies designing Word layouts for document reports by enabling easy field insertion"
- [Quick Tip: BC28: What Is New in Document Reporting](../../../../posts/thinkaboutit-be/7813.md) (community post): "improved Word add-in with a redesigned data picker, a new table builder for layouts"
- [Quick Tip: It’s Time to Move to the Word Add-in Data Picker](../../../../posts/thinkaboutit-be/8096.md) (community post): "New fields inserted via the XML Mapping pane stopped mapping correctly in August 2026"
- [Business Central 29: Introducing Composite Document Layouts](../../../../posts/thinkaboutit-be/8250.md) (community post): "Composite Document Layouts, a modular approach to Word document layouts"
- [Introducing: Composite Document Layouts (2026 release wave 2)](../../../../videos/-vdhfNMNZQk.md) (video): "Composite layouts for documents; Body layout; Theme application"
- [20260126 - Excel Report Layouts: From Basics to Refreshable, Real-Time Reporting](../../../../videos/1ft4o9lQzsU.md) (video): "Excel report layouts; Power Query integration for refreshable reports"
- [What's New: Excel Layouts For Developers (2024 release wave 1)](../../../../videos/BofJJPqgrTI.md) (video): "translatable reports; excel layouts; power query; api integration"
- [What’s New: Reporting Features (For Developers and Consultants) (2024 release wave 2)](../../../../videos/hn92Al_x-s8.md) (video): "report layouts; word documents; excel reports; metadata; named formulas"
- [What's New: Enhanced Document Reporting (2026 release wave 1)](../../../../videos/mS6NDhj20yI.md) (video): "Enhanced Document Reporting; document layout; table builder"
- [What's New: Document Reporting (2025 release wave 2)](../../../../videos/vLcb31rfZ48.md) (video): "word layouts; data picker; document reporting; word addin"
- [What's new in Document Reporting: Word add-in (2026 release wave 2)](../../../../videos/XLUAuUWtJDw.md) (video): "Word add-in; document reporting; data picker; company information"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 9650 "Custom Report Layouts"](../../../../objects/page/9650.md) · on [Table 9650 "Custom Report Layout"](../../../../objects/table/9650.md)
- [Page 9652 "Report Layout Selection"](../../../../objects/page/9652.md) · on [Table 9651 "Report Layout Selection"](../../../../objects/table/9651.md)
- [Page 9660 "Report Layouts"](../../../../objects/page/9660.md)
- [Page 9663 "Tenant Report Layout Cfg"](../../../../objects/page/9663.md) · captioned "Report defaults for theme and header-footer"
- [Page 9666 "Report Theme and Header/Footer"](../../../../objects/page/9666.md) · captioned "Manage themes and header-footer layouts"
- [Page 9670 "Layout Theme and Header/Footer"](../../../../objects/page/9670.md) · captioned "Theme and header-footer per layout"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
