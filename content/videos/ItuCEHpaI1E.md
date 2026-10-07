---
id: video/ItuCEHpaI1E
type: video
title: "What's New: Auto-Applying Templates in Integration with Dataverse (2024 release wave 2)"
summary: "Auto-applying configuration templates in the Business Central integration with Dataverse (2024 release wave 2): rule-based filters and evaluation priorities set in integration table mappings choose which template applies to synchronized records, in both directions. Includes a demo creating a customer from Dataverse."
tier: official
language: en
tags:
  - configuration templates
  - dataverse integration
  - data synchronization
  - conditional rules
  - integration table mappings
  - template prioritization
system: integration
review:
  state: reviewed
  by: opus
  at: "2026-10-07T23:05:38.362Z"
  flags: []
generated:
  at: "2026-10-07T23:05:38.401Z"
  pipeline: 0.2.0
  prompts:
    extract-video: 1
    summarize-video: 2
  input_hash: 4fc339b6298e83f442b8820feef2d95e1b0125f9b5c1a593bb439d893db72277
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=ItuCEHpaI1E&t=6s
    title: "What's New: Auto-Applying Templates in Integration with Dataverse (2024 release wave 2)"
    date: "2024-10-08T15:00:17.000Z"
    commit: null
    t: 6
    quote: in 2024 release wave two you can now conditionally apply uh configuration templates to the data that you synchronize between data ver and business
  - kind: video
    url: https://www.youtube.com/watch?v=ItuCEHpaI1E&t=26s
    title: "What's New: Auto-Applying Templates in Integration with Dataverse (2024 release wave 2)"
    date: "2024-10-08T15:00:17.000Z"
    commit: null
    t: 26
    quote: having this configurable rule-based and automated way uh to select the templates to apply when you synchronize data and when you create new records
  - kind: video
    url: https://www.youtube.com/watch?v=ItuCEHpaI1E&t=107s
    title: "What's New: Auto-Applying Templates in Integration with Dataverse (2024 release wave 2)"
    date: "2024-10-08T15:00:17.000Z"
    commit: null
    t: 107
    quote: when you have more more templates and they have some conditions or some rules on how these templates are applied you will see the
  - kind: video
    url: https://www.youtube.com/watch?v=ItuCEHpaI1E&t=107s
    title: "What's New: Auto-Applying Templates in Integration with Dataverse (2024 release wave 2)"
    date: "2024-10-08T15:00:17.000Z"
    commit: null
    t: 107
    quote: I have a sort of a default uh template that gets applied when a country code is set to uh us or it's uh
  - kind: video
    url: https://www.youtube.com/watch?v=ItuCEHpaI1E&t=167s
    title: "What's New: Auto-Applying Templates in Integration with Dataverse (2024 release wave 2)"
    date: "2024-10-08T15:00:17.000Z"
    commit: null
    t: 167
    quote: once the new record gets created we will go uh one by one and see which of these uh which of these conditions are
  - kind: video
    url: https://www.youtube.com/watch?v=ItuCEHpaI1E&t=341s
    title: "What's New: Auto-Applying Templates in Integration with Dataverse (2024 release wave 2)"
    date: "2024-10-08T15:00:17.000Z"
    commit: null
    t: 341
    quote: there's also integration table configuration templates which apply for when um business Central um record is actually created in data ver so it works
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: ItuCEHpaI1E
channel: yt-microsoft
source_name: Microsoft Dynamics 365 Business Central (YouTube)
url: https://www.youtube.com/watch?v=ItuCEHpaI1E
published_at: "2024-10-08T15:00:17.000Z"
duration_s: 398
captions: full
audience:
  - functional consultant
  - administrator
  - developer
chapters:
  - t: 0
    title: Introduction to Auto-Apply Templates
  - t: 66
    title: Integration Table Mappings Overview
  - t: 107
    title: Conditional Template Application with Rules
  - t: 187
    title: "Demo: Creating Customer from Dataverse"
  - t: 246
    title: Results and Template Application Verification
  - t: 301
    title: Feature Overview and Bidirectional Support
  - t: 362
    title: Conclusion and Additional Resources
features:
  - name: Auto-Apply Templates in Integration with Dataverse
    status: unclear
    t: 6
    verified: false
    status_source: video
  - name: Configuration Template Setup Pages
    status: unclear
    t: 301
    verified: false
    status_source: video
  - name: Template Filter Conditions
    status: unclear
    t: 107
    verified: false
    status_source: video
  - name: Template Evaluation Priority
    status: unclear
    t: 167
    verified: false
    status_source: video
objects_mentioned:
  - table Integration Table Mappings
  - page Configuration Template Setup
quotes:
  - t: 6
    text: in 2024 release wave two you can now conditionally apply uh configuration templates to the data that you synchronize between data ver and business
    check: exact
  - t: 26
    text: having this configurable rule-based and automated way uh to select the templates to apply when you synchronize data and when you create new records
    check: exact
  - t: 107
    text: when you have more more templates and they have some conditions or some rules on how these templates are applied you will see the
    check: exact
  - t: 107
    text: I have a sort of a default uh template that gets applied when a country code is set to uh us or it's uh
    check: snapped
  - t: 167
    text: once the new record gets created we will go uh one by one and see which of these uh which of these conditions are
    check: exact
  - t: 341
    text: there's also integration table configuration templates which apply for when um business Central um record is actually created in data ver so it works
    check: exact
---

# What's New: Auto-Applying Templates in Integration with Dataverse (2024 release wave 2)

> Auto-applying configuration templates in the Business Central integration with Dataverse (2024 release wave 2): rule-based filters and evaluation priorities set in integration table mappings choose which template applies to synchronized records, in both directions. Includes a demo creating a customer from Dataverse.

[Watch on YouTube](https://www.youtube.com/watch?v=ItuCEHpaI1E) · Microsoft Dynamics 365 Business Central (YouTube) · 2024-10-08 · 6:38 · tier official · reviewed (checked by Opus)

## Overview

The video explains how, in 2024 release wave 2, configuration templates can be applied conditionally to data synchronized between Dataverse and Business Central. Instead of extending the integration solution, you configure the rules in the integration table mappings.

A drill-down from the integration table mapping opens new Configuration Template Setup pages. There you define filters a record must meet for a template to apply, and a priority that sets the evaluation order. The demo creates a customer from Dataverse and checks which template was applied, using a default template tied to a country code value. The video also covers that the feature works in both directions.

## Key points

- Templates are applied conditionally to data synchronized between Dataverse and Business Central, based on rules, without extending integration solutions.
- Setup is done in the Integration Table Mappings, by drilling down to the Configuration Template Setup page.
- Filters define the conditions a record must satisfy for a template to be applied, for example a country code value.
- A priority field sets the order in which template filters are evaluated when a new record is created; the conditions are checked one by one.
- Both table configuration templates and integration table configuration templates are supported.
- Integration table configuration templates apply when a Business Central record is created in Dataverse, so the feature works bidirectionally.

## Chapters

- [0:00](https://www.youtube.com/watch?v=ItuCEHpaI1E&t=0s) Introduction to Auto-Apply Templates
- [1:06](https://www.youtube.com/watch?v=ItuCEHpaI1E&t=66s) Integration Table Mappings Overview
- [1:47](https://www.youtube.com/watch?v=ItuCEHpaI1E&t=107s) Conditional Template Application with Rules
- [3:07](https://www.youtube.com/watch?v=ItuCEHpaI1E&t=187s) Demo: Creating Customer from Dataverse
- [4:06](https://www.youtube.com/watch?v=ItuCEHpaI1E&t=246s) Results and Template Application Verification
- [5:01](https://www.youtube.com/watch?v=ItuCEHpaI1E&t=301s) Feature Overview and Bidirectional Support
- [6:02](https://www.youtube.com/watch?v=ItuCEHpaI1E&t=362s) Conclusion and Additional Resources

## Features

| Feature | Status | At |
|---|---|---|
| Auto-Apply Templates in Integration with Dataverse | status not stated, demoed | [0:06](https://www.youtube.com/watch?v=ItuCEHpaI1E&t=6s) |
| Configuration Template Setup Pages | status not stated, demoed | [5:01](https://www.youtube.com/watch?v=ItuCEHpaI1E&t=301s) |
| Template Filter Conditions | status not stated, demoed | [1:47](https://www.youtube.com/watch?v=ItuCEHpaI1E&t=107s) |
| Template Evaluation Priority | status not stated, demoed | [2:47](https://www.youtube.com/watch?v=ItuCEHpaI1E&t=167s) |

## AL objects mentioned

As heard in the captions. A name that matches one object page by exact type and name links to it; the others stay as named.

- table "Integration Table Mappings" at [1:06](https://www.youtube.com/watch?v=ItuCEHpaI1E&t=66s)
- page "Configuration Template Setup" at [5:01](https://www.youtube.com/watch?v=ItuCEHpaI1E&t=301s)

Not found in BC28-30: table "Integration Table Mappings", page "Configuration Template Setup".

## Quotes

- [0:06](https://www.youtube.com/watch?v=ItuCEHpaI1E&t=6s) "in 2024 release wave two you can now conditionally apply uh configuration templates to the data that you synchronize between data ver and business"
- [0:26](https://www.youtube.com/watch?v=ItuCEHpaI1E&t=26s) "having this configurable rule-based and automated way uh to select the templates to apply when you synchronize data and when you create new records"
- [1:47](https://www.youtube.com/watch?v=ItuCEHpaI1E&t=107s) "when you have more more templates and they have some conditions or some rules on how these templates are applied you will see the"
- [1:47](https://www.youtube.com/watch?v=ItuCEHpaI1E&t=107s) "I have a sort of a default uh template that gets applied when a country code is set to uh us or it's uh"
- [2:47](https://www.youtube.com/watch?v=ItuCEHpaI1E&t=167s) "once the new record gets created we will go uh one by one and see which of these uh which of these conditions are"
- [5:41](https://www.youtube.com/watch?v=ItuCEHpaI1E&t=341s) "there's also integration table configuration templates which apply for when um business Central um record is actually created in data ver so it works"

Presenters (as heard): Ivan ktic.
