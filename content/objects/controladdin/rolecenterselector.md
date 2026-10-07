---
id: object/controladdin/rolecenterselector
type: object
title: Control add-in "RoleCenterSelector"
summary: Control add-in "RoleCenterSelector" in System Application (System.Environment). 3 public procedures. Introduced in BC24, still in BC30, changed in BC26.
tier: official
language: en
tags:
  - controladdin
  - system application
versions:
  introduced: "24"
  last_changed: "26"
  deprecated: null
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T21:07:03.029Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 22fab7feb3f78309fa6ecaa492852818a73b6e6cdca4ba6d14579ff62c481b42
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/System%20Application/App/ControlAddIns/src/RoleCenterSelector.ControlAddin.al
    title: src/System Application/App/ControlAddIns/src/RoleCenterSelector.ControlAddin.al (releases/29.x)
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
name: RoleCenterSelector
namespace: System.Environment
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
changed_in:
  - "26"
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
  calls: 0
  called_by: 1
  implements: 0
---

# Control add-in "RoleCenterSelector"

> Control add-in "RoleCenterSelector" in System Application (System.Environment). 3 public procedures. Introduced in BC24, still in BC30, changed in BC26.

System Application · System.Environment · BC24-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/System%20Application/App/ControlAddIns/src/RoleCenterSelector.ControlAddin.al) · facts from BC29

## Procedures

- `LoadRoleCenterFromJson(Json: Text)`
- `LoadPageDataFromJson(Json: Text)`
- `SetCurrentProfileId(ProfileId: Text)`

## Called by

From the extracted call graph of BC29 (graphify-al on the snapshot checkout): calls whose target is known from a declared type or an `Object::"Name"` argument. Interface dispatch and calls through events are not counted, so the list is not complete.

- [Page 1486 "Role Center Overview"](../page/1486.md) (1 call: `SendJsonToControlAddIn → LoadRoleCenterFromJson`)

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "controladdin", object_name: "RoleCenterSelector")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node controladdin "RoleCenterSelector"`

## Across versions

- Present in: BC24-30
- Changed (declaration) in: BC26

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
