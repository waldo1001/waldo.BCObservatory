---
id: object/interface/aoai-function
type: object
title: Interface "AOAI Function"
summary: Interface "AOAI Function" in System Application (System.AI). 3 public procedures. Present since at least BC28, still in BC30.
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
  at: "2026-10-07T09:46:58.909Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 4dfb7f66a365e5773959f62b7dabe221fe1cb5687c618ff804d3a7bceeb86624
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/System%20Application/App/AI/src/Azure%20OpenAI/Chat%20Completion/Tools/AOAIFunction.Interface.al
    title: src/System Application/App/AI/src/Azure OpenAI/Chat Completion/Tools/AOAIFunction.Interface.al (releases/29.x)
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
object_type: interface
object_id: null
name: AOAI Function
namespace: System.AI
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
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Interface "AOAI Function"

> Interface "AOAI Function" in System Application (System.AI). 3 public procedures. Present since at least BC28, still in BC30.

System Application · System.AI · BC28-30 · [source at 1d24dd5e](https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/System%20Application/App/AI/src/Azure%20OpenAI/Chat%20Completion/Tools/AOAIFunction.Interface.al) · facts from BC29

## Properties

| Property | Value |
|---|---|
| Access | Public |

## Procedures

- `GetPrompt(): JsonObject`: Get the prompt for the Function. Function prompt object describes the Function and the should contain the following fields: - Type: The name of the Function, currently only function type is supported. For functions following fields are allowed: -- Name: The name of the Function. (Required) -- Descri...
- `Execute(Arguments: JsonObject): Variant`: This function is invoked as a response from Azure OpenAI. -Arguments: The expected parameters of the Function defined. The function returns a variant, and it's up to the implementation to decide what to return.
- `GetName(): Text`: Get the name of the function.

## Across versions

- Present in: BC28, BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
