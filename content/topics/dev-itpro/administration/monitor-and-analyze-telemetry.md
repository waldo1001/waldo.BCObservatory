---
id: topic/dev-itpro/administration/monitor-and-analyze-telemetry
type: topic
title: Monitor and analyze telemetry
summary: "Business Central telemetry sent to Azure Application Insights: how to turn it on, analyze it with KQL and Power BI, set alerts, control cost, and look up event IDs. It answers setup, analysis, alerting, cost and event reference questions."
tier: official
language: en
system: platform
review:
  state: reviewed
  by: opus
  at: "2026-10-23T01:12:47.130Z"
  flags: []
generated:
  at: "2026-10-26T08:22:02.554Z"
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
    - video/F_pssS0FtUc
    - video/MYZOkoSmtZ0
    - video/sZ7wMU1Uxio
    - video/VX_aPhcsIOc
  posts:
    - post/demiliani-com/13096
    - post/demiliani-com/13369
    - post/duiliotacconi-com/1501
    - post/duiliotacconi-com/1537
    - post/waldo-be/317845
    - post/waldo-be/318423
    - post/waldo-be/318571
    - post/yzhums-com/63913
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
  video: 6
  blog: 8
  guideline: 0
bc_forms: []
member_hash: 6d811af42d6a134d1ed6be0e44736f3c1dff51ecfed1455cb2a4358c4de6d557
narrative: generated
---

# Monitor and analyze telemetry

> Business Central telemetry sent to Azure Application Insights: how to turn it on, analyze it with KQL and Power BI, set alerts, control cost, and look up event IDs. It answers setup, analysis, alerting, cost and event reference questions.

Path: [Administration](../administration.md) > Monitor and analyze telemetry · tier official · system platform · narrative reviewed (checked by Opus)

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
- [Controlling Telemetry Cost](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-control-cost): Learn how to control the cost of Business Central provides telemetry.
  - Set daily cap on telemetry data ingestion and alerts when cap is reached to control costs.
  - First 5 GB monthly is free; 160 MB daily cap allows 5000 to 80000 events daily depending on event size.
  - Typical telemetry event consumes 2-10 KB; maximum event size is 32 KB.
  - Current pay-as-you-go price is 2.76 USD per GB; example customers spend 7.3 to 178 USD per month.
  - Data Collection Rules filter telemetry at ingestion to reduce costs and improve query performance.
  - AppInsights resource must be Workspace-based to use Data Collection Rules with Log Analytics backend.
  - Business Central logs to AppTraces and AppPageViews tables; filter these with KQL queries on workspace.
  - Reduce retention cost using default retention periods of 30 to 730 days or purge data with user-defined filters.
- [Monitoring and Analyzing Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-overview): Learn how Business Central provides telemetry for each environment, both for online and on-premises environments.
  - Telemetry can be enabled at environment level or per-extension level to collect operational data in Azure Application Insights.
  - With Business Central 2020 release wave 2 and later, publishers can set Application Insights connection strings in app.json manifest files.
  - Telemetry data is stored in Application Insights Logs tables called traces and pageViews for analysis via Kusto query language.
  - Both online and on-premises Business Central instances can emit telemetry to Azure Application Insights.
  - Free Power BI apps analyze Business Central telemetry; one app covers environments while another covers apps and extensions.
  - Permissions: AL developers can create custom telemetry messages using Feature Telemetry codeunit or LogMessage method from Session class.
  - In the observatory: [Codeunit 8703 "Feature Telemetry"](../../../objects/codeunit/8703.md)
- [Telemetry Event IDs in Application Insights \| Microsoft Docs](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-event-ids): Learn about the event IDs of Business Central events emitted to Azure Application Insights.
  - Status: Generally available, reference page for telemetry event IDs
  - AL event IDs emitted by application code receive AL prefix when sent to Application Insights
  - Events are grouped by administrative purpose: application, client, lifecycle, and runtime categories
  - AL events originate from Session.LogMessage, Telemetry codeunit, or Feature Telemetry codeunit
  - Event dimensions names are prefixed with 'al' when converted to Application Insights format
  - Business Central applications repository contains source code for finding AL event origins
- [Telemetry FAQ (Frequently Asked Questions)](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-faq): See frequently asked questions we get on telemetry in Business Central
  - Business Central service does not emit personal or customer data to Application Insights
  - Telemetry emits only service runtime data, tenant identifiers, configuration data, and usage data
  - Each custom dimension in events has 8,000 character limit; overflow keys are named with _1 and _2 suffixes
  - Separate environment telemetry from app telemetry into different Application Insights resources for better management
  - Limit: Application Insights instrumentation was not backported to versions earlier than 15.0
  - Azure workspace default retention policy can be set to 30, 31, 60, 90, 120, 180, 270, 365, 550, or 730 days
  - Permissions: Grant read-only access by assigning Reader role in Access Control (IAM) page and optionally on Resource Group
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

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#10573 BC IQ - Adding data categorization](../../../changes/bcapps/10573.md) (code change): "Data categorization for BC IQ to codeunit 1751 Data Classification Eval"
- [Dynamics 365 Business Central UI performance: what about the browser and the local machine?](../../../posts/demiliani-com/13096.md) (community post): "Page View telemetry, the Speedometer 3.1 benchmark and a Puppeteer-based Node.js script can help measure client performance"
- [Dynamics 365 Business Central: monitoring your customer’s network speed from telemetry.](../../../posts/demiliani-com/13369.md) (community post): "Business Central now includes hardware and network telemetry parameters in page views"
- [Client Crash? Check Error Dialog signal](../../../posts/duiliotacconi-com/1501.md) (community post): "Dashboard tiles built on RT0030 (by failure reason, details, stack trace and timeline) showed InvalidOperation errors"
- [How to choose the best Update Window in Dynamics 365 Business Central Online](../../../posts/duiliotacconi-com/1537.md) (community post): "KQL telemetry queries that count platform hotfix deployments by local hour"
- [Handling Business Central Telemetry like a boss: iFacto Telemetry – Pt. 3](../../../posts/waldo-be/317845.md) (community post): "Dashboard visualization consolidates custom telemetry and daily telemetry data"
- [BC Telemetry Buddy – 84 commits later..](../../../posts/waldo-be/318423.md) (community post): "production-ready tool for analyzing Business Central telemetry"
- [I built the tool .. but forgot the skill..](../../../posts/waldo-be/318571.md) (community post): "BC Telemetry Buddy amplifies the quality of the input, so vague questions get vague but confident answers"
- [Dynamics 365 Business Central: How to easily check who created an environment, company and record and when](../../../posts/yzhums-com/63913.md) (community post): "Tracking who created environments, companies, and records in Business Central can be done through telemetry"
- [What's New: Telemetry (2023 release wave 2)](../../../videos/7rIHz0zrgWU.md) (video): "AI assisted performance analysis; Key influencers analysis; Top segments analysis"
- [Connect Power BI Telemetry Apps to Read your Business Central Telemetry Data (2023)](../../../videos/BOY2442wHSc.md) (video): "power bi; telemetry; application insights; data connection"
- [Get Low-Friction Go-Lives and Optimize Your Investments with Telemetry Data](../../../videos/F_pssS0FtUc.md) (video): "Business Central Telemetry; Usage Report; Error Dashboard; KPI Tracking"
- [Store Business Central Telemetry in Azure Application Insights](../../../videos/MYZOkoSmtZ0.md) (video): "Store Business Central Telemetry in Azure Application Insights"
- [Change Dataset Properties for a Power BI Telemetry App in Power BI](../../../videos/sZ7wMU1Uxio.md) (video): "Power BI Telemetry app dataset properties"
- [Enable Cost Control Strategies for Business Central Telemetry](../../../videos/VX_aPhcsIOc.md) (video): "Enable Cost Control Strategies for Business Central Telemetry"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
