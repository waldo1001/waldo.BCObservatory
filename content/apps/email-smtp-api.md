---
id: app/email-smtp-api
type: app
title: Email - SMTP API
summary: "Email - SMTP API (System.Email): 16 objects in BC29-30 (10 codeunits, 2 interfaces, 1 enum, 1 permission set, 1 permission set extension, ...); no Learn hub documents its objects yet."
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
  at: "2026-10-07T21:10:59.019Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 8d4595fedfb8a6fcedd3be445b166527025907e02d0e6938481e322e5b763c91
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/tree/ad9b529a78c818ba25c24aecd093442a6c7a3852/src/Apps/W1/Email%20-%20SMTP%20API/app
    title: src/Apps/W1/Email - SMTP API/app (main)
    date: null
    commit: ad9b529a78c818ba25c24aecd093442a6c7a3852
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/codeunit/4611
    - object/codeunit/4612
    - object/codeunit/4613
    - object/codeunit/4614
    - object/codeunit/4615
    - object/codeunit/4616
    - object/codeunit/4617
    - object/codeunit/4618
    - object/codeunit/4619
    - object/codeunit/4620
    - object/enum/4611
    - object/interface/ismtp-client
    - object/interface/smtp-auth
    - object/permissionset/4615
    - object/permissionsetextension/4616
    - object/entitlement/email-smtp-api
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
app: Email - SMTP API
namespace_root: System.Email
present_in:
  - "29"
  - "30"
counts:
  objects: 16
  by_type:
    codeunit: 10
    interface: 2
    enum: 1
    permissionset: 1
    permissionsetextension: 1
    entitlement: 1
  hubs: 0
  videos: 0
  posts: 0
---

# Email - SMTP API

> Email - SMTP API (System.Email): 16 objects in BC29-30 (10 codeunits, 2 interfaces, 1 enum, 1 permission set, 1 permission set extension, ...); no Learn hub documents its objects yet.

First-party app · folder `src/Apps/W1/Email - SMTP API/app` · namespace `System.Email` · BC29-30 · system platform · facts from the code pillar and the joins, nothing machine-written

## Objects

16 objects, by type.

### Codeunits (10)

| Id | Name | Caption |
|---|---|---|
| 4611 | [SMTP Client](../objects/codeunit/4611.md) |  |
| 4612 | [SMTP Client Impl](../objects/codeunit/4612.md) |  |
| 4613 | [SMTP Message](../objects/codeunit/4613.md) |  |
| 4614 | [SMTP Message Impl](../objects/codeunit/4614.md) |  |
| 4615 | [MailKit Client](../objects/codeunit/4615.md) |  |
| 4616 | [OAuth2 SMTP Auth](../objects/codeunit/4616.md) |  |
| 4617 | [Basic SMTP Auth](../objects/codeunit/4617.md) |  |
| 4618 | [Anonymous SMTP Auth](../objects/codeunit/4618.md) |  |
| 4619 | [NTLM SMTP Auth](../objects/codeunit/4619.md) |  |
| 4620 | [SMTP Authentication](../objects/codeunit/4620.md) |  |

### Enums (1)

| Id | Name | Caption |
|---|---|---|
| 4611 | [SMTP Authentication Types](../objects/enum/4611.md) |  |

### Interfaces (2)

| Id | Name | Caption |
|---|---|---|
|  | [iSMTP Client](../objects/interface/ismtp-client.md) |  |
|  | [SMTP Auth](../objects/interface/smtp-auth.md) |  |

### Permission sets (1)

| Id | Name | Caption |
|---|---|---|
| 4615 | [Email - SMTP API - Objects](../objects/permissionset/4615.md) |  |

### Permission set extensions (1)

| Id | Name | Caption |
|---|---|---|
| 4616 | [Email - SMTP API](../objects/permissionsetextension/4616.md) |  |

### Entitlements (1)

| Id | Name | Caption |
|---|---|---|
|  | [Email - SMTP API](../objects/entitlement/email-smtp-api.md) |  |

Source: [src/Apps/W1/Email - SMTP API/app](https://github.com/microsoft/BCApps/tree/ad9b529a78c818ba25c24aecd093442a6c7a3852/src/Apps/W1/Email%20-%20SMTP%20API/app); objects from data/code/, hubs from data/index/docs-objects.json through the object pages.
