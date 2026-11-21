---
id: topic/dev-itpro/administration/monitor-and-analyze-telemetry/telemetry-by-area
type: topic
title: Telemetry by area
summary: Telemetry by area documents the Business Central telemetry events sent to Application Insights, grouped by functional area. It answers which event IDs and custom dimensions exist for a given area (security, performance, extensions, web services, AI/MCP, environments, jobs) and how to analyze them with KQL.
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
  input_hash: c974f62268f298fbcdfc3e7cb753fbebb9e83e3c9156ba08d30f43d1bfd7242d
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
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-permission-changes-trace
    title: Analyzing Permission Changes Trace Telemetry
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-permission-dependency-cycle-trace
    title: Analyzing Permission Dependency Cycle Trace Telemetry
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-agent-lifecycle-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-api-metadata-validation-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-app-resource-exposure-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-cloud-migration-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-business-events-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-configuration-package-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-webservices-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-mcp-configuration-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-mcp-server-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-open-in-excel-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-sql-query-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-table-index-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-ai-consumption
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-extension-key-vault-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-authorization-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-changelog-configuration-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-client-action-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-client-add-in-exceptions
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-company-lifecycle-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-database-deadlocks-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-database-locks-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-database-wait-statistics-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-email-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-error-message-voting-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-error-method-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-extension-lifecycle-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-extension-update-trace
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
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-permission-changes-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-permission-dependency-cycle-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-permission-error-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-profile-configuration-lifecycle-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-stop-session-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-task-scheduler-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-verbose-logging-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-webservices-access-key-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-azure-function-integration-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-area-overview
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-environment-lifecycle-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-environment-validation-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-feature-management-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-feature-telemetry
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-webservices-outgoing-certificate-validation-errors
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-webservices-outgoing-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-page-view-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-performance-toolkit-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-reports-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-report-layout-lifecycle-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-retention-policy-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-user-checklist-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-webservices-publish-failure-trace
  objects: []
  features: []
  topics:
    - topic/dev-itpro/administration/monitor-and-analyze-telemetry
  localizations: []
  videos:
    - video/IAacWsvav1E
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
  video: 1
  blog: 0
  guideline: 0
bc_forms: []
member_hash: c86e830d946d5c66be423238373d8b30efeed709899c3779960807433a93a132
narrative: generated
---

# Telemetry by area

> Telemetry by area documents the Business Central telemetry events sent to Application Insights, grouped by functional area. It answers which event IDs and custom dimensions exist for a given area (security, performance, extensions, web services, AI/MCP, environments, jobs) and how to analyze them with KQL.

Path: [Administration](../../administration.md) > [Monitor and analyze telemetry](../monitor-and-analyze-telemetry.md) > Telemetry by area · tier official · system platform · narrative **unreviewed** (model text not yet checked)

## Overview

This section is a catalog of telemetry pages, one per area of the product. Each page lists the events emitted for that area, their event IDs where given (for example RT0001-RT0004 for authorization, RT0028 for deadlocks, RT0054 for MCP tool calls), the custom dimensions, and sample KQL queries. Pages note the release wave or version in which an area became available.

## Key points

- Start with Business Central Telemetry Area Overview. It describes the traces and pageViews tables in Application Insights and lists the telemetry areas and event IDs.
- Performance and database areas: long running SQL queries (over 750 ms), long running AL methods (RT0018), SQL query trace (RT0009), deadlocks (RT0028), lock timeouts, wait statistics, and table index changes.
- Security and audit areas: authorization (RT0001-RT0004), permission errors (RT0031), permission dependency cycles (RT0032), permission set changes, field monitoring, and changelog configuration.
- Extension and app areas: extension lifecycle, extension update and upgrade tags, per-tenant extension upload validation, AppSource submission validation, breaking changes validation, and environment validation.
- Web service areas: incoming requests, outgoing HttpClient requests, certificate validation errors (RT0052), access key authentication, and web service publish failures.
- AI and agent areas (2026 release wave 1, version 28.0): agent lifecycle, MCP configuration, MCP server tool calls (RT0054). AI consumption (RT0055) tracks Copilot Credits.
- Operations areas: environment and company lifecycle, job queue, task scheduler, cloud migration, configuration packages, retention policies, and stopped sessions.
- Developer-facing pages cover Feature telemetry (LogUsage, LogError, LogUptake) and the Performance Toolkit. Verbose logging controls extra trace detail.

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
- [Analyze Business Central Cloud Migration Trace Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-cloud-migration-trace): Analyze cloud migration trace telemetry in Business Central to monitor replication, companion table repair, data upgrades, and migration disablement.
  - Status: Generally available from version 22.1 in 2023 release wave 1.
  - Cloud migration telemetry tracks replication runs, setup, and data upgrade success or failure with reasons captured in trace logs.
  - Replication run events include started (AL0000K0J), completed (AL0000K0H), and completed with failed tables (AL0000K0I).
  - Data upgrade events track when scheduled (AL0000K0K), started (LC0175), completed successfully (LC0176), or failed (LC0177) on an environment.
  - Recovery from failed upgrade has completion event LC0178 or failure event LC0179, both including total operation time.
  - Companion table repair scheduled (AL0000FXC), started (AL0000FJ1), and completed successfully (AL0000FJ4) are tracked separately.
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
- [Analyze Incoming Web Service Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-webservices-trace): Analyze incoming Business Central web service telemetry to identify callers, investigate failed requests, and troubleshoot endpoint performance.
  - Web services telemetry captures SOAP, OData, and REST API requests, including endpoint, completion time, HTTP status codes.
  - Event ID RT0008 identifies incoming web service call traces with custom dimensions for analysis.
  - HTTP status codes in 4xx range indicate client misconfiguration; failureReason dimension logs errors in AL code behind endpoints.
  - requestQueueTime and serverExecutionTime dimensions track request queuing and execution performance separately.
  - Starting version 26, SOAP calls to Microsoft UI pages are disabled by default; event RT0053 identifies deprecated endpoints.
  - Status: user_Id dimension introduced in Business Central 2024 release wave 1, version 24.2.
  - Status: diagnosticsMessage and failureReason added in Business Central 2023 release wave 1, version 22.0.
  - Status: Deprecated endpoint called event (RT0053) available from version 26.0.
- [Analyze MCP configuration telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-mcp-configuration-trace): Learn about the MCP (Model Context Protocol) configuration telemetry in Business Central
  - Status: Generally available from Business Central 2026 release wave 1, version 28.0 and later.
  - MCP configuration telemetry tracks creation, modification, deletion, and default designation.
  - Event AL0000R0Q: MCP configuration created with settings like active, dynamic tool mode.
  - Event AL0000QE9: MCP configuration modified; records old and new values for changed settings.
  - Event AL0000QEB: MCP configuration deleted.
  - Event AL0000R0R: MCP configuration designated as default.
- [Analyze MCP Server Tool Calls Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-mcp-server-trace): Analyze Business Central MCP server tool call telemetry to track tool usage, investigate invocation failures, and compare performance across configurations.
  - Status: MCP server tool calls telemetry applies to Business Central 2026 release wave 1, version 28.0, and later.
  - MCP server telemetry gathers data about tool calls from external MCP hosts to Business Central MCP server configurations.
  - Tool call events capture configuration name, tool name, client name, authenticated application ID, execution time, and invocation result.
  - Tool invocation failures are tracked with reason codes; MCP tool result dimensions record Success or Failure status.
  - Dynamic tools populate the dynamicToolName dimension with the action name for dynamic MCP tool configurations.
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
- [Analyzing App Key Vault Secret Trace Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-extension-key-vault-trace): Analyze app key vault telemetry in Business Central to troubleshoot extension initialization failures and secret retrieval errors in Azure Key Vault.
  - App key vault telemetry is sent to extension's Application Insights resource, not environment's
  - RT0014 successful initialization, RT0015 initialization failure, RT0016 retrieval success, RT0017 retrieval failure
  - Initialization stage verifies app.json configuration and Azure Key Vault Client Identity settings
  - Retrieval stage occurs after successful initialization to get secrets from specified key vault
  - Failure reasons include missing extension specification, incorrect client ID, missing permissions, or invalid secret names
  - Telemetry captures key vault URI, secret name, extension details, and stack trace for troubleshooting
- [Analyzing Authorization Trace Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-authorization-trace): Analyze Business Central authorization telemetry to troubleshoot sign-in failures, company access problems, entitlements, and company-opening performance.
  - Authorization telemetry tracks user or service sign-in attempts and identifies sign-in problems
  - Authorization signals are emitted in two stages: initial authorization before CompanyOpen trigger and company opening after
  - Pre-open company stage verifies user account is enabled, has entitlements, and belongs to tenant
  - RT0003 event signals successful pre-open authorization; RT0001 signals failure with reasons including disabled user or missing entitlements
  - RT0004 event signals successful company open; RT0002 signals failure with reasons like invalid company name or license expiration
  - User types tracked are delegated admin, internal admin, and normal user based on Microsoft 365 and tenant roles
  - Guest user and user type dimensions added in version 26; company ID dimension added in version 25
- [Analyzing Changelog Configuration Changes Trace Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-changelog-configuration-trace): Analyze changelog configuration telemetry in Business Central to identify fields added to tracking, logging changes, and fields removed from tracking.
  - Status: Introduced in Business Central 2023 release wave 2, version 23.0.
  - Changelog feature tracks direct user modifications to database; specify tables and fields to log.
  - Telemetry logged when field added (AL0000LA2), logging changed (AL0000LA1), or removed from changelog (AL0000LA3).
  - Field added event tracks table ID, table name, field ID, field name, and insertion/modification/deletion logging.
  - Field logging changed event includes before and after states for insertion, modification, deletion flags.
  - Field removed event tracks table and field information when tracking ends.
  - Sample KQL queries analyze changelog configuration changes and enable alerting.
- [Analyzing Client Action Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-client-action-trace): Analyze client action telemetry in Business Central to track supported page actions, understand feature usage, and identify the associated pages and apps.
  - Status: Generally available from version 22.0 (2023 release wave 1)
  - Client action telemetry gathers data about supported user actions on pages like enabling or disabling analysis mode
  - Each action event records action type, page triggered on, user environment information, and app details
  - CL0003 event ID identifies client actions invoked in the Business Central client
  - Client actions are tracked with custom dimensions including client type, page object ID and name, and app identity
- [Analyzing Client Control Add-In Exception Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-client-add-in-exceptions): Analyze Business Central control add-in exceptions in Application Insights to identify affected extensions, inspect error details, and troubleshoot failures.
  - Client add-in exceptions are logged to Application Insights exceptions table, not traces table
  - CL0005 event ID identifies exceptions raised inside control add-ins
  - Exception data includes problem ID, error type, assembly, method, and nested error information from call stack
  - Built-in Application Insights Failures page can be used for troubleshooting control add-in exceptions
  - Exception custom dimensions track host type, device screen resolution, control add-in name, app identity, and environment context
- [Analyzing Company Lifecycle Trace Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-company-lifecycle-trace): Analyze Business Central company lifecycle telemetry to track company creation, copying, and deletion, and investigate canceled or failed operations.
  - Status: Generally available from Business Central 2020 release wave 1, version 16.1.
  - Gathers telemetry data about company creation, copying, and deletion operations.
  - Logs success, failure, and cancellation events for each company lifecycle operation.
  - Failed operations include failure reason in trace log entries.
  - Each event captures server execution time, SQL execution count, and rows read.
  - Telemetry includes client type, Entra tenant ID, environment name and type.
  - Nine event types: company created, creation canceled, creation failed, copied, copy canceled, copy failed, deleted, deletion canceled, deletion failed.
- [Analyzing Database Deadlock Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-database-deadlocks-trace): Analyze database deadlock telemetry in Business Central to identify deadlock victims, inspect SQL statements and AL stack traces, and troubleshoot contention.
  - Status: Generally available from Business Central 2022 release wave 1, version 20.0
  - Telemetry signal RT0028 is emitted when two or more database processes block each other and SQL Server rolls back one transaction
  - Deadlock telemetry identifies which session was the victim and captures both competing processes as separate events
  - EnableDeadlockMonitoring server setting is not required for RT0028 telemetry collection, but controls a separate SQL deadlock monitoring feature
  - Telemetry dimensions include AL object details, extension information, SQL statement, session IDs, and stack traces
- [Analyzing Database Lock Timeout Trace Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-database-locks-trace): Analyze database lock timeout telemetry in Business Central and correlate lock snapshots to identify blocked sessions and troubleshoot database contention.
  - Status: Generally available from Business Central 2020 release wave 1, version 16.0
  - RT0012 Database lock timed out event occurs when a lock request times out for a session
  - RT0013 Database lock snapshot entry events provide details about SQL sessions holding locks at timeout, including lock type, status, mode, and table
  - RT0027 Database lock snapshot parent event groups related lock snapshot entries and applies from version 20.0 onwards
  - EnableLockTimeoutMonitoring server setting controls lock timeout telemetry; defaults to off on on-premises
  - Snapshot ID maps lock timeout events to associated lock snapshot events for correlation and troubleshooting
- [Analyzing Database Wait Statistics Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-database-wait-statistics-trace): Analyze database wait statistics telemetry in Business Central to compare wait categories, correlate snapshot entries, and investigate database performance.
  - Status: Generally available from Business Central 2022 release wave 1, version 20.0
  - RT0025 Database wait statistics snapshot taken event occurs when snapshot is requested or additional logging starts or ends
  - RT0026 Database wait statistics snapshot entry events contain aggregated SQL wait statistics, not individual query waits
  - Snapshots capture maximum wait time, signal wait time, waiting tasks count, and wait category information
  - Telemetry helps troubleshoot query performance by tracking elapsed time since SQL Server started and wait category details
  - In the observatory: [Page 9520 "Database Wait Statistics"](../../../../objects/page/9520.md)
- [Analyzing Email Trace Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-email-trace): Analyze email telemetry in Business Central to monitor email delivery and troubleshoot failures when connecting or authenticating to SMTP servers.
  - Status: Email telemetry available from Business Central 2020 release wave 2, update 17.2 and later.
  - Email telemetry collects data on successful sends and failed send attempts.
  - Status: SMTP authentication and connection telemetry added from 2023 release wave 1, update 23.2 and later.
  - Prerequisite: Email must be set up before email telemetry data can be collected.
  - Failed emails are viewable in Email Outbox page in Business Central client.
  - Telemetry captures email provider connector used such as Current User, Microsoft 365, SMTP, or custom connectors.
  - In the observatory: [Codeunit 8888 "Email Dispatcher"](../../../../objects/codeunit/8888.md)
- [Analyzing Error Message Vote Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-error-message-voting-trace): Analyze error message vote telemetry in Business Central to find messages users consider unhelpful and investigate the associated errors and extensions.
  - Status: Generally available from 2022 release wave 1
  - CL0002 event emitted when user votes Yes or No on error message helpfulness in dialog
  - Voting feature appears on errors from Error(String) and Error(ErrorInfo) AL methods
  - Telemetry captures user feedback, error message text, extension details, and stack trace information
  - Feedback helps partners and developers identify error messages users find difficult to understand
- [Analyzing Error Method Trace Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-error-method-trace): Analyze error dialog telemetry in Business Central to investigate AL errors, inspect stack traces and failure reasons, and identify problems affecting users.
  - RT0030 Error dialog shown event occurs when error sent to client for display from AL or platform
  - Error messages show only SystemMetadata classification; customer data and other classifications are redacted
  - For Error(String), only Label or TextConst strings are displayed; other strings show redaction message
  - Telemetry includes AL stack trace, failure reason, extension information, and AL object details
  - alEnglishLanguageDiagnosticsMessage dimension available in version 22.0 and backported to version 21.4
- [Analyzing Extension Lifecycle Trace Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-extension-lifecycle-trace): Analyze Business Central extension lifecycle telemetry to track publishing, installation, synchronization, updates, and failures across environments.
  - Status: Generally available from Business Central 2020 release wave 1, version 16.3. Extension-level support added in wave 2, version 17.1.
  - Telemetry tracks success or failure of seven extension operations: compiling, synchronizing, publishing, installing, updating, uninstalling, and unpublishing.
  - Failed operations produce trace log entries with failure reasons included.
  - Online traces come from Extension Management page, Manage Apps page, App Management API, or control plane. On-premises traces from Extension Management page or PowerShell cmdlets.
  - Environment traces record tenant-scoped extensions only, excluding Microsoft and Marketplace extensions.
  - Custom dimensions added gradually during operations; if operation fails before retrieval, those dimensions are excluded.
  - Four synchronization modes supported: Add for initial publish, Clean to remove schema, Development for same-version syncing during development, and ForceSync for destructive schema changes.
  - Limit: Some custom dimensions unavailable for certain operations if failure occurs before the information is retrieved.
- [Analyzing Extension Update Trace Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-extension-update-trace): Analyze Business Central extension update telemetry to investigate upgrade code failures and track upgrade tags used during extension upgrades.
  - Status: Exception telemetry introduced in Business Central 2020 release wave 1, version 16.2; upgrade tag telemetry in 2021 release wave 1, version 18.1.
  - Extension upgrade telemetry captures exceptions thrown by upgrade codeunits and tracks calls to HasUpgradeTag and SetUpgradeTag methods.
  - Extension update failure events include codeunit ID, AL stack trace, exception message, company name, extension name, and app ID.
  - Upgrade tag events are emitted with severity level 1, capturing tag searches and sets during installation, upgrade, or normal operations.
  - Limit: Exception messages containing non-metadata data are not shown; a standard message replaces them to protect customer data.
- [Analyzing Extension Upload Validation Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-pte-upload-validation-trace): Analyze Business Central per-tenant extension upload validation telemetry to track validation attempts, investigate failures, and configure alerts.
  - Status: Generally available for per-tenant extension validation in Business Central service
  - Validation flow starts with LC0200 event and concludes with either success (LC0202) or failure (LC0203)
  - Main extensions and all dependent extensions are validated separately with distinct event IDs
  - Diagnostic events (LC0201, LC0210) report information, warnings, or errors during submission or extension validation
  - Failure reason dimension explains why extension compilation failed against the environment
  - Submission includes extension details like name, version, publisher ID, and the unique submission operation ID
  - Extension metadata is captured in JSON structure format for both main and dependent extensions
- [Analyzing Field Monitoring Trace Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-field-monitoring-trace): Analyze field monitoring telemetry in Business Central to track changes to sensitive fields, monitoring status, and the fields selected for monitoring.
  - Field monitoring logs when monitoring starts or stops, when fields are added or removed for monitoring, and when monitored field values change.
  - Status: Field added or removed for monitoring feature introduced in version 18.0.
  - Changes to Field Monitoring Setup table, Change Log Setup table, and User Contact Email field are always logged.
  - Telemetry events include sensitive field monitor status changes with eventId AL0000DD3.
  - Monitored field value changes logged with eventId AL0000CTE, including field name, number, table name, and number.
  - Field additions or removals logged with eventId AL0000EMW as of version 18.0.
- [Analyzing Financial Report Lifecycle Trace Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-financial-report-lifecycle-trace): Analyze financial report lifecycle telemetry in Business Central to track changes, copies, imports, and exports of report, row, and column definitions.
  - Telemetry tracks 18 lifecycle operations on financial reporting definitions including creation, modification, copying, export, import and deletion of row, column and report definitions.
  - Each operation type has a unique event ID: row definition created (AL0000O81), modified (AL0000O82), deleted (AL0000O84), column definition created (AL0000O85), modified (AL0000O86), deleted…
  - Copy operations generate event IDs AL0000OKV for row definitions, AL0000OKW for column definitions, and AL0000OKX for report definitions.
  - Import and export operations share event IDs: AL0000ONP for row definitions, AL0000ONQ for column definitions, AL0000ONR for report definitions.
  - All telemetry events include user ID, tenant ID, environment name, environment type and company name dimensions to identify who performed the operation and where.
  - Telemetry captures the specific code of the definition being operated on through alRowDefinitionCode, alColumnDefinitionCode or alReportDefinitionCode custom dimensions.
- [Analyzing Financial Report Usage Trace Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-financial-report-usage-trace): Analyze financial report usage telemetry in Business Central to identify reports viewed on-screen or run as reports, including their definition codes.
  - Financial report usage telemetry tracks when users run reports on-screen and from the request page, capturing who ran the report and which definitions were used.
  - On-screen report execution has event ID AL0000OKU while request page execution has event ID AL0000O76.
  - All usage events include report, row and column definition codes plus user ID, tenant ID, environment name, environment type and company name.
  - Usage telemetry enables analysis of which report definitions, row definitions and column definitions are being used in the system.
- [Analyzing Job Queue Lifecycle Trace Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-job-queue-lifecycle-trace): Analyze job queue lifecycle telemetry in Business Central to monitor queued tasks, successful runs, retries, cancellations, and entries that fail.
  - Status: Generally available from version 17.2 in 2020 release wave 2.
  - Telemetry captures job queue entry lifecycle events including enqueued, started, finished, failed, and cancelled states.
  - Common dimensions tracked include job queue ID, object type and ID, recurring status, execution time in milliseconds, and stack traces.
  - Failed entries after max retry attempts trigger event AL0000JRG and enter Error state, requiring manual intervention.
  - Event AL0000HE7 indicates a single job queue entry error; event AL0000JRG indicates it failed after all retry attempts.
  - Limit: Job queue object name and description dimensions added in later versions 22.0 and 22.2 respectively, not in initial release.
- [Analyzing Long Running AL Methods Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-al-method-trace): Analyze long-running AL method telemetry in Business Central to identify slow extension code, examine execution times, and troubleshoot performance issues.
  - Status: Starting with version 29, the extensionInfo dimension is empty in long-running AL method telemetry
  - Long-running AL method telemetry event ID is RT0018
  - Through version 28, extensionInfo includes extension ID, name, version, publisher, subscriber execution count, and execution time
  - Telemetry includes AL method name, object ID, object name, object type, execution time, SQL executes, and SQL rows read
  - Exclusive time specifies execution time without time where AL was suspended due to client callback
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
- [Analyzing Marketplace Submission Validation Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-appsource-submission-validation-trace): Analyze Business Central Marketplace submission validation telemetry to track validation stages, identify diagnostics, and investigate publication failures.
  - Status: Generally available from version 18.4 (2021 release wave 1)
  - Marketplace submission validation telemetry is emitted when apps are published from Partner Center
  - Validation runs against each extension for each targeted country/region and Business Central version
  - Extensions are validated using AL compiler and AppSourceCop code analyzer
  - Each submission receives unique validationRequestId included in all traces for query tracking
  - Validation process emits traces at different phases: request started, diagnostic reported, validation started/completed per extension and version/country-region
  - Event IDs track validation flow: LC0028 request started, LC0029 completed successfully, LC0035 completed with failures
- [Analyzing metadata embeddings telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-metadata-embeddings-trace): Learn about the metadata embeddings telemetry in Business Central.
  - Metadata embeddings telemetry tracks vector representations of extension metadata that power AI features like Copilot search.
  - Event LC0059 indicates successful metadata embedding generation for an extension.
  - Event LC0060 indicates metadata embedding generation failed for an extension.
  - Event LC0061 indicates metadata embedding generation scheduled for an extension.
  - Event LC0062 indicates metadata embedding generation started processing for an extension.
  - Telemetry captures extension ID and version for each embedding generation event to track lifecycle.
- [Analyzing Onboarding Trace Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-onboarding-trace): Analyze onboarding telemetry in Business Central to track registered onboarding signals, completed criteria, and the dates associated with each signal.
  - Status: Onboarding telemetry applies to Business Central 2023 release wave 1, update 22.1 and later
  - Gathers data about onboarding started and onboarding criteria completed by users
  - Onboarding Started event has ID AL0000EIW, fired when user initiates onboarding
  - Onboarding Criteria completed event has ID AL0000EIV, fired when user completes criteria
  - Telemetry includes country code, user role, admin status, evaluation company flag, and tenant license state
  - Environment details captured include name, type, and version in all onboarding events
- [Analyzing Permission Changes Trace Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-permission-changes-trace): Analyze Business Central permission change telemetry to track permission sets, user assignments, and changes made by extensions during installation or updates.
  - Status: Permission changes telemetry applies to Business Central 2020 release wave 2, version 17.2, and later.
  - Permission telemetry tracks user-defined permission set additions, removals, links to system sets, and assignments to users or groups.
  - Limit: AL permission events are emitted only in Business Central online; LC0058 event emitted during extension installation or updates.
  - Permission set assignment events capture permission set ID, app ID, and scope of the assigned permission set.
  - Permission set link events track links between user-defined and system permission sets with total count of links.
  - In the observatory: [Codeunit 1351 "Telemetry Subscribers"](../../../../objects/codeunit/1351.md)
- [Analyzing Permission Dependency Cycle Trace Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-permission-dependency-cycle-trace): Analyze permission dependency cycle telemetry in Business Central to identify circular permission set references and investigate the dependency path.
  - Permission dependency cycles occur when permission sets reference themselves; system prevents circular references.
  - Dependency cycle event logs the full cycle path showing how sets reference each other; long paths are truncated at middle.
  - Cycle discovery telemetry includes AL object ID and type, stack trace, and cyclic permission set dependency path.
  - Severity level 3 for dependency cycle event indicates an error that blocks permission operations.
- [Analyzing Permission Error Trace Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-permission-error-trace): Analyze permission error telemetry in Business Central to identify missing permissions, inspect affected objects, and investigate errors reported to users.
  - Permission error telemetry is emitted when users get permission-related error dialogs in Business Central.
  - Permission error events capture object ID and name, permission area (System, Entitlement, Company, Object), and permission type required.
  - Error messages include affected AL object type (page, table, etc.), client type, and AL stack trace for investigation.
  - Permission error dimension permissionArea indicates whether error is related to system, entitlement, company, or specific object.
- [Analyzing Profile Configuration Lifecycle Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-profile-configuration-lifecycle-trace): Analyze Business Central profile configuration telemetry to track profile imports, exports, copying, creation, deletion, and page customization changes.
  - Status: Generally available from version 21.0, 2022 release wave 2 and later
  - Emits telemetry signals for profile operations like import, export, create, copy, and remove actions
  - Each trace includes event IDs ranging from LC0046 to LC0055 that identify the specific operation performed
  - Telemetry tracks profile page customization lifecycle including when customizations are removed or converted
  - Diagnostic information is collected including severity level, compiler messages, and designer feedback during operations
  - Export operations record whether Force flag was enabled, allowing profiles with compilation errors to be exported
  - Copy operations track source and destination profile IDs, as well as their associated extension IDs
- [Analyzing Stopped Session Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-stop-session-trace): Analyze stop session telemetry in Business Central to identify session cancellation requests, their results, and the AL code or management client involved.
  - Session stop attempts are recorded whether initiated from AL code or admin center via StopSession method
  - Result dimension shows True when stop request was accepted, False when it was rejected
  - Cancellation comment indicates whether stop was triggered by management PowerShell cmdlet or direct AL call
  - Client type dimension distinguishes between Background, WebClient, or ManagementClient session initiators
  - Session stop event includes target session ID, calling session ID, company name, and admin status of target
  - Stack trace and AL object details are included for session stops from AL but omitted for admin center requests
  - Event ID RT0029 identifies all StopSession method invocations across all stop scenarios
- [Analyzing Task Scheduler Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-task-scheduler-trace): Analyze Business Central task scheduler telemetry to track task creation and execution, investigate failures and cancellations, and monitor timeout changes.
  - Status: Task timeout changed events introduced in version 22.0
  - Task lifecycle tracked from creation through completion, cancellation, or failure with unique task IDs
  - Task created event (LC0040) records main codeunit, failure codeunit ID, timeout, and ready state
  - Failure events distinguish between non-retriable exceptions, retriable exceptions, and max retry attempts exceeded
  - Timeout exceeded causes automatic task cancellation with max default of 48 hours; on-premises is configurable
  - Execution metrics include SQL executes, rows read, server time, and total time for completed or failed tasks
  - Task ID, attempt number, and retry message enable tracking of task retry behavior and failure handling
- [Analyzing Verbose Logging Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-verbose-logging-trace): Analyze verbose logging telemetry in Business Central to see when additional logging starts and ends for a session while troubleshooting user problems.
  - Verbose telemetry enabled event (RT0023) is recorded when additional logging turned on from Help page or AL
  - Session verbose logging has temporary duration that expires, triggering disabled event (RT0024)
  - Disabled event does not specifically indicate user browser closure or sign-out; it covers any override reset
  - Both events include session ID, tenant ID, environment type, and telemetry schema version dimensions
  - Events help track when detailed logging is active on individual sessions for troubleshooting
- [Analyzing Web Service Access Key Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-webservices-access-key-trace): Analyze web service access key telemetry in Business Central to monitor authentication attempts, identify failures, and plan migration away from access keys.
  - Status: Generally available from version 17.3, 2020 release wave 2 and later
  - Records success (RT0020) or failure (RT0021) of web service access key authentication attempts
  - Failure events are only emitted when authentication check is reached; rejected early requests do not trigger event
  - Authentication failure reason shows 'Not authorized' when user is not authenticated for the request
  - Deprecated keys dimension lists authentication keys marked for removal in next major release
  - Event data tracks service category (Api, ODataV4, ODataV3, SOAP) and authentication type (NavUserPassword, AccessControl)
  - Endpoint is sanitized to omit private and sensitive information from trace records
- [Azure Function Integration Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-azure-function-integration-trace): Analyze Azure Function integration telemetry in Business Central to monitor successful requests, failed requests, and OAuth authorization failures.
  - Azure Function integration telemetry tracks calls from Business Central to Azure Functions.
  - Request succeeded event has eventId AL0000I74 with HTTP status code.
  - Request failed event has eventId AL0000I7P and includes status code and function host URL.
  - Authorization failed event has eventId AL0000I75 with error text explaining failure reason.
  - Common dimensions include function host URL, tenant ID, environment name, and company name.
  - Sample KQL queries help analyze and alert on Azure Function integration failures.
- [Business Central Telemetry Area Overview](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-area-overview): Explore Business Central telemetry areas to find events for monitoring usage, diagnosing errors, and analyzing environment performance.
  - Business Central telemetry is logged into traces or pageViews tables in Application Insights
  - Telemetry areas cover multiple operations tracked across the Business Central platform
- [Environment Lifecycle Telemetry in Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-environment-lifecycle-trace): Analyze Business Central environment lifecycle telemetry to monitor updates, restarts, copies, restores, transfers, and other administrative operations.
  - Environment lifecycle telemetry logs environment operations including updates, start/stop/restart, copy, point-in-time restore, tenant transfer, session cancellation, database export, configuration…
  - Telemetry records data upgrade events: started, succeeded, failed, recovery succeeded, and recovery failed.
  - Failed operations include a trace log entry with a reason for the failure.
  - Custom dimensions available in all lifecycle events: component, deprecatedKeys, telemetrySchemaVersion.
  - Environment update can be available, scheduled, missed, postponed, or resumed before it starts.
  - Start, stop, and restart operations generate initiated, successful, and failed telemetry events.
  - Copy, point-in-time restore, and tenant transfer operations generate separate events for source and destination environments.
  - Session cancellation, database export, and configuration key update operations are tracked with their own event IDs and dimensions.
- [Environment Validation Telemetry in Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-environment-validation-trace): Analyze Business Central environment validation telemetry to identify extension compatibility issues and prepare customer environments for major updates.
  - Status: Environment validation started September 2023 to proactively check readiness for next major version.
  - Non-compatible partner apps can block major version upgrades if they cannot compile on new version.
  - Service regularly validates all extensions; failures trigger email to administrator.
  - Environment validation started event (LC0220) begins validation against target build version.
  - Extension validation events (LC0224-LC0226) track each extension compilation against next major version.
  - Environment validation diagnostic reported (LC0221) indicates warnings or errors at environment level.
  - Environment validation completed successfully (LC0222) or with failures (LC0223) indicate overall readiness.
  - Sample KQL queries help analyze validation failures and set up alerts before major version updates.
- [Feature Management Trace Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-feature-management-trace): Analyze feature management telemetry in Business Central to identify feature switches, their new state, and the user who changed each feature.
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
- [Outgoing Web Service Certificate Validation Error Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-webservices-outgoing-certificate-validation-errors): Analyze outgoing web service certificate validation telemetry in Business Central to identify invalid server certificates and troubleshoot AL HttpClient requests.
  - Status: Generally available from version 26.0 and later
  - Telemetry emitted for server certificate validation errors on outgoing HttpClient web service requests
  - Event recorded even if certificate validation is bypassed for the request; presence does not confirm blocking
  - Failure reason dimension explains why certificate did not validate for the endpoint
  - Certificate information includes chain, issuer name, and subject details for investigation
  - Traces include AL object making request, HTTP method, cleaned endpoint URI, and extension details
  - Event ID RT0052 identifies all server certificate validation error occurrences
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
- [Performance Toolkit Trace Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-performance-toolkit-trace): Analyze Performance Toolkit telemetry in Business Central to monitor test runs and compare scenario duration, SQL statement counts, and execution results.
  - Status: Generally available for analyzing Performance Toolkit telemetry.
  - Performance Toolkit helps test performance of customized Business Central solutions across multiple users.
  - Telemetry is logged when BCPT header changes status to Started, Completed, or Cancelled, and when scenarios finish.
  - BCPT run started event includes session count, test company name, run type, and version number.
  - BCPT scenario finished event includes duration in milliseconds, SQL statement count, and operation status.
  - Common dimensions include tenant ID, environment name, environment type, and extension details.
- [Report Generation Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-reports-trace): Learn about the report telemetry in Business Central.
  - Report telemetry captures successful generation (RT0006), failures, cancellations (RT0007), and commits during cancellation (RT0011) with performance metrics.
  - Total time minus server execution time equals rendering time. Rendering time is difference between generating dataset and applying layout.
  - Limit: Business Central online cancels reports exceeding timeout threshold or max row limits; on-premises has no default limits but supports ReportTimeout and ReportMaxRows parameters.
  - Dimensions include report ID, name, layout type (Rdlc, Word, Excel, Custom), document format, action (Print, Preview, Save, Schedule, Download), and reporting engine used.
  - Theme layout and header/footer layout dimensions added in version 29.0 indicate layouts applied to report; values empty when not applied.
  - Cancellation reasons include user request, timeout exceeded, maximum rows exceeded, or Word report rendering timeout.
  - Limit: Event must log when report canceled with commit performed before cancellation, indicating potential data inconsistency if report not idempotent.
- [Report Layout Lifecycle Telemetry Reference](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-report-layout-lifecycle-trace): Analyze report layout lifecycle telemetry in Business Central to track layouts added, replaced, deleted, exported, or selected as the report default.
  - Telemetry captures user actions on report layouts: adding, changing default, editing properties, exporting, deleting, and replacing layouts.
  - Layout format types tracked are RDLC, Word, Excel, and Custom (shown as External in client UI).
  - Each user action generates a unique event ID: New (AL0000N0E), SetDefault (AL0000N0D), Edit (AL0000N0H), Export (AL0000N0I), Delete (AL0000N0F), Replace (AL0000N0G).
  - Telemetry dimensions include tenant ID, environment name and type, company, report ID, and user ID.
  - Edit action telemetry records old and new layout names and descriptions for property changes.
  - KQL sample code provided for querying layout events with filtering by timestamp, environment, and action type.
- [Retention Policy Trace Telemetry Reference](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-retention-policy-trace): Analyze retention policy telemetry in Business Central to monitor policy log entries, deleted records, and when policies are enabled or disabled.
  - Status: Retention policy telemetry available from Business Central 2020 release wave 2, update 17.1 and later.
  - Telemetry logs when table is added to allowed tables, error occurs, policy is enabled, or data is deleted.
  - Telemetry also logs first policy enabled and last policy removed on a company.
  - Prerequisite: Retention policies must be set up on tables with log entries and archived records to gather telemetry.
  - Retention Policy Log Entry logged shows operation details such as setup, retention period, and apply actions.
  - Records Deleted Using Retention Policy tracks number of records deleted and whether run was manual or automatic.
  - In the observatory: [Codeunit 3912 "Reten. Policy Telemetry Impl."](../../../../objects/codeunit/3912.md)
- [User Checklist Trace Telemetry Reference](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-user-checklist-trace): Analyze user checklist telemetry in Business Central to track checklist status changes and identify the guided experience items associated with them.
  - User checklist telemetry tracks state changes for onboarding checklists shown to users
  - Event AL0000EIQ fires when overall checklist status changes between states like Not Started or In progress
  - Event AL0000EIT fires when individual checklist item status changes
  - Event AL0000EIR fires when a checklist item status changes and guided experience item is found
  - Dimensions track old and new status values to monitor progression through checklist completion
- [Web Service Publish Failure Trace](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-webservices-publish-failure-trace): Analyze web service publish failure telemetry in Business Central to investigate metadata generation errors and identify affected pages, controls, and fields.
  - Web service metadata error events (RT0033 through RT0039) emitted during web service publication or operation
  - RT0033 reports missing subpage names; RT0034 reports missing control names; RT0035 reports skipped records
  - RT0036 reports table field name errors; RT0038 reports warnings for multiple navigation property options
  - RT0039 reports skipped entity records with error details; each error prevents web service from functioning correctly
  - Metadata stack dimension provides context showing hierarchical relationship of problematic metadata entities
  - Errors are severity level 3; warnings are severity level 2; all include environment and component version information

Key facts from Microsoft Learn (CC BY 4.0), in our own words (D106); open the page for the full text.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [What's New: Enhanced Index Management (2026 release wave 1)](../../../../videos/IAacWsvav1E.md) (video): "Index Lifecycle Telemetry Events"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
