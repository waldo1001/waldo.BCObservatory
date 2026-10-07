---
id: topic/dev-itpro/development/programming-in-the-al-language/language-elements/interfaces
type: topic
title: Interfaces
summary: "Interfaces in AL: how to declare them, implement them in codeunits, give methods default implementations, extend interfaces, and manage method changes over time. It answers questions about polymorphism, the is and as operators, and safely adding or removing interface methods in published extensions."
tier: official
language: en
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:26:46.553Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 65103acaa11ee4eff05119bbf2c52a1aefb181c78bfd0e229b97e56d10888953
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-interfaces-in-al-extend
    title: Extend interfaces in AL
    date: "2024-09-27"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-interface-method-lifecycle
    title: Interface method lifecycle
    date: "2026-04-29"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-interfaces-in-al
    title: Interfaces in AL
    date: "2026-08-25"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-interfaces-in-al-operators
    title: Type testing and casting operators for interfaces in AL
    date: "2025-06-27"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-interfaces-in-al-extend
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-interface-method-lifecycle
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-interfaces-in-al
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-interfaces-in-al-operators
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development/programming-in-the-al-language/language-elements
  localizations: []
  videos:
    - video/H_PHi8pe53w
    - video/PHmFqehrPG4
  posts:
    - post/jpearson-blog/1419
    - post/sauravdhyani-com/tag:blogger.com,1999:blog-3122193036149030463.post-8721347757329141815
  guidelines: []
learn_toc_path:
  - Development
  - Programming in the AL language
  - Language elements
  - Interfaces
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development/programming-in-the-al-language/language-elements
children: []
coverage:
  learn: 4
  code: 0
  video: 2
  blog: 2
  guideline: 0
bc_forms: []
member_hash: 1df987552c2acc93942b6b62fb884791969f7b91f6e38fa7b5191b87c8d7fd15
narrative: generated
---

# Interfaces

> Interfaces in AL: how to declare them, implement them in codeunits, give methods default implementations, extend interfaces, and manage method changes over time. It answers questions about polymorphism, the is and as operators, and safely adding or removing interface methods in published extensions.

Path: [Development](../../../development.md) > [Programming in the AL language](../../programming-in-the-al-language.md) > [Language elements](../language-elements.md) > Interfaces · tier official · system development · narrative reviewed by Opus

## Overview

Interfaces in AL define syntactical contracts that codeunits implement, which supports polymorphic programming. The section has four pages and no subtopics. They cover the basics, extension of interfaces, type testing and casting, and the lifecycle of interface methods.

## Key points

- Start with 'Interfaces in AL': interface declaration, the implements keyword, and Go to Implementations.
- Interfaces can have default method implementations, and a default method can later transition to a required method.
- 'Extend interfaces in AL' lets an interface extend other interfaces and inherit their methods (2024 release wave 2).
- The is operator tests whether an interface supports a given interface or method, and the as operator casts it (2024 release wave 2).
- Type testing and casting are mainly useful when extending interfaces.
- Interface method lifecycle in published extensions uses Default, RequiredPending, and Obsolete states to keep backward compatibility.
- The lifecycle page also covers required methods, a runtime identifier, and AppSourceCop rules.
- The 'Interfaces in AL' page mentions 2023 release wave 1 and 2026 release wave 2 as version points.

## Learn pages

- [Extend interfaces in AL](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-interfaces-in-al-extend): Learn how to extend interfaces in AL to create flexible and adaptable extensions.
- [Interface method lifecycle](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-interface-method-lifecycle): Learn the recommended lifecycle for adding, transitioning, and removing interface methods in AL.
- [Interfaces in AL](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-interfaces-in-al): Learn about interfaces in AL, including default method implementations and the RequiredPending attribute for evolving interfaces safely.
- [Type testing and casting operators for interfaces in AL](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-interfaces-in-al-operators): Learn how to use the `is` and `as` operators for type testing and casting interfaces in AL for Business Central.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [Another Look at App Integration in Business Central – Part 2](../../../../../posts/jpearson-blog/1419.md) (community post): "Apps can integrate without direct dependencies by implementing interfaces defined in a shared app integration layer"
- [Evolve AL Interfaces with Default Implementations in Business Central 29.0](../../../../../posts/sauravdhyani-com/tag:blogger.com,1999:blog-3122193036149030463.post-8721347757329141815.md) (community post): "Interfaces can now provide default method bodies, preventing immediate breaking changes"
- [Business Central 29 0 Default Implementations in AL Interfaces](../../../../../videos/H_PHi8pe53w.md) (video): "default implementation for al interfaces; required pending attribute"
- [What's New: AL - Interfaces (2024 release wave 2)](../../../../../videos/PHmFqehrPG4.md) (video): "Interface Extension; Type Checking with Is Operator for Interfaces; Interface Casting with As Operator"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
