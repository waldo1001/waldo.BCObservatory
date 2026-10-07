---
id: topic/dev-itpro/development/programming-in-the-al-language/developing-printer-extensions
type: topic
title: Developing printer extensions
summary: Printer extensions in Business Central let AL developers send reports directly to web-connected printers. The section answers questions about the OnAfterSetupPrinters and OnAfterDocumentPrintReady events, printer and report payloads, and routing reports to email, physical, or other printer endpoints.
tier: official
language: en
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-07T05:23:17.645Z"
  flags: []
generated:
  at: "2026-10-07T05:23:51.651Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 23af92b7a3dafce71eff05dd81b8b8b5d44eca9af502b7734e5759fdba1ea543
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-reports-create-printer-extension
    title: Creating a Printer Extension
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-reports-printing
    title: Developing printer extensions in Business Central
    date: "2024-06-20"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-reports-create-printer-extension
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-reports-printing
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development/programming-in-the-al-language
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Development
  - Programming in the AL language
  - Developing printer extensions
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development/programming-in-the-al-language
children: []
coverage:
  learn: 2
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 173230a2e03f8df9ef69e108a1d0ab8989b7603dd69fbdaf0c4b896689fb6f15
narrative: generated
---

# Developing printer extensions

> Printer extensions in Business Central let AL developers send reports directly to web-connected printers. The section answers questions about the OnAfterSetupPrinters and OnAfterDocumentPrintReady events, printer and report payloads, and routing reports to email, physical, or other printer endpoints.

Path: [Development](../../development.md) > [Programming in the AL language](../programming-in-the-al-language.md) > Developing printer extensions · tier official · system development · narrative reviewed by Opus

## Overview

A printer extension is an AL extension that subscribes to events published by the Report Management codeunit. It registers custom printers and then receives the finished report so it can send it to a web-connected printer, an email address, or another endpoint.

The section has two pages and no subtopics. "Developing printer extensions in Business Central" gives the overview: what a printer extension is and which events it uses. "Creating a Printer Extension" covers the building steps: setting up printers, the JSON printer payload, paper tray configuration, the Printer Selections page, and routing reports.

Start with the overview page to understand the two events, then follow the creation page to implement them.

## Key points

- Printer extensions send reports directly to web-connected printers.
- Subscribe to OnAfterSetupPrinters to define and register custom printers.
- Subscribe to OnAfterDocumentPrintReady to receive the report and route it to its destination.
- Both events are published by the Report Management codeunit.
- Printers are described with a JSON printer payload, which can include paper tray configuration.
- Printers added this way can be chosen on the Printer Selections page.
- Reports can be routed to email, physical printers, or other printer endpoints.

## Learn pages

- [Creating a Printer Extension](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-reports-create-printer-extension): Describes how to create an extension that sets up cloud printers.
- [Developing printer extensions in Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-reports-printing): Dynamics 365 Business Central supports printing reports to cloud-based printers.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
