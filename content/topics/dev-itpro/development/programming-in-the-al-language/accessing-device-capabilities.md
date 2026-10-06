---
id: topic/dev-itpro/development/programming-in-the-al-language/accessing-device-capabilities
type: topic
title: Accessing device capabilities
summary: "Accessing device capabilities in AL covers how AL code reaches device features in Business Central: GPS location and the camera. It answers questions about which codeunit or DotNet type to use online versus on-premises, and which methods and triggers to call."
tier: official
language: en
system: development
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-06T14:24:07.451Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: b7f1ebc5e6efd849664ee010bc15ad0b30c9ab27aa503afa91956f2223d83b38
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-implement-location-al
    title: Implementing Location in AL for Business Central
    date: "2026-08-24"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-implement-camera-al
    title: Implementing the Camera in AL for Business Central
    date: "2026-08-24"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-implement-location-al
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-implement-camera-al
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development/programming-in-the-al-language
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Development
  - Programming in the AL language
  - Accessing device capabilities
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development/programming-in-the-al-language
children: []
coverage:
  learn: 2
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 9976ea24e7f620532bad3b7fb91eba90502a577dc1e3ce920491d3dd5092710c
narrative: generated
---

# Accessing device capabilities

> Accessing device capabilities in AL covers how AL code reaches device features in Business Central: GPS location and the camera. It answers questions about which codeunit or DotNet type to use online versus on-premises, and which methods and triggers to call.

Path: [Development](../../development.md) > [Programming in the AL language](../programming-in-the-al-language.md) > Accessing device capabilities · tier official · system development · **unreviewed** (machine-generated narrative)

## Overview

This section explains how AL extensions use hardware features of the device running the client. It has two pages, one for location and one for the camera. Each page follows the same split: a built-in codeunit for online deployments and DotNet interop for on-premises deployments.

The location page covers reading device GPS coordinates, for scenarios such as route calculation and map display. The camera page covers capturing a picture from the web client and from tablet and phone clients. Both pages describe an availability check and an asynchronous request pattern with a trigger that fires when the result arrives.

Start with whichever capability you need. The two pages are independent, and the patterns are similar, so reading one makes the other easier to follow.

## Key points

- Location: use the Geolocation codeunit online, or the LocationProvider DotNet type on-premises.
- Location is requested with RequestLocationAsync, and results come through the LocationChanged trigger.
- Location options include EnableHighAccuracy and Timeout, and IsAvailable checks whether the feature can be used.
- Typical location uses are route calculation and map display.
- Camera: use the Camera codeunit online, or DotNet interop with Microsoft.Dynamics.Nav.ClientExtensions on-premises.
- The camera captures pictures from the web client and from tablet and phone clients.
- Call RequestPictureAsync to take a picture, configure it with CameraOptions, and handle the picture file in the PictureAvailable trigger.
- Check IsAvailable before using the camera.

## Learn pages

- [Implementing Location in AL for Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-implement-location-al): Learn how to implement location access in AL for Dynamics 365 Business Central. Enhance your app with GPS capabilities for better customer service.
- [Implementing the Camera in AL for Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-implement-camera-al): Learn how to implement the camera capability on a Business Central page in AL, so users can take pictures and handle them directly from the same device.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
