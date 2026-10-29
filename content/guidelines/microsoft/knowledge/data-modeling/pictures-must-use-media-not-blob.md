---
id: guideline/microsoft/knowledge/data-modeling/pictures-must-use-media-not-blob
type: guideline
title: Pictures must be stored in a Media/MediaSet field, not BLOB
summary: BLOB is still a valid AL field type for arbitrary binary data, but it is not the right choice for storing pictures or images. The current recommendation is the Media field type for a single image, or MediaSet when a record needs several independent images (e.g.
tier: official
language: en
tags:
  - blob
  - media
  - mediaset
  - picture-field
  - image-field
  - table-design
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:45.424Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 1767a0df83e1db1ab771775b227a3edc04f1edba
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/pictures-must-use-media-not-blob.md
    title: "microsoft/BCQuality: Pictures must be stored in a Media/MediaSet field, not BLOB"
    date: "2026-09-29"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/157
repo_path: microsoft/knowledge/data-modeling/pictures-must-use-media-not-blob.md
layer: microsoft
kind: rule
domain: data-modeling
bc_version:
  - all
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 2
identifiers:
  - MediaSet
---

# Pictures must be stored in a Media/MediaSet field, not BLOB

> BLOB is still a valid AL field type for arbitrary binary data, but it is not the right choice for storing pictures or images. The current recommendation is the Media field type for a single image, or MediaSet when a record needs several independent images (e.g.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/pictures-must-use-media-not-blob.md) · microsoft layer · data-modeling · BC all · tier official · derived

## Description

`BLOB` is still a valid AL field type for arbitrary binary data, but it is
not the right choice for storing pictures or images. The current
recommendation is the `Media` field type for a single image, or
`MediaSet` when a record needs several independent images (e.g. multiple
product photos) — `MediaSet` is a collection of separately-imported media
objects, each with its own identity; it does not generate resized variants
or thumbnails on its own, and displaying more than one item still requires
custom page handling. Media/MediaSet integrate with the platform's
picture control and media repository, which a plain `BLOB` field does not
— but any derived preview or thumbnail image still has to be generated
explicitly and stored in its own field, regardless of which type holds the
source image.

`BLOB` remains the correct choice for genuinely arbitrary binary payloads
that are not images and don't benefit from the media pipeline (e.g. a raw
file attachment blob unrelated to picture rendering).

## Best Practice

Use `Media` for a single image, or `MediaSet` for multiple independent
images, for any field that holds a picture.

See sample: [`pictures-must-use-media-not-blob.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/pictures-must-use-media-not-blob.good.al).

## Anti Pattern

A `BLOB` field named "Picture" compiles and stores the image bytes, but
it misses the picture control integration and media repository that a
`Media`/`MediaSet` field provides for free — the anti pattern is choosing
`BLOB` for image storage out of habit rather than recognizing that the
field is holding a picture, not generic binary data. A related anti
pattern: assuming `MediaSet` gives automatic image variants or thumbnails
because it sounds like a collection with derived versions — it is only a
collection of independently-imported media objects.

See sample: [`pictures-must-use-media-not-blob.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/pictures-must-use-media-not-blob.bad.al).

## Examples

- [Good: pictures-must-use-media-not-blob.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/pictures-must-use-media-not-blob.good.al)
- [Bad: pictures-must-use-media-not-blob.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/pictures-must-use-media-not-blob.bad.al)

## Changed by

- [#157 18 more AL/BC patterns: data-modeling, testing, style, security, error-handling, ui, upgrade, web-services, appsource](../../../../changes/bcquality/157.md), 2026-09-29

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
