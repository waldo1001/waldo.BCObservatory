---
id: object/interface/iedocaisystem
type: object
title: Interface "IEDocAISystem"
summary: Interface "IEDocAISystem" in EDocument (Microsoft.eServices.EDocument.Processing.AI). 3 public procedures. Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - interface
  - edocument
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
  at: "2026-10-07T21:07:03.029Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 8179738ec9318726d6f0ad4fe0bedb85e67ef04adc555812dabadb955fedcefe
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Apps/W1/EDocument/app/src/Processing/Interfaces/IEDocAISystem.Interface.al
    title: src/Apps/W1/EDocument/app/src/Processing/Interfaces/IEDocAISystem.Interface.al (releases/29.x)
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
name: IEDocAISystem
namespace: Microsoft.eServices.EDocument.Processing.AI
app: EDocument
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
  calls: 0
  called_by: 0
  implements: 0
  implemented_by: 0
---

# Interface "IEDocAISystem"

> Interface "IEDocAISystem" in EDocument (Microsoft.eServices.EDocument.Processing.AI). 3 public procedures. Introduced in BC29, still in BC30.

EDocument · Microsoft.eServices.EDocument.Processing.AI · BC29-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Apps/W1/EDocument/app/src/Processing/Interfaces/IEDocAISystem.Interface.al) · facts from BC29

## Properties

| Property | Value |
|---|---|
| Access | Public |

## Procedures

- `GetSystemPrompt(UserLanguage: Text): SecretText`
- `GetTools(): List of [Interface "AOAI Function"]`: Gets the list of AOAI Function tools that define what functions the AI model can call during processing. These tools enable the AI to perform specific actions like matching GL accounts, classifying documents, or processing deferrals.
- `GetFeatureName(): Text`: Gets the feature name used for telemetry tracking and logging purposes. This name is used to track feature usage, success rates, and error reporting in telemetry.

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "interface", object_name: "IEDocAISystem")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node interface "IEDocAISystem"`

## Across versions

- Present in: BC29-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
