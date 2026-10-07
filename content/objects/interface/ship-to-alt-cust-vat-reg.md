---
id: object/interface/ship-to-alt-cust-vat-reg
type: object
title: Interface "Ship-To Alt. Cust. VAT Reg."
summary: Interface "Ship-To Alt. Cust. VAT Reg." in Base Application (Microsoft.Finance.VAT.Registration). 1 public procedures. Introduced in BC25, still in BC30.
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
  input_hash: 9d37f82daa6e42d03c406bb8bb0f0f4dda9c0ae7953c8636960e52cfb1a8133d
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Layers/W1/BaseApp/Finance/VAT/Registration/ShipToAltCustVATReg.Interface.al
    title: src/Layers/W1/BaseApp/Finance/VAT/Registration/ShipToAltCustVATReg.Interface.al (releases/29.x)
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
name: Ship-To Alt. Cust. VAT Reg.
namespace: Microsoft.Finance.VAT.Registration
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

> Interface "Ship-To Alt. Cust. VAT Reg." in Base Application (Microsoft.Finance.VAT.Registration). 1 public procedures. Introduced in BC25, still in BC30.

Base Application · Microsoft.Finance.VAT.Registration · BC25-30 · [source at 030de383](https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Layers/W1/BaseApp/Finance/VAT/Registration/ShipToAltCustVATReg.Interface.al) · facts from BC29

## Properties

| Property | Value |
|---|---|
| Access | Public |

## Procedures

- `HandleCountryChangeInShipToAddress(ShipToAddress: Record "Ship-to Address")`: Handles the relation to the alternative customer VAT registration when the country/region code is changed in the ship-to address.

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "interface", object_name: "Ship-To Alt. Cust. VAT Reg.")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node interface "Ship-To Alt. Cust. VAT Reg."`

## Across versions

- Present in: BC25, BC26, BC27, BC28, BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
