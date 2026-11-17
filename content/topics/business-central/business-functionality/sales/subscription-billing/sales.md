---
id: topic/business-central/business-functionality/sales/subscription-billing/sales
type: topic
title: Sales
summary: Sales in Subscription billing covers how subscription lines are sold and maintained on the customer side. It answers questions about sales quotes, orders and blanket orders with subscription packages, price calculation, foreign currency subscriptions, and credit memos or cancellation of billed contracts.
tier: official
language: en
system: sales
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
  input_hash: 72d951612b4c516ff29090d9fd7f4438440bb9fdc278a2f37677ce634d5cc525
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
    date: "2026-11-16"
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

> Sales in Subscription billing covers how subscription lines are sold and maintained on the customer side. It answers questions about sales quotes, orders and blanket orders with subscription packages, price calculation, foreign currency subscriptions, and credit memos or cancellation of billed contracts.

Path: [Business functionality](../../../business-functionality.md) > [Sales](../../sales.md) > [Subscription billing](../subscription-billing.md) > Sales · tier official · system sales · narrative **unreviewed** (model text not yet checked)

## Overview

This section describes the sales side of subscription billing in Business Central. Subscription lines are assigned to sales documents (quotes, orders and blanket orders) through subscription packages. They are printed and billed on a recurring basis. The pages explain how the start date of a subscription line and the cancellation period are calculated.

Supporting pages cover pricing, currency and corrections. Price calculation uses a calculation base amount and a percentage, with options for item price, document price, or document price with discount. Foreign currency pages explain currency codes, amount conversion and exchange rate updates. The credit memo page explains how to correct billed contract lines.

Start with "Sales with subscription lines" to understand the basic flow. Then read "Sales price calculation" and "Manage subscriptions in foreign currencies" for pricing details. Use "Credit memos and cancellation" when you must correct or reverse billing.

## Key points

- Sales quotes, orders and blanket orders can carry subscription lines assigned from subscription packages.
- Subscription lines can be printed and shipped, and are billed on a recurring basis.
- The start date of a subscription line and the cancellation period are calculated by the system.
- Price is based on the Calculation Base Amount and Calculation Base % fields.
- The price source can be Item Price, Document Price, or Document Price And Discount.
- Foreign currency subscriptions use a Currency Code field, and the Update exchange rates action can refresh amounts via the currency factor.
- Exchange rate updates can be scheduled with a job queue.
- The Create Corrective Credit Memo action creates credit memos, and unposted invoices can be deleted. Billing lines and deferral release are also handled.

## Learn pages

- [Credit memos and cancellation](https://learn.microsoft.com/dynamics365/business-central/SRB/sales/credit-memo-cancellation): You can use credit memos in subscription billing.
  - In the observatory: [Page 8067 "Recurring Billing"](../../../../../objects/page/8067.md)
- [Manage subscriptions in foreign currencies](https://learn.microsoft.com/dynamics365/business-central/SRB/sales/dealing-with-currencies): You can use foreign currencies in subscription billing.
- [Sales price calculation](https://learn.microsoft.com/dynamics365/business-central/SRB/sales/price-calculation): You can use sales price calculation in subscription billing.
- [Sales with subscription lines](https://learn.microsoft.com/dynamics365/business-central/SRB/sales/sales-service-commitments): You can use sales with subscription lines in subscription billing.

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 8059 "Service Objects"](../../../../../objects/page/8059.md) · captioned "Subscriptions" · on [Table 8057 "Subscription Header"](../../../../../objects/table/8057.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
