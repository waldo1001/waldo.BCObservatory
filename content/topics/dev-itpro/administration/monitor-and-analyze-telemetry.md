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
  at: "2026-11-20T01:01:32.224Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: ef7c4f54e4ea6cd7fdfffb35a5dfe92550e8c97a3b238a9ab42dfb614894f630
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-agent-lifecycle-trace
    title: Analyze Agent Lifecycle Telemetry
    date: "2026-09-22"
    commit: null
    t: null
    quote: null
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
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-cloud-migration-trace
    title: Analyze Business Central Cloud Migration Trace Telemetry
    date: "2026-11-17"
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
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-webservices-trace
    title: Analyze Incoming Web Service Telemetry
    date: "2026-11-17"
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
    date: "2026-11-17"
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
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-extension-key-vault-trace
    title: Analyzing App Key Vault Secret Trace Telemetry
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-authorization-trace
    title: Analyzing Authorization Trace Telemetry
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-changelog-configuration-trace
    title: Analyzing Changelog Configuration Changes Trace Telemetry
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-client-action-trace
    title: Analyzing Client Action Telemetry
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-client-add-in-exceptions
    title: Analyzing Client Control Add-In Exception Telemetry
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-company-lifecycle-trace
    title: Analyzing Company Lifecycle Trace Telemetry
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-database-deadlocks-trace
    title: Analyzing Database Deadlock Telemetry
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-database-locks-trace
    title: Analyzing Database Lock Timeout Trace Telemetry
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-database-wait-statistics-trace
    title: Analyzing Database Wait Statistics Telemetry
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-email-trace
    title: Analyzing Email Trace Telemetry
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-error-message-voting-trace
    title: Analyzing Error Message Vote Telemetry
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-error-method-trace
    title: Analyzing Error Method Trace Telemetry
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-extension-lifecycle-trace
    title: Analyzing Extension Lifecycle Trace Telemetry
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-extension-update-trace
    title: Analyzing Extension Update Trace Telemetry
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-pte-upload-validation-trace
    title: Analyzing Extension Upload Validation Telemetry
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-field-monitoring-trace
    title: Analyzing Field Monitoring Trace Telemetry
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-financial-report-lifecycle-trace
    title: Analyzing Financial Report Lifecycle Trace Telemetry
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-financial-report-usage-trace
    title: Analyzing Financial Report Usage Trace Telemetry
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-job-queue-lifecycle-trace
    title: Analyzing Job Queue Lifecycle Trace Telemetry
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-al-method-trace
    title: Analyzing Long Running AL Methods Telemetry
    date: "2026-11-17"
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
    title: Analyzing Marketplace Submission Validation Telemetry
    date: "2026-11-17"
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
    title: Analyzing Onboarding Trace Telemetry
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-analyze-with-kql
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-power-bi-app
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-available-telemetry
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-control-cost
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-overview
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-alert
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
    - video/2u5_F9Ztt7U
    - video/7rIHz0zrgWU
    - video/BOY2442wHSc
    - video/F_pssS0FtUc
    - video/MYZOkoSmtZ0
    - video/oF_wSP0xrSQ
    - video/sZ7wMU1Uxio
    - video/VX_aPhcsIOc
  posts:
    - post/demiliani-com/13096
    - post/demiliani-com/13369
    - post/duiliotacconi-com/1501
    - post/duiliotacconi-com/1537
    - post/duiliotacconi-com/2238
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
  video: 8
  blog: 9
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

- [Analyze and Monitor Telemetry with KQL](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-analyze-with-kql): Query Business Central telemetry with Kusto Query Language to follow sessions and users, investigate performance, and analyze report usage.
  - Business Central telemetry is stored in Application Insights in traces and pageViews tables
  - Kusto Query Language (KQL) is used to query telemetry data in Application Insights
  - Kusto queries can be used in Application Insights Logs, Power BI reports, Alerts, Azure Dashboards, and Jupyter Notebooks
  - With workspace-based resources, telemetry goes to Log Analytics workspace for consolidated access across application, infrastructure, and platform logs
  - Telemetry table names differ: traces in Application Insights become AppTraces in Log Analytics; pageViews become AppPageViews
  - Business Central server emits timestamps in UTC timezone; use datetime_utc_to_local() function to convert to local timezone
  - From version 24 onwards, session_Id and user_Id are aligned between server and browser components for advanced troubleshooting
- [Analyze and Monitor Telemetry with Power BI](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-power-bi-app): Install and configure Power BI apps for Business Central telemetry to analyze usage, investigate errors, and monitor environment performance.
  - Two free Power BI apps analyze telemetry: one for environment telemetry, one for app and extension telemetry.
  - Usage report shows sessions, clients, user locations, page views, reports, features, integrations, and deprecated features.
  - Error report displays user errors, integration errors, and system errors across environments or apps.
  - Performance report tracks sessions, OnCompanyOpen timing, page views, reports, long-running queries, and task scheduler jobs.
  - Administration report shows environment inventory, update planning, and changes to environments, companies, and extensions.
  - Prerequisite: Power BI pro license required to use the apps.
  - Step: Install app from Microsoft Marketplace using the provided link.
  - Step: Get Application ID from Azure portal and connect to Application Insights resource in Power BI.
- [Available Business Central Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-available-telemetry): Find Business Central telemetry by area or event ID to monitor environments and extensions, diagnose errors, and analyze performance.
  - Business Central telemetry is logged into traces or pageViews tables in Application Insights
  - Telemetry covers application events, client events, lifecycle events, and runtime events
- [Control Business Central Telemetry Costs](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-control-cost): Control Business Central telemetry costs with ingestion filters, daily caps, and retention settings for your Azure Application Insights data.
  - One telemetry event typically uses 2-10 KB; maximum is 64 KB per event.
  - One GB of data corresponds to approximately 100,000 events at 10 KB each.
  - Partner data shows average cost of 7.3 USD per customer monthly; large customers up to 178 USD.
  - Use data collection rules to filter unwanted telemetry before ingestion into workspace.
  - Business Central logs to AppTraces and AppPageViews tables in Log Analytics workspace.
  - Set daily cap on ingestion and configure alerts when cap is reached.
  - Limit: Daily cap is not a precise spending limit; ingestion can exceed it and be billed.
  - Override ingestion endpoint using IngestionEndpoint key in connection string.
- [Monitoring and Analyzing Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-overview): Monitor Business Central environments and extensions with Application Insights telemetry to diagnose errors, analyze performance, and track usage.
  - Telemetry can be enabled at environment level or per-extension level to collect operational data in Azure Application Insights.
  - With Business Central 2020 release wave 2 and later, publishers can set Application Insights connection strings in app.json manifest files.
  - Telemetry data is stored in Application Insights Logs tables called traces and pageViews for analysis via Kusto query language.
  - Both online and on-premises Business Central instances can emit telemetry to Azure Application Insights.
  - Free Power BI apps analyze Business Central telemetry; one app covers environments while another covers apps and extensions.
  - Permissions: AL developers can create custom telemetry messages using Feature Telemetry codeunit or LogMessage method from Session class.
  - In the observatory: [Codeunit 8703 "Feature Telemetry"](../../../objects/codeunit/8703.md)
- [Set Up Business Central Telemetry Alerts](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-alert): Set up alerts on Business Central telemetry with Azure Monitor, Logic Apps, or Power Automate to respond to issues and environment changes.
  - Telemetry alerts can be defined using Application Insights, Azure Logic Apps, or Power Automate
  - Defining alerts requires a Kusto KQL query to define the alerting condition
  - It is good practice to add where clause limiting event timestamp in alerting queries, such as timestamp greater than ago 1 hour
  - Step: Create alerts in Application Insights by opening Azure portal, locating Application Insights resource, and selecting Alerts
  - Azure Logic Apps and Power Automate use Azure Monitor Logs connector with workspace table names like AppTraces instead of traces
  - Sample alerting queries and automations are available in the Business Central BCTech repository on GitHub
- [Telemetry Event IDs in Application Insights \| Microsoft Docs](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-event-ids): Learn about the event IDs of Business Central events emitted to Azure Application Insights.
  - Status: Generally available, reference page for telemetry event IDs
  - AL event IDs emitted by application code receive AL prefix when sent to Application Insights
  - Events are grouped by administrative purpose: application, client, lifecycle, and runtime categories
  - AL events originate from Session.LogMessage, Telemetry codeunit, or Feature Telemetry codeunit
  - Event dimensions names are prefixed with 'al' when converted to Application Insights format
  - Business Central applications repository contains source code for finding AL event origins
- [Telemetry FAQ (Frequently Asked Questions)](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-faq): Get answers about Business Central telemetry setup, costs, privacy, retention, access, and querying data in Azure Application Insights.
  - Business Central service does not emit personal or customer data to Application Insights
  - Telemetry emits only service runtime data, tenant identifiers, configuration data, and usage data
  - Each custom dimension in events has 8,000 character limit; overflow keys are named with _1 and _2 suffixes
  - Separate environment telemetry from app telemetry into different Application Insights resources for better management
  - Limit: Application Insights instrumentation was not backported to versions earlier than 15.0
  - Azure workspace default retention policy can be set to 30, 31, 60, 90, 120, 180, 270, 365, 550, or 730 days
  - Permissions: Grant read-only access by assigning Reader role in Access Control (IAM) page and optionally on Resource Group
- [Turn Business Central Environment Telemetry On or Off](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-enable-application-insights): Connect Business Central online or on-premises environments to Azure Application Insights to collect telemetry and troubleshoot issues.
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
- [About Online Upgrades to Dynamics 365 Business Central 2026 Wave 2 (v29)](../../../posts/duiliotacconi-com/2238.md) (community post): "analyzes upgrade SQL and extension footprints using telemetry"
- [Handling Business Central Telemetry like a boss: iFacto Telemetry – Pt. 3](../../../posts/waldo-be/317845.md) (community post): "Dashboard visualization consolidates custom telemetry and daily telemetry data"
- [BC Telemetry Buddy – 84 commits later..](../../../posts/waldo-be/318423.md) (community post): "production-ready tool for analyzing Business Central telemetry"
- [I built the tool .. but forgot the skill..](../../../posts/waldo-be/318571.md) (community post): "BC Telemetry Buddy amplifies the quality of the input, so vague questions get vague but confident answers"
- [Dynamics 365 Business Central: How to easily check who created an environment, company and record and when](../../../posts/yzhums-com/63913.md) (community post): "Tracking who created environments, companies, and records in Business Central can be done through telemetry"
- [What's New: Server and Database (2026 release wave 1)](../../../videos/2u5_F9Ztt7U.md) (video): "Telemetry for MCP Configuration and Usage; Client Hardware and Network Telemetry"
- [What's New: Telemetry (2023 release wave 2)](../../../videos/7rIHz0zrgWU.md) (video): "AI assisted performance analysis; Key influencers analysis; Top segments analysis"
- [Connect Power BI Telemetry Apps to Read your Business Central Telemetry Data (2023)](../../../videos/BOY2442wHSc.md) (video): "power bi; telemetry; application insights; data connection"
- [Get Low-Friction Go-Lives and Optimize Your Investments with Telemetry Data](../../../videos/F_pssS0FtUc.md) (video): "telemetry data; usage analytics; power bi reporting; go-live optimization"
- [Store Business Central Telemetry in Azure Application Insights](../../../videos/MYZOkoSmtZ0.md) (video): "Store Business Central Telemetry in Azure Application Insights"
- [I Built an AI That Turns Business Central Telemetry Into GitHub Issues (Automatically)](../../../videos/oF_wSP0xrSQ.md) (video): "telemetry; application insights; kql queries; automated bc telemetry triage"
- [Change Dataset Properties for a Power BI Telemetry App in Power BI](../../../videos/sZ7wMU1Uxio.md) (video): "Power BI Telemetry app dataset properties"
- [Enable Cost Control Strategies for Business Central Telemetry](../../../videos/VX_aPhcsIOc.md) (video): "Enable Cost Control Strategies for Business Central Telemetry"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
