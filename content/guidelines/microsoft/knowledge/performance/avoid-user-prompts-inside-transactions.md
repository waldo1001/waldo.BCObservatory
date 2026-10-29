---
id: guideline/microsoft/knowledge/performance/avoid-user-prompts-inside-transactions
type: guideline
title: Do not hold locks while waiting for the user
summary: A Confirm, StrMenu, or other user prompt issued from inside a write transaction stalls the transaction — and therefore every lock it holds — until the user responds.
tier: official
language: en
tags:
  - confirm
  - strmenu
  - dialog
  - transaction
  - lock
  - user-interaction
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:44.573Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: f871c9879512edb1159a4a363352476565013486
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/avoid-user-prompts-inside-transactions.md
    title: "microsoft/BCQuality: Do not hold locks while waiting for the user"
    date: "2026-09-29"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/dialog/dialog-strmenu-method
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/161
    - change/bcquality/174
repo_path: microsoft/knowledge/performance/avoid-user-prompts-inside-transactions.md
layer: microsoft
kind: rule
domain: performance
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
  - StrMenu
---

# Do not hold locks while waiting for the user

> A Confirm, StrMenu, or other user prompt issued from inside a write transaction stalls the transaction — and therefore every lock it holds — until the user responds.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/avoid-user-prompts-inside-transactions.md) · microsoft layer · performance · BC all · tier official · derived

## Description

A `Confirm`, `StrMenu`, or other user prompt issued from inside a write transaction stalls the transaction — and therefore every lock it holds — until the user responds. Per the upstream guidance, "Avoid user interactions (Confirm, StrMenu) inside transactions — they hold locks while waiting for user input." The wait is bounded only by the user; meanwhile other sessions block on whatever this transaction has acquired.

## Best Practice

Sequence the operation so user confirmation happens *before* any database write that takes a lock the prompt holds open. The shape is: ask the user → if confirmed, acquire locks and post. `if Confirm(...) then begin SalesHeader.LockTable(); SalesHeader.Get(DocNo); PostSalesOrder(SalesHeader); end;` keeps the lock window down to the work itself.

See sample: [`avoid-user-prompts-inside-transactions.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/avoid-user-prompts-inside-transactions.good.al).

## Anti Pattern

`SalesHeader.LockTable(); SalesHeader.Get(DocNo); if Confirm('Post this order?') then ...;` — the lock is held for as long as the dialog is up. A user who steps away to lunch holds the lock for an hour, and every other session that touches that row blocks for the duration.

See sample: [`avoid-user-prompts-inside-transactions.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/avoid-user-prompts-inside-transactions.bad.al).

## Examples

- [Good: avoid-user-prompts-inside-transactions.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/avoid-user-prompts-inside-transactions.good.al)
- [Bad: avoid-user-prompts-inside-transactions.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/avoid-user-prompts-inside-transactions.bad.al)

## Names

- [Dialog.StrMenu(Text \[, Integer\] \[, Text\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/dialog/dialog-strmenu-method) (names StrMenu)

## Changed by

- [#161 AL methods limited during write transactions (RunModal, Codeunit.Run)](../../../../changes/bcquality/161.md), 2026-09-29
- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
