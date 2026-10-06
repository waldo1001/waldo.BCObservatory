---
id: object/controladdin/oauthintegration
type: object
title: Control add-in "OAuthIntegration"
summary: Control add-in "OAuthIntegration" in System Application (System.Security.Authentication). 2 public procedures. Present since at least BC28, still in BC30.
tier: official
language: en
tags:
  - controladdin
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
  input_hash: f39be015426803b70e04491398de0d153b34643ca4a367744e00948a460acb41
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/System%20Application/App/ControlAddIns/src/OAuthIntegration.Controladdin.al
    title: src/System Application/App/ControlAddIns/src/OAuthIntegration.Controladdin.al (releases/29.x)
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
object_type: controladdin
object_id: null
name: OAuthIntegration
namespace: System.Security.Authentication
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

# Control add-in "OAuthIntegration"

> Control add-in "OAuthIntegration" in System Application (System.Security.Authentication). 2 public procedures. Present since at least BC28, still in BC30.

System Application · System.Security.Authentication · BC28-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/System%20Application/App/ControlAddIns/src/OAuthIntegration.Controladdin.al) · facts from BC29

## Procedures

- `StartAuthorization(AuthRequestUrl: Text)`: Starts the authorization process.
- `Authorize(Url: Text; LinkName: Text; LinkToolTip: Text)`: Creates link to start the authorization process

## Across versions

- Present in: BC28, BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
