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
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T15:47:18.976Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 205fc3d363750512c252d2f6867b2c9544a7fafe4cee1d1346a00ccf61cc5154
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/System%20Application/App/Email/src/Connector/EmailConnector.Interface.al
    title: src/System Application/App/Email/src/Connector/EmailConnector.Interface.al (releases/29.x)
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
---

# Interface "Email Connector"

> Interface "Email Connector" in System Application (System.Email). 7 public procedures. Present since at least BC23, still in BC30.

System Application · System.Email · BC23-30 · [source at 030de383](https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/System%20Application/App/Email/src/Connector/EmailConnector.Interface.al) · facts from BC29

## Procedures

- `Send(EmailMessage: Codeunit "Email Message"; AccountId: Guid)`
- `GetAccounts(var Accounts: Record "Email Account")`: Gets the e-mail accounts registered for the connector.
- `ShowAccountInformation(AccountId: Guid)`: Shows the information for an e-mail account.
- `RegisterAccount(var EmailAccount: Record "Email Account"): Boolean`: Registers an e-mail account for the connector.
- `DeleteAccount(AccountId: Guid): Boolean`: Deletes an e-mail account for the connector.
- `GetLogoAsBase64(): Text`: Provides a custom logo for the connector that shows in the Setup Email Account Guide.
- `GetDescription(): Text[250]`: Provides a more detailed description of the connector.

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "interface", object_name: "Email Connector")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node interface "Email Connector"`

## Across versions

- Present in: BC23, BC24, BC25, BC26, BC27, BC28, BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
