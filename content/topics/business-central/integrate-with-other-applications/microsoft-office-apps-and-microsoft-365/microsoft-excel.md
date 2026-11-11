---
id: topic/business-central/integrate-with-other-applications/microsoft-office-apps-and-microsoft-365/microsoft-excel
type: topic
title: Microsoft Excel
summary: "Microsoft Excel integration with Business Central: building Excel report layouts, importing business data from Excel, setting up the Excel add-in for on-premises, and viewing or editing Business Central data in Excel. It answers how-to and setup questions for these tasks."
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
  input_hash: c7bbd466f2dbe095bd9b67e0786d2640ebeb502fdf5469bfd3f0ed69a550b3df
evidence:
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
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/configuring-excel-addin
    title: Setting up the Excel Add-In for Editing Data
    date: "2024-09-18"
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
    - https://learn.microsoft.com/dynamics365/business-central/ui-excel-report-layouts
    - https://learn.microsoft.com/dynamics365/business-central/across-import-data-configuration-packages
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/configuring-excel-addin
    - https://learn.microsoft.com/dynamics365/business-central/across-work-with-excel
  objects:
    - object/page/1480
    - object/page/9660
    - object/page/9662
  features: []
  topics:
    - topic/business-central/integrate-with-other-applications/microsoft-office-apps-and-microsoft-365
  localizations: []
  videos:
    - video/_OClSlushOU
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
  code: 3
  video: 2
  blog: 0
  guideline: 0
bc_forms:
  - 1480
  - 9660
  - 9662
member_hash: e5822a943df13a5fcccd26b295eb1e320a6d73b8f020cf5ca1b5b6fbd6c30f55
narrative: generated
---

# Microsoft Excel

> Microsoft Excel integration with Business Central: building Excel report layouts, importing business data from Excel, setting up the Excel add-in for on-premises, and viewing or editing Business Central data in Excel. It answers how-to and setup questions for these tasks.

Path: [Integrate with other applications](../../integrate-with-other-applications.md) > [Microsoft Office apps and Microsoft 365](../microsoft-office-apps-and-microsoft-365.md) > Microsoft Excel · tier official · system reporting · narrative **unreviewed** (model text not yet checked)

## Overview

This section covers the ways Business Central works with Excel. Users can export or edit list data in Excel, import data during migration or initial setup, and design reports as Excel layouts that use formulas, PivotTables and PivotCharts.

The pages are independent tasks. "View and Edit Business Central Data in Excel" is the starting point for everyday use, with the Open in Excel and Edit in Excel actions and Copilot in Excel for data preparation and analysis. "Import Business Data into Business Central with Excel" covers bringing in customers, vendors, inventory and accounts. "Create Excel Report Layouts" is for report authors. "Setting up the Excel Add-In for Editing Data" is for administrators of on-premises deployments, who must configure Azure registration and the server first.

## Key points

- Open in Excel exports a list to Excel; Edit in Excel opens it with the Excel add-in pane so changes can be published back to Business Central.
- Copilot in Excel can be used for data cleaning, preparation and analysis, including multi-step workflows.
- Excel report layouts support formulas, PivotTables, PivotCharts, multiple worksheets, interactive elements, worksheet protection and sensitivity labels (version 29 guidance).
- Excel layouts can be created from scratch or from an existing layout and then added to a report; the data sheet has specific requirements.
- Data import options include the Excel add-in, assisted setup guides, data migration wizards and configuration packages.
- Migration paths are described for QuickBooks, Dynamics GP and Dynamics NAV.
- On-premises add-in setup needs Microsoft Entra authentication, Web API and OData service exposure, SSL/HTTPS and delegated permissions.
- The on-premises add-in setup page references 2021 release wave 2 and 2022 release wave 1.

## Learn pages

- [Create Excel Report Layouts in Business Central](https://learn.microsoft.com/dynamics365/business-central/ui-excel-report-layouts): Learn how to create and import Excel report layouts in Business Central, configure data sheets, and preserve the dataset structure in your workbook.
- [Import Business Data into Business Central with Excel](https://learn.microsoft.com/dynamics365/business-central/across-import-data-configuration-packages): Learn how to prepare business data in Excel, import it through Business Central configuration packages, and validate the data before applying it.
- [Setting up the Excel Add-In for Editing Data](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/configuring-excel-addin): Learn about how to configure the Excel add-in so users can edit data in Excel and push back to Business Central.
  - Prerequisite: Microsoft Entra ID must be configured for authentication of the server instance, clients, and users.
  - Prerequisite: OData must be enabled and use Secure Sockets Layer (SSL) for authentication.
  - Prerequisite: Web server must be configured to use SSL (https) for secure connections.
  - Prerequisite: Client computers must have a supported version of Excel installed.
  - Step: Expose the Business Central Web API in Microsoft Entra ID by setting the Application ID URI on the Expose API page.
  - Step: Register a separate Microsoft Entra application for the Excel add-in and add optional claims for email and upn.
  - Step: Configure the server instance by setting Excel add-in client ID, Web Client Base URL, OData Base URL, and enabling OData and API services.
  - The add-in enables the Edit in Excel action on list pages, allowing users to push changed data back to Business Central, unlike the basic Open in Excel action.
- [View and Edit Business Central Data in Excel](https://learn.microsoft.com/dynamics365/business-central/across-work-with-excel): Learn when to open Business Central lists in Excel for analysis and when to use the Excel add-in to edit records and publish your changes.

Key facts from Microsoft Learn (CC BY 4.0), in our own words (D106); open the page for the full text.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [Work Seamlessly with Microsoft Outlook, Excel, and Teams](../../../../videos/_OClSlushOU.md) (video): "Export to Excel for analysis; Item discounts in Excel"
- [What's Cooking in Business Central: Edit Sales Price Lists in Excel](../../../../videos/PIWxU93eCT4.md) (video): "Edit sales price lists in Excel"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 1480 "Excel Centralized Depl. Wizard"](../../../../objects/page/1480.md) · captioned "Excel Add-in Centralized Deployment" · on [Table 1480 "Edit in Excel Settings"](../../../../objects/table/1480.md)
- [Page 9660 "Report Layouts"](../../../../objects/page/9660.md)
- [Page 9662 "Report Layout New Dialog"](../../../../objects/page/9662.md) · captioned "Add New Layout for a Report"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
