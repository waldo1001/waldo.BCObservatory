---
id: topic/business-central/business-functionality/local-functionality/belgium/core-finance
type: topic
title: Core finance
summary: "Core finance for the Belgian version of Business Central covers three local features: applying and unapplying general ledger entries, creating financial journals for bank transactions, and exporting GL balances to ACCON Plus. It answers questions about Belgium-specific finance tasks."
tier: official
language: en
system: finance
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
  input_hash: 6ae51220c150480e4f430165a38b8d3434e813818c1cf413dbcb99c718eb1311
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Belgium/how-to-apply-and-unapply-general-ledger-entries
    title: Apply and Unapply General Ledger Entries [BE]
    date: "2026-10-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Belgium/how-to-create-financial-journals
    title: Create Financial Journals [BE]
    date: "2026-10-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Belgium/how-to-export-to-accon
    title: Export to Accon [BE]
    date: "2026-10-08"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Belgium/how-to-apply-and-unapply-general-ledger-entries
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Belgium/how-to-create-financial-journals
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Belgium/how-to-export-to-accon
  objects:
    - object/page/256
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/belgium
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Local functionality
  - Belgium
  - Core finance
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/local-functionality/belgium
children: []
coverage:
  learn: 3
  code: 1
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 256
  - 11300
  - 2000000
  - 2000001
  - 2000003
  - 2000020
  - 2000021
  - 2000022
member_hash: a0c99a572731342fcdff4a54b516517a9f07f9dc28b8ce05882f9ebb58e40920
narrative: generated
---

# Core finance

> Core finance for the Belgian version of Business Central covers three local features: applying and unapplying general ledger entries, creating financial journals for bank transactions, and exporting GL balances to ACCON Plus. It answers questions about Belgium-specific finance tasks.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Belgium](../belgium.md) > Core finance · tier official · system finance · narrative **unreviewed** (model text not yet checked)

## Overview

This section holds Belgium-specific core finance pages for Business Central. It has no subtopics, so all content sits in three standalone pages, each describing one local feature.

The pages cover separate tasks. One explains how to apply and unapply general ledger entries to match and reconcile them. One explains how to create financial journals to register bank account transactions, with automatic balance checks. One explains the Link to Accon report, which exports GL account balances to a file for ACCON Plus.

Start with the page that matches your task. For bank reconciliation work, read the financial journals page. For year-end reporting with ACCON Plus, read the export page.

## Key points

- Apply and Unapply General Ledger Entries [BE] covers matching and reconciling GL entries, and reversing that matching.
- Financial journals [BE] use a financial journal type to register bank account transactions.
- Financial journals balance against a bank account using a starting balance and an ending balance entry.
- The difference between the balances is calculated automatically.
- The Link to Accon report exports general ledger account balances to a file.
- The exported file is imported into ACCON Plus to generate annual income statements.
- The export has a Show Amounts in Add. Reporting Currency option.
- The section has no subtopics, only three pages.

## Learn pages

- [Apply and Unapply General Ledger Entries [BE]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Belgium/how-to-apply-and-unapply-general-ledger-entries): Learn about the deprecated feature for applying and unapplying general ledger entries in the Belgian version of Business Central, and the replacement feature for reviewing account balances.
- [Create Financial Journals [BE]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Belgium/how-to-create-financial-journals): Learn how to use the Journal Templates to create financial journals in the Belgian version of Business Central.
- [Export to Accon [BE]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Belgium/how-to-export-to-accon): Learn how to export the link to the Accon report. This link lets you create a file that can be imported into ACCON Plus for generating an annual income statement.

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 256 "Payment Journal"](../../../../../objects/page/256.md) · captioned "Payment Journals" · on [Table 81 "Gen. Journal Line"](../../../../../objects/table/81.md)

Learn also names 7 objects with no object page: page/11300, page/2000000, page/2000001, page/2000003, page/2000020, page/2000021, page/2000022.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
