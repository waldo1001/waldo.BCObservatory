---
id: object/interface/appsource-product-manager-dependencies
type: object
title: Interface "AppSource Product Manager Dependencies"
summary: Interface "AppSource Product Manager Dependencies" in System Application (System.Apps.AppSource). 8 public procedures. Introduced in BC24, still in BC30.
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
  at: "2026-10-08T06:17:47.117Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 1871937b9d8b04a269cfa4343c79b1bdccfae882e91ff96927223ccf2d53f7d9
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/47ed09ca325f485d61415c1d6926ab8f0518336d/src/System%20Application/App/AppSource%20Gallery/src/AppSourceProductManagerDependencies.Interface.al
    title: src/System Application/App/AppSource Gallery/src/AppSourceProductManagerDependencies.Interface.al (releases/29.x)
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
name: AppSource Product Manager Dependencies
namespace: System.Apps.AppSource
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
  procedures: 8
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
  implemented_by: 1
---

# Interface "AppSource Product Manager Dependencies"

> Interface "AppSource Product Manager Dependencies" in System Application (System.Apps.AppSource). 8 public procedures. Introduced in BC24, still in BC30.

System Application · System.Apps.AppSource · BC24-30 · [source at 47ed09ca](https://github.com/microsoft/BCApps/blob/47ed09ca325f485d61415c1d6926ab8f0518336d/src/System%20Application/App/AppSource%20Gallery/src/AppSourceProductManagerDependencies.Interface.al) · facts from BC29

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

## Implemented by

- [Codeunit 2518 "AppSrc Product Deps. Provider"](../codeunit/2518.md)

## Across versions

- Present in: BC24-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). The call sections above are our own, per object, from the BC29 call graph. For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "interface", object_name: "AppSource Product Manager Dependencies")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
