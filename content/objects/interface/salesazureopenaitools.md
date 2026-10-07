---
id: object/interface/salesazureopenaitools
type: object
title: Interface "SalesAzureOpenAITools"
summary: Interface "SalesAzureOpenAITools" in SalesLinesSuggestions (Microsoft.Sales.Document). 2 public procedures. Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - interface
  - saleslinessuggestions
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
  at: "2026-10-07T15:47:18.976Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 305b1c0633d1bf274f4c87b6037cd9a71163ca0ec428a9eafa31c3295ab371d5
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Apps/W1/SalesLinesSuggestions/app/SalesAzureOpenAITools/SalesAzureOpenAITools.Interface.al
    title: src/Apps/W1/SalesLinesSuggestions/app/SalesAzureOpenAITools/SalesAzureOpenAITools.Interface.al (releases/29.x)
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
name: SalesAzureOpenAITools
namespace: Microsoft.Sales.Document
app: SalesLinesSuggestions
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
  procedures: 2
  events: 0
  subscribers: 0
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Interface "SalesAzureOpenAITools"

> Interface "SalesAzureOpenAITools" in SalesLinesSuggestions (Microsoft.Sales.Document). 2 public procedures. Introduced in BC29, still in BC30.

SalesLinesSuggestions · Microsoft.Sales.Document · BC29-30 · [source at 030de383](https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Apps/W1/SalesLinesSuggestions/app/SalesAzureOpenAITools/SalesAzureOpenAITools.Interface.al) · facts from BC29

## Properties

| Property | Value |
|---|---|
| Access | Internal |

## Procedures

- `GetToolPrompt(): JsonObject`: Get the prompt for the Tool. Tool prompt object describes the Tool and the should contain the following fields: - Type: The name of the Tool, currently only function type is supported. For functions following fields are allowed: -- Name: The name of the Tool. (Required) -- Description: The descripti...
- `ToolCall(Arguments: JsonObject; CustomDimension: Dictionary of [Text, Text]): Variant`: This function is invoked as a response from Azure Open AI. -Arguments: The expected parameters of the Tool defined. -CustomDimension: This can be used to pass any context information to the function. The function returns a variant, and it's up to the implementation to decide what to return.

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "interface", object_name: "SalesAzureOpenAITools")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node interface "SalesAzureOpenAITools"`

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
