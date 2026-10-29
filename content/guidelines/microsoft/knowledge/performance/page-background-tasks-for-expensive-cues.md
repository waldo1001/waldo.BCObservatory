---
id: guideline/microsoft/knowledge/performance/page-background-tasks-for-expensive-cues
type: guideline
title: Calculate expensive cues on a page background task
summary: Role-center cues and CardPart totals that run CalcFields, scans, or HTTP on the UI thread freeze the shell until they finish. Page background tasks exist to return the page immediately and fill the number later.
tier: official
language: en
tags:
  - page-background-task
  - cue
  - rolecenter
  - enqueuebackgroundtask
  - ui-thread
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:42.910Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 8b2bb394fef795551b074ccb48c23d5a6090fec2
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/page-background-tasks-for-expensive-cues.md
    title: "microsoft/BCQuality: Calculate expensive cues on a page background task"
    date: "2026-09-09"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-calcfields-method
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/174
    - change/bcquality/153
repo_path: microsoft/knowledge/performance/page-background-tasks-for-expensive-cues.md
layer: microsoft
kind: rule
domain: performance
bc_version:
  - 15..
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 2
identifiers:
  - CalcFields
  - OnAfterGetCurrRecord
  - OnAfterGetRecord
  - OnPageBackgroundTaskCompleted
  - OnOpenPage
---

# Calculate expensive cues on a page background task

> Role-center cues and CardPart totals that run CalcFields, scans, or HTTP on the UI thread freeze the shell until they finish. Page background tasks exist to return the page immediately and fill the number later.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/page-background-tasks-for-expensive-cues.md) · microsoft layer · performance · BC 15.. · tier official · derived

> Contributions welcome — open a PR to refine or extend this article.

## Description

Role-center cues and CardPart totals that run `CalcFields`, scans, or HTTP on the UI thread freeze the shell until they finish. Page background tasks exist to return the page immediately and fill the number later. Enqueue mechanics, cancellation, and the read-only child session are covered in `microsoft/knowledge/ui/page-background-tasks.md`. This file is the performance trigger: a cue whose value is not needed to *open* the page must not run on the render path.

## Best Practice

Bind the cue to a page variable, enqueue a read-only calculation from `OnAfterGetCurrRecord` (not `OnAfterGetRecord` on a list), and apply the result in `OnPageBackgroundTaskCompleted`. Show a placeholder until then.

See sample: [`page-background-tasks-for-expensive-cues.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/page-background-tasks-for-expensive-cues.good.al).

## Anti Pattern

`CalcFields` or a ledger `Count` in `OnOpenPage` / `OnAfterGetCurrRecord` of a CueGroup CardPart with no background task. The Role Center waits on SQL the user may never look at.

See sample: [`page-background-tasks-for-expensive-cues.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/page-background-tasks-for-expensive-cues.bad.al).

## Examples

- [Good: page-background-tasks-for-expensive-cues.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/page-background-tasks-for-expensive-cues.good.al)
- [Bad: page-background-tasks-for-expensive-cues.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/page-background-tasks-for-expensive-cues.bad.al)

## Names

- [Record.CalcFields(Any \[, Any,...\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-calcfields-method) (names CalcFields)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#153 Promote knowledge for Microsoft-owned review skills](../../../../changes/bcquality/153.md), 2026-09-03

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
