---
id: topic/dev-itpro/integration/integrating-business-central-with-office/integrating-with-microsoft-excel
type: topic
title: Integrating with Microsoft Excel
summary: "Integration of Business Central with Microsoft Excel: viewing and editing list data in Excel, controlling the Edit in Excel action, importing business data, and building Excel report layouts. It answers questions about Excel-based data editing, permissions, data import and reporting."
tier: official
language: en
system: reporting
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-11T00:59:22.225Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: eaccdddc7082ceee028b50cff589baf39ff2fb1762d479784d6911fa58f38af9
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-edit-in-excel-lists
    title: Controlling Edit in Excel on list pages
    date: "2024-05-02"
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
    url: https://learn.microsoft.com/dynamics365/business-central/across-import-data-configuration-packages
    title: Import Business Data into Business Central with Excel
    date: "2026-11-09"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-work-with-excel
    title: View and Edit Business Central Data in Excel
    date: "2026-11-09"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-edit-in-excel-lists
    - https://learn.microsoft.com/dynamics365/business-central/ui-excel-report-layouts
    - https://learn.microsoft.com/dynamics365/business-central/across-import-data-configuration-packages
    - https://learn.microsoft.com/dynamics365/business-central/across-work-with-excel
  objects:
    - object/page/1480
    - object/page/9660
    - object/page/9662
  features: []
  topics:
    - topic/dev-itpro/integration/integrating-business-central-with-office
  localizations: []
  videos:
    - video/6zj34hjbpGU
  posts:
    - post/aardvarklabs-blog/1824
    - post/yzhums-com/69812
  guidelines: []
learn_toc_path:
  - Integration
  - Integrating Business Central with Office apps and Microsoft 365
  - Integrating with Microsoft Excel
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/integration/integrating-business-central-with-office
children: []
coverage:
  learn: 4
  code: 3
  video: 1
  blog: 2
  guideline: 0
bc_forms:
  - 1480
  - 9660
  - 9662
member_hash: e79c59b4bfb2f955687f7d4482f7f5aebb4304a41b60d0a11aa7b61c9f50cb31
narrative: generated
---

# Integrating with Microsoft Excel

> Integration of Business Central with Microsoft Excel: viewing and editing list data in Excel, controlling the Edit in Excel action, importing business data, and building Excel report layouts. It answers questions about Excel-based data editing, permissions, data import and reporting.

Path: [Integration](../../integration.md) > [Integrating Business Central with Office apps and Microsoft 365](../integrating-business-central-with-office.md) > Integrating with Microsoft Excel · tier official · system reporting · narrative **unreviewed** (model text not yet checked)

## Overview

This section covers four ways Business Central works with Excel. Users can export list data with Open in Excel, or edit it with Edit in Excel and publish changes back through the Excel Add-in pane. Copilot in Excel can help with data cleaning, preparation and multi-step workflows.

Administrators control who can use Edit in Excel on list pages through permission sets, and on-premises installations need extra setup. Separate pages cover importing data from Excel files and other finance systems with assisted setup guides, data migration wizards and configuration packages. They also cover creating Excel report layouts that use formulas, PivotTables and PivotCharts.

Start with the page on viewing and editing data in Excel for everyday use. Go to the Edit in Excel control page for permissions or on-premises setup. Use the import page for migration and the report layout page for reporting.

## Key points

- Open in Excel exports a list; Edit in Excel lets users change data and publish it back to Business Central.
- Copilot in Excel can assist with data cleaning, preparation, analysis and multi-step workflows.
- Edit in Excel is controlled by permission sets: EDIT IN EXCEL - VIEW, EDIT IN EXCEL-ADMIN and EXCEL EXPORT ACTION.
- On-premises deployments need additional configuration for Edit in Excel.
- Data import uses the Excel add-in, data migration wizards and configuration packages for customers, vendors, inventory and accounts.
- Migration paths are described for QuickBooks, Dynamics GP and Dynamics NAV.
- Excel report layouts support formulas, PivotTables, PivotCharts, multiple worksheets, worksheet protection and sensitivity labels.
- The Excel report layout guide mentions version 29 and covers data sheet requirements and creating layouts from scratch or from existing ones.

## Learn pages

- [Controlling Edit in Excel on list pages](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-edit-in-excel-lists): This article explains how to control the Edit in Excel system action on list pages.
- [Create Excel Report Layouts in Business Central](https://learn.microsoft.com/dynamics365/business-central/ui-excel-report-layouts): Learn how to create and import Excel report layouts in Business Central, configure data sheets, and preserve the dataset structure in your workbook.
- [Import Business Data into Business Central with Excel](https://learn.microsoft.com/dynamics365/business-central/across-import-data-configuration-packages): Learn how to prepare business data in Excel, import it through Business Central configuration packages, and validate the data before applying it.
- [View and Edit Business Central Data in Excel](https://learn.microsoft.com/dynamics365/business-central/across-work-with-excel): Learn when to open Business Central lists in Excel for analysis and when to use the Excel add-in to edit records and publish your changes.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [Step-by-Step Guide to Excel Reporting in Business Central](../../../../posts/aardvarklabs-blog/1824.md) (community post): "uploading the customized layout back to Business Central"
- [Dynamics 365 Business Central: How to view excel reports (Excel Layout) directly from the web without downloading files (Excel Online)](../../../../posts/yzhums-com/69812.md) (community post): "Excel layouts can open in Excel for the web instead of downloading"
- [How Business Central Integrates with Microsoft Excel (2025)](../../../../videos/6zj34hjbpGU.md) (video): "Export data to Excel; Open or Edit in Excel option"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 1480 "Excel Centralized Depl. Wizard"](../../../../objects/page/1480.md) · captioned "Excel Add-in Centralized Deployment" · on [Table 1480 "Edit in Excel Settings"](../../../../objects/table/1480.md)
- [Page 9660 "Report Layouts"](../../../../objects/page/9660.md)
- [Page 9662 "Report Layout New Dialog"](../../../../objects/page/9662.md) · captioned "Add New Layout for a Report"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
