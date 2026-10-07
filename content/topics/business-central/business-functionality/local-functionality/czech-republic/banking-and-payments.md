---
id: topic/business-central/business-functionality/local-functionality/czech-republic/banking-and-payments
type: topic
title: Banking and Payments
summary: "Banking and Payments for Czech Republic in Business Central covers two localization extensions: banking documents (payment orders, bank statements, bank files) and cash desk (cash receipts and withdrawals). It answers questions about Czech-specific bank and cash handling setup and use."
tier: official
language: en
system: localization
review:
  state: reviewed
  by: opus
  at: "2026-10-07T05:21:46.199Z"
  flags: []
generated:
  at: "2026-10-07T13:37:30.849Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 0946658ef0a676f7e6e27e6055790c444bce33221d2580620f3322b437380647
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Czech/ui-extensions-banking-documents-localization-cz
    title: Banking Documents Localization for Czech (Extension)
    date: "2026-03-30"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Czech/ui-extensions-cash-desk-localization-cz
    title: Cash Desk Localization for Czech (Extension)
    date: "2025-09-29"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Czech/ui-extensions-banking-documents-localization-cz
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Czech/ui-extensions-cash-desk-localization-cz
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/czech-republic
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcapps/9776
learn_toc_path:
  - Business functionality
  - Local functionality
  - Czech Republic
  - Banking and Payments
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/local-functionality/czech-republic
children: []
coverage:
  learn: 2
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 6c275e09b7501b5683cf6785656190b8f6b7dc361954e6f87a52da7924901c5e
narrative: generated
---

# Banking and Payments

> Banking and Payments for Czech Republic in Business Central covers two localization extensions: banking documents (payment orders, bank statements, bank files) and cash desk (cash receipts and withdrawals). It answers questions about Czech-specific bank and cash handling setup and use.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Czech Republic](../czech-republic.md) > Banking and Payments · tier official · system localization · narrative reviewed by Opus

## Overview

This section describes the Czech localization of banking and payment functionality in Business Central. It has no subtopics and consists of two pages, each describing one extension.

The Banking Documents Localization extension handles payment orders and bank statements. It supports creating and exporting payment orders, importing and creating bank statements, rolling statements over to journals, pairing payment entries, importing and exporting bank files, and managing bank accounts, including the Keep Description field for keeping descriptions across currencies. The Cash Desk Localization extension handles physical cash. It covers cash desk setup, number series, receipt and withdrawal documents, user authorization, cash desk cases (events), inventory management, and applying payments to customer and vendor entries.

Start with the page that matches your process: banking documents for bank-based payments and statements, cash desk for cash operations.

## Key points

- Banking documents extension supports payment order creation and export.
- Bank statements can be imported and created, and rolled over to journals.
- Payment entries can be paired, and bank files imported and exported.
- The Keep Description field preserves descriptions on bank accounts across currencies.
- Cash desk extension supports physical cash receipts and withdrawals.
- Cash desks are defined and set up with number series for their documents.
- Cash desk user authorization controls who can work with a cash desk.
- Cash desk cases (events) and inventory management are covered, and payments can be applied to customer and vendor entries.

## Learn pages

- [Banking Documents Localization for Czech (Extension)](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Czech/ui-extensions-banking-documents-localization-cz): Learn about the features and functionality of the Banking Documents Localization extension for the Czech Republic in Business Central.
- [Cash Desk Localization for Czech (Extension)](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Czech/ui-extensions-cash-desk-localization-cz): Provides features for cash register operations in compliance with Czech legislation and best practices for Microsoft Dynamics 365 Business Central.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#9776 [main] bug 639499 - fix: Remove Status = Released condition from Send action buttons on Cash Document page](../../../../../changes/bcapps/9776.md) (code change): "Release and Send and Post and Send actions on the Cash Document page are now enabled"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
