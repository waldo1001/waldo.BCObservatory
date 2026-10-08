---
id: app/salesorderagent
type: app
title: SalesOrderAgent
summary: "SalesOrderAgent (Microsoft.Agent): 104 objects in BC29-30 (48 codeunits, 15 page customizations, 14 pages, 10 tables, 4 page extensions, ...); documented by 4 Learn hubs."
tier: official
language: en
tags:
  - first-party app
  - copilot
system: copilot
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T23:36:24.645Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 5cce9d2603a8637b0f167d8420405ebecd5dabe9d896a891f66759b9d7e39e11
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/tree/f18567dc08e2bd162bf192e1da4d714b57eb099f/src/Apps/W1/SalesOrderAgent/app
    title: src/Apps/W1/SalesOrderAgent/app (main)
    date: null
    commit: f18567dc08e2bd162bf192e1da4d714b57eb099f
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/table/4325
    - object/table/4585
    - object/table/4586
    - object/table/4587
    - object/table/4588
    - object/table/4589
    - object/table/4592
    - object/table/4593
    - object/table/4594
    - object/table/4596
    - object/tableextension/4412
    - object/page/4400
    - object/page/4401
    - object/page/4402
    - object/page/4403
    - object/page/4404
    - object/page/4405
    - object/page/4406
    - object/page/4407
    - object/page/4408
    - object/page/4409
    - object/page/4410
    - object/page/4411
    - object/page/4412
    - object/page/4585
    - object/pageextension/4400
    - object/pageextension/4409
    - object/pageextension/4410
    - object/pageextension/4411
    - object/report/4414
    - object/codeunit/4002
    - object/codeunit/4302
    - object/codeunit/4304
    - object/codeunit/4305
    - object/codeunit/4306
    - object/codeunit/4309
    - object/codeunit/4323
    - object/codeunit/4395
    - object/codeunit/4396
    - object/codeunit/4397
    - object/codeunit/4398
    - object/codeunit/4399
    - object/codeunit/4400
    - object/codeunit/4401
    - object/codeunit/4402
    - object/codeunit/4403
    - object/codeunit/4407
    - object/codeunit/4408
    - object/codeunit/4411
    - object/codeunit/4413
    - object/codeunit/4414
    - object/codeunit/4415
    - object/codeunit/4416
    - object/codeunit/4417
    - object/codeunit/4418
    - object/codeunit/4419
    - object/codeunit/4420
    - object/codeunit/4421
    - object/codeunit/4581
    - object/codeunit/4582
    - object/codeunit/4583
    - object/codeunit/4584
    - object/codeunit/4585
    - object/codeunit/4586
    - object/codeunit/4587
    - object/codeunit/4588
    - object/codeunit/4589
    - object/codeunit/4590
    - object/codeunit/4591
    - object/codeunit/4592
    - object/codeunit/4593
    - object/codeunit/4594
    - object/codeunit/4595
    - object/codeunit/4596
    - object/codeunit/4597
    - object/codeunit/4598
    - object/codeunit/4599
    - object/codeunit/4600
    - object/enum/4586
    - object/enum/4592
    - object/enum/4593
    - object/enum/4594
    - object/enumextension/4400
    - object/enumextension/4586
    - object/permissionset/4405
    - object/permissionset/4406
    - object/permissionset/4407
    - object/entitlement/sales-order-agent
    - object/profile/sales-order-agent
    - object/pagecustomization/soa-contact-card
    - object/pagecustomization/soa-contact-list
    - object/pagecustomization/soa-customer-card
    - object/pagecustomization/soa-customer-list
    - object/pagecustomization/soa-item-card
    - object/pagecustomization/soa-item-list
    - object/pagecustomization/soa-item-lookup
    - object/pagecustomization/soa-multi-item-avail
    - object/pagecustomization/soa-sales-order
    - object/pagecustomization/soa-sales-order-subform
    - object/pagecustomization/soa-sales-orders
    - object/pagecustomization/soa-sales-quote
    - object/pagecustomization/soa-sales-quote-subform
    - object/pagecustomization/soa-sales-quotes
    - object/pagecustomization/soa-ship-to-address-list
  features: []
  topics:
    - topic/business-central/copilot-and-agent-capabilities/expense-agent-preview/expense-agent-overview
    - topic/business-central/copilot-and-agent-capabilities/payables-agent
    - topic/business-central/copilot-and-agent-capabilities/sales-order-agent
    - topic/business-central/business-functionality/expense-management-preview/understand-expense-agent
  localizations: []
  videos: []
  posts: []
  guidelines: []
app: SalesOrderAgent
namespace_root: Microsoft.Agent
present_in:
  - "29"
  - "30"
counts:
  objects: 104
  by_type:
    codeunit: 48
    pagecustomization: 15
    page: 14
    table: 10
    pageextension: 4
    enum: 4
    permissionset: 3
    enumextension: 2
    tableextension: 1
    report: 1
    entitlement: 1
    profile: 1
  hubs: 4
  videos: 0
  posts: 0
---

# SalesOrderAgent

> SalesOrderAgent (Microsoft.Agent): 104 objects in BC29-30 (48 codeunits, 15 page customizations, 14 pages, 10 tables, 4 page extensions, ...); documented by 4 Learn hubs.

First-party app · folder `src/Apps/W1/SalesOrderAgent/app` · namespace `Microsoft.Agent` · BC29-30 · system copilot · facts from the code pillar and the joins, nothing machine-written

## What Learn documents it

The topic hubs whose Learn pages name this app's pages and reports (a table counts through the pages on it), by the number of the app's objects they document.

- [Expense Agent overview](../topics/business-central/copilot-and-agent-capabilities/expense-agent-preview/expense-agent-overview.md) (Copilot and agent capabilities > Expense Agent (preview)): 3 objects
- [Payables Agent](../topics/business-central/copilot-and-agent-capabilities/payables-agent.md) (Copilot and agent capabilities): 3 objects
- [Sales Order Agent](../topics/business-central/copilot-and-agent-capabilities/sales-order-agent.md) (Copilot and agent capabilities): 3 objects
- [Understand Expense Agent](../topics/business-central/business-functionality/expense-management-preview/understand-expense-agent.md) (Business functionality > Expense management (preview)): 3 objects

## Objects

104 objects, by type.

### Tables (10)

| Id | Name | Caption |
|---|---|---|
| 4325 | [SOA Setup](../objects/table/4325.md) |  |
| 4585 | [SOA Email](../objects/table/4585.md) |  |
| 4586 | [SOA Billing Log](../objects/table/4586.md) |  |
| 4587 | [SOA Billing Task Setup](../objects/table/4587.md) |  |
| 4588 | [SOA Task Contact Override](../objects/table/4588.md) |  |
| 4589 | [SOA Reply Attempt](../objects/table/4589.md) |  |
| 4592 | [SOA KPI Entry](../objects/table/4592.md) |  |
| 4593 | [SOA KPI](../objects/table/4593.md) | Sales Order Agent |
| 4594 | [SOA Task](../objects/table/4594.md) |  |
| 4596 | [SOA KPI Summary](../objects/table/4596.md) | Sales Order Agent |

### Table extensions (1)

| Id | Name | Caption |
|---|---|---|
| 4412 | [SOA Item Ext](../objects/tableextension/4412.md) |  |

### Pages (14)

| Id | Name | Caption |
|---|---|---|
| 4400 | [SOA Setup](../objects/page/4400.md) | Configure Sales Order Agent |
| 4401 | [SOA Role Center](../objects/page/4401.md) | Sales Order Agent |
| 4402 | [SOA KPI](../objects/page/4402.md) | Sales Order Agent |
| 4403 | [SOA KPI Entries](../objects/page/4403.md) | Sales Order Agent Entries |
| 4404 | [SOA Email Message](../objects/page/4404.md) | Sales Order Email Message |
| 4405 | [SOA Email Attachments](../objects/page/4405.md) | Email Attachments |
| 4406 | [SOA Create Contact](../objects/page/4406.md) | Create new contact |
| 4407 | [SOA Email Template](../objects/page/4407.md) | Edit mail signature |
| 4408 | [SOA Create Task Attachments](../objects/page/4408.md) | Attachments |
| 4409 | [SOA Create Task](../objects/page/4409.md) | Create task |
| 4410 | [SOA Multi Items Availability](../objects/page/4410.md) | Item Availability |
| 4411 | [SOA Activities](../objects/page/4411.md) |  |
| 4412 | [SOA Contact Lookup](../objects/page/4412.md) | Select contact |
| 4585 | [SOA Billing Overview](../objects/page/4585.md) | Sales Order Agent - Billing Overview |

### Page extensions (4)

| Id | Name | Caption |
|---|---|---|
| 4400 | [Sales Quote Ext](../objects/pageextension/4400.md) |  |
| 4409 | [Sales Quote Sub. Ext](../objects/pageextension/4409.md) |  |
| 4410 | [Sales Order Ext](../objects/pageextension/4410.md) |  |
| 4411 | [SOA Contact List Ext](../objects/pageextension/4411.md) |  |

### Reports (1)

| Id | Name | Caption |
|---|---|---|
| 4414 | [SOA Sample Order](../objects/report/4414.md) | Sample Order |

### Codeunits (48)

| Id | Name | Caption |
|---|---|---|
| 4002 | [SOA Prompt Builder](../objects/codeunit/4002.md) |  |
| 4302 | [SOA Validation Function](../objects/codeunit/4302.md) |  |
| 4304 | [SOA Session Events](../objects/codeunit/4304.md) |  |
| 4305 | [SOA Filters Impl.](../objects/codeunit/4305.md) |  |
| 4306 | [SOA Session Filter](../objects/codeunit/4306.md) |  |
| 4309 | [SOA Agent Task Execution](../objects/codeunit/4309.md) |  |
| 4323 | [SOA Awareness Notifications](../objects/codeunit/4323.md) |  |
| 4395 | [Global Item Search](../objects/codeunit/4395.md) |  |
| 4396 | [SOA Email Setup](../objects/codeunit/4396.md) |  |
| 4397 | [SOA Test Setup](../objects/codeunit/4397.md) |  |
| 4398 | [SOA Task Message](../objects/codeunit/4398.md) |  |
| 4399 | [SOA Annotation](../objects/codeunit/4399.md) |  |
| 4400 | [SOA Setup](../objects/codeunit/4400.md) |  |
| 4401 | [SOA Metadata Provider](../objects/codeunit/4401.md) |  |
| 4402 | [SOA Output Message Setup](../objects/codeunit/4402.md) |  |
| 4403 | [SOA Output Message Validation](../objects/codeunit/4403.md) |  |
| 4407 | [SOA Email Template Validation](../objects/codeunit/4407.md) |  |
| 4408 | [SOA Set Reply Failed](../objects/codeunit/4408.md) |  |
| 4411 | [SOA Contact Search Impl](../objects/codeunit/4411.md) |  |
| 4413 | [SOA Shipment Date Mgt.](../objects/codeunit/4413.md) |  |
| 4414 | [SOA Price Calc. Notification](../objects/codeunit/4414.md) |  |
| 4415 | [SOA Create Task Impl](../objects/codeunit/4415.md) |  |
| 4416 | [SOA Item Selector Func](../objects/codeunit/4416.md) |  |
| 4417 | [SOA Item Selector](../objects/codeunit/4417.md) |  |
| 4418 | [SOA Reply Retry Mgt.](../objects/codeunit/4418.md) |  |
| 4419 | [SOA Send Reply](../objects/codeunit/4419.md) |  |
| 4420 | [SOA Task Message Reader](../objects/codeunit/4420.md) |  |
| 4421 | [SOA Attachment MLLM](../objects/codeunit/4421.md) |  |
| 4581 | [SOA Send Replies](../objects/codeunit/4581.md) |  |
| 4582 | [SOA Retrieve Emails](../objects/codeunit/4582.md) |  |
| 4583 | [SO Agent](../objects/codeunit/4583.md) |  |
| 4584 | [SOA Recovery](../objects/codeunit/4584.md) |  |
| 4585 | [SOA Error Handler](../objects/codeunit/4585.md) |  |
| 4586 | [SOA Dispatcher](../objects/codeunit/4586.md) |  |
| 4587 | [SOA Impl](../objects/codeunit/4587.md) |  |
| 4588 | [SOA Install](../objects/codeunit/4588.md) |  |
| 4589 | [SOA Upgrade](../objects/codeunit/4589.md) |  |
| 4590 | [SOA Billing](../objects/codeunit/4590.md) |  |
| 4591 | [SOA Item Search](../objects/codeunit/4591.md) |  |
| 4592 | [SOA Events](../objects/codeunit/4592.md) |  |
| 4593 | [SOA Variant Search](../objects/codeunit/4593.md) |  |
| 4594 | [SOA - KPI Track Agents](../objects/codeunit/4594.md) |  |
| 4595 | [SOA - KPI Track All](../objects/codeunit/4595.md) |  |
| 4596 | [SOA Broader Item Search](../objects/codeunit/4596.md) |  |
| 4597 | [SOA Broader Item Search Func](../objects/codeunit/4597.md) |  |
| 4598 | [SOA Instructions](../objects/codeunit/4598.md) |  |
| 4599 | [SOA Integration Events](../objects/codeunit/4599.md) |  |
| 4600 | [SOA Document Events](../objects/codeunit/4600.md) |  |

### Enums (4)

| Id | Name | Caption |
|---|---|---|
| 4586 | [SOA Billing Operation](../objects/enum/4586.md) |  |
| 4592 | [SOA Availability Level](../objects/enum/4592.md) |  |
| 4593 | [SOA Input Message Review](../objects/enum/4593.md) |  |
| 4594 | [SOA Email Attachment Status](../objects/enum/4594.md) |  |

### Enum extensions (2)

| Id | Name | Caption |
|---|---|---|
| 4400 | [SOA Metadata Provider](../objects/enumextension/4400.md) |  |
| 4586 | [SOA Capability](../objects/enumextension/4586.md) |  |

### Permission sets (3)

| Id | Name | Caption |
|---|---|---|
| 4405 | [SOA - Edit](../objects/permissionset/4405.md) | Sales Order Agent - Edit |
| 4406 | [SOA - Objects](../objects/permissionset/4406.md) | Sales Order Agent - Objects |
| 4407 | [SOA - Read](../objects/permissionset/4407.md) | Sales Order Agent - Read |

### Entitlements (1)

| Id | Name | Caption |
|---|---|---|
|  | [Sales Order Agent](../objects/entitlement/sales-order-agent.md) |  |

### Profiles (1)

| Id | Name | Caption |
|---|---|---|
|  | [Sales Order Agent](../objects/profile/sales-order-agent.md) | Sales Order Agent (Copilot) |

### Page customizations (15)

| Id | Name | Caption |
|---|---|---|
|  | [SOA Contact Card](../objects/pagecustomization/soa-contact-card.md) |  |
|  | [SOA Contact List](../objects/pagecustomization/soa-contact-list.md) |  |
|  | [SOA Customer Card](../objects/pagecustomization/soa-customer-card.md) |  |
|  | [SOA Customer List](../objects/pagecustomization/soa-customer-list.md) |  |
|  | [SOA Item Card](../objects/pagecustomization/soa-item-card.md) |  |
|  | [SOA Item List](../objects/pagecustomization/soa-item-list.md) |  |
|  | [SOA Item Lookup](../objects/pagecustomization/soa-item-lookup.md) |  |
|  | [SOA Multi Item Avail.](../objects/pagecustomization/soa-multi-item-avail.md) |  |
|  | [SOA Sales Order](../objects/pagecustomization/soa-sales-order.md) |  |
|  | [SOA Sales Order Subform](../objects/pagecustomization/soa-sales-order-subform.md) |  |
|  | [SOA Sales Orders](../objects/pagecustomization/soa-sales-orders.md) |  |
|  | [SOA Sales Quote](../objects/pagecustomization/soa-sales-quote.md) |  |
|  | [SOA Sales Quote Subform](../objects/pagecustomization/soa-sales-quote-subform.md) |  |
|  | [SOA Sales Quotes](../objects/pagecustomization/soa-sales-quotes.md) |  |
|  | [SOA Ship-to Address List](../objects/pagecustomization/soa-ship-to-address-list.md) |  |

Source: [src/Apps/W1/SalesOrderAgent/app](https://github.com/microsoft/BCApps/tree/f18567dc08e2bd162bf192e1da4d714b57eb099f/src/Apps/W1/SalesOrderAgent/app); objects from data/code/, hubs from data/index/docs-objects.json through the object pages.
