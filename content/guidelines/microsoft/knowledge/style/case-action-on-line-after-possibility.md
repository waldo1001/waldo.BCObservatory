---
id: guideline/microsoft/knowledge/style/case-action-on-line-after-possibility
type: guideline
title: "`case` action goes on the line after the possibility"
summary: "In an AL case statement, the action for each label is written on the line that follows the label, not on the same line. 'A': Letter2 := '10'; on a single line is the discouraged form; the convention is 'A': on one line and Letter2 := '10'; on the next, indented one level deeper."
tier: official
language: en
tags:
  - case
  - statement
  - formatting
  - possibility
  - action
  - line-break
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:58.933Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 73dd1322e8a62678ede2fc9566625ead2ea54a65
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/case-action-on-line-after-possibility.md
    title: "microsoft/BCQuality: `case` action goes on the line after the possibility"
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
repo_path: microsoft/knowledge/style/case-action-on-line-after-possibility.md
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

# `case` action goes on the line after the possibility

> In an AL case statement, the action for each label is written on the line that follows the label, not on the same line. 'A': Letter2 := '10'; on a single line is the discouraged form; the convention is 'A': on one line and Letter2 := '10'; on the next, indented one level deeper.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/case-action-on-line-after-possibility.md) · microsoft layer · style · BC all · tier official · derived

## Description

In an AL `case` statement, the action for each label is written on the line that follows the label, not on the same line. `'A': Letter2 := '10';` on a single line is the discouraged form; the convention is `'A':` on one line and `Letter2 := '10';` on the next, indented one level deeper. The exception is when the action is a `begin … end` block — there the `begin` follows the colon on the same line, consistent with the rule for `then begin` / `else begin` / `do begin`.

## Best Practice

Each case label sits on its own line, terminated by `:`. The action below it is indented; multi-statement actions open with `begin` on the label line and close with `end;` on its own line.

See sample: [`case-action-on-line-after-possibility.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/case-action-on-line-after-possibility.good.al).

## Anti Pattern

`'A': Letter2 := '10';` (single-line label and action), and `'C': begin Letter2 := '12'; DoSomething(); end;` (everything on one line including the block body). Both defeat per-line diff review and crowd the control flow.

See sample: [`case-action-on-line-after-possibility.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/case-action-on-line-after-possibility.bad.al).

## Examples

- [Good: case-action-on-line-after-possibility.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/case-action-on-line-after-possibility.good.al)
- [Bad: case-action-on-line-after-possibility.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/case-action-on-line-after-possibility.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
