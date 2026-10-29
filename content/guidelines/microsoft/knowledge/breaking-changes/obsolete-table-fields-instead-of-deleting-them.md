---
id: guideline/microsoft/knowledge/breaking-changes/obsolete-table-fields-instead-of-deleting-them
type: guideline
title: Obsolete published table fields instead of deleting, renaming, or renumbering them
summary: A shipped table field carries both a source-level contract and persisted data. Renaming a field while retaining its ID is prohibited by AppSourceCop AS0005 and can break dependent extensions, but it is not inherently a drop-and-readd operation and should not be described as automatic data loss.
tier: official
language: en
tags:
  - table-field
  - obsoletestate
  - obsoletereason
  - obsoletetag
  - pending
  - removed
  - data-loss
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:19.649Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: bf62facff62aea5fe9aa3e32cb8f35c35811c212
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/breaking-changes/obsolete-table-fields-instead-of-deleting-them.md
    title: "microsoft/BCQuality: Obsolete published table fields instead of deleting, renaming, or renumbering them"
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
    - change/bcquality/108
    - change/bcquality/93
repo_path: microsoft/knowledge/breaking-changes/obsolete-table-fields-instead-of-deleting-them.md
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
examples: 2
identifiers:
  - ObsoleteReason
  - ObsoleteTag
---

# Obsolete published table fields instead of deleting, renaming, or renumbering them

> A shipped table field carries both a source-level contract and persisted data. Renaming a field while retaining its ID is prohibited by AppSourceCop AS0005 and can break dependent extensions, but it is not inherently a drop-and-readd operation and should not be described as automatic data loss.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/breaking-changes/obsolete-table-fields-instead-of-deleting-them.md) · microsoft layer · breaking-changes · BC all · tier official · derived

## Description

A shipped table field carries both a source-level contract and persisted data. Renaming a field while retaining its ID is prohibited by AppSourceCop AS0005 and can break dependent extensions, but it is not inherently a drop-and-readd operation and should not be described as automatic data loss. Deleting the field or replacing it under a different ID is the data-loss risk: the old field storage is no longer represented unless data is migrated. The supported path is to keep the old field and obsolete it, add a replacement under a new ID, and migrate values before later removal.

## Best Practice

Keep the old field's ID, name, and type unchanged. Add the replacement as a separate field under an unused ID, then mark the old field `ObsoleteState = Pending` with an `ObsoleteReason` that names the replacement and an `ObsoleteTag` recording the obsoletion version. Keep the old field readable so an upgrade codeunit can copy its data during the deprecation window. Move it to `ObsoleteState = Removed` only in a later release, after the window has passed and data has migrated.

See sample: [`obsolete-table-fields-instead-of-deleting-them.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/breaking-changes/obsolete-table-fields-instead-of-deleting-them.good.al).

## Anti Pattern

Renaming published `Email` to `Contact Email` with the same ID violates the compatibility contract and AS0005, even though the retained ID does not itself imply a fresh empty column. Deleting `Email` or changing its ID additionally risks losing its stored values. Detection: any previously shipped field whose name changes at the same ID, or whose original ID disappears without the unchanged field being retained as `Pending` and its data migrated to a separate replacement field.

See sample: [`obsolete-table-fields-instead-of-deleting-them.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/breaking-changes/obsolete-table-fields-instead-of-deleting-them.bad.al).

## Examples

- [Good: obsolete-table-fields-instead-of-deleting-them.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/breaking-changes/obsolete-table-fields-instead-of-deleting-them.good.al)
- [Bad: obsolete-table-fields-instead-of-deleting-them.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/breaking-changes/obsolete-table-fields-instead-of-deleting-them.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#108 Complete AL review knowledge readiness](../../../../changes/bcquality/108.md), 2026-07-15
- [#93 Fix lifecycle compatibility guidance](../../../../changes/bcquality/93.md), 2026-07-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
