---
id: app/email-smtp-connector
type: app
title: Email - SMTP Connector
summary: "Email - SMTP Connector (System.Email): 21 objects in BC29-30 (5 codeunits, 3 page extensions, 3 permission sets, 2 pages, 2 enums, ...); documented by 1 Learn hub."
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
  input_hash: ab790f4a1ed058d54b7574119e45d637e2de5a48038a893d0faa0b7022452c88
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/tree/9df55025ee6eb2a1346ddad3a8a55d1ba1ff75aa/src/Apps/W1/Email%20-%20SMTP%20Connector/app
    title: src/Apps/W1/Email - SMTP Connector/app (main)
    date: null
    commit: 9df55025ee6eb2a1346ddad3a8a55d1ba1ff75aa
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/table/4511
    - object/page/4511
    - object/page/4512
    - object/pageextension/4511
    - object/pageextension/4512
    - object/pageextension/4513
    - object/codeunit/4513
    - object/codeunit/4515
    - object/codeunit/4516
    - object/codeunit/4517
    - object/codeunit/104066
    - object/enum/4511
    - object/enum/4512
    - object/enumextension/4511
    - object/interface/smtp-authentication
    - object/permissionset/5521
    - object/permissionset/5522
    - object/permissionset/5523
    - object/permissionsetextension/4511
    - object/permissionsetextension/4512
    - object/entitlement/smtp-connector
  features: []
  topics:
    - topic/dev-itpro/development/extensibility/extending-the-base-application/examples
  localizations: []
  videos: []
  posts: []
  guidelines: []
app: Email - SMTP Connector
namespace_root: System.Email
present_in:
  - "29"
  - "30"
counts:
  objects: 21
  by_type:
    codeunit: 5
    pageextension: 3
    permissionset: 3
    page: 2
    enum: 2
    permissionsetextension: 2
    table: 1
    enumextension: 1
    interface: 1
    entitlement: 1
  hubs: 1
  videos: 0
  posts: 0
---

# Email - SMTP Connector

> Email - SMTP Connector (System.Email): 21 objects in BC29-30 (5 codeunits, 3 page extensions, 3 permission sets, 2 pages, 2 enums, ...); documented by 1 Learn hub.

First-party app · folder `src/Apps/W1/Email - SMTP Connector/app` · namespace `System.Email` · BC29-30 · system platform · facts from the code pillar and the joins, nothing machine-written

## What Learn documents it

The topic hubs whose Learn pages name this app's pages and reports (a table counts through the pages on it), by the number of the app's objects they document.

- [Examples](../topics/dev-itpro/development/extensibility/extending-the-base-application/examples.md) (Development > Extensibility > Extending the base application): 3 objects

## Objects

21 objects, by type.

### Tables (1)

| Id | Name | Caption |
|---|---|---|
| 4511 | [SMTP Account](../objects/table/4511.md) |  |

### Pages (2)

| Id | Name | Caption |
|---|---|---|
| 4511 | [SMTP Account Wizard](../objects/page/4511.md) | Set up SMTP Account |
| 4512 | [SMTP Account](../objects/page/4512.md) |  |

### Page extensions (3)

| Id | Name | Caption |
|---|---|---|
| 4511 | [SMTP EMailOutbox](../objects/pageextension/4511.md) |  |
| 4512 | [SMTP Sent Email](../objects/pageextension/4512.md) |  |
| 4513 | [SMTP Email Accounts Ext.](../objects/pageextension/4513.md) |  |

### Codeunits (5)

| Id | Name | Caption |
|---|---|---|
| 4513 | [SMTP Connector Impl.](../objects/codeunit/4513.md) |  |
| 4515 | [SMTP Connector Install](../objects/codeunit/4515.md) |  |
| 4516 | [OAuth2 SMTP Authentication](../objects/codeunit/4516.md) |  |
| 4517 | [Dummy SMTP Authentication](../objects/codeunit/4517.md) |  |
| 104066 | [SMTP Connector - Upgrade](../objects/codeunit/104066.md) |  |

### Enums (2)

| Id | Name | Caption |
|---|---|---|
| 4511 | [SMTP Authentication](../objects/enum/4511.md) |  |
| 4512 | [SMTP Connector Sender Type](../objects/enum/4512.md) |  |

### Enum extensions (1)

| Id | Name | Caption |
|---|---|---|
| 4511 | [SMTP Connector](../objects/enumextension/4511.md) |  |

### Interfaces (1)

| Id | Name | Caption |
|---|---|---|
|  | [SMTP Authentication](../objects/interface/smtp-authentication.md) |  |

### Permission sets (3)

| Id | Name | Caption |
|---|---|---|
| 5521 | [Email SMTP - Edit](../objects/permissionset/5521.md) | Email - SMTP Connector - Edit |
| 5522 | [Email SMTP - Objects](../objects/permissionset/5522.md) | Email - SMTP Connector - Objects |
| 5523 | [Email SMTP - Read](../objects/permissionset/5523.md) | Email - SMTP Connector - Read |

### Permission set extensions (2)

| Id | Name | Caption |
|---|---|---|
| 4511 | [Email - Edit - SMTP](../objects/permissionsetextension/4511.md) |  |
| 4512 | [Email - Admin - SMTP](../objects/permissionsetextension/4512.md) |  |

### Entitlements (1)

| Id | Name | Caption |
|---|---|---|
|  | [SMTP Connector](../objects/entitlement/smtp-connector.md) |  |

Source: [src/Apps/W1/Email - SMTP Connector/app](https://github.com/microsoft/BCApps/tree/9df55025ee6eb2a1346ddad3a8a55d1ba1ff75aa/src/Apps/W1/Email%20-%20SMTP%20Connector/app); objects from data/code/, hubs from data/index/docs-objects.json through the object pages.
