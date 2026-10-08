---
id: app/enforceddigitalvouchers
type: app
title: EnforcedDigitalVouchers
summary: "EnforcedDigitalVouchers (Microsoft.EServices): 39 objects in BC29-30 (11 page extensions, 9 codeunits, 5 permission set extensions, 4 pages, 3 tables, ...); documented by 1 Learn hub; 1 video."
tier: official
language: en
tags:
  - first-party app
  - integration
system: integration
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T23:36:24.645Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 168df21a953b23b0f9a1caa29f35af9299038ad3d88e2e3135ad86834322eba2
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/tree/f18567dc08e2bd162bf192e1da4d714b57eb099f/src/Apps/W1/EnforcedDigitalVouchers/app
    title: src/Apps/W1/EnforcedDigitalVouchers/app (main)
    date: null
    commit: f18567dc08e2bd162bf192e1da4d714b57eb099f
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/table/5579
    - object/table/5580
    - object/table/5581
    - object/tableextension/5582
    - object/page/5579
    - object/page/5580
    - object/page/5582
    - object/page/5587
    - object/pageextension/5583
    - object/pageextension/5584
    - object/pageextension/5585
    - object/pageextension/5586
    - object/pageextension/5588
    - object/pageextension/5589
    - object/pageextension/5590
    - object/pageextension/5591
    - object/pageextension/5592
    - object/pageextension/5593
    - object/pageextension/5594
    - object/codeunit/5579
    - object/codeunit/5580
    - object/codeunit/5581
    - object/codeunit/5582
    - object/codeunit/5583
    - object/codeunit/5584
    - object/codeunit/5585
    - object/codeunit/5586
    - object/codeunit/5588
    - object/enum/5579
    - object/enum/5580
    - object/interface/digital-voucher-check
    - object/permissionset/5583
    - object/permissionset/5584
    - object/permissionset/5585
    - object/permissionsetextension/5579
    - object/permissionsetextension/5580
    - object/permissionsetextension/5581
    - object/permissionsetextension/5582
    - object/permissionsetextension/5586
  features: []
  topics:
    - topic/business-central/business-functionality/general-business-functionality
  localizations: []
  videos:
    - video/hcu7T3qLdDA
  posts: []
  guidelines: []
app: EnforcedDigitalVouchers
namespace_root: Microsoft.EServices
present_in:
  - "29"
  - "30"
counts:
  objects: 39
  by_type:
    pageextension: 11
    codeunit: 9
    permissionsetextension: 5
    page: 4
    table: 3
    permissionset: 3
    enum: 2
    tableextension: 1
    interface: 1
  hubs: 1
  videos: 1
  posts: 0
---

# EnforcedDigitalVouchers

> EnforcedDigitalVouchers (Microsoft.EServices): 39 objects in BC29-30 (11 page extensions, 9 codeunits, 5 permission set extensions, 4 pages, 3 tables, ...); documented by 1 Learn hub; 1 video.

First-party app · folder `src/Apps/W1/EnforcedDigitalVouchers/app` · namespace `Microsoft.EServices` · BC29-30 · system integration · facts from the code pillar and the joins, nothing machine-written

## What Learn documents it

The topic hubs whose Learn pages name this app's pages and reports (a table counts through the pages on it), by the number of the app's objects they document.

- [General business functionality](../topics/business-central/business-functionality/general-business-functionality.md) (Business functionality): 6 objects

## Objects

39 objects, by type.

### Tables (3)

| Id | Name | Caption |
|---|---|---|
| 5579 | [Digital Voucher Entry Setup](../objects/table/5579.md) |  |
| 5580 | [Voucher Entry Source Code](../objects/table/5580.md) |  |
| 5581 | [Digital Voucher Setup](../objects/table/5581.md) |  |

### Table extensions (1)

| Id | Name | Caption |
|---|---|---|
| 5582 | [Dig. Voucher Inc. Doc. Attach.](../objects/tableextension/5582.md) |  |

### Pages (4)

| Id | Name | Caption |
|---|---|---|
| 5579 | [Digital Voucher Entry Setup](../objects/page/5579.md) |  |
| 5580 | [Digital Voucher Guide](../objects/page/5580.md) |  |
| 5582 | [Voucher Entry Source Codes](../objects/page/5582.md) |  |
| 5587 | [Digital Voucher Setup](../objects/page/5587.md) |  |

### Page extensions (11)

| Id | Name | Caption |
|---|---|---|
| 5583 | [Digital Voucher G/L Entries](../objects/pageextension/5583.md) |  |
| 5584 | [Incoming Doc. Sales Cr. Memo](../objects/pageextension/5584.md) |  |
| 5585 | [Incoming Doc. Sales Inv.](../objects/pageextension/5585.md) |  |
| 5586 | [Incoming Doc. Sales Order](../objects/pageextension/5586.md) |  |
| 5588 | [Dig. Voucher Serv. Order](../objects/pageextension/5588.md) |  |
| 5589 | [Dig. Voucher Serv. Invoice](../objects/pageextension/5589.md) |  |
| 5590 | [Dig. Voucher Serv. Cr. Memo](../objects/pageextension/5590.md) |  |
| 5591 | [Dig. Voucher Pstd. Serv. Inv.](../objects/pageextension/5591.md) |  |
| 5592 | [Dig.Vouch. Pstd. Serv.Cr.Memo](../objects/pageextension/5592.md) |  |
| 5593 | [Digital Voucher Purch. Order](../objects/pageextension/5593.md) |  |
| 5594 | [Dig. Voucher Purch. Ret. Order](../objects/pageextension/5594.md) |  |

### Codeunits (9)

| Id | Name | Caption |
|---|---|---|
| 5579 | [Digital Voucher Impl.](../objects/codeunit/5579.md) |  |
| 5580 | [Voucher Attachment Check](../objects/codeunit/5580.md) |  |
| 5581 | [Voucher Attach Or Note Check](../objects/codeunit/5581.md) |  |
| 5582 | [Voucher No Check](../objects/codeunit/5582.md) |  |
| 5583 | [Voucher Unknown Check](../objects/codeunit/5583.md) |  |
| 5584 | [Dig. Voucher Manual Subscriber](../objects/codeunit/5584.md) |  |
| 5585 | [Digital Voucher Feature](../objects/codeunit/5585.md) |  |
| 5586 | [Digital Voucher Entry](../objects/codeunit/5586.md) |  |
| 5588 | [Voucher E-Document Check](../objects/codeunit/5588.md) |  |

### Enums (2)

| Id | Name | Caption |
|---|---|---|
| 5579 | [Digital Voucher Entry Type](../objects/enum/5579.md) |  |
| 5580 | [Digital Voucher Check Type](../objects/enum/5580.md) |  |

### Interfaces (1)

| Id | Name | Caption |
|---|---|---|
|  | [Digital Voucher Check](../objects/interface/digital-voucher-check.md) |  |

### Permission sets (3)

| Id | Name | Caption |
|---|---|---|
| 5583 | [Digital Voucher - Objects](../objects/permissionset/5583.md) |  |
| 5584 | [Dig. Voucher - Edit](../objects/permissionset/5584.md) |  |
| 5585 | [Dig. Voucher - Read](../objects/permissionset/5585.md) |  |

### Permission set extensions (5)

| Id | Name | Caption |
|---|---|---|
| 5579 | [D365 BASIC - Dig. Voucher](../objects/permissionsetextension/5579.md) |  |
| 5580 | [D365 BASIC ISV - Dig. Voucher](../objects/permissionsetextension/5580.md) |  |
| 5581 | [D365 READ - Dig. Voucher](../objects/permissionsetextension/5581.md) |  |
| 5582 | [D365 TEAM MEMBER - Dig. Voucher](../objects/permissionsetextension/5582.md) |  |
| 5586 | [INTELLIGENT CLOUD - Dig. Voucher](../objects/permissionsetextension/5586.md) |  |

## Videos and posts

Videos and posts that name this app's objects by exact type and name.

- [What's New: The Danish Bookkeeping Act (2024 release wave 1)](../videos/hcu7T3qLdDA.md) (video, 2024-04-04): names Page 5579 "Digital Voucher Entry Setup"

Source: [src/Apps/W1/EnforcedDigitalVouchers/app](https://github.com/microsoft/BCApps/tree/f18567dc08e2bd162bf192e1da4d714b57eb099f/src/Apps/W1/EnforcedDigitalVouchers/app); objects from data/code/, hubs from data/index/docs-objects.json through the object pages.
