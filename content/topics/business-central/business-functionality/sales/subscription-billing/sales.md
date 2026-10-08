---
id: topic/business-central/business-functionality/sales/subscription-billing/sales
type: topic
title: Sales
summary: "Sales in Subscription billing covers selling subscription lines to customers in Business Central: sales quotes and orders with subscription lines, price calculation, foreign currency handling, and credit memos or cancellations. It answers how-to questions on these sales-side tasks."
tier: official
language: en
system: sales
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:25:39.861Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 233dc746d201f53533a4856d4efa9f53538db475646a6a1fc3a044269a9be824
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/SRB/sales/credit-memo-cancellation
    title: Credit memos and cancellation
    date: "2025-07-11"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/SRB/sales/dealing-with-currencies
    title: Manage subscriptions in foreign currencies
    date: "2025-07-11"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/SRB/sales/price-calculation
    title: Sales price calculation
    date: "2025-07-11"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/SRB/sales/sales-service-commitments
    title: Sales with subscription lines
    date: "2026-02-06"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/SRB/sales/credit-memo-cancellation
    - https://learn.microsoft.com/dynamics365/business-central/SRB/sales/dealing-with-currencies
    - https://learn.microsoft.com/dynamics365/business-central/SRB/sales/price-calculation
    - https://learn.microsoft.com/dynamics365/business-central/SRB/sales/sales-service-commitments
  objects:
    - object/page/8059
  features: []
  topics:
    - topic/business-central/business-functionality/sales/subscription-billing
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Sales
  - Subscription billing
  - Sales
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/sales/subscription-billing
children: []
coverage:
  learn: 4
  code: 1
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 8059
member_hash: e47d60f8fcb6bcd953d911c1417f2da287030ec422b3a89f5ace71e352807964
narrative: generated
---

# Sales

> Sales in Subscription billing covers selling subscription lines to customers in Business Central: sales quotes and orders with subscription lines, price calculation, foreign currency handling, and credit memos or cancellations. It answers how-to questions on these sales-side tasks.

Path: [Business functionality](../../../business-functionality.md) > [Sales](../../sales.md) > [Subscription billing](../subscription-billing.md) > Sales · tier official · system sales · narrative reviewed (checked by Opus)

## Overview

This section describes the sales side of subscription billing. A sales quote or order records a monetary agreement with a customer and can carry recurring billing subscription lines. When the lines are shipped, they transfer to subscriptions.

The other pages cover topics around that flow: how the price of a subscription line is determined from a calculation base amount and percentage, how subscriptions in foreign currencies are converted and updated, and how to correct billing with credit memos or by deleting unposted invoices.

Start with "Sales with subscription lines" to understand the main flow. Then read "Sales price calculation" and "Manage subscriptions in foreign currencies" for pricing and currency details. Use "Credit memos and cancellation" when billing needs correcting.

## Key points

- Sales quotes or orders can include subscription lines, which transfer to subscriptions when shipped.
- Subscription lines can be assigned and printed on sales documents; the page also mentions inventory picks, archiving documents and contract renewal.
- Price calculation uses the Calculation Base Amount and Calculation Base % fields to set the Price field.
- The base for price calculation can be Item Price, Document Price, or Document Price And Discount.
- Foreign currency subscriptions use the Currency Code and Amount fields, with conversion by currency factor.
- The Update exchange rates action refreshes rates on subscription lines, and a job queue can schedule it.
- The Create Corrective Credit Memo action creates credit memos for subscription billing contracts.
- Unposted invoices can be deleted, and billing lines and contract lines can be adjusted; deferral release is also covered.

## Learn pages

- [Credit memos and cancellation](https://learn.microsoft.com/dynamics365/business-central/SRB/sales/credit-memo-cancellation): You can use credit memos in subscription billing.
- [Manage subscriptions in foreign currencies](https://learn.microsoft.com/dynamics365/business-central/SRB/sales/dealing-with-currencies): You can use foreign currencies in subscription billing.
- [Sales price calculation](https://learn.microsoft.com/dynamics365/business-central/SRB/sales/price-calculation): You can use sales price calculation in subscription billing.
- [Sales with subscription lines](https://learn.microsoft.com/dynamics365/business-central/SRB/sales/sales-service-commitments): You can use sales with subscription lines in subscription billing.

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 8059 "Service Objects"](../../../../../objects/page/8059.md) · captioned "Subscriptions" · on [Table 8057 "Subscription Header"](../../../../../objects/table/8057.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
