---
id: object/interface/ismtp-client
type: object
title: Interface "iSMTP Client"
summary: Interface "iSMTP Client" in Email - SMTP API (System.Email). 4 public procedures. Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - interface
  - email - smtp api
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
  at: "2026-10-07T15:47:18.976Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 5a807fdf77181c9c3df5c0aa851d689c0fcd736e71f66b5aa72a5dccd7b958b6
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Apps/W1/Email%20-%20SMTP%20API/app/src/ISMTPClient.Interface.al
    title: src/Apps/W1/Email - SMTP API/app/src/ISMTPClient.Interface.al (releases/29.x)
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
name: iSMTP Client
namespace: System.Email
app: Email - SMTP API
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
  procedures: 4
  events: 0
  subscribers: 0
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Interface "iSMTP Client"

> Interface "iSMTP Client" in Email - SMTP API (System.Email). 4 public procedures. Introduced in BC29, still in BC30.

Email - SMTP API · System.Email · BC29-30 · [source at 030de383](https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Apps/W1/Email%20-%20SMTP%20API/app/src/ISMTPClient.Interface.al) · facts from BC29

## Procedures

- `Connect(Host: Text; Port: Integer; SecureConnection: Boolean): Boolean`
- `Authenticate(Authentication: Enum "SMTP Authentication Types"; var SMTPAuthentication: Codeunit "SMTP Authentication"): Boolean`
- `Send(SMTPMessage: Codeunit "SMTP Message"): Boolean`
- `Disconnect()`

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "interface", object_name: "iSMTP Client")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node interface "iSMTP Client"`

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
