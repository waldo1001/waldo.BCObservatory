---
id: object/interface/bc14-post-migration-action
type: object
title: Interface "BC14 Post Migration Action"
summary: Interface "BC14 Post Migration Action" in HybridBC14 (Microsoft.DataMigration.BC14Reimplementation). 3 public procedures. Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - interface
  - hybridbc14
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
  at: "2026-10-06T17:21:46.353Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 0a5474e1f01f5595f84c11f112140a279f33bb6412ebe65599461532f89b8e20
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/HybridBC14/app/src/Migration/BC14PostMigrationAction.Interface.al
    title: src/Apps/W1/HybridBC14/app/src/Migration/BC14PostMigrationAction.Interface.al (releases/29.x)
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
name: BC14 Post Migration Action
namespace: Microsoft.DataMigration.BC14Reimplementation
app: HybridBC14
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
---

# Interface "BC14 Post Migration Action"

> Interface "BC14 Post Migration Action" in HybridBC14 (Microsoft.DataMigration.BC14Reimplementation). 3 public procedures. Introduced in BC29, still in BC30.

HybridBC14 · Microsoft.DataMigration.BC14Reimplementation · BC29-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/HybridBC14/app/src/Migration/BC14PostMigrationAction.Interface.al) · facts from BC29

## Procedures

- `GetDisplayName(): Text[250]`
- `IsEnabled(): Boolean`: Checks if the action should run based on current settings.
- `RunAction(): Boolean`: Runs the action.

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
