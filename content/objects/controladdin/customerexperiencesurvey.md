---
id: object/controladdin/customerexperiencesurvey
type: object
title: Control add-in "CustomerExperienceSurvey"
summary: Control add-in "CustomerExperienceSurvey" in System Application (System.Feedback). 1 public procedures. Present since at least BC28, still in BC30. Obsolete (Pending since 27.0).
tier: official
language: en
tags:
  - controladdin
  - system application
versions:
  introduced: null
  last_changed: null
  deprecated: "27.0"
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T01:08:41.552Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 3d33503a1a0c8dd17a1d52e6b37db679143317904308a18a99c7a8dcb49da63a
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/System%20Application/App/ControlAddIns/src/CustomerExperienceSurvey.ControlAddIn.al
    title: src/System Application/App/ControlAddIns/src/CustomerExperienceSurvey.ControlAddIn.al (releases/29.x)
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
name: CustomerExperienceSurvey
namespace: System.Feedback
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
obsolete:
  state: Pending
  tag: "27.0"
  reason: This module is no longer used.
countries: []
ms_search_form_ids: []
counts:
  fields: 0
  procedures: 1
  events: 0
  subscribers: 0
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Control add-in "CustomerExperienceSurvey"

> Control add-in "CustomerExperienceSurvey" in System Application (System.Feedback). 1 public procedures. Present since at least BC28, still in BC30. Obsolete (Pending since 27.0).

System Application · System.Feedback · BC28-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/System%20Application/App/ControlAddIns/src/CustomerExperienceSurvey.ControlAddIn.al) · facts from BC29

## Properties

| Property | Value |
|---|---|
| ObsoleteState | Pending |
| ObsoleteTag | 27.0 |
| ObsoleteReason | This module is no longer used. |

## Procedures

- `renderSurvey(ParentElementId: Text; SurveyId: Text; TenantId: Text; FormsProEligibilityId: Text; Locale: Text)`

## Across versions

- Present in: BC28, BC29, BC30
- Changed (declaration) in: none
- Obsolete: Pending since 27.0, "This module is no longer used."

## Deprecations

- object: Pending 27.0 (#if not CLEAN27), "This module is no longer used."

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
