---
id: object/profile/payroll-administrator-us
type: object
title: Profile "PAYROLL ADMINISTRATOR" (US)
summary: Profile "PAYROLL ADMINISTRATOR" (US) in the US country layer. Introduced in BC29, still in BC30.
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
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T23:32:29.863Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 13c017209761dc8d0e5dce098912b238bb270d4d2b972902a2e52469fded9ac1
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Layers/NA/BaseApp/Profiles/PayrollAdministrator.Profile.al
    title: src/Layers/NA/BaseApp/Profiles/PayrollAdministrator.Profile.al (releases/29.x)
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
    - localization/us
  videos: []
  posts: []
  guidelines: []
object_type: profile
object_id: null
name: PAYROLL ADMINISTRATOR
caption: Payroll Administrator
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

# Profile "PAYROLL ADMINISTRATOR" (US)

> Profile "PAYROLL ADMINISTRATOR" (US) in the US country layer. Introduced in BC29, still in BC30.

US country layer · captioned "Payroll Administrator" · BC29-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Layers/NA/BaseApp/Profiles/PayrollAdministrator.Profile.al) · facts from BC29

An object of the [US localization](../../localizations/us.md), not part of W1.

## Properties

| Property | Value |
|---|---|
| Caption | Payroll Administrator |

## Across versions

- Present in: BC29-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "profile", object_name: "PAYROLL ADMINISTRATOR")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.

A US country object, not part of W1: the default corpus does not have it; `bcatlas_list_countries` shows which countries the atlas has.
