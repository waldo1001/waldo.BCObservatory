---
id: topic/business-central/business-functionality/finance/invoicing-prepayments
type: topic
title: Invoicing prepayments
summary: Invoicing prepayments covers how to set up, create, post and correct prepayment invoices and credit memos for sales and purchase orders in Business Central. It answers questions about prepayment percentages, accounts, number series, and fixing invoiced prepayments.
tier: official
language: en
system: finance
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:25:18.409Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 154ef9fb79d7fa6d25f1d13faf5bdd6ef5e9f23a0461a1661a7edb9fd7bdcca0
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/finance-how-to-correct-prepayments
    title: Correct prepayments
    date: "2024-07-24"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/finance-how-to-create-prepayment-invoices
    title: Create prepayment invoices
    date: "2025-10-13"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/finance-invoice-prepayments
    title: Invoice prepayments
    date: "2024-07-19"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/finance-set-up-prepayments
    title: Set up prepayments
    date: "2025-06-17"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/finance-how-to-correct-prepayments
    - https://learn.microsoft.com/dynamics365/business-central/finance-how-to-create-prepayment-invoices
    - https://learn.microsoft.com/dynamics365/business-central/finance-invoice-prepayments
    - https://learn.microsoft.com/dynamics365/business-central/finance-set-up-prepayments
  objects:
    - object/page/42
    - object/page/44
    - object/page/48
    - object/page/50
    - object/page/52
    - object/page/314
    - object/page/459
    - object/page/460
    - object/page/664
    - object/page/9305
    - object/page/9307
  features: []
  topics:
    - topic/business-central/business-functionality/finance
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcapps/10061
    - change/bcapps/10944
    - change/bcapps/9416
    - change/bcapps/9719
learn_toc_path:
  - Business functionality
  - Finance
  - Invoicing prepayments
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/finance
children: []
coverage:
  learn: 4
  code: 11
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 42
  - 44
  - 48
  - 50
  - 52
  - 314
  - 459
  - 460
  - 664
  - 9305
  - 9307
member_hash: c6e6bf0af791d2bbe323ff44dc0366b69cf69b4bf7ac20637ceb58b2bf1f889b
narrative: generated
---

# Invoicing prepayments

> Invoicing prepayments covers how to set up, create, post and correct prepayment invoices and credit memos for sales and purchase orders in Business Central. It answers questions about prepayment percentages, accounts, number series, and fixing invoiced prepayments.

Path: [Business functionality](../../business-functionality.md) > [Finance](../finance.md) > Invoicing prepayments · tier official · system finance · narrative reviewed (checked by Opus)

## Overview

Prepayments let a company require a customer to pay, or pay a vendor, a percentage or fixed amount before an order is fulfilled. This section explains the setup, the creation of prepayment invoices, and the correction of prepayments already invoiced.

The pages follow the order of the work. "Set up prepayments" covers percentages per item, customer or vendor, prepayment accounts, number series and automatic sales order release when payment is applied. "Create prepayment invoices" and "Invoice prepayments" describe how invoices are calculated and posted. "Correct prepayments" covers prepayment credit memos and additional invoices.

Start with "Set up prepayments" if prepayments are not yet configured. If they are already in use, go to "Create prepayment invoices" for the fields and test report, or to "Correct prepayments" to cancel or adjust an invoice.

## Key points

- Prepayments apply to both sales orders (customers) and purchase orders (vendors), as a percentage or a fixed amount.
- Prepayment percentages can be set by item and by customer or vendor, and amounts are calculated automatically from these defaults.
- Setup includes prepayment accounts, prepayment posting groups and number series for prepayment documents.
- Order-level fields include Prepayment %, Prepayment Amount, Prepayment Amount Incl. VAT, Compress Prepayment and Prepmt. Payment Terms Code.
- A Prepayment Test Report can be run before posting a prepayment invoice.
- Sales orders can be released automatically when the prepayment payment is applied.
- A prepayment credit memo cancels or adjusts an invoiced prepayment on a sales order.
- Additional prepayment invoices can be posted when more prepayment is needed.

## Learn pages

- [Correct prepayments](https://learn.microsoft.com/dynamics365/business-central/finance-how-to-correct-prepayments): You can make a correction to an order after you have posted a prepayment invoice for the order and add new lines to an order after issuing a prepayment.
- [Create prepayment invoices](https://learn.microsoft.com/dynamics365/business-central/finance-how-to-create-prepayment-invoices): Handle situations where you or your vendor require prepayment. Use the default percentages for each sales or purchase line or adjust the amount as necessary.
- [Invoice prepayments](https://learn.microsoft.com/dynamics365/business-central/finance-invoice-prepayments): Learn how to use prepayments to invoice and collect deposits from customers and remit deposits to vendors in Business Central.
- [Set up prepayments](https://learn.microsoft.com/dynamics365/business-central/finance-set-up-prepayments): Learn how to configure Business Central so that you can use prepayments to invoice and collect deposits from customers and remit deposits to vendors.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#10061 [Master]-Payment Reference from Purchase Order Prepayment Invoice is not Transferred to Vendor Ledger Entries.](../../../../changes/bcapps/10061.md) (code change): "Payment reference from purchase order prepayment invoices is now transferred to vendor ledger entries"
- [#10944 [main] bug 643971 - Enhance vendor and customer checks in advance letters and update blocked status validation](../../../../changes/bcapps/10944.md) (code change): "Advance letter creation now validates blocked customer and vendor status"
- [#9416 [ALAppExtensions #30313]codeunit 441 "Prepayment Mgt." OnBeforeReleaseSalesDocument](../../../../changes/bcapps/9416.md) (code change): "OnBeforeUpdatePendingPrepaymentSales and OnAfterUpdatePendingPrepaymentSales events"
- [#9719 [main] bug 643971 - Implement checks for blocked customers and vendors in advance letters](../../../../changes/bcapps/9719.md) (code change): "validate that customers and vendors are not blocked or privacy-blocked, preventing creation and posting"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 42 "Sales Order"](../../../../objects/page/42.md) · on [Table 36 "Sales Header"](../../../../objects/table/36.md)
- [Page 44 "Sales Credit Memo"](../../../../objects/page/44.md) · on [Table 36 "Sales Header"](../../../../objects/table/36.md)
- [Page 48 "Sales Orders"](../../../../objects/page/48.md) · on [Table 37 "Sales Line"](../../../../objects/table/37.md)
- [Page 50 "Purchase Order"](../../../../objects/page/50.md) · on [Table 38 "Purchase Header"](../../../../objects/table/38.md)
- [Page 52 "Purchase Credit Memo"](../../../../objects/page/52.md) · on [Table 38 "Purchase Header"](../../../../objects/table/38.md)
- [Page 314 "General Posting Setup"](../../../../objects/page/314.md) · on [Table 252 "General Posting Setup"](../../../../objects/table/252.md)
- [Page 459 "Sales & Receivables Setup"](../../../../objects/page/459.md) · on [Table 311 "Sales & Receivables Setup"](../../../../objects/table/311.md)
- [Page 460 "Purchases & Payables Setup"](../../../../objects/page/460.md) · on [Table 312 "Purchases & Payables Setup"](../../../../objects/table/312.md)
- [Page 664 "Sales Prepayment Percentages"](../../../../objects/page/664.md) · on [Table 459 "Sales Prepayment %"](../../../../objects/table/459.md)
- [Page 9305 "Sales Order List"](../../../../objects/page/9305.md) · captioned "Sales Orders" · on [Table 36 "Sales Header"](../../../../objects/table/36.md)
- [Page 9307 "Purchase Order List"](../../../../objects/page/9307.md) · captioned "Purchase Orders" · on [Table 38 "Purchase Header"](../../../../objects/table/38.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
