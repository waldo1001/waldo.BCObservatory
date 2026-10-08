---
id: topic/dev-itpro/security-privacy-and-compliance/security/on-premises
type: topic
title: On-premises
summary: On-premises security for Business Central covers authentication, server hardening, SSL/HTTPS, X.509 certificates, database encryption (TDE, BitLocker), and SQL Server permissions. It answers how to secure the web client, server, database and network connections in an on-premises deployment.
tier: official
language: en
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:23:39.726Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 62352fe6d815322849699648092c8ee936663e814efe27d399c21663468167f8
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/configure-ssl-web-client-connection
    title: Configuring SSL to Secure the Web Client Connection
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/security/transparent-data-encryption
    title: Data Encryption at Rest, Transparent Data Encryption, and BitLocker
    date: "2025-06-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/security/Setting-Database-Owner-and-Security-Administration-Permissions
    title: Granting permissions to manage databases
    date: "2024-10-26"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/security/enhancing-server-instance-security
    title: Hardening Business Central Server Security
    date: "2024-09-09"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/security/security-onpremises
    title: Security in Business Central (on-premises)
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/implement-security-certificates-production-environment
    title: Using Security Certificates with Business Central on-premises
    date: "2024-12-20"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/configure-ssl-web-client-connection
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/security/transparent-data-encryption
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/security/Setting-Database-Owner-and-Security-Administration-Permissions
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/security/enhancing-server-instance-security
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/security/security-onpremises
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/implement-security-certificates-production-environment
  objects: []
  features: []
  topics:
    - topic/dev-itpro/security-privacy-and-compliance/security
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Security, privacy, and compliance
  - Security
  - On-premises
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/security-privacy-and-compliance/security
children: []
coverage:
  learn: 6
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 983441323394ad8a2827049c27876a7acae290f84a069bd55e2d95c7a2f0e7a1
narrative: generated
---

# On-premises

> On-premises security for Business Central covers authentication, server hardening, SSL/HTTPS, X.509 certificates, database encryption (TDE, BitLocker), and SQL Server permissions. It answers how to secure the web client, server, database and network connections in an on-premises deployment.

Path: [Security, privacy, and compliance](../../security-privacy-and-compliance.md) > [Security](../security.md) > On-premises · tier official · system none · narrative reviewed (checked by Opus)

## Overview

This section collects the security guidance for Business Central on-premises deployments. The page "Security in Business Central (on-premises)" is the entry point. It outlines authentication methods, server hardening, client, database and network security, and the recommendation to use secure admin devices.

The other pages go into specific tasks. They cover SSL for the web client, security certificates between server and clients, hardening the server, encrypting data at rest, and granting SQL Server permissions for database management. Start with the overview page, then follow the page that matches the layer you are securing: connection, server, or database.

## Key points

- Securing the web client with SSL means obtaining a certificate, adding an HTTPS binding, and optionally redirecting HTTP to HTTPS.
- X.509 security certificates can secure server-to-client connections over WAN, using chain trust or peer trust, with Server Authentication and Client Authentication certificates.
- Server hardening covers service account configuration, Microsoft Entra ID authentication, disk quotas, the client services port, data encryption and IPSec.
- Data at rest can be protected with Transparent Data Encryption and BitLocker, alone or combined as defense in depth, with a possible performance impact.
- Database management in SQL Server needs the dbcreator server role to create databases and the db_owner database role to manage companies and objects.
- The overview page mentions TLS 1.2 support and SQL Server security as part of the on-premises security picture.

## Learn pages

- [Configuring SSL to Secure the Web Client Connection](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/configure-ssl-web-client-connection): Learn how to secure data that is transmitted over the internet by enabling Secure Sockets Layer on the connection to Web Client.
- [Data Encryption at Rest, Transparent Data Encryption, and BitLocker](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/security/transparent-data-encryption): Learn how to secure your data at rest using TDE and BitLocker on Business Central. Protect your SQL Server and Azure SQL Database files.
- [Granting permissions to manage databases](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/security/Setting-Database-Owner-and-Security-Administration-Permissions): Learn how to set database owner and security admin permissions in SQL Server for your Business Central solution.
- [Hardening Business Central Server Security](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/security/enhancing-server-instance-security): Learn how you can harden security on the Business Central Server component to protect access to the configuration settings.
- [Security in Business Central (on-premises)](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/security/security-onpremises): Learn about the main aspects of security in your on-premises deployment of Dynamics 365 Business Central.
- [Using Security Certificates with Business Central on-premises](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/implement-security-certificates-production-environment): Learn how to use security certificates to help secure connections with Business Central.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
