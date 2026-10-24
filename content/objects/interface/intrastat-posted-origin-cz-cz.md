---
id: object/interface/intrastat-posted-origin-cz-cz
type: object
title: Interface "Intrastat Posted Origin CZ" (CZ)
summary: Interface "Intrastat Posted Origin CZ" (CZ) in the CZ country layer (Microsoft.Inventory.Intrastat). 1 public procedures. Introduced in BC30.
tier: official
language: en
tags:
  - interface
  - cz layer
versions:
  introduced: "30"
  last_changed: null
  deprecated: null
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-24T01:15:39.036Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 8d03f9657ed6e9e74b2f0bf10b2c55e1b2c17b4e923199f04f73350e28b7d790
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/15385dede95a4f9e7be01be47c684fc9d654a7ce/src/Apps/CZ/IntrastatCZ/app/src/Interfaces/IntrastatPostedOriginCZ.Interface.al
    title: src/Apps/CZ/IntrastatCZ/app/src/Interfaces/IntrastatPostedOriginCZ.Interface.al (main)
    date: null
    commit: 15385dede95a4f9e7be01be47c684fc9d654a7ce
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
object_type: interface
object_id: null
name: Intrastat Posted Origin CZ
namespace: Microsoft.Inventory.Intrastat
app: IntrastatCZ
extends: null
first_version: "30"
last_version: "30"
present_in:
  - "30"
changed_in: []
source_major: "30"
obsolete: null
countries: []
ms_search_form_ids: []
country: CZ
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
---

# Interface "Intrastat Posted Origin CZ" (CZ)

> Interface "Intrastat Posted Origin CZ" (CZ) in the CZ country layer (Microsoft.Inventory.Intrastat). 1 public procedures. Introduced in BC30.

CZ country layer · Microsoft.Inventory.Intrastat · BC30 · [source at 15385ded](https://github.com/microsoft/BCApps/blob/15385dede95a4f9e7be01be47c684fc9d654a7ce/src/Apps/CZ/IntrastatCZ/app/src/Interfaces/IntrastatPostedOriginCZ.Interface.al) · facts from BC30

An object of the [CZ localization](../../localizations/cz.md), not part of W1.

## Procedures

- `GetCountryOfOriginCode(IntrastatReportLine: Record "Intrastat Report Line"): Code[10]`

## Across versions

- Present in: BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "interface", object_name: "Intrastat Posted Origin CZ")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.

A CZ country object, not part of W1: the default corpus does not have it; `bcatlas_list_countries` shows which countries the atlas has.
