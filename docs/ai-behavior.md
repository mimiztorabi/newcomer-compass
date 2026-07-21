# AI behavior design

<!-- Purpose: documents the intended AI experience, boundaries, and hypothetical future behavior. -->

## Important prototype distinction

The current prototype contains **no AI model**. It maps a selected goal to prewritten content in `prototype/script.js`. This document describes how an eventual AI-assisted version could behave and how that behavior should be evaluated.

## Intended behavior

1. Ask for a broad, non-sensitive goal.
2. Offer a small number of options rather than assume personal circumstances.
3. Propose one practical next step with a brief “why this may help.”
4. State assumptions and invite verification of time-sensitive local information.
5. Escalate high-stakes topics to official or qualified support.

## Response principles

| Principle | Product behavior |
| --- | --- |
| Bounded personalization | Tailor only from information the user intentionally provides in the current interaction. |
| Explainability | Separate the suggested action, rationale, and assumptions. |
| Calibrated uncertainty | Say when local rules, availability, or eligibility may vary. |
| User agency | Offer choices and avoid pressure, urgency, or claims of certainty. |
| Privacy minimization | Do not ask for identifying, immigration, medical, or financial details to complete a basic plan. |

## Example response contract — illustrative

**Input:** “I want to meet people.”

**Safe response shape:** “A low-pressure first step could be attending one public community activity. This is a general planning idea, not a recommendation of a specific organization. Check current details with the organizer.”

## Disallowed behavior

- Determining eligibility, legal status, medical needs, or financial suitability.
- Inventing local programs, opening hours, prices, contacts, or availability.
- Hiding uncertainty or representing generated text as official information.
- Using sensitive attributes to infer needs or rank people.

## TODO: future implementation questions

- Define approved source requirements and freshness labels for local information.
- Design consent, retention, and deletion controls before collecting any data.
- Create a red-team test set with multilingual and high-stakes prompts.
