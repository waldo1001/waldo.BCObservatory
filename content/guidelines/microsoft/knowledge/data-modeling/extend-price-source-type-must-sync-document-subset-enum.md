---
id: guideline/microsoft/knowledge/data-modeling/extend-price-source-type-must-sync-document-subset-enum
type: guideline
title: Extend Price Source Type and its matching document subset enum together, with the same ID
summary: enum 7003 "Price Source Type" (implements "Price Source", "Price Source Group") is the base list of who a price can apply to — Customer, Vendor, Customer Price Group, Campaign, and so on. It is not, by itself, what drives the "Applies-to Type" field on an actual sales, purchase, or job price list.
tier: official
language: en
tags:
  - price-calculation
  - price-source
  - price-source-type
  - enumextension
  - pricing
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:36.775Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 02e628729807ed0cd9b3098d4d0e1c79de994b6c
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/extend-price-source-type-must-sync-document-subset-enum.md
    title: "microsoft/BCQuality: Extend Price Source Type and its matching document subset enum together, with the same ID"
    date: "2026-09-30"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/enum/7003
    - object/enum/7006
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/175
  related:
    - to: object/enum/7007
      title: enum 7007 "Purchase Price Source Type"
      label: possibly related
      why: a code span in the rule names it
      by: code
repo_path: microsoft/knowledge/data-modeling/extend-price-source-type-must-sync-document-subset-enum.md
layer: microsoft
kind: rule
domain: data-modeling
bc_version:
  - all
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 2
identifiers: []
---

# Extend Price Source Type and its matching document subset enum together, with the same ID

> enum 7003 "Price Source Type" (implements "Price Source", "Price Source Group") is the base list of who a price can apply to — Customer, Vendor, Customer Price Group, Campaign, and so on. It is not, by itself, what drives the "Applies-to Type" field on an actual sales, purchase, or job price list.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/extend-price-source-type-must-sync-document-subset-enum.md) · microsoft layer · data-modeling · BC all · tier official · derived

## Description

`enum 7003 "Price Source Type"` (`implements "Price Source", "Price Source
Group"`) is the base list of who a price can apply to — Customer, Vendor,
Customer Price Group, Campaign, and so on. It is not, by itself, what
drives the "Applies-to Type" field on an actual sales, purchase, or job
price list. Each document area has its own subset enum —
`enum 7006 "Sales Price Source Type"`, the equivalent purchase and job
enums — and these are what the price list pages actually expose. Every
value the two enums share today uses the identical numeric ID: `All
Customers`/`Customer`/`Customer Price Group`/`Customer Disc.
Group`/`Campaign`/`Contact` are 10/11/12/13/50/51 in both `Price Source
Type` and `Sales Price Source Type`.

Adding a new value to `Price Source Type` alone does nothing for a sales
price list: the base enum and the document subset enum are two separate
extensible enums, linked only by convention, not by any platform
mechanism that keeps their IDs in sync. Give the new value a different ID
in each enum, or extend only the base enum, and the source is real and
selectable in some contexts (the base enum is used elsewhere, such as
the generic `Price Source` table) but absent from the specific document
price list a developer actually tested against.

## Best Practice

When a new price source should be usable in a sales, purchase, or job
price list, extend `Price Source Type` and the matching document subset
enum (`Sales Price Source Type`, `Purchase Price Source Type`, `Job Price
Source Type`) together, using the identical numeric ID in both.

See sample: [`extend-price-source-type-must-sync-document-subset-enum.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/extend-price-source-type-must-sync-document-subset-enum.good.al).

## Anti Pattern

Extending `Price Source Type` with a new value intended for sales price
lists, without extending `Sales Price Source Type` with a value of the
same ID — or giving it a different ID. Either way, the new source is
absent from the "Applies-to Type" options on an actual sales price list,
with no error anywhere: the base enum extension compiles and installs
cleanly on its own.

See sample: [`extend-price-source-type-must-sync-document-subset-enum.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/extend-price-source-type-must-sync-document-subset-enum.bad.al).

## Source

BCApps (`src/Layers/W1/BaseApp/`): `Pricing/Source/PriceSourceType.Enum.al`
(`enum 7003 "Price Source Type"`, values `10/11/12/13/50/51` for `All
Customers`/`Customer`/`Customer Price Group`/`Customer Disc.
Group`/`Campaign`/`Contact`) and `Sales/Pricing/SalesPriceSourceType.Enum.al`
(`enum 7006 "Sales Price Source Type"`, the same six values at the same
six IDs). Microsoft Learn, "Extending Price Calculations": "The Price
Source Type enum implements the Applies-to Type field in the header of
the price list. Additionally, the Sales Price Source Type, Purchase Price
Source Type, and Job Price Source Type are subsets of the Price Source
Type enum... For compatibility, the new value must have the same ID in
both enums."
(https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-extending-best-price-calculations)

## Examples

- [Good: extend-price-source-type-must-sync-document-subset-enum.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/extend-price-source-type-must-sync-document-subset-enum.good.al)
- [Bad: extend-price-source-type-must-sync-document-subset-enum.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/extend-price-source-type-must-sync-document-subset-enum.bad.al)

## Names

- [enum 7003 "Price Source Type"](../../../../objects/enum/7003.md) (names this object)
- [enum 7006 "Sales Price Source Type"](../../../../objects/enum/7006.md) (names this object)
- [enum 7007 "Purchase Price Source Type"](../../../../objects/enum/7007.md) (possibly related: a code span names it)

## Changed by

- [#175 9 AL/BC patterns: document distribution, price calculation & barcode extensibility](../../../../changes/bcquality/175.md), 2026-09-30

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
