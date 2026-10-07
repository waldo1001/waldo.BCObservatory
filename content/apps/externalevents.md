---
id: app/externalevents
type: app
title: ExternalEvents
summary: "ExternalEvents (Microsoft.Integration): 8 objects in BC29-30 (7 codeunits, 1 enum extension); no Learn hub documents its objects yet."
tier: official
language: en
tags:
  - first-party app
  - integration
system: integration
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T21:10:59.019Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 9a5134fec427d1d37f605777258044db10216f87fd6c4ce81a5b8331e67b2779
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/tree/ad9b529a78c818ba25c24aecd093442a6c7a3852/src/Apps/W1/ExternalEvents/app
    title: src/Apps/W1/ExternalEvents/app (main)
    date: null
    commit: ad9b529a78c818ba25c24aecd093442a6c7a3852
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/codeunit/38500
    - object/codeunit/38502
    - object/codeunit/38503
    - object/codeunit/38504
    - object/codeunit/38505
    - object/codeunit/38506
    - object/codeunit/38507
    - object/enumextension/38500
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
app: ExternalEvents
namespace_root: Microsoft.Integration
present_in:
  - "29"
  - "30"
counts:
  objects: 8
  by_type:
    codeunit: 7
    enumextension: 1
  hubs: 0
  videos: 0
  posts: 0
---

# ExternalEvents

> ExternalEvents (Microsoft.Integration): 8 objects in BC29-30 (7 codeunits, 1 enum extension); no Learn hub documents its objects yet.

First-party app · folder `src/Apps/W1/ExternalEvents/app` · namespace `Microsoft.Integration` · BC29-30 · system integration · facts from the code pillar and the joins, nothing machine-written

## Objects

8 objects, by type.

### Codeunits (7)

| Id | Name | Caption |
|---|---|---|
| 38500 | [External Events Helper](../objects/codeunit/38500.md) |  |
| 38502 | [AR External Events](../objects/codeunit/38502.md) |  |
| 38503 | [AP External Events](../objects/codeunit/38503.md) |  |
| 38504 | [Sales External Events](../objects/codeunit/38504.md) |  |
| 38505 | [Purchases External Events](../objects/codeunit/38505.md) |  |
| 38506 | [Opportunities External Events](../objects/codeunit/38506.md) |  |
| 38507 | [Job Queue External Events](../objects/codeunit/38507.md) |  |

### Enum extensions (1)

| Id | Name | Caption |
|---|---|---|
| 38500 | [External Events Category](../objects/enumextension/38500.md) |  |

Source: [src/Apps/W1/ExternalEvents/app](https://github.com/microsoft/BCApps/tree/ad9b529a78c818ba25c24aecd093442a6c7a3852/src/Apps/W1/ExternalEvents/app); objects from data/code/, hubs from data/index/docs-objects.json through the object pages.
