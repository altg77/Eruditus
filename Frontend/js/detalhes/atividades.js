const activities = [
    "Atividade 1: Introdução às vendas",
    "Atividade 2: Técnicas de negociação",
    "Atividade 3: Como superar objeções",
    "Atividade 4: Relacionamento com clientes",
    "Atividade 5: Estratégias de fidelização",
    "Atividade 6: Prática de vendas ao vivo"
];

function showActivities() {
    const contentList = document.querySelector(".content-list");
    contentList.innerHTML = ""; // Limpa o conteúdo atual

    activities.forEach(activity => {
        const activityElement = document.createElement("div");
        activityElement.classList.add("activity");
        activityElement.textContent = activity;
        contentList.appendChild(activityElement);
    });
}
