---
id: topic/business-central/business-functionality/local-functionality/united-kingdom/general
type: topic
title: General
summary: "United Kingdom general functionality in Business Central: statutory company information, Ideal Postcodes address lookup, fraud prevention headers for Making Tax Digital VAT submissions to HMRC, and posting date warnings. It answers setup and compliance questions for UK companies."
tier: official
language: en
system: localization
review:
  state: reviewed
  by: opus
  at: "2026-10-28T11:03:13.383Z"
  flags: []
generated:
  at: "2026-10-28T11:04:14.111Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 4fd5ccc66e86add3d7c5959bf79677f6989b38009d59a83ed0a2e90172240fcd
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/UnitedKingdom/how-to-enter-statutory-information
    title: Enter Statutory Information [UK]
    date: "2026-10-26"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/UnitedKingdom/ui-extensions-idealpostcodes
    title: Ideal Postcodes extension [UK]
    date: "2026-10-19"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/UnitedKingdom/fraud-prevention-data
    title: Send Fraud Prevention Data in the UK
    date: "2026-10-19"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/UnitedKingdom/how-to-set-up-a-posting-date-warning
    title: Set Up a Posting Date Warning in the United Kingdom
    date: "2026-10-23"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/UnitedKingdom/ui-extensions-setup-idealpostcodes-service
    title: Set up the Ideal Postcodes Extension [UK]
    date: "2026-10-19"
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

> United Kingdom general functionality in Business Central: statutory company information, Ideal Postcodes address lookup, fraud prevention headers for Making Tax Digital VAT submissions to HMRC, and posting date warnings. It answers setup and compliance questions for UK companies.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [United Kingdom](../united-kingdom.md) > General · tier official · system localization · narrative reviewed (checked by Opus)

## Overview

This section collects UK-specific setup topics that apply across the application. They cover legal company details, address entry help, HMRC fraud prevention data, and a posting date safeguard for sales and purchase documents.

Start with Enter Statutory Information to fill in the registration number, registered name and address on the Statutory FastTab of the Company Information page. For address entry, read the Ideal Postcodes extension page for what it does, then the setup page for the account, API key and permissions it needs.

If you submit VAT through Making Tax Digital, read Send Fraud Prevention Data in the UK to see which headers are sent and how to configure the IP address service. The posting date warning page explains how to switch on a confirmation when a document's posting date differs from the work date.

## Key points

- Statutory information (registration number, registered name, address, city, county) is entered on the Statutory FastTab of the Company Information page.
- The Ideal Postcodes extension looks up addresses from postcodes for customers, vendors, bank accounts, contacts and employees, and fills in address fields automatically.
- Ideal Postcodes setup needs an Ideal Postcodes account, an API key and HttpClient permissions; the setup includes address provider selection, connection testing and an option to remove the organization name.
- Ideal Postcodes lookup supports multiple countries or regions: GB, UK, NL, SG and IE.
- Fraud prevention headers (Gov-Client and Gov-Vendor) are sent with Making Tax Digital VAT API requests to HMRC; collection is enabled with the Enabled setting on VAT Report Setup. The page references version 20.1.
- Fraud prevention data depends on the User IP Address Service field, which has configuration requirements, and includes browser information.
- Posting Date Warning is enabled with the Posting Date Check on Posting toggle on Sales & Receivables Setup and Purchases & Payables Setup.
- The posting date warning shows a confirmation when a sales or purchase document's posting date differs from the work date; the page also covers a check for batch posting.

## Learn pages

- [Enter Statutory Information [UK]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/UnitedKingdom/how-to-enter-statutory-information): Enter registered company details on the Statutory FastTab of Company Information in the British version of Business Central for use in reports.
- [Ideal Postcodes extension [UK]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/UnitedKingdom/ui-extensions-idealpostcodes): Retrieve addresses for entities like customers, vendors, employees, and banks in the United Kingdom from the Ideal Postcodes service.
- [Send Fraud Prevention Data in the UK](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/UnitedKingdom/fraud-prevention-data): Learn how Business Central collects fraud prevention data for Making Tax Digital in the United Kingdom and how to set up the IP address service.
- [Set Up a Posting Date Warning in the United Kingdom](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/UnitedKingdom/how-to-set-up-a-posting-date-warning): Learn to set up the warning message displayed when posting sales and purchase documents with a posting date different from the work date.
- [Set up the Ideal Postcodes Extension [UK]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/UnitedKingdom/ui-extensions-setup-idealpostcodes-service): Learn how to configure the Ideal Postcodes extension in the British version of Business Central.

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 1 "Company Information"](../../../../../objects/page/1.md) · on [Table 79 "Company Information"](../../../../../objects/table/79.md)
- [Page 459 "Sales & Receivables Setup"](../../../../../objects/page/459.md) · on [Table 311 "Sales & Receivables Setup"](../../../../../objects/table/311.md)
- [Page 460 "Purchases & Payables Setup"](../../../../../objects/page/460.md) · on [Table 312 "Purchases & Payables Setup"](../../../../../objects/table/312.md)
- [Page 743 "VAT Report Setup"](../../../../../objects/page/743.md) · on [Table 743 "VAT Report Setup"](../../../../../objects/table/743.md)

Learn also names 2 objects with no object page: page/9142, page/10539.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
