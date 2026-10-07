---
id: topic/business-central/business-functionality/local-functionality/norway/general
type: topic
title: General
summary: "Norway-specific general functionality in Business Central: recurring sales orders built from blanket orders and recurring groups, payroll transaction import via the Payroll Data Definitions extension, KID number setup, and document printing setup for giro and KID. It answers setup and how-to questions for Norwegian localization."
tier: official
language: en
system: localization
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:21:22.706Z"
  flags: []
generated:
  at: "2026-10-07T15:52:42.721Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 55e95a3a7c393de42d162fbf2ed525d5fa3ca4165107d0a29cef1ffe4ba29b17
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/how-to-create-recurring-orders
    title: How to Create Recurring Orders [NO]
    date: "2025-05-12"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/how-to-import-payroll-transactions
    title: How to import payroll transactions [NO]
    date: "2025-05-13"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/how-to-set-up-document-printing
    title: How to Set Up Document Printing
    date: "2025-05-13"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/how-to-set-up-kid-numbers-on-sales-documents
    title: How to set up KID numbers on sales documents
    date: "2025-05-14"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/how-to-set-up-recurring-groups
    title: How to Set Up Recurring Groups
    date: "2025-05-14"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/how-to-set-up-recurring-orders
    title: How to Set Up Recurring Orders
    date: "2025-05-14"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/ui-extensions-payroll-data-definitions-no
    title: Payroll Data Definitions [NO]
    date: "2025-05-16"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/recurring-orders
    title: Recurring orders
    date: "2025-05-16"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/how-to-create-recurring-orders
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/how-to-import-payroll-transactions
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/how-to-set-up-document-printing
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/how-to-set-up-kid-numbers-on-sales-documents
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/how-to-set-up-recurring-groups
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/how-to-set-up-recurring-orders
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/ui-extensions-payroll-data-definitions-no
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/recurring-orders
  objects:
    - object/page/456
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/norway
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Local functionality
  - Norway
  - General
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/local-functionality/norway
children: []
coverage:
  learn: 8
  code: 1
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 456
member_hash: 4bfafde1fabb245d0cac7218dcf870cab14ee2c415a1eaf841ad20f3d0a7fd65
narrative: generated
---

# General

> Norway-specific general functionality in Business Central: recurring sales orders built from blanket orders and recurring groups, payroll transaction import via the Payroll Data Definitions extension, KID number setup, and document printing setup for giro and KID. It answers setup and how-to questions for Norwegian localization.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Norway](../norway.md) > General · tier official · system localization · narrative reviewed by Opus

## Overview

This section collects Norwegian localization pages that do not belong to a larger subtopic. They fall into three groups: recurring orders, payroll import, and sales document printing with KID numbers.

For recurring orders, start with the "Recurring orders" concept page. Then set up recurring groups, assign a group code to blanket sales orders, and run the Create Recurring Orders batch job to generate new sales orders as a periodic activity.

For payroll, the Payroll Data Definitions page describes the extension, and the how-to page shows how to import transactions from Huldt & Lillevik Lønn - Visma into general journals. For payments and printing, the KID setup page covers KID numbers on sales documents, and the document printing page covers paper tray settings for giro and KID output.

## Key points

- Recurring orders use blanket orders as templates and recurring groups to generate sales orders at defined date intervals.
- Recurring group setup includes a Recurring Group Code, Document Date Formula, Delivery Date Formula, Create only latest, and Update Price.
- On a blanket sales order, set the Recurring Group Code, Order Date, Quantity, and Qty. to Ship to enable recurring orders.
- The Create Recurring Orders batch job uses a Processing Date and the Create only latest option to create new sales orders.
- The Payroll Data Definitions extension imports payroll transactions from Huldt & Lillevik Lønn and Visma using data exchange definitions mapped to general ledger accounts.
- Imported payroll transactions are placed in general journals for posting.
- KID Setup defines Document No. length and Customer No. length, and covers KID for finance charge memos and reminders.
- Document printing setup configures paper trays for first page and giro page so giro and KID print on invoices, credit memos, finance charge memos, and reminders.

## Learn pages

- [How to Create Recurring Orders [NO]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/how-to-create-recurring-orders): Learn how to create recurring orders by using the options available on the Create Recurring Orders page.
- [How to import payroll transactions [NO]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/how-to-import-payroll-transactions): Learn how to import payroll transactions into a general journal in Business Central using the Norwegian payroll solution, Huldt & Lillevik Lønn - Visma.
- [How to Set Up Document Printing](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/how-to-set-up-document-printing): Learn how to print sales reports with giro specifications using various paper types and trays.
- [How to set up KID numbers on sales documents](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/how-to-set-up-kid-numbers-on-sales-documents): Learn how to set up KID (Kunde ID), a customer identification number used as a payment reference to ensure accurate payment posting by vendors.
- [How to Set Up Recurring Groups](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/how-to-set-up-recurring-groups): Learn how to use the Recurring Group Code field on the Blanket Sales Order page to define date formulas for creating sales orders based on date intervals.
- [How to Set Up Recurring Orders](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/how-to-set-up-recurring-orders): Learn how to set up recurring orders by adding a recurring group to a blanket sales order.
- [Payroll Data Definitions [NO]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/ui-extensions-payroll-data-definitions-no): Learn how the Payroll Data Definitions extension simplifies data exchange with payroll service providers in Norway.
- [Recurring orders](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/recurring-orders): Create blanket order templates with recurring orders to create sales orders at defined date intervals.

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 456 "No. Series"](../../../../../objects/page/456.md) · on [Table 308 "No. Series"](../../../../../objects/table/308.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
