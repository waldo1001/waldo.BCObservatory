---
id: topic/dev-itpro/development/troubleshooting/troubleshooting-with-telemetry
type: topic
title: Troubleshooting with telemetry
summary: Troubleshooting with telemetry covers how Business Central sends telemetry to Azure Application Insights and how to turn it on, analyze it with KQL or Power BI, set up alerts, and use it for performance problems. It answers setup, event lookup, query and reporting questions.
tier: official
language: en
system: platform
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-21T01:00:52.651Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 958049d60ec5650223fd2d135d4e24dd486865533ce4db57870fb9c5e15e0aea
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-analyze-with-kql
    title: Analyze and Monitor Telemetry with KQL
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-power-bi-app
    title: Analyze and Monitor Telemetry with Power BI
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-available-telemetry
    title: Available Business Central Telemetry
    date: "2026-11-17"
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
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-alert
    title: Set Up Business Central Telemetry Alerts
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-enable-application-insights
    title: Turn Business Central Environment Telemetry On or Off
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-analyze-with-kql
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-power-bi-app
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-available-telemetry
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/performance/performance-work-perf-problem
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-overview
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-alert
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
    - post/waldo-be/318212
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

> Troubleshooting with telemetry covers how Business Central sends telemetry to Azure Application Insights and how to turn it on, analyze it with KQL or Power BI, set up alerts, and use it for performance problems. It answers setup, event lookup, query and reporting questions.

Path: [Development](../../development.md) > [Troubleshooting](../troubleshooting.md) > Troubleshooting with telemetry · tier official · system platform · narrative **unreviewed** (model text not yet checked)

## Overview

Business Central can emit operational data to Azure Application Insights, at the environment level and at the app/extension level. This section explains how to enable that telemetry for online and on-premises deployments, what events are emitted, and how to analyze and act on the data.

The pages follow a practical order. Start with "Monitoring and Analyzing Telemetry" for the overall picture, then "Turn Business Central Environment Telemetry On or Off" to connect an environment to Application Insights. "Available Business Central Telemetry" lists the events by area and event ID, so you can find what to query.

For analysis, use the Power BI apps (Usage, Errors, Performance, Administration reports) or write KQL queries against tables such as traces and pageViews. "Set Up Business Central Telemetry Alerts" covers automated notifications, and "How to work with a performance problem" places telemetry next to profilers and database analysis tools in a measure, locate, eliminate process.

## Key points

- Telemetry can be enabled at environment level and at app/extension level, sending data to Azure Application Insights.
- Environment telemetry setup uses a connection string (or instrumentation key) and applies to online and on-premises deployments; on-premises also covers single-tenant mode setup and user telemetry ID assignment.
- Available Business Central Telemetry lists events by area and event ID, including lifecycle, runtime, and client events.
- KQL pages show syntax and examples for the traces and pageViews tables, session and user tracking, and report usage analysis.
- The free open-source Power BI apps provide four reports: Usage, Errors, Performance, and Administration.
- The Performance report covers session timings, long-running SQL queries, database lock timeouts, and job queue timings.
- Telemetry alerts can be built with Application Insights alerts, Azure Logic Apps, or Power Automate using KQL queries and the Azure Monitor Logs connector.
- The performance troubleshooting guide covers the scheduled and in-client Performance Profiler, AL Profiler, missing indexes, and database wait statistics, alongside telemetry.

## Learn pages

- [Analyze and Monitor Telemetry with KQL](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-analyze-with-kql): Query Business Central telemetry with Kusto Query Language to follow sessions and users, investigate performance, and analyze report usage.
  - Business Central telemetry is stored in Application Insights in traces and pageViews tables
  - Kusto Query Language (KQL) is used to query telemetry data in Application Insights
  - Kusto queries can be used in Application Insights Logs, Power BI reports, Alerts, Azure Dashboards, and Jupyter Notebooks
  - With workspace-based resources, telemetry goes to Log Analytics workspace for consolidated access across application, infrastructure, and platform logs
  - Telemetry table names differ: traces in Application Insights become AppTraces in Log Analytics; pageViews become AppPageViews
  - Business Central server emits timestamps in UTC timezone; use datetime_utc_to_local() function to convert to local timezone
  - From version 24 onwards, session_Id and user_Id are aligned between server and browser components for advanced troubleshooting
- [Analyze and Monitor Telemetry with Power BI](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-power-bi-app): Install and configure Power BI apps for Business Central telemetry to analyze usage, investigate errors, and monitor environment performance.
  - Power BI telemetry apps consist of four reports: Usage, Errors, Performance, and Administration.
  - Usage report covers sessions, clients, locations, page views, reports, feature usage, integrations, and deprecated features.
  - Error report analyzes user errors, integration errors, and system errors; supplements Jupyter notebook troubleshooting guides.
  - Performance report provides insights into sessions, page timings, long-running queries, database locks, and job scheduling.
  - Administration report tracks environment inventory, version updates, and changes to environments, companies, extensions, indexes, and fields.
  - App parameters control refresh schedules, Microsoft Entra tenant mapping, timezone, data inclusion, and app filtering.
  - Sample data is shown by default in Power BI apps; actual data requires connecting Application Insights resource.
- [Available Business Central Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-available-telemetry): Find Business Central telemetry by area or event ID to monitor environments and extensions, diagnose errors, and analyze performance.
  - Business Central telemetry is logged into traces or pageViews tables in Application Insights
  - Telemetry covers application events, client events, lifecycle events, and runtime events
- [How to work with a performance problem](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/performance/performance-work-perf-problem): Troubleshooting process that can help to guide you to find the root cause slow performance.
- [Monitoring and Analyzing Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-overview): Monitor Business Central environments and extensions with Application Insights telemetry to diagnose errors, analyze performance, and track usage.
  - Environment-level telemetry and app-level telemetry can be enabled separately to Application Insights resources.
  - Status: Per-extension telemetry enabled from Business Central 2020 release wave 2 by setting connection string in app.json.
  - Both online and on-premises instances can emit telemetry to Application Insights.
  - Telemetry data is stored in Application Insights Logs in traces and pageViews tables, queried with KQL.
  - Two free, open-source Power BI apps available from marketplace: one for environment telemetry, one for app telemetry.
  - Permissions: Power BI Pro licenses required to install telemetry Power BI apps.
  - In the observatory: [Codeunit 8703 "Feature Telemetry"](../../../../objects/codeunit/8703.md)
- [Set Up Business Central Telemetry Alerts](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-alert): Set up alerts on Business Central telemetry with Azure Monitor, Logic Apps, or Power Automate to respond to issues and environment changes.
  - Telemetry alerts can be defined using Application Insights, Azure Logic Apps, or Power Automate
  - Defining alerts requires a Kusto KQL query to define the alerting condition
  - It is good practice to add where clause limiting event timestamp in alerting queries, such as timestamp greater than ago 1 hour
  - Step: Create alerts in Application Insights by opening Azure portal, locating Application Insights resource, and selecting Alerts
  - Azure Logic Apps and Power Automate use Azure Monitor Logs connector with workspace table names like AppTraces instead of traces
  - Sample alerting queries and automations are available in the Business Central BCTech repository on GitHub
- [Turn Business Central Environment Telemetry On or Off](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-enable-application-insights): Connect Business Central online or on-premises environments to Azure Application Insights to collect telemetry and troubleshoot issues.
  - Prerequisite: Create an Azure Application Insights resource to receive telemetry data
  - Step: Obtain Connection String or Instrumentation Key from the Application Insights resource Overview page
  - Connection String is recommended for versions after 2020 release wave 2; Instrumentation Key support ended March 31, 2025
  - Step: For online environments, enable telemetry in admin center by selecting Define and entering connection string
  - Step: For on-premises single-tenant, set ApplicationInsightsConnectionString in server configuration
  - Step: For on-premises multitenant, specify connection string per tenant during Mount-NAVTenant
  - Telemetry ID can be assigned or cleared per user on User Card to track troubleshooting by individual
  - Same Application Insights resource can be used for multiple tenants and environments

Key facts from Microsoft Learn (CC BY 4.0), in our own words (D106); open the page for the full text.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [Client Crash? Check Error Dialog signal](../../../../posts/duiliotacconi-com/1501.md) (community post): "telemetry is the way to investigate client crashes. Start from the operation id shown at the crash"
- [Dynamics 365 Business Central Online Wait Statistics in Telemetry: the AI boost](../../../../posts/duiliotacconi-com/1925.md) (community post): "AI can analyze exported wait statistics telemetry to provide performance insights"
- [Use sqlServerSessionId to spot on blocking sessions in Dynamics 365 Business Central 2026 Wave 1](../../../../posts/duiliotacconi-com/2074.md) (community post): "Investigation workflow involves isolating lock timeouts, filtering lock snapshots"
- [Troubleshooting Series – Ep3 – Missing Indexes](../../../../posts/waldo-be/318212.md) (community post): "Sending daily snapshots of missing indexes to telemetry allows trend analysis"
- [BC Telemetry Buddy – When Your 12-Year-Old Accidentally Helps You Find a Problem](../../../../posts/waldo-be/318461.md) (community post): "lets you question Business Central telemetry in natural language instead of writing KQL"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
