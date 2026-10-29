---
id: guideline/microsoft/knowledge/privacy/error-vs-message-telemetry-logging
type: guideline
title: Error dialogs emit Error method trace telemetry
summary: When Error displays a dialog, Business Central emits the RT0030 Error method trace telemetry signal. Message, Confirm, and Notification do not emit that Error method trace signal.
tier: official
language: en
tags:
  - error
  - message
  - confirm
  - notification
  - telemetry
  - logging
  - ui-dialog
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:23.371Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 2654dff5c92eeefbfddb3ca5675a32d960c5f109
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/error-vs-message-telemetry-logging.md
    title: "microsoft/BCQuality: Error dialogs emit Error method trace telemetry"
    date: "2026-07-14"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-testfield-joker-textconst-method
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/92
repo_path: microsoft/knowledge/privacy/error-vs-message-telemetry-logging.md
layer: microsoft
kind: rule
domain: privacy
bc_version:
  - 20..
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 0
identifiers:
  - TextConst
---

# Error dialogs emit Error method trace telemetry

> When Error displays a dialog, Business Central emits the RT0030 Error method trace telemetry signal. Message, Confirm, and Notification do not emit that Error method trace signal.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/privacy/error-vs-message-telemetry-logging.md) · microsoft layer · privacy · BC 20.. · tier official · derived

## Description

When `Error` displays a dialog, Business Central emits the RT0030 Error method trace telemetry signal. `Message`, `Confirm`, and `Notification` do not emit that Error method trace signal. For RT0030, the actual AL error string is included only when the first `Error` argument is a `Label` or `TextConst`; other first-argument types produce generic guidance instead of the dynamic string.

## Best Practice

Use a `Label` or `TextConst` as the direct first argument to `Error` so telemetry contains a stable, classified message. Review user-facing substitution values for UI appropriateness. Do not treat `Message`, `Confirm`, or `Notification` content as though it were automatically copied into RT0030.

## Anti Pattern

Claiming that every rendered `Error` string is written verbatim to telemetry, or that `Message`, `Confirm`, and `Notification` automatically feed the Error method trace. Both overstate the platform behavior.

## Names

- [Record.TestField(Any, TextConst) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-testfield-joker-textconst-method) (names TextConst)

## Changed by

- [#92 Correct security and privacy knowledge guidance](../../../../changes/bcquality/92.md), 2026-07-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
