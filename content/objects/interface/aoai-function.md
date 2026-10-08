---
id: object/interface/aoai-function
type: object
title: Interface "AOAI Function"
summary: Interface "AOAI Function" in System Application (System.AI). 3 public procedures. Introduced in BC24, still in BC30.
tier: official
language: en
tags:
  - interface
  - system application
versions:
  introduced: "24"
  last_changed: null
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
  input_hash: 49c6aed47cd8d6b092ca8124430c1208d0af9407cd26bae99498d988a5df672f
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/System%20Application/App/AI/src/Azure%20OpenAI/Chat%20Completion/Tools/AOAIFunction.Interface.al
    title: src/System Application/App/AI/src/Azure OpenAI/Chat Completion/Tools/AOAIFunction.Interface.al (releases/29.x)
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
object_type: interface
object_id: null
name: AOAI Function
namespace: System.AI
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
  calls: 0
  called_by: 0
  implements: 0
  implemented_by: 19
---

# Interface "AOAI Function"

> Interface "AOAI Function" in System Application (System.AI). 3 public procedures. Introduced in BC24, still in BC30.

System Application · System.AI · BC24-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/System%20Application/App/AI/src/Azure%20OpenAI/Chat%20Completion/Tools/AOAIFunction.Interface.al) · facts from BC29

## Properties

| Property | Value |
|---|---|
| Access | Public |

## Procedures

- `GetPrompt(): JsonObject`: Get the prompt for the Function. Function prompt object describes the Function and the should contain the following fields: - Type: The name of the Function, currently only function type is supported. For functions following fields are allowed: -- Name: The name of the Function. (Required) -- Descri...
- `Execute(Arguments: JsonObject): Variant`: This function is invoked as a response from Azure OpenAI. -Arguments: The expected parameters of the Function defined. The function returns a variant, and it's up to the implementation to decide what to return.
- `GetName(): Text`: Get the name of the function.

## Implemented by

- [Codeunit 2017 "Generate Prod Mkt Ad Function"](../codeunit/2017.md)
- [Codeunit 2018 "Magic Function"](../codeunit/2018.md)
- [Codeunit 331 "No. Series Cop. Add Intent"](../codeunit/331.md)
- [Codeunit 334 "No. Series Cop. Change Intent"](../codeunit/334.md)
- [Codeunit 339 "No. Series Cop. Generate"](../codeunit/339.md)
- [Codeunit 349 "No. Series Cop. Nxt Yr. Intent"](../codeunit/349.md)
- [Codeunit 4302 "SOA Validation Function"](../codeunit/4302.md)
- [Codeunit 4403 "SOA Output Message Validation"](../codeunit/4403.md)
- [Codeunit 4407 "SOA Email Template Validation"](../codeunit/4407.md)
- [Codeunit 4416 "SOA Item Selector Func"](../codeunit/4416.md)
- [Codeunit 4597 "SOA Broader Item Search Func"](../codeunit/4597.md)
- [Codeunit 6298 "Formula Breakdown Function"](../codeunit/6298.md)
- [Codeunit 6328 "Raw Formula Function"](../codeunit/6328.md)
- [Codeunit 6330 "Find Match Function"](../codeunit/6330.md)
- [Codeunit 7284 "Magic Function"](../codeunit/7284.md)
- [Codeunit 7291 "Search Items With Filters Func"](../codeunit/7291.md)
- [Codeunit 7296 "Lookup Items From Csv Function"](../codeunit/7296.md)
- [Codeunit 7341 "Magic Function"](../codeunit/7341.md)
- [Codeunit 7342 "Suggest Substitutions Function"](../codeunit/7342.md)

## Across versions

- Present in: BC24-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). The call sections above are our own, per object, from the BC29 call graph. For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "interface", object_name: "AOAI Function")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
