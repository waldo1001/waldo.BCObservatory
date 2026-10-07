---
id: topic/business-central/integrate-with-other-applications/microsoft-power-platform
type: topic
title: Microsoft Power Platform
summary: Microsoft Power Platform integration with Business Central covers the Business Central connector, Power Apps, Power Automate, Power BI, and Power Pages on Dataverse virtual tables. It answers questions about connecting each service, building apps, flows and reports, and giving external users access to data.
tier: official
language: en
system: platform
review:
  state: reviewed
  by: opus
  at: "2026-10-07T13:37:30.848Z"
  flags: []
generated:
  at: "2026-10-07T13:37:30.849Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 587118babbcbe828a80986733906f4083a798d327dbb1e41c9d45549e17077b6
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-how-use-financials-data-source-powerbi
    title: Building reports in Power BI Desktop to display Business Central data
    date: "2025-10-16"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/powerplatform/power-apps-overview
    title: Business Central and Power Apps
    date: "2023-05-17"
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
    url: https://learn.microsoft.com/dynamics365/business-central/powerplatform-integration-overview
    title: Integrate with Microsoft Power Platform
    date: "2026-06-19"
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
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/powerplatform/power-automate-overview
    title: Power Automate Integration Overview
    date: "2025-08-06"
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
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/power-pages-on-virtual-tables-overview
    title: Power Pages on virtual tables
    date: "2023-11-22"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-flow-troubleshoot
    title: Troubleshoot your automated workflows
    date: "2025-10-14"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-how-use-financials-data-source-flow
    title: Use Power Automate flows in Business Central
    date: "2026-06-17"
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
    url: https://learn.microsoft.com/dynamics365/business-central/across-how-use-financials-data-source-powerapps
    title: Use your data to create an app| Microsoft Docs
    date: "2025-10-16"
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
    - https://learn.microsoft.com/dynamics365/business-central/powerplatform-integration-overview
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/power-pages-on-virtual-tables-overview
  objects: []
  features: []
  topics:
    - topic/business-central/integrate-with-other-applications
    - topic/business-central/integrate-with-other-applications/microsoft-power-platform/microsoft-power-apps
    - topic/business-central/integrate-with-other-applications/microsoft-power-platform/microsoft-power-automate
    - topic/business-central/integrate-with-other-applications/microsoft-power-platform/microsoft-power-bi
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcapps/12189
learn_toc_path:
  - Integrate with other applications
  - Microsoft Power Platform
toc_file: business-central/TOC.md
parent: topic/business-central/integrate-with-other-applications
children:
  - topic/business-central/integrate-with-other-applications/microsoft-power-platform/microsoft-power-apps
  - topic/business-central/integrate-with-other-applications/microsoft-power-platform/microsoft-power-automate
  - topic/business-central/integrate-with-other-applications/microsoft-power-platform/microsoft-power-bi
coverage:
  learn: 15
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 1500
  - 6316
  - 6317
  - 36951
member_hash: add1deb3baadbb8b6209cc340ef3183ded7ddceaa82f18c7e3fdf5ce4f621b16
narrative: generated
---

# Microsoft Power Platform

> Microsoft Power Platform integration with Business Central covers the Business Central connector, Power Apps, Power Automate, Power BI, and Power Pages on Dataverse virtual tables. It answers questions about connecting each service, building apps, flows and reports, and giving external users access to data.

Path: [Integrate with other applications](../integrate-with-other-applications.md) > Microsoft Power Platform · tier official · system platform · narrative reviewed by Opus

## Overview

This section explains how Business Central works with the Power Platform. The top-level page introduces the Business Central connector, Power Apps custom solutions, Power Automate flows, Power BI semantic models and reporting, and Power Pages virtual tables, with Dataverse as the shared layer for some scenarios.

Each service has its own subtopic. Power Apps covers building apps on Business Central data through the connector, API tables, custom APIs and canvas apps. Power Automate covers no code/low code workflows, flow types, triggers and actions, and troubleshooting. Power BI is the largest area: licensing, enabling and connecting online and on-premises environments, building reports in Power BI Desktop, showing reports in FactBoxes, and the built-in Power BI apps.

A separate page describes Power Pages on virtual tables (preview), which lets unlicensed external users reach Business Central online data through portals. Start with the overview page to pick the service, then go to the matching subtopic for setup details.

## Key points

- Power Automate flows use the Business Central connector, and Power Apps connects to a Business Central environment through the Power Apps connector.
- Power Apps: connect to a Business Central environment, use API tables and custom APIs, and build canvas apps. Options include custom UI, AI Builder, and augmented or mixed reality.
- Power Automate: build no code/low code workflows with triggers and actions, use flows in Business Central, and troubleshoot automated flows.
- Power BI: covers licensing, enabling online and on-premises connections, Power BI Desktop reports, FactBox reports, and built-in Power BI apps.
- Power Pages on virtual tables is a preview feature that lets unlicensed external users reach Business Central online data through portals running on Dataverse virtual tables.
- Power Pages supports anonymous and authenticated access, synthetic relations, lookup columns, and basic forms. List/subgrid editing is supported from 2023 release wave 2, and the page also mentions version 23.1.
- Start at the top-level integration page, which covers the connector, Power Apps, Power Automate, Power BI semantic models and reports, and Power Pages virtual tables, then go to the subtopic for the service you need.

## Subtopics

- [Microsoft Power Apps](microsoft-power-platform/microsoft-power-apps.md) (2 pages)
- [Microsoft Power Automate](microsoft-power-platform/microsoft-power-automate.md) (3 pages)
- [Microsoft Power BI](microsoft-power-platform/microsoft-power-bi.md) (8 pages)

## More Learn pages

- [Integrate with Microsoft Power Platform](https://learn.microsoft.com/dynamics365/business-central/powerplatform-integration-overview): Learn how to integrate Business Central with the Microsoft Power Platform
- [Power Pages on virtual tables](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/power-pages-on-virtual-tables-overview): How-to description

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#12189 Removing the restriction of deploying Power BI reports only to evaluation companies](../../../changes/bcapps/12189.md) (code change): "Power BI report deployment now works with regular companies"

## Business Central pages and reports

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 1500, 6316, 6317, 36951.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
