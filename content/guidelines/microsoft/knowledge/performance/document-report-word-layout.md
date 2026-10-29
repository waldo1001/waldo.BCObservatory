---
id: guideline/microsoft/knowledge/performance/document-report-word-layout
type: guideline
title: Document reports should default to a Word layout, not RDLC
summary: "For a document report — an invoice, statement, order confirmation, or any report meant to be printed, emailed, or exported as a single-record document — Microsoft's own guidance recommends a Word rendering layout over RDLC: \"RDL layouts can result in slower performance with document reports,…"
tier: official
language: en
tags:
  - report-layout
  - word-layout
  - rdlc
  - document-report
  - sandbox-app-domain
  - rendering
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:54.389Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 06159aad9542796d6da4a5287037e92565bce2e9
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/document-report-word-layout.md
    title: "microsoft/BCQuality: Document reports should default to a Word layout, not RDLC"
    date: "2026-09-29"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/156
repo_path: microsoft/knowledge/performance/document-report-word-layout.md
layer: microsoft
kind: rule
domain: performance
bc_version:
  - all
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 2
identifiers: []
---

# Document reports should default to a Word layout, not RDLC

> For a document report — an invoice, statement, order confirmation, or any report meant to be printed, emailed, or exported as a single-record document — Microsoft's own guidance recommends a Word rendering layout over RDLC: "RDL layouts can result in slower performance with document reports,…

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/document-report-word-layout.md) · microsoft layer · performance · BC all · tier official · derived

> Contributions welcome — open a PR to refine or extend this article.

## Description

For a document report — an invoice, statement, order confirmation, or any report meant to be printed, emailed, or exported as a single-record document — Microsoft's own guidance recommends a `Word` rendering layout over `RDLC`: "RDL layouts can result in slower performance with document reports, regarding actions that are related to the user interface (for example, like sending emails) compared to Word layouts," and "we recommend that you design Word layouts instead of RDL" for this report shape (see Sources). This is a documented recommendation, not a universal guarantee that Word outperforms RDLC for every workload, and it does not apply to every report: tabular/list reports with heavy aggregation or calculated columns are still often a better fit for RDLC or Excel.

## Best Practice

For document reports, prefer a `Word` layout (`DefaultRenderingLayout = Word`) over RDLC unless specific layout requirements favor RDLC. Reserve RDLC (or Excel) for reports that represent a data listing rather than a document.

## Sources

- [Report Design Overview](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/devenv-report-design-overview)
- [Creating an RDL layout report](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/devenv-report-performance)
- [Troubleshooting reports / Report performance](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/devenv-reports-troubleshooting)

See sample: [`document-report-word-layout.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/document-report-word-layout.good.al).

## Anti Pattern

Defaulting a document report's layout to RDLC out of habit or because a template happened to use it. This inherits RDLC's sandboxed-app-domain performance cost with no benefit tied to the report's actual content or calculation needs.

See sample: [`document-report-word-layout.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/document-report-word-layout.bad.al).

## Examples

- [Good: document-report-word-layout.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/document-report-word-layout.good.al)
- [Bad: document-report-word-layout.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/document-report-word-layout.bad.al)

## Changed by

- [#156 18 AL/BC patterns: style, data-modeling, web-services, appsource, breaking-changes, performance, testing](../../../../changes/bcquality/156.md), 2026-09-29

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
