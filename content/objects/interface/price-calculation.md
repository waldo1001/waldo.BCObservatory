---
id: object/interface/price-calculation
type: object
title: Interface "Price Calculation"
summary: Interface "Price Calculation" in Base Application (Microsoft.Pricing.Calculation). 13 public procedures. Present since at least BC28, still in BC30.
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
  input_hash: a6a78d71ae94250fadf18c5f7a16b99c82077beabfb2c81d5dbafa17f3c7dd09
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Layers/W1/BaseApp/Pricing/Calculation/PriceCalculation.Interface.al
    title: src/Layers/W1/BaseApp/Pricing/Calculation/PriceCalculation.Interface.al (releases/29.x)
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
name: Price Calculation
namespace: Microsoft.Pricing.Calculation
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
  procedures: 13
  events: 0
  subscribers: 0
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Interface "Price Calculation"

> Interface "Price Calculation" in Base Application (Microsoft.Pricing.Calculation). 13 public procedures. Present since at least BC28, still in BC30.

Base Application · Microsoft.Pricing.Calculation · BC28-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Layers/W1/BaseApp/Pricing/Calculation/PriceCalculation.Interface.al) · facts from BC29

## Procedures

- `Init(LineWithPrice: Interface "Line With Price"; PriceCalculationSetup: Record "Price Calculation Setup")`
- `GetLine(var Line: Variant)`: After the calculation is done by calling ApplyPrice() or ApplyDiscount() the updated line is retrieved by this method.
- `ApplyDiscount()`: Executes the calcluation of the discount amount.
- `ApplyPrice(CalledByFieldNo: Integer)`: Executes the calculation of the price or cost.
- `CountDiscount(ShowAll: Boolean): Integer`: Returns the number of price list lines with discounts that fit the source line.
- `CountPrice(ShowAll: Boolean): Integer`: Returnes the number of price list lines with prices that fit the source line.
- `FindDiscount(var TempPriceListLine: Record "Price List Line"; ShowAll: Boolean): Boolean`: Returns the list of price list lines with discount that fit the source line.
- `FindPrice(var TempPriceListLine: Record "Price List Line"; ShowAll: Boolean): Boolean`: Returns the list of price list lines with prices ot costs that fit the source line.
- `IsDiscountExists(ShowAll: Boolean): Boolean`: Returns true if exists any price list line with discount that fit the source line.
- `IsPriceExists(ShowAll: Boolean): Boolean`: Returns true if exists any price list line with price or cost that fit the source line.
- `PickDiscount()`: Allows to pick from the list of price list lines with disocunt that fit the source line.
- `PickPrice()`: Allows to pick from the list of price list lines with price or cost that fit the source line.
- `ShowPrices(var TempPriceListLine: Record "Price List Line")`: Opens the list page for reviewing existing prices.

## Across versions

- Present in: BC28, BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
