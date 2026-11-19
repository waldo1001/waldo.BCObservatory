---
id: topic/dev-itpro/development/troubleshooting/troubleshooting-guides-tsgs
type: topic
title: Troubleshooting guides (TSGs)
summary: Troubleshooting guides (TSGs) for Business Central development and administration. They cover cloud migration to Business Central online, report errors and performance, and web service (OData, API, SOAP) failures. Use them to diagnose problems and find the right telemetry or debugging approach.
tier: official
language: en
system: development
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-19T01:01:35.036Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 45a5b38176db42eba7648edebf5d045d46c6794761f734427000ea5c63e50e53
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-troubleshooting
    title: Troubleshooting Cloud Migration
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-reports-troubleshooting
    title: Troubleshooting reports
    date: "2025-01-28"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/dynamics-error-codes
    title: Troubleshooting REST API/OData calls
    date: "2024-02-06"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/webservices/web-service-troubleshooting
    title: Troubleshooting web service errors (OData, API, and SOAP)
    date: "2024-01-10"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-troubleshooting
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-reports-troubleshooting
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development/troubleshooting
    - topic/dev-itpro/development/troubleshooting/troubleshooting-guides-tsgs/troubleshoot-web-services
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Development
  - Troubleshooting
  - Troubleshooting guides (TSGs)
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development/troubleshooting
children:
  - topic/dev-itpro/development/troubleshooting/troubleshooting-guides-tsgs/troubleshoot-web-services
coverage:
  learn: 4
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 6f38afa944b2d93ca8dec81bee099291077c21d1b6f834e3c5289912e95d9480
narrative: generated
---

# Troubleshooting guides (TSGs)

> Troubleshooting guides (TSGs) for Business Central development and administration. They cover cloud migration to Business Central online, report errors and performance, and web service (OData, API, SOAP) failures. Use them to diagnose problems and find the right telemetry or debugging approach.

Path: [Development](../../development.md) > [Troubleshooting](../troubleshooting.md) > Troubleshooting guides (TSGs) · tier official · system development · narrative **unreviewed** (model text not yet checked)

## Overview

The TSGs are task-focused guides for diagnosing specific problems. Two guides sit directly in this section: one for cloud migration to Business Central online and one for reports. A subtopic covers web services.

The cloud migration guide walks through checks on the source and the migration setup: SQL Server compatibility level, change tracking, migration user permissions, integration runtime configuration and diagnostics, company name validation, and monitoring of the Tenant Media table. It references version 25.0.

The reports guide describes how to analyze report telemetry, find the root cause of report errors or slow performance, and resolve common reporting exceptions. It touches report limits, RDL layouts, Excel and Word layouts, and debugging. The web services subtopic (2 pages) covers failed calls, HTTP status codes, OData error codes, and how AL runtime exceptions map to OData errors.

Start with the guide that matches your symptom. For migration, begin with the compatibility and change tracking checks. For reports or web services, begin with telemetry.

## Key points

- Cloud migration TSG checks SQL Server compatibility level, change tracking, and migration user permissions.
- Cloud migration TSG also covers integration runtime setup and diagnostics, company name validation, and Tenant Media table monitoring (version 25.0).
- Reports TSG shows how to use report telemetry to find the cause of errors and slow performance.
- Reports TSG covers report limits, RDL layouts, Excel/Word layouts, and debugging.
- Web services subtopic (2 pages) covers OData, API and SOAP failures.
- Web services guides explain HTTP status codes, OData error codes, and how AL runtime exceptions map to OData errors.
- Web services guides point to telemetry and debugging tools for finding the cause of failed calls.

## Subtopics

- [Troubleshoot web services](troubleshooting-guides-tsgs/troubleshoot-web-services.md) (2 pages)

## More Learn pages

- [Troubleshooting Cloud Migration](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-troubleshooting): Learn how to troubleshoot problems that you might experience with the cloud migration to Business Central online from on-premises.
  - SQL Server compatibility level must be 130 or higher; query sys.databases or run ALTER DATABASE command to set it correctly.
  - Change tracking must be enabled on database; run ALTER DATABASE command to enable with 3-day retention and auto-cleanup.
  - Prerequisite: Cloud migration requires users to have Business Central license and SUPER permission set to run setup and migration tasks.
  - Integration Runtime must be version 5 if machine has .NET Framework Runtime 4.7.2; otherwise use version 4.
  - When reusing Integration Runtime for multiple migrations, enter its name in Data Migration Setup instead of leaving field blank.
  - Limit: Cannot migrate multiple on-premises databases to same online environment or same database to multiple environments simultaneously.
  - Check applicationVersion field in $ndo$tenantdatabaseproperty table; if blank or outdated, migration cannot run.
  - Step: After migration completes, run Repair Companion Table Records action on Cloud Migration Management page if data is missing.
  - In the observatory: [Page 40063 "Cloud Migration Management"](../../../../objects/page/40063.md)
- [Troubleshooting reports](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-reports-troubleshooting): Learn about how to troubleshoot Business Central reports

Key facts from Microsoft Learn (CC BY 4.0), in our own words (D106); open the page for the full text.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
