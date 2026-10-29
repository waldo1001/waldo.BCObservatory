---
id: guideline/microsoft/knowledge/web-services/expose-operations-as-bound-actions
type: guideline
title: Expose business operations as bound actions, not as writable status flags
summary: An API consumer that needs to *do* something to a record — post it, ship it, release it — should call an explicit operation, not mutate a field and hope a side effect fires.
tier: official
language: en
tags:
  - api-page
  - serviceenabled
  - bound-action
  - webserviceactioncontext
  - setactionresponse
  - side-effect
  - patch
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:15.830Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 18908a7f452e0b380d15d1c0256a98fbe1aa25e9
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/expose-operations-as-bound-actions.md
    title: "microsoft/BCQuality: Expose business operations as bound actions, not as writable status flags"
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
repo_path: microsoft/knowledge/web-services/expose-operations-as-bound-actions.md
layer: microsoft
kind: rule
domain: web-services
bc_version:
  - all
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 2
identifiers:
  - SetActionResponse
  - OnValidate
  - WebServiceActionContext
---

# Expose business operations as bound actions, not as writable status flags

> An API consumer that needs to *do* something to a record — post it, ship it, release it — should call an explicit operation, not mutate a field and hope a side effect fires.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/expose-operations-as-bound-actions.md) · microsoft layer · web-services · BC all · tier official · derived

## Description

An API consumer that needs to *do* something to a record — post it, ship it, release it — should call an explicit operation, not mutate a field and hope a side effect fires. AL models this with a bound action: a `[ServiceEnabled] procedure` that takes `var ActionContext: WebServiceActionContext`, performs the work, and reports the result through the action context (typically a `SetActionResponse` helper that returns the affected record's id). The endpoint then exposes a callable action — `.../salesOrders(<id>)/Microsoft.NAV.post` — with a clear contract. The anti-pattern is to expose a writable Boolean or status field whose `OnValidate` quietly performs the operation: a routine PATCH that looks like a data edit silently triggers posting, with no discoverable action and surprising, hard-to-audit behaviour. LLMs reach for the flag-field approach because it is less code; this file is remedial because the platform-idiomatic, contract-safe choice (a bound action) is not the model's default.

## Best Practice

Declare the operation as `[ServiceEnabled] procedure Post(var ActionContext: WebServiceActionContext)` on the API page. Inside, perform the operation against `Rec`, then call a `SetActionResponse` helper that writes the result — the bound record and its id — back into the `WebServiceActionContext` so the caller receives a well-formed response. The operation is now an explicit, named endpoint action separate from ordinary field writes.

See sample: [`expose-operations-as-bound-actions.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/expose-operations-as-bound-actions.good.al).

## Anti Pattern

Exposing a writable Boolean (for example `posted`) whose `OnValidate` performs the posting. A client that PATCHes the field to `true` — an action indistinguishable from any other data edit — silently triggers a side-effecting business operation. The detection signal: an API page field whose `OnValidate` posts, ships, or releases, instead of a `[ServiceEnabled]` bound action.

See sample: [`expose-operations-as-bound-actions.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/expose-operations-as-bound-actions.bad.al).

## Examples

- [Good: expose-operations-as-bound-actions.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/expose-operations-as-bound-actions.good.al)
- [Bad: expose-operations-as-bound-actions.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/expose-operations-as-bound-actions.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
