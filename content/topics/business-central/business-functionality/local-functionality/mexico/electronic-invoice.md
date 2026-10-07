---
id: topic/business-central/business-functionality/local-functionality/mexico/electronic-invoice
type: topic
title: Electronic invoice
summary: "Electronic invoicing for Mexico in Business Central: CFDI XML invoices, SAT certificates, PAC web services, invoice generation, and Carta de Porte packing slips and transfer orders. It answers setup, stamping, and compliance questions."
tier: official
language: en
system: sales
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:24:09.741Z"
  flags: []
generated:
  at: "2026-10-07T15:52:42.721Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 89f2fcdcd32f6489e9fa6bc3e22cf8ad461bdd86d94d1b2fefcd8a263c28093f
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Mexico/packing-slips-transfer-orders
    title: Carta de Porte packing slips and transfer orders [MX]
    date: "2025-02-26"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Mexico/electronic-invoicing
    title: Electronic invoicing - Mexico
    date: "2025-05-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Mexico/how-to-generate-electronic-invoices
    title: Generate electronic invoices [MX]
    date: "2025-02-25"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Mexico/how-to-set-up-electronic-invoicing
    title: Set Up Electronic Invoicing [MX]
    date: "2025-05-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Mexico/how-to-set-up-pac-web-services
    title: Set Up PAC Web Services
    date: "2025-02-25"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Mexico/packing-slips-transfer-orders
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Mexico/electronic-invoicing
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Mexico/how-to-generate-electronic-invoices
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Mexico/how-to-set-up-electronic-invoicing
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Mexico/how-to-set-up-pac-web-services
  objects:
    - object/page/25
    - object/page/132
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/mexico
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcapps/11023
    - change/bcapps/8183
learn_toc_path:
  - Business functionality
  - Local functionality
  - Mexico
  - Electronic invoice
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/local-functionality/mexico
children: []
coverage:
  learn: 5
  code: 2
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 25
  - 132
  - 10455
  - 10456
  - 10458
  - 10459
  - 27001
  - 27002
  - 27003
  - 27010
  - 27011
  - 27012
  - 27013
  - 27014
  - 27015
  - 27016
  - 27017
  - 27018
  - 27040
  - 27041
  - 27042
  - 27043
  - 27044
member_hash: 500de087efa04ad264f1a6ad9a7985049abb0c762226c4496b79c200a4026653
narrative: generated
---

# Electronic invoice

> Electronic invoicing for Mexico in Business Central: CFDI XML invoices, SAT certificates, PAC web services, invoice generation, and Carta de Porte packing slips and transfer orders. It answers setup, stamping, and compliance questions.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Mexico](../mexico.md) > Electronic invoice · tier official · system sales · narrative reviewed by Opus

## Overview

This section covers how Business Central meets Mexican tax authority requirements for electronic documents. Invoices are produced as CFDI XML files, digitally signed with a SAT certificate and stamped through a PAC (authorized certification provider) web service.

The pages follow the order of work. The "Electronic invoicing - Mexico" page gives the overview. "Set Up Electronic Invoicing [MX]" covers company information, general ledger, customer and vendor tax IDs, locations, and CFDI field mappings. "Set Up PAC Web Services" covers certificate upload and web service details. "Generate electronic invoices [MX]" covers day-to-day creation, stamping, and sending. The Carta de Porte page covers shipping documents.

Start with the overview, then do the electronic invoicing setup and the PAC setup before you generate any documents. Go to the Carta de Porte page only if you ship goods and need compliant packing slips or transfer orders.

## Key points

- Invoices are generated and sent as CFDI XML files, digitally signed and carrying a QR code.
- Setup needs a SAT certificate, PAC web services, and company information. Multiple SAT certificates are supported.
- Setup also covers general ledger, customer and vendor tax IDs, locations, CFDI field mappings, and the option to include a PDF report.
- PAC web service setup includes certificate upload and separate test and production environments. It enables digital stamp requests and document cancellation.
- Invoice generation covers sales and service documents, CFDI digital stamps, XML export, and payment stamping.
- Foreign trade invoices use the Comercio Exterior Complement, which needs its own setup.
- Carta de Porte packing slips and transfer orders can be printed and sent as signed CFDI files. This is documented for version 24.4.
- Carta de Porte setup includes SCT permission, vehicle configuration, item classification, hazardous material, packaging type, and custom transit number.

## Learn pages

- [Carta de Porte packing slips and transfer orders [MX]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Mexico/packing-slips-transfer-orders): Business Central supports CFDI, allowing the printing of packing slips and transfer orders with the necessary digital signature to meet Carta de Porte requirements.
- [Electronic invoicing - Mexico](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Mexico/electronic-invoicing): Learn how Business Central supports CFDI so that you can export sales and service invoices and credit memos as electronic documents with the required digital signature.
- [Generate electronic invoices [MX]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Mexico/how-to-generate-electronic-invoices): After a sales invoice is posted in the Mexican version, an electronic invoice must be generated and sent to the customer.
- [Set Up Electronic Invoicing [MX]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Mexico/how-to-set-up-electronic-invoicing): To send electronic documents in Mexico, it's necessary to set up Business Central to include the required identification numbers for CFDI.
- [Set Up PAC Web Services](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Mexico/how-to-set-up-pac-web-services): To send electronic invoices and credit memos in Mexico, you need to specify at least one provider for the required electronic stamp.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#11023 BE's PEPPOL "escompte" compensation](../../../../../changes/bcapps/11023.md) (code change): "Belgian PEPPOL invoices now apply discount compensation"
- [#8183 Handle failure to manually create E-Document from posted doc with no …](../../../../../changes/bcapps/8183.md) (code change): "E-Document creation now correctly reports failure when a posted document"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 25 "Customer Ledger Entries"](../../../../../objects/page/25.md) · on [Table 21 "Cust. Ledger Entry"](../../../../../objects/table/21.md)
- [Page 132 "Posted Sales Invoice"](../../../../../objects/page/132.md) · on [Table 112 "Sales Invoice Header"](../../../../../objects/table/112.md)

Learn also names 21 objects with no object page: page/10455, page/10456, page/10458, page/10459, page/27001, page/27002, page/27003, page/27010, page/27011, page/27012, page/27013, page/27014, page/27015, page/27016, page/27017, page/27018, page/27040, page/27041, page/27042, page/27043, page/27044.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
