---
id: topic/dev-itpro/integration/integrating-with-microsoft-power-platfor/integrating-with-microsoft-power-bi/administrator
type: topic
title: Administrator
summary: Administrator guidance for Power BI integration with Business Central. It covers how to enable the integration (licensing, API pages, OData web services, online and on-premises setup) and how the integration components and architecture fit together.
tier: official
language: en
system: reporting
review:
  state: reviewed
  by: opus
  at: "2026-10-07T05:23:48.203Z"
  flags: []
generated:
  at: "2026-10-07T05:23:51.651Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 6662da30802bf53b50d588418364816e838001c62cf22c8a4a21c1b19f287506
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-powerbi-setup
    title: Enabling Power BI integration with Business Central
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
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/admin-powerbi-setup
    - https://learn.microsoft.com/dynamics365/business-central/admin-powerbi-overview
  objects: []
  features: []
  topics:
    - topic/dev-itpro/integration/integrating-with-microsoft-power-platfor/integrating-with-microsoft-power-bi
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Integration
  - Integrating with Microsoft Power Platform
  - Integrating with Microsoft Power BI
  - Administrator
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/integration/integrating-with-microsoft-power-platfor/integrating-with-microsoft-power-bi
children: []
coverage:
  learn: 2
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: b919f6b7c823a96f44f4f36dcb7acabb498da1d090ce0536908152b53491293e
narrative: generated
---

# Administrator

> Administrator guidance for Power BI integration with Business Central. It covers how to enable the integration (licensing, API pages, OData web services, online and on-premises setup) and how the integration components and architecture fit together.

Path: [Integration](../../../integration.md) > [Integrating with Microsoft Power Platform](../../integrating-with-microsoft-power-platfor.md) > [Integrating with Microsoft Power BI](../integrating-with-microsoft-power-bi.md) > Administrator · tier official · system reporting · narrative reviewed by Opus

## Overview

This section is for administrators who set up Power BI with Business Central. It has two pages: one on enabling the integration, and one on the components and architecture behind it.

The enabling page covers the Power BI free and Pro licenses, how Business Central data is exposed through API pages and OData web services, and configuration for online and on-premises deployments. It also mentions dataflows and Power BI apps.

The architecture page explains how reports are created and viewed in Power BI Desktop and Power BI Service. It lists the Power BI connectors, embedded reports, report management, default reports and Power BI apps on the marketplace. For online environments it notes that read-only database replicas are used. Start with the architecture page for context, then use the enabling page for setup.

## Key points

- Power BI integration lets you create and view reports with Power BI Desktop and Power BI Service.
- Both the Power BI free license and the Pro license are covered in the setup page.
- Business Central data is exposed to Power BI through API pages and OData web services.
- Setup differs for online and on-premises deployments.
- Online environments use read-only database replicas for Power BI reporting.
- Components include Power BI connectors, embedded reports, report management and default reports.
- Power BI apps are available on the marketplace, and dataflows are part of the setup topic.
- The pages cite versions 2022 (enabling) and 2021 release wave 2 (architecture).

## Learn pages

- [Enabling Power BI integration with Business Central](https://learn.microsoft.com/dynamics365/business-central/admin-powerbi-setup): Learn how to set up the connection to Power BI. With Power BI reports, you can get insights, business intelligence, and key performance indicators from your data.
- [Power BI integration component and architecture overview for Business Central\| Microsoft Docs](https://learn.microsoft.com/dynamics365/business-central/admin-powerbi-overview): Learn about the different aspects of Power BI integration with Business Central.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
