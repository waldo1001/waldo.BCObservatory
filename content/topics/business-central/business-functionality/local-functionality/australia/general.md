---
id: topic/business-central/business-functionality/local-functionality/australia/general
type: topic
title: General
summary: "Australia general localization in Business Central: address handling with DPID and AMAS, Australian Business Numbers (ABN) and adjustment notes, cost plus percentage sales pricing, and Payment Times Reporting. It answers setup and usage questions for Australian tax and reporting needs."
tier: official
language: en
system: localization
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-16T01:18:16.191Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 8cc33138a6f7ce8f0e2edfda3bfdf1682c4e171da6aa486fc21438f5747d8d09
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Australia/addresses
    title: Addresses in Australia
    date: "2026-10-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Australia/australian-business-numbers-and-adjustment-notes
    title: Australian Business Numbers and Adjustment Notes
    date: "2026-10-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Australia/how-to-determine-sales-price-by-cost-plus-percentage
    title: Determine Sales Price by Cost Plus Percentage (AU)
    date: "2026-10-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Australia/how-to-enter-australian-business-numbers
    title: How to Enter Australian Business Numbers in the Australian version
    date: "2026-10-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Australia/payment-times-reporting
    title: Payment Times Reporting in the Australian version
    date: "2026-10-08"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Australia/addresses
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Australia/australian-business-numbers-and-adjustment-notes
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Australia/how-to-determine-sales-price-by-cost-plus-percentage
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Australia/how-to-enter-australian-business-numbers
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Australia/payment-times-reporting
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/australia
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Local functionality
  - Australia
  - General
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/local-functionality/australia
children: []
coverage:
  learn: 5
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 6b84a98c64e4b2f56b681a1845f5355d8f4447314f4b4235a9c4450f7b28ab5a
narrative: generated
---

# General

> Australia general localization in Business Central: address handling with DPID and AMAS, Australian Business Numbers (ABN) and adjustment notes, cost plus percentage sales pricing, and Payment Times Reporting. It answers setup and usage questions for Australian tax and reporting needs.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Australia](../australia.md) > General · tier official · system localization · narrative **unreviewed** (model text not yet checked)

## Overview

This section collects the Australia-specific features that apply across the Australian version of Business Central. They cover addresses, tax identification and credit documentation, pricing, and vendor payment reporting.

Start with the ABN pages if you work on tax compliance. One page explains how to enter ABNs on company, customer, vendor, and contact cards. Another explains ABNs together with adjustment notes (credit memos) used for GST credit adjustments. The address page covers postal code lookups and DPID bar codes. The pricing page describes the cost plus percentage method. The Payment Times Reporting page is for large reporting entities and shows how to pull data from vendor ledger entries.

## Key points

- Addresses use postal codes to show available cities and states in dropdown lists.
- Delivery Point Identifiers (DPID) allow bar code printing, and AMAS software validates addresses to reduce postal returns.
- ABNs are entered on company, customer, vendor, and contact cards using the ABN and ABN Division Part No. fields, with format validation.
- Adjustment notes are credit memos that document changes to taxable supplies and claim GST credit adjustments.
- Adjustment fields include the Adjustment Details FastTab, Adjustment, BAS Adjustment, Adjustment Applies-to, and Reason Code, plus an Adjustment Mandatory setting.
- Sales prices can be determined with a cost plus percentage calculation specific to the Australian version.
- Payment Times Reporting applies to entities with AUD 100M+ consolidated revenue and uses buckets of 30, 31-60, and 60+ days.
- Payment times data comes from vendor ledger entries, using reporting period filtering, applied entries lookup, small business vendor identification, and Excel export.

## Learn pages

- [Addresses in Australia](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Australia/addresses): Use the Post Code feature to improve accuracy for cases in which a single postal code can include multiple cities in the same region.
- [Australian Business Numbers and Adjustment Notes](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Australia/australian-business-numbers-and-adjustment-notes): An Australian Business Number (ABN) is a single identifier for all business dealings with the tax office and for dealings with other government departments and agencies.
- [Determine Sales Price by Cost Plus Percentage (AU)](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Australia/how-to-determine-sales-price-by-cost-plus-percentage): Use the cost-plus percentage function to set sales prices based on item costs. Calculate the item’s cost along with cost plus calculation and apply the discount.
- [How to Enter Australian Business Numbers in the Australian version](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Australia/how-to-enter-australian-business-numbers): Learn how to enter an Australian Business Number (ABN) on the Company Information, Customer Card, Vendor Card, and Contact Card pages.
- [Payment Times Reporting in the Australian version](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Australia/payment-times-reporting): Payment Times Reporting isn't directly available in the Australian version of Business Central, but this article guides you to the necessary data.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
