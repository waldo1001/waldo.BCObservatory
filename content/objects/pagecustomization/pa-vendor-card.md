---
id: object/pagecustomization/pa-vendor-card
type: object
title: Page customization "PA Vendor Card"
summary: Page customization "PA Vendor Card" in PayablesAgent (Microsoft.Agent.PayablesAgent). Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - pagecustomization
  - payablesagent
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
  at: "2026-10-24T01:15:39.036Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: e3b1a7b6712bf4c4f38050332b31bb850c22de17cb8e78631fcf47355644a969
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/dc14cfd1217fbd3fa364b63565e752e5f0653955/src/Apps/W1/PayablesAgent/app/Profile/PageCustomizations/PAVendorCard.PageCust.al
    title: src/Apps/W1/PayablesAgent/app/Profile/PageCustomizations/PAVendorCard.PageCust.al (releases/29.x)
    date: null
    commit: dc14cfd1217fbd3fa364b63565e752e5f0653955
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
  changes:
    - change/bcapps/9904
  related:
    - to: https://learn.microsoft.com/dynamics365/business-central/payables-agent
      title: Payables Agent Overview in Business Central
      label: possibly related
      why: Documents how Payables Agent identifies and matches vendor information from invoices
      by: model
object_type: pagecustomization
object_id: null
name: PA Vendor Card
namespace: Microsoft.Agent.PayablesAgent
app: PayablesAgent
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

# Page customization "PA Vendor Card"

> Page customization "PA Vendor Card" in PayablesAgent (Microsoft.Agent.PayablesAgent). Introduced in BC29, still in BC30.

PayablesAgent · Microsoft.Agent.PayablesAgent · BC29-30 · [source at dc14cfd1](https://github.com/microsoft/BCApps/blob/dc14cfd1217fbd3fa364b63565e752e5f0653955/src/Apps/W1/PayablesAgent/app/Profile/PageCustomizations/PAVendorCard.PageCust.al) · facts from BC29

## Recent changes

- 2026-08-05 [#9904 Let the agent see and set vendor posting groups and CIF or NIF](../../changes/bcapps/9904.md) (main, BC30, fix)

## Across versions

- Present in: BC29-30
- Changed (declaration) in: none

## Possibly related

No source states these links: they share an object, a model read them, or a person found the same subject.

- [Payables Agent Overview in Business Central](https://learn.microsoft.com/dynamics365/business-central/payables-agent) — possibly related: Documents how Payables Agent identifies and matches vendor information from invoices (model-linked)

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "pagecustomization", object_name: "PA Vendor Card")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
