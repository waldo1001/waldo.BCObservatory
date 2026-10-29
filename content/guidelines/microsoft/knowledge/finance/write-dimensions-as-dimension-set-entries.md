---
id: guideline/microsoft/knowledge/finance/write-dimensions-as-dimension-set-entries
type: guideline
title: Copy complete posting dimension sets, not only shortcut projections
summary: When a journal line or posting document inherits dimensions, its Dimension Set ID identifies the complete combination of Dimension Set Entry rows. Global and shortcut dimensions expose selected dimensions, not the complete set; the eight shortcut dimensions are not a limit on set membership.
tier: official
language: en
tags:
  - dimension-set-id
  - shortcut-dimension
  - global-dimension
  - journal-line
  - posting
  - copy-dimensions
system: finance
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:01.545Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 0764f20103d6c354bee47de880ee9cd76886173a
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/finance/write-dimensions-as-dimension-set-entries.md
    title: "microsoft/BCQuality: Copy complete posting dimension sets, not only shortcut projections"
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
    - change/bcquality/57
  related:
    - to: object/table/352
      title: table 352 "Default Dimension"
      label: possibly related
      why: a code span in the rule names it
      by: code
repo_path: microsoft/knowledge/finance/write-dimensions-as-dimension-set-entries.md
layer: microsoft
kind: rule
domain: finance
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

# Copy complete posting dimension sets, not only shortcut projections

> When a journal line or posting document inherits dimensions, its Dimension Set ID identifies the complete combination of Dimension Set Entry rows. Global and shortcut dimensions expose selected dimensions, not the complete set; the eight shortcut dimensions are not a limit on set membership.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/finance/write-dimensions-as-dimension-set-entries.md) · microsoft layer · finance · BC all · tier official · derived

## Description

When a journal line or posting document inherits dimensions, its `Dimension Set ID` identifies the complete combination of `Dimension Set Entry` rows. Global and shortcut dimensions expose selected dimensions, not the complete set; the eight shortcut dimensions are not a limit on set membership. Copying only these projections can leave the destination's posting dimensions unchanged or silently lose dimensions outside the shortcuts.

## Best Practice

For an intentional **complete** dimension transfer, copy the source set ID and synchronize the destination's projections through its supported validation or dimension-management routine. On `Gen. Journal Line`, `Validate("Dimension Set ID", SourceSetID)` updates the two shortcut fields. Do not assume another table has the same validation trigger.

When line-specific dimensions must survive a header change, use the appropriate set-combination or delta routine instead of blindly replacing the line's entire set. Reading or filtering a known global dimension is legitimate; it is not a claim to enumerate every dimension. This rule owns transfers through general-journal and financial-document posting records, not writes to Item, Value, Capacity, Warehouse, or inventory-application records owned by SCM. Generic custom-table or master `Default Dimension` wiring belongs to data modeling.

See sample: [`write-dimensions-as-dimension-set-entries.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/finance/write-dimensions-as-dimension-set-entries.good.al).

## Anti Pattern

A routine intended to copy **all** posting dimensions copies only global/shortcut codes, or assigns a set ID without synchronizing the destination's stored projections. Require evidence of a complete-transfer intent and inspect surrounding validation; an explicit change to one selected dimension or a read-only filter is not this defect.

See sample: [`write-dimensions-as-dimension-set-entries.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/finance/write-dimensions-as-dimension-set-entries.bad.al).

## References

- [Dimension set entries overview](https://learn.microsoft.com/en-us/dynamics365/business-central/design-details-dimension-set-entries-overview).
- [DimensionManagement API](https://learn.microsoft.com/en-us/dynamics365/business-central/application/base-application/codeunit/microsoft.finance.dimension.dimensionmanagement).
- [BCApps: Gen. Journal Line dimension validation](https://github.com/microsoft/BCApps/blob/8f7a04cb0db8aa96cb97e055c45c61aead49e280/src/Layers/W1/BaseApp/Finance/GeneralLedger/Journal/GenJournalLine.Table.al).

## Examples

- [Good: write-dimensions-as-dimension-set-entries.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/finance/write-dimensions-as-dimension-set-entries.good.al)
- [Bad: write-dimensions-as-dimension-set-entries.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/finance/write-dimensions-as-dimension-set-entries.bad.al)

## Names

- [table 352 "Default Dimension"](../../../../objects/table/352.md) (possibly related: a code span names it)

## Changed by

- [#57 Add source-verified Finance knowledge and review domain](../../../../changes/bcquality/57.md), 2026-09-21

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
