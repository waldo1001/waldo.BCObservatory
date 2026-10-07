---
id: topic/business-central/business-functionality/local-functionality/czech-republic/payables-and-receivables
type: topic
title: Payables and Receivables
summary: "Czech localization of Business Central for payables and receivables: compensation between customers and vendors, balance reconciliations, exchange rate adjustments, sales correcting documents, ARES contact updates, and output document layout. It answers how to set up and use these Czech-specific features."
tier: official
language: en
system: sales
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:21:57.818Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 4d056c97c3cec6c3c1c9b6bef649b0ee00adedf6011a33dbbcf866cc509b5302
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Czech/ui-extensions-compensations-localization-cz
    title: Compensation localization for the Czech version
    date: "2025-09-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Czech/customers-vendors-reconciliations
    title: Czech Local Functionality - Customers/Vendors Reconciliations
    date: "2025-06-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Czech/how-to-use-exchange-rates-adjustment-feature
    title: Czech local functionality - Exchange rates adjustment feature
    date: "2025-06-04"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Czech/new-design-of-output-documents
    title: Czech Local Functionality - New design of output documents
    date: "2025-06-05"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Czech/sales-correcting-documents
    title: Czech local functionality - Sales correcting documents [CZ]
    date: "2025-06-06"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Czech/how-to-update-contacts-from-ares
    title: Czech local functionality - Update contacts from ARES
    date: "2025-06-04"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Czech/hide-rows-with-zero-quantity-in-cz-documents-reports
    title: Hide rows with zero quantity in document reports in the Chech version
    date: "2025-09-17"
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

> Czech localization of Business Central for payables and receivables: compensation between customers and vendors, balance reconciliations, exchange rate adjustments, sales correcting documents, ARES contact updates, and output document layout. It answers how to set up and use these Czech-specific features.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Czech Republic](../czech-republic.md) > Payables and Receivables · tier official · system sales · narrative reviewed by Opus

## Overview

This section collects the Czech-specific features that affect customers, vendors and the documents sent to them. Some cover accounting processes: compensation of receivables against payables, customer and vendor reconciliation statements, and exchange rates adjustment. Others cover documents and master data: sales correcting documents, the new design of output documents, hiding zero-quantity lines, and updating contacts from ARES.

The pages are independent of each other, and there are no subtopics. Pick the page that matches the task. For offsetting balances when a customer is also a vendor, start with the compensation page. For year-end or periodic balance statements, use the reconciliations page. For document layout and VAT compliance, see the output documents, sales correcting documents and zero-quantity pages.

## Key points

- Compensation offsets receivables and payables when a customer is also a vendor. Lines can be entered manually or proposed with Suggest lines, then released and posted.
- Compensation can print an Agreement on Mutual Settlement of Receivables and Payables, and it uses Compensation Nos. for numbering.
- Customers/vendors reconciliation prepares and sends balance statements for fiscal year-end or periodic reconciliation.
- Exchange rates adjustment runs separately for customers, vendors and bank accounts, with a test mode, summarized entries per currency, dimension transfer methods and Advance Payments integration.
- Sales credit memos can be typed as Corrective Tax Document, Internal Correction or Insolvency Tax Document to follow VAT law amendments.
- The new output document design standardizes printed reports and adds registration numbers, VAT specification, advance payment deductions and tax corrective document naming.
- Update contacts from ARES retrieves company information through an ARES Http service and updates contact, vendor and customer records.
- A Hide lines with zero quantity toggle controls zero-quantity lines on sales and purchase invoices and credit memos.

## Learn pages

- [Compensation localization for the Czech version](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Czech/ui-extensions-compensations-localization-cz): Enables offsetting receivables and payables in Business Central for Czech companies, supporting mutual settlements between customers and vendors.
- [Czech Local Functionality - Customers/Vendors Reconciliations](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Czech/customers-vendors-reconciliations): Learn about the Customers/Vendors Reconciliations local functionality available in the Czech version of Business Central.
- [Czech local functionality - Exchange rates adjustment feature](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Czech/how-to-use-exchange-rates-adjustment-feature): Companies in the Czech Republic request some improvements in the Exchange Rates Adjustment feature in the Czech version of Business Central.
- [Czech Local Functionality - New design of output documents](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Czech/new-design-of-output-documents): Learn about the new standardized design of output documents in the Czech version, including enhancements to meet Czech legislative requirements.
- [Czech local functionality - Sales correcting documents [CZ]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Czech/sales-correcting-documents): Learn about local functionality for handling sales correcting documents, including different types of sales credit memos, in the Czech version of Business Central.
- [Czech local functionality - Update contacts from ARES](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Czech/how-to-update-contacts-from-ares): Learn how to update contact information in Business Central using ARES, the Czech system for retrieving data on registered economic entities.
- [Hide rows with zero quantity in document reports in the Chech version](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Czech/hide-rows-with-zero-quantity-in-cz-documents-reports): This article describes how to make document reports clearer by hiding lines with zero quantity in the Czech localization.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
