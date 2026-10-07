---
id: app/companyhub
type: app
title: CompanyHub
summary: "CompanyHub (Mirosoft.Integration): 54 objects in BC29-30 (23 entitlements, 11 codeunits, 8 pages, 6 tables, 3 page extensions, ...); documented by 3 Learn hubs."
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
  at: "2026-10-07T15:51:03.523Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: eadf7518f80a288727f0af9f492af5bd46d29c29c708a024a396a6c7d76e1dfd
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/tree/a4406cfa9e57437fedc49c53c327a199a854491e/src/Apps/W1/CompanyHub/app
    title: src/Apps/W1/CompanyHub/app (main)
    date: null
    commit: a4406cfa9e57437fedc49c53c327a199a854491e
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/table/1151
    - object/table/1152
    - object/table/1153
    - object/table/1154
    - object/table/1155
    - object/table/1156
    - object/page/1151
    - object/page/1152
    - object/page/1153
    - object/page/1154
    - object/page/1155
    - object/page/1165
    - object/page/1166
    - object/page/1167
    - object/pageextension/1150
    - object/pageextension/1151
    - object/pageextension/1152
    - object/codeunit/1151
    - object/codeunit/1154
    - object/codeunit/1155
    - object/codeunit/1156
    - object/codeunit/1158
    - object/codeunit/1159
    - object/codeunit/1160
    - object/codeunit/1162
    - object/codeunit/1163
    - object/codeunit/1164
    - object/codeunit/1165
    - object/permissionset/2143
    - object/permissionset/2144
    - object/entitlement/azure-ad-application-api-cohub
    - object/entitlement/d365-business-central-infrastructure-cohub
    - object/entitlement/delegated-admin-agent-partner-cohub
    - object/entitlement/delegated-bc-admin-agent-partner-cohub
    - object/entitlement/delegated-helpdesk-agent-partner-cohub
    - object/entitlement/dynamics-365-accountant-hub-cohub
    - object/entitlement/dynamics-365-admin-partner-cohub
    - object/entitlement/dynamics-365-administrator-cohub
    - object/entitlement/dynamics-365-bc-premium-partner-sandbox-cohub
    - object/entitlement/dynamics-365-business-central-basic-financials-cohub
    - object/entitlement/dynamics-365-business-central-device-embedded-cohub
    - object/entitlement/dynamics-365-business-central-device-cohub
    - object/entitlement/dynamics-365-business-central-essential-attach-cohub
    - object/entitlement/dynamics-365-business-central-essential-embedded-cohub
    - object/entitlement/dynamics-365-business-central-essentials-cohub
    - object/entitlement/dynamics-365-business-central-external-accountant-cohub
    - object/entitlement/dynamics-365-business-central-for-iws-cohub
    - object/entitlement/dynamics-365-business-central-premium-embedded-cohub
    - object/entitlement/dynamics-365-business-central-premium-cohub
    - object/entitlement/dynamics-365-business-central-team-member-embedded-cohub
    - object/entitlement/dynamics-365-business-central-team-member-cohub
    - object/entitlement/internal-administrator-cohub
    - object/entitlement/internal-bc-administrator-cohub
    - object/profile/companyhub
  features: []
  topics:
    - topic/business-central/development-and-administration/customize-business-central/customize-with-extensions
    - topic/business-central/business-functionality/company-hub
    - topic/business-central/business-functionality/finance
  localizations: []
  videos: []
  posts: []
  guidelines: []
app: CompanyHub
namespace_root: Mirosoft.Integration
present_in:
  - "29"
  - "30"
counts:
  objects: 54
  by_type:
    entitlement: 23
    codeunit: 11
    page: 8
    table: 6
    pageextension: 3
    permissionset: 2
    profile: 1
  hubs: 3
  videos: 0
  posts: 0
---

# CompanyHub

> CompanyHub (Mirosoft.Integration): 54 objects in BC29-30 (23 entitlements, 11 codeunits, 8 pages, 6 tables, 3 page extensions, ...); documented by 3 Learn hubs.

First-party app · folder `src/Apps/W1/CompanyHub/app` · namespace `Mirosoft.Integration` · BC29-30 · system integration · facts from the code pillar and the joins, nothing machine-written

## What Learn documents it

The topic hubs whose Learn pages name this app's pages and reports (a table counts through the pages on it), by the number of the app's objects they document.

- [Customize with extensions](../topics/business-central/development-and-administration/customize-business-central/customize-with-extensions.md) (Development and administration > Customize Business Central): 12 objects
- [Company hub](../topics/business-central/business-functionality/company-hub.md) (Business functionality): 8 objects
- [Finance](../topics/business-central/business-functionality/finance.md) (Business functionality): 3 objects

## Objects

54 objects, by type.

### Tables (6)

| Id | Name | Caption |
|---|---|---|
| 1151 | [COHUB Company KPI](../objects/table/1151.md) |  |
| 1152 | [COHUB Enviroment](../objects/table/1152.md) |  |
| 1153 | [COHUB Company Endpoint](../objects/table/1153.md) |  |
| 1154 | [COHUB User Task](../objects/table/1154.md) |  |
| 1155 | [COHUB Group](../objects/table/1155.md) |  |
| 1156 | [COHUB Group Company Summary](../objects/table/1156.md) |  |

### Pages (8)

| Id | Name | Caption |
|---|---|---|
| 1151 | [COHUB Role Center](../objects/page/1151.md) | Company Hub |
| 1152 | [COHUB Company Summary](../objects/page/1152.md) | Summary |
| 1153 | [COHUB Company Short Summary](../objects/page/1153.md) | Company Hub |
| 1154 | [COHUB My User Tasks](../objects/page/1154.md) | My User Tasks |
| 1155 | [COHUB Group List](../objects/page/1155.md) | Groups |
| 1165 | [COHUB Enviroment Card](../objects/page/1165.md) | Environment Link |
| 1166 | [COHUB Enviroment List](../objects/page/1166.md) | Environments |
| 1167 | [COHUB Companies Overview](../objects/page/1167.md) | Company Hub |

### Page extensions (3)

| Id | Name | Caption |
|---|---|---|
| 1150 | [COHUB Accountant Role Center](../objects/pageextension/1150.md) |  |
| 1151 | [COHUB Bookkeeper Role Center](../objects/pageextension/1151.md) |  |
| 1152 | [COHUB Business Manager RC](../objects/pageextension/1152.md) |  |

### Codeunits (11)

| Id | Name | Caption |
|---|---|---|
| 1151 | [COHUB Core](../objects/codeunit/1151.md) |  |
| 1154 | [COHUB Url Task Manager](../objects/codeunit/1154.md) |  |
| 1155 | [COHUB Comp. Url Task Manager](../objects/codeunit/1155.md) |  |
| 1156 | [COHUB Url Error Handler](../objects/codeunit/1156.md) |  |
| 1158 | [COHUB Show Activity Log](../objects/codeunit/1158.md) |  |
| 1159 | [COHUB Delete Activity Log](../objects/codeunit/1159.md) |  |
| 1160 | [COHUB Install](../objects/codeunit/1160.md) |  |
| 1162 | [COHUB Group Summary Sync](../objects/codeunit/1162.md) |  |
| 1163 | [COHUB Reload Companies](../objects/codeunit/1163.md) |  |
| 1164 | [COHUB API Request](../objects/codeunit/1164.md) |  |
| 1165 | [COHUB Format Amount](../objects/codeunit/1165.md) |  |

### Permission sets (2)

| Id | Name | Caption |
|---|---|---|
| 2143 | [D365 COMPANY HUB](../objects/permissionset/2143.md) |  |
| 2144 | [Company Hub - Objects](../objects/permissionset/2144.md) |  |

### Entitlements (23)

| Id | Name | Caption |
|---|---|---|
|  | [Azure AD Application Api COHUB](../objects/entitlement/azure-ad-application-api-cohub.md) |  |
|  | [D365 Business Central Infrastructure COHUB](../objects/entitlement/d365-business-central-infrastructure-cohub.md) |  |
|  | [Delegated Admin agent - Partner COHUB](../objects/entitlement/delegated-admin-agent-partner-cohub.md) |  |
|  | [Delegated BC Admin agent - Partner COHUB](../objects/entitlement/delegated-bc-admin-agent-partner-cohub.md) |  |
|  | [Delegated Helpdesk agent - Partner COHUB](../objects/entitlement/delegated-helpdesk-agent-partner-cohub.md) |  |
|  | [Dynamics 365 - Accountant Hub COHUB](../objects/entitlement/dynamics-365-accountant-hub-cohub.md) |  |
|  | [Dynamics 365 Admin - Partner COHUB](../objects/entitlement/dynamics-365-admin-partner-cohub.md) |  |
|  | [Dynamics 365 Administrator COHUB](../objects/entitlement/dynamics-365-administrator-cohub.md) |  |
|  | [Dynamics 365 BC Premium Partner Sandbox COHUB](../objects/entitlement/dynamics-365-bc-premium-partner-sandbox-cohub.md) |  |
|  | [Dynamics 365 Business Central Basic Financials COHUB](../objects/entitlement/dynamics-365-business-central-basic-financials-cohub.md) |  |
|  | [Dynamics 365 Business Central Device - Embedded COHUB](../objects/entitlement/dynamics-365-business-central-device-embedded-cohub.md) |  |
|  | [Dynamics 365 Business Central Device COHUB](../objects/entitlement/dynamics-365-business-central-device-cohub.md) |  |
|  | [Dynamics 365 Business Central Essential - Attach COHUB](../objects/entitlement/dynamics-365-business-central-essential-attach-cohub.md) |  |
|  | [Dynamics 365 Business Central Essential - Embedded COHUB](../objects/entitlement/dynamics-365-business-central-essential-embedded-cohub.md) |  |
|  | [Dynamics 365 Business Central Essentials COHUB](../objects/entitlement/dynamics-365-business-central-essentials-cohub.md) |  |
|  | [Dynamics 365 Business Central External Accountant COHUB](../objects/entitlement/dynamics-365-business-central-external-accountant-cohub.md) |  |
|  | [Dynamics 365 Business Central for IWs COHUB](../objects/entitlement/dynamics-365-business-central-for-iws-cohub.md) |  |
|  | [Dynamics 365 Business Central Premium - Embedded COHUB](../objects/entitlement/dynamics-365-business-central-premium-embedded-cohub.md) |  |
|  | [Dynamics 365 Business Central Premium COHUB](../objects/entitlement/dynamics-365-business-central-premium-cohub.md) |  |
|  | [Dynamics 365 Business Central Team Member - Embedded COHUB](../objects/entitlement/dynamics-365-business-central-team-member-embedded-cohub.md) |  |
|  | [Dynamics 365 Business Central Team Member COHUB](../objects/entitlement/dynamics-365-business-central-team-member-cohub.md) |  |
|  | [Internal Administrator COHUB](../objects/entitlement/internal-administrator-cohub.md) |  |
|  | [Internal BC Administrator COHUB](../objects/entitlement/internal-bc-administrator-cohub.md) |  |

### Profiles (1)

| Id | Name | Caption |
|---|---|---|
|  | [CompanyHub](../objects/profile/companyhub.md) | Company Hub |

Source: [src/Apps/W1/CompanyHub/app](https://github.com/microsoft/BCApps/tree/a4406cfa9e57437fedc49c53c327a199a854491e/src/Apps/W1/CompanyHub/app); objects from data/code/, hubs from data/index/docs-objects.json through the object pages.
