---
id: object/interface/documents-retention-period
type: object
title: Interface "Documents - Retention Period"
summary: Interface "Documents - Retention Period" in Base Application (Microsoft.Finance.GeneralLedger.Setup). 4 public procedures. Introduced in BC24, still in BC30.
tier: official
language: en
tags:
  - interface
  - base application
versions:
  introduced: "24"
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
  input_hash: bb7f089559d30b4c314ca21ca3bc945fe1eefb8b3a0b655c584162ce61c595fb
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Layers/W1/BaseApp/Finance/GeneralLedger/Setup/DocumentsRetentionPeriod.Interface.al
    title: src/Layers/W1/BaseApp/Finance/GeneralLedger/Setup/DocumentsRetentionPeriod.Interface.al (releases/29.x)
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
name: Documents - Retention Period
namespace: Microsoft.Finance.GeneralLedger.Setup
app: Base Application
extends: null
first_version: "24"
last_version: "30"
present_in:
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
  procedures: 4
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
  implemented_by: 2
---

# Interface "Documents - Retention Period"

> Interface "Documents - Retention Period" in Base Application (Microsoft.Finance.GeneralLedger.Setup). 4 public procedures. Introduced in BC24, still in BC30.

Base Application · Microsoft.Finance.GeneralLedger.Setup · BC24-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Layers/W1/BaseApp/Finance/GeneralLedger/Setup/DocumentsRetentionPeriod.Interface.al) · facts from BC29

## Procedures

- `GetDeletionBlockedAfterDate(): Date`
- `GetDeletionBlockedBeforeDate(): Date`: Returns the date - Documents with a Posting Date before this date cannot be deleted.
- `IsDocumentDeletionAllowedByLaw(PostingDate: Date): Boolean`: Returns whether document deletion is allowed by law condiering the Posting Date.
- `CheckDocumentDeletionAllowedByLaw(PostingDate: Date)`: Use it to run check on posted documents and block deletion if needed.

## Implemented by

- [Codeunit 800 "Default Retention Period Def."](../codeunit/800.md)
- [Enum 800 "Docs - Retention Period Def."](../enum/800.md)

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "interface", object_name: "Documents - Retention Period")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node interface "Documents - Retention Period"`

## Across versions

- Present in: BC24-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
