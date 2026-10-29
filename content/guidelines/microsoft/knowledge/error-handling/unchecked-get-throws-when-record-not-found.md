---
id: guideline/microsoft/knowledge/error-handling/unchecked-get-throws-when-record-not-found
type: guideline
title: An unchecked Record.Get raises an error when the record is missing; it is not silently ignored
summary: Record.Get returns a Boolean, but its behavior when no record is found depends on whether the return value is consumed. When the return value is used — inside if Rec.Get(...) then, or assigned to a variable — a missing record yields false and execution continues. When Rec.Get(...)
tier: official
language: en
tags:
  - get
  - record-not-found
  - runtime-error
  - return-value
  - boolean-method
  - false-positive
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:17.439Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: dff1e81011400ebe025937ad3736987db83ccf03
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/error-handling/unchecked-get-throws-when-record-not-found.md
    title: "microsoft/BCQuality: An unchecked Record.Get raises an error when the record is missing; it is not silently ignored"
    date: "2026-07-21"
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
    - change/bcquality/118
repo_path: microsoft/knowledge/error-handling/unchecked-get-throws-when-record-not-found.md
layer: microsoft
kind: rule
domain: error-handling
bc_version:
  - all
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 0
identifiers: []
---

# An unchecked Record.Get raises an error when the record is missing; it is not silently ignored

> Record.Get returns a Boolean, but its behavior when no record is found depends on whether the return value is consumed. When the return value is used — inside if Rec.Get(...) then, or assigned to a variable — a missing record yields false and execution continues. When Rec.Get(...)

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/error-handling/unchecked-get-throws-when-record-not-found.md) · microsoft layer · error-handling · BC all · tier official · derived

## Description

`Record.Get` returns a Boolean, but its behavior when no record is found depends on whether the return value is consumed. When the return value is used — inside `if Rec.Get(...) then`, or assigned to a variable — a missing record yields `false` and execution continues. When `Rec.Get(...)` is called as a bare statement and the return value is not used, the platform raises a runtime "record not found" error if the record does not exist. A bare `Rec.Get(Key)` therefore acts as an assertion that the record exists: it does not swallow or silently ignore a missing record. This mirrors other AL find methods, where an unconsumed return value lets the platform enforce the not-found error.

## Best Practice

Do not claim that a `Record.Get` whose return value is unused silently ignores a missing record or hides an error. Treat a bare `Rec.Get(...)` statement as an intentional existence assertion that already throws when the record is absent. Recommend an explicit existence check only when the surrounding logic must continue gracefully rather than error out.

## Anti Pattern

Flagging a bare `Rec.Get(Key)` statement as a defect because "the return value is ignored, so a missing record is swallowed", or recommending it be wrapped in `if Rec.Get(...) then ... else Error(...)` to "handle the not-found case" — the unchecked call already raises an error when the record is missing.

## See also

- `ignored-tryfunction-return-disables-try-semantics.md` — a different case where ignoring a Boolean return value changes behavior.

## Changed by

- [#118 knowledge: 3 FP-suppression guards from BC apps negative feedback](../../../../changes/bcquality/118.md), 2026-07-21

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
