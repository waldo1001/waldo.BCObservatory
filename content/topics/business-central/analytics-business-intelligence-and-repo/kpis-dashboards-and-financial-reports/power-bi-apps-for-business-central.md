---
id: topic/business-central/analytics-business-intelligence-and-repo/kpis-dashboards-and-financial-reports/power-bi-apps-for-business-central
type: topic
title: Power BI apps for Business Central
summary: "Power BI apps for Business Central: how to install the connector and template apps, configure fiscal, standard or week-based calendars, use multiple languages, and which semantic models and KPIs exist per functional area. Also answers FAQ items on licensing, refresh and dimension data."
tier: official
language: en
system: reporting
review:
  state: reviewed
  by: opus
  at: "2026-10-06T14:24:07.451Z"
  flags: []
generated:
  at: "2026-10-06T14:24:07.451Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: f25aff66fb6cf759d7ce255634405ad573924586713b1840cd39eec867174d66
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
  objects: []
  features: []
  topics:
    - topic/business-central/analytics-business-intelligence-and-repo/kpis-dashboards-and-financial-reports
  localizations: []
  videos: []
  posts: []
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
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 36951
member_hash: f002e35e68543534f9e3547ea78fd0fe2e763103cc50ed27dc18b4c24335f3b7
narrative: generated
---

# Power BI apps for Business Central

> Power BI apps for Business Central: how to install the connector and template apps, configure fiscal, standard or week-based calendars, use multiple languages, and which semantic models and KPIs exist per functional area. Also answers FAQ items on licensing, refresh and dimension data.

Path: [Analytics, business intelligence, and reporting](../../analytics-business-intelligence-and-repo.md) > [KPIs, dashboards, and financial reports](../kpis-dashboards-and-financial-reports.md) > Power BI apps for Business Central · tier official · system reporting · narrative reviewed by Opus

## Overview

Power BI apps for Business Central provide ready-made semantic models and KPIs for functional areas such as Finance, Sales, Purchasing, Inventory, Projects, Manufacturing, Subscription Billing and Sustainability.

Start with the install page. It covers the connector apps, the template apps from Marketplace, calendar and date settings (including UTC offset) and semantic model management. The functional areas page lists what each app contains.

Three calendar pages give more detail on the calendar settings: fiscal, standard and week-based. The fiscal calendar is set up through the Power BI Reports Setup page. The fiscal and standard calendars each come with their own time intelligence. The week-based calendar defines week structure, a fiscal year anchor, a boundary rule and a period pattern. The multi-language page explains how to test languages by adding culture name parameters to URLs. The FAQ covers licensing, installation, data refresh, dimension data troubleshooting and multi-company reporting.

## Key points

- The install page covers Power BI connector apps, template apps from Marketplace, calendar and date settings and semantic model management. The page mentions versions 26 and 27.0.
- Three calendar types are available: fiscal, standard (Gregorian) and week-based.
- Fiscal calendar setup is done on the Power BI Reports Setup page. It uses a calendar type and a first month setting to define the fiscal year structure and fiscal time intelligence.
- Standard calendar gives Calendar Year, Calendar Month and Calendar Quarter fields and standard time intelligence measures.
- Week-based calendar settings: First Day of Week, First Month of Fiscal Calendar, boundary rule (Nearest or Last) and period pattern (445, 454 or 544).
- UTC offset can be configured during installation.
- To test another language, add a culture name parameter to the URL.
- The FAQ (versions 26.2 and 27.0) covers Power BI Pro licensing, semantic model refresh, dimension data updates, job queue scheduling and multi-company reporting.

## Learn pages

- [Configure a fiscal calendar for your Power BI reports](https://learn.microsoft.com/dynamics365/business-central/across-powerbi-configure-fiscal-calendar): Learn how to configure a fiscal calendar for your Power BI Semantic Models.
- [Configure a standard calendar for your Power BI reports](https://learn.microsoft.com/dynamics365/business-central/across-powerbi-configure-standard-calendar): Learn how to configure a standard calendar for your Power BI Semantic Models.
- [Configure a week-based calendar](https://learn.microsoft.com/dynamics365/business-central/across-powerbi-configure-week-based-calendar): Learn how to configure a week based calendar for your Power BI Semantic Models.
- [Install Power BI apps for Business Central](https://learn.microsoft.com/dynamics365/business-central/across-powerbi-install-business-central-apps): Learn how to install Power BI apps for your Business Central.
- [Multi-language Power BI apps for Business Central](https://learn.microsoft.com/dynamics365/business-central/across-powerbi-business-central-apps-multi-language): Learn how to test and use multi-language capabilities in the Power BI apps for Business Central.
- [Power BI apps FAQ](https://learn.microsoft.com/dynamics365/business-central/across-powerbi-apps-faq): FAQ for the Business Central Power BI apps.
- [Power BI apps/reports for functional areas](https://learn.microsoft.com/dynamics365/business-central/across-powerbi-apps-by-functional-area): Get an overview of the landing pages for the Power BI apps available in functional areas in Business Central.
- [Use back links to explore aggregated data in visuals](https://learn.microsoft.com/dynamics365/business-central/powerbi-back-links): When you're analyzing a visual in Power BI, back links let you go to the data behind the graphic.

## Business Central pages and reports

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 36951.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
