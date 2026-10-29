---
id: guideline/microsoft/knowledge/data-modeling/round-direction-symbols-use-magnitude
type: guideline
title: "`Round` direction symbols follow magnitude, not mathematical ordering"
summary: "AL's Round(Number, Precision, Direction) uses '>' to round away from zero and '<' to round toward zero. For a negative value this reverses mathematical ordering: Round(-1234.56789, 0.001, '<') returns -1234.567, while direction '>' returns -1234.568."
tier: official
language: en
tags:
  - round
  - rounding
  - direction
  - precision
  - negative-decimal
  - amount
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:02.978Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 260905dbc76545a1e32a72aac893f69de3fd9046
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/round-direction-symbols-use-magnitude.md
    title: "microsoft/BCQuality: `Round` direction symbols follow magnitude, not mathematical ordering"
    date: "2026-09-21"
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
    - change/bcquality/195
    - change/bcquality/57
repo_path: microsoft/knowledge/data-modeling/round-direction-symbols-use-magnitude.md
layer: microsoft
kind: rule
domain: data-modeling
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

# `Round` direction symbols follow magnitude, not mathematical ordering

> AL's Round(Number, Precision, Direction) uses '>' to round away from zero and '<' to round toward zero. For a negative value this reverses mathematical ordering: Round(-1234.56789, 0.001, '<') returns -1234.567, while direction '>' returns -1234.568.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/round-direction-symbols-use-magnitude.md) · microsoft layer · data-modeling · BC all · tier official · derived

## Description

AL's `Round(Number, Precision, Direction)` uses `'>'` to round away from zero and `'<'` to round toward zero. For a negative value this reverses mathematical ordering: `Round(-1234.56789, 0.001, '<')` returns `-1234.567`, while direction `'>'` returns `-1234.568`. Code that treats the symbols as mathematical ceiling and floor produces sign-dependent amount errors, commonly on credit documents and negative adjustments.

## Best Practice

Choose the direction from the business meaning: `'>'` increases absolute magnitude and `'<'` decreases absolute magnitude for both positive and negative values. Include positive and negative cases whenever a directed rounding rule is tested.

See sample: [`round-direction-symbols-use-magnitude.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/round-direction-symbols-use-magnitude.good.al).

## Anti Pattern

Using `'<'` as a mathematical floor or `'>'` as a mathematical ceiling. The result looks correct for positive amounts but moves in the opposite mathematical direction for negative amounts.

See sample: [`round-direction-symbols-use-magnitude.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/round-direction-symbols-use-magnitude.bad.al).

## Reference

[Use the Round function](https://learn.microsoft.com/en-us/training/modules/use-document-standards-business-central/4a-use-round-function)

## Examples

- [Good: round-direction-symbols-use-magnitude.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/round-direction-symbols-use-magnitude.good.al)
- [Bad: round-direction-symbols-use-magnitude.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/round-direction-symbols-use-magnitude.bad.al)

## Changed by

- [#195 Add foundational AL developer knowledge](../../../../changes/bcquality/195.md), 2026-09-21
- [#57 Add source-verified Finance knowledge and review domain](../../../../changes/bcquality/57.md), 2026-09-21

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
