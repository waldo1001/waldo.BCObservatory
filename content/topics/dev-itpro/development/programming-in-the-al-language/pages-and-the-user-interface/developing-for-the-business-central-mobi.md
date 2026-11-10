---
id: topic/dev-itpro/development/programming-in-the-al-language/pages-and-the-user-interface/developing-for-the-business-central-mobi
type: topic
title: Developing for the Business Central mobile app
summary: Developing for the Business Central mobile app covers building AL extensions for the tablet and phone clients. It answers questions on mobile strategy, screen size design, page limitations, barcode scanning, role center creation, and browser-based testing.
tier: official
language: en
system: development
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-10T00:57:46.434Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 61e0889f5c8cc367a8959144dc72ca847a6ed550dbd86ef01c164725d3feed55
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
  videos:
    - video/KYsrBoHVA70
    - video/W2yhU8eXT5w
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
  video: 2
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 632e6d5a7cdc3332b868f6bf686faacdc1167512a291e4bfb5543bce5acc2c6d
narrative: generated
---

# Developing for the Business Central mobile app

> Developing for the Business Central mobile app covers building AL extensions for the tablet and phone clients. It answers questions on mobile strategy, screen size design, page limitations, barcode scanning, role center creation, and browser-based testing.

Path: [Development](../../../development.md) > [Programming in the AL language](../../programming-in-the-al-language.md) > [Pages and the user interface](../pages-and-the-user-interface.md) > Developing for the Business Central mobile app · tier official · system development · narrative **unreviewed** (model text not yet checked)

## Overview

The mobile app gives small and medium-sized business users touch-optimized tablet and phone interfaces for portable access and light data entry. It does not replace the web client. Extensions for it use the same AL development framework as other clients, with extra attention to smaller screens, touch input, and role centers.

Start with the introduction and the "Get started" page to understand the app and the development model. Then read "Deciding on Your Tablet and Phone Strategy", which compares platform-native AL development, the Power Apps connector, custom connectors, and OData or SOAP web services.

For design work, use the guidance on screen sizes and on differences and limitations of mobile pages. To test, open the tablet or phone client directly in a browser, which is for testing only. The sales rep role center walkthrough and the barcode scanning page cover two concrete scenarios.

## Key points

- The mobile app offers tablet and phone clients built with the same AL framework, with touch-optimized design and role centers.
- Strategy options compared: platform-native AL development, Power Apps connector, custom connector, OData web services, and SOAP web services.
- Mobile page limits include no multiple selection, no FactBox on lists, no advanced filters, restricted action visibility, and no worksheets.
- Screen size guidance covers layout constraints, element counts per page type, activity tiles, list columns, and emulation with Edge DevTools.
- Barcode scanning works with the device camera or dedicated Android scanners, through UI buttons or programmatic AL code and control add-in APIs.
- The tablet and phone clients can be opened in a browser by URL parameters (company, page, report, profile) for design-phase testing only, not production.
- A walkthrough builds a sales rep role center for the tablet client from existing page parts and actions (Business Central 2026 release wave 2, version 29).

## Learn pages

- [Barcode scanning in mobile app](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-mobile-app-barcode-scanning): Learn how to add bar code scanning capability to the Business Central mobile app.
  - In the observatory: [Enum 8761 "BarcodeFailure"](../../../../../objects/enum/8761.md)
- [Deciding on Your Tablet and Phone Strategy](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-deciding-on-tablet-and-phone-strategy): Compare the options for delivering a Business Central mobile experience, including extending the tablet and phone clients, Power Apps, and connected apps.
- [Designing for Different Screen Sizes on Tablet and Phone](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-designing-different-screen-sizes-tablet-and-phone): Optimize your Business Central app design for various screen sizes. Learn best practices for tablet and phone clients, and how to test using a browser.
- [Develop a Sales Rep Role Center for the Tablet Client](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-walkthrough-developing-sales-rep-rolecenter-business-central-tablet-client): Build a sales representative's role center for the Business Central tablet client with existing page parts, quote actions, and profile setup.
  - In the observatory: [Page 1310 "O365 Activities"](../../../../../objects/page/1310.md), [Page 1392 "Help And Chart Wrapper"](../../../../../objects/page/1392.md), [Page 1393 "Trial Balance"](../../../../../objects/page/1393.md), [Page 22 "Customer List"](../../../../../objects/page/22.md), [Page 31 "Item List"](../../../../../objects/page/31.md), [Page 41 "Sales Quote"](../../../../../objects/page/41.md)
- [Differences and Limitations for Mobile App Page Development](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-differences-and-limitations-developing-pages-business-central-mobile-app): Learn about the differences and limitations to consider when you develop pages for the Business Central mobile app on tablets and phones.
- [Get started developing for the Dynamics 365 Business Central mobile app](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-getting-started-developing-business-central-mobile-app): Learn how to develop for the Dynamics 365 Business Central Mobile App with this comprehensive guide. Includes design tips, best practices, and deployment steps.
- [Introducing the Dynamics 365 Business Central Mobile App](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-introducing-business-central-mobile-app): Learn about the Dynamics 365 Business Central Mobile App and how it can help you access data from a tablet or a phone.
- [Opening the Tablet or Phone Client from a Browser](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-opening-business-central-tablet-or-phone-client-from-browser): Learn how to open the Business Central tablet or phone client in a browser, so that you can test your solution on different form factors during design.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [What's New: Business Central Mobile Apps Featuring Brand New Barcode Scanning Capabilities (2023)](../../../../../videos/KYsrBoHVA70.md) (video): "Business Central Mobile Apps Featuring Brand New Barcode Scanning Capabilities"
- [What's new: Business Central Mobile App and Barcode Scanning (2024 release wave 1)](../../../../../videos/W2yhU8eXT5w.md) (video): "Worksheet pages on mobile phones; Native barcode scanning on SaaS; Camera barcode scanning"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
