---
id: object/interface/ship-to-alt-cust-vat-reg
type: object
title: Interface "Ship-To Alt. Cust. VAT Reg."
summary: Interface "Ship-To Alt. Cust. VAT Reg." in Base Application (Microsoft.Finance.VAT.Registration). 1 public procedures. Present since at least BC28, still in BC30.
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
  at: "2026-10-07T01:08:41.552Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 312ea8a162ea51163e639693fee27631a245d6912461dcd4a58fefe913443b8a
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Layers/W1/BaseApp/Finance/VAT/Registration/ShipToAltCustVATReg.Interface.al
    title: src/Layers/W1/BaseApp/Finance/VAT/Registration/ShipToAltCustVATReg.Interface.al (releases/29.x)
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
name: Ship-To Alt. Cust. VAT Reg.
namespace: Microsoft.Finance.VAT.Registration
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
  procedures: 1
  events: 0
  subscribers: 0
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Interface "Ship-To Alt. Cust. VAT Reg."

> Interface "Ship-To Alt. Cust. VAT Reg." in Base Application (Microsoft.Finance.VAT.Registration). 1 public procedures. Present since at least BC28, still in BC30.

Base Application · Microsoft.Finance.VAT.Registration · BC28-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Layers/W1/BaseApp/Finance/VAT/Registration/ShipToAltCustVATReg.Interface.al) · facts from BC29

## Properties

| Property | Value |
|---|---|
| Access | Public |

## Procedures

- `HandleCountryChangeInShipToAddress(ShipToAddress: Record "Ship-to Address")`: Handles the relation to the alternative customer VAT registration when the country/region code is changed in the ship-to address.

## Across versions

- Present in: BC28, BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
