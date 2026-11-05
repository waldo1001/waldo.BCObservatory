---
id: topic/business-central/integrate-with-other-applications/microsoft-power-platform/microsoft-power-bi
type: topic
title: Microsoft Power BI
summary: "Power BI integration with Business Central: licensing, enabling data access through API pages and OData web services, building reports in Power BI Desktop, embedding reports in Business Central pages, and using prebuilt Power BI apps. It answers setup, report creation, and usage questions for online and on-premises deployments."
tier: official
language: en
system: reporting
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-05T00:55:36.087Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 862c49ef3ddb973c52a7abdd590b84ecddc14e9a068d4e231784d0162c3568fb
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
    url: https://learn.microsoft.com/dynamics365/business-central/across-powerbi-apps-by-functional-area
    title: Power BI apps/reports for functional areas
    date: "2026-11-03"
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
    - https://learn.microsoft.com/dynamics365/business-central/across-powerbi-apps-by-functional-area
    - https://learn.microsoft.com/dynamics365/business-central/admin-powerbi-overview
    - https://learn.microsoft.com/dynamics365/business-central/across-working-with-powerbi
  objects:
    - object/page/6316
    - object/page/6317
    - object/page/36951
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
  code: 3
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 6316
  - 6317
  - 36951
member_hash: d4e7762dd9a24be6c3bacde025fdf30d6ae68b7fe15e2dc96c124d9c136e222d
narrative: generated
---

# Microsoft Power BI

> Power BI integration with Business Central: licensing, enabling data access through API pages and OData web services, building reports in Power BI Desktop, embedding reports in Business Central pages, and using prebuilt Power BI apps. It answers setup, report creation, and usage questions for online and on-premises deployments.

Path: [Integrate with other applications](../../integrate-with-other-applications.md) > [Microsoft Power Platform](../microsoft-power-platform.md) > Microsoft Power BI · tier official · system reporting · narrative **unreviewed** (model text not yet checked)

## Overview

Power BI integration lets you retrieve Business Central data to build dashboards and reports, and show Power BI reports inside Business Central. Data is exposed through API pages and OData web services. The Power BI Desktop connector and Power Query are used to build reports. Online environments use read-only database replicas for reporting.

The pages follow a path from concept to practice. Start with the introduction and the architecture overview to see the components. Then use the enabling page for licensing and configuration. The on-premises page covers the extra steps: OData web services, access keys, and a Microsoft Entra ID app registration.

For building and using reports, the Power BI Desktop page covers connecting and publishing, and the custom reports page covers naming, sizing, and filtering for FactBox display on list pages. The functional areas page lists the prebuilt Power BI apps. The last page covers viewing, refreshing, and sharing reports inside Business Central.

## Key points

- Data reaches Power BI through API pages and OData web services; dataflows and datamarts are also mentioned.
- Both Power BI free and Pro licenses are covered in the enabling page.
- On-premises setup needs authentication configuration, OData web services (ODataV4 endpoint), a web service access key, and a Microsoft Entra ID app registration.
- Online environments use a read-only database replica for reporting.
- Power BI Desktop reports can use the connector, advanced query options, custom Power Query functions, and cross-company reporting, then be published for sharing.
- Custom reports for Business Central list pages need proper naming, sizing, and primary key filtering to appear in the Power BI FactBox.
- Prebuilt Power BI apps cover Finance, Sales, Purchasing, Inventory, Inventory Valuation, Projects, Manufacturing, Sustainability, and Subscription Billing.
- Reports in Business Central can be refreshed manually or on a schedule, and shared.

## Learn pages

- [Building reports in Power BI Desktop to display Business Central data](https://learn.microsoft.com/dynamics365/business-central/across-how-use-financials-data-source-powerbi): Learn how to make your data a Power BI source and build insightful business reports.
- [Connect to Power BI from Business Central on-premises\| Microsoft Docs](https://learn.microsoft.com/dynamics365/business-central/across-working-with-business-central-in-powerbi): Get insight, business intelligence, and KPIs from your Business Central data on-premises using Power BI.
- [Display custom Power BI reports](https://learn.microsoft.com/dynamics365/business-central/across-how-use-powerbi-reports-factbox): Use the Power BI FactBox to display interactive Power BI reports and gain deeper insights into data on key list pages.
- [Enabling Power BI integration with Business Central](https://learn.microsoft.com/dynamics365/business-central/admin-powerbi-setup): Learn how to set up the connection to Power BI. With Power BI reports, you can get insights, business intelligence, and key performance indicators from your data.
  - In the observatory: [Page 810 "Web Services"](../../../../objects/page/810.md)
- [Introduction to Business Central and Power BI](https://learn.microsoft.com/dynamics365/business-central/admin-powerbi): Get an overview of using Power BI to get insights from your Business Central data.
- [Power BI apps/reports for functional areas](https://learn.microsoft.com/dynamics365/business-central/across-powerbi-apps-by-functional-area): Get an overview of the landing pages for the Power BI apps available in functional areas in Business Central.
- [Power BI integration component and architecture overview for Business Central\| Microsoft Docs](https://learn.microsoft.com/dynamics365/business-central/admin-powerbi-overview): Learn about the different aspects of Power BI integration with Business Central.
- [Working with Power BI reports in Business Central](https://learn.microsoft.com/dynamics365/business-central/across-working-with-powerbi): Get insight, business intelligence, and key performance indicators from your Business Central data with Power BI.

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 6316 "Sustainability Report Power BI"](../../../../objects/page/6316.md) · captioned "Sustainability Report (Power BI)"
- [Page 6317 "To Net Zero Carbon Power BI"](../../../../objects/page/6317.md) · captioned "Journey to Net Zero Carbon (Power BI)"
- [Page 36951 "PowerBI Reports Setup"](../../../../objects/page/36951.md) · captioned "Power BI Reports Setup" · on [Table 36951 "PowerBI Reports Setup"](../../../../objects/table/36951.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
