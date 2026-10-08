---
id: object/controladdin/oauthcontroladdin
type: object
title: Control add-in "OAuthControlAddIn"
summary: Control add-in "OAuthControlAddIn" in System Application (System.Security.Authentication). 1 public procedures. Present since at least BC23, still in BC30, changed in BC24.
tier: official
language: en
tags:
  - controladdin
  - system application
versions:
  introduced: null
  last_changed: "24"
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
  input_hash: 1c8a10b0383fe6599f753d16a62d701356010ca50ed72bc376880b9d9bedfb09
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/47ed09ca325f485d61415c1d6926ab8f0518336d/src/System%20Application/App/ControlAddIns/src/OAuthControlAddIn.ControlAddIn.al
    title: src/System Application/App/ControlAddIns/src/OAuthControlAddIn.ControlAddIn.al (releases/29.x)
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
object_type: controladdin
object_id: null
name: OAuthControlAddIn
namespace: System.Security.Authentication
app: System Application
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
  called_by: 1
  implements: 0
---

# Control add-in "OAuthControlAddIn"

> Control add-in "OAuthControlAddIn" in System Application (System.Security.Authentication). 1 public procedures. Present since at least BC23, still in BC30, changed in BC24.

System Application · System.Security.Authentication · BC23-30 · [source at 47ed09ca](https://github.com/microsoft/BCApps/blob/47ed09ca325f485d61415c1d6926ab8f0518336d/src/System%20Application/App/ControlAddIns/src/OAuthControlAddIn.ControlAddIn.al) · facts from BC29

## Procedures

- `StartAuthorization(AuthRequestUrl: Text)`: Starts the authorization process.

## Called by

From the extracted call graph of BC29 (graphify-al on the snapshot checkout): calls whose target is known from a declared type or an `Object::"Name"` argument. Interface dispatch and calls through events are not counted, so the list is not complete.

- [Page 1830 "MS - QBO Data Migration"](../page/1830.md) (1 call: `StartAuthorizationProcess → StartAuthorization`)

## Across versions

- Present in: BC23-30
- Changed (declaration) in: BC24

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). The call sections above are our own, per object, from the BC29 call graph. For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "controladdin", object_name: "OAuthControlAddIn")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
