---
id: topic/dev-itpro/business-central-on-premises/administration/configuring-user-authentication
type: topic
title: Configuring user authentication
summary: "Learn section Business Central on-premises > Administration > Configuring user authentication: 5 Microsoft Learn pages in 1 subtopics. Index of what Learn documents here, linked to Learn."
tier: official
language: en
system: administration
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-24T00:57:10.969Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 01907d05d59c07b0c7c47d78e0af9b157d9cafeed447f76cfa64b3bce7ef312c
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/authenticating-users-with-azure-ad-overview
    title: Authenticating Business Central Users with Microsoft Entra ID
    date: "2024-04-16"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/users-credential-types
    title: Authentication and credential types
    date: "2024-09-09"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/authenticating-users-with-azure-ad-openid-connect
    title: Configure Microsoft Entra authentication with OpenID Connect
    date: "2025-01-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/authenticating-users-with-azure-active-directory
    title: User Authentication with Microsoft Entra ID for Single Sign-on
    date: "2024-04-16"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/authenticating-users-with-navuserpassword
    title: User Authentication with NavUserPassword
    date: "2024-06-24"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/users-credential-types
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/authenticating-users-with-navuserpassword
  objects: []
  features: []
  topics:
    - topic/dev-itpro/business-central-on-premises/administration
    - topic/dev-itpro/business-central-on-premises/administration/configuring-user-authentication/authenticating-with-microsoft-entra-id
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business Central on-premises
  - Administration
  - Configuring user authentication
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/business-central-on-premises/administration
children:
  - topic/dev-itpro/business-central-on-premises/administration/configuring-user-authentication/authenticating-with-microsoft-entra-id
coverage:
  learn: 5
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 01907d05d59c07b0c7c47d78e0af9b157d9cafeed447f76cfa64b3bce7ef312c
narrative: none
---

# Configuring user authentication

> Learn section Business Central on-premises > Administration > Configuring user authentication: 5 Microsoft Learn pages in 1 subtopics. Index of what Learn documents here, linked to Learn.

Path: [Business Central on-premises](../../business-central-on-premises.md) > [Administration](../administration.md) > Configuring user authentication · tier official · system administration · no narrative yet

## Subtopics

- [Authenticating with Microsoft Entra ID](configuring-user-authentication/authenticating-with-microsoft-entra-id.md) (3 pages)

## More Learn pages

- [Authentication and credential types](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/users-credential-types): This article explains how the credential authorization mechanism works for users of Business Central and how to configure credential types for on-premises.
- [User Authentication with NavUserPassword](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/authenticating-users-with-navuserpassword): Learn how to set up NAVUserPassword for authenticating users.
  - Status: NavUserPassword is generally available as an authentication method
  - NavUserPassword is authentication handled by server using usernames and passwords configured within Business Central only
  - Prerequisite: Security certificates are required to secure client connections over wide area networks for NavUserPassword
  - Prerequisite: Production environments require certificate from certification authority; test environments can use self-signed certificates
  - Step: Set up your user account with password by opening Users page, selecting your account, and entering password under Business Central Password Authentication
  - Step: Configure server by setting ClientServicesCredentialType to NavUserPassword using Set-NAVServerConfiguration cmdlet or Administration Tool, then restart server instance
  - Step: Configure web server by opening navsettings.json and setting ClientServicesCredentialType key value to NavUserPassword, then save file
  - Web service accounts can optionally be set up using Access Key for SOAP and OData Web Service Authentication
  - In the observatory: [Page 9800 "Users"](../../../../objects/page/9800.md)

Key facts from Microsoft Learn (CC BY 4.0), in our own words (D106); open the page for the full text.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
