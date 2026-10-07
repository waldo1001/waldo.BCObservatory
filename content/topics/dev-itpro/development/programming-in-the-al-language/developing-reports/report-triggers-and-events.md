---
id: topic/dev-itpro/development/programming-in-the-al-language/developing-reports/report-triggers-and-events
type: topic
title: Report triggers and events
summary: "Report triggers and events in AL for Business Central: events raised during report generation, printing, and export. Answers questions about patching documents, setting up printers, custom rendering, and customizing export filenames."
tier: official
language: en
system: reporting
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:22:38.147Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 943d75fdebb061c4580dcc95b54f5c903740ef5f4712be5e20baa9bee8a59ede
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-onafterdocumentprintready-event
    title: OnAfterDocumentPrintReady Event
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-onafterdocumentready-event
    title: OnAfterDocumentReady Event
    date: "2023-03-13"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-onafterintermediatedocumentready-event
    title: OnAfterIntermediateDocumentReady Event
    date: "2023-03-10"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-onaftersetupprinters-event
    title: OnAfterSetupPrinters Event
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-oncustomdocumentmergerex-event
    title: OnCustomDocumentMergerEx event
    date: "2023-12-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-ongetfilename-event
    title: OnGetFilename Event
    date: "2025-06-11"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-report-triggers
    title: Report Triggers and Runtime Operations
    date: "2021-05-17"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-onafterdocumentprintready-event
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-onafterdocumentready-event
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-onafterintermediatedocumentready-event
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-onaftersetupprinters-event
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-oncustomdocumentmergerex-event
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-ongetfilename-event
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-report-triggers
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development/programming-in-the-al-language/developing-reports
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Development
  - Programming in the AL language
  - Developing reports
  - Report triggers and events
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development/programming-in-the-al-language/developing-reports
children: []
coverage:
  learn: 7
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: d16d28c5aab1a326b93bc04eaa396b88a50db7cbbe6dc7f16de727aa757cb6ca
narrative: generated
---

# Report triggers and events

> Report triggers and events in AL for Business Central: events raised during report generation, printing, and export. Answers questions about patching documents, setting up printers, custom rendering, and customizing export filenames.

Path: [Development](../../../development.md) > [Programming in the AL language](../../programming-in-the-al-language.md) > [Developing reports](../developing-reports.md) > Report triggers and events · tier official · system reporting · narrative reviewed by Opus

## Overview

This section documents the events a developer can subscribe to in order to change how reports are generated, delivered, and named. The events cover the report life cycle: setting up printers, rendering, intermediate and final document handling, printing, and file naming.

The pages are independent reference topics, one per event. OnAfterDocumentReady and OnAfterIntermediateDocumentReady are for document patching, and the latter works on intermediate artifacts such as XML or Word files. OnCustomDocumentMergerEx handles custom rendering. OnAfterSetupPrinters and OnAfterDocumentPrintReady cover printer extensions. OnGetFilename customizes export file names.

Start with the event that matches your scenario. For a printer extension, read OnAfterSetupPrinters first, then OnAfterDocumentPrintReady. For changes to generated output, begin with OnAfterDocumentReady.

## Key points

- OnAfterDocumentPrintReady is raised when a user selects print on a report request page, and is used to send the report to a target extension printer.
- OnAfterDocumentReady lets you modify generated report artifacts before they are saved or printed, by subscribing in the ReportManagement codeunit.
- OnAfterIntermediateDocumentReady intercepts intermediate artifacts such as XML or Word files, for document patching and testing.
- OnAfterSetupPrinters defines printers with payload settings: paper sizes, trays, duplex, color, and default copies.
- OnCustomDocumentMergerEx supports custom rendering using the dataset, layout, and report JSON payload parameters.
- OnGetFilename is an integration event in codeunit 44 ReportManagement for naming PDF, Excel, or Word exports.
- Several events use a report payload and relate to SaveAs, SendTo actions, and print.

## Learn pages

- [OnAfterDocumentPrintReady Event](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-onafterdocumentprintready-event): Describe the OnAfterDocumentPrintReady Event in Business Central.
- [OnAfterDocumentReady Event](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-onafterdocumentready-event): Describe the OnAfterDocumentReady Event in Business Central.
- [OnAfterIntermediateDocumentReady Event](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-onafterintermediatedocumentready-event): Describe the OnAfterIntermediateDocumentReady Event in Business Central.
- [OnAfterSetupPrinters Event](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-onaftersetupprinters-event): Describe the OnAfterSetupPrinters Event in Business Central.
- [OnCustomDocumentMergerEx event](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-oncustomdocumentmergerex-event): Describe the OnCustomDocumentMergerEx Event in Business Central.
- [OnGetFilename Event](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-ongetfilename-event): Learn about the OnGetFilename event in Business Central.
- [Report Triggers and Runtime Operations](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-report-triggers): Report triggers in AL for Business Central.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
