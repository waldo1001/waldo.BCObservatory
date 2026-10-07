---
id: object/interface/peppol-purchase-party-info-provider
type: object
title: Interface "PEPPOL Purchase Party Info Provider"
summary: Interface "PEPPOL Purchase Party Info Provider" in PEPPOL (Microsoft.Peppol). 8 public procedures. Introduced in BC29, still in BC30.
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
  at: "2026-10-07T21:07:03.029Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: a0521d5e056e856f7487f0dc5a6978f01a0e152ceabe0eade25f3bb50b474feb
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Apps/W1/PEPPOL/app/src/Interfaces/PEPPOLPurchasePartyInfoProvider.Interface.al
    title: src/Apps/W1/PEPPOL/app/src/Interfaces/PEPPOLPurchasePartyInfoProvider.Interface.al (releases/29.x)
    date: null
    commit: fe31a4253b4aa8fde426364f132f5689d4dfcddf
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
name: PEPPOL Purchase Party Info Provider
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
  procedures: 8
  events: 0
  subscribers: 0
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
  calls: 0
  called_by: 0
  implements: 0
  implemented_by: 0
---

# Interface "PEPPOL Purchase Party Info Provider"

> Interface "PEPPOL Purchase Party Info Provider" in PEPPOL (Microsoft.Peppol). 8 public procedures. Introduced in BC29, still in BC30.

PEPPOL · Microsoft.Peppol · BC29-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Apps/W1/PEPPOL/app/src/Interfaces/PEPPOLPurchasePartyInfoProvider.Interface.al) · facts from BC29

## Procedures

- `GetAccountingSupplierPartyInfoBIS(var SupplierEndpointID: Text; var SupplierSchemeID: Text; var SupplierName: Text)`
- `GetAccountingSupplierPartyLegalEntityBIS(var PartyLegalEntityRegName: Text; var PartyLegalEntityCompanyID: Text; var PartyLegalEntitySchemeID: Text; var SupplierRegAddrCityName: Text; var SupplierRegAddrCountryIdCode: Text; var SupplRegAddrCountryIdListId: Text)`: Gets accounting supplier (buyer) party legal entity information for PEPPOL BIS format from company information.
- `GetAccountingSupplierPartyTaxScheme(var CompanyID: Text; var CompanyIDSchemeID: Text; var TaxSchemeID: Text)`: Gets accounting supplier (buyer) party tax scheme information from company information.
- `GetSellerSupplierPartyInfoBIS(PurchaseHeader: Record "Purchase Header"; var SellerSupplierPartyEndpointId: Text; var SellerSupplierPartySchemeID: Text; var SellerSupplierPartySupplierName: Text)`: Gets seller supplier (vendor) party information for BIS format from the purchase header.
- `GetSellerSupplierPartyPostalAddr(PurchaseHeader: Record "Purchase Header"; var SellerSupplierStreetName: Text; var SellerSupplierAdditionalStreetName: Text; var SellerSupplierPartyCityName: Text; var SellerSupplierPartyPostalZone: Text; var SellerSupplierPartyCountrySubentity: Text; var SellerSupplierPartyIdentificationCode: Text; var ListID: Text)`: Gets seller supplier (vendor) party postal address information from the purchase header.
- `GetSellerSupplierPartyContact(PurchaseHeader: Record "Purchase Header"; var ContactName: Text; var ContactPhone: Text; var ContactTelefax: Text; var ContactEmail: Text)`: Gets seller supplier (vendor) party contact information from the purchase header.
- `GetBuyerCustomerPartyPostalAddr(PurchaseHeader: Record "Purchase Header"; var StreetName: Text; var BuyerCustomerAdditionalStreetName: Text; var CityName: Text; var PostalZone: Text; var CountrySubentity: Text; var IdentificationCode: Text; var ListID: Text)`: Gets buyer customer party postal address information from the purchase header.
- `GetBuyerCustomerPartyContact(PurchaseHeader: Record "Purchase Header"; var BuyerCustomerPartyContactName: Text; var BuyerCustomerPartyContactPhone: Text; var BuyerCustomerPartyContactEmail: Text)`: Gets buyer customer party contact information from the purchase header.

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "interface", object_name: "PEPPOL Purchase Party Info Provider")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node interface "PEPPOL Purchase Party Info Provider"`

## Across versions

- Present in: BC29-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
