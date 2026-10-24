---
id: topic/dev-itpro/administration/monitor-and-analyze-telemetry/telemetry-by-area
type: topic
title: Telemetry by area
summary: Telemetry by area is a reference to the Business Central telemetry events sent to Application Insights, organized by area such as extensions, jobs, performance, security, web services, AI/MCP and company or environment lifecycle. It answers which events exist, their IDs and custom dimensions, and how to analyze them with KQL.
tier: official
language: en
system: platform
review:
  state: reviewed
  by: opus
  at: "2026-10-24T00:53:39.989Z"
  flags: []
generated:
  at: "2026-10-24T00:57:10.969Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: a9c6494ee38833d40908ef7062e91cc05a58432f16f4dcfab86169e227f0879b
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-agent-lifecycle-trace
    title: Analyze Agent Lifecycle Telemetry
    date: "2026-09-22"
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
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-retention-policy-trace
    title: Analyzing retention policy trace telemetry
    date: "2023-12-27"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-stop-session-trace
    title: Analyzing Stopped Session Telemetry
    date: "2022-07-26"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-task-scheduler-trace
    title: Analyzing Task Scheduler Telemetry
    date: "2023-12-15"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-agent-lifecycle-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-api-metadata-validation-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-app-resource-exposure-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-business-events-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-configuration-package-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-email-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-mcp-configuration-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-mcp-server-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-open-in-excel-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-sql-query-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-table-index-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-ai-consumption
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-changelog-configuration-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-client-action-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-client-add-in-exceptions
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-cloud-migration-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-database-wait-statistics-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-environment-lifecycle-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-environment-validation-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-error-message-voting-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-pte-upload-validation-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-field-monitoring-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-financial-report-lifecycle-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-financial-report-usage-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-job-queue-lifecycle-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-al-method-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-long-running-sql-query-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-appsource-app-validation-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-appsource-submission-validation-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-metadata-embeddings-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-onboarding-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-performance-toolkit-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-permission-changes-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-permission-dependency-cycle-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-permission-error-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-profile-configuration-lifecycle-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-report-layout-lifecycle-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-retention-policy-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-stop-session-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-task-scheduler-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-verbose-logging-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-webservices-access-key-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-extension-key-vault-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-authorization-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-azure-function-integration-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-company-lifecycle-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-database-deadlocks-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-database-locks-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-error-method-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-extension-lifecycle-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-extension-update-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-feature-management-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-feature-telemetry
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-webservices-outgoing-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-page-view-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-reports-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-webservices-outgoing-certificate-validation-errors
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-area-overview
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-user-checklist-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-webservices-publish-failure-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-webservices-trace
  objects: []
  features: []
  topics:
    - topic/dev-itpro/administration/monitor-and-analyze-telemetry
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Administration
  - Monitor and analyze telemetry
  - Telemetry by area
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/administration/monitor-and-analyze-telemetry
children: []
coverage:
  learn: 61
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: c86e830d946d5c66be423238373d8b30efeed709899c3779960807433a93a132
narrative: generated
---

# Telemetry by area

> Telemetry by area is a reference to the Business Central telemetry events sent to Application Insights, organized by area such as extensions, jobs, performance, security, web services, AI/MCP and company or environment lifecycle. It answers which events exist, their IDs and custom dimensions, and how to analyze them with KQL.

Path: [Administration](../../administration.md) > [Monitor and analyze telemetry](../monitor-and-analyze-telemetry.md) > Telemetry by area · tier official · system platform · narrative reviewed (checked by Opus)

## Overview

This section is a catalog of telemetry areas. Each page covers one area: what operation is logged, the event IDs, the custom dimensions, and often sample KQL queries for Application Insights. Some pages list traces and some list pageViews data.

The areas fall into groups. Performance and database: SQL query traces, long running SQL and AL methods, wait statistics, deadlocks, lock timeouts, and the Performance Toolkit. Lifecycle: environments, companies, extensions, extension updates, cloud migration, job queue and task scheduler. Security and access: authorization, permission changes and errors, field monitoring, and web service access keys. Integration and AI: web service requests, outgoing requests, Azure Functions, MCP configuration and tool calls, agent lifecycle, and AI consumption.

Start with "Telemetry area overview" to see what is available. Then open the page for the area you are troubleshooting. Check the version notes on each page, because many areas apply only from a given release wave or version.

## Key points

- Start with the Telemetry area overview page, which lists the operations logged to traces or pageViews tables in Application Insights.
- Performance events include SQL query trace (RT0009), long running AL methods (RT0018), database deadlocks (RT0028), and lock timeouts (RT0012, RT0013). Long running SQL queries are those over 750 ms.
- Error and permission events include the Error method trace (RT0030) and permission errors (RT0031).
- AI and agent areas: agent lifecycle (LC0066, LC0067, LC0068), MCP configuration, MCP tool calls (RT0054) and AI consumption of Copilot Credits (RT0055). Agent lifecycle and both MCP pages apply to 2026 release wave 1, version 28.0.
- Open in Excel telemetry uses RT0056 and is listed for 2026 release wave 2.
- Audit-oriented areas: permission changes, field monitoring, changelog configuration, retention policies and feature management.
- Lifecycle and validation areas cover environments, companies, extensions, cloud migration, Marketplace submissions, breaking changes validation, and per-tenant extension (PTE) validation.
- Feature telemetry describes the Telemetry AL module. FeatureTelemetry has LogUsage, LogError and LogUptake for your own extensions.

## Learn pages

- [Analyze Agent Lifecycle Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-agent-lifecycle-trace): Learn how to analyze Business Central agent lifecycle telemetry for agent creation, configuration changes, state changes, and task activity.
  - Status: Generally available from 2026 release wave 1, version 28.0
  - Agent lifecycle telemetry tracks creation, configuration changes, and task assignments for AI agents
  - Agent created event records agent display name, user, state, instructions hash, and model details
  - Agent configuration changed event includes previous and current values for modified fields like state and model
  - Agent task created event records task ID, owning agent, and model source indicating where model was defined
  - Severity level is Warning when model is obsolete or retired, Informational when available or preview
- [Analyze API metadata validation telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-api-metadata-validation-trace): Learn about the API metadata validation telemetry in Business Central
  - Status: Generally available from Business Central 2024 release wave 2 and later.
  - API metadata validation telemetry identifies configuration issues preventing API pages from exposing correctly.
  - Event RT0048: Two or more API pages use same API path, creating conflict.
  - Event RT0037: API page has invalid configuration preventing exposure.
  - Event RT00049: API pages have circular references through navigation properties.
  - Event RT0050: API page defines invalid root entity.
  - Event RT0051: API page has conflicting navigation properties with same name but different targets.
- [Analyze app resource exposure policy telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-app-resource-exposure-trace): Learn about app resource exposure policy telemetry in Business Central
  - Status: Generally available from Business Central 2024 release wave 2 and later.
  - Resource exposure policy telemetry tracks failures parsing or applying policy overrides.
  - Event RT0022: Failure parsing resource exposure policy overrides defined in extension.
  - Resource exposure policies control which resources in extension other extensions can access.
- [Analyze business events telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-business-events-trace): Learn about business events telemetry in Business Central
  - Status: Generally available from Business Central 2023 release wave 2 and later.
  - Business events telemetry tracks lifecycle and execution of business event subscriptions.
  - Events RT0040-RT0044: Track subscription creation, deletion, modification, enable, disable.
  - Events RT0045-RT0047: Track successful trigger, failed trigger, failed notification sending.
  - Business events enable external systems to receive notifications when specific actions occur.
- [Analyze Configuration Package Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-configuration-package-trace): Learn about the telemetry for configuration package telemetry for Azure Application Insights.
  - Status: Generally available from 2020 release wave 2, version 17.2
  - Configuration package telemetry tracks export, import, apply, and delete operations
  - Export events record package system ID and execution time in milliseconds
  - Import events record file size in bytes and execution time for the import operation
  - Apply events record error count, field count, and record count included in the package
  - Execution ID correlates start and completion events for the same operation
  - Common dimensions include tenant ID, company name, environment type, and telemetry schema version
- [Analyze email trace telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-email-trace): Learn about the email telemetry in Business Central
  - Status: Email telemetry available from Business Central 2020 release wave 2, update 17.2 and later.
  - Email telemetry collects data on successful sends and failed send attempts.
  - Status: SMTP authentication and connection telemetry added from 2023 release wave 1, update 23.2 and later.
  - Prerequisite: Email must be set up before email telemetry data can be collected.
  - Failed emails are viewable in Email Outbox page in Business Central client.
  - Telemetry captures email provider connector used such as Current User, Microsoft 365, SMTP, or custom connectors.
  - In the observatory: [Codeunit 8888 "Email Dispatcher"](../../../../objects/codeunit/8888.md)
- [Analyze MCP configuration telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-mcp-configuration-trace): Learn about the MCP (Model Context Protocol) configuration telemetry in Business Central
  - Status: Generally available from Business Central 2026 release wave 1, version 28.0 and later.
  - MCP configuration telemetry tracks creation, modification, deletion, and default designation.
  - Event AL0000R0Q: MCP configuration created with settings like active, dynamic tool mode.
  - Event AL0000QE9: MCP configuration modified; records old and new values for changed settings.
  - Event AL0000QEB: MCP configuration deleted.
  - Event AL0000R0R: MCP configuration designated as default.
- [Analyze MCP Server Tool Calls Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-mcp-server-trace): Learn about the MCP Server telemetry in Business Central
  - Status: Generally available from version 28.0, Business Central 2026 release wave 1 and later
  - MCP Server telemetry tracks tool calls made through Model Context Protocol configurations
  - Event RT0054 fires when an MCP Server tool is called from Business Central
  - Custom dimensions include configuration name, tool name, client name, and execution time
  - Tool invocation results are Success or Failure, with failure reasons captured when applicable
  - KQL queries can analyze tool usage frequency, success rates, and troubleshoot failures
  - Prerequisite: MCP Server must be configured in Business Central before telemetry is generated
- [Analyze Open in Excel telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-open-in-excel-trace): Learn about the Open in Excel telemetry in Business Central
  - Status: Generally available in Business Central 2026 release wave 2 and later.
  - Open in Excel telemetry captures when users export data from Business Central using Open in Excel action.
  - Event RT0056 records page ID, name, object type, extension details, client type, company name, and environment information.
  - Telemetry includes stack trace, extension publisher, version info, and component version to help identify which extension initiated the Excel export.
- [Analyze SQL query trace telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-sql-query-trace): Learn about SQL query trace telemetry in Business Central
  - Status: Generally available from Business Central 2024 release wave 2 and later.
  - SQL query trace provides verbose logging of all SQL queries when verbose logging enabled.
  - Limit: RT0009 differs from long-running SQL query telemetry; captures all queries versus only those exceeding threshold.
  - Verbose logging enabled from Help & Support page or Business Central admin center.
  - Event RT0009: SQL statement executed with custom dimensions capturing object info and execution time.
- [Analyze table index trace telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-table-index-trace): Learn about the telemetry for changes made to table indexes
  - Status: Generally available from Business Central 2021 release wave 1, version 18.0 and later.
  - Table index trace logs when extension installs or upgrades and adds, modifies, or removes indexes on base table.
  - Event LC0024 fires when index enabled, LC0025 when disabled. Both record key name, fields, MaintainSIFTIndex, MaintainSQLIndex properties.
  - Index enabled at runtime (LC0063) and disabled at runtime (LC0064) events track dynamic index management via Index Management API.
  - Limit: Sync table column count exceeded (LC0065) warns when table exceeds recommended 256 SQL columns limit during extension sync.
  - Runtime index events include isALDefined flag, keySqlIndexFields, and keySumIndexFields dimensions; AL-defined keys show all dimensions, runtime-disabled keys may omit some.
  - Status: Runtime index events LC0063 and LC0064 and column count event LC0065 available from version 28.0 (2026 release wave 1).
- [Analyzing AI Consumption Trace Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-ai-consumption): Learn about the AI Consumption telemetry in Business Central.
  - AI consumption trace telemetry records when Copilot Credits are consumed by features subject to consumption-based billing.
  - Telemetry captures action type, agent task ID, company name, and exact credit count for each consumption event.
  - Extension telemetry reports only consumption associated with agents published to environment as part of the app.
  - Event ID RT0055 marks AI consumption recorded; telemetry schema version is 0.2.
  - KQL code allows analysis of consumed Copilot Credits by timestamp, environment, feature name, and credit count.
- [Analyzing Changelog Configuration Changes Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-changelog-configuration-trace): Learn about the telemetry for monitoring changes to changelog configuration in Business Central
  - Status: Introduced in Business Central 2023 release wave 2, version 23.0.
  - Changelog feature tracks direct user modifications to database; specify tables and fields to log.
  - Telemetry logged when field added (AL0000LA2), logging changed (AL0000LA1), or removed from changelog (AL0000LA3).
  - Field added event tracks table ID, table name, field ID, field name, and insertion/modification/deletion logging.
  - Field logging changed event includes before and after states for insertion, modification, deletion flags.
  - Field removed event tracks table and field information when tracking ends.
  - Sample KQL queries analyze changelog configuration changes and enable alerting.
- [Analyzing client action telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-client-action-trace): Learn about the telemetry from client action in Business Central
  - Status: Introduced in Business Central 2023 release wave 1, version 22.0.
  - Client action telemetry tracks actions users select on pages in the Business Central client.
  - Data includes action type, page details, user environment info, and application version.
  - Action invoked event has eventId CL0003 and shows which UI action was triggered.
  - Use telemetry to gather statistics about how users interact with client features.
  - clientAction dimension specifies the type of action, such as UI.AnalysisMode.Disabled.
- [Analyzing client control add-in exception telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-client-add-in-exceptions): Learn about the telemetry from client add-in exceptions in Business Central
  - Client control add-in exceptions are logged to Application Insights exceptions table, not traces table
  - Exception telemetry event ID is CL0005 and includes control add-in name, page object details, app information
  - Error details include problem ID, type, assembly, method, outer and innermost error information on call stack
  - Telemetry captures environment context including tenant, company, client type, host type, and device screen resolution
  - Built-in Application Insights Failures page can be used for troubleshooting control add-in exceptions
  - User ID and problemId field enable exception grouping and user impact analysis
- [Analyzing Cloud migration trace telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-cloud-migration-trace): Learn about cloud migration telemetry for Dynamics 365 Business Central
  - Status: Generally available from version 22.1 in 2023 release wave 1.
  - Cloud migration telemetry tracks replication runs, setup, and data upgrade success or failure with reasons captured in trace logs.
  - Replication run events include started (AL0000K0J), completed (AL0000K0H), and completed with failed tables (AL0000K0I).
  - Data upgrade events track when scheduled (AL0000K0K), started (LC0175), completed successfully (LC0176), or failed (LC0177) on an environment.
  - Recovery from failed upgrade has completion event LC0178 or failure event LC0179, both including total operation time.
  - Companion table repair scheduled (AL0000FXC), started (AL0000FJ1), and completed successfully (AL0000FJ4) are tracked separately.
- [Analyzing Database Wait Statistics Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-database-wait-statistics-trace): Learn about the telemetry for database wait statics for Business Central in Azure Application Insights.
  - Status: Available from Business Central 2022 release wave 1, version 20.0 and later.
  - Snapshot is taken when user selects Emit Telemetry icon on Database Wait Statistics view in the client.
  - Trace records maximum wait time, signal wait time, total wait time, and count of waiting tasks per wait category.
  - Traces include database start date, when database was started, and which type of wait a query experiences.
- [Analyzing Environment Lifecycle Trace Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-environment-lifecycle-trace): Learn about the environment lifecycle telemetry in Business Central.
  - Environment lifecycle telemetry logs environment operations including updates, start/stop/restart, copy, point-in-time restore, tenant transfer, session cancellation, database export, configuration…
  - Telemetry records data upgrade events: started, succeeded, failed, recovery succeeded, and recovery failed.
  - Failed operations include a trace log entry with a reason for the failure.
  - Custom dimensions available in all lifecycle events: component, deprecatedKeys, telemetrySchemaVersion.
  - Environment update can be available, scheduled, missed, postponed, or resumed before it starts.
  - Start, stop, and restart operations generate initiated, successful, and failed telemetry events.
  - Copy, point-in-time restore, and tenant transfer operations generate separate events for source and destination environments.
  - Session cancellation, database export, and configuration key update operations are tracked with their own event IDs and dimensions.
- [Analyzing environment validation telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-environment-validation-trace): Learn about the environment validation telemetry in Business Central.
  - Status: Environment validation started September 2023 to proactively check readiness for next major version.
  - Non-compatible partner apps can block major version upgrades if they cannot compile on new version.
  - Service regularly validates all extensions; failures trigger email to administrator.
  - Environment validation started event (LC0220) begins validation against target build version.
  - Extension validation events (LC0224-LC0226) track each extension compilation against next major version.
  - Environment validation diagnostic reported (LC0221) indicates warnings or errors at environment level.
  - Environment validation completed successfully (LC0222) or with failures (LC0223) indicate overall readiness.
  - Sample KQL queries help analyze validation failures and set up alerts before major version updates.
- [Analyzing Error Message Vote Telemetry \| Microsoft Docs](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-error-message-voting-trace): Learn about error message vote telemetry in Business Central
  - Status: Available from Business Central 2022 release wave 1.
  - Error messages include a yes or no question asking whether the message was helpful.
  - User feedback on error messages is recorded in Application Insights for all errors from Error method calls.
  - Trace records whether user voted yes or no, the error message text, and the regional language version shown.
- [Analyzing Extension Upload Validation Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-pte-upload-validation-trace): Learn about the extension upload validation telemetry in Business Central.
  - Proactive validation of per-tenant extensions during upload checks compilation against environment.
  - Failed validation results emit trace logs with failure reasons.
  - Main and dependent extensions are validated separately; flow shows start, diagnostics, and completion states.
  - PTE validation started event (LC0200) triggers when upload attempt begins.
  - Submission diagnostic reported event (LC0201) indicates warnings or errors at submission level.
  - Extension validation events (LC0204-LC0209) track main and dependent extension validation progress.
  - PTE validation completed successfully (LC0202) or with failures (LC0203) indicate final upload result.
  - Partners can set alerts on validation failures to proactively help customers.
- [Analyzing Field Monitoring Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-field-monitoring-trace): Learn about the telemetry for monitoring changes to sensitive data in Business Central
  - Field monitoring logs when monitoring starts or stops, when fields are added or removed for monitoring, and when monitored field values change.
  - Status: Field added or removed for monitoring feature introduced in version 18.0.
  - Changes to Field Monitoring Setup table, Change Log Setup table, and User Contact Email field are always logged.
  - Telemetry events include sensitive field monitor status changes with eventId AL0000DD3.
  - Monitored field value changes logged with eventId AL0000CTE, including field name, number, table name, and number.
  - Field additions or removals logged with eventId AL0000EMW as of version 18.0.
- [Analyzing financial report lifecycle trace telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-financial-report-lifecycle-trace): Learn about the telemetry for financial report lifecycle telemetry in Azure Application Insights.
  - Telemetry tracks 18 lifecycle operations on financial reporting definitions including creation, modification, copying, export, import and deletion of row, column and report definitions.
  - Each operation type has a unique event ID: row definition created (AL0000O81), modified (AL0000O82), deleted (AL0000O84), column definition created (AL0000O85), modified (AL0000O86), deleted…
  - Copy operations generate event IDs AL0000OKV for row definitions, AL0000OKW for column definitions, and AL0000OKX for report definitions.
  - Import and export operations share event IDs: AL0000ONP for row definitions, AL0000ONQ for column definitions, AL0000ONR for report definitions.
  - All telemetry events include user ID, tenant ID, environment name, environment type and company name dimensions to identify who performed the operation and where.
  - Telemetry captures the specific code of the definition being operated on through alRowDefinitionCode, alColumnDefinitionCode or alReportDefinitionCode custom dimensions.
- [Analyzing financial report usage trace telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-financial-report-usage-trace): Learn about the telemetry for financial report usage telemetry in Azure Application Insights.
  - Financial report usage telemetry tracks when users run reports on-screen and from the request page, capturing who ran the report and which definitions were used.
  - On-screen report execution has event ID AL0000OKU while request page execution has event ID AL0000O76.
  - All usage events include report, row and column definition codes plus user ID, tenant ID, environment name, environment type and company name.
  - Usage telemetry enables analysis of which report definitions, row definitions and column definitions are being used in the system.
- [Analyzing Job Queue Lifecycle Trace Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-job-queue-lifecycle-trace): Learn about the telemetry for job queue entries in Business Central
  - Status: Generally available from version 17.2 in 2020 release wave 2.
  - Telemetry captures job queue entry lifecycle events including enqueued, started, finished, failed, and cancelled states.
  - Common dimensions tracked include job queue ID, object type and ID, recurring status, execution time in milliseconds, and stack traces.
  - Failed entries after max retry attempts trigger event AL0000JRG and enter Error state, requiring manual intervention.
  - Event AL0000HE7 indicates a single job queue entry error; event AL0000JRG indicates it failed after all retry attempts.
  - Limit: Job queue object name and description dimensions added in later versions 22.0 and 22.2 respectively, not in initial release.
- [Analyzing Long Running AL Methods Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-al-method-trace): Learn about analyzing long running AL methods in Business Central.
  - The server emits telemetry about execution time of long running AL methods, including database time and breakdown by event subscribers.
  - Status: On-premises requires AL Function Timing and AL Function Logging Threshold settings configured; online has telemetry enabled case-by-case.
  - The trace includes eventId RT0018 and dimensions like alMethod, alObjectId, alObjectName, alObjectType, clientType, and companyName.
  - exclusiveTime dimension shows execution time without client callback suspension time, introduced in version 22.1 and backported to 21.6.
  - sqlExecutes and sqlRowsRead dimensions show number of SQL statements and table rows read, introduced in version 22.0.
  - extensionInfo dimension includes extension ID, name, version, publisher, subscriber count, and execution time in the call stack.
- [Analyzing Long Running Operation (SQL Query) Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-long-running-sql-query-trace): Learn about analyzing long running operation (SQL Query) in Business Central.
  - SQL queries taking over 750 milliseconds are automatically sent to Azure Application Insights for analysis.
  - Additional logging can be enabled from the Help & Support page to capture all SQL queries for short periods.
  - Prerequisite: For Business Central online, additional logging requires version 17.4 or later.
  - Prerequisite: For Business Central on-premises, additional logging requires version 18.6 or later.
  - AL Stack Trace in CustomDimensions shows which AL objects and code executed the slow SQL query.
  - The event severity level for long running queries is always 2, indicating a warning.
  - Limit: SQL statement values exceeding 8192 characters are truncated while preserving the most relevant information.
- [Analyzing Marketplace app breaking changes validation telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-appsource-app-validation-trace): Learn about the telemetry for breaking changes validation of Marketplace apps in Business Central.
  - Failed app validations emit telemetry traces to partner's Application Insights resource with failure reasons.
  - Partners can monitor Marketplace apps and set up alerts for apps needing attention before next major version.
  - Breaking changes validation is separate from Marketplace submission validation that occurs in Partner Center.
  - Limit: AL compiler errors and AppSourceCop analyzer issues are reported as validation diagnostics during the process.
  - Validation diagnostics can be information, warning, or error severity levels based on issue type.
- [Analyzing Marketplace submission validation trace telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-appsource-submission-validation-trace): Learn about the telemetry for publishing apps to Marketplace from Partner Center.
  - Status: Available from Business Central 2021 release wave 1, version 18.4 and later.
  - Telemetry traces are emitted for validation process phases when app is submitted to Marketplace.
  - Validation runs against each extension for each country and Business Central version specified.
  - Each submission receives unique ID included in each trace allowing queries of all related traces.
  - AL compiler and AppSourceCop code analyzer perform validation on extensions.
  - Traces report diagnostics, validation phases, errors, and whether validation completed with or without failures.
- [Analyzing metadata embeddings telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-metadata-embeddings-trace): Learn about the metadata embeddings telemetry in Business Central.
  - Metadata embeddings telemetry tracks vector representations of extension metadata that power AI features like Copilot search.
  - Event LC0059 indicates successful metadata embedding generation for an extension.
  - Event LC0060 indicates metadata embedding generation failed for an extension.
  - Event LC0061 indicates metadata embedding generation scheduled for an extension.
  - Event LC0062 indicates metadata embedding generation started processing for an extension.
  - Telemetry captures extension ID and version for each embedding generation event to track lifecycle.
- [Analyzing onboarding telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-onboarding-trace): Learn about the onboarding telemetry in Business Central
  - Status: Onboarding telemetry applies to Business Central 2023 release wave 1, update 22.1 and later
  - Gathers data about onboarding started and onboarding criteria completed by users
  - Onboarding Started event has ID AL0000EIW, fired when user initiates onboarding
  - Onboarding Criteria completed event has ID AL0000EIV, fired when user completes criteria
  - Telemetry includes country code, user role, admin status, evaluation company flag, and tenant license state
  - Environment details captured include name, type, and version in all onboarding events
- [Analyzing Performance Toolkit Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-performance-toolkit-trace): Learn about the telemetry for the Performance Toolkit in Business Central
  - Status: Generally available for analyzing Performance Toolkit telemetry.
  - Performance Toolkit helps test performance of customized Business Central solutions across multiple users.
  - Telemetry is logged when BCPT header changes status to Started, Completed, or Cancelled, and when scenarios finish.
  - BCPT run started event includes session count, test company name, run type, and version number.
  - BCPT scenario finished event includes duration in milliseconds, SQL statement count, and operation status.
  - Common dimensions include tenant ID, environment name, environment type, and extension details.
- [Analyzing Permission Changes Trace Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-permission-changes-trace): Learn about the telemetry for permission changes made in Business Central
  - Status: Permission changes telemetry applies to Business Central 2020 release wave 2, version 17.2, and later.
  - Tracks user-defined permission set creation, deletion, and system permission set links.
  - Monitors assignment or removal of permission sets from users and user groups.
  - Captures permission set changes made by apps or extensions during install or upgrade.
  - Events AL0000E2A through AL0000E2F track specific permission set operations with details.
  - LC0058 event identifies app or extension that changed permission set with ID, name, publisher.
- [Analyzing permission dependency cycle trace telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-permission-dependency-cycle-trace): Learn about the permission dependency cycle trace telemetry in Business Central
  - Permission dependency cycle occurs when permission set depends on itself directly or indirectly
  - Dependency cycle discovered event has ID RT0032 with severity level 3
  - Cycle error message shows circular reference path, for example [XX]->[YY]->[XX]
  - Telemetry includes AL object ID and type if error relates to specific object
  - Permission area values recorded are System, Entitlement, Company, or Object
  - Permission type values include Delete, Execute, Insert, Modify, Read, or Undefined
- [Analyzing Permission Error Trace Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-permission-error-trace): Learn about the permission error telemetry in Business Central
  - Permission error telemetry signals when users get permission-related error dialogs.
  - Permission Error Shown event has eventId RT0031 at severity level 1.
  - Data includes object ID, name, type, and permission area that caused the error.
  - permissionType dimension shows missing permission: Delete, Execute, Insert, Modify, or Read.
  - permissionArea dimension indicates System, Entitlement, Company, or Object scope.
  - Stack trace and error message help identify where permission check failed in code.
  - Sample KQL code helps analyze which permission errors users encounter frequently.
- [Analyzing profile configuration lifecycle telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-profile-configuration-lifecycle-trace): Learn about the telemetry for configuration profiles using the in-client designer.
  - Status: Profile configuration lifecycle telemetry applies to Business Central 2022 release wave 2, version 21.0 and later
  - Tracks profile operations: import, export, create, copy, and remove from web client
  - Profile import succeeded event ID LC0046, failed event ID LC0047
  - Profile export succeeded event ID LC0048, failed event ID LC0049
  - Profile copy succeeded event ID LC0050, failed event ID LC0051
  - Profile create, remove, and customization operations tracked with LC0052 through LC0055 event IDs
  - Profile app ID empty or all-zeros indicates profile from web client, not extension
- [Analyzing report layout lifecycle telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-report-layout-lifecycle-trace): Learn about report layout lifecycle telemetry in Business Central
  - Telemetry captures user actions on report layouts: adding, changing default, editing properties, exporting, deleting, and replacing layouts.
  - Layout format types tracked are RDLC, Word, Excel, and Custom (shown as External in client UI).
  - Each user action generates a unique event ID: New (AL0000N0E), SetDefault (AL0000N0D), Edit (AL0000N0H), Export (AL0000N0I), Delete (AL0000N0F), Replace (AL0000N0G).
  - Telemetry dimensions include tenant ID, environment name and type, company, report ID, and user ID.
  - Edit action telemetry records old and new layout names and descriptions for property changes.
  - KQL sample code provided for querying layout events with filtering by timestamp, environment, and action type.
- [Analyzing retention policy trace telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-retention-policy-trace): Learn about the telemetry for retention policies in Business Central
  - Status: Retention policy telemetry available from Business Central 2020 release wave 2, update 17.1 and later.
  - Telemetry logs when table is added to allowed tables, error occurs, policy is enabled, or data is deleted.
  - Telemetry also logs first policy enabled and last policy removed on a company.
  - Prerequisite: Retention policies must be set up on tables with log entries and archived records to gather telemetry.
  - Retention Policy Log Entry logged shows operation details such as setup, retention period, and apply actions.
  - Records Deleted Using Retention Policy tracks number of records deleted and whether run was manual or automatic.
  - In the observatory: [Codeunit 3912 "Reten. Policy Telemetry Impl."](../../../../objects/codeunit/3912.md)
- [Analyzing Stopped Session Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-stop-session-trace): Learn about analyzing stop session telemetry in Business Central.
  - A trace is recorded when a session stops via the StopSession method from AL or from the admin center.
  - The trace records the ID of the session that was stopped and the ID of the session that initiated the stop.
  - Custom dimensions include whether the stopped session was running as an administrator and the client type that made the stop call.
  - ManagementClient client type indicates the session was stopped from the Business Central admin center.
  - Stack trace, AL object ID, object name, and object type are not shown for sessions canceled from the admin center.
- [Analyzing Task Scheduler Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-task-scheduler-trace): Learn about the task scheduler telemetry in Business Central
  - Each scheduled task assigned unique identifier for tracing its execution flow
  - Task created event ID LC0040 fired when TaskScheduler.CreateTask called in AL code
  - Task ready event ID LC0041, task removed event ID LC0042, completion event ID LC0043
  - Task canceled event ID LC0044 when main or failure codeunit execution canceled
  - Task failed event ID LC0045 when execution fails due to exception thrown by AL runtime
  - Limit: Default task timeout 12 hours for online, specified by server setting for on-premises
  - Task timeout changed event ID LC0057 if defined timeout exceeds maximum allowed by server
- [Analyzing Verbose Enable and Disable Telemetry \| Microsoft Docs](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-verbose-logging-trace): Learn about the verbose logging telemetry in Business Central
  - Trace recorded when additional logging is turned on from Help and Support page in the client.
  - Trace recorded when additional logging is turned off because user closed browser or signed out.
  - Verbose logging enables additional telemetry for troubleshooting during a session.
- [Analyzing Web Service Access Key Telemetry \| Microsoft Docs](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-webservices-access-key-trace): Learn about the web service access key telemetry in Business Central
  - Status: Web service access key telemetry applies to Business Central 2020 release wave 2, version 17.3, and later.
  - Emits telemetry on success or failure of authenticating web service access keys.
  - RT0020 event emitted for successful authentication with endpoint, extension, object details.
  - RT0021 event emitted for failed authentication including failure reason and exception details.
  - Helps monitor web service access key usage for deprecation preparation.
  - Limit: Endpoint redacts private and sensitive information; exception messages may omit sensitive data.
- [App Key Vault Secret Trace Telemetry \| Microsoft Docs](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-extension-key-vault-trace): Learn about app key vault secret trace telemetry in Business Central
  - App key vault telemetry gathers information about Azure Key Vault secret acquisition by extensions at runtime across initialization and retrieval stages.
  - Initialization stage verifies app key vault provider configuration via TryInitializeFromCurrentApp method and fails if extension lacks key vault specification or credentials are incorrect.
  - Retrieval stage attempts secret retrieval via GetSecret method call and fails if secret name is invalid, key vault doesn't exist, or application lacks read permissions.
  - Status: EventId RT0014 indicates successful key vault initialization with severity level 1; RT0015 indicates initialization failure with severity level 3.
  - Status: EventId RT0016 indicates successful secret retrieval with severity level 1; RT0017 indicates retrieval failure with severity level 3.
  - Telemetry custom dimensions include extension ID, name, publisher, version, key vault URIs, client type, AL object details, and component version.
- [Authorization Trace \| Microsoft Docs](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-authorization-trace): Learn about the Authorization telemetry in Business Central
  - Authorization telemetry shows user sign-in success or failure with reasons for failures.
  - Two stages of sign-in emit telemetry: pre-open company and during company open.
  - Pre-open stage verifies user account is enabled and has correct entitlements; not emitted on-premises.
  - Open company stage indicates whether company opened after CompanyOpen trigger runs.
  - Authorization Succeeded event has eventId RT0003 pre-open and RT0004 during company open.
  - Authorization Failed event has eventId RT0001 pre-open and RT0002 during company open.
  - userType dimension shows Delegated_admin, Internal_Admin, or Normal user classification.
  - Common failure reasons include disabled accounts, missing entitlements, and expired licenses.
- [Azure Function Integration Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-azure-function-integration-trace): Learn about telemetry on Azure Function integrations with Business Central
  - Azure Function integration telemetry tracks calls from Business Central to Azure Functions.
  - Request succeeded event has eventId AL0000I74 with HTTP status code.
  - Request failed event has eventId AL0000I7P and includes status code and function host URL.
  - Authorization failed event has eventId AL0000I75 with error text explaining failure reason.
  - Common dimensions include function host URL, tenant ID, environment name, and company name.
  - Sample KQL queries help analyze and alert on Azure Function integration failures.
- [Company lifecycle trace \| Microsoft Docs](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-company-lifecycle-trace): Learn about the company lifecycle telemetry in Business Central
  - Status: Company lifecycle telemetry introduced in Business Central 2020 release wave 1, version 16.1
  - Gathers data about success or failure of company operations: creating, copying, and deleting companies
  - Failed operations produce trace log entries that include failure reason
  - Telemetry signals include company name, user ID, client type, environment details, and execution times
  - Dimension result values are Success or Failure depending on operation outcome
  - SQL execution metrics recorded include statement count, rows read, and server execution time
- [Database Deadlock Lock Trace Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-database-deadlocks-trace): Learn about the database deadlock telemetry in Business Central
  - Telemetry emitted when deadlock occurs and terminates one session (victim), blocking users from completing tasks.
  - Provides benefits including awareness of deadlocks, identification of victim process, and data for monitoring.
  - Prerequisite: On-premises deployments must enable EnableDeadlockMonitoring setting on server instance.
  - Event RT0028 includes dimensions like AL object, client type, extension, SQL session ID.
  - Complements other monitoring features like SQL database deadlock monitoring and database lock trace telemetry.
- [Database Lock Timeout Trace Telemetry \| Microsoft Docs](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-database-locks-trace): Learn about the database lock timeout telemetry in Business Central
  - Status: Database lock timeout telemetry introduced in Business Central 2020 release wave 1, version 16.0.
  - Two event types emitted: Database lock timed out event and one or more Database lock snapshot events.
  - Lock timeout triggers snapshot events providing details about SQL sessions holding locks at timeout time.
  - Prerequisite: On-premises environments must enable EnableLockTimeoutMonitoring setting; off by default.
  - RT0012 event includes AL object, stack trace, client type, extension, SQL session details.
  - RT0027 parent event introduced in 2024 release wave 2 groups related lock snapshot entries.
  - Telemetry captures victim session, not sessions holding locks; use joins to correlate data.
- [Error method trace telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-error-method-trace): Learn about the Error method telemetry in Business Central
  - Error method telemetry emitted when Error method called, displays dialog to user
  - Event ID RT0030 signals error dialog displayed with failure reason Dialog
  - Error message shown only if Label or TextConst data type, otherwise generic message shown
  - Messages with customer data not shown as precaution, SystemMetadata classified data only emitted
  - Severity level 3 indicates error dialog event with stack trace and AL object details recorded
  - Telemetry includes AL stack trace, object ID, object type, client type, and company name
- [Extension Lifecycle Trace Telemetry \| Microsoft Docs](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-extension-lifecycle-trace): Learn about the extension lifecycle telemetry in Business Central
  - Status: Generally available from Business Central 2020 release wave 1, version 16.3. Extension-level support from 2020 release wave 2, version 17.1.
  - Gathers telemetry data on extension operations: compiling, synchronizing, publishing, installing, updating, uninstalling, and unpublishing.
  - Failed operations include a trace log entry with the reason for failure.
  - Traces are recorded for operations initiated from Extension Management page, Manage Apps page, App Management API, PowerShell cmdlets, and Business Central control plane.
  - Environment/server traces cover extensions published to tenant scope only, excluding Microsoft extensions and Marketplace extensions.
  - Tenant traces record synchronizing, installing, updating, and uninstalling extensions on a tenant.
  - Control plane traces monitor installation or update operations by the Business Central control plane service and help identify the origin or cause of operations.
  - Limit: Custom dimensions may not be available if operations fail before information is retrieved, such as extension ID and version in failed uninstall operations.
- [Extension Update Trace Telemetry \| Microsoft Docs](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-extension-update-trace): Learn about the extension upgrade telemetry in Business Central
  - Status: Exception telemetry introduced in Business Central 2020 release wave 1, version 16.2; upgrade tag telemetry in 2021 wave 1.
  - Tracks extension upgrade failures from exceptions in upgrade codeunits.
  - Monitors HasUpgradeTag and SetUpgradeTag method calls from System Application codeunit 9999.
  - RT0010 event emitted on upgrade failure with codeunit ID, stack trace, extension name, version.
  - Limit: Exception messages containing non-SystemMetadata classifications are not shown to protect customer data.
  - AL0000EJ9 event for HasUpgradeTag calls includes upgrade tag value and execution context.
  - In the observatory: [Codeunit 9999 "Upgrade Tag"](../../../../objects/codeunit/9999.md)
- [Feature management telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-feature-management-trace): Learn about the telemetry that is emitted from the Feature Management page in Business Central.
  - Status: Feature management telemetry introduced in Business Central 2023 release wave 1, version 22.0.
  - Telemetry logs when user changes feature state on Feature Management page.
  - Feature switch telemetry captures feature name, description, new state, environment, and user who made change.
  - New capabilities in major and minor updates can be enabled ahead of time on sandbox and production.
  - In the observatory: [Page 2610 "Feature Management"](../../../../objects/page/2610.md)
- [Feature telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-feature-telemetry): Learn about the telemetry that you can emit from features in Business Central.
  - Feature Telemetry module simplifies app health monitoring and tracks feature uptake using three event types: LogUsage for successful feature use, LogError for explicit errors, and LogUptake for…
  - Prerequisite: Must implement Telemetry Logger interface in an extension codeunit and register it via OnRegisterTelemetryLogger event subscriber, one per app publisher.
  - LogUptake tracks four uptake states: Undiscovered, Discovered (page opens), Set up (user configures), and Used (user attempts feature). Calling with Undiscovered resets uptake state.
  - Limit: LogUptake may make database transactions and requires PerformWriteTransactionsInASeparateSession set to true when called from try function.
  - Custom dimensions include extension info, user role, environment type, client type, and for errors: stack trace and error text describing the issue.
  - If no telemetry logger registered for publisher, server logs event AL0000G7K to environment telemetry indicating app sending data without registered logger.
  - In the observatory: [Codeunit 8703 "Feature Telemetry"](../../../../objects/codeunit/8703.md), [Codeunit 8708 "Telemetry Loggers"](../../../../objects/codeunit/8708.md)
- [Outgoing Web Service Request Trace](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-webservices-outgoing-trace): Learn about the outgoing web service request telemetry in Business Central
  - Outgoing web service telemetry (RT0019) tracks HTTPClient calls made by AL code to external services, including endpoint, method, status code.
  - Dimensions record timeout set by NavHttpClientMaxTimeout server setting or TimeOut method call, with method call taking precedence over server setting.
  - Limit: httpReturnCode dimension deprecated in version 17.2; use httpStatusCode instead for http status codes returned from requests.
  - httpRequestError dimension (added version 29.0) distinguishes failure types: name resolution, connection failures, certificate validation, timeout.
  - Event includes extension ID, name, publisher, version; object ID, name, type making request; server execution time and total time for request completion.
  - Stack trace dimension (added version 20.1) and client type (added version 21.3) help trace external service calls to AL code locations.
  - HTTP headers captured in telemetry; sample KQL extracts Authorization header from parsed httpHeaders JSON to analyze authentication methods used.
- [Page View Telemetry \| Microsoft Docs](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-page-view-trace): Learn about the page views telemetry in Business Central
  - Status: Page view telemetry available from Business Central 2020 release wave 1, version 16.3. Extension telemetry from 18.0, on-premises from 21.0, query telemetry from 23.0.
  - Tracks when users open pages in the client, recording duration to load and user environment data for usage analysis and performance troubleshooting.
  - Page view data is logged to Azure Application Insights pageViews table, enabling analysis through built-in Usage feature analytics.
  - Custom dimensions include page mode (View, Edit, Create, Select, Delete), page type (Card, List, Document), designer level, and whether FactBox was shown.
  - Device hardware information available from version 26.0 includes memory, processor cores, network bandwidth, and round-trip time when browser supports Network Information API.
  - Query usage telemetry introduced in 2023 release wave 2, version 23.0, uses same dimensions as normal page views with pageDataSourceType set to Query.
- [Report Generation Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-reports-trace): Learn about the report telemetry in Business Central.
  - Report telemetry captures successful generation (RT0006), failures, cancellations (RT0007), and commits during cancellation (RT0011) with performance metrics.
  - Total time minus server execution time equals rendering time. Rendering time is difference between generating dataset and applying layout.
  - Limit: Business Central online cancels reports exceeding timeout threshold or max row limits; on-premises has no default limits but supports ReportTimeout and ReportMaxRows parameters.
  - Dimensions include report ID, name, layout type (Rdlc, Word, Excel, Custom), document format, action (Print, Preview, Save, Schedule, Download), and reporting engine used.
  - Theme layout and header/footer layout dimensions added in version 29.0 indicate layouts applied to report; values empty when not applied.
  - Cancellation reasons include user request, timeout exceeded, maximum rows exceeded, or Word report rendering timeout.
  - Limit: Event must log when report canceled with commit performed before cancellation, indicating potential data inconsistency if report not idempotent.
- [Server certificate validation errors for outgoing web service requests](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-webservices-outgoing-certificate-validation-errors): Learn about telemetry for server certificate validation errors for outgoing web service requests in Business Central
  - Server certificate validation error telemetry captures SSL/TLS certificate failures when making outgoing web service requests using the AL HTTPClient module.
  - Event ID is RT0052, introduced in version 26.0, and logs details about endpoint, certificate chain, issuer name and subject field.
  - Telemetry includes the AL object making the request, HTTP method used and the specific failure reason explaining why the certificate did not validate.
  - Certificate validation error events capture extension information including app ID, publisher, name and version alongside environment and company details.
  - The failureReason dimension indicates why validation failed, helping developers contact endpoint owners to fix certificate issues.
- [Telemetry area overview](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-area-overview): Get an overview of available telemetry areas in Business Central
  - Business Central offers telemetry on various operations logged into traces or pageview tables in Application Insights.
- [User Checklist Trace Telemetry \| Microsoft Docs](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-user-checklist-trace): Learn about the user checklist telemetry in Business Central
  - User checklist telemetry tracks state changes for onboarding checklists shown to users
  - Event AL0000EIQ fires when overall checklist status changes between states like Not Started or In progress
  - Event AL0000EIT fires when individual checklist item status changes
  - Event AL0000EIR fires when a checklist item status changes and guided experience item is found
  - Dimensions track old and new status values to monitor progression through checklist completion
- [Web Service Publish Failure Trace](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-webservices-publish-failure-trace): Learn about the web service publish failure telemetry in Business Central
  - Web service publish failure telemetry captures errors when web services fail to publish or function due to metadata creation issues.
  - Event RT0033 indicates missing subpage names; event RT0034 indicates missing control element names in pages.
  - Event RT0035 reports skipped web service records; event RT0036 reports table field name errors with captions.
  - Event RT0038 warns of multiple navigation property options for table relations; event RT0039 reports skipped entities with error details.
  - Limit: Web service publish failures result in pages or records being skipped entirely, preventing their use via web services.
- [Web Service Request Trace](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-webservices-trace): Learn about the web service request telemetry in Business Central
  - Web services telemetry (event ID RT0008) gathers data on incoming SOAP, OData and REST API requests including endpoint, execution time, SQL performance and HTTP status.
  - Status: User_Id dimension added in version 24.2 (Business Central 2024 release wave 1).
  - Custom dimensions identify the AL object and extension running behind the endpoint plus the caller's HTTP method, headers and authorization type.
  - Performance data includes serverExecutionTime, requestQueueTime and totalTime, and SQL metrics showing statements executed and rows read.
  - Deprecated endpoint called event (ID RT0053, version 26.0+) tracks SOAP calls to Microsoft pages no longer exposed as web service endpoints.
  - Error analysis uses httpStatusCode and failureReason dimensions to troubleshoot unsuccessful calls and identify misconfigurations.
  - Telemetry omits sensitive HTTP headers but includes Accept, User-Agent, Content-Type, OData-Version, Prefer and authorization type in logs.

Key facts from Microsoft Learn (CC BY 4.0), in our own words (D106); open the page for the full text.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
