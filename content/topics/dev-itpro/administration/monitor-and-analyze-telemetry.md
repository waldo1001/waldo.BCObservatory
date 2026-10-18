---
id: topic/dev-itpro/administration/monitor-and-analyze-telemetry
type: topic
title: Monitor and analyze telemetry
summary: "Business Central telemetry sent to Azure Application Insights: how to turn it on, analyze it with KQL and Power BI, set alerts, control cost, and look up event IDs. It answers setup, analysis, alerting, cost and event reference questions."
tier: official
language: en
system: platform
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-18T00:56:54.350Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: ef7c4f54e4ea6cd7fdfffb35a5dfe92550e8c97a3b238a9ab42dfb614894f630
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
    - video/efoFM5uiCxg
    - video/F_pssS0FtUc
  posts:
    - post/demiliani-com/13369
    - post/duiliotacconi-com/1501
    - post/duiliotacconi-com/1537
    - post/waldo-be/317845
  guidelines: []
  changes:
    - change/bcapps/10573
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
  video: 4
  blog: 4
  guideline: 0
bc_forms: []
member_hash: 6d811af42d6a134d1ed6be0e44736f3c1dff51ecfed1455cb2a4358c4de6d557
narrative: generated
---

# Monitor and analyze telemetry

> Business Central telemetry sent to Azure Application Insights: how to turn it on, analyze it with KQL and Power BI, set alerts, control cost, and look up event IDs. It answers setup, analysis, alerting, cost and event reference questions.

Path: [Administration](../administration.md) > Monitor and analyze telemetry · tier official · system platform · narrative **unreviewed** (model text not yet checked)

## Overview

This section covers the full telemetry workflow for Business Central. It starts with enabling telemetry by connecting an environment, the server, the admin center, or individual tenants to Azure Application Insights, for both online and on-premises deployments. The overview page explains environment-level and app-level telemetry and links to the other steps.

Once data flows, you can analyze it with KQL queries in Application Insights or Log Analytics, or use the free, open-source Power BI apps with usage, error, performance, and administration reports. Alerts can be built with Power BI Metrics, Application Insights alerts, Logic Apps, or Power Automate. The Controlling Telemetry Cost page and the FAQ help manage ingestion caps, data collection rules, and retention.

For event lookups, the Available Telemetry and Event IDs pages list events by group, and the Telemetry by area subtopic gives a detailed per-area reference with event IDs and custom dimensions. Start with the Monitoring and Analyzing Telemetry overview, then set up Application Insights.

## Key points

- Telemetry is enabled by setting a connection string or instrumentation key for the server, admin center, or individual tenants; on-premises setup is supported.
- KQL queries run against Application Insights tables such as traces and pageViews and use custom dimensions; examples cover report usage, sessions, user activity, and timezone conversion.
- Power BI apps for telemetry are free and open source, with usage, error, performance, and administration reports and sample data.
- Alerts can be set up using Power BI Metrics, Azure Application Insights alerts, Azure Logic Apps, or Power Automate with KQL.
- Cost control options include a daily ingestion cap, data collection rules, sampling, and retention periods.
- Event ID references group events as application, client, lifecycle, and runtime, and explain the AL event ID prefix.
- The Telemetry by area subtopic (61 pages) documents events by area such as extensions, jobs, performance, security, web services, AI/MCP, and lifecycle.
- The FAQ covers custom dimensions overflow, data retention, log analytics queries, and the purge API.

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

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#10573 BC IQ - Adding data categorization](../../../changes/bcapps/10573.md) (code change): "Data categorization for BC IQ to codeunit 1751 Data Classification Eval"
- [Dynamics 365 Business Central: monitoring your customer’s network speed from telemetry.](../../../posts/demiliani-com/13369.md) (community post): "Business Central now includes hardware and network telemetry parameters in page views"
- [Client Crash? Check Error Dialog signal](../../../posts/duiliotacconi-com/1501.md) (community post): "Dashboard tiles built on RT0030 (by failure reason, details, stack trace and timeline) showed InvalidOperation errors"
- [How to choose the best Update Window in Dynamics 365 Business Central Online](../../../posts/duiliotacconi-com/1537.md) (community post): "KQL telemetry queries that count platform hotfix deployments by local hour"
- [Handling Business Central Telemetry like a boss: iFacto Telemetry – Pt. 3](../../../posts/waldo-be/317845.md) (community post): "Dashboard visualization consolidates custom telemetry and daily telemetry data"
- [What's New: Telemetry (2023 release wave 2)](../../../videos/7rIHz0zrgWU.md) (video): "AI assisted performance analysis; Key influencers analysis; Top segments analysis"
- [Connect Power BI Telemetry Apps to Read your Business Central Telemetry Data (2023)](../../../videos/BOY2442wHSc.md) (video): "power bi; telemetry; application insights; data connection"
- [What's New: Get Notified of Issues with Job Queues (2024 release wave 2)](../../../videos/efoFM5uiCxg.md) (video): "Job queue notifications; background processing; in-product notifications"
- [Get Low-Friction Go-Lives and Optimize Your Investments with Telemetry Data](../../../videos/F_pssS0FtUc.md) (video): "Business Central Telemetry; Usage Report; Error Dashboard; KPI Tracking"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
