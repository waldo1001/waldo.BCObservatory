---
id: object/controladdin/satisfactionsurveyasync
type: object
title: Control add-in "SatisfactionSurveyAsync"
summary: Control add-in "SatisfactionSurveyAsync" in System Application (System.Feedback). 1 public procedures. Present since at least BC28, still in BC30. Obsolete (Pending since 28.0).
tier: official
language: en
tags:
  - controladdin
  - system application
versions:
  introduced: null
  last_changed: null
  deprecated: "28.0"
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T09:46:58.909Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 49ad8a3ce128ded2d6d848595eb4d6f3912019e98f9ab01087b44d322e504fc2
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/System%20Application/App/ControlAddIns/src/SatisfactionSurveyAsync.ControlAddIn.al
    title: src/System Application/App/ControlAddIns/src/SatisfactionSurveyAsync.ControlAddIn.al (releases/29.x)
    date: null
    commit: 1d24dd5ee2a734510f0556ccc69342d0e616db2f
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
---

# Control add-in "SatisfactionSurveyAsync"

> Control add-in "SatisfactionSurveyAsync" in System Application (System.Feedback). 1 public procedures. Present since at least BC28, still in BC30. Obsolete (Pending since 28.0).

System Application · System.Feedback · BC28-30 · [source at 1d24dd5e](https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/System%20Application/App/ControlAddIns/src/SatisfactionSurveyAsync.ControlAddIn.al) · facts from BC29

## Properties

| Property | Value |
|---|---|
| ObsoleteState | Pending |
| ObsoleteTag | 28.0 |
| ObsoleteReason | This module is no longer used. |

## Procedures

- `SendRequest(Url: Text; Timeout: Integer)`

## Across versions

- Present in: BC28, BC29, BC30
- Changed (declaration) in: none
- Obsolete: Pending since 28.0, "This module is no longer used."

## Deprecations

- object: Pending 28.0 (#if not CLEAN28), "This module is no longer used."

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
