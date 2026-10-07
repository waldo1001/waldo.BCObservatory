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
  at: "2026-10-07T01:08:41.552Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 59da9332f74c9d5ff38ef999539a10c8ce5724f936d4d002b511995a8960870d
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/HybridBaseDeployment/app/src/interfaces/CloudMigrationWarning.Interface.al
    title: src/Apps/W1/HybridBaseDeployment/app/src/interfaces/CloudMigrationWarning.Interface.al (releases/29.x)
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

HybridBaseDeployment · Microsoft.DataMigration · BC29-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/HybridBaseDeployment/app/src/interfaces/CloudMigrationWarning.Interface.al) · facts from BC29

## Procedures

- `CheckWarning(): Boolean`
- `FixWarning()`
- `ShowWarning(var CloudMigrationWarning: Record "Cloud Migration Warning"): Text`
- `GetWarningMessage(): Text[1024]`
- `GetWarningCount(): Integer`

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
