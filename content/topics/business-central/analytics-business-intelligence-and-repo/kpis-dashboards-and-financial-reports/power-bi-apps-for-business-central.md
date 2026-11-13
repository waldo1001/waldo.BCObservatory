---
id: topic/business-central/analytics-business-intelligence-and-repo/kpis-dashboards-and-financial-reports/power-bi-apps-for-business-central
type: topic
title: Power BI apps for Business Central
summary: "Power BI template apps for Business Central: installing and configuring them, choosing a fiscal, standard or week-based calendar, testing languages, using back links to source data, and licensing and refresh questions. Covers the apps for each functional area."
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
  input_hash: 424442045398093ec8844758a5b238aae7b7554c218070e1042ca31589f1f927
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-powerbi-apps-faq
    title: Business Central Power BI Apps FAQ
    date: "2026-11-11"
    commit: null
    t: null
    quote: null
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
    title: Multilanguage Power BI Apps for Business Central
    date: "2026-11-11"
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
    title: Use Power BI Back Links to Explore Business Central Data
    date: "2026-11-11"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/across-powerbi-apps-faq
    - https://learn.microsoft.com/dynamics365/business-central/across-powerbi-configure-fiscal-calendar
    - https://learn.microsoft.com/dynamics365/business-central/across-powerbi-configure-standard-calendar
    - https://learn.microsoft.com/dynamics365/business-central/across-powerbi-configure-week-based-calendar
    - https://learn.microsoft.com/dynamics365/business-central/across-powerbi-install-business-central-apps
    - https://learn.microsoft.com/dynamics365/business-central/across-powerbi-business-central-apps-multi-language
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

> Power BI template apps for Business Central: installing and configuring them, choosing a fiscal, standard or week-based calendar, testing languages, using back links to source data, and licensing and refresh questions. Covers the apps for each functional area.

Path: [Analytics, business intelligence, and reporting](../../analytics-business-intelligence-and-repo.md) > [KPIs, dashboards, and financial reports](../kpis-dashboards-and-financial-reports.md) > Power BI apps for Business Central · tier official · system reporting · narrative **unreviewed** (model text not yet checked)

## Overview

Power BI apps for Business Central are template apps that give ready-made reports and semantic models for areas such as Finance, Sales, Purchasing, Inventory, Inventory Valuation, Projects, Manufacturing, Sustainability and Subscription Billing. Connector apps come preinstalled, while template apps are installed from Microsoft Marketplace and then configured with an assisted setup guide.

The setup pages fit together as follows. The install page covers the guide, including calendar choice, UTC offset, date table range and work days. Three calendar pages detail the options: fiscal, standard (Gregorian) and week-based. The functional areas page lists what each app offers. Back links, multilanguage testing and the FAQ cover use and troubleshooting after install.

Start with the install page, then pick a calendar type that matches how your company reports. Use the functional areas page to see which app fits your needs, and the FAQ for licensing and refresh issues.

## Key points

- Connector apps are preinstalled. Template apps come from Microsoft Marketplace and are configured through an assisted setup guide.
- The setup guide covers calendar configuration (fiscal, standard, weekly), UTC offset, date table range and work days.
- Fiscal calendar: set the calendar type and first month on the Power BI Reports Setup page to get fiscal year structure and fiscal time intelligence.
- Standard calendar: uses the Gregorian month structure with Calendar Year, Month and Quarter fields and standard time intelligence measures.
- Week-based calendar: set First Day of Week, First Month of Fiscal Calendar, the boundary rule (Nearest or Last) and the period pattern (445, 454 or 544).
- Apps exist for Finance, Sales, Purchasing, Inventory, Inventory Valuation, Projects, Manufacturing, Sustainability and Subscription Billing.
- Back links let users go from aggregated report data to source documents and entries in Business Central, using dynamic DAX measures and URL filters for validation, auditing and reconciliation.
- The FAQ covers the Power BI Pro and Premium Per User license requirements, semantic model refresh and dimension set entry updates, and multilingual availability.

## Learn pages

- [Business Central Power BI Apps FAQ](https://learn.microsoft.com/dynamics365/business-central/across-powerbi-apps-faq): Find answers about licensing, installation, data refresh, dimensions, languages, and source files for the Business Central Power BI apps.
  - In the observatory: [Codeunit 36952 "Update Dim. Set Entries"](../../../../objects/codeunit/36952.md), [Page 672 "Job Queue Entries"](../../../../objects/page/672.md), [Table 36954 "PowerBI Flat Dim. Set Entry"](../../../../objects/table/36954.md)
- [Configure a fiscal calendar for your Power BI reports](https://learn.microsoft.com/dynamics365/business-central/across-powerbi-configure-fiscal-calendar): Learn how to configure a fiscal calendar for your Power BI Semantic Models.
- [Configure a standard calendar for your Power BI reports](https://learn.microsoft.com/dynamics365/business-central/across-powerbi-configure-standard-calendar): Learn how to configure a standard calendar for your Power BI Semantic Models.
- [Configure a week-based calendar](https://learn.microsoft.com/dynamics365/business-central/across-powerbi-configure-week-based-calendar): Learn how to configure a week based calendar for your Power BI Semantic Models.
- [Install Power BI apps for Business Central](https://learn.microsoft.com/dynamics365/business-central/across-powerbi-install-business-central-apps): Learn how to install Power BI apps for your Business Central.
  - In the observatory: [Codeunit 36952 "Update Dim. Set Entries"](../../../../objects/codeunit/36952.md), [Page 7160 "ABC Analysis Setup"](../../../../objects/page/7160.md)
- [Multilanguage Power BI Apps for Business Central](https://learn.microsoft.com/dynamics365/business-central/across-powerbi-business-central-apps-multi-language): Test the Business Central Power BI apps in another language by adding a locale parameter to the report URL, such as de-DE for German.
- [Power BI apps/reports for functional areas](https://learn.microsoft.com/dynamics365/business-central/across-powerbi-apps-by-functional-area): Get an overview of the landing pages for the Power BI apps available in functional areas in Business Central.
- [Use Power BI Back Links to Explore Business Central Data](https://learn.microsoft.com/dynamics365/business-central/powerbi-back-links): Use back links in Business Central Power BI reports to open the transactions behind a visual and validate, audit, or reconcile aggregated figures.

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
