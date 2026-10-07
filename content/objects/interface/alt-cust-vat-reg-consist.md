---
id: object/interface/alt-cust-vat-reg-consist
type: object
title: Interface "Alt. Cust. VAT Reg. Consist."
summary: Interface "Alt. Cust. VAT Reg. Consist." in Base Application (Microsoft.Finance.VAT.Registration). 2 public procedures. Present since at least BC28, still in BC30.
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
  input_hash: 11e44f9565aeb836490274f100f702a0d7bd718bfc5ee90ad439252322691e59
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Layers/W1/BaseApp/Finance/VAT/Registration/AltCustVATRegConsist.Interface.al
    title: src/Layers/W1/BaseApp/Finance/VAT/Registration/AltCustVATRegConsist.Interface.al (releases/29.x)
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
name: Alt. Cust. VAT Reg. Consist.
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
  procedures: 2
  events: 0
  subscribers: 0
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Interface "Alt. Cust. VAT Reg. Consist."

> Interface "Alt. Cust. VAT Reg. Consist." in Base Application (Microsoft.Finance.VAT.Registration). 2 public procedures. Present since at least BC28, still in BC30.

Base Application · Microsoft.Finance.VAT.Registration · BC28-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Layers/W1/BaseApp/Finance/VAT/Registration/AltCustVATRegConsist.Interface.al) · facts from BC29

## Properties

| Property | Value |
|---|---|
| Access | Public |

## Procedures

- `CheckAltCustVATRegConsistent(AltCustVATReg: Record "Alt. Cust. VAT Reg.")`: Checks that the current state of the alternative customer VAT registration is correct
- `CheckCustomerConsistency(Customer: Record Customer)`: Checks that the current state of the customer is consistent with the alternative customer VAT registration

## Across versions

- Present in: BC28, BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
