---
id: object/interface/cloud-migration-warning
type: object
title: Interface "Cloud Migration Warning"
summary: Interface "Cloud Migration Warning" in HybridBaseDeployment (Microsoft.DataMigration). 5 public procedures. Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - interface
  - hybridbasedeployment
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
  input_hash: 59da9332f74c9d5ff38ef999539a10c8ce5724f936d4d002b511995a8960870d
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Apps/W1/HybridBaseDeployment/app/src/interfaces/CloudMigrationWarning.Interface.al
    title: src/Apps/W1/HybridBaseDeployment/app/src/interfaces/CloudMigrationWarning.Interface.al (releases/29.x)
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
name: Cloud Migration Warning
namespace: Microsoft.DataMigration
app: HybridBaseDeployment
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
  procedures: 5
  events: 0
  subscribers: 0
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Interface "Cloud Migration Warning"

> Interface "Cloud Migration Warning" in HybridBaseDeployment (Microsoft.DataMigration). 5 public procedures. Introduced in BC29, still in BC30.

HybridBaseDeployment · Microsoft.DataMigration · BC29-30 · [source at 030de383](https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Apps/W1/HybridBaseDeployment/app/src/interfaces/CloudMigrationWarning.Interface.al) · facts from BC29

## Procedures

- `CheckWarning(): Boolean`
- `FixWarning()`
- `ShowWarning(var CloudMigrationWarning: Record "Cloud Migration Warning"): Text`
- `GetWarningMessage(): Text[1024]`
- `GetWarningCount(): Integer`

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "interface", object_name: "Cloud Migration Warning")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node interface "Cloud Migration Warning"`

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
