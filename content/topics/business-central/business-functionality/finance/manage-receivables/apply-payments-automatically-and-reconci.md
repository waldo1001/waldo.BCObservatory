---
id: topic/business-central/business-functionality/finance/manage-receivables/apply-payments-automatically-and-reconci
type: topic
title: Apply payments automatically and reconcile bank accounts
summary: Automatic payment application and bank reconciliation in Business Central's Payment Reconciliation Journal. It answers questions about matching bank statement lines to open customer, vendor, and bank ledger entries, setting matching rules, mapping recurring text to accounts, and fixing matches manually.
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
  input_hash: cd1f5afba2e75889b55a7b06a6e1ac21f9f02ad79a6446317970375291bab8c2
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
    url: https://learn.microsoft.com/dynamics365/business-central/receivables-how-set-up-payment-application-rules
    title: Rules for automatic application of payments
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
    - https://learn.microsoft.com/dynamics365/business-central/receivables-how-set-up-payment-application-rules
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
    - topic/business-central/business-functionality/finance/manage-receivables
  localizations: []
  videos: []
  posts:
    - post/thedynamicsexplorer-com/10232
  guidelines: []
  changes:
    - change/bcapps/10376
    - change/bcapps/10412
    - change/bcapps/10819
    - change/bcapps/13458
    - change/bcapps/8953
    - change/bcapps/9673
learn_toc_path:
  - Business functionality
  - Finance
  - Manage receivables
  - Apply payments automatically and reconcile bank accounts
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/finance/manage-receivables
children: []
coverage:
  learn: 6
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
member_hash: 946c690f49a2895ab0bead402178c57b0511aff467005cdb198a18c3d74dc897
narrative: generated
---

# Apply payments automatically and reconcile bank accounts

> Automatic payment application and bank reconciliation in Business Central's Payment Reconciliation Journal. It answers questions about matching bank statement lines to open customer, vendor, and bank ledger entries, setting matching rules, mapping recurring text to accounts, and fixing matches manually.

Path: [Business functionality](../../../business-functionality.md) > [Finance](../../finance.md) > [Manage receivables](../manage-receivables.md) > Apply payments automatically and reconcile bank accounts · tier official · system finance · narrative **unreviewed** (model text not yet checked)

## Overview

This section covers how Business Central reconciles bank accounts and applies payments with little manual work. The Payment Reconciliation Journal imports bank statement lines (for example through a bank feed) and matches payment text to open customer or vendor ledger entries. You can review the proposed changes before posting.

The pages build on each other. Start with the general page on reconciling bank accounts and applying payments, then read the page on automatic application for the matching flow and Match Confidence levels. The rules page explains how matching is governed by related party information, document numbers, and amount tolerance. Text-to-Account mapping handles recurring items such as bank fees and interest, which are posted to an account instead of being applied to open entries.

For lines that automatic matching gets wrong or cannot match, two pages cover the fallback. The Payment Application page lets you correct matches or split a payment across several open entries. The transfer difference to account feature posts any unapplied amount directly to a chosen account.

## Key points

- The Payment Reconciliation Journal matches bank statement transactions to open customer, vendor, and bank account ledger entries, and you can review the result before posting.
- Bank statement lines can be imported, including through a bank feed, as the starting point for reconciliation.
- Match Confidence levels show how reliable each automatic match is.
- Application rules set priority order and matching criteria: related party, document numbers, and amount tolerance. They also set review requirements.
- Text-to-Account mapping posts recurring payments, such as bank fees and interest, to a specified account without applying them to open entries. A balancing account can be specified.
- On the Payment Application page, use Apply Manually to fix a match or split a payment. Use Accept Application to confirm a match. The page has Applied Amount and Match Confidence fields and a Candidate Lookback (Days) setting.
- Transfer Difference to Account posts an unapplied amount to a chosen account. You set Account Type, Account No., and Description for it.

## Learn pages

- [Reconcile bank accounts and apply payments](https://learn.microsoft.com/dynamics365/business-central/receivables-apply-payments-auto-reconcile-bank-accounts): Outlines tasks to reconcile your bank, receivables, and payables accounts, post cash receipts or expenses, and apply payments automatically.
  - In the observatory: [Page 1252 "Payment Application Rules"](../../../../../objects/page/1252.md), [Page 379 "Bank Acc. Reconciliation"](../../../../../objects/page/379.md)
- [Reconcile payments using automatic application](https://learn.microsoft.com/dynamics365/business-central/receivables-how-reconcile-payments-auto-application): Describes how to reconcile payments using automatic application to apply payments or cash receipts to related open entries.
  - In the observatory: [Page 1252 "Payment Application Rules"](../../../../../objects/page/1252.md), [Page 1282 "Payment Bank Account List"](../../../../../objects/page/1282.md), [Page 1292 "Payment Application"](../../../../../objects/page/1292.md), [Page 1298 "Bank Statement Filter"](../../../../../objects/page/1298.md), [Report 1407 "Bank Account Statement"](../../../../../objects/report/1407.md)
- [Review and apply payments manually after automatic application](https://learn.microsoft.com/dynamics365/business-central/receivables-how-review-apply-payments-auto-application): After payments are applied automatically, you can review all the entries for a payment and manually reapply those that were applied incorrectly.
  - In the observatory: [Page 1253 "Payment Application Settings"](../../../../../objects/page/1253.md), [Page 1292 "Payment Application"](../../../../../objects/page/1292.md), [Page 25 "Customer Ledger Entries"](../../../../../objects/page/25.md), [Page 29 "Vendor Ledger Entries"](../../../../../objects/page/29.md)
- [Rules for automatic application of payments](https://learn.microsoft.com/dynamics365/business-central/receivables-how-set-up-payment-application-rules): Read about how to set Up Rules for the Automatic Application of Payments on the Payment Application Rules page.
  - In the observatory: [Page 1252 "Payment Application Rules"](../../../../../objects/page/1252.md)
- [Setting up Text-to-Account mapping for recurring payments](https://learn.microsoft.com/dynamics365/business-central/receivables-how-map-text-recurring-payments-accounts-auto-reconcilliation): Link text on payments with specific accounts, so that payments are posted to the accounts when you post the payment reconciliation journal.
  - In the observatory: [Page 1251 "Text-to-Account Mapping"](../../../../../objects/page/1251.md)
- [Using the transfer difference to account feature to reconcile payments](https://learn.microsoft.com/dynamics365/business-central/receivables-how-reconcile-payments-cannot-apply-auto): Describes how to process payments that can't be applied to a document, for example, when an exchange rate causes amounts to differ.
  - In the observatory: [Page 1297 "Transfer Difference to Account"](../../../../../objects/page/1297.md)

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#10376 [Main] Fix unbalanced G/L when a Credit Memo is applied to a rejected/redraw…](../../../../../changes/bcapps/10376.md) (code change): "Credit memos applied to rejected bills now post the Rejected Bills Account"
- [#10412 Fixes in Excel reports for Aged Accounts.](../../../../../changes/bcapps/10412.md) (code change): "Aged Accounts Excel reports now properly handle customers and vendors"
- [#10819 [Pmt. Recon. Journal] Re-fire OnAfterGetLedgEntryInfo on proposal fast path](../../../../../changes/bcapps/10819.md) (code change): "OnAfterGetLedgEntryInfo event is re-fired during payment proposal creation"
- [#13458 [Master]-Applying entries across posting groups (Allow Multiple Posting Groups) posts the G/L entries that move the amount between receivables accounts with ACY = 0](../../../../../changes/bcapps/13458.md) (code change): "G/L entries that move the amount between receivables accounts were posted with an additional-currency amount"
- [#8953 [Master]-Aged account receivable EXCEL and Aged account payable EXCEL ignores "Period Count" specified by user.](../../../../../changes/bcapps/8953.md) (code change): "Aged Accounts Receivable and Payable Excel reports now correctly respect the Period Count parameter"
- [#9673 Bug 643235: Payment Reconciliation Journal does not round imported bank fee amounts](../../../../../changes/bcapps/9673.md) (code change): "Payment reconciliation journal posting now rounds imported bank fee amounts"
- [Dynamics 365 Business Central – Three ways to post Sales Ledger Cash Receipts in Business Central](../../../../../posts/thedynamicsexplorer-com/10232.md) (community post): "Cash receipts and reconciling them simultaneously when importing bank statements"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 389 "Bank Account Statement List"](../../../../../objects/page/389.md) · on [Table 275 "Bank Account Statement"](../../../../../objects/table/275.md)
- [Page 1287 "Payment Application Review"](../../../../../objects/page/1287.md) · on [Table 274 "Bank Acc. Reconciliation Line"](../../../../../objects/table/274.md)
- [Page 1290 "Payment Reconciliation Journal"](../../../../../objects/page/1290.md) · on [Table 274 "Bank Acc. Reconciliation Line"](../../../../../objects/table/274.md)
- [Page 1291 "Pmt. Recon. Journal Overview"](../../../../../objects/page/1291.md) · captioned "Payment Reconciliation Journal Overview" · on [Table 274 "Bank Acc. Reconciliation Line"](../../../../../objects/table/274.md)
- [Page 1293 "Pmt. Rec. Journals Overview"](../../../../../objects/page/1293.md) · captioned "Unprocessed Payments" · on [Table 273 "Bank Acc. Reconciliation"](../../../../../objects/table/273.md)
- [Page 1294 "Pmt. Reconciliation Journals"](../../../../../objects/page/1294.md) · captioned "Payment Reconciliation Journals" · on [Table 273 "Bank Acc. Reconciliation"](../../../../../objects/table/273.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
