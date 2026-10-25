---
id: object/pagecustomization/pa-purchase-credit-memo
type: object
title: Page customization "PA Purchase Credit Memo"
summary: Page customization "PA Purchase Credit Memo" in PayablesAgent (Microsoft.Agent.PayablesAgent). Introduced in BC29, still in BC30.
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
  at: "2026-10-25T16:43:35.722Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: c81f2b0c251486e81cfc2c51ba9b6671084851f0f33d89dc93d93a2af33789e3
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/dc14cfd1217fbd3fa364b63565e752e5f0653955/src/Apps/W1/PayablesAgent/app/Navigation/PAPurchaseCreditMemo.PageCust.al
    title: src/Apps/W1/PayablesAgent/app/Navigation/PAPurchaseCreditMemo.PageCust.al (releases/29.x)
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
  related:
    - to: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/api-reference/v2.0/api/dynamics_purchasecreditmemoline_delete
      title: Delete purchaseCreditMemoLines
      label: possibly related
      why: Customization supports purchase credit memo line management via API in Payables Agent.
      by: model
    - to: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/api-reference/v2.0/api/dynamics_purchasecreditmemo_delete
      title: Delete purchaseCreditMemos
      label: possibly related
      why: Customization supports purchase credit memo management via API in Payables Agent.
      by: model
object_type: pagecustomization
object_id: null
name: PA Purchase Credit Memo
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

# Page customization "PA Purchase Credit Memo"

> Page customization "PA Purchase Credit Memo" in PayablesAgent (Microsoft.Agent.PayablesAgent). Introduced in BC29, still in BC30.

PayablesAgent · Microsoft.Agent.PayablesAgent · BC29-30 · [source at dc14cfd1](https://github.com/microsoft/BCApps/blob/dc14cfd1217fbd3fa364b63565e752e5f0653955/src/Apps/W1/PayablesAgent/app/Navigation/PAPurchaseCreditMemo.PageCust.al) · facts from BC29

## Recent changes

- 2026-10-22 [#12894 [PayablesAgent] Add support for credit memos, recognised from the PDF and applied to the original invoice](../../changes/bcapps/12894.md) (main, BC30, feature, added)

## Across versions

- Present in: BC29-30
- Changed (declaration) in: none

## Possibly related

No source states these links: they share an object, a model read them, or a person found the same subject.

- [Delete purchaseCreditMemoLines](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/api-reference/v2.0/api/dynamics_purchasecreditmemoline_delete) — possibly related: Customization supports purchase credit memo line management via API in Payables Agent. (model-linked)
- [Delete purchaseCreditMemos](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/api-reference/v2.0/api/dynamics_purchasecreditmemo_delete) — possibly related: Customization supports purchase credit memo management via API in Payables Agent. (model-linked)

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "pagecustomization", object_name: "PA Purchase Credit Memo")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
