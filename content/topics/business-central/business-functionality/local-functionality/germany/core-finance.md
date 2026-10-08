---
id: topic/business-central/business-functionality/local-functionality/germany/core-finance
type: topic
title: Core finance
summary: Core finance for the German version of Business Central covers digital audit exports (GoBD/GDPdU), electronic invoicing (XRechnung, Peppol BIS 3.0 DE, ZUGFeRD), and Intrastat export and printing. It answers setup, filtering and export questions for German tax and audit compliance.
tier: official
language: en
system: finance
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:21:10.062Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 1a66f49883b182a984d7a4544ae889000421c9ab2e5c7b077f57ab5c7ba7995d
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/process-for-digital-audits
    title: Digital audits (GoBD/GDPdU)
    date: "2024-05-04"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/germany-einvoicing
    title: Electronic invoicing in Germany
    date: "2025-06-30"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/how-to-export-and-print-intrastat-reports
    title: Export and Print Intrastat Reports (DE)
    date: "2025-04-24"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/how-to-export-data-for-a-digital-audit
    title: Export Data for a Digital Audit [DE]
    date: "2025-03-11"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/walkthrough-exporting-data-for-a-digital-audit
    title: Exporting data for a digital audit [DE]
    date: "2025-03-12"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/gdpdu-filter-examples
    title: GoBD filter examples [DE]
    date: "2025-03-10"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/how-to-upgrade-a-.dtd-definition-file
    title: How to upgrade a .DTD definition file [DE]
    date: "2025-03-12"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/how-to-set-up-data-exports-for-digital-audits
    title: Set Up Data Exports for a Digital Audit [DE]
    date: "2025-03-12"
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
  changes:
    - change/bcapps/9371
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
  - 26100
member_hash: 7bf3176a9863a4d6e693077da8a397830efcda0093c0d723d844db513562abb1
narrative: generated
---

# Core finance

> Core finance for the German version of Business Central covers digital audit exports (GoBD/GDPdU), electronic invoicing (XRechnung, Peppol BIS 3.0 DE, ZUGFeRD), and Intrastat export and printing. It answers setup, filtering and export questions for German tax and audit compliance.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Germany](../germany.md) > Core finance · tier official · system finance · narrative reviewed (checked by Opus)

## Overview

This area holds the German-specific finance functionality. Most pages deal with digital audits under GoBD/GDPdU, which relate to Sections 146-147 of the German Fiscal Code. You define data export record sources with tables, fields, relations and filters, then export the data as XML files for auditors.

The digital audit pages build on each other. Start with the setup page and the full walkthrough for general ledger, customer and vendor data. Then use the export page to run the export, the filter examples page to tune period, table and date filters, and the DTD page to upgrade and validate a .DTD definition file after import.

Two other topics sit alongside. Electronic invoicing explains how to set up the E-Document framework for German formats in sales and purchase processes. The Intrastat page covers exporting and printing reports for EU trade reporting, and it relies on the deprecated Intrastat Journals functionality.

## Key points

- Digital audit exports follow GoBD/GDPdU, using data export record definitions with tables, fields and table relations.
- Exports can be limited with period filters, table filters, flowfield filters and date filter handling; the filter examples page shows the Period Field No., Table Filter and Date Filter Field No. settings.
- Digital audit data is exported as XML files, with an option to include closing dates.
- After importing a .DTD definition file, validate it and upgrade it if there are version compatibility problems.
- Electronic invoicing in Germany supports XRechnung, Peppol BIS 3.0 DE and ZUGFeRD through the E-Document framework (version 26.3 is mentioned).
- E-invoicing setup involves the Buyer Reference field, the Buyer Reference Mandatory option and a Document Sending Profile.
- Intrastat reports are exported and printed with the Intrastat checklist and form, and exported to disk in ASCII format, using deprecated Intrastat Journals.

## Learn pages

- [Digital audits (GoBD/GDPdU)](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/process-for-digital-audits): Export data according to the digital audit process (GoBD/GDPdU) based on German tax law.
- [Electronic invoicing in Germany](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/germany-einvoicing): Learn how to set up and work with the German localization of the E-Document framework.
- [Export and Print Intrastat Reports (DE)](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/how-to-export-and-print-intrastat-reports): Business Central supports Intrastat reporting according to German requirements. You can meet the requirement to report your trade with other EU countries/regions.
- [Export Data for a Digital Audit [DE]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/how-to-export-data-for-a-digital-audit): Financial and tax data can be exported in compliance with the digital audits process (GoBD/GDPdU), which adheres to German tax law.
- [Exporting data for a digital audit [DE]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/walkthrough-exporting-data-for-a-digital-audit): Export business data for auditing purposes following the digital audit process (GoBD/GDPdU) as per German tax regulations.
- [GoBD filter examples [DE]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/gdpdu-filter-examples): Learn how to use filter types when you set up your GoBD exports.
- [How to upgrade a .DTD definition file [DE]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/how-to-upgrade-a-.dtd-definition-file): Validate a .dtd file after importing it to resolve upgrade issues in the German version.
- [Set Up Data Exports for a Digital Audit [DE]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/how-to-set-up-data-exports-for-digital-audits): Set up data export record sources to export data for a digital audit according to GDPdU requirements.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#9371 Bug 642180: DE report 11015 Export Business Data fails when scheduled via Job Queue: Client callbacks are not supported](../../../../../changes/bcapps/9371.md) (code change): "Report 11015 Export Business Data now stores generated ZIP files"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

Learn also names 10 objects with no object page: page/11002, page/11003, page/11004, page/11007, page/11008, page/11009, page/11014, page/11026, page/11027, page/26100.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
