---
id: topic/business-central/business-functionality/local-functionality/france/vat
type: topic
title: VAT
summary: French VAT in Business Central covers three tasks. You can export general ledger entries in the FEC audit file format for French corporate tax and VAT audits. You can export G/L entries to an XML file for external archiving. You can also set up reporting for the Declaration of Trade in Goods (DEB). Use it for questions about audit file export, archiving G/L entries and DEB setup requirements.
tier: official
language: en
system: finance
review:
  state: reviewed
  by: opus
  at: "2026-10-24T00:56:40.130Z"
  flags: []
generated:
  at: "2026-10-24T00:57:10.969Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 5338fbe75b078d8642c09646460e675b9040b17e150705c9c40d65e1161503b7
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/France/how-to-export-general-ledger-entries-for-tax-audits
    title: Export General Ledger Entries Tax Audits [FR]
    date: "2026-10-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/France/how-to-export-general-ledger-entries-to-an-xml-file
    title: Export general ledger entries to an XML file
    date: "2026-10-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/France/requirements-for-reporting-declaration-of-trade-in-goods
    title: Requirements for Reporting Declaration of Trade in Goods [FR]
    date: "2026-10-08"
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

> French VAT in Business Central covers three tasks. You can export general ledger entries in the FEC audit file format for French corporate tax and VAT audits. You can export G/L entries to an XML file for external archiving. You can also set up reporting for the Declaration of Trade in Goods (DEB). Use it for questions about audit file export, archiving G/L entries and DEB setup requirements.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [France](../france.md) > VAT · tier official · system finance · narrative reviewed (checked by Opus)

## Overview

This section covers three French compliance tasks. Two concern exporting general ledger entries: one produces the FEC audit file used for French corporate tax and VAT audits, and the other writes G/L entries to an XML file for external archiving. Both filter by date range.

The third page explains how to prepare Business Central for the Declaration of Trade in Goods (DEB). It lists the required setup fields, obligation levels, transaction specification filters and validation steps.

Start with the FEC export page if you face a tax audit, with the XML page if you need to archive entries, and with the DEB requirements page before reporting trade in goods.

## Key points

- The FEC audit file export is required for French corporate tax and VAT compliance.
- FEC export can optionally include opening balances. The page also mentions opening balance calculation and Detailed Balance on G/L Accounts.
- FEC export filters by date range and writes to a file.
- The XML export archives posted G/L Entry records for a chosen period and supports fiscal year closing.
- DEB setup involves CISD setup, Registration No., VAT Registration No. and Statistics Period.
- DEB reporting uses Transaction Specification and Obligation Level filtering.
- The DEB requirements page also covers validation procedures.

## Learn pages

- [Export General Ledger Entries Tax Audits [FR]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/France/how-to-export-general-ledger-entries-for-tax-audits): Learn how to export general ledger entries to a text file for a tax audit.
  - In the observatory: [Page 17 "G/L Account Card"](../../../../../objects/page/17.md), [Page 5266 "Audit File Export Documents"](../../../../../objects/page/5266.md)
- [Export general ledger entries to an XML file](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/France/how-to-export-general-ledger-entries-to-an-xml-file): Learn how to export financial transactions for a particular period to an XML file for external archiving.
  - In the observatory: [Table 17 "G/L Entry"](../../../../../objects/table/17.md)
- [Requirements for Reporting Declaration of Trade in Goods [FR]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/France/requirements-for-reporting-declaration-of-trade-in-goods): Learn about the required fields and steps for reporting the Declaration of Trade in Goods (DEB) in the French version of Business Central.
  - In the observatory: [Page 4810 "Intrastat Report Setup"](../../../../../objects/page/4810.md), [Page 4811 "Intrastat Report List"](../../../../../objects/page/4811.md), [Page 4812 "Intrastat Report"](../../../../../objects/page/4812.md), [Table 4812 "Intrastat Report Line"](../../../../../objects/table/4812.md), [Table 79 "Company Information"](../../../../../objects/table/79.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
