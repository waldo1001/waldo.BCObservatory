---
id: object/entitlement/smtp-connector
type: object
title: Entitlement "SMTP Connector"
summary: Entitlement "SMTP Connector" in Email - SMTP Connector (System.Email). Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - entitlement
  - email - smtp connector
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
  input_hash: 58dd03d3c40ee98df6d3f97e7d83db6e86ca0909756b3f2d247908c1bb6d015b
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Apps/W1/Email%20-%20SMTP%20Connector/app/src/Entitlements/SMTPConnector.entitlement.al
    title: src/Apps/W1/Email - SMTP Connector/app/src/Entitlements/SMTPConnector.entitlement.al (releases/29.x)
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
object_type: entitlement
object_id: null
name: SMTP Connector
namespace: System.Email
app: Email - SMTP Connector
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
---

# Entitlement "SMTP Connector"

> Entitlement "SMTP Connector" in Email - SMTP Connector (System.Email). Introduced in BC29, still in BC30.

Email - SMTP Connector · System.Email · BC29-30 · [source at 030de383](https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Apps/W1/Email%20-%20SMTP%20Connector/app/src/Entitlements/SMTPConnector.entitlement.al) · facts from BC29

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "entitlement", object_name: "SMTP Connector")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node entitlement "SMTP Connector"`

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
