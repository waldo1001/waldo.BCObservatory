---
id: topic/dev-itpro/development/programming-in-the-al-language/instrumenting-with-telemetry
type: topic
title: Instrumenting with telemetry
summary: Instrumenting Business Central AL code with telemetry. It covers setting up extension telemetry, emitting custom events to Application Insights or the Event Log, using feature telemetry, and the platform events already logged for extensions. It answers how-to and which-method questions.
tier: official
language: en
system: platform
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-20T01:01:32.224Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: b115942fe10c86e72594bf7bb3d7207aa07a53921ae41892d75e0f34a9cc3e78
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-instrument-application-for-telemetry
    title: Adding Telemetry to Your Business Central Application
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-instrument-application-for-telemetry-app-insights
    title: Creating Custom Telemetry Events for Azure Application Insights
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-instrument-application-for-telemetry-event-log
    title: Creating Custom Telemetry Events for the Event Log
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-application-insights-for-extensions-data
    title: Extension Telemetry Data in Business Central
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
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-instrument-application-for-telemetry
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-instrument-application-for-telemetry-app-insights
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-instrument-application-for-telemetry-event-log
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
    - video/1x3QyBX3swg
    - video/7rIHz0zrgWU
    - video/b54ehH4AlFA
    - video/fgWFOMPJd6U
    - video/mnxOSl1Y9PI
    - video/tDcT_51ktqo
  posts:
    - post/nataliekarolak-com/3653
    - post/waldo-be/317845
    - post/waldo-be/318371
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
  blog: 3
  guideline: 0
bc_forms: []
member_hash: 700c86efba6976ff1f579dab7d994f43d63ff87525ee22bc8315bb5d045228dd
narrative: generated
---

# Instrumenting with telemetry

> Instrumenting Business Central AL code with telemetry. It covers setting up extension telemetry, emitting custom events to Application Insights or the Event Log, using feature telemetry, and the platform events already logged for extensions. It answers how-to and which-method questions.

Path: [Development](../../development.md) > [Programming in the AL language](../programming-in-the-al-language.md) > Instrumenting with telemetry · tier official · system platform · narrative **unreviewed** (model text not yet checked)

## Overview

Telemetry lets you collect data about usage, errors, performance and lifecycle events from your Business Central application. The pages here cover the full path: the general concepts of adding telemetry signals, the setup needed for extensions, and the AL methods used to emit events.

Start with "Adding Telemetry to Your Business Central Application" for the overall picture, then "Set Up Extension Telemetry in Business Central" to connect an extension to Azure Application Insights through app.json. After that, choose how to log. Feature telemetry (the FeatureTelemetry codeunit) covers usage, errors and uptake. Custom events use Session.LogMessage for Application Insights, or SendTraceTag for the Event Log.

"Data logged to app/extension telemetry" lists the events the platform already emits, such as page interactions, REST API calls, report rendering, error dialogs and resource consumption. Check it before writing custom events. A subtopic holds two reference documentation pages.

## Key points

- Extension telemetry is set up by adding the applicationInsightsConnectionString property (or applicationInsightsKey) in app.json; the setup page mentions runtime 7.2.
- Session.LogMessage creates custom telemetry events for Application Insights, with dictionary and dimension overloads, TelemetryScope, DataClassification and CustomDimensions parameters.
- SendTraceTag sends custom trace events to the Business Central Server Event Log, with severity levels, categories and data classification; viewable in Event Viewer.
- Feature telemetry uses the FeatureTelemetry codeunit with LogUsage, LogError and LogUptake to track feature health and adoption.
- Uptake states are Discovered, Set up, Used and Undiscovered; a Telemetry Logger interface and custom dimensions allow filtering and comparing features.
- The platform already logs events for extensions: page interactions, REST API calls, report rendering, error dialogs and resource consumption.
- The Application Insights custom events page references version 29; the Event Log page references 2020 release wave 2.

## Subtopics

- [Reference documentation (telemetry)](instrumenting-with-telemetry/reference-documentation-telemetry.md) (2 pages)

## More Learn pages

- [Adding Telemetry to Your Business Central Application](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-instrument-application-for-telemetry): Instrument Business Central applications with telemetry to analyze usage, troubleshoot problems, and collect events in Application Insights or Windows logs.
- [Creating Custom Telemetry Events for Azure Application Insights](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-instrument-application-for-telemetry-app-insights): Add custom telemetry events to Business Central extensions with Session.LogMessage, choose their scope, and define dimensions for Application Insights.
- [Creating Custom Telemetry Events for the Event Log](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-instrument-application-for-telemetry-event-log): Create custom telemetry events with SendTraceTag in Business Central on-premises, view them in Windows event logs, and control logging severity.
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
- [Docs: What’s new in BC 27 for developers](../../../../posts/nataliekarolak-com/3653.md) (community post): "Enhanced properties including MaskType for sensitive data masking"
- [Handling Business Central Telemetry like a boss: iFacto Telemetry – Pt. 3](../../../../posts/waldo-be/317845.md) (community post): "extends Business Central's built-in telemetry capabilities by adding custom events"
- [Analyzing BC Telemetry with AI with the “BC Telemetry Buddy”](../../../../posts/waldo-be/318371.md) (community post): "query Business Central telemetry data through natural conversation using GitHub Copilot"
- [Microsoft presents: Index management](../../../../videos/1x3QyBX3swg.md) (video): "Telemetry for Index Changes; Just-in-time index enabling; Automatic index rebuild"
- [What's New: Telemetry (2023 release wave 2)](../../../../videos/7rIHz0zrgWU.md) (video): "Long running AL telemetry - total and exclusive time; Web service error troubleshooting guides"
- [What's Cooking in Business Central: Financial Reporting Enhancements (part 2): Telemetry](../../../../videos/b54ehH4AlFA.md) (video): "telemetry; financial reporting; application insights; row definitions"
- [Business Central Under the Hood 11: New Data-Driven Copilot Experiences – Summarize with Copilot](../../../../videos/fgWFOMPJd6U.md) (video): "Telemetry; prompt engineering; ai testing; grounding"
- [What's New: Key Updates in our Learning Content (documentation) For Developers (2024 release wave 1)](../../../../videos/mnxOSl1Y9PI.md) (video): "Telemetry for AL Developers; Security for Developers; Extensibility Overview"
- [What's New: Server and Database - A Faster Runtime (2023 release wave 2)](../../../../videos/tDcT_51ktqo.md) (video): "Exclusive Time Telemetry; Session Creation Performance Improvement"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
