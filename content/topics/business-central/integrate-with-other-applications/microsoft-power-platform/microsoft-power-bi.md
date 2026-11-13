---
id: topic/business-central/integrate-with-other-applications/microsoft-power-platform/microsoft-power-bi
type: topic
title: Microsoft Power BI
summary: "Power BI integration with Business Central: how data is exposed (API pages, OData web services), how to build reports in Power BI Desktop, how to embed reports in Business Central pages, and which prebuilt apps exist. It answers setup, licensing, architecture, on-premises connection and report-management questions."
tier: official
language: en
system: reporting
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-13T01:01:22.016Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 5ee3b902c325f1b404a965b93873d379abc599ec0b8da9d0671879387eae06e9
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-how-use-financials-data-source-powerbi
    title: Build Power BI Reports with Business Central Data
    date: "2026-11-11"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-working-with-business-central-in-powerbi
    title: Connect Power BI to Business Central On-Premises
    date: "2026-11-11"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-how-use-powerbi-reports-factbox
    title: Display Custom Power BI Reports in Business Central
    date: "2026-11-11"
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
    title: Power BI Integration Architecture for Business Central
    date: "2026-11-11"
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
  posts:
    - post/yzhums-com/74366
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
  blog: 1
  guideline: 0
bc_forms:
  - 6316
  - 6317
  - 36951
member_hash: d4e7762dd9a24be6c3bacde025fdf30d6ae68b7fe15e2dc96c124d9c136e222d
narrative: generated
---

# Microsoft Power BI

> Power BI integration with Business Central: how data is exposed (API pages, OData web services), how to build reports in Power BI Desktop, how to embed reports in Business Central pages, and which prebuilt apps exist. It answers setup, licensing, architecture, on-premises connection and report-management questions.

Path: [Integrate with other applications](../../integrate-with-other-applications.md) > [Microsoft Power Platform](../microsoft-power-platform.md) > Microsoft Power BI · tier official · system reporting · narrative **unreviewed** (model text not yet checked)

## Overview

This section covers connecting Business Central to Power BI in both directions. Business Central data can be pulled into Power BI through the Power BI Desktop connector, API pages or OData web services, and Power BI reports can be shown inside Business Central, for example in the Power BI FactBox on list pages and on role centers.

The pages fit together in a sequence. Start with the introduction and the architecture page to understand the components, including read-only database replicas and read scale-out. Then use the enabling page for licensing and setup, and the on-premises page if you run Business Central on-premises. The report-building pages explain how to create reports from Business Central data and how to embed custom reports. The functional-area page lists the prebuilt Power BI apps, and the last page covers viewing, refreshing and sharing reports in Business Central.

## Key points

- Data is exposed to Power BI through API pages and OData web services, and the Power Query connector in Power BI Desktop reads it.
- Setup covers Power BI free and Pro licensing, with configuration for online and on-premises deployments.
- On-premises connection requires enabling OData web services, choosing NavUserPassword or Microsoft Entra ID authentication, assigning a web service access key, and registering an Azure application.
- Custom reports can be embedded in list pages through the Power BI FactBox, filtered with primary keys, and can be multi-page; the page mentions version 27.
- Prebuilt Power BI apps exist for Finance, Sales, Purchasing, Inventory, Inventory Valuation, Projects, Manufacturing, Sustainability and Subscription Billing.
- Reports built in Power BI Desktop can be customized in Power Query, use read-only replica configuration, and support cross-company reporting.
- Reports in Business Central can be refreshed manually or on a schedule and shared; dataflows and datamarts are also options.
- The architecture covers connectors, embedded report viewing, report management, default reports on role centers, and database read scale-out.

## Learn pages

- [Build Power BI Reports with Business Central Data](https://learn.microsoft.com/dynamics365/business-central/across-how-use-financials-data-source-powerbi): Connect Power BI Desktop to Business Central data, build accessible reports, publish and share them, and configure advanced connection options.
- [Connect Power BI to Business Central On-Premises](https://learn.microsoft.com/dynamics365/business-central/across-working-with-business-central-in-powerbi): Set up Power BI integration for Business Central on-premises, connect to OData web services, and publish reports for viewing in Business Central.
- [Display Custom Power BI Reports in Business Central](https://learn.microsoft.com/dynamics365/business-central/across-how-use-powerbi-reports-factbox): Create and configure custom Power BI reports for Business Central list pages, with report filters and layouts that work in the Power BI FactBox.
- [Enabling Power BI integration with Business Central](https://learn.microsoft.com/dynamics365/business-central/admin-powerbi-setup): Learn how to set up the connection to Power BI. With Power BI reports, you can get insights, business intelligence, and key performance indicators from your data.
  - In the observatory: [Page 810 "Web Services"](../../../../objects/page/810.md)
- [Introduction to Business Central and Power BI](https://learn.microsoft.com/dynamics365/business-central/admin-powerbi): Get an overview of using Power BI to get insights from your Business Central data.
- [Power BI apps/reports for functional areas](https://learn.microsoft.com/dynamics365/business-central/across-powerbi-apps-by-functional-area): Get an overview of the landing pages for the Power BI apps available in functional areas in Business Central.
- [Power BI Integration Architecture for Business Central](https://learn.microsoft.com/dynamics365/business-central/admin-powerbi-overview): Understand the components, data connections, read-only database access, and user workflow that support Power BI integration with Business Central.
- [Working with Power BI reports in Business Central](https://learn.microsoft.com/dynamics365/business-central/across-working-with-powerbi): Get insight, business intelligence, and key performance indicators from your Business Central data with Power BI.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [Business Central 2026 release wave 1 (BC28.2): Use new APIs for analyzing permissions for auditors and IT staff](../../../../posts/yzhums-com/74366.md) (community post): "Organizations can integrate APIs with Power BI and Copilot Studio to create advanced auditing reports"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 6316 "Sustainability Report Power BI"](../../../../objects/page/6316.md) · captioned "Sustainability Report (Power BI)"
- [Page 6317 "To Net Zero Carbon Power BI"](../../../../objects/page/6317.md) · captioned "Journey to Net Zero Carbon (Power BI)"
- [Page 36951 "PowerBI Reports Setup"](../../../../objects/page/36951.md) · captioned "Power BI Reports Setup" · on [Table 36951 "PowerBI Reports Setup"](../../../../objects/table/36951.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
