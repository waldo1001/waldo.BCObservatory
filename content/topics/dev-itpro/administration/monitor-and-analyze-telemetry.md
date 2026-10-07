---
id: topic/dev-itpro/administration/monitor-and-analyze-telemetry
type: topic
title: Monitor and analyze telemetry
summary: Telemetry monitoring in Business Central covers turning on Application Insights telemetry, the available event IDs, analysis with KQL and Power BI, alerting, and cost control. It answers questions about setup, which events exist, how to query them, and how to manage cost and retention.
tier: official
language: en
system: platform
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:14:26.157Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: d611dcfc47d45b7adaae9bcec68638775db2868109468d9b61fe18b5f5f7b96c
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-alert
    title: Alert on Telemetry
    date: "2022-11-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-agent-lifecycle-trace
    title: Analyze Agent Lifecycle Telemetry
    date: "2026-09-22"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-analyze-with-kql
    title: Analyze and monitor telemetry with KQL
    date: "2024-12-19"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-power-bi-app
    title: Analyze and monitor telemetry with Power BI
    date: "2024-03-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-api-metadata-validation-trace
    title: Analyze API metadata validation telemetry
    date: "2026-05-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-app-resource-exposure-trace
    title: Analyze app resource exposure policy telemetry
    date: "2026-05-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-business-events-trace
    title: Analyze business events telemetry
    date: "2026-05-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-configuration-package-trace
    title: Analyze Configuration Package Telemetry
    date: "2026-09-22"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-email-trace
    title: Analyze email trace telemetry
    date: "2024-01-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-mcp-configuration-trace
    title: Analyze MCP configuration telemetry
    date: "2026-04-29"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-mcp-server-trace
    title: Analyze MCP Server Tool Calls Telemetry
    date: "2025-01-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-open-in-excel-trace
    title: Analyze Open in Excel telemetry
    date: "2026-09-22"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-sql-query-trace
    title: Analyze SQL query trace telemetry
    date: "2026-05-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-table-index-trace
    title: Analyze table index trace telemetry
    date: "2026-09-22"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-ai-consumption
    title: Analyzing AI Consumption Trace Telemetry
    date: "2026-06-22"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-changelog-configuration-trace
    title: Analyzing Changelog Configuration Changes Telemetry
    date: "2023-10-23"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-client-action-trace
    title: Analyzing client action telemetry
    date: "2023-03-07"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-client-add-in-exceptions
    title: Analyzing client control add-in exception telemetry
    date: "2025-03-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-cloud-migration-trace
    title: Analyzing Cloud migration trace telemetry
    date: "2023-05-12"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-database-wait-statistics-trace
    title: Analyzing Database Wait Statistics Telemetry
    date: "2022-06-16"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-environment-lifecycle-trace
    title: Analyzing Environment Lifecycle Trace Telemetry
    date: "2025-03-31"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-environment-validation-trace
    title: Analyzing environment validation telemetry
    date: "2023-10-27"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-error-message-voting-trace
    title: Analyzing Error Message Vote Telemetry | Microsoft Docs
    date: "2022-03-22"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-pte-upload-validation-trace
    title: Analyzing Extension Upload Validation Telemetry
    date: "2023-11-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-field-monitoring-trace
    title: Analyzing Field Monitoring Telemetry
    date: "2021-05-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-financial-report-lifecycle-trace
    title: Analyzing financial report lifecycle trace telemetry
    date: "2025-03-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-financial-report-usage-trace
    title: Analyzing financial report usage trace telemetry
    date: "2025-03-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-job-queue-lifecycle-trace
    title: Analyzing Job Queue Lifecycle Trace Telemetry
    date: "2023-08-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-al-method-trace
    title: Analyzing Long Running AL Methods Telemetry
    date: "2025-10-14"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-long-running-sql-query-trace
    title: Analyzing Long Running Operation (SQL Query) Telemetry
    date: "2026-03-30"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-appsource-app-validation-trace
    title: Analyzing Marketplace app breaking changes validation telemetry
    date: "2026-03-11"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-appsource-submission-validation-trace
    title: Analyzing Marketplace submission validation trace telemetry
    date: "2021-08-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-metadata-embeddings-trace
    title: Analyzing metadata embeddings telemetry
    date: "2026-06-22"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-onboarding-trace
    title: Analyzing onboarding telemetry
    date: "2023-12-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-performance-toolkit-trace
    title: Analyzing Performance Toolkit Telemetry
    date: "2023-03-22"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-permission-changes-trace
    title: Analyzing Permission Changes Trace Telemetry
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-permission-dependency-cycle-trace
    title: Analyzing permission dependency cycle trace telemetry
    date: "2023-12-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-permission-error-trace
    title: Analyzing Permission Error Trace Telemetry
    date: "2022-07-27"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-profile-configuration-lifecycle-trace
    title: Analyzing profile configuration lifecycle telemetry
    date: "2023-12-18"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-report-layout-lifecycle-trace
    title: Analyzing report layout lifecycle telemetry
    date: "2024-11-06"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-alert
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-analyze-with-kql
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-power-bi-app
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-available-telemetry
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-control-cost
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-overview
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-event-ids
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-faq
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-enable-application-insights
  objects: []
  features: []
  topics:
    - topic/dev-itpro/administration
    - topic/dev-itpro/administration/monitor-and-analyze-telemetry/telemetry-by-area
  localizations: []
  videos:
    - video/7rIHz0zrgWU
    - video/BOY2442wHSc
    - video/F_pssS0FtUc
  posts:
    - post/waldo-be/317845
    - post/waldo-be/318371
    - post/waldo-be/318423
    - post/waldo-be/318571
  guidelines: []
learn_toc_path:
  - Administration
  - Monitor and analyze telemetry
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/administration
children:
  - topic/dev-itpro/administration/monitor-and-analyze-telemetry/telemetry-by-area
coverage:
  learn: 70
  code: 0
  video: 3
  blog: 4
  guideline: 0
bc_forms: []
member_hash: 6d811af42d6a134d1ed6be0e44736f3c1dff51ecfed1455cb2a4358c4de6d557
narrative: generated
---

# Monitor and analyze telemetry

> Telemetry monitoring in Business Central covers turning on Application Insights telemetry, the available event IDs, analysis with KQL and Power BI, alerting, and cost control. It answers questions about setup, which events exist, how to query them, and how to manage cost and retention.

Path: [Administration](../administration.md) > Monitor and analyze telemetry · tier official · system platform · narrative reviewed by Opus

## Overview

Business Central can send telemetry to Azure Application Insights, for online and on-premises deployments. The section starts with the overview page on enabling telemetry at environment and app level. A separate page covers setting the connection string or instrumentation key for the server, admin center, or individual tenants.

## Key points

- Enable telemetry by configuring an Application Insights connection string or instrumentation key for the server, admin center, or individual tenants; this works for online and on-premises.
- Available Telemetry and Telemetry Event IDs list events by event ID, grouped as application, client, lifecycle and runtime events; AL event IDs have a prefix.
- The KQL page queries the traces and pageViews tables and custom dimensions, with examples for report usage, session tracking, user activity and timezone conversion.
- Power BI apps are free and open source, with usage, error, performance and administration reports and sample data.
- Alerts can be built with Power BI Metrics, Application Insights alerts, Logic Apps or Power Automate, using KQL queries.
- Controlling Telemetry Cost covers daily ingestion caps, data collection rules, sampling, retention periods and cost monitoring.
- The Telemetry FAQ covers cost control, custom dimensions overflow, data retention, log analytics queries and the purge API.
- Telemetry by area has 61 reference pages with events, custom dimensions and sample KQL for areas such as performance, locks, extensions, permissions, web services, jobs, AI and MCP.

## Subtopics

- [Telemetry by area](monitor-and-analyze-telemetry/telemetry-by-area.md) (61 pages)

## More Learn pages

- [Alert on Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-alert): Learn how to alert on Business Central telemetry.
- [Analyze and monitor telemetry with KQL](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-analyze-with-kql): Learn how to query Business Central telemetry with KQL.
- [Analyze and monitor telemetry with Power BI](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-power-bi-app): Learn how to install, configure, and use the Power BI app on Business Central telemetry data.
- [Available Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-available-telemetry): Get an overview of available telemetry in Business Central
- [Controlling Telemetry Cost](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-control-cost): Learn how to control the cost of Business Central provides telemetry.
- [Monitoring and Analyzing Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-overview): Learn how Business Central provides telemetry for each environment, both for online and on-premises environments.
- [Telemetry Event IDs in Application Insights \| Microsoft Docs](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-event-ids): Learn about the event IDs of Business Central events emitted to Azure Application Insights.
- [Telemetry FAQ (Frequently Asked Questions)](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-faq): See frequently asked questions we get on telemetry in Business Central
- [Turn sending telemetry to application insights on or off](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-enable-application-insights): Learn how you can get richer telemetry by connecting your Business Central with Application Insights for telemetry.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [Handling Business Central Telemetry like a boss: iFacto Telemetry – Pt. 3](../../../posts/waldo-be/317845.md) (community post): "Dashboard visualization consolidates custom telemetry and daily telemetry data"
- [Analyzing BC Telemetry with AI with the “BC Telemetry Buddy”](../../../posts/waldo-be/318371.md) (community post): "query Business Central telemetry data through natural conversation"
- [BC Telemetry Buddy – 84 commits later..](../../../posts/waldo-be/318423.md) (community post): "BC Telemetry Buddy evolved from a proof of concept to a production-ready tool for analyzing Business Central telemetry"
- [I built the tool .. but forgot the skill..](../../../posts/waldo-be/318571.md) (community post): "Building effective AI tools for telemetry analysis requires more than access"
- [What's New: Telemetry (2023 release wave 2)](../../../videos/7rIHz0zrgWU.md) (video): "telemetry; performance analysis; ai insights; error troubleshooting"
- [Connect Power BI Telemetry Apps to Read your Business Central Telemetry Data (2023)](../../../videos/BOY2442wHSc.md) (video): "power bi; telemetry; application insights; data connection"
- [Get Low-Friction Go-Lives and Optimize Your Investments with Telemetry Data](../../../videos/F_pssS0FtUc.md) (video): "telemetry data usage analytics power bi reporting go-live optimization"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
