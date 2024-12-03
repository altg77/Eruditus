const activities = [
    "Atividade 1: Introdução às vendas",
    "Atividade 2: Técnicas de negociação",
    "Atividade 3: Como superar objeções",
    "Atividade 4: Relacionamento com clientes",
    "Atividade 5: Estratégias de fidelização",
    "Atividade 6: Prática de vendas ao vivo"
];

const evaluations = [
    "Avaliação 1: Desempenho em vendas",
    "Avaliação 2: Capacidade de negociação",
    "Avaliação 3: Feedback de clientes",
    "Avaliação 4: Análise de metas"
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