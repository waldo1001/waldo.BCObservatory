---
id: topic/dev-itpro/development/programming-in-the-al-language/pages-and-the-user-interface/creating-deep-links
type: topic
title: Creating deep links
summary: "Deep links in Business Central: how to build URLs that open specific content in the web client or the mobile app. Answers questions about URL parameters such as company, page, report, table, mode, profile, filter and bookmark, and the ms-businesscentral URI scheme."
tier: official
language: en
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-07T05:23:22.125Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 8a31063d67bd708e6485e6f9343375fc5ba9e04b1c58d0483dce4fdf43e7ae69
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-link-to-mobile-app
    title: Linking to the Dynamics 365 Business Central App
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-web-client-urls
    title: Web client URL
    date: "2024-06-24"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-link-to-mobile-app
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-web-client-urls
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development/programming-in-the-al-language/pages-and-the-user-interface
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Development
  - Programming in the AL language
  - Pages and the user interface
  - Creating deep links
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development/programming-in-the-al-language/pages-and-the-user-interface
children: []
coverage:
  learn: 2
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 4cd62a747b179066bcc501044051abb774612f6514eed7c2961fd92d9a592767
narrative: generated
---

# Creating deep links

> Deep links in Business Central: how to build URLs that open specific content in the web client or the mobile app. Answers questions about URL parameters such as company, page, report, table, mode, profile, filter and bookmark, and the ms-businesscentral URI scheme.

Path: [Development](../../../development.md) > [Programming in the AL language](../../programming-in-the-al-language.md) > [Pages and the user interface](../pages-and-the-user-interface.md) > Creating deep links · tier official · system development · narrative reviewed (checked by Opus)

## Overview

Deep links are URLs that take a user straight to a given place in Business Central instead of the start page. This section has two pages, one for each client: the web client URL and the link to the Business Central mobile app.

The web client page explains how to build URLs that open pages, reports, tables and queries, with parameters for company, mode, profile, filters and display options. The mobile app page explains how to launch the app with the ms-businesscentral URI scheme and parameters for page, bookmark, filter, profile and company.

Start with the page for the client you target. The two use similar parameters, so the web client page is a useful base for the mobile one.

## Key points

- Web client URLs can open pages, reports, tables and queries.
- Web client parameters include company, page, report, table, mode and profile, plus filters and display options.
- The mode parameter accepts View, Edit or Create.
- The mobile app is launched with the ms-businesscentral URI scheme.
- Mobile app links support page, bookmark, filter, profile and company parameters.
- The web client URL page lists 2020 release wave 1 update 16.2.

## Learn pages

- [Linking to the Dynamics 365 Business Central App](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-link-to-mobile-app): Learn how you can construct a URL for starting the Dynamics 365 Business Central app on a device, such as a phone or tablet. You can then distribute this URL by e-mail or from a Web page to the users.
- [Web client URL](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-web-client-urls): Learn about the URL for opening the Business Central web client.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
