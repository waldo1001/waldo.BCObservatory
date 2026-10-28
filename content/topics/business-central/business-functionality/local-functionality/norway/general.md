---
id: topic/business-central/business-functionality/local-functionality/norway/general
type: topic
title: General
summary: "Norway-specific general functionality in Business Central: recurring sales orders and recurring groups, KID numbers on sales documents, giro printing setup, and payroll transaction import from Huldt & Lillevik Lønn - Visma. It answers setup and usage questions for these Norwegian features."
tier: official
language: en
system: localization
review:
  state: reviewed
  by: opus
  at: "2026-10-28T11:02:28.707Z"
  flags: []
generated:
  at: "2026-10-28T11:04:14.111Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 7c0b39a996ae3a07e55366ad28366a4280b9a65ac15cd628409ff89e9f7002b5
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/how-to-create-recurring-orders
    title: Create Recurring Orders in the Norwegian Version [NO]
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/how-to-import-payroll-transactions
    title: Import Payroll Transactions in the Norwegian Version [NO]
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/recurring-orders
    title: Norwegian Recurring Sales Orders
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/how-to-set-up-kid-numbers-on-sales-documents
    title: Set Up KID Numbers on Sales Documents
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/how-to-set-up-recurring-groups
    title: Set Up Norwegian Recurring Order Groups
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/how-to-set-up-recurring-orders
    title: Set Up Norwegian Recurring Sales Orders
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/how-to-set-up-document-printing
    title: Set Up Norwegian Sales Document Printing
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/ui-extensions-payroll-data-definitions-no
    title: Set Up Payroll Data Import in Norway [NO]
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/how-to-create-recurring-orders
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/how-to-import-payroll-transactions
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/recurring-orders
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/how-to-set-up-kid-numbers-on-sales-documents
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/how-to-set-up-recurring-groups
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/how-to-set-up-recurring-orders
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/how-to-set-up-document-printing
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/ui-extensions-payroll-data-definitions-no
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

> Norway-specific general functionality in Business Central: recurring sales orders and recurring groups, KID numbers on sales documents, giro printing setup, and payroll transaction import from Huldt & Lillevik Lønn - Visma. It answers setup and usage questions for these Norwegian features.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Norway](../norway.md) > General · tier official · system localization · narrative reviewed (checked by Opus)

## Overview

This section collects the Norwegian localization pages that are not part of a larger subtopic. They fall into three areas: recurring sales orders, sales document formatting (KID numbers and printing), and payroll data import.

For recurring orders, start with the overview page on Norwegian recurring sales orders. Then set up recurring group codes with date formulas, create a blanket sales order that uses a group code, and run the periodic process that creates new sales orders from the blanket orders.

For documents, set up KID formats and lengths in Sales & Receivables Setup, then configure printer paper trays and sources so invoices, credit memos, finance charge memos and reminders print with giro specifications. For payroll, set up the Payroll Data Import Definition (NO) extension first, then import the payroll file into a general journal.

## Key points

- Recurring orders are generated from blanket orders that carry a Recurring Group Code and Qty. to Ship values.
- Recurring groups use a date formula, starting date and closing date, and can have 'Create only the latest' and 'Update Document Date' options.
- The Create Recurring Orders process filters by processing date and recurring group date range, and skips deactivated or out-of-date recurring orders.
- KID numbers are payment references set up in Sales & Receivables Setup, with Document No. and Customer No. lengths.
- KID can also be used on finance charge memos and reminders through dedicated setup options.
- Sales document printing for giro uses Printer Selections and Sales Document Paper Tray Setup with paper source and tray number.
- Payroll import from Huldt & Lillevik Lønn - Visma needs the Payroll Data Import Definition (NO) extension.
- Payroll setup is done in General Ledger Setup with the Payroll Trans. Import Format field, and options Import Dimension Codes and Ignore Zeros-Only Values; the Import Payroll File action loads data into general journals.

## Learn pages

- [Create Recurring Orders in the Norwegian Version [NO]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/how-to-create-recurring-orders): Create sales orders from Norwegian recurring blanket orders in Business Central, using a processing date and the option to create only the latest order.
- [Import Payroll Transactions in the Norwegian Version [NO]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/how-to-import-payroll-transactions): Learn how to import payroll transactions into a general journal in Business Central using the Norwegian payroll solution, Huldt & Lillevik Lønn - Visma.
- [Norwegian Recurring Sales Orders](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/recurring-orders): Use Norwegian recurring order groups and blanket sales orders in Business Central to generate sales orders at defined intervals through periodic processing.
- [Set Up KID Numbers on Sales Documents](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/how-to-set-up-kid-numbers-on-sales-documents): Learn how to set up KID (Kunde ID), a customer identification number used as a payment reference to ensure accurate payment posting by vendors.
  - In the observatory: [Page 459 "Sales & Receivables Setup"](../../../../../objects/page/459.md)
- [Set Up Norwegian Recurring Order Groups](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/how-to-set-up-recurring-groups): Learn how to use the Recurring Group Code field on the Blanket Sales Order page to define date formulas for creating sales orders based on date intervals.
  - In the observatory: [Page 507 "Blanket Sales Order"](../../../../../objects/page/507.md)
- [Set Up Norwegian Recurring Sales Orders](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/how-to-set-up-recurring-orders): Set up Norwegian recurring sales orders in Business Central by assigning a recurring group to a blanket sales order and defining the quantity to ship.
  - In the observatory: [Page 9303 "Blanket Sales Orders"](../../../../../objects/page/9303.md)
- [Set Up Norwegian Sales Document Printing](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/how-to-set-up-document-printing): Learn about Norwegian sales document printing with giro and KID information, including the paper source and tray settings described for sales reports.
- [Set Up Payroll Data Import in Norway [NO]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/ui-extensions-payroll-data-definitions-no): Set up payroll data imports from Huldt & Lillevik in Business Central for Norway, including the import format, global dimensions, and file layout.
  - In the observatory: [Page 118 "General Ledger Setup"](../../../../../objects/page/118.md)

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 456 "No. Series"](../../../../../objects/page/456.md) · on [Table 308 "No. Series"](../../../../../objects/table/308.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
