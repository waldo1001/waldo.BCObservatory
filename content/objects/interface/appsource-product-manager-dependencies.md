---
id: object/interface/appsource-product-manager-dependencies
type: object
title: Interface "AppSource Product Manager Dependencies"
summary: Interface "AppSource Product Manager Dependencies" in System Application (System.Apps.AppSource). 8 public procedures. Present since at least BC28, still in BC30.
tier: official
language: en
tags:
  - interface
  - system application
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
  at: "2026-10-07T01:08:41.552Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 30fb62bf8f70106e24224125624dedb217efb652e11a1a890952eba637b03271
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/System%20Application/App/AppSource%20Gallery/src/AppSourceProductManagerDependencies.Interface.al
    title: src/System Application/App/AppSource Gallery/src/AppSourceProductManagerDependencies.Interface.al (releases/29.x)
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
name: AppSource Product Manager Dependencies
namespace: System.Apps.AppSource
app: System Application
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
  procedures: 8
  events: 0
  subscribers: 0
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Interface "AppSource Product Manager Dependencies"

> Interface "AppSource Product Manager Dependencies" in System Application (System.Apps.AppSource). 8 public procedures. Present since at least BC28, still in BC30.

System Application · System.Apps.AppSource · BC28-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/System%20Application/App/AppSource%20Gallery/src/AppSourceProductManagerDependencies.Interface.al) · facts from BC29

## Properties

| Property | Value |
|---|---|
| Access | Internal |

## Procedures

- `GetCountryLetterCode(): Code[2]`
- `GetPreferredLanguage(): Text`
- `GetApplicationFamily(): Text`
- `IsSaas(): Boolean`
- `GetFormatRegionOrDefault(FormatRegion: Text[80]): Text`
- `GetAsJSon(var RestClient: Codeunit "Rest Client"; RequestUri: Text): JsonToken`
- `ShouldSetCommonHeaders(): Boolean`
- `GetUserSettings(UserSecurityID: Guid; var TempUserSettingsRecord: Record "User Settings" temporary)`

## Across versions

- Present in: BC28, BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
