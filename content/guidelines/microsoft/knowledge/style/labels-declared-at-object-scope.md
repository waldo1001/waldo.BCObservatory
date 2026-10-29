---
id: guideline/microsoft/knowledge/style/labels-declared-at-object-scope
type: guideline
title: Procedure-local Labels are valid
summary: The AL language supports Label variables at both object and procedure scope. Microsoft documents the Label data type without imposing an object-scope requirement, and the translation pipeline generates an XLF file containing all labels used by the extension.
tier: official
language: en
tags:
  - label
  - scope
  - procedure
  - translation
  - localization
  - xliff
  - false-positive
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:16.989Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 91d75d7fd40d388dd5f79d8a0a5bc0e9f7dd888e
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/labels-declared-at-object-scope.md
    title: "microsoft/BCQuality: Procedure-local Labels are valid"
    date: "2026-08-18"
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
    - change/bcquality/132
repo_path: microsoft/knowledge/style/labels-declared-at-object-scope.md
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
examples: 0
identifiers: []
---

# Procedure-local Labels are valid

> The AL language supports Label variables at both object and procedure scope. Microsoft documents the Label data type without imposing an object-scope requirement, and the translation pipeline generates an XLF file containing all labels used by the extension.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/labels-declared-at-object-scope.md) · microsoft layer · style · BC all · tier official · derived

## Description

The AL language supports `Label` variables at both object and procedure scope. Microsoft documents the [Label data type](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/devenv-using-labels#label-data-type) without imposing an object-scope requirement, and the translation pipeline generates an XLF file containing [all labels used by the extension](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/devenv-work-with-translation-files#generating-the-xliff-file). There is no documented correctness or localization defect caused solely by declaring a Label in a procedure-local `var` block.

## Best Practice

Choose object scope when a Label is reused or when an established repository convention prefers central declarations; choose procedure scope when the Label belongs to one procedure. Do not report a correctness or localization finding solely because a Label is local. An explicit object-scope convention is at most a low-severity maintainability preference. This guidance applies equally to production and test apps: test code still needs localization where its strings are user-facing or translator-facing.

## Changed by

- [#132 Refine self-improvement review guidance](../../../../changes/bcquality/132.md), 2026-09-03

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
