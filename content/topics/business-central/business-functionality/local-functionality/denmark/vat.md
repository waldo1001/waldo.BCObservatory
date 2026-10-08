---
id: topic/business-central/business-functionality/local-functionality/denmark/vat
type: topic
title: VAT
summary: "Danish VAT functionality in Business Central: printing the VAT Reconciliation report, showing VAT registration numbers with country codes in Intrastat, and VAT-VIES reporting with the EC Sales List. It answers setup and reporting questions for Danish VAT compliance."
tier: official
language: en
system: finance
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:27:22.281Z"
  flags: []
generated:
  at: "2026-10-08T06:31:25.130Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 6aa04557ccccab7eba036d806cf58d04ba8f71c45556cfb66f940d35dcf68508
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Denmark/how-to-print-vat-reconciliation-reports
    title: How to print VAT reconciliation reports [DK]
    date: "2025-03-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Denmark/vat-registration-no-intrastat
    title: VAT Registration No. for Intrastat [DK]
    date: "2025-03-04"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Denmark/vat-vies-reporting
    title: VAT-VIES Reporting [DK]
    date: "2025-03-04"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Denmark/how-to-print-vat-reconciliation-reports
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Denmark/vat-registration-no-intrastat
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Denmark/vat-vies-reporting
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/denmark
  localizations: []
  videos:
    - video/hcu7T3qLdDA
  posts: []
  guidelines: []
  changes:
    - change/bcapps/9543
learn_toc_path:
  - Business functionality
  - Local functionality
  - Denmark
  - VAT
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/local-functionality/denmark
children: []
coverage:
  learn: 3
  code: 0
  video: 1
  blog: 0
  guideline: 0
bc_forms:
  - 328
member_hash: 3b76a61af335002ba5f59a6996684f4d3b7cf1c36aabdfb93a077607aa52a307
narrative: generated
---

# VAT

> Danish VAT functionality in Business Central: printing the VAT Reconciliation report, showing VAT registration numbers with country codes in Intrastat, and VAT-VIES reporting with the EC Sales List. It answers setup and reporting questions for Danish VAT compliance.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Denmark](../denmark.md) > VAT · tier official · system finance · narrative reviewed (checked by Opus)

## Overview

This section covers three Denmark-specific VAT tasks. Each has its own page and there are no subtopics, so the pages can be read in any order.

The VAT Reconciliation report helps you reconcile VAT settlement by showing general ledger account balances grouped by VAT type. The Intrastat page explains how to control whether VAT registration numbers in the Intrastat file include country codes. The VAT-VIES page covers declaring EU trade to the Danish tax authority with the EC Sales List report.

Start with the VAT-VIES page if you trade within the EU, since it covers the registration number setup on customer and vendor cards. Go to the Intrastat page if you need to change how VAT numbers appear in the Intrastat file.

## Key points

- The Danish VAT Reconciliation report shows general ledger account balances grouped by VAT type.
- The VAT Reconciliation report can show transaction details and include non-VAT transactions.
- The report is used to reconcile VAT settlement.
- Intrastat VAT numbers can include country codes through the Customer VAT No. on File and Vendor VAT No. on File options in Intrastat Setup.
- VAT-VIES reporting means submitting VAT declarations for EU trade using the EC Sales List report.
- For VAT-VIES, set plain VAT registration numbers on customer and vendor cards to meet Danish tax authority requirements.

## Learn pages

- [How to print VAT reconciliation reports [DK]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Denmark/how-to-print-vat-reconciliation-reports): In Business Central, the VAT Reconciliation report displays a list of general ledger accounts with their corresponding base amounts and VAT amounts.
- [VAT Registration No. for Intrastat [DK]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Denmark/vat-registration-no-intrastat): Learn how to set up a VAT registration number as specified by the Danish Intrastat requirements.
- [VAT-VIES Reporting [DK]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Denmark/vat-vies-reporting): You can create the required VAT declarations for trade of goods or services file in the Danish version by using the EC Sales List report.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#9543 Support VAT return reporting frequencies in Denmark](../../../../../changes/bcapps/9543.md) (code change): "Danish electronic VAT declaration now reads SKAT VAT return periods with their reporting"
- [What's New: The Danish Bookkeeping Act (2024 release wave 1)](../../../../../videos/hcu7T3qLdDA.md) (video): "The Danish Bookkeeping Act; SAF-T; certification; audit file export; vat reporting"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

Learn also names 1 object with no object page: page/328.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
