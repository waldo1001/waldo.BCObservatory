---
id: topic/dev-itpro/development/troubleshooting/troubleshooting-with-telemetry
type: topic
title: Troubleshooting with telemetry
summary: Troubleshooting with telemetry in Business Central covers turning on telemetry to Azure Application Insights, the available telemetry events, analysis with KQL and Power BI, alerting, and using telemetry to diagnose performance problems. It answers setup, analysis, alerting and performance questions.
tier: official
language: en
system: platform
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:22:43.785Z"
  flags: []
generated:
  at: "2026-10-24T00:57:10.969Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 1888a9df09c63c9898c62fd4596ebb6cdc3c61cba798497d43b8343ae43b3851
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-alert
    title: Alert on Telemetry
    date: "2022-11-17"
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
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-available-telemetry
    title: Available Telemetry
    date: "2021-07-09"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/performance/performance-work-perf-problem
    title: How to work with a performance problem
    date: "2026-09-18"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-overview
    title: Monitoring and Analyzing Telemetry
    date: "2025-06-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-enable-application-insights
    title: Turn sending telemetry to application insights on or off
    date: "2024-07-23"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-alert
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-analyze-with-kql
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-power-bi-app
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-available-telemetry
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/performance/performance-work-perf-problem
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-overview
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-enable-application-insights
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development/troubleshooting
  localizations: []
  videos: []
  posts:
    - post/duiliotacconi-com/1501
    - post/duiliotacconi-com/1925
    - post/duiliotacconi-com/2074
    - post/waldo-be/318371
    - post/waldo-be/318461
  guidelines: []
learn_toc_path:
  - Development
  - Troubleshooting
  - Troubleshooting with telemetry
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development/troubleshooting
children: []
coverage:
  learn: 7
  code: 0
  video: 0
  blog: 5
  guideline: 0
bc_forms: []
member_hash: 2f3b3934ac033023f927292453c1e85b5a805202dba3ad71eb731b2a269851ea
narrative: generated
---

# Troubleshooting with telemetry

> Troubleshooting with telemetry in Business Central covers turning on telemetry to Azure Application Insights, the available telemetry events, analysis with KQL and Power BI, alerting, and using telemetry to diagnose performance problems. It answers setup, analysis, alerting and performance questions.

Path: [Development](../../development.md) > [Troubleshooting](../troubleshooting.md) > Troubleshooting with telemetry · tier official · system platform · narrative reviewed (checked by Opus)

## Overview

This section explains how to collect and use Business Central telemetry stored in Azure Application Insights. It covers online and on-premises deployments, and the steps run from enabling telemetry to analyzing it and acting on it.

Start with "Monitoring and Analyzing Telemetry" for the overview, then "Turn sending telemetry to application insights on or off" to configure connection strings or instrumentation keys for the server, admin center, or individual tenants. "Available Telemetry" lists events by event ID (application, client, lifecycle, runtime), so you know what data you can query.

To analyze data, use the free Power BI apps (usage, error, performance, administration reports) or write KQL queries against Application Insights. "Alert on Telemetry" shows how to raise alerts, and "How to work with a performance problem" puts telemetry next to profilers and database analysis tools in a measure, locate, eliminate process.

## Key points

- Telemetry is sent to Azure Application Insights, configured with a connection string or instrumentation key for the server, admin center, or individual tenants; on-premises setup is supported.
- Available Telemetry lists events by event ID in four groups: application, client, lifecycle, and runtime.
- Power BI apps for telemetry are free and open source, with usage, error, performance, and administration reports and sample data.
- KQL queries run against Application Insights tables such as traces and pageViews, using custom dimensions; examples cover report usage, session tracking, user activity, and timezone conversion.
- Alerts on telemetry can be built with Power BI Metrics, Application Insights alerts, Logic Apps, or Power Automate using KQL queries.
- Performance troubleshooting follows measure, locate bottlenecks, eliminate; tools include the scheduled and in-client performance profilers, AL Profiler, telemetry, missing indexes, and wait statistics.
- Telemetry can be enabled at environment level and app level, and apps can emit custom telemetry.

## Learn pages

- [Alert on Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-alert): Learn how to alert on Business Central telemetry.
  - Set up alerts on telemetry to notify when significant events occur in your environment.
  - Use Power BI Metrics for no-code alerting on telemetry data.
  - Use Application Insights, Azure Logic Apps, or Power Automate for advanced alerting.
  - KQL queries define alerting conditions; set recurrence to match query lookback period.
  - Step: In Azure portal, go to Application Insights resource and select Alerts.
  - Step: Add custom log search condition with KQL query for alerting rule.
  - Sample alerting queries are available in Business Central BCTech GitHub repository.
  - Logic Apps and Power Automate need API Connection authentication using Application ID and API Key.
- [Analyze and monitor telemetry with KQL](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-analyze-with-kql): Learn how to query Business Central telemetry with KQL.
  - Business Central telemetry is stored in Azure Application Insights in traces and pageViews tables
  - Kusto Query Language (KQL) is used to query telemetry data in Application Insights
  - From Log Analytics, traces map to AppTraces table and pageViews map to AppPageViews table
  - All telemetry events have timestamp in UTC timezone that can be converted to local timezone
  - Session ID in version 24 and later allows tracking all events within a single user session
  - KQL queries can find start time of events like reports or long-running operations using execution time
- [Analyze and monitor telemetry with Power BI](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-power-bi-app): Learn how to install, configure, and use the Power BI app on Business Central telemetry data.
  - Two free Power BI apps analyze telemetry: one for environment telemetry, one for app and extension telemetry.
  - Usage report shows sessions, clients, user locations, page views, reports, features, integrations, and deprecated features.
  - Error report displays user errors, integration errors, and system errors across environments or apps.
  - Performance report tracks sessions, OnCompanyOpen timing, page views, reports, long-running queries, and task scheduler jobs.
  - Administration report shows environment inventory, update planning, and changes to environments, companies, and extensions.
  - Prerequisite: Power BI pro license required to use the apps.
  - Step: Install app from Microsoft Marketplace using the provided link.
  - Step: Get Application ID from Azure portal and connect to Application Insights resource in Power BI.
- [Available Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-available-telemetry): Get an overview of available telemetry in Business Central
  - Business Central telemetry is organized by areas and by event IDs in Application Insights.
  - Event IDs include application events, client events, lifecycle events, and runtime events.
- [How to work with a performance problem](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/performance/performance-work-perf-problem): Troubleshooting process that can help to guide you to find the root cause slow performance.
- [Monitoring and Analyzing Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-overview): Learn how Business Central provides telemetry for each environment, both for online and on-premises environments.
  - Telemetry can be enabled at environment level or per-extension level to collect operational data in Azure Application Insights.
  - With Business Central 2020 release wave 2 and later, publishers can set Application Insights connection strings in app.json manifest files.
  - Telemetry data is stored in Application Insights Logs tables called traces and pageViews for analysis via Kusto query language.
  - Both online and on-premises Business Central instances can emit telemetry to Azure Application Insights.
  - Free Power BI apps analyze Business Central telemetry; one app covers environments while another covers apps and extensions.
  - Permissions: AL developers can create custom telemetry messages using Feature Telemetry codeunit or LogMessage method from Session class.
  - In the observatory: [Codeunit 8703 "Feature Telemetry"](../../../../objects/codeunit/8703.md)
- [Turn sending telemetry to application insights on or off](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-enable-application-insights): Learn how you can get richer telemetry by connecting your Business Central with Application Insights for telemetry.
  - Status: Generally available for Business Central online and on-premises
  - Prerequisite: Microsoft Azure subscription and Application Insights resource are required to send telemetry
  - Prerequisite: For version 17 and earlier, copy the Instrumentation Key; for later versions, copy the Connection String from Azure portal
  - Connection string has maximum length of 2,048 characters
  - Limit: Instrumentation key support ends 31 March 2025; transition to connection strings required by that date
  - Step: For online environments, enable telemetry from admin center by selecting Environments, defining Application Insights Key, and saving to trigger environment restart
  - Step: For on-premises single-tenant, use Set-NAVServerConfiguration cmdlet to set Application Insights Connection String or Instrumentation Key
  - Step: For on-premises multitenant, use Mount-NAVTenant cmdlet with ApplicationInsightsConnectionString or ApplicationInsightsKey parameters when mounting tenants

Key facts from Microsoft Learn (CC BY 4.0), in our own words (D106); open the page for the full text.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [Client Crash? Check Error Dialog signal](../../../../posts/duiliotacconi-com/1501.md) (community post): "telemetry is the way to investigate client crashes. Start from the operation id shown at the crash"
- [Dynamics 365 Business Central Online Wait Statistics in Telemetry: the AI boost](../../../../posts/duiliotacconi-com/1925.md) (community post): "AI can analyze exported wait statistics telemetry to provide performance insights"
- [Use sqlServerSessionId to spot on blocking sessions in Dynamics 365 Business Central 2026 Wave 1](../../../../posts/duiliotacconi-com/2074.md) (community post): "Investigation workflow involves isolating lock timeouts, filtering lock snapshots"
- [Analyzing BC Telemetry with AI with the “BC Telemetry Buddy”](../../../../posts/waldo-be/318371.md) (community post): "BC Telemetry Buddy is a VSCode extension and Model Context Protocol tool"
- [BC Telemetry Buddy – When Your 12-Year-Old Accidentally Helps You Find a Problem](../../../../posts/waldo-be/318461.md) (community post): "lets you question Business Central telemetry in natural language instead of writing KQL"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
