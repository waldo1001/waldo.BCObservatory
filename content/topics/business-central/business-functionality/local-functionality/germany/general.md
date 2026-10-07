---
id: topic/business-central/business-functionality/local-functionality/germany/general
type: topic
title: General
summary: "German local functionality in Business Central: year-end currency exchange rate adjustment with BilMoG valuation, EU sales list submission to the BZSt portal, company registration numbers on reports, and the G/L Setup Information report. Answers how-to and compliance questions for German setups."
tier: official
language: en
system: localization
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:25:23.799Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: d4d7d9fdbcfdf6cbfab799464d85605a04d047865e71dc84cf7fa8aa1dd718f3
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/currency-exchange-rates
    title: Currency Exchange Rates [DE]
    date: "2025-03-10"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/eu-sales-list-in-germany
    title: EU Sales List in Germany
    date: "2025-03-10"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/how-to-include-company-registration-numbers-on-sales-reports-and-purchase-reports
    title: Include Company Registration Numbers on Sales and Purchase Reports
    date: "2025-03-11"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/how-to-print-general-ledger-setup-information
    title: Print general ledger setup information [DE]
    date: "2025-03-11"
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
  posts: []
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
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 18a9ff2a5630cac50244eda874f01c9ab37272f84645242ded52e6a6199bfba5
narrative: generated
---

# General

> German local functionality in Business Central: year-end currency exchange rate adjustment with BilMoG valuation, EU sales list submission to the BZSt portal, company registration numbers on reports, and the G/L Setup Information report. Answers how-to and compliance questions for German setups.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Germany](../germany.md) > General · tier official · system localization · narrative reviewed by Opus

## Overview

This section collects four pages on general features specific to the German version of Business Central. They cover legal and reporting needs: valuing payables and receivables at fiscal year-end, reporting EU sales for VAT, showing registration numbers on documents, and printing setup data for review.

The pages are independent, so start with the one that matches your task. For year-end closing, read the currency exchange rates page. For VAT reporting, read the EU sales list page. For document content, use the registration numbers page. For auditing setup data, use the G/L setup information page.

## Key points

- Currency exchange rates are adjusted at fiscal year-end with the Adjust Exchange Rates batch job, using the BilMoG valuation method to meet German legal requirements for payables and receivables.
- The valuation options include standard valuation and lowest value valuation, with settings such as Valuation Reference Date and Short term liabilities until.
- EU sales lists are submitted through the BZSt Online Portal using the ELMA5 interface.
- Submission requires authentication with the BZSt number and private key; VAT-VIES reports can be uploaded interactively or transferred automatically.
- Registration numbers on sales reports come from Company Information; on purchase reports they come from the Vendor record.
- The G/L Setup Information report prints master data for posting groups, VAT setup, source codes and number series so you can verify them, and relates to GDPdU compliance.

## Learn pages

- [Currency Exchange Rates [DE]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/currency-exchange-rates): At fiscal year-end, adjust currency exchange rates for payables and receivables to ensure accurate annual balance valuation.
- [EU Sales List in Germany](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/eu-sales-list-in-germany): In Germany, the EU sales list is submitted to the Bundeszentralamt für Steuern (BZSt) through the ELMA5 interface on the BZSt Online Portal.
- [Include Company Registration Numbers on Sales and Purchase Reports](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/how-to-include-company-registration-numbers-on-sales-reports-and-purchase-reports): Print company registration numbers on specific sales reports and purchase reports.
- [Print general ledger setup information [DE]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/how-to-print-general-ledger-setup-information): Run the G/L Setup Information report to view the master data before using the German version of Business Central.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
