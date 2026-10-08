---
id: topic/dev-itpro/business-central-on-premises/administration/configuring-business-central-web-server
type: topic
title: Configuring Business Central web server
summary: "Configuring the Business Central web server on-premises: navsettings.json settings on IIS (connection, authentication, credential types, SSL/HTTPS, session timeout, portal embedding) and creating multiple web server instances with PowerShell. It answers how-to questions about changing web server settings and deploying several instances."
tier: official
language: en
system: administration
review:
  state: reviewed
  by: opus
  at: "2026-10-07T05:22:57.323Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 1353b941d9ce0664ceb995b1353856724262b80f083f450b8757aa9b18466ee5
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/configure-web-server
    title: Configuring Business Central Web Server instances
    date: "2024-11-11"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/configure-multiple-web-server-instances
    title: Set Up Multiple Business Central Web Server Instances using PowerShell
    date: "2024-10-28"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/configure-web-server
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/configure-multiple-web-server-instances
  objects: []
  features: []
  topics:
    - topic/dev-itpro/business-central-on-premises/administration
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business Central on-premises
  - Administration
  - Configuring Business Central web server
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/business-central-on-premises/administration
children: []
coverage:
  learn: 2
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: acc76712eee225834a20b824c8917fd3dc595d109b5cfa9d723aefae3d5e32db
narrative: generated
---

# Configuring Business Central web server

> Configuring the Business Central web server on-premises: navsettings.json settings on IIS (connection, authentication, credential types, SSL/HTTPS, session timeout, portal embedding) and creating multiple web server instances with PowerShell. It answers how-to questions about changing web server settings and deploying several instances.

Path: [Business Central on-premises](../../business-central-on-premises.md) > [Administration](../administration.md) > Configuring Business Central web server · tier official · system administration · narrative reviewed (checked by Opus)

## Overview

This section covers the Business Central web server component running on IIS in on-premises deployments. It has two pages: one on configuring a web server instance, and one on running more than one instance.

The first page explains that a web server instance is configured through the navsettings.json file. You can edit the file directly or use PowerShell cmdlets. Settings include connection and authentication options, credential types, SSL/HTTPS, session timeout and portal embedding.

The second page shows how to set up multiple web server instances in IIS with PowerShell, for example for different companies or deployment scenarios. Start with the first page to learn the settings. Move to the second when you need more than one instance.

## Key points

- Web server instance settings are stored in navsettings.json on IIS.
- Configuration can be changed by editing the file directly or through PowerShell cmdlets.
- Configurable areas include credential types, authentication, SSL/HTTPS, session timeout and portal embedding.
- New-NAVWebServerInstance creates additional web server instances in IIS.
- Set-NAVWebServerInstanceConfiguration changes the configuration of an instance.
- Get-NAVWebServerInstance and Remove-NAVWebServerInstance list and delete instances.
- Instances can be deployed as a RootSite or a SubSite.
- Multiple instances suit different companies or deployment scenarios.

## Learn pages

- [Configuring Business Central Web Server instances](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/configure-web-server): Learn about the different configuration settings when you deploy the Business Central web server on-premises.
- [Set Up Multiple Business Central Web Server Instances using PowerShell](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/configure-multiple-web-server-instances): Learn how to use Windows PowerShell to set up more than one web server instance on Internet Information Service (IIS) for the Business Central web client.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
