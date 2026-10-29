---
id: guideline/microsoft/knowledge/reporting/reportextension-report-triggers-run-after-base-triggers
type: guideline
title: ReportExtension report triggers run after base report triggers
summary: OnPreReport and OnPostReport on a ReportExtension run after the corresponding triggers on the base report. An extension OnPreReport cannot prepare state that the base OnPreReport must consume, and an extension OnPostReport cannot affect finalization that the base OnPostReport has already completed.
tier: official
language: en
tags:
  - reportextension
  - report
  - trigger-order
  - onprereport
  - onpostreport
  - base-report
  - integration-event
system: reporting
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:10.071Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 414752a17d4752c43cddf8c8f63e64800017a1f4
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/reporting/reportextension-report-triggers-run-after-base-triggers.md
    title: "microsoft/BCQuality: ReportExtension report triggers run after base report triggers"
    date: "2026-09-15"
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
    - change/bcquality/183
repo_path: microsoft/knowledge/reporting/reportextension-report-triggers-run-after-base-triggers.md
layer: microsoft
kind: rule
domain: reporting
bc_version:
  - 18..
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 2
identifiers:
  - OnPreReport
  - OnPostReport
---

# ReportExtension report triggers run after base report triggers

> OnPreReport and OnPostReport on a ReportExtension run after the corresponding triggers on the base report. An extension OnPreReport cannot prepare state that the base OnPreReport must consume, and an extension OnPostReport cannot affect finalization that the base OnPostReport has already completed.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/reporting/reportextension-report-triggers-run-after-base-triggers.md) · microsoft layer · reporting · BC 18.. · tier official · derived

## Description

`OnPreReport` and `OnPostReport` on a ReportExtension run after the corresponding triggers on the base report. An extension `OnPreReport` cannot prepare state that the base `OnPreReport` must consume, and an extension `OnPostReport` cannot affect finalization that the base `OnPostReport` has already completed.

## Best Practice

Use a base-report event at the required execution point when extension logic must run before or within a base trigger. Use ReportExtension `OnPreReport` and `OnPostReport` only for work that is correct after the corresponding base trigger. Report a violation only when the base trigger and extension dependency are both visible or otherwise established.

See sample: [`reportextension-report-triggers-run-after-base-triggers.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/reporting/reportextension-report-triggers-run-after-base-triggers.good.al).

## Anti Pattern

Initialize data in a ReportExtension `OnPreReport` and rely on the base report's `OnPreReport` to consume it, or perform extension `OnPostReport` work that the base `OnPostReport` needed beforehand. The base trigger has already run.

See sample: [`reportextension-report-triggers-run-after-base-triggers.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/reporting/reportextension-report-triggers-run-after-base-triggers.bad.al).

## References

Report extension object — https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-report-ext-object

## Examples

- [Good: reportextension-report-triggers-run-after-base-triggers.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/reporting/reportextension-report-triggers-run-after-base-triggers.good.al)
- [Bad: reportextension-report-triggers-run-after-base-triggers.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/reporting/reportextension-report-triggers-run-after-base-triggers.bad.al)

## Changed by

- [#183 Add reporting review guidance and evaluation fixtures](../../../../changes/bcquality/183.md), 2026-09-15

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
