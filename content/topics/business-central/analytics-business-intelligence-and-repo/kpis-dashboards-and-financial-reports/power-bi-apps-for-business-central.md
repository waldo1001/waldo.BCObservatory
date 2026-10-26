---
id: topic/business-central/analytics-business-intelligence-and-repo/kpis-dashboards-and-financial-reports/power-bi-apps-for-business-central
type: topic
title: Power BI apps for Business Central
summary: "Power BI apps for Business Central: installing and configuring connector and template apps, choosing a calendar type (standard, fiscal, week-based), using the functional-area apps, back links, multi-language use, and an FAQ. It answers setup, calendar, licensing, refresh and troubleshooting questions."
tier: official
language: en
system: reporting
review:
  state: reviewed
  by: opus
  at: "2026-10-24T00:55:31.665Z"
  flags: []
generated:
  at: "2026-10-26T08:22:02.554Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 3488a2e3ea4c48a88dc5ebea134592232ecc0a4c918a9756faf5a55dbab9cbf3
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

> Power BI apps for Business Central: installing and configuring connector and template apps, choosing a calendar type (standard, fiscal, week-based), using the functional-area apps, back links, multi-language use, and an FAQ. It answers setup, calendar, licensing, refresh and troubleshooting questions.

Path: [Analytics, business intelligence, and reporting](../../analytics-business-intelligence-and-repo.md) > [KPIs, dashboards, and financial reports](../kpis-dashboards-and-financial-reports.md) > Power BI apps for Business Central · tier official · system reporting · narrative reviewed (checked by Opus)

## Overview

Power BI apps for Business Central give ready-made semantic models and KPIs for functional areas: Finance, Sales, Purchasing, Inventory, Projects, Manufacturing, Subscription Billing, and Sustainability. Connector apps are preinstalled, and template apps come from Microsoft Marketplace.

Start with the install page. It covers the assisted setup guide, which sets calendar configuration, UTC offset, date table range, and work days. Then pick one calendar page. Standard uses a Gregorian month structure. Fiscal uses a fiscal year with a first month and is configured on the Power BI Reports Setup page. Week-based sets the first day of week, a fiscal year anchor, a Nearest or Last rule, and a 445, 454 or 544 pattern.

After setup, the functional-area page describes what each app reports. The back links page explains how to go from aggregated visuals to source documents in Business Central. The multi-language page covers testing languages with culture name URL parameters. The FAQ covers licensing, refresh, dimension data, job queue scheduling, and multi-company reporting.

## Key points

- Connector apps are preinstalled. Template apps are installed from Microsoft Marketplace and configured through an assisted setup guide.
- The setup guide configures calendar type, UTC offset, date table range, and work days.
- Standard calendar uses a Gregorian month structure with Calendar Year, Month, and Quarter fields and standard time intelligence measures.
- Fiscal calendar setup on the Power BI Reports Setup page sets the fiscal calendar type and first month, enabling fiscal time intelligence.
- Week-based calendar settings: First Day of Week, First Month of Fiscal Calendar, Weekly Type (Nearest or Last), and Quarter Week Type (445, 454, 544).
- Functional-area apps provide semantic models and KPIs for Finance, Sales, Purchasing, Inventory, Projects, Manufacturing, Subscription Billing, and Sustainability.
- Back links let users move from aggregated visuals to transactional documents in Business Central for validation and reconciliation.
- The FAQ covers Power BI Pro licensing, semantic model refresh, dimension data updates, job queue scheduling, and multi-company reporting.

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

- [Quick Tip: How Can You Download the Standard Business Central Power BI Reports?](../../../../posts/thinkaboutit-be/7943.md) (community post): "Standard Power BI reports for Business Central are available through official Microsoft Power BI template apps"
- [Business Central 2025 wave 2 (BC27): Access open-sourced Power BI apps](../../../../posts/yzhums-com/68178.md) (community post): "open-sources Power BI apps for sales, purchasing, and projects"
- [What's New: Enhanced Subscription Billing Analytics (2026 release wave 1)](../../../../videos/cnIJZ2Ozcxs.md) (video): "Unified Power BI Subscription Billing UI"
- [What's New:Drill-Back and Dynamic Dimension Name Support in Power BI Apps for Business Central(2025)](../../../../videos/kJfGIKor3VA.md) (video): "Drill-back from Power BI to Business Central; Dynamic dimension naming in Power BI apps"
- [What's New: Open Sourcing Power BI Apps for Business Central (2025 release wave 2)](../../../../videos/VEVo5LgCGfw.md) (video): "Open-sourced Power BI apps for Business Central; Wave 1 Power BI apps open sourcing"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 36951 "PowerBI Reports Setup"](../../../../objects/page/36951.md) · captioned "Power BI Reports Setup" · on [Table 36951 "PowerBI Reports Setup"](../../../../objects/table/36951.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
