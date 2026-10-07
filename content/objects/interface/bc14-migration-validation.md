---
id: object/interface/bc14-migration-validation
type: object
title: Interface "BC14 Migration Validation"
summary: Interface "BC14 Migration Validation" in HybridBC14 (Microsoft.DataMigration.BC14Reimplementation). 3 public procedures. Introduced in BC29, still in BC30.
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
  at: "2026-10-06T23:56:28.878Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: a52aa1409b1f9a5113d08d79e072ecf2429ca007e3c1416e090c0fe3b26bbd70
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/HybridBC14/app/src/Migration/BC14MigrationValidation.Interface.al
    title: src/Apps/W1/HybridBC14/app/src/Migration/BC14MigrationValidation.Interface.al (releases/29.x)
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
name: BC14 Migration Validation
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
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Interface "BC14 Migration Validation"

> Interface "BC14 Migration Validation" in HybridBC14 (Microsoft.DataMigration.BC14Reimplementation). 3 public procedures. Introduced in BC29, still in BC30.

HybridBC14 · Microsoft.DataMigration.BC14Reimplementation · BC29-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/HybridBC14/app/src/Migration/BC14MigrationValidation.Interface.al) · facts from BC29

## Procedures

- `GetDisplayName(): Text[250]`
- `IsEnabled(): Boolean`: Checks if the validation should run based on current settings.
- `Execute()`: Executes the validation.

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
