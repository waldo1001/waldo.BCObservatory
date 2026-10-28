---
id: topic/business-central/business-functionality/local-functionality/mexico/electronic-invoice
type: topic
title: Electronic invoice
summary: "Electronic invoicing in the Mexican version of Business Central: setup of SAT certificates and PAC web services, generating and cancelling CFDI invoices and payment receipts, and Carta de Porte waybills for goods transport. It answers setup, stamping, export and compliance questions."
tier: official
language: en
system: sales
review:
  state: reviewed
  by: opus
  at: "2026-10-28T11:02:59.703Z"
  flags: []
generated:
  at: "2026-10-28T11:04:14.111Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 9783729904adbeb8fda8eab6250509b6b8e01fbeb4fa6acdc5f8dac082d7e7da
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Mexico/packing-slips-transfer-orders
    title: Carta de Porte Packing Slips and Transfer Orders in Mexico
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Mexico/electronic-invoicing
    title: Electronic Invoicing in the Mexican Version
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Mexico/how-to-generate-electronic-invoices
    title: Generate Electronic Invoices in the Mexican Version [MX]
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Mexico/how-to-set-up-electronic-invoicing
    title: Set Up Electronic Invoicing - Mexico [MX]
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Mexico/how-to-set-up-pac-web-services
    title: Set Up PAC Web Services in Mexico
    date: "2026-10-20"
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

> Electronic invoicing in the Mexican version of Business Central: setup of SAT certificates and PAC web services, generating and cancelling CFDI invoices and payment receipts, and Carta de Porte waybills for goods transport. It answers setup, stamping, export and compliance questions.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Mexico](../mexico.md) > Electronic invoice · tier official · system sales · narrative reviewed (checked by Opus)

## Overview

This section covers how Business Central meets Mexican electronic document requirements. Sales and service invoices are exported as CFDI XML files, signed with digital signatures, stamped by an authorized PAC provider, and can be sent by email or exported as XML. Cancellation and communication with the tax authorities are also covered.

Start with the setup pages. "Set Up Electronic Invoicing - Mexico" covers tax identification information, SAT certificates, PAC web services and CFDI field mapping for the company, customers, vendors and locations. "Set Up PAC Web Services in Mexico" goes into the stamp provider, certificates, web service methods and the test or production environment.

Once setup is done, "Electronic Invoicing in the Mexican Version" gives the overview and "Generate Electronic Invoices in the Mexican Version" describes posting and stamping, including payment receipts and the export complement. The Carta de Porte page covers waybill documents for packing slips and transfer orders.

## Key points

- Invoices are exported as CFDI XML files (CFDI 4.0) with digital signatures and a digital stamp from a PAC.
- Setup involves tax identification information, SAT certificate upload (multiple certificates supported), PAC web services and CFDI field mapping.
- PAC web service setup specifies the stamp provider, certificates, web service methods, and test or production environment.
- PAC operations include requesting a stamp, submitting cancellations and retrieving status.
- Posted sales invoices can be stamped, then sent by email or exported as XML; QR codes and PDF attachment are supported.
- CFDI 4.0 payment receipts, the Pagos 2.0 complement and the Comercio Exterior Complement for exports are covered.
- Carta de Porte 3.1 complements let packing slips and transfer orders be printed and sent electronically, as required since December 1, 2021.
- Carta de Porte setup includes vehicles, trailers, item classification and hazardous material.

## Learn pages

- [Carta de Porte Packing Slips and Transfer Orders in Mexico](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Mexico/packing-slips-transfer-orders): Business Central supports CFDI, allowing the printing of packing slips and transfer orders with the necessary digital signature to meet Carta de Porte requirements.
- [Electronic Invoicing in the Mexican Version](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Mexico/electronic-invoicing): Learn how to set up, stamp, send, and cancel CFDI electronic invoices and customer payment receipts in the Mexican version of Business Central.
- [Generate Electronic Invoices in the Mexican Version [MX]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Mexico/how-to-generate-electronic-invoices): After a sales invoice is posted in the Mexican version, an electronic invoice must be generated and sent to the customer.
  - In the observatory: [Page 118 "General Ledger Setup"](../../../../../objects/page/118.md), [Page 143 "Posted Sales Invoices"](../../../../../objects/page/143.md), [Page 209 "Units of Measure"](../../../../../objects/page/209.md)
- [Set Up Electronic Invoicing - Mexico [MX]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Mexico/how-to-set-up-electronic-invoicing): To send electronic documents in Mexico, it's necessary to set up Business Central to include the required identification numbers for CFDI.
  - In the observatory: [Page 1 "Company Information"](../../../../../objects/page/1.md), [Page 10 "Countries/Regions"](../../../../../objects/page/10.md), [Page 118 "General Ledger Setup"](../../../../../objects/page/118.md), [Page 209 "Units of Measure"](../../../../../objects/page/209.md), [Page 35603 "Vendors (RU)"](../../../../../objects/page/35603-ru.md), [Page 36954 "Customers"](../../../../../objects/page/36954.md)
- [Set Up PAC Web Services in Mexico](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Mexico/how-to-set-up-pac-web-services): To send electronic invoices and credit memos in Mexico, you need to specify at least one provider for the required electronic stamp.
  - In the observatory: [Page 118 "General Ledger Setup"](../../../../../objects/page/118.md)

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#8183 Handle failure to manually create E-Document from posted doc with no …](../../../../../changes/bcapps/8183.md) (code change): "E-Document creation now correctly reports failure when a posted document cannot be converted"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 25 "Customer Ledger Entries"](../../../../../objects/page/25.md) · on [Table 21 "Cust. Ledger Entry"](../../../../../objects/table/21.md)
- [Page 132 "Posted Sales Invoice"](../../../../../objects/page/132.md) · on [Table 112 "Sales Invoice Header"](../../../../../objects/table/112.md)

Learn also names 21 objects with no object page: page/10455, page/10456, page/10458, page/10459, page/27001, page/27002, page/27003, page/27010, page/27011, page/27012, page/27013, page/27014, page/27015, page/27016, page/27017, page/27018, page/27040, page/27041, page/27042, page/27043, page/27044.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
