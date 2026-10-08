---
id: object/interface/ai-service-name
type: object
title: Interface "AI Service Name"
summary: Interface "AI Service Name" in System Application (System.AI). 2 public procedures. Introduced in BC26, still in BC30.
tier: official
language: en
tags:
  - interface
  - system application
versions:
  introduced: "26"
  last_changed: null
  deprecated: null
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-08T06:17:47.117Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 235527274f2f7d5c6a3a60813ff511ef5f65d69980d7a945977f03f21c4183bf
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/47ed09ca325f485d61415c1d6926ab8f0518336d/src/System%20Application/App/AI/src/Copilot/Interfaces/AIServiceName.Interface.al
    title: src/System Application/App/AI/src/Copilot/Interfaces/AIServiceName.Interface.al (releases/29.x)
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
object_type: interface
object_id: null
name: AI Service Name
namespace: System.AI
app: System Application
extends: null
first_version: "26"
last_version: "30"
present_in:
  - "26"
  - "27"
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
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
  calls: 0
  called_by: 0
  implements: 0
  implemented_by: 3
---

# Interface "AI Service Name"

> Interface "AI Service Name" in System Application (System.AI). 2 public procedures. Introduced in BC26, still in BC30.

System Application · System.AI · BC26-30 · [source at 47ed09ca](https://github.com/microsoft/BCApps/blob/47ed09ca325f485d61415c1d6926ab8f0518336d/src/System%20Application/App/AI/src/Copilot/Interfaces/AIServiceName.Interface.al) · facts from BC29

## Procedures

- `GetServiceName(): Text[250]`
- `GetServiceId(): Code[50]`: Get the id of the service. Will often be the service name in Code form.

## Implemented by

- [Codeunit 7772 "Azure OpenAI Impl"](../codeunit/7772.md)
- [Codeunit 7779 "Azure DI Impl."](../codeunit/7779.md)
- [Enum 7778 "Azure AI Service Type"](../enum/7778.md)

## Across versions

- Present in: BC26-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). The call sections above are our own, per object, from the BC29 call graph. For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "interface", object_name: "AI Service Name")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
