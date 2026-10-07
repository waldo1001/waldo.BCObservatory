---
id: topic/business-central/business-functionality/finance/reconcile-bank-accounts
type: topic
title: Reconcile bank accounts
summary: "Bank account reconciliation in Business Central: matching bank statements to ledger entries, applying payments to open invoices, using Copilot for matching, registering bank deposits, and transferring funds between bank accounts. Answers how-to questions about these tasks."
tier: official
language: en
system: finance
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:22:51.600Z"
  flags: []
generated:
  at: "2026-10-07T15:52:42.721Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: cd6e2673e52fcb45423e92115f673814484942a37d9e23d43382840a38e787ef
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
    date: "2026-04-07"
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
    - https://learn.microsoft.com/dynamics365/business-central/bank-how-transfer-bank-funds
  objects:
    - object/page/39
    - object/page/165
    - object/page/377
    - object/page/378
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
  posts:
    - post/thedynamicsexplorer-com/10232
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
  learn: 6
  code: 10
  video: 0
  blog: 1
  guideline: 0
bc_forms:
  - 39
  - 165
  - 377
  - 378
  - 1284
  - 1290
  - 1291
  - 1293
  - 1294
  - 1690
  - 10140
  - 10141
  - 10143
  - 10144
  - 10146
  - 10147
  - 10148
  - 36646
member_hash: 31fee08bdf4b262850c5c9c8cf469c7ad6450e0b10bc04c69b03a3ddfc821fb5
narrative: generated
---

# Reconcile bank accounts

> Bank account reconciliation in Business Central: matching bank statements to ledger entries, applying payments to open invoices, using Copilot for matching, registering bank deposits, and transferring funds between bank accounts. Answers how-to questions about these tasks.

Path: [Business functionality](../../business-functionality.md) > [Finance](../finance.md) > Reconcile bank accounts · tier official · system finance · narrative reviewed by Opus

## Overview

This section covers keeping cash records accurate. Reconciliation matches bank statement transactions with bank account ledger entries, using automatic and manual matching, so missing payments and errors show up. Statements can come from imports or bank feeds, and payments can be applied to open invoices through the Payment Reconciliation Journal.

The pages split by task. "Manage bank accounts" gives the general picture, "Reconcile bank accounts" explains the matching process, and "Reconcile bank accounts and apply payments" covers setup of bank feeds, statement import and payment matching rules. A preview page describes Copilot assistance for matching and suggesting G/L accounts. Two further pages cover creating bank deposits and transferring funds between bank accounts.

Start with "Manage bank accounts" or "Reconcile bank accounts" for the basics, then move to the payment application page if you need to apply payments to invoices automatically.

## Key points

- Reconciliation matches bank statement lines to bank account ledger entries using automatic and manual matching, and shows outstanding transactions.
- Statements can be imported or fed through bank feeds; the Payment Reconciliation Journal applies payments to open invoices automatically.
- Payment matching rules control how payments are matched to invoices.
- Copilot assistance (preview, 2025 release waves 1 and 2) improves transaction matching and suggests G/L accounts for unmatched transactions, supplementing auto-match.
- Copilot has a 'Post if fully applied' option, and match proposals can be reviewed and saved.
- Bank deposits (2022 release wave 1) register cash deposits as one document posting to bank, customer and vendor ledgers, as a lump sum or by individual line.
- Bank deposits handle multiple deposit sources and dimensions.
- Transfers between bank accounts use the General Journals page, with same or different currency codes and exchange rate adjustments.

## Learn pages

- [Create bank deposits](https://learn.microsoft.com/dynamics365/business-central/bank-create-bank-deposits): You can make deposits to maintain a transaction record that contains information that can be applied to outstanding invoices and credit memos.
- [Manage bank accounts](https://learn.microsoft.com/dynamics365/business-central/bank-manage-bank-accounts): You must regularly reconcile bank ledger entries with the related bank transactions in your bank accounts.
- [Reconcile bank accounts](https://learn.microsoft.com/dynamics365/business-central/bank-how-reconcile-bank-accounts-separately): Learn how to reconcile transactions in Business Central with transactions in statements from your bank.
- [Reconcile bank accounts and apply payments](https://learn.microsoft.com/dynamics365/business-central/receivables-apply-payments-auto-reconcile-bank-accounts): Outlines tasks to reconcile your bank, receivables, and payables accounts, post cash receipts or expenses, and apply payments automatically.
- [Reconcile bank accounts with Copilot (preview)](https://learn.microsoft.com/dynamics365/business-central/bank-reconciliation-with-copilot): Learn how to use Copilot to reconcile bank accounts in Business Central.
- [Transfer bank funds](https://learn.microsoft.com/dynamics365/business-central/bank-how-transfer-bank-funds): You can transfer amounts from one bank account to another, including different currencies, by posting the transaction in the general journal.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#10630 Extend OnBeforeCheckBankAcc to skip specific bank reversal checks](../../../../changes/bcapps/10630.md) (code change): "reversing bank account ledger entries"
- [#11055 Allow bank rec. duplicated transactions surfaced in UI](../../../../changes/bcapps/11055.md) (code change): "Bank reconciliation now exposes UI controls to allow users to process duplicate transactions"
- [#11056 29.x: Allow bank rec. duplicated transactions surfaced in UI](../../../../changes/bcapps/11056.md) (code change): "Bank reconciliation pages now expose functionality for handling duplicate transactions from bank statement imports"
- [Dynamics 365 Business Central – Three ways to post Sales Ledger Cash Receipts in Business Central](../../../../posts/thedynamicsexplorer-com/10232.md) (community post): "Bank Reconciliation method streamlines operations by posting cash receipts and reconciling them simultaneously"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 39 "General Journal"](../../../../objects/page/39.md) · captioned "General Journals" · on [Table 81 "Gen. Journal Line"](../../../../objects/table/81.md)
- [Page 165 "Bank Acc. Ledg. Entr. Preview"](../../../../objects/page/165.md) · on [Table 271 "Bank Account Ledger Entry"](../../../../objects/table/271.md)
- [Page 377 "Bank Account Balance"](../../../../objects/page/377.md) · on [Table 270 "Bank Account"](../../../../objects/table/270.md)
- [Page 378 "Bank Account Balance Lines"](../../../../objects/page/378.md) · captioned "Lines" · on [Table 929 "Bank Account Balance Buffer"](../../../../objects/table/929.md)
- [Page 1284 "Outstanding Bank Transactions"](../../../../objects/page/1284.md) · on [Table 1284 "Outstanding Bank Transaction"](../../../../objects/table/1284.md)
- [Page 1290 "Payment Reconciliation Journal"](../../../../objects/page/1290.md) · on [Table 274 "Bank Acc. Reconciliation Line"](../../../../objects/table/274.md)
- [Page 1291 "Pmt. Recon. Journal Overview"](../../../../objects/page/1291.md) · captioned "Payment Reconciliation Journal Overview" · on [Table 274 "Bank Acc. Reconciliation Line"](../../../../objects/table/274.md)
- [Page 1293 "Pmt. Rec. Journals Overview"](../../../../objects/page/1293.md) · captioned "Unprocessed Payments" · on [Table 273 "Bank Acc. Reconciliation"](../../../../objects/table/273.md)
- [Page 1294 "Pmt. Reconciliation Journals"](../../../../objects/page/1294.md) · captioned "Payment Reconciliation Journals" · on [Table 273 "Bank Acc. Reconciliation"](../../../../objects/table/273.md)
- [Page 1690 "Bank Deposit"](../../../../objects/page/1690.md) · on [Table 1690 "Bank Deposit Header"](../../../../objects/table/1690.md)

Learn also names 8 objects with no object page: page/10140, page/10141, page/10143, page/10144, page/10146, page/10147, page/10148, page/36646.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
