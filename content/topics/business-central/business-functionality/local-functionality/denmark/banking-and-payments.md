---
id: topic/business-central/business-functionality/local-functionality/denmark/banking-and-payments
type: topic
title: Banking & payments
summary: "Danish banking and payments functionality in Business Central: the Payments and Reconciliations (DK) extension with its supported bank file formats, and the FIK transaction text values in the payment reconciliation journal. It answers questions on Danish payment export, bank reconciliation, and FIK matching results."
tier: official
language: en
system: localization
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-16T01:18:16.191Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: c7e2d162fc41b8ea000d837878989d70fa92d065b952d24edbe10c1cb05c2c45
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Denmark/fik-details-in-the-payment-reconciliation-journal
    title: FIK details in the payment reconciliation journal
    date: "2026-10-08"
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

> Danish banking and payments functionality in Business Central: the Payments and Reconciliations (DK) extension with its supported bank file formats, and the FIK transaction text values in the payment reconciliation journal. It answers questions on Danish payment export, bank reconciliation, and FIK matching results.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Denmark](../denmark.md) > Banking & payments · tier official · system localization · narrative **unreviewed** (model text not yet checked)

## Overview

This section covers local banking and payment support for Denmark. It has two pages and no subtopics. One describes the Payments and Reconciliations (DK) extension. The other explains the results shown when FIK payments are applied automatically.

The extension supports Danish payment and reconciliation file formats: BANKDATA-V3, BEC, SDC, FIK, and bank-specific formats for Danske Bank and Nordea. It covers payment export, bank statement reconciliation, FIK payment methods, giro payments, vendor payment setup, and payment reference numbers.

Start with the extension page to understand the formats and setup. Then use the FIK details page when you work in the payment reconciliation journal and need to interpret the transaction text on automatically applied sales invoice payments.

## Key points

- The Payments and Reconciliations (DK) extension supports BANKDATA-V3, BEC, SDC, and FIK formats.
- Bank-specific formats are available for Danske Bank and Nordea.
- The extension covers payment export and bank statement reconciliation for Danish vendors and banks.
- Related areas include FIK payment methods, giro payments, vendor payment setup, and payment reference numbers.
- FIK standard payments are applied automatically to sales invoices in the payment reconciliation journal.
- Six transaction text values describe the result: Matching Amount, Partial Amount, Excess Amount, No Matching FIK Number, Duplicate FIK Number, and Invoice Already Paid.
- Matching, partial, and excess values show how the paid amount compares to the invoice; the other three flag unmatched, duplicate, or already paid cases.

## Learn pages

- [FIK details in the payment reconciliation journal](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Denmark/fik-details-in-the-payment-reconciliation-journal): The Transaction Text field shows information about the automatic application of payments using the Danish FIK standard.
- [Payments and Reconciliations (DK) Extension](https://learn.microsoft.com/dynamics365/business-central/ui-extensions-payments-reconciliation-formats-dk): This extension makes it easy to export files that are pre-formatted to meet bank requirements for electronic submissions.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
