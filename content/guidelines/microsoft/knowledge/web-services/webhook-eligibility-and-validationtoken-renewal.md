---
id: guideline/microsoft/knowledge/web-services/webhook-eligibility-and-validationtoken-renewal
type: guideline
title: Verify webhook eligibility and complete every validationToken handshake
summary: Business Central can subscribe only to eligible API pages, not every endpoint that can be read through an API.
tier: official
language: en
tags:
  - webhook
  - subscription
  - validationtoken
  - expirationdatetime
  - webhook-supported-resources
  - api-page
  - sourcetabletemporary
  - querytype
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:16.256Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 2aad620dac40908d6f4c44bc265dc5240ff4257d
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/webhook-eligibility-and-validationtoken-renewal.md
    title: "microsoft/BCQuality: Verify webhook eligibility and complete every validationToken handshake"
    date: "2026-09-09"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
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
    - change/bcquality/174
    - change/bcquality/100
repo_path: microsoft/knowledge/web-services/webhook-eligibility-and-validationtoken-renewal.md
layer: microsoft
kind: rule
domain: web-services
bc_version:
  - all
technologies:
  - al
  - javascript
countries:
  - w1
application_area:
  - all
examples: 2
identifiers:
  - webhookSupportedResources
  - notificationUrl
  - validationToken
  - expirationDateTime
  - ApiSubscriptionExpiration
  - ODataKeyFields
---

# Verify webhook eligibility and complete every validationToken handshake

> Business Central can subscribe only to eligible API pages, not every endpoint that can be read through an API.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/webhook-eligibility-and-validationtoken-renewal.md) · microsoft layer · web-services · BC all · tier official · derived

## Description

Business Central can subscribe only to eligible API pages, not every endpoint that can be read through an API. Webhooks exclude API queries, temporary API pages, pages with composite OData keys, pages over system tables, and pages over Job Queue Entry (table 472); the environment's `webhookSupportedResources` endpoint is authoritative. Creating and renewing a subscription both call the `notificationUrl` with `validationToken`, and both fail unless the subscriber returns that token in the response body with `200 OK`.

## Best Practice

Before creating a subscription, confirm the resource appears in `webhookSupportedResources` and that a custom endpoint is an API page with a single stable key over an eligible persistent table. Use one validation path that echoes `validationToken` for both create (`POST`) and renew (`PATCH`) handshakes. Track `expirationDateTime` and renew before expiry: online subscriptions expire after three days, while on-premises lifetime defaults to three days and can be changed with `ApiSubscriptionExpiration`.

See samples: [`webhook-eligibility-and-validationtoken-renewal.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/webhook-eligibility-and-validationtoken-renewal.good.al) and [`webhook-eligibility-and-validationtoken-renewal.good.js`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/webhook-eligibility-and-validationtoken-renewal.good.js).

## Anti Pattern

Attempting to subscribe to an API query, temporary/composite/system-table/Job Queue Entry API page, or assuming a successful create handshake makes renewal automatic. Composite includes an explicit multi-field `ODataKeyFields` and a missing `ODataKeyFields` when the source table's primary key has multiple fields. A renewal issues the same validation challenge; a notification handler that ignores the query-string token cannot create or renew the subscription.

See samples: [`webhook-eligibility-and-validationtoken-renewal.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/webhook-eligibility-and-validationtoken-renewal.bad.al) and [`webhook-eligibility-and-validationtoken-renewal.bad.js`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/webhook-eligibility-and-validationtoken-renewal.bad.js).

## Source

[Working with webhooks](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/api-reference/v2.0/dynamics-subscriptions) and [Update subscriptions](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/api-reference/v2.0/api/dynamics_subscriptions_update).

## Examples

- [Good: webhook-eligibility-and-validationtoken-renewal.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/webhook-eligibility-and-validationtoken-renewal.good.al)
- [Bad: webhook-eligibility-and-validationtoken-renewal.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/webhook-eligibility-and-validationtoken-renewal.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#100 Add P0 integration and control add-in runtime guidance](../../../../changes/bcquality/100.md), 2026-07-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
