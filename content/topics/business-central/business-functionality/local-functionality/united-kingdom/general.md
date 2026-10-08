---
id: topic/business-central/business-functionality/local-functionality/united-kingdom/general
type: topic
title: General
summary: "United Kingdom general localization in Business Central: statutory company information, Ideal Postcodes address lookup, fraud prevention data for HMRC Making Tax Digital, and posting date warnings. It answers setup questions for the British version."
tier: official
language: en
system: localization
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:24:16.616Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: d26afe947e1d17ac6ab1abc1aaf903556ff8b93074349901f9b4e66d869bce89
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/UnitedKingdom/how-to-enter-statutory-information
    title: Enter Statutory Information [UK]
    date: "2025-02-18"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/UnitedKingdom/ui-extensions-idealpostcodes
    title: Ideal Postcodes extension [UK]
    date: "2026-02-09"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/UnitedKingdom/fraud-prevention-data
    title: Send Fraud Prevention Data (UK)
    date: "2025-02-18"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/UnitedKingdom/how-to-set-up-a-posting-date-warning
    title: Set up a posting date warning [GB]
    date: "2025-06-19"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/UnitedKingdom/ui-extensions-setup-idealpostcodes-service
    title: Set up the Ideal Postcodes Extension [UK]
    date: "2026-04-09"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/UnitedKingdom/how-to-enter-statutory-information
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/UnitedKingdom/ui-extensions-idealpostcodes
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/UnitedKingdom/fraud-prevention-data
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/UnitedKingdom/how-to-set-up-a-posting-date-warning
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/UnitedKingdom/ui-extensions-setup-idealpostcodes-service
  objects:
    - object/page/1
    - object/page/459
    - object/page/460
    - object/page/743
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/united-kingdom
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Local functionality
  - United Kingdom
  - General
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/local-functionality/united-kingdom
children: []
coverage:
  learn: 5
  code: 4
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 1
  - 459
  - 460
  - 743
  - 9142
  - 10539
member_hash: a39e4c6093a1c20a8c85cf31817eb47df39b27c8281be63bfbce248fcf53d992
narrative: generated
---

# General

> United Kingdom general localization in Business Central: statutory company information, Ideal Postcodes address lookup, fraud prevention data for HMRC Making Tax Digital, and posting date warnings. It answers setup questions for the British version.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [United Kingdom](../united-kingdom.md) > General · tier official · system localization · narrative reviewed (checked by Opus)

## Overview

This section collects the general setup tasks specific to the British version of Business Central. It has no subtopics, so all five pages sit at one level. They cover legal company details, address lookup, tax authority communication and a posting safeguard.

For company setup, start with the statutory information page, which describes the registration and registered address fields on the Company Information page. For address entry, the Ideal Postcodes extension page explains what the extension does, and the setup page explains how to connect to the Ideal Postcodes API. For UK VAT, the fraud prevention page explains the headers sent to HMRC through Making Tax Digital APIs and the consent an administrator must give. The posting date warning page covers a toggle that warns when a document's posting date differs from the work date.

## Key points

- Statutory information is entered on the Company Information page: Registration No., Registered Name, and the registered address fields including city and county.
- The Ideal Postcodes extension fills address fields from a postcode lookup for customers, vendors, bank accounts, and employees.
- Ideal Postcodes setup uses the Ideal Postcodes API with an API key and a service connection. Subscription plans are based on usage.
- The extension description mentions multi-country support.
- UK VAT communication with HMRC through Making Tax Digital APIs requires fraud prevention headers.
- Admins must consent to sending device and user identification data. The page mentions a user IP address service and multi-factor authentication headers, and cites version 20.1.
- The Posting Date Check on Posting toggle shows a warning when a sales or purchase document's posting date differs from the work date, and it also applies to batch posting.

## Learn pages

- [Enter Statutory Information [UK]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/UnitedKingdom/how-to-enter-statutory-information): Statutory details are on the Statutory FastTab of the Company Information page.
- [Ideal Postcodes extension [UK]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/UnitedKingdom/ui-extensions-idealpostcodes): Retrieve addresses for entities like customers, vendors, employees, and banks in the United Kingdom from the Ideal Postcodes service.
- [Send Fraud Prevention Data (UK)](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/UnitedKingdom/fraud-prevention-data): Business Central supports the British requirement to submit fraud prevention data to HMRC as part of Making Tax Digital. This article explains how to set up the headers.
- [Set up a posting date warning [GB]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/UnitedKingdom/how-to-set-up-a-posting-date-warning): Learn to set up the warning message displayed when posting sales and purchase documents with a posting date different from the work date.
- [Set up the Ideal Postcodes Extension [UK]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/UnitedKingdom/ui-extensions-setup-idealpostcodes-service): Learn how to configure the Ideal Postcodes extension in the British version of Business Central.

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 1 "Company Information"](../../../../../objects/page/1.md) · on [Table 79 "Company Information"](../../../../../objects/table/79.md)
- [Page 459 "Sales & Receivables Setup"](../../../../../objects/page/459.md) · on [Table 311 "Sales & Receivables Setup"](../../../../../objects/table/311.md)
- [Page 460 "Purchases & Payables Setup"](../../../../../objects/page/460.md) · on [Table 312 "Purchases & Payables Setup"](../../../../../objects/table/312.md)
- [Page 743 "VAT Report Setup"](../../../../../objects/page/743.md) · on [Table 743 "VAT Report Setup"](../../../../../objects/table/743.md)

Learn also names 2 objects with no object page: page/9142, page/10539.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
