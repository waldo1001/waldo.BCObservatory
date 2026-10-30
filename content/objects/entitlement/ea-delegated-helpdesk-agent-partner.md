---
id: object/entitlement/ea-delegated-helpdesk-agent-partner
type: object
title: Entitlement "EA - Delegated Helpdesk agent - Partner"
summary: Entitlement "EA - Delegated Helpdesk agent - Partner" in ExpenseAgent (Microsoft.ExpenseAgent). Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - entitlement
  - expenseagent
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
  at: "2026-10-30T01:00:43.748Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: cc8f231d92820f2cf7820e46bf10a7808a8e9aa4abb97cab662f15cc5be48b92
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/7aa49e808916c060dbee97d9ff324a2cfda8d422/src/Apps/W1/ExpenseAgent/app/src/Entitlements/Roles/EADelegatedHelpdeskagentPartner.Entitlement.al
    title: src/Apps/W1/ExpenseAgent/app/src/Entitlements/Roles/EADelegatedHelpdeskagentPartner.Entitlement.al (releases/29.x)
    date: null
    commit: 7aa49e808916c060dbee97d9ff324a2cfda8d422
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
    - change/bcapps/9859
  related:
    - to: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/delegated-admin
      title: Delegated admin access to Business Central online
      label: possibly related
      why: Documents delegated helpdesk admin access for reselling partners.
      by: model
object_type: entitlement
object_id: null
name: EA - Delegated Helpdesk agent - Partner
namespace: Microsoft.ExpenseAgent
app: ExpenseAgent
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

# Entitlement "EA - Delegated Helpdesk agent - Partner"

> Entitlement "EA - Delegated Helpdesk agent - Partner" in ExpenseAgent (Microsoft.ExpenseAgent). Introduced in BC29, still in BC30.

ExpenseAgent · Microsoft.ExpenseAgent · BC29-30 · [source at 7aa49e80](https://github.com/microsoft/BCApps/blob/7aa49e808916c060dbee97d9ff324a2cfda8d422/src/Apps/W1/ExpenseAgent/app/src/Entitlements/Roles/EADelegatedHelpdeskagentPartner.Entitlement.al) · facts from BC29

## Recent changes

- 2026-08-04 [#9859 [Master] - Move Expense Agent (Preview) app into BCApps](../../changes/bcapps/9859.md) (main, BC30, feature, added)

## Across versions

- Present in: BC29-30
- Changed (declaration) in: none

## Possibly related

No source states these links: they share an object, a model read them, or a person found the same subject.

- [Delegated admin access to Business Central online](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/delegated-admin) — possibly related: Documents delegated helpdesk admin access for reselling partners. (model-linked)

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "entitlement", object_name: "EA - Delegated Helpdesk agent - Partner")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
