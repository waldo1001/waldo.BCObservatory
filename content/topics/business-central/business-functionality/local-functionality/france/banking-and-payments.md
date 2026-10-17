---
id: topic/business-central/business-functionality/local-functionality/france/banking-and-payments
type: topic
title: Banking & payments
summary: "Banking and payments in the French localization of Business Central: payment management with payment slips, payment classes, statuses, steps and addresses. It answers how to set up, create, export, post and archive payment slips, and how to move setup between companies."
tier: official
language: en
system: localization
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
  input_hash: 9e9d0e6be614acb0d0f6ee7a3e7bdcfd591e3dbdc35ee1ba1734914d2eb645c0
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/France/how-to-archive-payment-slips
    title: Archive Payment Slips [FR]
    date: "2026-10-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/France/how-to-create-payment-slips
    title: Create Payment Slips [FR]
    date: "2026-10-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/France/how-to-export-or-import-payment-management-setup-parameters
    title: Export or Import Payment Management Setup Parameters
    date: "2026-10-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/France/how-to-export-payments
    title: How to Export Payments
    date: "2026-10-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/France/how-to-post-payment-slips
    title: How to Post Payment Slips [FR]
    date: "2026-10-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/France/payment-management
    title: Payment Management [FR]
    date: "2026-10-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/France/how-to-set-up-payment-addresses
    title: Set Up Payment Addresses [FR]
    date: "2026-10-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/France/how-to-set-up-payment-classes
    title: Set Up Payment Classes [FR]
    date: "2026-10-08"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/France/how-to-archive-payment-slips
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/France/how-to-create-payment-slips
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/France/how-to-export-or-import-payment-management-setup-parameters
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/France/how-to-export-payments
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/France/how-to-post-payment-slips
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/France/payment-management
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/France/how-to-set-up-payment-addresses
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/France/how-to-set-up-payment-classes
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/france
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcapps/9140
learn_toc_path:
  - Business functionality
  - Local functionality
  - France
  - Banking & payments
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/local-functionality/france
children: []
coverage:
  learn: 8
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 10860
  - 10861
  - 10864
  - 10865
  - 10866
  - 10867
  - 10868
  - 10869
  - 10870
  - 10871
  - 10872
  - 10873
  - 10874
  - 10877
  - 10878
  - 10879
  - 10880
  - 10882
member_hash: debfff925d6757f38887f3edef35ac800f124346f0782aa9e01007222b5351d2
narrative: generated
---

# Banking & payments

> Banking and payments in the French localization of Business Central: payment management with payment slips, payment classes, statuses, steps and addresses. It answers how to set up, create, export, post and archive payment slips, and how to move setup between companies.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [France](../france.md) > Banking & payments · tier official · system localization · narrative **unreviewed** (model text not yet checked)

## Overview

This section covers the French Payment Management module, which handles customer and vendor payments through payment slips. A payment slip follows a payment class, which defines the operation type (for example bills of exchange, electronic payments or checks) together with its statuses and workflow steps.

Start with the Payment Management [FR] overview page, then set up payment classes and payment addresses. After setup, the pages follow the life of a slip: create it (including vendor payment suggestions and SEPA details), export it as a payment file for the bank, post it, and archive it. A separate page explains how to export or import the setup parameters so that companies with similar needs can reuse them.

## Key points

- Payment classes define operation types such as bills of exchange, electronic payments and checks, with their statuses and steps.
- Payment classes include settings for unrealized VAT reversal, SEPA transfer types and ledger information.
- Payment addresses for vendors and customers can differ from the default address and are used during settlement.
- Payment slips for vendors and customers are created with currency, dates, account details and SEPA information, then turned into payment files for the bank.
- Electronic export works through a text file or an XMLport, depending on how the payment step is configured with a report or XMLport.
- Posting a payment slip creates the related financial data when the payment step action type is set to Ledger.
- Payment slips can be archived manually one by one or in batch on the Archive Payment Slips page, subject to status checks and the Archiving Authorized setting.
- Setup parameters can be exported to external disk and imported into other companies using Export Parameters and Import Parameters.

## Learn pages

- [Archive Payment Slips [FR]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/France/how-to-archive-payment-slips): Learn how to separate a payment slip from the active payment slips by archiving it in the French version of Business Central.
- [Create Payment Slips [FR]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/France/how-to-create-payment-slips): Learn how to create payment slips to manage vendor and customer payments in the French version of Business Central.
- [Export or Import Payment Management Setup Parameters](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/France/how-to-export-or-import-payment-management-setup-parameters): Learn how to export or import payment management setup parameters to an external disk, enabling their reuse for another company with similar requirements.
- [How to Export Payments](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/France/how-to-export-payments): Use the Payment Management module to export your payments electronically via a text file or XMLport.
- [How to Post Payment Slips [FR]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/France/how-to-post-payment-slips): Learn the steps to post payment slips to complete payment transactions and create the associated financial data.
- [Payment Management [FR]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/France/payment-management): Learn how to use the payment management function to manage bills of exchange, electronic payments, and vendor payments in the French version of Business Central.
- [Set Up Payment Addresses [FR]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/France/how-to-set-up-payment-addresses): Learn how to configure payment addresses for vendors and customers to streamline settlement processes.
- [Set Up Payment Classes [FR]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/France/how-to-set-up-payment-classes): Learn how to configure payment classes, payment steps, statuses, and ledger information to manage operation types, such as bills of exchange, electronic payments, or checks.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#9140 Remap object IDs during Payment Management FR data](../../../../../changes/bcapps/9140.md) (code change): "Payment Management FR now automatically remaps legacy report"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

Learn also names 18 objects with no object page: page/10860, page/10861, page/10864, page/10865, page/10866, page/10867, page/10868, page/10869, page/10870, page/10871, page/10872, page/10873, page/10874, page/10877, page/10878, page/10879, page/10880, page/10882.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
