const cursos = [
    // Lançamentos
    { id: 111, lamecc: "Lancamentos", Categorias: "Negocios" , imagem: "/Frontend/img/cards/14.png", link: "/Frontend/detalhes.html" },
    { id: 121, lamecc: "Lancamentos", Categorias: "Programacao", imagem: "/Frontend/img/cards/2.png" },
    { id: 131, lamecc: "Lancamentos", Categorias: "Marketing", imagem: "/Frontend/img/cards/7.png" },
    { id: 141, lamecc: "Lancamentos", Categorias: "Ensino e estudo academico", imagem: "/Frontend/img/cards/18.png" },
    { id: 151, lamecc: "Lancamentos", Categorias: "Fotografia e video", imagem: "/Frontend/img/cards/4.png" },
    { id: 161, lamecc: "Lancamentos", Categorias: "Programacao", imagem: "/Frontend/img/cards/10.png" },
    { id: 161, lamecc: "Lancamentos", Categorias: "Ciencia de dados", imagem: "/Frontend/img/cards/13.png" },

    // Meus Cursos
    { id: 212, lamecc: "Meus Cursos", Categorias: "Fotografia e video", imagem: "/Frontend/img/cards/16.png" },
    { id: 222, lamecc: "Meus Cursos", Categorias: "Marketing", imagem: "/Frontend/img/cards/7.png" },
    { id: 232, lamecc: "Meus Cursos", Categorias: "Programacao", imagem: "/Frontend/img/cards/2.png" },
    { id: 242, lamecc: "Meus Cursos", Categorias: "Negocios", imagem: "/Frontend/img/cards/3.png" },
    { id: 252, lamecc: "Meus Cursos", Categorias: "Programacao", imagem: "/Frontend/img/cards/10.png" },
    { id: 262, lamecc: "Meus Cursos", Categorias: "Design", imagem: "/Frontend/img/cards/6.png" },

    // Em Alta
    { id: 313, lamecc: "Em alta", Categorias: "Programacao", imagem: "/Frontend/img/cards/10.png" },
    { id: 323, lamecc: "Em alta", Categorias: "Ensino e estudo academico", imagem: "/Frontend/img/cards/12.png" },
    { id: 333, lamecc: "Em alta", Categorias: "Ciencia de dados", imagem: "/Frontend/img/cards/13.png" },
    { id: 343, lamecc: "Em alta", Categorias: "Negocios", imagem: "/Frontend/img/cards/14.png" },
    { id: 353, lamecc: "Em alta", Categorias: "Ti e Software", imagem: "/Frontend/img/cards/15.png" },

    // Cursos Curto Período
    { id: 414, lamecc: "Cursos curto periodo", Categorias: "Programacao", imagem: "/Frontend/img/cards/2.png" },
    { id: 424, lamecc: "Cursos curto periodo", Categorias: "Negocios", imagem: "/Frontend/img/cards/3.png" },
    { id: 434, lamecc: "Cursos curto periodo", Categorias: "Fotografia e video", imagem: "/Frontend/img/cards/4.png" },
    { id: 444, lamecc: "Cursos curto periodo", Categorias: "Marketing", imagem: "/Frontend/img/cards/7.png" },
    { id: 454, lamecc: "Cursos curto periodo", Categorias: "Saude e fitness", imagem: "/Frontend/img/cards/19.png" },
    { id: 464, lamecc: "Cursos curto periodo", Categorias: "Desenvolvimento Pessoal", imagem: "/Frontend/img/cards/8.png" },
    { id: 474, lamecc: "Cursos curto periodo", Categorias: "Desenvolvimento Pessoal", imagem: "/Frontend/img/cards/20.png" },


    // Cursos Longo Período
    { id: 515, lamecc: "Cursos longo periodo", Categorias: "Programacao", imagem: "/Frontend/img/cards/10.png" },
    { id: 525, lamecc: "Cursos longo periodo", Categorias: "Ciencia de dados", imagem: "/Frontend/img/cards/13.png" },
    { id: 535, lamecc: "Cursos longo periodo", Categorias: "Ensino e estudo academico", imagem: "/Frontend/img/cards/18.png" },
    { id: 545, lamecc: "Cursos longo periodo", Categorias: "Ensino e estudo academico", imagem: "/Frontend/img/cards/12.png" },
    { id: 555, lamecc: "Cursos longo periodo", Categorias: "Fotografia e video", imagem: "/Frontend/img/cards/16.png" },
    { id: 565, lamecc: "Cursos longo periodo", Categorias: "Financas e contabilidade", imagem: "/Frontend/img/cards/11.png" },
    { id: 575, lamecc: "Cursos longo periodo", Categorias: "Ciencia de dados", imagem: "/Frontend/img/cards/21.png" },
    { id: 585, lamecc: "Cursos longo periodo", Categorias: "Design", imagem: "/Frontend/img/cards/22.png" },
];

function gerarCards() {
    const fragmentos = {};

    // Criar fragmentos para cada categoria
    cursos.forEach(curso => {
        const containerId = curso.lamecc.toLowerCase().replace(/ /g, "-");
        if (!fragmentos[containerId]) fragmentos[containerId] = document.createDocumentFragment();

        const card = document.createElement("div");
        card.className = "card";
        if (curso.link) card.setAttribute("onclick", `window.location.href='${curso.link}'`);
        card.innerHTML = `<img src="${curso.imagem}" alt="Curso ${curso.categoria}">`;

        fragmentos[containerId].appendChild(card);
    });

    // Adicionar os fragmentos aos contêineres
    for (const [containerId, fragmento] of Object.entries(fragmentos)) {
        const container = document.querySelector(`#${containerId}`);
        if (container) container.appendChild(fragmento);
    }
}

const carrosselIndices = {};

function updateCarouselButtons(lamecc) {
    const carousel = document.querySelector(`#${lamecc}`);
    const cards = carousel.querySelectorAll(".card");
    if (cards.length === 0) return;

    const cardWidth = cards[0].offsetWidth;
    const visibleCards = Math.floor(carousel.offsetWidth / cardWidth);
    const totalCards = cards.length;

    const currentIndex = carrosselIndices[lamecc] || 0;
    const prevButton = document.querySelector(`.prev[onclick*="${lamecc}"]`);
    const nextButton = document.querySelector(`.next[onclick*="${lamecc}"]`);

    // Atualiza a visibilidade dos botões
    prevButton.style.display = currentIndex > 0 ? "block" : "none";
    nextButton.style.display = currentIndex < totalCards - visibleCards ? "block" : "none";
}

function moveCarousel(direction, lamecc) {
    const carousel = document.querySelector(`#${lamecc}`);
    if (!carousel) return;

    const cards = carousel.querySelectorAll(".card");
    if (cards.length === 0) return;

    const cardWidth = cards[0].offsetWidth + 10;  // Adicionando a margem no cálculo
    const totalCards = cards.length;
    const visibleCards = Math.floor(carousel.offsetWidth / cardWidth);

    if (!carrosselIndices[lamecc]) carrosselIndices[lamecc] = 0;

    carrosselIndices[lamecc] += direction;

    // Limitar o índice
    const maxIndex = Math.max(0, totalCards - visibleCards);
    carrosselIndices[lamecc] = Math.min(Math.max(carrosselIndices[lamecc], 0), totalCards - visibleCards);

    const translateX = carrosselIndices[lamecc] * cardWidth;
    carousel.style.transform = `translateX(-${translateX}px)`;

    updateCarouselButtons(lamecc);
}

// Inicializar os cards
document.addEventListener("DOMContentLoaded", () => {
    gerarCards();
    ["lancamentos", "meus-cursos", "em-alta", "cursos-curto-periodo", "cursos-longo-periodo"].forEach(lamecc => {
        updateCarouselButtons(lamecc);
    });
});
