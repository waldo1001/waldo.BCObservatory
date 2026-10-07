---
id: topic/business-central/business-functionality/local-functionality/belgium/general
type: topic
title: General
summary: "Belgium general local functionality in Business Central: posting period limits, work date as posting date, mandatory journal templates, deferrals in Sales and Purchase ledger reports, and Belgian enterprise and branch numbers. It answers setup questions for Belgian bookkeeping and reporting."
tier: official
language: en
system: localization
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:24:02.126Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: f0feca6226982229fc8a7f5241d207865687657bde0b15b6e639e711220a536b
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Belgium/how-to-use-deferrals
    title: Deferrals in Sales ledger and Purchase ledger reports
    date: "2025-04-04"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Belgium/enterprise-numbers-and-branch-numbers
    title: Enterprise Numbers and Branch Numbers [BE]
    date: "2025-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Belgium/how-to-limit-the-posting-period
    title: How to Limit the Posting Period [BE]
    date: "2025-04-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Belgium/how-to-set-the-work-date-as-the-posting-date
    title: How to Set the Work Date as the Posting Date [BE]
    date: "2025-04-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Belgium/specify-journal-template-mandatory
    title: Make Journal Templates Mandatory [BE]
    date: "2025-04-04"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Belgium/how-to-use-deferrals
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Belgium/enterprise-numbers-and-branch-numbers
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Belgium/how-to-limit-the-posting-period
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Belgium/how-to-set-the-work-date-as-the-posting-date
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Belgium/specify-journal-template-mandatory
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
  - General
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/local-functionality/belgium
children: []
coverage:
  learn: 5
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 279
  - 1700
  - 1701
member_hash: ce361231eb6ff1f9701442e0b9c92f533d9ba427dbbd762bb5a862a71276a7c3
narrative: generated
---

# General

> Belgium general local functionality in Business Central: posting period limits, work date as posting date, mandatory journal templates, deferrals in Sales and Purchase ledger reports, and Belgian enterprise and branch numbers. It answers setup questions for Belgian bookkeeping and reporting.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Belgium](../belgium.md) > General · tier official · system localization · narrative reviewed by Opus

## Overview

This section collects five short pages on Belgium-specific setup and behavior. Most of them describe fields in General Ledger Setup or related setup pages that control how and when transactions are posted.

Three pages deal with posting control: limiting the posting period at company, user, or journal template level (useful for Belgian monthly journal closure), using the work date as the posting date when applying or unapplying entries, and making journal templates mandatory with defaults for sales and purchase documents. A fourth page explains how to exclude deferral entries from the Sales ledger and Purchase ledger reports. The last page covers enterprise numbers and branch numbers from the Crossroads Bank for Enterprises.

Start with the posting period and journal template pages if you are setting up a new Belgian company. Use the deferral page when ledger reports show deferral entries you want to hide. The enterprise number page is a reference for identification on documents.

## Key points

- Posting periods can be limited with Allow Posting From and Allow Posting To at company, user, or journal template level.
- Enabling Use Workdate for Appl./Unappl. in General Ledger Setup makes the work date the posting date when applying customer or vendor entries.
- Journal Template Name Mandatory in General Ledger Setup makes journal templates required in the Belgian version.
- Default journal templates for sales and purchase documents are set on the Journal Templates FastTab.
- Deferral entries can be excluded from Sales and Purchase ledger reports by setting source codes for deferrals and using the Exclude Deferral Entries option.
- Source Code Setup covers General, Sales, and Purchase deferral source codes.
- Enterprise numbers and branch numbers come from the Crossroads Bank for Enterprises and are used on business documents and correspondence, alongside the VAT registration number.

## Learn pages

- [Deferrals in Sales ledger and Purchase ledger reports](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Belgium/how-to-use-deferrals): Learn how to set up and use deferrals in Sales ledger and Purchase ledger reports in the Belgian version of Business Central.
- [Enterprise Numbers and Branch Numbers [BE]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Belgium/enterprise-numbers-and-branch-numbers): Companies receive a unique enterprise number and branch numbers by the Belgian Crossroad Bank of Enterprises.
- [How to Limit the Posting Period [BE]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Belgium/how-to-limit-the-posting-period): Understand the methods to limit the posting period at three distinct levels - company-wide, user-specific, and template-based.
- [How to Set the Work Date as the Posting Date [BE]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Belgium/how-to-set-the-work-date-as-the-posting-date): Set the general ledger to use the work date as the posting date for customer or vendor open entries on invoices, payments, or credit memos.
- [Make Journal Templates Mandatory [BE]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Belgium/specify-journal-template-mandatory): Learn how to make the use of journal templates required in the Belgian version.

## Business Central pages and reports

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 279, 1700, 1701.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
