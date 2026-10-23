---
id: object/pagecustomization/pa-e-doc-purchase-draft
type: object
title: Page customization "PA E-Doc. Purchase Draft"
summary: Page customization "PA E-Doc. Purchase Draft" in PayablesAgent (Microsoft.Agent.PayablesAgent). Introduced in BC29, still in BC30.
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
  at: "2026-10-23T01:04:01.231Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: a23d9745116610b4379d04de051d823a81103af440fc4b8d34b19da04dfae9f9
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/af1b860dae5aeeb1369d4ed450c2c980e372a161/src/Apps/W1/PayablesAgent/app/Profile/PageCustomizations/PAEDocPurchaseDraft.PageCust.al
    title: src/Apps/W1/PayablesAgent/app/Profile/PageCustomizations/PAEDocPurchaseDraft.PageCust.al (releases/29.x)
    date: null
    commit: af1b860dae5aeeb1369d4ed450c2c980e372a161
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
    - change/bcapps/10084
object_type: pagecustomization
object_id: null
name: PA E-Doc. Purchase Draft
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

# Page customization "PA E-Doc. Purchase Draft"

> Page customization "PA E-Doc. Purchase Draft" in PayablesAgent (Microsoft.Agent.PayablesAgent). Introduced in BC29, still in BC30.

PayablesAgent · Microsoft.Agent.PayablesAgent · BC29-30 · [source at af1b860d](https://github.com/microsoft/BCApps/blob/af1b860dae5aeeb1369d4ed450c2c980e372a161/src/Apps/W1/PayablesAgent/app/Profile/PageCustomizations/PAEDocPurchaseDraft.PageCust.al) · facts from BC29

## Recent changes

- 2026-10-22 [#12894 [PayablesAgent] Add support for credit memos, recognised from the PDF and applied to the original invoice](../../changes/bcapps/12894.md) (main, BC30, feature)
- 2026-09-01 [#10084 Let the agent update invoice due dates on user instructions](../../changes/bcapps/10084.md) (main, BC30, fix)

## Across versions

- Present in: BC29-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "pagecustomization", object_name: "PA E-Doc. Purchase Draft")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
