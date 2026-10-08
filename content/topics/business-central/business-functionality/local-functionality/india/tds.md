---
id: topic/business-central/business-functionality/local-functionality/india/tds
type: topic
title: TDS
summary: "TDS (Tax Deducted at Source) in the India localization of Business Central: setup, calculation on purchases and payments, threshold rules, Section 194Q, provisional entries, adjustments, and payment to government. It answers how to configure and post TDS."
tier: official
language: en
system: localization
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:21:13.238Z"
  flags: []
generated:
  at: "2026-10-08T06:31:25.130Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 9cb13be0eff70f946c7225414add8de235d4c7dfb1c237933ce46eee653c631c
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TDS-TDS-Payment-to-Authority
    title: Payment of TDS to Government Authorities
    date: "2025-06-30"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TDS-194Q-Section-Overview
    title: Setting Up Tax Deducted at Source (TDS) on purchase of goods under Section 194Q
    date: "2025-06-30"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TDS-Overview
    title: Setting up Tax Deducted at Source, as per the provisions of the Income Tax Act, 1961
    date: "2025-06-30"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TDS-Adjustment-Entries
    title: TDS Adjustments
    date: "2025-06-30"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TDS-194Q-Transactions
    title: TDS calculation and transactions as per Section 194Q
    date: "2025-06-30"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TDS-Threshold
    title: TDS calculation considering Threshold limits
    date: "2025-06-30"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TDS-Transactions
    title: TDS calculation on Purchase and Payment Transactions
    date: "2025-06-30"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TDS-Provisional-Entries
    title: TDS on Provisional Entries
    date: "2025-06-30"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TDS-TDS-Payment-to-Authority
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TDS-194Q-Section-Overview
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TDS-Overview
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TDS-Adjustment-Entries
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TDS-194Q-Transactions
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TDS-Threshold
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TDS-Transactions
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TDS-Provisional-Entries
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

> TDS (Tax Deducted at Source) in the India localization of Business Central: setup, calculation on purchases and payments, threshold rules, Section 194Q, provisional entries, adjustments, and payment to government. It answers how to configure and post TDS.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [India](../india.md) > TDS · tier official · system localization · narrative reviewed (checked by Opus)

## Overview

This section covers Tax Deducted at Source under India's Income Tax Act, 1961. It starts with setup (tax accounting periods, TAN numbers, assessee codes, TDS sections, concessional codes, rates, posting accounts, vendor and location details), then moves to how TDS is calculated on purchase documents, journals and payments.

Further pages handle special cases: threshold limits for aggregate and single transactions, Section 194Q on purchases of goods above Rs.50 lacs, and provisional expense entries that are reversed when the actual invoice is posted. After deduction, TDS adjustment journals correct amounts, rates or base amounts not yet paid, and a payment page explains depositing TDS to government.

Start with the general setup page, then the calculation page. Use the 194Q, threshold, provisional, adjustment and payment pages for the specific scenario you need.

## Key points

- Setup covers tax types, TAN numbers, assessee codes, TDS sections, concessional codes, rates, accounting periods and posting accounts, automatically or manually.
- Calculation applies to purchase orders, invoices and journals, with rules for mandatory fields, non-resident vendors, concessional rates, higher rate when PAN is missing, partial expense and multiple expenses per invoice.
- Threshold rules apply TDS only when aggregate or single transaction amounts exceed set limits in a financial year.
- Section 194Q applies when aggregate purchases from a supplier exceed Rs.50 lacs; TDS is 0.10% on the amount over the threshold, with opening amounts and advance payments handled.
- Provisional entries can be marked, assigned a TDS section and posted to a provisional account, then applied to invoices, with reverse or reverse without TDS options.
- TDS adjustment journal corrects TDS percentage, base amount and amounts already deducted but not paid to government.
- TDS is paid to government via Payment Journal or General Journal, selecting entries by filters such as TAN and assessee.

## Learn pages

- [Payment of TDS to Government Authorities](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TDS-TDS-Payment-to-Authority): Learn how to pay Tax Deducted at Source (TDS) to government authorities in Business Central.
- [Setting Up Tax Deducted at Source (TDS) on purchase of goods under Section 194Q](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TDS-194Q-Section-Overview): Learn about the required setup steps for Tax Deducted at Source (TDS) under Section 194Q, in accordance with the Income Tax Act, 1961.
- [Setting up Tax Deducted at Source, as per the provisions of the Income Tax Act, 1961](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TDS-Overview): Describes the basic setups that are required by the provisions of the Income Tax Act, 1961.
- [TDS Adjustments](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TDS-Adjustment-Entries): Learn how to make corrections to TDS amounts, rates, or base amounts before payment to government authorities in Business Central.
- [TDS calculation and transactions as per Section 194Q](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TDS-194Q-Transactions): Explains how TDS is calculated and processed for transactions under Section 194Q.
- [TDS calculation considering Threshold limits](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TDS-Threshold): Explains how TDS is calculated when threshold limits are applied, including examples and GL entries.
- [TDS calculation on Purchase and Payment Transactions](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TDS-Transactions): Learn how TDS is calculated on purchase and payment transactions in Business Central for India.
- [TDS on Provisional Entries](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TDS-Provisional-Entries): Learn how TDS is applied to provisional entries in Business Central India.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#12007 [Main]-TDS Amount incorrectly calculated under Tax Information Factbox if you use Applies-to ID in the Indian version.](../../../../../changes/bcapps/12007.md) (code change): "Fixed incorrect TDS amount calculation when applying payments to purchase invoices"
- [#9201 [Main]-Incident 51000001072719 : [BC-IN][28.1] Wrong TDS amount is being reflected on the TDS Entries page while posting a Purchase Invoice against a foreign (NRI) vendor.](../../../../../changes/bcapps/9201.md) (code change): "Fixed TDS amount currency conversion for foreign vendors without PAN"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
