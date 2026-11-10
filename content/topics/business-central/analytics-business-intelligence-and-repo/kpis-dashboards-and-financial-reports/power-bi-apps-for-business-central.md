---
id: topic/business-central/analytics-business-intelligence-and-repo/kpis-dashboards-and-financial-reports/power-bi-apps-for-business-central
type: topic
title: Power BI apps for Business Central
summary: "Power BI apps for Business Central: how to install and set up connector and template apps, configure calendars (fiscal, standard, week-based), use the functional-area apps, drill back to Business Central, and handle language and FAQ topics. It answers setup, configuration, and troubleshooting questions."
tier: official
language: en
system: reporting
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-10T00:57:46.434Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 7f420d164f32bad83aa2d9c29ed0d6b7a2c1589d8e753e3f690f51636cf2a595
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
    date: "2026-11-03"
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
    - video/cnIJZ2Ozcxs
    - video/kJfGIKor3VA
    - video/VEVo5LgCGfw
  posts:
    - post/thinkaboutit-be/7943
    - post/yzhums-com/68178
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
  video: 3
  blog: 2
  guideline: 0
bc_forms:
  - 36951
member_hash: f002e35e68543534f9e3547ea78fd0fe2e763103cc50ed27dc18b4c24335f3b7
narrative: generated
---

# Power BI apps for Business Central

> Power BI apps for Business Central: how to install and set up connector and template apps, configure calendars (fiscal, standard, week-based), use the functional-area apps, drill back to Business Central, and handle language and FAQ topics. It answers setup, configuration, and troubleshooting questions.

Path: [Analytics, business intelligence, and reporting](../../analytics-business-intelligence-and-repo.md) > [KPIs, dashboards, and financial reports](../kpis-dashboards-and-financial-reports.md) > Power BI apps for Business Central · tier official · system reporting · narrative **unreviewed** (model text not yet checked)

## Overview

This section covers the Power BI apps that report on Business Central data. Connector apps are preinstalled, and template apps come from Microsoft Marketplace. After installation, an assisted setup guide configures them, including calendar type, UTC offset, date table range, and work days.

Three pages describe the calendar choices in the Power BI Reports Setup page: fiscal, standard (Gregorian), and week-based. Another page lists the apps for functional areas such as Finance, Sales, Purchasing, Inventory, Projects, Manufacturing, Sustainability, and Subscription Billing.

Start with the install page, then pick a calendar type. Use the back links page to move from aggregated visuals to source documents in Business Central. The FAQ covers licensing, data refresh, dimension data, and multi-company reporting. The multi-language page explains testing other languages with a culture name in the URL.

## Key points

- Connector apps are preinstalled; template apps are installed from Microsoft Marketplace and configured through an assisted setup guide (install page references version 27.0).
- Setup covers calendar configuration, UTC offset, date table range, and work days.
- Standard calendar uses a Gregorian month structure with Calendar Year, Month, and Quarter fields and standard time intelligence measures.
- Fiscal calendar is set up on the Power BI Reports Setup page, including the first month of the fiscal year.
- Week-based calendar defines First Day of Week, first fiscal month, a boundary rule (Nearest or Last), and a period pattern (445, 454, or 544).
- Functional-area apps include Finance, Sales, Purchasing, Inventory, Inventory Valuation, and Projects, plus Manufacturing, Sustainability, and Subscription Billing.
- Back links let users move from aggregated visuals to transactional documents in Business Central for validation and reconciliation.
- The FAQ (versions 26.2 and 27.0) covers Power BI Pro licensing, semantic model refresh, dimension data updates, job queue scheduling, and multi-company reporting.

## Learn pages

- [Configure a fiscal calendar for your Power BI reports](https://learn.microsoft.com/dynamics365/business-central/across-powerbi-configure-fiscal-calendar): Learn how to configure a fiscal calendar for your Power BI Semantic Models.
- [Configure a standard calendar for your Power BI reports](https://learn.microsoft.com/dynamics365/business-central/across-powerbi-configure-standard-calendar): Learn how to configure a standard calendar for your Power BI Semantic Models.
- [Configure a week-based calendar](https://learn.microsoft.com/dynamics365/business-central/across-powerbi-configure-week-based-calendar): Learn how to configure a week based calendar for your Power BI Semantic Models.
- [Install Power BI apps for Business Central](https://learn.microsoft.com/dynamics365/business-central/across-powerbi-install-business-central-apps): Learn how to install Power BI apps for your Business Central.
  - In the observatory: [Codeunit 36952 "Update Dim. Set Entries"](../../../../objects/codeunit/36952.md), [Page 7160 "ABC Analysis Setup"](../../../../objects/page/7160.md)
- [Multi-language Power BI apps for Business Central](https://learn.microsoft.com/dynamics365/business-central/across-powerbi-business-central-apps-multi-language): Learn how to test and use multi-language capabilities in the Power BI apps for Business Central.
- [Power BI apps FAQ](https://learn.microsoft.com/dynamics365/business-central/across-powerbi-apps-faq): FAQ for the Business Central Power BI apps.
  - In the observatory: [Codeunit 36952 "Update Dim. Set Entries"](../../../../objects/codeunit/36952.md), [Table 36954 "PowerBI Flat Dim. Set Entry"](../../../../objects/table/36954.md)
- [Power BI apps/reports for functional areas](https://learn.microsoft.com/dynamics365/business-central/across-powerbi-apps-by-functional-area): Get an overview of the landing pages for the Power BI apps available in functional areas in Business Central.
- [Use back links to explore aggregated data in visuals](https://learn.microsoft.com/dynamics365/business-central/powerbi-back-links): When you're analyzing a visual in Power BI, back links let you go to the data behind the graphic.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [Quick Tip: How Can You Download the Standard Business Central Power BI Reports?](../../../../posts/thinkaboutit-be/7943.md) (community post): "Business Central standard Power BI reports are now distributed through official Power BI template apps"
- [Business Central 2025 wave 2 (BC27): Access open-sourced Power BI apps](../../../../posts/yzhums-com/68178.md) (community post): "open-sources Power BI apps for sales, purchasing, and projects"
- [What's New: Enhanced Subscription Billing Analytics (2026 release wave 1)](../../../../videos/cnIJZ2Ozcxs.md) (video): "Unified Power BI Subscription Billing UI"
- [What's New:Drill-Back and Dynamic Dimension Name Support in Power BI Apps for Business Central(2025)](../../../../videos/kJfGIKor3VA.md) (video): "Drill-back from Power BI to Business Central; Dynamic dimension naming in Power BI apps"
- [What's New: Open Sourcing Power BI Apps for Business Central (2025 release wave 2)](../../../../videos/VEVo5LgCGfw.md) (video): "Open-sourced Power BI apps for Business Central; Wave 1 Power BI apps open sourcing"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 36951 "PowerBI Reports Setup"](../../../../objects/page/36951.md) · captioned "Power BI Reports Setup" · on [Table 36951 "PowerBI Reports Setup"](../../../../objects/table/36951.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
