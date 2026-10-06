---
id: object/interface/email-connector-v5
type: object
title: Interface "Email Connector v5"
summary: Interface "Email Connector v5" in System Application (System.Email). 3 public procedures. Present since at least BC28, still in BC30.
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
  input_hash: f9050a0c85231002ec17bd26582c7274644baffeafc4afe6dee00e4ec28a2a06
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/System%20Application/App/Email/src/Connector/EmailConnectorv5.Interface.al
    title: src/System Application/App/Email/src/Connector/EmailConnectorv5.Interface.al (releases/29.x)
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
name: Email Connector v5
namespace: System.Email
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
  procedures: 3
  events: 0
  subscribers: 0
---

# Interface "Email Connector v5"

> Interface "Email Connector v5" in System Application (System.Email). 3 public procedures. Present since at least BC28, still in BC30.

System Application · System.Email · BC28-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/System%20Application/App/Email/src/Connector/EmailConnectorv5.Interface.al) · facts from BC29

## Procedures

- `GetEmailCategories(AccountId: Guid; var EmailCategories: Record "Email Categories" temporary)`
- `CreateEmailCategory(AccountId: Guid; CategoryDisplayName: Text; CategoryColor: Text): Text`: Create a new email category in the provided account.
- `ApplyEmailCategory(AccountId: Guid; ExternalId: Text; Categories: List of [Text])`: Apply email categories to an email message.

## Across versions

- Present in: BC28, BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
