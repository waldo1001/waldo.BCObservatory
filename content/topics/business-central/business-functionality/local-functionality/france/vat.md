---
id: topic/business-central/business-functionality/local-functionality/france/vat
type: topic
title: VAT
summary: "The France VAT section covers French localization reporting in Business Central: exporting general ledger entries for tax audits, exporting them to XML for archiving, and meeting Declaration of Trade in Goods (DEB) requirements. It answers questions about audit files, year-end archiving and DEB setup."
tier: official
language: en
system: finance
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:27:27.016Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: fd941d1df27fef89eeadd4dc6f4d6c7a3479de285cb7def60b4bd0b57674b935
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/France/how-to-export-general-ledger-entries-for-tax-audits
    title: Export General Ledger Entries Tax Audits [FR]
    date: "2025-04-15"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/France/how-to-export-general-ledger-entries-to-an-xml-file
    title: How to Export General Ledger Entries to an XML File
    date: "2025-04-15"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/France/requirements-for-reporting-declaration-of-trade-in-goods
    title: Requirements for Reporting Declaration of Trade in Goods [FR]
    date: "2025-04-16"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/France/how-to-export-general-ledger-entries-for-tax-audits
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/France/how-to-export-general-ledger-entries-to-an-xml-file
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/France/requirements-for-reporting-declaration-of-trade-in-goods
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/france
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Local functionality
  - France
  - VAT
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/local-functionality/france
children: []
coverage:
  learn: 3
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: a860279c9500e10edb52f0b5bde2ecce47d8a21a2e9e991d173764dd8f9cc0e4
narrative: generated
---

# VAT

> The France VAT section covers French localization reporting in Business Central: exporting general ledger entries for tax audits, exporting them to XML for archiving, and meeting Declaration of Trade in Goods (DEB) requirements. It answers questions about audit files, year-end archiving and DEB setup.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [France](../france.md) > VAT · tier official · system finance · narrative reviewed by Opus

## Overview

This section groups three French localization pages about tax and VAT-related reporting. Two describe exporting general ledger entries. The third explains how to prepare and run the Declaration of Trade in Goods (DEB) report.

The audit export page covers producing files for French tax authority audits (corporate tax and VAT), with posted entries and optional opening balances. The XML export page covers exporting financial transactions for a date range, typically after fiscal year closing, so they can be archived in an external system. The DEB page covers the required company information and Intrastat journal fields, then running the Export DEB DTI report.

Start with the audit export page if you face a tax audit, the XML page for year-end archiving, and the DEB page for trade in goods reporting.

## Key points

- Export General Ledger Entries for Tax Audits creates audit files with posted entries and opening balances for French corporate tax and VAT audits.
- The audit export uses Starting Date, Ending Date, an Include Opening Balances option and a Detailed Balance checkbox.
- General ledger entries can be exported to an XML file by Starting Date and Ending Date.
- The XML export is intended for archiving general ledger transactions in an external system after fiscal year closing.
- DEB reporting requires company information and Intrastat journal fields to be populated first.
- DEB data is exported with the Export DEB DTI report, filtered by obligation level.
- DEB setup involves Intrastat management, a Transaction Specification Filter and the Advanced Intrastat Checklist.

## Learn pages

- [Export General Ledger Entries Tax Audits [FR]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/France/how-to-export-general-ledger-entries-for-tax-audits): Learn how to export general ledger entries to a text file for a tax audit.
- [How to Export General Ledger Entries to an XML File](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/France/how-to-export-general-ledger-entries-to-an-xml-file): Learn how to export financial transactions for a particular period to an XML file for external archiving.
- [Requirements for Reporting Declaration of Trade in Goods [FR]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/France/requirements-for-reporting-declaration-of-trade-in-goods): Learn about the required fields and steps for reporting the Declaration of Trade in Goods (DEB) in the French version of Business Central.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
