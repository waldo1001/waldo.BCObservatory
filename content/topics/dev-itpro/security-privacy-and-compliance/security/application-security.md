---
id: topic/dev-itpro/security-privacy-and-compliance/security/application-security
type: topic
title: Application security
summary: Application security in Business Central covers the layered security model, creating users according to licenses, and object permissions set with AL permission sets. It answers questions about authentication, authorization, user and license setup, and how read, insert, modify, delete and execute permissions work.
tier: official
language: en
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-03T01:02:13.361Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 85a3326c0b1147727eac204abe6b926a08bc1e75151db0f16639a1d121a31277
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/ui-how-users-permissions
    title: Create users according to licenses
    date: "2026-11-02"
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
  objects:
    - object/page/119
    - object/page/774
    - object/page/6300
    - object/page/6301
    - object/page/6302
    - object/page/8930
    - object/page/9061
    - object/page/9062
    - object/page/9069
    - object/page/9800
    - object/page/9807
    - object/page/9808
    - object/page/9816
    - object/page/9818
    - object/page/9874
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
  code: 15
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

> Application security in Business Central covers the layered security model, creating users according to licenses, and object permissions set with AL permission sets. It answers questions about authentication, authorization, user and license setup, and how read, insert, modify, delete and execute permissions work.

Path: [Security, privacy, and compliance](../../security-privacy-and-compliance.md) > [Security](../security.md) > Application security · tier official · system none · narrative **unreviewed** (model text not yet checked)

## Overview

This section explains how access to Business Central is protected and controlled. It has three pages: one on the overall layered security model, one on creating users and licenses, and one on permissions on objects.

Start with the layered security model page for the big picture: authentication (including multifactor authentication), authorization, data encryption, auditing, change logging and sensitive field monitoring, for online and on-premises deployments. Then use the user and license page to add users, for example by importing from Microsoft 365, assign permission sets by license type, and manage access with security groups. Finish with the permissions on objects page for the detail of how permission sets grant rights on tables, pages, reports and other objects.

## Key points

- The layered security model covers authentication, authorization, data encryption, auditing and change logging.
- Multifactor authentication, the change log, sensitive field monitoring and audit trails are named protection features.
- Users can be created and imported from Microsoft 365, with licenses assigned for online and on-premises deployments.
- Permission sets are assigned based on license type, and user access can be managed through security groups.
- The user page also covers delegated admin users and user status management.
- Object permissions are read, insert, modify, delete and execute, set on tables, pages, reports and other objects through AL permission sets.
- Permissions can be direct or indirect, and the page explains permission abbreviations and wildcard permissions.

## Learn pages

- [Create users according to licenses](https://learn.microsoft.com/dynamics365/business-central/ui-how-users-permissions): Describes how to add users to Business Central online or on-premises based on licenses.
- [Layered security model in Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/security/security-application): Helps you understand and improve the security of your Business Central application regardless of where it's hosted.
- [Permissions on Objects](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-permissions-on-database-objects): This article provides an overview of permissions on objects in Business Central.

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 119 "User Setup"](../../../../objects/page/119.md) · on [Table 91 "User Setup"](../../../../objects/table/91.md)
- [Page 774 "User Details"](../../../../objects/page/774.md) · captioned "Users" · on [Table 774 "User Details"](../../../../objects/table/774.md)
- [Page 6300 "Azure AD App Setup Wizard"](../../../../objects/page/6300.md) · captioned "Set Up Microsoft Entra ID"
- [Page 6301 "Azure AD App Setup Part"](../../../../objects/page/6301.md) · captioned "<Microsoft Entra application Setup Part>" · on [Table 6300 "Azure AD App Setup"](../../../../objects/table/6300.md)
- [Page 6302 "Azure AD Access Dialog"](../../../../objects/page/6302.md) · captioned "Microsoft Entra service permissions"
- [Page 8930 "Email View Policy List"](../../../../objects/page/8930.md) · captioned "User Email View Policies" · on [Table 8930 "Email View Policy"](../../../../objects/table/8930.md)
- [Page 9061 "Plan Configuration List"](../../../../objects/page/9061.md) · captioned "License Configuration" · on [Table 9017 "Plan Configuration"](../../../../objects/table/9017.md)
- [Page 9062 "User Security Activities"](../../../../objects/page/9062.md) · on [Table 9062 "User Security Status"](../../../../objects/table/9062.md)
- [Page 9069 "Plan Configuration Card"](../../../../objects/page/9069.md) · captioned "License Configuration" · on [Table 9017 "Plan Configuration"](../../../../objects/table/9017.md)
- [Page 9800 "Users"](../../../../objects/page/9800.md)
- [Page 9807 "User Card"](../../../../objects/page/9807.md)
- [Page 9808 "User Permission Sets"](../../../../objects/page/9808.md)
- [Page 9816 "Permission Set by User"](../../../../objects/page/9816.md)
- [Page 9818 "User Security Status List"](../../../../objects/page/9818.md) · captioned "User Security Status" · on [Table 9062 "User Security Status"](../../../../objects/table/9062.md)
- [Page 9874 "Permission Set By Sec. Group"](../../../../objects/page/9874.md) · captioned "Permission Set by Security Group"

Learn also names 4 objects with no object page: page/9173, page/9830, page/9831, page/9838.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
