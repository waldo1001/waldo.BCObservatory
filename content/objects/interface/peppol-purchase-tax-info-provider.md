---
id: object/interface/peppol-purchase-tax-info-provider
type: object
title: Interface "PEPPOL Purchase Tax Info Provider"
summary: Interface "PEPPOL Purchase Tax Info Provider" in PEPPOL (Microsoft.Peppol). 2 public procedures. Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - interface
  - peppol
versions:
  introduced: "29"
  last_changed: null
  deprecated: null
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-06T17:21:46.353Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 2cb93025772438f61b95f8d32d09b18905f289c07056c99837106c9be491d0a1
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/PEPPOL/app/src/Interfaces/PEPPOLPurchaseTaxInfoProvider.Interface.al
    title: src/Apps/W1/PEPPOL/app/src/Interfaces/PEPPOLPurchaseTaxInfoProvider.Interface.al (releases/29.x)
    date: null
    commit: d7c9c667c671da2cda3a0738b18ed99ca4181765
    t: null
    quote: null
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
object_type: interface
object_id: null
name: PEPPOL Purchase Tax Info Provider
namespace: Microsoft.Peppol
app: PEPPOL
extends: null
first_version: "29"
last_version: "30"
present_in:
  - "29"
  - "30"
changed_in: []
source_major: "29"
obsolete: null
countries: []
ms_search_form_ids: []
counts:
  fields: 0
  procedures: 2
  events: 0
  subscribers: 0
---

# Interface "PEPPOL Purchase Tax Info Provider"

> Interface "PEPPOL Purchase Tax Info Provider" in PEPPOL (Microsoft.Peppol). 2 public procedures. Introduced in BC29, still in BC30.

PEPPOL · Microsoft.Peppol · BC29-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/PEPPOL/app/src/Interfaces/PEPPOLPurchaseTaxInfoProvider.Interface.al) · facts from BC29

## Procedures

- `GetTaxTotals(PurchaseLine: Record "Purchase Line"; var VATAmtLine: Record "VAT Amount Line")`
- `GetTaxCategories(PurchaseLine: Record "Purchase Line"; var VATProductPostingGroupCategory: Record "VAT Product Posting Group")`: Gets tax categories from the purchase line and populates VAT product posting group category information.

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
