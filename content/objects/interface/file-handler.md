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
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-06T17:21:46.353Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 1288c99e2e64a7a78eaca22685263d369ab170762e0e54c7d8fc26d985ed053b
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/SalesLinesSuggestions/app/Attachment/FileHandlers/FileHandler.Interface.al
    title: src/Apps/W1/SalesLinesSuggestions/app/Attachment/FileHandlers/FileHandler.Interface.al (releases/29.x)
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
---

# Interface "File Handler"

> Interface "File Handler" in SalesLinesSuggestions (Microsoft.Sales.Document.Attachment). 3 public procedures. Introduced in BC29, still in BC30.

SalesLinesSuggestions · Microsoft.Sales.Document.Attachment · BC29-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/SalesLinesSuggestions/app/Attachment/FileHandlers/FileHandler.Interface.al) · facts from BC29

## Properties

| Property | Value |
|---|---|
| Access | Internal |

## Procedures

- `Process(var FileInputStream: InStream): Variant`: Processes the file input stream that is passed to the function.
- `GetFileData(FileHandlerResultVariant: Variant): List of [List of [Text]]`: Gets the data as a table from the file based on the file handler result.
- `Finalize(FileHandlerResultVariant: Variant)`: Finalizes the file handler.

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
