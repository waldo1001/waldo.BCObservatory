---
id: topic/business-central/business-functionality/local-functionality/italy/vat
type: topic
title: VAT
summary: "Italian VAT functionality in Business Central: VAT codes and rates, VAT transaction reports (prepare, create, export, correct), VAT statement submission, G/L book and VAT register printing, and Intrastat reports for Italy. It answers setup and how-to questions for Italian tax compliance."
tier: official
language: en
system: finance
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:21:30.197Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 2695b878b30e0ff08dc19870c265c0f70554e41b464126d0b1b18e5594cb3814
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-create-electronic-vat-transactions-reports
    title: Create Electronic VAT Transactions Report [IT]
    date: "2025-05-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-correct-vat-transactions-reports
    title: How to correct VAT transactions reports [IT]
    date: "2025-05-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-export-vat-transactions-reports
    title: How to export VAT transactions reports [IT]
    date: "2025-05-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-submit-vat-statements
    title: How to Submit VAT Statements [IT]
    date: "2025-05-22"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/italian-vat
    title: Italian VAT
    date: "2025-05-22"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-prepare-for-vat-transactions-reports
    title: Prepare for VAT transactions reports [IT]
    date: "2025-05-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-print-and-reprint-g-l-books-and-vat-registers
    title: Print and reprint G-L books VAT registers [IT]
    date: "2025-05-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-print-intrastat-reports-for-italy
    title: Set up and Print Intrastat Reports for Italy
    date: "2025-05-21"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-create-electronic-vat-transactions-reports
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-correct-vat-transactions-reports
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-export-vat-transactions-reports
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-submit-vat-statements
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/italian-vat
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-prepare-for-vat-transactions-reports
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-print-and-reprint-g-l-books-and-vat-registers
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-print-intrastat-reports-for-italy
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/italy
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Local functionality
  - Italy
  - VAT
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/local-functionality/italy
children: []
coverage:
  learn: 8
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 12100
  - 12104
  - 12105
  - 12111
  - 12112
  - 12113
  - 12116
  - 12121
  - 12122
  - 12123
  - 12126
  - 12127
  - 12133
  - 12135
  - 12141
  - 12143
  - 12149
  - 12150
  - 12151
  - 12158
  - 12187
  - 12189
  - 12198
  - 12199
  - 12202
member_hash: 494de834cf322859b3f96cd8f33aba9a05504b095c33ecddf4bec22a506e0ad4
narrative: generated
---

# VAT

> Italian VAT functionality in Business Central: VAT codes and rates, VAT transaction reports (prepare, create, export, correct), VAT statement submission, G/L book and VAT register printing, and Intrastat reports for Italy. It answers setup and how-to questions for Italian tax compliance.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Italy](../italy.md) > VAT · tier official · system finance · narrative reviewed (checked by Opus)

## Overview

This section covers the Italian localization of VAT. A general page on Italian VAT describes VAT codes and rates, VAT calculation based on transaction dates, non-deductible VAT, service tariffs, reverse charges and prepayment handling, and notes that VAT transaction reports must be submitted to the authorities. Several pages then cover the VAT transaction report process in order: setting up VAT posting for the reports, creating the electronic report, exporting it as a .ccf file and recording receipt numbers, and correcting or cancelling submitted reports. Other pages explain how to submit VAT statements through the VAT settlement process, how to print and reprint G/L Book and VAT Register fiscal reports, and how to set up and print monthly or quarterly Intrastat reports for Italy.

## Key points

- Italian VAT defines VAT codes and rates, computes VAT by transaction date, and supports non-deductible VAT, service tariffs, reverse charges and prepayments.
- Preparing for VAT transaction reports involves the VAT Transaction Report Amount threshold, the Individual Person and Resident flags, tax representative assignment, and the Foreign Trade FastTab.
- Electronic VAT Transactions reports list transactions above the threshold, are categorized by contract type, and include credit memos for non-EU customers.
- Reports are exported with the Export VAT Transactions batch job as .ccf files, with a Detailed Export option. Receipt numbers from the tax authority are then recorded.
- Corrections are made with corrective or cancellation reports linked to the original submitted report. Lines are suggested from VAT entries and threshold setup, and can be excluded.
- VAT statements are submitted by reviewing VAT entries, running Calc. and Post VAT Settlement, and exporting the statement as PDF.
- G/L Book and VAT Register fiscal reports print with progressive page numbering, can be reprinted, and track the last printed page.
- Intrastat reports for Italy can be monthly or quarterly, cover purchases or sales, and support corrective entries by referencing the corrected report number. The Intrastat page is tagged for 2022 release wave 2.

## Learn pages

- [Create Electronic VAT Transactions Report [IT]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-create-electronic-vat-transactions-reports): Create a report of VAT-inclusive transactions exceeding the current threshold by the specified date.
- [How to correct VAT transactions reports [IT]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-correct-vat-transactions-reports): Learn how to correct and resubmit electronic VAT transaction reports in Business Central for Italy.
- [How to export VAT transactions reports [IT]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-export-vat-transactions-reports): Learn how to release, export, and submit VAT Transactions reports to the authorities.
- [How to Submit VAT Statements [IT]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-submit-vat-statements): Learn how to review, print, submit VAT statements, and settle and post VAT transactions in the Italian version of Business Central.
- [Italian VAT](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/italian-vat): In the Italian version, companies can deduct VAT on goods or services purchased if they're used to generate business income.
- [Prepare for VAT transactions reports [IT]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-prepare-for-vat-transactions-reports): Learn how to prepare and submit periodic VAT Transactions reports to the Italian tax authorities, including setup steps and required information.
- [Print and reprint G-L books VAT registers [IT]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-print-and-reprint-g-l-books-and-vat-registers): Submit two fiscal reports—the G/L Book - Print report and the VAT Register - Print report—that list all posted ledger entries, as required by tax authorities.
- [Set up and Print Intrastat Reports for Italy](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-print-intrastat-reports-for-italy): Learn how to set up and print monthly or quarterly Intrastat reports, and submit them to authorities in the Italian version of Business Central.

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

Learn also names 25 objects with no object page: page/12100, page/12104, page/12105, page/12111, page/12112, page/12113, page/12116, page/12121, page/12122, page/12123, page/12126, page/12127, page/12133, page/12135, page/12141, page/12143, page/12149, page/12150, page/12151, page/12158, page/12187, page/12189, page/12198, page/12199, page/12202.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
