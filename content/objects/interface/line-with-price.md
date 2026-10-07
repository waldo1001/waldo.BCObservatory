---
id: object/interface/line-with-price
type: object
title: Interface "Line With Price"
summary: Interface "Line With Price" in Base Application (Microsoft.Pricing.PriceList). 16 public procedures. Present since at least BC28, still in BC30.
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
  at: "2026-10-06T23:56:28.878Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 578044641a9b4745e40b87427e5960b2d6650f28676dd3b1917638c362762819
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Layers/W1/BaseApp/Pricing/PriceList/LineWithPrice.Interface.al
    title: src/Layers/W1/BaseApp/Pricing/PriceList/LineWithPrice.Interface.al (releases/29.x)
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
name: Line With Price
namespace: Microsoft.Pricing.PriceList
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
  procedures: 16
  events: 0
  subscribers: 0
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Interface "Line With Price"

> Interface "Line With Price" in Base Application (Microsoft.Pricing.PriceList). 16 public procedures. Present since at least BC28, still in BC30.

Base Application · Microsoft.Pricing.PriceList · BC28-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Layers/W1/BaseApp/Pricing/PriceList/LineWithPrice.Interface.al) · facts from BC29

## Procedures

- `GetTableNo(): Integer`
- `SetLine(PriceType: Enum "Price Type"; Line: Variant)`: Setup the internal record line. Applicable for the journal lines that does not have a header record. The PriceType parameter defines what type of price is going to be calculated.
- `SetLine(PriceType: Enum "Price Type"; Header: Variant; Line: Variant)`: Setup the internal records - line and header. Applicable for the document lines. The PriceType parameter defines what type of price is going to be calculated.
- `SetSources(var NewPriceSourceList: codeunit "Price Source List")`: This method allows to overwrite the internal price source list that is normally filled by SetLine() method.
- `GetLine(var Line: Variant)`: After the calculations are done this method allows to get the updated internal record line.
- `GetLine(var Header: Variant; var Line: Variant)`: After the calculations are done this method allows to get the updated internal record line and header.
- `GetAssetType(): Enum "Price Asset Type"`: Returns the asset type of the internal record line.
- `GetPriceType(): Enum "Price Type"`: Returns the price type that was set by the SetLine() method.
- `IsPriceUpdateNeeded(AmountType: enum "Price Amount Type"; FoundPrice: Boolean; CalledByFieldNo: Integer): Boolean`: This method defines if the source line should be updated after the search for a price list line is done.
- `IsDiscountAllowed(): Boolean`: The calculation of the price defines if the discount allowed for this line. This method should be called after the price is calculated.
- `Verify()`: Verification of the line before price calculation, usually some TESTFIELD calls.
- `SetAssetSourceForSetup(var DtldPriceCalculationSetup: Record "Dtld. Price Calculation Setup"): Boolean`: Copy asset and source data to the buffer to search for a detailed price calculation setup.
- `CopyToBuffer(var PriceCalculationBufferMgt: Codeunit "Price Calculation Buffer Mgt."): Boolean`: Copy the fields related for price calculation to the buffer that is used in calculation handlers.
- `Update(AmountType: enum "Price Amount Type")`: This method is called after the calculation and allow to do corrections.
- `SetPrice(AmountType: enum "Price Amount Type"; PriceListLine: Record "Price List Line")`: After calculation is done, and the right price list line is found this method copies required fields to the internal record line. The amount type defines what amount will be copied.
- `ValidatePrice(AmountType: enum "Price Amount Type")`: The method SetPrice() copies amounts to the internal record line. This method calls the validation triggers on the amount defined by AmountType parameter.

## Across versions

- Present in: BC28, BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
