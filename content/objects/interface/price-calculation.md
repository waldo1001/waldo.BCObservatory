---
id: object/interface/price-calculation
type: object
title: Interface "Price Calculation"
summary: Interface "Price Calculation" in Base Application (Microsoft.Pricing.Calculation). 13 public procedures. Present since at least BC23, still in BC30.
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
  at: "2026-10-08T06:17:47.117Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 8e112c5aa71f22db50eaff0e29df177cf027e420a6e1b2bd587cb227e073f29a
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/47ed09ca325f485d61415c1d6926ab8f0518336d/src/Layers/W1/BaseApp/Pricing/Calculation/PriceCalculation.Interface.al
    title: src/Layers/W1/BaseApp/Pricing/Calculation/PriceCalculation.Interface.al (releases/29.x)
    date: null
    commit: 47ed09ca325f485d61415c1d6926ab8f0518336d
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
  procedures: 13
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
  implemented_by: 4
---

# Interface "Price Calculation"

> Interface "Price Calculation" in Base Application (Microsoft.Pricing.Calculation). 13 public procedures. Present since at least BC23, still in BC30.

Base Application · Microsoft.Pricing.Calculation · BC23-30 · [source at 47ed09ca](https://github.com/microsoft/BCApps/blob/47ed09ca325f485d61415c1d6926ab8f0518336d/src/Layers/W1/BaseApp/Pricing/Calculation/PriceCalculation.Interface.al) · facts from BC29

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

## Implemented by

- [Codeunit 7002 "Price Calculation - V16"](../codeunit/7002.md)
- [Codeunit 7003 "Price Calculation - V15"](../codeunit/7003.md)
- [Codeunit 7005 "Price Calculation - Undefined"](../codeunit/7005.md)
- [Enum 7011 "Price Calculation Handler"](../enum/7011.md)

## Across versions

- Present in: BC23-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). The call sections above are our own, per object, from the BC29 call graph. For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "interface", object_name: "Price Calculation")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
