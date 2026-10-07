---
id: topic/dev-itpro/development/programming-in-the-al-language/pages-and-the-user-interface/developing-for-the-business-central-mobi
type: topic
title: Developing for the Business Central mobile app
summary: "Developing for the Business Central mobile app (tablet and phone) with AL: strategy choices, screen size design, page limitations, role centers, barcode scanning, and browser-based testing. It answers questions about how to build and test mobile-friendly extensions."
tier: official
language: en
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:21:48.019Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 9c33e72a66cf0226e54b9639ceaa488ef109135e90179022ce3611032c3ee3ff
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-mobile-app-barcode-scanning
    title: Barcode scanning in mobile app
    date: "2024-03-27"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-deciding-on-tablet-and-phone-strategy
    title: Deciding on Your Tablet and Phone Strategy
    date: "2026-08-24"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-designing-different-screen-sizes-tablet-and-phone
    title: Designing for Different Screen Sizes on Tablet and Phone
    date: "2026-08-24"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-walkthrough-developing-sales-rep-rolecenter-business-central-tablet-client
    title: Develop a Sales Rep Role Center for the Tablet Client
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-differences-and-limitations-developing-pages-business-central-mobile-app
    title: Differences and Limitations for Mobile App Page Development
    date: "2026-08-24"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-getting-started-developing-business-central-mobile-app
    title: Get started developing for the Dynamics 365 Business Central mobile app
    date: "2024-03-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-introducing-business-central-mobile-app
    title: Introducing the Dynamics 365 Business Central Mobile App
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-opening-business-central-tablet-or-phone-client-from-browser
    title: Opening the Tablet or Phone Client from a Browser
    date: "2026-08-24"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-mobile-app-barcode-scanning
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-deciding-on-tablet-and-phone-strategy
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-designing-different-screen-sizes-tablet-and-phone
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-walkthrough-developing-sales-rep-rolecenter-business-central-tablet-client
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-differences-and-limitations-developing-pages-business-central-mobile-app
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-getting-started-developing-business-central-mobile-app
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-introducing-business-central-mobile-app
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-opening-business-central-tablet-or-phone-client-from-browser
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
  - Developing for the Business Central mobile app
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development/programming-in-the-al-language/pages-and-the-user-interface
children: []
coverage:
  learn: 8
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 632e6d5a7cdc3332b868f6bf686faacdc1167512a291e4bfb5543bce5acc2c6d
narrative: generated
---

# Developing for the Business Central mobile app

> Developing for the Business Central mobile app (tablet and phone) with AL: strategy choices, screen size design, page limitations, role centers, barcode scanning, and browser-based testing. It answers questions about how to build and test mobile-friendly extensions.

Path: [Development](../../../development.md) > [Programming in the AL language](../../programming-in-the-al-language.md) > [Pages and the user interface](../pages-and-the-user-interface.md) > Developing for the Business Central mobile app · tier official · system development · narrative reviewed by Opus

## Overview

The Business Central mobile app gives small and medium-sized business users tablet and phone interfaces with touch-optimized design. It is meant for portable access and light data entry, and it does not replace the web client. Extensions for it use the same AL development framework, with extra care for smaller screens, touch input and role centers.

Start with the introduction and the get-started page, then read the strategy page to choose between platform-native AL development, a Power Apps connector, or OData/SOAP web services. Next, use the screen size and limitations pages to design pages that work on small devices. The Sales Rep Role Center walkthrough shows a practical tablet example.

For testing, you can open the tablet or phone client directly in a browser with URL parameters. This is for design-phase testing only, not a supported production scenario. The barcode scanning page covers camera and dedicated scanner capabilities through AL code and control add-in APIs.

## Key points

- Mobile extensions use the same AL development framework as the web client, with attention to small screens, touch and role centers.
- Strategy options compared: Business Central platform development, Power Apps connector, custom connector, OData web services and SOAP web services.
- Mobile page limits include no multiple selection, no FactBoxes on lists, no advanced filters, restricted action visibility and no worksheets.
- Screen size guidance covers layout constraints, element counts per page type, activity tiles and list columns, with device emulation in Edge DevTools.
- Tablet and phone clients can be opened in a browser by URL parameters (company, page, report, profile) for testing only, with multitenant support.
- Barcode scanning works through the device camera or dedicated Android scanners, using UI buttons or programmatic calls, via control add-in and .NET-based APIs (versions 23.0 and 24 are mentioned).
- A walkthrough builds a Sales Rep Role Center for the tablet client from existing pages and actions, including KPIs and sales quotes.

## Learn pages

- [Barcode scanning in mobile app](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-mobile-app-barcode-scanning): Learn how to add bar code scanning capability to the Business Central mobile app.
- [Deciding on Your Tablet and Phone Strategy](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-deciding-on-tablet-and-phone-strategy): Compare the options for delivering a Business Central mobile experience, including extending the tablet and phone clients, Power Apps, and connected apps.
- [Designing for Different Screen Sizes on Tablet and Phone](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-designing-different-screen-sizes-tablet-and-phone): Optimize your Business Central app design for various screen sizes. Learn best practices for tablet and phone clients, and how to test using a browser.
- [Develop a Sales Rep Role Center for the Tablet Client](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-walkthrough-developing-sales-rep-rolecenter-business-central-tablet-client): Create a Role Center for the Business Central Tablet client for a sales representative.
- [Differences and Limitations for Mobile App Page Development](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-differences-and-limitations-developing-pages-business-central-mobile-app): Learn about the differences and limitations to consider when you develop pages for the Business Central mobile app on tablets and phones.
- [Get started developing for the Dynamics 365 Business Central mobile app](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-getting-started-developing-business-central-mobile-app): Learn how to develop for the Dynamics 365 Business Central Mobile App with this comprehensive guide. Includes design tips, best practices, and deployment steps.
- [Introducing the Dynamics 365 Business Central Mobile App](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-introducing-business-central-mobile-app): Learn about the Dynamics 365 Business Central Mobile App and how it can help you access data from a tablet or a phone.
- [Opening the Tablet or Phone Client from a Browser](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-opening-business-central-tablet-or-phone-client-from-browser): Learn how to open the Business Central tablet or phone client in a browser, so that you can test your solution on different form factors during design.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
