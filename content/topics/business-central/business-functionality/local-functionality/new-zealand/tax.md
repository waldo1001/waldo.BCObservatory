---
id: topic/business-central/business-functionality/local-functionality/new-zealand/tax
type: topic
title: Tax
summary: "New Zealand tax functionality in Business Central: GST posting setup, GST on prepayments, GST settlement reports, VAT exchange rate adjustment, and withholding tax (WHT) setup, calculation and settlement. It answers how-to questions for NZ tax configuration and reporting."
tier: official
language: en
system: localization
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:21:18.205Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: c7d09fd72adc203bee4ec26df3d54fb34e100719d1bf7f6b8a065ebe07d56049
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/NewZealand/how-to-adjust-settlement-exchange-rates-for-vat-entries
    title: Adjust Settlement Exchange Rates for VAT Entries (NZ)
    date: "2025-05-05"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/NewZealand/how-to-calculate-and-post-withholding-tax-settlements
    title: Calculate and post withholding tax settlements (NZ)
    date: "2025-05-05"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/NewZealand/how-to-calculate-goods-and-services-tax-on-prepayments
    title: Calculate goods and services tax on prepayments (NZ)
    date: "2025-05-05"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/NewZealand/how-to-print-goods-and-service-tax-settlement-reports
    title: Print Goods and Service Tax Settlement Reports (NZ)
    date: "2025-05-06"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/NewZealand/how-to-set-up-goods-and-service-tax-posting
    title: Set Up Goods and Service Tax Posting [NZ]
    date: "2025-05-06"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/NewZealand/how-to-set-up-vendors-without-abn-for-calculating-the-withholding-tax
    title: Set up vendors without IRD for calculating withholding tax (NZ)
    date: "2025-05-06"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/NewZealand/how-to-set-up-withholding-tax
    title: Set up withholding tax [NZ]
    date: "2025-05-07"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/NewZealand/withholding-tax
    title: Withholding Tax in the New Zealand version
    date: "2025-05-07"
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

> New Zealand tax functionality in Business Central: GST posting setup, GST on prepayments, GST settlement reports, VAT exchange rate adjustment, and withholding tax (WHT) setup, calculation and settlement. It answers how-to questions for NZ tax configuration and reporting.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [New Zealand](../new-zealand.md) > Tax · tier official · system localization · narrative reviewed (checked by Opus)

## Overview

This section covers the tax features specific to the New Zealand version of Business Central. It has two main areas: Goods and Services Tax (GST) and withholding tax (WHT). GST is applied to most goods and services and reported in the Business Activity Statement (BAS).

For GST, start with the posting setup page, then use the pages on GST for prepayments, printing GST settlement reports, and adjusting settlement exchange rates for VAT entries.

For WHT, start with the conceptual page on withholding tax in the New Zealand version, which explains posting groups, calculation rules and certificates. Then follow the setup pages: general WHT setup, and setup for vendors without an IRD number. Finally, use the page on calculating and posting WHT settlements to close open entries.

## Key points

- GST posting is set up for the NZ version, and GST is reported in the Business Activity Statement (BAS).
- GST on prepayments is calculated for prepayment invoicing.
- GST settlement reports can be printed to support GST reporting.
- Settlement exchange rates can be adjusted for VAT entries.
- Withholding tax is withheld from payments to vendors without IRD numbers and remitted to tax authorities in the BAS.
- WHT is configured with business and product posting groups, WHT posting setup, calculation rules, minimum invoice amount, percentage and realized WHT type.
- Vendors without an IRD number are set up so the WHT percentage is withheld automatically per WHT Posting Setup; a WHT certificate is supported.
- The Calculate and Post WHT Settlement page closes open WHT entries, with truncated whole-number reporting and a rounding account.

## Learn pages

- [Adjust Settlement Exchange Rates for VAT Entries (NZ)](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/NewZealand/how-to-adjust-settlement-exchange-rates-for-vat-entries): Use a batch job to settle VAT entries according to the government exchange rates in the New Zealand version.
- [Calculate and post withholding tax settlements (NZ)](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/NewZealand/how-to-calculate-and-post-withholding-tax-settlements): Learn how to calculate and post the withholding tax (WHT) in the New Zealand version of Business Central.
- [Calculate goods and services tax on prepayments (NZ)](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/NewZealand/how-to-calculate-goods-and-services-tax-on-prepayments): Learn how to calculate Goods and Services Tax (GST) for prepayments or partial payments based on the total invoice amount rather than just the partial payment.
- [Print Goods and Service Tax Settlement Reports (NZ)](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/NewZealand/how-to-print-goods-and-service-tax-settlement-reports): Learn how to prepare and submit a periodic goods and services tax (GST) settlement in the New Zealand version of Business Central.
- [Set Up Goods and Service Tax Posting [NZ]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/NewZealand/how-to-set-up-goods-and-service-tax-posting): Learn how to set up posting for goods and services tax (GST) in the New Zealand version of Business Central.
- [Set up vendors without IRD for calculating withholding tax (NZ)](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/NewZealand/how-to-set-up-vendors-without-abn-for-calculating-the-withholding-tax): Learn how to set up vendors without IRD numbers to calculate withholding tax, ensuring compliance with New Zealand tax regulations for local vendors.
- [Set up withholding tax [NZ]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/NewZealand/how-to-set-up-withholding-tax): Learn how to set up product posting groups and business posting groups for Withholding tax (WHT) in the New Zealand version of Business Central.
- [Withholding Tax in the New Zealand version](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/NewZealand/withholding-tax): Learn about withholding tax (WHT) scenarios in New Zealand and how to manage them effectively.

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 118 "General Ledger Setup"](../../../../../objects/page/118.md) · on [Table 98 "General Ledger Setup"](../../../../../objects/table/98.md)

Learn also names 10 objects with no object page: page/11600, page/28040, page/28041, page/28042, page/28043, page/28044, page/28164, page/28165, page/28166, page/28167.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
