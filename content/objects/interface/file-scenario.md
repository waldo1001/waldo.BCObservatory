---
id: object/interface/file-scenario
type: object
title: Interface "File Scenario"
summary: Interface "File Scenario" in System Application (System.ExternalFileStorage). 4 public procedures. Present since at least BC28, still in BC30.
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
  input_hash: 58f3a4940b71fa814ebf78ae49e8041e911bb3c2d68f2eaec43d8c85756f3297
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/System%20Application/App/External%20File%20Storage/src/Scenario/FileScenario.Interface.al
    title: src/System Application/App/External File Storage/src/Scenario/FileScenario.Interface.al (releases/29.x)
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
name: File Scenario
namespace: System.ExternalFileStorage
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
  procedures: 4
  events: 0
  subscribers: 0
---

# Interface "File Scenario"

> Interface "File Scenario" in System Application (System.ExternalFileStorage). 4 public procedures. Present since at least BC28, still in BC30.

System Application · System.ExternalFileStorage · BC28-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/System%20Application/App/External%20File%20Storage/src/Scenario/FileScenario.Interface.al) · facts from BC29

## Procedures

- `BeforeAddOrModifyFileScenarioCheck(Scenario: Enum "File Scenario"; Connector: Enum System.ExternalFileStorage."Ext. File Storage Connector"): Boolean`
- `GetAdditionalScenarioSetup(Scenario: Enum "File Scenario"; Connector: Enum System.ExternalFileStorage."Ext. File Storage Connector"): Boolean`: Called to get additional setup for a file scenario.
- `BeforeDeleteFileScenarioCheck(Scenario: Enum "File Scenario"; Connector: Enum System.ExternalFileStorage."Ext. File Storage Connector"): Boolean`: Called before deleting a file scenario.
- `BeforeReassignFileScenarioCheck(Scenario: Enum "File Scenario"): Boolean`: Called before reassigning a file scenario from one to another.

## Across versions

- Present in: BC28, BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
