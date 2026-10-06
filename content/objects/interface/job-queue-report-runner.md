---
id: object/interface/job-queue-report-runner
type: object
title: Interface "Job Queue Report Runner"
summary: Interface "Job Queue Report Runner" in Base Application (System.Threading). 1 public procedures. Present since at least BC28, still in BC30.
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
  input_hash: b367eca0b3ef6114f37303474aa31b2d8a12a3a4464d1d9230749c76123a340c
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Layers/W1/BaseApp/Modules/System/JobQueue/JobQueueReportRunner.Interface.al
    title: src/Layers/W1/BaseApp/Modules/System/JobQueue/JobQueueReportRunner.Interface.al (releases/29.x)
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
name: Job Queue Report Runner
namespace: System.Threading
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

# Interface "Job Queue Report Runner"

> Interface "Job Queue Report Runner" in Base Application (System.Threading). 1 public procedures. Present since at least BC28, still in BC30.

Base Application · System.Threading · BC28-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Layers/W1/BaseApp/Modules/System/JobQueue/JobQueueReportRunner.Interface.al) · facts from BC29

## Procedures

- `RunReport(ReportID: Integer; var JobQueueEntry: Record "Job Queue Entry")`

## Across versions

- Present in: BC28, BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
