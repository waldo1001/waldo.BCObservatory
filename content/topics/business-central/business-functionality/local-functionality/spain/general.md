---
id: topic/business-central/business-functionality/local-functionality/spain/general
type: topic
title: General
summary: "Spain general local functionality in Business Central: corrective invoices, legal due date limits and payment terms, NACE codes on company information, and operation codes for Spanish VAT reporting. It answers setup and compliance questions for the Spanish version."
tier: official
language: en
system: localization
review:
  state: reviewed
  by: opus
  at: "2026-10-28T11:03:09.414Z"
  flags: []
generated:
  at: "2026-10-28T11:04:14.111Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 8c9593430f426dc15c42a9bc3ed11d7042f2b58f454e6a7df44eadbf55473e10
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/corrective-invoices
    title: Corrective Invoices in the Spanish Version [ES]
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/calculating-due-dates
    title: Due Date Calculation in Business Central for Spain
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-enter-nace-codes
    title: Enter NACE Codes in the Spanish Version [ES]
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-set-limits-for-due-dates
    title: Set Due Date Limits for Payments in Spain
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-set-up-operation-codes
    title: Set Up Operation Codes for Spanish VAT Reporting
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/corrective-invoices
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/calculating-due-dates
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-enter-nace-codes
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-set-limits-for-due-dates
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-set-up-operation-codes
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/spain
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Local functionality
  - Spain
  - General
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/local-functionality/spain
children: []
coverage:
  learn: 5
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 7000048
member_hash: 216d722a5a18124e05a919f945d934b9d767fdb2c20b7d64221f5f02a610bd22
narrative: generated
---

# General

> Spain general local functionality in Business Central: corrective invoices, legal due date limits and payment terms, NACE codes on company information, and operation codes for Spanish VAT reporting. It answers setup and compliance questions for the Spanish version.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Spain](../spain.md) > General · tier official · system localization · narrative reviewed (checked by Opus)

## Overview

This section collects general features specific to the Spanish version of Business Central. They cover legal and reporting requirements: correcting invoices, limiting payment delays, recording the company's economic activity, and classifying VAT operations.

Two pages deal with payment timing. One explains how due date calculation enforces legal delay limits for public sector and private company transactions, including overdue payment reporting. The other shows how to set the Max. No. of Days till Due Date field on payment terms. Read them together, starting with the limits setup.

The remaining pages are standalone. Corrective invoices explain how to correct VAT or fiscal data errors while the original invoices stay valid. The NACE page covers entering the activity classification in Company Information. The operation codes page covers codes linked to general product posting groups for tax declarations, including report 340.

## Key points

- Corrective invoices fix VAT or fiscal data errors while keeping original invoices valid and intact, with traceability.
- Corrective invoice work includes setting parameters, selecting posted invoices, posting, printing, tracking invoice numbers and handling discount corrections.
- Due date calculation enforces legal payment delay limits for public sector and private companies.
- The Max. No. of Days till Due Date field on payment terms caps the days between delivery and payment.
- Due date calculation also covers overdue payment reports, a weighted average term exceeded calculation and non-payment period handling.
- NACE codes, the EU statistical classification of economic activities, are entered in the Industrial Classification field on the Company Information page.
- Operation codes are single alphanumeric codes linked to product posting groups for Spanish VAT reporting and tax declarations.
- Operation code setup covers credit memo handling and integration with report 340.

## Learn pages

- [Corrective Invoices in the Spanish Version [ES]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/corrective-invoices): Learn how to use corrective invoices in Business Central to address errors or disputes affecting VAT amounts or fiscal data.
- [Due Date Calculation in Business Central for Spain](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/calculating-due-dates): Learn how payment terms, due date limits, payment days, and nonpayment periods affect due date calculations in Business Central for Spain.
  - In the observatory: [Report 10747 "Customer - Overdue Payments (ES)"](../../../../../objects/report/10747-es.md), [Report 10748 "Vendor - Overdue Payments (ES)"](../../../../../objects/report/10748-es.md)
- [Enter NACE Codes in the Spanish Version [ES]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-enter-nace-codes): Learn how to enter the Nomenclature génerale des Activités économiques dans les Communautés Européennes (NACE) codes using the Spanish version of Business Central.
  - In the observatory: [Page 1 "Company Information"](../../../../../objects/page/1.md)
- [Set Due Date Limits for Payments in Spain](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-set-limits-for-due-dates): Learn how to set maximum limits on the number of days allowed between delivery and payment by configuring payment terms in Business Central.
  - In the observatory: [Table 3 "Payment Terms"](../../../../../objects/table/3.md)
- [Set Up Operation Codes for Spanish VAT Reporting](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-set-up-operation-codes): You can add any number of operation codes to the table, except for the system-created codes C, D, and I, which are already available in Business Central.
  - In the observatory: [Page 10745 "Operation Codes (ES)"](../../../../../objects/page/10745-es.md), [Report 10743 "Make 340 Declaration (ES)"](../../../../../objects/report/10743-es.md)

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

Learn also names 1 object with no object page: page/7000048.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
