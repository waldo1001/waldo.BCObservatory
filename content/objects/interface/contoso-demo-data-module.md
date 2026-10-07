---
id: object/interface/contoso-demo-data-module
type: object
title: Interface "Contoso Demo Data Module"
summary: Interface "Contoso Demo Data Module" in ContosoCoffeeDemoDataset (Microsoft.DemoTool). 6 public procedures. Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - interface
  - contosocoffeedemodataset
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
  at: "2026-10-07T15:47:18.976Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: c6639014d39f4d0abd22b8544aa047823ef90fcb5be75e3887396107af094fb4
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Apps/W1/ContosoCoffeeDemoDataset/app/DemoTool/ContosoDemoDataModule.Interface.al
    title: src/Apps/W1/ContosoCoffeeDemoDataset/app/DemoTool/ContosoDemoDataModule.Interface.al (releases/29.x)
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
name: Contoso Demo Data Module
namespace: Microsoft.DemoTool
app: ContosoCoffeeDemoDataset
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
  procedures: 6
  events: 0
  subscribers: 0
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Interface "Contoso Demo Data Module"

> Interface "Contoso Demo Data Module" in ContosoCoffeeDemoDataset (Microsoft.DemoTool). 6 public procedures. Introduced in BC29, still in BC30.

ContosoCoffeeDemoDataset · Microsoft.DemoTool · BC29-30 · [source at 030de383](https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Apps/W1/ContosoCoffeeDemoDataset/app/DemoTool/ContosoDemoDataModule.Interface.al) · facts from BC29

## Procedures

- `RunConfigurationPage()`
- `GetDependencies(): List of [Enum "Contoso Demo Data Module"]`
- `CreateSetupData()`
- `CreateMasterData()`
- `CreateTransactionalData()`
- `CreateHistoricalData()`

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "interface", object_name: "Contoso Demo Data Module")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node interface "Contoso Demo Data Module"`

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
