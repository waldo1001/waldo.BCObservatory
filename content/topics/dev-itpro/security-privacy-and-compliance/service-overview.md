---
id: topic/dev-itpro/security-privacy-and-compliance/service-overview
type: topic
title: Service overview
summary: "Service overview covers how Business Central online is built and run: multitenant cloud architecture, availability, backup and disaster recovery, service operations and incident handling, and scalability. It answers questions about reliability, resilience, SLAs, and capacity limits of the online service."
tier: official
language: en
system: service
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-30T01:11:59.976Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: d64405b4047f26ee1dbcf05a56cd36f1b53910d7ee3b0063965198d8fc418d1a
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

> Service overview covers how Business Central online is built and run: multitenant cloud architecture, availability, backup and disaster recovery, service operations and incident handling, and scalability. It answers questions about reliability, resilience, SLAs, and capacity limits of the online service.

Path: [Security, privacy, and compliance](../security-privacy-and-compliance.md) > Service overview · tier official · system service · narrative **unreviewed** (model text not yet checked)

## Overview

This section describes the Business Central online service from three angles. The service overview page explains the multitenant cloud architecture on Azure SQL Database, global availability, security and compliance, backup and restore options, and service update schedules.

The service operations page covers how reliability is maintained: quality gates, service monitoring, the live site incident process with automated resolution, BCDR processes, and learning from post-mortems and telemetry. The scalability page covers elasticity, autoscaling, and load balancing, with figures on weekly workload.

Start with the service overview for the general picture, then read service operations for reliability practices and service scalability for capacity and throughput questions.

## Key points

- Business Central online is a multitenant cloud ERP service built on Azure SQL Database.
- Resilience options include backup and restore, geo-redundant backups, and availability zones.
- The overview covers global availability, Copilot availability, service level agreements, and service update schedules.
- Service operations rely on quality gates, service monitoring, deployment rings, and service level indicators and objectives.
- Live site incidents follow a defined process with automated resolution, and post-mortems and telemetry drive continuous improvement.
- Autoscaling and load balancing provide resource elasticity, with no fixed limits on users or database size.
- The service handles over 2B API calls and 1B UI interactions weekly, with 99.81% of executions on adequately resourced nodes.
- Web service rate limiting is part of the scalability discussion.

## Learn pages

- [Service operations](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/service-operations): Learn about the operations done to keep Business Central optimized and reliable.
- [Service overview for Business Central online](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/service-overview): Find links to information about the underlying service's maintenance schedule, and the systems that make Business Central online a reliable platform for your business.
- [Service scalability for Business Central online](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/service-scalability): Learn about Business Central's online ability to provide resource elasticity through real-time, data-driven autoscaling and dynamic load distribution to support these needs.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
