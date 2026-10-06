---
id: object/interface/posting-group-change-method
type: object
title: Interface "Posting Group Change Method"
summary: Interface "Posting Group Change Method" in Base Application (Microsoft.Finance.ReceivablesPayables). 1 public procedures. Present since at least BC28, still in BC30.
tier: official
language: en
tags:
  - interface
  - base application
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
  at: "2026-10-06T17:21:46.353Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: f7d6fe47c0e7bf9f096f50e0f8b0096b2a139eace12e86458b6437650d53a3e9
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Layers/W1/BaseApp/Finance/ReceivablesPayables/PostingGroupChangeMethod.Interface.al
    title: src/Layers/W1/BaseApp/Finance/ReceivablesPayables/PostingGroupChangeMethod.Interface.al (releases/29.x)
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
name: Posting Group Change Method
namespace: Microsoft.Finance.ReceivablesPayables
app: Base Application
extends: null
first_version: "28"
last_version: "30"
present_in:
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
  procedures: 1
  events: 0
  subscribers: 0
---

# Interface "Posting Group Change Method"

> Interface "Posting Group Change Method" in Base Application (Microsoft.Finance.ReceivablesPayables). 1 public procedures. Present since at least BC28, still in BC30.

Base Application · Microsoft.Finance.ReceivablesPayables · BC28-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Layers/W1/BaseApp/Finance/ReceivablesPayables/PostingGroupChangeMethod.Interface.al) · facts from BC29

## Procedures

- `ChangePostingGroup(OldPostingGroup: Code[20]; NewPostingGroupCode: Code[20]; SourceRecordVar: Variant)`

## Across versions

- Present in: BC28, BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
