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
  at: "2026-10-07T02:32:59.251Z"
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
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/finance
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Finance
  - Invoicing prepayments
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/finance
children: []
coverage:
  learn: 4
  code: 0
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

Path: [Business functionality](../../business-functionality.md) > [Finance](../finance.md) > Invoicing prepayments · tier official · system finance · narrative reviewed by Opus

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

## Business Central pages and reports

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 42, 44, 48, 50, 52, 314, 459, 460, 664, 9305, 9307.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
