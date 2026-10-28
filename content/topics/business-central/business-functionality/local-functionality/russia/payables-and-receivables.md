---
id: topic/business-central/business-functionality/local-functionality/russia/payables-and-receivables
type: topic
title: Payables and receivables
summary: "Russian local functionality for payables and receivables in Business Central: vendor and customer reports, agreements, customer and vendor prepayments, prepayment exchange differences, letters of attorney, and customs declaration tracking. It answers setup and usage questions for these areas."
tier: official
language: en
system: sales
review:
  state: reviewed
  by: opus
  at: "2026-10-28T11:02:33.457Z"
  flags: []
generated:
  at: "2026-10-28T11:04:14.111Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 3093038cea0d68fa59b0364a74b1af6770568f5f1f9959304a1d2679d08bef73
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/russian-payables-reports
    title: Payables reports in Russia
    date: "2026-10-23"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/prepayment-differences-invoices-prepayment-differences
    title: Prepayment differences in Russia
    date: "2026-10-23"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/russian-receivables-reports
    title: Receivables reports in Russia
    date: "2026-10-23"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/how-to-set-up-and-create-letters-of-attorney
    title: Set up and creating letters of attorney in Russia
    date: "2026-10-23"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/how-to-enter-custom-declarations-information
    title: Set Up Customs Declaration Tracking in Russia
    date: "2026-10-23"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/how-to-set-up-customer-and-vendor-agreements
    title: Setting up customer and vendor agreements in Russia
    date: "2026-10-23"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/how-to-set-up-customer-prepayments
    title: Setting up customer prepayments in Russia
    date: "2026-10-23"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/how-to-set-up-vendor-prepayments
    title: Setting up vendor prepayments in Russia
    date: "2026-10-23"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/russian-payables-reports
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/prepayment-differences-invoices-prepayment-differences
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/russian-receivables-reports
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/how-to-set-up-and-create-letters-of-attorney
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/how-to-enter-custom-declarations-information
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
  changes:
    - change/bcapps/11757
    - change/bcapps/9652
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

> Russian local functionality for payables and receivables in Business Central: vendor and customer reports, agreements, customer and vendor prepayments, prepayment exchange differences, letters of attorney, and customs declaration tracking. It answers setup and usage questions for these areas.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Russia](../russia.md) > Payables and receivables · tier official · system sales · narrative reviewed (checked by Opus)

## Overview

This section covers the Russia-specific tools for handling vendor and customer transactions. The reporting pages describe payables and receivables reports that analyze general ledger turnover, balances, entries and reconciliation acts. Agreements pages explain how to track contractual terms with customers and vendors, synchronize them with dimensions, and report ledger entries by agreement.

Prepayment pages cover setup for customer prepayments and vendor prepayments, including prepayment accounts, number series and posting groups. A separate page explains how currency exchange differences are calculated when prepayments are applied to foreign-currency invoices.

Two further pages deal with documents tied to purchasing and sales: letters of attorney (numbering, M-2A template, creation and printing) and customs declaration tracking (declaration numbers and countries of origin for imported goods). A reasonable start is the agreements page, since receivables reports can use agreement-based calculations, followed by the prepayment setup pages.

## Key points

- Payables reports: vendor general ledger turnover, accounting card, turnover, posting group turnover, entries analysis and reconciliation act.
- Receivables reports: six matching customer reports, with rounding precision options, zero value filtering and agreement-based calculations.
- Customer and vendor agreements sync with dimensions, use numbering series, support blocking options and allow ledger entry reporting by agreement.
- Customer prepayment setup uses Use Prepayment Account, Create Prepayment Invoice, Posted Prepayment Nos., Posted PD Doc. Nos., PD Doc. Nos. Type and Symbol for PD Doc.
- Vendor prepayment setup is done in Purchases & Payables Setup and Vendor Posting Groups, including numbering for prepayment invoices and credit memos and dimension codes for gains and losses.
- Prepayment differences covers currency exchange differences when applying prepayments to foreign-currency invoices.
- Letters of attorney need numbering for open and released letters and the M-2A template; they can be created from employee details and source documents and then printed.
- Customs declaration tracking records declaration numbers and countries of origin via package and item tracking codes, supports permanent and temporary numbers, and feeds factura-invoice reports.

## Learn pages

- [Payables reports in Russia](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/russian-payables-reports): Russian localization provides enhanced payables reports for vendors.
  - In the observatory: [Page 12407 "Vendor G/L Turnover (RU)"](../../../../../objects/page/12407-ru.md), [Report 12444 "Vendor Turnover (RU)"](../../../../../objects/report/12444-ru.md), [Report 12445 "Vendor Accounting Card (RU)"](../../../../../objects/report/12445-ru.md), [Report 12446 "Vendor Entries Analysis (RU)"](../../../../../objects/report/12446-ru.md)
- [Prepayment differences in Russia](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/prepayment-differences-invoices-prepayment-differences): Russian localization features allow you to manage differences between prepayments and invoices due to currency exchange rate changes.
  - In the observatory: [Page 459 "Sales & Receivables Setup"](../../../../../objects/page/459.md), [Page 460 "Purchases & Payables Setup"](../../../../../objects/page/460.md)
- [Receivables reports in Russia](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/russian-receivables-reports): Learn about receivables reports and related enhancements available for Russia in Business Central.
- [Set up and creating letters of attorney in Russia](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/how-to-set-up-and-create-letters-of-attorney): Russian localization allows you to create, print, and manage letters of attorney in Business Central.
  - In the observatory: [Page 26 "Vendor Card"](../../../../../objects/page/26.md), [Page 460 "Purchases & Payables Setup"](../../../../../objects/page/460.md), [Page 5200 "Employee Card"](../../../../../objects/page/5200.md), [Page 5607 "Fixed Asset Setup"](../../../../../objects/page/5607.md)
- [Set Up Customs Declaration Tracking in Russia](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/how-to-enter-custom-declarations-information): Set up customs declaration tracking in the Russian version of Business Central to track imported goods and print declaration details on factura-invoices.
  - In the observatory: [Report 12411 "Order Factura-Invoice (A) (RU)"](../../../../../objects/report/12411-ru.md), [Report 12418 "Posted Factura-Invoice (A) (RU)"](../../../../../objects/report/12418-ru.md), [Table 311 "Sales & Receivables Setup"](../../../../../objects/table/311.md), [Table 313 "Inventory Setup"](../../../../../objects/table/313.md)
- [Setting up customer and vendor agreements in Russia](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/how-to-set-up-customer-and-vendor-agreements): Russian localization provides features for managing customer and vendor agreements.
- [Setting up customer prepayments in Russia](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/how-to-set-up-customer-prepayments): This article describes how to set up and manage customer prepayments in Business Central for Russia.
  - In the observatory: [Page 110 "Customer Posting Groups"](../../../../../objects/page/110.md), [Page 459 "Sales & Receivables Setup"](../../../../../objects/page/459.md)
- [Setting up vendor prepayments in Russia](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/how-to-set-up-vendor-prepayments): Russian localization adds features for managing vendor prepayments.
  - In the observatory: [Page 111 "Vendor Posting Groups"](../../../../../objects/page/111.md), [Page 460 "Purchases & Payables Setup"](../../../../../objects/page/460.md)

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#11757 [Main]-Payment Orders posted in Foreign Currency (USD) do not populate Source Currency Code and Source Currency Amount in G/L Entries in the Spanish version.](../../../../../changes/bcapps/11757.md) (code change): "Payment orders posted in Foreign Currency now correctly populate the source currency code"
- [#9652 [Extensibility Request] issue 30358: add OnBeforeOnPreReport event to Redraw Receivable Bills report](../../../../../changes/bcapps/9652.md) (code change): "Adds an OnBeforeOnPreReport integration event to the ES Redraw Receivable Bills report"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
