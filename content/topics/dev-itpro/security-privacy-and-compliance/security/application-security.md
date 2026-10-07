---
id: topic/dev-itpro/security-privacy-and-compliance/security/application-security
type: topic
title: Application security
summary: Application security in Business Central covers the layered security model, creating users according to licenses, and object permissions set through AL permission sets. It answers questions on sign-in, authorization, encryption, auditing, user and license setup, and read/insert/modify/delete/execute permissions.
tier: official
language: en
review:
  state: reviewed
  by: opus
  at: "2026-10-07T05:21:24.931Z"
  flags: []
generated:
  at: "2026-10-07T05:23:51.651Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: f19b4f5cbea97eef34ab524f71fd2cdd147b75cc8ec2838cdded4ffea3c2434e
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/ui-how-users-permissions
    title: Create users according to licenses
    date: "2026-07-16"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/security/security-application
    title: Layered security model in Business Central
    date: "2025-11-19"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-permissions-on-database-objects
    title: Permissions on Objects
    date: "2025-06-02"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/ui-how-users-permissions
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/security/security-application
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-permissions-on-database-objects
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
  - Application security
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/security-privacy-and-compliance/security
children: []
coverage:
  learn: 3
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 119
  - 774
  - 6300
  - 6301
  - 6302
  - 8930
  - 9061
  - 9062
  - 9069
  - 9173
  - 9800
  - 9807
  - 9808
  - 9816
  - 9818
  - 9830
  - 9831
  - 9838
  - 9874
member_hash: 09944e20ae71db7221606938116f59fb0731fa5e204647b6cf48709fa24ecd47
narrative: generated
---

# Application security

> Application security in Business Central covers the layered security model, creating users according to licenses, and object permissions set through AL permission sets. It answers questions on sign-in, authorization, encryption, auditing, user and license setup, and read/insert/modify/delete/execute permissions.

Path: [Security, privacy, and compliance](../../security-privacy-and-compliance.md) > [Security](../security.md) > Application security · tier official · system none · narrative reviewed by Opus

## Overview

This section explains how Business Central protects an installation and how administrators control who can do what. It applies to both online and on-premises deployments. The layered security model page gives the big picture: authentication, authorization, data encryption, auditing, and change logging.

The other two pages go into detail on access. "Create users according to licenses" covers creating users, assigning permission sets, managing licenses, and using security groups, user groups, and delegated admin. "Permissions on Objects" covers how read, insert, modify, delete, and execute permissions are given to tables, pages, reports, and other objects through AL permission sets.

Start with the layered security model for context. Then use the user and license page for administration tasks, and the object permissions page when you build or review permission sets.

## Key points

- The layered security model covers authentication, authorization, data encryption, auditing, and change logging.
- Sign-in protection includes multifactor authentication; monitoring includes sensitive field monitoring, change log, and audit trails.
- Administrators create users, assign permission sets, and manage licenses, with permissions that depend on license type.
- User creation guidance covers security groups, user groups, and delegated admin, for online and on-premises.
- Object permissions are read, insert, modify, delete, and execute, applied to tables, pages, reports, and other objects.
- Permissions can be direct or indirect, and the page explains permission abbreviations and wildcard permissions.
- Permission sets are defined in AL.

## Learn pages

- [Create users according to licenses](https://learn.microsoft.com/dynamics365/business-central/ui-how-users-permissions): Describes how to add users to Business Central online or on-premises based on licenses.
- [Layered security model in Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/security/security-application): Helps you understand and improve the security of your Business Central application regardless of where it's hosted.
- [Permissions on Objects](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-permissions-on-database-objects): This article provides an overview of permissions on objects in Business Central.

## Business Central pages and reports

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 119, 774, 6300, 6301, 6302, 8930, 9061, 9062, 9069, 9173, 9800, 9807, 9808, 9816, 9818, 9830, 9831, 9838, 9874.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
