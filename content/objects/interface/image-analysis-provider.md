---
id: object/interface/image-analysis-provider
type: object
title: Interface "Image Analysis Provider"
summary: Interface "Image Analysis Provider" in Base Application (System.AI). 5 public procedures. Present since at least BC28, still in BC30.
tier: official
language: en
tags:
  - interface
  - base application
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
  at: "2026-10-06T23:56:28.878Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: eb0e402a8c63b8a24a216c8b38260f101a14121d45f3e885c7cc936e49fd805a
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Layers/W1/BaseApp/System/AI/ImageAnalysis/ImageAnalysisProvider.Interface.al
    title: src/Layers/W1/BaseApp/System/AI/ImageAnalysis/ImageAnalysisProvider.Interface.al (releases/29.x)
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
name: Image Analysis Provider
namespace: System.AI
app: Base Application
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

> Interface "Image Analysis Provider" in Base Application (System.AI). 5 public procedures. Present since at least BC28, still in BC30.

Base Application · System.AI · BC28-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Layers/W1/BaseApp/System/AI/ImageAnalysis/ImageAnalysisProvider.Interface.al) · facts from BC29

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

- Present in: BC28, BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
