---
id: guideline/microsoft/knowledge/finance/preserve-journal-batch-document-balance
type: guideline
title: Preserve the journal batch's document-balancing policy
summary: A balanced G/L total does not prove that a general-journal batch satisfies its template's document-balancing policy. "Gen. Jnl.-Post Batch" checks balances at posting-date boundaries and, when the journal template's Force Doc. Balance is enabled, document-type/document-number boundaries.
tier: official
language: en
tags:
  - force-doc-balance
  - gen-journal-template
  - gen-jnl-post-batch
  - runwithcheck
  - document-no
  - posting-date
  - balancing
system: finance
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:01.341Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: b3079ac22c7bc149de84c61005d417b0734e4cdf
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/finance/preserve-journal-batch-document-balance.md
    title: "microsoft/BCQuality: Preserve the journal batch's document-balancing policy"
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
repo_path: microsoft/knowledge/finance/preserve-journal-batch-document-balance.md
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
  - RunWithCheck
---

# Preserve the journal batch's document-balancing policy

> A balanced G/L total does not prove that a general-journal batch satisfies its template's document-balancing policy. "Gen. Jnl.-Post Batch" checks balances at posting-date boundaries and, when the journal template's Force Doc. Balance is enabled, document-type/document-number boundaries.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/finance/preserve-journal-batch-document-balance.md) · microsoft layer · finance · BC all · tier official · derived

## Description

A balanced G/L total does not prove that a general-journal batch satisfies its template's document-balancing policy. `"Gen. Jnl.-Post Batch"` checks balances at posting-date boundaries and, when the **journal template's** `Force Doc. Balance` is enabled, document-type/document-number boundaries. A loop over `"Gen. Jnl.-Post Line".RunWithCheck` does not reproduce these batch-level checks.

## Best Practice

Post normal persisted general-journal batches through their owning batch workflow. Keep balancing lines in the appropriate document/date group when the template requires it. The examples use two LCY G/L lines: opposite amounts under different document numbers are not a document-balanced transfer when `Force Doc. Balance` is true; the good example groups them under one document and retains the batch checks.

Do not claim every document must always balance: when that template option is false, the supported workflow can allow document imbalance while still checking the required aggregate balances. Standalone self-balancing line posting and purpose-built posting engines that demonstrably own equivalent aggregate policies are not prohibited. A `RunWithCheck` call or loop alone is not sufficient evidence of a defect.

See sample: [`preserve-journal-batch-document-balance.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/finance/preserve-journal-batch-document-balance.good.al).

## Anti Pattern

Replace a normal persisted journal batch's posting path with per-line posting or only an aggregate-total check, bypassing a demonstrated template/document/date policy. For the document-imbalance finding, require evidence that `Force Doc. Balance` applies and that separate document groups can be unbalanced; do not infer the setting from its name or a comment alone.

See sample: [`preserve-journal-batch-document-balance.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/finance/preserve-journal-batch-document-balance.bad.al).

## References

- [Work with general journals](https://learn.microsoft.com/en-us/dynamics365/business-central/ui-work-general-journals).
- [Gen. Jnl.-Post Batch API](https://learn.microsoft.com/en-us/dynamics365/business-central/application/base-application/codeunit/microsoft.finance.generalledger.posting.gen.-jnl.-post-batch).
- [BCApps: batch balance checks](https://github.com/microsoft/BCApps/blob/8f7a04cb0db8aa96cb97e055c45c61aead49e280/src/Layers/W1/BaseApp/Finance/GeneralLedger/Posting/GenJnlPostBatch.Codeunit.al).
- [BCApps: document-balance option regression cases](https://github.com/microsoft/BCApps/blob/8f7a04cb0db8aa96cb97e055c45c61aead49e280/src/Layers/W1/Tests/General%20Journal/ERMTestMultipleGenJnlLines.Codeunit.al).

## Examples

- [Good: preserve-journal-batch-document-balance.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/finance/preserve-journal-batch-document-balance.good.al)
- [Bad: preserve-journal-batch-document-balance.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/finance/preserve-journal-batch-document-balance.bad.al)

## Names

- [codeunit 13 "Gen. Jnl.-Post Batch"](../../../../objects/codeunit/13.md) (possibly related: a code span names it)

## Changed by

- [#57 Add source-verified Finance knowledge and review domain](../../../../changes/bcquality/57.md), 2026-09-21

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
