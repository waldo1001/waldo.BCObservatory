---
id: topic/business-central/business-functionality/local-functionality/netherlands/purchasing
type: topic
title: Purchasing
summary: Purchasing for the Netherlands local version covers checking and editing document total amounts on purchase invoices and credit memos. It answers questions about validating totals including VAT before posting and about editing Doc. Amount Incl. VAT and Doc. Amount VAT.
tier: official
language: en
system: purchasing
review:
  state: reviewed
  by: opus
  at: "2026-10-28T11:04:08.659Z"
  flags: []
generated:
  at: "2026-10-29T21:38:16.952Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 8ce7a2639202a9fbdde6a4107a245cbfed73ec2fbb87e81e735cd6e4dabd1f8b
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/check-purchase-amounts
    title: Check amounts on purchase invoices and credit memos
    date: "2025-03-14"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Netherlands/how-to-edit-document-amounts-in-purchase-invoices-and-credit-memos
    title: Edit Dutch Purchase Invoice and Credit Memo Document Amounts
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/check-purchase-amounts
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Netherlands/how-to-edit-document-amounts-in-purchase-invoices-and-credit-memos
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/netherlands
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcapps/12867
learn_toc_path:
  - Business functionality
  - Local functionality
  - Netherlands
  - Purchasing
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/local-functionality/netherlands
children: []
coverage:
  learn: 2
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 94c584780deac8af3da50db8b73b05c3ffcffbb8f4846cddd20d4978176d6d3c
narrative: generated
---

# Purchasing

> Purchasing for the Netherlands local version covers checking and editing document total amounts on purchase invoices and credit memos. It answers questions about validating totals including VAT before posting and about editing Doc. Amount Incl. VAT and Doc. Amount VAT.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Netherlands](../netherlands.md) > Purchasing · tier official · system purchasing · narrative reviewed (checked by Opus)

## Overview

This section holds two pages about document amount control on purchase invoices and credit memos in the Dutch version of Business Central. Both deal with making sure the document total, including VAT, matches the sum of the purchase lines before the document is posted.

Start with the page on checking amounts, which explains the validation itself (mentioned for 2025 release wave 1). Then read the page on editing Dutch document amounts, which explains how to turn on Check Doc. Total Amounts in Purchases & Payables Setup and how to change the amount fields, with VAT recalculated proportionally. The editing page also mentions e-document service support.

## Key points

- Validates that document total amounts including VAT match the sum of purchase lines before posting.
- Applies to both purchase invoices and purchase credit memos.
- The check is enabled with Check Doc. Total Amounts in Purchases & Payables Setup.
- Doc. Amount Incl. VAT and Doc. Amount VAT fields can be edited in the Dutch version.
- Editing these amounts triggers proportional VAT recalculation.
- The editing page mentions e-document service support.
- The amount check page is tied to 2025 release wave 1.

## Learn pages

- [Check amounts on purchase invoices and credit memos](https://learn.microsoft.com/dynamics365/business-central/check-purchase-amounts): You can verify that the total amount on purchase invoices and credit memos equals the total amounts, including VAT, on the lines.
  - In the observatory: [Page 460 "Purchases & Payables Setup"](../../../../../objects/page/460.md)
- [Edit Dutch Purchase Invoice and Credit Memo Document Amounts](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Netherlands/how-to-edit-document-amounts-in-purchase-invoices-and-credit-memos): Enter expected purchase invoice and credit memo totals in the Dutch version of Business Central to check the document and VAT amounts before posting.
  - In the observatory: [Page 460 "Purchases & Payables Setup"](../../../../../objects/page/460.md), [Page 9308 "Purchase Invoices"](../../../../../objects/page/9308.md), [Page 9309 "Purchase Credit Memos"](../../../../../objects/page/9309.md)

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#12867 [29.X]-Modifying Description resets Quantity to 1 on Purchase Invoice Lines](../../../../../changes/bcapps/12867.md) (code change): "Fixed an issue in the Dutch (NL) version on 29.x where editing the Description on purchase invoice"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
