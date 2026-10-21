---
id: topic/business-central/business-functionality/local-functionality/denmark/vat
type: topic
title: VAT
summary: "Danish VAT functionality in Business Central: printing the VAT Reconciliation Report, formatting VAT registration numbers for Intrastat, and VAT-VIES reporting with the EC Sales List. It answers questions about reconciling VAT settlements and reporting EU trade in Denmark."
tier: official
language: en
system: finance
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-21T00:49:06.669Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: b3ea97c0c15e177c83a341f3bbc9fc9703ca8faece275e32f57c997bda0b58cb
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Denmark/how-to-print-vat-reconciliation-reports
    title: How to print VAT reconciliation reports [DK]
    date: "2026-10-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Denmark/vat-registration-no-intrastat
    title: VAT Registration No. for Intrastat [DK]
    date: "2026-10-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Denmark/vat-vies-reporting
    title: VAT-VIES Reporting [DK]
    date: "2026-10-08"
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
    - change/bcapps/12943
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

> Danish VAT functionality in Business Central: printing the VAT Reconciliation Report, formatting VAT registration numbers for Intrastat, and VAT-VIES reporting with the EC Sales List. It answers questions about reconciling VAT settlements and reporting EU trade in Denmark.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Denmark](../denmark.md) > VAT · tier official · system finance · narrative **unreviewed** (model text not yet checked)

## Overview

This section covers three Denmark-specific VAT tasks. One page explains the VAT Reconciliation Report, which lists general ledger accounts with base and VAT amounts grouped by VAT type to help reconcile VAT settlement. The other two pages deal with EU trade: how VAT registration numbers appear in Intrastat reports, and how to file VAT-VIES reports.

The pages are independent, so start with the one that matches your task. For EU reporting, VAT registration numbers on customer and vendor cards matter in both the Intrastat and VAT-VIES pages, so check that setup first.

## Key points

- The VAT Reconciliation Report shows general ledger accounts with base amounts and VAT amounts grouped by VAT type.
- The VAT Reconciliation Report has options Show Details, Show Transactions without VAT and VAT Amount Type, and can be printed or previewed.
- For Intrastat, you choose how VAT registration numbers are written on file for customers and vendors.
- The Intrastat format choices are plain VAT number, with EU country code prefix, or without EU country code.
- The settings are Customer VAT Reg. No. on File and Vendor VAT Reg. No. on File.
- VAT-VIES reporting supports Danish companies filing VAT declarations for EU trade.
- The EC Sales List report creates the files required for VAT-VIES reporting.
- VAT registration numbers must be set up on customer and vendor cards for VAT-VIES, and online verification is available.

## Learn pages

- [How to print VAT reconciliation reports [DK]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Denmark/how-to-print-vat-reconciliation-reports): In Business Central, the VAT Reconciliation report displays a list of general ledger accounts with their corresponding base amounts and VAT amounts.
- [VAT Registration No. for Intrastat [DK]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Denmark/vat-registration-no-intrastat): Learn how to set up a VAT registration number as specified by the Danish Intrastat requirements.
- [VAT-VIES Reporting [DK]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Denmark/vat-vies-reporting): You can create the required VAT declarations for trade of goods or services file in the Danish version by using the EC Sales List report.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#12943 DK VAT Return Periods regression fix for frequency-aware parsing](../../../../../changes/bcapps/12943.md) (code change): "Danish VAT Return Periods parser now correctly handles the official SKAT API"
- [#9543 Support VAT return reporting frequencies in Denmark](../../../../../changes/bcapps/9543.md) (code change): "Danish electronic VAT declaration now reads SKAT VAT return periods with their reporting"
- [What's New: The Danish Bookkeeping Act (2024 release wave 1)](../../../../../videos/hcu7T3qLdDA.md) (video): "The Danish Bookkeeping Act; SAF-T; certification; audit file export; vat reporting"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

Learn also names 1 object with no object page: page/328.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
