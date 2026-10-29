---
id: guideline/microsoft/knowledge/finance/change-ledger-due-dates-through-entry-edit
type: guideline
title: Change posted customer/vendor due dates through the entry-edit workflow
summary: A posted customer or vendor due date is supported editable operational data, but it is also represented by Initial Entry Due Date on related detailed ledger entries. Validating Due Date and calling Modify(true) on the main entry does not perform all synchronization done by "Cust.
tier: official
language: en
tags:
  - due-date
  - initial-entry-due-date
  - cust-entry-edit
  - vend-entry-edit
  - detailed-ledger-entry
  - aging
system: finance
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:00.726Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: aca7b769b0c15386ee872e101bec10ae174ed79b
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/finance/change-ledger-due-dates-through-entry-edit.md
    title: "microsoft/BCQuality: Change posted customer/vendor due dates through the entry-edit workflow"
    date: "2026-09-21"
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
    - change/bcquality/57
  related:
    - to: object/codeunit/103
      title: codeunit 103 "Cust. Entry-Edit"
      label: possibly related
      why: a code span in the rule names it
      by: code
    - to: object/codeunit/113
      title: codeunit 113 "Vend. Entry-Edit"
      label: possibly related
      why: a code span in the rule names it
      by: code
repo_path: microsoft/knowledge/finance/change-ledger-due-dates-through-entry-edit.md
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
  - ModifyAll
---

# Change posted customer/vendor due dates through the entry-edit workflow

> A posted customer or vendor due date is supported editable operational data, but it is also represented by Initial Entry Due Date on related detailed ledger entries. Validating Due Date and calling Modify(true) on the main entry does not perform all synchronization done by "Cust.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/finance/change-ledger-due-dates-through-entry-edit.md) · microsoft layer · finance · BC all · tier official · derived

## Description

A posted customer or vendor due date is supported editable operational data, but it is also represented by `Initial Entry Due Date` on related detailed ledger entries. Validating `Due Date` and calling `Modify(true)` on the main entry does not perform all synchronization done by `"Cust. Entry-Edit"` or `"Vend. Entry-Edit"`. The main entry and due-date-based analysis can otherwise disagree.

## Best Practice

Fetch the existing entry, validate the proposed `Due Date`, and pass the changed record to the corresponding entry-edit codeunit, as the standard ledger pages do. Field validation enforces entry-state rules; the editor persists the supported change and synchronizes related detailed entries. Preserve both steps rather than treating table triggers as equivalent to the edit workflow.

This is a due-date synchronization rule, not a prohibition on all operational edits after posting. Exclude temporary buffers, extension-only fields, supported editor internals, and code that demonstrably performs the equivalent synchronization under the supported workflow. Check the actual table/routine instead of assuming every `*Entry-Edit` accepts the same fields.

See sample: [`change-ledger-due-dates-through-entry-edit.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/finance/change-ledger-due-dates-through-entry-edit.good.al).

## Anti Pattern

Change `Due Date` on an existing non-temporary `Cust. Ledger Entry` or `Vendor Ledger Entry` and persist it with `Modify`, `Modify(true)`, or `ModifyAll` without the edit workflow or equivalent related-entry update. A preceding `Validate("Due Date", ...)` is not sufficient evidence of synchronization.

See sample: [`change-ledger-due-dates-through-entry-edit.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/finance/change-ledger-due-dates-through-entry-edit.bad.al).

## References

- [Cust. Entry-Edit API](https://learn.microsoft.com/en-us/dynamics365/business-central/application/base-application/codeunit/microsoft.sales.receivables.cust.-entry-edit).
- [Vend. Entry-Edit API](https://learn.microsoft.com/en-us/dynamics365/business-central/application/base-application/codeunit/microsoft.purchases.payables.vend.-entry-edit).
- [BCApps: customer due-date synchronization](https://github.com/microsoft/BCApps/blob/8f7a04cb0db8aa96cb97e055c45c61aead49e280/src/Layers/W1/BaseApp/Sales/Receivables/CustEntryEdit.Codeunit.al).
- [BCApps: vendor due-date synchronization](https://github.com/microsoft/BCApps/blob/8f7a04cb0db8aa96cb97e055c45c61aead49e280/src/Layers/W1/BaseApp/Purchases/Payables/VendEntryEdit.Codeunit.al).

## Examples

- [Good: change-ledger-due-dates-through-entry-edit.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/finance/change-ledger-due-dates-through-entry-edit.good.al)
- [Bad: change-ledger-due-dates-through-entry-edit.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/finance/change-ledger-due-dates-through-entry-edit.bad.al)

## Names

- [Record.ModifyAll(Any, Any \[, Boolean\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-modifyall-method) (names ModifyAll)
- [codeunit 103 "Cust. Entry-Edit"](../../../../objects/codeunit/103.md) (possibly related: a code span names it)
- [codeunit 113 "Vend. Entry-Edit"](../../../../objects/codeunit/113.md) (possibly related: a code span names it)

## Changed by

- [#57 Add source-verified Finance knowledge and review domain](../../../../changes/bcquality/57.md), 2026-09-21

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
