---
id: object/interface/imdm-source-transport
type: object
title: Interface "IMDM Source Transport"
summary: Interface "IMDM Source Transport" in MasterDataManagement (Microsoft.Integration.MDM). 3 public procedures. Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - interface
  - masterdatamanagement
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
  at: "2026-10-07T09:46:58.909Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 1247f0df63aecf30134cd608a271332ced363d684087b30ce65ea8a18247579b
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/Apps/W1/MasterDataManagement/app/src/interfaces/IMDMSourceTransport.Interface.al
    title: src/Apps/W1/MasterDataManagement/app/src/interfaces/IMDMSourceTransport.Interface.al (releases/29.x)
    date: null
    commit: 1d24dd5ee2a734510f0556ccc69342d0e616db2f
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
name: IMDM Source Transport
namespace: Microsoft.Integration.MDM
app: MasterDataManagement
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
---

# Interface "IMDM Source Transport"

> Interface "IMDM Source Transport" in MasterDataManagement (Microsoft.Integration.MDM). 3 public procedures. Introduced in BC29, still in BC30.

MasterDataManagement · Microsoft.Integration.MDM · BC29-30 · [source at 1d24dd5e](https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/Apps/W1/MasterDataManagement/app/src/interfaces/IMDMSourceTransport.Interface.al) · facts from BC29

## Properties

| Property | Value |
|---|---|
| Access | Internal |

## Procedures

- `GetRecords(TableId: Integer; FieldIds: Text; Selector: Text; PageSize: Integer; Filter: Text): Text`
- `LastModifiedAtPerTable(TableIds: Text): Text`
- `GetCapabilities(): Text`

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
