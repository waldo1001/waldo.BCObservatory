---
id: topic/dev-itpro/integration/integrating-business-central-with-office/integrating-with-microsoft-excel
type: topic
title: Integrating with Microsoft Excel
summary: Integrating Business Central with Microsoft Excel covers viewing, editing, importing and reporting with Excel. It answers questions about Open in Excel and Edit in Excel, permission sets that control Edit in Excel, importing data through Excel or configuration packages, and Excel report layouts.
tier: official
language: en
system: reporting
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:26:53.718Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 3af3ec47a455bf4e7a8b140e5edc9ce8decf9e94add086d0ab9807c01905ff25
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-edit-in-excel-lists
    title: Controlling Edit in Excel on list pages
    date: "2024-05-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-import-data-configuration-packages
    title: Use Excel to import data
    date: "2026-06-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-work-with-excel
    title: Viewing and editing in Excel from Business Central
    date: "2026-01-26"
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
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-edit-in-excel-lists
    - https://learn.microsoft.com/dynamics365/business-central/across-import-data-configuration-packages
    - https://learn.microsoft.com/dynamics365/business-central/across-work-with-excel
    - https://learn.microsoft.com/dynamics365/business-central/ui-excel-report-layouts
  objects: []
  features: []
  topics:
    - topic/dev-itpro/integration/integrating-business-central-with-office
  localizations: []
  videos:
    - video/6zj34hjbpGU
  posts: []
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
  code: 0
  video: 1
  blog: 0
  guideline: 0
bc_forms:
  - 1480
  - 9650
  - 9652
member_hash: e79c59b4bfb2f955687f7d4482f7f5aebb4304a41b60d0a11aa7b61c9f50cb31
narrative: generated
---

# Integrating with Microsoft Excel

> Integrating Business Central with Microsoft Excel covers viewing, editing, importing and reporting with Excel. It answers questions about Open in Excel and Edit in Excel, permission sets that control Edit in Excel, importing data through Excel or configuration packages, and Excel report layouts.

Path: [Integration](../../integration.md) > [Integrating Business Central with Office apps and Microsoft 365](../integrating-business-central-with-office.md) > Integrating with Microsoft Excel · tier official · system reporting · narrative reviewed by Opus

## Overview

This section describes the ways Business Central works with Excel. Users can export list data to Excel for analysis, edit it in Excel and publish changes back, import data from other finance systems, and build report layouts in Excel workbooks.

The pages split by task. "Viewing and editing in Excel from Business Central" is the main entry point for the Open in Excel and Edit in Excel actions. "Controlling Edit in Excel on list pages" is for administrators who manage access through permission sets and on-premises setup. "Use Excel to import data" covers moving data in during migration. "Working with Excel layouts" covers report layouts with formulas, PivotTables and PivotCharts.

Start with the viewing and editing page if you are a user. Administrators should go next to the control page. Anyone migrating data should go to the import page.

## Key points

- Open in Excel exports list data for analysis. Edit in Excel lets users change data and publish it back to Business Central.
- Viewing and editing supports filters, the Excel add-in, multiple environments and agent mode.
- Edit in Excel access is controlled by permission sets: EDIT IN EXCEL - VIEW, EDIT IN EXCEL-ADMIN and EXCEL EXPORT ACTION.
- On-premises deployments need additional configuration for Edit in Excel.
- Data from other finance systems can be imported through Excel files or configuration packages.
- The default configuration package supports 27 tables covering master data and transactions.
- Excel report layouts can include formulas, PivotTables, PivotCharts and multiple worksheets, built on a data sheet.

## Learn pages

- [Controlling Edit in Excel on list pages](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-edit-in-excel-lists): This article explains how to control the Edit in Excel system action on list pages.
- [Use Excel to import data](https://learn.microsoft.com/dynamics365/business-central/across-import-data-configuration-packages): Use the default configuration package to add customer data in Excel and import the data back into Business Central.
- [Viewing and editing in Excel from Business Central](https://learn.microsoft.com/dynamics365/business-central/across-work-with-excel): Learn how to open pages in Microsoft Excel from Business Central for better data analysis.
- [Working with Excel layouts](https://learn.microsoft.com/dynamics365/business-central/ui-excel-report-layouts): Learn how to create and modify report layouts that are built using Excel.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [How Business Central Integrates with Microsoft Excel (2025)](../../../../videos/6zj34hjbpGU.md) (video): "Export data to Excel; Open or Edit in Excel option; Pivot table creation"

## Business Central pages and reports

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 1480, 9650, 9652.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
