---
id: object/interface/no-series-single
type: object
title: Interface "No. Series - Single"
summary: Interface "No. Series - Single" in Business Foundation (Microsoft.Foundation.NoSeries). 4 public procedures. Introduced in BC25, still in BC30.
tier: official
language: en
tags:
  - interface
  - business foundation
versions:
  introduced: "25"
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
  input_hash: 4ec369e4d0a003b383d4dcda056720040e1da6b689cc7d8fc82c587b9347d231
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Business%20Foundation/App/NoSeries/src/Single/NoSeriesSingle.Interface.al
    title: src/Business Foundation/App/NoSeries/src/Single/NoSeriesSingle.Interface.al (releases/29.x)
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
name: No. Series - Single
namespace: Microsoft.Foundation.NoSeries
app: Business Foundation
extends: null
first_version: "25"
last_version: "30"
present_in:
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
---

# Interface "No. Series - Single"

> Interface "No. Series - Single" in Business Foundation (Microsoft.Foundation.NoSeries). 4 public procedures. Introduced in BC25, still in BC30.

Business Foundation · Microsoft.Foundation.NoSeries · BC25-30 · [source at 030de383](https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Business%20Foundation/App/NoSeries/src/Single/NoSeriesSingle.Interface.al) · facts from BC29

## Procedures

- `PeekNextNo(NoSeriesLine: Record "No. Series Line"; UsageDate: Date): Code[20]`
- `GetNextNo(var NoSeriesLine: Record "No. Series Line"; UsageDate: Date; HideErrorsAndWarnings: Boolean): Code[20]`: Get the next number in the No. Series.
- `GetLastNoUsed(NoSeriesLine: Record "No. Series Line"): Code[20]`: Get the last number used in the No. Series.
- `MayProduceGaps(): Boolean`: Specifies whether the implementation may produce gaps in the No. Series. For some business scenarios it is important that the No. Series does not produce gaps. This procedure is used to verify that does not happen.

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "interface", object_name: "No. Series - Single")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node interface "No. Series - Single"`

## Across versions

- Present in: BC25, BC26, BC27, BC28, BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
