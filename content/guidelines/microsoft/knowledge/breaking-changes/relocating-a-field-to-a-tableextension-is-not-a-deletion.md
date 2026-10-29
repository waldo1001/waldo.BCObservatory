---
id: guideline/microsoft/knowledge/breaking-changes/relocating-a-field-to-a-tableextension-is-not-a-deletion
type: guideline
title: Relocating a field to a tableextension in the same app is not a deletion
summary: Moving a field out of a base-table definition (or a base-app layer modification of one) into a tableextension that extends the same table, within the same app and keeping the same field ID and name, is a relocation — not a deletion or a rename.
tier: official
language: en
tags:
  - table-field
  - tableextension
  - relocation
  - field-id
  - obsoletestate
  - breaking-change
  - false-positive
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:16.958Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: d37bfe83b88f0a5b4b43b9b5f43d1345ae0cd041
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/breaking-changes/relocating-a-field-to-a-tableextension-is-not-a-deletion.md
    title: "microsoft/BCQuality: Relocating a field to a tableextension in the same app is not a deletion"
    date: "2026-08-04"
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
    - change/bcquality/124
repo_path: microsoft/knowledge/breaking-changes/relocating-a-field-to-a-tableextension-is-not-a-deletion.md
layer: microsoft
kind: rule
domain: breaking-changes
bc_version:
  - all
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 0
identifiers:
  - ObsoleteReason
  - ObsoleteTag
---

# Relocating a field to a tableextension in the same app is not a deletion

> Moving a field out of a base-table definition (or a base-app layer modification of one) into a tableextension that extends the same table, within the same app and keeping the same field ID and name, is a relocation — not a deletion or a rename.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/breaking-changes/relocating-a-field-to-a-tableextension-is-not-a-deletion.md) · microsoft layer · breaking-changes · BC all · tier official · derived

## Description

Moving a field out of a base-table definition (or a base-app layer modification of one) into a tableextension that `extends` the same table, within the same app and keeping the same field ID and name, is a relocation — not a deletion or a rename. After the move the field still exists on the table: `Rec."Field Name"` and the field ID resolve exactly as before, so dependent extensions that reference the field continue to compile. Nothing in the field's public contract is removed or renamed, so the deprecation lifecycle that protects a genuinely removed field does not apply. LLM reviewers frequently misread the two-sided diff — the field disappearing from the base object and reappearing in the tableextension — as a shipped field being deleted and illegally re-added under the same ID, and demand `ObsoleteState = Pending` staging that this refactor does not need.

## Best Practice

Recognize a field that is removed from a base table (or base-app layer) and re-declared in a tableextension of the same table, with the same field ID and name, as a same-app relocation. Do not flag it as a deleted or renamed shipped field, and do not require `ObsoleteState = Pending`, `ObsoleteReason`, `ObsoleteTag`, or a deprecation window for the move itself. The `obsolete-table-fields-instead-of-deleting-them` and `obsolete-pending-to-removed-staging` rules apply to fields that leave the table's contract entirely, not to fields relocated within the same app under an unchanged ID.

## Changed by

- [#124 Add FP guards: field relocation to tableextension + event parameter addition (bug 642303)](../../../../changes/bcquality/124.md), 2026-08-04

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
