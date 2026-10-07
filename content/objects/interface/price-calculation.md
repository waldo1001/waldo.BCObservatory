---
id: object/interface/price-calculation
type: object
title: Interface "Price Calculation"
summary: Interface "Price Calculation" in Base Application (Microsoft.Pricing.Calculation). 13 public procedures. Introduced in BC25, still in BC30.
tier: official
language: en
tags:
  - interface
  - base application
versions:
  introduced: "25"
  last_changed: null
  deprecated: null
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T15:47:18.976Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 0bfaeca70faf1e181848c22f9d0089e64ca0cb6f03f601ab7a17c8d5f64907f2
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Layers/W1/BaseApp/Pricing/Calculation/PriceCalculation.Interface.al
    title: src/Layers/W1/BaseApp/Pricing/Calculation/PriceCalculation.Interface.al (releases/29.x)
    date: null
    commit: 030de38360c4aa828a650300faf93cd09fa139e1
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
first_version: "25"
last_version: "30"
present_in:
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
---

# Interface "Price Calculation"

> Interface "Price Calculation" in Base Application (Microsoft.Pricing.Calculation). 13 public procedures. Introduced in BC25, still in BC30.

Base Application · Microsoft.Pricing.Calculation · BC25-30 · [source at 030de383](https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Layers/W1/BaseApp/Pricing/Calculation/PriceCalculation.Interface.al) · facts from BC29

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

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "interface", object_name: "Price Calculation")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node interface "Price Calculation"`

## Across versions

- Present in: BC25, BC26, BC27, BC28, BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
