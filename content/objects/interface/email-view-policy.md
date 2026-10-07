---
id: object/interface/email-view-policy
type: object
title: Interface "Email View Policy"
summary: Interface "Email View Policy" in System Application (System.Email). 8 public procedures. Present since at least BC28, still in BC30.
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
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T01:08:41.552Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 51f9705ea60e5e063c2e02a6abdf4ca284fd30f0858e79ad160d591c4a00d741
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/System%20Application/App/Email/src/Email/View%20Policy/EmailViewPolicy.Interface.al
    title: src/System Application/App/Email/src/Email/View Policy/EmailViewPolicy.Interface.al (releases/29.x)
    date: null
    commit: d7c9c667c671da2cda3a0738b18ed99ca4181765
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
name: Email View Policy
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
  procedures: 8
  events: 0
  subscribers: 0
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Interface "Email View Policy"

> Interface "Email View Policy" in System Application (System.Email). 8 public procedures. Present since at least BC28, still in BC30.

System Application · System.Email · BC28-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/System%20Application/App/Email/src/Email/View%20Policy/EmailViewPolicy.Interface.al) · facts from BC29

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

- Present in: BC28, BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
