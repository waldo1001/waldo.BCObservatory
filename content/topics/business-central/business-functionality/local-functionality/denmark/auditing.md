---
id: topic/business-central/business-functionality/local-functionality/denmark/auditing
type: topic
title: Auditing
summary: Auditing for the Danish localization of Business Central covers exporting accounting data for authorities and auditors. It answers questions about Regnskab Basis CSV export, SAF-T export and import, and the Danish standard chart of accounts needed for GL account mapping.
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
  input_hash: a36a846ffadeb681e5f49ac53dd703d66ad8d0939e1d07bc45632dc728491c2a
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Denmark/how-to-use-regnskabbasis-export
    title: Export accounting data to Regnskab Basis in Denmark
    date: "2026-10-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Denmark/how-to-use-saft-audit-files-export
    title: Export the SAF-T audit file format in Denmark
    date: "2026-10-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Denmark/how-to-set-up-standard-coa
    title: Standard chart of accounts in Denmark
    date: "2026-10-08"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Denmark/how-to-use-regnskabbasis-export
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Denmark/how-to-use-saft-audit-files-export
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Denmark/how-to-set-up-standard-coa
  objects:
    - object/page/5260
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
  code: 5
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 5260
  - 5264
  - 5266
  - 5267
  - 5270
member_hash: e3b2f6415de9f540ec4f186d3b8cb524c136770e8537953b58824e68f4e1b4f5
narrative: generated
---

# Auditing

> Auditing for the Danish localization of Business Central covers exporting accounting data for authorities and auditors. It answers questions about Regnskab Basis CSV export, SAF-T export and import, and the Danish standard chart of accounts needed for GL account mapping.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Denmark](../denmark.md) > Auditing · tier official · system localization · narrative **unreviewed** (model text not yet checked)

## Overview

This section describes the audit-related functions in the Danish version of Business Central. Two pages cover the export formats: Regnskab Basis CSV files for Danish bookkeeping requirements, and the Standard Audit File for Tax (SAF-T) in XML or ZIP format. Both use the Audit File Export app.

The third page covers the standard chart of accounts in Denmark. Both exports depend on it, because GL accounts are mapped to standard accounts. The page also mentions VAT posting setup for SAF-T.

Start with the standard chart of accounts page to set up the mapping. Then use the Regnskab Basis or SAF-T page, depending on which file you need to produce.

## Key points

- Regnskab Basis export produces CSV files that follow Danish bookkeeping requirements, using the Audit File Export app.
- Regnskab Basis export is period-based and includes income statement and balance sheet calculation.
- SAF-T files can be exported and imported in the Danish localization, in XML or ZIP format.
- The SAF-T export includes Denmark-specific fields and is meant for tax authority compliance.
- The Danish standard chart of accounts is required for GL accounts and is used for mapping.
- The standard chart of accounts page references Standard Account 2025.
- VAT posting setup is part of preparing for SAF-T reporting.
- Both exports rely on GL account mapping to the standard chart of accounts.

## Learn pages

- [Export accounting data to Regnskab Basis in Denmark](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Denmark/how-to-use-regnskabbasis-export): This article describes how to upload a comma-separated values (CSV) file that contains accounting data to Regnskab Basis in Denmark.
- [Export the SAF-T audit file format in Denmark](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Denmark/how-to-use-saft-audit-files-export): This article explains how to export all required data according to the SAF-T format in Denmark.
- [Standard chart of accounts in Denmark](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Denmark/how-to-set-up-standard-coa): This article explains how to set up a standard chart of accounts in Denmark.

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 5260 "G/L Account Mapping"](../../../../../objects/page/5260.md) · on [Table 5260 "G/L Account Mapping Header"](../../../../../objects/table/5260.md)
- [Page 5264 "Audit File Export Setup"](../../../../../objects/page/5264.md) · on [Table 5264 "Audit File Export Setup"](../../../../../objects/table/5264.md)
- [Page 5266 "Audit File Export Documents"](../../../../../objects/page/5266.md) · on [Table 5265 "Audit File Export Header"](../../../../../objects/table/5265.md)
- [Page 5267 "Audit File Export Doc. Card"](../../../../../objects/page/5267.md) · captioned "Audit File Export Document" · on [Table 5265 "Audit File Export Header"](../../../../../objects/table/5265.md)
- [Page 5270 "Audit File Export Format Setup"](../../../../../objects/page/5270.md) · on [Table 5268 "Audit File Export Format Setup"](../../../../../objects/table/5268.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
