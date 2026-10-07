---
id: topic/dev-itpro/security-privacy-and-compliance/service-overview
type: topic
title: Service overview
summary: "Service overview covers how Business Central online is built and run: Azure-based multitenant architecture, availability and backup, service operations and incident handling, and scalability. It answers questions about reliability, recovery, updates, and capacity."
tier: official
language: en
system: service
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: f0cd2bffd3e70bf4aa9f71ff8b07540602ee25c335bdac1765caa5d8c24a23fb
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/service-operations
    title: Service operations
    date: "2024-02-22"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/service-overview
    title: Service overview for Business Central online
    date: "2024-12-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/service-scalability
    title: Service scalability for Business Central online
    date: "2024-02-22"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/service-operations
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/service-overview
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/service-scalability
  objects: []
  features: []
  topics:
    - topic/dev-itpro/security-privacy-and-compliance
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Security, privacy, and compliance
  - Service overview
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/security-privacy-and-compliance
children: []
coverage:
  learn: 3
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 04826df2491b8ebd7d03c4d5bdc2c4230b00760520596e05ce5be83f1102b397
narrative: generated
---

# Service overview

> Service overview covers how Business Central online is built and run: Azure-based multitenant architecture, availability and backup, service operations and incident handling, and scalability. It answers questions about reliability, recovery, updates, and capacity.

Path: [Security, privacy, and compliance](../security-privacy-and-compliance.md) > Service overview · tier official · system service · **unreviewed** (machine-generated narrative)

## Overview

This section describes the Business Central online service from an infrastructure and operations point of view. It has three pages: a general service overview, a page on service operations, and a page on scalability.

Start with the service overview for the architecture (Azure microservices, multitenant, Azure SQL Database), global availability, geo-redundant high availability, backup and restore, twice-yearly updates, and compliance certifications. Then read service operations to see how reliability is kept up through monitoring, live site incident handling, service level indicators and objectives, deployment rings, and post-mortems. Finish with scalability for autoscaling, load balancing, and observed throughput figures.

## Key points

- Business Central online runs on Azure microservices with a multitenant architecture and Azure SQL Database.
- The service targets 99.99% availability using geo-redundancy.
- Backups are kept for 28 days, are geo-redundant, and support automatic restore.
- Service updates are released twice yearly.
- Service operations rely on quality gates, service monitoring, a live site incident process with automated resolution, and BCDR processes.
- Reliability is tracked with service level indicators and objectives, and deployment rings are used for rollout.
- Post-mortems and telemetry analysis drive continuous improvement.
- Scalability uses autoscaling and load balancing, with over 2B API calls and 1B UI interactions weekly, 99.81% of executions on adequately resourced nodes, and no fixed limits on users or database size; web service rate limiting applies.

## Learn pages

- [Service operations](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/service-operations): Learn about the operations done to keep Business Central optimized and reliable.
- [Service overview for Business Central online](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/service-overview): Find links to information about the underlying service's maintenance schedule, and the systems that make Business Central online a reliable platform for your business.
- [Service scalability for Business Central online](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/service-scalability): Learn about Business Central's online ability to provide resource elasticity through real-time, data-driven autoscaling and dynamic load distribution to support these needs.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
