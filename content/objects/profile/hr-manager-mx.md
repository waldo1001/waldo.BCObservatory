---
id: object/profile/hr-manager-mx
type: object
title: Profile "HR MANAGER" (MX)
summary: Profile "HR MANAGER" (MX) in the MX country layer. Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - profile
  - mx layer
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
  at: "2026-10-07T21:07:03.029Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 9f787259b223a0c22af97fd258d588c3fb4d9eba9c16308faa45c56ca5f1a4ec
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Layers/NA/BaseApp/Profiles/HRManager.Profile.al
    title: src/Layers/NA/BaseApp/Profiles/HRManager.Profile.al (releases/29.x)
    date: null
    commit: fe31a4253b4aa8fde426364f132f5689d4dfcddf
    t: null
    quote: null
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations:
    - localization/mx
  videos: []
  posts: []
  guidelines: []
object_type: profile
object_id: null
name: HR MANAGER
caption: Human Resources Manager
namespace: null
app: Base Application
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
country: MX
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
---

# Profile "HR MANAGER" (MX)

> Profile "HR MANAGER" (MX) in the MX country layer. Introduced in BC29, still in BC30.

MX country layer · captioned "Human Resources Manager" · BC29-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Layers/NA/BaseApp/Profiles/HRManager.Profile.al) · facts from BC29

An object of the [MX localization](../../localizations/mx.md), not part of W1.

## Properties

| Property | Value |
|---|---|
| Caption | Human Resources Manager |

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "profile", object_name: "HR MANAGER")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node profile "HR MANAGER"`

A MX country object, not part of W1: the default corpus does not have it; `bcatlas_list_countries` shows which countries the atlas has.

## Across versions

- Present in: BC29-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
