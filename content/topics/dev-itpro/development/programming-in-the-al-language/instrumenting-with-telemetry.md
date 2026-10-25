---
id: topic/dev-itpro/development/programming-in-the-al-language/instrumenting-with-telemetry
type: topic
title: Instrumenting with telemetry
summary: "Instrumenting AL extensions with telemetry in Business Central: setting up extension telemetry, emitting custom events to Application Insights or the Event Log, logging feature telemetry, and reading the platform's built-in telemetry events. It answers how-to and which-method questions for developers."
tier: official
language: en
system: platform
review:
  state: reviewed
  by: opus
  at: "2026-10-24T00:55:39.284Z"
  flags: []
generated:
  at: "2026-10-25T17:55:54.196Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: db14a00968d023f7ff2ba691e2d092f3990160cc8ceb2a1c07d1db9da7451d7b
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-instrument-application-for-telemetry-app-insights
    title: Creating custom telemetry events for Azure Application Insights
    date: "2024-02-09"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-instrument-application-for-telemetry-event-log
    title: Creating custom telemetry events for the Event Log
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-instrument-application-for-telemetry
    title: Developing telemetry into your Business Central application
    date: "2024-02-09"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-application-insights-for-extensions-data
    title: Extension Telemetry Data in Business Central
    date: "2024-02-09"
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
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/session/session-logmessage-string-string-verbosity-dataclassification-telemetryscope-dictionary[text,text]-method
    title: Session.LogMessage(Text, Text, Verbosity, DataClassification, TelemetryScope, Dictionary of [Text, Text]) Method
    date: "2026-10-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/session/session-logmessage-string-string-verbosity-dataclassification-telemetryscope-string-string-string-string-method
    title: Session.LogMessage(Text, Text, Verbosity, DataClassification, TelemetryScope, Text, Text [, Text] [, Text]) Method
    date: "2026-10-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-application-insights-for-extensions
    title: Set Up Extension Telemetry in Business Central
    date: "2026-10-09"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-instrument-application-for-telemetry-app-insights
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-instrument-application-for-telemetry-event-log
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-instrument-application-for-telemetry
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-application-insights-for-extensions-data
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-feature-telemetry
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-application-insights-for-extensions
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development/programming-in-the-al-language
    - topic/dev-itpro/development/programming-in-the-al-language/instrumenting-with-telemetry/reference-documentation-telemetry
  localizations: []
  videos:
    - video/7rIHz0zrgWU
    - video/b54ehH4AlFA
    - video/hS8yWS3bxWE
    - video/mnxOSl1Y9PI
    - video/oF_wSP0xrSQ
    - video/tDcT_51ktqo
  posts:
    - post/waldo-be/317845
  guidelines: []
  changes:
    - change/al-go/2229
    - change/al-go/2379
    - change/al-go/2392
    - change/al-go/2395
    - change/bcapps/10897
    - change/bcapps/12432
learn_toc_path:
  - Development
  - Programming in the AL language
  - Instrumenting with telemetry
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development/programming-in-the-al-language
children:
  - topic/dev-itpro/development/programming-in-the-al-language/instrumenting-with-telemetry/reference-documentation-telemetry
coverage:
  learn: 8
  code: 0
  video: 6
  blog: 1
  guideline: 0
bc_forms: []
member_hash: 700c86efba6976ff1f579dab7d994f43d63ff87525ee22bc8315bb5d045228dd
narrative: generated
---

# Instrumenting with telemetry

> Instrumenting AL extensions with telemetry in Business Central: setting up extension telemetry, emitting custom events to Application Insights or the Event Log, logging feature telemetry, and reading the platform's built-in telemetry events. It answers how-to and which-method questions for developers.

Path: [Development](../../development.md) > [Programming in the AL language](../programming-in-the-al-language.md) > Instrumenting with telemetry · tier official · system platform · narrative reviewed (checked by Opus)

## Overview

This section covers how to add telemetry to a Business Central app so you can see how it behaves in production: user activity, errors, and performance. It starts with an introductory page on developing telemetry into your application, then moves to specific techniques.

For Application Insights, first configure the connection string in app.json (see the extension telemetry setup page). Then choose between custom events with LogMessage and the higher-level feature telemetry, which tracks usage, errors, and uptake state. A separate page covers the older Event Log route with the obsolete SENDTRACETAG method. A page on data logged to app/extension telemetry lists the events the platform emits itself. A reference subtopic with two pages holds the supporting reference material.

Start with the overview page, then the setup page. Use the custom events or feature telemetry pages when you need to log your own signals.

## Key points

- Extension telemetry setup: set applicationInsightsConnectionString in app.json. The applicationInsightsKey property is also listed. The setup page lists runtime 7.2 as a version reference.
- Custom Application Insights events use LogMessage, with a dictionary or dimension overloads for custom dimensions, TelemetryScope control, and DataClassification filtering.
- Event Log telemetry uses the obsolete SENDTRACETAG method, with event categories, verbosity levels, TraceLevel configuration, and Event Viewer. The page lists 2020 release wave 2 (v17) as a version reference.
- Feature telemetry uses the FeatureTelemetry codeunit from the Telemetry AL module: LogUsage, LogError, and LogUptake.
- Uptake states for feature telemetry are Discovered, Set up, Used, and Undiscovered.
- Feature telemetry supports a Telemetry Logger interface, custom dimensions, and comparing features across metrics.
- The platform emits its own telemetry for page interactions, REST API calls, report rendering, error dialogs, and resource consumption.
- Telemetry signals can cover usage, errors, and performance for troubleshooting and for monitoring against business goals.

## Subtopics

- [Reference documentation (telemetry)](instrumenting-with-telemetry/reference-documentation-telemetry.md) (2 pages)

## More Learn pages

- [Creating custom telemetry events for Azure Application Insights](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-instrument-application-for-telemetry-app-insights): This article describes how to add code to application objects that enables you to log telemetry.
- [Creating custom telemetry events for the Event Log](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-instrument-application-for-telemetry-event-log): This topic describes how to add code to application objects that enables you to gather telemetry.
- [Developing telemetry into your Business Central application](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-instrument-application-for-telemetry): This article describes how to add code to application objects that enables you to gather telemetry.
- [Extension Telemetry Data in Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-application-insights-for-extensions-data): Learn which Business Central events can reach an extension's Application Insights resource and how to identify signals that support extension telemetry.
- [Feature telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-feature-telemetry): Learn about the telemetry that you can emit from features in Business Central.
  - Feature Telemetry module simplifies app health monitoring and tracks feature uptake using three event types: LogUsage for successful feature use, LogError for explicit errors, and LogUptake for…
  - Prerequisite: Must implement Telemetry Logger interface in an extension codeunit and register it via OnRegisterTelemetryLogger event subscriber, one per app publisher.
  - LogUptake tracks four uptake states: Undiscovered, Discovered (page opens), Set up (user configures), and Used (user attempts feature). Calling with Undiscovered resets uptake state.
  - Limit: LogUptake may make database transactions and requires PerformWriteTransactionsInASeparateSession set to true when called from try function.
  - Custom dimensions include extension info, user role, environment type, client type, and for errors: stack trace and error text describing the issue.
  - If no telemetry logger registered for publisher, server logs event AL0000G7K to environment telemetry indicating app sending data without registered logger.
  - In the observatory: [Codeunit 8703 "Feature Telemetry"](../../../../objects/codeunit/8703.md), [Codeunit 8708 "Telemetry Loggers"](../../../../objects/codeunit/8708.md)
- [Set Up Extension Telemetry in Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-application-insights-for-extensions): Configure a Business Central extension to send telemetry to Azure Application Insights, monitor deployed apps, and add feature or custom telemetry events.

Key facts from Microsoft Learn (CC BY 4.0), in our own words (D106); open the page for the full text.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#2229 Surface empty BCPT results as a warning instead of silent success](../../../../changes/al-go/2229.md) (code change): "GetBcptSummaryMD now returns a message that appears in the GitHub step summary"
- [#2379 Avoid CI/CD runs for template SHA-only system updates](../../../../changes/al-go/2379.md) (code change): "Checks if files were actually updated or removed before persisting a new template SHA"
- [#2392 AL-Go Telemetry Enhancements: repository fork and hosting information](../../../../changes/al-go/2392.md) (code change): "AL-Go telemetry now captures whether a repository is a fork and its GitHub hosting type"
- [#2395 Prevent workflow telemetry failures from failing the workflow](../../../../changes/al-go/2395.md) (code change): "WorkflowPostProcess telemetry failures no longer cause the entire workflow to fail"
- [#10897 BC IQ - Update data sensitivities for policy history](../../../../changes/bcapps/10897.md) (code change): "Data sensitivities are updated to reflect recent changes to Business Skill"
- [#12432 [AB#647643] Retain remote files and safely retire verified local references](../../../../changes/bcapps/12432.md) (code change): "Removes unused deletion telemetry and updates the README configuration guidance"
- [Handling Business Central Telemetry like a boss: iFacto Telemetry – Pt. 3](../../../../posts/waldo-be/317845.md) (community post): "extends Business Central's built-in telemetry capabilities by adding custom events"
- [What's New: Telemetry (2023 release wave 2)](../../../../videos/7rIHz0zrgWU.md) (video): "telemetry; performance analysis; ai insights; error troubleshooting"
- [What's Cooking in Business Central: Financial Reporting Enhancements (part 2): Telemetry](../../../../videos/b54ehH4AlFA.md) (video): "telemetry; financial reporting; application insights; row definitions"
- [What's New: Telemetry (2025 release wave 1)](../../../../videos/hS8yWS3bxWE.md) (video): "Financial Reporting Usage Telemetry; Financial Reporting Definition Changes Telemetry"
- [What's New: Key Updates in our Learning Content (documentation) For Developers (2024 release wave 1)](../../../../videos/mnxOSl1Y9PI.md) (video): "Telemetry for AL Developers; Security for Developers; Extensibility Overview"
- [I Built an AI That Turns Business Central Telemetry Into GitHub Issues (Automatically)](../../../../videos/oF_wSP0xrSQ.md) (video): "Automated BC telemetry triage with Azure Logic App and AI; KQL query for database lock timeouts"
- [What's New: Server and Database - A Faster Runtime (2023 release wave 2)](../../../../videos/tDcT_51ktqo.md) (video): "Exclusive Time Telemetry; Session Creation Performance Improvement"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
