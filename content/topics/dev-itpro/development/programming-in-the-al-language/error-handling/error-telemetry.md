---
id: topic/dev-itpro/development/programming-in-the-al-language/error-handling/error-telemetry
type: topic
title: Error telemetry
summary: "Error telemetry in Business Central AL covers how to analyze error-related events in Application Insights: error dialogs from the Error method, permission errors, user votes on error messages, and feature telemetry. It answers questions about event IDs, dimensions, KQL analysis and logging with the Telemetry AL module."
tier: official
language: en
system: platform
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:26:48.243Z"
  flags: []
generated:
  at: "2026-10-24T00:57:10.969Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 592be2a551878e89381676a7fda1d4fdfeb6c6d287ae618b31177294289766c0
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-error-message-voting-trace
    title: Analyzing Error Message Vote Telemetry | Microsoft Docs
    date: "2022-03-22"
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
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-error-method-trace
    title: Error method trace telemetry
    date: "2023-12-21"
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
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-permission-error-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-error-method-trace
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

> Error telemetry in Business Central AL covers how to analyze error-related events in Application Insights: error dialogs from the Error method, permission errors, user votes on error messages, and feature telemetry. It answers questions about event IDs, dimensions, KQL analysis and logging with the Telemetry AL module.

Path: [Development](../../../development.md) > [Programming in the AL language](../../programming-in-the-al-language.md) > [Error handling](../error-handling.md) > Error telemetry · tier official · system platform · narrative reviewed (checked by Opus)

## Overview

This section is for developers who want to see how errors surface in production. Three pages describe specific telemetry signals sent to Application Insights: error dialogs shown when the Error method is called in AL code, permission errors when users lack required permissions, and votes users give on how helpful an error message was. The Error method and permission error pages describe the event dimensions and give KQL examples.

The fourth page covers feature telemetry. It uses the Telemetry AL module to track app health, feature uptake and usage, and to log errors through the FeatureTelemetry codeunit, with custom dimensions available.

Start with the Error method trace page for the general error signal, then the permission error page if the problem is about access. Use the vote telemetry page to judge error message quality, and feature telemetry to add your own logging.

## Key points

- Error method trace telemetry uses eventId RT0030 (error dialog displayed) and includes alErrorMessage and alStackTrace dimensions.
- Permission error trace telemetry uses eventId RT0031 (permission error shown) with errorMessage, permissionArea, permissionType and alStackTrace dimensions.
- Both error trace pages give KQL examples for Application Insights analysis. The Error method page also covers alert setup.
- Error message vote telemetry records user feedback on how helpful an error message was in Application Insights. The page is associated with 2022 release wave 1.
- Feature telemetry uses the FeatureTelemetry codeunit with LogUsage, LogError and LogUptake.
- Uptake states that can be logged are Discovered, Set up, Used and Undiscovered.
- Feature telemetry supports advanced filtering through common telemetry dimensions, plus a Telemetry Logger interface, custom dimensions and feature comparison across metrics.

## Learn pages

- [Analyzing Error Message Vote Telemetry \| Microsoft Docs](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-error-message-voting-trace): Learn about error message vote telemetry in Business Central
  - Status: Available from Business Central 2022 release wave 1.
  - Error messages include a yes or no question asking whether the message was helpful.
  - User feedback on error messages is recorded in Application Insights for all errors from Error method calls.
  - Trace records whether user voted yes or no, the error message text, and the regional language version shown.
- [Analyzing Permission Error Trace Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-permission-error-trace): Learn about the permission error telemetry in Business Central
  - Permission error telemetry signals when users get permission-related error dialogs.
  - Permission Error Shown event has eventId RT0031 at severity level 1.
  - Data includes object ID, name, type, and permission area that caused the error.
  - permissionType dimension shows missing permission: Delete, Execute, Insert, Modify, or Read.
  - permissionArea dimension indicates System, Entitlement, Company, or Object scope.
  - Stack trace and error message help identify where permission check failed in code.
  - Sample KQL code helps analyze which permission errors users encounter frequently.
- [Error method trace telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-error-method-trace): Learn about the Error method telemetry in Business Central
  - Error method telemetry emitted when Error method called, displays dialog to user
  - Event ID RT0030 signals error dialog displayed with failure reason Dialog
  - Error message shown only if Label or TextConst data type, otherwise generic message shown
  - Messages with customer data not shown as precaution, SystemMetadata classified data only emitted
  - Severity level 3 indicates error dialog event with stack trace and AL object details recorded
  - Telemetry includes AL stack trace, object ID, object type, client type, and company name
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
