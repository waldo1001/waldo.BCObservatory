---
id: object/interface/ai-service-name
type: object
title: Interface "AI Service Name"
summary: Interface "AI Service Name" in System Application (System.AI). 2 public procedures. Present since at least BC28, still in BC30.
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
  input_hash: bc9e68ce1104a2e45cedd0b8bd4934130296c973e61acf6ff4562f5b6d94e7e8
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/System%20Application/App/AI/src/Copilot/Interfaces/AIServiceName.Interface.al
    title: src/System Application/App/AI/src/Copilot/Interfaces/AIServiceName.Interface.al (releases/29.x)
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
name: AI Service Name
namespace: System.AI
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
  procedures: 2
  events: 0
  subscribers: 0
---

# Interface "AI Service Name"

> Interface "AI Service Name" in System Application (System.AI). 2 public procedures. Present since at least BC28, still in BC30.

System Application · System.AI · BC28-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/System%20Application/App/AI/src/Copilot/Interfaces/AIServiceName.Interface.al) · facts from BC29

## Procedures

- `GetServiceName(): Text[250]`
- `GetServiceId(): Code[50]`: Get the id of the service. Will often be the service name in Code form.

## Across versions

- Present in: BC28, BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
