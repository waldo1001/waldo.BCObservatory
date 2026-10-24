---
id: topic/business-central/business-functionality/local-functionality/germany/vat
type: topic
title: VAT
summary: "German VAT functionality in Business Central: setting up and creating VAT reports, sales VAT advance notifications for ELSTER, VAT-VIES declarations for the EU Sales List, Intrastat setup, and correcting submitted reports. It answers setup, submission and correction questions for German tax authorities."
tier: official
language: en
system: finance
review:
  state: reviewed
  by: opus
  at: "2026-10-24T00:55:42.877Z"
  flags: []
generated:
  at: "2026-10-24T00:57:10.969Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 62d2f350d7f57697e4371a5b6f164d5abaaf30069f9b539d1ab047c7830a9a33
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/how-to-correct-vat-reports
    title: Correct VAT Reports [DE]
    date: "2026-10-09"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/how-to-create-vat-reports
    title: How to Create VAT Reports [DE]
    date: "2026-10-09"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/how-to-declare-vat-vies-tax
    title: How to Declare VAT-VIES Tax [DE]
    date: "2026-10-09"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/how-to-set-up-reports-for-vat-and-intrastat
    title: How to Set Up Reports for VAT and Intrastat
    date: "2026-10-09"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/how-to-set-up-vat-reports
    title: How to Set Up VAT Reports [DE]
    date: "2026-10-09"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/vat-reporting
    title: VAT Reporting in the German version
    date: "2026-10-09"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/how-to-correct-vat-reports
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/how-to-create-vat-reports
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/how-to-declare-vat-vies-tax
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/how-to-set-up-reports-for-vat-and-intrastat
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/how-to-set-up-vat-reports
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/vat-reporting
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/germany
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcapps/9734
learn_toc_path:
  - Business functionality
  - Local functionality
  - Germany
  - VAT
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/local-functionality/germany
children: []
coverage:
  learn: 6
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 11016
  - 11017
  - 11019
  - 11025
  - 11026
  - 11027
  - 11028
member_hash: 38c5e1704eb87593fffe75e235e9659e89c2e6feafca00cd447bc45f7f7a2dd2
narrative: generated
---

# VAT

> German VAT functionality in Business Central: setting up and creating VAT reports, sales VAT advance notifications for ELSTER, VAT-VIES declarations for the EU Sales List, Intrastat setup, and correcting submitted reports. It answers setup, submission and correction questions for German tax authorities.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Germany](../germany.md) > VAT · tier official · system finance · narrative reviewed (checked by Opus)

## Overview

This section covers VAT reporting in the German version of Business Central. Reporting is split into two mechanisms: Sales VAT Advance Notifications, exported as XML for the ELSTER portal, and VAT-VIES Declarations, which report EU sales to the BZSt list system. These replace the generic VAT Report page.

Start with "VAT Reporting in the German version" for the overview, then "How to Set Up VAT Reports [DE]" to configure company and tax office information and link VAT statements to declarations. "How to Set Up Reports for VAT and Intrastat" covers report selections and Intrastat submission channels.

For day-to-day work, use "How to Create VAT Reports [DE]" and "How to Declare VAT-VIES Tax [DE]". "Correct VAT Reports [DE]" explains how to resubmit with the Corrected Notification field and how to switch between monthly and quarterly periods.

## Key points

- Sales VAT Advance Notifications are exported as XML for submission through the ELSTER portal.
- VAT-VIES Declarations report EU sales to the BZSt list system, monthly, bi-monthly or quarterly depending on sales volume thresholds.
- Setup starts on the Company Information page (company and tax office information), then VAT Statement Names links statements to declarations.
- Report Selections VAT assigns VAT statements; Intrastat Report Setup sets the submission method.
- Intrastat options include XML export, eSTATISTIK.CORE and the IDEV channel, with a test submission mode.
- Suggest Lines and G/L - VAT Reconciliation support creating and checking reports.
- The Corrected Notification field is used to resubmit sales VAT advance notifications or VAT-VIES declarations.
- Reporting can be changed to monthly or revoked, and periods can be switched between monthly and quarterly.

## Learn pages

- [Correct VAT Reports [DE]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/how-to-correct-vat-reports): Learn how to submit a corrected sales VAT advance notification or a corrected VAT-VIES declaration in the German version.
  - In the observatory: [Page 11016 "Sales VAT Adv. Notif. Card (DE)"](../../../../../objects/page/11016-de.md)
- [How to Create VAT Reports [DE]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/how-to-create-vat-reports): Learn how to create and submit sales VAT advance notifications and VAT-VIES declarations in the German version.
  - In the observatory: [Page 11016 "Sales VAT Adv. Notif. Card (DE)"](../../../../../objects/page/11016-de.md)
- [How to Declare VAT-VIES Tax [DE]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/how-to-declare-vat-vies-tax): Learn to create the VAT-VIES report for submitting sales transaction details with other EU countries or regions.
  - In the observatory: [Table 254 "VAT Entry"](../../../../../objects/table/254.md)
- [How to Set Up Reports for VAT and Intrastat](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/how-to-set-up-reports-for-vat-and-intrastat): Learn how to specify the reports used to create documents for submission to authorities, such as the VAT statement and the Intrastat form.
  - In the observatory: [Page 1 "Company Information"](../../../../../objects/page/1.md), [Page 4810 "Intrastat Report Setup"](../../../../../objects/page/4810.md)
- [How to Set Up VAT Reports [DE]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/how-to-set-up-vat-reports): Learn how to set up VAT statements, company information, and tax office data before you declare VAT-VIES tax or sales VAT advance notifications in the German version.
  - In the observatory: [Page 1 "Company Information"](../../../../../objects/page/1.md), [Page 11019 "Electronic VAT Decl. Setup (DE)"](../../../../../objects/page/11019-de.md), [Page 317 "VAT Statement"](../../../../../objects/page/317.md), [Page 320 "VAT Statement Names"](../../../../../objects/page/320.md)
- [VAT Reporting in the German version](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/vat-reporting): You can report VAT electronically to the tax authorities in the German version.
  - In the observatory: [Table 256 "VAT Statement Line"](../../../../../objects/table/256.md)

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#9734 [Master]-Performance issue when calculating the VAT advance return / VAT statement (Base Application, German environment) - Copy](../../../../../changes/bcapps/9734.md) (code change): "performance issue when calculating the VAT advance return / VAT statement"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

Learn also names 7 objects with no object page: page/11016, page/11017, page/11019, page/11025, page/11026, page/11027, page/11028.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
