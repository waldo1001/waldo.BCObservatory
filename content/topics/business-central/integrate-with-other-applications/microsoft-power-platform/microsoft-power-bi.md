---
id: topic/business-central/integrate-with-other-applications/microsoft-power-platform/microsoft-power-bi
type: topic
title: Microsoft Power BI
summary: "Microsoft Power BI integration with Business Central: licensing, enabling and connecting online and on-premises environments, building reports in Power BI Desktop, showing reports in FactBoxes, and using the built-in Power BI apps. It answers setup, architecture, and report-building questions."
tier: official
language: en
system: reporting
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:21:34.712Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 8bc4f24887a6b9427121ba592b3e58f1de392ed17177af8ea0059578ea21bfa6
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-how-use-financials-data-source-powerbi
    title: Building reports in Power BI Desktop to display Business Central data
    date: "2025-10-16"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-working-with-business-central-in-powerbi
    title: Connect to Power BI from Business Central on-premises| Microsoft Docs
    date: "2025-10-23"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-how-use-powerbi-reports-factbox
    title: Display custom Power BI reports
    date: "2025-10-16"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-powerbi-setup
    title: Enabling Power BI integration with Business Central
    date: "2026-06-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-powerbi
    title: Introduction to Business Central and Power BI
    date: "2026-06-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-powerbi-overview
    title: Power BI integration component and architecture overview for Business Central| Microsoft Docs
    date: "2024-04-26"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-powerbi-business-central-apps
    title: Use the Business Central apps in Power BI
    date: "2025-10-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-working-with-powerbi
    title: Working with Power BI reports in Business Central
    date: "2026-06-17"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/across-how-use-financials-data-source-powerbi
    - https://learn.microsoft.com/dynamics365/business-central/across-working-with-business-central-in-powerbi
    - https://learn.microsoft.com/dynamics365/business-central/across-how-use-powerbi-reports-factbox
    - https://learn.microsoft.com/dynamics365/business-central/admin-powerbi-setup
    - https://learn.microsoft.com/dynamics365/business-central/admin-powerbi
    - https://learn.microsoft.com/dynamics365/business-central/admin-powerbi-overview
    - https://learn.microsoft.com/dynamics365/business-central/across-powerbi-business-central-apps
    - https://learn.microsoft.com/dynamics365/business-central/across-working-with-powerbi
  objects: []
  features: []
  topics:
    - topic/business-central/integrate-with-other-applications/microsoft-power-platform
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Integrate with other applications
  - Microsoft Power Platform
  - Microsoft Power BI
toc_file: business-central/TOC.md
parent: topic/business-central/integrate-with-other-applications/microsoft-power-platform
children: []
coverage:
  learn: 8
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 6316
  - 6317
  - 36951
member_hash: ad8088d8284c837e377bde659aa746188f4a289b98ea042bd26853f8be90ab7d
narrative: generated
---

# Microsoft Power BI

> Microsoft Power BI integration with Business Central: licensing, enabling and connecting online and on-premises environments, building reports in Power BI Desktop, showing reports in FactBoxes, and using the built-in Power BI apps. It answers setup, architecture, and report-building questions.

Path: [Integrate with other applications](../../integrate-with-other-applications.md) > [Microsoft Power Platform](../microsoft-power-platform.md) > Microsoft Power BI · tier official · system reporting · narrative reviewed by Opus

## Overview

This section covers how Business Central works with Power BI. It starts with an introduction and an architecture overview, which explain the connectors, embedded reports, default reports, and the read-only database replica used for online environments. A page on enabling the integration covers licensing and how data is exposed through API pages and OData web services.

For setup and building, one page covers connecting an on-premises deployment: OData web services, access keys, and a Microsoft Entra ID app registration. Another covers building reports in Power BI Desktop with the connector. A further page covers building reports for list pages so they show in the Power BI FactBox.

For everyday use, one page explains the Business Central apps in Power BI for CRM, Finance, and Sales, including installation and troubleshooting. Another covers viewing, refreshing, and sharing reports inside Business Central. Start with the introduction, then go to the enabling page for your deployment type.

## Key points

- Data reaches Power BI through API pages and OData web services; Dataflows and Power BI apps are also covered.
- Integration needs a Power BI free or Pro license, as described on the enabling page.
- Online environments use a read-only database replica for Power BI Desktop and Power BI Service reports.
- On-premises setup involves enabling OData web services (ODataV4 endpoint), a web service access key, and registering an application in Microsoft Entra ID.
- The Power BI Desktop connector supports API and OData sources, custom Power Query functions, and cross-company reporting.
- Reports for list pages need proper naming, sizing, and primary key filtering to display in the Power BI FactBox.
- Built-in Power BI apps for CRM, Finance, and Sales need company connection parameters and a data refresh schedule.
- Reports in Business Central can be refreshed manually or on a schedule, and shared.

## Learn pages

- [Building reports in Power BI Desktop to display Business Central data](https://learn.microsoft.com/dynamics365/business-central/across-how-use-financials-data-source-powerbi): Learn how to make your data a Power BI source and build insightful business reports.
- [Connect to Power BI from Business Central on-premises\| Microsoft Docs](https://learn.microsoft.com/dynamics365/business-central/across-working-with-business-central-in-powerbi): Get insight, business intelligence, and KPIs from your Business Central data on-premises using Power BI.
- [Display custom Power BI reports](https://learn.microsoft.com/dynamics365/business-central/across-how-use-powerbi-reports-factbox): Use the Power BI FactBox to display interactive Power BI reports and gain deeper insights into data on key list pages.
- [Enabling Power BI integration with Business Central](https://learn.microsoft.com/dynamics365/business-central/admin-powerbi-setup): Learn how to set up the connection to Power BI. With Power BI reports, you can get insights, business intelligence, and key performance indicators from your data.
- [Introduction to Business Central and Power BI](https://learn.microsoft.com/dynamics365/business-central/admin-powerbi): Get an overview of using Power BI to get insights from your Business Central data.
- [Power BI integration component and architecture overview for Business Central\| Microsoft Docs](https://learn.microsoft.com/dynamics365/business-central/admin-powerbi-overview): Learn about the different aspects of Power BI integration with Business Central.
- [Use the Business Central apps in Power BI](https://learn.microsoft.com/dynamics365/business-central/across-powerbi-business-central-apps): Easily gain insights, business intelligence, and KPIs from your Business Central data using the Business Central apps for Power BI.
- [Working with Power BI reports in Business Central](https://learn.microsoft.com/dynamics365/business-central/across-working-with-powerbi): Get insight, business intelligence, and key performance indicators from your Business Central data with Power BI.

## Business Central pages and reports

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 6316, 6317, 36951.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
