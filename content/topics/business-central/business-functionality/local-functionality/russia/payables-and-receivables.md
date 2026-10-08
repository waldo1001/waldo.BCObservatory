---
id: topic/business-central/business-functionality/local-functionality/russia/payables-and-receivables
type: topic
title: Payables and receivables
summary: "Russian local functionality for payables and receivables in Business Central: customer and vendor agreements, prepayments and prepayment differences, letters of attorney, customs declaration tracking, and vendor and customer reports. It answers setup and usage questions for these features."
tier: official
language: en
system: sales
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:21:18.543Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: d1e5b340600c19eb187361464d8b1dd7671d8060cf1031d0653cf58f7d5a76f0
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/how-to-enter-custom-declarations-information
    title: Entering custom declaration information in Russia
    date: "2025-07-15"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/russian-payables-reports
    title: Payables reports in Russia
    date: "2025-07-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/prepayment-differences-invoices-prepayment-differences
    title: Prepayment differences in Russia
    date: "2025-07-18"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/russian-receivables-reports
    title: Receivables reports in Russia
    date: "2025-07-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/how-to-set-up-and-create-letters-of-attorney
    title: Set up and creating letters of attorney in Russia
    date: "2025-07-16"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/how-to-set-up-customer-and-vendor-agreements
    title: Setting up customer and vendor agreements in Russia
    date: "2025-07-16"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/how-to-set-up-customer-prepayments
    title: Setting up customer prepayments in Russia
    date: "2025-07-16"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/how-to-set-up-vendor-prepayments
    title: Setting up vendor prepayments in Russia
    date: "2025-07-17"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/how-to-enter-custom-declarations-information
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/russian-payables-reports
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/prepayment-differences-invoices-prepayment-differences
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/russian-receivables-reports
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/how-to-set-up-and-create-letters-of-attorney
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/how-to-set-up-customer-and-vendor-agreements
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/how-to-set-up-customer-prepayments
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/how-to-set-up-vendor-prepayments
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/russia
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Local functionality
  - Russia
  - Payables and receivables
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/local-functionality/russia
children: []
coverage:
  learn: 8
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 1d1c4d61da1350dec7deab72b427aa8023977eb24f51209527d128370a08cb46
narrative: generated
---

# Payables and receivables

> Russian local functionality for payables and receivables in Business Central: customer and vendor agreements, prepayments and prepayment differences, letters of attorney, customs declaration tracking, and vendor and customer reports. It answers setup and usage questions for these features.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Russia](../russia.md) > Payables and receivables · tier official · system sales · narrative reviewed (checked by Opus)

## Overview

This section covers Russia-specific features for vendor and customer accounts. It has setup pages for agreements, customer prepayments, vendor prepayments, letters of attorney and customs declaration information. It also has pages on prepayment differences and on payables and receivables reports.

Start with the agreements page, since agreements synchronize with dimensions that the reports and analyses use. Then set up the prepayment pages (customer or vendor) with their accounts, number series and dimension values. The prepayment differences page follows, for exchange rate adjustments between prepayments and foreign currency invoices. The report pages describe the turnover, accounting card, entries analysis and reconciliation act reports for vendors and customers.

Letters of attorney and custom declaration pages are for document-driven tasks. Letters of attorney cover numbering and linking to employees, vendors and purchase documents. Customs declaration tracking covers CD number format checks and item tracking for imported goods.

## Key points

- Customer and vendor agreements sync with dimensions for reports; setup includes dimension mapping, number series, validity dates and blocking.
- Customer prepayments cover advance payments on sales orders, with prepayment accounts, number series, PD document symbols and dimension values for conditional gains and losses.
- Vendor prepayments are configured in Purchases & Payables Setup and Vendor Posting Groups, including Use Prepayment Account, Posted Prepmt. Inv. Nos., PD Doc. Nos. Type and Symbol for PD Doc.
- Prepayment differences handle exchange rate adjustments between prepayments and foreign currency invoices, posted to separate accounts.
- Vendor reports include general ledger turnover, accounting card, turnover, posting group turnover, entries analysis and reconciliation act.
- Receivables reports mirror the vendor set and offer options such as rounding precision, zero line exclusion, detail levels, agreement printing and currency selection.
- Letters of attorney use number series for open and released documents and link to employees, vendors and source purchase documents, with validity dates and status.
- Customs declaration tracking offers CD No. format checks, package-specific tracking, country of origin code, temporary CD numbers and Factura-Invoice printing.

## Learn pages

- [Entering custom declaration information in Russia](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/how-to-enter-custom-declarations-information): Russian localization includes enhancements for managing customs declarations, enabling tracking, and printing of declaration numbers for imported goods.
- [Payables reports in Russia](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/russian-payables-reports): Russian localization provides enhanced payables reports for vendors.
- [Prepayment differences in Russia](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/prepayment-differences-invoices-prepayment-differences): Russian localization features allow you to manage differences between prepayments and invoices due to currency exchange rate changes.
- [Receivables reports in Russia](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/russian-receivables-reports): Learn about receivables reports and related enhancements available for Russia in Business Central.
- [Set up and creating letters of attorney in Russia](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/how-to-set-up-and-create-letters-of-attorney): Russian localization allows you to create, print, and manage letters of attorney in Business Central.
- [Setting up customer and vendor agreements in Russia](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/how-to-set-up-customer-and-vendor-agreements): Russian localization provides features for managing customer and vendor agreements.
- [Setting up customer prepayments in Russia](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/how-to-set-up-customer-prepayments): This article describes how to set up and manage customer prepayments in Business Central for Russia.
- [Setting up vendor prepayments in Russia](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/how-to-set-up-vendor-prepayments): Russian localization adds features for managing vendor prepayments.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
