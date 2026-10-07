---
id: object/interface/price-source-group
type: object
title: Interface "Price Source Group"
summary: Interface "Price Source Group" in Base Application (Microsoft.Pricing.Source). 2 public procedures. Present since at least BC23, still in BC30.
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
  at: "2026-10-07T16:23:11.326Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 69c5ef7e4e058675292fb11ffb25512a4189cfc586bca9dbdffe61c09ac4a2b1
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Layers/W1/BaseApp/Pricing/Source/PriceSourceGroup.Interface.al
    title: src/Layers/W1/BaseApp/Pricing/Source/PriceSourceGroup.Interface.al (releases/29.x)
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
name: Price Source Group
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

# Interface "Price Source Group"

> Interface "Price Source Group" in Base Application (Microsoft.Pricing.Source). 2 public procedures. Present since at least BC23, still in BC30.

Base Application · Microsoft.Pricing.Source · BC23-30 · [source at 030de383](https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Layers/W1/BaseApp/Pricing/Source/PriceSourceGroup.Interface.al) · facts from BC29

## Procedures

- `IsSourceTypeSupported(SourceType: Enum "Price Source Type"): Boolean`
- `GetGroup(): Enum "Price Source Group"`: Some of source types are mapped to the price source groups that is used in setup. If the source type does not belong to one group then it returns group All.

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "interface", object_name: "Price Source Group")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node interface "Price Source Group"`

## Across versions

- Present in: BC23, BC24, BC25, BC26, BC27, BC28, BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
