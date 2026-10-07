---
id: object/interface/price-source
type: object
title: Interface "Price Source"
summary: Interface "Price Source" in Base Application (Microsoft.Pricing.Source). 7 public procedures. Present since at least BC28, still in BC30.
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
  input_hash: 2059619dfb3d13aeab4ad62691229961fb67c4c187208b8deca1106f5c7ffe53
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Layers/W1/BaseApp/Pricing/Source/PriceSource.Interface.al
    title: src/Layers/W1/BaseApp/Pricing/Source/PriceSource.Interface.al (releases/29.x)
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
name: Price Source
namespace: Microsoft.Pricing.Source
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
  procedures: 7
  events: 0
  subscribers: 0
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Interface "Price Source"

> Interface "Price Source" in Base Application (Microsoft.Pricing.Source). 7 public procedures. Present since at least BC28, still in BC30.

Base Application · Microsoft.Pricing.Source · BC28-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Layers/W1/BaseApp/Pricing/Source/PriceSource.Interface.al) · facts from BC29

## Procedures

- `GetNo(var PriceSource: Record "Price Source")`
- `GetId(var PriceSource: Record "Price Source")`: The method fills the Price Source parameter with "Source ID" and other data from the source defined in the implementation codeunit.
- `IsForAmountType(AmountType: Enum "Price Amount Type"): Boolean`: The method should return true if the source can define both price and discount. If the price source is relevant only for prices it should return true when AmountType is Price, and false if AmountType is Discount E.g., "Customer Price Group" is not relevant for discounts, "Customer Discount Group" is...
- `IsLookupOK(var PriceSource: Record "Price Source"): Boolean`: The method runs the modal page for looking up for a price source.
- `VerifyParent(var PriceSource: Record "Price Source"): Boolean`: The method should throw an error if the price source does not support the parent source, but "Parent Source No" is filled, and vice versa, if the parent source is supported but "Parent Source No" is empty or inconsistent. E.g., "Job Task" is the only price source that supports "Job" price source as ...
- `IsSourceNoAllowed(): Boolean`: The method should return true for a source that requires "Source No." to be filled. In W1 returns false for group source types: "All", "All Customers", "All Vendors", "All Jobs".
- `GetGroupNo(PriceSource: Record "Price Source"): Code[20]`: The method should return "Source No." of the related Customer, Vendor, or Job. E.g., "Job Task" returns the parent job's "Source No.", so the detailed price calculation setup defined for the job will be applied for all Job Tasks.

## Across versions

- Present in: BC28, BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
