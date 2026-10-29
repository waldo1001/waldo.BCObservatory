---
id: guideline/microsoft/knowledge/error-handling/prefer-errorinfo-for-actionable-errors
type: guideline
title: Prefer ErrorInfo with recommended actions over a plain Error for recoverable failures
summary: "A plain Error('text') ends the operation with a dead-end dialog: the user reads the message but the system offers no way forward."
tier: official
language: en
tags:
  - errorinfo
  - actionable-errors
  - fix-it
  - show-it
  - addaction
  - addnavigationaction
  - error-dialog
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:26.521Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 082e118ddbc88b52927393c1cc2e156fbd4a763a
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/error-handling/prefer-errorinfo-for-actionable-errors.md
    title: "microsoft/BCQuality: Prefer ErrorInfo with recommended actions over a plain Error for recoverable failures"
    date: "2026-09-09"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/errorinfo/errorinfo-detailedmessage-method
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/174
repo_path: microsoft/knowledge/error-handling/prefer-errorinfo-for-actionable-errors.md
layer: microsoft
kind: rule
domain: error-handling
bc_version:
  - 23..
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 2
identifiers:
  - ErrorInfo
  - AddAction
  - AddNavigationAction
  - PageNo
  - DetailedMessage
  - RecordId
---

# Prefer ErrorInfo with recommended actions over a plain Error for recoverable failures

> A plain Error('text') ends the operation with a dead-end dialog: the user reads the message but the system offers no way forward.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/error-handling/prefer-errorinfo-for-actionable-errors.md) · microsoft layer · error-handling · BC 23.. · tier official · derived

## Description

A plain `Error('text')` ends the operation with a dead-end dialog: the user reads the message but the system offers no way forward. The `ErrorInfo` data type, combined with the actionable-errors framework added in 2023 release wave 2, lets an error carry a recommended action the user can take to unblock themselves without leaving their task. Two kinds exist: a **Fix-it** action (`AddAction`), used when the code already knows the correct value and can apply it in one step, and a **Show-it** action (`AddNavigationAction` together with `PageNo`), used when the correction lives on a related record the user should be taken to. An error dialog renders at most two recommended actions. LLMs trained on older AL almost always emit a bare `Error(...)` and rarely reach for `ErrorInfo`, so this guidance is remedial.

## Best Practice

Build an `ErrorInfo`, set `Title`, `Message`, and `DetailedMessage`, then attach the action that matches the situation. For a Fix-it, call `AddAction(Caption, Codeunit::Handler, 'MethodName')` where the handler method (which receives the `ErrorInfo`) applies the known-good value; phrase the caption as "Set value to …". For a Show-it, set `PageNo := Page::"…"`, set `RecordId` so navigation opens the right record, and call `AddNavigationAction('Show …')`. Raise it with `Error(ErrorInfo)`. Reserve recommended actions for cases where the solution is genuinely known and the user has permission to apply it.

See sample: [`prefer-errorinfo-for-actionable-errors.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/error-handling/prefer-errorinfo-for-actionable-errors.good.al).

## Anti Pattern

Surfacing a recoverable validation failure with `Error('You cannot invoice more than %1 units.', MaxQty)` and nothing else. The user is blocked with no offered remedy even though the code knows the maximum and could set it. The detection signal: an `Error` call in a validation or posting path whose message names a specific correct value or a specific related page, with no surrounding `ErrorInfo`, `AddAction`, or `AddNavigationAction`. Replace it with an `ErrorInfo` that carries the corresponding Fix-it or Show-it action.

See sample: [`prefer-errorinfo-for-actionable-errors.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/error-handling/prefer-errorinfo-for-actionable-errors.bad.al).

## Examples

- [Good: prefer-errorinfo-for-actionable-errors.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/error-handling/prefer-errorinfo-for-actionable-errors.good.al)
- [Bad: prefer-errorinfo-for-actionable-errors.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/error-handling/prefer-errorinfo-for-actionable-errors.bad.al)

## Names

- [ErrorInfo.DetailedMessage(\[Text\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/errorinfo/errorinfo-detailedmessage-method) (names DetailedMessage)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
