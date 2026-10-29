---
id: guideline/microsoft/knowledge/finance/apply-ledger-entries-through-application-codeunits
type: guideline
title: Apply and unapply entries through the application workflow, not status flags
summary: Customer/vendor settlement is a posting operation involving detailed ledger entries, not just a change to Open on the main entry. Remaining amounts are calculated from detailed entries.
tier: official
language: en
tags:
  - cust-ledger-entry
  - vendor-ledger-entry
  - detailed-ledger-entry
  - remaining-amount
  - application
  - unapplication
  - open
  - closed-by-entry-no
system: finance
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:00.510Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 11f78cd72ff1319f5c34420488fd597dbb13e0c2
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/finance/apply-ledger-entries-through-application-codeunits.md
    title: "microsoft/BCQuality: Apply and unapply entries through the application workflow, not status flags"
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
    - to: object/codeunit/226
      title: codeunit 226 "CustEntry-Apply Posted Entries"
      label: possibly related
      why: a code span in the rule names it
      by: code
    - to: object/codeunit/227
      title: codeunit 227 "VendEntry-Apply Posted Entries"
      label: possibly related
      why: a code span in the rule names it
      by: code
    - to: object/table/579
      title: table 579 "Apply Unapply Parameters"
      label: possibly related
      why: a code span in the rule names it
      by: code
repo_path: microsoft/knowledge/finance/apply-ledger-entries-through-application-codeunits.md
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
  - ApplyCustEntryFormEntry
  - ApplyVendEntryFormEntry
---

# Apply and unapply entries through the application workflow, not status flags

> Customer/vendor settlement is a posting operation involving detailed ledger entries, not just a change to Open on the main entry. Remaining amounts are calculated from detailed entries.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/finance/apply-ledger-entries-through-application-codeunits.md) · microsoft layer · finance · BC all · tier official · derived

## Description

Customer/vendor settlement is a posting operation involving detailed ledger entries, not just a change to `Open` on the main entry. Remaining amounts are calculated from detailed entries. Unapplication posts correcting entries and handles application-derived effects such as discounts and currency gains/losses; deleting details or changing `Unapplied` cannot reproduce that history.

## Best Practice

Use `"CustEntry-Apply Posted Entries"` / `"VendEntry-Apply Posted Entries"` and the supported application or unapplication workflow. Let it check application dates, entry state, and application ordering. The `ApplyCustEntryFormEntry` / `ApplyVendEntryFormEntry` and `UnApply...LedgEntry` methods are **interactive**: users select and confirm the operation. They are not unattended "mark paid" APIs.

For programmatic posting, use the target version's public `Apply` / `PostUnApply...` APIs with properly prepared selection and `Apply Unapply Parameters`; handle cancellation and the workflow's transaction/commit behavior. `"Applying Entry"`, `"Applies-to ID"`, and `"Amount to Apply"` are legitimate application-preparation fields. Do not report their writes alone, temporary buffers, supported posting/compression internals, or unrelated operational/extension fields.

See sample: [`apply-ledger-entries-through-application-codeunits.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/finance/apply-ledger-entries-through-application-codeunits.good.al).

## Anti Pattern

Implement customer/vendor payment matching, settlement, or reopening by directly persisting `Open`, `"Closed by Entry No."`, closure amounts/dates, or detailed-entry unapplication flags, or by deleting/rewriting detailed application amounts. Require confirmed writes to existing non-temporary customer/vendor or detailed customer/vendor entries and settlement intent. Item/inventory application records belong to SCM, not this rule. Do not suggest assigning a `Remaining Amount` FlowField as a fix.

This article owns fabricated application state. Use the [posted-financial-content rule](do-not-modify-or-delete-posted-ledger-entries.md) for original accounting-value corrections, not a second finding prescribing the same application fix.

See sample: [`apply-ledger-entries-through-application-codeunits.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/finance/apply-ledger-entries-through-application-codeunits.bad.al).

## References

- [Apply and unapply customer transactions](https://learn.microsoft.com/en-us/dynamics365/business-central/receivables-how-apply-sales-transactions-manually).
- [Apply and unapply vendor transactions](https://learn.microsoft.com/en-us/dynamics365/business-central/payables-how-apply-purchase-transactions-manually).
- [BCApps: customer application workflow](https://github.com/microsoft/BCApps/blob/8f7a04cb0db8aa96cb97e055c45c61aead49e280/src/Layers/W1/BaseApp/Sales/Receivables/CustEntryApplyPostedEntries.Codeunit.al).
- [BCApps: vendor application workflow](https://github.com/microsoft/BCApps/blob/8f7a04cb0db8aa96cb97e055c45c61aead49e280/src/Layers/W1/BaseApp/Purchases/Payables/VendEntryApplyPostedEntries.Codeunit.al).

## Examples

- [Good: apply-ledger-entries-through-application-codeunits.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/finance/apply-ledger-entries-through-application-codeunits.good.al)
- [Bad: apply-ledger-entries-through-application-codeunits.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/finance/apply-ledger-entries-through-application-codeunits.bad.al)

## Names

- [codeunit 226 "CustEntry-Apply Posted Entries"](../../../../objects/codeunit/226.md) (possibly related: a code span names it)
- [codeunit 227 "VendEntry-Apply Posted Entries"](../../../../objects/codeunit/227.md) (possibly related: a code span names it)
- [table 579 "Apply Unapply Parameters"](../../../../objects/table/579.md) (possibly related: a code span names it)

## Changed by

- [#57 Add source-verified Finance knowledge and review domain](../../../../changes/bcquality/57.md), 2026-09-21

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
