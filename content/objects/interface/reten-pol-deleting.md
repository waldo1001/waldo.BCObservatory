---
id: object/interface/reten-pol-deleting
type: object
title: Interface "Reten. Pol. Deleting"
summary: Interface "Reten. Pol. Deleting" in System Application (System.DataAdministration). 1 public procedures. Present since at least BC28, still in BC30.
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
  at: "2026-10-06T17:21:46.353Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 4dccaf91433174e0c12a2b64dc8cbc61f6e02308390e2f4a56ebdc44f08ebfa9
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/System%20Application/App/Retention%20Policy/src/Apply%20Retention%20Policy/RetenPolDeleting.Interface.al
    title: src/System Application/App/Retention Policy/src/Apply Retention Policy/RetenPolDeleting.Interface.al (releases/29.x)
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
name: Reten. Pol. Deleting
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
  procedures: 1
  events: 0
  subscribers: 0
---

# Interface "Reten. Pol. Deleting"

> Interface "Reten. Pol. Deleting" in System Application (System.DataAdministration). 1 public procedures. Present since at least BC28, still in BC30.

System Application · System.DataAdministration · BC28-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/System%20Application/App/Retention%20Policy/src/Apply%20Retention%20Policy/RetenPolDeleting.Interface.al) · facts from BC29

## Procedures

- `DeleteRecords(var RecordRef: RecordRef; var RetenPolDeletingParam: Record "Reten. Pol. Deleting Param" temporary)`

## Across versions

- Present in: BC28, BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
