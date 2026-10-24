---
id: object/profile/payables-agent
type: object
title: Profile "Payables Agent"
summary: Profile "Payables Agent" in PayablesAgent (Microsoft.Agent.PayablesAgent). Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - profile
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
  input_hash: b8c84c5a7d657799f7e9ea7c2722a7d6e29272ac5159ac7fff4f926bb45d1723
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/dc14cfd1217fbd3fa364b63565e752e5f0653955/src/Apps/W1/PayablesAgent/app/Profile/PayablesAgent.Profile.al
    title: src/Apps/W1/PayablesAgent/app/Profile/PayablesAgent.Profile.al (releases/29.x)
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
    - change/bcapps/12894
    - change/bcapps/7546
  related:
    - to: https://learn.microsoft.com/dynamics365/business-central/payables-agent-setup
      title: Set Up Payables Agent in Business Central
      label: possibly related
      why: Documents Payables Agent setup and configuration in Business Central
      by: model
object_type: profile
object_id: null
name: Payables Agent
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

# Profile "Payables Agent"

> Profile "Payables Agent" in PayablesAgent (Microsoft.Agent.PayablesAgent). Introduced in BC29, still in BC30.

PayablesAgent · Microsoft.Agent.PayablesAgent · BC29-30 · [source at dc14cfd1](https://github.com/microsoft/BCApps/blob/dc14cfd1217fbd3fa364b63565e752e5f0653955/src/Apps/W1/PayablesAgent/app/Profile/PayablesAgent.Profile.al) · facts from BC29

## Properties

| Property | Value |
|---|---|
| Caption | 'Payables Agent (Copilot)', Locked = true |

## Recent changes

- 2026-10-22 [#12894 [PayablesAgent] Add support for credit memos, recognised from the PDF and applied to the original invoice](../../changes/bcapps/12894.md) (main, BC30, feature)
- 2026-08-18 [#7546 [Payables Agent] Agent-driven line matching](../../changes/bcapps/7546.md) (main, BC30, feature)

## Across versions

- Present in: BC29-30
- Changed (declaration) in: none

## Possibly related

No source states these links: they share an object, a model read them, or a person found the same subject.

- [Set Up Payables Agent in Business Central](https://learn.microsoft.com/dynamics365/business-central/payables-agent-setup) — possibly related: Documents Payables Agent setup and configuration in Business Central (model-linked)

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "profile", object_name: "Payables Agent")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
