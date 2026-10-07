---
id: object/interface/shpfy-tax-registration-id-mapping
type: object
title: Interface "Shpfy Tax Registration Id Mapping"
summary: Interface "Shpfy Tax Registration Id Mapping" in Shopify (Microsoft.Integration.Shopify). 3 public procedures. Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - interface
  - shopify
versions:
  introduced: "29"
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
  input_hash: de2db40fd521195bfaf07901c0eb4c3070459649190fc8b304f398e818b32f45
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/Shopify/app/src/Companies/Interfaces/ShpfyTaxRegistrationIdMapping.Interface.al
    title: src/Apps/W1/Shopify/app/src/Companies/Interfaces/ShpfyTaxRegistrationIdMapping.Interface.al (releases/29.x)
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
name: Shpfy Tax Registration Id Mapping
namespace: Microsoft.Integration.Shopify
app: Shopify
extends: null
first_version: "29"
last_version: "30"
present_in:
  - "29"
  - "30"
changed_in: []
source_major: "29"
obsolete: null
countries: []
ms_search_form_ids: []
counts:
  fields: 0
  procedures: 3
  events: 0
  subscribers: 0
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Interface "Shpfy Tax Registration Id Mapping"

> Interface "Shpfy Tax Registration Id Mapping" in Shopify (Microsoft.Integration.Shopify). 3 public procedures. Introduced in BC29, still in BC30.

Shopify · Microsoft.Integration.Shopify · BC29-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/Shopify/app/src/Companies/Interfaces/ShpfyTaxRegistrationIdMapping.Interface.al) · facts from BC29

## Procedures

- `GetTaxRegistrationId(var Customer: Record Customer): Text[150]`
- `SetMappingFiltersForCustomers(var Customer: Record Customer; CompanyLocation: Record "Shpfy Company Location")`: Sets the tax registration mapping filters for the customer.
- `UpdateTaxRegistrationId(var Customer: Record Customer; NewTaxRegistrationId: Text[150])`: Updates the tax registration id for the customer.

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
