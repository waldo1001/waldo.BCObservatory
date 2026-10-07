---
id: object/profile/hr-manager-us
type: object
title: Profile "HR MANAGER" (US)
summary: Profile "HR MANAGER" (US) in the US country layer. Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - profile
  - us layer
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
  at: "2026-10-07T15:47:18.976Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: d01610a69845ac668a7ff5d9aece4ac005fe6eeb428dc87346e5daa66423812e
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Layers/NA/BaseApp/Profiles/HRManager.Profile.al
    title: src/Layers/NA/BaseApp/Profiles/HRManager.Profile.al (releases/29.x)
    date: null
    commit: 030de38360c4aa828a650300faf93cd09fa139e1
    t: null
    quote: null
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations:
    - localization/us
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
country: US
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

# Profile "HR MANAGER" (US)

> Profile "HR MANAGER" (US) in the US country layer. Introduced in BC29, still in BC30.

US country layer · BC29-30 · [source at 030de383](https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Layers/NA/BaseApp/Profiles/HRManager.Profile.al) · facts from BC29

An object of the [US localization](../../localizations/us.md), not part of W1.

## Properties

| Property | Value |
|---|---|
| Caption | Human Resources Manager |

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "profile", object_name: "HR MANAGER")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node profile "HR MANAGER"`

A US country object, not part of W1: the default corpus does not have it; `bcatlas_list_countries` shows which countries the atlas has.

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
