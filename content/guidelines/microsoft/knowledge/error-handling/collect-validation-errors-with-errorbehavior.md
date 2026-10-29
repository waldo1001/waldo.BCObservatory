---
id: guideline/microsoft/knowledge/error-handling/collect-validation-errors-with-errorbehavior
type: guideline
title: Collect validation errors with ErrorBehavior::Collect and handle the collected list
summary: By default a procedure stops on the first Error, so a user fixing ten bad rows must rerun the operation ten times.
tier: official
language: en
tags:
  - collectible-errors
  - errorbehavior
  - collect
  - getcollectederrors
  - hascollectederrors
  - validation
  - batch
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:25.778Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: cdb87b60bf897ddb979a972cda2682e91daeecb0
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/error-handling/collect-validation-errors-with-errorbehavior.md
    title: "microsoft/BCQuality: Collect validation errors with ErrorBehavior::Collect and handle the collected list"
    date: "2026-09-09"
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
    - change/bcquality/174
    - change/bcquality/93
repo_path: microsoft/knowledge/error-handling/collect-validation-errors-with-errorbehavior.md
layer: microsoft
kind: rule
domain: error-handling
bc_version:
  - 19..
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 2
identifiers:
  - ErrorInfo
---

# Collect validation errors with ErrorBehavior::Collect and handle the collected list

> By default a procedure stops on the first Error, so a user fixing ten bad rows must rerun the operation ten times.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/error-handling/collect-validation-errors-with-errorbehavior.md) · microsoft layer · error-handling · BC 19.. · tier official · derived

## Description

By default a procedure stops on the first `Error`, so a user fixing ten bad rows must rerun the operation ten times. The collectible-errors feature postpones error handling to the end of the call: a procedure attributed `[ErrorBehavior(ErrorBehavior::Collect)]` keeps running as collectible errors occur and gathers them, so all failures can be presented together. `GetCollectedErrors()` returns a `List of [ErrorInfo]` for the handler to inspect, but does not clear the collection by default; pass `true` to retrieve and clear in one call, or call `ClearCollectedErrors()` explicitly after retrieving. A handler can copy record information into a custom error page as Microsoft Learn demonstrates, or deliberately format only the messages into a final blocking error as this article's sample does.

## Best Practice

Mark the orchestrating procedure `[ErrorBehavior(ErrorBehavior::Collect)]` and run each item's validation so one failure doesn't abandon the rest — typically by calling the per-item routine through `Codeunit.Run`. When the run finishes, inspect `HasCollectedErrors()`, retrieve and clear the list with `GetCollectedErrors(true)`, and fail the operation with the collected messages. The sample intentionally produces a text aggregate and does not claim to retain record/field metadata in the final error. If that metadata is needed, map each `ErrorInfo` to a custom error UI before clearing, following the Microsoft Learn pattern. Do not replace validation failure with `Message`: clearing collected errors suppresses the platform failure, so the custom handler must still block the invalid operation.

See sample: [`collect-validation-errors-with-errorbehavior.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/error-handling/collect-validation-errors-with-errorbehavior.good.al).

## Anti Pattern

Three shapes signal trouble. Hand-rolled accumulation reimplements collection and prevents the handler from receiving individual `ErrorInfo` values. A `Collect` procedure that never handles the collection falls back to the concatenated platform dialog. Finally, code that calls parameterless `GetCollectedErrors()`, assumes it cleared the list, and only shows a `Message` can both leave the errors collected and allow invalid processing to continue.

See sample: [`collect-validation-errors-with-errorbehavior.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/error-handling/collect-validation-errors-with-errorbehavior.bad.al).

## Examples

- [Good: collect-validation-errors-with-errorbehavior.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/error-handling/collect-validation-errors-with-errorbehavior.good.al)
- [Bad: collect-validation-errors-with-errorbehavior.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/error-handling/collect-validation-errors-with-errorbehavior.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#93 Fix lifecycle compatibility guidance](../../../../changes/bcquality/93.md), 2026-07-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
