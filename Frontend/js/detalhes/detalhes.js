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

function loadEpisodes() {
    const season = document.getElementById("season-select").value;
    const episodeList = document.querySelector(".episode-list");
    episodeList.innerHTML = ""; // Limpa a lista atual

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

        episodeList.appendChild(episodeElement);
    });
}

// Carrega a primeira temporada ao carregar a página
window.onload = loadEpisodes;
v