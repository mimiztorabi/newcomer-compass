# Risks and guardrails

<!-- Purpose: makes foreseeable harms explicit and records the product boundaries that reduce them. -->

| Risk | Why it matters | Guardrail in this concept | TODO: evidence needed |
| --- | --- | --- | --- |
| Incorrect local information | Rules and services change, and bad guidance can waste time or cause harm. | Prototype makes no city-specific factual claims; a future product would cite and date approved sources. | Validate source governance and freshness expectations. |
| High-stakes reliance | Users may treat AI output as legal, medical, immigration, or financial advice. | Prominent boundaries; no determinations; encourage official or qualified support. | Test whether users notice and understand escalation guidance. |
| Privacy over-collection | Newcomers may feel pressured to share sensitive circumstances. | Goal choices avoid personal data; static prototype stores nothing. | Define data-minimization review before any data collection. |
| Bias or exclusion | Suggestions can assume language, income, ability, or cultural norms. | Use neutral, optional actions and test varied scenarios. | Recruit diverse research participants and define fairness checks. |
| Overconfidence | Fluent text can sound more certain than evidence warrants. | Separate recommendation from rationale and state uncertainty. | Measure calibrated trust in usability sessions. |
| Scope creep | A portfolio prototype could be mistaken for a deployable service. | README and UI label the work as fictional, illustrative, and static. | Confirm public portfolio framing with reviewers. |

## Escalation language

For urgent safety concerns, contact local emergency services. For legal, immigration, medical, or financial questions, consult an official source or qualified professional. This concept should not attempt to answer those questions.

## Review checklist — TODO

- [ ] Confirm all examples are fictional and non-sensitive.
- [ ] Confirm no external requests, storage, or tracking were introduced.
- [ ] Test disclosure readability on desktop and mobile.
- [ ] Record open safety issues before sharing as a portfolio artifact.
