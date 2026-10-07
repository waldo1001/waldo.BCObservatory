---
id: object/interface/no-series-single
type: object
title: Interface "No. Series - Single"
summary: Interface "No. Series - Single" in Business Foundation (Microsoft.Foundation.NoSeries). 4 public procedures. Introduced in BC24, still in BC30.
tier: official
language: en
tags:
  - interface
  - business foundation
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
  input_hash: 94c58ee6acd5c7f17f2bcd0c489d62604b07ed405e777f009430185d1e9e4f67
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Business%20Foundation/App/NoSeries/src/Single/NoSeriesSingle.Interface.al
    title: src/Business Foundation/App/NoSeries/src/Single/NoSeriesSingle.Interface.al (releases/29.x)
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
name: No. Series - Single
namespace: Microsoft.Foundation.NoSeries
app: Business Foundation
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
  implemented_by: 3
---

# Interface "No. Series - Single"

> Interface "No. Series - Single" in Business Foundation (Microsoft.Foundation.NoSeries). 4 public procedures. Introduced in BC24, still in BC30.

Business Foundation · Microsoft.Foundation.NoSeries · BC24-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Business%20Foundation/App/NoSeries/src/Single/NoSeriesSingle.Interface.al) · facts from BC29

## Procedures

- `PeekNextNo(NoSeriesLine: Record "No. Series Line"; UsageDate: Date): Code[20]`
- `GetNextNo(var NoSeriesLine: Record "No. Series Line"; UsageDate: Date; HideErrorsAndWarnings: Boolean): Code[20]`: Get the next number in the No. Series.
- `GetLastNoUsed(NoSeriesLine: Record "No. Series Line"): Code[20]`: Get the last number used in the No. Series.
- `MayProduceGaps(): Boolean`: Specifies whether the implementation may produce gaps in the No. Series. For some business scenarios it is important that the No. Series does not produce gaps. This procedure is used to verify that does not happen.

## Implemented by

- [Codeunit 306 "No. Series - Stateless Impl."](../codeunit/306.md)
- [Codeunit 307 "No. Series - Sequence Impl."](../codeunit/307.md)
- [Enum 397 "No. Series Implementation"](../enum/397.md)

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "interface", object_name: "No. Series - Single")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node interface "No. Series - Single"`

## Across versions

- Present in: BC24-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
