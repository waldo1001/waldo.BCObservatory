---
id: object/interface/retention-period
type: object
title: Interface "Retention Period"
summary: Interface "Retention Period" in System Application (System.DataAdministration). 5 public procedures. Present since at least BC28, still in BC30.
tier: official
language: en
tags:
  - interface
  - system application
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
  at: "2026-10-07T01:08:41.552Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 69860cf3aa95512cfd4e2e0c8f4e14d10c40694272dfd2d2f73bd3792bee29e1
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/System%20Application/App/Retention%20Policy/src/Retention%20Period/RetentionPeriod.Interface.al
    title: src/System Application/App/Retention Policy/src/Retention Period/RetentionPeriod.Interface.al (releases/29.x)
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
name: Retention Period
namespace: System.DataAdministration
app: System Application
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

# Interface "Retention Period"

> Interface "Retention Period" in System Application (System.DataAdministration). 5 public procedures. Present since at least BC28, still in BC30.

System Application · System.DataAdministration · BC28-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/System%20Application/App/Retention%20Policy/src/Retention%20Period/RetentionPeriod.Interface.al) · facts from BC29

## Procedures

- `RetentionPeriodDateFormula(RetentionPeriod: Record "Retention Period"): Text`
- `RetentionPeriodDateFormula(RetentionPeriod: Record "Retention Period"; Translated: Boolean): Text`: Returns the date formula for a given retention period.
- `CalculateExpirationDate(RetentionPeriod: Record "Retention Period"): Date`: Returns the expiration date for a given retention period.
- `CalculateExpirationDate(RetentionPeriod: Record "Retention Period"; UseDate: Date): Date`: Returns the expiration date for a given retention period.
- `CalculateExpirationDate(RetentionPeriod: Record "Retention Period"; UseDateTime: DateTime): DateTime`: Returns the expiration date and time for a given retention period.

## Across versions

- Present in: BC28, BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
