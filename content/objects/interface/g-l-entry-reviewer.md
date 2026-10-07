---
id: object/interface/g-l-entry-reviewer
type: object
title: Interface "G/L Entry Reviewer"
summary: Interface "G/L Entry Reviewer" in ReviewGLEntries (Microsoft.Finance.GeneralLedger.Review). 3 public procedures. Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - interface
  - reviewglentries
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
  input_hash: 18ff19352344cfcd6ceed22d84b53ecfa34100d827be0f06ba2f9d59d811b6a8
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Apps/W1/ReviewGLEntries/app/src/interfaces/GLEntryReviewer.Interface.al
    title: src/Apps/W1/ReviewGLEntries/app/src/interfaces/GLEntryReviewer.Interface.al (releases/29.x)
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
name: G/L Entry Reviewer
namespace: Microsoft.Finance.GeneralLedger.Review
app: ReviewGLEntries
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
  calls: 0
  called_by: 0
  implements: 0
  implemented_by: 0
---

# Interface "G/L Entry Reviewer"

> Interface "G/L Entry Reviewer" in ReviewGLEntries (Microsoft.Finance.GeneralLedger.Review). 3 public procedures. Introduced in BC29, still in BC30.

ReviewGLEntries · Microsoft.Finance.GeneralLedger.Review · BC29-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Apps/W1/ReviewGLEntries/app/src/interfaces/GLEntryReviewer.Interface.al) · facts from BC29

## Procedures

- `ReviewEntries(var GLEntry: Record "G/L Entry")`
- `UnreviewEntries(var GLEntry: Record "G/L Entry")`
- `ValidateEntries(var GLEntry: Record "G/L Entry")`

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "interface", object_name: "G/L Entry Reviewer")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node interface "G/L Entry Reviewer"`

## Across versions

- Present in: BC29-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
