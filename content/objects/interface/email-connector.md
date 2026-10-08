---
id: object/interface/email-connector
type: object
title: Interface "Email Connector"
summary: Interface "Email Connector" in System Application (System.Email). 7 public procedures. Present since at least BC23, still in BC30.
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
  at: "2026-10-07T23:32:29.863Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: a282390b336d24548fdf580e1aefbbeee307f06c673230005e905bb4efa49845
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/System%20Application/App/Email/src/Connector/EmailConnector.Interface.al
    title: src/System Application/App/Email/src/Connector/EmailConnector.Interface.al (releases/29.x)
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
name: Email Connector
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
  procedures: 7
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
  implemented_by: 3
---

# Interface "Email Connector"

> Interface "Email Connector" in System Application (System.Email). 7 public procedures. Present since at least BC23, still in BC30.

System Application · System.Email · BC23-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/System%20Application/App/Email/src/Connector/EmailConnector.Interface.al) · facts from BC29

## Procedures

- `Send(EmailMessage: Codeunit "Email Message"; AccountId: Guid)`
- `GetAccounts(var Accounts: Record "Email Account")`: Gets the e-mail accounts registered for the connector.
- `ShowAccountInformation(AccountId: Guid)`: Shows the information for an e-mail account.
- `RegisterAccount(var EmailAccount: Record "Email Account"): Boolean`: Registers an e-mail account for the connector.
- `DeleteAccount(AccountId: Guid): Boolean`: Deletes an e-mail account for the connector.
- `GetLogoAsBase64(): Text`: Provides a custom logo for the connector that shows in the Setup Email Account Guide.
- `GetDescription(): Text[250]`: Provides a more detailed description of the connector.

## Implemented by

- [Codeunit 4500 "Current User Connector"](../codeunit/4500.md)
- [Codeunit 4503 "Microsoft 365 Connector"](../codeunit/4503.md)
- [Codeunit 4513 "SMTP Connector Impl."](../codeunit/4513.md)

## Across versions

- Present in: BC23-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). The call sections above are our own, per object, from the BC29 call graph. For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "interface", object_name: "Email Connector")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
