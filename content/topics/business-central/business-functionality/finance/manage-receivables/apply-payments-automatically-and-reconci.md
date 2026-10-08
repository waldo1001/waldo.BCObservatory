---
id: topic/business-central/business-functionality/finance/manage-receivables/apply-payments-automatically-and-reconci
type: topic
title: Apply payments automatically and reconcile bank accounts
summary: "Payment reconciliation in Business Central: importing bank statements or bank feeds, automatically applying payments to open customer and vendor entries, setting matching rules, handling recurring payments with Text-to-Account mapping, and resolving leftovers manually. It answers how-to questions about the Payment Reconciliation Journal and bank reconciliation."
tier: official
language: en
system: finance
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:22:54.616Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: cea8e8dbca986b6d27f4050960cc6134b3da9a751dfb46696b1f7f59afd533ef
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/receivables-apply-payments-auto-reconcile-bank-accounts
    title: Reconcile bank accounts and apply payments
    date: "2024-07-25"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/receivables-how-reconcile-payments-auto-application
    title: Reconcile payments using automatic application
    date: "2024-06-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/receivables-how-review-apply-payments-auto-application
    title: Review and apply payments manually after automatic application
    date: "2026-09-07"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/receivables-how-set-up-payment-application-rules
    title: Rules for automatic application of payments
    date: "2024-06-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/receivables-how-map-text-recurring-payments-accounts-auto-reconcilliation
    title: Setting up Text-to-Account mapping for recurring payments
    date: "2024-03-06"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/receivables-how-reconcile-payments-cannot-apply-auto
    title: Using the transfer difference to account feature to reconcile payments
    date: "2024-07-08"
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
  posts: []
  guidelines: []
  changes:
    - change/bcapps/10376
    - change/bcapps/10412
    - change/bcapps/10819
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
  blog: 0
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

> Payment reconciliation in Business Central: importing bank statements or bank feeds, automatically applying payments to open customer and vendor entries, setting matching rules, handling recurring payments with Text-to-Account mapping, and resolving leftovers manually. It answers how-to questions about the Payment Reconciliation Journal and bank reconciliation.

Path: [Business functionality](../../../business-functionality.md) > [Finance](../../finance.md) > [Manage receivables](../manage-receivables.md) > Apply payments automatically and reconcile bank accounts · tier official · system finance · narrative reviewed (checked by Opus)

## Overview

This section covers how to match bank transactions to open invoices and reconcile bank accounts using the Payment Reconciliation Journal. You import a bank statement or use a bank feed. Business Central then applies payments automatically to open customer and vendor entries, using matching rules and a match confidence level.

Two pages give the overall process and the automatic application steps. The rules page explains how to set matching criteria, such as document number, related party and amount tolerance, along with priority sorting and confidence levels. The Text-to-Account page covers automatic posting of recurring payments to specified accounts when match confidence is Low or Medium. Two more pages cover what to do when automatic application is not enough. You can review and reapply payments on the Payment Application page, or use Transfer Difference to Account for payments that have no matching document or have amount differences.

Start with "Reconcile bank accounts and apply payments" for the overview, then "Reconcile payments using automatic application" for the working steps. Read the rules page if matches are wrong or missing.

## Key points

- Payments are reconciled on the Payment Reconciliation Journal, after a bank statement import or bank feed.
- Automatic application matches payments to open customer and vendor entries and assigns a match confidence.
- Payment application rules set matching criteria: document number, related party, amount tolerance, with priority sorting and confidence levels.
- Text-to-Account mapping posts recurring payments directly to debit and credit accounts when match confidence is Low or Medium.
- The Payment Application page lets you review automatic results and manually apply or reapply payments, including split payments.
- Manual application accounts for currency conversion, payment discounts, and a candidate lookback days parameter.
- Transfer Difference to Account handles payments with no matching document or with amount differences.

## Learn pages

- [Reconcile bank accounts and apply payments](https://learn.microsoft.com/dynamics365/business-central/receivables-apply-payments-auto-reconcile-bank-accounts): Outlines tasks to reconcile your bank, receivables, and payables accounts, post cash receipts or expenses, and apply payments automatically.
- [Reconcile payments using automatic application](https://learn.microsoft.com/dynamics365/business-central/receivables-how-reconcile-payments-auto-application): Describes how to reconcile payments using automatic application to apply payments or cash receipts to related open entries.
- [Review and apply payments manually after automatic application](https://learn.microsoft.com/dynamics365/business-central/receivables-how-review-apply-payments-auto-application): After payments are applied automatically, you can review all the entries for a payment and manually reapply those that were applied incorrectly.
- [Rules for automatic application of payments](https://learn.microsoft.com/dynamics365/business-central/receivables-how-set-up-payment-application-rules): Read about how to set Up Rules for the Automatic Application of Payments on the Payment Application Rules page.
- [Setting up Text-to-Account mapping for recurring payments](https://learn.microsoft.com/dynamics365/business-central/receivables-how-map-text-recurring-payments-accounts-auto-reconcilliation): Link text on payments with specific accounts, so that payments are posted to the accounts when you post the payment reconciliation journal.
- [Using the transfer difference to account feature to reconcile payments](https://learn.microsoft.com/dynamics365/business-central/receivables-how-reconcile-payments-cannot-apply-auto): Describes how to process payments that can't be applied to a document, for example, when an exchange rate causes amounts to differ.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#10376 [Main] Fix unbalanced G/L when a Credit Memo is applied to a rejected/redraw…](../../../../../changes/bcapps/10376.md) (code change): "Credit memos applied to rejected bills now post the Rejected Bills Account"
- [#10412 Fixes in Excel reports for Aged Accounts.](../../../../../changes/bcapps/10412.md) (code change): "Aged Accounts Excel reports now properly handle customers and vendors"
- [#10819 [Pmt. Recon. Journal] Re-fire OnAfterGetLedgEntryInfo on proposal fast path](../../../../../changes/bcapps/10819.md) (code change): "OnAfterGetLedgEntryInfo event is re-fired during payment proposal creation"
- [#8953 [Master]-Aged account receivable EXCEL and Aged account payable EXCEL ignores "Period Count" specified by user.](../../../../../changes/bcapps/8953.md) (code change): "Aged Accounts Receivable and Payable Excel reports now correctly respect the Period Count parameter"
- [#9673 Bug 643235: Payment Reconciliation Journal does not round imported bank fee amounts](../../../../../changes/bcapps/9673.md) (code change): "Payment reconciliation journal posting now rounds imported bank fee amounts"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 389 "Bank Account Statement List"](../../../../../objects/page/389.md) · on [Table 275 "Bank Account Statement"](../../../../../objects/table/275.md)
- [Page 1287 "Payment Application Review"](../../../../../objects/page/1287.md) · on [Table 274 "Bank Acc. Reconciliation Line"](../../../../../objects/table/274.md)
- [Page 1290 "Payment Reconciliation Journal"](../../../../../objects/page/1290.md) · on [Table 274 "Bank Acc. Reconciliation Line"](../../../../../objects/table/274.md)
- [Page 1291 "Pmt. Recon. Journal Overview"](../../../../../objects/page/1291.md) · captioned "Payment Reconciliation Journal Overview" · on [Table 274 "Bank Acc. Reconciliation Line"](../../../../../objects/table/274.md)
- [Page 1293 "Pmt. Rec. Journals Overview"](../../../../../objects/page/1293.md) · captioned "Unprocessed Payments" · on [Table 273 "Bank Acc. Reconciliation"](../../../../../objects/table/273.md)
- [Page 1294 "Pmt. Reconciliation Journals"](../../../../../objects/page/1294.md) · captioned "Payment Reconciliation Journals" · on [Table 273 "Bank Acc. Reconciliation"](../../../../../objects/table/273.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
