---
id: object/profile/companyhub
type: object
title: Profile "CompanyHub"
summary: Profile "CompanyHub" in CompanyHub (Mirosoft.Integration.CompanyHub). Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - profile
  - companyhub
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
  input_hash: 562a9c0a2ef226298cd8af3522074a658cee522f6ca935ba68a3c65b61b7d22a
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Apps/W1/CompanyHub/app/src/Setup/CompanyHub.Profile.al
    title: src/Apps/W1/CompanyHub/app/src/Setup/CompanyHub.Profile.al (releases/29.x)
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
object_type: profile
object_id: null
name: CompanyHub
caption: Company Hub
namespace: Mirosoft.Integration.CompanyHub
app: CompanyHub
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
---

# Profile "CompanyHub"

> Profile "CompanyHub" in CompanyHub (Mirosoft.Integration.CompanyHub). Introduced in BC29, still in BC30.

CompanyHub · Mirosoft.Integration.CompanyHub · BC29-30 · [source at 030de383](https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Apps/W1/CompanyHub/app/src/Setup/CompanyHub.Profile.al) · facts from BC29

## Properties

| Property | Value |
|---|---|
| Caption | Company Hub |

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "profile", object_name: "CompanyHub")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node profile "CompanyHub"`

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
