---
id: topic/business-central/business-functionality/finance/manage-payables/apply-payments-automatically-and-reconci
type: topic
title: Apply payments automatically and reconcile bank accounts
summary: "Payment reconciliation in Business Central: importing bank statements or bank feeds, applying payments automatically to open customer and vendor entries, and reconciling bank accounts. It answers questions on automatic application, match confidence, Text-to-Account mapping, manual review, and handling unmatched or differing amounts."
tier: official
language: en
system: finance
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:23:48.170Z"
  flags: []
generated:
  at: "2026-10-08T06:31:25.130Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 15be478fff605100b7c8ce497ee60aa4c1529a9096bb17ccb3bcdf8c8086d17f
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
  posts: []
  guidelines: []
  changes:
    - change/bcapps/10425
    - change/bcapps/10498
    - change/bcapps/9051
    - change/bcapps/9356
    - change/bcapps/9674
    - change/bcapps/9789
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
  blog: 0
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

> Payment reconciliation in Business Central: importing bank statements or bank feeds, applying payments automatically to open customer and vendor entries, and reconciling bank accounts. It answers questions on automatic application, match confidence, Text-to-Account mapping, manual review, and handling unmatched or differing amounts.

Path: [Business functionality](../../../business-functionality.md) > [Finance](../../finance.md) > [Manage payables](../manage-payables.md) > Apply payments automatically and reconcile bank accounts · tier official · system finance · narrative reviewed (checked by Opus)

## Overview

This section covers how to reconcile bank accounts and apply payments using the Payment Reconciliation Journal. You import a bank statement or use a bank feed, and Business Central matches payments to open invoices automatically using payment application rules and a match confidence level.

The pages follow the workflow. Start with "Reconcile bank accounts and apply payments" for the overall process, then "Reconcile payments using automatic application" for the details of automatic matching. After that, use the review page to check results and fix applications on the Payment Application page, and the remaining two pages for cases that automatic matching does not cover: recurring payments and payments with no matching document or with amount differences.

## Key points

- The Payment Reconciliation Journal imports bank statements or bank feeds and automatically applies payments to open customer and vendor entries.
- Automatic application uses payment application rules and a match confidence level to match payments to open entries.
- Text-to-Account mapping posts recurring payments directly to specified debit and credit accounts when match confidence is Low or Medium.
- The Payment Application page lets you review automatic results and manually apply or reapply payments to open entries.
- Manual application covers split payments, currency conversion, and payment discounts, and the page also includes a candidate lookback days parameter.
- The Transfer Difference to Account feature handles payments with no matching document or with amount differences.
- The same journal is used both to apply payments and to reconcile bank accounts.

## Learn pages

- [Reconcile bank accounts and apply payments](https://learn.microsoft.com/dynamics365/business-central/receivables-apply-payments-auto-reconcile-bank-accounts): Outlines tasks to reconcile your bank, receivables, and payables accounts, post cash receipts or expenses, and apply payments automatically.
- [Reconcile payments using automatic application](https://learn.microsoft.com/dynamics365/business-central/receivables-how-reconcile-payments-auto-application): Describes how to reconcile payments using automatic application to apply payments or cash receipts to related open entries.
- [Review and apply payments manually after automatic application](https://learn.microsoft.com/dynamics365/business-central/receivables-how-review-apply-payments-auto-application): After payments are applied automatically, you can review all the entries for a payment and manually reapply those that were applied incorrectly.
- [Setting up Text-to-Account mapping for recurring payments](https://learn.microsoft.com/dynamics365/business-central/receivables-how-map-text-recurring-payments-accounts-auto-reconcilliation): Link text on payments with specific accounts, so that payments are posted to the accounts when you post the payment reconciliation journal.
- [Using the transfer difference to account feature to reconcile payments](https://learn.microsoft.com/dynamics365/business-central/receivables-how-reconcile-payments-cannot-apply-auto): Describes how to process payments that can't be applied to a document, for example, when an exchange rate causes amounts to differ.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#10425 [master] Remittance Advice Report (ID 10083) prints Amount Due = 0 when using Suggest Vendor Payments with Summarize Per Vendor](../../../../../changes/bcapps/10425.md) (code change): "Remittance Advice Report correctly displays the Amount Due field"
- [#10498 [Pmt. Recon. Journal] Optimize opening of the Payment Application screen](../../../../../changes/bcapps/10498.md) (code change): "Payment application screen opening is optimized by adding a date filter"
- [#9051 [639592][ALAppExtensions #30277][Event Request] Codeunit 426 "Payment Tolerance Management" OnPmtTolGenJnlOnAfterCheckConditions](../../../../../changes/bcapps/9051.md) (code change): "Codeunit 426 Payment Tolerance Management exposes event allowing subscribers to modify general journal lines"
- [#9356 [Main]-Payment XML file generated from EB Payment Journal upon selecting "FCY Symbol" includes currency text](../../../../../changes/bcapps/9356.md) (code change): "Payment XML files exported from EB Payment Journal now correctly exclude currency text"
- [#9674 Fix missing table permissions on Stale Check action in Check Management Subscriber](../../../../../changes/bcapps/9674.md) (code change): "Stale Check action was failing due to missing Modify permissions"
- [#9789 [Main]-Payment discount tolerance is doubled when posting a vendor payment](../../../../../changes/bcapps/9789.md) (code change): "payment discount tolerance was calculated twice for vendor payments"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 389 "Bank Account Statement List"](../../../../../objects/page/389.md) · on [Table 275 "Bank Account Statement"](../../../../../objects/table/275.md)
- [Page 1287 "Payment Application Review"](../../../../../objects/page/1287.md) · on [Table 274 "Bank Acc. Reconciliation Line"](../../../../../objects/table/274.md)
- [Page 1290 "Payment Reconciliation Journal"](../../../../../objects/page/1290.md) · on [Table 274 "Bank Acc. Reconciliation Line"](../../../../../objects/table/274.md)
- [Page 1291 "Pmt. Recon. Journal Overview"](../../../../../objects/page/1291.md) · captioned "Payment Reconciliation Journal Overview" · on [Table 274 "Bank Acc. Reconciliation Line"](../../../../../objects/table/274.md)
- [Page 1293 "Pmt. Rec. Journals Overview"](../../../../../objects/page/1293.md) · captioned "Unprocessed Payments" · on [Table 273 "Bank Acc. Reconciliation"](../../../../../objects/table/273.md)
- [Page 1294 "Pmt. Reconciliation Journals"](../../../../../objects/page/1294.md) · captioned "Payment Reconciliation Journals" · on [Table 273 "Bank Acc. Reconciliation"](../../../../../objects/table/273.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
