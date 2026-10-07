---
id: object/interface/errormessagefix
type: object
title: Interface "ErrorMessageFix"
summary: Interface "ErrorMessageFix" in ErrorMessagesWithRecommendations (Microsoft.Shared.Error). 3 public procedures. Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - interface
  - errormessageswithrecommendations
versions:
  introduced: "29"
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
  input_hash: 0dda6c46cf8d304f44e19a7bd52b7fed8a238fd2f6cc8bd74f7d0f5d2edecd03
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/ErrorMessagesWithRecommendations/app/src/Interface/ErrorMessageFix.Interface.al
    title: src/Apps/W1/ErrorMessagesWithRecommendations/app/src/Interface/ErrorMessageFix.Interface.al (releases/29.x)
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
name: ErrorMessageFix
namespace: Microsoft.Shared.Error
app: ErrorMessagesWithRecommendations
extends: null
first_version: "29"
last_version: "30"
present_in:
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
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Interface "ErrorMessageFix"

> Interface "ErrorMessageFix" in ErrorMessagesWithRecommendations (Microsoft.Shared.Error). 3 public procedures. Introduced in BC29, still in BC30.

ErrorMessagesWithRecommendations · Microsoft.Shared.Error · BC29-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/ErrorMessagesWithRecommendations/app/src/Interface/ErrorMessageFix.Interface.al) · facts from BC29

## Procedures

- `OnSetErrorMessageProps(var ErrorMessage: Record "Error Message" temporary)`
- `OnFixError(ErrorMessage: Record "Error Message" temporary): Boolean`: Execute this procedure to fix the error. Return the execution status. If the error is fixed, the error message status will be set to Fixed and the OnSuccessMessage() will be shown. If the error is not fixed, the error message status will be set to Not Fixed.
- `OnSuccessMessage(): Text`: Show a acknowledgement message on successfully fixing the error. OnFixError and OnSuccessMessage are executed with the same instance of the interface. This means that the interface can store information from OnFixError() and use it in the OnSuccessMessage().

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
