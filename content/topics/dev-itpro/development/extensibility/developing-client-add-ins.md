---
id: topic/dev-itpro/development/extensibility/developing-client-add-ins
type: topic
title: Developing client add-ins
summary: Developing client add-ins covers best practices for building control add-ins in Business Central. It answers questions about performance (AL trigger calls, payload size, throttling) and about styling (color palette, fonts, CSS, accessibility).
tier: official
language: en
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-28T11:04:11.643Z"
  flags: []
generated:
  at: "2026-10-28T11:04:14.111Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 888eec5943c54f44ab9ec7bc8291ed72768ccef330e2f0dd83204b63b628c331
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
    title: Control Add-in Styling for Business Central
    date: "2026-10-21"
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
  videos: []
  posts:
    - post/aardvarklabs-blog/3680
    - post/gerardorenteria-blog/12801
    - post/jpearson-blog/1583
    - post/yzhums-com/70008
    - post/yzhums-com/74975
    - post/yzhums-com/75073
  guidelines: []
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
  video: 0
  blog: 6
  guideline: 0
bc_forms: []
member_hash: 3d20b4404dfd3d105a8c3efeda9a8cb0aeb66c7a3cac01e9f0546de2b6c119f3
narrative: generated
---

# Developing client add-ins

> Developing client add-ins covers best practices for building control add-ins in Business Central. It answers questions about performance (AL trigger calls, payload size, throttling) and about styling (color palette, fonts, CSS, accessibility).

Path: [Development](../../development.md) > [Extensibility](../extensibility.md) > Developing client add-ins · tier official · system development · narrative reviewed (checked by Opus)

## Overview

This section is for developers who build control add-ins for the Business Central client. It has two pages, and neither depends on the other. One covers how an add-in should behave at run time, and the other covers how it should look and respond to users.

Start with the performance page if your add-in calls AL triggers often or sends a lot of data. Poor performance can cause reduced functionality warnings and request throttling. Then read the styling page to make the add-in match the client and stay usable for everyone, including keyboard users.

## Key points

- Invoke AL triggers only after previous calls have completed.
- Avoid excessive payloads between the add-in and AL.
- Poor add-in performance can lead to reduced functionality warnings and request throttling.
- The performance page covers callback handling, performance monitoring and error handling.
- Style add-ins with the Business Central color palette, font families and CSS so they fit the client.
- Test color contrast and keyboard interaction to keep add-ins accessible to all users.

## Learn pages

- [Control add-in performance best practices](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-control-addin-bestpractices): Learn how to provide the best possible experience and performance for control add-ins in Business Central.
- [Control Add-in Styling for Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-control-addin-style): Style control add-ins for Business Central with selected colors, fonts, and CSS examples, and learn how to check readability and keyboard interaction.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [Step-by-Step Guide to Custom User Controls in Business Central](../../../../posts/aardvarklabs-blog/3680.md) (community post): "Custom user controls in Business Central use HTML, JavaScript, and AL to create bespoke UI components"
- [📊 Mermaid Diagrams in Business Central: Dynamic Visual Intelligence 🎨](../../../../posts/gerardorenteria-blog/12801.md) (community post): "JavaScript control add-in bridge, and the Mermaid.js CDN"
- [Embed Visual Studio Code in Business Central](../../../../posts/jpearson-blog/1583.md) (community post): "Embedding Visual Studio Code's Monaco editor in a Business Central control add-in"
- [Dynamics 365 Business Central: Add a Scan Barcode action and scan multiple/Continious scanning (Invoke barcode scanning programmatically from AL)](../../../../posts/yzhums-com/70008.md) (community post): "invoke barcode scanning programmatically from AL"
- [Dynamics 365 Business Central: Add a calculator to the sales order page](../../../../posts/yzhums-com/74975.md) (community post): "add a calculator control to the sales order page using control add-in objects built with AL and JavaScript"
- [Dynamics 365 Business Central: How to add a Signature Pad to the Sales Order page (Capture and Save Customer Signatures)](../../../../posts/yzhums-com/75073.md) (community post): "Control add-in objects can load the public signature pad JavaScript library"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
