---
id: object/controladdin/welcomewizard
type: object
title: Control add-in "WelcomeWizard"
summary: Control add-in "WelcomeWizard" in System Application (System.Environment). 4 public procedures. Introduced in BC24, still in BC30, changed in BC26.
tier: official
language: en
tags:
  - controladdin
  - system application
versions:
  introduced: "24"
  last_changed: "26"
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
  input_hash: ae2062d9e4231fea4d9e5349737f1e487b5141fb54ba34ac0b5ab0ddcbb9647a
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/System%20Application/App/ControlAddIns/src/WelcomeWizard.ControlAddin.al
    title: src/System Application/App/ControlAddIns/src/WelcomeWizard.ControlAddin.al (releases/29.x)
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
object_type: controladdin
object_id: null
name: WelcomeWizard
namespace: System.Environment
app: System Application
extends: null
first_version: "24"
last_version: "30"
present_in:
  - "24"
  - "25"
  - "26"
  - "27"
  - "28"
  - "29"
  - "30"
changed_in:
  - "26"
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
---

# Control add-in "WelcomeWizard"

> Control add-in "WelcomeWizard" in System Application (System.Environment). 4 public procedures. Introduced in BC24, still in BC30, changed in BC26.

System Application · System.Environment · BC24-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/System%20Application/App/ControlAddIns/src/WelcomeWizard.ControlAddin.al) · facts from BC29

## Procedures

- `Initialize(Title: Text; Subtitle: Text; Explanation: Text; Intro: Text; IntroDescription: Text; GetStarted: Text; GetStartedDescription: Text; GetHelp: Text; GetHelpDescription: Text; RoleCenters: Text; RoleCentersDescription: Text; RoleCenter: Text; LegalDescription: Text)`: Function that initializes the WelcomeWizard API
- `LoadFlows(EnvironmentId: Text)`: Function that loads the embedded Welcome Wizard into a container on a webpage
- `UpdateProfileId(ChangedProfileId: Text)`: Function that updates the Role Center Profile ID
- `LoadTemplates(EnvironmentId: Text; SearchTerm: Text; PageSize: Text; Destination: Text)`: Function that loads embedded WelcomeWizard templates into a container on a webpage

## Across versions

- Present in: BC24-30
- Changed (declaration) in: BC26

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "controladdin", object_name: "WelcomeWizard")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
