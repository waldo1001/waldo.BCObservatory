---
id: object/interface/file-handler
type: object
title: Interface "File Handler"
summary: Interface "File Handler" in SalesLinesSuggestions (Microsoft.Sales.Document.Attachment). 3 public procedures. Introduced in BC29, still in BC30.
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
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T23:32:29.863Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 189c1936bb92b56d93d5226ae6090fc6e9ffb0aa95f70ef7cd5e9bfe3dae92a9
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Apps/W1/SalesLinesSuggestions/app/Attachment/FileHandlers/FileHandler.Interface.al
    title: src/Apps/W1/SalesLinesSuggestions/app/Attachment/FileHandlers/FileHandler.Interface.al (releases/29.x)
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
name: File Handler
namespace: Microsoft.Sales.Document.Attachment
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
  implemented_by: 2
---

# Interface "File Handler"

> Interface "File Handler" in SalesLinesSuggestions (Microsoft.Sales.Document.Attachment). 3 public procedures. Introduced in BC29, still in BC30.

SalesLinesSuggestions · Microsoft.Sales.Document.Attachment · BC29-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Apps/W1/SalesLinesSuggestions/app/Attachment/FileHandlers/FileHandler.Interface.al) · facts from BC29

## Properties

| Property | Value |
|---|---|
| Access | Internal |

## Procedures

- `Process(var FileInputStream: InStream): Variant`: Processes the file input stream that is passed to the function.
- `GetFileData(FileHandlerResultVariant: Variant): List of [List of [Text]]`: Gets the data as a table from the file based on the file handler result.
- `Finalize(FileHandlerResultVariant: Variant)`: Finalizes the file handler.

## Implemented by

- [Codeunit 7293 "Csv Handler"](../codeunit/7293.md)
- [Enum 7275 "File Handler Type"](../enum/7275.md)

## Across versions

- Present in: BC29-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). The call sections above are our own, per object, from the BC29 call graph. For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "interface", object_name: "File Handler")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
