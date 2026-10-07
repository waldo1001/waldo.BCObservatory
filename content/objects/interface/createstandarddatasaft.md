---
id: object/interface/createstandarddatasaft
type: object
title: Interface "CreateStandardDataSAFT"
summary: Interface "CreateStandardDataSAFT" in SAF-T (Microsoft.Finance.AuditFileExport). 3 public procedures. Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - interface
  - saf-t
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
  input_hash: 4f910de5107ac0eadfaf4ec5ca22e45d4708868dd558d13f05eeaf96549f1ead
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Apps/W1/SAF-T/app/src/Setup/CreateStandardDataSAFT.Interface.al
    title: src/Apps/W1/SAF-T/app/src/Setup/CreateStandardDataSAFT.Interface.al (releases/29.x)
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
name: CreateStandardDataSAFT
namespace: Microsoft.Finance.AuditFileExport
app: SAF-T
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
  procedures: 3
  events: 0
  subscribers: 0
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Interface "CreateStandardDataSAFT"

> Interface "CreateStandardDataSAFT" in SAF-T (Microsoft.Finance.AuditFileExport). 3 public procedures. Introduced in BC29, still in BC30.

SAF-T · Microsoft.Finance.AuditFileExport · BC29-30 · [source at 030de383](https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Apps/W1/SAF-T/app/src/Setup/CreateStandardDataSAFT.Interface.al) · facts from BC29

## Procedures

- `LoadStandardAccounts(StandardAccountType: Enum "Standard Account Type"): Boolean`
- `LoadStandardTaxCodes(): Boolean`: Loads list of standard tax codes to VAT Reporting Code table.
- `InitAuditExportDataTypeSetup()`: Removes the existing records and create new default records in the Audit Export Data Type Setup table.

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "interface", object_name: "CreateStandardDataSAFT")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node interface "CreateStandardDataSAFT"`

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
