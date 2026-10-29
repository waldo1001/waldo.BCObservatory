---
id: guideline/microsoft/knowledge/data-modeling/share-mediaset-items-with-insert-not-field-assignment
type: guideline
title: Share MediaSet items with Insert instead of field assignment
summary: Media and MediaSet fields store IDs that reference tenant media system tables. When a record is deleted, the runtime looks for other references only in the same table and field index; it does not scan every table.
tier: official
language: en
tags:
  - mediaset
  - media
  - insert
  - field-assignment
  - tenant-media
  - delete-integrity
  - sharing
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:24.831Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 09212274de1f70aa52babbba19db5b55d0e092b7
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/share-mediaset-items-with-insert-not-field-assignment.md
    title: "microsoft/BCQuality: Share MediaSet items with Insert instead of field assignment"
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
    - change/bcquality/108
repo_path: microsoft/knowledge/data-modeling/share-mediaset-items-with-insert-not-field-assignment.md
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
  - MediaSet
  - ModifyAll
---

# Share MediaSet items with Insert instead of field assignment

> Media and MediaSet fields store IDs that reference tenant media system tables. When a record is deleted, the runtime looks for other references only in the same table and field index; it does not scan every table.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/share-mediaset-items-with-insert-not-field-assignment.md) · microsoft layer · data-modeling · BC all · tier official · derived

## Description

`Media` and `MediaSet` fields store IDs that reference tenant media system tables. When a record is deleted, the runtime looks for other references only in the same table and field index; it does not scan every table. Directly assigning a media-set field between different table types copies the ID without registering a separate media-set reference, so deleting one record can remove media that the other record still appears to reference.

## Best Practice

When sharing media between different tables, iterate the source `MediaSet` and call `Target.MediaSetField.Insert(Source.MediaSetField.Item(Index))`, then modify the target record. Direct field assignment is safe only when source and target are the same record subtype and use the same field ID. This concern is about reference/delete integrity, not the separate performance cost of `ModifyAll` on tables with media fields.

See sample: [`share-mediaset-items-with-insert-not-field-assignment.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/share-mediaset-items-with-insert-not-field-assignment.good.al).

## Anti Pattern

`Target.Picture := Source.Picture;` where the two variables refer to different table types or different media-field IDs. The code copies an opaque ID, but the platform does not know that two independent fields now share the media object.

See sample: [`share-mediaset-items-with-insert-not-field-assignment.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/share-mediaset-items-with-insert-not-field-assignment.bad.al).

## Examples

- [Good: share-mediaset-items-with-insert-not-field-assignment.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/share-mediaset-items-with-insert-not-field-assignment.good.al)
- [Bad: share-mediaset-items-with-insert-not-field-assignment.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/share-mediaset-items-with-insert-not-field-assignment.bad.al)

## Names

- [Record.ModifyAll(Any, Any \[, Boolean\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-modifyall-method) (names ModifyAll)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#108 Complete AL review knowledge readiness](../../../../changes/bcquality/108.md), 2026-07-15

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
