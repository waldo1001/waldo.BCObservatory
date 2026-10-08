---
id: topic/business-central/business-functionality/local-functionality/finland/vat
type: topic
title: VAT
summary: "Finnish VAT functionality in Business Central: printing Intrastat reports, showing VAT information on sales invoices, and the VAT-VIES declaration. It answers questions on Finnish VAT and EU trade reporting."
tier: official
language: en
system: finance
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:27:25.276Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 09c5548a3ed97714124407c7f375c64aa288fb2605ce426cc8ec16768f9f2e1d
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Finland/how-to-print-finnish-intrastat-reports
    title: How to Print Finnish Intrastat Reports
    date: "2025-02-12"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Finland/how-to-print-vat-information-on-invoices
    title: How to print VAT information on invoices [FI]
    date: "2025-02-13"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Finland/vat-vies-declaration-in-finland
    title: VAT-VIES declaration in Finland
    date: "2025-02-13"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Finland/how-to-print-finnish-intrastat-reports
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Finland/how-to-print-vat-information-on-invoices
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Finland/vat-vies-declaration-in-finland
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/finland
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcapps/9362
learn_toc_path:
  - Business functionality
  - Local functionality
  - Finland
  - VAT
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/local-functionality/finland
children: []
coverage:
  learn: 3
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 4ec8872f5a33eb079be5785fba71608f82bed96abcd4f3998f00b0c2f6d8cfa8
narrative: generated
---

# VAT

> Finnish VAT functionality in Business Central: printing Intrastat reports, showing VAT information on sales invoices, and the VAT-VIES declaration. It answers questions on Finnish VAT and EU trade reporting.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Finland](../finland.md) > VAT · tier official · system finance · narrative reviewed (checked by Opus)

## Overview

This section covers three Finland-specific VAT and tax reporting topics. Each is a single page and there are no subtopics, so you can read them independently.

One page explains Finnish Intrastat reports, which EU companies use to report trade movements with other EU countries, and the options for filing them. Another covers the VAT-VIES declaration, a tax reporting requirement that includes the EC sales list. The third explains how to print VAT information on sales invoices using VAT posting groups, so tax details appear for each item at line level.

Start with the page that matches your task: invoice layout for VAT on documents, the VAT-VIES page for EC sales reporting, or the Intrastat page for trade movement reporting.

## Key points

- Finnish Intrastat reports cover trade movements with other EU countries and can be filed as a file or entered manually on a form.
- VAT-VIES declaration is a Finnish tax reporting requirement and relates to the EC sales list.
- VAT information on sales invoices is printed using VAT posting groups.
- VAT amounts are shown at line level for each item on invoices to support tax compliance.
- The section has three pages and no subtopics.

## Learn pages

- [How to Print Finnish Intrastat Reports](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Finland/how-to-print-finnish-intrastat-reports): This article explains how to print Finnish Intrastat Reports to report the movement of goods to the Intrastat authorities.
- [How to print VAT information on invoices [FI]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Finland/how-to-print-vat-information-on-invoices): This article explains how you can use posting groups to print VAT information for each item on the sales invoice.
- [VAT-VIES declaration in Finland](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Finland/vat-vies-declaration-in-finland): Finnish enhancements allow you to comply with regulations for VAT and European Union (EU) sales reporting.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#9362 [FI] Delocalize FI VAT-VIES Declaration report into FI Core](../../../../../changes/bcapps/9362.md) (code change): "Finnish VAT-VIES Declaration report is moved from a localized FI BaseApp"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
