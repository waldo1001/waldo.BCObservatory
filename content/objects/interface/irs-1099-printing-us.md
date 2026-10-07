---
id: object/interface/irs-1099-printing-us
type: object
title: Interface "IRS 1099 Printing" (US)
summary: Interface "IRS 1099 Printing" (US) in the US country layer (Microsoft.Finance.VAT.Reporting). 2 public procedures. Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - interface
  - us layer
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
  input_hash: 33dec0088a9866e162603a920eba4099077c6a435742490ec79bb6caf2e41b36
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Apps/US/IRSForms/app/src/Interface/IRS1099Printing.Interface.al
    title: src/Apps/US/IRSForms/app/src/Interface/IRS1099Printing.Interface.al (releases/29.x)
    date: null
    commit: 030de38360c4aa828a650300faf93cd09fa139e1
    t: null
    quote: null
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations:
    - localization/us
  videos: []
  posts: []
  guidelines: []
object_type: interface
object_id: null
name: IRS 1099 Printing
namespace: Microsoft.Finance.VAT.Reporting
app: IRSForms
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
country: US
counts:
  fields: 0
  procedures: 2
  events: 0
  subscribers: 0
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Interface "IRS 1099 Printing" (US)

> Interface "IRS 1099 Printing" (US) in the US country layer (Microsoft.Finance.VAT.Reporting). 2 public procedures. Introduced in BC29, still in BC30.

US country layer · Microsoft.Finance.VAT.Reporting · BC29-30 · [source at 030de383](https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Apps/US/IRSForms/app/src/Interface/IRS1099Printing.Interface.al) · facts from BC29

An object of the [US localization](../../localizations/us.md), not part of W1.

## Procedures

- `SaveContentForDocument(var IRS1099FormDocHeader: Record "IRS 1099 Form Doc. Header"; IRS1099PrintParams: Record "IRS 1099 Print Params"; ReplaceIfExists: Boolean)`
- `PrintContent(IRS1099FormDocHeader: Record "IRS 1099 Form Doc. Header")`: Prints the form document

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "interface", object_name: "IRS 1099 Printing")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node interface "IRS 1099 Printing"`

A US country object, not part of W1: the default corpus does not have it; `bcatlas_list_countries` shows which countries the atlas has.

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
