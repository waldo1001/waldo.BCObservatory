---
id: topic/business-central/integrate-with-other-applications/microsoft-office-apps-and-microsoft-365/microsoft-excel
type: topic
title: Microsoft Excel
summary: "Microsoft Excel integration with Business Central: viewing and editing data in Excel, setting up the Excel add-in for on-premises, importing data from Excel or configuration packages, and building Excel report layouts. It answers how-to and setup questions for these tasks."
tier: official
language: en
system: reporting
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:26:23.617Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: a677bf0f4b4146bd24e67e6468fac666364891e0f943e4bc67aaabce30999e40
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/configuring-excel-addin
    title: Setting up the Excel Add-In for Editing Data
    date: "2024-09-18"
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
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/configuring-excel-addin
    - https://learn.microsoft.com/dynamics365/business-central/across-import-data-configuration-packages
    - https://learn.microsoft.com/dynamics365/business-central/across-work-with-excel
    - https://learn.microsoft.com/dynamics365/business-central/ui-excel-report-layouts
  objects: []
  features: []
  topics:
    - topic/business-central/integrate-with-other-applications/microsoft-office-apps-and-microsoft-365
  localizations: []
  videos:
    - video/1QuV_vkbNVU
    - video/6dEZQlmBlyI
    - video/PIWxU93eCT4
  posts: []
  guidelines: []
learn_toc_path:
  - Integrate with other applications
  - Microsoft Office apps and Microsoft 365
  - Microsoft Excel
toc_file: business-central/TOC.md
parent: topic/business-central/integrate-with-other-applications/microsoft-office-apps-and-microsoft-365
children: []
coverage:
  learn: 4
  code: 0
  video: 3
  blog: 0
  guideline: 0
bc_forms:
  - 1480
  - 9650
  - 9652
member_hash: e5822a943df13a5fcccd26b295eb1e320a6d73b8f020cf5ca1b5b6fbd6c30f55
narrative: generated
---

# Microsoft Excel

> Microsoft Excel integration with Business Central: viewing and editing data in Excel, setting up the Excel add-in for on-premises, importing data from Excel or configuration packages, and building Excel report layouts. It answers how-to and setup questions for these tasks.

Path: [Integrate with other applications](../../integrate-with-other-applications.md) > [Microsoft Office apps and Microsoft 365](../microsoft-office-apps-and-microsoft-365.md) > Microsoft Excel · tier official · system reporting · narrative reviewed by Opus

## Overview

This section covers the ways Business Central works with Excel. Users can open list data in Excel for analysis or edit it in Excel and publish changes back. They can also import data from other finance systems, and design report layouts as Excel workbooks.

The pages are independent tasks. Start with "Viewing and editing in Excel from Business Central" for the Open in Excel and Edit in Excel actions. On-premises deployments need the add-in set up first, which involves Azure registration and server configuration. "Use Excel to import data" covers migration, and "Working with Excel layouts" covers report layouts with formulas, PivotTables and PivotCharts.

## Key points

- Open in Excel exports list data for analysis; Edit in Excel lets users change data and publish it back to Business Central.
- The viewing and editing page lists filter support, multi-environment support and agent mode among its features.
- On-premises Excel add-in setup involves Microsoft Entra authentication, Web API exposure, OData services, SSL/HTTPS and delegated permissions.
- The add-in setup page references 2022 release wave 1 and 2021 release wave 2.
- Data import from other finance systems can use Excel files or configuration packages.
- The default configuration package supports 27 tables covering master data and transactions.
- Excel report layouts can include formulas, PivotTables, PivotCharts and multiple worksheets, including a data sheet.

## Learn pages

- [Setting up the Excel Add-In for Editing Data](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/configuring-excel-addin): Learn about how to configure the Excel add-in so users can edit data in Excel and push back to Business Central.
- [Use Excel to import data](https://learn.microsoft.com/dynamics365/business-central/across-import-data-configuration-packages): Use the default configuration package to add customer data in Excel and import the data back into Business Central.
- [Viewing and editing in Excel from Business Central](https://learn.microsoft.com/dynamics365/business-central/across-work-with-excel): Learn how to open pages in Microsoft Excel from Business Central for better data analysis.
- [Working with Excel layouts](https://learn.microsoft.com/dynamics365/business-central/ui-excel-report-layouts): Learn how to create and modify report layouts that are built using Excel.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [Introducing Spreadsheets for Business Central](../../../../videos/1QuV_vkbNVU.md) (video): "Spreadsheets for Business Central; Regions; Virtual Fields; Page Regions"
- [Use Data from a Report inside your Spreadsheet with Business Central (Advanced Spreadsheets)](../../../../videos/6dEZQlmBlyI.md) (video): "Use Data from a Report inside your Spreadsheet with Business Central"
- [What's Cooking in Business Central: Edit Sales Price Lists in Excel](../../../../videos/PIWxU93eCT4.md) (video): "Edit sales price lists in Excel"

## Business Central pages and reports

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 1480, 9650, 9652.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
