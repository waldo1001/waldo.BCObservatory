---
id: app/emaillogging
type: app
title: EmailLogging
summary: "EmailLogging (Microsoft.CRM): 53 objects in BC29-30 (25 entitlements, 9 codeunits, 8 permission set extensions, 3 interfaces, 3 permission sets, ...); documented by 1 Learn hub."
tier: official
language: en
tags:
  - first-party app
  - crm
system: crm
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T15:51:03.523Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 583ae9b931cb0352608335f2f5decd5a3b0b2a487f7bf94ffdc6ccc4d3c29ece
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/tree/a4406cfa9e57437fedc49c53c327a199a854491e/src/Apps/W1/EmailLogging/app
    title: src/Apps/W1/EmailLogging/app (main)
    date: null
    commit: a4406cfa9e57437fedc49c53c327a199a854491e
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/table/1680
    - object/tableextension/1680
    - object/page/1680
    - object/page/1681
    - object/codeunit/1681
    - object/codeunit/1682
    - object/codeunit/1683
    - object/codeunit/1684
    - object/codeunit/1685
    - object/codeunit/1686
    - object/codeunit/1687
    - object/codeunit/1688
    - object/codeunit/1689
    - object/enum/1682
    - object/interface/email-logging-api-client
    - object/interface/email-logging-message
    - object/interface/email-logging-oauth-client
    - object/permissionset/1680
    - object/permissionset/1681
    - object/permissionset/1682
    - object/permissionsetextension/1681
    - object/permissionsetextension/1682
    - object/permissionsetextension/1683
    - object/permissionsetextension/1684
    - object/permissionsetextension/1685
    - object/permissionsetextension/1686
    - object/permissionsetextension/1687
    - object/permissionsetextension/1688
    - object/entitlement/azure-ad-application-api-email-logging
    - object/entitlement/azure-ad-application-automation-email-logging
    - object/entitlement/d365-business-central-infrastructure-email-logging
    - object/entitlement/delegated-admin-agent-partner-email-logging
    - object/entitlement/delegated-bc-admin-agent-partner-email-logging
    - object/entitlement/delegated-helpdesk-agent-partner-email-logging
    - object/entitlement/dynamics-365-accountant-hub-email-logging
    - object/entitlement/dynamics-365-admin-partner-email-logging
    - object/entitlement/dynamics-365-administrator-email-logging
    - object/entitlement/dynamics-365-bc-premium-partner-sandbox-email-logging
    - object/entitlement/dynamics-365-business-central-basic-financials-email-logging
    - object/entitlement/dynamics-365-business-central-device-embedded-email-logging
    - object/entitlement/dynamics-365-business-central-device-email-logging
    - object/entitlement/dynamics-365-business-central-essential-attach-email-logging
    - object/entitlement/dynamics-365-business-central-essential-embedded-email-logging
    - object/entitlement/dynamics-365-business-central-essentials-email-logging
    - object/entitlement/dynamics-365-business-central-external-accountant-email-logging
    - object/entitlement/dynamics-365-business-central-for-iws-email-logging
    - object/entitlement/dynamics-365-business-central-premium-embedded-email-logging
    - object/entitlement/dynamics-365-business-central-premium-email-logging
    - object/entitlement/dynamics-365-business-central-team-member-embedded-email-logging
    - object/entitlement/dynamics-365-business-central-team-member-email-logging
    - object/entitlement/internal-administrator-email-logging
    - object/entitlement/internal-bc-administrator-email-logging
    - object/entitlement/microsoft-365-email-logging
  features: []
  topics:
    - topic/business-central/business-functionality/relationship-management/manage-sales-opportunities
  localizations: []
  videos: []
  posts: []
  guidelines: []
app: EmailLogging
namespace_root: Microsoft.CRM
present_in:
  - "29"
  - "30"
counts:
  objects: 53
  by_type:
    entitlement: 25
    codeunit: 9
    permissionsetextension: 8
    interface: 3
    permissionset: 3
    page: 2
    table: 1
    tableextension: 1
    enum: 1
  hubs: 1
  videos: 0
  posts: 0
---

# EmailLogging

> EmailLogging (Microsoft.CRM): 53 objects in BC29-30 (25 entitlements, 9 codeunits, 8 permission set extensions, 3 interfaces, 3 permission sets, ...); documented by 1 Learn hub.

First-party app · folder `src/Apps/W1/EmailLogging/app` · namespace `Microsoft.CRM` · BC29-30 · system crm · facts from the code pillar and the joins, nothing machine-written

## What Learn documents it

The topic hubs whose Learn pages name this app's pages and reports (a table counts through the pages on it), by the number of the app's objects they document.

- [Manage sales opportunities](../topics/business-central/business-functionality/relationship-management/manage-sales-opportunities.md) (Business functionality > Relationship management): 2 objects

## Objects

53 objects, by type.

### Tables (1)

| Id | Name | Caption |
|---|---|---|
| 1680 | [Email Logging Setup](../objects/table/1680.md) | Email Logging using Graph API |

### Table extensions (1)

| Id | Name | Caption |
|---|---|---|
| 1680 | [Attachment Internet Message Id](../objects/tableextension/1680.md) |  |

### Pages (2)

| Id | Name | Caption |
|---|---|---|
| 1680 | [Email Logging Setup](../objects/page/1680.md) | Email Logging |
| 1681 | [Email Logging Setup Wizard](../objects/page/1681.md) | Set Up Email Logging |

### Codeunits (9)

| Id | Name | Caption |
|---|---|---|
| 1681 | [Email Logging Management](../objects/codeunit/1681.md) |  |
| 1682 | [Email Logging API Client](../objects/codeunit/1682.md) |  |
| 1683 | [Email Logging Job Runner](../objects/codeunit/1683.md) |  |
| 1684 | [Email Logging API Helper](../objects/codeunit/1684.md) |  |
| 1685 | [Email Logging Invoke](../objects/codeunit/1685.md) |  |
| 1686 | [Email Logging OAuth Client](../objects/codeunit/1686.md) |  |
| 1687 | [Email Logging Message](../objects/codeunit/1687.md) |  |
| 1688 | [Email Logging Upgrade](../objects/codeunit/1688.md) |  |
| 1689 | [Email Logging Install](../objects/codeunit/1689.md) |  |

### Enums (1)

| Id | Name | Caption |
|---|---|---|
| 1682 | [Email Logging App Type](../objects/enum/1682.md) |  |

### Interfaces (3)

| Id | Name | Caption |
|---|---|---|
|  | [Email Logging API Client](../objects/interface/email-logging-api-client.md) |  |
|  | [Email Logging Message](../objects/interface/email-logging-message.md) |  |
|  | [Email Logging OAuth Client](../objects/interface/email-logging-oauth-client.md) |  |

### Permission sets (3)

| Id | Name | Caption |
|---|---|---|
| 1680 | [Email Logging - Obj.](../objects/permissionset/1680.md) |  |
| 1681 | [Email Logging - Read](../objects/permissionset/1681.md) |  |
| 1682 | [Email Logging - Admin](../objects/permissionset/1682.md) |  |

### Permission set extensions (8)

| Id | Name | Caption |
|---|---|---|
| 1681 | [D365 BASIC ISV - Email Logging](../objects/permissionsetextension/1681.md) |  |
| 1682 | [D365 BUS FULL ACCESS - Email Logging](../objects/permissionsetextension/1682.md) |  |
| 1683 | [D365 BUS PREMIUM - Email Logging](../objects/permissionsetextension/1683.md) |  |
| 1684 | [D365 FULL ACCESS - Email Logging](../objects/permissionsetextension/1684.md) |  |
| 1685 | [D365 READ - Email Logging](../objects/permissionsetextension/1685.md) |  |
| 1686 | [D365 TEAM MEMBER - Email Logging](../objects/permissionsetextension/1686.md) |  |
| 1687 | [INTELLIGENT CLOUD - Email Logging](../objects/permissionsetextension/1687.md) |  |
| 1688 | [D365 BASIC - Email Logging](../objects/permissionsetextension/1688.md) |  |

### Entitlements (25)

| Id | Name | Caption |
|---|---|---|
|  | [Azure AD Application Api Email Logging](../objects/entitlement/azure-ad-application-api-email-logging.md) |  |
|  | [Azure AD Application Automation Email Logging](../objects/entitlement/azure-ad-application-automation-email-logging.md) |  |
|  | [D365 Business Central Infrastructure Email Logging](../objects/entitlement/d365-business-central-infrastructure-email-logging.md) |  |
|  | [Delegated Admin agent - Partner Email Logging](../objects/entitlement/delegated-admin-agent-partner-email-logging.md) |  |
|  | [Delegated BC Admin agent - Partner Email Logging](../objects/entitlement/delegated-bc-admin-agent-partner-email-logging.md) |  |
|  | [Delegated Helpdesk agent - Partner Email Logging](../objects/entitlement/delegated-helpdesk-agent-partner-email-logging.md) |  |
|  | [Dynamics 365 - Accountant Hub Email Logging](../objects/entitlement/dynamics-365-accountant-hub-email-logging.md) |  |
|  | [Dynamics 365 Admin - Partner Email Logging](../objects/entitlement/dynamics-365-admin-partner-email-logging.md) |  |
|  | [Dynamics 365 Administrator Email Logging](../objects/entitlement/dynamics-365-administrator-email-logging.md) |  |
|  | [Dynamics 365 BC Premium Partner Sandbox - Email Logging](../objects/entitlement/dynamics-365-bc-premium-partner-sandbox-email-logging.md) |  |
|  | [Dynamics 365 Business Central Basic Financials Email Logging](../objects/entitlement/dynamics-365-business-central-basic-financials-email-logging.md) |  |
|  | [Dynamics 365 Business Central Device - Embedded Email Logging](../objects/entitlement/dynamics-365-business-central-device-embedded-email-logging.md) |  |
|  | [Dynamics 365 Business Central Device Email Logging](../objects/entitlement/dynamics-365-business-central-device-email-logging.md) |  |
|  | [Dynamics 365 Business Central Essential - Attach Email Logging](../objects/entitlement/dynamics-365-business-central-essential-attach-email-logging.md) |  |
|  | [Dynamics 365 Business Central Essential - Embedded Email Logging](../objects/entitlement/dynamics-365-business-central-essential-embedded-email-logging.md) |  |
|  | [Dynamics 365 Business Central Essentials Email Logging](../objects/entitlement/dynamics-365-business-central-essentials-email-logging.md) |  |
|  | [Dynamics 365 Business Central External Accountant Email Logging](../objects/entitlement/dynamics-365-business-central-external-accountant-email-logging.md) |  |
|  | [Dynamics 365 Business Central for IWs Email Logging](../objects/entitlement/dynamics-365-business-central-for-iws-email-logging.md) |  |
|  | [Dynamics 365 Business Central Premium - Embedded Email Logging](../objects/entitlement/dynamics-365-business-central-premium-embedded-email-logging.md) |  |
|  | [Dynamics 365 Business Central Premium Email Logging](../objects/entitlement/dynamics-365-business-central-premium-email-logging.md) |  |
|  | [Dynamics 365 Business Central Team Member - Embedded Email Logging](../objects/entitlement/dynamics-365-business-central-team-member-embedded-email-logging.md) |  |
|  | [Dynamics 365 Business Central Team Member Email Logging](../objects/entitlement/dynamics-365-business-central-team-member-email-logging.md) |  |
|  | [Internal Administrator Email Logging](../objects/entitlement/internal-administrator-email-logging.md) |  |
|  | [Internal BC Administrator Email Logging](../objects/entitlement/internal-bc-administrator-email-logging.md) |  |
|  | [Microsoft 365 - Email Logging](../objects/entitlement/microsoft-365-email-logging.md) |  |

Source: [src/Apps/W1/EmailLogging/app](https://github.com/microsoft/BCApps/tree/a4406cfa9e57437fedc49c53c327a199a854491e/src/Apps/W1/EmailLogging/app); objects from data/code/, hubs from data/index/docs-objects.json through the object pages.
