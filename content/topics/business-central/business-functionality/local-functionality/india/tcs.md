---
id: topic/business-central/business-functionality/local-functionality/india/tcs
type: topic
title: TCS
summary: "TCS (Tax Collected at Source) in the Business Central India localization: setup, calculation on sales and receipts, threshold handling, Section 206C(1H), adjustment entries, and payment to government authorities. It answers how to configure and post TCS and how to correct or pay it."
tier: official
language: en
system: localization
review:
  state: reviewed
  by: opus
  at: "2026-10-28T11:02:39.138Z"
  flags: []
generated:
  at: "2026-10-28T11:04:14.111Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 48284ffd39bec9b540e111a5e0734decd5f3ddc791ad6524193456780759bfe6
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TCS-Payment-to-Authority
    title: Payment of TCS to Government Authorities
    date: "2026-10-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TCS-206C-1H-Overview
    title: Set Up Tax Collected at Source (TCS) for Section 206C(1H)
    date: "2026-10-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TCS-Overview
    title: Set Up Tax Collected at Source (TCS)as per the Provisions of the Income Tax Act, 1961
    date: "2026-10-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TCS-Adjustment-Entries
    title: TCS Adjustment Entries
    date: "2026-10-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TCS-206C-1H-Transactions
    title: TCS Calculation and Transactions as per Section 206C(1H)
    date: "2026-10-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TCS-Transactions
    title: TCS Calculation on Sales and Receipt Transactions
    date: "2026-10-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TCS-Threshold
    title: TCS with Threshold
    date: "2026-10-21"
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
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TCS-Transactions
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TCS-Threshold
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

> TCS (Tax Collected at Source) in the Business Central India localization: setup, calculation on sales and receipts, threshold handling, Section 206C(1H), adjustment entries, and payment to government authorities. It answers how to configure and post TCS and how to correct or pay it.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [India](../india.md) > TCS · tier official · system localization · narrative reviewed (checked by Opus)

## Overview

This section covers the full TCS lifecycle in the India localization. Setup pages describe configuring TCS rates, tax accounting periods, T.C.A.N., assessee codes, TCS nature of collection, concessional codes, posting setup and customer master settings. A separate setup page covers Section 206C(1H), including threshold-based rates and PAN and non-PAN customer rates.

Calculation pages show how TCS is computed on sales orders, invoices, return orders and receipt vouchers, with examples of base amounts, rates and GL entries. Further pages cover threshold behavior (Threshold Overlook, Calc. Over & Above Threshold) and TCS on receipt of payment under Section 206C(1H), where a separate customer debit note is created.

After calculation, TCS Adjustment Entries correct amounts, rates or base amounts that are not yet paid, and the payment page explains recording payment to government authorities through Payment Journal or Bank Payment Voucher. Start with the general TCS setup page, then the calculation pages. Use the Section 206C(1H) and threshold pages if those rules apply.

## Key points

- General TCS setup includes rates, tax accounting periods, T.C.A.N., assessee codes, TCS nature of collection, concessional codes, posting setup and customer master settings.
- Section 206C(1H) setup uses TCS nature of collection and rates with threshold-based calculation, and supports PAN and non-PAN customer rates.
- Threshold options include Threshold Overlook and Calc. Over & Above Threshold, plus Allowed NOC and tax accounting period settings.
- TCS can be calculated on goods and services through sales orders, invoices, return orders and receipt vouchers.
- Examples cover customer advance payment adjustment, foreign currency conversion, higher rates for customers without PAN, and multiple natures of goods in one invoice.
- For Section 206C(1H) receipts, enter the amount subject to TCS or use Get Open Posted Lines For TCS On Payment Calculation; the system creates a separate TCS debit note.
- TCS Adjustment Entries correct TCS amount, rate, surcharge, eCESS, SHE Cess and base amount only for TCS not yet paid.
- Payment to government is recorded in Payment Journal or Bank Payment Voucher using the TCS action, with filtering by posting date and assessee code.

## Learn pages

- [Payment of TCS to Government Authorities](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TCS-Payment-to-Authority): Select Tax Collected at Source entries for payment to government authorities and review the payment workflow in Business Central for India.
  - In the observatory: [Page 18550 "Bank Payment Voucher (IN)"](../../../../../objects/page/18550-in.md), [Page 18906 "Pay TCS (IN)"](../../../../../objects/page/18906-in.md), [Page 256 "Payment Journal"](../../../../../objects/page/256.md)
- [Set Up Tax Collected at Source (TCS) for Section 206C(1H)](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TCS-206C-1H-Overview): Review setup for the documented section 206C(1H) TCS workflow, including customer and tax configuration, in Business Central for India.
  - In the observatory: [Page 18811 "TCS Nature Of Collections (IN)"](../../../../../objects/page/18811-in.md), [Page 18816 "TCS Rates (IN)"](../../../../../objects/page/18816-in.md)
- [Set Up Tax Collected at Source (TCS)as per the Provisions of the Income Tax Act, 1961](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TCS-Overview): Set up Tax Collected at Source classifications, posting accounts, and transaction defaults for the India localization of Business Central.
  - In the observatory: [Page 36954 "Customers"](../../../../../objects/page/36954.md), [Table 18813 "TCS Posting Setup (IN)"](../../../../../objects/table/18813-in.md), [Table 20256 "Tax Acc. Period Setup"](../../../../../objects/table/20256.md)
- [TCS Adjustment Entries](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TCS-Adjustment-Entries): Create TCS adjustment entries and review the transaction fields and processing steps for the India localization of Microsoft Dynamics 365 Business Central.
- [TCS Calculation and Transactions as per Section 206C(1H)](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TCS-206C-1H-Transactions): Review the documented section 206C(1H) TCS transaction workflow and illustrative calculation and accounting examples in Business Central for India.
  - In the observatory: [Table 18811 "TCS Nature Of Collection (IN)"](../../../../../objects/table/18811-in.md)
- [TCS Calculation on Sales and Receipt Transactions](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TCS-Transactions): Explains how TCS is calculated on sales and receipt transactions in Business Central India, including examples and journal entries.
  - In the observatory: [Page 18553 "Bank Receipt Voucher (IN)"](../../../../../objects/page/18553-in.md), [Page 18555 "Cash Receipt Voucher (IN)"](../../../../../objects/page/18555-in.md), [Page 253 "Sales Journal"](../../../../../objects/page/253.md), [Page 39 "General Journal"](../../../../../objects/page/39.md), [Page 42 "Sales Order"](../../../../../objects/page/42.md), [Page 43 "Sales Invoice"](../../../../../objects/page/43.md)
- [TCS with Threshold](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TCS-Threshold): Review TCS threshold calculations and illustrative examples to understand how configured limits affect transactions in Business Central for India.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
