---
id: object/profile/accountant-cz-czl-cz
type: object
title: Profile "Accountant CZ CZL" (CZ)
summary: Profile "Accountant CZ CZL" (CZ) in the CZ country layer (Microsoft.Finance.RoleCenters). Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - profile
  - cz layer
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
  input_hash: b26094d2c3b8847fc8a16934eccb61731ffe35da30175fdb32cc3627f8195020
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Apps/CZ/CoreLocalizationPack/app/Src/Profiles/AccountantCZCZL.Profile.al
    title: src/Apps/CZ/CoreLocalizationPack/app/Src/Profiles/AccountantCZCZL.Profile.al (releases/29.x)
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
    - localization/cz
  videos: []
  posts: []
  guidelines: []
object_type: profile
object_id: null
name: Accountant CZ CZL
caption: Accountant CZ
namespace: Microsoft.Finance.RoleCenters
app: CoreLocalizationPack
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
country: CZ
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

# Profile "Accountant CZ CZL" (CZ)

> Profile "Accountant CZ CZL" (CZ) in the CZ country layer (Microsoft.Finance.RoleCenters). Introduced in BC29, still in BC30.

CZ country layer · Microsoft.Finance.RoleCenters · BC29-30 · [source at 030de383](https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Apps/CZ/CoreLocalizationPack/app/Src/Profiles/AccountantCZCZL.Profile.al) · facts from BC29

An object of the [CZ localization](../../localizations/cz.md), not part of W1.

## Properties

| Property | Value |
|---|---|
| Caption | Accountant CZ |

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "profile", object_name: "Accountant CZ CZL")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node profile "Accountant CZ CZL"`

A CZ country object, not part of W1: the default corpus does not have it; `bcatlas_list_countries` shows which countries the atlas has.

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
