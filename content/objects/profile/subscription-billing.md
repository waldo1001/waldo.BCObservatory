---
id: object/profile/subscription-billing
type: object
title: Profile "Subscription Billing"
summary: Profile "Subscription Billing" in Subscription Billing (Microsoft.SubscriptionBilling). Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - profile
  - subscription billing
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
  input_hash: a23773f806a044c98d565a07ec1f2d26bb46fccee1f205b3a0d5b8b870ba43f6
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/dc14cfd1217fbd3fa364b63565e752e5f0653955/src/Apps/W1/Subscription%20Billing/app/Profiles/SubscriptionBilling.Profile.al
    title: src/Apps/W1/Subscription Billing/app/Profiles/SubscriptionBilling.Profile.al (releases/29.x)
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
object_type: profile
object_id: null
name: Subscription Billing
namespace: Microsoft.SubscriptionBilling
app: Subscription Billing
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

# Profile "Subscription Billing"

> Profile "Subscription Billing" in Subscription Billing (Microsoft.SubscriptionBilling). Introduced in BC29, still in BC30.

Subscription Billing · Microsoft.SubscriptionBilling · BC29-30 · [source at dc14cfd1](https://github.com/microsoft/BCApps/blob/dc14cfd1217fbd3fa364b63565e752e5f0653955/src/Apps/W1/Subscription%20Billing/app/Profiles/SubscriptionBilling.Profile.al) · facts from BC29

## Properties

| Property | Value |
|---|---|
| Caption | Subscription Billing |

## Across versions

- Present in: BC29-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "profile", object_name: "Subscription Billing")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
