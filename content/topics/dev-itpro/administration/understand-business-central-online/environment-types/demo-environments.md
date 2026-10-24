---
id: topic/dev-itpro/administration/understand-business-central-online/environment-types/demo-environments
type: topic
title: Demo environments
summary: "Demo environments for Business Central: how to choose between an MDX demo environment, a prospect trial, and a sandbox, and how to set up and enhance each one. It answers questions about demo setup options, Contoso Coffee demo data, connectivity apps, and Sales and Field Service integrations."
tier: official
language: en
system: administration
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:26:25.430Z"
  flags: []
generated:
  at: "2026-10-24T00:57:10.969Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 74534cf79b57bc8770d1ec3aa231619580f8dfabac751de7718c925540ecbf2f
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/demo-environment-extend-enhancements
    title: Add enhancements to Business Central demo environments
    date: "2026-06-24"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/demo-environment
    title: Prepare demonstration environments for Business Central
    date: "2026-06-24"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/demo-environment-mdx
    title: Set up Microsoft 365 and Business Central demo environments with MDX
    date: "2026-06-24"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/demo-environment-trial
    title: Use trial and sandbox demo environments
    date: "2026-06-24"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/demo-environment-extend-enhancements
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/demo-environment
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/demo-environment-mdx
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/demo-environment-trial
  objects:
    - object/page/2500
    - object/page/20350
  features: []
  topics:
    - topic/dev-itpro/administration/understand-business-central-online/environment-types
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Administration
  - Understand Business Central online
  - Environment types
  - Demo environments
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/administration/understand-business-central-online/environment-types
children: []
coverage:
  learn: 4
  code: 2
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 2500
  - 2502
  - 20350
member_hash: ecd63b9d634998c441c24d50801a43cc4e0cedda6cbd2962c5488831970446eb
narrative: generated
---

# Demo environments

> Demo environments for Business Central: how to choose between an MDX demo environment, a prospect trial, and a sandbox, and how to set up and enhance each one. It answers questions about demo setup options, Contoso Coffee demo data, connectivity apps, and Sales and Field Service integrations.

Path: [Administration](../../../administration.md) > [Understand Business Central online](../../understand-business-central-online.md) > [Environment types](../environment-types.md) > Demo environments · tier official · system administration · narrative reviewed (checked by Opus)

## Overview

This area helps partners and resellers prepare environments to demonstrate Business Central. It compares three approaches (MDX demo environment, prospect trial, and sandbox environment) based on demo goals, control requirements, and timeline.

Start with the page on preparing demonstration environments to pick an approach. Then follow the matching setup page: one for MDX, which builds repeatable demos with Microsoft 365 apps and services in independent Azure tenants, and one for trial and sandbox options, which show Business Central in a prospect's own organization or in an isolated scenario within an existing tenant.

A further page covers enhancements to demo environments, such as adding Contoso Coffee demo data, connectivity apps, Dynamics 365 Sales and Field Service integrations, and Dataverse connections.

## Key points

- Three demo approaches are compared: MDX demo environment, prospect trial, and sandbox environment.
- MDX creates repeatable demo environments showing Business Central with Microsoft 365 apps and services in independent Azure tenants.
- MDX setup covers the premium user experience, Contoso Coffee Demo Data, connectivity apps, Dynamics 365 Sales Professional integration, Microsoft Edge profiles, and performance optimization.
- Trial and sandbox options include prospect trial signup, trial extension, sandbox setup, and partner sandbox licenses.
- Trials show Business Central in the prospect's own organization; sandboxes give isolated scenarios within existing tenants.
- Demo environments can be enhanced with Contoso Coffee demo data, Dynamics 365 Sales and Field Service integrations, and a Dataverse connection.
- Sandbox environments can be reset, as mentioned in the enhancement guidance.
- The trial and sandbox page references February 2022.

## Learn pages

- [Add enhancements to Business Central demo environments](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/demo-environment-extend-enhancements): Enhance your demo environments with Contoso Coffee data, connectivity apps, Dynamics 365 Sales integration, and Field Service capabilities.
  - Contoso Coffee Demo Data app adds demo data to showcase advanced manufacturing and supply chain features.
  - Connectivity apps let you demonstrate integrations and connected scenarios between Business Central and other apps.
  - Step: Sign up for Dynamics 365 Sales Professional trial using your Microsoft demo account admin credentials.
  - Step: In Power Platform admin center, install Field Service app to Sales trial environment from Marketplace.
  - Step: Open Assisted Setup in Business Central and select setup for Dataverse connection first.
  - Step: Complete Sales integration setup before Field Service setup, as Field Service setup depends on it.
  - After setup, Business Central, Sales, and Field Service share data through Dataverse for end-to-end scenarios.
  - Convert trial environments to sandbox environments to reset data and demo different Dynamics 365 app combinations.
- [Prepare demonstration environments for Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/demo-environment): Learn about options for setting up Dynamics 365 Business Central online demo environments that help turn prospects into customers.
  - MDX approach provides full tenant control and works best for repeatable partner-controlled demos lasting 90 days or one year.
  - Prospect trial approach enables quick evaluation in prospect's own organization and can convert to paid subscription.
  - Sandbox approach provides unlimited duration and full tenant control for tailored or side-by-side demo scenarios.
  - Prerequisite: MDX approach requires Partner Center enrollment; prospect trial requires prospect email account; sandbox requires existing Business Central tenant.
- [Set up Microsoft 365 and Business Central demo environments with MDX](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/demo-environment-mdx): Create and configure Business Central demonstration environments with Microsoft demo experience (MDX) for presales.
  - Prerequisite: You must be enrolled in Microsoft Partner Center to use MDX for creating demo environments.
  - MDX lets partners create repeatable demos in independent Azure tenants that you fully control.
  - Limit: MDX environments expire after 90 days or one year depending on tenant type; data is lost if prospect uses them for business.
  - Demonstration company in MDX can be used indefinitely if accessed couple of times per week until tenant expires.
  - Trial experience in actual Business Central expires after 30 days and can be extended or replaced with new environment.
  - Limit: MDX account has access to limited number of 90-day and one-year tenants at any time; limits on daily and monthly creation.
  - Step: Enable Premium user experience in Company Information page and add data for evaluation scenarios.
  - Use Microsoft Edge profiles to switch between demo and partner accounts without private browsing for better performance.
- [Use trial and sandbox demo environments](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/demo-environment-trial): Add Business Central trials to prospect organizations or set up sandbox-based demo environments for advanced scenarios.
  - Prospect trial option lets you add Business Central trial directly to prospect's organization for evaluation.
  - Limit: Prospect trial lasts up to 60 days; if extended once and still uncertain, prospect must contact partner.
  - Sandbox environments are ideal for demos when you already have a Business Central tenant and want isolated scenarios.
  - Prerequisite: For sandbox demos, you must already have an existing Business Central tenant.
  - Limit: Sandbox environments have limited functionality and performance compared to production environments.
  - Partners can request dedicated partner sandbox licenses starting February 2022 to set up more sandbox environments.

Key facts from Microsoft Learn (CC BY 4.0), in our own words (D106); open the page for the full text.

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 2500 "Extension Management"](../../../../../objects/page/2500.md)
- [Page 20350 "Connectivity Apps"](../../../../../objects/page/20350.md) · on [Table 20350 "Connectivity App"](../../../../../objects/table/20350.md)

Learn also names 1 object with no object page: page/2502.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
