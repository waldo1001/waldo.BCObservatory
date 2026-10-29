---
id: guideline/microsoft/knowledge/finance/do-not-edit-shared-dimension-sets
type: guideline
title: Change a transaction's dimension set reference, not a shared set's membership
summary: The same Dimension Set ID can be referenced by an unposted journal line and by many already-posted entries. Editing or deleting the persisted set's dimension/value rows therefore changes the meaning of unrelated transactions, including posting history.
tier: official
language: en
tags:
  - dimension-set-entry
  - dimension-value-id
  - getdimensionset
  - getdimensionsetid
  - posted-dimensions
  - temporary
system: finance
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:00.595Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 97b29f233a1da621b404356dc0d30c43e299120d
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/finance/do-not-edit-shared-dimension-sets.md
    title: "microsoft/BCQuality: Change a transaction's dimension set reference, not a shared set's membership"
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
repo_path: microsoft/knowledge/finance/do-not-edit-shared-dimension-sets.md
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
identifiers:
  - GetDimensionSetID
  - IsTemporary
---

# Change a transaction's dimension set reference, not a shared set's membership

> The same Dimension Set ID can be referenced by an unposted journal line and by many already-posted entries. Editing or deleting the persisted set's dimension/value rows therefore changes the meaning of unrelated transactions, including posting history.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/finance/do-not-edit-shared-dimension-sets.md) · microsoft layer · finance · BC all · tier official · derived

## Description

The same `Dimension Set ID` can be referenced by an unposted journal line and by many already-posted entries. Editing or deleting the persisted set's dimension/value rows therefore changes the meaning of unrelated transactions, including posting history. The dimension-set search tree also relies on those combinations remaining stable; a set is not a mutable child collection owned by one journal line.

## Best Practice

To change an unposted transaction's dimensions, load its set into a **temporary** `Dimension Set Entry` buffer with `DimensionManagement.GetDimensionSet`, change the buffer, and obtain a reusable ID with `GetDimensionSetID`. Validate dimension values in the buffer so `Dimension Value ID` matches the chosen value. Store the resulting ID on the transaction and synchronize its projections through that record's supported dimension validation.

For already-posted G/L dimensions, use the supported dimension-correction workflow rather than changing shared rows. Read-only access, temporary buffers, and standard maintenance of projection metadata such as `Global Dimension No.` are not membership changes. This rule protects dimension sets reached from general-journal, financial-document, or Finance-ledger flows. It does not own Item, Value, Capacity, Warehouse, or inventory-application record writes, or prescribe custom-table/default-dimension wiring.

See sample: [`do-not-edit-shared-dimension-sets.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/finance/do-not-edit-shared-dimension-sets.good.al).

## Anti Pattern

Follow a general-journal, financial-document, or Finance-ledger `Dimension Set ID` to a **persistent** `Dimension Set Entry` and modify, rename, or delete its dimension/value membership in order to change that one transaction. Inspect `IsTemporary` guards, aliases, and the fields written before reporting: the same operations on a temporary working copy are expected.

See sample: [`do-not-edit-shared-dimension-sets.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/finance/do-not-edit-shared-dimension-sets.bad.al).

## References

- [Dimension set entries overview](https://learn.microsoft.com/en-us/dynamics365/business-central/design-details-dimension-set-entries-overview).
- [Supported G/L dimension correction](https://learn.microsoft.com/en-us/dynamics365/business-central/finance-troubleshooting-correcting-dimensions).
- [DimensionManagement API](https://learn.microsoft.com/en-us/dynamics365/business-central/application/base-application/codeunit/microsoft.finance.dimension.dimensionmanagement).
- [BCApps: Dimension Set Entry and its set-ID resolver](https://github.com/microsoft/BCApps/blob/8f7a04cb0db8aa96cb97e055c45c61aead49e280/src/Layers/W1/BaseApp/Finance/Dimension/DimensionSetEntry.Table.al).

## Examples

- [Good: do-not-edit-shared-dimension-sets.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/finance/do-not-edit-shared-dimension-sets.good.al)
- [Bad: do-not-edit-shared-dimension-sets.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/finance/do-not-edit-shared-dimension-sets.bad.al)

## Changed by

- [#57 Add source-verified Finance knowledge and review domain](../../../../changes/bcquality/57.md), 2026-09-21

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
