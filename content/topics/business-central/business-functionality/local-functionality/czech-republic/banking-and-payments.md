---
id: topic/business-central/business-functionality/local-functionality/czech-republic/banking-and-payments
type: topic
title: Banking and Payments
summary: "Czech banking and payments localization in Business Central: the Banking Documents extension for payment orders and bank statements, and the Cash Desk extension for cash receipts, withdrawals, reconciliation and inventory. It answers questions about what each extension does and which features it offers."
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
  input_hash: a3f0810429fc82f59a35db68d3b0ae01f0e0f6b5bceb34b22e3551d30ea13021
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Czech/ui-extensions-banking-documents-localization-cz
    title: Banking Documents Localization for Czech (Extension)
    date: "2026-10-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Czech/ui-extensions-cash-desk-localization-cz
    title: Cash Desk Localization for Czech (Extension)
    date: "2026-10-08"
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

> Czech banking and payments localization in Business Central: the Banking Documents extension for payment orders and bank statements, and the Cash Desk extension for cash receipts, withdrawals, reconciliation and inventory. It answers questions about what each extension does and which features it offers.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Czech Republic](../czech-republic.md) > Banking and Payments · tier official · system localization · narrative **unreviewed** (model text not yet checked)

## Overview

This section covers two localization extensions for Czech companies. Banking Documents Localization handles payment orders and bank statements in line with Czech banking practices, across multiple bank accounts and currencies. Cash Desk Localization handles physical cash, with its own number series and users, to meet Czech legislation.

The two pages are independent and have no subtopics. Start with the Banking Documents page if your work is bank-based payments and statement processing. Start with the Cash Desk page if you handle cash receipts and withdrawals, reconciliation, or cash inventory.

## Key points

- Banking Documents extension supports creating and exporting payment orders.
- Bank statements can be imported or created, then rolled over into the payment journal.
- Entries can be paired in the payment journal, and a Keep Description field is available.
- Banking Documents supports multiple bank accounts and multiple currencies.
- Cash Desk setup includes separate number series and cash desk users.
- Cash Desk uses receipt and withdrawal cash documents, and Cash Desk cases serve as templates.
- Cash Desk payments can be applied to customer and vendor ledger entries.
- Cash Desk offers reconciliation with a journal preview and a cash desk inventory.

## Learn pages

- [Banking Documents Localization for Czech (Extension)](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Czech/ui-extensions-banking-documents-localization-cz): Learn about the features and functionality of the Banking Documents Localization extension for the Czech Republic in Business Central.
- [Cash Desk Localization for Czech (Extension)](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Czech/ui-extensions-cash-desk-localization-cz): Provides features for cash register operations in compliance with Czech legislation and best practices for Microsoft Dynamics 365 Business Central.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#9776 [main] bug 639499 - fix: Remove Status = Released condition from Send action buttons on Cash Document page](../../../../../changes/bcapps/9776.md) (code change): "Release and Send and Post and Send actions on the Cash Document page are now enabled"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
