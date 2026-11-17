---
id: topic/business-central/business-functionality/finance/manage-payables/apply-payments-automatically-and-reconci
type: topic
title: Apply payments automatically and reconcile bank accounts
summary: Automatic payment application and bank account reconciliation in Business Central using the Payment Reconciliation Journal. It answers questions about matching bank statement lines to open customer, vendor and bank ledger entries, correcting matches manually, mapping recurring text to accounts, and transferring unapplied differences to an account.
tier: official
language: en
system: finance
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-17T01:01:17.322Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: ed8b45c97fc2e9d619837d6a239a9dc1d4993cfb2b6d06d874fb5170575c98c6
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/receivables-apply-payments-auto-reconcile-bank-accounts
    title: Reconcile bank accounts and apply payments
    date: "2026-11-16"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/receivables-how-reconcile-payments-auto-application
    title: Reconcile payments using automatic application
    date: "2026-11-16"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/receivables-how-review-apply-payments-auto-application
    title: Review and apply payments manually after automatic application
    date: "2026-11-16"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/receivables-how-map-text-recurring-payments-accounts-auto-reconcilliation
    title: Setting up Text-to-Account mapping for recurring payments
    date: "2026-11-16"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/receivables-how-reconcile-payments-cannot-apply-auto
    title: Using the transfer difference to account feature to reconcile payments
    date: "2026-11-16"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/receivables-apply-payments-auto-reconcile-bank-accounts
    - https://learn.microsoft.com/dynamics365/business-central/receivables-how-reconcile-payments-auto-application
    - https://learn.microsoft.com/dynamics365/business-central/receivables-how-review-apply-payments-auto-application
    - https://learn.microsoft.com/dynamics365/business-central/receivables-how-map-text-recurring-payments-accounts-auto-reconcilliation
    - https://learn.microsoft.com/dynamics365/business-central/receivables-how-reconcile-payments-cannot-apply-auto
  objects:
    - object/page/389
    - object/page/1287
    - object/page/1290
    - object/page/1291
    - object/page/1293
    - object/page/1294
  features: []
  topics:
    - topic/business-central/business-functionality/finance/manage-payables
  localizations: []
  videos: []
  posts:
    - post/demiliani-com/17609
  guidelines: []
  changes:
    - change/bcapps/10425
    - change/bcapps/10498
    - change/bcapps/11596
    - change/bcapps/13134
    - change/bcapps/13255
    - change/bcapps/13294
    - change/bcapps/13717
    - change/bcapps/9051
    - change/bcapps/9356
    - change/bcapps/9674
    - change/bcapps/9789
    - change/bcapps/9880
learn_toc_path:
  - Business functionality
  - Finance
  - Manage payables
  - Apply payments automatically and reconcile bank accounts
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/finance/manage-payables
children: []
coverage:
  learn: 5
  code: 6
  video: 0
  blog: 1
  guideline: 0
bc_forms:
  - 389
  - 1287
  - 1290
  - 1291
  - 1293
  - 1294
member_hash: 1f0e2b13ddf6488966df4785b764083d12a815179d6db3c4e365b4e8e5e35a1a
narrative: generated
---

# Apply payments automatically and reconcile bank accounts

> Automatic payment application and bank account reconciliation in Business Central using the Payment Reconciliation Journal. It answers questions about matching bank statement lines to open customer, vendor and bank ledger entries, correcting matches manually, mapping recurring text to accounts, and transferring unapplied differences to an account.

Path: [Business functionality](../../../business-functionality.md) > [Finance](../../finance.md) > [Manage payables](../manage-payables.md) > Apply payments automatically and reconcile bank accounts · tier official · system finance · narrative **unreviewed** (model text not yet checked)

## Overview

This section explains how to reconcile a bank account and apply payments with the Payment Reconciliation Journal. Bank statement transactions, imported from a file or a bank feed, are matched by payment text to open customer or vendor ledger entries and bank account ledger entries. You can review the suggested applications before posting.

The pages build on each other. Start with "Reconcile bank accounts and apply payments" for the overall process and setup, then "Reconcile payments using automatic application" for matching and Match Confidence levels. When a match is wrong or a payment must be split across several entries, use the page on reviewing and applying payments manually. Two further pages cover lines that have no open entry to apply to: Text-to-Account mapping for recurring items such as bank fees and interest, and Transfer Difference to Account for one-off amounts posted straight to an account.

## Key points

- The Payment Reconciliation Journal matches bank statement lines to open customer, vendor and bank account ledger entries using payment text.
- Bank statements can be imported from a file or a bank feed, and you can review changes before posting.
- The Match Confidence field shows how reliable each automatic match is, so you can focus review on weaker matches.
- On the Payment Application page, Apply Manually corrects a match or splits a payment across several open entries. Accept Application confirms a match. The Applied Amount field holds the amount applied to each entry.
- The Candidate Lookback (Days) setting is part of the manual review of candidate entries.
- Text-to-Account mapping posts recurring items such as bank fees and interest to a specified account, with a balancing account, and does not apply them to open entries.
- Transfer Difference to Account posts an unapplied amount directly to an account. You set the Account Type, Account No. and Description, and the Difference field shows the amount.

## Learn pages

- [Reconcile bank accounts and apply payments](https://learn.microsoft.com/dynamics365/business-central/receivables-apply-payments-auto-reconcile-bank-accounts): Outlines tasks to reconcile your bank, receivables, and payables accounts, post cash receipts or expenses, and apply payments automatically.
  - In the observatory: [Page 1252 "Payment Application Rules"](../../../../../objects/page/1252.md), [Page 379 "Bank Acc. Reconciliation"](../../../../../objects/page/379.md)
- [Reconcile payments using automatic application](https://learn.microsoft.com/dynamics365/business-central/receivables-how-reconcile-payments-auto-application): Describes how to reconcile payments using automatic application to apply payments or cash receipts to related open entries.
  - In the observatory: [Page 1252 "Payment Application Rules"](../../../../../objects/page/1252.md), [Page 1282 "Payment Bank Account List"](../../../../../objects/page/1282.md), [Page 1292 "Payment Application"](../../../../../objects/page/1292.md), [Page 1298 "Bank Statement Filter"](../../../../../objects/page/1298.md), [Report 1407 "Bank Account Statement"](../../../../../objects/report/1407.md)
- [Review and apply payments manually after automatic application](https://learn.microsoft.com/dynamics365/business-central/receivables-how-review-apply-payments-auto-application): After payments are applied automatically, you can review all the entries for a payment and manually reapply those that were applied incorrectly.
  - In the observatory: [Page 1253 "Payment Application Settings"](../../../../../objects/page/1253.md), [Page 1292 "Payment Application"](../../../../../objects/page/1292.md), [Page 25 "Customer Ledger Entries"](../../../../../objects/page/25.md), [Page 29 "Vendor Ledger Entries"](../../../../../objects/page/29.md)
- [Setting up Text-to-Account mapping for recurring payments](https://learn.microsoft.com/dynamics365/business-central/receivables-how-map-text-recurring-payments-accounts-auto-reconcilliation): Link text on payments with specific accounts, so that payments are posted to the accounts when you post the payment reconciliation journal.
  - In the observatory: [Page 1251 "Text-to-Account Mapping"](../../../../../objects/page/1251.md)
- [Using the transfer difference to account feature to reconcile payments](https://learn.microsoft.com/dynamics365/business-central/receivables-how-reconcile-payments-cannot-apply-auto): Describes how to process payments that can't be applied to a document, for example, when an exchange rate causes amounts to differ.
  - In the observatory: [Page 1297 "Transfer Difference to Account"](../../../../../objects/page/1297.md)

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#10425 [master] Remittance Advice Report (ID 10083) prints Amount Due = 0 when using Suggest Vendor Payments with Summarize Per Vendor](../../../../../changes/bcapps/10425.md) (code change): "Remittance Advice Report correctly displays the Amount Due field"
- [#10498 [Pmt. Recon. Journal] Optimize opening of the Payment Application screen](../../../../../changes/bcapps/10498.md) (code change): "Payment application screen opening is optimized by adding a date filter"
- [#11596 [Main]Customer Direct Debit Payment Slip – SEPA File Generation Fails and Credit Memo Is Processed Incorrectly When Invoice and Credit Memo Exist for the Same Customer in the French version.](../../../../../changes/bcapps/11596.md) (code change): "Fixes SEPA Direct Debit export and customer payment slip posting"
- [#13134 [main] Bug 656172 Payment Slips Summarized by Due Date are not aggregating correlative in the French version.](../../../../../changes/bcapps/13134.md) (code change): "Suggest Cust. Payments and Suggest Vend. Payments reports now aggregate"
- [#13255 [Main]-Exporting vendor remittance gets stuck when a payment jour nal is sorted by Document No.](../../../../../changes/bcapps/13255.md) (code change): "Fixed vendor remittance export hanging when a payment journal is sorted"
- [#13294 [29.x]-Exporting vendor remittance gets stuck when a payment jour nal is sorted by Document No.](../../../../../changes/bcapps/13294.md) (code change): "Exporting vendor remittance gets stuck when a payment journal is sorted"
- [#13717 [Main]- Export Electronic Payments: one vendor's missing email can clear another vendor's Document No.](../../../../../changes/bcapps/13717.md) (code change): "Fixed a bug in electronic payments export where a missing email address"
- [#9051 [639592][ALAppExtensions #30277][Event Request] Codeunit 426 "Payment Tolerance Management" OnPmtTolGenJnlOnAfterCheckConditions](../../../../../changes/bcapps/9051.md) (code change): "Codeunit 426 Payment Tolerance Management exposes event allowing subscribers to modify general journal lines"
- [#9356 [Main]-Payment XML file generated from EB Payment Journal upon selecting "FCY Symbol" includes currency text](../../../../../changes/bcapps/9356.md) (code change): "Payment XML files exported from EB Payment Journal now correctly exclude currency text"
- [#9674 Fix missing table permissions on Stale Check action in Check Management Subscriber](../../../../../changes/bcapps/9674.md) (code change): "Stale Check action was failing due to missing Modify permissions"
- [#9789 [Main]-Payment discount tolerance is doubled when posting a vendor payment](../../../../../changes/bcapps/9789.md) (code change): "payment discount tolerance was calculated twice for vendor payments"
- [#9880 [Bug Fix] #620132: Prevent IRS 1099 data on vendor ledger entries of non-1099 vendors](../../../../../changes/bcapps/9880.md) (code change): "Prevent IRS 1099 data on vendor ledger entries of non-1099 vendors"
- [AI and prompt injections: the invoice that approves itself.](../../../../../posts/demiliani-com/17609.md) (community post): "hidden white text in a PDF swaps the IBAN and marks the invoice as approved"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 389 "Bank Account Statement List"](../../../../../objects/page/389.md) · on [Table 275 "Bank Account Statement"](../../../../../objects/table/275.md)
- [Page 1287 "Payment Application Review"](../../../../../objects/page/1287.md) · on [Table 274 "Bank Acc. Reconciliation Line"](../../../../../objects/table/274.md)
- [Page 1290 "Payment Reconciliation Journal"](../../../../../objects/page/1290.md) · on [Table 274 "Bank Acc. Reconciliation Line"](../../../../../objects/table/274.md)
- [Page 1291 "Pmt. Recon. Journal Overview"](../../../../../objects/page/1291.md) · captioned "Payment Reconciliation Journal Overview" · on [Table 274 "Bank Acc. Reconciliation Line"](../../../../../objects/table/274.md)
- [Page 1293 "Pmt. Rec. Journals Overview"](../../../../../objects/page/1293.md) · captioned "Unprocessed Payments" · on [Table 273 "Bank Acc. Reconciliation"](../../../../../objects/table/273.md)
- [Page 1294 "Pmt. Reconciliation Journals"](../../../../../objects/page/1294.md) · captioned "Payment Reconciliation Journals" · on [Table 273 "Bank Acc. Reconciliation"](../../../../../objects/table/273.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
