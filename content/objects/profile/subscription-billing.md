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
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T21:07:03.029Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: a23773f806a044c98d565a07ec1f2d26bb46fccee1f205b3a0d5b8b870ba43f6
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Apps/W1/Subscription%20Billing/app/Profiles/SubscriptionBilling.Profile.al
    title: src/Apps/W1/Subscription Billing/app/Profiles/SubscriptionBilling.Profile.al (releases/29.x)
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

Subscription Billing · Microsoft.SubscriptionBilling · BC29-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Apps/W1/Subscription%20Billing/app/Profiles/SubscriptionBilling.Profile.al) · facts from BC29

## Properties

| Property | Value |
|---|---|
| Caption | Subscription Billing |

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "profile", object_name: "Subscription Billing")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node profile "Subscription Billing"`

## Across versions

- Present in: BC29-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
