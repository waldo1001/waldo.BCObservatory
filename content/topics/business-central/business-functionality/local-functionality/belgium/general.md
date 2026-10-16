---
id: topic/business-central/business-functionality/local-functionality/belgium/general
type: topic
title: General
summary: "Belgian general localization in Business Central: setup for deferrals in ledger reports, enterprise and branch numbers, posting period limits, work date as posting date, and mandatory journal templates. It answers how to configure these Belgium-specific accounting and compliance settings."
tier: official
language: en
system: localization
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-16T01:18:16.191Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: ac0e993a2b3735166b5c46ed23fa78eb687e7fdfca141c6e4ddc87491a2fe60e
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Belgium/how-to-use-deferrals
    title: Deferrals in Sales ledger and Purchase ledger reports
    date: "2026-10-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Belgium/enterprise-numbers-and-branch-numbers
    title: Enterprise Numbers and Branch Numbers [BE]
    date: "2026-10-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Belgium/how-to-limit-the-posting-period
    title: How to Limit the Posting Period [BE]
    date: "2026-10-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Belgium/how-to-set-the-work-date-as-the-posting-date
    title: How to Set the Work Date as the Posting Date [BE]
    date: "2026-10-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Belgium/specify-journal-template-mandatory
    title: Make Journal Templates Mandatory [BE]
    date: "2026-10-08"
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
  objects:
    - object/page/279
    - object/page/1700
    - object/page/1701
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
  code: 3
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

> Belgian general localization in Business Central: setup for deferrals in ledger reports, enterprise and branch numbers, posting period limits, work date as posting date, and mandatory journal templates. It answers how to configure these Belgium-specific accounting and compliance settings.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Belgium](../belgium.md) > General · tier official · system localization · narrative **unreviewed** (model text not yet checked)

## Overview

This section collects the Belgium-specific setup topics that apply across the whole Business Central company. Each page covers one configuration task: reporting of deferrals, identifying companies, controlling posting dates, and enforcing journal templates.

The pages are independent how-to articles with no subtopics. Start with the topic that matches your task. For compliance and reporting, read the pages on enterprise and branch numbers and on deferrals in Sales and Purchase ledger reports. For posting control, read the pages on limiting the posting period, setting the work date as posting date, and making journal templates mandatory.

## Key points

- Deferrals: set the General, Sales and Purchase Deferral source codes in Source Code Setup and use Exclude Deferral Entries so Sales and Purchase ledger reports show original invoice and credit memo entries, not entries created by deferrals.
- Enterprise No. and Branch No. fields identify a company and its business locations and are validated with a modulo-97 check.
- Enterprise numbers can print on sales documents, purchase documents and financial statements.
- Posting periods can be limited by company, user or journal template using the Allow Posting From/To and Allow Posting Date From/To fields.
- A typical use of journal template limits is closing sales journals monthly while keeping purchase journals open.
- The Use Workdate for Appl./Unappl. setting makes the work date the posting date for customer or vendor entries such as invoices, payments and credit memos.
- Enable Journal Templ. Name Mandatory in General Ledger Setup to require journal templates, and set default templates for sales and purchase documents.

## Learn pages

- [Deferrals in Sales ledger and Purchase ledger reports](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Belgium/how-to-use-deferrals): Learn how to set up and use deferrals in Sales ledger and Purchase ledger reports in the Belgian version of Business Central.
- [Enterprise Numbers and Branch Numbers [BE]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Belgium/enterprise-numbers-and-branch-numbers): Companies receive a unique enterprise number and branch numbers by the Belgian Crossroad Bank of Enterprises.
- [How to Limit the Posting Period [BE]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Belgium/how-to-limit-the-posting-period): Understand the methods to limit the posting period at three distinct levels - company-wide, user-specific, and template-based.
- [How to Set the Work Date as the Posting Date [BE]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Belgium/how-to-set-the-work-date-as-the-posting-date): Set the general ledger to use the work date as the posting date for customer or vendor open entries on invoices, payments, or credit memos.
- [Make Journal Templates Mandatory [BE]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Belgium/specify-journal-template-mandatory): Learn how to make the use of journal templates required in the Belgian version.

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 279 "Source Code Setup"](../../../../../objects/page/279.md) · on [Table 242 "Source Code Setup"](../../../../../objects/table/242.md)
- [Page 1700 "Deferral Template Card"](../../../../../objects/page/1700.md) · on [Table 1700 "Deferral Template"](../../../../../objects/table/1700.md)
- [Page 1701 "Deferral Template List"](../../../../../objects/page/1701.md) · captioned "Deferral Templates" · on [Table 1700 "Deferral Template"](../../../../../objects/table/1700.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
