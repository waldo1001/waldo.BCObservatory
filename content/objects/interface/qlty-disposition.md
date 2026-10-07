---
id: object/interface/qlty-disposition
type: object
title: Interface "Qlty. Disposition"
summary: Interface "Qlty. Disposition" in Quality Management (Microsoft.QualityManagement.Dispositions). 1 public procedures. Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - interface
  - quality management
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
  at: "2026-10-07T09:46:58.909Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: aef93486d8924009f6735e712a619cafc074ab676d4501aa78975f24fa50b033
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/Apps/W1/Quality%20Management/app/src/Dispositions/QltyDisposition.Interface.al
    title: src/Apps/W1/Quality Management/app/src/Dispositions/QltyDisposition.Interface.al (releases/29.x)
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
name: Qlty. Disposition
namespace: Microsoft.QualityManagement.Dispositions
app: Quality Management
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
  procedures: 1
  events: 0
  subscribers: 0
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Interface "Qlty. Disposition"

> Interface "Qlty. Disposition" in Quality Management (Microsoft.QualityManagement.Dispositions). 1 public procedures. Introduced in BC29, still in BC30.

Quality Management · Microsoft.QualityManagement.Dispositions · BC29-30 · [source at 1d24dd5e](https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/Apps/W1/Quality%20Management/app/src/Dispositions/QltyDisposition.Interface.al) · facts from BC29

## Procedures

- `PerformDisposition(var QltyInspectionHeader: Record "Qlty. Inspection Header"; var TempInstructionQltyDispositionBuffer: Record "Qlty. Disposition Buffer" temporary): Boolean`

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
