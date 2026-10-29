---
id: guideline/microsoft/knowledge/ui/page-background-tasks
type: guideline
title: Offload Slow Read-Only Page Calculations To Background Tasks
summary: Pages that compute statistics, aggregates, or external lookups inline block the page from rendering until the calculation finishes, producing a visible freeze on FactBoxes, cue tiles, and calculated fields.
tier: official
language: en
tags:
  - enqueuebackgroundtask
  - async-calculation
  - child-session
  - factbox
  - cue-tile
  - onaftergetcurrrecord
  - responsive-page
  - read-only
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:18.274Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: c4cccb8dca03a0389e5ccbdc31637e28ed1187fd
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/page-background-tasks.md
    title: "microsoft/BCQuality: Offload Slow Read-Only Page Calculations To Background Tasks"
    date: "2026-07-15"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/testpage/testpage-runpagebackgroundtask-method
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/page/page-enqueuebackgroundtask-method
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/108
    - change/bcquality/105
repo_path: microsoft/knowledge/ui/page-background-tasks.md
layer: microsoft
kind: rule
domain: ui
bc_version:
  - 15..
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 0
identifiers:
  - OnPageBackgroundTaskCompleted
  - OnAfterGetCurrRecord
  - OnPageBackgroundTaskError
  - RunPageBackgroundTask
  - OnAfterGetRecord
  - EnqueueBackgroundTask
  - OnOpenPage
---

# Offload Slow Read-Only Page Calculations To Background Tasks

> Pages that compute statistics, aggregates, or external lookups inline block the page from rendering until the calculation finishes, producing a visible freeze on FactBoxes, cue tiles, and calculated fields.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/page-background-tasks.md) · microsoft layer · ui · BC 15.. · tier official · derived

## Description
Pages that compute statistics, aggregates, or external lookups inline block the page from rendering until the calculation finishes, producing a visible freeze on FactBoxes, cue tiles, and calculated fields. Business Central provides page background tasks: `CurrPage.EnqueueBackgroundTask` runs a dedicated codeunit in a read-only child session and returns values via `OnPageBackgroundTaskCompleted`, so the page opens immediately and fills in computed values as they arrive. This matters because users should never wait on a calculation they may not need. The mechanism has specific rules that are easy to get wrong, which is why it warrants an explicit pattern.

## Best Practice
Move any noticeable read-only computation off the synchronous render path into a background task. Enqueue from `OnAfterGetCurrRecord` so the task is tied to the currently focused record, and pass small payloads through the `Dictionary of [Text, Text]` input/output, converting types with `Format` and `Evaluate`. Keep each task focused on one value or a small related set rather than one large task, and show a placeholder until results land. Because tasks auto-cancel when the page closes, the record changes, or a same-ID task is re-enqueued, always supply sensible defaults and handle the timeout path in `OnPageBackgroundTaskError` — never let critical functionality depend on completion. For tests, drive the task synchronously with `RunPageBackgroundTask`.

## Anti Pattern
Enqueuing from `OnAfterGetRecord` on a list page fires the task for every row, and each cancels the instant the selection moves to the next row — pure wasted child-session churn; a reviewer spots `EnqueueBackgroundTask` called from `OnAfterGetRecord` (or from `OnOpenPage`, where the record context is not yet stable). The other tell is a task codeunit attempting a database write or `Modify`: background tasks run read-only and the write fails at runtime. Inline heavy calculation directly in `OnAfterGetCurrRecord` with no task at all is the baseline smell — it reintroduces the page freeze the feature exists to remove.

## Names

- [TestPage.RunPageBackgroundTask(Integer \[, var Dictionary of \[Text, Text\]\] \[, Boolean\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/testpage/testpage-runpagebackgroundtask-method) (names RunPageBackgroundTask)
- [Page.EnqueueBackgroundTask(var Integer, Integer \[, var Dictionary of \[Text, Text\]\] \[, Integer\] \[, PageBackgroundTaskErrorLevel\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/page/page-enqueuebackgroundtask-method) (names EnqueueBackgroundTask)

## Changed by

- [#108 Complete AL review knowledge readiness](../../../../changes/bcquality/108.md), 2026-07-15
- [#105 Promote validated community knowledge](../../../../changes/bcquality/105.md), 2026-07-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
