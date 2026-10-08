---
id: topic/business-central/business-functionality/local-functionality/india/tcs
type: topic
title: TCS
summary: "TCS (Tax Collected at Source) in the Business Central India localization: setup, calculation on sales and receipts, threshold handling, Section 206C(1H), adjustments, and payment to government authorities. It answers how to configure and post TCS and how to correct and deposit it."
tier: official
language: en
system: localization
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:22:03.885Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 4257e96a97bf08f614571f00dc59fd456b0669d870438aa0236187f1f1a0eaac
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TCS-Payment-to-Authority
    title: Payment of TCS to the Government Authorities
    date: "2025-06-27"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TCS-206C-1H-Overview
    title: Setting up Tax Collected at Source for the section 206C(1H)
    date: "2025-06-27"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TCS-Overview
    title: Setting up Tax Collected at Source, as per the provisions of the Income Tax Act, 1961
    date: "2025-06-27"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TCS-Adjustment-Entries
    title: TCS Adjustment Entries
    date: "2025-06-27"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TCS-206C-1H-Transactions
    title: TCS calculation and transactions as per Section 206C(1H)
    date: "2025-06-27"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TCS-Threshold
    title: TCS calculation considering threshold limits
    date: "2025-06-27"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TCS-Transactions
    title: TCS calculation on Sales and Receipt Transactions
    date: "2025-06-30"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TCS-Payment-to-Authority
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TCS-206C-1H-Overview
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TCS-Overview
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TCS-Adjustment-Entries
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TCS-206C-1H-Transactions
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TCS-Threshold
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TCS-Transactions
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/india
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Local functionality
  - India
  - TCS
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/local-functionality/india
children: []
coverage:
  learn: 7
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 0438572a6cde1074ee90ec50ace7da9d2105c74b5eefdc9fbc4457e99cbc82f2
narrative: generated
---

# TCS

> TCS (Tax Collected at Source) in the Business Central India localization: setup, calculation on sales and receipts, threshold handling, Section 206C(1H), adjustments, and payment to government authorities. It answers how to configure and post TCS and how to correct and deposit it.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [India](../india.md) > TCS · tier official · system localization · narrative reviewed (checked by Opus)

## Overview

This section covers Tax Collected at Source for India under the Income Tax Act, 1961. It starts with setup, then moves to calculation on documents and journals, then to adjustment and payment.

Two setup pages exist. One covers general manual and automatic TCS configuration: TCS rates, tax accounting period, T.C.A.N, assessee code, nature of collection, concessional code and posting setup. The other covers Section 206C(1H), which applies to sales above INR 50,00,000 with different rates for PAN and non-PAN customers.

Calculation pages explain how TCS applies to sales invoices, orders, returns and receipt journals. They also explain how threshold limits per TCS Nature of Collection work, and how Section 206C(1H) TCS is calculated on receipts. After posting, use the adjustment page to correct unpaid entries and the payment page to deposit TCS with the authorities. Start with the general setup page.

## Key points

- General setup covers TCS rates, tax accounting period, T.C.A.N, assessee code, TCS Nature of Collection, concessional code and posting setup.
- Section 206C(1H) setup applies to Indian sales above INR 50,00,000, with different rates for PAN and non-PAN customers, and uses the Threshold Amount and Calc. Over & Above Threshold settings.
- TCS under Section 206C(1H) is calculated on customer payment receipts over the INR 50 lakh threshold through journals, with GL posting and GST integration.
- Threshold logic applies TCS only when amounts exceed the limit set per TCS Nature of Collection, aggregated over the financial year.
- Sales and receipt calculation covers sales invoices, orders, returns and receipt journals, with scenarios for PAN status, lower rate certificates, zero rate, foreign currency and advance payment adjustment.
- TCS adjustment journals correct TCS amount, rate and base on unpaid entries, with revised TCS, surcharge, eCess and SHE cess percentages.
- Adjustments update GL accounts, TCS entries and customer ledger entries.
- TCS is paid to the government through the Payment Journal or Bank Payment Voucher, with filters such as TCAN and Assessee. Entries are marked as paid when the journal is posted.

## Learn pages

- [Payment of TCS to the Government Authorities](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TCS-Payment-to-Authority): Learn how to deposit Tax Collected at Source (TCS) payments to government authorities in Business Central.
- [Setting up Tax Collected at Source for the section 206C(1H)](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TCS-206C-1H-Overview): Describes the essential setup steps for implementing Tax Collected at Source under section 206C(1H).
- [Setting up Tax Collected at Source, as per the provisions of the Income Tax Act, 1961](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TCS-Overview): Learn about the essential setup steps for Tax Collected at Source (TCS) in accordance with the Income Tax Act, 1961.
- [TCS Adjustment Entries](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TCS-Adjustment-Entries): This article provides information about TCS adjustment entries and process in Business Central for India.
- [TCS calculation and transactions as per Section 206C(1H)](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TCS-206C-1H-Transactions): Learn how to calculate and process TCS transactions in compliance with Section 206C(1H) in Business Central for India.
- [TCS calculation considering threshold limits](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TCS-Threshold): Explains how TCS is calculated in relation to threshold limits.
- [TCS calculation on Sales and Receipt Transactions](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TCS-Transactions): Explains how TCS is calculated on sales and receipt transactions in Business Central India, including examples and journal entries.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
