---
id: topic/business-central/business-functionality/local-functionality/czech-republic/payables-and-receivables
type: topic
title: Payables and Receivables
summary: "Czech local functionality for payables and receivables in Business Central: compensation of mutual receivables and payables, balance reconciliations, exchange rate adjustment, output document design, sales correcting documents, ARES contact updates, and hiding zero-quantity lines. It answers setup and usage questions for the Czech version."
tier: official
language: en
system: sales
review:
  state: reviewed
  by: opus
  at: "2026-10-24T00:55:40.139Z"
  flags: []
generated:
  at: "2026-10-24T00:57:10.969Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 969d6a45083e21161d529cd452a829f817ea0283b3fe9250beac6e7866cc6cfa
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Czech/ui-extensions-compensations-localization-cz
    title: Compensation localization for the Czech version
    date: "2026-10-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Czech/customers-vendors-reconciliations
    title: Czech Local Functionality - Customers/Vendors Reconciliations
    date: "2026-10-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Czech/how-to-use-exchange-rates-adjustment-feature
    title: Czech local functionality - Exchange rates adjustment feature
    date: "2026-10-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Czech/new-design-of-output-documents
    title: Czech Local Functionality - New design of output documents
    date: "2026-10-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Czech/sales-correcting-documents
    title: Czech local functionality - Sales correcting documents [CZ]
    date: "2026-10-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Czech/how-to-update-contacts-from-ares
    title: Czech local functionality - Update contacts from ARES
    date: "2026-10-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Czech/hide-rows-with-zero-quantity-in-cz-documents-reports
    title: Hide rows with zero quantity in document reports in the Czech version
    date: "2026-10-08"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Czech/ui-extensions-compensations-localization-cz
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Czech/customers-vendors-reconciliations
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Czech/how-to-use-exchange-rates-adjustment-feature
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Czech/new-design-of-output-documents
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Czech/sales-correcting-documents
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Czech/how-to-update-contacts-from-ares
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Czech/hide-rows-with-zero-quantity-in-cz-documents-reports
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/czech-republic
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Local functionality
  - Czech Republic
  - Payables and Receivables
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/local-functionality/czech-republic
children: []
coverage:
  learn: 7
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: d7410349f537ce4d8308f7c1ee20146e1e19f0a255a90cb4aca68ed7a6583b82
narrative: generated
---

# Payables and Receivables

> Czech local functionality for payables and receivables in Business Central: compensation of mutual receivables and payables, balance reconciliations, exchange rate adjustment, output document design, sales correcting documents, ARES contact updates, and hiding zero-quantity lines. It answers setup and usage questions for the Czech version.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Czech Republic](../czech-republic.md) > Payables and Receivables · tier official · system sales · narrative reviewed (checked by Opus)

## Overview

This section collects Czech-specific features that affect customers, vendors and the documents sent to them. There are no subtopics; all seven pages sit at the same level and each covers one feature.

Some pages deal with posting and period-end work: Compensation offsets receivables and payables when a customer is also a vendor, Customers/Vendors Reconciliations prepares balance statements at fiscal year-end, and the enhanced exchange rate adjustment handles customers, vendors and bank accounts. Others deal with documents and master data: the new output document design, sales correcting documents required by Czech VAT law, the ARES update of contacts, and the option to hide lines with zero quantity in reports.

Start with the page that matches your task. For offsetting balances, read the Compensation page. For year-end and currency revaluation, read the reconciliation and exchange rate pages. For printed documents and VAT compliance, read the output design and sales correcting documents pages.

## Key points

- Compensation extension: set up compensations, propose lines, release and post, and print the Agreement on Mutual Settlement of Receivables and Payables.
- Compensation lets you view Balance as Vendor and Balance as Customer for a party that is both.
- Customers/Vendors Reconciliations uses the Balance Reconciliation action to send balance statements at fiscal year-end.
- Adjust Exchange Rates Enhanced adjusts customers, vendors and bank accounts separately, with test mode and summarized posting per currency.
- The exchange rate adjustment uses an alternative realized gains and losses calculation under the Czech Income Tax Act and supports the Czech Advance Payments module.
- New output document design standardizes layout and adds registration numbers, VAT specification, advance payment deductions and tax corrective document naming.
- Sales credit memos must be differentiated as corrective tax document, internal correction or insolvency tax document under Czech VAT law.
- ARES integration validates and updates registration numbers for contacts, vendors and customers, and needs a service endpoint configured.

## Learn pages

- [Compensation localization for the Czech version](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Czech/ui-extensions-compensations-localization-cz): Enables offsetting receivables and payables in Business Central for Czech companies, supporting mutual settlements between customers and vendors.
  - In the observatory: [Page 25 "Customer Ledger Entries"](../../../../../objects/page/25.md)
- [Czech Local Functionality - Customers/Vendors Reconciliations](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Czech/customers-vendors-reconciliations): Learn about the Customers/Vendors Reconciliations local functionality available in the Czech version of Business Central.
- [Czech local functionality - Exchange rates adjustment feature](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Czech/how-to-use-exchange-rates-adjustment-feature): Companies in the Czech Republic request some improvements in the Exchange Rates Adjustment feature in the Czech version of Business Central.
- [Czech Local Functionality - New design of output documents](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Czech/new-design-of-output-documents): Learn about the new standardized design of output documents in the Czech version, including enhancements to meet Czech legislative requirements.
- [Czech local functionality - Sales correcting documents [CZ]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Czech/sales-correcting-documents): Learn about local functionality for handling sales correcting documents, including different types of sales credit memos, in the Czech version of Business Central.
- [Czech local functionality - Update contacts from ARES](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Czech/how-to-update-contacts-from-ares): Learn how to update contact information in Business Central using ARES, the Czech system for retrieving data on registered economic entities.
- [Hide rows with zero quantity in document reports in the Czech version](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Czech/hide-rows-with-zero-quantity-in-cz-documents-reports): This article describes how to make document reports clearer by hiding lines with zero quantity in the Czech localization.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
