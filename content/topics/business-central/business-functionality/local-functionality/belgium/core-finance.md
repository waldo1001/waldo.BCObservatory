---
id: topic/business-central/business-functionality/local-functionality/belgium/core-finance
type: topic
title: Core finance
summary: "Core finance for the Belgian version of Business Central covers three local tasks: applying and unapplying general ledger entries, creating financial journals for CODA bank statements, and exporting general ledger balances to ACCON Plus. It answers how-to questions about these Belgium-specific finance procedures."
tier: official
language: en
system: finance
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:27:18.438Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 9780f6080ce495f612e0388e13ac2f40843d4348d72ba54270a31fde3cdca495
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Belgium/how-to-apply-and-unapply-general-ledger-entries
    title: Apply and Unapply General Ledger Entries [BE]
    date: "2025-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Belgium/how-to-create-financial-journals
    title: Create Financial Journals [BE]
    date: "2025-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Belgium/how-to-export-to-accon
    title: Export to Accon [BE]
    date: "2025-04-02"
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

> Core finance for the Belgian version of Business Central covers three local tasks: applying and unapplying general ledger entries, creating financial journals for CODA bank statements, and exporting general ledger balances to ACCON Plus. It answers how-to questions about these Belgium-specific finance procedures.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Belgium](../belgium.md) > Core finance · tier official · system finance · narrative reviewed (checked by Opus)

## Overview

This section holds Belgium-specific finance procedures in Business Central. It has no subtopics, only three standalone pages, each for a separate task.

One page covers applying and unapplying general ledger entries. Another explains how to set up financial journals that record bank account transactions and reconcile starting and ending balances, which is used when handling CODA statements. The third describes the Link to Accon report, which exports general ledger account balances to a file that ACCON Plus can read for the annual income statement.

Start with the page that matches your task. For bank statement processing, begin with the financial journals page. For year-end reporting, go to the Accon export page.

## Key points

- Apply and Unapply General Ledger Entries [BE] describes how to apply and unapply general ledger entries in the Belgian version.
- Financial journals record bank account transactions and are used to handle CODA statements in Belgium.
- Financial journal setup includes journal type selection, balancing account configuration, and starting and ending balances.
- Financial journals calculate the difference between balances automatically.
- The Link to Accon report exports general ledger account balances to a file compatible with ACCON Plus.
- The Accon export supports reporting currency selection and period filtering.
- The ACCON Plus export is meant for generating the annual income statement for Belgian accounting compliance.

## Learn pages

- [Apply and Unapply General Ledger Entries [BE]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Belgium/how-to-apply-and-unapply-general-ledger-entries): Learn how to apply and unapply general ledger entries in the Belgian version of Business Central, to allow working with temporary and transfer accounts in the general ledger.
- [Create Financial Journals [BE]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Belgium/how-to-create-financial-journals): Learn how to use the Journal Templates to create financial journals in the Belgian version of Business Central.
- [Export to Accon [BE]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Belgium/how-to-export-to-accon): Learn how to export the link to the Accon report. This link lets you create a file that can be imported into ACCON Plus for generating an annual income statement.

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 256 "Payment Journal"](../../../../../objects/page/256.md) · captioned "Payment Journals" · on [Table 81 "Gen. Journal Line"](../../../../../objects/table/81.md)

Learn also names 7 objects with no object page: page/11300, page/2000000, page/2000001, page/2000003, page/2000020, page/2000021, page/2000022.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
