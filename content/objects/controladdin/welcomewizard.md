---
id: object/controladdin/welcomewizard
type: object
title: Control add-in "WelcomeWizard"
summary: Control add-in "WelcomeWizard" in System Application (System.Environment). 4 public procedures. Present since at least BC28, still in BC30.
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
  input_hash: 5b6b2c07fe5a7dab463b464ef30670f171040204792d3697fb0045167fd3d470
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/System%20Application/App/ControlAddIns/src/WelcomeWizard.ControlAddin.al
    title: src/System Application/App/ControlAddIns/src/WelcomeWizard.ControlAddin.al (releases/29.x)
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
name: WelcomeWizard
namespace: System.Environment
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

# Control add-in "WelcomeWizard"

> Control add-in "WelcomeWizard" in System Application (System.Environment). 4 public procedures. Present since at least BC28, still in BC30.

System Application · System.Environment · BC28-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/System%20Application/App/ControlAddIns/src/WelcomeWizard.ControlAddin.al) · facts from BC29

## Procedures

- `Initialize(Title: Text; Subtitle: Text; Explanation: Text; Intro: Text; IntroDescription: Text; GetStarted: Text; GetStartedDescription: Text; GetHelp: Text; GetHelpDescription: Text; RoleCenters: Text; RoleCentersDescription: Text; RoleCenter: Text; LegalDescription: Text)`: Function that initializes the WelcomeWizard API
- `LoadFlows(EnvironmentId: Text)`: Function that loads the embedded Welcome Wizard into a container on a webpage
- `UpdateProfileId(ChangedProfileId: Text)`: Function that updates the Role Center Profile ID
- `LoadTemplates(EnvironmentId: Text; SearchTerm: Text; PageSize: Text; Destination: Text)`: Function that loads embedded WelcomeWizard templates into a container on a webpage

## Across versions

- Present in: BC28, BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
