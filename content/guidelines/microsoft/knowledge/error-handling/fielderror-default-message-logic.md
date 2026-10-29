---
id: guideline/microsoft/knowledge/error-handling/fielderror-default-message-logic
type: guideline
title: Rely On FieldError's Auto-Generated Context And Pass Only A Lowercase Predicate
summary: Rec.FieldError(FieldNo) does not just print the text you give it. Business Central automatically prepends the field caption, appends the current field value (when non-blank), and suffixes the table name and primary-key values for record identification.
tier: official
language: en
tags:
  - fielderror
  - testfield
  - error-message
  - field-caption
  - lowercase-convention
  - record-context
  - validation
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:26.128Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 51c116aaf245f37fa030df518efab526cb2619be
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/error-handling/fielderror-default-message-logic.md
    title: "microsoft/BCQuality: Rely On FieldError's Auto-Generated Context And Pass Only A Lowercase Predicate"
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
    - change/bcquality/108
    - change/bcquality/105
repo_path: microsoft/knowledge/error-handling/fielderror-default-message-logic.md
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
examples: 2
identifiers:
  - TestField
  - FieldError
---

# Rely On FieldError's Auto-Generated Context And Pass Only A Lowercase Predicate

> Rec.FieldError(FieldNo) does not just print the text you give it. Business Central automatically prepends the field caption, appends the current field value (when non-blank), and suffixes the table name and primary-key values for record identification.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/error-handling/fielderror-default-message-logic.md) · microsoft layer · error-handling · BC all · tier official · derived

## Description
`Rec.FieldError(FieldNo)` does not just print the text you give it. Business Central automatically prepends the field caption, appends the current field value (when non-blank), and suffixes the table name and primary-key values for record identification. The optional second argument is only the middle predicate of that sentence — e.g. `"must be unique"`, not a whole self-contained message. Misunderstanding this leads to messages that duplicate the caption and value or read as broken grammar, because the framework's surrounding text is built to join a lowercase fragment.

## Best Practice
For a plain required-field check, prefer `TestField`, which tests the condition and raises the error in one call. When the condition is non-trivial and has already been evaluated, call `FieldError(FieldNo)` with no message to get the localized default (`must have a value`, `is not valid`, etc.), or pass a short lowercase predicate such as `FieldError(FieldNo, 'must be a positive number')`. Start the custom text with a lowercase letter so it reads as one sentence with the auto-inserted caption, and use a field-number reference (or the field token) rather than a hard-coded field name so captions and translations stay correct. Let the framework supply the caption, value, table, and key context for you.

See sample: [`fielderror-default-message-logic.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/error-handling/fielderror-default-message-logic.good.al).

## Anti Pattern
Re-testing a condition you already evaluated, or passing a fully formed sentence like `'The Amount field must be positive.'` to `FieldError`. The result reads as `Amount The Amount field must be positive. in Gen. Journal Line ...` — capital letter mid-sentence, caption and value repeated, and a stray trailing clause. Reviewer signals: a `FieldError` argument that names the field, restates the current value, starts with a capital letter, or ends with a period. Each is a sign the author treated `FieldError` like `Error` instead of as a predicate slotted into framework-generated context.

See sample: [`fielderror-default-message-logic.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/error-handling/fielderror-default-message-logic.bad.al).

## Examples

- [Good: fielderror-default-message-logic.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/error-handling/fielderror-default-message-logic.good.al)
- [Bad: fielderror-default-message-logic.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/error-handling/fielderror-default-message-logic.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#108 Complete AL review knowledge readiness](../../../../changes/bcquality/108.md), 2026-07-15
- [#105 Promote validated community knowledge](../../../../changes/bcquality/105.md), 2026-07-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
