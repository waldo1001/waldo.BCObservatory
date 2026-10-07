---
id: object/interface/peppol-purchase-line-info-provider
type: object
title: Interface "PEPPOL Purchase Line Info Provider"
summary: Interface "PEPPOL Purchase Line Info Provider" in PEPPOL (Microsoft.Peppol). 5 public procedures. Introduced in BC29, still in BC30.
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
  at: "2026-10-07T09:46:58.909Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: a9c749cddc49dd5f15db7eb9c981b1abd54ab60068ebef7c6b231d1a1b50b419
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/Apps/W1/PEPPOL/app/src/Interfaces/PEPPOLPurchaseLineInfoProvider.Interface.al
    title: src/Apps/W1/PEPPOL/app/src/Interfaces/PEPPOLPurchaseLineInfoProvider.Interface.al (releases/29.x)
    date: null
    commit: 1d24dd5ee2a734510f0556ccc69342d0e616db2f
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
name: PEPPOL Purchase Line Info Provider
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
  procedures: 5
  events: 0
  subscribers: 0
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Interface "PEPPOL Purchase Line Info Provider"

> Interface "PEPPOL Purchase Line Info Provider" in PEPPOL (Microsoft.Peppol). 5 public procedures. Introduced in BC29, still in BC30.

PEPPOL · Microsoft.Peppol · BC29-30 · [source at 1d24dd5e](https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/Apps/W1/PEPPOL/app/src/Interfaces/PEPPOLPurchaseLineInfoProvider.Interface.al) · facts from BC29

## Procedures

- `GetLineGeneralInfo(PurchaseLine: Record "Purchase Line"; PurchaseHeader: Record "Purchase Header"; var InvoiceLineID: Text; var InvoiceLineNote: Text; var InvoicedQuantity: Text; var InvoiceLineExtensionAmount: Text; var LineExtensionAmountCurrencyID: Text; var InvoiceLineAccountingCost: Text)`
- `GetLineUnitCodeInfo(PurchaseLine: Record "Purchase Line"; var unitCode: Text; var unitCodeListID: Text)`: Gets unit code information for the purchase line.
- `GetLineItemInfo(PurchaseLine: Record "Purchase Line"; var Description: Text; var Name: Text; var SellersItemIdentificationID: Text; var StandardItemIdentificationID: Text; var StdItemIdIDSchemeID: Text; var OriginCountryIdCode: Text; var OriginCountryIdCodeListID: Text)`: Gets item information for the purchase line including description, name, item identification codes, and origin country.
- `GetLineItemClassifiedTaxCategory(PurchaseLine: Record "Purchase Line"; var ClassifiedTaxCategoryID: Text; var ItemSchemeID: Text; var InvoiceLineTaxPercent: Text; var ClassifiedTaxCategorySchemeID: Text)`: Gets classified tax category information for the purchase line item.
- `GetLinePriceInfo(PurchaseLine: Record "Purchase Line"; PurchaseHeader: Record "Purchase Header"; var InvoiceLinePriceAmount: Text; var InvLinePriceAmountCurrencyID: Text; var BaseQuantity: Text; var UnitCode: Text)`: Gets price information for the purchase line.

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
