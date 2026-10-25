---
id: topic/business-central/business-functionality/local-functionality/germany/general
type: topic
title: General
summary: "German local functionality in Business Central: currency exchange rate adjustment under BilMoG, EU Sales List submission to BZSt via ELMA5, registration numbers on sales and purchase reports, and the G/L Setup Information report. It answers setup and compliance questions for German companies."
tier: official
language: en
system: localization
review:
  state: reviewed
  by: opus
  at: "2026-10-24T00:56:23.185Z"
  flags: []
generated:
  at: "2026-10-25T16:50:34.247Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: dc7132f24919ba0863a8b9a7affbc38fbd35fabab7250e3d9f58a8af402da6d6
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/currency-exchange-rates
    title: Currency Exchange Rates [DE]
    date: "2026-10-09"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/eu-sales-list-in-germany
    title: EU Sales List in Germany
    date: "2026-10-09"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/how-to-include-company-registration-numbers-on-sales-reports-and-purchase-reports
    title: Include Company Registration Numbers on Sales and Purchase Reports
    date: "2026-10-09"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/how-to-print-general-ledger-setup-information
    title: Print general ledger setup information [DE]
    date: "2026-10-09"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/currency-exchange-rates
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/eu-sales-list-in-germany
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/how-to-include-company-registration-numbers-on-sales-reports-and-purchase-reports
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/how-to-print-general-ledger-setup-information
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/germany
  localizations: []
  videos: []
  posts:
    - post/miljan-rs/812
  guidelines: []
learn_toc_path:
  - Business functionality
  - Local functionality
  - Germany
  - General
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/local-functionality/germany
children: []
coverage:
  learn: 4
  code: 0
  video: 0
  blog: 1
  guideline: 0
bc_forms: []
member_hash: 18a9ff2a5630cac50244eda874f01c9ab37272f84645242ded52e6a6199bfba5
narrative: generated
---

# General

> German local functionality in Business Central: currency exchange rate adjustment under BilMoG, EU Sales List submission to BZSt via ELMA5, registration numbers on sales and purchase reports, and the G/L Setup Information report. It answers setup and compliance questions for German companies.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Germany](../germany.md) > General · tier official · system localization · narrative reviewed (checked by Opus)

## Overview

This section collects the general German-specific pages. They cover year-end valuation of foreign currency payables and receivables, statutory reporting to the German tax authority, printing registration numbers on documents, and a report for checking accounting setup.

Start with the page that matches your task. Use the currency exchange rates page for fiscal year-end adjustments under the BilMoG method. Use the EU Sales List page when you submit to BZSt. Use the registration numbers page to configure what prints on reports. Use the G/L Setup Information report to check configuration before daily business use.

## Key points

- Currency exchange rate adjustment uses the BilMoG valuation method for payables and receivables at fiscal year-end.
- BilMoG treats short-term entries (under one year) differently from long-term entries, with lowest value and standard valuation and a valuation reference date.
- The EU Sales List in Germany is submitted to BZSt through the ELMA5 interface.
- BZSt submission requires authentication with a BZSt number and private key.
- The EU Sales List supports large datasets and both interactive and automatic data transfer.
- Set the company registration number on the Tax Office FastTab in Company Information.
- Set vendor registration numbers on the Invoicing FastTab on the Vendors page so they print on purchase reports.
- The G/L Setup Information report shows G/L setup, posting groups, posting matrix, VAT setup, source and reason codes, and number series.

## Learn pages

- [Currency Exchange Rates [DE]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/currency-exchange-rates): At fiscal year-end, adjust currency exchange rates for payables and receivables to ensure accurate annual balance valuation.
- [EU Sales List in Germany](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/eu-sales-list-in-germany): In Germany, the EU sales list is submitted to the Bundeszentralamt für Steuern (BZSt) through the ELMA5 interface on the BZSt Online Portal.
- [Include Company Registration Numbers on Sales and Purchase Reports](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/how-to-include-company-registration-numbers-on-sales-reports-and-purchase-reports): Print company registration numbers on specific sales reports and purchase reports.
- [Print general ledger setup information [DE]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/how-to-print-general-ledger-setup-information): Run the G/L Setup Information report to view the master data before using the German version of Business Central.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [Polishing xRechnung and ZUGFeRD in Business Central](../../../../../posts/miljan-rs/812.md) (community post): "xRechnung and ZUGFeRD formats built on the E-Documents framework"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
