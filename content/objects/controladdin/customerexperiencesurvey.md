---
id: object/controladdin/customerexperiencesurvey
type: object
title: Control add-in "CustomerExperienceSurvey"
summary: Control add-in "CustomerExperienceSurvey" in System Application (System.Feedback). 1 public procedures. Present since at least BC23, still in BC30, changed in BC24, BC27. Obsolete (Pending since 27.0).
tier: official
language: en
tags:
  - controladdin
  - system application
versions:
  introduced: null
  last_changed: "27"
  deprecated: "27.0"
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-08T06:17:47.117Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: a4e40884c709fb2e34581d0243867f1428a72b35989528e02f5f4f890eacee04
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/47ed09ca325f485d61415c1d6926ab8f0518336d/src/System%20Application/App/ControlAddIns/src/CustomerExperienceSurvey.ControlAddIn.al
    title: src/System Application/App/ControlAddIns/src/CustomerExperienceSurvey.ControlAddIn.al (releases/29.x)
    date: null
    commit: 47ed09ca325f485d61415c1d6926ab8f0518336d
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
first_version: "23"
last_version: "30"
present_in:
  - "23"
  - "24"
  - "25"
  - "26"
  - "27"
  - "28"
  - "29"
  - "30"
changed_in:
  - "24"
  - "27"
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
  calls: 0
  called_by: 0
  implements: 0
---

# Control add-in "CustomerExperienceSurvey"

> Control add-in "CustomerExperienceSurvey" in System Application (System.Feedback). 1 public procedures. Present since at least BC23, still in BC30, changed in BC24, BC27. Obsolete (Pending since 27.0).

System Application · System.Feedback · BC23-30 · [source at 47ed09ca](https://github.com/microsoft/BCApps/blob/47ed09ca325f485d61415c1d6926ab8f0518336d/src/System%20Application/App/ControlAddIns/src/CustomerExperienceSurvey.ControlAddIn.al) · facts from BC29

## Properties

| Property | Value |
|---|---|
| ObsoleteState | Pending |
| ObsoleteTag | 27.0 |
| ObsoleteReason | This module is no longer used. |

## Procedures

- `renderSurvey(ParentElementId: Text; SurveyId: Text; TenantId: Text; FormsProEligibilityId: Text; Locale: Text)`

## Across versions

- Present in: BC23-30
- Changed (declaration) in: BC24, BC27
- Obsolete: Pending since 27.0, "This module is no longer used."

## Deprecations

- object: Pending 27.0 (#if not CLEAN27), "This module is no longer used."

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "controladdin", object_name: "CustomerExperienceSurvey")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
