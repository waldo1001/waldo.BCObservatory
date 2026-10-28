---
id: topic/business-central/business-functionality/local-functionality/italy/vat
type: topic
title: VAT
summary: "Italian VAT functionality in Business Central: VAT transactions reports (prepare, create, export, correct), VAT statements and periodic settlement, printing G/L Books and VAT registers, and Intrastat reports. It answers setup and submission questions for Italian tax compliance."
tier: official
language: en
system: finance
review:
  state: reviewed
  by: opus
  at: "2026-10-28T11:02:15.974Z"
  flags: []
generated:
  at: "2026-10-28T11:04:14.111Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 5efb82eb132fdfda6a5cec1e4c35e54d286d1a082d7e7caeb736686c7718d2a8
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-correct-vat-transactions-reports
    title: Correct VAT Transactions Reports in the Italian Version [IT]
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-create-electronic-vat-transactions-reports
    title: Create Electronic VAT Transactions Reports for Italy
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-export-vat-transactions-reports
    title: Export VAT Transactions Reports in the Italian Version [IT]
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/italian-vat
    title: Italian VAT Reporting in Business Central
    date: "2026-10-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-prepare-for-vat-transactions-reports
    title: Prepare for VAT Transactions Reports in the Italian Version [IT]
    date: "2026-10-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-print-and-reprint-g-l-books-and-vat-registers
    title: Print and Reprint G/L Books and VAT Registers for Italy
    date: "2026-10-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-print-intrastat-reports-for-italy
    title: Set Up and Print Intrastat Reports for Italy
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-submit-vat-statements
    title: Submit VAT Statements in the Italian Version [IT]
    date: "2026-10-21"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-correct-vat-transactions-reports
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-create-electronic-vat-transactions-reports
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-export-vat-transactions-reports
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/italian-vat
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-prepare-for-vat-transactions-reports
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-print-and-reprint-g-l-books-and-vat-registers
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-print-intrastat-reports-for-italy
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-submit-vat-statements
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

> Italian VAT functionality in Business Central: VAT transactions reports (prepare, create, export, correct), VAT statements and periodic settlement, printing G/L Books and VAT registers, and Intrastat reports. It answers setup and submission questions for Italian tax compliance.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Italy](../italy.md) > VAT · tier official · system finance · narrative reviewed (checked by Opus)

## Overview

This section covers the Italian version's VAT reporting. An introductory page explains periodic VAT reports, VAT codes and rates, calculation and posting, VAT date handling, nondeductible VAT, service tariffs for EU cross-border trade, and threshold-based transaction reporting.

The VAT transactions report follows a sequence of pages. First prepare thresholds and customer details. Then create the report from VAT entries in a posting-date range. Then release, export and submit it. Finally, correct or cancel earlier submissions if needed. Separate pages cover submitting VAT statements, printing and reprinting the G/L Book and VAT Fiscal Register, and setting up Intrastat reports.

Start with the Italian VAT Reporting overview, then follow the VAT transactions report pages in order. Go to the statement, print or Intrastat pages for those tasks.

## Key points

- Prepare: set VAT Transaction Report Amount thresholds (incl. and excl. VAT) and customer fields such as Individual Person, Resident and Tax Representative Type.
- Create: use a VAT Transactions Report with a VAT Report Config Code, the Suggest Lines action, and Incl. in Report marking to review entries against thresholds.
- Export: release the report, export to CCF format in detailed or aggregate mode, mark as submitted, and reopen released reports if needed.
- Correct: create corrective or cancellation reports to replace or cancel earlier submissions to the tax authorities.
- VAT statements: review VAT entries, print, calculate and post settlement, export to PDF, and generate an XML file for periodic VAT payment.
- Printing: G/L Book and VAT Fiscal Register use progressive page numbers, with last printed page and reprinting information kept in General Ledger Setup and VAT Register.
- Intrastat: the Intrastat Report page supports monthly and quarterly purchase or sales declarations and corrective reports, with Export Parameters and periodicity settings (2022 release wave 2).

## Learn pages

- [Correct VAT Transactions Reports in the Italian Version [IT]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-correct-vat-transactions-reports): Learn how to create a corrective or cancellation VAT transaction report in Business Central for Italy and record the tax authority's response.
- [Create Electronic VAT Transactions Reports for Italy](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-create-electronic-vat-transactions-reports): Learn how to create a VAT Transactions Report in Business Central for Italy, suggest lines for a posting-date range, and review included entries.
- [Export VAT Transactions Reports in the Italian Version [IT]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-export-vat-transactions-reports): Learn how to release and export VAT transaction reports in Business Central for Italy and record receipt details after submission to the authorities.
  - In the observatory: [Page 743 "VAT Report Setup"](../../../../../objects/page/743.md), [Report 12193 "Export VAT Transactions (IT)"](../../../../../objects/report/12193-it.md)
- [Italian VAT Reporting in Business Central](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/italian-vat): In the Italian version, companies can deduct VAT on goods or services purchased if they're used to generate business income.
  - In the observatory: [Page 5023 "Service Declaration"](../../../../../objects/page/5023.md), [Page 740 "VAT Report"](../../../../../objects/page/740.md)
- [Prepare for VAT Transactions Reports in the Italian Version [IT]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-prepare-for-vat-transactions-reports): Learn how to prepare and submit periodic VAT Transactions reports to the Italian tax authorities, including setup steps and required information.
  - In the observatory: [Page 36954 "Customers"](../../../../../objects/page/36954.md), [Page 472 "VAT Posting Setup"](../../../../../objects/page/472.md)
- [Print and Reprint G/L Books and VAT Registers for Italy](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-print-and-reprint-g-l-books-and-vat-registers): Learn how to print and reprint the G/L Book - Print and VAT Fiscal Register - Print reports, and maintain their page numbers in Business Central for Italy.
  - In the observatory: [Page 1 "Company Information"](../../../../../objects/page/1.md), [Page 118 "General Ledger Setup"](../../../../../objects/page/118.md), [Report 12121 "G/L Book - Print (IT)"](../../../../../objects/report/12121-it.md)
- [Set Up and Print Intrastat Reports for Italy](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-print-intrastat-reports-for-italy): Learn how to set up and print monthly or quarterly Intrastat reports, and submit them to authorities in the Italian version of Business Central.
  - In the observatory: [Page 4812 "Intrastat Report"](../../../../../objects/page/4812.md)
- [Submit VAT Statements in the Italian Version [IT]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-submit-vat-statements): Learn how to review, print, submit VAT statements, and settle and post VAT transactions in the Italian version of Business Central.
  - In the observatory: [Page 317 "VAT Statement"](../../../../../objects/page/317.md)

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

Learn also names 25 objects with no object page: page/12100, page/12104, page/12105, page/12111, page/12112, page/12113, page/12116, page/12121, page/12122, page/12123, page/12126, page/12127, page/12133, page/12135, page/12141, page/12143, page/12149, page/12150, page/12151, page/12158, page/12187, page/12189, page/12198, page/12199, page/12202.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
