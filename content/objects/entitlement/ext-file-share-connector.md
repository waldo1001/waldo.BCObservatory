---
id: object/entitlement/ext-file-share-connector
type: object
title: Entitlement "Ext. File Share Connector"
summary: Entitlement "Ext. File Share Connector" in External File Storage - Azure File Service Connector (System.ExternalFileStorage). Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - entitlement
  - external file storage - azure file service connector
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
  at: "2026-10-08T06:17:47.117Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 11206f1d8d177e63a5008fc0f224d8058fa239ad62a77887ff873e4ab70da2f5
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/47ed09ca325f485d61415c1d6926ab8f0518336d/src/Apps/W1/External%20File%20Storage%20-%20Azure%20File%20Service%20Connector/app/Entitlements/ExtFileShareConnector.Entitlement.al
    title: src/Apps/W1/External File Storage - Azure File Service Connector/app/Entitlements/ExtFileShareConnector.Entitlement.al (releases/29.x)
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
object_type: entitlement
object_id: null
name: Ext. File Share Connector
namespace: System.ExternalFileStorage
app: External File Storage - Azure File Service Connector
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
  procedures: 0
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
---

# Entitlement "Ext. File Share Connector"

> Entitlement "Ext. File Share Connector" in External File Storage - Azure File Service Connector (System.ExternalFileStorage). Introduced in BC29, still in BC30.

External File Storage - Azure File Service Connector · System.ExternalFileStorage · BC29-30 · [source at 47ed09ca](https://github.com/microsoft/BCApps/blob/47ed09ca325f485d61415c1d6926ab8f0518336d/src/Apps/W1/External%20File%20Storage%20-%20Azure%20File%20Service%20Connector/app/Entitlements/ExtFileShareConnector.Entitlement.al) · facts from BC29

## Across versions

- Present in: BC29-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "entitlement", object_name: "Ext. File Share Connector")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
