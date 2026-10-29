---
id: guideline/microsoft/knowledge/style/binary-choice-must-be-boolean
type: guideline
title: Binary yes/no choices must be typed as Boolean, not Option or Integer
summary: When a field or variable represents a genuine true/false state — yes/no, on/off, active/inactive, blocked/not blocked — it should be typed Boolean.
tier: official
language: en
tags:
  - boolean
  - option
  - yes-no
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
  at: "2026-10-29T21:27:54.994Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: ec0c4a5e5b4c3186c186eecbaaa9f80e4d84d2e2
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/binary-choice-must-be-boolean.md
    title: "microsoft/BCQuality: Binary yes/no choices must be typed as Boolean, not Option or Integer"
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
repo_path: microsoft/knowledge/style/binary-choice-must-be-boolean.md
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

# Binary yes/no choices must be typed as Boolean, not Option or Integer

> When a field or variable represents a genuine true/false state — yes/no, on/off, active/inactive, blocked/not blocked — it should be typed Boolean.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/binary-choice-must-be-boolean.md) · microsoft layer · style · BC all · tier official · derived

> Contributions welcome — open a PR to refine or extend this article.

## Description

When a field or variable represents a genuine true/false state — yes/no, on/off, active/inactive, blocked/not blocked — it should be typed `Boolean`. Modeling that same predicate as an `Option`/`Enum` with two members, or as an `Integer` with two magic-number values, adds a layer of indirection a reader has to resolve before understanding the code. This is about semantics, not member count: a domain concept that currently has exactly two named alternatives — Inbound/Outbound, Debit/Credit, Buy/Sell — is not automatically a Boolean in disguise. An `Enum` can be the clearer model there, including when it needs to implement an interface, preserve an existing contract, or leave room for a future third value. The distinction is whether the domain is genuinely a stable predicate, not how many states it currently has.

## Best Practice

Type a field or variable as `Boolean` when the domain concept is inherently a true/false state. Do not replace a meaningful two-option domain model with a Boolean solely because it currently has two values.

See sample: [`binary-choice-must-be-boolean.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/binary-choice-must-be-boolean.good.al).

## Anti Pattern

Modeling a yes/no choice as an `Option` with two members, or as an `Integer` with magic-number values, forces every caller to remember which value means what and leaves room for a meaningless third value.

See sample: [`binary-choice-must-be-boolean.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/binary-choice-must-be-boolean.bad.al).

## Examples

- [Good: binary-choice-must-be-boolean.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/binary-choice-must-be-boolean.good.al)
- [Bad: binary-choice-must-be-boolean.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/binary-choice-must-be-boolean.bad.al)

## Changed by

- [#156 18 AL/BC patterns: style, data-modeling, web-services, appsource, breaking-changes, performance, testing](../../../../changes/bcquality/156.md), 2026-09-29

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
