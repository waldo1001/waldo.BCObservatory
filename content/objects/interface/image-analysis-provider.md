---
id: object/interface/image-analysis-provider
type: object
title: Interface "Image Analysis Provider"
summary: Interface "Image Analysis Provider" in Base Application (System.AI). 5 public procedures. Introduced in BC25, still in BC30, changed in BC27.
tier: official
language: en
tags:
  - interface
  - base application
versions:
  introduced: "25"
  last_changed: "27"
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
  input_hash: b4c49e3b94f811b6f978e8aebd4d33c94c335e87c4eb3248c2c2a787afc7a278
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Layers/W1/BaseApp/System/AI/ImageAnalysis/ImageAnalysisProvider.Interface.al
    title: src/Layers/W1/BaseApp/System/AI/ImageAnalysis/ImageAnalysisProvider.Interface.al (releases/29.x)
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
name: Image Analysis Provider
namespace: System.AI
app: Base Application
extends: null
first_version: "25"
last_version: "30"
present_in:
  - "25"
  - "26"
  - "27"
  - "28"
  - "29"
  - "30"
changed_in:
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
---

# Interface "Image Analysis Provider"

> Interface "Image Analysis Provider" in Base Application (System.AI). 5 public procedures. Introduced in BC25, still in BC30, changed in BC27.

Base Application · System.AI · BC25-30 · [source at 030de383](https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Layers/W1/BaseApp/System/AI/ImageAnalysis/ImageAnalysisProvider.Interface.al) · facts from BC29

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

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "interface", object_name: "Image Analysis Provider")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node interface "Image Analysis Provider"`

## Across versions

- Present in: BC25, BC26, BC27, BC28, BC29, BC30
- Changed (declaration) in: BC27

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
