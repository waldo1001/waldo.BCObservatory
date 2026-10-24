---
id: topic/business-central/business-functionality/local-functionality/germany/core-finance
type: topic
title: Core finance
summary: "Germany core finance functionality in Business Central: digital audit exports (GoBD/GDPdU), electronic invoicing (XRechnung, Peppol BIS 3, ZUGFeRD), and Intrastat reporting for German authorities. It answers setup, export and filter questions for these compliance tasks."
tier: official
language: en
system: finance
review:
  state: reviewed
  by: opus
  at: "2026-10-24T00:55:33.161Z"
  flags: []
generated:
  at: "2026-10-24T00:57:10.969Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 80db56eab5262f1627327bba6c890518344cba2ef03bb1ee776a726c7616e541
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/process-for-digital-audits
    title: Digital audits (GoBD/GDPdU)
    date: "2026-10-09"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/germany-einvoicing
    title: Electronic invoicing in Germany
    date: "2026-10-09"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/how-to-export-and-print-intrastat-reports
    title: Export and Print Intrastat Reports (DE)
    date: "2026-10-09"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/how-to-export-data-for-a-digital-audit
    title: Export Data for a Digital Audit [DE]
    date: "2026-10-09"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/walkthrough-exporting-data-for-a-digital-audit
    title: Exporting data for a digital audit [DE]
    date: "2026-10-09"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/gdpdu-filter-examples
    title: GoBD filter examples [DE]
    date: "2026-10-09"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/how-to-upgrade-a-.dtd-definition-file
    title: How to upgrade a .DTD definition file [DE]
    date: "2026-10-09"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/how-to-set-up-data-exports-for-digital-audits
    title: Set Up Data Exports for a Digital Audit [DE]
    date: "2026-10-09"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/process-for-digital-audits
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/germany-einvoicing
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/how-to-export-and-print-intrastat-reports
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/how-to-export-data-for-a-digital-audit
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/walkthrough-exporting-data-for-a-digital-audit
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/gdpdu-filter-examples
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/how-to-upgrade-a-.dtd-definition-file
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/how-to-set-up-data-exports-for-digital-audits
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/germany
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Local functionality
  - Germany
  - Core finance
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/local-functionality/germany
children: []
coverage:
  learn: 8
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 11002
  - 11003
  - 11004
  - 11007
  - 11008
  - 11009
  - 11014
  - 11026
  - 11027
member_hash: 7bf3176a9863a4d6e693077da8a397830efcda0093c0d723d844db513562abb1
narrative: generated
---

# Core finance

> Germany core finance functionality in Business Central: digital audit exports (GoBD/GDPdU), electronic invoicing (XRechnung, Peppol BIS 3, ZUGFeRD), and Intrastat reporting for German authorities. It answers setup, export and filter questions for these compliance tasks.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Germany](../germany.md) > Core finance · tier official · system finance · narrative reviewed (checked by Opus)

## Overview

This section collects the German-specific finance and compliance features. Most pages deal with digital audits under GoBD/GDPdU: configuring which tables and fields are exported, running the export, and producing an ASCII file set with an XML index for the tax authority's analysis software (IDEA).

The audit pages build on each other. Start with the overview of the digital audit process, then follow the setup page for data export record sources, the walkthrough for exporting G/L, customer and vendor data, and the Export Business Data page for the actual run. The filter examples page and the .DTD upgrade page cover specific tasks.

Two other topics sit apart from the audit pages. The e-invoicing page covers XRechnung, Peppol BIS 3 and ZUGFeRD through the E-Document framework, including buyer references. The Intrastat page covers XML export of EU trade reports from the Intrastat Report page.

## Key points

- Digital audit export writes ASCII files with an XML index for tax authority analysis software (IDEA).
- Setup uses Data Exports, Record Definitions, Record Types and Record Sources, with table filters, field selection, date filters and table relationships.
- Filter examples use Period Field No., Table Filter and Date Filter Handling to export G/L entries and customer ledger entries.
- Export Business Data takes a Starting Date, Ending Date and an Include Closing Date option, and delivers a ZIP archive.
- A .DTD definition file can be upgraded by importing it and running Validate in Data Exports.
- Electronic invoicing supports XRechnung, Peppol BIS 3 and ZUGFeRD via the E-Document framework, with a Buyer Reference Mandatory setting (page notes version 26.3).
- Intrastat reports for Germany are exported as XML using the Checklist Report and Create File actions.
- Intrastat submission channels are IDEV and eSTATISTIK.CORE, with a test submission option.

## Learn pages

- [Digital audits (GoBD/GDPdU)](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/process-for-digital-audits): Export data according to the digital audit process (GoBD/GDPdU) based on German tax law.
- [Electronic invoicing in Germany](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/germany-einvoicing): Learn how to set up and work with the German localization of the E-Document framework.
  - In the observatory: [Page 6103 "E-Document Services"](../../../../../objects/page/6103.md)
- [Export and Print Intrastat Reports (DE)](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/how-to-export-and-print-intrastat-reports): Learn how to verify, export, and submit Intrastat reports for Germany, including the IDEV and eSTATISTIK.CORE submission channels.
  - In the observatory: [Page 1 "Company Information"](../../../../../objects/page/1.md), [Page 4810 "Intrastat Report Setup"](../../../../../objects/page/4810.md), [Page 4811 "Intrastat Report List"](../../../../../objects/page/4811.md), [Page 4812 "Intrastat Report"](../../../../../objects/page/4812.md)
- [Export Data for a Digital Audit [DE]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/how-to-export-data-for-a-digital-audit): Financial and tax data can be exported in compliance with the digital audits process (GoBD/GDPdU), which adheres to German tax law.
- [Exporting data for a digital audit [DE]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/walkthrough-exporting-data-for-a-digital-audit): Export business data for auditing purposes following the digital audit process (GoBD/GDPdU) as per German tax regulations.
  - In the observatory: [Table 15 "G/L Account"](../../../../../objects/table/15.md), [Table 17 "G/L Entry"](../../../../../objects/table/17.md), [Table 18 "Customer"](../../../../../objects/table/18.md), [Table 23 "Vendor"](../../../../../objects/table/23.md)
- [GoBD filter examples [DE]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/gdpdu-filter-examples): Learn how to use filter types when you set up your GoBD exports.
  - In the observatory: [Table 17 "G/L Entry"](../../../../../objects/table/17.md), [Table 18 "Customer"](../../../../../objects/table/18.md), [Table 21 "Cust. Ledger Entry"](../../../../../objects/table/21.md)
- [How to upgrade a .DTD definition file [DE]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/how-to-upgrade-a-.dtd-definition-file): Validate a .dtd file after importing it to resolve upgrade issues in the German version.
- [Set Up Data Exports for a Digital Audit [DE]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/how-to-set-up-data-exports-for-digital-audits): Set up data export record sources to export data for a digital audit according to GDPdU requirements.
  - In the observatory: [Table 15 "G/L Account"](../../../../../objects/table/15.md), [Table 17 "G/L Entry"](../../../../../objects/table/17.md), [Table 5600 "Fixed Asset"](../../../../../objects/table/5600.md)

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

Learn also names 9 objects with no object page: page/11002, page/11003, page/11004, page/11007, page/11008, page/11009, page/11014, page/11026, page/11027.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
