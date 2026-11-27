---
id: topic/dev-itpro/development/extensibility/developing-client-add-ins
type: topic
title: Developing client add-ins
summary: Developing client add-ins covers guidance for building control add-ins in Business Central. It answers questions about performance best practices for calling AL triggers and handling payloads, and about styling add-ins with CSS colors, fonts, and text sizes to match the Business Central look.
tier: official
language: en
system: development
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-27T01:05:12.074Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: dcf32e7f8c35edc1a70f1a8a122cc5d7c2944a672afd36facc7db745805114d6
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-control-addin-bestpractices
    title: Control add-in performance best practices
    date: "2026-06-24"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-control-addin-style
    title: Control Add-in Style Guide for Business Central
    date: "2026-10-29"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-control-addin-bestpractices
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-control-addin-style
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development/extensibility
  localizations: []
  videos:
    - video/CBRjbRd7uLM
    - video/hS8yWS3bxWE
  posts:
    - post/aardvarklabs-blog/3680
    - post/jpearson-blog/1583
    - post/yzhums-com/70008
    - post/yzhums-com/74975
    - post/yzhums-com/75073
  guidelines: []
  changes:
    - change/bcquality/100
learn_toc_path:
  - Development
  - Extensibility
  - Developing client add-ins
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development/extensibility
children: []
coverage:
  learn: 2
  code: 0
  video: 2
  blog: 5
  guideline: 0
bc_forms: []
member_hash: 3d20b4404dfd3d105a8c3efeda9a8cb0aeb66c7a3cac01e9f0546de2b6c119f3
narrative: generated
---

# Developing client add-ins

> Developing client add-ins covers guidance for building control add-ins in Business Central. It answers questions about performance best practices for calling AL triggers and handling payloads, and about styling add-ins with CSS colors, fonts, and text sizes to match the Business Central look.

Path: [Development](../../development.md) > [Extensibility](../extensibility.md) > Developing client add-ins · tier official · system development · narrative **unreviewed** (model text not yet checked)

## Overview

This section holds two guidance pages for developers who build control add-ins for Business Central. One covers how add-ins should behave at runtime, the other how they should look. There are no subtopics.

Start with the performance best practices page if an add-in calls AL triggers or sends data between the client and AL. It explains that triggers should be invoked only after previous calls complete and that large payloads should be avoided. Poor performance can lead to reduced functionality warnings and request throttling.

Then use the Control Add-in Style Guide when the add-in shows charts, maps, or third-party content and should look consistent with Business Central. It supplies CSS color palettes, font families, text sizes, status and chart colors, plus contrast and keyboard focus guidance.

## Key points

- Invoke AL triggers only after previous calls have completed.
- Avoid excessive payloads between the add-in and AL.
- Poor add-in performance can trigger reduced functionality warnings and request throttling.
- Performance guidance covers callback handling, payload optimization, monitoring, and error handling.
- The style guide gives CSS color palettes, font families, and text sizes that match Business Central.
- Status colors and chart colors are defined for add-ins that display charts, maps, or third-party content.
- The style guide includes contrast guidance and keyboard focus indicators.

## Learn pages

- [Control add-in performance best practices](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-control-addin-bestpractices): Learn how to provide the best possible experience and performance for control add-ins in Business Central.
- [Control Add-in Style Guide for Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-control-addin-style): Style control add-ins for Dynamics 365 Business Central with CSS. Choose colors and fonts, and build readable controls with keyboard access.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#100 Add P0 integration and control add-in runtime guidance](../../../../changes/bcquality/100.md) (code change): "Control add-in AJAX requests for packaged resources need withCredentials"
- [Step-by-Step Guide to Custom User Controls in Business Central](../../../../posts/aardvarklabs-blog/3680.md) (community post): "Custom user controls in Business Central use HTML, JavaScript, and AL to create bespoke UI components"
- [Embed Visual Studio Code in Business Central](../../../../posts/jpearson-blog/1583.md) (community post): "Embedding Visual Studio Code's Monaco editor in a Business Central control add-in"
- [Dynamics 365 Business Central: Add a Scan Barcode action and scan multiple/Continious scanning (Invoke barcode scanning programmatically from AL)](../../../../posts/yzhums-com/70008.md) (community post): "invoke barcode scanning programmatically from AL"
- [Dynamics 365 Business Central: Add a calculator to the sales order page](../../../../posts/yzhums-com/74975.md) (community post): "add a calculator control to the sales order page using control add-in objects built with AL and JavaScript"
- [Dynamics 365 Business Central: How to add a Signature Pad to the Sales Order page (Capture and Save Customer Signatures)](../../../../posts/yzhums-com/75073.md) (community post): "Control add-in objects can load the public signature pad JavaScript library"
- [Building the World's Best ControlAddIn for AL code in Business Central](../../../../videos/CBRjbRd7uLM.md) (video): "Building the World's Best ControlAddIn for AL code in Business Central"
- [What's New: Telemetry (2025 release wave 1)](../../../../videos/hS8yWS3bxWE.md) (video): "Client Add-ins Exception Telemetry; Server-side Certificate Validation Telemetry"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
