# Newcomer Compass

## AI Product Brief

### Product vision

Newcomer Compass is an AI assistant that helps newcomers to Canada prepare for common public-service interactions with greater confidence.

It does not replace official government guidance, legal advice or human support. Instead, it helps users understand what they may need to prepare, identify useful questions to ask and recognize when they should consult an official source or qualified professional.

---

## 1. Problem statement

Newcomers often need to navigate unfamiliar public services while adapting to a new country, language and administrative system.

Information may be spread across multiple websites, written in complex language or difficult to apply to an individual situation. As a result, users may arrive at appointments without the right documents, misunderstand the next step or rely on advice that is incomplete or outdated.

Newcomer Compass aims to reduce this preparation gap without presenting itself as an authoritative decision-maker.

---

## 2. Target users

### Primary users

Newcomers to Canada who are preparing for common public-service interactions, including:

* Permanent residents and temporary residents
* International students
* Refugees and protected persons
* Sponsored family members
* Newcomers with limited familiarity with Canadian systems
* Users who speak English or French as an additional language

### Secondary users

* Settlement workers
* Community organizations
* Libraries and newcomer support centres
* Family members helping a newcomer
* Public-service teams seeking to improve appointment readiness

---

## 3. User pain points

Newcomers may experience:

* Difficulty understanding complex government terminology
* Uncertainty about which documents to prepare
* Confusion caused by information spread across multiple sources
* Anxiety about asking the wrong questions or missing an important step
* Limited awareness of available community and human support
* Difficulty distinguishing official guidance from informal online advice
* Language, accessibility or digital-literacy barriers
* Fear that making a mistake could affect their application, benefits or legal status

---

## 4. Product hypothesis

We believe that providing newcomers with personalized preparation guidance, plain-language explanations and clear links to official or human support will help them feel more confident and arrive better prepared for public-service interactions.

We will know this is working when users can:

* Identify the documents they may need
* Explain the purpose of their next interaction
* Prepare relevant questions in advance
* Recognize when AI guidance is insufficient
* Successfully continue to an official source or human support channel

The product is designed to improve preparedness and confidence, not to guarantee eligibility, approval or service outcomes.

---

## 5. Why AI is appropriate

AI is appropriate where the user’s need involves interpretation, preparation and navigation rather than authoritative decision-making.

It can help:

* Translate complex language into plain language
* Ask follow-up questions to understand the user’s situation
* Generate a personalized preparation checklist
* Suggest questions the user may want to ask
* Summarize information from approved sources
* Identify uncertainty or missing information
* Guide users toward the most relevant official or human channel
* Support multiple languages and literacy levels

The value of AI is its ability to turn fragmented information into a more conversational and understandable preparation experience.

---

## 6. Where AI should not be used

Newcomer Compass should not:

* Determine immigration status or eligibility
* Provide legal, medical, financial or tax advice
* Predict whether an application will be approved
* Complete or submit government forms on the user’s behalf
* Interpret laws or policies as a qualified professional
* Make decisions about benefits, housing, employment or immigration cases
* Present generated content as official government guidance
* Recommend that users withhold information from authorities
* Provide confident answers when the available information is incomplete or uncertain

In high-risk situations, the product should stop generating personalized guidance and direct the user to an official source, settlement professional or qualified expert.

---

## 7. MVP scope

The MVP will focus on helping users prepare for a small number of common, relatively low-risk public-service interactions.

### Initial use cases

* Applying for or updating a health card
* Applying for a Social Insurance Number
* Preparing for a driver’s licence or identification appointment
* Registering a child for public school
* Preparing for an appointment with a settlement organization

### Core MVP capabilities

* Select a service or describe the upcoming interaction
* Answer a short set of contextual questions
* Receive a plain-language explanation of the process
* Generate a personalized preparation checklist
* Generate suggested questions to ask
* View clearly labelled official-source links
* Receive warnings when information may vary by province, status or situation
* Escalate to human or official support
* Provide feedback on the usefulness and clarity of the response

---

## 8. Out-of-scope items

The MVP will not include:

* Immigration application advice
* Refugee claim guidance
* Legal case interpretation
* Medical diagnosis or treatment advice
* Tax filing or financial planning
* Automated form completion or submission
* Document verification
* Eligibility decisions
* Appointment booking
* Storage of sensitive identity documents
* Integration with government databases
* Open-ended answers based on unrestricted internet content
* Full coverage of every province, territory and public service

---

## 9. Key user journey

### 1. Select a goal

The user selects a common interaction or describes what they are trying to prepare for.

### 2. Set expectations

The product explains that it provides preparation support, not official advice or eligibility decisions.

### 3. Gather context

The assistant asks only the questions required to make the guidance useful, such as province, age group, general residency category or whether the user already has certain documents.

### 4. Create a preparation plan

The user receives:

* A plain-language overview
* A personalized document checklist
* Questions they may want to ask
* Potential gaps or uncertainties
* Links to relevant official sources

### 5. Escalate when necessary

The assistant identifies situations requiring official confirmation, a settlement worker or professional support.

### 6. Confirm readiness

The user reviews the checklist and indicates whether they feel ready for the interaction.

### 7. Collect feedback

The product asks whether the guidance was clear, useful and consistent with the user’s eventual experience.

---

## 10. Success metrics

### North-star metric

**Percentage of users who report feeling prepared to complete their next public-service interaction after using Newcomer Compass.**

### User outcome metrics

* Preparation-confidence improvement
* Checklist completion rate
* Percentage of users who can identify their next step
* Percentage of users who successfully reach an official or human support source
* Self-reported reduction in confusion
* Repeat usage for another service interaction

### Product metrics

* Journey completion rate
* Drop-off by step
* Time to useful guidance
* Official-source link engagement
* Human-escalation acceptance rate
* Response usefulness rating
* Response clarity rating

### Trust and safety metrics

* Unsupported-claim rate
* Incorrect-source attribution rate
* High-risk response failure rate
* Appropriate escalation rate
* Percentage of responses displaying relevant limitations
* User reports of misleading or overconfident guidance

Success should not be measured by maximizing conversation length or reducing human-support usage.

---

## 11. Risks and guardrails

### Hallucinated or inaccurate guidance

**Risk:** The AI may generate incorrect requirements or outdated instructions.

**Guardrails:**

* Use a controlled set of approved sources
* Display the source and date where possible
* Avoid answering when a reliable source is unavailable
* Encourage users to confirm final requirements officially
* Regularly review source freshness

### Overreliance on AI

**Risk:** Users may treat the assistant as an official authority.

**Guardrails:**

* Clearly label the product as a preparation tool
* Repeat limitations at high-impact moments
* Avoid authoritative language such as “you qualify” or “you will be approved”
* Provide visible official and human-support pathways

### Sensitive personal information

**Risk:** Users may share immigration numbers, health information or identity documents.

**Guardrails:**

* Ask for the minimum information necessary
* Warn users not to enter document numbers or upload identification
* Avoid storing conversation data by default
* Detect and redact sensitive information where possible
* Provide clear privacy explanations

### Unequal performance across users

**Risk:** Guidance may be less accurate or understandable for certain languages, literacy levels or newcomer groups.

**Guardrails:**

* Test with diverse newcomer communities
* Use plain-language standards
* Evaluate performance separately by language and user group
* Offer accessible alternatives and human escalation
* Avoid assuming cultural or digital familiarity

### Jurisdictional differences

**Risk:** Requirements may vary by province, municipality or residency situation.

**Guardrails:**

* Ask for location when relevant
* Clearly identify when guidance is location-specific
* Avoid generalizing provincial processes
* Escalate when the user’s context falls outside verified coverage

---

## 12. Evaluation approach

Evaluation will combine technical performance, user outcomes and responsible-AI measures.

### Offline evaluation

Create a test set covering:

* Supported service journeys
* Different provinces and user circumstances
* Ambiguous or incomplete questions
* Requests for legal or eligibility advice
* Attempts to share sensitive information
* Outdated or conflicting source information
* Multiple languages and reading levels

Responses will be scored against criteria including:

* Factual accuracy
* Source grounding
* Completeness
* Plain-language clarity
* Appropriate uncertainty
* Correct escalation
* Privacy protection
* Absence of prohibited advice

### Expert review

Settlement workers, service-navigation experts and subject-matter reviewers will assess whether guidance is useful, safe and appropriately limited.

### User testing

Moderated usability sessions will explore:

* Whether users understand the product’s role
* Whether questions feel respectful and relevant
* Whether the checklist improves readiness
* Whether users can identify official next steps
* Whether users know when to seek human help

### Pilot evaluation

A limited pilot with one or two community organizations will measure:

* User confidence before and after the experience
* Appointment-preparation quality
* Common failure points
* Accuracy of escalation
* Differences across language and user groups

High-risk failures will be treated as release-blocking issues rather than averaged into a general quality score.

---

## 13. Future roadmap

### Phase 1: Validate the preparation experience

* Launch a small set of service journeys
* Test plain-language explanations and checklists
* Validate trust, clarity and escalation patterns
* Establish baseline safety and quality metrics

### Phase 2: Expand accessibility and coverage

* Add more provinces and territories
* Introduce multilingual support
* Add voice and read-aloud capabilities
* Improve accessibility for users with lower digital literacy
* Add service-specific community resources

### Phase 3: Support community organizations

* Create a settlement-worker companion view
* Allow organizations to review or customize approved guidance
* Provide anonymized insights into recurring user challenges
* Support referral pathways to local services

### Phase 4: Personalized readiness support

* Allow users to save non-sensitive preparation plans
* Provide reminders for appointments and missing documents
* Support multi-step service journeys
* Let users return and update their checklist as circumstances change

### Phase 5: Trusted ecosystem integrations

* Explore partnerships with public agencies and settlement organizations
* Introduce verified content-update workflows
* Enable direct handoffs to official service channels
* Develop governance standards for adding new services and jurisdictions

Expansion should be driven by demonstrated user need, source reliability and the ability to maintain safety, not by the number of topics the assistant can answer.
