---
id: topic/business-central/business-functionality/finance/manage-payables/make-payments
type: topic
title: Make payments
summary: "Making vendor payments in Business Central: payment journals, Suggest Vendor Payments, checks (print, void, positive pay), electronic bank export (SEPA Credit Transfer, AMC Banking 365 Fundamentals), immediate settlement of purchase invoices, and general journals. It answers how-to and setup questions on paying vendors."
tier: official
language: en
system: purchasing
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:20:27.835Z"
  flags: []
generated:
  at: "2026-10-07T13:37:30.849Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: ba02aed714bb533f7578f81938fb5b42cc28ff2fc3d6a72e7ab434397250a54d
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/finance-how-positive-pay
    title: Export positive pay files
    date: "2024-12-16"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/banks-formats-faq
    title: How to use banking and payment formats in Business Central
    date: "2024-09-09"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/payables-how-work-checks
    title: Issue, print, cancel, and void checks
    date: "2026-04-07"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/finance-make-payments-with-bank-data-conversion-service-or-sepa-credit-transfer
    title: Make payments with AMC banking (US) or SEPA credit transfer (EU)
    date: "2024-08-26"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/payables-make-payments
    title: Overview of tasks to manage payments to vendors
    date: "2025-06-15"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/payables-how-post-payments-refunds
    title: Record payments and refunds in payment journals
    date: "2024-07-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/finance-how-to-settle-purchase-invoices-promptly
    title: Settle purchase invoices promptly
    date: "2024-07-18"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/payables-how-suggest-vendor-payments
    title: Suggest vendor payments
    date: "2024-07-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/ui-work-general-journals
    title: Working with general journals to post directly to G/L
    date: "2026-04-07"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/finance-how-positive-pay
    - https://learn.microsoft.com/dynamics365/business-central/banks-formats-faq
    - https://learn.microsoft.com/dynamics365/business-central/payables-how-work-checks
    - https://learn.microsoft.com/dynamics365/business-central/finance-make-payments-with-bank-data-conversion-service-or-sepa-credit-transfer
    - https://learn.microsoft.com/dynamics365/business-central/payables-make-payments
    - https://learn.microsoft.com/dynamics365/business-central/payables-how-post-payments-refunds
    - https://learn.microsoft.com/dynamics365/business-central/finance-how-to-settle-purchase-invoices-promptly
    - https://learn.microsoft.com/dynamics365/business-central/payables-how-suggest-vendor-payments
    - https://learn.microsoft.com/dynamics365/business-central/ui-work-general-journals
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/finance/manage-payables
  localizations: []
  videos:
    - video/fpc_XlVEnWw
    - video/z4Ri5SAqUcc
  posts: []
  guidelines: []
  changes:
    - change/bcapps/10011
    - change/bcapps/10124
    - change/bcapps/10136
    - change/bcapps/10172
    - change/bcapps/10176
    - change/bcapps/10281
    - change/bcapps/11336
    - change/bcapps/11567
    - change/bcapps/9984
learn_toc_path:
  - Business functionality
  - Finance
  - Manage payables
  - Make payments
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/finance/manage-payables
children: []
coverage:
  learn: 9
  code: 0
  video: 2
  blog: 0
  guideline: 0
bc_forms:
  - 39
  - 51
  - 101
  - 102
  - 182
  - 184
  - 185
  - 201
  - 207
  - 233
  - 250
  - 251
  - 253
  - 254
  - 255
  - 256
  - 261
  - 262
  - 283
  - 370
  - 404
  - 519
  - 624
  - 750
  - 751
  - 752
  - 753
  - 754
  - 755
  - 1190
  - 1191
  - 1200
  - 1205
  - 1206
  - 1209
  - 1227
  - 1228
  - 1229
  - 1231
  - 1232
  - 1233
  - 1234
  - 1290
  - 9308
  - 10101
  - 10810
  - 10811
  - 11300
  - 11400
  - 11402
  - 11403
  - 11405
  - 12409
  - 12410
  - 12411
  - 20353
  - 2000000
  - 2000001
  - 2000003
  - 2000020
  - 2000021
  - 2000022
member_hash: 00d01e1db0b910bca36738bcc68ae6856c56a7724cae6f123a581ef8becd641f
narrative: generated
---

# Make payments

> Making vendor payments in Business Central: payment journals, Suggest Vendor Payments, checks (print, void, positive pay), electronic bank export (SEPA Credit Transfer, AMC Banking 365 Fundamentals), immediate settlement of purchase invoices, and general journals. It answers how-to and setup questions on paying vendors.

Path: [Business functionality](../../../business-functionality.md) > [Finance](../../finance.md) > [Manage payables](../manage-payables.md) > Make payments · tier official · system purchasing · narrative reviewed by Opus

## Overview

This section covers the ways a company pays its vendors. The core tool is the payment journal, where you record vendor payments and customer refunds, apply them to invoices and credit memos, and post them. The Suggest Vendor Payments batch job fills the journal based on due dates and available payment discounts, with options to prioritize vendors and set posting dates.

From the journal you can pay in several ways. You can print computer checks or record manual checks, and void checks that are posted or unposted. You can export a positive pay file for bank validation. You can also export payments electronically with SEPA Credit Transfer or the AMC Banking 365 Fundamentals extension. A separate page explains banking and payment formats supported through partner apps and marketplace solutions.

Start with the overview of tasks to manage payments to vendors, which links the steps together. Then go to the page for the payment method you use. For paying at invoice entry, use the page on settling purchase invoices promptly. The general journals page is a reference for posting directly to the general ledger.

## Key points

- The payment journal records vendor payments and customer refunds and applies them to invoices and credit memos.
- Suggest Vendor Payments creates journal lines from due dates and payment discounts, can prioritize vendors, and excludes vendors on hold.
- Checks can be computer-printed or manual, and posted or unposted checks can be voided with the Void Check action.
- Positive pay export creates a file of vendor and check details for bank validation. The export format is set per bank account, and files can be reexported with confirmation tracking.
- Electronic payments use SEPA Credit Transfer (EU) or the AMC Banking 365 Fundamentals extension (US), with payment export history and credit transfer registration tracking.
- Banking and payment formats come mainly from partner apps and marketplace solutions, with built-in options in some countries or regions.
- To post a purchase invoice payment immediately, set a balancing account on the invoice header when you create the invoice.
- General journals post directly to G/L and support templates, batches, recurring journals, allocations, standard journals, and reversals.

## Learn pages

- [Export positive pay files](https://learn.microsoft.com/dynamics365/business-central/finance-how-positive-pay): You can ensure your bank only clears validated checks and amounts by exporting a positive pay file that contains vendor and payment information.
- [How to use banking and payment formats in Business Central](https://learn.microsoft.com/dynamics365/business-central/banks-formats-faq): Learn how to find and use banking and payment formats that suit your needs and comply with your country and bank requirements in Business Central.
- [Issue, print, cancel, and void checks](https://learn.microsoft.com/dynamics365/business-central/payables-how-work-checks): Describes how to issue checks using the payment journal, print checks, and void or view check ledger entries in Business Central.
- [Make payments with AMC banking (US) or SEPA credit transfer (EU)](https://learn.microsoft.com/dynamics365/business-central/finance-make-payments-with-bank-data-conversion-service-or-sepa-credit-transfer): Process payments to your vendors by exporting a file (EFT) together with the payment information from the journal lines.
- [Overview of tasks to manage payments to vendors](https://learn.microsoft.com/dynamics365/business-central/payables-make-payments): Outlines tasks to manage payments to vendors or creditors, including posting payment lines and getting an overview of the balance due.
- [Record payments and refunds in payment journals](https://learn.microsoft.com/dynamics365/business-central/payables-how-post-payments-refunds): Read about how to record payments that you make to vendors, and refunds that you make to customers, on the Payment Journal page.
- [Settle purchase invoices promptly](https://learn.microsoft.com/dynamics365/business-central/finance-how-to-settle-purchase-invoices-promptly): If you need to pay the vendor by cash or check, you can have the necessary posting done when you post the invoice.
- [Suggest vendor payments](https://learn.microsoft.com/dynamics365/business-central/payables-how-suggest-vendor-payments): Use the Suggest Vendor Payments batch job to create payment lines for your vendors based on due dates and payment discounts.
- [Working with general journals to post directly to G/L](https://learn.microsoft.com/dynamics365/business-central/ui-work-general-journals): Learn about using journals to post financial transactions to general ledger accounts and other accounts, such as bank and vendor accounts.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#10011 Improve performance when posting credit memos by skipping unnecessary lookups on empty keys](../../../../../changes/bcapps/10011.md) (code change): "Purch. Cr. Memo Line avoids full-key scans when Order No. is empty"
- [#10124 [Extensibility Request] issue 30400: add credit memo line filter event](../../../../../changes/bcapps/10124.md) (code change): "A new integration event allows extensions to filter purchase credit memo lines before they are selected"
- [#10136 [CH][SEPA CT] Export requires both IBAN and Clearing No. for domestic payments and refunds](../../../../../changes/bcapps/10136.md) (code change): "Swiss SEPA CT export now automatically extracts the clearing number from the IBAN"
- [#10172 [Extensibility Request] issue 30111: add purchase prepayment update events](../../../../../changes/bcapps/10172.md) (code change): "Three integration events are added to the purchase prepayment line update procedure"
- [#10176 [Main][all-e]Prepayment Invoice and Quantity Change Issue in Business Central](../../../../../changes/bcapps/10176.md) (code change): "Fixed an issue where prepayment invoices were not handled correctly when purchase or sales line quantities were changed"
- [#10281 [Extensibility Request] issue 30416: add purchase budget navigation events](../../../../../changes/bcapps/10281.md) (code change): "The purchase budget overview matrix page now exposes before and after integration events"
- [#11336 [master] Report 400 (Remittance Advice) Does Not Include Applied Vendor Refund Entries Resulting in Incorrect Total Calculation](../../../../../changes/bcapps/11336.md) (code change): "Report 400 now includes applied vendor refund entries"
- [#11567 [29.x]Report 400 (Remittance Advice) Does Not Include Applied Vendor Refund Entries Resulting in Incorrect Total Calculation](../../../../../changes/bcapps/11567.md) (code change): "Report 400 Remittance Advice now includes applied vendor refund"
- [#9984 [Main] Error with unposted prepayment amounts on Order](../../../../../changes/bcapps/9984.md) (code change): "Error with unposted prepayment amounts on Order"
- [Comparing the Pay Vendor Process in Dynamics SL with Dynamics 365 Business Central](../../../../../videos/fpc_XlVEnWw.md) (video): "Payment journals; Suggest vendor payments wizard; Vendor priority functionality"
- [Comparing the Pay Vendor Process in Dynamics GP with Dynamics 365 Business Central (2024)](../../../../../videos/z4Ri5SAqUcc.md) (video): "Payment Journals; Suggest Vendor Payments; Vendor Priority"

## Business Central pages and reports

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 39, 51, 101, 102, 182, 184, 185, 201, 207, 233, 250, 251, 253, 254, 255, 256, 261, 262, 283, 370, 404, 519, 624, 750, 751, 752, 753, 754, 755, 1190, 1191, 1200, 1205, 1206, 1209, 1227, 1228, 1229, 1231, 1232, 1233, 1234, 1290, 9308, 10101, 10810, 10811, 11300, 11400, 11402, 11403, 11405, 12409, 12410, 12411, 20353, 2000000, 2000001, 2000003, 2000020, 2000021, 2000022.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
