---
id: topic/dev-itpro/development/extensibility/developing-client-add-ins
type: topic
title: Developing client add-ins
summary: Developing client add-ins covers guidance for building control add-ins in Business Central. It answers questions about performance practices, such as AL trigger invocation, callbacks and payload size, and about visual styling, such as colors, typography and CSS.
tier: official
language: en
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-07T05:22:58.998Z"
  flags: []
generated:
  at: "2026-10-07T13:37:30.849Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 9cb4221d3b5dfc505fb6a851ea88ab386bd3c810ce886ba6bf7d60bc9cd3d83f
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
    title: Control Add-in Style Guide
    date: "2021-04-01"
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
  video: 0
  blog: 3
  guideline: 0
bc_forms: []
member_hash: 3d20b4404dfd3d105a8c3efeda9a8cb0aeb66c7a3cac01e9f0546de2b6c119f3
narrative: generated
---

# Developing client add-ins

> Developing client add-ins covers guidance for building control add-ins in Business Central. It answers questions about performance practices, such as AL trigger invocation, callbacks and payload size, and about visual styling, such as colors, typography and CSS.

Path: [Development](../../development.md) > [Extensibility](../extensibility.md) > Developing client add-ins · tier official · system development · narrative reviewed by Opus

## Overview

This section has two pages for developers who build control add-ins that run in the Business Central client. One page covers how an add-in should behave at runtime. The other covers how it should look.

The performance page explains how to call AL triggers and handle callbacks, and how to keep payloads small. Poor performance can lead to reduced functionality warnings and request throttling. The style guide gives the CSS color palette, typography, font families, chart colors and design principles. Following it helps an add-in blend into the client with consistent theming and accessibility.

Start with the performance page to avoid throttling and warnings, then use the style guide while you design the add-in's interface. The pages do not depend on each other, so read them in either order.

## Key points

- Invoke AL triggers only after previous calls have completed.
- Avoid excessive payloads when passing data between the add-in and AL.
- Poor add-in performance can trigger reduced functionality warnings and request throttling.
- The performance page covers callback handling, payload optimization, performance monitoring and error handling.
- The style guide defines the color palette, typography and font families for add-ins.
- The style guide includes chart colors and CSS styling guidance.
- Design principles in the style guide aim for consistent theming and accessibility within Business Central.

## Learn pages

- [Control add-in performance best practices](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-control-addin-bestpractices): Learn how to provide the best possible experience and performance for control add-ins in Business Central.
- [Control Add-in Style Guide](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-control-addin-style): Learn about the style guide for control add-ins in Dynamics 365 Finance.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#100 Add P0 integration and control add-in runtime guidance](../../../../changes/bcquality/100.md) (code change): "Control add-in AJAX requests with proper credential credentials handling"
- [Step-by-Step Guide to Custom User Controls in Business Central](../../../../posts/aardvarklabs-blog/3680.md) (community post): "Custom user controls in Business Central use HTML, JavaScript, and AL to create bespoke UI components"
- [📊 Mermaid Diagrams in Business Central: Dynamic Visual Intelligence 🎨](../../../../posts/gerardorenteria-blog/12801.md) (community post): "three-layer architecture, a JavaScript control add-in bridge, and the external Mermaid.js"
- [Embed Visual Studio Code in Business Central](../../../../posts/jpearson-blog/1583.md) (community post): "Monaco editor can be embedded in a Business Central control add-in"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
