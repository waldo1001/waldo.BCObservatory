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
  at: "2026-10-06T23:56:28.878Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 61fa1be93d202993130d0b9e136949f113a77e585b4e0a627a10fb93c8782ee4
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/ReviewGLEntries/app/src/interfaces/GLEntryReviewer.Interface.al
    title: src/Apps/W1/ReviewGLEntries/app/src/interfaces/GLEntryReviewer.Interface.al (releases/29.x)
    date: null
    commit: d7c9c667c671da2cda3a0738b18ed99ca4181765
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
---

# Interface "G/L Entry Reviewer"

> Interface "G/L Entry Reviewer" in ReviewGLEntries (Microsoft.Finance.GeneralLedger.Review). 3 public procedures. Introduced in BC29, still in BC30.

ReviewGLEntries · Microsoft.Finance.GeneralLedger.Review · BC29-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/ReviewGLEntries/app/src/interfaces/GLEntryReviewer.Interface.al) · facts from BC29

## Procedures

- `ReviewEntries(var GLEntry: Record "G/L Entry")`
- `UnreviewEntries(var GLEntry: Record "G/L Entry")`
- `ValidateEntries(var GLEntry: Record "G/L Entry")`

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
