---
id: object/interface/no-series-single
type: object
title: Interface "No. Series - Single"
summary: Interface "No. Series - Single" in Business Foundation (Microsoft.Foundation.NoSeries). 4 public procedures. Present since at least BC28, still in BC30.
tier: official
language: en
tags:
  - interface
  - business foundation
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
  at: "2026-10-07T01:08:41.552Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 16258ff315e762a9fff37692c3e572741c54a01ca7861264f5bf2076b742362a
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Business%20Foundation/App/NoSeries/src/Single/NoSeriesSingle.Interface.al
    title: src/Business Foundation/App/NoSeries/src/Single/NoSeriesSingle.Interface.al (releases/29.x)
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
name: No. Series - Single
namespace: Microsoft.Foundation.NoSeries
app: Business Foundation
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

# Interface "No. Series - Single"

> Interface "No. Series - Single" in Business Foundation (Microsoft.Foundation.NoSeries). 4 public procedures. Present since at least BC28, still in BC30.

Business Foundation · Microsoft.Foundation.NoSeries · BC28-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Business%20Foundation/App/NoSeries/src/Single/NoSeriesSingle.Interface.al) · facts from BC29

## Procedures

- `PeekNextNo(NoSeriesLine: Record "No. Series Line"; UsageDate: Date): Code[20]`
- `GetNextNo(var NoSeriesLine: Record "No. Series Line"; UsageDate: Date; HideErrorsAndWarnings: Boolean): Code[20]`: Get the next number in the No. Series.
- `GetLastNoUsed(NoSeriesLine: Record "No. Series Line"): Code[20]`: Get the last number used in the No. Series.
- `MayProduceGaps(): Boolean`: Specifies whether the implementation may produce gaps in the No. Series. For some business scenarios it is important that the No. Series does not produce gaps. This procedure is used to verify that does not happen.

## Across versions

- Present in: BC28, BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
