# Decision log

<!-- Purpose: records important scope and design trade-offs so portfolio reviewers can follow the product reasoning. -->

| Decision | Options considered | Chosen approach | Trade-off | Revisit when |
| --- | --- | --- | --- | --- |
| How a user begins | Open-ended chat; guided goal choices | Three low-stakes goal choices | Less expressive, but easier to understand and safer for a first concept. | Research shows users need goals not represented here. |
| How recommendations are produced | Live model; static sample content | Deterministic, prewritten content | Does not demonstrate generative variation, but prevents unsupported claims in a public demo. | Source governance, evaluation, and privacy controls are defined. |
| Local specificity | City-specific resources; general planning actions | General actions with verification prompts | Less immediately useful, but avoids stale or invented local facts. | Trusted sources and freshness rules exist. |
| Data handling | Saved profiles; no collection | No accounts, tracking, or storage | Cannot create long-term plans, but respects privacy and keeps GitHub Pages hosting safe. | A validated user need and consent model justify collection. |
| Scope of advice | Broad life guidance; bounded planning | Low-stakes next steps only | Some needs are intentionally unmet, but high-stakes harm is reduced. | Escalation pathways are validated with domain experts. |

## How to use this log

TODO: Add dated decisions, the evidence that informed them, the decision owner, and the result of revisiting them. This template intentionally separates a design choice from proof that the choice is correct.
