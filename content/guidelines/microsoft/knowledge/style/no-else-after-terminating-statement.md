---
id: guideline/microsoft/knowledge/style/no-else-after-terminating-statement
type: guideline
title: Omit `else` when the `then` branch ends with `exit`, `break`, `skip`, `quit`, or `error`
summary: When the then branch of an if ends in a terminating statement — exit, break, skip, quit, or error — the else branch becomes the natural fall-through.
tier: official
language: en
tags:
  - else
  - exit
  - break
  - skip
  - quit
  - error
  - terminating
  - control-flow
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:59.555Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 3604dd3de76fa341eadb9ada7b6307fa488d57df
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/no-else-after-terminating-statement.md
    title: "microsoft/BCQuality: Omit `else` when the `then` branch ends with `exit`, `break`, `skip`, `quit`, or `error`"
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
repo_path: microsoft/knowledge/style/no-else-after-terminating-statement.md
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

# Omit `else` when the `then` branch ends with `exit`, `break`, `skip`, `quit`, or `error`

> When the then branch of an if ends in a terminating statement — exit, break, skip, quit, or error — the else branch becomes the natural fall-through.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/no-else-after-terminating-statement.md) · microsoft layer · style · BC all · tier official · derived

## Description

When the `then` branch of an `if` ends in a terminating statement — `exit`, `break`, `skip`, `quit`, or `error` — the `else` branch becomes the natural fall-through. `if Cond then exit; DoX();` and `if Cond then exit else DoX();` are equivalent, and the second form adds a layer of nesting that the reader has to mentally flatten. The same applies to `Error(...)`: `if IsAdjmtBinCodeChanged() then Error(AdjmtErr) else Error(BinErr);` is better written as `if IsAdjmtBinCodeChanged() then Error(AdjmtErr); Error(BinErr);` — the second `Error` is always reached when the first branch is not taken.

## Best Practice

Drop the `else` when the `then` branch unconditionally exits the procedure or the enclosing loop. The body that would have been inside `else` becomes the unindented continuation.

See sample: [`no-else-after-terminating-statement.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/no-else-after-terminating-statement.good.al).

## Anti Pattern

An `if … then Error(…) else Error(…)` pair where both branches terminate. The `else` is structural noise — the reader cannot tell at a glance whether it exists to handle an actual continuation or simply mirrors the `then`. The fix is to drop `else` and let the second `Error` fall through naturally.

See sample: [`no-else-after-terminating-statement.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/no-else-after-terminating-statement.bad.al).

## Examples

- [Good: no-else-after-terminating-statement.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/no-else-after-terminating-statement.good.al)
- [Bad: no-else-after-terminating-statement.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/no-else-after-terminating-statement.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
