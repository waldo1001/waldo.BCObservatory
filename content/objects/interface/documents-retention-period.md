---
id: object/interface/documents-retention-period
type: object
title: Interface "Documents - Retention Period"
summary: Interface "Documents - Retention Period" in Base Application (Microsoft.Finance.GeneralLedger.Setup). 4 public procedures. Present since at least BC28, still in BC30.
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
  at: "2026-10-07T09:46:58.909Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: bf648f27c44d633ce6ab01e517ac8e750d5fd44bcb4a1d4b92e1cb5146be8806
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/Layers/W1/BaseApp/Finance/GeneralLedger/Setup/DocumentsRetentionPeriod.Interface.al
    title: src/Layers/W1/BaseApp/Finance/GeneralLedger/Setup/DocumentsRetentionPeriod.Interface.al (releases/29.x)
    date: null
    commit: 1d24dd5ee2a734510f0556ccc69342d0e616db2f
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
  procedures: 4
  events: 0
  subscribers: 0
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Interface "Documents - Retention Period"

> Interface "Documents - Retention Period" in Base Application (Microsoft.Finance.GeneralLedger.Setup). 4 public procedures. Present since at least BC28, still in BC30.

Base Application · Microsoft.Finance.GeneralLedger.Setup · BC28-30 · [source at 1d24dd5e](https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/Layers/W1/BaseApp/Finance/GeneralLedger/Setup/DocumentsRetentionPeriod.Interface.al) · facts from BC29

## Procedures

- `GetDeletionBlockedAfterDate(): Date`
- `GetDeletionBlockedBeforeDate(): Date`: Returns the date - Documents with a Posting Date before this date cannot be deleted.
- `IsDocumentDeletionAllowedByLaw(PostingDate: Date): Boolean`: Returns whether document deletion is allowed by law condiering the Posting Date.
- `CheckDocumentDeletionAllowedByLaw(PostingDate: Date)`: Use it to run check on posted documents and block deletion if needed.

## Across versions

- Present in: BC28, BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
