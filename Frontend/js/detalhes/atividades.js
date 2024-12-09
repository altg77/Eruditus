const activities = [
    "Atividade 1",
    "Atividade 2",
    "Atividade 3",
];

const evaluations = [
    "Avaliação 1: Teorica",
    "Avaliação 2: Pratica",
];

function showActivities() {
    const selectValue = document.getElementById("content-select").value; // Obtém o valor do select
    const contentList = document.querySelector(".content-list");
    contentList.innerHTML = ""; // Limpa o conteúdo atual

    if (selectValue === "activities") {
        // Exibe atividades
        const titleElement = document.createElement("h3");
        titleElement.textContent = "Atividades";
        contentList.appendChild(titleElement);
        activities.forEach(activity => {
            const activityElement = document.createElement("div");
            activityElement.classList.add("activity");
            activityElement.textContent = activity;
            contentList.appendChild(activityElement);
        });
    } else if (selectValue === "evaluations") {
        // Exibe avaliações
        const titleElement = document.createElement("h3");
        titleElement.textContent = "Avaliações";
        contentList.appendChild(titleElement);
        evaluations.forEach(evaluation => {
            const evaluationElement = document.createElement("div");
            evaluationElement.classList.add("activity");
            evaluationElement.textContent = evaluation;
            contentList.appendChild(evaluationElement);
        });
    } else {
        // Exibe tudo (Atividades + Avaliações)
        const titleElementActivities = document.createElement("h3");
        titleElementActivities.textContent = "Atividades";
        contentList.appendChild(titleElementActivities);
        activities.forEach(activity => {
            const activityElement = document.createElement("div");
            activityElement.classList.add("activity");
            activityElement.textContent = activity;
            contentList.appendChild(activityElement);
        });

        const titleElementEvaluations = document.createElement("h3");
        titleElementEvaluations.textContent = "Avaliações";
        contentList.appendChild(titleElementEvaluations);
        evaluations.forEach(evaluation => {
            const evaluationElement = document.createElement("div");
            evaluationElement.classList.add("activity");
            evaluationElement.textContent = evaluation;
            contentList.appendChild(evaluationElement);
        });
    }
}