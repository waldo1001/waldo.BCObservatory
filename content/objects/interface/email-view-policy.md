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
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T15:47:18.976Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 0989bc68b28c87ce82c5606b7b90a001bf62e4ec465bd85df07562134dc4e8a6
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/System%20Application/App/Email/src/Email/View%20Policy/EmailViewPolicy.Interface.al
    title: src/System Application/App/Email/src/Email/View Policy/EmailViewPolicy.Interface.al (releases/29.x)
    date: null
    commit: 030de38360c4aa828a650300faf93cd09fa139e1
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
---

# Interface "Email View Policy"

> Interface "Email View Policy" in System Application (System.Email). 8 public procedures. Present since at least BC23, still in BC30.

System Application · System.Email · BC23-30 · [source at 030de383](https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/System%20Application/App/Email/src/Email/View%20Policy/EmailViewPolicy.Interface.al) · facts from BC29

## Procedures

- `GetSentEmails(var SentEmails: Record "Sent Email" temporary)`
- `GetOutboxEmails(var OutboxEmails: Record "Email Outbox" temporary)`: Get outbox email that policy allow.
- `GetSentEmails(SourceTableId: Integer; var SentEmails: Record "Sent Email" temporary)`: Get sent emails that policy allow for a given entity.
- `GetOutboxEmails(SourceTableId: Integer; var OutboxEmails: Record "Email Outbox" temporary)`: Get outbox emails that policy allow for a given entity.
- `GetSentEmails(SourceTableId: Integer; SourceSystemId: Guid; var SentEmails: Record "Sent Email" temporary)`: Get sent emails that policy allow for a given record.
- `GetOutboxEmails(SourceTableId: Integer; SourceSystemId: Guid; var OutboxEmails: Record "Email Outbox" temporary)`: Get outbox emails that policy allow for a given record.
- `HasAccess(SentEmail: Record "Sent Email"): Boolean`: Establish if User has access to sent email.
- `HasAccess(OutboxEmail: Record "Email Outbox"): Boolean`: Establish if User has access to email in outbox.

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "interface", object_name: "Email View Policy")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node interface "Email View Policy"`

## Across versions

- Present in: BC23, BC24, BC25, BC26, BC27, BC28, BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
