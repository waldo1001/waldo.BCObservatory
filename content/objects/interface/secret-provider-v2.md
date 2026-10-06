---
id: object/interface/secret-provider-v2
type: object
title: Interface "Secret Provider v2"
summary: Interface "Secret Provider v2" in System Application (System.Security). 2 public procedures. Present since at least BC28, still in BC30.
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
  input_hash: 84d25a4072de37f2a496034fb31cd35efa89d72252a179d70363b94a5ba60a99
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/System%20Application/App/Secrets/src/SecretProviderv2.Interface.al
    title: src/System Application/App/Secrets/src/SecretProviderv2.Interface.al (releases/29.x)
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
name: Secret Provider v2
namespace: System.Security
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

# Interface "Secret Provider v2"

> Interface "Secret Provider v2" in System Application (System.Security). 2 public procedures. Present since at least BC28, still in BC30.

System Application · System.Security · BC28-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/System%20Application/App/Secrets/src/SecretProviderv2.Interface.al) · facts from BC29

## Procedures

- `GetSecret(SecretName: Text; var SecretValue: Text): Boolean`
- `GetSecret(SecretName: Text; var SecretValue: SecretText): Boolean`: Retrieves a secret value.

## Across versions

- Present in: BC28, BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
