---
id: topic/business-central/business-functionality/local-functionality/denmark/auditing
type: topic
title: Auditing
summary: Auditing for Denmark in Business Central covers exporting accounting data as CSV files to Regnskab Basis, exporting and importing SAF-T audit files for the Danish tax authorities, and mapping GL accounts to the Danish tax authority standard chart of accounts. Use it for questions about meeting Danish bookkeeping law and tax authority requirements.
tier: official
language: en
system: localization
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:27:34.066Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 318074a5e5c8870249a2c472beb1dd911a9d0827f6f53be51ae39f06e5c2eba6
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Denmark/how-to-use-regnskabbasis-export
    title: Export accounting data to Regnskab Basis in Denmark
    date: "2025-03-04"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Denmark/how-to-use-saft-audit-files-export
    title: Export the SAF-T audit file format in Denmark
    date: "2025-03-04"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Denmark/how-to-set-up-standard-coa
    title: Standard chart of accounts in Denmark
    date: "2025-12-16"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Denmark/how-to-use-regnskabbasis-export
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Denmark/how-to-use-saft-audit-files-export
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Denmark/how-to-set-up-standard-coa
  objects:
    - object/page/5264
    - object/page/5266
    - object/page/5267
    - object/page/5270
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
  - Auditing
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/local-functionality/denmark
children: []
coverage:
  learn: 3
  code: 4
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 5264
  - 5266
  - 5267
  - 5270
member_hash: e3b2f6415de9f540ec4f186d3b8cb524c136770e8537953b58824e68f4e1b4f5
narrative: generated
---

# Auditing

> Auditing for Denmark in Business Central covers exporting accounting data as CSV files to Regnskab Basis, exporting and importing SAF-T audit files for the Danish tax authorities, and mapping GL accounts to the Danish tax authority standard chart of accounts. Use it for questions about meeting Danish bookkeeping law and tax authority requirements.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Denmark](../denmark.md) > Auditing · tier official · system localization · narrative reviewed (checked by Opus)

## Overview

This section describes the Danish audit and reporting tools in Business Central. Two export routes are covered: CSV files for Regnskab Basis, and the SAF-T audit file format for the Danish tax authorities. SAF-T files can also be imported for record-keeping.\n\nUnder Danish bookkeeping law, GL accounts must be mapped to the Danish tax authority standard chart of accounts, which supports annual reporting and VAT calculations. The Regnskab Basis export uses this mapping, and the standard chart of accounts page also lists SAF-T export among its features. A sensible order is to complete the GL account mapping on the standard chart of accounts page first, then run the Regnskab Basis or SAF-T export you need.

## Key points

- Accounting data can be exported as CSV files to Regnskab Basis using the RB Accounting File page.
- The Regnskab Basis export uses a mapping header selection and the standard chart of accounts mapping.
- The Regnskab Basis export covers Income Statement Amount and Balance Sheet Amount.
- SAF-T export produces an audit file for the Danish tax authorities.
- SAF-T files can also be imported for record-keeping.
- GL accounts must be mapped to the Danish tax authority standard chart of accounts.
- The account mapping supports annual reporting and VAT calculations under Danish bookkeeping law.

## Learn pages

- [Export accounting data to Regnskab Basis in Denmark](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Denmark/how-to-use-regnskabbasis-export): This article describes how to upload a comma-separated values (CSV) file that contains accounting data to Regnskab Basis in Denmark.
- [Export the SAF-T audit file format in Denmark](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Denmark/how-to-use-saft-audit-files-export): This article explains how to export all required data according to the SAF-T format in Denmark.
- [Standard chart of accounts in Denmark](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Denmark/how-to-set-up-standard-coa): This article explains how to set up a standard chart of accounts in Denmark.

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 5264 "Audit File Export Setup"](../../../../../objects/page/5264.md) · on [Table 5264 "Audit File Export Setup"](../../../../../objects/table/5264.md)
- [Page 5266 "Audit File Export Documents"](../../../../../objects/page/5266.md) · on [Table 5265 "Audit File Export Header"](../../../../../objects/table/5265.md)
- [Page 5267 "Audit File Export Doc. Card"](../../../../../objects/page/5267.md) · captioned "Audit File Export Document" · on [Table 5265 "Audit File Export Header"](../../../../../objects/table/5265.md)
- [Page 5270 "Audit File Export Format Setup"](../../../../../objects/page/5270.md) · on [Table 5268 "Audit File Export Format Setup"](../../../../../objects/table/5268.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
