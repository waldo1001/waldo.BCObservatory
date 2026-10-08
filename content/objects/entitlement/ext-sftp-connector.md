---
id: object/entitlement/ext-sftp-connector
type: object
title: Entitlement "Ext. SFTP Connector"
summary: Entitlement "Ext. SFTP Connector" in External File Storage - SFTP Connector (System.ExternalFileStorage). Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - entitlement
  - external file storage - sftp connector
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
  input_hash: 2629f1c168560f1c8f820c9716ec98ca2a11f26fbdaaaa23ee96e03a0c6e71fb
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Apps/W1/External%20File%20Storage%20-%20SFTP%20Connector/app/Entitlements/ExtSFTPConnector.Entitlement.al
    title: src/Apps/W1/External File Storage - SFTP Connector/app/Entitlements/ExtSFTPConnector.Entitlement.al (releases/29.x)
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
object_type: entitlement
object_id: null
name: Ext. SFTP Connector
namespace: System.ExternalFileStorage
app: External File Storage - SFTP Connector
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

# Entitlement "Ext. SFTP Connector"

> Entitlement "Ext. SFTP Connector" in External File Storage - SFTP Connector (System.ExternalFileStorage). Introduced in BC29, still in BC30.

External File Storage - SFTP Connector · System.ExternalFileStorage · BC29-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Apps/W1/External%20File%20Storage%20-%20SFTP%20Connector/app/Entitlements/ExtSFTPConnector.Entitlement.al) · facts from BC29

## Across versions

- Present in: BC29-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "entitlement", object_name: "Ext. SFTP Connector")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
