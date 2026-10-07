---
id: object/interface/job-queue-report-runner
type: object
title: Interface "Job Queue Report Runner"
summary: Interface "Job Queue Report Runner" in Base Application (System.Threading). 1 public procedures. Introduced in BC27, still in BC30.
tier: official
language: en
tags:
  - interface
  - base application
versions:
  introduced: "27"
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
  input_hash: 77faf034f287d4d437e8e7d208ae6340a391aaf395b2f9908829d103d2e95254
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Layers/W1/BaseApp/Modules/System/JobQueue/JobQueueReportRunner.Interface.al
    title: src/Layers/W1/BaseApp/Modules/System/JobQueue/JobQueueReportRunner.Interface.al (releases/29.x)
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
name: Job Queue Report Runner
namespace: System.Threading
app: Base Application
extends: null
first_version: "27"
last_version: "30"
present_in:
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
  procedures: 1
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
  implemented_by: 3
---

# Interface "Job Queue Report Runner"

> Interface "Job Queue Report Runner" in Base Application (System.Threading). 1 public procedures. Introduced in BC27, still in BC30.

Base Application · System.Threading · BC27-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Layers/W1/BaseApp/Modules/System/JobQueue/JobQueueReportRunner.Interface.al) · facts from BC29

## Procedures

- `RunReport(ReportID: Integer; var JobQueueEntry: Record "Job Queue Entry")`

## Implemented by

- [Codeunit 487 "Job Queue Start Report"](../codeunit/487.md)
- [Codeunit 9812 "Job Queue Start Report Runner"](../codeunit/9812.md)
- [Enum 482 "Job Queue Report Output Type"](../enum/482.md)

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "interface", object_name: "Job Queue Report Runner")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node interface "Job Queue Report Runner"`

## Across versions

- Present in: BC27-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
