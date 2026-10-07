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
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T15:47:18.976Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 9fa49eb4f46097a4fdafa1d10ecd715f864d8cca83615c891e538ef8cde1c18c
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/System%20Application/App/AppSource%20Gallery/src/AppSourceProductManagerDependencies.Interface.al
    title: src/System Application/App/AppSource Gallery/src/AppSourceProductManagerDependencies.Interface.al (releases/29.x)
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
---

# Interface "AppSource Product Manager Dependencies"

> Interface "AppSource Product Manager Dependencies" in System Application (System.Apps.AppSource). 8 public procedures. Introduced in BC24, still in BC30.

System Application · System.Apps.AppSource · BC24-30 · [source at 030de383](https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/System%20Application/App/AppSource%20Gallery/src/AppSourceProductManagerDependencies.Interface.al) · facts from BC29

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

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "interface", object_name: "AppSource Product Manager Dependencies")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node interface "AppSource Product Manager Dependencies"`

## Across versions

- Present in: BC24, BC25, BC26, BC27, BC28, BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
