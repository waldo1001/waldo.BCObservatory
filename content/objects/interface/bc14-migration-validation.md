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
  at: "2026-10-07T09:46:58.909Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: c4afcdf27f3bd64b05f5ae9995662912b06d06a3b9e148c96731ece38bb47060
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/Apps/W1/HybridBC14/app/src/Migration/BC14MigrationValidation.Interface.al
    title: src/Apps/W1/HybridBC14/app/src/Migration/BC14MigrationValidation.Interface.al (releases/29.x)
    date: null
    commit: 1d24dd5ee2a734510f0556ccc69342d0e616db2f
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

HybridBC14 · Microsoft.DataMigration.BC14Reimplementation · BC29-30 · [source at 1d24dd5e](https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/Apps/W1/HybridBC14/app/src/Migration/BC14MigrationValidation.Interface.al) · facts from BC29

## Procedures

- `GetDisplayName(): Text[250]`
- `IsEnabled(): Boolean`: Checks if the validation should run based on current settings.
- `Execute()`: Executes the validation.

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
