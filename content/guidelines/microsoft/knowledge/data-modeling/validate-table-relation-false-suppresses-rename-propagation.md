---
id: guideline/microsoft/knowledge/data-modeling/validate-table-relation-false-suppresses-rename-propagation
type: guideline
title: "`ValidateTableRelation = false` suppresses rename propagation, not just input validation"
summary: Renaming a record updates it in all other locations that reference it through a TableRelation, with no code. That guarantee has two preconditions, and a field failing either one is silently left holding a key that no longer exists.
tier: official
language: en
tags:
  - validatetablerelation
  - table-relation
  - rename
  - onrename
  - propagation
  - dangling-reference
  - soft-relation
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:25.873Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 0131edbf332a83cc3dfaaac5f8173692b0bd172f
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/validate-table-relation-false-suppresses-rename-propagation.md
    title: "microsoft/BCQuality: `ValidateTableRelation = false` suppresses rename propagation, not just input validation"
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
    - change/bcquality/153
repo_path: microsoft/knowledge/data-modeling/validate-table-relation-false-suppresses-rename-propagation.md
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
identifiers:
  - TableRelation
  - OnRename
  - ValidateTableRelation
---

# `ValidateTableRelation = false` suppresses rename propagation, not just input validation

> Renaming a record updates it in all other locations that reference it through a TableRelation, with no code. That guarantee has two preconditions, and a field failing either one is silently left holding a key that no longer exists.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/validate-table-relation-false-suppresses-rename-propagation.md) · microsoft layer · data-modeling · BC all · tier official · derived

## Description

Renaming a record updates it in all other locations that reference it through a `TableRelation`, with no code. That guarantee has **two** preconditions, and a field failing either one is silently left holding a key that no longer exists.

First, a `TableRelation` must exist. A field whose value is constructed or computed — a composite key, or a value derived from several fields of the target — cannot declare one, so nothing propagates. The field is still a foreign key in intent, but the platform treats it as an opaque value.

Second, and far less obvious: the relation must not carry `ValidateTableRelation = false`. The property name implies it only governs *input validation*, so it looks safe to disable on a field populated by code that already knows the target is valid. It is not. **Disabling it also switches off rename propagation.** The relation still documents intent and still drives lookups, but it no longer keeps the stored value correct.

Both failures are quiet: no error at rename time, and in the first case no input validation either, so a wrong value is never rejected on write.

This is verified behaviour, not inference. A parent renamed once against a child holding three fields — a normal relation, the same relation with `ValidateTableRelation = false`, and a field with no relation — updates only the first.

See also `owning-table-must-delete-dependents-in-ondelete.md` for the delete half of this asymmetry, and `xrec-is-a-before-image-only-in-some-triggers.md` for why `OnRename` is the one trigger where a hand-written fix-up is reliable.

## Best Practice

Leave `ValidateTableRelation` at its default wherever the stored value must stay correct across a rename. When it must be disabled, or when the relationship cannot be expressed as a `TableRelation` at all, the table owning the referenced key carries an explicit `OnRename` that repoints the dependents itself.

See sample: [`validate-table-relation-false-suppresses-rename-propagation.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/validate-table-relation-false-suppresses-rename-propagation.good.al).

## Anti Pattern

`ValidateTableRelation = false` added to silence a validation error, on a field expected to keep tracking its target. The field stops being maintained on rename, and the defect surfaces much later as a reference to a key that no longer exists.

Detection signal: any `ValidateTableRelation = false` on a field that also declares a `TableRelation`. Ask what repoints the value when the target is renamed; if the answer is "the platform", the finding stands.

See sample: [`validate-table-relation-false-suppresses-rename-propagation.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/validate-table-relation-false-suppresses-rename-propagation.bad.al).

## Examples

- [Good: validate-table-relation-false-suppresses-rename-propagation.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/validate-table-relation-false-suppresses-rename-propagation.good.al)
- [Bad: validate-table-relation-false-suppresses-rename-propagation.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/validate-table-relation-false-suppresses-rename-propagation.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#153 Promote knowledge for Microsoft-owned review skills](../../../../changes/bcquality/153.md), 2026-09-03

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
