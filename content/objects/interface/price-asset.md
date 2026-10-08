---
id: object/interface/price-asset
type: object
title: Interface "Price Asset"
summary: Interface "Price Asset" in Base Application (Microsoft.Pricing.Asset). 11 public procedures. Present since at least BC23, still in BC30.
tier: official
language: en
tags:
  - interface
  - base application
versions:
  introduced: null
  last_changed: null
  deprecated: null
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T23:32:29.863Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 4f2890be23b6b27ba3b630fdebfe1fbfeb8a451fc468fad8efac66c876ca34a8
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Layers/W1/BaseApp/Pricing/Asset/PriceAsset.Interface.al
    title: src/Layers/W1/BaseApp/Pricing/Asset/PriceAsset.Interface.al (releases/29.x)
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
name: Price Asset
namespace: Microsoft.Pricing.Asset
app: Base Application
extends: null
first_version: "23"
last_version: "30"
present_in:
  - "23"
  - "24"
  - "25"
  - "26"
  - "27"
  - "28"
  - "29"
  - "30"
changed_in: []
source_major: "29"
obsolete: null
countries: []
ms_search_form_ids: []
counts:
  fields: 0
  procedures: 11
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
  implemented_by: 8
---

# Interface "Price Asset"

> Interface "Price Asset" in Base Application (Microsoft.Pricing.Asset). 11 public procedures. Present since at least BC23, still in BC30.

Base Application · Microsoft.Pricing.Asset · BC23-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Layers/W1/BaseApp/Pricing/Asset/PriceAsset.Interface.al) · facts from BC29

## Procedures

- `GetNo(var PriceAsset: Record "Price Asset")`
- `GetId(var PriceAsset: Record "Price Asset")`: The method fills the Price Asset parameter with "Asset ID" and other data from the asset defined in the implementation codeunit.
- `IsLookupOK(var PriceAsset: Record "Price Asset"): Boolean`: The method runs the modal page for looking up for an asset.
- `ValidateUnitOfMeasure(var PriceAsset: Record "Price Asset"): Boolean`: The method validates if the unit of measure exists for the asset. Not used. This validation should happen in IsLookupUnitOfMeasureOK.
- `IsLookupUnitOfMeasureOK(var PriceAsset: Record "Price Asset"): Boolean`: The method runs the modal page for looking up for a unit of measure.
- `IsLookupVariantOK(var PriceAsset: Record "Price Asset"): Boolean`: The method runs the modal page for looking up for an item variant.
- `IsAssetNoRequired(): Boolean`: The method should return true for an asset that requires "Asset No." to be filled. In W1 returns false just for one asset type - All.
- `FillBestLine(PriceCalculationBuffer: Record "Price Calculation Buffer"; AmountType: Enum "Price Amount Type"; var PriceListLine: Record "Price List Line")`: The method is called in case there is no a price list line that matches all filters defined by the document/journal line. As a result, the PriceListLine parameter gets pricing data from an asset card or another source.
- `FilterPriceLines(PriceAsset: Record "Price Asset"; var PriceListLine: Record "Price List Line"): Boolean`: The method should add the filters for PriceListLine related to the PriceAsset, e.g., besides "Asset Type" and "Asset No." Item adds "Varian Code", Resource adds "Work Type Code"
- `PutRelatedAssetsToList(PriceAsset: Record "Price Asset"; var PriceAssetList: Codeunit "Price Asset List")`: The method should add assets related to the current one to build the multi-level PriceAssetList. E.g., a resource asset can add up to two levels: "Resource Group" and "All resources" to setup the hierarchical search, while an item asset adds "Item Discount Group" at the same level as "Item" is, so b...
- `FillFromBuffer(var PriceAsset: Record "Price Asset"; PriceCalculationBuffer: Record "Price Calculation Buffer")`: The method should fill the PriceAsset with asset related data from the PriceCalculationBuffer. Used in Add() method of the "Price Asset List" codeunit.

## Implemented by

- [Codeunit 7040 "Price Asset - All"](../codeunit/7040.md)
- [Codeunit 7041 "Price Asset - Item"](../codeunit/7041.md)
- [Codeunit 7042 "Price Asset - Item Disc. Group"](../codeunit/7042.md)
- [Codeunit 7043 "Price Asset - Resource"](../codeunit/7043.md)
- [Codeunit 7044 "Price Asset - Resource Group"](../codeunit/7044.md)
- [Codeunit 7045 "Price Asset - Service Cost"](../codeunit/7045.md)
- [Codeunit 7046 "Price Asset - G/L Account"](../codeunit/7046.md)
- [Enum 7004 "Price Asset Type"](../enum/7004.md)

## Across versions

- Present in: BC23-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). The call sections above are our own, per object, from the BC29 call graph. For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "interface", object_name: "Price Asset")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
