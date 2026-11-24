---
id: topic/business-central/analytics-business-intelligence-and-repo/develop-reports/develop-report-layouts
type: topic
title: Develop report layouts
summary: "Report layout development in Business Central: choosing Word, Excel, RDLC or external layouts, designing and mapping them, setting which layout a report uses, configuring themes and header/footer layouts, and checking available fonts. It answers how-to and setup questions about report appearance."
tier: official
language: en
system: reporting
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-24T01:05:28.728Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 3f30a91a2900dcb9e08aac4322b561b70d815ba6fbd5c338cb4489b5f0a140e9
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
    url: https://learn.microsoft.com/dynamics365/business-central/ui-rdlc-report-layouts
    title: Working with RDLC Layouts
    date: "2026-06-17"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/ui-fonts
    - https://learn.microsoft.com/dynamics365/business-central/ui-excel-report-layouts
    - https://learn.microsoft.com/dynamics365/business-central/ui-design-word-layouts-business-central-add-in
    - https://learn.microsoft.com/dynamics365/business-central/ui-get-started-layouts
    - https://learn.microsoft.com/dynamics365/business-central/ui-how-add-fields-word-report-layout
    - https://learn.microsoft.com/dynamics365/business-central/ui-manage-report-layouts
    - https://learn.microsoft.com/dynamics365/business-central/ui-set-report-layout
    - https://learn.microsoft.com/dynamics365/business-central/ui-set-up-report-themes-header-footer-layouts
    - https://learn.microsoft.com/dynamics365/business-central/ui-rdlc-report-layouts
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
    - video/z7UTBiCNOo8
  posts:
    - post/aardvarklabs-blog/2271
    - post/miljan-rs/698
    - post/mohana-blog/tag-blogger-com-1999-blog-1492436440038408053-post-4594837215872264619--a1f1a65db5
    - post/thinkaboutit-be/8096
    - post/thinkaboutit-be/8250
    - post/yzhums-com/76147
    - post/yzhums-com/76205
    - post/yzhums-com/76231
    - post/yzhums-com/76763
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
  code: 7
  video: 8
  blog: 9
  guideline: 0
bc_forms:
  - 9650
  - 9652
  - 9660
  - 9662
  - 9663
  - 9666
  - 9670
member_hash: c964d1ff327cfc1561fe3fc25ffa543c57303f23bcfb60bc9a45989aaa758f30
narrative: generated
---

# Develop report layouts

> Report layout development in Business Central: choosing Word, Excel, RDLC or external layouts, designing and mapping them, setting which layout a report uses, configuring themes and header/footer layouts, and checking available fonts. It answers how-to and setup questions about report appearance.

Path: [Analytics, business intelligence, and reporting](../../analytics-business-intelligence-and-repo.md) > [Develop reports](../develop-reports.md) > Develop report layouts · tier official · system reporting · narrative **unreviewed** (model text not yet checked)

## Overview

Report layouts control the content and format of reports and documents. Business Central supports Word, Excel, RDLC and external layouts, plus composite layouts that combine reusable themes with header/footer parts. The section has no subtopics, so all guidance sits in nine pages.

Start with "Report and document layouts overview" and "Get started creating report layouts". They explain the layout types, how to export an existing layout or begin from a blank template, and how to manage status, validation and retirement on the Report Layouts page. Then pick the page for your layout type: Excel layouts, Word layouts (the Word add-in or the XML Mapping pane), or RDLC layouts.

Once a layout exists, "Set the Layout Used by a Report" covers choosing defaults per company or switching layouts from the request page. "Set Up Report Themes and Header/Footer Layouts" covers consistent branding across Word-based reports. "Available fonts" lists the fonts you can use in Excel, Word, RDL and barcode output.

## Key points

- Layout types are Word, Excel, RDLC and external. Composite layouts combine reusable themes and header/footer parts.
- You can create a layout by exporting an existing one to customize, or by starting from a blank template. The Report Layouts page manages status, validation and retirement.
- Excel layouts use formulas, PivotTables, PivotCharts and multiple worksheets. The page also covers data sheet requirements, worksheet protection and sensitivity labels (version 29).
- Word layouts can be designed with the Business Central Word add-in (Add Data task pane, insert table, add repeater, hide-if-empty controls). The XML Mapping pane is the alternative way to map fields (version 29).
- The XML Mapping pane maps fields to content controls, including repeating rows, image fields and labels, using a custom XML part.
- RDLC layouts are designed in SQL Server Report Builder or the Visual Studio RDLC Report Designer extension. They support RDL and RDLC files and layout export and import.
- You can set the default layout per company, or choose a layout temporarily from the report request page. The Report Layout Selection page also manages this.
- Themes and header/footer layouts resolve independently, with priority from layout-specific to company and global defaults. Parts follow a status workflow.

## Learn pages

- [Available Fonts in Business Central](https://learn.microsoft.com/dynamics365/business-central/ui-fonts): Learn about fonts for Business Central report layouts, including document fonts, MICR and check security fonts, barcode fonts, and OCR fonts.
- [Create Excel Report Layouts in Business Central](https://learn.microsoft.com/dynamics365/business-central/ui-excel-report-layouts): Learn how to create and import Excel report layouts in Business Central, configure data sheets, and preserve the dataset structure in your workbook.
- [Design Word Layouts with the Business Central Add-in](https://learn.microsoft.com/dynamics365/business-central/ui-design-word-layouts-business-central-add-in): Learn how to use the Business Central Word add-in to add report fields, create repeating tables, add layout comments, and hide empty content.
- [Get started creating report layouts](https://learn.microsoft.com/dynamics365/business-central/ui-get-started-layouts): Learn how to create and customize report layouts in Dynamics 365 Business Central.
- [Map Data Fields in Word Layouts](https://learn.microsoft.com/dynamics365/business-central/ui-how-add-fields-word-report-layout): Learn how to use the XML Mapping Pane in Word to manually map Business Central report data, labels, images, and repeating rows to content controls.
- [Report and document layouts overview](https://learn.microsoft.com/dynamics365/business-central/ui-manage-report-layouts): Use report layouts to customize documents, for example, to personalize the font, logo, or page settings of PDF files you send to customers.
- [Set the Layout Used by a Report in Business Central](https://learn.microsoft.com/dynamics365/business-central/ui-set-report-layout): Learn how to select the default report layout for each company, temporarily use another layout, and distinguish layout selection from reusable branding.
- [Set Up Report Themes and Header/Footer Layouts](https://learn.microsoft.com/dynamics365/business-central/ui-set-up-report-themes-header-footer-layouts): Learn how to manage reusable report themes and header/footer layouts, approve them, and assign defaults across reports and companies in Business Central.
- [Working with RDLC Layouts](https://learn.microsoft.com/dynamics365/business-central/ui-rdlc-report-layouts): Get an introduction to RDLC report layouts.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [Understanding RDLC Reports in Business Central](../../../../posts/aardvarklabs-blog/2271.md) (community post): "RDLC reports use Report Definition Language Client to create self-hosted pixel-perfect printed reports"
- [Conditional Page Breaks in Word Layouts for Business Central Reports](../../../../posts/miljan-rs/698.md) (community post): "Conditional page breaks in Word layouts for Business Central Reports"
- [Composite Layouts in Business Central 29.0: Brand One Report End to End](../../../../posts/mohana-blog/tag-blogger-com-1999-blog-1492436440038408053-post-4594837215872264619--a1f1a65db5.md) (community post): "Composite layouts in Business Central 29.0: branding is split into three separate parts"
- [Quick Tip: It’s Time to Move to the Word Add-in Data Picker](../../../../posts/thinkaboutit-be/8096.md) (community post): "New fields inserted via the XML Mapping pane stopped mapping correctly in August 2026"
- [Business Central 29: Introducing Composite Document Layouts](../../../../posts/thinkaboutit-be/8250.md) (community post): "Composite Document Layouts, a modular approach to Word document layouts"
- [Business Central 2026 release wave 2 (BC29): Brand document reports with report themes](../../../../posts/yzhums-com/76147.md) (community post): "Brand document reports with composable layout themes"
- [Business Central 2026 release wave 2 (BC29): Report layout subtype on Word layouts](../../../../posts/yzhums-com/76205.md) (community post): "Word layout report design introduces a new Subtype property"
- [Business Central 2026 release wave 2 (BC29): Reuse header/footer layouts across document reports](../../../../posts/yzhums-com/76231.md) (community post): "reuse and apply consistent header/footer layouts across document reports"
- [Dynamics 365 Business Central: How to quickly copy a report layout (Create a copy of the selected layout)](../../../../posts/yzhums-com/76763.md) (community post): "Copied layouts can be customized after creation"
- [Introducing: Composite Document Layouts (2026 release wave 2)](../../../../videos/-vdhfNMNZQk.md) (video): "Composite layouts for documents; Body layout; Theme application"
- [20260126 - Excel Report Layouts: From Basics to Refreshable, Real-Time Reporting](../../../../videos/1ft4o9lQzsU.md) (video): "Excel report layouts; Power Query integration for refreshable reports"
- [What's New: Excel Layouts For Developers (2024 release wave 1)](../../../../videos/BofJJPqgrTI.md) (video): "Translatable Excel Layouts; Report Metadata Worksheet; Refreshable Excel Reports via Power Query"
- [What’s New: Reporting Features (For Developers and Consultants) (2024 release wave 2)](../../../../videos/hn92Al_x-s8.md) (video): "report layouts; word documents; excel reports; metadata; named formulas"
- [What's New: Enhanced Document Reporting (2026 release wave 1)](../../../../videos/mS6NDhj20yI.md) (video): "word add-in; data picker; document layout; table builder; layout lifecycle"
- [What's New: Document Reporting (2025 release wave 2)](../../../../videos/vLcb31rfZ48.md) (video): "word layouts; data picker; document reporting; word addin"
- [What's new in Document Reporting: Word add-in (2026 release wave 2)](../../../../videos/XLUAuUWtJDw.md) (video): "Word add-in; document reporting; data picker; company information"
- [What's Cooking in Business Central: Excel Reports that Become Generally Available](../../../../videos/z7UTBiCNOo8.md) (video): "Excel Layouts for Built-in Reports; Report Customization in Excel"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 9650 "Custom Report Layouts"](../../../../objects/page/9650.md) · captioned "Custom Report Layouts (Obsoleted)" · on [Table 9650 "Custom Report Layout"](../../../../objects/table/9650.md)
- [Page 9652 "Report Layout Selection"](../../../../objects/page/9652.md) · captioned "Report Layout Selection (Obsoleted)" · on [Table 9651 "Report Layout Selection"](../../../../objects/table/9651.md)
- [Page 9660 "Report Layouts"](../../../../objects/page/9660.md)
- [Page 9662 "Report Layout New Dialog"](../../../../objects/page/9662.md) · captioned "Add New Layout for a Report"
- [Page 9663 "Tenant Report Layout Cfg"](../../../../objects/page/9663.md) · captioned "Report defaults for theme and header-footer"
- [Page 9666 "Report Theme and Header/Footer"](../../../../objects/page/9666.md) · captioned "Manage themes and header-footer layouts"
- [Page 9670 "Layout Theme and Header/Footer"](../../../../objects/page/9670.md) · captioned "Theme and header-footer per layout"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
