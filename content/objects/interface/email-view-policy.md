---
id: object/interface/email-view-policy
type: object
title: Interface "Email View Policy"
summary: Interface "Email View Policy" in System Application (System.Email). 8 public procedures. Present since at least BC23, still in BC30.
tier: official
language: en
tags:
  - interface
  - system application
versions:
  introduced: null
  last_changed: null
  deprecated: null
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-28T10:42:34.480Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 6466a01278c89d9f42f2b52b468abae5cef19e208b0d6ad3171c9c3a30e06cc1
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/4c1c1638beb6d5da8540cc1f61889b80c7b3356f/src/System%20Application/App/Email/src/Email/View%20Policy/EmailViewPolicy.Interface.al
    title: src/System Application/App/Email/src/Email/View Policy/EmailViewPolicy.Interface.al (releases/29.x)
    date: null
    commit: 4c1c1638beb6d5da8540cc1f61889b80c7b3356f
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-extending-email
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
object_type: interface
object_id: null
name: Email View Policy
namespace: System.Email
app: System Application
extends: null
first_version: "23"
last_version: "30"
present_in:
  - "23"
  - "24"
  - "25"
  - "26"
  - "27"
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
  procedures: 8
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
  implemented_by: 0
---

# Interface "Email View Policy"

> Interface "Email View Policy" in System Application (System.Email). 8 public procedures. Present since at least BC23, still in BC30.

System Application · System.Email · BC23-30 · [source at 4c1c1638](https://github.com/microsoft/BCApps/blob/4c1c1638beb6d5da8540cc1f61889b80c7b3356f/src/System%20Application/App/Email/src/Email/View%20Policy/EmailViewPolicy.Interface.al) · facts from BC29

## Procedures

- `GetSentEmails(var SentEmails: Record "Sent Email" temporary)`
- `GetOutboxEmails(var OutboxEmails: Record "Email Outbox" temporary)`: Get outbox email that policy allow.
- `GetSentEmails(SourceTableId: Integer; var SentEmails: Record "Sent Email" temporary)`: Get sent emails that policy allow for a given entity.
- `GetOutboxEmails(SourceTableId: Integer; var OutboxEmails: Record "Email Outbox" temporary)`: Get outbox emails that policy allow for a given entity.
- `GetSentEmails(SourceTableId: Integer; SourceSystemId: Guid; var SentEmails: Record "Sent Email" temporary)`: Get sent emails that policy allow for a given record.
- `GetOutboxEmails(SourceTableId: Integer; SourceSystemId: Guid; var OutboxEmails: Record "Email Outbox" temporary)`: Get outbox emails that policy allow for a given record.
- `HasAccess(SentEmail: Record "Sent Email"): Boolean`: Establish if User has access to sent email.
- `HasAccess(OutboxEmail: Record "Email Outbox"): Boolean`: Establish if User has access to email in outbox.

## Across versions

- Present in: BC23-30
- Changed (declaration) in: none

## Documented on Microsoft Learn

- [Extending Email](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-extending-email) (names this object)

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "interface", object_name: "Email View Policy")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
