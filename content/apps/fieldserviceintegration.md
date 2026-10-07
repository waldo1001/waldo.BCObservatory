---
id: app/fieldserviceintegration
type: app
title: FieldServiceIntegration
summary: "FieldServiceIntegration (Microsoft.Integration): 81 objects in BC29-30 (18 page extensions, 17 tables, 11 table extensions, 11 permission set extensions, 10 codeunits, ...); no Learn hub documents its objects yet."
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
  at: "2026-10-07T16:25:37.512Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 1d1904d669d96e9b259c42ed1d2001424cc4a8f43c8f6c6819b3810a73e51e2c
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/tree/9df55025ee6eb2a1346ddad3a8a55d1ba1ff75aa/src/Apps/W1/FieldServiceIntegration/app
    title: src/Apps/W1/FieldServiceIntegration/app (main)
    date: null
    commit: 9df55025ee6eb2a1346ddad3a8a55d1ba1ff75aa
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/table/6610
    - object/table/6611
    - object/table/6612
    - object/table/6613
    - object/table/6614
    - object/table/6615
    - object/table/6616
    - object/table/6617
    - object/table/6618
    - object/table/6619
    - object/table/6620
    - object/table/6621
    - object/table/6622
    - object/table/6623
    - object/table/6624
    - object/table/6625
    - object/table/6627
    - object/tableextension/6610
    - object/tableextension/6611
    - object/tableextension/6612
    - object/tableextension/6613
    - object/tableextension/6614
    - object/tableextension/6615
    - object/tableextension/6616
    - object/tableextension/6617
    - object/tableextension/6618
    - object/tableextension/6619
    - object/tableextension/6620
    - object/page/6610
    - object/page/6611
    - object/page/6612
    - object/page/6613
    - object/page/6614
    - object/page/6615
    - object/page/6616
    - object/pageextension/6610
    - object/pageextension/6611
    - object/pageextension/6612
    - object/pageextension/6613
    - object/pageextension/6614
    - object/pageextension/6615
    - object/pageextension/6616
    - object/pageextension/6617
    - object/pageextension/6618
    - object/pageextension/6619
    - object/pageextension/6620
    - object/pageextension/6621
    - object/pageextension/6622
    - object/pageextension/6623
    - object/pageextension/6624
    - object/pageextension/6625
    - object/pageextension/6627
    - object/pageextension/6628
    - object/codeunit/6610
    - object/codeunit/6611
    - object/codeunit/6612
    - object/codeunit/6613
    - object/codeunit/6614
    - object/codeunit/6615
    - object/codeunit/6616
    - object/codeunit/6617
    - object/codeunit/6618
    - object/codeunit/6619
    - object/query/6610
    - object/enum/6610
    - object/enum/6611
    - object/enum/6612
    - object/permissionset/6610
    - object/permissionset/6611
    - object/permissionset/6612
    - object/permissionsetextension/6610
    - object/permissionsetextension/6611
    - object/permissionsetextension/6612
    - object/permissionsetextension/6613
    - object/permissionsetextension/6614
    - object/permissionsetextension/6615
    - object/permissionsetextension/6616
    - object/permissionsetextension/6617
    - object/permissionsetextension/6618
    - object/permissionsetextension/6619
    - object/permissionsetextension/6620
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
app: FieldServiceIntegration
namespace_root: Microsoft.Integration
present_in:
  - "29"
  - "30"
counts:
  objects: 81
  by_type:
    pageextension: 18
    table: 17
    tableextension: 11
    permissionsetextension: 11
    codeunit: 10
    page: 7
    enum: 3
    permissionset: 3
    query: 1
  hubs: 0
  videos: 0
  posts: 0
---

# FieldServiceIntegration

> FieldServiceIntegration (Microsoft.Integration): 81 objects in BC29-30 (18 page extensions, 17 tables, 11 table extensions, 11 permission set extensions, 10 codeunits, ...); no Learn hub documents its objects yet.

First-party app · folder `src/Apps/W1/FieldServiceIntegration/app` · namespace `Microsoft.Integration` · BC29-30 · system integration · facts from the code pillar and the joins, nothing machine-written

## Objects

81 objects, by type.

### Tables (17)

| Id | Name | Caption |
|---|---|---|
| 6610 | [FS Bookable Resource](../objects/table/6610.md) |  |
| 6611 | [FS Bookable Resource Booking](../objects/table/6611.md) |  |
| 6612 | [FS BookableResourceBookingHdr](../objects/table/6612.md) |  |
| 6613 | [FS Customer Asset](../objects/table/6613.md) |  |
| 6614 | [FS Customer Asset Category](../objects/table/6614.md) |  |
| 6615 | [FS Project Task](../objects/table/6615.md) |  |
| 6616 | [FS Resource Pay Type](../objects/table/6616.md) |  |
| 6617 | [FS Work Order](../objects/table/6617.md) |  |
| 6618 | [FS Work Order Incident](../objects/table/6618.md) |  |
| 6619 | [FS Work Order Product](../objects/table/6619.md) |  |
| 6620 | [FS Work Order Service](../objects/table/6620.md) |  |
| 6621 | [FS Work Order Substatus](../objects/table/6621.md) |  |
| 6622 | [FS Work Order Type](../objects/table/6622.md) |  |
| 6623 | [FS Connection Setup](../objects/table/6623.md) | Dynamics 365 Field Service Integration Setup |
| 6624 | [FS Warehouse](../objects/table/6624.md) |  |
| 6625 | [FS Incident Type](../objects/table/6625.md) |  |
| 6627 | [FS Booking Status](../objects/table/6627.md) |  |

### Table extensions (11)

| Id | Name | Caption |
|---|---|---|
| 6610 | [FS Job](../objects/tableextension/6610.md) |  |
| 6611 | [FS Job Task](../objects/tableextension/6611.md) |  |
| 6612 | [FS Service Item](../objects/tableextension/6612.md) |  |
| 6613 | [FS Job Cue](../objects/tableextension/6613.md) |  |
| 6614 | [FS Location](../objects/tableextension/6614.md) |  |
| 6615 | [FS Service Header](../objects/tableextension/6615.md) |  |
| 6616 | [FS Service Line](../objects/tableextension/6616.md) |  |
| 6617 | [FS CRM Product](../objects/tableextension/6617.md) |  |
| 6618 | [FS Integration Record](../objects/tableextension/6618.md) |  |
| 6619 | [FS Service Order Type](../objects/tableextension/6619.md) |  |
| 6620 | [FS Service Item Line](../objects/tableextension/6620.md) |  |

### Pages (7)

| Id | Name | Caption |
|---|---|---|
| 6610 | [FS Bookable Resource List](../objects/page/6610.md) | Bookable Resources - Dynamics 365 Field Service |
| 6611 | [FS Customer Asset List](../objects/page/6611.md) | Customer Assets - Dynamics 365 Field Service |
| 6612 | [FS Connection Setup](../objects/page/6612.md) | Dynamics 365 Field Service Integration Setup |
| 6613 | [FS Connection Setup Wizard](../objects/page/6613.md) | Dynamics 365 Field Service Integration Setup |
| 6614 | [FS Item Avail. by Location](../objects/page/6614.md) |  |
| 6615 | [FS Work Order Types](../objects/page/6615.md) | Work Order Types - Dynamics 365 Field Service |
| 6616 | [FS Work Orders](../objects/page/6616.md) | Work Orders - Dynamics 365 Field Service |

### Page extensions (18)

| Id | Name | Caption |
|---|---|---|
| 6610 | [FS Job Task Card](../objects/pageextension/6610.md) |  |
| 6611 | [FS Job Task Lines](../objects/pageextension/6611.md) |  |
| 6612 | [FS Resource Card](../objects/pageextension/6612.md) |  |
| 6613 | [FS Resource List](../objects/pageextension/6613.md) |  |
| 6614 | [FS Service Order](../objects/pageextension/6614.md) |  |
| 6615 | [FS Job Project Manager RC](../objects/pageextension/6615.md) |  |
| 6616 | [FS Project Manager Activities](../objects/pageextension/6616.md) |  |
| 6617 | [FS Job Task List](../objects/pageextension/6617.md) |  |
| 6618 | [FS Job Journal](../objects/pageextension/6618.md) |  |
| 6619 | [FS Service Item Card](../objects/pageextension/6619.md) |  |
| 6620 | [FS Service Item List](../objects/pageextension/6620.md) |  |
| 6621 | [FS Service Manager RC](../objects/pageextension/6621.md) |  |
| 6622 | [FS Service Connections](../objects/pageextension/6622.md) |  |
| 6623 | [FS Location List](../objects/pageextension/6623.md) |  |
| 6624 | [FS Service Orders](../objects/pageextension/6624.md) |  |
| 6625 | [FS Service Order Types](../objects/pageextension/6625.md) |  |
| 6627 | [FS Service Order Subform](../objects/pageextension/6627.md) |  |
| 6628 | [FS Service Lines](../objects/pageextension/6628.md) |  |

### Codeunits (10)

| Id | Name | Caption |
|---|---|---|
| 6610 | [FS Int. Table Subscriber](../objects/codeunit/6610.md) |  |
| 6611 | [FS Setup Defaults](../objects/codeunit/6611.md) |  |
| 6612 | [FS Lookup FS Tables](../objects/codeunit/6612.md) |  |
| 6613 | [FS Assisted Setup Subscriber](../objects/codeunit/6613.md) |  |
| 6614 | [FS Data Classification](../objects/codeunit/6614.md) |  |
| 6615 | [FS Integration Mgt.](../objects/codeunit/6615.md) |  |
| 6616 | [FS Install](../objects/codeunit/6616.md) |  |
| 6617 | [FS Upgrade](../objects/codeunit/6617.md) |  |
| 6618 | [FS Archived Service Orders Job](../objects/codeunit/6618.md) |  |
| 6619 | [FS Environment Cleanup Subs](../objects/codeunit/6619.md) |  |

### Queries (1)

| Id | Name | Caption |
|---|---|---|
| 6610 | [FS Item Avail. by Location](../objects/query/6610.md) |  |

### Enums (3)

| Id | Name | Caption |
|---|---|---|
| 6610 | [FS Work Order Line Post Rule](../objects/enum/6610.md) |  |
| 6611 | [FS Work Order Line Synch. Rule](../objects/enum/6611.md) |  |
| 6612 | [FS Integration Type](../objects/enum/6612.md) |  |

### Permission sets (3)

| Id | Name | Caption |
|---|---|---|
| 6610 | [FS - Edit](../objects/permissionset/6610.md) | Field Service - Edit |
| 6611 | [FS - Read](../objects/permissionset/6611.md) | Field Service - Read |
| 6612 | [FS - Objects](../objects/permissionset/6612.md) | Field Service - Objects |

### Permission set extensions (11)

| Id | Name | Caption |
|---|---|---|
| 6610 | [FS D365 AUTOMATION](../objects/permissionsetextension/6610.md) |  |
| 6611 | [FS D365 DYN CRM MGT](../objects/permissionsetextension/6611.md) |  |
| 6612 | [FS D365 DYN CRM READ](../objects/permissionsetextension/6612.md) |  |
| 6613 | [FS D365 READ](../objects/permissionsetextension/6613.md) |  |
| 6614 | [FS D365 TEAM MEMBER](../objects/permissionsetextension/6614.md) |  |
| 6615 | [FS INTELLIGENT CLOUD](../objects/permissionsetextension/6615.md) |  |
| 6616 | [FS D365 BASIC](../objects/permissionsetextension/6616.md) |  |
| 6617 | [FS D365 BASIC ISV](../objects/permissionsetextension/6617.md) |  |
| 6618 | [FS D365 BUS FULL ACCESS](../objects/permissionsetextension/6618.md) |  |
| 6619 | [FS D365 BUS PREMIUM](../objects/permissionsetextension/6619.md) |  |
| 6620 | [FS D365 FULL ACCESS](../objects/permissionsetextension/6620.md) |  |

Source: [src/Apps/W1/FieldServiceIntegration/app](https://github.com/microsoft/BCApps/tree/9df55025ee6eb2a1346ddad3a8a55d1ba1ff75aa/src/Apps/W1/FieldServiceIntegration/app); objects from data/code/, hubs from data/index/docs-objects.json through the object pages.
