---
id: topic/business-central/business-functionality/local-functionality/spain/general
type: topic
title: General
summary: "Spain general local functionality in Business Central: due date calculation under legal payment-delay limits, corrective invoices, NACE codes on company information, and operation codes for Report 340 VAT declarations. Answers setup and compliance questions for Spanish companies."
tier: official
language: en
system: localization
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:24:15.477Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 03e21e1f11c52d054bf4d6a383678352dfd7f141978de4dd21fb01a5b306e51c
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/calculating-due-dates
    title: Calculating Due Dates [ES]
    date: "2025-05-26"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/corrective-invoices
    title: Corrective invoices [ES]
    date: "2025-05-26"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-enter-nace-codes
    title: How to Enter NACE Codes [ES]
    date: "2025-05-27"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-set-limits-for-due-dates
    title: How to Set Limits for Due Dates
    date: "2025-05-28"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-set-up-operation-codes
    title: How to Set Up Operation Codes
    date: "2025-05-28"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/calculating-due-dates
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/corrective-invoices
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

> Spain general local functionality in Business Central: due date calculation under legal payment-delay limits, corrective invoices, NACE codes on company information, and operation codes for Report 340 VAT declarations. Answers setup and compliance questions for Spanish companies.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Spain](../spain.md) > General · tier official · system localization · narrative reviewed by Opus

## Overview

This section collects the general Spanish localization topics that are not tied to a larger subarea. It has no subtopics, so all content sits in five pages.

Two pages deal with payment due dates. "Calculating Due Dates [ES]" explains how due dates follow legal limits on payment delays and how overdue payment reports work for customers and vendors. "How to Set Limits for Due Dates" shows the payment term setup that enforces a maximum number of days between delivery and payment. Read them together, starting with the setup page.

The other pages cover reporting and invoicing data. "Corrective invoices [ES]" describes correcting VAT or fiscal data errors while keeping the original invoice valid. "How to Enter NACE Codes [ES]" covers the industry classification field on Company Information. "How to Set Up Operation Codes" covers the codes that link to general product posting groups for Report 340.

## Key points

- Payment terms can hold a maximum number of days till due date (Max. No. of Days till Due Date) to meet Spanish legal limits on payment delays.
- Due date calculation supports reports on overdue payments from customers and vendors, including a weighted average term calculation.
- Setting limits for due dates also involves document date update behavior in the payment term setup.
- Corrective invoices fix errors affecting VAT or fiscal data, keep the original invoice valid, and keep a reference and audit trail to it.
- NACE codes are five- or six-digit statistical classification codes entered on the Company Information page for EU statistics.
- Operation codes use letters A-Z and numbers 1-8, are set up in the Operation Codes table, and are linked to general product posting groups.
- Operation codes classify VAT for Spanish Report 340 declarations.

## Learn pages

- [Calculating Due Dates [ES]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/calculating-due-dates): Learn how to submit an annual report of purchases and sales for payments that were made before or after the due date.
- [Corrective invoices [ES]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/corrective-invoices): Learn how to use corrective invoices in Business Central to address errors or disputes affecting VAT amounts or fiscal data.
- [How to Enter NACE Codes [ES]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-enter-nace-codes): Learn how to enter the Nomenclature génerale des Activités économiques dans les Communautés Européennes (NACE) codes using the Spanish version of Business Central.
- [How to Set Limits for Due Dates](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-set-limits-for-due-dates): Learn how to set maximum limits on the number of days allowed between delivery and payment by configuring payment terms in Business Central.
- [How to Set Up Operation Codes](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-set-up-operation-codes): You can add any number of operation codes to the table, except for the system-created codes C, D, and I, which are already available in Business Central.

## Business Central pages and reports

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 7000048.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
