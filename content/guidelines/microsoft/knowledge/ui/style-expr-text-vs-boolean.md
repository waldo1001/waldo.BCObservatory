---
id: guideline/microsoft/knowledge/ui/style-expr-text-vs-boolean
type: guideline
title: "StyleExpr: Boolean toggle vs Text variable"
summary: "StyleExpr on a page field serves two distinct purposes depending on its type:"
tier: official
language: en
tags:
  - style-expr
  - style
  - boolean
  - text-variable
  - accessibility
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:08.232Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 720423bbb8a81b941b78f501102876afa1425a9d
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/style-expr-text-vs-boolean.md
    title: "microsoft/BCQuality: StyleExpr: Boolean toggle vs Text variable"
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
repo_path: microsoft/knowledge/ui/style-expr-text-vs-boolean.md
layer: microsoft
kind: rule
domain: ui
bc_version:
  - all
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 1
identifiers:
  - StyleExpr
  - OnAfterGetRecord
  - OnAfterGetCurrRecord
---

# StyleExpr: Boolean toggle vs Text variable

> StyleExpr on a page field serves two distinct purposes depending on its type:

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/style-expr-text-vs-boolean.md) · microsoft layer · ui · BC all · tier official · derived

## Description

`StyleExpr` on a page field serves two distinct purposes depending on its type:

- **Boolean** — When `StyleExpr` is a Boolean expression, it controls whether the `Style` property is applied. In this case the `Style` property carries the style name; analyze `Style` and ignore `StyleExpr` itself.
- **Text** — When `StyleExpr` is a Text variable (e.g. `StyleExpr = StatusStyle` where `StatusStyle: Text` and is assigned literals such as `'Favorable'`), the variable contains the style name at runtime. There may be no `Style` property at all — the `StyleExpr` variable **is** the style.

When `StyleExpr` is Text, you must trace the variable's assignments — typically in `OnAfterGetRecord` or `OnAfterGetCurrRecord` — to determine which styles can be applied, then apply the same accessibility rules as for a literal `Style` value.

## Best Practice

Inspect the declared type of the symbol referenced by `StyleExpr` before drawing conclusions. If it is Boolean, evaluate the `Style` property. If it is Text, follow every assignment to the variable and check the full set of possible style values against `cosmetic-styles-need-no-textual-context.md` and `semantic-styles-need-independent-textual-meaning.md`.

See sample: [`style-expr-text-vs-boolean.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/style-expr-text-vs-boolean.good.al).

## Examples

- [Good: style-expr-text-vs-boolean.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/style-expr-text-vs-boolean.good.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
