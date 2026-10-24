---
id: topic/business-central/business-functionality/local-functionality/czech-republic/advance-payments
type: topic
title: Advance Payments
summary: Advance Payments for the Czech version of Business Central covers the extension that handles sales and purchase advances, and how to set it up. It answers questions about advance invoices, VAT documents, and the setup of templates, accounts and reports.
tier: official
language: en
system: localization
review:
  state: reviewed
  by: opus
  at: "2026-10-24T00:56:51.387Z"
  flags: []
generated:
  at: "2026-10-24T00:57:10.969Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 4cf8d8aa61f37279011df6e52943143e798ab2fd96c5fc6c81f6bdf64e381b04
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Czech/ui-extensions-advance-payments-localization-cz
    title: Advance Payments Localization for Czech (Extension)
    date: "2026-10-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Czech/adv-payments-how-to-setup-advance-payments
    title: Set up advance payments in the Czech version
    date: "2026-10-08"
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

> Advance Payments for the Czech version of Business Central covers the extension that handles sales and purchase advances, and how to set it up. It answers questions about advance invoices, VAT documents, and the setup of templates, accounts and reports.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Czech Republic](../czech-republic.md) > Advance Payments · tier official · system localization · narrative reviewed (checked by Opus)

## Overview

The Advance Payments extension for Czech localization lets you create and manage advance invoices and payments before goods or services are delivered. It supports VAT requirements and tax documents, and it covers both sales and purchase advances.

The section has two pages. The first describes the extension and what it does: advance invoice creation, VAT documents, cash desk integration, foreign currency support and payment linking. The second explains how to configure it: advance letter templates, VAT posting accounts and report selections.

Start with the extension overview to see what is supported. Then use the setup page to configure templates, G/L accounts and VAT posting before you create advance invoices.

## Key points

- The extension supports both sales and purchase advances in the Czech version.
- Advance invoices can be created before goods or services are delivered.
- VAT requirements and tax documents are supported.
- Cash desk integration, foreign currency support and payment linking are included.
- Setup uses advance letter templates for sales and purchase advance invoices.
- Setup covers VAT posting for advances, including an automatic post VAT document and reverse charge posting.
- Advance letter G/L accounts need to be configured.
- Report selections are configured for advance invoices.

## Learn pages

- [Advance Payments Localization for Czech (Extension)](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Czech/ui-extensions-advance-payments-localization-cz): Learn about the Advance Payments Localization extension, including its features for managing advance invoices, payments, and VAT compliance.
- [Set up advance payments in the Czech version](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Czech/adv-payments-how-to-setup-advance-payments): Learn how to set up advance payments in the Czech version of Business Central.
  - In the observatory: [Table 325 "VAT Posting Setup"](../../../../../objects/table/325.md)

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#10079 [main] features 640066 Add integration events for events for CZ Adv. Payment and CZ Cash Desk](../../../../../changes/bcapps/10079.md) (code change): "Integration events added for Czech advance payment and cash desk functionality"
- [#9591 [Extensibility Request] issue 29875: add OnBeforeCheckPurchaseAdvanceLetterPendingApproval IsHandled event](../../../../../changes/bcapps/9591.md) (code change): "A new OnBeforeCheckPurchaseAdvanceLetterPendingApproval IsHandled event was added to the purchase advance letter document codeunit in the Czech localization"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
