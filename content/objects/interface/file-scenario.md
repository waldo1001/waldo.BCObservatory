---
id: object/interface/file-scenario
type: object
title: Interface "File Scenario"
summary: Interface "File Scenario" in System Application (System.ExternalFileStorage). 4 public procedures. Introduced in BC28, still in BC30.
tier: official
language: en
tags:
  - interface
  - system application
versions:
  introduced: "28"
  last_changed: null
  deprecated: null
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T23:32:29.863Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: a6517a689f2ab3adff33c83711592ef137554830fd8a4191c1c244199d55e658
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/System%20Application/App/External%20File%20Storage/src/Scenario/FileScenario.Interface.al
    title: src/System Application/App/External File Storage/src/Scenario/FileScenario.Interface.al (releases/29.x)
    date: null
    commit: fe31a4253b4aa8fde426364f132f5689d4dfcddf
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
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
  calls: 0
  called_by: 0
  implements: 0
  implemented_by: 0
---

# Interface "File Scenario"

> Interface "File Scenario" in System Application (System.ExternalFileStorage). 4 public procedures. Introduced in BC28, still in BC30.

System Application · System.ExternalFileStorage · BC28-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/System%20Application/App/External%20File%20Storage/src/Scenario/FileScenario.Interface.al) · facts from BC29

## Procedures

- `BeforeAddOrModifyFileScenarioCheck(Scenario: Enum "File Scenario"; Connector: Enum System.ExternalFileStorage."Ext. File Storage Connector"): Boolean`
- `GetAdditionalScenarioSetup(Scenario: Enum "File Scenario"; Connector: Enum System.ExternalFileStorage."Ext. File Storage Connector"): Boolean`: Called to get additional setup for a file scenario.
- `BeforeDeleteFileScenarioCheck(Scenario: Enum "File Scenario"; Connector: Enum System.ExternalFileStorage."Ext. File Storage Connector"): Boolean`: Called before deleting a file scenario.
- `BeforeReassignFileScenarioCheck(Scenario: Enum "File Scenario"): Boolean`: Called before reassigning a file scenario from one to another.

## Across versions

- Present in: BC28-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "interface", object_name: "File Scenario")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
