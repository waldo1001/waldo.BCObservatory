---
id: topic/business-central/business-functionality/finance/reconcile-bank-accounts
type: topic
title: Reconcile bank accounts
summary: "Bank account reconciliation in Business Central: setting up bank accounts, importing statements, matching entries automatically or manually, applying payments, using Copilot assist, reviewing posted reconciliations, registering bank deposits, and transferring funds between accounts."
tier: official
language: en
system: finance
review:
  state: reviewed
  by: opus
  at: "2026-10-30T08:08:43.615Z"
  flags: []
generated:
  at: "2026-10-30T08:09:06.421Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 247f864481a91c649ec835867759bfb75a0c6db40f33e8ede155c1769ff58bc2
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/bank-create-bank-deposits
    title: Create bank deposits
    date: "2024-09-27"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/bank-manage-bank-accounts
    title: Manage bank accounts
    date: "2024-07-24"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/bank-how-reconcile-bank-accounts-separately
    title: Reconcile bank accounts
    date: "2026-10-26"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/receivables-apply-payments-auto-reconcile-bank-accounts
    title: Reconcile bank accounts and apply payments
    date: "2024-07-25"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/bank-reconciliation-with-copilot
    title: Reconcile bank accounts with Copilot (preview)
    date: "2026-10-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/bank-review-posted-reconciliations
    title: Review and analyze posted bank reconciliations
    date: "2026-10-26"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/bank-how-transfer-bank-funds
    title: Transfer bank funds
    date: "2024-07-25"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/bank-create-bank-deposits
    - https://learn.microsoft.com/dynamics365/business-central/bank-manage-bank-accounts
    - https://learn.microsoft.com/dynamics365/business-central/bank-how-reconcile-bank-accounts-separately
    - https://learn.microsoft.com/dynamics365/business-central/receivables-apply-payments-auto-reconcile-bank-accounts
    - https://learn.microsoft.com/dynamics365/business-central/bank-reconciliation-with-copilot
    - https://learn.microsoft.com/dynamics365/business-central/bank-review-posted-reconciliations
    - https://learn.microsoft.com/dynamics365/business-central/bank-how-transfer-bank-funds
  objects:
    - object/page/39
    - object/page/165
    - object/page/377
    - object/page/378
    - object/page/383
    - object/page/389
    - object/page/1284
    - object/page/1290
    - object/page/1291
    - object/page/1293
    - object/page/1294
    - object/page/1690
  features: []
  topics:
    - topic/business-central/business-functionality/finance
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcapps/10630
    - change/bcapps/11055
    - change/bcapps/11056
learn_toc_path:
  - Business functionality
  - Finance
  - Reconcile bank accounts
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/finance
children: []
coverage:
  learn: 7
  code: 12
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 39
  - 165
  - 377
  - 378
  - 383
  - 389
  - 1284
  - 1290
  - 1291
  - 1293
  - 1294
  - 1407
  - 1690
  - 10140
  - 10141
  - 10143
  - 10144
  - 10146
  - 10147
  - 10148
  - 36646
member_hash: 7b2d91029f26d165b74445d585f8e222d14c6248f1a88588662fd7ea5ca03d96
narrative: generated
---

# Reconcile bank accounts

> Bank account reconciliation in Business Central: setting up bank accounts, importing statements, matching entries automatically or manually, applying payments, using Copilot assist, reviewing posted reconciliations, registering bank deposits, and transferring funds between accounts.

Path: [Business functionality](../../business-functionality.md) > [Finance](../finance.md) > Reconcile bank accounts · tier official · system finance · narrative reviewed (checked by Opus)

## Overview

This section covers the regular and period-end work of keeping bank records in line with the ledger. The core pages explain how to set up bank accounts, import bank statements, and match statement lines to ledger entries with automatic and manual matching. Reconciling helps find missing payments and bookkeeping errors, and posting updates account balances.

A related page covers the Payment Reconciliation Journal, which applies payments to open invoices automatically. That page also covers bank feed setup and payment matching rules. Copilot reconciliation assist (preview) adds AI-based matching and G/L account suggestions on top of the auto-match operation.

Other pages cover tasks around reconciliation: registering cash deposits as a single bank deposit document, transferring funds between bank accounts on the General Journals page (including between different currencies), and reviewing posted reconciliations on Bank Account Statement pages and reports. Start with "Reconcile bank accounts" or "Manage bank accounts", then go to the task-specific pages.

## Key points

- Reconciliation matches bank statement entries with ledger entries using automatic and manual matching, with match details and a test report.
- Bank statements can be imported, and bank feeds can be set up, to feed reconciliation and payment application.
- The Payment Reconciliation Journal applies payments to open invoices automatically using payment matching rules.
- Copilot reconciliation assist (preview, 2025 release waves 1 and 2) improves transaction matching and suggests G/L accounts for unmatched transactions.
- Copilot has a 'Post if fully applied' option, and match proposals can be reviewed and saved.
- Bank deposits (2022 release wave 1) register cash deposits as one document, posted as a lump sum or by individual line, with number series, journal templates, and dimension handling.
- Transfers between bank accounts are done on the General Journals page, with same or different currency codes and exchange rate adjustments.
- Posted reconciliations can be reviewed in Bank Account Statement pages, with analysis mode, filtering, grouping, and printing or saving, for period-end reviews and audits.

## Learn pages

- [Create bank deposits](https://learn.microsoft.com/dynamics365/business-central/bank-create-bank-deposits): You can make deposits to maintain a transaction record that contains information that can be applied to outstanding invoices and credit memos.
  - In the observatory: [Page 101 "General Journal Templates"](../../../../objects/page/101.md), [Page 116 "G/L Registers"](../../../../objects/page/116.md), [Page 1692 "Bank Deposits"](../../../../objects/page/1692.md), [Page 232 "Apply Customer Entries"](../../../../objects/page/232.md), [Page 459 "Sales & Receivables Setup"](../../../../objects/page/459.md), [Page 543 "Default Dimension Priorities"](../../../../objects/page/543.md)
- [Manage bank accounts](https://learn.microsoft.com/dynamics365/business-central/bank-manage-bank-accounts): You must regularly reconcile bank ledger entries with the related bank transactions in your bank accounts.
  - In the observatory: [Page 1290 "Payment Reconciliation Journal"](../../../../objects/page/1290.md), [Page 379 "Bank Acc. Reconciliation"](../../../../objects/page/379.md)
- [Reconcile bank accounts](https://learn.microsoft.com/dynamics365/business-central/bank-how-reconcile-bank-accounts-separately): Learn how to reconcile transactions in Business Central with transactions in statements from your bank.
  - In the observatory: [Page 1290 "Payment Reconciliation Journal"](../../../../objects/page/1290.md), [Page 379 "Bank Acc. Reconciliation"](../../../../objects/page/379.md), [Page 389 "Bank Account Statement List"](../../../../objects/page/389.md), [Report 1407 "Bank Account Statement"](../../../../objects/report/1407.md)
- [Reconcile bank accounts and apply payments](https://learn.microsoft.com/dynamics365/business-central/receivables-apply-payments-auto-reconcile-bank-accounts): Outlines tasks to reconcile your bank, receivables, and payables accounts, post cash receipts or expenses, and apply payments automatically.
  - In the observatory: [Page 1252 "Payment Application Rules"](../../../../objects/page/1252.md), [Page 379 "Bank Acc. Reconciliation"](../../../../objects/page/379.md)
- [Reconcile bank accounts with Copilot (preview)](https://learn.microsoft.com/dynamics365/business-central/bank-reconciliation-with-copilot): Learn how to use Copilot to reconcile bank accounts in Business Central.
  - In the observatory: [Page 1251 "Text-to-Account Mapping"](../../../../objects/page/1251.md), [Page 379 "Bank Acc. Reconciliation"](../../../../objects/page/379.md)
- [Review and analyze posted bank reconciliations](https://learn.microsoft.com/dynamics365/business-central/bank-review-posted-reconciliations): Learn how to review posted bank reconciliations, compare statement history, and save a detailed report for period-end reviews and audit evidence.
  - In the observatory: [Page 379 "Bank Acc. Reconciliation"](../../../../objects/page/379.md), [Report 1407 "Bank Account Statement"](../../../../objects/report/1407.md)
- [Transfer bank funds](https://learn.microsoft.com/dynamics365/business-central/bank-how-transfer-bank-funds): You can transfer amounts from one bank account to another, including different currencies, by posting the transaction in the general journal.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#10630 Extend OnBeforeCheckBankAcc to skip specific bank reversal checks](../../../../changes/bcapps/10630.md) (code change): "skip specific bank reversal checks when reversing bank account ledger entries"
- [#11055 Allow bank rec. duplicated transactions surfaced in UI](../../../../changes/bcapps/11055.md) (code change): "Bank reconciliation now exposes UI controls to allow users to process duplicate transactions"
- [#11056 29.x: Allow bank rec. duplicated transactions surfaced in UI](../../../../changes/bcapps/11056.md) (code change): "Bank Acc. Reconciliation and Payment Reconciliation Journal pages now expose an existing option to allow duplicated transactions"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 39 "General Journal"](../../../../objects/page/39.md) · captioned "General Journals" · on [Table 81 "Gen. Journal Line"](../../../../objects/table/81.md)
- [Page 165 "Bank Acc. Ledg. Entr. Preview"](../../../../objects/page/165.md) · on [Table 271 "Bank Account Ledger Entry"](../../../../objects/table/271.md)
- [Page 377 "Bank Account Balance"](../../../../objects/page/377.md) · on [Table 270 "Bank Account"](../../../../objects/table/270.md)
- [Page 378 "Bank Account Balance Lines"](../../../../objects/page/378.md) · captioned "Lines" · on [Table 929 "Bank Account Balance Buffer"](../../../../objects/table/929.md)
- [Page 383 "Bank Account Statement"](../../../../objects/page/383.md) · on [Table 275 "Bank Account Statement"](../../../../objects/table/275.md)
- [Page 389 "Bank Account Statement List"](../../../../objects/page/389.md) · on [Table 275 "Bank Account Statement"](../../../../objects/table/275.md)
- [Page 1284 "Outstanding Bank Transactions"](../../../../objects/page/1284.md) · on [Table 1284 "Outstanding Bank Transaction"](../../../../objects/table/1284.md)
- [Page 1290 "Payment Reconciliation Journal"](../../../../objects/page/1290.md) · on [Table 274 "Bank Acc. Reconciliation Line"](../../../../objects/table/274.md)
- [Page 1291 "Pmt. Recon. Journal Overview"](../../../../objects/page/1291.md) · captioned "Payment Reconciliation Journal Overview" · on [Table 274 "Bank Acc. Reconciliation Line"](../../../../objects/table/274.md)
- [Page 1293 "Pmt. Rec. Journals Overview"](../../../../objects/page/1293.md) · captioned "Unprocessed Payments" · on [Table 273 "Bank Acc. Reconciliation"](../../../../objects/table/273.md)
- [Page 1294 "Pmt. Reconciliation Journals"](../../../../objects/page/1294.md) · captioned "Payment Reconciliation Journals" · on [Table 273 "Bank Acc. Reconciliation"](../../../../objects/table/273.md)
- [Page 1690 "Bank Deposit"](../../../../objects/page/1690.md) · on [Table 1690 "Bank Deposit Header"](../../../../objects/table/1690.md)

Learn also names 9 objects with no object page: page/1407, page/10140, page/10141, page/10143, page/10144, page/10146, page/10147, page/10148, page/36646.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
