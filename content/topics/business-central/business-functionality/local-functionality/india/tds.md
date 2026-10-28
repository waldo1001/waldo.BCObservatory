---
id: topic/business-central/business-functionality/local-functionality/india/tds
type: topic
title: TDS
summary: "Tax Deducted at Source (TDS) in the India localization of Business Central: setup, calculation on purchases and payments, thresholds, section 194Q, provisional entries, adjustments, and payment to government authorities. It answers how-to and scenario questions about configuring and posting TDS."
tier: official
language: en
system: localization
review:
  state: reviewed
  by: opus
  at: "2026-10-28T11:02:20.082Z"
  flags: []
generated:
  at: "2026-10-28T11:04:14.111Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 2c53f524bf9e3afd4285e830a1da848e8534e6b3e5acba4368d6a39c185a7882
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TDS-TDS-Payment-to-Authority
    title: Payment of TDS to Government Authorities
    date: "2026-10-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TDS-Overview
    title: Set Up Tax Deducted at Source (TDS) as per the Income Tax Act, 1961 Provisions
    date: "2026-10-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TDS-194Q-Section-Overview
    title: Set Up Tax Deducted at Source (TDS) on Purchase of Goods under Section 194Q
    date: "2026-10-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TDS-Adjustment-Entries
    title: TDS Adjustments
    date: "2026-10-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TDS-194Q-Transactions
    title: TDS Calculation and Transactions as per Section 194Q
    date: "2026-10-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TDS-Transactions
    title: TDS Calculation on Purchase and Payment Transactions
    date: "2026-10-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TDS-Provisional-Entries
    title: TDS on Provisional Entries
    date: "2026-10-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TDS-Threshold
    title: TDS with Threshold
    date: "2026-10-21"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TDS-TDS-Payment-to-Authority
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TDS-Overview
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TDS-194Q-Section-Overview
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TDS-Adjustment-Entries
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TDS-194Q-Transactions
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TDS-Transactions
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TDS-Provisional-Entries
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TDS-Threshold
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/india
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcapps/12007
    - change/bcapps/9201
learn_toc_path:
  - Business functionality
  - Local functionality
  - India
  - TDS
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/local-functionality/india
children: []
coverage:
  learn: 8
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: e6e634b8ac3ac57ebcd7f6db777a55e6b808c6c5b820911d4d42170112a47593
narrative: generated
---

# TDS

> Tax Deducted at Source (TDS) in the India localization of Business Central: setup, calculation on purchases and payments, thresholds, section 194Q, provisional entries, adjustments, and payment to government authorities. It answers how-to and scenario questions about configuring and posting TDS.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [India](../india.md) > TDS · tier official · system localization · narrative reviewed (checked by Opus)

## Overview

This section covers the full TDS lifecycle under the Indian Income Tax Act, 1961. It starts with setup (automatic tax engine setup or manual configuration of TDS rates, tax accounting periods, T.A.N, assessee codes and sections), then moves to calculation on purchase and payment transactions, and finally to correcting and paying the deducted tax.
Calculation pages cover different cases: general purchase and payment scenarios, threshold-based TDS, section 194Q on purchase of goods, and provisional entries. Section 194Q has its own setup page and its own calculation page with INR examples.
After deduction, TDS Adjustments lets you correct amounts, rates or base amounts on unpaid entries, and the payment page explains how to record payment to government authorities. Start with the general TDS setup page, then read the calculation page that matches your scenario.

## Key points

- Setup can use the automatic tax engine or manual configuration of TDS rates, tax accounting periods, T.A.N, assessee codes, and sections.
- Calculation scenarios include vendor invoices, advance payments, foreign currency, missing PAN (higher rate), concessional rates, and multiple expenses.
- Location Code and T.A.N No. are validated during TDS calculation on purchases.
- TDS with Threshold covers single-transaction and aggregate thresholds using Threshold Overlook and Calc. Over & Above Threshold.
- Section 194Q setup includes TDS rates, opening amounts (TDS Above Threshold Opening), Allowed Sections, and customer aggregate turnover.
- Section 194Q calculation applies to amounts over and above the threshold for invoices and advance payments, with cumulative amount tracking.
- TDS on provisional entries supports applying provisional entries and reversing them with or without TDS, including after TDS is paid.
- TDS Adjustments in the TDS Adjustment Journal corrects deducted but unpaid TDS and updates GL accounts and vendor ledger entries.

## Learn pages

- [Payment of TDS to Government Authorities](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TDS-TDS-Payment-to-Authority): Select Tax Deducted at Source entries for payment to government authorities and review the payment workflow in Business Central for India.
  - In the observatory: [Page 18550 "Bank Payment Voucher (IN)"](../../../../../objects/page/18550-in.md), [Page 18746 "Pay TDS (IN)"](../../../../../objects/page/18746-in.md), [Page 256 "Payment Journal"](../../../../../objects/page/256.md)
- [Set Up Tax Deducted at Source (TDS) as per the Income Tax Act, 1961 Provisions](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TDS-Overview): Set up Tax Deducted at Source classifications, posting accounts, and transaction defaults for the India localization of Business Central.
  - In the observatory: [Table 18686 "Act Applicable (IN)"](../../../../../objects/table/18686-in.md), [Table 18691 "TDS Posting Setup (IN)"](../../../../../objects/table/18691-in.md), [Table 20256 "Tax Acc. Period Setup"](../../../../../objects/table/20256.md)
- [Set Up Tax Deducted at Source (TDS) on Purchase of Goods under Section 194Q](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TDS-194Q-Section-Overview): Learn about the required setup steps for Tax Deducted at Source (TDS) under Section 194Q, in accordance with the Income Tax Act, 1961.
- [TDS Adjustments](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TDS-Adjustment-Entries): Learn how to make corrections to TDS amounts, rates, or base amounts before payment to government authorities in Business Central.
  - In the observatory: [Page 18747 "TDS Adjustment Journal (IN)"](../../../../../objects/page/18747-in.md)
- [TDS Calculation and Transactions as per Section 194Q](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TDS-194Q-Transactions): Review the documented section 194Q TDS purchase workflow and illustrative calculation and accounting entries in Business Central for India.
- [TDS Calculation on Purchase and Payment Transactions](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TDS-Transactions): Calculate TDS on purchase and payment transactions, and review the documented workflows and illustrative entries in Business Central for India.
  - In the observatory: [Page 254 "Purchase Journal"](../../../../../objects/page/254.md), [Page 39 "General Journal"](../../../../../objects/page/39.md), [Page 50 "Purchase Order"](../../../../../objects/page/50.md), [Page 51 "Purchase Invoice"](../../../../../objects/page/51.md)
- [TDS on Provisional Entries](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TDS-Provisional-Entries): Record provisional TDS entries and review the related transaction fields, processing steps, and accounting examples in Business Central for India.
  - In the observatory: [Page 254 "Purchase Journal"](../../../../../objects/page/254.md)
- [TDS with Threshold](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TDS-Threshold): Review TDS calculations with configured threshold limits, including illustrative calculations and general ledger entries in Business Central for India.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#12007 [Main]-TDS Amount incorrectly calculated under Tax Information Factbox if you use Applies-to ID in the Indian version.](../../../../../changes/bcapps/12007.md) (code change): "Fixed incorrect TDS amount calculation when applying payments to purchase invoices"
- [#9201 [Main]-Incident 51000001072719 : [BC-IN][28.1] Wrong TDS amount is being reflected on the TDS Entries page while posting a Purchase Invoice against a foreign (NRI) vendor.](../../../../../changes/bcapps/9201.md) (code change): "Fixed TDS amount currency conversion for foreign vendors without PAN"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
