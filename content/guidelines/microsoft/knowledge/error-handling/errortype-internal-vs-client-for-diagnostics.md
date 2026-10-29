---
id: guideline/microsoft/knowledge/error-handling/errortype-internal-vs-client-for-diagnostics
type: guideline
title: Set ErrorInfo.ErrorType to Internal for defects you want in telemetry but not in the user's face
summary: ErrorInfo.ErrorType controls where an error's message is shown. With ErrorType::Client — the behaviour of a normal Error — the message is both shown to the user and sent to telemetry.
tier: official
language: en
tags:
  - errorinfo
  - errortype
  - internal
  - client
  - telemetry
  - diagnostics
  - generic-message
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:25.737Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: ece3bafebf06cac7e814dd3d720c78f61f07ca9e
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/error-handling/errortype-internal-vs-client-for-diagnostics.md
    title: "microsoft/BCQuality: Set ErrorInfo.ErrorType to Internal for defects you want in telemetry but not in the user's face"
    date: "2026-09-09"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/errorinfo/errorinfo-errortype-method
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/174
    - change/bcquality/99
repo_path: microsoft/knowledge/error-handling/errortype-internal-vs-client-for-diagnostics.md
layer: microsoft
kind: rule
domain: error-handling
bc_version:
  - 14..
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 2
identifiers:
  - ErrorType
  - ErrorInfo
---

# Set ErrorInfo.ErrorType to Internal for defects you want in telemetry but not in the user's face

> ErrorInfo.ErrorType controls where an error's message is shown. With ErrorType::Client — the behaviour of a normal Error — the message is both shown to the user and sent to telemetry.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/error-handling/errortype-internal-vs-client-for-diagnostics.md) · microsoft layer · error-handling · BC 14.. · tier official · derived

## Description

`ErrorInfo.ErrorType` controls where an error's message is shown. With `ErrorType::Client` — the behaviour of a normal `Error` — the message is both shown to the user and sent to telemetry. With `ErrorType::Internal` the user sees a generic message while the specific message you set is sent to telemetry only. The distinction matters for *unexpected* failures — a broken invariant, a failed internal assertion, a "this should never happen" branch — where the technical detail helps the partner diagnose the defect but would only confuse the end user. LLMs are unaware `ErrorType` exists, so they expose raw internal-failure text directly to users.

## Best Practice

Reserve `ErrorType::Internal` for errors the user cannot act on: corrupted internal state, an unreachable branch, a contract a caller violated. Set a precise, detail-rich `Message` for telemetry, raise it via `Error(ErrorInfo)`, and let the platform show the user a generic dialog. Keep `ErrorType::Client` (or a plain `Error`) for failures the user is expected to read and resolve — validation messages, missing setup, business-rule violations. The test is simple: if the message only makes sense to a developer, mark it `Internal`.

See sample: [`errortype-internal-vs-client-for-diagnostics.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/error-handling/errortype-internal-vs-client-for-diagnostics.good.al).

## Anti Pattern

Raising an internal failure with a plain `Error('Unexpected state: ledger bucket %1 not initialized', BucketId)`. The user is shown a technical message they can do nothing about, and the signal is buried in a generic error rather than carried as structured telemetry detail. Detection: an `Error` whose wording targets a developer ("unexpected", "should not happen", raw internal identifiers) raised with default `Client` visibility instead of an `ErrorInfo` marked `ErrorType::Internal`.

See sample: [`errortype-internal-vs-client-for-diagnostics.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/error-handling/errortype-internal-vs-client-for-diagnostics.bad.al).

## Examples

- [Good: errortype-internal-vs-client-for-diagnostics.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/error-handling/errortype-internal-vs-client-for-diagnostics.good.al)
- [Bad: errortype-internal-vs-client-for-diagnostics.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/error-handling/errortype-internal-vs-client-for-diagnostics.bad.al)

## Names

- [ErrorInfo.ErrorType(\[ErrorType\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/errorinfo/errorinfo-errortype-method) (names ErrorType)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#99 Add lifecycle error and privacy knowledge](../../../../changes/bcquality/99.md), 2026-07-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
