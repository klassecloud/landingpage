---
title: "Contributing"
date: 2020-06-01T09:18:12+02:00
draft: true
menu: "main"
layout: "markdown"
---

# Contributing to klasse.cloud

## Requesting new features

If you have an idea about a cool new feature you would like to have in klasse.cloud, please look into our feature requests backlog first. Maybe someone else had the same or a similar idea. If that’s the case you can support that feature request by clicking the thumps up button on the feature request. The team will consider those votes for prioritization of feature requests. If another feature request is similar to your idea and differs slightly please leave a comment explaining what you would like to see implemented and why you think your approach is better.

## Reporting a bug

If you run into trouble with klasse.cloud you can report those issues on TBD. Please be as detailed as possible describing how you ran into this issue. As with new feature requests please look if your issue has already been reported and feel free to contribute more information. Do not think too hard if your additional information will be useful, the resolution of bugs is usually not delayed by an abundance of description :)

## Development Workflow

First and foremost: As any project a lot of communication is required, this is especially true for open source. Please talk to each other, preferrably via voice chat, and do not completely rely on this model. It exists as a guideline to make it easier for new people to join and contribute to this project. For instance: If you as a developer do not understand some aspects of the design you should try to contact the designer directly if possible instead of demoting the issue back to design.

![Missing image](/image/development-workflow.jpg)

_Open_ feature requests are discussed by the core team **once per month on a team call (?)**, a reasonable number of requests given the current number of people working on the project and the number of requests currently being worked on are going to get prioritized and promoted to _Accepted_ state.  

A designer can pick one of these up and create a user journey for the requested feature or describe how this feature should modify an existing user journey. Once she/he is done the feature request will be promoted to _Ready_ state.  

A developer can pick it up and start working on the feature request. Once the developer is done the feature request the developer will create a pull request and update the feature request to the _Implemented_ state. Please consider our development guidelines for your pull requests. **TODO** Link to development guidelines.  

**Another** developer will pick up pending code reviews and either merge the pull request or give feedback to the developer if the pull request cannot be merged yet. After a merge the state will be updated to _Merged_.  

At this point the designer can pick it up again and check if the implementation matches the design and works well. The designer will either accept the solution and promote the feature request to the _Preview_ state or give feedback to the developer if further changes are necessary.  

The preview will be made available to the author of the feature request for a final acceptance test. Once the result has been accepted by the feature request should be promoted to the _Complete_ state.  

The core team will create bundles of completed feature requests and decide when and how to release the feature to the public. After the public release the feature request will be _Closed_.

## Components

The most important components of our project are the core-ui library, the student- and teacher application and the shared backend (API):

![Missing image](/image/components.jpg)

## Coding Guidelines

You can find more information like code style in our project specific CONTRIBUTING.md on [Github](https://github.com/klassecloud)
