---
id: object/controladdin/oauthaddin
type: object
title: Control add-in "OAuthAddIn"
summary: Control add-in "OAuthAddIn" in ClientAddIns (System.Security.Authentication). 1 public procedures. Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - controladdin
  - clientaddins
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
  input_hash: 01b4c4840fa73b5695c8af6c4cb16a15931585bd09931875226090c874ceec0a
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Apps/W1/ClientAddIns/app/src/oauth/OAuthAddIn.ControlAddin.al
    title: src/Apps/W1/ClientAddIns/app/src/oauth/OAuthAddIn.ControlAddin.al (releases/29.x)
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
object_type: controladdin
object_id: null
name: OAuthAddIn
namespace: System.Security.Authentication
app: ClientAddIns
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
  procedures: 1
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

# Control add-in "OAuthAddIn"

> Control add-in "OAuthAddIn" in ClientAddIns (System.Security.Authentication). 1 public procedures. Introduced in BC29, still in BC30.

ClientAddIns · System.Security.Authentication · BC29-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Apps/W1/ClientAddIns/app/src/oauth/OAuthAddIn.ControlAddin.al) · facts from BC29

## Procedures

- `StartAuthorization(url: Text)`

## Across versions

- Present in: BC29-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "controladdin", object_name: "OAuthAddIn")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
