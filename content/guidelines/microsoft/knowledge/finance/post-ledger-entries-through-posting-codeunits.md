---
id: guideline/microsoft/knowledge/finance/post-ledger-entries-through-posting-codeunits
type: guideline
title: Create financial ledger entries through the owning posting engine
summary: Standard financial ledger entries are outputs of posting, not independent rows an extension manufactures. Even two manually inserted G/L rows with balanced amounts bypass posting checks, register bookkeeping, and transaction/source relationships.
tier: official
language: en
tags:
  - g-l-entry
  - ledger-entry
  - gen-jnl-post-line
  - gen-jnl-post-batch
  - journal-line
  - register
  - insert
system: finance
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:00.850Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: aefb6bb1b8b4e51a543ea030a2a17efd2a1b21eb
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/finance/post-ledger-entries-through-posting-codeunits.md
    title: "microsoft/BCQuality: Create financial ledger entries through the owning posting engine"
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
    - to: object/codeunit/13
      title: codeunit 13 "Gen. Jnl.-Post Batch"
      label: possibly related
      why: a code span in the rule names it
      by: code
    - to: object/table/254
      title: table 254 "VAT Entry"
      label: possibly related
      why: a code span in the rule names it
      by: code
    - to: object/table/32
      title: table 32 "Item Ledger Entry"
      label: possibly related
      why: a code span in the rule names it
      by: code
    - to: object/table/5802
      title: table 5802 "Value Entry"
      label: possibly related
      why: a code span in the rule names it
      by: code
    - to: object/table/339
      title: table 339 "Item Application Entry"
      label: possibly related
      why: a code span in the rule names it
      by: code
repo_path: microsoft/knowledge/finance/post-ledger-entries-through-posting-codeunits.md
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
  - RunWithoutCheck
---

# Create financial ledger entries through the owning posting engine

> Standard financial ledger entries are outputs of posting, not independent rows an extension manufactures. Even two manually inserted G/L rows with balanced amounts bypass posting checks, register bookkeeping, and transaction/source relationships.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/finance/post-ledger-entries-through-posting-codeunits.md) · microsoft layer · finance · BC all · tier official · derived

## Description

Standard financial ledger entries are outputs of posting, not independent rows an extension manufactures. Even two manually inserted G/L rows with balanced amounts bypass posting checks, register bookkeeping, and transaction/source relationships. `G/L Entry.Insert(true)` runs the table trigger; it does not invoke the posting engine.

## Best Practice

Use the owning document or journal posting workflow. For a normal persisted general-journal batch, use `"Gen. Jnl.-Post Batch"`; the example posts an existing batch containing one self-balancing, non-VAT G/L transfer. Let posting allocate entries and maintain the register rather than reconstructing its tables.

`"Gen. Jnl.-Post Line".RunWithCheck` is appropriate for a complete journal line inside a correctly owned posting lifecycle, but it does not invent a balancing account or document number, allocate numbering merely from `Posting No. Series`, or replace [batch document-balancing policy](preserve-journal-batch-document-balance.md). The line codeunit is stateful; its checked wrapper owns its start/continue/finish work. Normal batch posting owns its numbering and commits by default; do not imply these entry points are transaction-neutral.

Exclude temporary buffers and the standard engine's own insertion points. A checked parent may legitimately use `RunWithoutCheck`; do not replace it without inspecting that parent. This rule owns `G/L Entry`, `Cust. Ledger Entry`, `Vendor Ledger Entry`, their detailed customer/vendor entries, `VAT Entry`, and financial-posting/register records, not a custom table merely named `Ledger Entry` or a supported, specifically reviewed migration/repair workflow.

`Item Ledger Entry`, `Value Entry`, Capacity/Warehouse entries, `Item Application Entry`, and other inventory-posting records are SCM concerns, not this rule's financial-ledger scope. That exclusion includes the financial-row leg of a single inventory-posting bypass when restoring the inventory workflow corrects the whole operation. Distinct, independently actionable financial defects remain in scope.

See sample: [`post-ledger-entries-through-posting-codeunits.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/finance/post-ledger-entries-through-posting-codeunits.good.al).

## Anti Pattern

Create posted financial effects by directly inserting the Finance-owned records named above outside their owning posting workflow. Resolve the actual record type, operation, and lifecycle; do not match `*Ledger Entry` as a wildcard. Balanced debit/credit values, copied dimensions, `Insert(true)`, and a lock around entry-number allocation do not turn raw inserts into a complete posting.

See sample: [`post-ledger-entries-through-posting-codeunits.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/finance/post-ledger-entries-through-posting-codeunits.bad.al).

## References

- [Posting engine structure](https://learn.microsoft.com/en-us/dynamics365/business-central/design-details-posting-engine-structure).
- [Gen. Jnl.-Post Line API](https://learn.microsoft.com/en-us/dynamics365/business-central/application/base-application/codeunit/microsoft.finance.generalledger.posting.gen.-jnl.-post-line).
- [BCApps: posting lifecycle and register maintenance](https://github.com/microsoft/BCApps/blob/8f7a04cb0db8aa96cb97e055c45c61aead49e280/src/Layers/W1/BaseApp/Finance/GeneralLedger/Posting/GenJnlPostLine.Codeunit.al).

## Examples

- [Good: post-ledger-entries-through-posting-codeunits.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/finance/post-ledger-entries-through-posting-codeunits.good.al)
- [Bad: post-ledger-entries-through-posting-codeunits.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/finance/post-ledger-entries-through-posting-codeunits.bad.al)

## Names

- [codeunit 13 "Gen. Jnl.-Post Batch"](../../../../objects/codeunit/13.md) (possibly related: a code span names it)
- [table 254 "VAT Entry"](../../../../objects/table/254.md) (possibly related: a code span names it)
- [table 32 "Item Ledger Entry"](../../../../objects/table/32.md) (possibly related: a code span names it)
- [table 5802 "Value Entry"](../../../../objects/table/5802.md) (possibly related: a code span names it)
- [table 339 "Item Application Entry"](../../../../objects/table/339.md) (possibly related: a code span names it)

## Changed by

- [#57 Add source-verified Finance knowledge and review domain](../../../../changes/bcquality/57.md), 2026-09-21

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
