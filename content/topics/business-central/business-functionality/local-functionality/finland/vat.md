---
id: topic/business-central/business-functionality/local-functionality/finland/vat
type: topic
title: VAT
summary: "Finland VAT localization in Business Central: printing Finnish Intrastat reports, printing VAT information on sales invoices, and the VAT-VIES declaration with the EC sales list. It answers questions about Finnish VAT and EU trade reporting."
tier: official
language: en
system: finance
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-17T01:13:14.128Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: abc7ee2d482af8300b0f528db115027ad882c2c230b465b731056343aa6b7f1b
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Finland/how-to-print-finnish-intrastat-reports
    title: How to Print Finnish Intrastat Reports
    date: "2026-10-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Finland/how-to-print-vat-information-on-invoices
    title: How to print VAT information on invoices [FI]
    date: "2026-10-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Finland/vat-vies-declaration-in-finland
    title: VAT-VIES declaration in Finland
    date: "2026-10-08"
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

> Finland VAT localization in Business Central: printing Finnish Intrastat reports, printing VAT information on sales invoices, and the VAT-VIES declaration with the EC sales list. It answers questions about Finnish VAT and EU trade reporting.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Finland](../finland.md) > VAT · tier official · system finance · narrative **unreviewed** (model text not yet checked)

## Overview

This section covers three Finland-specific VAT and EU trade reporting tasks. Each is a standalone page, and there are no subtopics.

The Intrastat page explains how to print Finnish Intrastat reports, so goods movements can be reported to the authorities by file submission or manual form entry. The VAT-VIES page covers reporting VAT and EC sales list information to the Finnish tax authorities. The invoice page explains how to print VAT information on sales invoices by using VAT posting groups.

Start with the page that matches your reporting duty: Intrastat for goods movements within the EU, VAT-VIES for VAT and EC sales list reporting, or the invoice page for VAT text on sales documents.

## Key points

- Finnish Intrastat reports are printed to meet EU trade compliance for goods movements.
- Intrastat data can be sent to the authorities by file submission or entered manually on a form.
- The VAT-VIES declaration reports VAT and EC sales list information to Finnish tax authorities.
- VAT information on Finnish sales invoices is controlled through VAT posting groups.
- The Print on Invoice setting is discontinued but remains for backward compatibility.

## Learn pages

- [How to Print Finnish Intrastat Reports](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Finland/how-to-print-finnish-intrastat-reports): This article explains how to print Finnish Intrastat Reports to report the movement of goods to the Intrastat authorities.
- [How to print VAT information on invoices [FI]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Finland/how-to-print-vat-information-on-invoices): This article explains how you can use posting groups to print VAT information for each item on the sales invoice.
- [VAT-VIES declaration in Finland](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Finland/vat-vies-declaration-in-finland): Finnish enhancements allow you to comply with regulations for VAT and European Union (EU) sales reporting.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#9362 [FI] Delocalize FI VAT-VIES Declaration report into FI Core](../../../../../changes/bcapps/9362.md) (code change): "Finnish VAT-VIES Declaration report is moved from a localized FI BaseApp"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
