---
id: topic/business-central/business-functionality/local-functionality/czech-republic/advance-payments
type: topic
title: Advance Payments
summary: "Advance payments in the Czech version of Business Central: the localization extension for sales and purchase advances, and how to set it up. It answers questions about advance invoices, VAT documents, foreign currency, and the setup of templates and VAT posting."
tier: official
language: en
system: localization
review:
  state: reviewed
  by: opus
  at: "2026-10-07T05:21:45.684Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 9661c25db1eb9c50cd788a6333d12f1cccc8318c4458da0e3c8bc1efd1bd7055
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Czech/ui-extensions-advance-payments-localization-cz
    title: Advance Payments Localization for Czech (Extension)
    date: "2025-09-29"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Czech/adv-payments-how-to-setup-advance-payments
    title: Set up advance payments in the Czech version
    date: "2025-09-29"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Czech/ui-extensions-advance-payments-localization-cz
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Czech/adv-payments-how-to-setup-advance-payments
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/czech-republic
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcapps/10079
    - change/bcapps/9591
learn_toc_path:
  - Business functionality
  - Local functionality
  - Czech Republic
  - Advance Payments
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
member_hash: 87f5707e7d3cb2df85ec744cb884ba1b33089a9d7c5c9390e7a59e1b2120f542
narrative: generated
---

# Advance Payments

> Advance payments in the Czech version of Business Central: the localization extension for sales and purchase advances, and how to set it up. It answers questions about advance invoices, VAT documents, foreign currency, and the setup of templates and VAT posting.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Czech Republic](../czech-republic.md) > Advance Payments · tier official · system localization · narrative reviewed (checked by Opus)

## Overview

This section covers advance payment handling for the Czech version of Business Central. An extension provides advance payment functionality for both sales and purchases, including VAT documents, foreign currency support, and management of the advance lifecycle in line with regulatory requirements.

Two pages make up the section. The first describes the extension and what it does: advance invoices, VAT documents and credit notes, linking advances to orders, and cash desk integration. The second describes the setup: advance letter templates, G/L accounts, VAT posting group mapping, report selections, and VAT statement configuration.

Start with the extension page to understand the functionality, then use the setup page to configure templates and VAT posting before you create advances.

## Key points

- The extension supports advances for both sales and purchases.
- It covers advance invoices, VAT documents, and credit notes.
- Foreign currency handling is supported.
- Advances can be linked to orders, and cash desk integration is included.
- Setup uses advance letter templates for sales and purchase advances.
- Setup includes G/L account configuration and VAT posting group mapping.
- Setup covers automatic VAT document posting and non-deductible VAT posting.
- Report selections and VAT statement configuration are also part of setup.

## Learn pages

- [Advance Payments Localization for Czech (Extension)](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Czech/ui-extensions-advance-payments-localization-cz): Learn about the Advance Payments Localization extension, including its features for managing advance invoices, payments, and VAT compliance.
- [Set up advance payments in the Czech version](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Czech/adv-payments-how-to-setup-advance-payments): Learn how to set up advance payments in the Czech version of Business Central.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#10079 [main] features 640066 Add integration events for events for CZ Adv. Payment and CZ Cash Desk](../../../../../changes/bcapps/10079.md) (code change): "Integration events added for Czech advance payment and cash desk functionality"
- [#9591 [Extensibility Request] issue 29875: add OnBeforeCheckPurchaseAdvanceLetterPendingApproval IsHandled event](../../../../../changes/bcapps/9591.md) (code change): "A new OnBeforeCheckPurchaseAdvanceLetterPendingApproval IsHandled event was added to the purchase advance letter document codeunit in the Czech localization"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
