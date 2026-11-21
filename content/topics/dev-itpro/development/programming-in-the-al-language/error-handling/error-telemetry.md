---
id: topic/dev-itpro/development/programming-in-the-al-language/error-handling/error-telemetry
type: topic
title: Error telemetry
summary: Error telemetry in Business Central covers how errors and feature usage are logged to Application Insights and analyzed. It answers questions about error dialogs, error message votes, permission errors (RT0031), and logging feature usage, errors and uptake with the Telemetry AL module.
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
  input_hash: 74d75774f46cd19ed6eca421a0dfec1115766df452ebfe7ab987c6a19d1d0a20
evidence:
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
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-permission-error-trace
    title: Analyzing Permission Error Trace Telemetry
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-feature-telemetry
    title: Feature telemetry
    date: "2026-09-22"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-error-message-voting-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-error-method-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-permission-error-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-feature-telemetry
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development/programming-in-the-al-language/error-handling
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Development
  - Programming in the AL language
  - Error handling
  - Error telemetry
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development/programming-in-the-al-language/error-handling
children: []
coverage:
  learn: 4
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: dbb22af324790e4cc9e32a802778f0b7eb24e9f4cbf05d770f836f67619cf2cd
narrative: generated
---

# Error telemetry

> Error telemetry in Business Central covers how errors and feature usage are logged to Application Insights and analyzed. It answers questions about error dialogs, error message votes, permission errors (RT0031), and logging feature usage, errors and uptake with the Telemetry AL module.

Path: [Development](../../../development.md) > [Programming in the AL language](../../programming-in-the-al-language.md) > [Error handling](../error-handling.md) > Error telemetry · tier official · system platform · narrative **unreviewed** (model text not yet checked)

## Overview

This section describes telemetry signals that help you understand the errors users meet in Business Central and how features are used. The signals are sent to Application Insights, where you can analyze them, for example with KQL queries, and set up alerts.

Three pages focus on error signals: error method trace telemetry (error dialogs shown to users, from AL Error method calls and platform errors), error message vote telemetry (yes/no feedback on whether an error message was helpful), and permission error trace telemetry (permission-related error dialogs). A fourth page covers feature telemetry, where developers log usage, errors and uptake of their own features through the FeatureTelemetry codeunit.

Start with error method trace telemetry for general error patterns and alerting. Then use the permission error page for permission problems, the vote page to judge message quality, and the feature telemetry page when you instrument your own app.

## Key points

- Error method trace telemetry captures error dialogs shown to users, including AL Error method calls and platform errors, with AL stack traces. The page mentions versions 22.0 and 21.4.
- Error method trace telemetry supports error message filtering, privacy filtering, alert setup and KQL queries in Application Insights.
- Error message vote telemetry records yes/no feedback on whether an error message was helpful, with stack trace recording (2022 release wave 1).
- Permission error trace telemetry logs a signal with eventId RT0031 when a user sees a permission error dialog, with custom dimensions and KQL analysis samples.
- Feature telemetry uses the FeatureTelemetry codeunit from the Telemetry AL module with LogUsage, LogError and LogUptake.
- Uptake states for feature telemetry are Discovered, Set up, Used and Undiscovered.
- Feature telemetry supports a Telemetry Logger interface, custom dimensions, and comparing features across metrics with common dimension filtering.

## Learn pages

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
- [Analyzing Permission Error Trace Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-permission-error-trace): Analyze permission error telemetry in Business Central to identify missing permissions, inspect affected objects, and investigate errors reported to users.
  - Permission error telemetry is emitted when users get permission-related error dialogs in Business Central.
  - Permission error events capture object ID and name, permission area (System, Entitlement, Company, Object), and permission type required.
  - Error messages include affected AL object type (page, table, etc.), client type, and AL stack trace for investigation.
  - Permission error dimension permissionArea indicates whether error is related to system, entitlement, company, or specific object.
- [Feature telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-feature-telemetry): Learn about the telemetry that you can emit from features in Business Central.
  - Feature Telemetry module simplifies app health monitoring and tracks feature uptake using three event types: LogUsage for successful feature use, LogError for explicit errors, and LogUptake for…
  - Prerequisite: Must implement Telemetry Logger interface in an extension codeunit and register it via OnRegisterTelemetryLogger event subscriber, one per app publisher.
  - LogUptake tracks four uptake states: Undiscovered, Discovered (page opens), Set up (user configures), and Used (user attempts feature). Calling with Undiscovered resets uptake state.
  - Limit: LogUptake may make database transactions and requires PerformWriteTransactionsInASeparateSession set to true when called from try function.
  - Custom dimensions include extension info, user role, environment type, client type, and for errors: stack trace and error text describing the issue.
  - If no telemetry logger registered for publisher, server logs event AL0000G7K to environment telemetry indicating app sending data without registered logger.
  - In the observatory: [Codeunit 8703 "Feature Telemetry"](../../../../../objects/codeunit/8703.md), [Codeunit 8708 "Telemetry Loggers"](../../../../../objects/codeunit/8708.md)

Key facts from Microsoft Learn (CC BY 4.0), in our own words (D106); open the page for the full text.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
