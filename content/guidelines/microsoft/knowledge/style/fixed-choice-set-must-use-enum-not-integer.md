---
id: guideline/microsoft/knowledge/style/fixed-choice-set-must-use-enum-not-integer
type: guideline
title: A fixed set of named choices must use Enum, not a raw Integer
summary: When a variable or field represents a fixed set of named, mutually exclusive states — a difficulty level, a document type, a processing status — it should be typed as Enum (or Option when extending an object that still uses the legacy type).
tier: official
language: en
tags:
  - enum
  - option
  - integer
  - magic-number
  - variable-typing
  - field-typing
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:55.124Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 112b977adcdddb750bb360782a34eef236a93f45
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/fixed-choice-set-must-use-enum-not-integer.md
    title: "microsoft/BCQuality: A fixed set of named choices must use Enum, not a raw Integer"
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
repo_path: microsoft/knowledge/style/fixed-choice-set-must-use-enum-not-integer.md
layer: microsoft
kind: rule
domain: style
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

# A fixed set of named choices must use Enum, not a raw Integer

> When a variable or field represents a fixed set of named, mutually exclusive states — a difficulty level, a document type, a processing status — it should be typed as Enum (or Option when extending an object that still uses the legacy type).

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/fixed-choice-set-must-use-enum-not-integer.md) · microsoft layer · style · BC all · tier official · derived

> Contributions welcome — open a PR to refine or extend this article.

## Description

When a variable or field represents a fixed set of named, mutually exclusive states — a difficulty level, a document type, a processing status — it should be typed as `Enum` (or `Option` when extending an object that still uses the legacy type). Representing that same state as a plain `Integer` and tracking the meaning of each value in a comment or in a developer's head is a magic-number anti-pattern: the compiler cannot catch an out-of-range value, and branches read as opaque numbers instead of names. This is about semantics, not member count, matching `binary-choice-must-be-boolean.md`'s own distinction: a domain concept that is genuinely a stable true/false predicate belongs in `Boolean` even if someone represents it as a two-value `Enum`, while a domain concept with exactly two current named states is not automatically a Boolean in disguise — it stays an `Enum` when the states are named alternatives rather than a yes/no flag, or when it needs to implement an interface, preserve an existing contract, or leave room for a future third value.

## Best Practice

Declare an `Enum` with named values and branch on the enum value, not a raw number.

See sample: [`fixed-choice-set-must-use-enum-not-integer.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/fixed-choice-set-must-use-enum-not-integer.good.al).

## Anti Pattern

Using a plain `Integer` field with the meaning of each value tracked only in a comment pushes the documentation of the states into something the compiler cannot check and a future maintainer cannot rely on.

See sample: [`fixed-choice-set-must-use-enum-not-integer.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/fixed-choice-set-must-use-enum-not-integer.bad.al).

## Examples

- [Good: fixed-choice-set-must-use-enum-not-integer.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/fixed-choice-set-must-use-enum-not-integer.good.al)
- [Bad: fixed-choice-set-must-use-enum-not-integer.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/fixed-choice-set-must-use-enum-not-integer.bad.al)

## Changed by

- [#156 18 AL/BC patterns: style, data-modeling, web-services, appsource, breaking-changes, performance, testing](../../../../changes/bcquality/156.md), 2026-09-29

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
