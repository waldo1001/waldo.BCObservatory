---
id: object/interface/email-connector-v5
type: object
title: Interface "Email Connector v5"
summary: Interface "Email Connector v5" in System Application (System.Email). 3 public procedures. Introduced in BC28, still in BC30.
tier: official
language: en
tags:
  - interface
  - system application
versions:
  introduced: "28"
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
  input_hash: 1e61db69b91cd8374353690b995aa68121e864f93c5a4ec4ec0abcb90088abbc
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/System%20Application/App/Email/src/Connector/EmailConnectorv5.Interface.al
    title: src/System Application/App/Email/src/Connector/EmailConnectorv5.Interface.al (releases/29.x)
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
object_type: interface
object_id: null
name: Email Connector v5
namespace: System.Email
app: System Application
extends: null
first_version: "28"
last_version: "30"
present_in:
  - "28"
  - "29"
  - "30"
changed_in: []
source_major: "29"
obsolete: null
countries: []
ms_search_form_ids: []
counts:
  fields: 0
  procedures: 3
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
  implemented_by: 2
---

# Interface "Email Connector v5"

> Interface "Email Connector v5" in System Application (System.Email). 3 public procedures. Introduced in BC28, still in BC30.

System Application · System.Email · BC28-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/System%20Application/App/Email/src/Connector/EmailConnectorv5.Interface.al) · facts from BC29

## Procedures

- `GetEmailCategories(AccountId: Guid; var EmailCategories: Record "Email Categories" temporary)`
- `CreateEmailCategory(AccountId: Guid; CategoryDisplayName: Text; CategoryColor: Text): Text`: Create a new email category in the provided account.
- `ApplyEmailCategory(AccountId: Guid; ExternalId: Text; Categories: List of [Text])`: Apply email categories to an email message.

## Implemented by

- [Codeunit 4500 "Current User Connector"](../codeunit/4500.md)
- [Codeunit 4503 "Microsoft 365 Connector"](../codeunit/4503.md)

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "interface", object_name: "Email Connector v5")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node interface "Email Connector v5"`

## Across versions

- Present in: BC28-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
