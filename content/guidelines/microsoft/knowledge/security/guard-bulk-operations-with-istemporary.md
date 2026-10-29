---
id: guideline/microsoft/knowledge/security/guard-bulk-operations-with-istemporary
type: guideline
title: Guard bulk operations with IsTemporary
summary: "An AL helper that accepts a var Rec: Record X parameter and performs a bulk operation (DeleteAll, ModifyAll, or an unfiltered loop that mutates every record) cannot tell from the signature alone whether the caller passed a temporary buffer or the real table."
tier: official
language: en
tags:
  - istemporary
  - deleteall
  - modifyall
  - safeguard
  - precondition
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:51.181Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 3919f6b8e283e22bf94042e8345d897ddc9a9c63
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/guard-bulk-operations-with-istemporary.md
    title: "microsoft/BCQuality: Guard bulk operations with IsTemporary"
    date: "2026-09-09"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-modifyall-method
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
repo_path: microsoft/knowledge/security/guard-bulk-operations-with-istemporary.md
layer: microsoft
kind: rule
domain: security
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
  - DeleteAll
  - ModifyAll
  - IsTemporary
---

# Guard bulk operations with IsTemporary

> An AL helper that accepts a var Rec: Record X parameter and performs a bulk operation (DeleteAll, ModifyAll, or an unfiltered loop that mutates every record) cannot tell from the signature alone whether the caller passed a temporary buffer or the real table.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/guard-bulk-operations-with-istemporary.md) · microsoft layer · security · BC all · tier official · derived

> Contributions welcome — open a PR to refine or extend this article.

## Description

An AL helper that accepts a `var Rec: Record X` parameter and performs a bulk operation (`DeleteAll`, `ModifyAll`, or an unfiltered loop that mutates every record) cannot tell from the signature alone whether the caller passed a temporary buffer or the real table. A misuse that passes the real table wipes or rewrites live data at production scale with no earlier warning. A single `IsTemporary` check at the procedure entry turns a silent-corruption risk into an early, actionable failure.

## Best Practice

Any helper designed to operate on a temporary record, and that performs `DeleteAll`, `ModifyAll`, or similar bulk writes on its parameter, should call `Rec.IsTemporary()` at the top and raise a descriptive error when the assumption is violated. The error message should name the parameter so the misuse is easy to locate.

See sample: [`guard-bulk-operations-with-istemporary.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/guard-bulk-operations-with-istemporary.good.al).

## Anti Pattern

Trusting documentation or naming conventions alone to signal that a `var Rec` parameter is expected to be temporary. A future refactor or a copy-paste caller can pass the real table; the bulk operation then executes against production rows silently.

See sample: [`guard-bulk-operations-with-istemporary.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/guard-bulk-operations-with-istemporary.bad.al).

## Examples

- [Good: guard-bulk-operations-with-istemporary.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/guard-bulk-operations-with-istemporary.good.al)
- [Bad: guard-bulk-operations-with-istemporary.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/guard-bulk-operations-with-istemporary.bad.al)

## Names

- [Record.ModifyAll(Any, Any \[, Boolean\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-modifyall-method) (names ModifyAll)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#153 Promote knowledge for Microsoft-owned review skills](../../../../changes/bcquality/153.md), 2026-09-03

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
