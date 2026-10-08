---
id: topic/dev-itpro/business-central-on-premises/deployment/deployment-topologies
type: topic
title: Deployment topologies
summary: "Deployment topologies for Business Central on-premises: demonstration, single-computer, two-computer and three-computer setups. It answers questions about which components go on which machine and what pre-installation, installation and post-installation tasks each layout needs."
tier: official
language: en
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:24:44.768Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 2d36be01234f96df65ea98091c2e3b42a4d30aaf8ec93d6f001849cda47517b1
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/deploy-demonstration-environment
    title: Deploying a Business Central Demonstration Environment
    date: "2026-05-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/deploy-three-computer-environment
    title: Deploying Business Central in a Three-Computer Topology
    date: "2022-09-27"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/deploy-single-computer-environment
    title: Installing Business Central in a Single Computer Environment
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/deploy-two-computer-environment
    title: Installing Business Central in a Two Computer Environment
    date: "2021-10-13"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/deployment-scenarios
    title: Web Server Components Deployment Scenarios
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/deploy-demonstration-environment
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/deploy-three-computer-environment
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/deploy-single-computer-environment
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/deploy-two-computer-environment
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/deployment-scenarios
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
  - Deployment topologies
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/business-central-on-premises/deployment
children: []
coverage:
  learn: 5
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 1e0971623b72145032b42f08ff3946c0d35714cda944ae26b2e809624c5e51a5
narrative: generated
---

# Deployment topologies

> Deployment topologies for Business Central on-premises: demonstration, single-computer, two-computer and three-computer setups. It answers questions about which components go on which machine and what pre-installation, installation and post-installation tasks each layout needs.

Path: [Business Central on-premises](../../business-central-on-premises.md) > [Deployment](../deployment.md) > Deployment topologies · tier official · system none · narrative reviewed (checked by Opus)

## Overview

Business Central on-premises has three main components: the web server components, Business Central Server (the application server), and the SQL Server database. The pages in this section show how to place these on one, two or three computers, plus a demonstration setup on a single computer.

The single-computer and two-computer pages cover tasks before installation, the installation itself and configuration afterward. Across the pages, topics include IIS, SSL, firewall settings, service accounts and authentication. The three-computer page also covers delegation between servers and the SQL Server Browser service. The two-computer page puts SQL Server on one machine and the web and application servers on another.

Start with the Web Server Components Deployment Scenarios page to compare the topologies and see how components are arranged in each. Then open the page for the layout you need. The demonstration environment page sets up everything on one computer with the base application and demo data, reachable through the Web client.

## Key points

- Demonstration environment: one computer with the base application, SQL database and demo data, reachable through the Web client.
- Single-computer deployment installs web server, application server and database together, with IIS, SSL, firewall, service account and authentication tasks.
- Two-computer deployment separates SQL Server from the web and application servers, and covers the client services port, SOAP and OData web services, SSL and user authentication.
- Three-computer deployment puts web server, application server and database on separate machines.
- The three-computer topology needs delegation configured between servers, plus SQL Server Browser service and firewall setup.
- The Web Server Components Deployment Scenarios page compares how components are arranged across all four topologies.
- The demonstration deployment uses IIS, Business Central Server, a SQL Server database, the Admin shell and the Admin tool.

## Learn pages

- [Deploying a Business Central Demonstration Environment](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/deploy-demonstration-environment): Learn about deploying demos for Business Central on-premises.
- [Deploying Business Central in a Three-Computer Topology](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/deploy-three-computer-environment): Learn how deploy Business Central components on three separate computers.
- [Installing Business Central in a Single Computer Environment](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/deploy-single-computer-environment): Learn how to deploy Microsoft's Business Central on a single computer. Includes pre-installation tasks, installation, and post-installation configuration.
- [Installing Business Central in a Two Computer Environment](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/deploy-two-computer-environment): Explains how to deploy Business Central on two computers.
- [Web Server Components Deployment Scenarios](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/deployment-scenarios): This article describes how to install and configure the Dynamics NAV Web Server components in different network topologies and the deployment scenarios.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
