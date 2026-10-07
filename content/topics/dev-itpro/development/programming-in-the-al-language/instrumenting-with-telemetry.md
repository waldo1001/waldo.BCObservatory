---
id: topic/dev-itpro/development/programming-in-the-al-language/instrumenting-with-telemetry
type: topic
title: Instrumenting with telemetry
summary: "Telemetry in AL for Business Central: how to set up Azure Application Insights for an extension, emit custom events with LogMessage, log feature usage, errors and uptake, and what the platform already logs. It answers questions on instrumenting apps and monitoring them in production."
tier: official
language: en
system: platform
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:21:46.836Z"
  flags: []
generated:
  at: "2026-10-07T13:37:30.849Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 160d3acc876f1a90e81afa12e3cbceefffc0cb59af7e83c799c76928cdb93541
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
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-application-insights-for-extensions-data
    title: Data logged to app/extension telemetry
    date: "2024-02-09"
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
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-feature-telemetry
    title: Feature telemetry
    date: "2026-09-22"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/session/session-logmessage-string-string-verbosity-dataclassification-telemetryscope-dictionary[text,text]-method
    title: Session.LogMessage(Text, Text, Verbosity, DataClassification, TelemetryScope, Dictionary of [Text, Text]) Method
    date: "2024-08-26"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/session/session-logmessage-string-string-verbosity-dataclassification-telemetryscope-string-string-string-string-method
    title: Session.LogMessage(Text, Text, Verbosity, DataClassification, TelemetryScope, Text, Text [, Text] [, Text]) Method
    date: "2024-08-26"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-application-insights-for-extensions
    title: Setting up telemetry in an app/extension
    date: "2024-02-09"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-instrument-application-for-telemetry-app-insights
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-instrument-application-for-telemetry-event-log
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-application-insights-for-extensions-data
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-instrument-application-for-telemetry
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
  posts:
    - post/demiliani-com/13369
    - post/waldo-be/317845
  guidelines: []
  changes:
    - change/al-go/2229
    - change/al-go/2379
    - change/al-go/2395
    - change/bcapps/10573
    - change/bcapps/10897
    - change/bcapps/9307
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
  video: 2
  blog: 2
  guideline: 0
bc_forms: []
member_hash: 700c86efba6976ff1f579dab7d994f43d63ff87525ee22bc8315bb5d045228dd
narrative: generated
---

# Instrumenting with telemetry

> Telemetry in AL for Business Central: how to set up Azure Application Insights for an extension, emit custom events with LogMessage, log feature usage, errors and uptake, and what the platform already logs. It answers questions on instrumenting apps and monitoring them in production.

Path: [Development](../../development.md) > [Programming in the AL language](../programming-in-the-al-language.md) > Instrumenting with telemetry · tier official · system platform · narrative reviewed by Opus

## Overview

This section covers how an app or extension publisher gets monitoring data from production. It starts with an introduction to developing telemetry into an application, then setup of the connection to Azure Application Insights, then the ways to emit your own signals. It also covers the obsolete Event Log approach and the telemetry the platform already emits for apps and extensions.

## Key points

- Setting up telemetry in an extension uses applicationInsightsConnectionString or applicationInsightsKey in the app configuration; the page references runtime version 7.2.
- Custom events for Application Insights are emitted with the LogMessage method, which supports verbosity levels (Critical, Error, Warning, Normal, Verbose), DataClassification and TelemetryScope (extensionpublisher, all).
- Default dimensions are included in CustomDimensions for custom trace events.
- Feature telemetry uses the FeatureTelemetry codeunit from the Telemetry AL module: LogUsage, LogError and LogUptake.
- Uptake states are Discovered, Set up, Used and Undiscovered. The module also offers a Telemetry Logger interface, custom dimensions, and filtering and feature comparison through common telemetry dimensions.
- The SENDTRACETAG method is obsolete. It writes custom events to the server Event Log, which you can view in Event Viewer. The page references 2020 release wave 2 (v17).
- The platform already logs telemetry for apps and extensions: page interactions, REST API calls, report rendering, error dialogs and resource consumption.
- A reference documentation subtopic with 2 pages is also part of this section.

## Subtopics

- [Reference documentation (telemetry)](instrumenting-with-telemetry/reference-documentation-telemetry.md) (2 pages)

## More Learn pages

- [Creating custom telemetry events for Azure Application Insights](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-instrument-application-for-telemetry-app-insights): This article describes how to add code to application objects that enables you to log telemetry.
- [Creating custom telemetry events for the Event Log](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-instrument-application-for-telemetry-event-log): This topic describes how to add code to application objects that enables you to gather telemetry.
- [Data logged to app/extension telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-application-insights-for-extensions-data): Describes what data is sent to Azure Application Insights for app/extensions.
- [Developing telemetry into your Business Central application](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-instrument-application-for-telemetry): This article describes how to add code to application objects that enables you to gather telemetry.
- [Feature telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-feature-telemetry): Learn about the telemetry that you can emit from features in Business Central.
- [Setting up telemetry in an app/extension](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-application-insights-for-extensions): Describes how to configure an extension to send telemetry data to Azure Application Insights.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#2229 Surface empty BCPT results as a warning instead of silent success](../../../../changes/al-go/2229.md) (code change): "BCPT performance tests that run but produce no log entries now show a warning"
- [#2379 Avoid CI/CD runs for template SHA-only system updates](../../../../changes/al-go/2379.md) (code change): "Checks if files were actually updated or removed before persisting a new template SHA"
- [#2395 Prevent workflow telemetry failures from failing the workflow](../../../../changes/al-go/2395.md) (code change): "WorkflowPostProcess telemetry failures no longer cause the entire workflow to fail"
- [#10573 BC IQ - Adding data categorization](../../../../changes/bcapps/10573.md) (code change): "Data categorization support was added to the Data Classification Evaluation"
- [#10897 BC IQ - Update data sensitivities for policy history](../../../../changes/bcapps/10897.md) (code change): "Data sensitivities are updated to reflect recent changes to Business Skill"
- [#9307 Added missing event call so the search results page subscribes to the…](../../../../changes/bcapps/9307.md) (code change): "Added missing event subscription call to Data Search Result Records page"
- [Dynamics 365 Business Central: monitoring your customer’s network speed from telemetry.](../../../../posts/demiliani-com/13369.md) (community post): "hardware and network telemetry parameters in page views"
- [Handling Business Central Telemetry like a boss: iFacto Telemetry – Pt. 3](../../../../posts/waldo-be/317845.md) (community post): "extends Business Central's built-in telemetry capabilities by adding custom events"
- [What's New: Telemetry (2023 release wave 2)](../../../../videos/7rIHz0zrgWU.md) (video): "Long running AL telemetry - total and exclusive time; Long running AL SQL statistics"
- [What's Cooking in Business Central: Financial Reporting Enhancements (part 2): Telemetry](../../../../videos/b54ehH4AlFA.md) (video): "telemetry; financial reporting; application insights; row definitions"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
