---
id: topic/dev-itpro/business-central-on-premises/deployment/business-central-web-server
type: topic
title: Business Central web server
summary: The Business Central web server section covers deploying and configuring the web server components on IIS for on-premises installations. It answers questions about web server instances, navsettings.json settings, IIS features, SSL/HTTPS, Kerberos delegation, multiple instances with PowerShell, and tenant host names.
tier: official
language: en
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:22:23.174Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: b19d82fffa5b87840198287b732f7c05552dc6e8a3bd239f556fdcd984f02d05
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/configure-delegation-web-server
    title: Configure Web Client Delegation
    date: "2024-10-22"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/configure-web-server
    title: Configuring Business Central Web Server instances
    date: "2024-11-11"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/configure-iis
    title: Configuring Internet Information Services for Business Central
    date: "2026-06-22"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/configure-ssl-web-client-connection
    title: Configuring SSL to Secure the Web Client Connection
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/web-server-overview
    title: Deploy the Web Server Components
    date: "2021-10-11"
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
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/configure-web-server-to-accept-host-names-for-tenants
    title: Web Client Configuration for Tenants
    date: "2021-10-27"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/configure-delegation-web-server
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/configure-web-server
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/configure-iis
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/configure-ssl-web-client-connection
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/web-server-overview
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/configure-multiple-web-server-instances
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/configure-web-server-to-accept-host-names-for-tenants
  objects: []
  features: []
  topics:
    - topic/dev-itpro/business-central-on-premises/deployment
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business Central on-premises
  - Deployment
  - Business Central web server
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/business-central-on-premises/deployment
children: []
coverage:
  learn: 7
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 26c8a68c52efbee420e83181f5cf44476c7d215368936d9564831e83f899a6b7
narrative: generated
---

# Business Central web server

> The Business Central web server section covers deploying and configuring the web server components on IIS for on-premises installations. It answers questions about web server instances, navsettings.json settings, IIS features, SSL/HTTPS, Kerberos delegation, multiple instances with PowerShell, and tenant host names.

Path: [Business Central on-premises](../../business-central-on-premises.md) > [Deployment](../deployment.md) > Business Central web server · tier official · system none · narrative reviewed by Opus

## Overview

The Business Central web server runs as an ASP.NET Core application on IIS and serves the web client. This section explains how to deploy those components, prepare IIS, create one or more web server instances, and secure and tune them.

Start with "Deploy the Web Server Components" for the overview of network topology, instance creation methods and security. Then use "Configuring Internet Information Services for Business Central" for required IIS features and ARR headers, and "Configuring Business Central Web Server instances" for navsettings.json settings. The remaining pages cover specific tasks: SSL, multiple instances through PowerShell, tenant host names, and delegation when the web server and server instance are on separate computers.

## Key points

- Web server components run as ASP.NET Core on IIS; IIS needs specific features such as ASP.NET and .NET Extensibility.
- Application Request Routing header configuration, including X-Forwarded-Proto, is described for the IIS setup.
- Instance settings live in navsettings.json (credential types, SSL/HTTPS, session timeout, authentication, portal embedding) and can be edited directly or with PowerShell cmdlets.
- SSL setup involves obtaining a certificate, adding an HTTPS binding, and optionally redirecting HTTP to HTTPS.
- Multiple instances are managed with New-NAVWebServerInstance, Set-NAVWebServerInstanceConfiguration, Get-NAVWebServerInstance and Remove-NAVWebServerInstance, deployed as RootSite or SubSite.
- Multitenant deployments need a URL rewrite rule in web.config so the web server accepts tenant host names.
- Delegation across separate computers uses Kerberos, constrained delegation, service principal names and Active Directory configuration, with steps differing for version 20 and version 21 and later.

## Learn pages

- [Configure Web Client Delegation](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/configure-delegation-web-server): The client device, Web Client, and Server are on separate computers. Web Client performs actions on behalf of client device called impersonation process.
- [Configuring Business Central Web Server instances](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/configure-web-server): Learn about the different configuration settings when you deploy the Business Central web server on-premises.
- [Configuring Internet Information Services for Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/configure-iis): Learn to configuration of Internet Information Service that is required for running the web client.
- [Configuring SSL to Secure the Web Client Connection](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/configure-ssl-web-client-connection): Learn how to secure data that is transmitted over the internet by enabling Secure Sockets Layer on the connection to Web Client.
- [Deploy the Web Server Components](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/web-server-overview): Understand the network architecture, users, security, deployment phases for installing and configuring the Business Central Web Server Components.
- [Set Up Multiple Business Central Web Server Instances using PowerShell](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/configure-multiple-web-server-instances): Learn how to use Windows PowerShell to set up more than one web server instance on Internet Information Service (IIS) for the Business Central web client.
- [Web Client Configuration for Tenants](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/configure-web-server-to-accept-host-names-for-tenants): To deploy the Dynamics NAV Web Client in a multitenant development architecture, URLs must specify the tenant ID to access a specific tenant.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
