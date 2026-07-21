# Product requirements document (PRD)

<!-- Purpose: defines the smallest portfolio-prototype scope, requirements, and open decisions. -->

## Goal

Demonstrate a safe, understandable AI-assisted planning experience for a newcomer choosing a first settling-in task.

## MVP scenario

A visitor chooses one of three fictional goals (getting oriented, meeting people, or setting up essentials). The prototype displays a tailored, prewritten suggestion, an explanation, a practical checklist, and a safety note.

## User stories

| User story | Acceptance criteria |
| --- | --- |
| As a newcomer, I want to choose a broad goal so I do not have to start with a blank prompt. | Three visible goal buttons can be selected with mouse or keyboard. |
| As a newcomer, I want a concise next step so I can begin. | Selecting a goal updates the response panel with one recommended action and a checklist. |
| As a cautious user, I want to know the limits of the suggestion. | Each response includes a visible concept/safety disclosure. |
| As a portfolio reviewer, I want to understand the interaction without an account. | The prototype works locally with no sign-in, network call, or build step. |

## Functional requirements

1. Render an accessible static landing page with goal choices.
2. Update the recommendation content deterministically when a goal is selected.
3. Allow a visitor to mark checklist items complete for the current browser session.
4. Provide a reset control that returns the default state.
5. Never transmit, persist, or request personal information.

## Out of scope

- Live LLM generation, search, maps, geolocation, accounts, saved plans, and data collection.
- City-specific factual claims, official-service referrals, and professional advice.

## Content requirements

- Label all recommendations as illustrative prototype content.
- Use fictional, low-stakes examples only.
- Include a clear escalation statement for urgent, legal, immigration, medical, or financial concerns.

## Measurement plan — TODO

TODO: Define task-completion, comprehension, and safety-perception measures after usability research. See [evaluation plan](evaluation-plan.md).

## Product trade-offs

The prototype prioritizes safety and explainability over realism. Prewritten responses cannot adapt to an individual or provide current local resources, but they let a reviewer examine the interaction without the risk of a model inventing facts. See the [decision log](decision-log.md) for the full rationale and conditions for revisiting these choices.
