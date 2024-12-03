const lives = {title: "Live: Aula 1", desc: "Desenvolva melhor seus conhecimentos.", img: "path/to/image1.jpg"};

const episodes = {
    1: [
        { title: "Episódio 1: Introdução", desc: "Descubra os fundamentos das vendas de impacto.", img: "path/to/image1.jpg" },
        { title: "Episódio 2: Técnicas Avançadas", desc: "Aprofunde-se em estratégias eficazes.", img: "path/to/image2.jpg" }
    ],
    2: [
        { title: "Episódio 1: Relacionamentos Comerciais", desc: "Construa confiança com os clientes.", img: "path/to/image3.jpg" },
        { title: "Episódio 2: Objeções e Soluções", desc: "Aprenda a superar objeções facilmente.", img: "path/to/image4.jpg" }
    ]
};

function showEpisodes() {
    const season = document.getElementById("season-select").value;
    const contentList = document.querySelector(".content-list");
    contentList.innerHTML = ""; // Limpa o conteúdo atual

     // Alterar a navegação para Episódios ao selecionar a temporada
     document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('selected');
    });

     // Adiciona a classe "selected" no item de Episódios
     const episodeNavItem = document.querySelector('.nav-item[href="#episodios"]');
     episodeNavItem.classList.add('selected');

    episodes[season].forEach(episode => {
        const episodeElement = document.createElement("div");
        episodeElement.classList.add("episode");

        episodeElement.innerHTML = `
            <img src="${episode.img}" alt="${episode.title}">
            <div class="episode-info">
                <div class="episode-title">${episode.title}</div>
                <div class="episode-desc">${episode.desc}</div>
            </div>
        `;
        contentList.appendChild(episodeElement);
    });
}
