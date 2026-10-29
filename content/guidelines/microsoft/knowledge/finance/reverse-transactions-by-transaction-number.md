---
id: guideline/microsoft/knowledge/finance/reverse-transactions-by-transaction-number
type: guideline
title: Pass the transaction number, not a ledger-entry number, to ReverseTransaction
summary: Reversal Entry.ReverseTransaction expects a transaction number, while ReverseRegister expects a G/L register number. Neither parameter means a ledger Entry No..
tier: official
language: en
tags:
  - reversetransaction
  - reverseregister
  - transaction-no
  - entry-no
  - reversal-entry
  - g-l-register
system: finance
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:01.447Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 296d9023460c765242cf828a5c0d08c9f94a0e67
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/finance/reverse-transactions-by-transaction-number.md
    title: "microsoft/BCQuality: Pass the transaction number, not a ledger-entry number, to ReverseTransaction"
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
    - to: object/table/179
      title: table 179 "Reversal Entry"
      label: possibly related
      why: a code span in the rule names it
      by: code
repo_path: microsoft/knowledge/finance/reverse-transactions-by-transaction-number.md
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
  - ReverseRegister
  - UnApplyCustLedgEntry
  - ReverseTransaction
---

# Pass the transaction number, not a ledger-entry number, to ReverseTransaction

> Reversal Entry.ReverseTransaction expects a transaction number, while ReverseRegister expects a G/L register number. Neither parameter means a ledger Entry No..

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/finance/reverse-transactions-by-transaction-number.md) · microsoft layer · finance · BC all · tier official · derived

## Description

`Reversal Entry.ReverseTransaction` expects a **transaction number**, while `ReverseRegister` expects a **G/L register number**. Neither parameter means a ledger `Entry No.`. All are integers, so the compiler accepts the wrong identity; a coincidentally matching integer can select another transaction instead of the posting the user intended to reverse.

## Best Practice

When starting from a `G/L Entry`, fetch that entry and pass **its** `Transaction No.` to `Reversal Entry.ReverseTransaction`, as the sample does. The same identity distinction applies to customer/vendor ledger entries when using their supported transaction-reversal path. If the starting point is a G/L register, use `Reversal Entry.ReverseRegister` with that register's number. The interactive workflow collects the participating entries and validates reversal eligibility before the user posts the reversal.

Do not infer eligibility from `Open` alone or bypass a rejection by changing origin, application, or reversal fields. The supported path depends on source and state; some postings require unapplication or a correcting document first. A request to reverse is not a guarantee that reversal will be permitted. This rule concerns the two named `Reversal Entry` APIs, not routines such as `UnApplyCustLedgEntry` that legitimately accept a ledger entry number.

See sample: [`reverse-transactions-by-transaction-number.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/finance/reverse-transactions-by-transaction-number.good.al).

## Anti Pattern

Pass a ledger entry's `Entry No.` or a register number into `ReverseTransaction`, or pass a ledger-entry/transaction number into `ReverseRegister`. Require visible value provenance, not merely a suspicious variable name or an arbitrary integer. A correctly sourced transaction number is valid even when the variable is poorly named.

See sample: [`reverse-transactions-by-transaction-number.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/finance/reverse-transactions-by-transaction-number.bad.al).

## References

- [Reversal Entry API](https://learn.microsoft.com/en-us/dynamics365/business-central/application/base-application/table/microsoft.finance.generalledger.reversal.reversal-entry).
- [Reverse journal postings](https://learn.microsoft.com/en-us/dynamics365/business-central/finance-how-reverse-journal-posting).
- [BCApps: reversal entry selection](https://github.com/microsoft/BCApps/blob/8f7a04cb0db8aa96cb97e055c45c61aead49e280/src/Layers/W1/BaseApp/Finance/GeneralLedger/Reversal/ReversalEntry.Table.al).

## Examples

- [Good: reverse-transactions-by-transaction-number.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/finance/reverse-transactions-by-transaction-number.good.al)
- [Bad: reverse-transactions-by-transaction-number.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/finance/reverse-transactions-by-transaction-number.bad.al)

## Names

- [table 179 "Reversal Entry"](../../../../objects/table/179.md) (possibly related: a code span names it)

## Changed by

- [#57 Add source-verified Finance knowledge and review domain](../../../../changes/bcquality/57.md), 2026-09-21

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
