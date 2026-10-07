---
id: object/interface/smtp-auth
type: object
title: Interface "SMTP Auth"
summary: Interface "SMTP Auth" in Email - SMTP API (System.Email). 1 public procedures. Introduced in BC29, still in BC30.
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
  at: "2026-10-07T21:07:03.029Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 9b8024775fc0ce525f16a58799c1844030bf917d9e8f5ecdd064e6953e5bab50
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Apps/W1/Email%20-%20SMTP%20API/app/src/Authentication/SMTPAuth.Interface.al
    title: src/Apps/W1/Email - SMTP API/app/src/Authentication/SMTPAuth.Interface.al (releases/29.x)
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
name: SMTP Auth
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
  procedures: 1
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
  implemented_by: 5
---

# Interface "SMTP Auth"

> Interface "SMTP Auth" in Email - SMTP API (System.Email). 1 public procedures. Introduced in BC29, still in BC30.

Email - SMTP API · System.Email · BC29-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Apps/W1/Email%20-%20SMTP%20API/app/src/Authentication/SMTPAuth.Interface.al) · facts from BC29

## Properties

| Property | Value |
|---|---|
| Access | Internal |

## Procedures

- `Authenticate(SmtpClient: DotNet SmtpClient; var SMTPAuthentication: Codeunit "SMTP Authentication")`: Authenticate the SMTP client with the SMTP account.

## Implemented by

- [Codeunit 4616 "OAuth2 SMTP Auth"](../codeunit/4616.md)
- [Codeunit 4617 "Basic SMTP Auth"](../codeunit/4617.md)
- [Codeunit 4618 "Anonymous SMTP Auth"](../codeunit/4618.md)
- [Codeunit 4619 "NTLM SMTP Auth"](../codeunit/4619.md)
- [Enum 4611 "SMTP Authentication Types"](../enum/4611.md)

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "interface", object_name: "SMTP Auth")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node interface "SMTP Auth"`

## Across versions

- Present in: BC29-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
