---
id: topic/business-central/analytics-business-intelligence-and-repo/kpis-dashboards-and-financial-reports/power-bi-apps-for-business-central
type: topic
title: Power BI apps for Business Central
summary: "Power BI apps for Business Central: how to install the connector and template apps, set up standard, fiscal, or week-based calendars, and use the semantic models and KPIs by functional area. Also covers multi-language use, back links to source documents, and FAQ topics such as licensing and refresh."
tier: official
language: en
system: reporting
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:21:00.693Z"
  flags: []
generated:
  at: "2026-10-07T15:52:42.721Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 71452037a9fd0919b004c5ee2103e65d8700ecf75b25d0fcdce549765462f90b
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-powerbi-configure-fiscal-calendar
    title: Configure a fiscal calendar for your Power BI reports
    date: "2026-03-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-powerbi-configure-standard-calendar
    title: Configure a standard calendar for your Power BI reports
    date: "2026-03-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-powerbi-configure-week-based-calendar
    title: Configure a week-based calendar
    date: "2026-02-19"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-powerbi-install-business-central-apps
    title: Install Power BI apps for Business Central
    date: "2026-09-14"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-powerbi-business-central-apps-multi-language
    title: Multi-language Power BI apps for Business Central
    date: "2025-10-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-powerbi-apps-faq
    title: Power BI apps FAQ
    date: "2025-10-29"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-powerbi-apps-by-functional-area
    title: Power BI apps/reports for functional areas
    date: "2026-09-14"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/powerbi-back-links
    title: Use back links to explore aggregated data in visuals
    date: "2025-06-11"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/across-powerbi-configure-fiscal-calendar
    - https://learn.microsoft.com/dynamics365/business-central/across-powerbi-configure-standard-calendar
    - https://learn.microsoft.com/dynamics365/business-central/across-powerbi-configure-week-based-calendar
    - https://learn.microsoft.com/dynamics365/business-central/across-powerbi-install-business-central-apps
    - https://learn.microsoft.com/dynamics365/business-central/across-powerbi-business-central-apps-multi-language
    - https://learn.microsoft.com/dynamics365/business-central/across-powerbi-apps-faq
    - https://learn.microsoft.com/dynamics365/business-central/across-powerbi-apps-by-functional-area
    - https://learn.microsoft.com/dynamics365/business-central/powerbi-back-links
  objects:
    - object/page/36951
  features: []
  topics:
    - topic/business-central/analytics-business-intelligence-and-repo/kpis-dashboards-and-financial-reports
  localizations: []
  videos:
    - video/kJfGIKor3VA
    - video/VEVo5LgCGfw
  posts:
    - post/thinkaboutit-be/7943
  guidelines: []
learn_toc_path:
  - Analytics, business intelligence, and reporting
  - KPIs, dashboards, and financial reports
  - Power BI apps for Business Central
toc_file: business-central/TOC.md
parent: topic/business-central/analytics-business-intelligence-and-repo/kpis-dashboards-and-financial-reports
children: []
coverage:
  learn: 8
  code: 1
  video: 2
  blog: 1
  guideline: 0
bc_forms:
  - 36951
member_hash: f002e35e68543534f9e3547ea78fd0fe2e763103cc50ed27dc18b4c24335f3b7
narrative: generated
---

# Power BI apps for Business Central

> Power BI apps for Business Central: how to install the connector and template apps, set up standard, fiscal, or week-based calendars, and use the semantic models and KPIs by functional area. Also covers multi-language use, back links to source documents, and FAQ topics such as licensing and refresh.

Path: [Analytics, business intelligence, and reporting](../../analytics-business-intelligence-and-repo.md) > [KPIs, dashboards, and financial reports](../kpis-dashboards-and-financial-reports.md) > Power BI apps for Business Central · tier official · system reporting · narrative reviewed by Opus

## Overview

Power BI apps for Business Central give you ready-made semantic models and KPIs for areas such as Finance, Sales, Purchasing, Inventory, Projects, Manufacturing, Subscription Billing, and Sustainability. There are no subtopics; all pages sit at one level.

Start with the install page. It covers the Power BI connector apps, the template apps from Marketplace, calendar and date settings, UTC offset, and semantic model management. Then pick a calendar type. The three calendar pages cover standard (Gregorian), fiscal (month-based), and week-based setups. The fiscal calendar is set up on the Power BI Reports Setup page.

After setup, the functional areas page describes what each app offers. Back links let you move from an aggregated visual to the transactional documents in Business Central. The multi-language page and the FAQ cover language testing, licensing, data refresh, dimension data, and multi-company reporting.

## Key points

- Install covers connector apps, template apps from Marketplace, calendar and date configuration, and UTC offset; it references versions 26 and 27.0.
- Standard calendar type uses a Gregorian month structure with Calendar Year, Month, and Quarter fields and standard time intelligence measures.
- Fiscal calendar setup is done on the Power BI Reports Setup page; it defines the fiscal year structure and first month, and enables fiscal time intelligence.
- Week-based calendar setup defines First Day of Week, First Month of Fiscal Calendar, a Nearest or Last boundary rule, and a 445, 454, or 544 period pattern.
- Functional area apps provide semantic models and KPIs for Finance, Sales, Purchasing, Inventory, Projects, Manufacturing, Subscription Billing, and Sustainability.
- Back links navigate from aggregated visuals to source transactions and documents in Business Central, for validation and reconciliation.
- Multi-language use is tested by adding a culture name parameter to the URL.
- The FAQ covers Power BI Pro licensing, semantic model refresh, dimension data updates, job queue scheduling, and multi-company reporting; it references versions 26.2 and 27.0.

## Learn pages

- [Configure a fiscal calendar for your Power BI reports](https://learn.microsoft.com/dynamics365/business-central/across-powerbi-configure-fiscal-calendar): Learn how to configure a fiscal calendar for your Power BI Semantic Models.
- [Configure a standard calendar for your Power BI reports](https://learn.microsoft.com/dynamics365/business-central/across-powerbi-configure-standard-calendar): Learn how to configure a standard calendar for your Power BI Semantic Models.
- [Configure a week-based calendar](https://learn.microsoft.com/dynamics365/business-central/across-powerbi-configure-week-based-calendar): Learn how to configure a week based calendar for your Power BI Semantic Models.
- [Install Power BI apps for Business Central](https://learn.microsoft.com/dynamics365/business-central/across-powerbi-install-business-central-apps): Learn how to install Power BI apps for your Business Central.
- [Multi-language Power BI apps for Business Central](https://learn.microsoft.com/dynamics365/business-central/across-powerbi-business-central-apps-multi-language): Learn how to test and use multi-language capabilities in the Power BI apps for Business Central.
- [Power BI apps FAQ](https://learn.microsoft.com/dynamics365/business-central/across-powerbi-apps-faq): FAQ for the Business Central Power BI apps.
- [Power BI apps/reports for functional areas](https://learn.microsoft.com/dynamics365/business-central/across-powerbi-apps-by-functional-area): Get an overview of the landing pages for the Power BI apps available in functional areas in Business Central.
- [Use back links to explore aggregated data in visuals](https://learn.microsoft.com/dynamics365/business-central/powerbi-back-links): When you're analyzing a visual in Power BI, back links let you go to the data behind the graphic.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [Quick Tip: How Can You Download the Standard Business Central Power BI Reports?](../../../../posts/thinkaboutit-be/7943.md) (community post): "Business Central standard Power BI reports are now distributed through official Power BI template apps"
- [What's New:Drill-Back and Dynamic Dimension Name Support in Power BI Apps for Business Central(2025)](../../../../videos/kJfGIKor3VA.md) (video): "Drill-back from Power BI to Business Central; Dynamic dimension naming in Power BI apps"
- [What's New: Open Sourcing Power BI Apps for Business Central (2025 release wave 2)](../../../../videos/VEVo5LgCGfw.md) (video): "Open-sourced Power BI apps for Business Central; Wave 1 Power BI apps open sourcing"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 36951 "PowerBI Reports Setup"](../../../../objects/page/36951.md) · captioned "Power BI Reports Setup" · on [Table 36951 "PowerBI Reports Setup"](../../../../objects/table/36951.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
