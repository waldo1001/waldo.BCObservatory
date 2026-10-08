---
id: object/controladdin/satisfactionsurveyasync
type: object
title: Control add-in "SatisfactionSurveyAsync"
summary: Control add-in "SatisfactionSurveyAsync" in System Application (System.Feedback). 1 public procedures. Present since at least BC23, still in BC30, changed in BC24, BC28. Obsolete (Pending since 28.0).
tier: official
language: en
tags:
  - controladdin
  - system application
versions:
  introduced: null
  last_changed: "28"
  deprecated: "28.0"
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-08T06:17:47.117Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 2cb4beea9cdddbcb72617253e964413b155cb2d9c158f12e7e21dfaf18c1463f
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/47ed09ca325f485d61415c1d6926ab8f0518336d/src/System%20Application/App/ControlAddIns/src/SatisfactionSurveyAsync.ControlAddIn.al
    title: src/System Application/App/ControlAddIns/src/SatisfactionSurveyAsync.ControlAddIn.al (releases/29.x)
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
name: SatisfactionSurveyAsync
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
  - "28"
source_major: "29"
obsolete:
  state: Pending
  tag: "28.0"
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

# Control add-in "SatisfactionSurveyAsync"

> Control add-in "SatisfactionSurveyAsync" in System Application (System.Feedback). 1 public procedures. Present since at least BC23, still in BC30, changed in BC24, BC28. Obsolete (Pending since 28.0).

System Application · System.Feedback · BC23-30 · [source at 47ed09ca](https://github.com/microsoft/BCApps/blob/47ed09ca325f485d61415c1d6926ab8f0518336d/src/System%20Application/App/ControlAddIns/src/SatisfactionSurveyAsync.ControlAddIn.al) · facts from BC29

## Properties

| Property | Value |
|---|---|
| ObsoleteState | Pending |
| ObsoleteTag | 28.0 |
| ObsoleteReason | This module is no longer used. |

## Procedures

- `SendRequest(Url: Text; Timeout: Integer)`

## Across versions

- Present in: BC23-30
- Changed (declaration) in: BC24, BC28
- Obsolete: Pending since 28.0, "This module is no longer used."

## Deprecations

- object: Pending 28.0 (#if not CLEAN28), "This module is no longer used."

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "controladdin", object_name: "SatisfactionSurveyAsync")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
