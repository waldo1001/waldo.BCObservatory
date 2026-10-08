---
id: topic/business-central/business-functionality/local-functionality/denmark/banking-and-payments
type: topic
title: Banking & payments
summary: "Danish banking and payments in Business Central: the Payments and Reconciliations (DK) extension and FIK transaction text codes in the payment reconciliation journal. It answers questions about supported Danish payment file formats, FIK and giro payments, and how to read automatic payment application results."
tier: official
language: en
system: localization
review:
  state: reviewed
  by: opus
  at: "2026-10-07T05:21:50.716Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: f3383ce7ad968c6717bd477291b01ab3237ef424c1160cc3027c08734227378f
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Denmark/fik-details-in-the-payment-reconciliation-journal
    title: FIK details in the payment reconciliation journal
    date: "2025-03-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/ui-extensions-payments-reconciliation-formats-dk
    title: Payments and Reconciliations (DK) Extension
    date: "2021-06-24"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Denmark/fik-details-in-the-payment-reconciliation-journal
    - https://learn.microsoft.com/dynamics365/business-central/ui-extensions-payments-reconciliation-formats-dk
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/denmark
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Local functionality
  - Denmark
  - Banking & payments
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/local-functionality/denmark
children: []
coverage:
  learn: 2
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: edec40adcd99460d296a6d070c6306e31e6f9991a6e13c1b06a62d92ec3f3654
narrative: generated
---

# Banking & payments

> Danish banking and payments in Business Central: the Payments and Reconciliations (DK) extension and FIK transaction text codes in the payment reconciliation journal. It answers questions about supported Danish payment file formats, FIK and giro payments, and how to read automatic payment application results.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Denmark](../denmark.md) > Banking & payments · tier official · system localization · narrative reviewed (checked by Opus)

## Overview

This section covers local banking and payment functionality for Denmark. It has two pages and no subtopics. One describes the Payments and Reconciliations (DK) extension, and the other explains the FIK codes shown when payments are reconciled.

The extension supports Danish bank payment and reconciliation file formats, so you can export vendor payments and reconcile bank statements. The FIK page is a reference for the transaction text values in the Payment Reconciliation Journal, which describe the outcome of automatic payment application under the Danish FIK standard.

Start with the extension page to understand which formats and setup are available, then use the FIK page when reviewing reconciliation results in the journal.

## Key points

- The Payments and Reconciliations (DK) extension supports BANKDATA-V3, BEC, SDC, FIK, and bank-specific formats for Danske Bank and Nordea.
- It covers payment exports and bank statement reconciliation for Danish vendors and banks.
- Features include FIK payment methods, giro payments, vendor payment setup, and payment reference numbers.
- The Payment Reconciliation Journal shows FIK transaction text codes to describe automatic payment application results.
- FIK codes indicate matching amounts, partial payments, and excess amounts.
- FIK codes also flag missing or duplicate FIK numbers and invoices that are already paid.

## Learn pages

- [FIK details in the payment reconciliation journal](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Denmark/fik-details-in-the-payment-reconciliation-journal): The Transaction Text field shows information about the automatic application of payments using the Danish FIK standard.
- [Payments and Reconciliations (DK) Extension](https://learn.microsoft.com/dynamics365/business-central/ui-extensions-payments-reconciliation-formats-dk): This extension makes it easy to export files that are pre-formatted to meet bank requirements for electronic submissions.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
