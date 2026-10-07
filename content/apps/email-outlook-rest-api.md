---
id: app/email-outlook-rest-api
type: app
title: Email - Outlook REST API
summary: "Email - Outlook REST API (System.Email): 18 objects in BC29-30 (6 interfaces, 3 codeunits, 3 permission sets, 2 tables, 2 permission set extensions, ...); documented by 1 Learn hub."
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
  at: "2026-10-07T15:51:03.523Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: f9b324f12f24b722a14e1df663c61d8de5734656b0ade9e18902857d4888c9b4
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/tree/a4406cfa9e57437fedc49c53c327a199a854491e/src/Apps/W1/Email%20-%20Outlook%20REST%20API/app
    title: src/Apps/W1/Email - Outlook REST API/app (main)
    date: null
    commit: a4406cfa9e57437fedc49c53c327a199a854491e
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/table/4508
    - object/table/4509
    - object/page/4509
    - object/codeunit/4507
    - object/codeunit/4509
    - object/codeunit/4510
    - object/interface/email-oauth-client-v2
    - object/interface/email-outlook-api-client-v2
    - object/interface/email-outlook-api-client-v3
    - object/interface/email-outlook-api-client-v4
    - object/interface/email-outlook-api-client-v5
    - object/interface/email-outlook-api-client-v6
    - object/permissionset/4507
    - object/permissionset/4508
    - object/permissionset/4509
    - object/permissionsetextension/4506
    - object/permissionsetextension/4507
    - object/entitlement/outlook-rest-api
  features: []
  topics:
    - topic/dev-itpro/development/extensibility/extending-the-base-application/examples
  localizations: []
  videos: []
  posts: []
  guidelines: []
app: Email - Outlook REST API
namespace_root: System.Email
present_in:
  - "29"
  - "30"
counts:
  objects: 18
  by_type:
    interface: 6
    codeunit: 3
    permissionset: 3
    table: 2
    permissionsetextension: 2
    page: 1
    entitlement: 1
  hubs: 1
  videos: 0
  posts: 0
---

# Email - Outlook REST API

> Email - Outlook REST API (System.Email): 18 objects in BC29-30 (6 interfaces, 3 codeunits, 3 permission sets, 2 tables, 2 permission set extensions, ...); documented by 1 Learn hub.

First-party app · folder `src/Apps/W1/Email - Outlook REST API/app` · namespace `System.Email` · BC29-30 · system platform · facts from the code pillar and the joins, nothing machine-written

## What Learn documents it

The topic hubs whose Learn pages name this app's pages and reports (a table counts through the pages on it), by the number of the app's objects they document.

- [Examples](../topics/dev-itpro/development/extensibility/extending-the-base-application/examples.md) (Development > Extensibility > Extending the base application): 1 object

## Objects

18 objects, by type.

### Tables (2)

| Id | Name | Caption |
|---|---|---|
| 4508 | [Email - Outlook Account](../objects/table/4508.md) |  |
| 4509 | [Email - Outlook API Setup](../objects/table/4509.md) |  |

### Pages (1)

| Id | Name | Caption |
|---|---|---|
| 4509 | [Email - Outlook API Setup](../objects/page/4509.md) | Email Microsoft Entra application registration |

### Codeunits (3)

| Id | Name | Caption |
|---|---|---|
| 4507 | [Email - OAuth Client](../objects/codeunit/4507.md) |  |
| 4509 | [Email - Outlook API Helper](../objects/codeunit/4509.md) |  |
| 4510 | [Email - Outlook API Install](../objects/codeunit/4510.md) |  |

### Interfaces (6)

| Id | Name | Caption |
|---|---|---|
|  | [Email - OAuth Client v2](../objects/interface/email-oauth-client-v2.md) |  |
|  | [Email - Outlook API Client v2](../objects/interface/email-outlook-api-client-v2.md) |  |
|  | [Email - Outlook API Client v3](../objects/interface/email-outlook-api-client-v3.md) |  |
|  | [Email - Outlook API Client v4](../objects/interface/email-outlook-api-client-v4.md) |  |
|  | [Email - Outlook API Client v5](../objects/interface/email-outlook-api-client-v5.md) |  |
|  | [Email - Outlook API Client v6](../objects/interface/email-outlook-api-client-v6.md) |  |

### Permission sets (3)

| Id | Name | Caption |
|---|---|---|
| 4507 | [Email ORA - Edit](../objects/permissionset/4507.md) | Email - Outlook REST API - Edit |
| 4508 | [Email ORA - Objects](../objects/permissionset/4508.md) | Email - Outlook REST API - Objects |
| 4509 | [Email ORA - Read](../objects/permissionset/4509.md) | Email - Outlook REST API - Read |

### Permission set extensions (2)

| Id | Name | Caption |
|---|---|---|
| 4506 | [Email - Edit - ORA](../objects/permissionsetextension/4506.md) |  |
| 4507 | [Email - Admin - ORA](../objects/permissionsetextension/4507.md) |  |

### Entitlements (1)

| Id | Name | Caption |
|---|---|---|
|  | [Outlook REST API](../objects/entitlement/outlook-rest-api.md) |  |

Source: [src/Apps/W1/Email - Outlook REST API/app](https://github.com/microsoft/BCApps/tree/a4406cfa9e57437fedc49c53c327a199a854491e/src/Apps/W1/Email%20-%20Outlook%20REST%20API/app); objects from data/code/, hubs from data/index/docs-objects.json through the object pages.
