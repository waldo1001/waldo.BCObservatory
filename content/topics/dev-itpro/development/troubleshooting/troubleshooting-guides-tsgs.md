---
id: topic/dev-itpro/development/troubleshooting/troubleshooting-guides-tsgs
type: topic
title: Troubleshooting guides (TSGs)
summary: Troubleshooting guides (TSGs) for Business Central development and administration. They cover cloud migration problems, report errors and slow performance, and web service failures (OData, API, SOAP). Use them for questions about causes of errors, telemetry to check, and fixes.
tier: official
language: en
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:26:53.471Z"
  flags: []
generated:
  at: "2026-10-24T00:57:10.969Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 2f6e298df58e16603f6922a301172b3a824b0052859f7072891f11c4142ec208
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-troubleshooting
    title: Troubleshooting Cloud Migration
    date: "2025-05-19"
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

> Troubleshooting guides (TSGs) for Business Central development and administration. They cover cloud migration problems, report errors and slow performance, and web service failures (OData, API, SOAP). Use them for questions about causes of errors, telemetry to check, and fixes.

Path: [Development](../../development.md) > [Troubleshooting](../troubleshooting.md) > Troubleshooting guides (TSGs) · tier official · system development · narrative reviewed (checked by Opus)

## Overview

The TSGs are task-focused guides for diagnosing specific problems in Business Central. Each guide describes symptoms, the likely causes, and how to find the root cause, often with telemetry and debugging tools.

Two guides sit directly in this section. Troubleshooting Cloud Migration covers database compatibility, change tracking, user permissions, Integration Runtime setup, version requirements and common data problems. Troubleshooting reports covers analyzing report telemetry, finding the cause of report errors or slow performance, and resolving common reporting exceptions.

A subtopic, Troubleshoot web services, has two pages on OData, API and SOAP calls. It covers HTTP status codes, OData error codes and how AL runtime exceptions map to OData errors. Start with the guide that matches your problem area, then follow its telemetry and debugging advice.

## Key points

- Cloud migration guide covers SQL Server compatibility, change tracking, and Integration Runtime setup.
- Cloud migration guide also covers migration user permissions, company name validation, and the tenant media table, with notes for versions 23, 24 and 25.
- Reports guide covers report limits, report telemetry, and performance analysis.
- Reports guide addresses both RDL layouts and Excel/Word layouts, and how to debug report issues.
- Web services troubleshooting covers failed OData, API and SOAP calls and their HTTP status codes.
- Web services pages explain OData error codes and how AL runtime exceptions map to them.
- Telemetry is a recurring tool for finding root causes in the reports and web services guides.

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
- [Troubleshooting reports](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-reports-troubleshooting): Learn about how to troubleshoot Business Central reports

Key facts from Microsoft Learn (CC BY 4.0), in our own words (D106); open the page for the full text.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
