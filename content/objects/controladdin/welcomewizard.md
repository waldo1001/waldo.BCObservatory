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
  at: "2026-10-07T01:08:41.552Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 7b9b3bf173fc3a1af9b551bf8be47ab9417a31a67c6359b496fe4e24c10c3bf0
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
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
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
