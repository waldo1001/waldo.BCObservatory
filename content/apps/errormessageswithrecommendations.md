---
id: app/errormessageswithrecommendations
type: app
title: ErrorMessagesWithRecommendations
summary: "ErrorMessagesWithRecommendations (Microsoft.Shared): 13 objects in BC29-30 (7 codeunits, 2 enums, 1 table extension, 1 page, 1 page extension, ...); no Learn hub documents its objects yet; 1 post."
tier: official
language: en
tags:
  - first-party app
  - platform
system: platform
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T16:25:37.512Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 21c64864c8bbdfd9afaa4c234f0237a87e14ce71756e2176eee2de7553afd5bf
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/tree/9df55025ee6eb2a1346ddad3a8a55d1ba1ff75aa/src/Apps/W1/ErrorMessagesWithRecommendations/app
    title: src/Apps/W1/ErrorMessagesWithRecommendations/app (main)
    date: null
    commit: 9df55025ee6eb2a1346ddad3a8a55d1ba1ff75aa
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/tableextension/7900
    - object/page/7900
    - object/pageextension/7900
    - object/codeunit/7900
    - object/codeunit/7901
    - object/codeunit/7902
    - object/codeunit/7903
    - object/codeunit/7904
    - object/codeunit/7905
    - object/codeunit/7906
    - object/enum/7900
    - object/enum/7901
    - object/interface/errormessagefix
  features: []
  topics: []
  localizations: []
  videos: []
  posts:
    - post/gerardorenteria-blog/12238
  guidelines: []
app: ErrorMessagesWithRecommendations
namespace_root: Microsoft.Shared
present_in:
  - "29"
  - "30"
counts:
  objects: 13
  by_type:
    codeunit: 7
    enum: 2
    tableextension: 1
    page: 1
    pageextension: 1
    interface: 1
  hubs: 0
  videos: 0
  posts: 1
---

# ErrorMessagesWithRecommendations

> ErrorMessagesWithRecommendations (Microsoft.Shared): 13 objects in BC29-30 (7 codeunits, 2 enums, 1 table extension, 1 page, 1 page extension, ...); no Learn hub documents its objects yet; 1 post.

First-party app · folder `src/Apps/W1/ErrorMessagesWithRecommendations/app` · namespace `Microsoft.Shared` · BC29-30 · system platform · facts from the code pillar and the joins, nothing machine-written

## Objects

13 objects, by type.

### Table extensions (1)

| Id | Name | Caption |
|---|---|---|
| 7900 | [Error Message Ext.](../objects/tableextension/7900.md) |  |

### Pages (1)

| Id | Name | Caption |
|---|---|---|
| 7900 | [Error Messages Card Part](../objects/page/7900.md) | Details |

### Page extensions (1)

| Id | Name | Caption |
|---|---|---|
| 7900 | [ErrorMessagesRecommendationExt](../objects/pageextension/7900.md) |  |

### Codeunits (7)

| Id | Name | Caption |
|---|---|---|
| 7900 | [ErrorMessagesActionHandler](../objects/codeunit/7900.md) |  |
| 7901 | [Execute Error Action](../objects/codeunit/7901.md) |  |
| 7902 | [Default Impl. Error Message](../objects/codeunit/7902.md) |  |
| 7903 | [Dimension Code Same Error](../objects/codeunit/7903.md) |  |
| 7904 | [Dimension Code Must Be Blank](../objects/codeunit/7904.md) |  |
| 7905 | [ErrorMessagesActionHandlerImpl](../objects/codeunit/7905.md) |  |
| 7906 | [Dim. Code Same But Missing Err](../objects/codeunit/7906.md) |  |

### Enums (2)

| Id | Name | Caption |
|---|---|---|
| 7900 | [Error Message Status](../objects/enum/7900.md) |  |
| 7901 | [Error Msg. Fix Implementation](../objects/enum/7901.md) |  |

### Interfaces (1)

| Id | Name | Caption |
|---|---|---|
|  | [ErrorMessageFix](../objects/interface/errormessagefix.md) |  |

## Videos and posts

Videos and posts that name this app's objects by exact type and name.

- [🔧 Transforming BC Error Handling with Smart Recommendations 📝](../posts/gerardorenteria-blog/12238.md) (community post, 2025-09-23): names Interface "ErrorMessageFix"

Source: [src/Apps/W1/ErrorMessagesWithRecommendations/app](https://github.com/microsoft/BCApps/tree/9df55025ee6eb2a1346ddad3a8a55d1ba1ff75aa/src/Apps/W1/ErrorMessagesWithRecommendations/app); objects from data/code/, hubs from data/index/docs-objects.json through the object pages.
