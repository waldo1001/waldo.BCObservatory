---
id: object/interface/price-source
type: object
title: Interface "Price Source"
summary: Interface "Price Source" in Base Application (Microsoft.Pricing.Source). 7 public procedures. Present since at least BC23, still in BC30.
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
  input_hash: 0f837e459bcbb7166d448fd2e72a45a52635a920d1c342fbf4166f7ce4a1c470
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/47ed09ca325f485d61415c1d6926ab8f0518336d/src/Layers/W1/BaseApp/Pricing/Source/PriceSource.Interface.al
    title: src/Layers/W1/BaseApp/Pricing/Source/PriceSource.Interface.al (releases/29.x)
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
name: Price Source
namespace: Microsoft.Pricing.Source
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
  procedures: 7
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
  implemented_by: 10
---

# Interface "Price Source"

> Interface "Price Source" in Base Application (Microsoft.Pricing.Source). 7 public procedures. Present since at least BC23, still in BC30.

Base Application · Microsoft.Pricing.Source · BC23-30 · [source at 47ed09ca](https://github.com/microsoft/BCApps/blob/47ed09ca325f485d61415c1d6926ab8f0518336d/src/Layers/W1/BaseApp/Pricing/Source/PriceSource.Interface.al) · facts from BC29

## Procedures

- `GetNo(var PriceSource: Record "Price Source")`
- `GetId(var PriceSource: Record "Price Source")`: The method fills the Price Source parameter with "Source ID" and other data from the source defined in the implementation codeunit.
- `IsForAmountType(AmountType: Enum "Price Amount Type"): Boolean`: The method should return true if the source can define both price and discount. If the price source is relevant only for prices it should return true when AmountType is Price, and false if AmountType is Discount E.g., "Customer Price Group" is not relevant for discounts, "Customer Discount Group" is...
- `IsLookupOK(var PriceSource: Record "Price Source"): Boolean`: The method runs the modal page for looking up for a price source.
- `VerifyParent(var PriceSource: Record "Price Source"): Boolean`: The method should throw an error if the price source does not support the parent source, but "Parent Source No" is filled, and vice versa, if the parent source is supported but "Parent Source No" is empty or inconsistent. E.g., "Job Task" is the only price source that supports "Job" price source as ...
- `IsSourceNoAllowed(): Boolean`: The method should return true for a source that requires "Source No." to be filled. In W1 returns false for group source types: "All", "All Customers", "All Vendors", "All Jobs".
- `GetGroupNo(PriceSource: Record "Price Source"): Code[20]`: The method should return "Source No." of the related Customer, Vendor, or Job. E.g., "Job Task" returns the parent job's "Source No.", so the detailed price calculation setup defined for the job will be applied for all Job Tasks.

## Implemented by

- [Codeunit 7031 "Price Source - All"](../codeunit/7031.md)
- [Codeunit 7032 "Price Source - Customer"](../codeunit/7032.md)
- [Codeunit 7033 "Price Source - Cust. Price Gr."](../codeunit/7033.md)
- [Codeunit 7034 "Price Source - Cust. Disc. Gr."](../codeunit/7034.md)
- [Codeunit 7035 "Price Source - Vendor"](../codeunit/7035.md)
- [Codeunit 7036 "Price Source - Job"](../codeunit/7036.md)
- [Codeunit 7037 "Price Source - Job Task"](../codeunit/7037.md)
- [Codeunit 7038 "Price Source - Contact"](../codeunit/7038.md)
- [Codeunit 7039 "Price Source - Campaign"](../codeunit/7039.md)
- [Enum 7003 "Price Source Type"](../enum/7003.md)

## Across versions

- Present in: BC23-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). The call sections above are our own, per object, from the BC29 call graph. For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "interface", object_name: "Price Source")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
