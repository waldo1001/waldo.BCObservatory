---
id: topic/business-central/business-functionality/local-functionality/new-zealand/tax
type: topic
title: Tax
summary: Tax in the New Zealand version of Business Central covers GST posting setup, GST settlement reports, GST on prepayments, VAT settlement exchange rate adjustment, and withholding tax (WHT) setup and settlement. It answers how to configure and run these New Zealand tax processes.
tier: official
language: en
system: localization
review:
  state: reviewed
  by: opus
  at: "2026-10-28T11:02:16.524Z"
  flags: []
generated:
  at: "2026-10-28T11:04:14.111Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: ff6b5c07e03fa2ed74e4b778e46da0a9ef3c5153392634234bcc97cf871e9368
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/NewZealand/how-to-adjust-settlement-exchange-rates-for-vat-entries
    title: Adjust VAT Settlement Exchange Rates in New Zealand
    date: "2026-10-23"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/NewZealand/how-to-calculate-and-post-withholding-tax-settlements
    title: Calculate and Post WHT Settlements in New Zealand
    date: "2026-10-23"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/NewZealand/how-to-calculate-goods-and-services-tax-on-prepayments
    title: Calculate GST on Prepayments in New Zealand
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/NewZealand/how-to-print-goods-and-service-tax-settlement-reports
    title: Print GST Settlement Reports in New Zealand
    date: "2026-10-23"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/NewZealand/how-to-set-up-goods-and-service-tax-posting
    title: Set Up Goods and Services Tax Posting in New Zealand
    date: "2026-10-23"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/NewZealand/how-to-set-up-vendors-without-abn-for-calculating-the-withholding-tax
    title: Set Up Vendors Without IRD Numbers for Withholding Tax
    date: "2026-10-23"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/NewZealand/how-to-set-up-withholding-tax
    title: Set Up Withholding Tax in the New Zealand Version [NZ]
    date: "2026-10-23"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/NewZealand/withholding-tax
    title: Withholding Tax in the New Zealand Version
    date: "2026-10-23"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/NewZealand/how-to-adjust-settlement-exchange-rates-for-vat-entries
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/NewZealand/how-to-calculate-and-post-withholding-tax-settlements
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/NewZealand/how-to-calculate-goods-and-services-tax-on-prepayments
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/NewZealand/how-to-print-goods-and-service-tax-settlement-reports
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/NewZealand/how-to-set-up-goods-and-service-tax-posting
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/NewZealand/how-to-set-up-vendors-without-abn-for-calculating-the-withholding-tax
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/NewZealand/how-to-set-up-withholding-tax
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/NewZealand/withholding-tax
  objects:
    - object/page/118
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/new-zealand
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Local functionality
  - New Zealand
  - Tax
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/local-functionality/new-zealand
children: []
coverage:
  learn: 8
  code: 1
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 118
  - 11600
  - 28040
  - 28041
  - 28042
  - 28043
  - 28044
  - 28164
  - 28165
  - 28166
  - 28167
member_hash: 9687a214f374ae53d7036f7f9b28a0faf15230f00a2db6244cec65d1b40ab90b
narrative: generated
---

# Tax

> Tax in the New Zealand version of Business Central covers GST posting setup, GST settlement reports, GST on prepayments, VAT settlement exchange rate adjustment, and withholding tax (WHT) setup and settlement. It answers how to configure and run these New Zealand tax processes.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [New Zealand](../new-zealand.md) > Tax · tier official · system localization · narrative reviewed (checked by Opus)

## Overview

This section holds the New Zealand tax pages for Business Central. It has two main areas: goods and services tax (GST), which uses the VAT posting framework, and withholding tax (WHT) on vendor payments. There are no subtopics, so all guidance is on eight pages.

For GST, start with the page on setting up GST posting. It covers VAT business and product posting groups, rates and GL accounts. After that, use the pages on GST on prepayments, printing the Calculate GST Settlement report, and adjusting VAT settlement exchange rates for currency conversions.

For WHT, read the overview page first. It explains how WHT reduces vendor payments and which setup fields matter. Then use the setup page for posting groups, the page on vendors without IRD numbers, and the page on calculating and posting WHT settlements.

## Key points

- GST posting setup uses VAT business and product posting groups, VAT identifier, VAT percentage, VAT calculation type and a Sales VAT account.
- The Calculate GST Settlement report calculates and prints GST settlements. It can post entries, filter by account types, and set posting date and document numbering. It also supports intercompany posting.
- GST on prepayments is calculated for prepayment transactions subject to GST in New Zealand.
- VAT settlement exchange rates can be adjusted so VAT is handled correctly with currency conversions.
- WHT reduces vendor payments by the tax withheld. It covers schedular payments and non-resident withholding tax, depending on payment type and Inland Revenue rules.
- Key WHT setup fields include WHT Calculation Rule, WHT Minimum Invoice Amount, WHT Percentage, Realized WHT Type, Payable WHT Account Code and Purchase WHT Adjustment Account.
- WHT setup is done through business and product posting groups, using payment types, rates, thresholds and exemptions.
- The Calc. and Post WHT Settlement page closes open WHT entries and moves amounts to settlement accounts, using truncated rounding and a rounding account.

## Learn pages

- [Adjust VAT Settlement Exchange Rates in New Zealand](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/NewZealand/how-to-adjust-settlement-exchange-rates-for-vat-entries): Learn how to adjust VAT entries with settlement exchange rates, choose the settlement period, and review the results in the New Zealand version.
- [Calculate and Post WHT Settlements in New Zealand](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/NewZealand/how-to-calculate-and-post-withholding-tax-settlements): Learn how to calculate withholding tax (WHT) settlements, close unsettled entries, and post amounts to a settlement account in New Zealand.
- [Calculate GST on Prepayments in New Zealand](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/NewZealand/how-to-calculate-goods-and-services-tax-on-prepayments): Learn how to calculate Goods and Services Tax (GST) for prepayments or partial payments based on the total invoice amount rather than just the partial payment.
- [Print GST Settlement Reports in New Zealand](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/NewZealand/how-to-print-goods-and-service-tax-settlement-reports): Learn how to print goods and services tax (GST) settlement reports and distinguish posting a settlement from filing a New Zealand GST return.
- [Set Up Goods and Services Tax Posting in New Zealand](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/NewZealand/how-to-set-up-goods-and-service-tax-posting): Learn how to set up GST posting groups, tax rates, and general ledger accounts for purchases and sales in the New Zealand version of Business Central.
  - In the observatory: [Page 472 "VAT Posting Setup"](../../../../../objects/page/472.md)
- [Set Up Vendors Without IRD Numbers for Withholding Tax](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/NewZealand/how-to-set-up-vendors-without-abn-for-calculating-the-withholding-tax): Learn how to set up local vendors without IRD numbers when withholding tax applies in the New Zealand version of Business Central.
  - In the observatory: [Page 26 "Vendor Card"](../../../../../objects/page/26.md), [Page 35603 "Vendors (RU)"](../../../../../objects/page/35603-ru.md), [Page 460 "Purchases & Payables Setup"](../../../../../objects/page/460.md)
- [Set Up Withholding Tax in the New Zealand Version [NZ]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/NewZealand/how-to-set-up-withholding-tax): Learn how to set up product posting groups and business posting groups for Withholding tax (WHT) in the New Zealand version of Business Central.
- [Withholding Tax in the New Zealand Version](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/NewZealand/withholding-tax): Learn how to configure withholding tax rates and thresholds, manage vendor payments, and print WHT certificates in the New Zealand version.
  - In the observatory: [Page 460 "Purchases & Payables Setup"](../../../../../objects/page/460.md)

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 118 "General Ledger Setup"](../../../../../objects/page/118.md) · on [Table 98 "General Ledger Setup"](../../../../../objects/table/98.md)

Learn also names 10 objects with no object page: page/11600, page/28040, page/28041, page/28042, page/28043, page/28044, page/28164, page/28165, page/28166, page/28167.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
