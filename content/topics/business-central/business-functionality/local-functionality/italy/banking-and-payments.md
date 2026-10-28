---
id: topic/business-central/business-functionality/local-functionality/italy/banking-and-payments
type: topic
title: Banking & payments
summary: "Banking and payments in the Italian version of Business Central: vendor payments, customer bills, automatic payment and bill setup, and payment terms. It answers questions about SEPA and Italian bill formats, bill posting groups, bank account configuration, and installment and discount terms."
tier: official
language: en
system: localization
review:
  state: reviewed
  by: opus
  at: "2026-10-28T11:03:24.816Z"
  flags: []
generated:
  at: "2026-10-28T11:04:14.111Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 5c74d1a2418dccf7ef9dde189543f17cf2c3aaa1541270c1487be25fc751bb1c
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-issue-vendor-payments-and-customer-bills
    title: Issue Vendor Payments and Customer Bills
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-set-up-automatic-payments-and-automatic-bills
    title: Set Up Automatic Payments and Bills for Italy
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-set-up-payment-terms
    title: Set Up Payment Terms in the Italian Version
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/vendor-payments-and-customer-bills-overview
    title: Vendor Payments and Customer Bills in Italy
    date: "2026-10-21"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-issue-vendor-payments-and-customer-bills
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-set-up-automatic-payments-and-automatic-bills
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-set-up-payment-terms
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/vendor-payments-and-customer-bills-overview
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/italy
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Local functionality
  - Italy
  - Banking & payments
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/local-functionality/italy
children: []
coverage:
  learn: 4
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 12102
  - 12170
  - 12171
  - 12172
  - 12173
  - 12174
  - 12175
  - 12176
  - 12178
  - 12180
  - 12181
  - 12182
  - 12183
  - 12184
  - 12185
  - 12186
  - 12188
  - 12190
  - 12192
  - 12193
  - 12194
  - 12195
  - 12203
  - 12204
member_hash: 852d10e93340a78451f9a2a34c1001697e700d81447ac6d4fba4f70e236f8278
narrative: generated
---

# Banking & payments

> Banking and payments in the Italian version of Business Central: vendor payments, customer bills, automatic payment and bill setup, and payment terms. It answers questions about SEPA and Italian bill formats, bill posting groups, bank account configuration, and installment and discount terms.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Italy](../italy.md) > Banking & payments · tier official · system localization · narrative reviewed (checked by Opus)

## Overview

This section covers how the Italian version of Business Central handles payments and bills. It has four pages and no subtopics. They cover automatic bills to customers and from vendors, using SEPA and Italian bill formats.

Start with "Vendor Payments and Customer Bills in Italy" for the concept. Then use "Set Up Automatic Payments and Bills for Italy" for the configuration: bank accounts, bill posting groups, payment methods, export formats and temporary bill lists. "Issue Vendor Payments and Customer Bills" covers the daily work of creating vendor bill lists and exporting payment files for the bank. "Set Up Payment Terms in the Italian Version" is separate. It covers installments, due dates and payment discounts.

## Key points

- Supports automatic bills to customers and from vendors, with SEPA and Italian bill formats.
- SEPA Credit Transfer and SEPA Direct Debit are covered, with a payment export format for each.
- Setup includes bank accounts, bill posting groups, payment methods and temporary bill lists, for both sales and purchasing.
- Other setup items are a recall bill description and a bank receipts risk period.
- Issuing payments means configuring the bank account, creating a vendor bill list and exporting the file for bank submission.
- Payment terms can define installment percentages, due date calculation, discount dates and discount percentages.
- Payment terms apply to both customer and vendor payments.

## Learn pages

- [Issue Vendor Payments and Customer Bills](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-issue-vendor-payments-and-customer-bills): Learn how to prepare vendor payment details, create an issued bill list, and export a bank payment file in the Italian version of Business Central.
  - In the observatory: [Page 12185 "Vendor Bill Card (IT)"](../../../../../objects/page/12185-it.md), [Page 12190 "Vendor Bill List Sent Card (IT)"](../../../../../objects/page/12190-it.md), [Page 35603 "Vendors (RU)"](../../../../../objects/page/35603-ru.md), [Page 370 "Bank Account Card"](../../../../../objects/page/370.md), [Page 426 "Vendor Bank Account List"](../../../../../objects/page/426.md)
- [Set Up Automatic Payments and Bills for Italy](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-set-up-automatic-payments-and-automatic-bills): Learn how to configure bank accounts, bill posting groups, number series, and payment methods for automatic bills in Business Central for Italy.
  - In the observatory: [Page 1 "Company Information"](../../../../../objects/page/1.md), [Page 12183 "Bill Posting Group (IT)"](../../../../../objects/page/12183-it.md), [Page 12184 "Bill (IT)"](../../../../../objects/page/12184-it.md), [Page 35630 "Bank Accounts (RU)"](../../../../../objects/page/35630-ru.md), [Page 370 "Bank Account Card"](../../../../../objects/page/370.md), [Page 427 "Payment Methods"](../../../../../objects/page/427.md)
- [Set Up Payment Terms in the Italian Version](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-set-up-payment-terms): In Business Central for Italy, you can define payment terms that allow payments in one or multiple installments, specifying details for each installment as needed.
  - In the observatory: [Page 12170 "Payment Terms Lines (IT)"](../../../../../objects/page/12170-it.md), [Page 4 "Payment Terms"](../../../../../objects/page/4.md)
- [Vendor Payments and Customer Bills in Italy](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/vendor-payments-and-customer-bills-overview): Learn how customer bills and vendor payment lists work in Business Central for Italy, including bank account setup, export formats, and file submission.

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

Learn also names 24 objects with no object page: page/12102, page/12170, page/12171, page/12172, page/12173, page/12174, page/12175, page/12176, page/12178, page/12180, page/12181, page/12182, page/12183, page/12184, page/12185, page/12186, page/12188, page/12190, page/12192, page/12193, page/12194, page/12195, page/12203, page/12204.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
