---
id: object/interface/image-analysis-provider
type: object
title: Interface "Image Analysis Provider"
summary: Interface "Image Analysis Provider" in Base Application (System.AI). 5 public procedures. Present since at least BC23, still in BC30, changed in BC24, BC27.
tier: official
language: en
tags:
  - interface
  - base application
versions:
  introduced: null
  last_changed: "27"
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
  input_hash: 999a360241b05010d44d0d8c1351103a6b467a65508dcdc3e078b79abf37582a
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/47ed09ca325f485d61415c1d6926ab8f0518336d/src/Layers/W1/BaseApp/System/AI/ImageAnalysis/ImageAnalysisProvider.Interface.al
    title: src/Layers/W1/BaseApp/System/AI/ImageAnalysis/ImageAnalysisProvider.Interface.al (releases/29.x)
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
name: Image Analysis Provider
namespace: System.AI
app: Base Application
extends: null
first_version: "23"
last_version: "30"
present_in:
  - "23"
  - "24"
  - "25"
  - "26"
  - "27"
  - "28"
  - "29"
  - "30"
changed_in:
  - "24"
  - "27"
source_major: "29"
obsolete: null
countries: []
ms_search_form_ids: []
counts:
  fields: 0
  procedures: 5
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

# Interface "Image Analysis Provider"

> Interface "Image Analysis Provider" in Base Application (System.AI). 5 public procedures. Present since at least BC23, still in BC30, changed in BC24, BC27.

Base Application · System.AI · BC23-30 · [source at 47ed09ca](https://github.com/microsoft/BCApps/blob/47ed09ca325f485d61415c1d6926ab8f0518336d/src/Layers/W1/BaseApp/System/AI/ImageAnalysis/ImageAnalysisProvider.Interface.al) · facts from BC29

## Properties

| Property | Value |
|---|---|
| Access | Internal |

## Procedures

- `IsLanguageSupported(AnalysisTypes: List of [Enum "Image Analysis Type"]; Language: Integer): Boolean`
- `InvokeAnalysis(var JSONManagement: Codeunit "JSON Management"; BaseUrl: Text; ImageAnalysisKey: SecretText; ImagePath: Text; ImageAnalysisTypes: List of [Enum "Image Analysis Type"]; LanguageId: Integer): Boolean`
- `SetUseOAuth2(UseOAuth2: Boolean)`
- `IsMediaSupported(MediaID: Guid): Boolean`
- `GetLastError(): Text`

## Across versions

- Present in: BC23-30
- Changed (declaration) in: BC24, BC27

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "interface", object_name: "Image Analysis Provider")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
