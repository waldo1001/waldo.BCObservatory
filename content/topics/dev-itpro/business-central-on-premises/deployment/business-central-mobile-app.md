---
id: topic/dev-itpro/business-central-on-premises/deployment/business-central-mobile-app
type: topic
title: Business Central mobile app
summary: The Business Central mobile app section for on-premises deployments covers what the app is, how to install it on iOS, Android and Windows devices, how to use HTTPS and certificates, and how to troubleshoot common problems. It answers setup, security and error-resolution questions.
tier: official
language: en
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:26:27.874Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 7049dfe3a764da28dbfd221ca8f1c8238b35f7260b0908aca8cdeb4ddb1e7c2c
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/install-business-central-app
    title: Install the Business Central Mobile app
    date: "2024-01-08"
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
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-troubleshooting-the-mobile-app
    title: Troubleshooting the Business Central Mobile App On-Premises
    date: "2026-08-24"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-using-https-and-certificates-mobile-app
    title: Using HTTPS and Certificates in Business Central Mobile App
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/install-business-central-app
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-introducing-business-central-mobile-app
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-troubleshooting-the-mobile-app
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-using-https-and-certificates-mobile-app
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
  - Business Central mobile app
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/business-central-on-premises/deployment
children: []
coverage:
  learn: 4
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: afc3fdf78d13c9ae1d41ded22c63367b849668020da455b7c0e53bd43bfdd7a9
narrative: generated
---

# Business Central mobile app

> The Business Central mobile app section for on-premises deployments covers what the app is, how to install it on iOS, Android and Windows devices, how to use HTTPS and certificates, and how to troubleshoot common problems. It answers setup, security and error-resolution questions.

Path: [Business Central on-premises](../../business-central-on-premises.md) > [Deployment](../deployment.md) > Business Central mobile app · tier official · system none · narrative reviewed (checked by Opus)

## Overview

The Business Central mobile app gives tablet and phone users a touch-optimized interface to their data. It suits portable access and light data entry, and it does not replace the web client. The section covers the on-premises case, where the web server must be configured for the app to connect.

Start with the introduction page to see what the app offers. Then use the installation page, which covers iOS, Android and the Windows 10 app, SSL configuration and navsettings.json setup. The HTTPS and certificates page explains secure connections. The troubleshooting page covers problems found after setup.

## Key points

- The app offers tablet and phone interfaces with touch design and a role center, aimed at portable access and light data entry.
- It does not replace the web client.
- Installation for on-premises deployments is described for iOS, Android and Windows 10 devices.
- On-premises installation needs web server configuration, including SSL configuration and navsettings.json setup.
- The installation page mentions 2021 release wave 1 and 2 (versions 18 and 19).
- HTTPS and certificates secure the connection. Self-signed certificates are recommended only for testing, never for production.
- Troubleshooting covers icon font loading, device date configuration issues and client type errors.

## Learn pages

- [Install the Business Central Mobile app](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/install-business-central-app): Learn about prerequisites for using Business Central on-premises on mobile devices.
- [Introducing the Dynamics 365 Business Central Mobile App](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-introducing-business-central-mobile-app): Learn about the Dynamics 365 Business Central Mobile App and how it can help you access data from a tablet or a phone.
- [Troubleshooting the Business Central Mobile App On-Premises](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-troubleshooting-the-mobile-app): Find help for resolving problems with the Business Central web, tablet, and phone clients when you run Business Central on-premises.
- [Using HTTPS and Certificates in Business Central Mobile App](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-using-https-and-certificates-mobile-app)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
