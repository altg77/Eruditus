const cursos = [
    {
        id: 1,
        title: "Lógica de Programação",
        subtitle: "Pensando como um programador desde o início.",
        description: "Desenvolva habilidades de raciocínio lógico e aprenda os fundamentos da programação de forma prática e acessível. Este curso é ideal para iniciantes que desejam construir a base para qualquer linguagem de programação.",
        imagem: "/Frontend/img/cards/2.png",
        lammecs: ["lancamentos", "Cursos-longo-periodo", "Meus-cursos"],
        categoria: "programação",
        metadata: {
            anoLancamento: 2005, 
            temporadas: 5, 
            episodios: 24
        },
        tags: ["6 Atividades", "17 Horas de vídeo", "14 recursos", "Certificado"],
    },
];

function gerarCards() {
    const container = document.querySelector("#cards-container");

    cursos.forEach(curso => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="${curso.imagem}" alt="Curso ${curso.categoria}">
        `;

        // Adicionar evento de clique para redirecionar
        const urlParams = new URLSearchParams();
        card.addEventListener("click", () => {
            urlParams.append('id', curso.id);
            urlParams.append('title', curso.title);
            urlParams.append('imagem', curso.imagem); 
            urlParams.append('categoria', curso.categoria);
            urlParams.append('description', curso.description);
            urlParams.append('metadata', JSON.stringify(curso.metadata)); 
            urlParams.append('tags', curso.tags.join(", "));

            const newUrl = `/Frontend/detalhes.html?${urlParams.toString()}`;
            window.location.href = newUrl;
        });

        container.appendChild(card);
    });
}
