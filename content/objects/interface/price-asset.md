---
id: object/interface/price-asset
type: object
title: Interface "Price Asset"
summary: Interface "Price Asset" in Base Application (Microsoft.Pricing.Asset). 11 public procedures. Present since at least BC28, still in BC30.
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
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T09:46:58.909Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: bfa9531cc9a39c3d281f9615e2951a9d15be49a6a6c77d3c6a6e7c6f529c3122
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/Layers/W1/BaseApp/Pricing/Asset/PriceAsset.Interface.al
    title: src/Layers/W1/BaseApp/Pricing/Asset/PriceAsset.Interface.al (releases/29.x)
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
name: Price Asset
namespace: Microsoft.Pricing.Asset
app: Base Application
extends: null
first_version: "28"
last_version: "30"
present_in:
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
---

# Interface "Price Asset"

> Interface "Price Asset" in Base Application (Microsoft.Pricing.Asset). 11 public procedures. Present since at least BC28, still in BC30.

Base Application · Microsoft.Pricing.Asset · BC28-30 · [source at 1d24dd5e](https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/Layers/W1/BaseApp/Pricing/Asset/PriceAsset.Interface.al) · facts from BC29

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

## Across versions

- Present in: BC28, BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
