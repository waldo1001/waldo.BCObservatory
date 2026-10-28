---
id: topic/business-central/business-functionality/local-functionality/spain/electronic-invoices
type: topic
title: Electronic invoices
summary: "Electronic invoices for Spain in Business Central: VERI*FACTU setup (embedded mode and external B2BRouter integration), SII invoice types, and the Cartera modules for receivables and payables. It answers questions about Spanish tax reporting and bill or payment document handling."
tier: official
language: en
system: localization
review:
  state: reviewed
  by: opus
  at: "2026-10-28T11:02:51.177Z"
  flags: []
generated:
  at: "2026-10-28T11:04:14.111Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 0a32ff7dd215a9a1714339fefbe65e348aaae144ff0cb39f70f3be3809b9d623
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/cartera-module
    title: Cartera Module in Business Central for Spain
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/enable-real-time-invoice-reporting
    title: Enable Embedded VERI*FACTU Mode in Spain [ES]
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/payments-cartera-module
    title: Payments Cartera Module in Business Central for Spain
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/receivables-cartera-module
    title: Receivables Cartera Module in the Spanish Version [ES]
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/SII-invoice-types-sales-purchase-documents
    title: SII Invoice and Credit Memo Types for Spain
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/verifactu-setup
    title: VERI*FACTU with External Service Integration [ES]
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/cartera-module
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/enable-real-time-invoice-reporting
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/payments-cartera-module
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/receivables-cartera-module
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/SII-invoice-types-sales-purchase-documents
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/verifactu-setup
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/spain
  localizations: []
  videos: []
  posts:
    - post/thinkaboutit-be/8204
  guidelines: []
  changes:
    - change/bcapps/9792
learn_toc_path:
  - Business functionality
  - Local functionality
  - Spain
  - Electronic invoices
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/local-functionality/spain
children: []
coverage:
  learn: 6
  code: 0
  video: 0
  blog: 1
  guideline: 0
bc_forms:
  - 10751
  - 10752
  - 10753
  - 10770
  - 10771
  - 35291
  - 35292
  - 35293
  - 35294
  - 35295
  - 35296
  - 35297
  - 35298
  - 35299
  - 35300
  - 35301
  - 35302
  - 35303
  - 35304
  - 35305
  - 35306
  - 35848
  - 35850
  - 700071
  - 700072
  - 7000003
  - 7000004
  - 7000005
  - 7000006
  - 7000007
  - 7000008
  - 7000009
  - 7000010
  - 7000011
  - 7000012
  - 7000014
  - 7000015
  - 7000016
  - 7000017
  - 7000018
  - 7000019
  - 7000020
  - 7000021
  - 7000022
  - 7000024
  - 7000025
  - 7000029
  - 7000030
  - 7000031
  - 7000032
  - 7000033
  - 7000034
  - 7000036
  - 7000037
  - 7000040
  - 7000041
  - 7000044
  - 7000045
  - 70000013
member_hash: fb4f792c745264526782c056b2d7bee76f1d439ffd17284321f8b519c401588d
narrative: generated
---

# Electronic invoices

> Electronic invoices for Spain in Business Central: VERI*FACTU setup (embedded mode and external B2BRouter integration), SII invoice types, and the Cartera modules for receivables and payables. It answers questions about Spanish tax reporting and bill or payment document handling.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Spain](../spain.md) > Electronic invoices · tier official · system localization · narrative reviewed (checked by Opus)

## Overview

This section collects Spain-specific pages on electronic invoicing and on Cartera document management. The invoicing pages cover VERI*FACTU, the Spanish regulatory framework for verifiable electronic invoicing aimed at combating tax fraud, and the SII invoice and credit memo types used on sales and purchase documents.

There are two ways to set up VERI*FACTU. The embedded mode reports invoice records to the Spanish Tax Agency (AEAT) through the E-Documents framework. The external service option uses the B2BRouter API connector. The SII types page tells you which invoice and credit memo types Business Central supports and how they appear in XML.

The Cartera pages describe handling of customer and vendor payments with bills of exchange and promissory notes. Start with the general Cartera page, then go to the Receivables page for sales-side bills and bill groups, or the Payments page for payment orders to vendors.

## Key points

- Embedded VERI*FACTU reports invoice records to AEAT through the E-Documents framework; Business Central generates chained hashes and QR codes and authenticates with a certificate.
- VERI*FACTU can also be set up through external service integration using the B2BRouter API connector, with API key configuration and a staging mode.
- The SII invoice types page lists supported invoice types (including simplified and corrected invoices) and credit memo types, with XML implementation details.
- Cartera manages customer and vendor payments using bills of exchange and promissory notes, with multi-currency tracking and credit limit management.
- Receivables Cartera handles bills from sales invoices, bill groups, discount bill groups, factoring (risked and unrisked), finance charges, and manual bill creation via the Cartera Journal.
- Payments Cartera handles payables from purchase invoices, grouping payment orders by bank, due date, value, and currency, and supports payment confirmation services.
- Several pages are marked [ES] and apply to the Spanish version of Business Central.

## Learn pages

- [Cartera Module in Business Central for Spain](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/cartera-module): Learn how to use the Cartera module to manage customer and vendor payments with documents such as bills of exchange and promissory notes.
- [Enable Embedded VERI*FACTU Mode in Spain [ES]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/enable-real-time-invoice-reporting): Set up embedded VERIFACTU reporting in Business Central, configure certificate authentication, and review invoice submissions and QR codes for Spain.
  - In the observatory: [Page 1 "Company Information"](../../../../../objects/page/1.md), [Page 143 "Posted Sales Invoices"](../../../../../objects/page/143.md), [Page 1500 "Workflows"](../../../../../objects/page/1500.md), [Page 306 "Report Selection - Sales"](../../../../../objects/page/306.md), [Page 359 "Document Sending Profiles"](../../../../../objects/page/359.md), [Page 367 "Post Codes"](../../../../../objects/page/367.md)
- [Payments Cartera Module in Business Central for Spain](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/payments-cartera-module): Learn how the Payments Cartera module in Business Central for Spain manages payables documents from purchase invoices and the Cartera Journal.
  - In the observatory: [Page 7000036 "Cartera Journal (ES)"](../../../../../objects/page/7000036-es.md)
- [Receivables Cartera Module in the Spanish Version [ES]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/receivables-cartera-module): Use the Receivables Cartera module to manage bills generated from sales invoices, including grouping, collection, and factoring, through the Cartera Journal.
- [SII Invoice and Credit Memo Types for Spain](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/SII-invoice-types-sales-purchase-documents): Learn how Business Central for Spain exports SII invoice and credit memo types, including simplified invoices and replacement corrective invoices.
- [VERI*FACTU with External Service Integration [ES]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/verifactu-setup): Configure the B2Brouter connector for external VERIFACTU integration in Business Central, including API credentials, project settings, and sandbox mode.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#9792 Migrate ZUGFeRD, PEPPOL BIS 3.0 DE, Factur-X FR and Peppol BIS 3.0 FR to the V2 draft import pipeline](../../../../../changes/bcapps/9792.md) (code change): "Peppol BIS 3.0 FR gets a new UBL reader. French SIRET party identifiers written on export"
- [Quick Tip: What’s in Business Central Update 28.5?](../../../../../posts/thinkaboutit-be/8204.md) (community post): "Embedded Verifactu functionality for Spain is now generally available"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

Learn also names 59 objects with no object page: page/10751, page/10752, page/10753, page/10770, page/10771, page/35291, page/35292, page/35293, page/35294, page/35295, page/35296, page/35297, page/35298, page/35299, page/35300, page/35301, page/35302, page/35303, page/35304, page/35305, page/35306, page/35848, page/35850, page/700071, page/700072, page/7000003, page/7000004, page/7000005, page/7000006, page/7000007, page/7000008, page/7000009, page/7000010, page/7000011, page/7000012, page/7000014, page/7000015, page/7000016, page/7000017, page/7000018, page/7000019, page/7000020, page/7000021, page/7000022, page/7000024, page/7000025, page/7000029, page/7000030, page/7000031, page/7000032, page/7000033, page/7000034, page/7000036, page/7000037, page/7000040, page/7000041, page/7000044, page/7000045, page/70000013.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
