---
id: topic/business-central/business-functionality/local-functionality/belgium/vat
type: topic
title: VAT
summary: "Belgian VAT and Intrastat functionality in Business Central: VAT declarations, annual listings, EC sales lists, manual VAT corrections, non-deductible VAT, and Intrastat setup, printing and export to OneGate. It answers how-to questions for Belgian tax and trade reporting."
tier: official
language: en
system: finance
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:19:58.943Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 1b736ac77535edc84b514ed921041c73a8cdc2763ec3e2d4c652e3ae61d51629
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Belgium/belgian-intrastat-reporting
    title: Belgian Intrastat Reporting
    date: "2025-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Belgium/belgian-vat
    title: Belgian VAT
    date: "2025-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Belgium/how-to-export-intrastat-third-party-declararations
    title: Export intrastat third-party declarations [BE]
    date: "2025-04-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Belgium/how-to-make-manual-corrections-to-vat
    title: How to Make Manual Corrections to VAT [BE]
    date: "2025-04-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Belgium/how-to-print-periodic-vat-reports
    title: How to print periodic VAT reports [BE]
    date: "2025-04-24"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Belgium/how-to-print-the-intrastat-form-report
    title: How to Print the Intrastat Form Report [BE]
    date: "2025-04-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Belgium/how-to-set-up-intrastat-establishment-numbers
    title: How to Set Up Intrastat Establishment Numbers [BE]
    date: "2025-04-04"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Belgium/how-to-set-up-non-deductible-vat
    title: How to set up Non-Deductible VAT [BE]
    date: "2025-04-04"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Belgium/how-to-set-up-belgian-tariff-numbers
    title: Set Up Belgian Tariff Numbers [BE]
    date: "2025-04-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Belgium/how-to-set-up-declaration-types
    title: Set up declaration types [BE]
    date: "2025-03-03"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Belgium/belgian-intrastat-reporting
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Belgium/belgian-vat
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Belgium/how-to-export-intrastat-third-party-declararations
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Belgium/how-to-make-manual-corrections-to-vat
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Belgium/how-to-print-periodic-vat-reports
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Belgium/how-to-print-the-intrastat-form-report
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Belgium/how-to-set-up-intrastat-establishment-numbers
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Belgium/how-to-set-up-non-deductible-vat
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Belgium/how-to-set-up-belgian-tariff-numbers
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Belgium/how-to-set-up-declaration-types
  objects: []
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
  - VAT
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/local-functionality/belgium
children: []
coverage:
  learn: 10
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 310
  - 11300
  - 11301
  - 11303
  - 11306
  - 11307
  - 11308
member_hash: 3a1a928a59a8dd75ec8bdbcb5bbf65cd69941fc4be033b29862d7509e4ad17e7
narrative: generated
---

# VAT

> Belgian VAT and Intrastat functionality in Business Central: VAT declarations, annual listings, EC sales lists, manual VAT corrections, non-deductible VAT, and Intrastat setup, printing and export to OneGate. It answers how-to questions for Belgian tax and trade reporting.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Belgium](../belgium.md) > VAT · tier official · system finance · narrative reviewed by Opus

## Overview

This section covers the Belgium-specific VAT and Intrastat features. The VAT side includes monthly/quarterly declarations, VAT annual listings, EC sales lists (VAT-VIES), non-deductible VAT, multiple VAT registration numbers and manual corrections to posted VAT entries.

The Intrastat side covers reporting of EU goods movements. Pages describe setting up declaration types (simplified or extended), establishment numbers and tariff numbers, then printing the Intrastat Form and exporting the file for the OneGate portal.

Start with the Belgian VAT and Belgian Intrastat Reporting overview pages. Then use the how-to pages for specific tasks: setup first (non-deductible VAT, establishment numbers, tariff numbers, declaration types), then printing or exporting.

## Key points

- Belgian VAT supports monthly/quarterly declarations, VAT annual listings and EC sales lists, plus multiple VAT registration numbers and Alternative Customer VAT Registration.
- Periodic VAT reports can be printed as Form/Intervat declaration, VAT Annual Listing and VAT-VIES declaration, with a test declaration option, a representative and XML file generation.
- Manual VAT corrections adjust posted VAT entries without changing general ledger entries, for example when a vendor miscalculates VAT; VAT Statement Preview helps check results.
- Non-deductible VAT is set up as a percentage on general ledger expense accounts to allow partial VAT deduction.
- Intrastat declarations can be simplified or extended, depending on the amount of goods shipped or received; Incoterm is part of the declaration setup.
- Belgian tariff numbers are eight-digit item codes with conversion factor, unit of measure, supplementary units and Weight Mandatory settings.
- The Intrastat establishment number is configured as a company identification number.
- Intrastat files are exported with the Create File action for the OneGate portal, and nihil declarations are supported; the Intrastat Form report can also be printed.

## Learn pages

- [Belgian Intrastat Reporting](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Belgium/belgian-intrastat-reporting): Companies in the European Union (EU) must report trade within the EU via Intrastat reporting or VAT Information Exchange System.
- [Belgian VAT](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Belgium/belgian-vat): Belgian enhancements of the VAT reporting feature enable you to easily print VAT transaction details.
- [Export intrastat third-party declarations [BE]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Belgium/how-to-export-intrastat-third-party-declararations): In Belgium, an external person or company must fill out the Intrastat declaration.
- [How to Make Manual Corrections to VAT [BE]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Belgium/how-to-make-manual-corrections-to-vat): You can make corrections to posted VAT entries without posting the correction into the VAT or general ledger entries.
- [How to print periodic VAT reports [BE]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Belgium/how-to-print-periodic-vat-reports): The VAT reporting feature lets you print VAT transaction details. You must send three VAT reports to the Belgian tax authorities.
- [How to Print the Intrastat Form Report [BE]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Belgium/how-to-print-the-intrastat-form-report): The Intrastat Form report is used in Belgium for monthly reporting of goods movement. This report must be sent to both the statistics authorities and tax authorities.
- [How to Set Up Intrastat Establishment Numbers [BE]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Belgium/how-to-set-up-intrastat-establishment-numbers): Learn how to set up the Intrastat establishment number, a company identification number used in the Intrastat declaration.
- [How to set up Non-Deductible VAT [BE]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Belgium/how-to-set-up-non-deductible-vat): Learn how to calculate VAT amounts for specific expense types that can be partially declared as VAT.
- [Set Up Belgian Tariff Numbers [BE]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Belgium/how-to-set-up-belgian-tariff-numbers): Learn how to set up eight-digit Belgian tariff numbers for compliance with customs and tax regulations.
- [Set up declaration types [BE]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Belgium/how-to-set-up-declaration-types): Learn how to set up simplified and extended declaration types in the Belgian version of Business Central.

## Business Central pages and reports

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 310, 11300, 11301, 11303, 11306, 11307, 11308.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
