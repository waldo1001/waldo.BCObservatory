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
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T15:47:18.976Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: d9b6135e47238333203b79b3202884e9420177d81d73475d311639c60939de05
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/System%20Application/App/AI/src/Azure%20OpenAI/Chat%20Completion/Tools/AOAIFunction.Interface.al
    title: src/System Application/App/AI/src/Azure OpenAI/Chat Completion/Tools/AOAIFunction.Interface.al (releases/29.x)
    date: null
    commit: 030de38360c4aa828a650300faf93cd09fa139e1
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
---

# Interface "AOAI Function"

> Interface "AOAI Function" in System Application (System.AI). 3 public procedures. Introduced in BC24, still in BC30.

System Application · System.AI · BC24-30 · [source at 030de383](https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/System%20Application/App/AI/src/Azure%20OpenAI/Chat%20Completion/Tools/AOAIFunction.Interface.al) · facts from BC29

## Properties

| Property | Value |
|---|---|
| Access | Public |

## Procedures

- `GetPrompt(): JsonObject`: Get the prompt for the Function. Function prompt object describes the Function and the should contain the following fields: - Type: The name of the Function, currently only function type is supported. For functions following fields are allowed: -- Name: The name of the Function. (Required) -- Descri...
- `Execute(Arguments: JsonObject): Variant`: This function is invoked as a response from Azure OpenAI. -Arguments: The expected parameters of the Function defined. The function returns a variant, and it's up to the implementation to decide what to return.
- `GetName(): Text`: Get the name of the function.

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "interface", object_name: "AOAI Function")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node interface "AOAI Function"`

## Across versions

- Present in: BC24, BC25, BC26, BC27, BC28, BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
