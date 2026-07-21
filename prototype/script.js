/* Purpose: deterministic, client-only interactions for the static portfolio prototype; no AI or network calls occur here. */

const recommendations = {
  orient: {
    title: "Take one familiar walk",
    summary: "Choose a short route near where you are staying and notice two places you may want to revisit.",
    why: "Repeating a simple route can make a new area feel more predictable without requiring a big commitment.",
    items: ["Pick a daytime route that feels comfortable.", "Notice one practical place, such as a shop or transit stop.", "Save one question to verify later with an official local source."],
  },
  connect: {
    title: "Try one public community activity",
    summary: "Look for a low-pressure public activity that matches an interest you already enjoy.",
    why: "A structured activity can make a first conversation feel easier than starting from scratch.",
    items: ["Choose an activity with a clear time and location.", "Check current details directly with the organizer.", "Set a small goal, such as staying for the first 20 minutes."],
  },
  essentials: {
    title: "Make one essentials checklist",
    summary: "Write down the single practical task that would reduce the most friction this week.",
    why: "Breaking an unfamiliar administrative task into a short list can make it easier to begin and verify.",
    items: ["Name the task in one sentence.", "Find the official source of current information.", "Schedule one 15-minute step to prepare."],
  },
};

const defaultGoal = "orient";
const title = document.querySelector("#response-heading");
const responseContext = document.querySelector("#response-context");
const summary = document.querySelector("#response-summary");
const why = document.querySelector("#response-why");
const checklist = document.querySelector("#checklist");
const safetyNote = document.querySelector("#safety-note");
const progressStatus = document.querySelector("#progress-status");
const goalButtons = document.querySelectorAll(".goal-card");

function renderGoal(goal) {
  const content = recommendations[goal];
  title.textContent = content.title;
  responseContext.textContent = `Illustrative response for: ${document.querySelector(`[data-goal="${goal}"] span:not(.goal-icon)`).textContent}`;
  summary.textContent = content.summary;
  why.textContent = content.why;
  safetyNote.textContent = "Illustrative planning content only. Verify time-sensitive local details with official sources.";
  checklist.innerHTML = "";

  content.items.forEach((item, index) => {
    const id = `${goal}-item-${index}`;
    const row = document.createElement("li");
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    const text = document.createElement("span");

    checkbox.id = id;
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", updateProgress);
    text.textContent = item;
    label.htmlFor = id;
    label.append(checkbox, text);
    row.appendChild(label);
    checklist.appendChild(row);
  });

  goalButtons.forEach((button) => {
    const selected = button.dataset.goal === goal;
    button.classList.toggle("is-selected", selected);
    button.setAttribute("aria-pressed", String(selected));
  });

  updateProgress();
}

function updateProgress() {
  const items = checklist.querySelectorAll('input[type="checkbox"]');
  const completed = checklist.querySelectorAll('input[type="checkbox"]:checked').length;
  progressStatus.textContent = `${completed} of ${items.length} complete`;
}

goalButtons.forEach((button) => {
  button.addEventListener("click", () => renderGoal(button.dataset.goal));
});

document.querySelector("#reset-button").addEventListener("click", () => renderGoal(defaultGoal));

renderGoal(defaultGoal);
